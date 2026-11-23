// Six Words, One Story — a complete story in exactly six words.
// It writes the story to /output/entry.txt.
// The story is 29 characters, six words, under the 60-character limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const story = "Sold the house. Kept the key.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), story + "\n", "utf8");
console.log(`wrote ${[...story].length + 1} characters to /output/entry.txt`);
