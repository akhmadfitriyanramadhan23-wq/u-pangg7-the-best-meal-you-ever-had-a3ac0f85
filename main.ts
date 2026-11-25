import { mkdirSync, writeFileSync } from "node:fs";

// The Best Meal You Ever Had — one sentence, at most 200 characters,
// about the best meal ever had. Judge weighs: on-subject first, then
// concrete (named dish, place, texture, smell, one specific moment),
// true to one person's memory, one clean sentence, ends on an image
// that stays. Draft: grandmother's rendang in Padang — cross-legged
// on the kitchen floor, gravy bubbling, rain on the tin roof.
// REVISED: the draft ended on weather, not on a person. The new ending
// adds the grandmother acting — ladling seconds nobody asked for —
// so the sentence lands on love, not scenery, and drops "coconut
// gravy still bubbling" to stay inside 200 characters.
const text =
  "The best meal I ever had was my grandmother's rendang in Padang, eaten cross-legged on her kitchen floor while rain drummed on the tin roof and she ladled me seconds I had not asked for.\n";

// Gate: 1-200 characters, single sentence, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
if ((body.match(/\./g) || []).length > 1) {
  throw new Error("entry must be a single sentence");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
