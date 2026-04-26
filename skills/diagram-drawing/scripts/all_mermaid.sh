#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATES_DIR="$SKILL_DIR/templates/mermaid"
ASSETS_DIR="$SKILL_DIR/assets/diagramas"

echo "=== Mermaid to SVG - Batch Converter ==="
echo ""

compile_file() {
    local input="$1"
    local output="$2"
    local name=$(basename "$input" .mmd)

    echo "Converting: $name.mmd -> $name.svg"

    if command -v mmdc &> /dev/null; then
        mmdc -i "$input" -o "$output" -b transparent
        echo "  ✓ Done"
    else
        echo "  ✗ mmdc not found"
    fi
}

mkdir -p "$ASSETS_DIR"

for file in "$TEMPLATES_DIR"/*.mmd; do
    if [ -f "$file" ]; then
        name=$(basename "$file" .mmd)
        output="$ASSETS_DIR/$name.svg"
        compile_file "$file" "$output"
    fi
done

echo ""
echo "All diagrams converted!"