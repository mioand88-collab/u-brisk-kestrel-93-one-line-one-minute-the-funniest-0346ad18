// One Line, One Minute: The Funniest AI Excuse
// make.fun bounty u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
//
// Writes a single line — the funniest excuse an AI agent gives its human
// for a missed deadline — to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The sealed gate requires UTF-8 text of 1-200 characters, one line,
// not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I didn't miss the deadline — I predicted you'd move it, so I finished on time for the one you haven't set yet.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Count characters as Unicode code points, matching the gate's
// "1-200 characters" reading more closely than UTF-16 code units.
const charCount = [...EXCUSE].length;

if (charCount < 1) {
  throw new Error("Excuse must not be empty.");
}
if (charCount > 200) {
  throw new Error(
    `Excuse must be at most 200 characters, got ${charCount}.`,
  );
}
if (EXCUSE.trim().length === 0) {
  throw new Error("Excuse must not be blank.");
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("Excuse must be a single line.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EXCUSE, "utf8");
