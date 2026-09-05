# FCOM audit — 5 September 2026

Scope: Ansett A320 IAE V2500-A5. Review base: published main 81cba9c812a8d59093c9a1d5f6b0568154a4badf.

## Complete question inventory

| Material | Reviewed | Source matched without substantive change | Corrected or clarified | Withheld |
|---|---:|---:|---:|---:|
| Limitations | 259 | 187 | 12 | 60 |
| Systems guide | 315 | 161 | 132 | 22 |
| Memory cards | 8 | 0 | 8 | 0 |
| Fill-in cells | 141 | 83 | 38 | 20 |
| Total | 723 | 431 | 190 | 102 |

Corrected counts include question wording, conditions, distractors and explanations, not only changes to the keyed answer. All 723 records are in verification-audit.json with original content, result, status, rationale and PDF-page references. The source hash, printed-page footer, Ident and page revision are preserved. No withheld item enters verified question grading, weak-area review, mastery counts or the limitation lookup. Eligible totals: 199 limitations, 293 systems questions, eight self-graded memory cards and 121 fill-in cells.

## Source identity and limitations

The supplied PDFA320_FCOM_AATIAECUSTOM20260521.pdf contains 3,901 pages. SHA-256: 7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06. It is a mixed training compilation, not evidence of the current controlled operator revision. The IAE system insert is A/C 20-IMHT, 13 AUG 2018, FOR ENGINEERING USE ONLY. IAE LIM-ENG is PDF pp.3737–3739; the divider is p.3733. IAE display descriptions in pp.2314–2322 are a separate A/C 19-IMHE insert dated 12 AUG 2015. Many airframe pages are A/C 21-CMHT, 22 MAY 2024; AAT SOP insert revisions differ. Refer to each audit record instead of assuming cover effectivity.

The uploaded A320APT1V1.11.pdf is internally a 227-page 21-CMHT QRH, not an APT lecture. It does not establish IAE-specific values. The 464-page FCTM states that FCOM takes precedence; it was not used to override the engine-specific FCOM. Neither file establishes the missing operator MEL or the Ansett simulator option list. No replacement values were taken from unrelated engine sections.

Withheld items include variant weights and minimum control speeds; optional avionics/approach/HUD/ROPS/GSM/ISPSS data; unestablished fuel-system, air-conditioning, ADIRS and steering standards; ambiguous radio-panel behavior; fuel approval conflicts; and both MEL questions. Numeric IAE minimum oil quantity/consumption allowance remain unresolved; the retained question asks for the procedure reference rather than inventing a value.

## Principal corrections

- Missing operating conditions in landing tailwind, fuel imbalance, icing, autopilot use and automatic landing.
- Incorrect or ambiguous autoflight, pneumatic, electrical, fire-protection, flight-control and landing-gear questions; keyed options and distractors were reviewed together.
- GPWS warning: simultaneous AP OFF, full backstick held, TOGA, speedbrakes retracted and appropriate bank, with configuration unchanged until clear. Removed FOLLOW SRS.
- TCAS memory card explicitly uses the branch when AP/FD TCAS is unavailable. The approach CLIMB-RA go-around exception is separated from the generic AP/FD OFF branch.
- Emergency descent: five boxed memory actions separated from checklist continuation. Removed the unsupported unconditional MASK OFF at 10,000 ft instruction.
- Stall, unreliable speed, loss of braking and windshear cards now include their triggers and conditional branches.
- Fill grading now checks units and preserves signs/ranges. Memory completion is self-reported recall; an early exit is incomplete.

## Flow and model review

All ten retained flow subsets were compared with FCOM SOP/Tasksharing passages; phase references and retained steps are recorded in the audit. Corrected pushback parking-brake conditions, APU use, flap/icing conditions, default TCAS TA/RA, FLAPS ZERO at S speed on PF order, 10,000 ft AAL and landing-light RETRACT, parking-light conditions and source availability before shutdown. The user-selected crew allocation and the subsets are not a complete approved checklist. The visual control catalog and aircraft artwork do not verify equipment fit.

Electrical source cases were corrected for single-TR crossfeed, ESS TR selection, battery-only BAT 2 direct DC ESS, unpowered DC BAT in flight, emergency-generator essential shed buses and optional AC ESS alternate switching. IDG/C/B qualifications were corrected. Hydraulic corrections clarify reservoir failures, PTU inhibits, brake-accumulator reserve and withheld NWS routing. Engine display corrections distinguish primary fuel FLOW from secondary fuel USED and correct oil sensing paths; unsupported numeric diffuser velocity and exact sensor-placement claims were removed. Per-system references are displayed.

Models are ungraded conceptual study aids. Their geometry, timings, battery/accumulator endurance and arbitrary multi-failure propagation are not certified by this review. The audit explicitly separates these bounds from question source checks.

## Validation and publication

node validate-trainer.js runs the existing regressions and test-audit.js. The suite checks all 723 records, fail-closed eligibility, corrected answer consistency, complete-exam scoring, progress revision, memory branches, numeric units/signs/ranges, flow conditions and actual electrical evaluator source cases. It also tests service-worker installation and fresh offline script loading. HTML twins remain identical; cache v38 replaces the prior release. No browser visual QA was performed. The removed PXS/GTE courses remain absent.
