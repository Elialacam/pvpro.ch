// Keep originals for other pages; these small derivatives are only for form options.
const fs = require('node:fs/promises');
const sharp = require('sharp');

const names = [
  'check', 'x', 'question', 'einfamilienhaus', 'mehrfamilienhaus',
  'gewerbe', 'satteldach', 'pultdach', 'flachdach',
];

async function main() {
  await fs.mkdir('public/icons/form', { recursive: true });
  for (const name of names) {
    await sharp(`public/icons/icon-${name}.webp`)
      .resize(256, 256)
      .webp({ quality: 85 })
      .toFile(`public/icons/form/icon-${name}.webp`);
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });