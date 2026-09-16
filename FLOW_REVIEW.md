# Virtual cockpit flow trainer — 16 September 2026

## Interaction

Version 46 replaces photo-only controls with native interactive panels in one perspective cockpit. Drag to look; pinch/scroll to zoom; panel shortcuts change view. Pushbuttons act directly. Selectors open beside the control, and tapping a displayed value confirms an already-correct position. Guided practice follows each remaining control in a grouped action. A control finder locates named controls without operating them. Explore pauses grading; returning to a flow or resetting restores normal grading. Both MCDUs accept scratchpad/line-select entries; ECAM page buttons, radio standby tuning/transfer and the transponder keypad update their displays. FCU altitude, heading, speed and QNH accept numeric entry. These interactions are rehearsal models, not aircraft avionics simulations.

The catalog has 472 controls/checks. Seven former broad-scan controls are hidden. Crew observations use visibly distinct dashed check cards. Every visible control responds; the geometry and instrument artwork are schematic. The original photo-based flow map remains available. All assets are local and included in offline cache v46.

## Source

User-confirmed file: `PDFA320_FCOM_AATIAECUSTOM20260521.pdf`, 3,901 pages; SHA-256 `7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06`. The compilation contains AAT SOP pages and NVB tasksharing inserts with differing effectivity/revision dates. Page numbers below are one-based PDF pages. The supplied A320 Panel Scans supplies the original phase structure. PF=CM2/right and PM=CM1/left remains the selected allocation, not a universal PF/seat rule.

## Procedure expansion

- Preparation: 86 PF actions and 19 PM actions replace the broad scan buttons. Individual control positions, repeated BAT OFF/AUTO steps, recorder/fire tests, own-side instruments, FMGS review and crew checks derive from AAT PRO-NOR-SOP-06, PDF pp.3197–3218; briefing/checklist p.3416. Start is powered, after preliminary preparation.
- Before start: separate cabin-door closure and slide arming; clearance/ground-service prerequisites, accumulator, conditional pushback steering-disconnect check and shared checklist. AAT SOP-07 pp.3224–3226; tasksharing p.3417.
- Engine start: PF engine 2 then engine 1, with separate announcements and observed idle checks. Tasksharing p.3417.
- After start: rudder reset followed by neutral check, pitch trim selection, ground disconnect call and shared checklist. AAT SOP-09 pp.3239–3241; tasksharing p.3418.
- Taxi: clearance, park brake, brake/control checks, FMS/FCU/FD/own-side checks and briefing precede the original panel scan. AAT SOP-10 pp.3251–3253; tasksharing p.3418.
- After takeoff: PM APU, engine mode, TCAS restoration and anti-ice conditions. Tasksharing p.3421.
- 10,000 ft climb: PF CSTR, PM ARPT per the AAT SOP, overriding generic AS RQRD wording. AAT SOP-14 p.3289; tasksharing p.3421.
- Descent: PF CSTR, then LS as required, then navigation checks; NAV accuracy condition retained for GPS PRIMARY LOST. AAT SOP-17 p.3311; tasksharing p.3423.
- After landing: after-vacating LAND RETRACT/STROBE AUTO/NOSE TAXI scored separately from remaining lighting conditions. Flap exceptions remain self-checked. AAT SOP-21 pp.3381–3383; tasksharing p.3431.
- Parking: cooling/power prerequisite, wing/beacon OFF, ground contact, brake-fan condition and checklist added around existing shutdown actions. AAT SOP-22 pp.3390–3391,3396; tasksharing pp.3431–3432.
- Securing: CM1/CM2 duties, maintenance bus, signs, power, windows, checklist and EFB closure/shutdown. Tasksharing p.3432.

Every phase has evidence metadata and PDF references; detailed added steps retain their page reference. Conditional choices and physical observations are reported separately from verified switch positions. Both dry and operator-conditions contexts require every member of an anti-ice group.

## Limits of source matching

This is a procedural practice cockpit, not a certified simulator or a complete reproduction of the FCOM. Preliminary preparation, aircraft motion, engine dynamics, performance calculations, instrument response, audio and actual crew communication are not simulated. Normal checklists are acknowledged, not reproduced in full. MCDU storage does not validate route/performance entries. Optional equipment, fuel-system fit, weather and current operational instructions still govern applicable branches. Source page matching does not establish a current controlled revision or exact aircraft fit. Those conditions cannot be graded as verified by this model.

## Verification

The publication gate runs source/bank regressions and all 46 role/context combinations through 674 individual control inputs. Browser testing checks actual control hit targets and entire role flows, desktop and phone layout, direct controls, local selectors, camera movement, avionics entry and reset behavior. Browser results: all 23 role runs completed via 338 actual selections (including a phone action), with zero page errors, incorrect inputs or order errors. A separate pass operated all 465 visible controls and checked MCDU entry/storage, radio tuning/transfer, ATC code entry, ECAM page selection, numeric FCU entry, reset, drag without activation, and return to the full-panel view. Desktop and 390 px phone screenshots were inspected.
