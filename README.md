# Ansett A320 Checkride Trainer

An installable study app for the Ansett A320 IAE V2500-A5. Live site: https://tom702-bot.github.io/a320/

The 5 September 2026 FCOM audit reviewed all 259 limitation questions, 315 systems questions, eight memory cards and 141 fill-in cells. Grading includes 199 limitations, 293 systems questions across 18 subjects, and 121 fill-in cells. The remaining 102 questions/cells are withheld because the supplied manual does not establish the aircraft variant, an installed option, or an operator MEL answer. Source matching is not operational certification or confirmation of the latest revision.

Every eligible question carries FCOM PDF pages and an audit ID. The complete result, original answer, corrections, exclusions, manual identifiers and page revisions are in verification-audit.json; SOURCE_REVIEW.md explains the source scope. Systems guide numbers 311–317 are absent from the supplied guide. All 315 original guide records remain traceable, but withheld items do not enter practice, exams, weak-area review or mastery counts. The limitation lookup also uses only eligible records.

The IAE limits use A/C 20-IMHT, 13 AUG 2018, PDF pp.3737–3739, marked FOR ENGINEERING USE ONLY. The compilation contains different aircraft and revision inserts; its cover and filename do not override individual effectivity. Numeric IAE minimum oil quantity and consumption allowance remain unresolved.

Memory cards distinguish conditional, simultaneous and follow-up actions. They are self-graded training summaries, not full checklists or competency assessments. Fill & Check accepts equivalent numeric formatting and matching optional units while rejecting wrong units, arbitrary text, missing signs and different ranges.

Ten flow phases retain CM1/PM and CM2/PF as the user's selected allocation. Cockpit preparation begins cold and dark. Flows are source-referenced scan subsets, with conditional actions acknowledged separately. Scores measure recall of the practice subset. The 344-control cockpit artwork is an interaction canvas, not proof of aircraft equipment fit. This project is not affiliated with FlyByWire Simulations.

Electrical, hydraulic and eight IAE engine diagrams remain ungraded illustrative models. Electrical study assumes a settled in-flight configuration above 100 kt, charged batteries and completed emergency-generator coupling; AC ESS alternate feed requires selection because optional automatic switching is not assumed. Hydraulic study excludes unresolved NWS routing, pressure dynamics and accumulator endurance. Engine geometry and arbitrary component-failure propagation are explanatory, not maintenance schematics. Cross-system examples state the assumed source availability.

Learn mode gives immediate feedback; exams defer it to debrief. A pass requires a completed run and an unrounded score of at least 80%. Two consecutive correct recalls are required after a miss. The audited revision invalidates previous question mastery and flow scores. Progress stays on the device.

Run node validate-trainer.js before publication. It includes test-trainer.js and test-audit.js: source-record coverage and eligibility, branch-specific memory content, unit-aware grading, flow conditions, electrical source cases and fresh offline assets. The service-worker cache is v38. These checks validate the tested software behavior, not operational airworthiness. The removed PXS/GTE courses remain absent.
