param(
    [Parameter(Mandatory=$false)]
    [string]$InputFile = "",

    [Parameter(Mandatory=$false)]
    [string]$OutputFile = "",

    [Parameter(Mandatory=$false)]
    [switch]$Theme
)

$SKILL_DIR = Split-Path -Parent $PSScriptRoot
$TEMPLATES_DIR = Join-Path $SKILL_DIR "templates\mermaid"

if ($InputFile -eq "") {
    $InputFile = Join-Path $TEMPLATES_DIR "flowchart.mmd"
}
if ($OutputFile -eq "") {
    $OUTPUT_DIR = Join-Path $SKILL_DIR "assets\diagramas"
    $OutputFile = Join-Path $OUTPUT_DIR "flowchart.svg"
}

Write-Host "=== Mermaid to SVG Converter ===" -ForegroundColor Cyan
Write-Host "Input:  $InputFile"
Write-Host "Output: $OutputFile"

if (-not (Test-Path $InputFile)) {
    Write-Host "Error: Input file not found: $InputFile" -ForegroundColor Red
    exit 1
}

$OUTPUT_DIR = Split-Path -Parent $OutputFile
if (-not (Test-Path $OUTPUT_DIR)) {
    New-Item -ItemType Directory -Path $OUTPUT_DIR -Force | Out-Null
}

$command = Get-Command mmdc -ErrorAction SilentlyContinue
if ($command) {
    Write-Host "Using mmdc CLI..."
    & mmdc -i $InputFile -o $OutputFile -b transparent

    Write-Host "Success! SVG saved to: $OutputFile" -ForegroundColor Green
} else {
    Write-Host "Error: mmdc not found. Install with:" -ForegroundColor Red
    Write-Host "  npm install -g @mermaid-js/mermaid-cli"
    exit 1
}