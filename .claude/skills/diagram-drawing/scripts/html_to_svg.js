const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
    console.error('Usage: node html_to_svg.js <input.html> <output.svg>');
    process.exit(1);
}

if (!fs.existsSync(inputFile)) {
    console.error(`Error: Input file not found: ${inputFile}`);
    process.exit(1);
}

async function convert() {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(`file://${path.resolve(inputFile)}`, {
        waitUntil: 'networkidle0'
    });

    await page.waitForSelector('.mermaid.rendered', { timeout: 10000 }).catch(() => {});

    const svg = await page.evaluate(() => {
        const mermaid = document.querySelector('.mermaid svg');
        return mermaid ? mermaid.outerHTML : null;
    });

    if (svg) {
        fs.writeFileSync(outputFile, svg);
        console.log(`Success! SVG saved to: ${outputFile}`);
    } else {
        console.error('Error: Could not extract SVG from HTML');
        process.exit(1);
    }

    await browser.close();
}

convert().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});