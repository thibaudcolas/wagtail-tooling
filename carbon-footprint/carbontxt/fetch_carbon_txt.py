
#!/usr/bin/env python3

import os
import urllib.request

def fetch_carbon_txt(url):
    """Fetch the /carbon.txt file from the given URL."""
    carbon_url = url.rstrip('/') + '/carbon.txt'
    try:
        with urllib.request.urlopen(carbon_url) as response:
            content = response.read().decode('utf-8')
            return content
    except Exception as e:
        print(f"Error fetching {carbon_url}: {e}")
        return None

def save_carbon_txt(url, content):
    """Save the carbon.txt content to a file."""
    domain = url.rstrip('/').replace('https://', '').replace('http://', '')
    filename = f"{domain}_carbon.txt"
    with open(filename, 'w') as f:
        f.write(content)
    print(f"Saved to {filename}")

def main():
    if not os.path.exists('urls.txt'):
        print("urls.txt not found in the current directory.")
        return

    with open('urls.txt', 'r') as f:
        urls = f.readlines()

    for url in urls:
        url = url.strip()
        if not url:
            continue
        print(f"Fetching {url}/carbon.txt...")
        content = fetch_carbon_txt(url)
        if content:
            save_carbon_txt(url, content)

if __name__ == "__main__":
    main()
