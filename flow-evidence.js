(function(root){
"use strict";
const evidence={
  "source": {
    "title": "Ansett supplied FCOM training compilation, 21 May 2026",
    "file": "PDFA320_FCOM_AATIAECUSTOM20260521.pdf",
    "sha256": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06",
    "restriction": "FOR TRAINING ONLY. Mixed compilation; current controlled revision and simulator fit are not established."
  },
  "reviewed": "2026-09-16",
  "phases": {
    "cockpit-preparation": {
      "reference": "PRO-NOR-TSK pp.3–5/22, A/C 21-CMHT, 22 MAY 24. Idents 00024980, 00024981, 00024982, 00024992, 00024993.",
      "note": "Broad scan acknowledgements only. Individual tests, FMGS entries and crew crosschecks are not modelled. Cold-and-dark is a practice preset; preliminary cockpit preparation and power-up precede these FCOM scans."
    },
    "before-start": {
      "reference": "PRO-NOR-SOP-04; PRO-NOR-TSK p.6/22, 22 MAY 24. Ident PRO-NOR-TSK-C-00024983.0001001 / 14 NOV 23.",
      "note": "Parking brake depends on pushback stage. ATC depends on airport requirements. Clearance, accumulator check and checklists are outside this scan subset."
    },
    "after-start": {
      "reference": "PRO-NOR-SOP-06; PRO-NOR-TSK p.7/22, 22 MAY 24. Ident PRO-NOR-TSK-00024894.0001001 / 03 NOV 22.",
      "note": "APU shutdown only if no longer required. Takeoff flap selection and pitch trim require the briefing and performance data. Icing with rain, slush or snow can delay flap extension."
    },
    "taxi": {
      "reference": "PRO-NOR-SOP-09; PRO-NOR-TSK p.7/22, 22 MAY 24. Ident PRO-NOR-TSK-00024904.0002001 / 05 MAY 22.",
      "note": "This is the panel-scan subset: clearance, brake and flight-control checks, departure briefing and checklist are not included. TERR and predictive windshear installation require confirmation."
    },
    "line-up": {
      "reference": "PRO-NOR-SOP-11; PRO-NOR-TSK p.8/22, 22 MAY 24. Ident PRO-NOR-TSK-00024905.0003001 / 24 NOV 23.",
      "note": "TA/RA is the normal selection; TA ONLY requires the applicable operator exception. Pack configuration requires takeoff performance and APU-bleed context. Exterior lights require runway conditions."
    },
    "climb-acceleration": {
      "reference": "PRO-NOR-TSK p.9/22, 22 MAY 24. Ident PRO-NOR-TSK-00024906.0001001 / 24 NOV 23.",
      "note": "Start this subset at S speed following the PF order for FLAPS 0. No speed or callout simulation verifies this trigger. The following after-takeoff procedures are outside this subset; restore TA/RA if TA ONLY was used."
    },
    "ten-thousand-climb": {
      "reference": "AAT PRO-NOR-SOP-14 p.5/6, 05 MAY 25. Ident PRO-NOR-SOP-14-A-00020076.0001001 / 24 NOV 23. PRO-NOR-TSK p.10/22, 22 MAY 24.",
      "note": "AAT SOP specifies PF CSTR for grid MORA and PM ARPT, overriding the generic AS RQRD scan wording. LAND RETRACT. Seat belts depend on conditions. NAV/secondary flight plan/performance entries remain self-checked."
    },
    "ten-thousand-descent": {
      "reference": "AAT PRO-NOR-SOP-17 p.5/8, 09 SEP 25; PRO-NOR-TSK p.12/22, 22 MAY 24. Ident PRO-NOR-TSK-00024911.0002001 / 14 NOV 23.",
      "note": "PF sequence now follows tasksharing: CSTR, LS as required, NAVAIDs as required/check. NAV accuracy monitoring here is conditional on GPS PRIMARY LOST. LS selection depends on approach and installed guidance."
    },
    "after-landing": {
      "reference": "AAT PRO-NOR-SOP-21 pp.1–3/6, 09 SEP 25; PRO-NOR-TSK p.20/22, 22 MAY 24. Idents 00011841–00011848.",
      "note": "Begin after vacating. LAND RETRACT, STROBE AUTO and NOSE TAXI; runway crossing changes strobe use. Flap retraction is conditional after icing/slush/snow and above 30 °C. TCAS STBY/XPNDR depends on fit; APU use depends on need."
    },
    "parking": {
      "reference": "AAT PRO-NOR-SOP-22 pp.2–3, 8/10, 05 MAY 25; PRO-NOR-TSK pp.20–21/22, 22 MAY 24. Idents 00011853–00011856, 00011866.",
      "note": "Brake temperature, accumulator/brake pressure, engine cooling and electrical-source availability are prerequisites. Fuel controls depend on installed system. This model does not simulate those conditions. Wings/beacon OFF does not require every exterior light OFF."
    }
  }
};
if(typeof module!=="undefined"&&module.exports)module.exports=evidence;
if(root)root.A320FlowEvidence=evidence;
})(typeof window!=="undefined"?window:globalThis);
