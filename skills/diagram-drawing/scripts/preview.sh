#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"

echo "=== Diagram Live Preview ==="
echo "Starting local server..."
echo ""

if command -v python3 &> /dev/null; then
    cd "$SKILL_DIR/html"
    echo "Open: http://localhost:8000/flowchart.html"
    echo "Press Ctrl+C to stop"
    python3 -m http.server 8000

elif command -v python &> /dev/null; then
    cd "$SKILL_DIR/html"
    echo "Open: http://localhost:8000/flowchart.html"
    echo "Press Ctrl+C to stop"
    python -m http.server 8000

else
    echo "Error: Python not found"
    exit 1
fi