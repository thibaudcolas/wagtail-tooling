#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "httpx",
# ]
# ///

import os
import concurrent.futures
from urllib.parse import urlparse
import httpx


def get_domain_from_url(url):
    """Extract domain from URL."""
    parsed = urlparse(url)
    domain = parsed.netloc or parsed.path
    return domain.rstrip('/')


def check_llms_txt(url):
    """Check if /llms.txt exists and returns text/plain content."""
    domain = get_domain_from_url(url)
    llms_url = f"https://{domain}/llms.txt"

    try:
        with httpx.Client(timeout=30.0, follow_redirects=True) as client:
            response = client.get(llms_url)

            if response.status_code == 200:
                content_type = response.headers.get('content-type', '').lower()
                # Loose match for text/plain (handles variations like text/plain; charset=utf-8)
                if 'text/plain' in content_type:
                    print(f"[FOUND] {domain}/llms.txt - {content_type}")
                    return domain, True, content_type
                else:
                    print(f"[WRONG TYPE] {domain}/llms.txt - {content_type}")
                    return domain, False, content_type
            else:
                print(f"[NOT FOUND] {domain}/llms.txt - HTTP {response.status_code}")
                return domain, False, None
    except Exception as e:
        print(f"[ERROR] {domain}/llms.txt - {e}")
        return domain, False, None


def main():
    if not os.path.exists("urls.txt"):
        print("urls.txt not found in the current directory.")
        return

    with open("urls.txt", "r") as f:
        urls = [line.strip() for line in f if line.strip()]

    total = len(urls)
    print(f"Found {total} URLs to check for /llms.txt")
    print(f"Using 20 workers for concurrent checking\n")

    # Use ThreadPoolExecutor for concurrent checking
    found_urls = []
    not_found_urls = []
    error_urls = []

    completed = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        future_to_url = {
            executor.submit(check_llms_txt, url): url
            for url in urls
        }

        for future in concurrent.futures.as_completed(future_to_url):
            domain, found, content_type = future.result()
            completed += 1
            if found:
                found_urls.append((domain, content_type))
            elif content_type is None:
                if future.exception():
                    error_urls.append(domain)
                else:
                    not_found_urls.append(domain)
            else:
                not_found_urls.append(domain)

            # Print progress every 100 domains
            if completed % 100 == 0:
                print(f"\n[PROGRESS] {completed}/{total} URLs checked ({100*completed//total}%)\n")

    # Print summary
    print(f"\n{'='*60}")
    print(f"SUMMARY")
    print(f"{'='*60}")
    print(f"Total URLs checked: {total}")
    print(f"Sites with text/plain llms.txt: {len(found_urls)} ({100*len(found_urls)/total:.2f}%)")
    print(f"Sites without llms.txt: {len(not_found_urls)} ({100*len(not_found_urls)/total:.2f}%)")
    print(f"Errors: {len(error_urls)} ({100*len(error_urls)/total:.2f}%)")

    if found_urls:
        print(f"\n--- SITES WITH LLMS.TXT (text/plain) ({len(found_urls)}) ---")
        for domain, content_type in sorted(found_urls):
            print(f"  - {domain}/llms.txt ({content_type})")

    # Save results to files
    with open("llms_txt_found.txt", "w") as f:
        f.write("# Sites with /llms.txt returning text/plain\n\n")
        for domain, content_type in sorted(found_urls):
            f.write(f"{domain}\n")
            f.write(f"  content-type: {content_type}\n")
            f.write(f"  url: https://{domain}/llms.txt\n\n")
    print(f"\nFound sites saved to: llms_txt_found.txt")

    with open("llms_txt_not_found.txt", "w") as f:
        f.write("# Sites without /llms.txt or wrong content type\n\n")
        for domain in sorted(not_found_urls):
            f.write(f"{domain}\n")
    print(f"Not found sites saved to: llms_txt_not_found.txt")

    if error_urls:
        with open("llms_txt_errors.txt", "w") as f:
            f.write("# Sites with errors\n\n")
            for domain in sorted(error_urls):
                f.write(f"{domain}\n")
        print(f"Error sites saved to: llms_txt_errors.txt")


if __name__ == "__main__":
    main()
