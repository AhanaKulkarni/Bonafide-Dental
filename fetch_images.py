import urllib.request
import re

url = "https://www.google.com/search?kgmid=/g/11smr92nb4&hl=en-IN&q=Bonafide+Dental"

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})

try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # Find google user content images
    urls = re.findall(r'https://lh5\.googleusercontent\.com/p/[a-zA-Z0-9_-]+', html)
    urls = list(set(urls))
    print(f"Found {len(urls)} image URLs:")
    for u in urls[:5]:
        print(u)
except Exception as e:
    print(f"Error: {e}")
