#!/usr/bin/env python3
"""Snapshot/compare built page content and SEO across the five-guide expansion."""
import glob
import json
import os
import sys
from html.parser import HTMLParser

BASELINE = os.environ.get("GUIDE_SCOPE_BASELINE", "/tmp/next-canton-baseline.json")
ALLOWED = {
    f"solaranlage-{canton}.html"
    for canton in os.environ.get("GUIDE_SCOPE_IDS", "freiburg,genf,glarus,graubunden,jura").split(",")
}


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.skip = 0
        self.in_style = False
        self.text = []
        self.styles = []
        self.meta = []
        self.seo = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ("script", "style"):
            self.skip += 1
        if tag == "style":
            self.in_style = True
        if tag == "title":
            self.text.append("[TITLE]")
        if tag == "meta" and (
            attrs.get("name") == "description"
            or attrs.get("property", "").startswith("og:")
        ):
            self.meta.append(attrs)
        if tag == "link" and attrs.get("rel") in ("canonical", "alternate"):
            self.seo.append(attrs)

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self.skip = max(0, self.skip - 1)
        if tag == "style":
            self.in_style = False

    def handle_data(self, text):
        if self.in_style:
            self.styles.append(text)
        if not self.skip and text.strip():
            self.text.append(text.strip())


pages = {}
for filename in glob.glob(".next/server/app/**/*.html", recursive=True):
    parser = Page()
    with open(filename) as stream:
        parser.feed(stream.read())
    pages[filename.split("/app/", 1)[1]] = {
        "text": " ".join(parser.text),
        "styles": parser.styles,
        "meta": parser.meta,
        "seo": parser.seo,
    }
assert pages, "Build the app before running this check."
if "--snapshot" in sys.argv:
    with open(BASELINE, "w") as stream:
        json.dump(pages, stream)
    print(f"Saved baseline of {len(pages)} pages.")
else:
    with open(BASELINE) as stream:
        before = json.load(stream)
    assert pages.keys() == before.keys(), "Route inventory changed."
    changed = [key for key in before if pages[key] != before[key]]
    assert set(changed) <= ALLOWED, f"Out-of-scope changes: {set(changed) - ALLOWED}"
    for key in before:
        assert before[key]["seo"] == pages[key]["seo"], f"Canonical/hreflang changed: {key}"
        if os.environ.get("GUIDE_PRESERVE_METADATA") == "1":
            assert before[key]["meta"] == pages[key]["meta"], f"Description/Open Graph changed: {key}"
    print(f"PASS: {len(pages)} routes; only {len(changed)} permitted pages changed.")
    print("All other text, metadata, inline styles and canonical/hreflang unchanged.")