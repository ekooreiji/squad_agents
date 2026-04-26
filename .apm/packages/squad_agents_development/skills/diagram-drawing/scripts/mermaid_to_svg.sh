#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"

INPUT_FILE="${1:-$SKILL_DIR/templates/mermaid/flowchart.mmd}"
OUTPUT_FILE="${2:-$SKILL_DIR/assets/diagramas/flowchart.svg}"

echo "=== Mermaid to SVG Converter ==="
echo "Input:  $INPUT_FILE"
echo "Output: $OUTPUT_FILE"

if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file not found: $INPUT_FILE"
    exit 1
fi

mkdir -p "$(dirname "$OUTPUT_FILE")"

if command -v mmdc &> /dev/null; then
    echo "Using mmdc CLI..."
    mmdc -i "$INPUT_FILE" -o "$OUTPUT_FILE" -b transparent

    echo "Success! SVG saved to: $OUTPUT_FILE"
else
    echo "Error: mmdc not found. Install with:"
    echo "  npm install -g @mermaid-js/mermaid-cli"
    exit 1
fi