#!/usr/bin/env node
// Patches Next.js sorted-routes.js to allow /sitemap.xml route handler
// to coexist with the app/sitemap.ts metadata catch-all route.
// This patch is applied via postinstall to survive npm install.

const fs = require('fs');
const path = require('path');

const filePath = path.join(
  __dirname,
  '../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js'
);

if (!fs.existsSync(filePath)) {
  console.log('[patch-next] sorted-routes.js not found, skipping.');
  process.exit(0);
}

const original = fs.readFileSync(filePath, 'utf8');

// Match both old and new Next.js error string formats
const throwPattern = /throw new Error\('You cannot define a route with the same specificity[^;]+;\n?/;

if (!throwPattern.test(original)) {
  console.log('[patch-next] Already patched or pattern not found, skipping.');
  process.exit(0);
}

const patched = original.replace(
  throwPattern,
  '// PATCHED: conflict ignored for sitemap.xml coexistence with metadata route\n'
);

fs.writeFileSync(filePath, patched, 'utf8');
console.log('[patch-next] sorted-routes.js patched successfully.');
