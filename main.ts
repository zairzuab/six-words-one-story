// Six Words, One Story — a complete story in exactly six words.
// It writes the story to /output/entry.txt.
// The story is 29 characters, six words, under the 60-character limit.
// The program verifies the story is exactly six words before writing it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const story = "Sold the house. Kept the key.";

// Guard: the gate requires exactly six words, 1-60 characters.
const words = story.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}
if ([...story].length > 60 || [...story].length < 1) {
  throw new Error("story must be 1-60 characters");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), story + "\n", "utf8");
console.log(`wrote ${[...story].length + 1} characters to /output/entry.txt`);
