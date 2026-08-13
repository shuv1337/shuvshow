import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string) => readFileSync(path, "utf8");
const pkg = JSON.parse(read("package.json")) as {
  name: string;
  bin: Record<string, string>;
  repository: { url: string };
};

assert.equal(pkg.name, "shuvshow", "the published package must use the fork identity");
assert.deepEqual(Object.keys(pkg.bin), ["shuvshow"], "the canonical executable must be shuvshow");
assert.match(pkg.repository.url, /shuv1337\/shuvshow/, "package metadata must target the fork");

const publicFiles = [
  "README.md",
  "bin/sideshow.js",
  "server/app.ts",
  "server/index.ts",
  "viewer/src/App.tsx",
  ".claude-plugin/marketplace.json",
  "plugin/.claude-plugin/plugin.json",
];

for (const path of publicFiles) {
  const content = read(path);
  assert.doesNotMatch(
    content,
    /modem-dev\/shuvshow|registry\.npmjs\.org\/sideshow|sideshowshuvshow|shuvshowsideshow/,
    `${path} contains a stale or impossible upstream-owned fork target`,
  );
}

const delta = read("docs/upstream-delta.md");
for (const compatibilityName of ["SIDESHOW_*", "~/.sideshow", "__sideshow", "SideshowHost"]) {
  assert.ok(delta.includes(compatibilityName), `upstream delta must document ${compatibilityName}`);
}

console.log("shuvshow fork boundaries verified");
