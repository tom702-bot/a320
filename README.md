# Ansett A320 Checkride Trainer

An installable, iPhone-friendly study app for A320 limitations, systems questions, memory items, fill-in practice, interactive ECAM-style electrical and hydraulic trainers, and a provisional IAE V2500 engine-systems explorer.

The limitations quiz content was audited against the supplied Ansett/Navblue A320 FCOM limitations extract for active aircraft A/C 21-CMHT, dated 22 MAY 24. Engine quiz questions use the active CFM & PW section; engineering-only IAE values are not mixed into that audited question bank.

The supplied document contains limitations only. Existing systems and memory-item material remains in the trainer but was not revalidated in this audit.

The dimensional electrical page lets the learner fail or restore every displayed source, battery, converter, contactor and bus. It recalculates downstream power and explains each transfer, loss or load shed. Five presets remain available for normal, single-generator, APU, emergency-generator and battery-only study. Its architecture and procedural constraints come from the trainer's existing DSC-24 / QRH-referenced content and require confirmation against the current approved Ansett DSC and QRH.

The hydraulic page models the independent green, blue and yellow systems from the supplied 21-CMHT FCOM DSC-29. Every displayed reservoir, pump, fire valve, accumulator, priority valve, leak-measurement valve, pressure circuit and consumer group can be failed or restored. The trainer recalculates PTU power transfer, RAT blue pressure, pressure-dependent user availability and priority-valve shedding, and explains the consequences. Hydraulic fluid is never shown transferring between systems.

The separate IAE V2500 engine page is an interactive systems study assistant. It opens with an original, lightweight 3D cutaway that can be rotated and zoomed on desktop or iPhone; fan, compressor, combustor, turbine, shaft, gearbox, FADEC and exhaust components are selectable and link into the related system view. It also traces engine architecture, FADEC/thrust control, fuel, oil, air/start and hydraulically powered thrust-reverser layouts. Every flow-diagram component can now be failed or restored; downstream nodes and paths are recalculated as unavailable or degraded, with an explanation in the component panel. Engine start is retained as one part of the air/start system rather than the main activity. The module is explicitly provisional: its engine-specific logic and limits are paraphrased from the supplied IAE engineering appendix for A/C 20-IMHT / 19-IMHE, dated 2015-2018 and marked FOR ENGINEERING USE ONLY. It must be checked against a current approved IAE FCOM before operational use.

This is a study aid only. The current approved FCOM, QRH and company procedures remain authoritative.

Live site: https://tom702-bot.github.io/a320/

