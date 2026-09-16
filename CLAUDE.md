# Ansett A320 Checkride Trainer — Project Guide

This repository contains a self-contained, installable A320 study app. GitHub Pages serves
`index.html`, and the service worker makes the app available offline on an iPhone Home Screen.

## Files

| File | Role |
|---|---|
| `index.html` | Main app: HTML, CSS, JavaScript and question data in one file. |
| `A320_Checkride_Trainer.html` | Standalone twin of `index.html`; keep it byte-for-byte identical. |
| `systems-exam-questions.js` | 315 student-guide questions across 19 subjects, with explicit per-item source status. |
| `question-bank-questions.js` | All 298 imported workbook rows; its 19 FCOM Communications-related rows are active in Systems Exam Prep. |
| `communications-fcom-questions.js` | 51 Communications questions checked against FCOM DSC-23 and the 12-page Doc1 supplement. |
| `communications-option-quality.js` | Presentation-only curated options for all 70 active Communications questions; preserves the original source choices and correct answers. |
| `communications-fcom-audit.json` | Item-by-item FCOM and supplement evidence map for the 51 Communications additions. |
| `trainer-core.js` | Reviewed IAE evidence records with PDF page/Ident/revision, option ordering and completed-exam scoring. |
| `electrical.html` | Interactive ECAM-style A320 electrical-system synoptic and configuration explainer. |
| `electrical-sim.js` | Electrical network evaluation, component failures, transfers and dimensional canvas rendering. |
| `hydraulic.html` | Interactive green/blue/yellow A320 hydraulic generation and distribution trainer. |
| `hydraulic-sim.js` | Hydraulic source, PTU, RAT, priority-valve, isolation and component-failure model. |
| `engine.html` | Interactive IAE V2500 engine-systems study assistant. |
| `engine-sim.js` | Eight system layouts, normal/abnormal modes, component failures and ECAM-style SVG rendering for the IAE engine explorer. |
| `engine-3d.js` | Lightweight procedural 3D cutaway renderer with 23 selectable parts, airflow overlays, touch controls and component-to-system links. |
| `flows.html` | Interactive Ansett A320 PF/PM flow practice with phase sequences, four practice views, including a perspective virtual cockpit, fixed CM1/PM and CM2/PF allocation, and artwork-only panel reference. |
| `a320-controls.js` | Individually positioned A320 control catalog with panel labels, states and cold-and-dark defaults. |
| `flow-sim.js` | Source-card flow data, carried cockpit state, conditional acknowledgements and order-sensitive grading across the control catalog. |
| `integration.html` | Cross-system engine-loss scenario lab linking engine, electrical and hydraulic modules through matching URL presets. |
| `sw.js` | Offline cache. Bump `CACHE` whenever app content changes. |
| `manifest.webmanifest` | Installable-app metadata. |
| `icon-180.png`, `icon-192.png`, `icon-512.png` | App icons. |

## Question data

The main app defines these arrays:

```js
const BANK = [ ... ];
const MEM = [ ... ];
const FILL_SECTIONS = [ ... ];
```

`BANK` is the limitations-only multiple-choice bank. Non-LIM BTC and systems questions must not
be appended to it. Each multiple-choice object has:

```js
{ c: "Subject", q: "Question", o: ["options"], a: 0, w: "Reason · source" }
```

`a` is zero-based and must point to an option. Every question needs a clear `w` explanation and
source. Subject chips are generated from each question's `c` value.

Current structural state: 259 limitations questions and 8 separate memory-item cards. Recount
after every question edit; do not rely on these figures if validation reports something else.

`systems-exam-questions.js` defines `window.SYSTEMS_EXAM_QUESTIONS` and
`window.SYSTEMS_EXAM_TOPICS`. It contains all 315 questions present in the supplied student study
guide across 19 subjects. Guide numbers 311–317 are absent from the source PDF. The dedicated
259-question `BANK` remains separate and is not appended at runtime. Each systems object has:

```js
{ n: 1, p: 2, c: "Subject", q: "Question", o: ["A", "B", "C", "D"], a: 0,
  w: "Explanation", ref: "FCOM ... · Guide Q1, PDF p.2", review: "fcom-source-checked", verification: { id: "S001", status: "checked", pdfPages: [1], sourceHash: "..." } }
```

