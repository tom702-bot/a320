/* FCOM item audit, 5 September 2026. Withheld records preserve provenance and are excluded from grading. */
window.SYSTEMS_EXAM_SOURCE="FCOM source audit · 5 September 2026";
window.SYSTEMS_EXAM_TOPICS=["General","EIS","Autoflight & FMGS","Air & Pressurisation","Ice & Rain","Powerplant","Fuel","Navigation","Lights, Doors & Oxygen","APU","Communications","Electrical","Fire Protection","Hydraulics","Flight Controls","Landing Gear & Brakes","Limitations","MEL","Miscellaneous"];
window.SYSTEMS_EXAM_QUESTIONS=[
  {
    "source": "A320 Student Study Questions",
    "n": 1,
    "p": 2,
    "c": "General",
    "q": "Where does the current AAT A320 FCOM place antenna-location information?",
    "o": [
      "DSC-20 Aircraft General",
      "LIM-AG Aircraft General Limitations",
      "DSC-21 Air Conditioning",
      "PRO-NOR Ground Handling"
    ],
    "a": 0,
    "w": "The old chapter-number answer was obsolete. Antenna locations are in the current Aircraft General description.",
    "ref": "FCOM DSC-20-20 · PDF pp.137 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q1, PDF p.2",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S001",
      "status": "checked",
      "pdfPages": [
        137
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 2,
    "p": 2,
    "c": "General",
    "q": "During a Minimum Radius Ground Turn, which part of the aircraft describes the widest arc?",
    "o": [
      "Nose",
      "Outside Wingtip",
      "Outside THS Tip",
      "Tail Cone"
    ],
    "a": 1,
    "w": "Outside Wingtip Guide Q2, PDF p.2.",
    "ref": "FCOM DSC-20-30 · PDF pp.141 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q2, PDF p.2",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S002",
      "status": "checked",
      "pdfPages": [
        141
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 3,
    "p": 2,
    "c": "EIS",
    "q": "In flight, when might the Status page appear:",
    "o": [
      "Only when the STATUS pushbutton is pressed",
      "Automatically after the last alert is cleared, if STATUS is not empty",
      "Automatically whenever the landing gear is extended",
      "Whenever RCL is pressed"
    ],
    "a": 1,
    "w": "A nonempty STATUS page appears after the last E/WD alert is cleared; it is also recalled at CONF 1 selection for approach.",
    "ref": "FCOM  · PDF pp.1433 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q3, PDF p.2",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S003",
      "status": "corrected",
      "pdfPages": [
        1433
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 4,
    "p": 2,
    "c": "EIS",
    "q": "Following the loss of both ECAM DUs, the E/WD:",
    "o": [
      "Is lost.",
      "Can be displayed on either ND using a PFD/ ND XFR Switch.",
      "Can be displayed on either ND using the ECAM/ND XFR Switch.",
      "Can be displayed on ND2 by pressing and holding the appropriate ECP pushbutton."
    ],
    "a": 2,
    "w": "Can be displayed on either ND using the ECAM/ND XFR Switch. Guide Q4, PDF p.2.",
    "ref": "FCOM DSC-31-05-60, DSC-31-30 · PDF pp.1406, 1457 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q4, PDF p.2",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S004",
      "status": "checked",
      "pdfPages": [
        1406,
        1457
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 5,
    "p": 2,
    "c": "EIS",
    "q": "In the event of a failure of ILS 1 receiver, ILS information:",
    "o": [
      "Is shown on PFD 2 and ND 1.",
      "Can be displayed as required by selecting EIS DMC to CAPT 3.",
      "Will be presented on the F/O's PFD only.",
      "Is lost from the Captain's side."
    ],
    "a": 0,
    "w": "Is shown on PFD 2 and ND 1. Guide Q5, PDF p.2.",
    "ref": "FCOM DSC-34-NAV-30-20 · PDF pp.1662 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q5, PDF p.2",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S005",
      "status": "checked",
      "pdfPages": [
        1662
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 6,
    "p": 2,
    "c": "EIS",
    "q": "On the PFD, Baro Altitude, normally Green, becomes Amber:",
    "o": [
      "Below the MDA/MDH entered in the FMS",
      "At 400 ft if no MDA is defined",
      "At MDA +100 ft",
      "At DH +100 ft"
    ],
    "a": 0,
    "w": "The altitude digital readout becomes amber below the MDA/MDH entered in the FMS. This is separate from the radio-height colour logic.",
    "ref": "FCOM DSC-31-40 · PDF pp.1470, 1471 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q6, PDF p.2",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S006",
      "status": "corrected",
      "pdfPages": [
        1470,
        1471
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 7,
    "p": 3,
    "c": "EIS",
    "q": "How is the primary flight-plan route drawn on the ND while a selected lateral mode is engaged?",
    "o": [
      "Dashed green",
      "Solid green",
      "Dashed yellow",
      "Solid blue"
    ],
    "a": 0,
    "w": "The primary flight plan is dashed green in selected lateral mode; it is steady green in managed lateral mode.",
    "ref": "FCOM DSC-22_10-40-50 · PDF pp.264 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q7, PDF p.3",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S007",
      "status": "corrected",
      "pdfPages": [
        264
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 8,
    "p": 3,
    "c": "EIS",
    "q": "In the event of Dual FWC failure:",
    "o": [
      "Master Warnings will still be given.",
      "ECAM System Display Indications will be normal.",
      "Most ECAM System Display parameters will be lost.",
      "The SDACs will continue to provide Attention Getters."
    ],
    "a": 1,
    "w": "System parameters have a separate SDAC-to-DMC path. Dual FWC loss removes FWC-generated alerts, memos, callouts and attention-getters; it does not remove all system-page parameter data.",
    "ref": "FCOM DSC-31-05-30 · PDF pp.1398, 1399 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q8, PDF p.3",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S008",
      "status": "corrected",
      "pdfPages": [
        1398,
        1399
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 9,
    "p": 3,
    "c": "EIS",
    "q": "The EIS System uses:",
    "o": [
      "Two FWCs to generate Red Warning / Amber Caution Lights and Aurals.",
      "3 SDACs, 3 FWCs, 3 DMCs and 6 DUs.",
      "Two SDACs to process both Red Warnings and Amber Cautions.",
      "Automatic switching in the event of DMC failure."
    ],
    "a": 0,
    "w": "Two FWCs to generate Red Warning / Amber Caution Lights and Aurals. Guide Q9, PDF p.3.",
    "ref": "FCOM DSC-31-05-30 · PDF pp.1398, 1399 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q9, PDF p.3",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S009",
      "status": "checked",
      "pdfPages": [
        1398,
        1399
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 10,
    "p": 3,
    "c": "EIS",
    "q": "In its Normal Operation, the ECAM Displays:",
    "o": [
      "Fault Messages and/or Memos on the E/WD.",
      "Fault Messages, Memos and/or Status messages on the Lower Screen.",
      "The Status Page on the E/WD.",
      "Any SDs for Inoperative systems automatically when the Landing Gear is extended."
    ],
    "a": 0,
    "w": "Fault Messages and/or Memos on the E/WD. Guide Q10, PDF p.3.",
    "ref": "FCOM DSC-31-05-10, DSC-31-10 · PDF pp.1394, 1414 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q10, PDF p.3",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S010",
      "status": "checked",
      "pdfPages": [
        1394,
        1414
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 11,
    "p": 3,
    "c": "EIS",
    "q": "If the ECAM control panel fails:",
    "o": [
      "All ECAM functions, apart from the current one, are lost.",
      "CLR, RCL, STS, EMERG CANC and ALL pushbutton switches remain operative.",
      "The ECAM screens go blank.",
      "Use of ECAM can be recovered by using the ECAM XFR switch on the switching panel."
    ],
    "a": 1,
    "w": "CLR, RCL, STS, EMERG CANC and ALL pushbutton switches remain operative. Guide Q11, PDF p.3.",
    "ref": "FCOM  · PDF pp.1456 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q11, PDF p.3",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S011",
      "status": "checked",
      "pdfPages": [
        1456
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 12,
    "p": 3,
    "c": "EIS",
    "q": "How is the manoeuvring speed for CONF 1 shown on the PFD during approach?",
    "o": [
      "A green S",
      "A blue S",
      "A magenta F",
      "An amber VLS flag"
    ],
    "a": 0,
    "w": "The CONF 1 manoeuvring speed is identified by the green S symbol.",
    "ref": "FCOM  · PDF pp.1469 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q12, PDF p.3",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S012",
      "status": "checked",
      "pdfPages": [
        1469
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 13,
    "p": 3,
    "c": "EIS",
    "q": "When does the CHECK HDG discrepancy message appear?",
    "o": [
      "When the headings on the two PFDs/NDs differ by more than 5°",
      "When either pilot selects HDG mode",
      "When track error exceeds 5 NM",
      "When the flight directors disagree"
    ],
    "a": 0,
    "w": "The discrepancy threshold is greater than 5°. CHECK HDG flashes then remains steady on the NDs; it is not displayed in PLAN mode.",
    "ref": "FCOM DSC-31-05-60 · PDF pp.1410 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q13, PDF p.3",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S013",
      "status": "corrected",
      "pdfPages": [
        1410
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 14,
    "p": 4,
    "c": "EIS",
    "q": "Which pairing of Navigation Display route styles is correct?",
    "o": [
      "Temporary route: dashed yellow; secondary route: white",
      "Temporary route: solid white; secondary route: green",
      "Missed approach: dashed blue; active route: white",
      "Inactive primary route: solid blue; temporary route: green"
    ],
    "a": 0,
    "w": "The temporary route is dashed yellow and the secondary route is white.",
    "ref": "FCOM DSC-22_10-40-50 · PDF pp.264 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q14, PDF p.4",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S014",
      "status": "checked",
      "pdfPages": [
        264
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 15,
    "p": 4,
    "c": "EIS",
    "q": "A Decision Height of 100' has been defined. Radio Height is displayed:",
    "o": [
      "In Green below 2500' and in Amber below 400'.",
      "By a rising green ribbon on the PFD Altitude scale.",
      "In Green below 2500' and in Amber below MDA.",
      "On both PFDs provided at least one RA is operative."
    ],
    "a": 3,
    "w": "On both PFDs provided at least one RA is operative. Guide Q15, PDF p.4.",
    "ref": "FCOM DSC-31-40, DSC-34-NAV-40-10 · PDF pp.1474, 1670 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q15, PDF p.4",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S015",
      "status": "checked",
      "pdfPages": [
        1474,
        1670
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 16,
    "p": 4,
    "c": "EIS",
    "q": "Which target can appear in blue on the PFD altitude scale?",
    "o": [
      "The FCU-selected target altitude",
      "The active managed altitude constraint",
      "Radio altitude",
      "Airport elevation"
    ],
    "a": 0,
    "w": "A selected altitude target may be displayed in blue; managed constraints are magenta.",
    "ref": "FCOM  · PDF pp.1472 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q16, PDF p.4",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S016",
      "status": "checked",
      "pdfPages": [
        1472
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 17,
    "p": 4,
    "c": "EIS",
    "q": "Which ND flight-plan route-style statement is correct?",
    "o": [
      "Primary flight plan in managed lateral mode: steady green; alternate flight plan: dashed blue",
      "Primary flight plan in managed mode: solid blue; missed approach: green",
      "Secondary flight plan: dashed yellow",
      "Only the primary flight plan can be displayed"
    ],
    "a": 0,
    "w": "The display-colour table gives steady green for the managed primary flight plan, dashed blue for the alternate, steady blue for missed approach and dimmed white for the secondary.",
    "ref": "FCOM DSC-22_10-40-50 · PDF pp.264 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q17, PDF p.4",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S017",
      "status": "corrected",
      "pdfPages": [
        264
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 18,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "In normal FMGS operation during climb, cruise, descent or approach, how may the speed target be chosen?",
    "o": [
      "FMGS managed speed or crew-selected FCU speed, subject to applicable constraints",
      "Only managed speed in every flight phase",
      "Only selected speed in every flight phase",
      "Each pilot must use an independent speed target"
    ],
    "a": 0,
    "w": "ECON is the basis of the managed speed profile. The crew can select speed or Mach on the FCU for the active phase; speed limits and constraints still apply.",
    "ref": "FCOM DSC-22_20-30-20-05 · PDF pp.406 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q18, PDF p.5",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S018",
      "status": "corrected",
      "pdfPages": [
        406
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 19,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "With valid V2, takeoff configuration and all RWY engagement conditions satisfied, what first-line thrust/vertical/lateral indications appear when TOGA is selected on the runway?",
    "o": [
      "THR TOGA-CLB-RWY.",
      "THR TOGA- — SRS- — HDG.",
      "MAN TOGA- SRS - RWY.",
      "MAN TOGA - SRS — NAV."
    ],
    "a": 2,
    "w": "MAN TOGA identifies manual takeoff thrust; SRS provides takeoff pitch guidance and RWY provides the applicable localizer-based takeoff lateral guidance.",
    "ref": "FCOM DSC-22_30-40-20-20-A, DSC-22_30-40-20-20, DSC-22_30-40-20-30, DSC-22_30-50-30-B · PDF pp.802, 804, 959 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q19, PDF p.5",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S019",
      "status": "corrected",
      "pdfPages": [
        802,
        804,
        959
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 20,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "In NAV and managed climb toward a 5,000 ft constraint before a 7,000 ft FCU target, which vertical FMA sequence captures and holds the constraint?",
    "o": [
      "CLB green, ALT* magenta, ALT magenta",
      "CLB green, ALT CST* green, ALT CST green",
      "OP CLB green, ALT* green, ALT green",
      "CLB magenta, ALT* green, ALT CSTR green"
    ],
    "a": 1,
    "w": "The more restrictive constraint is captured by ALT CST* and held by ALT CST. Engaged vertical mode indications are green.",
    "ref": "FCOM DSC-22_30-40-40-20, DSC-22_30-40-50-20-A, DSC-22_30-40-50-20, DSC-22_30-80-20 · PDF pp.820, 830, 990 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q20, PDF p.5",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S020",
      "status": "corrected",
      "pdfPages": [
        820,
        830,
        990
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 21,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "In a normal uninterrupted takeoff climb, when does the FMGS switch from TAKEOFF to CLIMB phase?",
    "o": [
      "Thrust levers set to the CLB detent at Thrust Reduction Altitude.",
      "By selecting the Climb Phase in the MCDU.",
      "Automatically on reaching the Acceleration Altitude.",
      "With first Climb after Initial Level Out on SID."
    ],
    "a": 2,
    "w": "Normally at acceleration altitude. Engagement of another vertical mode can also cause the transition earlier.",
    "ref": "FCOM DSC-22_20-30-20-05 · PDF pp.409 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q21, PDF p.5",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S021",
      "status": "corrected",
      "pdfPages": [
        409
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 22,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "During climb the FCU altitude is set to 8000 feet, while the PFD target altitude is 6000 feet (magenta).",
    "o": [
      "The aircraft is in OP CLB, and will observe the Altitude Constraint of 8000.",
      "The aircraft is in OP CLB, and will observe the Altitude Constraint of 6000'.",
      "The aircraft is in CLB and will observe the Altitude Constraint of 8000'",
      "The aircraft is in CLB and will observe the Altitude Constraint of 6000'."
    ],
    "a": 3,
    "w": "The aircraft is in CLB and will observe the Altitude Constraint of 6000'. Guide Q22, PDF p.5.",
    "ref": "FCOM DSC-22_30-40-40-20 · PDF pp.820, 1472 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q22, PDF p.5",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S022",
      "status": "checked",
      "pdfPages": [
        820,
        1472
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 23,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "You are in a Managed Climb; the next waypoint has a Target Altitude of FL120 or above, but the FMGC calculates that we will cross this point at FL105. On the MCDU, how is this indicated?",
    "o": [
      "Predicted altitude on the F/PLN page is in Amber.",
      "A scratchpad Message: Unable to Achieve Required Altitude.",
      "Magenta Star next to Predicted Altitude on the F/PLN page.",
      "Amber Star next to Predicted Altitude on the F/PLN page."
    ],
    "a": 3,
    "w": "Amber Star next to Predicted Altitude on the F/PLN page. Guide Q23, PDF p.5.",
    "ref": "FCOM  · PDF pp.489 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q23, PDF p.5",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S023",
      "status": "checked",
      "pdfPages": [
        489
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 24,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "Level at 3,000 ft in ALT/HDG before localizer capture, the crew presses APPR for the selected ILS. Which vertical/lateral FMA indications are expected?",
    "o": [
      "G/S (green) / LOC (green).",
      "ALT (green) G/S (blue) / HDG (green) LOC (blue).",
      "G/S (blue) / LOC (blue) only.",
      "GS (blue) until on LLZ then G/S (green) / LOC (green) only."
    ],
    "a": 1,
    "w": "ALT and HDG remain engaged in green; G/S and LOC arm in blue before their capture zones are reached.",
    "ref": "FCOM DSC-22_30-40-120-80 · PDF pp.944 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q24, PDF p.6",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S024",
      "status": "corrected",
      "pdfPages": [
        944
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 25,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "After radar vectors, how should managed NAV be re-engaged to intercept the original route?",
    "o": [
      "Ensure the track line intercepts the active leg between FROM and TO, clear any non-sequenced waypoints if needed, then push the HDG/TRK knob",
      "Push the HDG/TRK knob regardless of the active-leg geometry",
      "Pull the HDG/TRK knob and wait for NAV to arm",
      "Select a new destination"
    ],
    "a": 0,
    "w": "Push the HDG/TRK knob to arm NAV after checking the active leg. NAV engages when the track intercepts between FROM and TO, INTCPT is shown and the aircraft reaches the active-leg capture zone.",
    "ref": "FCOM DSC-22_30-40-30-20 · PDF pp.813 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q25, PDF p.6",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S025",
      "status": "corrected",
      "pdfPages": [
        813
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 26,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "The FMA indicates 1FD-.What does this mean?",
    "o": [
      "This indication is only on the left FMA. The right will read -FD2.",
      "FD2 is switched OFF.",
      "FD2 has failed, but FD1 will supply the Flight Director on PFD2.",
      "FD2 has failed: F/D on PFD2 is unavailable."
    ],
    "a": 1,
    "w": "FD2 is switched OFF. Guide Q26, PDF p.6.",
    "ref": "FCOM DSC-22_30-20-50 · PDF pp.783 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q26, PDF p.6",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S026",
      "status": "checked",
      "pdfPages": [
        783
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 27,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "What is the FCOM-recommended way to disconnect the autopilot and promptly clear the normal disconnect indications?",
    "o": [
      "Press the FCU AP button once and wait",
      "Move the rudder pedals",
      "Press the sidestick takeover button twice",
      "Press the takeover button once and rely on automatic cancellation"
    ],
    "a": 2,
    "w": "Press once to disconnect, then promptly again to clear the associated indications. Delaying the second press can trigger the AUTO FLT AP OFF alert, which remains displayed after the audio is silenced.",
    "ref": "FCOM DSC-22_30-30-30-A, DSC-22_30-30-30-B, DSC-22_30-30-30 · PDF pp.790, 791 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q27, PDF p.6",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S027",
      "status": "corrected",
      "pdfPages": [
        790,
        791
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 28,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "With both engines operating and AP or FD on, which autothrust statements are correct?",
    "o": [
      "A/THR can activate in its active lever range; its mode follows pitch guidance and lever position normally limits thrust",
      "A/THR is available only with the autopilot engaged",
      "A/THR always commands TOGA",
      "Thrust-lever position never limits commanded thrust"
    ],
    "a": 0,
    "w": "For normal AEO operation use CL. Armed A/THR activates with levers above idle and at or below CL; the table also defines asymmetric-lever cases. Lever limiting does not apply to ALPHA FLOOR.",
    "ref": "FCOM DSC-22_30-50-10, DSC-22_30-50-30-C · PDF pp.954, 960, 961 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q28, PDF p.6",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S028",
      "status": "corrected",
      "pdfPages": [
        954,
        960,
        961
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 29,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "With the autopilot engaged, what happens when both flight directors are switched off?",
    "o": [
      "Causes the Flight Director display to disappear.",
      "Causes the Auto Thrust to disengage.",
      "Causes the Auto Thrust to switch to Speed Mode.",
      "Causes the Autopilot to disengage."
    ],
    "a": 0,
    "w": "FD symbols disappear. The AP lateral/vertical modes and current A/THR mode remain engaged.",
    "ref": "FCOM DSC-22_30-20-50, DSC-22_30-20-50-A, DSC-22_30-30-30-A, DSC-22_30-30-30-B · PDF pp.782, 790 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q29, PDF p.6",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S029",
      "status": "corrected",
      "pdfPages": [
        782,
        790
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 30,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "What does ALPHA FLOOR command when its high-angle-of-attack conditions are met?",
    "o": [
      "TOGA thrust regardless of thrust-lever position",
      "Idle thrust until speed exceeds VLS",
      "MCT only when A/THR is already active",
      "TOGA only in alternate law"
    ],
    "a": 0,
    "w": "ALPHA FLOOR commands TOGA regardless of thrust-lever position. It is available from liftoff to 100 ft RA on approach.",
    "ref": "FCOM DSC-22_30-50-50 · PDF pp.969 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q30, PDF p.7",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S030",
      "status": "checked",
      "pdfPages": [
        969
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 31,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "To perform a DIRECT TO:",
    "o": [
      "Press the DIR TO pushbutton, select or define the Waypoint, then press the DIRECT TO key again to confirm.",
      "Press the DIR TO pushbutton, select or define the Waypoint.",
      "Perform a Lateral Revision at the TO Waypoint; enter the DIR TO waypoint in the 'Next Waypoint' field.",
      "The new TO waypoint must be part of the Active Flight Plan."
    ],
    "a": 1,
    "w": "Press the DIR TO pushbutton, select or define the Waypoint. Guide Q31, PDF p.7.",
    "ref": "FCOM DSC-22_30-40-30-20 · PDF pp.508, 813 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q31, PDF p.7",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S031",
      "status": "checked",
      "pdfPages": [
        508,
        813
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 32,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "ATC delays descent and the aircraft passes the computed T/D while level. What does the FCOM describe?",
    "o": [
      "The aircraft descends automatically at T/D",
      "Selecting a lower FCU altitude alone starts descent",
      "The aircraft automatically decelerates at T/D",
      "T/D REACHED or DECELERATE appears; reduce speed with ATC permission and, when cleared, initiate descent"
    ],
    "a": 3,
    "w": "Beyond T/D the message prompts consideration of speed reduction with ATC permission. The aircraft does not start descending solely because it passes T/D or a lower altitude is dialled.",
    "ref": "FCOM PRO-NOR-SOP-17 · PDF pp.3307 · page revision 09 SEP 25 · supplied training compilation; aircraft options must match · Guide Q32, PDF p.7",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S032",
      "status": "corrected",
      "pdfPages": [
        3307
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 33,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "Which of the following A/THR and Pitch Channel mode combinations is possible?",
    "o": [
      "SPEED/CLB.",
      "SPEED/SRS.",
      "THRIDLE/ OP DES.",
      "THRCLB/VS."
    ],
    "a": 2,
    "w": "THRIDLE/ OP DES. Guide Q33, PDF p.7.",
    "ref": "FCOM DSC-22_30-40-60-20, DSC-22_30-40-60-20-A, DSC-22_30-50-50 · PDF pp.842, 966 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q33, PDF p.7",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S033",
      "status": "checked",
      "pdfPages": [
        842,
        966
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 34,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "Before engine start, on which MCDU page are ZFW and ZFWCG entered?",
    "o": [
      "INIT Page B.",
      "INIT Page A.",
      "TO PERF page.",
      "PROG page."
    ],
    "a": 0,
    "w": "Enter ZFW and ZFWCG on INIT B before engine start; after engine start the FUEL PRED page is used if required.",
    "ref": "FCOM PRO-NOR-SRP-01-10-A, PRO-NOR-SRP-01-10-B · PDF pp.246, 3535 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q34, PDF p.7",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S034",
      "status": "corrected",
      "pdfPages": [
        246,
        3535
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 35,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "On what page of the MCDU would you find OPT Alt and REC MAX FL?",
    "o": [
      "F-PLN A.",
      "PERF.",
      "FUEL PRED.",
      "PROG."
    ],
    "a": 3,
    "w": "PROG. Guide Q35, PDF p.7.",
    "ref": "FCOM  · PDF pp.587, 588 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q35, PDF p.7",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S035",
      "status": "checked",
      "pdfPages": [
        587,
        588
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 36,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "Once the APPROACH PHASE has been activated:",
    "o": [
      "An ILS Approach may be flown.",
      "The Managed Target Speed will be appropriate to the aircraft configuration.",
      "An ILS or Non-Precision Approach may be flown.",
      "Configure the aircraft without delay, as Target Managed Speed will reduce to VAPP."
    ],
    "a": 1,
    "w": "The Managed Target Speed will be appropriate to the aircraft configuration. Guide Q36, PDF p.7.",
    "ref": "FCOM  · PDF pp.975 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q36, PDF p.7",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S036",
      "status": "checked",
      "pdfPages": [
        975
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 37,
    "p": 8,
    "c": "Autoflight & FMGS",
    "q": "When Managed Speed is Active:",
    "o": [
      "There is a Magenta Target Speed on the PFD.",
      "SPEED or MACH is Magenta in the First Column of the FMA.",
      "The PFD Speed Scale has a Blue Target Speed (Triangle or Figures if Off-scale).",
      "To Change to Selected Speed, Push the FCU Speed Selector and Turn."
    ],
    "a": 0,
    "w": "There is a Magenta Target Speed on the PFD. Guide Q37, PDF p.8.",
    "ref": "FCOM DSC-22_30-60-20, DSC-22_30-60-20-A · PDF pp.974 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q37, PDF p.8",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S037",
      "status": "checked",
      "pdfPages": [
        974
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 38,
    "p": 8,
    "c": "Autoflight & FMGS",
    "q": "With a valid FLEX temperature, V2, takeoff configuration and all RWY engagement conditions satisfied, which FMA combination is expected at takeoff?",
    "o": [
      "THR TOGA -CLB - RWY.",
      "THR TOGA — SRS- HDG.",
      "MAN FLEX — SRS — RWY.",
      "MAN TOGA — SRS — NAV."
    ],
    "a": 2,
    "w": "MAN FLEX +temperature (shown as MAN FLX in the table), SRS and RWY identify the configured FLEX takeoff. An ILS-equipped runway alone is insufficient to guarantee RWY engagement.",
    "ref": "FCOM DSC-22_30-40-20-20-A, DSC-22_30-40-20-20, DSC-22_30-40-20-30, DSC-22_30-50-30-B · PDF pp.802, 804, 959 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q38, PDF p.8",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S038",
      "status": "corrected",
      "pdfPages": [
        802,
        804,
        959
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 39,
    "p": 8,
    "c": "Autoflight & FMGS",
    "q": "In managed climb, the FCU altitude is below the next higher constraint. Which FMA vertical mode first captures the FCU altitude?",
    "o": [
      "ALT* (altitude capture)",
      "ALT CST* (constraint capture)",
      "ALT (altitude hold)",
      "CLB in magenta"
    ],
    "a": 0,
    "w": "Because the FCU altitude is the limiting target, ALT* captures the selected altitude rather than the higher constraint.",
    "ref": "FCOM DSC-22_30-40-50-10-A, DSC-22_30-40-50-10 · PDF pp.824 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q39, PDF p.8",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S039",
      "status": "checked",
      "pdfPages": [
        824
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 40,
    "p": 8,
    "c": "Autoflight & FMGS",
    "q": "Each FMGS flight phase is associated with a characteristic managed speed target (or targets). How many such FMGS flight phases are there, excluding pre-flight and done?",
    "o": [
      "4",
      "5",
      "6",
      "7"
    ],
    "a": 2,
    "w": "6 Guide Q40, PDF p.8.",
    "ref": "FCOM DSC-22_20-30-20-05 · PDF pp.406 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q40, PDF p.8",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S040",
      "status": "checked",
      "pdfPages": [
        406
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 41,
    "p": 8,
    "c": "Autoflight & FMGS",
    "q": "During Descent the FCU altitude is set to 6000 feet, while the PFD target altitude is 8000 feet (magenta):",
    "o": [
      "The Altitude at the next waypoint will be 8000'.",
      "The aircraft is in an OP DES, and will observe the Altitude Constraint of 8000'.",
      "The aircraft is in DES and will observe the Altitude Constraint of 6000.",
      "The aircraft is in DES and will observe the Altitude Constraint of 8000."
    ],
    "a": 3,
    "w": "The aircraft is in DES and will observe the Altitude Constraint of 8000. Guide Q41, PDF p.8.",
    "ref": "FCOM DSC-22_30-40-60-30 · PDF pp.846, 1472 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q41, PDF p.8",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S041",
      "status": "checked",
      "pdfPages": [
        846,
        1472
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 42,
    "p": 8,
    "c": "Autoflight & FMGS",
    "q": "You are in a Managed Descent. The next waypoint has a Target Altitude of FL120 or below, but the FMGC calculates that we will cross this point at FL128. On the ND, how is this indicated?",
    "o": [
      "Predicted altitude on the ND is in Amber.",
      "ND Message: Unable to Achieve Required Altitude.",
      "Magenta Circle around the Waypoint.",
      "Amber Circle around the Waypoint."
    ],
    "a": 3,
    "w": "Amber Circle around the Waypoint. Guide Q42, PDF p.8.",
    "ref": "FCOM  · PDF pp.446 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q42, PDF p.8",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S042",
      "status": "checked",
      "pdfPages": [
        446
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 43,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "With A/THR active, established on the localizer in ALT/LOC at 3,000 ft, APPR selected but glideslope capture not yet reached, what is displayed?",
    "o": [
      "SPEED (Green) / G/S (Green) / LOC (Green).",
      "SPEED (Green) / ALT (Green) + G/S (Blue) / LOC (Green).",
      "SPEED (Green) / G/S (Blue) / LOC (Blue).",
      "SPEED (Green) / ALT (Green) + G/S Blue / HDG (Green)."
    ],
    "a": 1,
    "w": "SPEED, ALT and LOC are engaged in green; G/S remains armed in blue until capture.",
    "ref": "FCOM DSC-22_30-40-120-80 · PDF pp.944 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q43, PDF p.9",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S043",
      "status": "corrected",
      "pdfPages": [
        944
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 44,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "Following Radar Vectors, ATC instruct us to route direct to waypoint XYZ.",
    "o": [
      "Press HDG/TRK before opening the DIR page",
      "Activate DIR TO, then always push HDG/TRK",
      "Align the track through XYZ before opening DIR",
      "Open DIR, select or enter XYZ and activate the direct-to; NAV then engages"
    ],
    "a": 3,
    "w": "Activating DIR TO on the MCDU engages NAV in this radar-vector scenario; an additional HDG/TRK push is unnecessary.",
    "ref": "FCOM DSC-22_30-40-30-20 · PDF pp.508, 813 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q44, PDF p.9",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S044",
      "status": "corrected",
      "pdfPages": [
        508,
        813
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 45,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "The FMA indicates 2FD2. What does this signify?",
    "o": [
      "This indication is only on the right FMA. The left will read 1FD1.",
      "FD1 is INOP but FD2 will drive the Flight Director Bars on PFD1",
      "FD1 has failed, and no Flight Director is available on the Left side.",
      "This is the normal indication when AP2 is engaged."
    ],
    "a": 1,
    "w": "FD1 is INOP but FD2 will drive the Flight Director Bars on PFD1 Guide Q45, PDF p.9.",
    "ref": "FCOM DSC-22_30-20-50 · PDF pp.783 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q45, PDF p.9",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S045",
      "status": "checked",
      "pdfPages": [
        783
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 46,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "After an autopilot disconnect without using the takeover button, what does pressing MASTER WARN or the takeover button do?",
    "o": [
      "Restores the autopilot automatically",
      "Stops the cavalry charge, while AUTO FLT AP OFF remains displayed",
      "Clears every alert and restores the prior modes",
      "Has no effect on the aural warning"
    ],
    "a": 1,
    "w": "The FCOM distinguishes silencing the audio from clearing the alert. MASTER WARN or one takeover-button press stops the cavalry charge, but AUTO FLT AP OFF remains displayed.",
    "ref": "FCOM DSC-22_30-30-30-A, DSC-22_30-30-30-B, DSC-22_30-30-30 · PDF pp.790, 791 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q46, PDF p.9",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S046",
      "status": "corrected",
      "pdfPages": [
        790,
        791
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 47,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "Which statement about two-engine A/THR operation with AP or FD on is false?",
    "o": [
      "A/THR mode is independent of the active pitch mode",
      "A/THR may be active with both levers above IDLE and at or below CL",
      "Thrust-lever position normally limits available thrust",
      "A/THR mode is coordinated with pitch guidance"
    ],
    "a": 0,
    "w": "A/THR mode is coordinated with pitch guidance. Normal lever limiting has the ALPHA FLOOR exception.",
    "ref": "FCOM DSC-22_30-50-10, DSC-22_30-50-30-C · PDF pp.954, 960, 961 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q47, PDF p.9",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S047",
      "status": "corrected",
      "pdfPages": [
        954,
        960,
        961
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 48,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "In normal flight with FDs on and A/THR active, the crew disconnects only the AP with the takeover button. What happens to FD guidance and A/THR?",
    "o": [
      "Has no effect on the FD or A/THR system.",
      "Causes the A/THR to switch to SPEED Mode.",
      "Causes the A/THR to switch to SPEED Mode and the FDs to switch to Basic Modes (TRK/FPA or HDG/VS).",
      "Causes the FDs to disengage also."
    ],
    "a": 0,
    "w": "A normal AP-only disconnect does not itself switch off the FDs or A/THR. Failure-related disconnects require assessment of the associated failures.",
    "ref": "FCOM DSC-22_30-20-50, DSC-22_30-20-50-A, DSC-22_30-30-30-A, DSC-22_30-30-30-B · PDF pp.782, 790 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q48, PDF p.9",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S048",
      "status": "corrected",
      "pdfPages": [
        782,
        790
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 49,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "What follows when ALPHA FLOOR conditions clear and speed is above VLS?",
    "o": [
      "TOGA LK appears and TOGA thrust remains frozen until A/THR is disconnected",
      "Thrust immediately returns to its earlier value",
      "A/THR disconnects automatically",
      "The thrust levers move to TOGA"
    ],
    "a": 0,
    "w": "The FMA changes to TOGA LK and thrust remains frozen. The crew cancels A.FLOOR/TOGA LK by disconnecting autothrust.",
    "ref": "FCOM DSC-22_30-50-50 · PDF pp.969 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q49, PDF p.10",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S049",
      "status": "checked",
      "pdfPages": [
        969
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 50,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "Which thrust-column/vertical-mode combination is inconsistent with normal guidance logic?",
    "o": [
      "THR CLB / CLB",
      "MAN TOGA / SRS",
      "SPEED / CLB",
      "SPEED / V/S"
    ],
    "a": 2,
    "w": "CLB controls speed through pitch with a thrust mode; SPEED accompanies trajectory control such as V/S. MAN TOGA is a manual-thrust indication.",
    "ref": "FCOM DSC-22_30-50-50, DSC-22_30-50-50-A · PDF pp.966, 967 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q50, PDF p.10",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S050",
      "status": "corrected",
      "pdfPages": [
        966,
        967
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 51,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "On INIT Page A, enter the following:",
    "o": [
      "Co Route or ICAO City Pair; Cruise Altitude; Cost Index.",
      "Cruise Altitude, ZFW, ZFWCG.",
      "Co Route or ICAO City Pair; Departure Runway and SID; Cruise Altitude.",
      "Top of Climb Wind; Alternate, Initial Fuel on Board."
    ],
    "a": 0,
    "w": "Co Route or ICAO City Pair; Cruise Altitude; Cost Index. Guide Q51, PDF p.10.",
    "ref": "FCOM  · PDF pp.471, 472 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q51, PDF p.10",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S051",
      "status": "checked",
      "pdfPages": [
        471,
        472
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 52,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "While in a managed climb, you fly past your \"TO\" waypoint and into a Flight Plan Discontinuity. What will the FMA read?",
    "o": [
      "SPEED - ALT — HDG.",
      "THRCLB-OPCLB-HDG.",
      "SPEED -V/S- — HDG.",
      "THR CLB-CLB-HDG."
    ],
    "a": 1,
    "w": "THRCLB-OPCLB-HDG. Guide Q52, PDF p.10.",
    "ref": "FCOM DSC-22_30-40-30-20-A, DSC-22_30-40-30-20, DSC-22_30-40-40-10-A, DSC-22_30-40-40-10 · PDF pp.814, 817 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q52, PDF p.10",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S052",
      "status": "checked",
      "pdfPages": [
        814,
        817
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 53,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "The normal mode of FMGC operation is:",
    "o": [
      "Single mode.",
      "Independent mode.",
      "Dual mode.",
      "Normal operation uses none of single, independent or dual mode."
    ],
    "a": 2,
    "w": "Dual mode. Guide Q53, PDF p.10.",
    "ref": "FCOM DSC-22_10-30 · PDF pp.231 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q53, PDF p.10",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S053",
      "status": "checked",
      "pdfPages": [
        231
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 54,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "How can the FMGS approach phase be activated during descent?",
    "o": [
      "Only by pressing APPR on the FCU",
      "Manually from the PERF DES page or automatically at the DECEL pseudo-waypoint",
      "Only after glideslope capture",
      "Only by selecting CONF 1"
    ],
    "a": 1,
    "w": "Approach phase can be activated manually from PERF DES or automatically when the DECEL pseudo-waypoint is sequenced in the applicable managed modes.",
    "ref": "FCOM DSC-22_20-30-20-05 · PDF pp.409 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q54, PDF p.10",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S054",
      "status": "checked",
      "pdfPages": [
        409
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 55,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "DES is initiated before T/D, below the profile but above both the descent speed-limit altitude and destination elevation +5,000 ft. What initial descent rate is used?",
    "o": [
      "-1500 fpm.",
      "-2000 fpm.",
      "-1200 fpm.",
      "-1000 fpm."
    ],
    "a": 3,
    "w": "The initial rate is -1,000 ft/min in this high-altitude case. Below either threshold the source gives -500 ft/min, until a constraint or the profile is reached.",
    "ref": "FCOM DSC-22_30-40-60-30-C · PDF pp.857 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q55, PDF p.10",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S055",
      "status": "corrected",
      "pdfPages": [
        857
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 56,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "During ALT* capture, what does pitch guidance follow?",
    "o": [
      "A computed vertical path to the target altitude",
      "A fixed airspeed",
      "A constant vertical speed",
      "A fixed pitch attitude"
    ],
    "a": 0,
    "w": "ALT* uses a computed vertical path to capture the target altitude.",
    "ref": "FCOM DSC-22_30-40-50-10-A, DSC-22_30-40-50-10 · PDF pp.824 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q56, PDF p.11",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S056",
      "status": "checked",
      "pdfPages": [
        824
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 57,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "The aircraft levels at FL290, below the FL310 cruise level still entered in the FMGS. Without updating that entry, which flight phase remains?",
    "o": [
      "Transition to CRZ Phase at FL290.",
      "Transition to CRZ Phase after 2 minutes at FL290.",
      "Remain in CLB mode but Soft Alt will become active after 2 minutes.",
      "Remain in Climb phase."
    ],
    "a": 3,
    "w": "The FMGS remains in CLIMB phase until the applicable cruise-level entry/transition is satisfied. Insert the lower cleared cruise level on PROG.",
    "ref": "FCOM DSC-22_20-30-20-05, PRO-NOR-SOP-14-A, TDU / PRO-NOR-SOP-14-A · PDF pp.409, 3287 · page revision 22 MAY 24 / 05 MAY 25 · supplied training compilation; aircraft options must match · Guide Q57, PDF p.11",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S057",
      "status": "corrected",
      "pdfPages": [
        409,
        3287
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 58,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "When valid and successfully tested, what is the basic FM navigation mode?",
    "o": [
      "GPS/INERTIAL",
      "DME/DME only",
      "VOR/DME only",
      "Inertial only"
    ],
    "a": 0,
    "w": "GPS/INERTIAL is the basic navigation mode when GPS data is valid and successfully tested. Without valid GPS, the FMGC uses available radio updates with inertial data, or inertial-only navigation.",
    "ref": "FCOM DSC-22_20-20-10 · PDF pp.294, 300 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q58, PDF p.11",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S058",
      "status": "checked",
      "pdfPages": [
        294,
        300
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 59,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "Before takeoff, what is the purpose of entering a preselected speed on PERF CLB?",
    "o": [
      "To preset a Selected Target Speed, which will become active above acceleration altitude.",
      "To redefine the managed ECON Climb Speed.",
      "To cancel the '250 kt below FL100' Speed Control.",
      "To set a default climb in case of FMGC failure."
    ],
    "a": 0,
    "w": "It presets a selected climb speed for activation at the TAKEOFF-to-CLIMB phase transition. The cited FCOM also describes a simultaneous-leg-sequencing anomaly; monitor the actual target.",
    "ref": "FCOM DSC-22_20-100-20 · PDF pp.753 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q59, PDF p.11",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S059",
      "status": "corrected",
      "pdfPages": [
        753
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 60,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "Which response matches the current FCOM terrain-avoidance PULL UP manoeuvre?",
    "o": [
      "AP off, pitch pull up, thrust TOGA, speedbrakes retracted, and wings level or bank adjusted as required",
      "Keep AP engaged and select +1,000 ft/min",
      "Select V/S mode and leave thrust unchanged",
      "Tune the terrain-warning source before manoeuvring"
    ],
    "a": 0,
    "w": "Perform the listed actions simultaneously: AP off, full backstick held, TOGA, speedbrakes retracted, wings level or bank adjusted for terrain clearance. Do not change slats/flaps or gear until clear of the obstacle.",
    "ref": "FCOM PRO-ABN-SURV · PDF pp.3105 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q60, PDF p.11",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S060",
      "status": "corrected",
      "pdfPages": [
        3105
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 61,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "Above go-around acceleration altitude, which FMGS action changes GO-AROUND phase to CLIMB?",
    "o": [
      "Select a nonexistent CLIMB phase button",
      "Select the alternate or insert a new destination",
      "Wait for an automatic transition solely at acceleration altitude",
      "Activate APPROACH phase"
    ],
    "a": 1,
    "w": "Above acceleration altitude, selecting the alternate or inserting a new destination permits the transition to CLIMB; acceleration altitude alone does not.",
    "ref": "FCOM DSC-22_20-30-20-05 · PDF pp.410 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q61, PDF p.11",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S061",
      "status": "corrected",
      "pdfPages": [
        410
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 62,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "Which set contains examples of FMGS pseudo-waypoints?",
    "o": [
      "Only published radio beacons",
      "Only manually stored latitude/longitude points",
      "Only runway thresholds",
      "Top of climb/descent, speed-change and continue-descent points"
    ],
    "a": 3,
    "w": "Pseudo-waypoints are computed prediction points such as top of climb, top of descent, speed change and continued descent.",
    "ref": "FCOM DSC-22_20-40-30 · PDF pp.445, 446 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q62, PDF p.12",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S062",
      "status": "corrected",
      "pdfPages": [
        445,
        446
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 63,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "After a normal two-engine takeoff with A/THR armed, what action normally makes A/THR active?",
    "o": [
      "Keeping both levers at TOGA",
      "Moving both thrust levers to CL at thrust-reduction altitude",
      "Reaching thrust-reduction altitude without moving the levers",
      "Waiting for acceleration altitude with the levers still at FLEX"
    ],
    "a": 1,
    "w": "Moving the armed thrust levers into the active range activates A/THR. Reaching an altitude alone does not move the levers or activate it.",
    "ref": "FCOM DSC-22_30-50-30-C · PDF pp.961 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q63, PDF p.12",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S063",
      "status": "corrected",
      "pdfPages": [
        961
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 64,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "With both engines operating, what speed does SRS GA target during a missed approach?",
    "o": [
      "V2 +10 kt",
      "Always the speed at initiation, with no limits",
      "The lower of VAPP and speed at initiation",
      "The higher of VAPP and memorized speed, capped by the lower of VLS +25 kt and VMAX -5 kt"
    ],
    "a": 3,
    "w": "SRS GA uses the memorized aircraft speed or VAPP, whichever is higher, with the stated caps. The VLS cap becomes VLS +15 kt with one engine inoperative.",
    "ref": "FCOM DSC-22_30-40-90-20-A, DSC-22_30-40-90-20 · PDF pp.910, 975 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q64, PDF p.12",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S064",
      "status": "corrected",
      "pdfPages": [
        910,
        975
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 65,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "Pressing \"IMM EXIT\" while in a hold causes the aircraft to:",
    "o": [
      "Always complete another full holding circuit",
      "Exit at the next holding-fix overflight, turning toward the fix immediately when applicable",
      "Clear the hold and maintain heading",
      "Bypass the holding fix and proceed directly en route"
    ],
    "a": 1,
    "w": "The FCOM depicts exit at the next fix overflight; on the applicable part of the pattern it commands an immediate turn toward the fix.",
    "ref": "FCOM  · PDF pp.375 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q65, PDF p.12",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S065",
      "status": "corrected",
      "pdfPages": [
        375
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 66,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "The FMA indicates 1FD1. What does this signify?",
    "o": [
      "This indication is only on the left FMA. The right will read 2FD2.",
      "FMGC1 is supplying both FDs.",
      "Only FD 1 is selected ON.",
      "FMGC 2 is completely INOP."
    ],
    "a": 1,
    "w": "FMGC1 is supplying both FDs. Guide Q66, PDF p.12.",
    "ref": "FCOM DSC-22_30-20-50 · PDF pp.783 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q66, PDF p.12",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S066",
      "status": "checked",
      "pdfPages": [
        783
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 67,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "With LOC and G/S engaged and CAT1/2/3 capability, LAND engages below which radio height?",
    "o": [
      "400 ft RA",
      "300 ft RA",
      "350 ft RA",
      "450 ft RA"
    ],
    "a": 0,
    "w": "LAND automatically engages below 400 ft RA with LOC and G/S engaged and the required approach capability.",
    "ref": "FCOM DSC-22_30-40-80-30 · PDF pp.886 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q67, PDF p.12",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S067",
      "status": "corrected",
      "pdfPages": [
        886
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 68,
    "p": 13,
    "c": "Autoflight & FMGS",
    "q": "AP is Engaged and a VS of +5000 fpm has been selected, with a target speed of 250 kt. Indicated airspeed reduces until it reaches VLS. What will happen next?",
    "o": [
      "ALPHA FLOOR automatically activates at VLS",
      "Speed protection temporarily disregards the selected V/S to maintain VLS",
      "The AP always disconnects at VLS",
      "A SPEED SPEED SPEED callout is the only response"
    ],
    "a": 1,
    "w": "With an excessive selected climb rate and a 250 kt target, reaching VLS causes speed protection to give VLS priority over selected V/S. The source separately specifies VLS -5 kt if the selected speed target itself is VLS.",
    "ref": "FCOM DSC-22_30-40-110-A · PDF pp.923 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q68, PDF p.13",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S068",
      "status": "corrected",
      "pdfPages": [
        923
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 69,
    "p": 13,
    "c": "Autoflight & FMGS",
    "q": "To cross-check the Great Circle distance to any FMGC Nav Database Waypoint, Radio Facility or Airfield, which MCDU page should be used?",
    "o": [
      "F-PLN A.",
      "RADNAV.",
      "PROG.",
      "PERF."
    ],
    "a": 2,
    "w": "PROG. Guide Q69, PDF p.13.",
    "ref": "FCOM  · PDF pp.589 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q69, PDF p.13",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S069",
      "status": "checked",
      "pdfPages": [
        589
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 70,
    "p": 13,
    "c": "Autoflight & FMGS",
    "q": "During a missed approach the FMA indicates GA TRK. What does this mean?",
    "o": [
      "Managed guidance follows the database missed-approach route",
      "Selected guidance follows runway heading",
      "Selected guidance follows the database missed approach",
      "Managed GA TRK maintains the aircraft track memorized at mode engagement"
    ],
    "a": 3,
    "w": "GA TRK maintains the track at engagement; it does not follow the coded missed-approach routing. The FCOM classifies GA TRK as a managed lateral mode.",
    "ref": "FCOM DSC-22_30-40-90-30 · PDF pp.912 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q70, PDF p.13",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S070",
      "status": "corrected",
      "pdfPages": [
        912
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 71,
    "p": 13,
    "c": "Autoflight & FMGS",
    "q": "When holding:",
    "o": [
      "Select the holding speed",
      "Activate the Approach Phase for best economy Holding speed.",
      "Hold at 220 kt below FL140, 250 kt / M0.65 above FL140",
      "A managed Holding Speed is available."
    ],
    "a": 3,
    "w": "A managed Holding Speed is available. Guide Q71, PDF p.13.",
    "ref": "FCOM  · PDF pp.372 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q71, PDF p.13",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S071",
      "status": "checked",
      "pdfPages": [
        372
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 72,
    "p": 13,
    "c": "Autoflight & FMGS",
    "q": "When asked to hold:",
    "o": [
      "Access the Hold Data Page via the HOLD key on the MCDU.",
      "Perform a Lateral Revision at the Hold Fix: you must always enter Inbound Course, Turn Direction and Outbound Timing through the Scratchpad and Line Select Keys.",
      "For a Database Hold, review and then accept or change Hold parameters.",
      "Line Select Entry Sector 1, 2 or 3 as appropriate."
    ],
    "a": 2,
    "w": "For a Database Hold, review and then accept or change Hold parameters. Guide Q72, PDF p.13.",
    "ref": "FCOM  · PDF pp.506 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q72, PDF p.13",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S072",
      "status": "checked",
      "pdfPages": [
        506
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 73,
    "p": 13,
    "c": "Autoflight & FMGS",
    "q": "Following a missed approach, a copy of the previous approach will be added to the end of the FMGC Active Flight Plan:",
    "o": [
      "When the Go - Around Phase becomes active.",
      "When the Approach Phase becomes active.",
      "By selecting it on the FPLAN page.",
      "By activating the SEC FPLAN"
    ],
    "a": 0,
    "w": "When the Go - Around Phase becomes active. Guide Q73, PDF p.13.",
    "ref": "FCOM PRO-NOR-SRP-01-80 · PDF pp.3612 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q73, PDF p.13",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S073",
      "status": "checked",
      "pdfPages": [
        3612
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 74,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "FMGS modes of Operation:",
    "o": [
      "In Independent Mode, either MCDU controls both FMGCs.",
      "In single mode, only one MCDU is available.",
      "To operate in Dual Mode, both MCDUs must be available.",
      "In Independent mode, MCDU 1 controls FMGC1 and MCDU2 controls FMGC2."
    ],
    "a": 3,
    "w": "In Independent mode, MCDU 1 controls FMGC1 and MCDU2 controls FMGC2. Guide Q74, PDF p.14.",
    "ref": "FCOM DSC-22_10-30 · PDF pp.231 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q74, PDF p.14",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S074",
      "status": "checked",
      "pdfPages": [
        231
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 75,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "In the supplied FCOM cost-index description, what are the CI endpoints and the meaning of zero?",
    "o": [
      "From 0 — 999; 0 will give the shortest flight time.",
      "From 0 — 200; 0 will give the least fuel burn.",
      "From 0 - 999; 0 will give the least fuel burn.",
      "From 0 — 99; 0 will give the shortest flight time."
    ],
    "a": 2,
    "w": "The source defines CI 0 as minimum fuel consumption and CI 999 as minimum time. Use the applicable FM/software standard for actual entries.",
    "ref": "FCOM DSC-22_20-40-20 · PDF pp.442 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q75, PDF p.14",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S075",
      "status": "corrected",
      "pdfPages": [
        442
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 76,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "What does REC MAX on the MCDU PROG page represent?",
    "o": [
      "Recommended maximum altitude computed using current weight and temperature, assuming anti-ice OFF",
      "The highest altitude cleared by ATC",
      "A fixed maximum altitude independent of weight",
      "The selected FCU altitude"
    ],
    "a": 0,
    "w": "REC MAX uses current gross weight and temperature with anti-ice OFF. It accounts for buffet margin, climb and cruise performance and is limited to FL398 in the cited source. If icing is expected, use the applicable EFB performance calculation.",
    "ref": "FCOM  · PDF pp.588 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q76, PDF p.14",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S076",
      "status": "corrected",
      "pdfPages": [
        588
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 77,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "On INIT page A, the following parameters must or may be entered:",
    "o": [
      "Company Route, Flight number, Cost Index, QNH and Cruise Alt.",
      "Stand Position, Flight number, Tropopause and ZFW.",
      "Company Route or FROM/ TO Airfields, Flight Nr, Cost Index, Cruise Alt.",
      "Company Route or FROM / TO Airfields, Cruise Alt and Wind and ISA Deviation."
    ],
    "a": 2,
    "w": "Company Route or FROM/ TO Airfields, Flight Nr, Cost Index, Cruise Alt. Guide Q77, PDF p.14.",
    "ref": "FCOM  · PDF pp.471, 472 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q77, PDF p.14",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S077",
      "status": "checked",
      "pdfPages": [
        471,
        472
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 78,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "How is the MCDU DEPARTURES page normally accessed?",
    "o": [
      "By a lateral revision at the departure airport",
      "It appears automatically when FROM is entered",
      "By a lateral revision at any waypoint",
      "Through the PROG page"
    ],
    "a": 0,
    "w": "The DEPARTURES page is opened from a lateral revision at the departure airport.",
    "ref": "FCOM DSC-22_20-50-10-25 · PDF pp.491, 493 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q78, PDF p.14",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S078",
      "status": "checked",
      "pdfPages": [
        491,
        493
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 79,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "On the Flight Plan pages:",
    "o": [
      "Lateral Revisions may be made at any actual or pseudo — waypoints.",
      "Vertical revisions are made either directly onto the page or through a Vertical Revision page.",
      "Vertical Revisions must be made through the appropriate Vertical Revisions page.",
      "Lateral Revisions are accessed by a key on the right of the MCDU, Vertical Revisions by one on the left."
    ],
    "a": 1,
    "w": "Vertical revisions are made either directly onto the page or through a Vertical Revision page. Guide Q79, PDF p.14.",
    "ref": "FCOM DSC-22_20-30-20-05 · PDF pp.410, 3532 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q79, PDF p.14",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S079",
      "status": "checked",
      "pdfPages": [
        410,
        3532
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 80,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "How does an FMGC retain its position correction when radio/GPIRS updating is lost?",
    "o": [
      "It discards all inertial data",
      "It fixes the aircraft at the last radio position",
      "It switches directly to an uncorrected individual IRS position",
      "It adds the memorized radio/GPIRS-to-MIX-IRS bias to the continuing MIX IRS position"
    ],
    "a": 3,
    "w": "The FMGC normally updates a bias between MIX IRS and radio or GPIRS position. If those updates are lost, it freezes that bias and adds it to MIX IRS until updating resumes.",
    "ref": "FCOM DSC-22_20-20-10 · PDF pp.294, 298 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q80, PDF p.14",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S080",
      "status": "corrected",
      "pdfPages": [
        294,
        298
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 81,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "Following a Go Around:",
    "o": [
      "The Alternate Flight Plan is activated automatically.",
      "A Copy of the Approach Procedure (with associated Missed Approach Procedure) is added to the end of the Active Flight Plan.",
      "Make a Lateral Modification from the Destination to select another Approach.",
      "The FMGS transitions into Approach Phase when the APP pushbutton is pressed."
    ],
    "a": 1,
    "w": "A Copy of the Approach Procedure (with associated Missed Approach Procedure) is added to the end of the Active Flight Plan. Guide Q81, PDF p.15.",
    "ref": "FCOM PRO-NOR-SRP-01-80 · PDF pp.3612 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q81, PDF p.15",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S081",
      "status": "checked",
      "pdfPages": [
        3612
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 82,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "After takeoff or go-around with one engine inoperative and A/THR armed, which statement is correct?",
    "o": [
      "Acceleration altitude alone activates A/THR",
      "MCT is the normal two-engine A/THR position",
      "Thrust-reduction altitude alone activates A/THR",
      "The operative lever is normally at MCT; after an engine failure during FLEX/derate, move it below then back to MCT to activate A/THR"
    ],
    "a": 3,
    "w": "The operative-engine active range ends at FLX-MCT. The source explicitly requires the below-and-back lever movement following engine failure during FLEX/derated takeoff; keep the failed-engine lever at idle.",
    "ref": "FCOM DSC-22_30-50-30-C · PDF pp.961 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q82, PDF p.15",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S082",
      "status": "corrected",
      "pdfPages": [
        961
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 83,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "In normal airborne manual flight, both APs and FDs are off and TRK/FPA is selected. What basic guidance engages when the FDs are switched on?",
    "o": [
      "The FDs will engage in whichever mode was previously in use.",
      "The FDs will engage in HDG and ALT modes.",
      "The FDs will always engage in VS and HDG mode (Basic Modes).",
      "If the FPV is displayed, the FPD will engage in TRK and FPA modes."
    ],
    "a": 3,
    "w": "The basic modes engage in accordance with the FCU selection: TRACK and FPA when TRK/FPA is selected.",
    "ref": "FCOM DSC-22_30-40-70, DSC-22_30-40-70-A · PDF pp.866 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q83, PDF p.15",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S083",
      "status": "corrected",
      "pdfPages": [
        866
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 84,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "What does ALT* on the FMA signify?",
    "o": [
      "Altitude capture is in progress",
      "Altitude hold is established",
      "A vertical-speed target is armed",
      "The flight directors are off"
    ],
    "a": 0,
    "w": "ALT* is the altitude-capture mode; ALT without the star is altitude hold.",
    "ref": "FCOM DSC-22_30-40-50-10-A, DSC-22_30-40-50-10 · PDF pp.824 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q84, PDF p.15",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S084",
      "status": "checked",
      "pdfPages": [
        824
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 85,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "When does armed NAV normally engage after takeoff?",
    "o": [
      "At 30 ft RA",
      "At 30° of pitch",
      "At 400 ft RA",
      "At acceleration altitude"
    ],
    "a": 0,
    "w": "When NAV is armed before takeoff, it normally engages at 30 ft radio altitude. The legacy guide's degree symbol was an OCR error.",
    "ref": "FCOM DSC-22_30-40-30-20 · PDF pp.813 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q85, PDF p.15",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S085",
      "status": "checked",
      "pdfPages": [
        813
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 86,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "During an Automatic Approach, the FMA shows AP1+2 in a white box.",
    "o": [
      "Both autopilots have just disconnected.",
      "A second autopilot has been engaged within the last few seconds.",
      "One of the autopilots has taken over from the other.",
      "Either the LOC or the APP FCU pushbutton is illuminated green."
    ],
    "a": 1,
    "w": "A second autopilot has been engaged within the last few seconds. Guide Q86, PDF p.15.",
    "ref": "FCOM DSC-22_30-30-20, DSC-22_30-30-20-A, DSC-22_30-80-20 · PDF pp.788, 990 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q86, PDF p.15",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S086",
      "status": "checked",
      "pdfPages": [
        788,
        990
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 87,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "When the V/S or FPA knob on the FCU is pushed in:",
    "o": [
      "Managed V/S or FPA is engaged.",
      "The current V/S or FPA is engaged.",
      "An immediate level off is commanded.",
      "This knob cannot be pushed in."
    ],
    "a": 2,
    "w": "An immediate level off is commanded. Guide Q87, PDF p.15.",
    "ref": "FCOM  · PDF pp.255 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q87, PDF p.15",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S087",
      "status": "checked",
      "pdfPages": [
        255
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 88,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "For the Autopilots and Flight Directors:",
    "o": [
      "If an excessive V/S is demanded in climb, the A/P will disengage when the speed decreases to Vis.",
      "If a Heading is preset before Takeoff, it will not be cancelled after 45 seconds.",
      "Expect THR CLB/ ALT* or THR IDLE / ALT* modes when levelling at the FCU selected Altitude.",
      "Both APs can be selected ON after Approach Phase is Activated."
    ],
    "a": 1,
    "w": "If a Heading is preset before Takeoff, it will not be cancelled after 45 seconds. Guide Q88, PDF p.16.",
    "ref": "FCOM DSC-22_30-40-30-10-B, DSC-22_30-40-30-10 · PDF pp.810, 811 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q88, PDF p.16",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S088",
      "status": "checked",
      "pdfPages": [
        810,
        811
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 89,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "NAV mode engages:",
    "o": [
      "Automatically at 30 feet RA after take-off when previously armed.",
      "When either auto-pilot is first engaged.",
      "Whenever the HDG/TRK knob is pushed.",
      "When any other lateral mode is disengaged."
    ],
    "a": 0,
    "w": "Automatically at 30 feet RA after take-off when previously armed. Guide Q89, PDF p.16.",
    "ref": "FCOM DSC-22_30-40-30-20 · PDF pp.813 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q89, PDF p.16",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S089",
      "status": "checked",
      "pdfPages": [
        813
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 90,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "On an ILS approach with LOC and G/S engaged and CAT1/2/3 capability, when does LAND engage?",
    "o": [
      "At MDA +400 ft",
      "Below 400 ft RA",
      "At 400 ft pressure altitude on every approach",
      "Only at 400 ft AMSL with two APs"
    ],
    "a": 1,
    "w": "The trigger is below 400 ft radio height with the stated LOC/G/S and capability conditions; two APs are not required for LAND mode engagement.",
    "ref": "FCOM DSC-22_30-40-80-30 · PDF pp.886 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q90, PDF p.16",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S090",
      "status": "corrected",
      "pdfPages": [
        886
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 91,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "A/THRstatus can be checked:",
    "o": [
      "By the ECAM memo",
      "By position of the thrust levers",
      "By the FCU A/THR light only (Green = Active).",
      "By the A/THR light on the FCU, and on the FMA."
    ],
    "a": 3,
    "w": "By the A/THR light on the FCU, and on the FMA. Guide Q91, PDF p.16.",
    "ref": "FCOM DSC-22_10-40-20, DSC-22_30-50-30-B, DSC-22_30-50-30-C · PDF pp.254, 959, 962 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q91, PDF p.16",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S091",
      "status": "checked",
      "pdfPages": [
        254,
        959,
        962
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 92,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "During a normal all-engines-operating takeoff, when does SRS TO normally disengage?",
    "o": [
      "For a Normal Take Off, V2 + 10 in Pitch, Wings level.",
      "Following an Engine Failure on Take Off, the speed at which the failure occurred, subject to minimum V2, maximum — F Speed + 20 kt.",
      "Following a 2 engine Missed Approach, Vref + 10, maintain Runway Track.",
      "Active until Acceleration Altitude (or, for a low initial level-off, until ALT* becomes active)."
    ],
    "a": 3,
    "w": "At ACCEL ALT, when ALT* or ALT CST* captures above 400 ft RA, or when another vertical mode engages. In engine-out conditions it does not automatically disengage at EO ACCEL ALT.",
    "ref": "FCOM DSC-22_30-40-20-20-A, DSC-22_30-40-20-20, DSC-22_30-40-20-20-B · PDF pp.802, 803 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q92, PDF p.16",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S092",
      "status": "corrected",
      "pdfPages": [
        802,
        803
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 93,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "On the Approach, the Go-around routing may be shown on the ND as a line which is:",
    "o": [
      "Solid blue",
      "Dashed blue.",
      "Solid green",
      "Dashed green"
    ],
    "a": 0,
    "w": "Solid blue Guide Q93, PDF p.16.",
    "ref": "FCOM DSC-22_10-40-50 · PDF pp.264 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q93, PDF p.16",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S093",
      "status": "checked",
      "pdfPages": [
        264
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 94,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "On the FMGS RAD NAV page:",
    "o": [
      "The displayed VORs, ILS and ADF have all been Auto tuned.",
      "The DMEs or VORs that are shown are being used for FMGC Navigation purposes.",
      "The ILS frequency is for the Approach in the Active Flight Plan, and cannot be changed without changing the Flight Plan itself.",
      "The VORs are those that may be displayed on the NDs / DDRMI. They may have been Automatically or Manually tuned."
    ],
    "a": 3,
    "w": "The VORs are those that may be displayed on the NDs / DDRMI. They may have been Automatically or Manually tuned. Guide Q94, PDF p.16.",
    "ref": "FCOM DSC-22_20-20-30 · PDF pp.311 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q94, PDF p.16",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S094",
      "status": "checked",
      "pdfPages": [
        311
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 95,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "All other conditions equal, what does increasing cost index from 30 to 60 do to the ECON calculation?",
    "o": [
      "It gives fuel cost more weight than time cost",
      "It guarantees the same target speed in all phases",
      "It gives time cost more weight, generally favouring a higher ECON speed when unconstrained",
      "It changes the structural speed limits"
    ],
    "a": 2,
    "w": "CI is time cost divided by fuel cost. A higher value favours shorter flight time; speed limits and constraints can prevent an actual increase in target speed.",
    "ref": "FCOM DSC-22_20-40-20 · PDF pp.442 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q95, PDF p.17",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S095",
      "status": "corrected",
      "pdfPages": [
        442
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 96,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "FMGC CRZ Altitude:",
    "o": [
      "Once set, CRZ cannot change",
      "CRZ is entered on INIT B",
      "Selecting an FCU altitude above the displayed CRZ level updates the CRZ field",
      "Levelling below CRZ automatically lowers the field"
    ],
    "a": 2,
    "w": "The PROG description says a higher FCU selection updates the CRZ field. A lower final cruise level needs the appropriate crew entry.",
    "ref": "FCOM  · PDF pp.587 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q96, PDF p.17",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S096",
      "status": "corrected",
      "pdfPages": [
        587
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 97,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "On INIT Page B, the following parameters may be entered by the pilot:",
    "o": [
      "Take Off Weight, Take Off CG, Fuel Loaded.",
      "Take Off Weight, Zero Fuel Weight, Landing Weight.",
      "ZFW CG, ZFW, Fuel Loaded.",
      "Cruise Level, Cruise Cog, Taxi Fuel, ZFW."
    ],
    "a": 2,
    "w": "ZFW CG, ZFW, Fuel Loaded. Guide Q97, PDF p.17.",
    "ref": "FCOM PRO-NOR-SRP-01-10-A, PRO-NOR-SRP-01-10-B · PDF pp.246, 3535 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q97, PDF p.17",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S097",
      "status": "checked",
      "pdfPages": [
        246,
        3535
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 98,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "While CLB/NAV is engaged, a route discontinuity is reached. Which statement about the vertical mode is correct?",
    "o": [
      "AP and FD must disconnect",
      "CLB remains engaged without NAV",
      "It always changes to ALT CRZ",
      "CLB reverts to OP CLB"
    ],
    "a": 3,
    "w": "NAV reverts to HDG/TRACK; CLB reverts to OP CLB. The source also specifies a triple click and 10-second mode boxing/FD flashing.",
    "ref": "FCOM DSC-22_30-40-30-20-A, DSC-22_30-40-30-20, DSC-22_30-40-40-10-A, DSC-22_30-40-40-10 · PDF pp.814, 817 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q98, PDF p.17",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S098",
      "status": "corrected",
      "pdfPages": [
        814,
        817
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 99,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "Which group of data is entered or selected on the PERF APPR page?",
    "o": [
      "Landing configuration, QNH, surface temperature and tower wind",
      "Runway heading, transition altitude, tropopause and ISA deviation",
      "Only QNH and landing configuration",
      "Pack configuration, anti-ice selection and runway slope"
    ],
    "a": 0,
    "w": "PERF APPR includes QNH, surface temperature, destination wind and landing configuration. Their roles differ: for example, temperature refines descent-profile computation, while headwind and VLS enter the VAPP formula.",
    "ref": "FCOM  · PDF pp.582, 583 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q99, PDF p.17",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S099",
      "status": "corrected",
      "pdfPages": [
        582,
        583
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 100,
    "p": 17,
    "c": "Air & Pressurisation",
    "q": "With both engines running, APU speed above 95%, APU BLEED ON, X BLEED AUTO, no leak/start inhibit and within the APU bleed envelope, can APU bleed supply both packs?",
    "o": [
      "Yes",
      "No",
      "Only if the X Bleed Valve is Selected OPEN.",
      "Only if Engine Bleed Pressure is Low."
    ],
    "a": 0,
    "w": "The APU bleed valve opens and the crossbleed opens automatically; the engine bleed valves close. The dual-pack APU-bleed ceiling in the cited limit is 15,000 ft.",
    "ref": "FCOM DSC-36-10-30, DSC-36-10-40, LIM-APU-20 · PDF pp.1900, 1902, 3719 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q100, PDF p.17",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S100",
      "status": "corrected",
      "pdfPages": [
        1900,
        1902,
        3719
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 101,
    "p": 17,
    "c": "Air & Pressurisation",
    "q": "With APU bleed supplying, both engines running, X BLEED AUTO and no engine start in progress, a left pneumatic duct leak is detected. What happens?",
    "o": [
      "All bleed valves stay open",
      "Only the right engine bleed valve closes",
      "APU bleed and crossbleed close; the already-closed left engine bleed stays closed",
      "The crossbleed opens to supply the leak from the right"
    ],
    "a": 2,
    "w": "The left leak commands APU bleed and automatic crossbleed closure and prevents the left engine bleed from opening. Engine-start exceptions are excluded from this scenario.",
    "ref": "FCOM DSC-36-10-30, DSC-36-10-50 · PDF pp.1900, 1904 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q101, PDF p.17",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S101",
      "status": "corrected",
      "pdfPages": [
        1900,
        1904
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 102,
    "p": 18,
    "c": "Air & Pressurisation",
    "q": "Pneumatic Air from the Engines is:",
    "o": [
      "Only fan air is supplied to the pneumatic manifold",
      "The delivered bleed pressure is unregulated",
      "No heat exchanger cools the bleed supply",
      "Air comes from IP/HP compressor stages, is regulated to about 45 psi and precooled by fan air to about 200 °C"
    ],
    "a": 3,
    "w": "The source describes IP extraction from the high-pressure compressor, with HP-stage supply at low speed, delivery pressure 45 ±5 psi and precooling to about 200 °C.",
    "ref": "FCOM DSC-36-10-20 · PDF pp.1896, 1897 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q102, PDF p.18",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S102",
      "status": "corrected",
      "pdfPages": [
        1896,
        1897
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 103,
    "p": 18,
    "c": "Air & Pressurisation",
    "q": "The pneumatic system is controlled by two BMCs (Bleed Monitoring Computers).",
    "o": [
      "The Cross Bleed Valve Auto Position is always over-ridden by manual SHUT or OPEN selections.",
      "In AUTO, the Cross Bleed Valve is Closed when the APU Bleed Valve Opens.",
      "If a Leak is detected, the On-side Engine Bleed Valve is Closed but the pilot must close the Cross-Bleed.",
      "If BMC1 has failed, the APU Bleed Valve cannot be controlled in AUTO."
    ],
    "a": 0,
    "w": "The Cross Bleed Valve Auto Position is always over-ridden by manual SHUT or OPEN selections. Guide Q103, PDF p.18.",
    "ref": "FCOM DSC-36-10-40 · PDF pp.1902, 1909 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q103, PDF p.18",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S103",
      "status": "checked",
      "pdfPages": [
        1902,
        1909
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 104,
    "p": 18,
    "c": "Air & Pressurisation",
    "q": "With APU above 95%, APU BLEED ON, X BLEED AUTO, both engines running and no leak/start inhibit, which BLEED-page valve indication is normal?",
    "o": [
      "There is an indication of ENG ANTI ICE bleed source temperature and pressure.",
      "WING ANTI ICE system is always displayed: ON or OFF.",
      "When APU BLEED pushbutton ON and the APU running, the APU Bleed Valve and Crossbleed valve will be indicated open, and both Engine Bleed Valves will be indicated closed.",
      "Anamber HP valve symbol means HP bleed available, but not used."
    ],
    "a": 2,
    "w": "The APU bleed and crossbleed valves indicate open and the engine bleed valves indicate closed. This is conditional on the stated normal automatic configuration.",
    "ref": "FCOM DSC-36-10-30, DSC-36-10-40, LIM-APU-20 · PDF pp.1900, 1902, 3719 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q104, PDF p.18",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S104",
      "status": "corrected",
      "pdfPages": [
        1900,
        1902,
        3719
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 105,
    "p": 19,
    "c": "Air & Pressurisation",
    "q": "The Pack Flow Control valve automatically delivers high flow under which circumstances?",
    "o": [
      "Single pack operation or APU supplying bleed air.",
      "Bleeds off or CPC failure.",
      "APU supplying air on ground or high cabin cooling demand only.",
      "Single pack operation, APU supplying Bleed Air or High Cabin Temp required."
    ],
    "a": 0,
    "w": "Single pack operation or APU supplying bleed air. Guide Q105, PDF p.19.",
    "ref": "FCOM  · PDF pp.162, 166 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q105, PDF p.19",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S105",
      "status": "checked",
      "pdfPages": [
        162,
        166
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 106,
    "p": 19,
    "c": "Air & Pressurisation",
    "q": "The Ram Air pushbutton activates the Ram Air Inlet. For what reason might this be opened?",
    "o": [
      "Over pressurization.",
      "Following loss of both Packs, to remove smoke or for ventilation.",
      "Emergency Pressurisation from Ram Air Pressure.",
      "Loss of cabin temp control."
    ],
    "a": 1,
    "w": "Emergency ram air can ventilate the cabin after both packs fail or during the applicable smoke-removal procedure. Useful airflow requires differential pressure below 1 psi and DITCHING off; in manual pressure mode the outflow valve must be managed manually.",
    "ref": "FCOM DSC-21-10-20 · PDF pp.159 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q106, PDF p.19",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S106",
      "status": "corrected",
      "pdfPages": [
        159
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 107,
    "p": 19,
    "c": "Air & Pressurisation",
    "q": "Following loss of the Zone Controller Primary Channel",
    "o": [
      "The Zone Controller Secondary Channel will perform all functions.",
      "Pack Flow rate becomes fixed at the last setting.",
      "The Packs will operate in ALTN mode and maintain both Flight deck and Cabin at 24°C.",
      "PACK REG will be displayed on the AIRCOND SD."
    ],
    "a": 2,
    "w": "Student guide answer retained: The Packs will operate in ALTN mode and maintain both Flight deck and Cabin at 24°C. Guide Q107, PDF p.19.",
    "ref": "FCOM DSC-21-10-10, DSC-21-10-30, DSC-21-10-40 · PDF pp.155, 161, 163 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q107, PDF p.19",
    "review": "withheld",
    "verification": {
      "id": "S107",
      "status": "withheld",
      "pdfPages": [
        155,
        161,
        163
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 108,
    "p": 19,
    "c": "Air & Pressurisation",
    "q": "If both channels of the Left Pack Controller become INOP, what happens to the Left Pack Outlet Temp.?",
    "o": [
      "It remains fixed at current value.",
      "It is controlled to the Temp selected on the Flight Deck Temperature Selector directly.",
      "It is controlled to the average of the 3 Temperature Selectors.",
      "It is controlled within a defined temperature range by a pack internal mechanism."
    ],
    "a": 3,
    "w": "Student guide answer retained: It is controlled within a defined temperature range by a pack internal mechanism. Guide Q108, PDF p.19.",
    "ref": "FCOM DSC-21-10-10, DSC-21-10-30, DSC-21-10-40 · PDF pp.155, 161, 163 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q108, PDF p.19",
    "review": "withheld",
    "verification": {
      "id": "S108",
      "status": "withheld",
      "pdfPages": [
        155,
        161,
        163
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 109,
    "p": 19,
    "c": "Air & Pressurisation",
    "q": "If one Cabin Pressure Controller or CPC has failed, but the other has not taken over what can be done?",
    "o": [
      "Nothing; CPCs will change over automatically 70 seconds after landing.",
      "Select CABIN PRESS MODE SEL pushbutton to MAN for 10 sec, then back to AUTO to force CPCs changeover.",
      "Briefly select the MANUAL Landing Elevation Selector out of the AUTO detent to force CPC changeover.",
      "Either select pressure mode MAN for 10 seconds then AUTO, or briefly move landing elevation out of AUTO."
    ],
    "a": 1,
    "w": "Select MODE SEL to MAN for at least 10 seconds, then return to AUTO to select the other automatic controller.",
    "ref": "FCOM DSC-21-20-40 · PDF pp.185 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q109, PDF p.19",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S109",
      "status": "corrected",
      "pdfPages": [
        185
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 110,
    "p": 19,
    "c": "Air & Pressurisation",
    "q": "Following loss of both CPCs, how do you gain Manual control of the cabin pressure?",
    "o": [
      "Select the Cabin Pressure MODE SEL pushbutton to MAN and then use the VS toggle switch to directly adjust the Outflow Valve position.",
      "Select the Cabin Pressure MODE SEL pushbutton to MAN and use the rotary knob to adjust the cabin rate.",
      "The VS Switch is always Armed: use it to control Cabin Alt directly.",
      "Manually set the Required Cabin Alt for Cruise and Descent on the Man Cabin Alt Selector"
    ],
    "a": 0,
    "w": "Select the Cabin Pressure MODE SEL pushbutton to MAN and then use the VS toggle switch to directly adjust the Outflow Valve position. Guide Q110, PDF p.19.",
    "ref": "FCOM DSC-21-20-30 · PDF pp.182, 186 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q110, PDF p.19",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S110",
      "status": "checked",
      "pdfPages": [
        182,
        186
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 111,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "With normal avionics ventilation controls and a valid skin temperature of 0 °C, which configurations are expected on the ground and in flight?",
    "o": [
      "On Ground: OPEN: In Flight: Intermediate.",
      "On Ground: CLOSED: In Flight: CLOSED.",
      "On Ground: OPEN: In Flight: CLOSED.",
      "On Ground: CLOSED: In Flight: CLOSED with added Air-conditioning Air"
    ],
    "a": 1,
    "w": "At 0 °C the skin temperature is below both normal thresholds, giving closed configuration. An out-of-range sensed temperature has separate fallback logic.",
    "ref": "FCOM DSC-21-30-20 · PDF pp.197, 199 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q111, PDF p.20",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S111",
      "status": "corrected",
      "pdfPages": [
        197,
        199
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 112,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "In normal temperature control, how are pack outlet temperature demands determined?",
    "o": [
      "Pack 1 always follows the cockpit thermostat directly",
      "Both packs use the average of the thermostat settings",
      "Each pack permanently serves only its own side",
      "The coldest zone demand sets pack output; trim air raises temperature for zones needing warmer air"
    ],
    "a": 3,
    "w": "The controller selects the lowest demanded zone temperature for the packs and modulates trim air for the individual zones. Demand is computed from temperature-control requirements, not simply the coldest selector setting.",
    "ref": "FCOM DSC-21-10-30 · PDF pp.161 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q112, PDF p.20",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S112",
      "status": "corrected",
      "pdfPages": [
        161
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 113,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "A Cabin Pressure Controllers (CPC) has failed:",
    "o": [
      "Push the ditching pushbutton to prevent depressurisation.",
      "Control the outflow valve manually by use of the VS Switch.",
      "Set Landing Elevation on the Manual Landing Elevation Selector.",
      "The other CPC will continue to control the pressurisation automatically."
    ],
    "a": 3,
    "w": "The other CPC will continue to control the pressurisation automatically. Guide Q113, PDF p.20.",
    "ref": "FCOM DSC-21-20-30 · PDF pp.181 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q113, PDF p.20",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S113",
      "status": "checked",
      "pdfPages": [
        181
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 114,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "For emergency ram air to provide ventilation, cabin differential pressure must be:",
    "o": [
      "To maintain Ventilation rate if a Pack has failed.",
      "At any time if Smoke Clearance is required.",
      "Only if differential pressure < 1 psi.",
      "If the Outflow valve has failed closed."
    ],
    "a": 2,
    "w": "Below 1 psi. At higher differential pressure the check valve prevents airflow even if the ram-air inlet is open; DITCHING and outflow-valve conditions also apply.",
    "ref": "FCOM DSC-21-10-20 · PDF pp.159 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q114, PDF p.20",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S114",
      "status": "corrected",
      "pdfPages": [
        159
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 115,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "With normal controls and a valid skin-temperature signal, which avionics ventilation configuration is used in flight?",
    "o": [
      "Closed.",
      "Closed, but Intermediate if the Skin Temperature is very High (>35°C).",
      "Closed, but intermediate if the Skin Temperature is Low. (<9°C)",
      "Closed, but Open if the Skin Temperature is very High (>35°C)."
    ],
    "a": 1,
    "w": "Normally closed. It changes to intermediate above 35 °C as skin temperature rises and returns below 32 °C as it falls.",
    "ref": "FCOM DSC-21-30-20 · PDF pp.197, 198 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q115, PDF p.20",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S115",
      "status": "corrected",
      "pdfPages": [
        197,
        198
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 116,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "Cabin and Flight Deck Temperature is controlled by:",
    "o": [
      "One Zone Controller and two Pack Controllers",
      "One Hot Air Pressure Regulating Valves and three Trim Air Valves only.",
      "Two Zone Controllers and two Pack Controllers.",
      "Temperature Selectors in the Flight deck and Cabin."
    ],
    "a": 0,
    "w": "Student guide answer retained: One Zone Controller and two Pack Controllers Guide Q116, PDF p.20.",
    "ref": "FCOM DSC-21-10-10, DSC-21-10-30, DSC-21-10-40 · PDF pp.155, 161, 163 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q116, PDF p.20",
    "review": "withheld",
    "verification": {
      "id": "S116",
      "status": "withheld",
      "pdfPages": [
        155,
        161,
        163
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 117,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "Following Failure of the Primary channel of a Pack Controller:",
    "o": [
      "The Pack is lost.",
      "The Secondary channel operates as back-up. Pack flow rate remains fixed at the previous setting.",
      "The Pack outlet temperature is controlled to 15°C by an Anti-ice Valve.",
      "Both Packs run at 24°C."
    ],
    "a": 1,
    "w": "Student guide answer retained: The Secondary channel operates as back-up. Pack flow rate remains fixed at the previous setting. Guide Q117, PDF p.20.",
    "ref": "FCOM DSC-21-10-10, DSC-21-10-30, DSC-21-10-40 · PDF pp.155, 161, 163 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q117, PDF p.20",
    "review": "withheld",
    "verification": {
      "id": "S117",
      "status": "withheld",
      "pdfPages": [
        155,
        161,
        163
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 118,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "What range is available on each zone-temperature selector?",
    "o": [
      "18 °C to 30 °C",
      "20 °C to 36 °C",
      "15 °C to 30 °C",
      "12 °C to 24 °C"
    ],
    "a": 0,
    "w": "COLD corresponds to 18 °C, 12 o'clock to 24 °C, and HOT to 30 °C.",
    "ref": "FCOM DSC-21-10-50 · PDF pp.165 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q118, PDF p.21",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S118",
      "status": "checked",
      "pdfPages": [
        165
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 119,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "During climb the Pack 1 Fault Light illuminates and the Pack 1 Flow Control Valve Closes.",
    "o": [
      "Pack 2 operates at 120% of NORMAL automatically.",
      "Pack 2 operates normally.",
      "Pack 1 reverts to back-up mode.",
      "Select Pack Flow Rate to HI in order to maintain aircraft ventilation rate."
    ],
    "a": 0,
    "w": "Pack 2 operates at 120% of NORMAL automatically. Guide Q119, PDF p.21.",
    "ref": "FCOM  · PDF pp.162, 166 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q119, PDF p.21",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S119",
      "status": "checked",
      "pdfPages": [
        162,
        166
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 120,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "The pressurisation system consists of:",
    "o": [
      "One Cabin Pressure Controller, two Outflow Valves and two Safety Valves.",
      "One Cabin Pressure Controller, one Outflow Valve and two Safety Valves.",
      "Two Cabin Pressure Controllers, two Outflow Valves and two Safety Valves.",
      "Two Cabin Pressure Controllers one Outflow Valve and two Safety Valves."
    ],
    "a": 3,
    "w": "Two Cabin Pressure Controllers one Outflow Valve and two Safety Valves. Guide Q120, PDF p.21.",
    "ref": "FCOM DSC-21-20-20 · PDF pp.179 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q120, PDF p.21",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S120",
      "status": "checked",
      "pdfPages": [
        179
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 121,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "During normal cruise pressurisation, what approximate maximum cabin altitude does the active controller target?",
    "o": [
      "8,000 ft",
      "9,550 ft",
      "14,000 ft",
      "20,000 ft"
    ],
    "a": 0,
    "w": "The current controller description limits the cruise cabin-altitude target to approximately 8,000 ft. The legacy 8.06-PSI wording is not used here.",
    "ref": "FCOM DSC-21-20-30 · PDF pp.181 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q121, PDF p.21",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S121",
      "status": "checked",
      "pdfPages": [
        181
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 122,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "During descent with automatic pressurisation and LDG ELEV AUTO:",
    "o": [
      "Set the Manual Landing Elevation Selector to Landing Elevation.",
      "If Pressurisation is in Manual Mode, set the Man Landing Elevation Selector to Landing Elevation.",
      "The active CPC uses FMGC Landing Airfield Elevation to control Repressurisation.",
      "Set Pack Flow rate to HI to ensure adequate air is available for Repressurisation."
    ],
    "a": 2,
    "w": "The active CPC uses FMGC landing elevation and QNH with the automatic pressure schedule. The manual landing-elevation knob is not a manual outflow-valve control.",
    "ref": "FCOM DSC-21-20-30 · PDF pp.181 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q122, PDF p.21",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S122",
      "status": "corrected",
      "pdfPages": [
        181
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 123,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "With pressurisation in MAN, selecting DITCHING closes which listed group of valves?",
    "o": [
      "Emergency Ram-air inlet, Avionics Ventilation Inlet and Extract Valves, and the Pack Valves.",
      "The Outflow Valve and the Avionics Ventilation Inlet and Extract Valves, APU Bleed, and Engine Bleeds.:",
      "Avionics Ventilation Inlet and Extract Valves, Emergency Ram air Inlet and the Pack Valves the Outflow Valve, and Safety Valves. '",
      "Emergency Ram-air Inlet and the Pack Flow Control Valves only."
    ],
    "a": 0,
    "w": "The ram-air inlet, avionics inlet/extract and pack flow-control valves close. The FCOM also lists the forward-cargo outlet isolation valve if installed. In MAN the outflow valve does not close automatically.",
    "ref": "FCOM DSC-21-20-30 · PDF pp.183, 186 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q123, PDF p.21",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S123",
      "status": "corrected",
      "pdfPages": [
        183,
        186
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 124,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "In flight with the skin temperature above the in-flight threshold, Avionics Ventilation is controlled in:",
    "o": [
      "Intermediate configuration with air conditioning air added.",
      "Open circuit configuration.",
      "Close circuit configuration with air conditioning air added.",
      "Intermediate configuration."
    ],
    "a": 3,
    "w": "Normal in-flight intermediate configuration is selected above 35 °C on increasing skin temperature; it returns to closed below 32 °C on decreasing temperature.",
    "ref": "FCOM DSC-21-30-20 · PDF pp.197, 198 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q124, PDF p.21",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S124",
      "status": "corrected",
      "pdfPages": [
        197,
        198
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 125,
    "p": 22,
    "c": "Ice & Rain",
    "q": "With PROBE/WINDOW HEAT in AUTO and an engine running on the ground, which statement is correct?",
    "o": [
      "Windshields and pitots use reduced ground power, increasing to normal power in flight",
      "TAT probes are heated on the ground",
      "Side windows have the same two power levels as windshields",
      "All probe heating switches off after liftoff"
    ],
    "a": 0,
    "w": "Automatic heating starts with an engine running or in flight. Windshield and pitot ground power is reduced; TAT heating is inhibited on the ground and side windows have one heating level.",
    "ref": "FCOM DSC-30-40-10, DSC-30-50-10 · PDF pp.1374, 1378 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q125, PDF p.22",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S125",
      "status": "corrected",
      "pdfPages": [
        1374,
        1378
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 126,
    "p": 22,
    "c": "Ice & Rain",
    "q": "When you select the Wing Anti-ice ON while on the ground what happens?",
    "o": [
      "Wing anti-ice cannot be tested on the ground",
      "The valves open for 30 seconds, close, and reopen when airborne if WING ANTI ICE remains ON",
      "The valves remain open continuously on the ground",
      "The valves can never reopen without cycling the pushbutton"
    ],
    "a": 1,
    "w": "Ground selection provides a 30-second test. If the selection remains ON, normal airborne operation begins after the aircraft is airborne.",
    "ref": "FCOM DSC-30-20-10, DSC-30-20-20, DSC-30-20-20-A · PDF pp.1366, 1368 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q126, PDF p.22",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S126",
      "status": "corrected",
      "pdfPages": [
        1366,
        1368
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 127,
    "p": 22,
    "c": "Ice & Rain",
    "q": "Engine anti-ice should be:",
    "o": [
      "ON whenever temperature is below 10 °C, even in dry air",
      "OFF whenever TAT is below -40 °C",
      "ON in actual or anticipated icing, with the stated climb/cruise SAT-below--40 °C exception",
      "ON only after visible airframe ice accumulates"
    ],
    "a": 2,
    "w": "Use engine anti-ice in actual or anticipated icing conditions. The climb/cruise exception uses SAT below -40 °C, not TAT; the exception does not extend to descent.",
    "ref": "FCOM PRO-NOR-SOP-14-A, TDU / PRO-NOR-SOP-14-A, LIM-ICE_RAIN · PDF pp.3287, 3764 · page revision 05 MAY 25 / 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q127, PDF p.22",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S127",
      "status": "corrected",
      "pdfPages": [
        3287,
        3764
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 128,
    "p": 22,
    "c": "Ice & Rain",
    "q": "Wing anti-ice is not available in which of the following circumstances:",
    "o": [
      "Following either Wing or Pylon Leak.",
      "Following Engine Fire.",
      "When the APU is supplying Pneumatic Air.",
      "Any of the listed leak, fire or APU-supply circumstances."
    ],
    "a": 3,
    "w": "Student guide answer retained: All of the Above. Guide Q128, PDF p.22.",
    "ref": "FCOM DSC-30-20-10, DSC-36-10-30, DSC-36-10-50 · PDF pp.1366, 1900, 1904 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q128, PDF p.22",
    "review": "withheld",
    "verification": {
      "id": "S128",
      "status": "withheld",
      "pdfPages": [
        1366,
        1900,
        1904
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 129,
    "p": 22,
    "c": "Ice & Rain",
    "q": "If the PROBE/WINDOW HEAT pushbutton is placed to:",
    "o": [
      "ON before start, all probes and windows are heated.",
      "ONor AUTO, the TAT probes are not heated on the ground.",
      "AUTO: Pitots, TATs and 4 Windscreens are heated at High Power when Airborne.",
      "AUTO: all probes are heated at Low Power on the ground, and all windows at High Power in the Air."
    ],
    "a": 1,
    "w": "ONor AUTO, the TAT probes are not heated on the ground. Guide Q129, PDF p.22.",
    "ref": "FCOM DSC-30-40-10, DSC-30-50-10 · PDF pp.1374, 1378 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q129, PDF p.22",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S129",
      "status": "checked",
      "pdfPages": [
        1374,
        1378
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 130,
    "p": 22,
    "c": "Ice & Rain",
    "q": "If electrical control power to an engine anti-ice valve is lost while its pneumatic supply remains available, what happens?",
    "o": [
      "The anti ice valves open automatically.",
      "The valves are spring loaded shut and will close.",
      "The valves will 'freeze' in position at failure.",
      "Icing conditions should be avoided."
    ],
    "a": 0,
    "w": "The valve opens with electrical power loss provided pneumatic supply is available. Loss of pneumatic supply causes closure.",
    "ref": "FCOM DSC-30-30-10 · PDF pp.1370 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q130, PDF p.22",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S130",
      "status": "corrected",
      "pdfPages": [
        1370
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 131,
    "p": 23,
    "c": "Ice & Rain",
    "q": "When WING ANTI ICE is Selected:",
    "o": [
      "Blue ON illuminates on selection; amber FAULT may appear briefly during valve transit",
      "Crossbleed always opens automatically",
      "The valves cannot open during a ground test",
      "Slat extension is prohibited"
    ],
    "a": 0,
    "w": "Blue ON shows the selection. FAULT indicates valve-position disagreement or the stated pressure faults and may illuminate briefly during transit.",
    "ref": "FCOM DSC-30-20-10, DSC-30-20-20, DSC-30-20-20-A · PDF pp.1366, 1368 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q131, PDF p.23",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S131",
      "status": "corrected",
      "pdfPages": [
        1366,
        1368
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 132,
    "p": 23,
    "c": "Ice & Rain",
    "q": "If Wing Anti ice is selected ON on the ground:",
    "o": [
      "WAI Valves open and remain open until Lift off.",
      "WAI Valves do not open until Lift off.",
      "WAI Valves open for 30 seconds, and then close.",
      "WAI Valves stay open until the WAI is selected off."
    ],
    "a": 2,
    "w": "WAI Valves open for 30 seconds, and then close. Guide Q132, PDF p.23.",
    "ref": "FCOM DSC-30-20-10, DSC-30-20-20, DSC-30-20-20-A · PDF pp.1366, 1368 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q132, PDF p.23",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S132",
      "status": "checked",
      "pdfPages": [
        1366,
        1368
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 133,
    "p": 23,
    "c": "Ice & Rain",
    "q": "If the Wing Anti-lce system develops a leak:",
    "o": [
      "The WAI Fault light illuminates as both WAI Valves are electrically signalled close.",
      "Select WA! OFF on the faulty side and open the Cross-bleed Valve to compensate.",
      "Do not fly in icing conditions; Land ASAP.",
      "The Wing Anti-ice control Valve on the affected side will close."
    ],
    "a": 3,
    "w": "The Wing Anti-ice control Valve on the affected side will close. Guide Q133, PDF p.23.",
    "ref": "FCOM DSC-30-20-10 · PDF pp.1366 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q133, PDF p.23",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S133",
      "status": "checked",
      "pdfPages": [
        1366
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 134,
    "p": 23,
    "c": "Ice & Rain",
    "q": "There are 3 Flight Deck Windows on each side. From Forward to Aft they are: Windshield; Sliding Window; Side Window. Windshield heating:",
    "o": [
      "Operates at Low power on the ground after engine start and at Normal power in flight.",
      "Only operates when the WINDSHIELD HEAT pushbutton is selected on.",
      "Only operates when Airborne.",
      "Only operates when the temperature falls below 10°C."
    ],
    "a": 0,
    "w": "Operates at Low power on the ground after engine start and at Normal power in flight. Guide Q134, PDF p.23.",
    "ref": "FCOM DSC-30-40-10, DSC-30-50-10 · PDF pp.1374, 1378 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q134, PDF p.23",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S134",
      "status": "checked",
      "pdfPages": [
        1374,
        1378
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 135,
    "p": 23,
    "c": "Ice & Rain",
    "q": "With electric power available the following Ice and Rain Protection is available:",
    "o": [
      "Pitots, Angle of Attack Probes, Windows and TATs are all heated if the Windows/Probes Heat pushbutton is ON.",
      "All Probes are Heated at Full Power whenever the Windows/Probe Heat pushbutton is at Override.",
      "TAT and Angle of Attack Probes are heated following first Engine Start ( Low Level); all other Probes and Windows are heated when Airborne ( High Level )",
      "Pitots, Angle of Attack Probes Are heated whenever the Window/Probe Heat pushbutton is ON, the TAT probes are heated when airborne."
    ],
    "a": 3,
    "w": "Pitots, Angle of Attack Probes Are heated whenever the Window/Probe Heat pushbutton is ON, the TAT probes are heated when airborne. Guide Q135, PDF p.23.",
    "ref": "FCOM DSC-30-40-10, DSC-30-50-10 · PDF pp.1374, 1378 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q135, PDF p.23",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S135",
      "status": "checked",
      "pdfPages": [
        1374,
        1378
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 136,
    "p": 24,
    "c": "Powerplant",
    "q": "Which hydraulic systems actuate the IAE thrust-reverser translating sleeves?",
    "o": [
      "Engine 1: green; engine 2: yellow hydraulics",
      "Both engines: blue hydraulics",
      "Both engines: green hydraulics",
      "Engine 1: yellow; engine 2: green hydraulics"
    ],
    "a": 0,
    "w": "The reversers have independent hydraulic actuation: engine 1 green, engine 2 yellow.",
    "ref": "FCOM  · PDF pp.2293 · page revision 13 AUG 18 · IAE insert, A/C 20-IMHT · 13 AUG 2018 · FOR ENGINEERING USE ONLY · Guide Q136, PDF p.24",
    "review": "fcom-source-checked",
    "evidence": "reverserHydraulics",
    "revision": "fcom-audit-20260905",
    "verification": {
      "id": "S136",
      "status": "checked",
      "pdfPages": [
        2293
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    }
  },
  {
    "source": "A320 Student Study Questions",
    "n": 137,
    "p": 24,
    "c": "Powerplant",
    "q": "If the active IAE FADEC channel fails, what happens?",
    "o": [
      "The standby channel automatically takes control",
      "The engine must always shut down immediately",
      "Thrust is controlled directly by the thrust-lever cable",
      "The other engine FADEC controls both engines"
    ],
    "a": 0,
    "w": "One channel is active and one is in standby; the standby channel automatically takes control if the active channel fails.",
    "ref": "FCOM DSC-70-20 · PDF pp.2264 · page revision 13 AUG 18 · IAE insert, A/C 20-IMHT · 13 AUG 2018 · FOR ENGINEERING USE ONLY · Guide Q137, PDF p.24",
    "review": "fcom-source-checked",
    "evidence": "fadecChannel",
    "revision": "fcom-audit-20260905",
    "verification": {
      "id": "S137",
      "status": "checked",
      "pdfPages": [
        2264
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    }
  },
  {
    "source": "A320 Student Study Questions",
    "n": 138,
    "p": 24,
    "c": "Powerplant",
    "q": "Fuel entering the engine is heated:",
    "o": [
      "Only an electrical heater heats the fuel",
      "Hydraulic oil is the fuel-heating medium",
      "No oil system exchanges heat with fuel",
      "Engine oil heats fuel in the fuel/oil exchanger; fuel also cools IDG oil"
    ],
    "a": 3,
    "w": "The IAE fuel/oil heat exchanger transfers engine-oil heat to fuel, reducing oil temperature and preventing fuel icing. A separate fuel circuit also cools IDG oil.",
    "ref": "FCOM DSC-70-45, DSC-70-45-A-NG01817, DSC-70-45-A · PDF pp.2284, 2285 · page revision 13 AUG 18 · IAE insert, A/C 20-IMHT · 13 AUG 2018 · FOR ENGINEERING USE ONLY · Guide Q138, PDF p.24",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S138",
      "status": "corrected",
      "pdfPages": [
        2284,
        2285
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 139,
    "p": 24,
    "c": "Powerplant",
    "q": "During an IAE V2500 manual start, which action remains automatic?",
    "o": [
      "The FADEC closes the start valve at 43% N2",
      "The FADEC automatically aborts every hot start",
      "The FADEC selects the ENG MASTER switch ON",
      "The FADEC moves the ENG MODE selector to NORM"
    ],
    "a": 0,
    "w": "During manual start FADEC closes the start valve and cuts ignition at 43% N2, but the crew must interrupt an abnormal manual start.",
    "ref": "FCOM DSC-70-80-40-20, DSC-70-80-40 · PDF pp.2308 · page revision 13 AUG 18 · IAE insert, A/C 20-IMHT · 13 AUG 2018 · FOR ENGINEERING USE ONLY · Guide Q139, PDF p.24",
    "review": "fcom-source-checked",
    "evidence": "manualStart",
    "revision": "fcom-audit-20260905",
    "verification": {
      "id": "S139",
      "status": "checked",
      "pdfPages": [
        2308
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    }
  },
  {
    "source": "A320 Student Study Questions",
    "n": 140,
    "p": 24,
    "c": "Powerplant",
    "q": "How is manual IAE V2500 dry cranking selected?",
    "o": [
      "ENG MODE to CRANK, MAN START ON, ENG MASTER OFF",
      "ENG MODE to NORM and ENG MASTER ON",
      "ENG MODE to IGN/START with ENG MASTER ON",
      "ENG MODE to CRANK with ENG MASTER ON"
    ],
    "a": 0,
    "w": "Dry cranking uses CRANK and MAN START ON with ENG MASTER OFF; select MAN START OFF to stop cranking.",
    "ref": "FCOM DSC-70-80-40 · PDF pp.2309 · page revision 13 AUG 18 · IAE insert, A/C 20-IMHT · 13 AUG 2018 · FOR ENGINEERING USE ONLY · Guide Q140, PDF p.24",
    "review": "fcom-source-checked",
    "evidence": "dryCrank",
    "revision": "fcom-audit-20260905",
    "verification": {
      "id": "S140",
      "status": "checked",
      "pdfPages": [
        2309
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    }
  },
  {
    "source": "A320 Student Study Questions",
    "n": 141,
    "p": 24,
    "c": "Powerplant",
    "q": "When do the AGENT pushbuttons for an engine become active?",
    "o": [
      "At all times regardless of FIRE pushbutton position",
      "Only after engine start",
      "Whenever any fire warning sounds",
      "When that engine FIRE pushbutton is released"
    ],
    "a": 3,
    "w": "Releasing the affected engine FIRE pushbutton arms the extinguisher squibs and makes both AGENT pushbuttons active; a brief AGENT push discharges its bottle.",
    "ref": "FCOM DSC-26-20-20-10 · PDF pp.1210, 1211 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q141, PDF p.24",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S141",
      "status": "corrected",
      "pdfPages": [
        1210,
        1211
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 142,
    "p": 24,
    "c": "Powerplant",
    "q": "During an automatic IAE in-flight start, how is starter assistance determined?",
    "o": [
      "FADEC decides whether windmilling speed is sufficient or starter assistance is needed",
      "Starter assistance is never used in flight",
      "The flight crew must always select manual start",
      "The starter is engaged regardless of windmilling speed"
    ],
    "a": 0,
    "w": "FADEC assesses engine parameters and the flight environment to determine whether windmilling is sufficient or starter assistance is needed. This replaces an unqualified restart-delay instruction.",
    "ref": "FCOM DSC-70-80-40-10 · PDF pp.2305 · page revision 13 AUG 18 · IAE insert, A/C 20-IMHT · 13 AUG 2018 · FOR ENGINEERING USE ONLY · Guide Q142, PDF p.24",
    "review": "fcom-source-checked",
    "evidence": "inflightStart",
    "revision": "fcom-audit-20260905",
    "verification": {
      "id": "S142",
      "status": "checked",
      "pdfPages": [
        2305
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    }
  },
  {
    "source": "A320 Student Study Questions",
    "n": 143,
    "p": 25,
    "c": "Fuel",
    "q": "What is meant when the Fuel CTR TK contents is amber boxed?",
    "o": [
      "The CTK fuel content indicator is INOP.",
      "Centre tank Fuel Quantity is Low.",
      "Both CTR TK pumps are switched off or have failed. Any remaining CTR TK fuel is now unusable.",
      "Centre Tank Pumps are not running because Slats are extended or Wings are full."
    ],
    "a": 2,
    "w": "Student guide answer retained: Both CTR TK pumps are switched off or have failed. Any remaining CTR TK fuel is now unusable. Guide Q143, PDF p.25.",
    "ref": "FCOM DSC-28-20-F · PDF pp.1333, 1334 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q143, PDF p.25",
    "review": "withheld",
    "verification": {
      "id": "S143",
      "status": "withheld",
      "pdfPages": [
        1333,
        1334
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 144,
    "p": 25,
    "c": "Fuel",
    "q": "How do the four wing transfer valves operate?",
    "o": [
      "Both valves on one side open independently of the opposite wing",
      "Each inner-tank low-level sensor controls a pair of transfer valves, one in each wing",
      "Each transfer valve has an independent sensor that cannot affect the opposite wing",
      "All four valves open only when total fuel drops below 3 tonnes"
    ],
    "a": 1,
    "w": "Each inner tank has two level sensors. Each sensor controls two outer-to-inner transfer valves, one in each wing, to command simultaneous transfer. The nominal level is about 750 kg in level unaccelerated flight.",
    "ref": "FCOM DSC-28-10-30, DSC-28-10-30-A · PDF pp.1310, 1312 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q144, PDF p.25",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S144",
      "status": "corrected",
      "pdfPages": [
        1310,
        1312
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 145,
    "p": 25,
    "c": "Fuel",
    "q": "The CTR TK MODE SEL pushbutton FAULT light indicates:",
    "o": [
      "There is significant fuel in the Centre Tank, yet a Wing Tank contains less than 5000 kg.",
      "A Wing Inner Tank has become overfull.",
      "A Transfer Valve has failed to open.",
      "The Centre Tank Pumps have continued to run although Slats are extended."
    ],
    "a": 0,
    "w": "Student guide answer retained: There is significant fuel in the Centre Tank, yet a Wing Tank contains less than 5000 kg. Guide Q145, PDF p.25.",
    "ref": "FCOM DSC-28-20-G · PDF pp.1325 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q145, PDF p.25",
    "review": "withheld",
    "verification": {
      "id": "S145",
      "status": "withheld",
      "pdfPages": [
        1325
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 146,
    "p": 25,
    "c": "Fuel",
    "q": "With CTR TK MODE SEL in MAN, how are the centre-tank pumps controlled?",
    "o": [
      "Directly by their individual pump pushbuttons",
      "Automatically by slat position only",
      "By the fuel crossfeed pushbutton",
      "They run continuously regardless of the pump pushbuttons"
    ],
    "a": 0,
    "w": "In MAN, each centre-tank pump is directly controlled by its own pushbutton.",
    "ref": "FCOM DSC-28-20-G · PDF pp.1325 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q146, PDF p.25",
    "review": "withheld",
    "verification": {
      "id": "S146",
      "status": "withheld",
      "pdfPages": [
        1325
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 147,
    "p": 25,
    "c": "Fuel",
    "q": "How do wing tank transfer valves operate?",
    "o": [
      "Each inner-tank low-level sensor commands one transfer valve in each wing to open",
      "A valve command affects only the two valves on the same side",
      "A failed valve necessarily prevents the opposite wing from transferring",
      "A cockpit manual-transfer pushbutton overrides all wing transfer valves"
    ],
    "a": 0,
    "w": "Each sensor commands one valve in each wing. Once open, the valves latch open until the next refuelling. Commanded simultaneous transfer does not prove both valves physically opened.",
    "ref": "FCOM DSC-28-10-30, DSC-28-10-30-A · PDF pp.1310, 1312 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q147, PDF p.25",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S147",
      "status": "corrected",
      "pdfPages": [
        1310,
        1312
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 148,
    "p": 25,
    "c": "Fuel",
    "q": "With CTR TK MODE SEL in MAN, do the centre-tank pumps run when their individual pushbuttons are OFF?",
    "o": [
      "No; the individual pump pushbuttons provide direct control",
      "Yes; MAN forces both pumps to run",
      "Only when the slats are extended",
      "Only when both wing tanks are full"
    ],
    "a": 0,
    "w": "MAN removes the automatic mode logic but does not override an individual pump pushbutton selected OFF.",
    "ref": "FCOM DSC-28-20-G · PDF pp.1325 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q148, PDF p.25",
    "review": "withheld",
    "verification": {
      "id": "S148",
      "status": "withheld",
      "pdfPages": [
        1325
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 149,
    "p": 26,
    "c": "Fuel",
    "q": "A fuel CTR TK contents of 2,000 kg is amber boxed. What has happened?",
    "o": [
      "Fuel center tank feed logic has stopped feed until fuel level in the inner wing drops.",
      "Fuel center tank feed logic has stopped feed as the slats are out.",
      "CTR TK contents indication is unreliable.",
      "Both CTR TK PUMPS are OFF or have failed. CTR TK fuel is unusable in this condition."
    ],
    "a": 3,
    "w": "Student guide answer retained: Both CTR TK PUMPS are OFF or have failed. CTR TK fuel is unusable in this condition. Guide Q149, PDF p.26.",
    "ref": "FCOM DSC-28-20-F · PDF pp.1333, 1334 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q149, PDF p.26",
    "review": "withheld",
    "verification": {
      "id": "S149",
      "status": "withheld",
      "pdfPages": [
        1333,
        1334
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 150,
    "p": 26,
    "c": "Fuel",
    "q": "In normal flight with usable fuel in the centre tank, which fuel is delivered preferentially?",
    "o": [
      "Centre-tank fuel",
      "Outer-wing-tank fuel",
      "Fuel from the lighter wing only",
      "No fuel until the crossfeed valve opens"
    ],
    "a": 0,
    "w": "The normal fuel logic uses centre-tank fuel preferentially while protecting the wing tanks from overfill.",
    "ref": "FCOM DSC-28-10-30 · PDF pp.1311, 1312 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q150, PDF p.26",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S150",
      "status": "checked",
      "pdfPages": [
        1311,
        1312
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 151,
    "p": 26,
    "c": "Fuel",
    "q": "In Flight, if the Wing Tanks are Full or become Full, what happens?",
    "o": [
      "IDG Cooling Fuel returns directly to the engine feed line.",
      "Centre Tank Fuel Pumps stop to allow Wing Inner contents to decrease to accommodate further |DG Return Fuel.",
      "IDG Cooling Fuel goes to the Centre Tank.",
      "IDG Cooling flow stops until Wing contents reduce by 500 kg."
    ],
    "a": 1,
    "w": "Student guide answer retained: Centre Tank Fuel Pumps stop to allow Wing Inner contents to decrease to accommodate further |DG Return Fuel. Guide Q151, PDF p.26.",
    "ref": "FCOM DSC-28-10-30, DSC-28-10-30-A, DSC-28-20-G · PDF pp.1310, 1312, 1325 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q151, PDF p.26",
    "review": "withheld",
    "verification": {
      "id": "S151",
      "status": "withheld",
      "pdfPages": [
        1310,
        1312,
        1325
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 152,
    "p": 26,
    "c": "Fuel",
    "q": "Following Fuel Pump Failure:",
    "o": [
      "If one Centre Tank Pump Fails (with Centre Fuel), open the Fuel Cross-feed.",
      "If both Centre Tank Pumps fail, any remaining Centre Tank fuel is unavailable.",
      "If both Pumps in one wing fail, respect the Gravity Feed Ceiling, and, while above it, use Centre Tank fuel, or open the Fuel Cross-feed.",
      "All three listed fuel-pump failure statements are correct."
    ],
    "a": 3,
    "w": "Student guide answer retained: All of the above are correct. Guide Q152, PDF p.26.",
    "ref": "FCOM DSC-28-10-30, DSC-28-10-30-A, DSC-28-20-G · PDF pp.1310, 1312, 1325 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q152, PDF p.26",
    "review": "withheld",
    "verification": {
      "id": "S152",
      "status": "withheld",
      "pdfPages": [
        1310,
        1312,
        1325
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 153,
    "p": 27,
    "c": "Navigation",
    "q": "To Backup Tune a VOR station you must:",
    "o": [
      "First, select the VOR so that it is displayed on your ND.",
      "First, press the STBY NAV switch on the onside RMP.",
      "First select the Onside RMP to VOR; Second, dial in frequency; Third; dial in Course.",
      "Press STBY NAV on the onside RMP, or use RMP3 if the onside RMP has failed."
    ],
    "a": 1,
    "w": "First engage radio-navigation backup with the guarded NAV key on the relevant RMP, then select VOR and enter frequency/course. RMP 3 does not provide navaid backup tuning.",
    "ref": "FCOM  · PDF pp.1666 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q153, PDF p.27",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S153",
      "status": "corrected",
      "pdfPages": [
        1666
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 154,
    "p": 27,
    "c": "Navigation",
    "q": "On an aircraft fitted with the DDRMI, which heading-reference statement is correct?",
    "o": [
      "ADIRU 1 normally supplies it; IR 3 can replace IR 1 via ATT HDG CAPT 3",
      "It always comes from ADIRU 2",
      "It is independent of ADIRS",
      "It is selected by the ND range knob"
    ],
    "a": 0,
    "w": "ADIRU 1 normally supplies the DDRMI. Selecting ATT HDG to CAPT 3 lets IR 3 replace IR 1.",
    "ref": "FCOM DSC-34-NAV-10-20, DSC-34-NAV-30-30 · PDF pp.1636, 1664 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q154, PDF p.27",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S154",
      "status": "corrected",
      "pdfPages": [
        1636,
        1664
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 155,
    "p": 27,
    "c": "Navigation",
    "q": "An IRU ALIGN Lightis Flashing:",
    "o": [
      "It is Aligning.",
      "The IRU has developed a Fault although it may still be useable in ATT mode only.",
      "No present Position has been supplied after 15 minutes.",
      "Supplied Lat and Long may be inconsistent with Lat and Long at the Last IRS Shutdown."
    ],
    "a": 3,
    "w": "Student guide answer retained: Supplied Lat and Long may be inconsistent with Lat and Long at the Last IRS Shutdown. Guide Q155, PDF p.27.",
    "ref": "FCOM DSC-34-NAV-10-20 · PDF pp.1634, 1635 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q155, PDF p.27",
    "review": "withheld",
    "verification": {
      "id": "S155",
      "status": "withheld",
      "pdfPages": [
        1634,
        1635
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 156,
    "p": 27,
    "c": "Navigation",
    "q": "If an ECAM procedure requests ADR 1. OFF, which control do you use?",
    "o": [
      "The rotary knob for ADIRU 1 on the ADIRS CDU.",
      "The o/b for IR 1 on the ADIRS CDU.",
      "The ADR1 pushbutton on the ADIRS CDU.",
      "AIR DATA to CAPT 3 on the switching panel."
    ],
    "a": 2,
    "w": "The ADR1 pushbutton on the ADIRS CDU. Guide Q156, PDF p.27.",
    "ref": "FCOM DSC-34-NAV-10-20 · PDF pp.1636 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q156, PDF p.27",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S156",
      "status": "checked",
      "pdfPages": [
        1636
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 157,
    "p": 27,
    "c": "Navigation",
    "q": "How are radio navaids normally tuned by the FMGS?",
    "o": [
      "Automatically by the FMGCs, each controlling its own receivers",
      "Only by manual entries on the RMPs",
      "Only by the ground station",
      "Only by the captain MCDU"
    ],
    "a": 0,
    "w": "Automatic FMGC tuning is the basic mode. MCDU manual tuning can override a selected navaid, and RMP 1/2 provide backup tuning after the relevant failures.",
    "ref": "FCOM DSC-34-NAV-30-10 · PDF pp.1658 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q157, PDF p.27",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S157",
      "status": "corrected",
      "pdfPages": [
        1658
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 158,
    "p": 27,
    "c": "Navigation",
    "q": "Whilst preparing your departure, you notice all fields of the MCDU RAD NAV page are blank, and you cannot enter any selections. How would you get the system back to normal?",
    "o": [
      "Tune nav-aids via the RMP.",
      "Check that the NAV Backup Selector pushbutton on RMP1 and 2 are OFF.",
      "Switch off RMP3.",
      "Re-initialize the FMGC."
    ],
    "a": 1,
    "w": "Check that the NAV Backup Selector pushbutton on RMP1 and 2 are OFF. Guide Q158, PDF p.27.",
    "ref": "FCOM  · PDF pp.1666 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q158, PDF p.27",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S158",
      "status": "checked",
      "pdfPages": [
        1666
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 159,
    "p": 27,
    "c": "Navigation",
    "q": "If a DDRMI is installed, which ADIRU normally supplies its heading?",
    "o": [
      "ADIRU 1",
      "ADIRU 2",
      "ADIRU 3",
      "Whichever FMGC is master"
    ],
    "a": 0,
    "w": "In the normal switching configuration, ADIRU 1 supplies PFD 1, ND 1, the DDRMI and VOR/DME.",
    "ref": "FCOM DSC-34-NAV-10-20, DSC-34-NAV-30-30 · PDF pp.1636, 1664 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q159, PDF p.27",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S159",
      "status": "corrected",
      "pdfPages": [
        1636,
        1664
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 160,
    "p": 28,
    "c": "Navigation",
    "q": "When radio-navigation backup tuning is selected, which RMP controls VOR 1?",
    "o": [
      "RMP 1",
      "RMP 2",
      "RMP 3",
      "Any RMP"
    ],
    "a": 0,
    "w": "For backup navaid tuning, the captain's RMP (RMP 1) controls VOR 1. RMP 3 is not used for navaid tuning.",
    "ref": "FCOM DSC-34-NAV-30-10 · PDF pp.1658, 1666 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q160, PDF p.28",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S160",
      "status": "checked",
      "pdfPages": [
        1658,
        1666
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 161,
    "p": 28,
    "c": "Navigation",
    "q": "If an IR develops a Fault in Flight:",
    "o": [
      "It becomes unusable in all modes.",
      "If the FAULT light Flashes, that IR may be available for Navigation after its position has been reset.",
      "If the ALIGN light Flashes, ATT mode may be available.",
      "If the FAULT light Flashes, Attitude and Heading information may be available."
    ],
    "a": 3,
    "w": "If the FAULT light Flashes, Attitude and Heading information may be available. Guide Q161, PDF p.28.",
    "ref": "FCOM DSC-34-NAV-10-20 · PDF pp.1634, 1635 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q161, PDF p.28",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S161",
      "status": "checked",
      "pdfPages": [
        1634,
        1635
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 162,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "After stowing the crew oxygen mask, what should the emergency-pressure and N/100% selectors be set to, respectively?",
    "o": [
      "EMERG / 100%",
      "EMERG/ NORM",
      "NORM / 100%",
      "NORM/NORM"
    ],
    "a": 2,
    "w": "Return N/100% to 100% and do not leave the emergency selector in EMERGENCY, which can deplete the cylinder. The normal stowed combination is NORM / 100%.",
    "ref": "FCOM  · PDF pp.1870, 1876 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q162, PDF p.29",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S162",
      "status": "corrected",
      "pdfPages": [
        1870,
        1876
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 163,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "The Oxygen pressure indication on the DOORS Page is normally green but turns amber when:",
    "o": [
      "Pressure goes below 400 psi.",
      "Pressure goes below 600 psi",
      "Pressure goes below 800 psi",
      "Pressure goes below 300 psi"
    ],
    "a": 0,
    "w": "Pressure goes below 400 psi. Guide Q163, PDF p.29.",
    "ref": "FCOM  · PDF pp.1878 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q163, PDF p.29",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S163",
      "status": "checked",
      "pdfPages": [
        1878
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 164,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "At what cabin altitude do passenger oxygen-mask doors automatically open in the normal setting?",
    "o": [
      "14,000 ft (+250/-750 ft)",
      "9,550 ft ±500 ft",
      "12,000 ft ±500 ft",
      "16,000 ft in all configurations"
    ],
    "a": 0,
    "w": "The retained answer gives 14,000 ft with a +250/-750 ft tolerance. The older tolerance in the guide was revised.",
    "ref": "FCOM DSC-35-30-10, DSC-35-30-20 · PDF pp.1882, 1884 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q164, PDF p.29",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S164",
      "status": "checked",
      "pdfPages": [
        1882,
        1884
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 165,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "The Emergency Lighting System:",
    "o": [
      "Can be switched ON from the Flight Deck or Cabin.",
      "Are Lights above the Emergency Exits only.",
      "When in use, is always powered from its own internal batteries. These Batteries recharge when the Emergency Lighting is OFF.",
      "Will only illuminate if it is switched ON."
    ],
    "a": 0,
    "w": "Can be switched ON from the Flight Deck or Cabin. Guide Q165, PDF p.29.",
    "ref": "FCOM DSC-33-30-20 · PDF pp.1622, 1623 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q165, PDF p.29",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S165",
      "status": "checked",
      "pdfPages": [
        1622,
        1623
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 166,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "The Cabin Doors:",
    "o": [
      "Are normally opened automatically with hydraulic damping.",
      "When ARMED, open with automatic opening assist,",
      "Will deploy their slide if ARMED, and opened from outside the aircraft.",
      "If the handle is moved and the cabin is pressurized, display a white light on the door."
    ],
    "a": 1,
    "w": "When ARMED, open with automatic opening assist, Guide Q166, PDF p.29.",
    "ref": "FCOM DSC-52-10-20 · PDF pp.2206 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q166, PDF p.29",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S166",
      "status": "checked",
      "pdfPages": [
        2206
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 167,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "Flight Deck Fixed Oxygen:",
    "o": [
      "Is Sourced from Chemical Generators with a 15 minute endurance.",
      "May be used at any time at 100%, and, if necessary, at Emergency pressure, as a protection against smoke or fumes.",
      "Pressure is indicated in Amber when it is below 1500 psi; minimum despatch pressure is 400 psi.",
      "Must be used with the Selector in the EMERG position if Cabin Alt is above 30000'."
    ],
    "a": 1,
    "w": "May be used at any time at 100%, and, if necessary, at Emergency pressure, as a protection against smoke or fumes. Guide Q167, PDF p.29.",
    "ref": "FCOM  · PDF pp.1876 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q167, PDF p.29",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S167",
      "status": "checked",
      "pdfPages": [
        1876
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 168,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "Passenger Oxygen:",
    "o": [
      "Pulling one mask starts its generator, supplying its group of 2, 3 or 4 masks",
      "Every installed generator has exactly 20 minutes endurance",
      "All passenger masks use one forward-cargo oxygen bottle",
      "All masks automatically drop at 9,550 ft"
    ],
    "a": 0,
    "w": "A chemical generator supplies its group when a passenger pulls a mask. The compilation lists several generator endurance options; mask release alone does not start oxygen generation.",
    "ref": "FCOM DSC-35-30-10, DSC-35-30-20 · PDF pp.1882, 1884 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q168, PDF p.29",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S168",
      "status": "corrected",
      "pdfPages": [
        1882,
        1884
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 169,
    "p": 30,
    "c": "APU",
    "q": "A Blue ON light in the APU Master pushbutton indicates:",
    "o": [
      "The APU is running.",
      "The APU is starting.",
      "The APU Electronic Control Box is powered.",
      "The APU is in use (supplying Air, Electrics, or both)."
    ],
    "a": 2,
    "w": "The APU Electronic Control Box is powered. Guide Q169, PDF p.30.",
    "ref": "FCOM DSC-49-20-A · PDF pp.2190, 2191 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q169, PDF p.30",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S169",
      "status": "checked",
      "pdfPages": [
        2190,
        2191
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 170,
    "p": 30,
    "c": "APU",
    "q": "A blue ON light in the APU Start pushbutton indicates:",
    "o": [
      "The APU is running.",
      "The APU start sequence is in progress.",
      "The APU Electronic Control Box is powered.",
      "The APU is in use (supplying Air, Electrics, or both)."
    ],
    "a": 1,
    "w": "The APU start sequence is in progress. Guide Q170, PDF p.30.",
    "ref": "FCOM  · PDF pp.2193 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q170, PDF p.30",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S170",
      "status": "checked",
      "pdfPages": [
        2193
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 171,
    "p": 30,
    "c": "APU",
    "q": "Up to what altitude may APU bleed assist an engine start?",
    "o": [
      "20,000 ft",
      "15,000 ft",
      "22,500 ft",
      "25,000 ft"
    ],
    "a": 0,
    "w": "APU bleed may assist engine start up to 20,000 ft.",
    "ref": "FCOM LIM-APU-20 · PDF pp.3719 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q171, PDF p.30",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S171",
      "status": "checked",
      "pdfPages": [
        3719
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 172,
    "p": 30,
    "c": "APU",
    "q": "Up to what altitude may APU bleed supply both air-conditioning packs?",
    "o": [
      "15,000 ft",
      "20,000 ft",
      "22,500 ft",
      "25,000 ft"
    ],
    "a": 0,
    "w": "The dual-pack APU-bleed limit is 15,000 ft; the single-pack limit is 22,500 ft.",
    "ref": "FCOM LIM-APU-20 · PDF pp.3719 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q172, PDF p.30",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S172",
      "status": "checked",
      "pdfPages": [
        3719
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 173,
    "p": 31,
    "c": "Communications",
    "q": "If VHF 2 is tuned from the captain's RMP, where do the SEL reminder lights come on?",
    "o": [
      "On all installed RMPs",
      "On RMP 1 only",
      "On RMP 2 only",
      "On RMPs 2 and 3 only"
    ],
    "a": 0,
    "w": "The retained answer says the SEL lights illuminate on all installed RMPs when a radio is tuned from a non-associated RMP. The guide's RMP 1-and-2 answer was revised.",
    "ref": "FCOM DSC-23-60-A · PDF pp.1066, 1116 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q173, PDF p.31",
    "review": "withheld",
    "verification": {
      "id": "S173",
      "status": "withheld",
      "pdfPages": [
        1066,
        1116
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 174,
    "p": 31,
    "c": "Communications",
    "q": "What does a flashing amber external-radio transmission key indicate?",
    "o": [
      "An incoming SELCAL",
      "The radio has failed",
      "An open microphone",
      "The selected frequency is invalid"
    ],
    "a": 0,
    "w": "The radio transmission key flashes for an incoming SELCAL, accompanied by a cockpit buzzer until reset.",
    "ref": "FCOM DSC-23-10-50 · PDF pp.1074 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q174, PDF p.31",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S174",
      "status": "checked",
      "pdfPages": [
        1074
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 175,
    "p": 31,
    "c": "Communications",
    "q": "During Cockpit preparations the CVR is tested:",
    "o": [
      "By pressing the CVR test pushbutton within 5 minutes of Power being established on the aircraft.",
      "By setting the Parking Brake and pressing the CVR test pushbutton (press the RCDR GRD CTRL switch if necessary)",
      "By releasing the Parking Brake, turning up the speaker volume and pressing the CVR test pushbutton.",
      "CVR test is automatic following First Engine Start."
    ],
    "a": 1,
    "w": "With parking brake ON and CVR powered, press and hold CVR TEST. Select GND CTL as necessary to power recording after the initial ground energisation period.",
    "ref": "FCOM DSC-23-10-40 · PDF pp.1073 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q175, PDF p.31",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S175",
      "status": "corrected",
      "pdfPages": [
        1073
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 176,
    "p": 31,
    "c": "Communications",
    "q": "Which radios can the first officer transmit on from ACP 2?",
    "o": [
      "Any radio whose transmission key is selected",
      "VHF 2 only",
      "VHF 2 and VHF 3 only",
      "No radios if RMP 1 fails"
    ],
    "a": 0,
    "w": "Select the desired available radio transmission key on ACP 2, then use the appropriate push-to-talk control to transmit. RMP frequency tuning is a separate function.",
    "ref": "FCOM DSC-23-10-50 · PDF pp.1074, 1076 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q176, PDF p.31",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S176",
      "status": "corrected",
      "pdfPages": [
        1074,
        1076
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 177,
    "p": 31,
    "c": "Communications",
    "q": "What does illumination of the RMP SEL reminder mean?",
    "o": [
      "At least one radio is selected on a non-associated RMP",
      "The selected radio has failed",
      "SELCAL has been received",
      "The RMP is in navigation-backup mode"
    ],
    "a": 0,
    "w": "SEL reminds the crew that at least one radio is being controlled from an RMP other than its associated RMP.",
    "ref": "FCOM DSC-23-60-A · PDF pp.1066, 1116 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q177, PDF p.31",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S177",
      "status": "checked",
      "pdfPages": [
        1066,
        1116
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 178,
    "p": 31,
    "c": "Communications",
    "q": "How is an incoming SELCAL alert on the audio-control panel cancelled?",
    "o": [
      "Press the SELCAL/CALL RESET key",
      "Switch the radio OFF",
      "Hold the transmit key for 3 seconds",
      "Select another RMP"
    ],
    "a": 0,
    "w": "The SELCAL/CALL RESET key cancels the buzzer and flashing indication.",
    "ref": "FCOM DSC-23-10-50 · PDF pp.1074, 1075 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q178, PDF p.31",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S178",
      "status": "checked",
      "pdfPages": [
        1074,
        1075
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 179,
    "p": 31,
    "c": "Communications",
    "q": "RMP 1 is unavailable. Which remaining panel can tune VHF 1?",
    "o": [
      "No panel can retune VHF 1",
      "ACP 3 directly tunes VHF 1",
      "RMP 2, or RMP 3 if installed and available",
      "Only the failed RMP 1"
    ],
    "a": 2,
    "w": "Each RMP can control the VHF radios. RMP 3 communicates through RMP 1/2 even with their panel switches OFF; ACP audio switching does not tune radio frequencies.",
    "ref": "FCOM DSC-23-10-20 · PDF pp.1064, 1066 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q179, PDF p.31",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S179",
      "status": "corrected",
      "pdfPages": [
        1064,
        1066
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 180,
    "p": 32,
    "c": "Communications",
    "q": "To make a PA announcement using a boom or mask microphone through the ACP, what is required?",
    "o": [
      "Select PA reception out, then press and hold the PA transmission key while speaking",
      "Select PA and then always hold RAD instead of PA",
      "Use only a dedicated handset; mask microphones cannot make PA announcements",
      "Turn off all cockpit audio first"
    ],
    "a": 0,
    "w": "Press and release the PA reception knob out, then hold the PA transmission key for the announcement. An additional PTT selection is not necessary.",
    "ref": "FCOM DSC-23-20-40 · PDF pp.1096, 1097 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q180, PDF p.32",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S180",
      "status": "corrected",
      "pdfPages": [
        1096,
        1097
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 181,
    "p": 32,
    "c": "Communications",
    "q": "With the Captains Audio Control Panel (ACP) failed:",
    "o": [
      "Select CAPT3 on the AUDIO SWITCHING selector.",
      "Select VHF1 on both RMP's for audio reception.",
      "Captain can only transmit on VHF 1 but can receive all other radios.",
      "Change over to ACP3 is automatic."
    ],
    "a": 0,
    "w": "Select CAPT3 on the AUDIO SWITCHING selector. Guide Q181, PDF p.32.",
    "ref": "FCOM DSC-23-10-50 · PDF pp.1078 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q181, PDF p.32",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S181",
      "status": "checked",
      "pdfPages": [
        1078
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 182,
    "p": 32,
    "c": "Communications",
    "q": "When is the cockpit voice-recording system automatically active?",
    "o": [
      "During the first 5 minutes after electrical power is applied on ground, after the first engine start, and throughout flight",
      "Only after both engines are started",
      "Only while the parking brake is released",
      "Continuously whenever a battery is installed"
    ],
    "a": 0,
    "w": "The CVR automatically records during the initial 5 minutes after ground energisation, with an engine running, throughout flight, and until 5 minutes after the last ground engine shutdown provided the CVR jack is not used. GND CTL can start it manually on the ground.",
    "ref": "FCOM DSC-23-10-40, DSC-31-60-10 · PDF pp.1072, 1536 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q182, PDF p.32",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S182",
      "status": "corrected",
      "pdfPages": [
        1072,
        1536
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 183,
    "p": 33,
    "c": "Electrical",
    "q": "The EXT PWR pushbutton \"AVAIL\" light on the overhead Electrical Panel:",
    "o": [
      "Is green when power is connected and supplying.",
      "Is green when power is available and its parameters are normal.",
      "Will extinguish when the engines are started.",
      "Will extinguish when the APU Generator is in use."
    ],
    "a": 1,
    "w": "Is green when power is available and its parameters are normal. Guide Q183, PDF p.33.",
    "ref": "FCOM DSC-24-20 · PDF pp.1152, 1153 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q183, PDF p.33",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S183",
      "status": "checked",
      "pdfPages": [
        1152,
        1153
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 184,
    "p": 33,
    "c": "Electrical",
    "q": "After both engines are started, what normally supplies AC BUS 1 and AC BUS 2?",
    "o": [
      "Their respective engine-driven generators",
      "The APU generator only",
      "The batteries through the static inverter",
      "The emergency generator"
    ],
    "a": 0,
    "w": "Each engine-driven generator normally supplies its associated AC bus.",
    "ref": "FCOM DSC-24-10-20, DSC-24-10-30-20 · PDF pp.1127, 1132 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q184, PDF p.33",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S184",
      "status": "checked",
      "pdfPages": [
        1127,
        1132
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 185,
    "p": 33,
    "c": "Electrical",
    "q": "With normal bus-tie logic, what happens after one engine generator fails in flight?",
    "o": [
      "The RAT always extends",
      "The APU generator if available, otherwise the other engine generator, replaces it; load shedding applies",
      "The associated AC bus remains lost until landing",
      "Both AC buses necessarily lose power"
    ],
    "a": 1,
    "w": "The available APU generator or remaining engine generator replaces the failed unit. The source specifies galley-load and DC entertainment-bus shedding; do not claim that every bus/load remains powered.",
    "ref": "FCOM DSC-24-10-30-10, DSC-24-10-30-30 · PDF pp.1130, 1136, 1152 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q185, PDF p.33",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S185",
      "status": "corrected",
      "pdfPages": [
        1130,
        1136,
        1152
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 186,
    "p": 33,
    "c": "Electrical",
    "q": "Selecting the AC ESS FEED pushbutton to ALTN allows:",
    "o": [
      "AC Bus 1 to power AC bus 2.",
      "AC Bus 2 to power TR 1.",
      "AC Bus 2 to power AC ESS Bus.",
      "AC Bus 4 to power AC ESS Bus."
    ],
    "a": 2,
    "w": "AC Bus 2 to power AC ESS Bus. Guide Q186, PDF p.33.",
    "ref": "FCOM  · PDF pp.1151 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q186, PDF p.33",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S186",
      "status": "checked",
      "pdfPages": [
        1151
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 187,
    "p": 33,
    "c": "Electrical",
    "q": "With GEN 2 available, APU GEN unavailable and BUS TIE AUTO, selecting GEN 1 LINE OFF in flight:",
    "o": [
      "Allows AC Bus 1 to power AC Bus 2.",
      "Connects GEN 1 directly to ESS AC Bus.",
      "Will cause Gen 2 to power AC Bus 1.",
      "Selects GEN 1 OFF with Residual Voltage generated due to IDG rotation."
    ],
    "a": 2,
    "w": "GEN 1 line contactor opens and GEN 2 supplies the AC BUS 1 channel through the bus tie contactors. GEN 1 LINE OFF does not de-energize GEN 1 itself.",
    "ref": "FCOM  · PDF pp.1154 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q187, PDF p.33",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S187",
      "status": "corrected",
      "pdfPages": [
        1154
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 188,
    "p": 33,
    "c": "Electrical",
    "q": "In the Electrical System:",
    "o": [
      "Loss of AC BUS 1 and 2 above 100 kt automatically extends the RAT; satisfactory emergency-generator output then supplies the essential network",
      "External power connects to both buses automatically as soon as plugged in",
      "DC ESS is normally supplied by ESS TR",
      "The batteries are always connected to DC BAT BUS"
    ],
    "a": 0,
    "w": "The RAT trigger is loss of both main AC buses above 100 kt. A working APU generator may prevent bus loss after both engine generators fail. Batteries bridge the deployment/coupling interval.",
    "ref": "FCOM DSC-24-10-30-30 · PDF pp.1139, 1154 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q188, PDF p.33",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S188",
      "status": "corrected",
      "pdfPages": [
        1139,
        1154
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 189,
    "p": 33,
    "c": "Electrical",
    "q": "On the overhead EXT PWR pushbutton, green AVAIL is illuminated and blue ON is extinguished. What does this mean?",
    "o": [
      "The external power has priority over the APU generator.",
      "The external power is powering AC busses 1 and 2.",
      "The external power is connected but not powering AC busses 1 and 2.",
      "The external power is powering the GRD / FLT busses."
    ],
    "a": 2,
    "w": "External power is connected with acceptable parameters but has not been selected to supply the main AC buses. A separate ground-service supply configuration is possible.",
    "ref": "FCOM DSC-24-20 · PDF pp.1152, 1153 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q189, PDF p.33",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S189",
      "status": "corrected",
      "pdfPages": [
        1152,
        1153
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 190,
    "p": 34,
    "c": "Electrical",
    "q": "The amber fault light on the battery pushbutton switch:",
    "o": [
      "The battery is necessarily fully charged",
      "A fixed low-voltage threshold has been reached",
      "The battery contactor was selected open manually",
      "Charging current is outside limits and the battery contactor opens"
    ],
    "a": 3,
    "w": "The BAT FAULT indication accompanies out-of-limits charging current; the battery contactor opens.",
    "ref": "FCOM  · PDF pp.1150 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q190, PDF p.34",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S190",
      "status": "corrected",
      "pdfPages": [
        1150
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 191,
    "p": 34,
    "c": "Electrical",
    "q": "Which list identifies possible AC ESS supply sources under their applicable configurations?",
    "o": [
      "AC BUS 1 or AC BUS 2 or the APU.",
      "AC BUS 1 or AC BUS 2 or the EMER GEN only.",
      "AC BUS 1 or AC BUS 2 only.",
      "AC BUS 1 or AC BUS 2 or EMER GEN or the Static Inverter."
    ],
    "a": 3,
    "w": "AC BUS 1 is normal, AC BUS 2 is alternate, and the emergency generator supplies emergency AC power. The static inverter can supply part of AC ESS, subject to battery/speed logic; it does not provide identical capacity to the other sources.",
    "ref": "FCOM DSC-24-10-20, DSC-24-10-30-20, DSC-24-10-30-30 · PDF pp.1126, 1132, 1139, 1152 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q191, PDF p.34",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S191",
      "status": "corrected",
      "pdfPages": [
        1126,
        1132,
        1139,
        1152
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 192,
    "p": 34,
    "c": "Electrical",
    "q": "What is the normal automatic distribution after TR 1 fails?",
    "o": [
      "TR 2 replaces TR 1 for the main DC buses and ESS TR supplies DC ESS BUS",
      "DC BUS 1 remains permanently unpowered",
      "Both batteries directly supply all DC buses",
      "The emergency generator supplies DC BUS 2"
    ],
    "a": 0,
    "w": "The remaining main TR replaces the failed unit; the ESS TR supplies the DC ESS BUS.",
    "ref": "FCOM DSC-24-10-30-30 · PDF pp.1137 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q192, PDF p.34",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S192",
      "status": "checked",
      "pdfPages": [
        1137
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 193,
    "p": 34,
    "c": "Electrical",
    "q": "What does the red EMER ELEC PWR FAULT light indicate?",
    "o": [
      "The emergency generator is supplying normally",
      "Only AC BUS 1 is unpowered",
      "Both AC BUS 1 and 2 are unpowered and the emergency generator is not supplying",
      "Any loss of AC ESS regardless of main bus power"
    ],
    "a": 2,
    "w": "It illuminates when both main AC buses are unpowered and the emergency generator is not supplying. This can include the transition before coupling; it does not alone prove permanent generator unavailability.",
    "ref": "FCOM  · PDF pp.1154 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q193, PDF p.34",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S193",
      "status": "corrected",
      "pdfPages": [
        1154
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 194,
    "p": 34,
    "c": "Electrical",
    "q": "The batteries are:",
    "o": [
      "Permanently connected to DC BAT BUS",
      "Permanently connected to AC BUS 1",
      "Automatically connected to DC BAT BUS for charging, APU start, and loss of both AC buses below 100 kt with EMER GEN not supplying",
      "Always disconnected exactly 30 minutes after external power is removed"
    ],
    "a": 2,
    "w": "Battery contactors follow charging, APU-start and emergency low-speed logic. The emergency connection requires EMER GEN not supplying; normal fully charged batteries are disconnected most of the time.",
    "ref": "FCOM  · PDF pp.1149 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q194, PDF p.34",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S194",
      "status": "corrected",
      "pdfPages": [
        1149
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 195,
    "p": 34,
    "c": "Electrical",
    "q": "What does an amber FAULT light in either BAT pushbutton indicate?",
    "o": [
      "Battery-charging current is outside limits",
      "The battery is fully charged",
      "Battery voltage is exactly 25.5 V",
      "The battery contactor is selected open"
    ],
    "a": 0,
    "w": "The BAT FAULT light accompanies charging current outside limits. The guide's 'BAT 4' label was an OCR error.",
    "ref": "FCOM  · PDF pp.1150 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q195, PDF p.34",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S195",
      "status": "checked",
      "pdfPages": [
        1150
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 196,
    "p": 34,
    "c": "Electrical",
    "q": "Pushing the MAN ON red guarded pushbutton on the EMER ELEC PWR overhead panel in Flight:",
    "o": [
      "Starts the emergency generator (although Blue Hydraulic System must be pressurised by its Pump for this to be effective).",
      "Deploys the RAT and signals the Emergency Generator to connect to AC ESS when its output is satisfactory.",
      "Will deploy the RAT only if both AC buses are not supplied and the speed is >100 kt.",
      "Will have no effect if AC Busses 1 and 2 are energised."
    ],
    "a": 1,
    "w": "Deploys the RAT and signals the Emergency Generator to connect to AC ESS when its output is satisfactory. Guide Q196, PDF p.34.",
    "ref": "FCOM  · PDF pp.1154 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q196, PDF p.34",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S196",
      "status": "checked",
      "pdfPages": [
        1154
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 197,
    "p": 35,
    "c": "Electrical",
    "q": "On the EXT PWR pushbutton on the overhead ELEC panel:",
    "o": [
      "A Green AVAIL light means External Power is connected and supplying.",
      "A Green AVAIL light means External Power connected and within limits.",
      "A Blue ON light will extinguish when the engine generators come on line.",
      "AGreen AVAIL light with a Blue ON light indicate that External Power is within limits and also supplying."
    ],
    "a": 1,
    "w": "A Green AVAIL light means External Power connected and within limits. Guide Q197, PDF p.35.",
    "ref": "FCOM DSC-24-20 · PDF pp.1152, 1153 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q197, PDF p.35",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S197",
      "status": "checked",
      "pdfPages": [
        1152,
        1153
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 198,
    "p": 35,
    "c": "Electrical",
    "q": "The APU generator is driven directly by the APU:",
    "o": [
      "It can replace either or both main engine generators at any time (subject to KVA limits)",
      "It can replace only one main engine generator at any time (subject to kVA limits).",
      "It has priority over the external power.",
      "It can be used to back up the emergency generator."
    ],
    "a": 0,
    "w": "It can replace either or both main engine generators at any time (subject to KVA limits) Guide Q198, PDF p.35.",
    "ref": "FCOM DSC-24-10-20, DSC-24-10-30-10 · PDF pp.1126, 1130 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q198, PDF p.35",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S198",
      "status": "checked",
      "pdfPages": [
        1126,
        1130
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 199,
    "p": 35,
    "c": "Electrical",
    "q": "Which buses does TR 1 normally supply?",
    "o": [
      "DC BUS 1, DC BAT BUS and DC ESS BUS",
      "DC BUS 2 only",
      "AC BUS 1 and AC ESS BUS",
      "DC BUS 1 and DC BUS 2 only"
    ],
    "a": 0,
    "w": "TR 1 normally supplies DC BUS 1, DC BAT BUS and DC ESS BUS; TR 2 normally supplies DC BUS 2.",
    "ref": "FCOM DSC-24-10-20, DSC-24-10-30-20 · PDF pp.1127, 1132 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q199, PDF p.35",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S199",
      "status": "checked",
      "pdfPages": [
        1127,
        1132
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 200,
    "p": 35,
    "c": "Electrical",
    "q": "Two 23 amp/hour batteries are permanently connected to two hot battery buses:",
    "o": [
      "They are also permanently connected to the DC BAT BUSSES.",
      "They are also connected to the DC BAT BUS if they need charging.",
      "They are constantly charged through the BCL.",
      "They are continuously charged on the ground."
    ],
    "a": 1,
    "w": "They are also connected to the DC BAT BUS if they need charging. Guide Q200, PDF p.35.",
    "ref": "FCOM DSC-24-10-20, DSC-24-10-30-20 · PDF pp.1127, 1132 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q200, PDF p.35",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S200",
      "status": "checked",
      "pdfPages": [
        1127,
        1132
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 201,
    "p": 35,
    "c": "Electrical",
    "q": "With GEN 2 available, APU GEN unavailable and BUS TIE AUTO, what occurs when GEN 1 LINE is selected OFF?",
    "o": [
      "The GEN 1 line contactor opens, GEN 2 supplies AC BUS 1, and GEN 1 remains available to one fuel pump in each wing tank",
      "AC BUS 1 is permanently lost",
      "The RAT deploys automatically in all conditions",
      "Both engine generators disconnect"
    ],
    "a": 0,
    "w": "The GEN 1 line contactor opens. GEN 2 supplies AC BUS 1 via the bus ties, while GEN 1 continues to supply one fuel pump in each wing upstream of its line contactor.",
    "ref": "FCOM PRO-ABN-SMOKE-D · PDF pp.1154, 3084 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q201, PDF p.35",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S201",
      "status": "corrected",
      "pdfPages": [
        1154,
        3084
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 202,
    "p": 36,
    "c": "Fire Protection",
    "q": "How can an APU fire be extinguished?",
    "o": [
      "Only automatically (3 seconds after warning and Shutdown).",
      "Only manually, by the APU Fire pushbutton in the cockpit.",
      "On the Ground, either Automatically or, if the Auto system fails, Manually.",
      "On the Ground, by the red guarded switch on the refuelling panel."
    ],
    "a": 2,
    "w": "On the ground, detected APU fire triggers automatic shutdown and extinguisher discharge. The crew can also discharge the bottle using the cockpit FIRE/AGENT controls. The external APU SHUT OFF button is a shutdown control, not an agent-discharge button.",
    "ref": "FCOM DSC-26-20-10, DSC-26-20-20-10, DSC-26-20-20-30, DSC-26-20-20-40 · PDF pp.1209, 1212, 1214, 1215 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q202, PDF p.36",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S202",
      "status": "corrected",
      "pdfPages": [
        1209,
        1212,
        1214,
        1215
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 203,
    "p": 36,
    "c": "Fire Protection",
    "q": "The aircraft has the following Fire Extinguisher Bottles -",
    "o": [
      "2 for each Engine, 2 for the APU, 2 for the Cargo Compartments.",
      "2 shared between both Engines, 1 for the APU, 1 for the Cargo Compartments.",
      "2 for each Engine, 1 for the APU, 1 for the Cargo Compartments.",
      "1 for each Engine, 1 for the APU, one for the Cargo Compartments."
    ],
    "a": 2,
    "w": "2 for each Engine, 1 for the APU, 1 for the Cargo Compartments. Guide Q203, PDF p.36.",
    "ref": "FCOM DSC-26-20-10, DSC-26-50-10 · PDF pp.1209, 1223 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q203, PDF p.36",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S203",
      "status": "checked",
      "pdfPages": [
        1209,
        1223
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 204,
    "p": 36,
    "c": "Fire Protection",
    "q": "Pressing an Engine Fire pushbutton and releasing:",
    "o": [
      "Fires the first agent into the Engine.",
      "Closes the Engine Fuel Valves and Arms the Agent pushbutton only.",
      "Extinguishes the Fire Warning Lights in the Fire pushbutton and on the Pedestal.",
      "Shuts down the Engine, isolates it from other aircraft systems and arms the Agent pushbutton."
    ],
    "a": 3,
    "w": "Shuts down the Engine, isolates it from other aircraft systems and arms the Agent pushbutton. Guide Q204, PDF p.36.",
    "ref": "FCOM DSC-26-20-20-10 · PDF pp.1210, 1211 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q204, PDF p.36",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S204",
      "status": "checked",
      "pdfPages": [
        1210,
        1211
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 205,
    "p": 36,
    "c": "Fire Protection",
    "q": "With both engine/APU detection loops serviceable, what thermal detection condition normally triggers the fire warning?",
    "o": [
      "In either detection loop.",
      "By both of the two detection loops.",
      "By both the loops and the detection unit.",
      "By both loops within 5 seconds of each other."
    ],
    "a": 1,
    "w": "Both loops detecting temperature above the preset level triggers the warning. Separate logic applies to one failed loop, near-simultaneous breaks and a FIRE-panel test.",
    "ref": "FCOM DSC-26-20-10 · PDF pp.1208, 1209 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q205, PDF p.36",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S205",
      "status": "corrected",
      "pdfPages": [
        1208,
        1209
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 206,
    "p": 36,
    "c": "Fire Protection",
    "q": "The Cargo Smoke Detection System consists of:",
    "o": [
      "Two Sensing Loops and one Fire Extinguisher for each Compartment.",
      "One Sensing Loop for each Compartment and one Extinguisher between them.",
      "Two sensing loops in each Compartment and one shared Extinguisher.",
      "A single loop in each Compartment. Each Compartment has its own extinguisher."
    ],
    "a": 2,
    "w": "Two sensing loops in each Compartment and one shared Extinguisher. Guide Q206, PDF p.36.",
    "ref": "FCOM DSC-26-50-10 · PDF pp.1222, 1223 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q206, PDF p.36",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S206",
      "status": "checked",
      "pdfPages": [
        1222,
        1223
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 207,
    "p": 36,
    "c": "Fire Protection",
    "q": "When do the cockpit engine or APU AGENT pushbuttons become active for manual discharge?",
    "o": [
      "Always, providing the Battery Voltage > 25.5.",
      "Whenever an Engine (or APU) Fire is detected.",
      "Only when the Engine (or APU) is running.",
      "Only after an ENG or APU FIRE pushbutton has been pressed/released."
    ],
    "a": 3,
    "w": "The respective FIRE pushbutton must be released. Automatic APU ground fire extinguishing is a separate function.",
    "ref": "FCOM DSC-26-20-20-10 · PDF pp.1211, 1212 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q207, PDF p.36",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S207",
      "status": "corrected",
      "pdfPages": [
        1211,
        1212
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 208,
    "p": 37,
    "c": "Fire Protection",
    "q": "How may an APU FIRE agent be discharged?",
    "o": [
      "By the red guarded APU SHUT OFF pushbutton on the external power panel.",
      "From the APU FIRE panel pushbutton only.",
      "Automatically 3 seconds after the warning (Ground only).",
      "Automatically 3 seconds after the warning (Ground or In Flight)."
    ],
    "a": 2,
    "w": "Automatically 3 seconds after the warning (Ground only). Guide Q208, PDF p.37.",
    "ref": "FCOM DSC-26-20-10, DSC-26-20-20-10, DSC-26-20-20-30, DSC-26-20-20-40 · PDF pp.1209, 1212, 1214, 1215 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q208, PDF p.37",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S208",
      "status": "checked",
      "pdfPages": [
        1209,
        1212,
        1214,
        1215
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 209,
    "p": 37,
    "c": "Fire Protection",
    "q": "ECAM Cautions or Warnings will be given for:",
    "o": [
      "Smoke from Avionics or in either Cargo Compartments.",
      "Cargo, Engine or Wheelwell fire.",
      "Wheelwell Fire or Cargo Smoke.",
      "Cabin Smoke, Lavatory Smoke, Avionics Smoke."
    ],
    "a": 0,
    "w": "Smoke from Avionics or in either Cargo Compartments. Guide Q209, PDF p.37.",
    "ref": "FCOM DSC-26-10, DSC-26-30-10, DSC-26-50-20-10 · PDF pp.1206, 1216, 1226 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q209, PDF p.37",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S209",
      "status": "checked",
      "pdfPages": [
        1206,
        1216,
        1226
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 210,
    "p": 37,
    "c": "Fire Protection",
    "q": "An Engine Fire Warning can be triggered by:",
    "o": [
      "Only a single healthy loop sensing heat",
      "Only the loss of one loop",
      "Only a test on the FIRE panel",
      "Both loops detecting fire; one detecting fire with the other failed; or breaks in both within 5 seconds"
    ],
    "a": 3,
    "w": "All three listed detection conditions trigger a fire warning. A FIRE-panel test also produces the warning.",
    "ref": "FCOM DSC-26-20-10 · PDF pp.1208, 1209 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q210, PDF p.37",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S210",
      "status": "corrected",
      "pdfPages": [
        1208,
        1209
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 211,
    "p": 37,
    "c": "Fire Protection",
    "q": "The following fire extinguishers are provided:",
    "o": [
      "One per engine, one for the APU and one for each Cargo Compartment.",
      "Two per engine, one for the APU, and one for the Cargo Compartments.",
      "Two per engine, two for the APU and one for each cargo Compartment.",
      "One for the APU, two usable for either engine, and one for each Cargo Compartment."
    ],
    "a": 1,
    "w": "Two per engine, one for the APU, and one for the Cargo Compartments. Guide Q211, PDF p.37.",
    "ref": "FCOM DSC-26-20-10, DSC-26-50-10 · PDF pp.1209, 1223 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q211, PDF p.37",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S211",
      "status": "checked",
      "pdfPages": [
        1209,
        1223
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 212,
    "p": 37,
    "c": "Fire Protection",
    "q": "An engine fire pushbutton light will remain illuminated until:",
    "o": [
      "The engine master switch is set to Off.",
      "The agent is discharged.",
      "The fire is no longer signalled.",
      "The agent pushbutton is pressed / released."
    ],
    "a": 2,
    "w": "The fire is no longer signalled. Guide Q212, PDF p.37.",
    "ref": "FCOM DSC-26-20-20-10 · PDF pp.1210, 1211 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q212, PDF p.37",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S212",
      "status": "checked",
      "pdfPages": [
        1210,
        1211
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 213,
    "p": 38,
    "c": "Hydraulics",
    "q": "With both engines running and hydraulic controls normally configured, hydraulic power is normally supplied by:",
    "o": [
      "3 engine driven pumps.",
      "2 engine driven pumps and an electrical pump.",
      "2 engine driven pumps, 2 electrical pumps, a RAT and a hand pump.",
      "2 engine driven pumps, 2 electrical pumps and a RAT."
    ],
    "a": 1,
    "w": "2 engine driven pumps and an electrical pump. Guide Q213, PDF p.38.",
    "ref": "FCOM DSC-29-10-20, DSC-29-20 · PDF pp.1344, 1352 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q213, PDF p.38",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S213",
      "status": "corrected",
      "pdfPages": [
        1344,
        1352
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 214,
    "p": 38,
    "c": "Hydraulics",
    "q": "Between which hydraulic systems does the PTU transfer power?",
    "o": [
      "Green and Yellow",
      "Green and Blue",
      "Yellow and Blue",
      "All three simultaneously"
    ],
    "a": 0,
    "w": "The bidirectional PTU transfers hydraulic power between Green and Yellow without transferring fluid.",
    "ref": "FCOM DSC-29-10-20 · PDF pp.1344, 1353 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q214, PDF p.38",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S214",
      "status": "checked",
      "pdfPages": [
        1344,
        1353
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 215,
    "p": 38,
    "c": "Hydraulics",
    "q": "What is normal hydraulic system operating pressure, excluding RAT operation?",
    "o": [
      "3,000 PSI",
      "3,600 PSI",
      "2,500 PSI",
      "1,450 PSI"
    ],
    "a": 0,
    "w": "Normal operating pressure is 3,000 PSI. The source gives 2,500 PSI when the Blue system is powered by the RAT.",
    "ref": "FCOM DSC-29-10-10 · PDF pp.1342 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q215, PDF p.38",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S215",
      "status": "corrected",
      "pdfPages": [
        1342
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 216,
    "p": 38,
    "c": "Hydraulics",
    "q": "The RAT will extend automatically:",
    "o": [
      "With the loss of blue hydraulic pressure.",
      "With the loss of green hydraulic pressure.",
      "With the loss of yellow hydraulic pressure.",
      "None of these hydraulic-pressure losses alone triggers automatic RAT extension."
    ],
    "a": 3,
    "w": "None of the above. Guide Q216, PDF p.38.",
    "ref": "FCOM DSC-24-10-30-30, DSC-29-10-20 · PDF pp.1139, 1154, 1344 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q216, PDF p.38",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S216",
      "status": "checked",
      "pdfPages": [
        1139,
        1154,
        1344
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 217,
    "p": 38,
    "c": "Hydraulics",
    "q": "The transfer of hydraulic fluid between systems:",
    "o": [
      "Is possible using the PTU.",
      "Can be accomplished in the case of a system leakage.",
      "Is not possible.",
      "Can be done on the ground only."
    ],
    "a": 2,
    "w": "Is not possible. Guide Q217, PDF p.38.",
    "ref": "FCOM DSC-29-10-10 · PDF pp.1342 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q217, PDF p.38",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S217",
      "status": "checked",
      "pdfPages": [
        1342
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 218,
    "p": 38,
    "c": "Hydraulics",
    "q": "With both engines stopped, electrical power available and PTU enabled and uninhibited, how can Green hydraulics be pressurised?",
    "o": [
      "It is not possible because the pump is engine driven.",
      "By the blue system electric pump and the PTU.",
      "With the green system standby electric pump.",
      "By the yellow electric pump and the PTU."
    ],
    "a": 3,
    "w": "The Yellow electric pump can pressurise Yellow, allowing the PTU to transfer power to Green. No hydraulic fluid crosses between the systems.",
    "ref": "FCOM DSC-29-10-20 · PDF pp.1344, 1353 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q218, PDF p.38",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S218",
      "status": "corrected",
      "pdfPages": [
        1344,
        1353
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 219,
    "p": 38,
    "c": "Hydraulics",
    "q": "Eng. 1 or 2 pump fault light illuminates in the case of:",
    "o": [
      "Reservoir low level or overheat, pump failure or pump overheat.",
      "Reservoir overheat or low air pressure, pump low pressure or pump overheats.",
      "Reservoir low level, overheats, or low air pressure.",
      "Reservoir low level, overheat or low air pressure or pump low pressure."
    ],
    "a": 3,
    "w": "ENG PUMP FAULT covers low reservoir level, reservoir overheat, low reservoir air pressure and low pump pressure. Low pump pressure is inhibited on the ground with the engine stopped.",
    "ref": "FCOM DSC-29-20 · PDF pp.1352 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q219, PDF p.38",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S219",
      "status": "corrected",
      "pdfPages": [
        1352
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 220,
    "p": 39,
    "c": "Hydraulics",
    "q": "With BLUE ELEC PUMP in AUTO and AC power available, when can the Blue system run on the ground?",
    "o": [
      "When at least one engine is running, or when BLUE PUMP OVRD is selected ON",
      "Only after both engines are running",
      "Only with the RAT deployed",
      "It cannot run on the ground"
    ],
    "a": 0,
    "w": "On the ground the Blue electric pump runs with an engine running; maintenance override can run it before engine start when AC power is available.",
    "ref": "FCOM DSC-29-20 · PDF pp.1352 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q220, PDF p.39",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S220",
      "status": "checked",
      "pdfPages": [
        1352
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 221,
    "p": 39,
    "c": "Hydraulics",
    "q": "The blue system can operate:",
    "o": [
      "Slats and left and right elevator.",
      "Slats and right elevator (left elevator uses Green or Yellow).",
      "Flaps and right elevator.",
      "Slats and flaps and right elevator."
    ],
    "a": 0,
    "w": "Slats and left and right elevator. Guide Q221, PDF p.39.",
    "ref": "FCOM DSC-27-10-20-A, DSC-29-10-30 · PDF pp.1239, 1350 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q221, PDF p.39",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S221",
      "status": "checked",
      "pdfPages": [
        1239,
        1350
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 222,
    "p": 39,
    "c": "Hydraulics",
    "q": "With both engines running and normal hydraulic selections, hydraulic power is normally supplied by:",
    "o": [
      "3 engine-driven pumps.",
      "2 engine-driven pumps and an electric pump.",
      "2 engine driven pumps and 2 electric pumps.",
      "2 engine driven pumps, 2 electric pumps, and a RAT."
    ],
    "a": 1,
    "w": "2 engine-driven pumps and an electric pump. Guide Q222, PDF p.39.",
    "ref": "FCOM DSC-29-10-20, DSC-29-20 · PDF pp.1344, 1352 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q222, PDF p.39",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S222",
      "status": "corrected",
      "pdfPages": [
        1344,
        1352
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 223,
    "p": 39,
    "c": "Hydraulics",
    "q": "Does the PTU transfer hydraulic fluid between Green and Yellow?",
    "o": [
      "No; it transfers power only",
      "Yes, in both directions",
      "Only during cargo-door operation",
      "Only when both engines are stopped"
    ],
    "a": 0,
    "w": "The PTU is a bidirectional power-transfer unit; the system fluids remain separate.",
    "ref": "FCOM DSC-29-10-20 · PDF pp.1344, 1353 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q223, PDF p.39",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S223",
      "status": "checked",
      "pdfPages": [
        1344,
        1353
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 224,
    "p": 39,
    "c": "Hydraulics",
    "q": "With BLUE ELEC PUMP in AUTO:",
    "o": [
      "Runs whenever its pushbutton is AUTO and AC power is available.",
      "Can only run on the ground if one engine is running.",
      "Can be run before start with BLUE PUMP OVRD pushbutton on the overhead HYD MAINT panel ON, and AC electrical power available.",
      "The blue pump cannot run on the ground."
    ],
    "a": 2,
    "w": "With AC power available, selecting BLUE PUMP OVRD allows operation before engine start. In AUTO it also runs in flight or on the ground with an engine running.",
    "ref": "FCOM DSC-29-20 · PDF pp.1352 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q224, PDF p.39",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S224",
      "status": "corrected",
      "pdfPages": [
        1352
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 225,
    "p": 40,
    "c": "Hydraulics",
    "q": "The aircraft hydraulic system consists of:",
    "o": [
      "Three systems, each always at a minimum of 3,000 PSI",
      "Three independent systems normally at 3,000 PSI; Blue at 2,500 PSI when RAT-powered",
      "Three systems always at 2,500 PSI",
      "Two interconnected fluid systems"
    ],
    "a": 1,
    "w": "There are three independent hydraulic systems. Their normal operating pressure is 3,000 PSI; the RAT-powered Blue pressure is 2,500 PSI.",
    "ref": "FCOM DSC-29-10-10 · PDF pp.1342 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q225, PDF p.40",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S225",
      "status": "corrected",
      "pdfPages": [
        1342
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 226,
    "p": 40,
    "c": "Hydraulics",
    "q": "The complete Yellow hydraulic system can be powered by:",
    "o": [
      "A pump driven by engine 1, a hand pump, an electric pump, or the PTU.",
      "A pump driven by engine 2, an electric pump (usable on the ground only), or the PTU.",
      "A pump driven by engine 2, an electric pump, a hand pump, or the PTU.",
      "A pump driven by engine 2, an electric pump, or the PTU."
    ],
    "a": 3,
    "w": "Engine 2 pump, Yellow electric pump or PTU power can pressurise the Yellow system. The hand pump is provided for cargo-door operation and is not a substitute for normal whole-system pressurisation.",
    "ref": "FCOM DSC-29-10-20 · PDF pp.1344, 1353 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q226, PDF p.40",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S226",
      "status": "corrected",
      "pdfPages": [
        1344,
        1353
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 227,
    "p": 40,
    "c": "Hydraulics",
    "q": "When does the RAT deploy automatically in flight?",
    "o": [
      "After loss of AC BUS 1 and AC BUS 2 when speed is above 100 kt",
      "Whenever Blue hydraulic pressure is low",
      "After any single generator failure",
      "Whenever Green and Yellow pressures differ by 500 PSI"
    ],
    "a": 0,
    "w": "The automatic deployment condition is loss of both main AC buses in flight above 100 kt, not loss of one hydraulic system.",
    "ref": "FCOM DSC-24-10-30-30, DSC-29-10-20 · PDF pp.1139, 1154, 1344 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q227, PDF p.40",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S227",
      "status": "checked",
      "pdfPages": [
        1139,
        1154,
        1344
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 228,
    "p": 40,
    "c": "Hydraulics",
    "q": "When set to AUTO, and unless it is inhibited, the PTU runs:",
    "o": [
      "Whenever there is a difference between Green and Yellow system pressures.",
      "When Green or Yellow pressure falls below 1450 psi.",
      "When the difference between Green and Yellow systems' pressures is more than 500 psi.",
      "For test purposes during the first engine start."
    ],
    "a": 2,
    "w": "When the difference between Green and Yellow systems' pressures is more than 500 psi. Guide Q228, PDF p.40.",
    "ref": "FCOM DSC-29-10-20 · PDF pp.1344, 1353 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q228, PDF p.40",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S228",
      "status": "checked",
      "pdfPages": [
        1344,
        1353
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 229,
    "p": 40,
    "c": "Hydraulics",
    "q": "Which spoiler panels are powered by the Green hydraulic system?",
    "o": [
      "Spoilers 1 and 5",
      "Spoilers 2 and 4",
      "Spoiler 3 only",
      "All spoilers"
    ],
    "a": 0,
    "w": "Green hydraulic power supplies spoiler panels 1 and 5. The guide's '71' was an OCR error.",
    "ref": "FCOM DSC-27-10-20-A, DSC-29-10-30 · PDF pp.1239, 1350 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q229, PDF p.40",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S229",
      "status": "checked",
      "pdfPages": [
        1239,
        1350
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 230,
    "p": 40,
    "c": "Hydraulics",
    "q": "Mechanical control of the THS:",
    "o": [
      "It is available from the Pitch Trim wheel at any time (provided both Green and Yellow hydraulic systems are available).",
      "Has priority over electrical control, and requires either Green or Yellow hydraulic systems.",
      "Is only available after failure of both Green and Yellow system.",
      "Is only available after loss of Green or Yellow System Hydraulic Pressure."
    ],
    "a": 1,
    "w": "Has priority over electrical control, and requires either Green or Yellow hydraulic systems. Guide Q230, PDF p.40.",
    "ref": "FCOM DSC-27-10-20-A · PDF pp.1240 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q230, PDF p.40",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S230",
      "status": "checked",
      "pdfPages": [
        1240
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 231,
    "p": 40,
    "c": "Hydraulics",
    "q": "In Normal Law, the aircraft is controlled about the roll axis by two ailerons and:",
    "o": [
      "Spoilers 2, 3 and 4",
      "Spoilers 1, 2,3 and 4",
      "Spoilers 2,3, 4 and 5",
      "All Spoilers;"
    ],
    "a": 2,
    "w": "Spoilers 2,3, 4 and 5 Guide Q231, PDF p.40.",
    "ref": "FCOM DSC-27-20-10-30 · PDF pp.1264, 1265 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q231, PDF p.40",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S231",
      "status": "checked",
      "pdfPages": [
        1264,
        1265
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 232,
    "p": 41,
    "c": "Flight Controls",
    "q": "What does lateral Normal Law provide during a normal turn?",
    "o": [
      "Automatic turn coordination through rudder command",
      "Bank angle directly proportional to stick without limits",
      "No yaw damping",
      "Mechanical-only rudder control"
    ],
    "a": 0,
    "w": "Normal Law automatically coordinates the turn with rudder while controlling ailerons and spoilers from lateral sidestick demand.",
    "ref": "FCOM DSC-27-20-10-30 · PDF pp.1264, 1265 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q232, PDF p.41",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S232",
      "status": "checked",
      "pdfPages": [
        1264,
        1265
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 233,
    "p": 41,
    "c": "Flight Controls",
    "q": "With high-angle-of-attack protection active in Normal Law, to which angle of attack does the system return when the sidestick is released?",
    "o": [
      "αPROT",
      "αMAX",
      "The stall angle in all conditions",
      "An angle corresponding to VLS in all conditions"
    ],
    "a": 0,
    "w": "Releasing the sidestick returns the demand to αPROT. This describes angle-of-attack control, not a guaranteed fixed airspeed or thrust setting; alpha-floor is a separate function.",
    "ref": "FCOM DSC-27-20-10-20-A · PDF pp.1258, 1259 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q233, PDF p.41",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S233",
      "status": "corrected",
      "pdfPages": [
        1258,
        1259
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 234,
    "p": 41,
    "c": "Flight Controls",
    "q": "In pitch Alternate Law flight mode with valid landing-gear information, which selection initiates the direct stick-to-elevator flare mode?",
    "o": [
      "Landing gear DOWN",
      "Flaps 1",
      "Speedbrakes half",
      "Autopilot OFF"
    ],
    "a": 0,
    "w": "Landing gear DOWN initiates the transition to pitch Direct Law. The diagram gives an alternative slat/flap trigger if landing-gear information is no longer available.",
    "ref": "FCOM DSC-27-20-20 · PDF pp.1273, 1274 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q234, PDF p.41",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S234",
      "status": "corrected",
      "pdfPages": [
        1273,
        1274
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 235,
    "p": 41,
    "c": "Flight Controls",
    "q": "If neither pilot has taken sidestick priority and both move their sidesticks simultaneously:",
    "o": [
      "The smaller input is ignored.",
      "The last stick moved is the master.",
      "Both demands are algebraically summed.",
      "The first stick moved is the master."
    ],
    "a": 2,
    "w": "The demands are added algebraically, limited to the equivalent of full deflection of one sidestick. DUAL INPUT warns of simultaneous use; only one pilot should fly at a time.",
    "ref": "FCOM DSC-27-20-30 · PDF pp.1284, 1285 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q235, PDF p.41",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S235",
      "status": "corrected",
      "pdfPages": [
        1284,
        1285
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 236,
    "p": 41,
    "c": "Flight Controls",
    "q": "If the Wing tip brakes (WTBs) activate:",
    "o": [
      "They cannot be released in flight.",
      "Any WTB limits operation of both flaps and slats.",
      "Affected surfaces may be Retracted, but not further Extended.",
      "They can be released by reducing speed below flap limiting speed."
    ],
    "a": 0,
    "w": "They cannot be released in flight. Guide Q236, PDF p.41.",
    "ref": "FCOM DSC-27-30-10-A · PDF pp.1294 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q236, PDF p.41",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S236",
      "status": "checked",
      "pdfPages": [
        1294
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 237,
    "p": 42,
    "c": "Flight Controls",
    "q": "In Normal Law flight mode, wings level and away from protection limits, what does neutral sidestick command in pitch?",
    "o": [
      "1 g, corrected for pitch attitude",
      "A fixed indicated airspeed",
      "A fixed selected FCU vertical speed",
      "A fixed pitch attitude regardless of flight condition"
    ],
    "a": 0,
    "w": "Normal Law is a load-factor-demand law. With neutral stick and wings level it maintains 1 g corrected for pitch attitude, with automatic trim; it is not an altitude or vertical-speed hold mode.",
    "ref": "FCOM DSC-27-20-10-20 · PDF pp.1254, 1255 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q237, PDF p.42",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S237",
      "status": "corrected",
      "pdfPages": [
        1254,
        1255
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 238,
    "p": 42,
    "c": "Flight Controls",
    "q": "In the Flight Control System:",
    "o": [
      "Flaps and Ailerons are supplied by Green and Blue hydraulic systems.",
      "Ailerons are supplied by Green and Yellow, Rudder by Blue and Yellow only.",
      "Elevators are supplied by Green and Yellow only, THS by Blue or Green.",
      "Slats are supplied by Green and Blue, Flaps by Green and Yellow."
    ],
    "a": 3,
    "w": "Slats are supplied by Green and Blue, Flaps by Green and Yellow. Guide Q238, PDF p.42.",
    "ref": "FCOM DSC-27-30-10-A · PDF pp.1294 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q238, PDF p.42",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S238",
      "status": "checked",
      "pdfPages": [
        1294
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 239,
    "p": 42,
    "c": "Flight Controls",
    "q": "What happens as Normal Law changes to flare mode?",
    "o": [
      "At 50 ft RA the attitude is memorised; through 30 ft the reference progressively reduces toward 2° nose down",
      "At 30 ft the law changes instantly to mechanical backup",
      "At 100 ft autotrim commands nose up",
      "The side-stick becomes an altitude command"
    ],
    "a": 0,
    "w": "The attitude at 50 ft RA becomes the initial reference. Passing 30 ft, the reference reduces toward 2° nose down over 8 seconds, requiring a gentle nose-up flare input.",
    "ref": "FCOM DSC-27-20-10-20, DSC-27-20-10-20-A · PDF pp.1256 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q239, PDF p.42",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S239",
      "status": "checked",
      "pdfPages": [
        1256
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 240,
    "p": 42,
    "c": "Flight Controls",
    "q": "With trim capability available and no trim-freeze condition, which statement applies to Normal and Alternate Law flight modes?",
    "o": [
      "In Normal, Alternate and Direct Laws, Rudder Turn Co-ordination is available.",
      "In Alternate Law, Slow speed / High a Protection will prevent aircraft stall.",
      "In Alternate Law, Pitch Attitude Protection is Active.",
      "Automatic Pitch Trimming takes place in both Alternate and Normal Laws."
    ],
    "a": 3,
    "w": "Automatic pitch trim is available in both Normal and Alternate flight modes. It is not available in Direct Law, and separate freeze conditions and failures can remove or limit it.",
    "ref": "FCOM DSC-27-20-20 · PDF pp.1255, 1273, 1276 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q240, PDF p.42",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S240",
      "status": "corrected",
      "pdfPages": [
        1255,
        1273,
        1276
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 241,
    "p": 42,
    "c": "Flight Controls",
    "q": "In automatic electrical rudder control, which computers receive the ELAC yaw orders and command the rudder-control functions?",
    "o": [
      "ELAC.",
      "SEC.",
      "FAC.",
      "None: Rudders have Mechanical Input only."
    ],
    "a": 2,
    "w": "ELACs compute yaw-damping and turn-coordination orders and send them to the FACs. The rudder also retains its mechanical pedal control path.",
    "ref": "FCOM DSC-27-10-20-D · PDF pp.1248, 1249 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q241, PDF p.42",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S241",
      "status": "corrected",
      "pdfPages": [
        1248,
        1249
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 242,
    "p": 42,
    "c": "Flight Controls",
    "q": "In Normal Law, with neither high-AOA nor high-speed protection active, what maximum bank is available with full lateral sidestick?",
    "o": [
      "67°",
      "60°",
      "45°",
      "33°"
    ],
    "a": 0,
    "w": "The normal maximum is 67°. Active high-AOA protection reduces it to 45°; active high-speed protection reduces it to 40°.",
    "ref": "FCOM DSC-27-20-10-30 · PDF pp.1264, 1265 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q242, PDF p.42",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S242",
      "status": "corrected",
      "pdfPages": [
        1264,
        1265
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 243,
    "p": 42,
    "c": "Flight Controls",
    "q": "Which law has a direct stick-to-elevator relationship, no automatic pitch trim and the amber USE MAN PITCH TRIM message?",
    "o": [
      "Normal Law.",
      "Alternate Law.",
      "Mechanical backup.",
      "Direct Law."
    ],
    "a": 3,
    "w": "Pitch Direct Law requires manual trim. The amber message means automatic trim is unavailable; it can also appear in the separately described abnormal-attitude recovery law.",
    "ref": "FCOM DSC-27-20-20 · PDF pp.1270, 1276, 1277 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q243, PDF p.42",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S243",
      "status": "corrected",
      "pdfPages": [
        1270,
        1276,
        1277
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 244,
    "p": 43,
    "c": "Flight Controls",
    "q": "What backup control is available for the trimmable horizontal stabiliser?",
    "o": [
      "Mechanical control from the pitch-trim wheels",
      "A direct cable from each sidestick",
      "Pneumatic actuation",
      "Manual movement only after all hydraulics are lost"
    ],
    "a": 0,
    "w": "The pitch-trim wheels provide mechanical command of the THS and have priority over electrical control; hydraulic power is still required for actuation.",
    "ref": "FCOM DSC-27-10-20-A · PDF pp.1240 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q244, PDF p.43",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S244",
      "status": "checked",
      "pdfPages": [
        1240
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 245,
    "p": 43,
    "c": "Flight Controls",
    "q": "The stabiliser is actuated by:",
    "o": [
      "A screwjack driven by two hydraulic motors, commanded by one of three electric motors or the mechanical trim wheel",
      "A screwjack driven directly by three electric power motors without hydraulics",
      "A pneumatic jack driven by engine bleed air",
      "A cable from each sidestick directly drives the stabilizer"
    ],
    "a": 0,
    "w": "Two hydraulic motors drive the THS screwjack. One of three electric motors or the mechanical trim wheel controls the hydraulic motors; mechanical command still requires Green or Yellow hydraulics.",
    "ref": "FCOM DSC-27-10-20-A · PDF pp.1240 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q245, PDF p.43",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S245",
      "status": "corrected",
      "pdfPages": [
        1240
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 246,
    "p": 43,
    "c": "Flight Controls",
    "q": "Which signals cause rudder pedal movement?",
    "o": [
      "Turn co-ordination signals.",
      "Yaw damping signals.",
      "Rudder trim signals.",
      "Nose wheel steering signals."
    ],
    "a": 2,
    "w": "Rudder trim signals. Guide Q246, PDF p.43.",
    "ref": "FCOM DSC-27-10-20-D · PDF pp.1249, 1281 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q246, PDF p.43",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S246",
      "status": "checked",
      "pdfPages": [
        1249,
        1281
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 247,
    "p": 43,
    "c": "Flight Controls",
    "q": "With the autopilot engaged, what sidestick force disconnects it?",
    "o": [
      "More than 5 daN in pitch or 3.5 daN in roll",
      "Any detectable sidestick movement",
      "More than 10 daN in both axes",
      "Sidestick movement cannot disconnect it"
    ],
    "a": 0,
    "w": "The sidesticks are locked neutral with AP engaged. Overcoming the lock with more than 5 daN pitch or 3.5 daN roll disconnects the AP; this is not the recommended disconnect method.",
    "ref": "FCOM  · PDF pp.1283 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q247, PDF p.43",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S247",
      "status": "checked",
      "pdfPages": [
        1283
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 248,
    "p": 43,
    "c": "Flight Controls",
    "q": "In Alternate Law WITH reduced protections, which statement about high-speed stability is correct?",
    "o": [
      "High speed stability can be overridden by the pilot.",
      "High speed stability cannot be overridden by the pilot.",
      "The alpha floor function is operative.",
      "Pitch attitude protection is retained."
    ],
    "a": 0,
    "w": "The pilot can override its nose-up demand. Alternate Law without reduced protections does not include high- or low-speed stability.",
    "ref": "FCOM DSC-27-20-20 · PDF pp.1275 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q248, PDF p.43",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S248",
      "status": "corrected",
      "pdfPages": [
        1275
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 249,
    "p": 43,
    "c": "Flight Controls",
    "q": "Which PFD message accompanies pitch Direct Law?",
    "o": [
      "USE MAN PITCH TRIM in amber",
      "USE MAN PITCH TRIM in red",
      "MAN PITCH TRIM ONLY in green",
      "PITCH TRIM LOCKED in amber"
    ],
    "a": 0,
    "w": "Direct Law has no automatic pitch trim and displays USE MAN PITCH TRIM in amber.",
    "ref": "FCOM DSC-27-20-20 · PDF pp.1270, 1276, 1277 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q249, PDF p.43",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S249",
      "status": "checked",
      "pdfPages": [
        1270,
        1276,
        1277
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 250,
    "p": 43,
    "c": "Flight Controls",
    "q": "After a sidestick has been latched deactivated by the 40-second priority action, how can that latch be cancelled?",
    "o": [
      "Momentarily pressing the take-over pushbutton on both sticks simultaneously.",
      "Momentarily pressing the take-over pushbutton on the deactivated stick only.",
      "Momentarily pressing the take-over pushbutton on either stick",
      "Pressing a take-over pushbutton for more than 40 seconds."
    ],
    "a": 2,
    "w": "A press of either sidestick priority pushbutton cancels the latched deactivation. While both pilots hold their buttons, the last press determines priority.",
    "ref": "FCOM DSC-27-20-30 · PDF pp.1284, 1285 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q250, PDF p.43",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S250",
      "status": "corrected",
      "pdfPages": [
        1284,
        1285
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 251,
    "p": 44,
    "c": "Flight Controls",
    "q": "Which condition makes the relevant F or S legend and actual-position indication amber on the E/WD?",
    "o": [
      "The associated wingtip brake is applied",
      "Normal slat/flap transit alone",
      "Every CONF 1 selection",
      "Any loss of only one supplying hydraulic system"
    ],
    "a": 0,
    "w": "Wingtip-brake application makes the relevant indications amber. Both relevant hydraulic systems failing or a relevant slat/flap fault can also do so. The selected-position indication is cyan during normal transit.",
    "ref": "FCOM  · PDF pp.1300 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q251, PDF p.44",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S251",
      "status": "corrected",
      "pdfPages": [
        1300
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 252,
    "p": 44,
    "c": "Flight Controls",
    "q": "In mechanical backup, how is pitch controlled?",
    "o": [
      "By direct sidestick cables to the elevators",
      "By manually commanding THS through the trim wheel, with hydraulic actuation still required",
      "By a Blue hydraulic motor directly connected to the trim wheel",
      "By differential engine thrust only"
    ],
    "a": 1,
    "w": "Mechanical backup uses the trim wheels to command the THS. It bypasses electrical command but requires an available Green or Yellow hydraulic system.",
    "ref": "FCOM DSC-27-10-20-A, DSC-27-20-20 · PDF pp.1240, 1277 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q252, PDF p.44",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S252",
      "status": "corrected",
      "pdfPages": [
        1240,
        1277
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 253,
    "p": 44,
    "c": "Flight Controls",
    "q": "Rudder pedals are mechanically linked directly to the rudder hydraulic actuators. Which inputs are fed back to the pedals?",
    "o": [
      "Rudder trim.",
      "Yaw damping.",
      "Turn co-ordination.",
      "NWS inputs from the hand wheels."
    ],
    "a": 0,
    "w": "Rudder trim. Guide Q253, PDF p.44.",
    "ref": "FCOM DSC-27-10-20-D · PDF pp.1249, 1281 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q253, PDF p.44",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S253",
      "status": "checked",
      "pdfPages": [
        1249,
        1281
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 254,
    "p": 44,
    "c": "Flight Controls",
    "q": "Side-stick priority logic is:",
    "o": [
      "If both pilots press their take-over pushbutton, the first to press gets priority.",
      "If both pilots press their take-over pushbutton, the last to press gets priority.",
      "A take-over pushbutton must be pressed for at least 40 seconds before the take-over function becomes effective.",
      "Once a take-over pushbutton has been pressed for 40 seconds, the priority cannot be undone."
    ],
    "a": 1,
    "w": "If both pilots press their take-over pushbutton, the last to press gets priority. Guide Q254, PDF p.44.",
    "ref": "FCOM DSC-27-20-30 · PDF pp.1284, 1285 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q254, PDF p.44",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S254",
      "status": "checked",
      "pdfPages": [
        1284,
        1285
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 255,
    "p": 44,
    "c": "Flight Controls",
    "q": "What happens in case of Green Hydraulic System failure?",
    "o": [
      "Flaps move at normal rate.",
      "Slats move at normal rate.",
      "Flaps and Slats are lost.",
      "Slats and Flaps move at half speed."
    ],
    "a": 3,
    "w": "Slats and Flaps move at half speed. Guide Q255, PDF p.44.",
    "ref": "FCOM DSC-27-30-10-A · PDF pp.1294 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q255, PDF p.44",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S255",
      "status": "checked",
      "pdfPages": [
        1294
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 256,
    "p": 44,
    "c": "Flight Controls",
    "q": "In clean Normal Law manual flight, away from low-speed pitch-limit reduction, which pitch and load-factor limits apply?",
    "o": [
      "+30°/-15° pitch and -1 g to +2.5 g clean",
      "+45°/-30° pitch and 0 g to +2 g clean",
      "+30°/-15° pitch and 0 g to +2 g clean",
      "+20°/-10° pitch with no g limit"
    ],
    "a": 0,
    "w": "The clean load-factor range is -1 to +2.5 g and the basic pitch bounds are +30°/-15°. Nose-up authority reduces at low speed; CONF FULL has a lower +25° limit reducing to +20° at low speed.",
    "ref": "FCOM DSC-27-20-10-20-A · PDF pp.1257, 1258 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q256, PDF p.44",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S256",
      "status": "corrected",
      "pdfPages": [
        1257,
        1258
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 257,
    "p": 44,
    "c": "Flight Controls",
    "q": "In pitch Alternate Law flight mode with valid landing-gear information, what follows landing gear DOWN selection?",
    "o": [
      "Pitch reverts to Direct Law",
      "Pitch returns to Normal Law",
      "Pitch remains Alternate Law with all protections",
      "Mechanical backup engages"
    ],
    "a": 0,
    "w": "The normal alternate-law landing transition is to pitch Direct Law. The diagram specifies slat/flap-based substitution if landing-gear information is unavailable.",
    "ref": "FCOM DSC-27-20-20 · PDF pp.1273, 1274 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q257, PDF p.44",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S257",
      "status": "corrected",
      "pdfPages": [
        1273,
        1274
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 258,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "Which hydraulic fluid circuit supplies the normal brakes?",
    "o": [
      "Yellow",
      "Blue",
      "Green",
      "A mixture of Green and Yellow fluid"
    ],
    "a": 2,
    "w": "Normal brakes use Green hydraulic pressure. Yellow can transfer power through the PTU to pressurise Green, but no Yellow fluid enters the Green brake circuit.",
    "ref": "FCOM DSC-32-30-10, DSC-32-30-10-B · PDF pp.1580, 1583 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q258, PDF p.45",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S258",
      "status": "corrected",
      "pdfPages": [
        1580,
        1583
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 259,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "Autobrake is available -",
    "o": [
      "From Normal Brakes or from Alternative Brakes provided Antiskid is functioning.",
      "For Landing only.",
      "From Normal Brakes.",
      "Until the aircraft slows below 20 kt."
    ],
    "a": 2,
    "w": "From Normal Brakes. Guide Q259, PDF p.45.",
    "ref": "FCOM DSC-32-30-10-A, DSC-32-30-10-B · PDF pp.1581, 1583 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q259, PDF p.45",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S259",
      "status": "checked",
      "pdfPages": [
        1581,
        1583
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 260,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "Which statement about the landing-gear hydraulic safety valve is correct?",
    "o": [
      "It transfers Blue fluid into the Green circuit",
      "It cuts off landing-gear hydraulic supply above 260 kt",
      "It removes the need to observe VLO",
      "It requires both LGCIUs to fail before closing"
    ],
    "a": 1,
    "w": "Above 260 kt the safety valve cuts off hydraulic supply. Below 260 kt supply remains cut off while the gear lever is UP. This is system logic, not permission to exceed the lower VLO extension limit.",
    "ref": "FCOM DSC-32-10-10-A, DSC-32-10-40 · PDF pp.1548, 1549, 1568 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q260, PDF p.45",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S260",
      "status": "corrected",
      "pdfPages": [
        1548,
        1549,
        1568
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 261,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "In the supplied LOSS OF BRAKING procedure, after selecting A/SKID OFF and reapplying the pedals, what maximum brake pressure is specified?",
    "o": [
      "1,000 PSI",
      "1,900 PSI",
      "2,500 PSI",
      "3,000 PSI"
    ],
    "a": 0,
    "w": "The procedure specifies MAX BRK PR 1,000 PSI. Its ABCU-equipped description includes automatic limiting; that equipment standard must not be assumed for an older simulator without confirmation.",
    "ref": "FCOM DSC-32-30-10-B, PRO-ABN-BRAKES · PDF pp.1584, 2576 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q261, PDF p.45",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S261",
      "status": "corrected",
      "pdfPages": [
        1584,
        2576
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 262,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "What prevents hydraulic landing-gear extension above 260 kt?",
    "o": [
      "A safety valve cuts off the hydraulic supply",
      "The selector lever is mechanically locked",
      "The PTU reverses direction",
      "The gear doors remain electrically locked"
    ],
    "a": 0,
    "w": "A safety valve cuts off hydraulic supply to the gear when speed exceeds 260 kt.",
    "ref": "FCOM DSC-32-10-10-A, DSC-32-10-40 · PDF pp.1548, 1549, 1568 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q262, PDF p.45",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S262",
      "status": "checked",
      "pdfPages": [
        1548,
        1549,
        1568
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 263,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "Which LGCIU must be electrically supplied for the LANDING GEAR indicator panel lights to operate?",
    "o": [
      "LGCIU 2 only",
      "LGCIU 1",
      "Either LGCIU alone",
      "Neither; the indicator panel bypasses both LGCIUs"
    ],
    "a": 1,
    "w": "The dedicated indicator panel is connected only to LGCIU 1. The WHEEL SD page receives data from both LGCIUs; a dark indicator panel alone does not prove that the gear is unsafe.",
    "ref": "FCOM DSC-32-10-40 · PDF pp.1566 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q263, PDF p.45",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S263",
      "status": "corrected",
      "pdfPages": [
        1566
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 264,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "Nose wheel steering by the handwheel is limited to:",
    "o": [
      "±95° under all conditions",
      "±75° under all conditions",
      "Up to ±75°, depending on ground speed",
      "±75° to 70 kt and then ±6° to 130 kt"
    ],
    "a": 2,
    "w": "Up to +75° depending on aircraft ground speed. Guide Q264, PDF p.45.",
    "ref": "FCOM DSC-32-20-10 · PDF pp.1572 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q264, PDF p.45",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S264",
      "status": "corrected",
      "pdfPages": [
        1572
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 265,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "On the memo display when the nose wheel steering selector is in the towing position:",
    "o": [
      "NW STRG DISC message is always displayed green.",
      "NW STRG DISC message is always displayed in amber.",
      "NW STRG DISC message is displayed green; it becomes amber with two engines running.",
      "NW STRG DISC message is displayed in green, it becomes amber with one engine running."
    ],
    "a": 3,
    "w": "NW STRG DISC message is displayed in green, it becomes amber with one engine running. Guide Q265, PDF p.46.",
    "ref": "FCOM DSC-32-20-20 · PDF pp.1578 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q265, PDF p.46",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S265",
      "status": "checked",
      "pdfPages": [
        1578
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 266,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "What does a red gear triangle on the WHEEL SD page indicate?",
    "o": [
      "The gear is not locked in either the up or down position",
      "Autobrake deceleration is achieved",
      "Nosewheel steering is available",
      "The gear is downlocked normally"
    ],
    "a": 0,
    "w": "A red triangle represents an unsafe or in-transit gear position; green triangles indicate downlocked gear.",
    "ref": "FCOM DSC-32-10-40 · PDF pp.1569, 1570 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q266, PDF p.46",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S266",
      "status": "checked",
      "pdfPages": [
        1569,
        1570
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 267,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "For nose-wheel steering:",
    "o": [
      "Rudder pedals are mechanically linked to the nose strut.",
      "The steering angle with NW STRG DISC is + 75° until 70 kt IAS.",
      "The rudder pedals are disconnected from steering at 100 kt.",
      "The hand-wheels can normally steer + 75° up to 20 kt, reducing to zero at 70 kt ground speed."
    ],
    "a": 3,
    "w": "Student guide answer retained: The hand-wheels can normally steer + 75° up to 20 kt, reducing to zero at 70 kt ground speed. Guide Q267, PDF p.46.",
    "ref": "FCOM DSC-32-20-10 · PDF pp.1572 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q267, PDF p.46",
    "review": "withheld",
    "verification": {
      "id": "S267",
      "status": "withheld",
      "pdfPages": [
        1572
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 268,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "Normal braking ( including Autobrake) is:",
    "o": [
      "Pressurised by Green Hydraulics.",
      "Indicated on the triple pressure indicator.:",
      "Is not influenced by the A/SKID & NW STRG switch.",
      "Pressurised by Green Hydraulics, but will be from Yellow Hydraulics if Green has low pressure."
    ],
    "a": 0,
    "w": "Pressurised by Green Hydraulics. Guide Q268, PDF p.46.",
    "ref": "FCOM DSC-32-30-10, DSC-32-30-10-B · PDF pp.1580, 1583 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q268, PDF p.46",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S268",
      "status": "checked",
      "pdfPages": [
        1580,
        1583
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 269,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "With sufficient Yellow system or brake-accumulator pressure, what supplies the parking brake?",
    "o": [
      "Green pressure in all conditions",
      "Blue pressure",
      "Yellow or brake-accumulator pressure through the parking-brake valve",
      "The PTU transfers Green fluid directly into the brake accumulator"
    ],
    "a": 2,
    "w": "Parking braking uses Yellow/accumulator pressure. In the supplied system, if parking brake is selected but no Yellow/accumulator pressure is available, the normal brakes can still be applied with the pedals.",
    "ref": "FCOM DSC-32-30-10-B · PDF pp.1584 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q269, PDF p.46",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S269",
      "status": "corrected",
      "pdfPages": [
        1584
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 270,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "The Landing Gear Hydraulic Supply is isolated:",
    "o": [
      "Above 320 kt or when the aircraft is on the ground.",
      "Above 260 kt and when L/G is Extended.",
      "Above 220 kt or if Gravity Extension has been used.",
      "Above 260 kt or if Gravity Extension has been used."
    ],
    "a": 3,
    "w": "The safety valve isolates above 260 kt, and supply remains isolated below that speed while the lever is UP. The gravity-extension crank also isolates and depressurises the gear hydraulic circuit.",
    "ref": "FCOM DSC-32-10-10-A, DSC-32-10-40 · PDF pp.1548, 1549, 1568 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q270, PDF p.46",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S270",
      "status": "corrected",
      "pdfPages": [
        1548,
        1549,
        1568
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 271,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "The landing gear can be extended by:",
    "o": [
      "Blue hydraulic pressure or gravity",
      "Green hydraulic actuation or mechanical release for gravity extension",
      "Yellow fluid routed directly into the gear actuators",
      "Gravity extension requiring Yellow downlocking pressure"
    ],
    "a": 1,
    "w": "Normal actuation uses Green hydraulics. The gravity system mechanically releases uplocks and isolates hydraulics; gravity, springs and aerodynamic forces assist extension and locking.",
    "ref": "FCOM DSC-32-10-10-A, DSC-32-10-40 · PDF pp.1548, 1549, 1568 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q271, PDF p.46",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S271",
      "status": "corrected",
      "pdfPages": [
        1548,
        1549,
        1568
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 272,
    "p": 47,
    "c": "Landing Gear & Brakes",
    "q": "What does the red arrow beside the landing-gear lever indicate?",
    "o": [
      "Every momentary disagreement during a normal gear cycle",
      "Only a failure of LGCIU 2",
      "The gear is not locked down when the aircraft is in the landing configuration, with an ECAM warning",
      "Nosewheel steering is disconnected"
    ],
    "a": 2,
    "w": "The FCOM describes the arrow as the gear-not-down indication in landing configuration, accompanied by a red ECAM warning. A standalone 750 ft rule is not an adequate description of all warning logic.",
    "ref": "FCOM  · PDF pp.1567 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q272, PDF p.47",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S272",
      "status": "corrected",
      "pdfPages": [
        1567
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 273,
    "p": 47,
    "c": "Landing Gear & Brakes",
    "q": "The maximum nose wheel steering deflection available using the rudder pedals is:",
    "o": [
      "Up to ±75°",
      "Always ±6° at every ground speed",
      "Up to ±6°, depending on ground speed",
      "Only ±1°"
    ],
    "a": 2,
    "w": "The maximum pedal-command steering authority is ±6°, with ground-speed scheduling; it is not ±6° at all speeds.",
    "ref": "FCOM DSC-32-20-10 · PDF pp.1572 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q273, PDF p.47",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S273",
      "status": "corrected",
      "pdfPages": [
        1572
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 274,
    "p": 47,
    "c": "Landing Gear & Brakes",
    "q": "Hydraulic power for the Braking system is supplied by:",
    "o": [
      "Green system for Normal brakes with accumulator pressure for the Alternate brakes.",
      "Yellow system for Normal brakes with Green pressure for the Alternate brakes.",
      "Green system for Normal brakes with Blue pressure for the Alternate brakes.",
      "Green system for Normal brakes with Yellow system pressure for the Alternate brakes."
    ],
    "a": 3,
    "w": "Green system for Normal brakes with Yellow system pressure for the Alternate brakes. Guide Q274, PDF p.47.",
    "ref": "FCOM DSC-32-30-10, DSC-32-30-10-B · PDF pp.1580, 1583 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q274, PDF p.47",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S274",
      "status": "checked",
      "pdfPages": [
        1580,
        1583
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 275,
    "p": 48,
    "c": "Limitations",
    "q": "What is the maximum landing weight for A320 A/C 21-CMHT?",
    "o": [
      "64,500 kg",
      "60,500 kg",
      "70,500 kg",
      "73,500 kg"
    ],
    "a": 0,
    "w": "Maximum landing weight is 64,500 kg.",
    "ref": "FCOM LIM-AG-WGHT · PDF pp.3690 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q275, PDF p.48",
    "review": "withheld",
    "verification": {
      "id": "S275",
      "status": "withheld",
      "pdfPages": [
        3690
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 276,
    "p": 48,
    "c": "Limitations",
    "q": "What is VMO/MMO?",
    "o": [
      "350 kt / M0.82",
      "340 kt / M0.80",
      "360 kt / M0.84",
      "350 kt / M0.80"
    ],
    "a": 0,
    "w": "VMO is 350 kt and MMO is M0.82.",
    "ref": "FCOM LIM-AG-SPD · PDF pp.3686 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q276, PDF p.48",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S276",
      "status": "checked",
      "pdfPages": [
        3686
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 277,
    "p": 48,
    "c": "Limitations",
    "q": "Which maximum operating-pressure and runway-altitude pair is correct?",
    "o": [
      "39,800 ft / 9,200 ft",
      "39,200 ft / 8,800 ft",
      "39,500 ft / 9,200 ft",
      "37,200 ft / 7,200 ft"
    ],
    "a": 0,
    "w": "The maximum operating pressure altitude is 39,800 ft and the maximum runway altitude is 9,200 ft.",
    "ref": "FCOM LIM-AG-OPS, LIM-AG-OPS-ARPT_WIND · PDF pp.3682, 3683 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q277, PDF p.48",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S277",
      "status": "checked",
      "pdfPages": [
        3682,
        3683
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 278,
    "p": 48,
    "c": "Limitations",
    "q": "What is the maximum taxi weight for A320 A/C 21-CMHT?",
    "o": [
      "73,900 kg",
      "73,500 kg",
      "64,500 kg",
      "61,000 kg"
    ],
    "a": 0,
    "w": "Maximum taxi weight is 73,900 kg.",
    "ref": "FCOM LIM-AG-WGHT · PDF pp.3690 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q278, PDF p.48",
    "review": "withheld",
    "verification": {
      "id": "S278",
      "status": "withheld",
      "pdfPages": [
        3690
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 279,
    "p": 48,
    "c": "Limitations",
    "q": "What is the maximum operating altitude with slats and/or flaps extended?",
    "o": [
      "20,000 ft",
      "15,000 ft",
      "25,000 ft",
      "30,000 ft"
    ],
    "a": 0,
    "w": "Slats and/or flaps may not be operated above 20,000 ft.",
    "ref": "FCOM LIM-F_CTL · PDF pp.3752 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q279, PDF p.48",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S279",
      "status": "checked",
      "pdfPages": [
        3752
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 280,
    "p": 48,
    "c": "Limitations",
    "q": "What is the maximum zero-fuel weight for A320 A/C 21-CMHT?",
    "o": [
      "61,000 kg",
      "63,500 kg",
      "64,500 kg",
      "66,000 kg"
    ],
    "a": 0,
    "w": "Maximum zero-fuel weight is 61,000 kg.",
    "ref": "FCOM LIM-AG-WGHT · PDF pp.3690 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q280, PDF p.48",
    "review": "withheld",
    "verification": {
      "id": "S280",
      "status": "withheld",
      "pdfPages": [
        3690
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 281,
    "p": 48,
    "c": "Limitations",
    "q": "What is the maximum demonstrated crosswind for takeoff and landing?",
    "o": [
      "38 kt, gust included",
      "29 kt plus gusts to 38 kt",
      "33 kt plus gusts to 38 kt",
      "25 kt, gust included"
    ],
    "a": 0,
    "w": "The cited table gives 38 kt including gust. It is a demonstrated certification value and an Airbus recommendation, not an AFM limitation; runway-condition and operator restrictions also apply.",
    "ref": "FCOM LIM-AG-OPS-ARPT_WIND · PDF pp.3683 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q281, PDF p.48",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S281",
      "status": "corrected",
      "pdfPages": [
        3683
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 282,
    "p": 49,
    "c": "Limitations",
    "q": "What is the maximum takeoff weight at brake release for A320 A/C 21-CMHT?",
    "o": [
      "73,500 kg",
      "77,000 kg",
      "74,500 kg",
      "64,500 kg"
    ],
    "a": 0,
    "w": "Maximum takeoff weight at brake release is 73,500 kg. The guide's 77.0-t answer was not applicable to this aircraft.",
    "ref": "FCOM LIM-AG-WGHT · PDF pp.3690 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q282, PDF p.49",
    "review": "withheld",
    "verification": {
      "id": "S282",
      "status": "withheld",
      "pdfPages": [
        3690
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 283,
    "p": 49,
    "c": "Limitations",
    "q": "Is the 38-kt maximum demonstrated crosswind an AFM limitation?",
    "o": [
      "No; it is the maximum demonstrated during certification and an Airbus recommendation",
      "Yes; it is a hard structural limit",
      "Yes, but only for takeoff",
      "No; there is no published crosswind value"
    ],
    "a": 0,
    "w": "The FCOM explicitly says it is not an AFM limitation; Airbus recommends not intentionally exceeding it.",
    "ref": "FCOM LIM-AG-OPS-ARPT_WIND · PDF pp.3683 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q283, PDF p.49",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S283",
      "status": "checked",
      "pdfPages": [
        3683
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 284,
    "p": 49,
    "c": "Limitations",
    "q": "What is VLE, the maximum speed with landing gear extended?",
    "o": [
      "280 kt / M0.67",
      "270 kt / M0.69",
      "250 kt / M0.60",
      "220 kt / M0.54"
    ],
    "a": 0,
    "w": "VLE is 280 kt / M0.67.",
    "ref": "FCOM LIM-AG-SPD · PDF pp.3687 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q284, PDF p.49",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S284",
      "status": "checked",
      "pdfPages": [
        3687
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 285,
    "p": 49,
    "c": "Limitations",
    "q": "At takeoff, when may an autopilot first be engaged?",
    "o": [
      "At 100 ft AGL and at least 5 seconds after liftoff",
      "Immediately at liftoff",
      "At 50 ft AGL",
      "At 500 ft AGL only"
    ],
    "a": 0,
    "w": "The takeoff minimum is 100 ft AGL and at least 5 seconds after liftoff.",
    "ref": "FCOM LIM-AFS-10-10 · PDF pp.3702 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q285, PDF p.49",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S285",
      "status": "checked",
      "pdfPages": [
        3702
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 286,
    "p": 49,
    "c": "Limitations",
    "q": "What is the highest airport elevation at which automatic landing is demonstrated?",
    "o": [
      "9,200 ft",
      "2,500 ft",
      "1,500 ft",
      "10,000 ft"
    ],
    "a": 0,
    "w": "Automatic landing is demonstrated at airport elevations at or below 9,200 ft. The legacy 2,500-ft answer was revised.",
    "ref": "FCOM LIM-AFS-20-10 · PDF pp.3711 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q286, PDF p.49",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S286",
      "status": "checked",
      "pdfPages": [
        3711
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 287,
    "p": 49,
    "c": "Limitations",
    "q": "For normal-width runway operations with RWYCC 5, what crosswind value does the current table give?",
    "o": [
      "38 kt, gust included",
      "33 kt, gust included",
      "29 kt plus gusts",
      "25 kt, gust included"
    ],
    "a": 0,
    "w": "The current RWYCC 5 recommendation is 38 kt with the gust included.",
    "ref": "FCOM LIM-AG-OPS-ARPT_WIND · PDF pp.3684 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q287, PDF p.49",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S287",
      "status": "checked",
      "pdfPages": [
        3684
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 288,
    "p": 49,
    "c": "Limitations",
    "q": "What is the minimum aircraft weight listed for A320 A/C 21-CMHT?",
    "o": [
      "37,230 kg",
      "39,800 kg",
      "61,000 kg",
      "64,500 kg"
    ],
    "a": 0,
    "w": "The listed minimum weight is 37,230 kg.",
    "ref": "FCOM LIM-AG-WGHT · PDF pp.3690 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q288, PDF p.49",
    "review": "withheld",
    "verification": {
      "id": "S288",
      "status": "withheld",
      "pdfPages": [
        3690
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 289,
    "p": 49,
    "c": "Limitations",
    "q": "What is the maximum wiper operating speed while the wipers are sweeping?",
    "o": [
      "230 kt",
      "195 kt",
      "200 kt",
      "250 kt"
    ],
    "a": 0,
    "w": "The maximum wiper operating speed is 230 kt while sweeping.",
    "ref": "FCOM LIM-AG-SPD · PDF pp.3689 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q289, PDF p.49",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S289",
      "status": "checked",
      "pdfPages": [
        3689
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 290,
    "p": 50,
    "c": "Limitations",
    "q": "What is VLO for landing-gear extension?",
    "o": [
      "250 kt / M0.60",
      "280 kt / M0.67",
      "220 kt / M0.54",
      "260 kt / M0.68"
    ],
    "a": 0,
    "w": "Maximum landing-gear extension speed is 250 kt / M0.60.",
    "ref": "FCOM LIM-AG-SPD · PDF pp.3687 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q290, PDF p.50",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S290",
      "status": "checked",
      "pdfPages": [
        3687
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 291,
    "p": 50,
    "c": "Limitations",
    "q": "What is the minimum autopilot-engagement height after a manual go-around?",
    "o": [
      "100 ft AGL",
      "50 ft AGL",
      "200 ft AGL",
      "500 ft AGL"
    ],
    "a": 0,
    "w": "After a manual go-around, the AP engagement minimum is 100 ft AGL.",
    "ref": "FCOM LIM-AFS-10-10 · PDF pp.3702 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q291, PDF p.50",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S291",
      "status": "checked",
      "pdfPages": [
        3702
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 292,
    "p": 50,
    "c": "Limitations",
    "q": "If the APU is to be started on batteries only, when should it be started after selecting the batteries to AUTO?",
    "o": [
      "Within 30 minutes",
      "Above 25,000 ft",
      "After 60 minutes",
      "Only after external power is connected"
    ],
    "a": 0,
    "w": "The current normal procedure says to start within 30 minutes of battery selection. The old 25,000-ft battery-start ceiling is not stated in the current APU limitation.",
    "ref": "FCOM PRO-NOR-SOP-04, PRO-NOR-SOP-04-C · PDF pp.3170 · page revision 09 SEP 25 · supplied training compilation; aircraft options must match · Guide Q292, PDF p.50",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S292",
      "status": "checked",
      "pdfPages": [
        3170
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 293,
    "p": 50,
    "c": "Limitations",
    "q": "Which door-operation wind limits are correct?",
    "o": [
      "Passenger doors: 65 kt; cargo doors: 40 kt, or 50 kt with the nose into wind/door leeward",
      "All doors: 65 kt",
      "Passenger doors: 50 kt; cargo doors: 65 kt",
      "All doors: 40 kt"
    ],
    "a": 0,
    "w": "Passenger-door operation is limited to 65 kt. Cargo-door operation is 40 kt, increased to 50 kt with the nose into wind or the door on the leeward side; cargo doors must be closed before wind exceeds 65 kt.",
    "ref": "FCOM LIM-AG-OPS-ARPT_WIND · PDF pp.3684 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q293, PDF p.50",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S293",
      "status": "checked",
      "pdfPages": [
        3684
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 294,
    "p": 50,
    "c": "Limitations",
    "q": "What is VLO for landing-gear retraction?",
    "o": [
      "220 kt / M0.54",
      "250 kt / M0.60",
      "280 kt / M0.67",
      "230 kt / M0.60"
    ],
    "a": 0,
    "w": "Maximum landing-gear retraction speed is 220 kt / M0.54.",
    "ref": "FCOM LIM-AG-SPD · PDF pp.3687 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q294, PDF p.50",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S294",
      "status": "checked",
      "pdfPages": [
        3687
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 295,
    "p": 50,
    "c": "Limitations",
    "q": "What is VFE for CONF 1+F?",
    "o": [
      "215 kt",
      "230 kt",
      "200 kt",
      "185 kt"
    ],
    "a": 0,
    "w": "The maximum speed in CONF 1+F is 215 kt.",
    "ref": "FCOM LIM-AG-SPD · PDF pp.3686 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q295, PDF p.50",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S295",
      "status": "checked",
      "pdfPages": [
        3686
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 296,
    "p": 50,
    "c": "Limitations",
    "q": "Where is APU starting permitted in flight?",
    "o": [
      "Throughout the normal flight envelope",
      "Only below 25,000 ft",
      "Only below 20,000 ft",
      "Only below 15,000 ft"
    ],
    "a": 0,
    "w": "The current APU description permits starting throughout the normal flight envelope; the aircraft environmental envelope still governs.",
    "ref": "FCOM DSC-49-10-10-A, LIM-APU-20 · PDF pp.2184, 3719 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q296, PDF p.50",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S296",
      "status": "checked",
      "pdfPages": [
        2184,
        3719
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 297,
    "p": 51,
    "c": "Limitations",
    "q": "After three consecutive APU start attempts, how long must the crew wait?",
    "o": [
      "60 minutes",
      "30 minutes",
      "15 minutes",
      "No wait is required"
    ],
    "a": 0,
    "w": "A 60-minute wait is required before another APU start attempt.",
    "ref": "FCOM LIM-APU-10, LIM-APU, LIM-APU-20 · PDF pp.3718 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q297, PDF p.51",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S297",
      "status": "checked",
      "pdfPages": [
        3718
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 298,
    "p": 51,
    "c": "Limitations",
    "q": "What is the IAE V2500 maximum continuous engine-oil temperature?",
    "o": [
      "155 °C",
      "140 °C",
      "165 °C",
      "175 °C"
    ],
    "a": 0,
    "w": "The IAE continuous limit is 155 °C. The transient limit is 165 °C for 15 minutes.",
    "ref": "FCOM LIM-ENG · PDF pp.3737 · page revision 13 AUG 18 · IAE insert, A/C 20-IMHT · 13 AUG 2018 · FOR ENGINEERING USE ONLY · Guide Q298, PDF p.51",
    "review": "fcom-source-checked",
    "evidence": "oilContinuous",
    "revision": "fcom-audit-20260905",
    "verification": {
      "id": "S298",
      "status": "checked",
      "pdfPages": [
        3737
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    }
  },
  {
    "source": "A320 Student Study Questions",
    "n": 299,
    "p": 51,
    "c": "Limitations",
    "q": "What are the manoeuvring load limits with slats or flaps extended?",
    "o": [
      "0 g to +2.0 g",
      "-1.0 g to +2.5 g",
      "0 g to +2.5 g",
      "-1.0 g to +2.0 g"
    ],
    "a": 0,
    "w": "In a non-clean configuration the limit is 0 g to +2.0 g.",
    "ref": "FCOM LIM-AG-F_CTL · PDF pp.3680 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q299, PDF p.51",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S299",
      "status": "checked",
      "pdfPages": [
        3680
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 300,
    "p": 51,
    "c": "Limitations",
    "q": "What pause is required between successive IAE automatic or manual ground-start cycles?",
    "o": [
      "15 seconds",
      "20 seconds",
      "30 seconds",
      "60 seconds"
    ],
    "a": 0,
    "w": "The IAE limitation requires a 15-second pause between ground cycles.",
    "ref": "FCOM LIM-ENG, LIM-ENG-10-NG01725, LIM-ENG-10 · PDF pp.3738 · page revision 13 AUG 18 · IAE insert, A/C 20-IMHT · 13 AUG 2018 · FOR ENGINEERING USE ONLY · Guide Q300, PDF p.51",
    "review": "fcom-source-checked",
    "evidence": "starterPause",
    "revision": "fcom-audit-20260905",
    "verification": {
      "id": "S300",
      "status": "checked",
      "pdfPages": [
        3738
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    }
  },
  {
    "source": "A320 Student Study Questions",
    "n": 301,
    "p": 51,
    "c": "Limitations",
    "q": "What is the maximum altitude for APU-bleed air conditioning with one pack?",
    "o": [
      "22,500 ft",
      "15,000 ft",
      "20,000 ft",
      "25,000 ft"
    ],
    "a": 0,
    "w": "The single-pack limit is 22,500 ft; dual-pack operation is limited to 15,000 ft.",
    "ref": "FCOM LIM-APU-20 · PDF pp.3719 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q301, PDF p.51",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S301",
      "status": "checked",
      "pdfPages": [
        3719
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 302,
    "p": 51,
    "c": "Limitations",
    "q": "What is the maximum landing-gear retraction speed?",
    "o": [
      "220 kt",
      "250 kt",
      "230 kt",
      "280 kt"
    ],
    "a": 0,
    "w": "VLO retraction is 220 kt (M0.54).",
    "ref": "FCOM LIM-AG-SPD · PDF pp.3687 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q302, PDF p.51",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S302",
      "status": "checked",
      "pdfPages": [
        3687
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 303,
    "p": 51,
    "c": "MEL",
    "q": "Which statement about dispatch under an MEL is generally correct?",
    "o": [
      "An MEL rectification interval can impose a time limit",
      "Every inoperative item can remain indefinitely",
      "The MEL stops applying once doors close",
      "The MEL and CDL are the same document"
    ],
    "a": 0,
    "w": "MEL relief is commonly subject to a rectification interval. Always use the current operator MEL rather than this study aid.",
    "ref": "Current operator MEL not supplied; excluded from grading. · Guide Q303, PDF p.51",
    "review": "withheld",
    "verification": {
      "id": "S303",
      "status": "withheld",
      "pdfPages": [],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 304,
    "p": 52,
    "c": "MEL",
    "q": "What does an (O) procedure marker in an MEL item mean?",
    "o": [
      "An operational procedure is required",
      "An engineering order is required",
      "A performance penalty always applies",
      "No crew action is required"
    ],
    "a": 0,
    "w": "An (O) marker identifies an operational procedure. MEL conventions must be confirmed in the current operator MEL.",
    "ref": "Current operator MEL not supplied; excluded from grading. · Guide Q304, PDF p.52",
    "review": "withheld",
    "verification": {
      "id": "S304",
      "status": "withheld",
      "pdfPages": [],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 305,
    "p": 53,
    "c": "Miscellaneous",
    "q": "In flight above 100 kt, what normally follows simultaneous loss of AC BUS 1 and AC BUS 2?",
    "o": [
      "The RAT deploys automatically and the emergency generator supplies the essential network when output is available",
      "The RAT remains stowed and all buses stay normal",
      "Only the batteries supply every bus",
      "The APU starts automatically"
    ],
    "a": 0,
    "w": "For this A320 configuration, loss of both AC buses above 100 kt commands automatic RAT deployment; the emergency generator then supplies the essential network when available. Variant-dependent wording was removed.",
    "ref": "FCOM DSC-24-10-30-30 · PDF pp.1139, 1154 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q305, PDF p.53",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S305",
      "status": "checked",
      "pdfPages": [
        1139,
        1154
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 306,
    "p": 53,
    "c": "Miscellaneous",
    "q": "What does a fault light on the BAT 1 pushbutton mean?",
    "o": [
      "The battery is off.",
      "The battery is charging.",
      "Battery voltage drops below 25.5V.",
      "Battery-charging current is out of limits."
    ],
    "a": 3,
    "w": "Battery-charging current is out of limits. Guide Q306, PDF p.53.",
    "ref": "FCOM  · PDF pp.1150 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q306, PDF p.53",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S306",
      "status": "checked",
      "pdfPages": [
        1150
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 307,
    "p": 53,
    "c": "Miscellaneous",
    "q": "With neither pilot taking sidestick priority, what do flashing green CAPT/F/O priority lights and DUAL INPUT indicate?",
    "o": [
      "Both sidesticks are being moved simultaneously",
      "Both autopilots are engaged",
      "The flight directors are in independent mode",
      "Both radio altimeters have failed"
    ],
    "a": 0,
    "w": "Both pilots are applying simultaneous sidestick input. The source specifies both lights flashing and the DUAL INPUT aural indication; only one pilot should fly at a time.",
    "ref": "FCOM DSC-27-20-30 · PDF pp.1284, 1285 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q307, PDF p.53",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S307",
      "status": "corrected",
      "pdfPages": [
        1284,
        1285
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 308,
    "p": 53,
    "c": "Miscellaneous",
    "q": "Which flight-control law and mode are active during a normal takeoff roll?",
    "o": [
      "Normal Law, ground mode",
      "Alternate Law with protections",
      "Direct Law",
      "Mechanical backup"
    ],
    "a": 0,
    "w": "During the takeoff roll, the normal flight-control law is in ground mode before transitioning after liftoff.",
    "ref": "FCOM DSC-27-20-10-20 · PDF pp.1254 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q308, PDF p.53",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S308",
      "status": "checked",
      "pdfPages": [
        1254
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 309,
    "p": 53,
    "c": "Miscellaneous",
    "q": "In Normal Law flare mode, when does the pitch-reference nose-down reduction begin?",
    "o": [
      "Passing 30 ft RA",
      "Passing 50 ft RA",
      "At touchdown",
      "At 100 ft RA"
    ],
    "a": 0,
    "w": "The attitude is memorised at 50 ft RA; passing 30 ft RA, the reference begins reducing toward 2° nose down over 8 seconds.",
    "ref": "FCOM DSC-27-20-10-20, DSC-27-20-10-20-A · PDF pp.1256 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q309, PDF p.53",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S309",
      "status": "checked",
      "pdfPages": [
        1256
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 310,
    "p": 53,
    "c": "Miscellaneous",
    "q": "Which listed law requires manual pitch trim and displays USE MAN PITCH TRIM in amber?",
    "o": [
      "Direct Law",
      "Normal Law",
      "Alternate Law with protections",
      "Mechanical backup only"
    ],
    "a": 0,
    "w": "Direct Law has no automatic pitch trim and displays the amber message. The separately described abnormal-attitude law also displays it while autotrim is unavailable; the message alone is not a complete law diagnosis.",
    "ref": "FCOM DSC-27-20-20 · PDF pp.1276, 1277 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q310, PDF p.53",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S310",
      "status": "corrected",
      "pdfPages": [
        1276,
        1277
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 318,
    "p": 54,
    "c": "Miscellaneous",
    "q": "How is landing-gear gravity extension operated?",
    "o": [
      "Pull the handcrank and turn it clockwise three turns to the mechanical stop",
      "Turn the handcrank twice anticlockwise",
      "Use Yellow hydraulic pressure",
      "Select the gear lever down without using the handcrank"
    ],
    "a": 0,
    "w": "The handcrank is pulled and rotated clockwise three turns to the mechanical stop.",
    "ref": "FCOM DSC-32-10-40, PRO-ABN-LG · PDF pp.1568, 2966 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q318, PDF p.54",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S318",
      "status": "checked",
      "pdfPages": [
        1568,
        2966
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 319,
    "p": 54,
    "c": "Miscellaneous",
    "q": "After unrecovered Blue and Yellow hydraulic loss, with gear not already downlocked, what gear-extension method does the FCOM procedure call for?",
    "o": [
      "Lowered normally using the green system.",
      "Lowered using hydraulic pressure from the RAT.",
      "Lowered using the yellow system alternate extension line.",
      "Lowered using the emergency Gravity Extension system."
    ],
    "a": 3,
    "w": "Use gravity extension to preserve the remaining Green system integrity. If the hydraulic systems recover, follow the applicable procedure rather than treating gravity extension as unconditional.",
    "ref": "FCOM PRO-ABN-HYD-L · PDF pp.2946, 2947, 2948 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q319, PDF p.54",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S319",
      "status": "corrected",
      "pdfPages": [
        2946,
        2947,
        2948
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 320,
    "p": 54,
    "c": "Miscellaneous",
    "q": "During a rejected takeoff above 72 kt wheel speed, with ground spoilers and MAX autobrake armed and their systems available, what follows both thrust levers reaching IDLE?",
    "o": [
      "Ground spoilers extend and MAX autobrake activates",
      "Only manual braking is available",
      "Ground spoilers remain retracted until both reversers deploy",
      "Autobrake cannot activate above 72 kt"
    ],
    "a": 0,
    "w": "Ground spoilers extend and the extension command activates the armed MAX autobrake. Ground-spoiler arming alone does not arm MAX autobrake; its own arming and activation conditions must be satisfied.",
    "ref": "FCOM DSC-32-30-10-A, DSC-32-30-10-B · PDF pp.1245, 1581, 1582 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q320, PDF p.54",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S320",
      "status": "corrected",
      "pdfPages": [
        1245,
        1581,
        1582
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 321,
    "p": 54,
    "c": "Miscellaneous",
    "q": "In the supplied LOSS OF BRAKING procedure, what maximum pressure is specified after A/SKID is selected OFF?",
    "o": [
      "1,000 PSI",
      "500 PSI",
      "1,900 PSI",
      "3,000 PSI"
    ],
    "a": 0,
    "w": "MAX BRK PR is 1,000 PSI. Monitor the brake-pressure indicator; do not infer an automatic limiting function on a different brake-control standard.",
    "ref": "FCOM DSC-32-30-10-B, PRO-ABN-BRAKES · PDF pp.1584, 2576 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q321, PDF p.54",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S321",
      "status": "corrected",
      "pdfPages": [
        1584,
        2576
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  },
  {
    "source": "A320 Student Study Questions",
    "n": 322,
    "p": 54,
    "c": "Miscellaneous",
    "q": "Which three amber panel lights accompany an AVIONICS SMOKE detection?",
    "o": [
      "GEN 1 LINE SMOKE, VENT BLOWER FAULT and VENT EXTRACT FAULT",
      "Two engine FIRE lights and APU FIRE",
      "BAT 1 FAULT, BAT 2 FAULT and EMER GEN FAULT",
      "PACK 1 FAULT, PACK 2 FAULT and HOT AIR FAULT"
    ],
    "a": 0,
    "w": "Smoke detected in the avionics extraction duct triggers the ECAM alert plus GEN 1 LINE SMOKE, BLOWER FAULT and EXTRACT FAULT lights.",
    "ref": "FCOM DSC-26-30-10, DSC-26-30-20-A, DSC-26-30-20-B · PDF pp.1216, 1218, 1219 · page revision 22 MAY 24 · supplied training compilation; aircraft options must match · Guide Q322, PDF p.54",
    "review": "fcom-source-checked",
    "verification": {
      "id": "S322",
      "status": "checked",
      "pdfPages": [
        1216,
        1218,
        1219
      ],
      "sourceHash": "7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06"
    },
    "revision": "fcom-audit-20260905"
  }
];
