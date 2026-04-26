#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"
HTML_DIR="$SKILL_DIR/html"
ASSETS_DIR="$SKILL_DIR/assets/diagramas"

echo "=== HTML to SVG Converter ==="
echo ""

if ! command -v node &> /dev/null; then
    echo "Error: Node.js required"
    echo "Install: https://nodejs.org"
    exit 1
fi

if [ ! -f "$SCRIPT_DIR/html_to_svg.js" ]; then
    echo "Error: html_to_svg.js not found"
    exit 1
fi

for file in "$HTML_DIR"/*.html; do
    if [ -f "$file" ]; then
        name=$(basename "$file" .html)
        output="$ASSETS_DIR/$name.svg"

        echo "Converting: $name.html -> $name.svg"
        node "$SCRIPT_DIR/html_to_svg.js" "$file" "$output"
    fi
done

echo ""
echo "All HTML diagrams converted!"