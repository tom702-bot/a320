# Ansett A320 flow trainer — SOP review

Reviewed 16 September 2026. Release 48.

## Result

The existing 13 flow stages have been compared with the Standard Operating Procedures in the supplied **21 May 2026 FCOM** and corrected where the SOP differs from the previous scan/tasksharing implementation. This is a **selected-flow review**, not a finding that the trainer implements the whole SOP chapter or is an exact simulation of a particular aircraft.

Source: `PDFA320_FCOM_AATIAECUSTOM20260521.pdf`, supplied from ANSETDOCS. SHA-256: `7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06`. The supplied copy matches the earlier source exactly. The SOP section occupies PDF pp.3163–3401. Page numbers below are PDF page numbers, not printed chapter pages. The compilation is marked **FOR TRAINING ONLY**, contains different aircraft effectivities and different insert dates, and does not establish the trainer's particular aircraft MSN.

## Corrections made

| Area | Correction | SOP evidence |
|---|---|---|
| Source priority | SOP text now takes precedence over the older tasksharing summary; each flow action cites SOP pages. | SOP-01, p.3163; SOP-08 vs tasksharing p.3417 |
| Preparation | Added preliminary-preparation/walkaround prerequisites, FMS power-up waiting condition, aircraft/database/factor checks, IRS initialization, INIT B weights/fuel, performance and maintenance-PC checks. | SOP-06 pp.3195–3219 |
| Before clearance | Added final loadsheet, ZFW/ZFWCG, fuel, conditional performance recomputation/crosscheck, seating, role-specific MCDU pages and safe external-power disconnection checks. | SOP-07 pp.3221–3222 |
| Before start | Separate pushback and stationary-start selections. No-pushback: parking brake ON and pressure check before checklist. Pushback: NW STRG DISC check, checklist, parking brake OFF, completion confirmation, brake ON and pressure check. | SOP-07 pp.3223–3226; 00010202.0002001 and 00010198.0001001/.0002001, 18 NOV 24 |
| Engine start | Changed engine 2 then 1 to **engine 1 then 2**, with display-ready, start-monitoring and idle observation checks. | IAE SOP-08 pp.3230–3232; 00010162.0040001/.0056001, 14 NOV 24 |
| After start | Added flap indication crosscheck, clarified status reminder handling, IAE warm-up condition and SOP checklist reference. | SOP-09 pp.3239–3242 |
| Taxi | Enforce NOSE TAXI / runway-turnoff lights ON; add brake-pressure checks, ATC code AND mode, cabin-ready report and taxi checklist. Removed tasksharing-only FMS/briefing items from the SOP taxi sequence. | SOP-10-A pp.3249–3254 |
| Line-up | Added brake-fan condition, line-up clearance, table/EFB stow and checklist. Enforce STROBE ON. Takeoff lights remain at the separate SOP-12 takeoff-clearance trigger. | SOP-11 pp.3269–3272; SOP-12 p.3273 |
| Acceleration | Renamed the limited stage **S-speed Cleanup**; enforce NOSE and runway-turnoff lights OFF. Identify preceding F-speed, gear, thrust-reduction and pack-restoration procedures outside this subset. | SOP-12 pp.3278–3282 |
| After takeoff | Use SOP-13, with APU-use condition, engine-mode weather condition, conditional TCAS restoration and IAE anti-ice conditions. | SOP-13 p.3283 |
| 10,000 ft climb | Preserve PF CSTR / PM ARPT specified in the SOP diagram; separate manually tuned navaid clearing, secondary plan and flight-level checks. | SOP-14 pp.3289–3290 |
| 10,000 ft descent | Separate navaid check from GPS PRIMARY LOST monitoring; flag additional FINAL APP/FPA navigation checks and add approach checklist completion. | SOP-17 pp.3311,3313; SOP-18 pp.3341,3352–3353 |
| After landing | Keep after-vacating trigger and flap exceptions; use engine anti-ice actions from SOP-21, add brake temperature/fan conditions and checklist. | SOP-21 pp.3381–3386 |
| Parking | Add pressure check, 3-minute cooling/source prerequisites and engine rundown observation; require both engine masters OFF and all modeled fuel controls OFF; add CM1 status/logbook and both-crew EFB/display tasks. | SOP-22 pp.3390–3397; IAE engine shutdown 00011856.0005001, 24 NOV 23 |
| Securing | Add passenger/adverse-weather prerequisites, slats/flaps-before-ADIRS check, CM1/CM2 coordination, at least 10 seconds before power removal and APU-flap-closed check before batteries OFF. Keep EFB shutdown after checklist. | SOP-21 p.3383; SOP-23 pp.3399–3401; 00010339 and 00010345, 09 NOV 21 |