Every systems item requires exactly four choices, a valid zero-based answer, a non-empty
explanation and a visible source reference. Since 14 September 2026, Systems Exam Prep uses only
the 70-question Communications allowlist: 19 Question Bank.xlsx rows (QB152–QB158 and
QB160–QB171) plus 51 FCOM-checked additions (C23-001–C23-051). QB159 and the supplement's DFDR,
QAR and accelerometer content are intentionally excluded because they belong to ATA 31
Indicating/Recording, not DSC-23. CVR remains because it is covered by DSC-23-10-40. All guide and
workbook records remain archived. Systems quizzes, weak-area review and mastery totals must exclude
every other row. `TrainerCore.isCommunicationsQuestion` enforces the exact IDs and both source hashes.
`selectSystemDeck` draws fresh rows before the oldest previous selections and shuffles question order.
`communications-option-quality.js` replaces only the displayed choices, retains `sourceOptions` and
`sourceAnswerIndex`, and must cover the full 70-question allowlist. Every correct answer remains exact;
all three distractors must answer the stem, use parallel wording and be plausible but unambiguously wrong.
Both feedback modes and Run Again share `a320_systems_communications_rotation_v1` draw history;
do not change existing answer/mastery keys. Reset progress clears rotation too.

## Source and applicability rules

Accuracy is safety-critical. Do not infer aircraft values from another variant or a generic web
source.

- Engine limits use the explicit IAE inserts: A/C `20-IMHT`, `13 AUG 2018`, LIM-ENG pp.1/4–3/4, uploaded PDF pp.3737–3739. Preserve `FOR ENGINEERING USE ONLY`. The compilation cover's `21-CMHT` identity and newer date do not make every engine section applicable to IAE. Check engine-section dividers and page effectivity before any revision.
- The 35 engine limitation items and seven corrected systems items have evidence records in `trainer-core.js`. The 1,021 original questions/cards/cells have item audit records in verification-audit.json, and the 51 Communications additions are mapped in communications-fcom-audit.json; 98 original questions/cells are withheld after the 6 September follow-up. All 102 original exclusions have a dated followUp record. Runtime quiz eligibility requires checked/corrected status, source hash and page references. Never promote an item to checked without a matching source record, including its exact PDF page, Ident, revision and applicability. A source restriction is information to preserve, not a stale string to delete.
- A numeric IAE minimum oil quantity/consumption allowance is unresolved in the supplied compilation. Keep it unverified and refer to the applicable before-walkaround procedure; do not substitute a quantity from a different engine section.
- Keep every served aircraft and engine item within the Ansett A320 IAE V2500 scope. Reject any question, distractor, explanation or legacy page that introduces a different aircraft or engine variant.
- The standalone IAE engine systems explorer uses the actual 20-IMHT IAE insert effectivity and engineering-use restriction.
  Display descriptions use the separate IAE 19-IMHE insert, 12 AUG 2015, pp.2314–2322. Preserve its identity. Exact geometry and arbitrary failure propagation are illustrative, not verified operational logic.
- The PXS and GTE self-study courses were removed at the user's request. Do not restore their menu, bank, quiz screens or cache entry. Systems Exam Prep and the IAE explorer remain part of the trainer.
- Systems Exam Prep retains the guide location, reference and explicit verification status for every item. MEL items must direct the
  learner to the current operator MEL. Do not move these questions into `BANK`.
- The hydraulic trainer is sourced from the supplied active A/C 21-CMHT DSC-29-10 and DSC-29-20 pages dated 22 MAY 24. Keep the three fluid systems independent: the PTU transfers mechanical power, never hydraulic fluid.
- Cite limitation questions with the relevant `FCOM LIM-...` reference.
- Never invent a source reference. If the source is unavailable or ambiguous, flag the item.
- The app is a study aid; the current approved FCOM, QRH and company procedures are authoritative.

## Safe editing and validation

