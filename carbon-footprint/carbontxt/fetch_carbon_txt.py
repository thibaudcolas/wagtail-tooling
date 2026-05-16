#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "carbon-txt",
# ]
# ///

import os
import sys
import concurrent.futures
from urllib.parse import urlparse
from carbon_txt.validators import CarbonTxtValidator


def get_domain_from_url(url):
    """Extract domain from URL."""
    parsed = urlparse(url)
    return parsed.netloc or parsed.path


def check_domain(domain, validator):
    """Check if a domain has a valid carbon.txt file using the carbon-txt validator."""
    try:
        result = validator.validate_domain(domain)
        # Check if result.result is not None (indicates successful validation)
        if result and result.result is not None:
            print(f"[FOUND] {domain}")
            return domain, True, result
        else:
            print(f"[NOT FOUND] {domain}")
            return domain, False, None
    except Exception as e:
        print(f"[ERROR] {domain}")
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

    validator = CarbonTxtValidator()

    # Use ThreadPoolExecutor for concurrent checking
    found_domains = []
    not_found_domains = []

    completed = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        future_to_domain = {
            executor.submit(check_domain, domain, validator): domain
            for domain in domains
        }

        for future in concurrent.futures.as_completed(future_to_domain):
            domain, found, result = future.result()
            completed += 1
            if found:
                found_domains.append((domain, result))
            else:
                not_found_domains.append(domain)

            # Print progress every 100 domains
            if completed % 100 == 0:
                print(f"\n[PROGRESS] {completed}/{total} domains checked ({100*completed//total}%)\n")

    # Print summary
    print(f"\n{'='*60}")
    print(f"SUMMARY")
    print(f"{'='*60}")
    print(f"Total domains checked: {total}")
    print(f"Domains with carbon.txt: {len(found_domains)}")
    print(f"Domains without carbon.txt: {len(not_found_domains)}")

    if found_domains:
        print(f"\n--- DOMAINS WITH CARBON.TXT ({len(found_domains)}) ---")
        for domain, result in sorted(found_domains):
            print(f"  - {domain}")
            if result and result.url:
                print(f"    URL: {result.url}")

    # Save results to files
    with open("carbon_txt_found.txt", "w") as f:
        f.write("# Domains with carbon.txt files\n\n")
        for domain, result in sorted(found_domains):
            f.write(f"{domain}\n")
            if result and result.url:
                f.write(f"  URL: {result.url}\n")
    print(f"\nFound domains saved to: carbon_txt_found.txt")

    with open("carbon_txt_not_found.txt", "w") as f:
        f.write("# Domains without carbon.txt files\n\n")
        for domain in sorted(not_found_domains):
            f.write(f"{domain}\n")
    print(f"Not found domains saved to: carbon_txt_not_found.txt")


if __name__ == "__main__":
    main()
