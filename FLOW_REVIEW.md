# Virtual cockpit and flow review — 16 September 2026

The default flow view now places the existing interactive overhead, main panel and pedestal in a perspective cockpit workspace. Mouse/touch dragging changes the viewing direction; wheel, pinch, buttons and keyboard adjust zoom. Panel shortcuts and a Hint action help locate controls. Every switch action uses an explicit position chooser, including confirmation of an already-correct position. Looking, inspecting and cancelling do not grade an action. A separate visual-check surface holds non-switch acknowledgements.

PF/CM2 and PM/CM1 remain the existing training allocation. This assignment is a user preference, not a claim that PF always occupies the right seat. The existing Flow Map, Focused Panel and Full Panel views remain available. No external scripts, fonts, models or services are needed; cache v45 includes the new files.

## Source used

The user confirmed the supplied `PDFA320_FCOM_AATIAECUSTOM20260521.pdf`, 3,901 pages, SHA-256 `7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06`. The three-page `A320 Panel Scans.pdf` supplies the existing scan-subset structure. The FCOM compilation contains AAT SOP pages and NVB A/C 21-CMHT tasksharing pages with different revisions. It is marked FOR TRAINING ONLY. No current controlled revision, aircraft configuration summary or simulator equipment list has been established by this update.

## Corrections

| Flow | Change | Evidence in supplied FCOM |
|---|---|---|
| 10,000 ft AAL climb | PF selects CSTR for grid MORA; PM selects ARPT. Replaces generic AS RQRD. | PDF p.3289; AAT PRO-NOR-SOP-14 p.5/6, 05 MAY 25; Ident PRO-NOR-SOP-14-A-00020076.0001001 / 24 NOV 23. Generic tasksharing p.3421 remains less specific. |
| 10,000 ft AAL descent | PF CSTR precedes LS, followed by NAVAIDs. NAV accuracy monitoring is qualified by GPS PRIMARY LOST. | PDF pp.3311, 3423; PRO-NOR-TSK p.12/22, 22 MAY 24; Ident PRO-NOR-TSK-00024911.0002001 / 14 NOV 23. |
| After landing | Lighting target specifies LAND RETRACT, STROBE AUTO and NOSE TAXI after vacating, with other lights as required. | PDF p.3382; AAT PRO-NOR-SOP-21 p.2/6, 09 SEP 25; Ident PRO-NOR-SOP-21-A-00011840.0001001 / 24 NOV 23. |
| Cockpit preparation | Broad panel scans and FMGS completion are ungraded self-check acknowledgements. A single SCAN click does not verify the many underlying actions. | PDF pp.3414–3416; PRO-NOR-TSK pp.3–5/22, 22 MAY 24. |

Per-phase source references and limitations are in `flow-evidence.js` and displayed in the trainer. Existing pushback, APU, icing, flap, TCAS-fit, engine-cooling and parking prerequisites remain conditional. Exact settings must not be inferred where the source requires conditions or applicability that the model does not establish.

## Boundaries that remain

- These ten flow-card subsets are not the complete FCOM procedures, checklists or crew callouts. Preparation still includes broad scans rather than every switch and test. Preliminary power-up, engine start, flight and landing are not simulated between phases.
- Visual checks, MCDU data entry, live indications, speeds, cooling times, brake pressure/temperature and crew actions are self-reported. Phase sequences preset the next configuration; they are not an aircraft systems simulation.
- Artwork, hotspot geometry and the perspective cockpit are illustrative. Existing source limitations concerning fuel-control fit and optional equipment remain unresolved.
- Scores measure the tested model inputs. Runs containing conditional acknowledgements cannot claim unassisted mastery of a fully verified procedure. Opening the flow list counts as assistance, including its native disclosure control. Hints do not expose the following step after completing the hinted action.

## Validation

`node validate-trainer.js` runs the existing source, bank, scoring and offline regressions plus `test-cockpit.js`. The latter completes all 38 role/context combinations through 268 control inputs, checks source coverage and asserts the corrected EFIS allocation/order. Browser verification exercised 46 actual control selections across seven desktop runs and a 390 px phone view, drag without switch activation, movement back to legacy views, and no page errors or horizontal overflow. Desktop and phone screenshots were visually inspected. These are software checks, not operational certification.
