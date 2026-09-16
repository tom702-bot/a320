# Virtual cockpit flow trainer — 16 September 2026

## Interaction and artwork (version 47)

The cockpit now uses the original FlyByWire flight-deck image, not procedurally drawn panels. The main panel shows both complete sets of instruments. Forward/aft overhead panels and the pedestal use their own original image regions. The native image is stored unmodified as `fbw-cockpit.png`; cropping and perspective are performed only by the browser.

Four hundred physical control hit targets are aligned to image pixels in `cockpit-photo-layout.js`, including the MCDU keyboards, radio panels, FCU/EFIS, electrical, lighting and engine controls. Switches remain visible through transparent targets. Hover/focus shows state, selectors open locally, and the finder or camera shortcuts locate a panel. Sixty-five visible crew/data checks are in a separate tray, with seven obsolete scan controls hidden. Source procedure order and PF/PM grading are unchanged from version 46.

Artwork source: [FlyByWire A320 flight deck](https://docs.flybywiresim.com/pilots-corner/a32nx/a32nx-briefing/flight-deck/); original asset [Cockpit.png](https://github.com/flybywiresim/docs/blob/primary/docs/pilots-corner/a32nx/assets/a32nx-briefing/Cockpit.png). It provides visual geometry, not the procedure or aircraft-fit authority. Snapshot instrument indications are illustrative. Live entry overlays support MCDU/radio/FCU/ECAM control rehearsal, not full aircraft systems simulation. All image and code assets are cached locally in version 47.

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

Artwork SHA-256: `894a5e08a6787d23d6421eb279d3059292812e80f58c8e68e96a008aee742c0c`.
