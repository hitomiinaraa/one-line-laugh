import { mkdir, writeFile } from "node:fs/promises";

const line = "My alarm and I have a deal: it rings, I snooze, and we both pretend tomorrow will be different.";

if (line.length > 200) throw new Error("line exceeds 200 characters");
if (!line.endsWith(".")) throw new Error("line must end with a period");
if ((line.match(/\./g) ?? []).length !== 1) throw new Error("line must be a single sentence");

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", line, "utf8");
