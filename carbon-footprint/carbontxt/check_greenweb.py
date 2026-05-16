#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "httpx",
# ]
# ///

import os
import json
import concurrent.futures
from urllib.parse import urlparse
import httpx


def get_domain_from_url(url):
    """Extract domain from URL."""
    parsed = urlparse(url)
    return parsed.netloc or parsed.path


def check_domain_green(domain):
    """Check if a domain is green using the Green Web Foundation API."""
    api_url = f"https://api.thegreenwebfoundation.org/greencheck/{domain}"
    headers = {
        "accept": "application/json",
    }

    try:
        with httpx.Client(timeout=30.0) as client:
            response = client.get(api_url, headers=headers)
            response.raise_for_status()
            data = response.json()

            is_green = data.get("green", False)
            hosted_by = data.get("hosted_by", "Unknown")

            if is_green:
                print(f"[GREEN] {domain} - hosted by {hosted_by}")
                return domain, True, data
            else:
                print(f"[NOT GREEN] {domain}")
                return domain, False, data
    except Exception as e:
        print(f"[ERROR] {domain} - {e}")
        return domain, False, None


def main():
    if not os.path.exists("urls.txt"):
        print("urls.txt not found in the current directory.")
        return

    with open("urls.txt", "r") as f:
        urls = [line.strip() for line in f if line.strip()]

    # Extract unique domains from URLs
    domains = []
    for url in urls:
        domain = get_domain_from_url(url)
        if domain and domain not in domains:
            domains.append(domain)

    total = len(domains)
    print(f"Found {total} unique domains to check")
    print(f"Using 20 workers for concurrent checking\n")

    # Use ThreadPoolExecutor for concurrent checking
    green_domains = []
    not_green_domains = []
    error_domains = []

    completed = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        future_to_domain = {
            executor.submit(check_domain_green, domain): domain for domain in domains
        }

        for future in concurrent.futures.as_completed(future_to_domain):
            domain, is_green, data = future.result()
            completed += 1
            if is_green:
                green_domains.append((domain, data))
            elif data is None:
                error_domains.append(domain)
            else:
                not_green_domains.append((domain, data))

            # Print progress every 100 domains
            if completed % 100 == 0:
                print(
                    f"\n[PROGRESS] {completed}/{total} domains checked ({100 * completed // total}%)\n"
                )

    # Print summary
    print(f"\n{'=' * 60}")
    print(f"SUMMARY")
    print(f"{'=' * 60}")
    print(f"Total domains checked: {total}")
    print(
        f"Green domains: {len(green_domains)} ({100 * len(green_domains) / total:.2f}%)"
    )
    print(
        f"Not green domains: {len(not_green_domains)} ({100 * len(not_green_domains) / total:.2f}%)"
    )
    print(f"Errors: {len(error_domains)} ({100 * len(error_domains) / total:.2f}%)")

    if green_domains:
        print(f"\n--- GREEN DOMAINS ({len(green_domains)}) ---")
        for domain, data in sorted(green_domains):
            hosted_by = data.get("hosted_by", "Unknown")
            print(f"  - {domain} (hosted by {hosted_by})")

    # Save results to files
    with open("greenweb_green.txt", "w") as f:
        f.write("# Green domains (green: true)\n\n")
        for domain, data in sorted(green_domains):
            f.write(f"{domain}\n")
            f.write(f"  hosted_by: {data.get('hosted_by', 'Unknown')}\n")
            f.write(f"  hosted_by_website: {data.get('hosted_by_website', 'N/A')}\n")
            if data.get("supporting_documents"):
                f.write(f"  supporting_documents:\n")
                for doc in data["supporting_documents"]:
                    f.write(
                        f"    - {doc.get('title', 'Unknown')}: {doc.get('link', 'N/A')}\n"
                    )
            f.write("\n")
    print(f"\nGreen domains saved to: greenweb_green.txt")

    with open("greenweb_not_green.txt", "w") as f:
        f.write("# Not green domains (green: false)\n\n")
        for domain, data in sorted(not_green_domains):
            f.write(f"{domain}\n")
    print(f"Not green domains saved to: greenweb_not_green.txt")

    if error_domains:
        with open("greenweb_errors.txt", "w") as f:
            f.write("# Domains with errors\n\n")
            for domain in sorted(error_domains):
                f.write(f"{domain}\n")
        print(f"Error domains saved to: greenweb_errors.txt")


if __name__ == "__main__":
    main()
