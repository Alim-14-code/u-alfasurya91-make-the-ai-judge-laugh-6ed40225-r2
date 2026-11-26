// Make the AI Judge Laugh (R2) — writes the entry joke to /output/entry.txt
// One line: an AI-written performance review that never met the employee.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const joke = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = joke + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`laugh filed for round 2 (${joke.length} chars) -> ${outFile}`);
