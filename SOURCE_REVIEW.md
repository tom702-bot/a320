# Source correction record — 5 September 2026

This update corrects the release reviewed at `68697c983f19bb576076293e25e298b1174e059f`. Scope remains Ansett A320 IAE V2500-A5.

## Manuals actually inspected

- **PDFA320_FCOM_AATIAECUSTOM20260521.pdf:** 3,901 readable pages. SHA-256: `7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06`. The cover explicitly requires selection of the engine references appropriate to the simulator. IAE divider: PDF p.3733. IAE limitations: PDF pp.3737–3739, LIM-ENG pp.1/4–3/4, A/C 20-IMHT, 13 AUG 2018, **FOR ENGINEERING USE ONLY**. All three limit pages were visually inspected. The later engine section is a different applicability and must not supply IAE answers merely because its date is newer.
- **A320APT1V1.11.pdf:** the uploaded file internally identifies itself as a 21-CMHT Quick Reference Handbook and contains 227 pages. It was treated according to its contents, not assumed to be an APT lecture. It does not independently resolve the missing IAE oil-quantity applicability.
- **PDF-A320-MSN_09977-FCTM-NVB-202405227.pdf:** 464 readable pages. GI p.1/24, PDF p.25, dated 22 MAY 2024, states that the FCOM remains the reference when FCTM data differs. The FCTM was not used to override engine-specific FCOM limitations.

## Corrections and evidence

`trainer-core.js` records the FCOM PDF page, printed page, Ident, effectivity, revision, source restriction and review date for each checked fact. Thirty-five engine limitation questions use these records; this includes six added questions covering EGT, takeoff/go-around duration and engine-start crosswind capability. Systems Q136, Q137, Q139, Q140, Q142, Q298 and Q300 were corrected or clarified against explicit IAE pages. The separate self-study courses were subsequently removed at the user's request. Other powerplant study references were not promoted to checked without individual evidence.

IAE system pages checked for those corrections: DSC-70-20 p.1/6 (PDF p.2264), DSC-70-70 p.2/4 (p.2293), DSC-70-80-40 pp.2/6, 5/6 and 6/6 (pp.2305, 2308, 2309). The engine explorer's automatic-start description was aligned with DSC-70-80-40 p.4/6 (PDF p.2307): the fuel/ignition step follows the automatic dry-crank sequence, and the start valve/ignition cut out above 43% N2. Starter engagement limits are not the normal cutout threshold.

The IAE LIM oil-quantity entry refers to PRO-NOR-SOP-04. The compiled before-walkaround page refers back to LIM-ENG, so it does not resolve the numeric IAE minimum or allowance. The previous numeric answers were removed. The trainer now asks for the source procedure and flags the unresolved value rather than substituting another engine's limits.

## Application changes

- Source checks are item-specific. The 306 remaining systems questions and 224 remaining airframe/system limitations retain references with individual applicability checks pending. Two MEL questions require the current operator MEL. Installed options also require simulator applicability checks. Nothing is described as operationally certified.
- Letter-dependent and “above” choices were rewritten; the renderer also preserves original ordering if a future question has such dependencies.
- A pass requires a completed run and an unrounded score of at least 80%. Ending after one correct answer reports an incomplete exam.
- The v37 flow-script URLs match the fresh offline manifest. Only navigation requests receive an HTML fallback, unrelated caches are preserved, and unsuccessful HTTP responses are not cached.
- Revised items do not inherit previous mastery. Unrelated progress is preserved.
- The subject label and shortest all-subject run derive from the actual 19 categories.
- PXS and GTE Parts 1 and 2 self-study courses are removed, including their menu, 270-question bank, screens, event handlers, progress display and precache entry.

## Verification

The existing CI entry point, `node validate-trainer.js`, now also runs `test-trainer.js`. The suite executes the actual scoring and rendering functions and exercises service-worker install, activation and offline script requests with controlled browser-API stand-ins. It checks zero/partial/completed runs, a score that rounds to 80% but must fail, letter-dependent choices, retained source restrictions, revised-answer progress, fresh offline scripts, and missing-script handling. These checks establish the tested software behaviour and consistency with reviewed source records; they do not certify every system model or operational applicability. No browser visual QA was performed.
