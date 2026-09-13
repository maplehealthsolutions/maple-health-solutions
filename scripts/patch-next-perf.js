#!/usr/bin/env node
// Patches negative-timestamp bug in react-server-dom-turbopack dev build.
// Safe to re-run — checks if already patched before writing.
const fs = require("fs");
const path = require("path");

const SEARCH = [
  {
    from: "start: 0 > startTime$jscomp$2 ? 0 : startTime$jscomp$2,\n                        end: childrenEndTime$jscomp$1,",
    to:   "start: 0 > startTime$jscomp$2 ? 0 : startTime$jscomp$2,\n                        end: 0 > childrenEndTime$jscomp$1 ? 0 : childrenEndTime$jscomp$1,",
  },
  {
    from: "start: 0 > startTime$jscomp$5 ? 0 : startTime$jscomp$5,\n                      end: childrenEndTime$jscomp$3,",
    to:   "start: 0 > startTime$jscomp$5 ? 0 : startTime$jscomp$5,\n                      end: 0 > childrenEndTime$jscomp$3 ? 0 : childrenEndTime$jscomp$3,",
  },
];

// Find the file under node_modules (pnpm nests it, npm puts it flat)
function findTarget() {
  const candidates = [
    path.join(__dirname, "../node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-client.browser.development.js"),
  ];
  // pnpm virtualstore path
  const pnpmBase = path.join(__dirname, "../node_modules/.pnpm");
  if (fs.existsSync(pnpmBase)) {
    for (const entry of fs.readdirSync(pnpmBase)) {
      if (entry.startsWith("next@")) {
        candidates.push(
          path.join(pnpmBase, entry, "node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-client.browser.development.js")
        );
      }
    }
  }
  return candidates.find(fs.existsSync);
}

const target = findTarget();
if (!target) {
  console.log("patch-next-perf: target file not found, skipping");
  process.exit(0);
}

let content = fs.readFileSync(target, "utf8");
let patched = 0;

for (const { from, to } of SEARCH) {
  if (content.includes(to)) continue; // already patched
  if (!content.includes(from)) continue; // not found, skip
  content = content.replace(from, to);
  patched++;
}

if (patched > 0) {
  fs.writeFileSync(target, content);
  console.log(`patch-next-perf: applied ${patched} patch(es) to ${path.relative(process.cwd(), target)}`);
} else {
  console.log("patch-next-perf: already patched or no matches, nothing to do");
}