## Coverage of the SOP chapter

| SOP section | PDF pages | Trainer coverage after this review |
|---|---|---|
| 01 General | 3163–3164 | Source ordering and normal-operation assumptions applied. |
| 02 Flight preparation | 3165–3166 | Prerequisite; GPS prediction not simulated. |
| 03 Safety exterior inspection | 3167–3168 | Prerequisite; exterior environment not modeled. |
| 04 Preliminary cockpit preparation | 3169–3182 | Prerequisite; full cold-aircraft preparation not implemented. |
| 05 Exterior walkaround | 3183–3194 | Explicit completion prerequisite, no external inspection simulation. |
| 06 Cockpit preparation | 3195–3220 | Individual cockpit actions plus data/observation self-checks; installed-system branches remain conditional. |
| 07 Before pushback/start | 3221–3226 | Expanded pre-clearance checks; selectable conventional pushback/stationary branches. |
| 08 Engine start | 3227–3236 | IAE two-engine-departure control sequence. No engine dynamics, abnormal-start recovery or danger-area model. |
| 09 After start | 3237–3248 | Two-engine taxi flow; single-engine variant not implemented. |
| 10 Taxi | 3249–3266 | Two-engine taxi flow; single-engine departure/second start during taxi not implemented. |
| 10B Departure change | 3267–3268 | Not implemented as a separate flow. |
| 11 Before takeoff | 3269–3272 | Line-up flow; equipment-specific temperature criteria remain self-checked. |
| 12 Takeoff | 3273–3282 | S-speed cleanup subset only. Takeoff/rotation/gear/thrust reduction/F-speed stages not implemented. |
| 13 After takeoff | 3283–3284 | PM actions; conditions self-checked. |
| 14 Climb | 3285–3290 | 10,000 ft AAL subset only; transition-altitude and climb-management procedures not implemented. |
| 15 Cruise | 3291–3296 | Not implemented. |
| 16 Descent preparation | 3297–3306 | Not implemented. |
| 17 Descent | 3307–3314 | 10,000 ft AAL subset and approach checklist completion; no descent-profile/transition-level simulation. |
| 18 Approach | 3315–3364 | Approach-specific navigation reminder only. No approach mode, configuration, minima, circling or visual-approach flows. |
| 19 Landing | 3365–3376 | Not implemented. |
| 20 Go-around | 3377–3380 | Not implemented. |
| 21 After landing | 3381–3386 | Flow and conditional checks. |
| 21B One-engine taxi at arrival | 3387–3388 | Not implemented. |
| 22 Parking | 3389–3398 | Flow plus observation/coordination checks. |
| 23 Securing | 3399–3401 | CM1/CM2 actions and timing prerequisites. |

## Remaining limits to exact alignment

- **Aircraft fit:** the registration/MSN is still needed. Pack-flow versus ECON-flow controls, center pumps versus transfer valves, standby instrumentation, datalink, predictive windshear, brake criteria and some navigation options differ by effectivity. The FlyByWire cockpit image does not establish that fit.
- **Conditions:** flight-specific performance, flap setting, trim, power availability, icing, brake temperatures and airport requirements require the current briefing and applicable SOP branch. Unbound conditional actions remain self-checks rather than position passes.
- **Timing and observations:** the model cannot observe an engine reaching idle, an APU flap closing, 10 seconds of actual aircraft time, chocks, cabin reports or colleague actions. Acknowledgements record the learner's check; they do not prove the physical condition.
- **Crew coordination:** CM1/PM and CM2/PF is the selected training allocation, not a general definition of PF/PM. Checklist completion is a crew acknowledgement; the full normal-checklist challenge/response text and all standard callouts are not simulated.
- **Sequence boundaries:** a sequence moves through the available training stages and presets each next stage. It does not simulate the missing flight phases between them. Before-start pushback is rehearsed to completion before the separate engine-start stage; concurrent starts during pushback are not modeled.
- **Artwork:** the cockpit remains the original FlyByWire A320 reference image with interactive controls. Snapshot instrument indications and the simplified entry displays are not evidence that a source-required observation was satisfied.

## Software verification

Release checks exercise every role/context, both before-start branches, wrong-order engine start, shutdown position errors, source references, timing self-check classification and existing question-bank regressions. Browser checks exercise actual cockpit controls on desktop and touch layouts. These checks establish the tested software behavior, not full SOP coverage.

Verified locally: 259 structural/source checks; 46 role/context runs (806 control inputs); all 23 cockpit role runs (404 browser selections including phone check); all four pushback/stationary PF/PM browser runs (75 selections); zero browser errors. Phone touch controls and layout passed.