1. Edit `index.html` first.
2. Keep `A320_Checkride_Trainer.html` identical to it.
3. Validate JavaScript syntax and check that:
   - the limitations bank total is 259 unless a deliberate addition/removal changes it;
   - every served Limitations Check item is sourced from an `FCOM LIM-...` page;
   - Systems Exam Prep offers exactly the 70 Communications questions listed above;
     315 guide records and the other 279 workbook records remain archived, with no duplicate normalized question text;
   - every Systems Exam Prep question has exactly four choices, a valid answer index, a non-empty
     explanation and a visible source reference (workbook filename and row for active systems questions);
   - every answer index is valid;
   - every question has a non-empty explanation/reference;
   - normalized question text contains no duplicates;
   - both main HTML files are identical;
   - the fill-in datasets are identical;
   - the engine explorer exposes 8 system tabs and 23 selectable 3D parts;
   - every 3D part links to an existing system tab and every system has at least one operating mode.
   - the flow trainer exposes 13 phases; every role step references an existing cockpit control;
   - every PF/CM2 and PM/CM1 role completes in Flow Map mode by selecting each source action once in order;
   - Flow Map assessment mode starts without visible sequence numbers, while correct selections number and connect the completed path;
   - every mapped cockpit hit box stays within its panel and no two control hit boxes overlap;
   - Cockpit Preparation starts after preliminary preparation, powered by external power, with both engines OFF and parking brake ON;
   - a correct sequence completes each PF/CM2 and PM/CM1 run, while future-step inputs grade out of order.
4. Search every served file, including distractors and filenames, for content outside the strict Ansett A320 IAE V2500-A5 scope.
5. Bump the cache version in `sw.js` after any app-content change. Current cache:
   `a320-trainer-v48`. All cockpit/flow scripts and styles use v48 and match the precache manifest. Navigation fallbacks must never serve HTML to script requests.

Run `node validate-trainer.js` and `node test-trainer.js`. Validation includes `test-system-rotation.js`, `test-audit.js` and `test-communications-options.js`; CI runs the gate on pushes and pull requests. These are structural and source-record checks, not operational certification. A completed exam is required for a pass; test the unrounded threshold. Keep dependent options in their original order or rewrite them as independent statements. Corrected answers must not inherit mastery from the previous content.

Keep the app self-contained: no external scripts, fonts or CDNs. Browser storage is used for
the app's existing local study progress; preserve its keys and behaviour unless a change is
specifically requested.

## Publishing

The production site is:

https://tom702-bot.github.io/a320/

Publish the changed source files to `main`, wait for GitHub Pages to finish, then verify the live
page and service worker. On an iPhone, opening the site once while online allows the bumped cache
to replace the prior offline copy. If an installed Home-Screen copy remains stale, remove it,
open the site in Safari, and add it to the Home Screen again.

Audit revision: unchanged questions retain fcom-audit-20260905; L133, S116, S128 and S145 use fcom-followup-20260906; C23-001–C23-051 use communications-fcom-20260914. Eligible limitations: 200/259; archived systems data: 645/664; active Systems Exam Prep: 70/70 Communications; fill cells: 121/141; memory: eight self-graded cards. Do not restore a withheld item without resolving its recorded applicability question. A matched-in-source follow-up is not grading eligibility. test-audit.js, verification-audit.json and communications-fcom-audit.json are part of the publication gate. Flow scores use a320flows_v3 and are practice recall only. OUTSTANDING_REVIEW.md explains the 84 remaining applicability questions and 14 source conflicts/gaps.

Virtual cockpit update (16 September): See FLOW_REVIEW.md and flow-evidence.js for the confirmed source, corrected EFIS roles/order, self-check boundaries and tests. Preserve test-cockpit.js in the validation gate.

The seamless cockpit update uses cockpit-native.js/css, cockpit-systems.js and flow-procedures.js. Keep repeated controls (e.g. BAT OFF then AUTO) ordered, require every member of grouped anti-ice actions, and keep physical/data self-checks distinct from verified switch positions. All visible controls must remain operable in touch, pointer and keyboard workflows.

FlyByWire artwork update: cockpit-photo-layout.js maps source-image pixel rectangles into panel coordinates. fbw-cockpit.png is the unmodified 1426 × 2744 FlyByWire reference atlas. Keep transparent switch hit targets aligned to the source image; never place extension grids on cockpit panels. Observation/data checks belong in the separate crew tray.

SOP review: flow-sop.js overrides legacy scan/tasksharing entries with reviewed SOP text. SOP_AUDIT.md and sop-action-audit.json describe coverage. Keep test-sop.js in the validation gate. Engine 1 precedes engine 2 per SOP-08. Pushback and stationary branches have different brake/checklist order. Timing observations remain self-checks. Do not claim full SOP coverage or resolve aircraft fit without an MSN.
