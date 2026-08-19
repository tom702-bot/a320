# Ansett A320 Checkride Trainer — Project Guide

This repository contains a self-contained, installable A320 study app. GitHub Pages serves
`index.html`, and the service worker makes the app available offline on an iPhone Home Screen.

## Files

| File | Role |
|---|---|
| `index.html` | Main app: HTML, CSS, JavaScript and question data in one file. |
| `A320_Checkride_Trainer.html` | Standalone twin of `index.html`; keep it byte-for-byte identical. |
| `A321P2F_Limitations_FillCheck.html` | Legacy filename for the standalone A320 fill-and-check page. Its visible title and data are A320-specific. |
| `electrical.html` | Interactive ECAM-style A320 electrical-system synoptic and configuration explainer. |
| `engine.html` | Provisional interactive IAE V2500 engine-systems study assistant. |
| `engine-sim.js` | System layouts, normal/abnormal modes and ECAM-style SVG rendering for the IAE engine explorer. |
| `engine-3d.js` | Lightweight procedural 3D cutaway renderer, touch controls and component-to-system links. |
| `sw.js` | Offline cache. Bump `CACHE` whenever app content changes. |
| `manifest.webmanifest` | Installable-app metadata. |
| `icon-180.png`, `icon-192.png`, `icon-512.png` | App icons. |

## Question data

The main app defines these arrays:

```js
const BANK = [ ... ];
const BTC_Q = [ ... ];
const NEW_Q = [ ... ];
const MEM = [ ... ];
const FILL_SECTIONS = [ ... ];
```

`BTC_Q` and `NEW_Q` are appended to `BANK` at startup. Each multiple-choice object has:

```js
{ c: "Subject", q: "Question", o: ["options"], a: 0, w: "Reason · source" }
```

`a` is zero-based and must point to an option. Every question needs a clear `w` explanation and
source. Subject chips are generated from each question's `c` value.

Current audited state: 330 multiple-choice questions and 8 separate memory-item cards. Recount
after every question edit; do not rely on these figures if validation reports something else.

## Source and applicability rules

Accuracy is safety-critical. Do not infer aircraft values from another variant or a generic web
source.

- Limitations source used for the August 2026 audit: Ansett/Navblue A320 FCOM limitations extract,
  active aircraft header `NVB A320 For A/C: 21-CMHT`, dated `22 MAY 24`.
- Use the active `CFM & PW` engine limitations pages for the audited quiz bank.
- Do not mix the separate IAE engine pages stamped `FOR ENGINEERING USE ONLY` into the active A/C 21-CMHT quiz content.
- The standalone IAE engine systems explorer is an explicit exception requested by the user. Keep its source/effectivity warning prominent and describe it as provisional. Its source is the supplied A/C 20-IMHT / 19-IMHE IAE engineering appendix (2015-2018), not the active A/C 21-CMHT CFM/PW section.
- Existing DSC systems and QRH memory-item questions were outside that limitations-only audit.
  They must be checked against the relevant supplied DSC/QRH source before being described as
  revalidated.
- Cite limitation questions with the relevant `FCOM LIM-...` reference.
- Never invent a source reference. If the source is unavailable or ambiguous, flag the item.
- The app is a study aid; the current approved FCOM, QRH and company procedures are authoritative.

## Safe editing and validation

1. Edit `index.html` first.
2. Keep `A320_Checkride_Trainer.html` identical to it.
3. Keep the standalone fill page's `SECTIONS` data aligned with `FILL_SECTIONS`.
4. Validate JavaScript syntax and check that:
   - the total is 330 unless a deliberate addition/removal changes it;
   - every answer index is valid;
   - every question has a non-empty explanation/reference;
   - normalized question text contains no duplicates;
   - both main HTML files are identical;
   - the fill-in datasets are identical.
5. Search correct answers and explanations—not just distractors—for superseded A321P2F or
   engineering-only values.
6. Bump the cache version in `sw.js` after any app-content change. Current cache:
   `a320-trainer-v17`.

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

