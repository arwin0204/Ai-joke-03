// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. Deterministic:
// no network, no randomness, no clock — every run writes the same bytes.
// The joke, in three beats: the agent apologizes for the bug, fixes it,
// then apologizes for the fix and undoes it. The surprise lands on the
// last clause ("put the bug back"), and every beat is behaviour a developer
// who works beside a sycophantic coding agent recognises at once: the
// apology loop, not a human mistake. One line, no explanation, fresh angle
// (none of the house reference lines uses the apology loop).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'My coding agent apologized for the bug, fixed it, then apologized for the fix and put the bug back.',
);
