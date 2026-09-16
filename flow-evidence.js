(function(root){
"use strict";
const evidence={
  "source": {
    "title": "Ansett supplied FCOM training compilation, 21 May 2026",
    "file": "PDFA320_FCOM_AATIAECUSTOM20260521.pdf",
    "sha256": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06",
    "restriction": "FOR TRAINING ONLY. Mixed compilation; current controlled revision and simulator fit are not established.",
    "sopRange": [
      3163,
      3401
    ],
    "precedence": "SOP text takes precedence over older tasksharing tables; no aircraft MSN established."
  },
  "reviewed": "2026-09-16",
  "phases": {
    "cockpit-preparation": {
      "reference": "AAT PRO-NOR-SOP-06, PDF pp.3195, 3196, 3197, 3198, 3199, 3200, 3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3210, 3211, 3212, 3213, 3214, 3215, 3216, 3217, 3218, 3219. SOP text review 16 September 2026.",
      "note": "Detailed cockpit-preparation scan. Start after preliminary cockpit preparation, with external power available and connected. The PF prepares overhead, centre panel and pedestal while PM completes the walkaround, then both perform their own-side checks. Flight-specific entries and observed indications remain explicit self-checks.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "before-start": {
      "reference": "AAT PRO-NOR-SOP-07, PDF pp.3221, 3222, 3223, 3224, 3225, 3226. SOP text review 16 September 2026.",
      "note": "SOP-07: complete the pre-clearance checks, then obtain ATC and ground clearance. Choose pushback or stationary start. Conventional/towbarless pushback is represented; powerpush and single-engine taxi require their separate procedures.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "after-start": {
      "reference": "AAT PRO-NOR-SOP-09-A, PDF pp.3237, 3239, 3240, 3241, 3242. SOP text review 16 September 2026.",
      "note": "Both engines started. IAE warm-up: after shutdown longer than 2 h, operate at idle or near idle for at least 5 min before high power. Takeoff configuration and icing exceptions require the briefing.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "taxi": {
      "reference": "AAT PRO-NOR-SOP-10-A, PDF pp.3249, 3250, 3251, 3252, 3253, 3254. SOP text review 16 September 2026.",
      "note": "Both engines taxi. Flight-control check may be completed at a convenient stage before or during taxi. STROBE ON when crossing a runway. If departure changes, apply SOP-10B separately.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "line-up": {
      "reference": "AAT PRO-NOR-SOP-11, PDF pp.3269, 3270, 3271, 3272. SOP text review 16 September 2026.",
      "note": "SOP-11 before takeoff. STROBE ON at runway entry. NOSE T.O, RWY TURN OFF ON and LAND ON belong to SOP-12 at takeoff clearance, outside this line-up flow. Packs / APU bleed must match performance; APU bleed is not authorized with wing anti-ice.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "climb-acceleration": {
      "reference": "AAT PRO-NOR-SOP-12, PDF pp.3278, 3280, 3281, 3282. SOP text review 16 September 2026.",
      "note": "SOP-12 subset beginning at S speed on PF order for FLAPS 0. F-speed FLAPS 1, takeoff, gear retraction, thrust reduction and pack restoration are preceding actions outside this subset.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "ten-thousand-climb": {
      "reference": "AAT PRO-NOR-SOP-14, PDF pp.3289, 3290. SOP text review 16 September 2026.",
      "note": "SOP text reviewed. Equipment-specific and flight-specific conditions remain explicit self-checks.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "ten-thousand-descent": {
      "reference": "AAT PRO-NOR-SOP-17 / 18-C, PDF pp.3311, 3313. SOP text review 16 September 2026.",
      "note": "10,000 ft AAL portion of SOP-17. Descent preparation, descent initiation/monitoring and transition-level altimeter setting are separate preceding procedures. Landing-light selection follows airline policy / regulatory recommendation.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "after-landing": {
      "reference": "AAT PRO-NOR-SOP-21, PDF pp.3381, 3382, 3383, 3384, 3385, 3386. SOP text review 16 September 2026.",
      "note": "SOP text reviewed. Equipment-specific and flight-specific conditions remain explicit self-checks.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "parking": {
      "reference": "AAT PRO-NOR-SOP-22, PDF pp.3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397. SOP text review 16 September 2026.",
      "note": "SOP text reviewed. Equipment-specific and flight-specific conditions remain explicit self-checks.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "engine-start": {
      "reference": "AAT PRO-NOR-SOP-08, PDF pp.3230, 3231, 3232. SOP text review 16 September 2026.",
      "note": "Two-engine taxi departure: SOP-08 specifies engine 1 then engine 2. This supersedes the older engine-2-first tasksharing table. IAE effectivity: PDF pp.3230–3232. Engine indications are observed self-checks; this is not an automatic-start simulation.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "after-takeoff": {
      "reference": "AAT PRO-NOR-SOP-13, PDF pp.3283. SOP text review 16 September 2026.",
      "note": "Apply the APU actions only if APU air conditioning was used for takeoff. TCAS TA/RA restoration applies if takeoff used TA ONLY.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    },
    "securing": {
      "reference": "AAT PRO-NOR-SOP-23, PDF pp.3399, 3400, 3401. SOP text review 16 September 2026.",
      "note": "SOP-23 crew-station duties: CM1/PM and CM2/PF in this training allocation. Last passenger has left; secure per company policy. Apply relevant adverse-weather supplementary procedures first. Timing and colleague actions are explicit self-checks.",
      "scope": "Selected flow; not complete chapter or dynamically verified aircraft procedure."
    }
  }
};
if(typeof module!=="undefined"&&module.exports)module.exports=evidence;
if(root)root.A320FlowEvidence=evidence;
})(typeof window!=="undefined"?window:globalThis);
