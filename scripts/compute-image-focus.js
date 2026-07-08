const sharp = require('sharp');
const fs0 = require('fs');
const fs = require('fs');
const path = require('path');

let IMAGES = JSON.parse(process.argv[2] || '[]');
if (!IMAGES.length) {
  const src = fs0.readFileSync('lib/blogPosts.ts', 'utf8');
  IMAGES = [...new Set([...src.matchAll(/image:\s*'([^']+)'/g)].map(m => m[1]))];
}

async function focalPoint(file) {
  const img = sharp(file);
  const meta = await img.metadata();
  const { width: W, height: H } = meta;

  // Horizontal focus: crop to a tall narrow strip using attention
  const stripW = Math.max(1, Math.round(H * 0.5));
  let xPct = 50, yPct = 50;

  if (W > stripW) {
    const { info } = await sharp(file)
      .resize({ width: stripW, height: H, fit: 'cover', position: sharp.strategy.attention })
      .toBuffer({ resolveWithObject: true });
    const left = info.cropOffsetLeft != null ? -info.cropOffsetLeft : (W - stripW) / 2;
    xPct = Math.round(((left + stripW / 2) / W) * 100);
  }
  const stripH = Math.max(1, Math.round(W * 0.35));
  if (H > stripH) {
    const { info } = await sharp(file)
      .resize({ width: W, height: stripH, fit: 'cover', position: sharp.strategy.attention })
      .toBuffer({ resolveWithObject: true });
    const top = info.cropOffsetTop != null ? -info.cropOffsetTop : (H - stripH) / 2;
    yPct = Math.round(((top + stripH / 2) / H) * 100);
  }
  return { xPct: Math.min(100, Math.max(0, xPct)), yPct: Math.min(100, Math.max(0, yPct)) };
}

(async () => {
  const out = {};
  for (const rel of IMAGES) {
    const file = path.join('public', rel);
    if (!fs.existsSync(file)) { console.error('missing', rel); continue; }
    try {
      const { xPct, yPct } = await focalPoint(file);
      out[rel] = `${xPct}% ${yPct}%`;
    } catch (e) {
      console.error('error', rel, e.message);
    }
  }
  console.log(JSON.stringify(out, null, 2));
})();
