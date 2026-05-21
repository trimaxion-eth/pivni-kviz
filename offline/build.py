#!/usr/bin/env python3
"""Build offline presentation from root js/, css/, images/.

Produces offline/bundle.js (non-module scripts for file://) and copies
offline/offline.css. Edit sources at repo root, then run:

  python3 offline/build.py
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OFFLINE_DIR = Path(__file__).resolve().parent
BUNDLE_FILE = OFFLINE_DIR / "bundle.js"
IMAGES_DIR = ROOT / "images"

FONT_FILES = (
    (
        "cormorant-garamond-latin.woff2",
        "https://fonts.gstatic.com/s/cormorantgaramond/v21/"
        "co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2",
    ),
    (
        "cormorant-garamond-latin-ext.woff2",
        "https://fonts.gstatic.com/s/cormorantgaramond/v21/"
        "co3bmX5slCNuHLi8bLeY9MK7whWMhyjYp3tKgS4.woff2",
    ),
    (
        "source-sans-3-latin.woff2",
        "https://fonts.gstatic.com/s/sourcesans3/v19/"
        "nwpStKy2OAdR1K-IwhWudF-R3w8aZQ.woff2",
    ),
    (
        "source-sans-3-latin-ext.woff2",
        "https://fonts.gstatic.com/s/sourcesans3/v19/"
        "nwpStKy2OAdR1K-IwhWudF-R3wEaZfrc.woff2",
    ),
)

JS_FILES = (
    "quiz-data.js",
    "slide-render.js",
    "presentation.js",
)


def strip_exports(js: str) -> str:
    js = re.sub(r"^export\s+", "", js, flags=re.MULTILINE)
    js = re.sub(
        r"^import\s+\{[^}]+\}\s+from\s+['\"][^'\"]+['\"];\s*\n",
        "",
        js,
        flags=re.MULTILINE,
    )
    return js


def offline_image_paths(js: str) -> str:
    """Resolve image paths from offline/index.html (one level down)."""
    return re.sub(r'"images/', '"../images/', js)


def ensure_fonts() -> None:
    import urllib.request

    fonts_dir = OFFLINE_DIR / "fonts"
    fonts_dir.mkdir(parents=True, exist_ok=True)
    for name, url in FONT_FILES:
        path = fonts_dir / name
        if path.exists():
            continue
        print(f"Downloading {name} …")
        urllib.request.urlretrieve(url, path)


def offline_css() -> str:
    fonts = (OFFLINE_DIR / "fonts.css").read_text(encoding="utf-8")
    styles = (ROOT / "css" / "styles.css").read_text(encoding="utf-8")
    return fonts + "\n" + styles


def build_bundle() -> None:
    parts: list[str] = []
    for name in JS_FILES:
        raw = (ROOT / "js" / name).read_text(encoding="utf-8")
        js = strip_exports(raw)
        if name == "quiz-data.js":
            js = offline_image_paths(js)
        parts.append(f"/* {name} */\n{js.strip()}\n")

    BUNDLE_FILE.write_text("\n".join(parts), encoding="utf-8")
    size_kb = BUNDLE_FILE.stat().st_size / 1024
    print(f"Wrote {BUNDLE_FILE} ({size_kb:.1f} KB)")


def build_offline_css() -> None:
    path = OFFLINE_DIR / "offline.css"
    path.write_text(offline_css(), encoding="utf-8")
    print(f"Wrote {path}")


def main() -> None:
    if not IMAGES_DIR.is_dir():
        print(f"Warning: {IMAGES_DIR} not found", file=sys.stderr)

    ensure_fonts()
    build_offline_css()
    build_bundle()
    print("Open offline/index.html in a browser (no server required).")


if __name__ == "__main__":
    main()
