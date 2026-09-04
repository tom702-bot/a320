# Ansett A320 Checkride Trainer — Project Guide

This repository contains a self-contained, installable A320 study app. GitHub Pages serves
`index.html`, and the service worker makes the app available offline on an iPhone Home Screen.

## Files

| File | Role |
|---|---|
| `index.html` | Main app: HTML, CSS, JavaScript and question data in one file. |
| `A320_Checkride_Trainer.html` | Standalone twin of `index.html`; keep it byte-for-byte identical. |
| `systems-exam-questions.js` | 315 questions from the supplied student study guide across 19 subjects, reconciled to the current AAT A320 FCOM. |
| `self-study-quizzes.js` | Nine source-grounded 30-question banks (270 questions) in fixed A-D order. |
| `electrical.html` | Interactive ECAM-style A320 electrical-system synoptic and configuration explainer. |
| `electrical-sim.js` | Electrical network evaluation, component failures, transfers and dimensional canvas rendering. |
| `hydraulic.html` | Interactive green/blue/yellow A320 hydraulic generation and distribution trainer. |
| `hydraulic-sim.js` | Hydraulic source, PTU, RAT, priority-valve, isolation and component-failure model. |
| `engine.html` | Interactive IAE V2500 engine-systems study assistant. |
| `engine-sim.js` | Eight system layouts, normal/abnormal modes, component failures and ECAM-style SVG rendering for the IAE engine explorer. |
| `engine-3d.js` | Lightweight procedural 3D cutaway renderer with 23 selectable parts, airflow overlays, touch controls and component-to-system links. |
| `flows.html` | Interactive Ansett A320 PF/PM flow practice with phase sequences, three practice views, fixed CM1/PM and CM2/PF allocation, and artwork-only panel reference. |
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

Current audited state: 253 limitations questions and 8 separate memory-item cards. Recount
after every question edit; do not rely on these figures if validation reports something else.

`systems-exam-questions.js` defines `window.SYSTEMS_EXAM_QUESTIONS` and
`window.SYSTEMS_EXAM_TOPICS`. It contains all 315 questions present in the supplied student study
guide across 19 subjects. Guide numbers 311–317 are absent from the source PDF. The dedicated
253-question `BANK` remains separate and is not appended at runtime. Each systems object has:

```js
{ n: 1, p: 2, c: "Subject", q: "Question", o: ["A", "B", "C", "D"], a: 0,
  w: "Explanation", ref: "FCOM ... · Guide Q1, PDF p.2", review: "fcom-checked" }
```

Every systems item requires exactly four choices, a valid zero-based answer, a non-empty
explanation and a visible FCOM or current-operator-MEL reference. Mixed runs must remain balanced across selected subjects.

`self-study-quizzes.js` separately defines 270 course-test questions as
`window.SELF_STUDY_QUIZZES`. Each of the three course areas has three banks of 30 questions.
Every question has exactly four fixed options, and `a` is a zero-based answer index from 0 through 3.
The app selects 30 questions per attempt, prioritises unseen question keys from the 90-question
course pool, and only reuses the oldest keys after all 90 have been served. These tests are sourced from the
supplied Gas Turbine Engines A320 Self Study Guides (Parts 1 and 2) and Pressurisation A320 Self
Study Guide; each rationale includes its source slide number in the UI.

## Source and applicability rules

Accuracy is safety-critical. Do not infer aircraft values from another variant or a generic web
source.

- Airframe, system and IAE V2500 engine limitations use the AAT A320 FCOM with active aircraft
  header `NVB A320 For A/C: 21-CMHT`, custom issue `16 MAR 2026` (Airbus content issue `22 MAY 2024`).
- Keep every served aircraft and engine item within the Ansett A320 IAE V2500 scope. Reject any question, distractor, explanation or legacy page that introduces a different aircraft or engine variant.
- The standalone IAE engine systems explorer uses the same 21-CMHT source/effectivity statement.
  Physical engine, instrumentation and compressor-stability teaching detail also uses the supplied
  2022 Gas Turbine Engines A320 Self Study Guides Parts 1 and 2; keep their slide references visible.
- The three course tests in `self-study-quizzes.js` are separately sourced from the supplied self-study guides. Keep their explanations and slide references visible, and do not describe them as part of the FCOM limitations audit.
- Systems Exam Prep uses the supplied student guide reconciled to the current AAT A320 FCOM and
  exposes both its guide location and authority in the Reference line. MEL items must direct the
  learner to the current operator MEL. Do not move these questions into `BANK`.
- The hydraulic trainer is sourced from the supplied active A/C 21-CMHT DSC-29-10 and DSC-29-20 pages dated 22 MAY 24. Keep the three fluid systems independent: the PTU transfers mechanical power, never hydraulic fluid.
- Cite limitation questions with the relevant `FCOM LIM-...` reference.
- Never invent a source reference. If the source is unavailable or ambiguous, flag the item.
- The app is a study aid; the current approved FCOM, QRH and company procedures are authoritative.

## Safe editing and validation

1. Edit `index.html` first.
2. Keep `A320_Checkride_Trainer.html` identical to it.
3. Validate JavaScript syntax and check that:
   - the limitations bank total is 253 unless a deliberate addition/removal changes it;
   - every served Limitations Check item is sourced from an `FCOM LIM-...` page;
   - Systems Exam Prep contains 19 selectable subjects and 315 guide questions, with no duplicate
     normalized question text;
   - every Systems Exam Prep question has exactly four choices, a valid answer index, a non-empty
     explanation and a visible FCOM or current-operator-MEL reference;
   - the self-study bank contains 3 courses, 3 banks per course, 30 questions per bank, and 4 options per question;
   - every answer index is valid;
   - every question has a non-empty explanation/reference;
   - normalized question text contains no duplicates;
   - both main HTML files are identical;
   - the fill-in datasets are identical;
   - the engine explorer exposes 8 system tabs and 23 selectable 3D parts;
   - every 3D part links to an existing system tab and every system has at least one operating mode.
   - the flow trainer exposes 10 phases; every role step references an existing cockpit control;
   - every PF/CM2 and PM/CM1 role completes in Flow Map mode by selecting each source action once in order;
   - Flow Map assessment mode starts without visible sequence numbers, while correct selections number and connect the completed path;
   - every mapped cockpit hit box stays within its panel and no two control hit boxes overlap;
   - Cockpit Preparation initializes every modeled power source and powered system to its cold-and-dark value;
   - a correct sequence completes each PF/CM2 and PM/CM1 run, while future-step inputs grade out of order.
4. Search every served file, including distractors and filenames, for content outside the strict Ansett A320 IAE V2500-A5 scope.
5. Bump the cache version in `sw.js` after any app-content change. Current cache:
   `a320-trainer-v35`.

Run `node validate-trainer.js` for the full automated version of these checks. CI runs the same command on pushes and pull requests.

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
