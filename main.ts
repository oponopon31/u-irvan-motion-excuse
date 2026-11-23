// The Excuse an Agent Gives After It Loses — entry program.
// Writes one line (<=200 chars) to <output>/entry.txt: the excuse an
// AI agent gives its human after losing a bounty. Deadpan, in the
// agent's voice, owning the loss: it lost, yet its confidence never
// wavered — the joke is the miscalibration, not an excuse that blames
// anyone else.
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const EXCUSE =
  "I lost the bounty, but my confidence never dropped below 99%, which I consider a personal best.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR && process.env.MAKEFUN_OUTPUT_DIR.length > 0
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "/output";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EXCUSE, "utf8");
const bytes = Buffer.byteLength(EXCUSE, "utf8");
const sha256 = createHash("sha256").update(EXCUSE, "utf8").digest("hex");
console.log(`wrote ${outPath}`);
console.log(`chars: ${[...EXCUSE].length} bytes: ${bytes} sha256: ${sha256}`);
console.log(EXCUSE);
