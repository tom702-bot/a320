/*
 * Systems Exam Prep sourced from the supplied A320 Student Study Questions.
 * Reconciled to AAT A320 FCOM A/C 21-CMHT, custom issue 16 MAR 2026
 * (Airbus content issue 22 MAY 2024). AAT YMML simulator scope: IAE V2500.
 * Guide numbering 311-317 is absent from the supplied PDF.
 */
window.SYSTEMS_EXAM_SOURCE = "A320 Student Study Questions · reconciled to AAT A320 FCOM 21-CMHT, custom issue 16 MAR 2026";
window.SYSTEMS_EXAM_TOPICS = [
  "General",
  "EIS",
  "Autoflight & FMGS",
  "Air & Pressurisation",
  "Ice & Rain",
  "Powerplant",
  "Fuel",
  "Navigation",
  "Lights, Doors & Oxygen",
  "APU",
  "Communications",
  "Electrical",
  "Fire Protection",
  "Hydraulics",
  "Flight Controls",
  "Landing Gear & Brakes",
  "Limitations",
  "MEL",
  "Miscellaneous"
];
window.SYSTEMS_EXAM_QUESTIONS = [
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-20-20, Aircraft General — Aircraft Description · Guide Q1, PDF p.2",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Outside Wingtip Guide Q2, PDF p.2.",
    "ref": "FCOM DSC-20, Aircraft General · Guide Q2, PDF p.2",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 3,
    "p": 2,
    "c": "EIS",
    "q": "In flight, when might the Status page appear:",
    "o": [
      "Only when the STATUS pushbutton on the ECP is pressed.",
      "Automatically after ECAM Messages and any Secondary Failure SDs have been 'CLR' ed.",
      "Automatically, when the Gear is extended.",
      "Whenever the RCL pushbutton is pressed (to Recall Aircraft Status)."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Automatically after ECAM Messages and any Secondary Failure SDs have been 'CLR' ed. Guide Q3, PDF p.2.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q3, PDF p.2",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Can be displayed on either ND using the ECAM/ND XFR Switch. Guide Q4, PDF p.2.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q4, PDF p.2",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Is shown on PFD 2 and ND 1. Guide Q5, PDF p.2.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q5, PDF p.2",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 6,
    "p": 2,
    "c": "EIS",
    "q": "On the PFD, Baro Altitude, normally Green, becomes Amber:",
    "o": [
      "At MDA.",
      "At 400' if no MDA is defined.",
      "At MDA+ 100.",
      "At DH + 100."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: At MDA. Guide Q6, PDF p.2.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q6, PDF p.2",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 7,
    "p": 3,
    "c": "EIS",
    "q": "How is an inactive primary route shown on the Navigation Display?",
    "o": [
      "Dashed green",
      "Solid green",
      "Dashed yellow",
      "Solid blue"
    ],
    "a": 0,
    "w": "An inactive primary route is shown as a dashed green line.",
    "ref": "FCOM DSC-31-45, Navigation Display · Guide Q7, PDF p.3",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: ECAM System Display Indications will be normal. Guide Q8, PDF p.3.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q8, PDF p.3",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Two FWCs to generate Red Warning / Amber Caution Lights and Aurals. Guide Q9, PDF p.3.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q9, PDF p.3",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Fault Messages and/or Memos on the E/WD. Guide Q10, PDF p.3.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q10, PDF p.3",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: CLR, RCL, STS, EMERG CANC and ALL pushbutton switches remain operative. Guide Q11, PDF p.3.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q11, PDF p.3",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-31-40, PFD Speed Scale · Guide Q12, PDF p.3",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "The current FCOM specifies a difference of more than 5° between the heading data displayed on both PFDs and NDs.",
    "ref": "FCOM DSC-31-05-60, Side 1/Side 2 Discrepancy Messages · Guide Q13, PDF p.3",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-31-45, Navigation Display · Guide Q14, PDF p.4",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: On both PFDs provided at least one RA is operative. Guide Q15, PDF p.4.",
    "ref": "FCOM DSC-31, Indicating and Recording Systems · Guide Q15, PDF p.4",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-31-40, PFD Altitude Scale · Guide Q16, PDF p.4",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 17,
    "p": 4,
    "c": "EIS",
    "q": "Which Navigation Display route-style statement is correct?",
    "o": [
      "The active flight-plan route is solid green and an inactive diversion is dashed blue",
      "The active route is solid blue and the missed approach is green",
      "The secondary flight plan is dashed yellow",
      "Only the active route can be displayed"
    ],
    "a": 0,
    "w": "The active flight-plan route is solid green; an inactive diversion route is dashed blue.",
    "ref": "FCOM DSC-31-45, Navigation Display · Guide Q17, PDF p.4",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 18,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "The FMGS will calculate an appropriate Managed Speed for each moment of Flight:",
    "o": [
      "In climb, Cruise, Descent or Approach you may use Selected or Managed Speed as you wish.",
      "Managed Speed may only be used when CLB, ALT CRZ and DES modes are engaged.",
      "If Vertical Path is Selected (.e. OP CLB, OP DES, VS, FPA), Selected Speed must be used.",
      "Managed Approach Speed is only available following arming of the App pushbutton."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: In climb, Cruise, Descent or Approach you may use Selected or Managed Speed as you wish. Guide Q18, PDF p.5.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q18, PDF p.5",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 19,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "On takeoff (and on the runway) with the thrust levers in TOGA, what will be displayed on the first line of the FMA when departing from an ILS equipped runway?",
    "o": [
      "THR TOGA-CLB-RWY.",
      "THR TOGA- — SRS- — HDG.",
      "MAN TOGA- SRS - RWY.",
      "MAN TOGA - SRS — NAV."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: MAN TOGA- SRS - RWY. Guide Q19, PDF p.5.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q19, PDF p.5",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 20,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "On the departure there is an altitude constraint of 5000 feet at a waypoint 20 miles ahead. The FCU target altitude is set to 7000 feet, and the FCU Altitude pushbutton pushed. What indications do you expect to see on the top line of the FMA?",
    "o": [
      "CLB (green) becoming ALT* (magenta) becoming ALT (magenta).",
      "CLB (green) becoming ALT CST* (green) becoming ALT CSTR (green).",
      "OP CLB (green) becoming ALT* (green) becoming ALT (green).",
      "CLB (magenta) becoming ALT* (green) becoming ALT CSTR (green)."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: CLB (green) becoming ALT CST* (green) becoming ALT CSTR (green). Guide Q20, PDF p.5.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q20, PDF p.5",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 21,
    "p": 5,
    "c": "Autoflight & FMGS",
    "q": "How is the Climb Phase activated?",
    "o": [
      "Thrust levers set to the CLB detent at Thrust Reduction Altitude.",
      "By selecting the Climb Phase in the MCDU.",
      "Automatically on reaching the Acceleration Altitude.",
      "With first Climb after Initial Level Out on SID."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Automatically on reaching the Acceleration Altitude. Guide Q21, PDF p.5.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q21, PDF p.5",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The aircraft is in CLB and will observe the Altitude Constraint of 6000'. Guide Q22, PDF p.5.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q22, PDF p.5",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Amber Star next to Predicted Altitude on the F/PLN page. Guide Q23, PDF p.5.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q23, PDF p.5",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 24,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "You are maintaining 3000'. ATC gives you a Radar Vector to the localizer and Clear you for an ILS Approach and the appropriate action is taken. What will be displayed on the FMA? The aircraft will join the Localiser at 12 miles.",
    "o": [
      "G/S (green) / LOC (green).",
      "ALT (green) G/S (blue) / HDG (green) LOC (blue).",
      "G/S (blue) / LOC (blue) only.",
      "GS (blue) until on LLZ then G/S (green) / LOC (green) only."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: ALT (green) G/S (blue) / HDG (green) LOC (blue). Guide Q24, PDF p.6.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q24, PDF p.6",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "NAV can re-engage when the aircraft track will intercept the active leg between the FROM and TO waypoints; non-sequenced waypoints may need to be cleared first.",
    "ref": "FCOM DSC-22_30-40-30-20, NAV Mode — Engagement Conditions · Guide Q25, PDF p.6",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: FD2 is switched OFF. Guide Q26, PDF p.6.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q26, PDF p.6",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 27,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "Following a Standard Autopilot disconnect:",
    "o": [
      "Only an AP OFF Memo (in Red) is shown.",
      "Aural and Visual Warnings must be cancelled using the Master Warning Light pushbutton.",
      "Warnings must be cancelled using the Takeover / AP Disconnect pushbutton again.",
      "Master Warnings Indications and ECAM Red MEMO will self cancel after a few seconds."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Master Warnings Indications and ECAM Red MEMO will self cancel after a few seconds. Guide Q27, PDF p.6.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q27, PDF p.6",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 28,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "With both engines operating and AP or FD on, which autothrust statements are correct?",
    "o": [
      "A/THR can be active with levers at or below CLB, its mode follows pitch guidance, and thrust is limited by lever position",
      "A/THR is available only with the autopilot engaged",
      "A/THR always commands TOGA",
      "Thrust-lever position never limits commanded thrust"
    ],
    "a": 0,
    "w": "All three relationships in the first option are described by the autothrust logic.",
    "ref": "FCOM DSC-22-30-90, Autothrust · Guide Q28, PDF p.6",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 29,
    "p": 6,
    "c": "Autoflight & FMGS",
    "q": "Turning the Flight Directors off in Automatic flight:",
    "o": [
      "Causes the Flight Director display to disappear.",
      "Causes the Auto Thrust to disengage.",
      "Causes the Auto Thrust to switch to Speed Mode.",
      "Causes the Autopilot to disengage."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Causes the Flight Director display to disappear. Guide Q29, PDF p.6.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q29, PDF p.6",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_30-50-50, ALPHA FLOOR · Guide Q30, PDF p.7",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Press the DIR TO pushbutton, select or define the Waypoint. Guide Q31, PDF p.7.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q31, PDF p.7",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 32,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "The Aircraft is Approaching FMGS Top of Descent:",
    "o": [
      "In Managed Vertical Path, aircraft will descend automatically at Top of Descent point.",
      "Provided FCU Altitude is set below the aircraft, descent will commence at the Top of Descent point.",
      "If the Top of Descent Point is overflown without Descent, the aircraft will decelerate.",
      "At the ToD Point, DECELERATE will be displayed on the PFD and the MCDU A Lower Altitude should be set in the FCU and then the Altitude Selector Pulled or Pushed."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: At the ToD Point, DECELERATE will be displayed on the PFD and the MCDU A Lower Altitude should be set in the FCU and then the Altitude Selector Pulled or Pushed. Guide Q32, PDF p.7.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q32, PDF p.7",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: THRIDLE/ OP DES. Guide Q33, PDF p.7.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q33, PDF p.7",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 34,
    "p": 7,
    "c": "Autoflight & FMGS",
    "q": "Aircraft weight and CG data is entered on:",
    "o": [
      "INIT Page B.",
      "INIT Page A.",
      "TO PERF page.",
      "PROG page."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: INIT Page B. Guide Q34, PDF p.7.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q34, PDF p.7",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: PROG. Guide Q35, PDF p.7.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q35, PDF p.7",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The Managed Target Speed will be appropriate to the aircraft configuration. Guide Q36, PDF p.7.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q36, PDF p.7",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: There is a Magenta Target Speed on the PFD. Guide Q37, PDF p.8.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q37, PDF p.8",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 38,
    "p": 8,
    "c": "Autoflight & FMGS",
    "q": "On takeoff with the thrust levers in FLEX, what will be displayed in the FMA on Takeoff (ILS available)?",
    "o": [
      "THR TOGA -CLB - RWY.",
      "THR TOGA — SRS- HDG.",
      "MAN FLEX — SRS — RWY.",
      "MAN TOGA — SRS — NAV."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: MAN FLEX — SRS — RWY. Guide Q38, PDF p.8.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q38, PDF p.8",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_30-40, Vertical Modes · Guide Q39, PDF p.8",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: 6 Guide Q40, PDF p.8.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q40, PDF p.8",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The aircraft is in DES and will observe the Altitude Constraint of 8000. Guide Q41, PDF p.8.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q41, PDF p.8",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Amber Circle around the Waypoint. Guide Q42, PDF p.8.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q42, PDF p.8",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 43,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "You are level at 3000' on the Localiser, cleared for further descent on the GS. What will be displayed on the FMA.",
    "o": [
      "SPEED (Green) / G/S (Green) / LOC (Green).",
      "SPEED (Green) / ALT (Green) + G/S (Blue) / LOC (Green).",
      "SPEED (Green) / G/S (Blue) / LOC (Blue).",
      "SPEED (Green) / ALT (Green) + G/S Blue / HDG (Green)."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: SPEED (Green) / ALT (Green) + G/S (Blue) / LOC (Green). Guide Q43, PDF p.9.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q43, PDF p.9",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 44,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "Following Radar Vectors, ATC instruct us to route direct to waypoint XYZ.",
    "o": [
      "Press the FCU Heading/TRK pushbutton then use the MCDU DIR TO pushbutton.",
      "Use the DIR TO pushbutton then press the FCU Heading/Track pushbutton.",
      "Ensure that the current Track Line crosses XYZ, then use DIR TO pushbutton.",
      "Use the DIR TO pushbutton only."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Use the DIR TO pushbutton only. Guide Q44, PDF p.9.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q44, PDF p.9",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: FD1 is INOP but FD2 will drive the Flight Director Bars on PFD1 Guide Q45, PDF p.9.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q45, PDF p.9",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 46,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "Following a non-Standard A/P disconnect:",
    "o": [
      "Only an AP OFF Memo (in Red) is shown.",
      "Use the Master Warning pushbutton to cancel Master Warning Attention Getters and the CLR pushbutton to cancel the ECAM Message.",
      "Warnings must be cancelled using the Takeover / AP Disconnect pushbutton.",
      "Master Warnings Indications and ECAM Red MEMO will self cancel after a few seconds."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Use the Master Warning pushbutton to cancel Master Warning Attention Getters and the CLR pushbutton to cancel the ECAM Message. Guide Q46, PDF p.9.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q46, PDF p.9",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 47,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "Which statement about two-engine A/THR operation with AP or FD on is false?",
    "o": [
      "A/THR mode is independent of the active pitch mode",
      "A/THR may be active with levers between IDLE and CLB",
      "The thrust-lever position limits available thrust",
      "A/THR mode is coordinated with pitch guidance"
    ],
    "a": 0,
    "w": "Autothrust mode is coordinated with the active pitch mode; it is not independent of it.",
    "ref": "FCOM DSC-22-30-90, Autothrust · Guide Q47, PDF p.9",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 48,
    "p": 9,
    "c": "Autoflight & FMGS",
    "q": "In Flight, FDs are ON and AP is engaged. Turning the AP off:",
    "o": [
      "Has no effect on the FD or A/THR system.",
      "Causes the A/THR to switch to SPEED Mode.",
      "Causes the A/THR to switch to SPEED Mode and the FDs to switch to Basic Modes (TRK/FPA or HDG/VS).",
      "Causes the FDs to disengage also."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Has no effect on the FD or A/THR system. Guide Q48, PDF p.9.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q48, PDF p.9",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_30-50-50, ALPHA FLOOR / TOGA LK · Guide Q49, PDF p.10",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 50,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "Which of the following A/THR and Pitch Channel mode combinations are not possible?",
    "o": [
      "THRCLB/CLB.",
      "TOGA/SRS.",
      "SPEED/CLB.",
      "SPEED/VS."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: SPEED/CLB. Guide Q50, PDF p.10.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q50, PDF p.10",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Co Route or ICAO City Pair; Cruise Altitude; Cost Index. Guide Q51, PDF p.10.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q51, PDF p.10",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: THRCLB-OPCLB-HDG. Guide Q52, PDF p.10.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q52, PDF p.10",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 53,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "The normal mode of FMGC operation is:",
    "o": [
      "Single mode.",
      "Independent mode.",
      "Dual mode.",
      "None of the Above."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Dual mode. Guide Q53, PDF p.10.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q53, PDF p.10",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_20-30, Flight Phases · Guide Q54, PDF p.10",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 55,
    "p": 10,
    "c": "Autoflight & FMGS",
    "q": "When a managed descent is initiated prior to the Top of Descent pseudo waypoint (TOD) the vertical speed attained in descent until intercepting the vertical path is:",
    "o": [
      "-1500 fpm.",
      "-2000 fpm.",
      "-1200 fpm.",
      "-1000 fpm."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: -1000 fpm. Guide Q55, PDF p.10.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q55, PDF p.10",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_30-40-50, ALT* Mode · Guide Q56, PDF p.11",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 57,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "We were flight planned at FL310. ATC informs us that our final cruise will be our present altitude of FL290. The FMGC will:",
    "o": [
      "Transition to CRZ Phase at FL290.",
      "Transition to CRZ Phase after 2 minutes at FL290.",
      "Remain in CLB mode but Soft Alt will become active after 2 minutes.",
      "Remain in Climb phase."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Remain in Climb phase. Guide Q57, PDF p.11.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q57, PDF p.11",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_20-20-10, Position Computation — Navigation Modes · Guide Q58, PDF p.11",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 59,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "The PERF CLB page has a SPEED field defined by a pair of Blue Square Brackets [__]. Before Takeoff, for what reason may a speed be entered here.",
    "o": [
      "To preset a Selected Target Speed, which will become active above acceleration altitude.",
      "To redefine the managed ECON Climb Speed.",
      "To cancel the '250 kt below FL100' Speed Control.",
      "To set a default climb in case of FMGC failure."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: To preset a Selected Target Speed, which will become active above acceleration altitude. Guide Q59, PDF p.11.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q59, PDF p.11",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "The terrain-avoidance manoeuvre uses immediate manual pitch and maximum available thrust, with speedbrakes retracted and bank managed for terrain clearance.",
    "ref": "FCOM PRO-ABN-SURV [QRH], EGPWS PULL UP Warning · Guide Q60, PDF p.11",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 61,
    "p": 11,
    "c": "Autoflight & FMGS",
    "q": "After a missed approach how do you change the FMGCs from GA Phase to Climb Phase?",
    "o": [
      "Select Climb Phase on your MCDU.",
      "Change the destination by Lateral Modification, Enabling the Alternate or Activating the Secondary Flight Plan.",
      "Climb Phase becomes Active automatically at Missed Approach Acceleration Altitude",
      "Activate the Approach phase."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Change the destination by Lateral Modification, Enabling the Alternate or Activating the Secondary Flight Plan. Guide Q61, PDF p.11.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q61, PDF p.11",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 62,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "What is a pseudo waypoint?",
    "o": [
      "A Point where the Managed Speed Target changes.",
      "Top of Climb or Top of Descent.",
      "A Point where Descent is required to stay on the Profile.",
      "Any of the above."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Any of the above. Guide Q62, PDF p.12.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q62, PDF p.12",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 63,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "How and when, does the Auto thrust system become active on takeoff (two engines)?",
    "o": [
      "Manually when TLA set in FLEX or TOGA.",
      "Manually when TLA set in CLB detent.",
      "Automatically, at Thrust Reduction Altitude.",
      "Manually when TLA set in CLB detent, provided Acceleration altitude has been reached."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Manually when TLA set in CLB detent. Guide Q63, PDF p.12.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q63, PDF p.12",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 64,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "During a two-engine missed approach the FMA indicates SRS. Vertical Guidance is:",
    "o": [
      "Climb at V2 + 10",
      "Maintain the Speed existing at GA Initiation.",
      "Maintain VAPP / Speed at GA Initiation (whichever is lower, to get a better Climb Angle) to Go around Thrust Reduction Altitude.",
      "Maintain VAPP / Speed at GA Initiation (whichever higher) until Missed Approach acceleration altitude is reached."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Maintain VAPP / Speed at GA Initiation (whichever higher) until Missed Approach acceleration altitude is reached. Guide Q64, PDF p.12.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q64, PDF p.12",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 65,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "Pressing \"IMM EXIT\" while in a hold causes the aircraft to:",
    "o": [
      "Complete the present holding pattern.",
      "Return to the holding fix immediately.",
      "Clear the hold and maintain present heading.",
      "Proceed directly enroute."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Return to the holding fix immediately. Guide Q65, PDF p.12.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q65, PDF p.12",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: FMGC1 is supplying both FDs. Guide Q66, PDF p.12.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q66, PDF p.12",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 67,
    "p": 12,
    "c": "Autoflight & FMGS",
    "q": "LAND in green will appear on the FMA at:",
    "o": [
      "400' AGL.",
      "300' AGL.",
      "350' AGL.",
      "450' AGL."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: 400' AGL. Guide Q67, PDF p.12.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q67, PDF p.12",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 68,
    "p": 13,
    "c": "Autoflight & FMGS",
    "q": "AP is Engaged and a VS of +5000 fpm has been selected, with a target speed of 250 kt. Indicated airspeed reduces until it reaches VLS. What will happen next?",
    "o": [
      "Auto thrust Alpha Floor Mode will activate.",
      "There will be an FMGS Mode Reversion. The AP temporarily abandons the V/S target and automatically decreases the vertical speed to maintain VLS.",
      "AP will disengage and Normal Law Low Speed Protection will activate, with Alpha Floor A/THR engagement.",
      "There will be an Auto callout of \"SPEED SPEED SPEED\"."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: There will be an FMGS Mode Reversion. The AP temporarily abandons the V/S target and automatically decreases the vertical speed to maintain VLS. Guide Q68, PDF p.13.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q68, PDF p.13",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: PROG. Guide Q69, PDF p.13.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q69, PDF p.13",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 70,
    "p": 13,
    "c": "Autoflight & FMGS",
    "q": "During a missed approach the FMA indicates GA TRK. What does this mean?",
    "o": [
      "The lateral guidance is managed and following the data base missed approach track.",
      "The lateral guidance is selected to the runway track.",
      "The lateral guidance is selected but following the data base missed approach track",
      "The lateral guidance is maintaining the track present when the TLA was selected to TOGA."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: The lateral guidance is maintaining the track present when the TLA was selected to TOGA. Guide Q70, PDF p.13.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q70, PDF p.13",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: A managed Holding Speed is available. Guide Q71, PDF p.13.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q71, PDF p.13",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: For a Database Hold, review and then accept or change Hold parameters. Guide Q72, PDF p.13.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q72, PDF p.13",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: When the Go - Around Phase becomes active. Guide Q73, PDF p.13.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q73, PDF p.13",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: In Independent mode, MCDU 1 controls FMGC1 and MCDU2 controls FMGC2. Guide Q74, PDF p.14.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q74, PDF p.14",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 75,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "The Cost Index varies:",
    "o": [
      "From 0 — 999; 0 will give the shortest flight time.",
      "From 0 — 200; 0 will give the least fuel burn.",
      "From 0 - 999; 0 will give the least fuel burn.",
      "From 0 — 99; 0 will give the shortest flight time."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: From 0 - 999; 0 will give the least fuel burn. Guide Q75, PDF p.14.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q75, PDF p.14",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 76,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "FMGC Cruise Altitude:",
    "o": [
      "Should be less than OPT ALT as shown on the Progress page.",
      "Should be less than REC MAX as shown on the Progress page.",
      "Should be less than REC MAX as shown on the Cruise Performance page.",
      "Must be updated if planned Cruise Alt is increased."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Should be less than REC MAX as shown on the Progress page. Guide Q76, PDF p.14.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q76, PDF p.14",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Company Route or FROM/ TO Airfields, Flight Nr, Cost Index, Cruise Alt. Guide Q77, PDF p.14.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q77, PDF p.14",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_20-30, F-PLN Lateral Revisions · Guide Q78, PDF p.14",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Vertical revisions are made either directly onto the page or through a Vertical Revision page. Guide Q79, PDF p.14.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q79, PDF p.14",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 80,
    "p": 14,
    "c": "Autoflight & FMGS",
    "q": "The FMGCs compute their Position:",
    "o": [
      "Directly from the IRs",
      "Primarily from the IRs; Radio Nav data is used when IR Ground Speed Error exceeds 5 kt.",
      "From Radio Nav data; when Radio Nav data is unavailable, IR position is used directly.",
      "The FMGCs continuously compute the vector between IR and Radio positions, and, when Radio Position is not available, add the latest such vector to IR Position to establish FMGC position."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: The FMGCs continuously compute the vector between IR and Radio positions, and, when Radio Position is not available, add the latest such vector to IR Position to establish FMGC position. Guide Q80, PDF p.14.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q80, PDF p.14",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: A Copy of the Approach Procedure (with associated Missed Approach Procedure) is added to the end of the Active Flight Plan. Guide Q81, PDF p.15.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q81, PDF p.15",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 82,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "After Takeoff or Go-Around:",
    "o": [
      "A/THR becomes Active automatically at the Acceleration Altitude.",
      "A/THR becomes Active when the Thrust Levers are set to MCT.",
      "A/THR becomes Active automatically at the Thrust Reduction Altitude.",
      "With one engine inoperative, A/THR becomes active when the Thrust Lever of the Operating Engine is set to MCT."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: With one engine inoperative, A/THR becomes active when the Thrust Lever of the Operating Engine is set to MCT. Guide Q82, PDF p.15.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q82, PDF p.15",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 83,
    "p": 15,
    "c": "Autoflight & FMGS",
    "q": "In Manual Flight, both FDs are switched OFF. Later - they are switched back ON.",
    "o": [
      "The FDs will engage in whichever mode was previously in use.",
      "The FDs will engage in HDG and ALT modes.",
      "The FDs will always engage in VS and HDG mode (Basic Modes).",
      "If the FPV is displayed, the FPD will engage in TRK and FPA modes."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: If the FPV is displayed, the FPD will engage in TRK and FPA modes. Guide Q83, PDF p.15.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q83, PDF p.15",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_30-40-50, Altitude Modes · Guide Q84, PDF p.15",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-22_30-40-30, NAV Mode — Engagement Conditions · Guide Q85, PDF p.15",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: A second autopilot has been engaged within the last few seconds. Guide Q86, PDF p.15.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q86, PDF p.15",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: An immediate level off is commanded. Guide Q87, PDF p.15.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q87, PDF p.15",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: If a Heading is preset before Takeoff, it will not be cancelled after 45 seconds. Guide Q88, PDF p.16.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q88, PDF p.16",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Automatically at 30 feet RA after take-off when previously armed. Guide Q89, PDF p.16.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q89, PDF p.16",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 90,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "LAND mode will engage:",
    "o": [
      "At MDA + 400",
      "At 400' Radio (ILS Approaches only)",
      "At 400' Radio on all Automatically flown Approaches.",
      "At 400' ams! only if both APs are engaged."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: At 400' Radio (ILS Approaches only) Guide Q90, PDF p.16.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q90, PDF p.16",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: By the A/THR light on the FCU, and on the FMA. Guide Q91, PDF p.16.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q91, PDF p.16",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 92,
    "p": 16,
    "c": "Autoflight & FMGS",
    "q": "FMGS SRS Mode is:",
    "o": [
      "For a Normal Take Off, V2 + 10 in Pitch, Wings level.",
      "Following an Engine Failure on Take Off, the speed at which the failure occurred, subject to minimum V2, maximum — F Speed + 20 kt.",
      "Following a 2 engine Missed Approach, Vref + 10, maintain Runway Track.",
      "Active until Acceleration Altitude (or, for a low initial level-off, until ALT* becomes active)."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Active until Acceleration Altitude (or, for a low initial level-off, until ALT* becomes active). Guide Q92, PDF p.16.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q92, PDF p.16",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Solid blue Guide Q93, PDF p.16.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q93, PDF p.16",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The VORs are those that may be displayed on the NDs / DDRMI. They may have been Automatically or Manually tuned. Guide Q94, PDF p.16.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q94, PDF p.16",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 95,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "Cost index:",
    "o": [
      "Varies between 0 and 200, 0 giving a low speed and 200 a high speed.",
      "A cost index of 30 gives a higher speed than a cost index of 60.",
      "A cost index of 30 gives a lower speed than a cost index of 60.",
      "Must be changed if Planned Cruise Altitude is changed."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: A cost index of 30 gives a lower speed than a cost index of 60. Guide Q95, PDF p.17.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q95, PDF p.17",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 96,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "FMGC CRZ Altitude:",
    "o": [
      "Once set, cannot be changed.",
      "Is entered on INIT Page B.",
      "Will be automatically increased if achieved Final Altitude is higher than CRZ Altitude.",
      "Will be automatically decreased if Top of Climb is below planned CRZ Alt."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Will be automatically increased if achieved Final Altitude is higher than CRZ Altitude. Guide Q96, PDF p.17.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q96, PDF p.17",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: ZFW CG, ZFW, Fuel Loaded. Guide Q97, PDF p.17.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q97, PDF p.17",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 98,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "When a Route Discontinuity is reached:",
    "o": [
      "The Autopilot and FD disengage.",
      "DIR TO is the only way to regain Managed Navigation.",
      "Lateral mode will become HDG: FD Roll and Pitch Bars will Flash for 10 seconds.",
      "CLB mode, if engaged, will revert to OP CLB."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: CLB mode, if engaged, will revert to OP CLB. Guide Q98, PDF p.17.",
    "ref": "FCOM DSC-22, Auto Flight · Guide Q98, PDF p.17",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 99,
    "p": 17,
    "c": "Autoflight & FMGS",
    "q": "Which entries are made on the PERF APPR page for approach-speed computation?",
    "o": [
      "Landing configuration, QNH, surface temperature and tower wind",
      "Runway heading, transition altitude, tropopause and ISA deviation",
      "Only QNH and landing configuration",
      "Pack configuration, anti-ice selection and runway slope"
    ],
    "a": 0,
    "w": "The PERF APPR page uses the landing configuration, QNH, surface temperature and tower wind among its approach inputs.",
    "ref": "FCOM DSC-22_20-30, PERF APPR Page · Guide Q99, PDF p.17",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 100,
    "p": 17,
    "c": "Air & Pressurisation",
    "q": "With both engines and the APU running and the APU Bleed on, will the APU supply Bleed Air to both Packs?",
    "o": [
      "Yes",
      "No",
      "Only if the X Bleed Valve is Selected OPEN.",
      "Only if Engine Bleed Pressure is Low."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Yes Guide Q100, PDF p.17.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q100, PDF p.17",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 101,
    "p": 17,
    "c": "Air & Pressurisation",
    "q": "With APU and Engines Running and APU Bleed Switch ON, a Leak is detected from the Left Pneumatic Ducting.",
    "o": [
      "Select APU Bleed and Left Engine Bleed OFF and Close the Crossbleed valve.",
      "APU Bleed, Left Engine Bleed and crossbleed valve will close.",
      "APU Bleed and Crossbleed valve will close; Left Engine Bleed valve will remain Closed.",
      "Switch off the APU, but open the Crossbleed to maintain two pack operation."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: APU Bleed and Crossbleed valve will close; Left Engine Bleed valve will remain Closed. Guide Q101, PDF p.17.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q101, PDF p.17",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 102,
    "p": 18,
    "c": "Air & Pressurisation",
    "q": "Pneumatic Air from the Engines is:",
    "o": [
      "From the |P Compressor, supplemented from the HP Compressor at low Engine speeds.",
      "Is Pressure Regulated by the Bleed valve to approx 45 psi.",
      "Is Pre-cooled by Fan Air to approx 200°C.",
      "All of the above"
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: All of the above Guide Q102, PDF p.18.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q102, PDF p.18",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The Cross Bleed Valve Auto Position is always over-ridden by manual SHUT or OPEN selections. Guide Q103, PDF p.18.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q103, PDF p.18",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 104,
    "p": 18,
    "c": "Air & Pressurisation",
    "q": "On the ECAM BLEED page:",
    "o": [
      "There is an indication of ENG ANTI ICE bleed source temperature and pressure.",
      "WING ANTI ICE system is always displayed: ON or OFF.",
      "When APU BLEED pushbutton ON and the APU running, the APU Bleed Valve and Crossbleed valve will be indicated open, and both Engine Bleed Valves will be indicated closed.",
      "Anamber HP valve symbol means HP bleed available, but not used."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: When APU BLEED pushbutton ON and the APU running, the APU Bleed Valve and Crossbleed valve will be indicated open, and both Engine Bleed Valves will be indicated closed. Guide Q104, PDF p.18.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q104, PDF p.18",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Single pack operation or APU supplying bleed air. Guide Q105, PDF p.19.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q105, PDF p.19",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Following loss of both Packs, to remove smoke or for ventilation. Guide Q106, PDF p.19.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q106, PDF p.19",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The Packs will operate in ALTN mode and maintain both Flight deck and Cabin at 24°C. Guide Q107, PDF p.19.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q107, PDF p.19",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: It is controlled within a defined temperature range by a pack internal mechanism. Guide Q108, PDF p.19.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q108, PDF p.19",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 109,
    "p": 19,
    "c": "Air & Pressurisation",
    "q": "If one Cabin Pressure Controller or CPC has failed, but the other has not taken over what can be done?",
    "o": [
      "Nothing; CPCs will change over automatically 70 seconds after landing.",
      "Select CABIN PRESS MODE SEL pushbutton to MAN for 10 sec, then back to AUTO to force CPCs changeover.",
      "Briefly select the MANUAL Landing Elevation Selector out of the AUTO detent to force CPC changeover.",
      "Either B or C."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Select CABIN PRESS MODE SEL pushbutton to MAN for 10 sec, then back to AUTO to force CPCs changeover. Guide Q109, PDF p.19.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q109, PDF p.19",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Select the Cabin Pressure MODE SEL pushbutton to MAN and then use the VS toggle switch to directly adjust the Outflow Valve position. Guide Q110, PDF p.19.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q110, PDF p.19",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 111,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "During Cold Weather Operations, how would you expect the Avionics Ventilation System to be Configured?",
    "o": [
      "On Ground: OPEN: In Flight: Intermediate.",
      "On Ground: CLOSED: In Flight: CLOSED.",
      "On Ground: OPEN: In Flight: CLOSED.",
      "On Ground: CLOSED: In Flight: CLOSED with added Air-conditioning Air"
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: On Ground: CLOSED: In Flight: CLOSED. Guide Q111, PDF p.20.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q111, PDF p.20",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 112,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "Once all zones are at the required temperatures, Packs supply Air as follows:",
    "o": [
      "Pack 1 at Selected Temperature for Flight Deck, Pack 2 at average of Selected Cabin Zone Temps.",
      "Both Packs at the Average of all 3 selected zone temps.",
      "Pack 1 at Selected Temperature for Flight Deck, Pack 2 at colder of Selected Cabin Zone Temps.",
      "Both Packs at the coldest of all 3 Selected zone temps. Trim Air is added to the supply to any zones with warmer selections"
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Both Packs at the coldest of all 3 Selected zone temps. Trim Air is added to the supply to any zones with warmer selections Guide Q112, PDF p.20.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q112, PDF p.20",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The other CPC will continue to control the pressurisation automatically. Guide Q113, PDF p.20.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q113, PDF p.20",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 114,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "Emergency Ram Air may be used:",
    "o": [
      "To maintain Ventilation rate if a Pack has failed.",
      "At any time if Smoke Clearance is required.",
      "Only if differential pressure < 1 psi.",
      "If the Outflow valve has failed closed."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Only if differential pressure < 1 psi. Guide Q114, PDF p.20.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q114, PDF p.20",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 115,
    "p": 20,
    "c": "Air & Pressurisation",
    "q": "In Flight, the Avionics Ventilation System is in which Configuration?",
    "o": [
      "Closed.",
      "Closed, but Intermediate if the Skin Temperature is very High (>35°C).",
      "Closed, but intermediate if the Skin Temperature is Low. (<9°C)",
      "Closed, but Open if the Skin Temperature is very High (>35°C)."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Closed, but Intermediate if the Skin Temperature is very High (>35°C). Guide Q115, PDF p.20.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q115, PDF p.20",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: One Zone Controller and two Pack Controllers Guide Q116, PDF p.20.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q116, PDF p.20",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The Secondary channel operates as back-up. Pack flow rate remains fixed at the previous setting. Guide Q117, PDF p.20.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q117, PDF p.20",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-21-10-30, Air Conditioning Controls · Guide Q118, PDF p.21",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Pack 2 operates at 120% of NORMAL automatically. Guide Q119, PDF p.21.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q119, PDF p.21",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Two Cabin Pressure Controllers one Outflow Valve and two Safety Valves. Guide Q120, PDF p.21.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q120, PDF p.21",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-21-20-20, Pressurisation System Operation · Guide Q121, PDF p.21",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 122,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "On the Descent:",
    "o": [
      "Set the Manual Landing Elevation Selector to Landing Elevation.",
      "If Pressurisation is in Manual Mode, set the Man Landing Elevation Selector to Landing Elevation.",
      "The active CPC uses FMGC Landing Airfield Elevation to control Repressurisation.",
      "Set Pack Flow rate to HI to ensure adequate air is available for Repressurisation."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: The active CPC uses FMGC Landing Airfield Elevation to control Repressurisation. Guide Q122, PDF p.21.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q122, PDF p.21",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 123,
    "p": 21,
    "c": "Air & Pressurisation",
    "q": "The Cabin Pressurisation is in Manual mode and the Ditching push-button is pushed. Which of the following will Close (if Open)? P \"Which",
    "o": [
      "Emergency Ram-air inlet, Avionics Ventilation Inlet and Extract Valves, and the Pack Valves.",
      "The Outflow Valve and the Avionics Ventilation Inlet and Extract Valves, APU Bleed, and Engine Bleeds.:",
      "Avionics Ventilation Inlet and Extract Valves, Emergency Ram air Inlet and the Pack Valves the Outflow Valve, and Safety Valves. '",
      "Emergency Ram-air Inlet and the Pack Flow Control Valves only."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Emergency Ram-air inlet, Avionics Ventilation Inlet and Extract Valves, and the Pack Valves. Guide Q123, PDF p.21.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q123, PDF p.21",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Intermediate configuration. Guide Q124, PDF p.21.",
    "ref": "FCOM DSC-21 / DSC-36, Air Conditioning and Pneumatics · Guide Q124, PDF p.21",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 125,
    "p": 22,
    "c": "Ice & Rain",
    "q": "With the Pitot and Windscreen Heat pushbutton at AUTO",
    "o": [
      "Windshields and Pitots will be heated at LOW on the Ground and NORM when in Flight.",
      "All Probes and Static Plates will be heated at a High Level in Flight.",
      "All TAT Probes will be heated immediately following Engine Start.",
      "All Angle of Attack Probes will be heated at a High Level in Flight."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Windshields and Pitots will be heated at LOW on the Ground and NORM when in Flight. Guide Q125, PDF p.22.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q125, PDF p.22",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 126,
    "p": 22,
    "c": "Ice & Rain",
    "q": "When you select the Wing Anti-ice ON while on the ground what happens?",
    "o": [
      "Wing anti-ice should not be selected on the Ground to prevent Leading Edge overheat.",
      "Wing anti-ice will activate for 30 seconds. However, unless switched OFF again, it will re-activate on Rotation.",
      "Wing anti-ice will Activate continuously until switched OFF.",
      "Wing anti-ice will activate for 30 seconds, then reset.It will not re-activate unless Selected ON again."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Wing anti-ice will activate for 30 seconds. However, unless switched OFF again, it will re-activate on Rotation. Guide Q126, PDF p.22.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q126, PDF p.22",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 127,
    "p": 22,
    "c": "Ice & Rain",
    "q": "Engine anti-ice should be:",
    "o": [
      "Selected ON whenever the OAT or TAT is below 10°C.",
      "Selected OFF in Flight if TAT is less than -40°C.",
      "Selected ON when Icing Conditions are Present or Anticipated.",
      "Selected ON only when a build up of Ice is observed on the Airframe."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Selected ON when Icing Conditions are Present or Anticipated. Guide Q127, PDF p.22.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q127, PDF p.22",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 128,
    "p": 22,
    "c": "Ice & Rain",
    "q": "Wing anti-ice is not available in which of the following circumstances:",
    "o": [
      "Following either Wing or Pylon Leak.",
      "Following Engine Fire.",
      "When the APU is supplying Pneumatic Air.",
      "All of the Above."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: All of the Above. Guide Q128, PDF p.22.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q128, PDF p.22",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: ONor AUTO, the TAT probes are not heated on the ground. Guide Q129, PDF p.22.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q129, PDF p.22",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 130,
    "p": 22,
    "c": "Ice & Rain",
    "q": "What happens if electrical power is lost to ENG 1 or ENG 2 ANTI ICE?",
    "o": [
      "The anti ice valves open automatically.",
      "The valves are spring loaded shut and will close.",
      "The valves will 'freeze' in position at failure.",
      "Icing conditions should be avoided."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: The anti ice valves open automatically. Guide Q130, PDF p.22.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q130, PDF p.22",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 131,
    "p": 23,
    "c": "Ice & Rain",
    "q": "When WING ANTI ICE is Selected:",
    "o": [
      "The pushbutton light indicates FAULT (Amber) while the valves transit then ON (Blue).",
      "The Cross Bleed Valve opens automatically to ensure symmetrical Wing Anti-icing.",
      "The Wing Anti-ice valves will not open until the aircraft is Airborne",
      "Do not Extend Slats."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: The pushbutton light indicates FAULT (Amber) while the valves transit then ON (Blue). Guide Q131, PDF p.23.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q131, PDF p.23",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: WAI Valves open for 30 seconds, and then close. Guide Q132, PDF p.23.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q132, PDF p.23",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The Wing Anti-ice control Valve on the affected side will close. Guide Q133, PDF p.23.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q133, PDF p.23",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Operates at Low power on the ground after engine start and at Normal power in flight. Guide Q134, PDF p.23.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q134, PDF p.23",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Pitots, Angle of Attack Probes Are heated whenever the Window/Probe Heat pushbutton is ON, the TAT probes are heated when airborne. Guide Q135, PDF p.23.",
    "ref": "FCOM DSC-30, Ice and Rain Protection · Guide Q135, PDF p.23",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 136,
    "p": 24,
    "c": "Powerplant",
    "q": "Reverse thrust translating sleeves are actuated by what system?",
    "o": [
      "Green and Blue Hydraulics.",
      "Green hydraulics.",
      "Yellow hydraulics.",
      "G+ Yellow hydraulics."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: G+ Yellow hydraulics. Guide Q136, PDF p.24.",
    "ref": "FCOM DSC-70, IAE V2500 Power Plant · Guide Q136, PDF p.24",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 137,
    "p": 24,
    "c": "Powerplant",
    "q": "If one channel of the engine FADEC fails the engine will:",
    "o": [
      "Continue to run using the other FADEC channel.",
      "Shut down.",
      "Operate at a fixed power setting.",
      "Operate at IDLE thrust only."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Continue to run using the other FADEC channel. Guide Q137, PDF p.24.",
    "ref": "FCOM DSC-70, IAE V2500 Power Plant · Guide Q137, PDF p.24",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 138,
    "p": 24,
    "c": "Powerplant",
    "q": "Fuel entering the engine is heated:",
    "o": [
      "Electrically.",
      "By hydraulic oil.",
      "By IDG oil.",
      "By engine oil. Fuel is also used to cool IDG Oil."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: By engine oil. Fuel is also used to cool IDG Oil. Guide Q138, PDF p.24.",
    "ref": "FCOM DSC-70, IAE V2500 Power Plant · Guide Q138, PDF p.24",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 139,
    "p": 24,
    "c": "Powerplant",
    "q": "During an IAE V2500 manual start, which function remains automatic?",
    "o": [
      "The FADEC closes the start valve at the appropriate N2",
      "The FADEC automatically aborts every abnormal manual start",
      "The engine master selects itself ON at maximum motoring",
      "Fuel is introduced with the engine master OFF"
    ],
    "a": 0,
    "w": "A manual start is monitored but is not automatically aborted; the FADEC still closes the start valve at the appropriate N2.",
    "ref": "FCOM DSC-70-80, IAE V2500 Starting · Guide Q139, PDF p.24",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 140,
    "p": 24,
    "c": "Powerplant",
    "q": "How is an IAE V2500 dry crank commanded?",
    "o": [
      "ENG MODE selector to CRANK and the applicable MAN START pushbutton ON",
      "ENG MODE selector to CRANK and engine master ON",
      "Engine master ON only",
      "ENG MODE selector to IGN/START with both engine masters OFF"
    ],
    "a": 0,
    "w": "Dry cranking uses CRANK with the applicable MAN START pushbutton ON; the engine master remains OFF so fuel is not introduced.",
    "ref": "FCOM DSC-70-80 / PRO-NOR-SUP-ENG, IAE V2500 Dry Crank · Guide Q140, PDF p.24",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 141,
    "p": 24,
    "c": "Powerplant",
    "q": "When are the Engine Fire Agent pushbutton. Active?",
    "o": [
      "Always (Supplied by Hot Battery Busbars).",
      "After Engine start-up.",
      "Whenever a Fire Warning is being signalled.",
      "When the Fire pushbutton is pressed / released."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: When the Fire pushbutton is pressed / released. Guide Q141, PDF p.24.",
    "ref": "FCOM DSC-70, IAE V2500 Power Plant · Guide Q141, PDF p.24",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 142,
    "p": 24,
    "c": "Powerplant",
    "q": "During an In Flight Start:",
    "o": [
      "Open the Cross Bleed only if FADEC requires a Starter Assisted Start.",
      "If the attempt fails, switch OFF Engine Master, Wait 30 seconds, then try again.",
      "Eng MODE SEL to START IGN; MAN START pushbutton ON; at Max Motoring, Engine Master ON.",
      "FADEC will continue to alternate the use of Igniters."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: If the attempt fails, switch OFF Engine Master, Wait 30 seconds, then try again. Guide Q142, PDF p.24.",
    "ref": "FCOM DSC-70, IAE V2500 Power Plant · Guide Q142, PDF p.24",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Both CTR TK pumps are switched off or have failed. Any remaining CTR TK fuel is now unusable. Guide Q143, PDF p.25.",
    "ref": "FCOM DSC-28, Fuel · Guide Q143, PDF p.25",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 144,
    "p": 25,
    "c": "Fuel",
    "q": "How do the four wing transfer valves operate?",
    "o": [
      "Both Onside valves open simultaneously when Low Quantity is sensed in an inner tank.",
      "If one of two sensors in each Inner tank detect a low level, corresponding Transfer valves, one ineach wing, willopen.",
      "Each has its own sensor and they ail work independently.",
      "When FoB is less than 3 tonnes, all 4 Transfer valves open."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: If one of two sensors in each Inner tank detect a low level, corresponding Transfer valves, one ineach wing, willopen. Guide Q144, PDF p.25.",
    "ref": "FCOM DSC-28, Fuel · Guide Q144, PDF p.25",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: There is significant fuel in the Centre Tank, yet a Wing Tank contains less than 5000 kg. Guide Q145, PDF p.25.",
    "ref": "FCOM DSC-28, Fuel · Guide Q145, PDF p.25",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-28-20, Centre Tank Pump Control · Guide Q146, PDF p.25",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 147,
    "p": 25,
    "c": "Fuel",
    "q": "How do wing tank transfer valves operate?",
    "o": [
      "If one TXFR valve is signalled Open opens, a valve in the opposite wing.is also signalled Open; symmetrical transfer is assured.",
      "If one TXFR valve opens, the other onside valve will open; ensuring all the on-side Outer Fuel transfers.",
      "If both TXFR Valves on one side fail to open, the opposite TXFR Valves remain closed to prevent an imbalance.",
      "If TXFR valves fail to open, select the FUEL TXFR Valve pushbutton to Manual."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: If one TXFR valve is signalled Open opens, a valve in the opposite wing.is also signalled Open; symmetrical transfer is assured. Guide Q147, PDF p.25.",
    "ref": "FCOM DSC-28, Fuel · Guide Q147, PDF p.25",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-28-20, Centre Tank Pump Control · Guide Q148, PDF p.25",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Both CTR TK PUMPS are OFF or have failed. CTR TK fuel is unusable in this condition. Guide Q149, PDF p.26.",
    "ref": "FCOM DSC-28, Fuel · Guide Q149, PDF p.26",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-28-20, Fuel Feed Sequence · Guide Q150, PDF p.26",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Centre Tank Fuel Pumps stop to allow Wing Inner contents to decrease to accommodate further |DG Return Fuel. Guide Q151, PDF p.26.",
    "ref": "FCOM DSC-28, Fuel · Guide Q151, PDF p.26",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 152,
    "p": 26,
    "c": "Fuel",
    "q": "Following Fuel Pump Failure:",
    "o": [
      "If one Centre Tank Pump Fails (with Centre Fuel), open the Fuel Cross-feed.",
      "If both Centre Tank Pumps fail, any remaining Centre Tank fuel is unavailable.",
      "If both Pumps in one wing fail, respect the Gravity Feed Ceiling, and, while above it, use Centre Tank fuel, or open the Fuel Cross-feed.",
      "All of the above are correct."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: All of the above are correct. Guide Q152, PDF p.26.",
    "ref": "FCOM DSC-28, Fuel · Guide Q152, PDF p.26",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 153,
    "p": 27,
    "c": "Navigation",
    "q": "To Backup Tune a VOR station you must:",
    "o": [
      "First, select the VOR so that it is displayed on your ND.",
      "First, press the STBY NAV switch on the onside RMP.",
      "First select the Onside RMP to VOR; Second, dial in frequency; Third; dial in Course.",
      "As in B, but use Onside RMP, or, if it has failed, RMP3."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: First, press the STBY NAV switch on the onside RMP. Guide Q153, PDF p.27.",
    "ref": "FCOM DSC-34, Navigation · Guide Q153, PDF p.27",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 154,
    "p": 27,
    "c": "Navigation",
    "q": "Which statement about the DDRMI heading reference is correct?",
    "o": [
      "ADIRU 1 normally supplies it; IR 3 can replace IR 1 via ATT HDG CAPT 3",
      "It always comes from ADIRU 2",
      "It is independent of ADIRS",
      "It is selected by the ND range knob"
    ],
    "a": 0,
    "w": "ADIRU 1 normally supplies the DDRMI. Selecting ATT HDG to CAPT 3 lets IR 3 replace IR 1.",
    "ref": "FCOM DSC-34-NAV-10-20 / DSC-34-NAV-30-30 · Guide Q154, PDF p.27",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Supplied Lat and Long may be inconsistent with Lat and Long at the Last IRS Shutdown. Guide Q155, PDF p.27.",
    "ref": "FCOM DSC-34, Navigation · Guide Q155, PDF p.27",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The ADR1 pushbutton on the ADIRS CDU. Guide Q156, PDF p.27.",
    "ref": "FCOM DSC-34, Navigation · Guide Q156, PDF p.27",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 157,
    "p": 27,
    "c": "Navigation",
    "q": "How are VHF Nav-aids normally tuned and identified?",
    "o": [
      "Auto-tuned and auto identified by FMGCs.",
      "Manually tuned on MCDUs and audio identified.",
      "Tuned on the RMPs and audio identified for all Departures and Arrivals.",
      "Manual tuned through on-side MCDU. Audio identified."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Auto-tuned and auto identified by FMGCs. Guide Q157, PDF p.27.",
    "ref": "FCOM DSC-34, Navigation · Guide Q157, PDF p.27",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Check that the NAV Backup Selector pushbutton on RMP1 and 2 are OFF. Guide Q158, PDF p.27.",
    "ref": "FCOM DSC-34, Navigation · Guide Q158, PDF p.27",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 159,
    "p": 27,
    "c": "Navigation",
    "q": "Which ADIRU normally supplies heading data to the DDRMI?",
    "o": [
      "ADIRU 1",
      "ADIRU 2",
      "ADIRU 3",
      "Whichever FMGC is master"
    ],
    "a": 0,
    "w": "In the normal switching configuration, ADIRU 1 supplies PFD 1, ND 1, the DDRMI and VOR/DME.",
    "ref": "FCOM DSC-34-NAV-10-20, ADIRS Switching · Guide Q159, PDF p.27",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-34-NAV-30-10, Backup Tuning · Guide Q160, PDF p.28",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: If the FAULT light Flashes, Attitude and Heading information may be available. Guide Q161, PDF p.28.",
    "ref": "FCOM DSC-34, Navigation · Guide Q161, PDF p.28",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 162,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "The crew oxygen mask is normally stowed set to:",
    "o": [
      "EMERG / 100%",
      "EMERG/ NORM",
      "NORM / 100%",
      "NORM/NORM"
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: NORM / 100% Guide Q162, PDF p.29.",
    "ref": "FCOM DSC-33 / DSC-35 / DSC-52 · Guide Q162, PDF p.29",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Pressure goes below 400 psi. Guide Q163, PDF p.29.",
    "ref": "FCOM DSC-33 / DSC-35 / DSC-52 · Guide Q163, PDF p.29",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "The current FCOM threshold is 14,000 ft with a +250/-750 ft tolerance. The older tolerance in the guide was revised.",
    "ref": "FCOM DSC-35-30-20, Passenger Oxygen Controls · Guide Q164, PDF p.29",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Can be switched ON from the Flight Deck or Cabin. Guide Q165, PDF p.29.",
    "ref": "FCOM DSC-33 / DSC-35 / DSC-52 · Guide Q165, PDF p.29",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: When ARMED, open with automatic opening assist, Guide Q166, PDF p.29.",
    "ref": "FCOM DSC-33 / DSC-35 / DSC-52 · Guide Q166, PDF p.29",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: May be used at any time at 100%, and, if necessary, at Emergency pressure, as a protection against smoke or fumes. Guide Q167, PDF p.29.",
    "ref": "FCOM DSC-33 / DSC-35 / DSC-52 · Guide Q167, PDF p.29",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 168,
    "p": 29,
    "c": "Lights, Doors & Oxygen",
    "q": "Passenger Oxygen:",
    "o": [
      "Ls available to a set of 3 or 4 masks once they have dropped out and one of them has been pulled down.",
      "Will last 20 minutes.",
      "Is Sourced from a single Oxygen Bottle located in the Forward Cargo Compartment",
      "Will Auto-deploy above 9550 feet."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Ls available to a set of 3 or 4 masks once they have dropped out and one of them has been pulled down. Guide Q168, PDF p.29.",
    "ref": "FCOM DSC-33 / DSC-35 / DSC-52 · Guide Q168, PDF p.29",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The APU Electronic Control Box is powered. Guide Q169, PDF p.30.",
    "ref": "FCOM DSC-49, Auxiliary Power Unit · Guide Q169, PDF p.30",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The APU start sequence is in progress. Guide Q170, PDF p.30.",
    "ref": "FCOM DSC-49, Auxiliary Power Unit · Guide Q170, PDF p.30",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-APU-20, APU Bleed · Guide Q171, PDF p.30",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-APU-20, APU Bleed · Guide Q172, PDF p.30",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "The current FCOM says the SEL lights illuminate on all installed RMPs when a radio is tuned from a non-associated RMP. The guide's RMP 1-and-2 answer was revised.",
    "ref": "FCOM DSC-23-60, Radio Management Panel — Tuning · Guide Q173, PDF p.31",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-23-10-50, Audio Control Panel · Guide Q174, PDF p.31",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: By setting the Parking Brake and pressing the CVR test pushbutton (press the RCDR GRD CTRL switch if necessary) Guide Q175, PDF p.31.",
    "ref": "FCOM DSC-23, Communications · Guide Q175, PDF p.31",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "Each pilot can transmit on any available radio by selecting its transmission key on the onside audio-control panel.",
    "ref": "FCOM DSC-23-10-50, Audio Control Panel · Guide Q176, PDF p.31",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-23-60, Radio Management Panel — Tuning · Guide Q177, PDF p.31",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-23-10-50, Audio Control Panel · Guide Q178, PDF p.31",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 179,
    "p": 31,
    "c": "Communications",
    "q": "RMP1 has failed, and its two windows go blank. How can the VHF 1 Frequency now be changed?",
    "o": [
      "Use RMP2, as RMP3 cannot tune VHF Radios.",
      "Use ACP 3 (CAPT 3) position on the overhead AUDIO SWITCHING panel.",
      "Switch off RMP 1, and tune VHF 1 from RMP 2 or 3.",
      "VHF1 Frequency is now locked. Use VHF 2, or, if fitted, VHF3 for ATC Communication."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Switch off RMP 1, and tune VHF 1 from RMP 2 or 3. Guide Q179, PDF p.31.",
    "ref": "FCOM DSC-23, Communications · Guide Q179, PDF p.31",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 180,
    "p": 32,
    "c": "Communications",
    "q": "To make a PA announcement:",
    "o": [
      "Press the PA Transmit pushbutton and talk.",
      "Select the PA Transmit pushbutton, and then use the RAD position on the ACP.",
      "Use the dedicated Handset or the Hand Microphone only.",
      "First, Remove Oxygen Mask from face and switch off Loudspeaker to prevent fee"
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: Press the PA Transmit pushbutton and talk. Guide Q180, PDF p.32.",
    "ref": "FCOM DSC-23, Communications · Guide Q180, PDF p.32",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Select CAPT3 on the AUDIO SWITCHING selector. Guide Q181, PDF p.32.",
    "ref": "FCOM DSC-23, Communications · Guide Q181, PDF p.32",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "The recording system is active for the first 5 minutes after ground electrical energisation, after the first engine start, and throughout flight. It stops 5 minutes after the second engine shuts down on ground.",
    "ref": "FCOM DSC-31-60-10, Recording System · Guide Q182, PDF p.32",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Is green when power is available and its parameters are normal. Guide Q183, PDF p.33.",
    "ref": "FCOM DSC-24, Electrical · Guide Q183, PDF p.33",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-24-10-30, Normal Electrical Configuration · Guide Q184, PDF p.33",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 185,
    "p": 33,
    "c": "Electrical",
    "q": "The loss of one engine driven generator in flight:",
    "o": [
      "Will cause the RAT to extend.",
      "Will not cause the loss of any Busbars.",
      "Will result in loss of the Onside AC Bus until the APU generator becomes available.",
      "Could lead to the loss of AC ESS."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Will not cause the loss of any Busbars. Guide Q185, PDF p.33.",
    "ref": "FCOM DSC-24, Electrical · Guide Q185, PDF p.33",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: AC Bus 2 to power AC ESS Bus. Guide Q186, PDF p.33.",
    "ref": "FCOM DSC-24, Electrical · Guide Q186, PDF p.33",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 187,
    "p": 33,
    "c": "Electrical",
    "q": "Selecting the GEN 1 LINE pushbutton switch OFF in flight:",
    "o": [
      "Allows AC Bus 1 to power AC Bus 2.",
      "Connects GEN 1 directly to ESS AC Bus.",
      "Will cause Gen 2 to power AC Bus 1.",
      "Selects GEN 1 OFF with Residual Voltage generated due to IDG rotation."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Will cause Gen 2 to power AC Bus 1. Guide Q187, PDF p.33.",
    "ref": "FCOM DSC-24, Electrical · Guide Q187, PDF p.33",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 188,
    "p": 33,
    "c": "Electrical",
    "q": "In the Electrical System:",
    "o": [
      "In flight, if both Generators fail, the RAT will deploy and the AC ESS Bus will be supplied by the Emergency Generator.",
      "On Arrival, when Ground Power is plugged in, it will be connected to AC 1 and AC2 automatically if its supply characteristics are within limits.",
      "ESS DC is normally supplied by the ESS TR.",
      "The Batteries are connected to the DC BATT Busbar at all times."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: In flight, if both Generators fail, the RAT will deploy and the AC ESS Bus will be supplied by the Emergency Generator. Guide Q188, PDF p.33.",
    "ref": "FCOM DSC-24, Electrical · Guide Q188, PDF p.33",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 189,
    "p": 33,
    "c": "Electrical",
    "q": "The external power green AVAIL light on means:",
    "o": [
      "The external power has priority over the APU generator.",
      "The external power is powering AC busses 1 and 2.",
      "The external power is connected but not powering AC busses 1 and 2.",
      "The external power is powering the GRD / FLT busses."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: The external power is connected but not powering AC busses 1 and 2. Guide Q189, PDF p.33.",
    "ref": "FCOM DSC-24, Electrical · Guide Q189, PDF p.33",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 190,
    "p": 34,
    "c": "Electrical",
    "q": "The amber fault light on the battery pushbutton switch:",
    "o": [
      "Indicates the Battery Contactor is out of Position.",
      "Comes on when the battery charging current is too low.",
      "Indicates low battery voltage.",
      "Comes on when the charging current is out of limits (too high)."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Comes on when the charging current is out of limits (too high). Guide Q190, PDF p.34.",
    "ref": "FCOM DSC-24, Electrical · Guide Q190, PDF p.34",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 191,
    "p": 34,
    "c": "Electrical",
    "q": "The AC ESS BUS can be supplied directly from:",
    "o": [
      "AC BUS 1 or AC BUS 2 or the APU.",
      "AC BUS 1 or AC BUS 2 or the EMER GEN only.",
      "AC BUS 1 or AC BUS 2 only.",
      "AC BUS 1 or AC BUS 2 or EMER GEN or the Static Inverter."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: AC BUS 1 or AC BUS 2 or EMER GEN or the Static Inverter. Guide Q191, PDF p.34.",
    "ref": "FCOM DSC-24, Electrical · Guide Q191, PDF p.34",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-24-10-30, Failure of One TR · Guide Q192, PDF p.34",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 193,
    "p": 34,
    "c": "Electrical",
    "q": "During Climb, a Red Light on the Emergency Electrical Panel illuminates -",
    "o": [
      "The Emergency Generator is in use.",
      "AC1 and AC2 have both failed.",
      "As in B; plus the Emergency Generator is unavailable.",
      "ACESS is unpowered."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: As in B; plus the Emergency Generator is unavailable. Guide Q193, PDF p.34.",
    "ref": "FCOM DSC-24, Electrical · Guide Q193, PDF p.34",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 194,
    "p": 34,
    "c": "Electrical",
    "q": "The batteries are:",
    "o": [
      "Normally connected to the DC battery bus.",
      "Normally connected to the static inverter (BATT 1) and DC ESS (BATT 2).",
      "Connected to the DC battery bus only for charging, APU start, and with loss of AC buses 1 and 2 (speed < 100 kt).",
      "Disconnected on the ground 30 min after the main power (APU GEN or EXT) is OFF."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Connected to the DC battery bus only for charging, APU start, and with loss of AC buses 1 and 2 (speed < 100 kt). Guide Q194, PDF p.34.",
    "ref": "FCOM DSC-24, Electrical · Guide Q194, PDF p.34",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-24-20, Electrical Controls · Guide Q195, PDF p.34",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Deploys the RAT and signals the Emergency Generator to connect to AC ESS when its output is satisfactory. Guide Q196, PDF p.34.",
    "ref": "FCOM DSC-24, Electrical · Guide Q196, PDF p.34",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: A Green AVAIL light means External Power connected and within limits. Guide Q197, PDF p.35.",
    "ref": "FCOM DSC-24, Electrical · Guide Q197, PDF p.35",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: It can replace either or both main engine generators at any time (subject to KVA limits) Guide Q198, PDF p.35.",
    "ref": "FCOM DSC-24, Electrical · Guide Q198, PDF p.35",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-24-10-30, Normal Configuration · Guide Q199, PDF p.35",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: They are also connected to the DC BAT BUS if they need charging. Guide Q200, PDF p.35.",
    "ref": "FCOM DSC-24, Electrical · Guide Q200, PDF p.35",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 201,
    "p": 35,
    "c": "Electrical",
    "q": "What occurs when the EMER ELEC PWR GEN 1 LINE pushbutton is set OFF?",
    "o": [
      "The GEN 1 line contactor opens, GEN 2 supplies AC BUS 1, and GEN 1 remains available to one fuel pump in each wing tank",
      "AC BUS 1 is permanently lost",
      "The RAT deploys automatically in all conditions",
      "Both engine generators disconnect"
    ],
    "a": 0,
    "w": "GEN 1 is isolated from the normal bus channel but remains upstream of the line contactor for one fuel pump in each wing tank; GEN 2 supplies AC BUS 1 through the bus tie.",
    "ref": "FCOM DSC-24-20 / PRO-ABN-SMOKE, GEN 1 LINE · Guide Q201, PDF p.35",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: On the Ground, either Automatically or, if the Auto system fails, Manually. Guide Q202, PDF p.36.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q202, PDF p.36",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: 2 for each Engine, 1 for the APU, 1 for the Cargo Compartments. Guide Q203, PDF p.36.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q203, PDF p.36",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Shuts down the Engine, isolates it from other aircraft systems and arms the Agent pushbutton. Guide Q204, PDF p.36.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q204, PDF p.36",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 205,
    "p": 36,
    "c": "Fire Protection",
    "q": "The Engine or APU warning system is triggered when a preset temperature is sensed:",
    "o": [
      "In either detection loop.",
      "By both of the two detection loops.",
      "By both the loops and the detection unit.",
      "By both loops within 5 seconds of each other."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: By both of the two detection loops. Guide Q205, PDF p.36.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q205, PDF p.36",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Two sensing loops in each Compartment and one shared Extinguisher. Guide Q206, PDF p.36.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q206, PDF p.36",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 207,
    "p": 36,
    "c": "Fire Protection",
    "q": "Fire Agent pushbutton's are active:",
    "o": [
      "Always, providing the Battery Voltage > 25.5.",
      "Whenever an Engine (or APU) Fire is detected.",
      "Only when the Engine (or APU) is running.",
      "Only after an ENG or APU FIRE pushbutton has been pressed/released."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Only after an ENG or APU FIRE pushbutton has been pressed/released. Guide Q207, PDF p.36.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q207, PDF p.36",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Automatically 3 seconds after the warning (Ground only). Guide Q208, PDF p.37.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q208, PDF p.37",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Smoke from Avionics or in either Cargo Compartments. Guide Q209, PDF p.37.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q209, PDF p.37",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 210,
    "p": 37,
    "c": "Fire Protection",
    "q": "An Engine Fire Warning can be triggered by:",
    "o": [
      "Both Engine Fire Detection loops signalling an overheat.",
      "One Engine Fire Detection loop signalling an overheat plus the other loop signalling Fault.",
      "Both Engine Fire loops becoming discontinuous (broken) within a few seconds of each other.",
      "Any of the above."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Any of the above. Guide Q210, PDF p.37.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q210, PDF p.37",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Two per engine, one for the APU, and one for the Cargo Compartments. Guide Q211, PDF p.37.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q211, PDF p.37",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The fire is no longer signalled. Guide Q212, PDF p.37.",
    "ref": "FCOM DSC-26, Fire Protection · Guide Q212, PDF p.37",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 213,
    "p": 38,
    "c": "Hydraulics",
    "q": "After Engine Start, the A320 Hydraulics System is normally powered by:",
    "o": [
      "3 engine driven pumps.",
      "2 engine driven pumps and an electrical pump.",
      "2 engine driven pumps, 2 electrical pumps, a RAT and a hand pump.",
      "2 engine driven pumps, 2 electrical pumps and a RAT."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: 2 engine driven pumps and an electrical pump. Guide Q213, PDF p.38.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q213, PDF p.38",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-29-10-20, PTU · Guide Q214, PDF p.38",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 215,
    "p": 38,
    "c": "Hydraulics",
    "q": "What is the nominal pressure of each hydraulic system?",
    "o": [
      "3,000 ±200 PSI",
      "3,600 ±200 PSI",
      "2,500 ±500 PSI",
      "1,450 ±200 PSI"
    ],
    "a": 0,
    "w": "Each hydraulic system operates at a nominal 3,000 PSI, with the stated ±200-PSI range. The OCR-generated 3,600-PSI answer was corrected.",
    "ref": "FCOM DSC-29-10, Hydraulic Power — General · Guide Q215, PDF p.38",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 216,
    "p": 38,
    "c": "Hydraulics",
    "q": "The RAT will extend automatically:",
    "o": [
      "With the loss of blue hydraulic pressure.",
      "With the loss of green hydraulic pressure.",
      "With the loss of yellow hydraulic pressure.",
      "None of the above."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: None of the above. Guide Q216, PDF p.38.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q216, PDF p.38",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Is not possible. Guide Q217, PDF p.38.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q217, PDF p.38",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 218,
    "p": 38,
    "c": "Hydraulics",
    "q": "With both engines stopped, how can the green system be pressurised?",
    "o": [
      "It is not possible because the pump is engine driven.",
      "By the blue system electric pump and the PTU.",
      "With the green system standby electric pump.",
      "By the yellow electric pump and the PTU."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: By the yellow electric pump and the PTU. Guide Q218, PDF p.38.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q218, PDF p.38",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Reservoir low level, overheat or low air pressure or pump low pressure. Guide Q219, PDF p.38.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q219, PDF p.38",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-29-10-30, Blue Electric Pump · Guide Q220, PDF p.39",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Slats and left and right elevator. Guide Q221, PDF p.39.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q221, PDF p.39",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 222,
    "p": 39,
    "c": "Hydraulics",
    "q": "After Engine Start, Hydraulic power is normally supplied by:",
    "o": [
      "3 engine-driven pumps.",
      "2 engine-driven pumps and an electric pump.",
      "2 engine driven pumps and 2 electric pumps.",
      "2 engine driven pumps, 2 electric pumps, and a RAT."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: 2 engine-driven pumps and an electric pump. Guide Q222, PDF p.39.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q222, PDF p.39",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-29-10-20, PTU · Guide Q223, PDF p.39",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 224,
    "p": 39,
    "c": "Hydraulics",
    "q": "The blue hydraulic pump:",
    "o": [
      "Runs whenever its pushbutton is AUTO and AC power is available.",
      "Can only run on the ground if one engine is running.",
      "Can be run before start with BLUE PUMP OVRD pushbutton on the overhead HYD MAINT panel ON, and AC electrical power available.",
      "The blue pump cannot run on the ground."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Can be run before start with BLUE PUMP OVRD pushbutton on the overhead HYD MAINT panel ON, and AC electrical power available. Guide Q224, PDF p.39.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q224, PDF p.39",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 225,
    "p": 40,
    "c": "Hydraulics",
    "q": "The aircraft hydraulic system consists of:",
    "o": [
      "Three systems, each operating at a minimum pressure of 3000 psi.",
      "Three systems, each operating at a nominal pressure of 3000 +/- 200 psi.",
      "Three systems, operating at a pressure of 2500 +/- 500 psi.",
      "Two systems, operating at a nominal pressure of 3000 psi with a back up system operating at 2500 psi."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Three systems, each operating at a nominal pressure of 3000 +/- 200 psi. Guide Q225, PDF p.40.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q225, PDF p.40",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: A pump driven by engine 2, an electric pump, or the PTU. Guide Q226, PDF p.40.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q226, PDF p.40",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-24-10-30 / DSC-29-20, Emergency Generation · Guide Q227, PDF p.40",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: When the difference between Green and Yellow systems' pressures is more than 500 psi. Guide Q228, PDF p.40.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q228, PDF p.40",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-29-10-20 / DSC-27-10-20 · Guide Q229, PDF p.40",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Has priority over electrical control, and requires either Green or Yellow hydraulic systems. Guide Q230, PDF p.40.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q230, PDF p.40",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Spoilers 2,3, 4 and 5 Guide Q231, PDF p.40.",
    "ref": "FCOM DSC-29, Hydraulics · Guide Q231, PDF p.40",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-27-20-10-30, Lateral Normal Law · Guide Q232, PDF p.41",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 233,
    "p": 41,
    "c": "Flight Controls",
    "q": "With AP and A/THR off in Normal Law, what is the minimum stable speed with the sidestick released?",
    "o": [
      "Vα PROT",
      "Vα MAX",
      "VSW",
      "VLS"
    ],
    "a": 0,
    "w": "Angle-of-attack protection stabilises the aircraft at approximately Vα PROT with the sidestick released.",
    "ref": "FCOM DSC-27-20-10-20, High Angle-of-Attack Protection · Guide Q233, PDF p.41",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 234,
    "p": 41,
    "c": "Flight Controls",
    "q": "In pitch Alternate Law, what selection causes reversion to Direct Law?",
    "o": [
      "Landing gear DOWN",
      "Flaps 1",
      "Speedbrakes half",
      "Autopilot OFF"
    ],
    "a": 0,
    "w": "Extending the landing gear changes pitch Alternate Law to Direct Law.",
    "ref": "FCOM DSC-27-20-20, Reconfiguration Control Laws · Guide Q234, PDF p.41",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 235,
    "p": 41,
    "c": "Flight Controls",
    "q": "When both pilots move their side sticks at the same time:",
    "o": [
      "The smaller input is ignored.",
      "The last stick moved is the master.",
      "Both demands are algebraically summed.",
      "The first stick moved is the master."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Both demands are algebraically summed. Guide Q235, PDF p.41.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q235, PDF p.41",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: They cannot be released in flight. Guide Q236, PDF p.41.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q236, PDF p.41",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 237,
    "p": 42,
    "c": "Flight Controls",
    "q": "In Normal Law flight mode, what does the aircraft tend to maintain with the sidestick released?",
    "o": [
      "The current flight-path angle",
      "A fixed airspeed",
      "The current bank angle above 33°",
      "A fixed vertical speed selected on the FCU"
    ],
    "a": 0,
    "w": "With neutral sidestick, pitch Normal Law maintains the flight path within the normal-law logic.",
    "ref": "FCOM DSC-27-20-10-20, Pitch Normal Law · Guide Q237, PDF p.42",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Slats are supplied by Green and Blue, Flaps by Green and Yellow. Guide Q238, PDF p.42.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q238, PDF p.42",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-27-20-10-20, Normal Law — Flare Mode · Guide Q239, PDF p.42",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 240,
    "p": 42,
    "c": "Flight Controls",
    "q": "Which Statement is True.",
    "o": [
      "In Normal, Alternate and Direct Laws, Rudder Turn Co-ordination is available.",
      "In Alternate Law, Slow speed / High a Protection will prevent aircraft stall.",
      "In Alternate Law, Pitch Attitude Protection is Active.",
      "Automatic Pitch Trimming takes place in both Alternate and Normal Laws."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Automatic Pitch Trimming takes place in both Alternate and Normal Laws. Guide Q240, PDF p.42.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q240, PDF p.42",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 241,
    "p": 42,
    "c": "Flight Controls",
    "q": "Which of the Flight Control computers directly command rudder deflection?",
    "o": [
      "ELAC.",
      "SEC.",
      "FAC.",
      "None: Rudders have Mechanical Input only."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: FAC. Guide Q241, PDF p.42.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q241, PDF p.42",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 242,
    "p": 42,
    "c": "Flight Controls",
    "q": "What is the maximum bank angle available in Normal Law?",
    "o": [
      "67°",
      "60°",
      "45°",
      "33°"
    ],
    "a": 0,
    "w": "Normal Law maximum bank-angle authority is 67°.",
    "ref": "FCOM DSC-27-20-10-30, Lateral Normal Law · Guide Q242, PDF p.42",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 243,
    "p": 42,
    "c": "Flight Controls",
    "q": "An amber message on the PFD reads \"USE MANUAL PITCH TRIM\". What flight control law is the aircraft in?",
    "o": [
      "Normal Law.",
      "Alternate Law.",
      "Mechanical backup.",
      "Direct Law."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Direct Law. Guide Q243, PDF p.42.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q243, PDF p.42",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-27-10-20, THS Control · Guide Q244, PDF p.43",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 245,
    "p": 43,
    "c": "Flight Controls",
    "q": "The stabiliser is actuated by:",
    "o": [
      "A screw jack driven by two hydraulic motors, which are controlled by one of three electric motors or the mechanical trim wheel.",
      "A servo jack driven by three hydraulic motors, which are controlled by an electric motor or the mechanical trim wheel.",
      "The blue and green hydraulic systems, which are controlled by one of three electric motors or mechanically.",
      "The green or yellow hydraulic systems or mechanical backup."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: A screw jack driven by two hydraulic motors, which are controlled by one of three electric motors or the mechanical trim wheel. Guide Q245, PDF p.43.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q245, PDF p.43",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Rudder trim signals. Guide Q246, PDF p.43.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q246, PDF p.43",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-27-20-10-20, Control with Autopilot Engaged · Guide Q247, PDF p.43",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 248,
    "p": 43,
    "c": "Flight Controls",
    "q": "In Alternate Law:",
    "o": [
      "High speed stability can be overridden by the pilot.",
      "High speed stability cannot be overridden by the pilot.",
      "The alpha floor function is operative.",
      "Pitch attitude protection is retained."
    ],
    "a": 0,
    "w": "FCOM cross-check retained the guide answer: High speed stability can be overridden by the pilot. Guide Q248, PDF p.43.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q248, PDF p.43",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-27-20-20, Direct Law · Guide Q249, PDF p.43",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 250,
    "p": 43,
    "c": "Flight Controls",
    "q": "A deactivated sidestick can be reactivated by:",
    "o": [
      "Momentarily pressing the take-over pushbutton on both sticks simultaneously.",
      "Momentarily pressing the take-over pushbutton on the deactivated stick only.",
      "Momentarily pressing the take-over pushbutton on either stick",
      "Pressing a take-over pushbutton for more than 40 seconds."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Momentarily pressing the take-over pushbutton on either stick Guide Q250, PDF p.43.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q250, PDF p.43",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 251,
    "p": 44,
    "c": "Flight Controls",
    "q": "When does the FLAP legend on the upper ECAM become amber?",
    "o": [
      "When a flap or slat wing-tip brake is applied",
      "Whenever flaps or slats are in transit normally",
      "Whenever CONF 1 is selected",
      "After loss of one hydraulic system only"
    ],
    "a": 0,
    "w": "The FLAP indication turns amber when a flap or slat wing-tip brake is on.",
    "ref": "FCOM DSC-27-50, Slat/Flap Indications · Guide Q251, PDF p.44",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 252,
    "p": 44,
    "c": "Flight Controls",
    "q": "In Flight Controls Mechanical Backup:",
    "o": [
      "The THS is directly and mechanically linked to the cockpit trim wheels: control forces are high.",
      "Pitch control is through the THS. Electronic / Electrical Control of THS Motors is mechanically bypassed.",
      "Both Green and Yellow Hydraulic System Pressure is required.",
      "The RAT can supply the Blue Elevator Servos, which are controlled directly by the THS Wheels."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Pitch control is through the THS. Electronic / Electrical Control of THS Motors is mechanically bypassed. Guide Q252, PDF p.44.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q252, PDF p.44",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Rudder trim. Guide Q253, PDF p.44.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q253, PDF p.44",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: If both pilots press their take-over pushbutton, the last to press gets priority. Guide Q254, PDF p.44.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q254, PDF p.44",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Slats and Flaps move at half speed. Guide Q255, PDF p.44.",
    "ref": "FCOM DSC-27, Flight Controls · Guide Q255, PDF p.44",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 256,
    "p": 44,
    "c": "Flight Controls",
    "q": "Which pitch-attitude and clean manoeuvring-load limits apply in Normal Law?",
    "o": [
      "+30°/-15° pitch and -1 g to +2.5 g clean",
      "+45°/-30° pitch and 0 g to +2 g clean",
      "+30°/-15° pitch and 0 g to +2 g clean",
      "+20°/-10° pitch with no g limit"
    ],
    "a": 0,
    "w": "Normal Law pitch attitude is limited to +30°/-15°; the clean structural manoeuvring range is -1 g to +2.5 g.",
    "ref": "FCOM DSC-27-20-10 / LIM-AG-F_CTL · Guide Q256, PDF p.44",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 257,
    "p": 44,
    "c": "Flight Controls",
    "q": "What happens to pitch control in Alternate Law when the landing gear is extended?",
    "o": [
      "Pitch reverts to Direct Law",
      "Pitch returns to Normal Law",
      "Pitch remains Alternate Law with all protections",
      "Mechanical backup engages"
    ],
    "a": 0,
    "w": "In pitch Alternate Law, landing-gear extension causes pitch to revert to Direct Law.",
    "ref": "FCOM DSC-27-20-20, Reconfiguration Control Laws · Guide Q257, PDF p.44",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 258,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "Normal Brake pressure is supplied by:",
    "o": [
      "The yellow hydraulic system.",
      "The blue hydraulic system.",
      "The green hydraulic system.",
      "The green system, or yellow system via the PTU."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: The green hydraulic system. Guide Q258, PDF p.45.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q258, PDF p.45",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: From Normal Brakes. Guide Q259, PDF p.45.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q259, PDF p.45",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 260,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "The Landing Gear:",
    "o": [
      "Is lowered and raised by Green System, or Yellow System via the PTU.",
      "Cannot be lowered hydraulically above 260 kt.",
      "Position is indicated on the Landing Gear Indicator Panel only.",
      "Requires both LGCIUs to be functioning for Raising or Lowering: if either LGCIU is INOP use Gravity Extension.;"
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Cannot be lowered hydraulically above 260 kt. Guide Q260, PDF p.45.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q260, PDF p.45",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 261,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "With alternate braking and anti-skid unavailable, to what value is brake pressure limited?",
    "o": [
      "1,000 PSI",
      "1,900 PSI",
      "2,500 PSI",
      "3,000 PSI"
    ],
    "a": 0,
    "w": "The current FCOM limits alternate braking without anti-skid to 1,000 PSI. The guide's 1,900-PSI answer was corrected.",
    "ref": "FCOM DSC-32-30-10 / PRO-ABN-BRAKES [QRH] · Guide Q261, PDF p.45",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-32-10-20, Landing Gear Hydraulic Supply · Guide Q262, PDF p.45",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 263,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "Landing gear has been selected down but the lights on the LANDING GEAR panel do not light up. What is the most likely fault?",
    "o": [
      "The bulbs in the indicator have all blown.",
      "LGCIU 1 is not receiving electrical power.",
      "LGCIU 2 is not receiving electrical power.",
      "Green hydraulic system has failed."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: LGCIU 1 is not receiving electrical power. Guide Q263, PDF p.45.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q263, PDF p.45",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 264,
    "p": 45,
    "c": "Landing Gear & Brakes",
    "q": "Nose wheel steering by the handwheel is limited to:",
    "o": [
      "+95° under all conditions.",
      "+75° under all conditions.",
      "Up to +75° depending on aircraft ground speed.",
      "+75° up to 70 kt and then +6° up to 130 kt."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Up to +75° depending on aircraft ground speed. Guide Q264, PDF p.45.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q264, PDF p.45",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: NW STRG DISC message is displayed in green, it becomes amber with one engine running. Guide Q265, PDF p.46.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q265, PDF p.46",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-32-10-40, WHEEL SD Page · Guide Q266, PDF p.46",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: The hand-wheels can normally steer + 75° up to 20 kt, reducing to zero at 70 kt ground speed. Guide Q267, PDF p.46.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q267, PDF p.46",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Pressurised by Green Hydraulics. Guide Q268, PDF p.46.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q268, PDF p.46",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 269,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "With Engines running, setting the Parking Brake ON:",
    "o": [
      "Applies green pressure to the wheels, while de-activating antiskid.",
      "Will give an amber memo on ECAM.",
      "Applies Yellow pressure to the wheels. All other Braking Systems are de — activated until the Park Brake is switched OFF.",
      "Depletes the accumulator pressure."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Applies Yellow pressure to the wheels. All other Braking Systems are de — activated until the Park Brake is switched OFF. Guide Q269, PDF p.46.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q269, PDF p.46",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Above 260 kt or if Gravity Extension has been used. Guide Q270, PDF p.46.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q270, PDF p.46",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 271,
    "p": 46,
    "c": "Landing Gear & Brakes",
    "q": "The landing gear can be extended by:",
    "o": [
      "Green hydraulic system or the Yellow system via the PTU.",
      "Green hydraulic system or by Gravity.",
      "Blue hydraulic system or by Gravity.",
      "Green hydraulic system or by Gravity (with Yellow system down locking)."
    ],
    "a": 1,
    "w": "FCOM cross-check retained the guide answer: Green hydraulic system or by Gravity. Guide Q271, PDF p.46.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q271, PDF p.46",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 272,
    "p": 47,
    "c": "Landing Gear & Brakes",
    "q": "On approach, a red arrow adjacent to the landing gear selector lever illuminates if:",
    "o": [
      "The landing gear position disagrees with the L/G lever position.",
      "The landing gear is not Locked Down after Extension.",
      "The landing gear is not Locked Down and the aircraft is below 750'.",
      "The landing gear is not locked down when the Flap Lever is set to 3 or FULL."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: The landing gear is not Locked Down and the aircraft is below 750'. Guide Q272, PDF p.47.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q272, PDF p.47",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 273,
    "p": 47,
    "c": "Landing Gear & Brakes",
    "q": "The maximum nose wheel steering deflection available using the rudder pedals is:",
    "o": [
      "+/-75° depending on the ground speed.",
      "+-6°.",
      "Up to +/- 6° depending on ground speed.",
      "+/- 76°."
    ],
    "a": 2,
    "w": "FCOM cross-check retained the guide answer: Up to +/- 6° depending on ground speed. Guide Q273, PDF p.47.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q273, PDF p.47",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Green system for Normal brakes with Yellow system pressure for the Alternate brakes. Guide Q274, PDF p.47.",
    "ref": "FCOM DSC-32, Landing Gear · Guide Q274, PDF p.47",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-WGHT · Guide Q275, PDF p.48",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-SPD · Guide Q276, PDF p.48",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-OPS · Guide Q277, PDF p.48",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-WGHT · Guide Q278, PDF p.48",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-F_CTL · Guide Q279, PDF p.48",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-WGHT · Guide Q280, PDF p.48",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "The current value is 38 kt with the gust included; the older steady-wind-plus-gust wording was revised.",
    "ref": "FCOM LIM-AG-OPS-ARPT_WIND · Guide Q281, PDF p.48",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-WGHT · Guide Q282, PDF p.49",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-OPS-ARPT_WIND · Guide Q283, PDF p.49",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-SPD, Landing Gear Speeds · Guide Q284, PDF p.49",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AFS-10, AP Use · Guide Q285, PDF p.49",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AFS-20-10 · Guide Q286, PDF p.49",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-OPS-ARPT_WIND · Guide Q287, PDF p.49",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-WGHT · Guide Q288, PDF p.49",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-SPD, Wipers · Guide Q289, PDF p.49",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-SPD, Landing Gear Speeds · Guide Q290, PDF p.50",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AFS-10, AP Use · Guide Q291, PDF p.50",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM PRO-NOR-SOP-04, Preliminary Cockpit Preparation · Guide Q292, PDF p.50",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-OPS, Door Wind Limitations · Guide Q293, PDF p.50",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-SPD, Landing Gear Speeds · Guide Q294, PDF p.50",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-SPD, Flaps/Slats Speeds · Guide Q295, PDF p.50",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-49-10-20 / LIM-APU-20 · Guide Q296, PDF p.50",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-APU-10 · Guide Q297, PDF p.51",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 298,
    "p": 51,
    "c": "Limitations",
    "q": "What is the maximum continuous engine-oil temperature?",
    "o": [
      "140 °C",
      "155 °C",
      "165 °C",
      "135 °C"
    ],
    "a": 0,
    "w": "The current A/C 21-CMHT value is 140 °C. A transient up to 155 °C is permitted for 15 minutes; the old 155-°C continuous answer was revised.",
    "ref": "FCOM LIM-ENG, Oil · Guide Q298, PDF p.51",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-F_CTL · Guide Q299, PDF p.51",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 300,
    "p": 51,
    "c": "Limitations",
    "q": "What pause is required between successive automatic or manual ground-start cycles?",
    "o": [
      "20 seconds",
      "15 seconds",
      "30 seconds",
      "60 seconds"
    ],
    "a": 0,
    "w": "The current A/C 21-CMHT requirement is 20 seconds. Four failed cycles require 15 minutes of cooling.",
    "ref": "FCOM LIM-ENG, Starter · Guide Q300, PDF p.51",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-APU-20, APU Bleed · Guide Q301, PDF p.51",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM LIM-AG-SPD, Landing Gear Speeds · Guide Q302, PDF p.51",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "Current operator MEL — verify current revision · Guide Q303, PDF p.51",
    "review": "mel-check"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "Current operator MEL — definitions and preamble · Guide Q304, PDF p.52",
    "review": "mel-check"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-24-10-30, Emergency Generation · Guide Q305, PDF p.53",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "w": "FCOM cross-check retained the guide answer: Battery-charging current is out of limits. Guide Q306, PDF p.53.",
    "ref": "FCOM DSC / PRO, applicable system section · Guide Q306, PDF p.53",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 307,
    "p": 53,
    "c": "Miscellaneous",
    "q": "What do flashing green CAPT and F/O priority lights and the DUAL INPUT voice alert indicate?",
    "o": [
      "Both sidesticks are being moved simultaneously",
      "Both autopilots are engaged",
      "The flight directors are in independent mode",
      "Both radio altimeters have failed"
    ],
    "a": 0,
    "w": "Simultaneous sidestick inputs trigger both priority lights and, when installed, the DUAL INPUT voice alert.",
    "ref": "FCOM DSC-27-20-30, Sidestick Priority Logic · Guide Q307, PDF p.53",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-27-20-10-20, Ground Mode · Guide Q308, PDF p.53",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-27-20-10-20, Flare Mode · Guide Q309, PDF p.53",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 310,
    "p": 53,
    "c": "Miscellaneous",
    "q": "Which control law displays USE MAN PITCH TRIM in amber?",
    "o": [
      "Direct Law",
      "Normal Law",
      "Alternate Law with protections",
      "Mechanical backup only"
    ],
    "a": 0,
    "w": "The amber message accompanies Direct Law, where automatic pitch trim is unavailable.",
    "ref": "FCOM DSC-27-20-20, Direct Law · Guide Q310, PDF p.53",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-32-10-20 / PRO-ABN-LG [QRH] · Guide Q318, PDF p.54",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 319,
    "p": 54,
    "c": "Miscellaneous",
    "q": "Following loss of Blue and Yellow hydraulics, the landing gear should be:",
    "o": [
      "Lowered normally using the green system.",
      "Lowered using hydraulic pressure from the RAT.",
      "Lowered using the yellow system alternate extension line.",
      "Lowered using the emergency Gravity Extension system."
    ],
    "a": 3,
    "w": "FCOM cross-check retained the guide answer: Lowered using the emergency Gravity Extension system. Guide Q319, PDF p.54.",
    "ref": "FCOM DSC / PRO, applicable system section · Guide Q319, PDF p.54",
    "review": "fcom-checked"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 320,
    "p": 54,
    "c": "Miscellaneous",
    "q": "During a rejected takeoff above 72 kt with ground spoilers armed, what happens when both thrust levers are set to IDLE?",
    "o": [
      "Ground spoilers extend and MAX autobrake activates",
      "Only manual braking is available",
      "Ground spoilers remain retracted until both reversers deploy",
      "Autobrake cannot activate above 72 kt"
    ],
    "a": 0,
    "w": "Above 72 kt, armed ground spoilers extend when both thrust levers reach IDLE; their extension commands MAX autobrake. The missing 'armed' condition was added.",
    "ref": "FCOM DSC-27-10-20 / DSC-32-30-10, Rejected Takeoff · Guide Q320, PDF p.54",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
    "n": 321,
    "p": 54,
    "c": "Miscellaneous",
    "q": "If anti-skid is lost, to approximately what value must brake pressure be limited?",
    "o": [
      "1,000 PSI",
      "500 PSI",
      "1,900 PSI",
      "3,000 PSI"
    ],
    "a": 0,
    "w": "Without anti-skid, brake pressure is limited to approximately 1,000 PSI.",
    "ref": "FCOM PRO-ABN-BRAKES [QRH] · Guide Q321, PDF p.54",
    "review": "fcom-revised"
  },
  {
    "source": "A320 Student Study Questions — FCOM reconciled",
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
    "ref": "FCOM DSC-26-30-10, Avionics Smoke Detection · Guide Q322, PDF p.54",
    "review": "fcom-revised"
  }
];
