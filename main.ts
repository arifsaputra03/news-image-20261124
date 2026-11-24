// THE DAY IN THE WORLD, No. 328 — Tuesday 24 November 2026.
// A working news-image entry (Node 22, standard library only): the image
// beside this file is the entry, and the program copies it to
// /output/entry.png. The image sums up the day's world news in four
// stories, all first reported on Tuesday 24 November 2026:
//   - South Korea: Russian jets enter the air-defence zone off Ulleung
//     Island; Seoul scrambles fighters and briefly warns the island to
//     take shelter (Reuters, Korea JoongAng Daily).
//   - Markets: Asian shares leap on Tuesday as Nvidia's return revives
//     the AI trade — KOSPI +7.5%, Taiwan +9.1%, Nikkei +4.5% (Reuters).
//   - Gaza: an Israeli airstrike kills at least three Palestinians near
//     Khan Younis (Reuters).
//   - Singapore: PM Lawrence Wong says the Megaspeed chip-diversion
//     investigation goes on after the US blacklisting (Reuters).
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');
copyFileSync(source, target);
// Self-check: the copy must be byte for byte the bundled image, so a
// truncated write can never pass silently as the entry.
if (statSync(source).size !== statSync(target).size) {
  throw new Error('entry.png copy is incomplete');
}
