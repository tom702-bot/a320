(function(){
  'use strict';

  const REVISION='communications-distractors-20260914';
  const CRITERIA=Object.freeze([
    'Every distractor answers the question that was asked.',
    'Options use parallel wording and a comparable level of detail.',
    'Incorrect choices are plausible A320 Communications alternatives but remain unambiguously wrong.',
    'The source-backed correct answer is preserved exactly.',
    'Option positions remain shuffled by the trainer at display time.'
  ]);

  // Presentation-only replacements. The imported source options are retained on each
  // question as sourceOptions so the supplied workbook and FCOM audit trail stay intact.
  const OPTION_SETS=Object.freeze({
    'QB152':['RMP','ACP','MCDU','AUDIO SWITCHING panel'],
    'QB153':['ACP','CALLS panel','RMP','AUDIO SWITCHING panel'],
    'QB154':['ACP','RMP','MCDU','AUDIO SWITCHING panel'],
    'QB155':[
      'sound the Flight Deck horn for 3 seconds',
      'sound the Flight Deck horn for 1 second',
      'sound the Flight Deck horn for 5 seconds',
      'sound the Flight Deck horn continuously until RESET is pressed'
    ],
    'QB156':[
      'Yes',
      'No',
      'Only from the F/A station that initiated the evacuation',
      'Only when the CAPT & PURS switch is selected to PURS'
    ],
    'QB157':[
      'Left side of Overhead Panel',
      'Right side of Overhead Panel',
      'Forward center pedestal',
      'Aft overhead panel'
    ],
    'QB158':[
      'first engine is started',
      'aircraft electrical power is first applied',
      'parking brake is released',
      'second engine is started'
    ],
    'QB160':[
      'Overhead Panel',
      'Center Pedestal',
      'Rear Center Pedestal',
      'Main Instrument Panel',
    ],
    'QB161':[
      '60 seconds or a RESET button is pressed on an ACP',
      '30 seconds or a RESET button is pressed on an ACP',
      'until the call is answered using the cockpit handset',
      'until the takeoff or landing call inhibition becomes active'
    ],
    'QB162':[
      'Forward, Left Overhead Panel',
      'Forward, Right Overhead Panel',
      'Center Pedestal',
      'Aft Overhead Panel'
    ],
    'QB163':[
      'Yes',
      'No',
      'Only when the announcement uses the cabin handset',
      'Only when PA reception is selected on all three ACPs'
    ],
    'QB164':[
      'Allows the Service Interphone to operate when the aircraft is on jacks.',
      'Allows the Flight Interphone to operate when the aircraft is airborne and the landing gear is retracted.',
      'Isolates the Cabin Interphone from the Flight Deck handset.',
      'Transfers the Service Interphone from ACP 1 to ACP 3.'
    ],
    'QB165':[
      'Pick up the handset.',
      'Press the handset PTT.',
      'Select the CAB reception knob before lifting the handset.',
      'Press and hold the handset PTT before lifting it from the cradle.'
    ],
    'QB166':[
      'Pick up the handset and press the PTT button.',
      'Pick up the handset and press the CAPT button.',
      'Select PA transmission on the ACP before lifting the handset.',
      'Pick up the handset and press the ALL call button.'
    ],
    'QB167':[
      'To select a comm. or nav. radio to control and to select its frequency.',
      'To select a radio for transmission and adjust the received-audio volume independently for each available source.',
      'To transfer a failed crew audio channel to the third Audio Control Panel.',
      'To initiate normal and emergency calls to the cabin stations.'
    ],
    'QB168':[
      'To select which radio is used for transmission and to receive from any number of radios.',
      'To select a communication or navigation radio for control and then tune the selected radio’s operating frequency.',
      'To transfer the Captain or First Officer to the third audio channel.',
      'To initiate normal and emergency calls between the Flight Deck and Cabin.'
    ],
    'QB169':[
      'No, the FMGS normally tunes the navigation radios.',
      'Yes, an RMP normally tunes both communication and navigation radios.',
      'Yes, RMP 1 normally tunes VOR/ILS while RMP 2 normally tunes ADF.',
      'No, the ACP normally tunes the navigation radios.'
    ],
    'QB170':['One','Two','Three','Four'],
    'QB171':[
      'That a radio is being controlled by a RMP that is normally not assigned to the radio.',
      'That the standby frequency has been transferred to active and the receiver is tuning the newly selected frequency.',
      'That the RMP is operating in the radio-navigation backup mode.',
      'That the selected radio has failed its automatic frequency check.'
    ],

    'C23-001':[
      'The flight, cabin, and service interphones, plus the passenger address system',
      'The flight and cabin interphones, plus the cockpit and cabin call systems',
      'The cabin and service interphones, plus the SELCAL call system',
      'The flight and service interphones, plus the radio audio-management system'
    ],
    'C23-002':[
      'VHF or HF radio and, when installed, SATCOM',
      'VHF and HF only; SATCOM is data-only',
      'VHF radio and SATCOM only; HF is restricted to voice reception',
      'HF radio and SATCOM only; VHF cannot provide a data path'
    ],
    'C23-003':['RMP 1 only','RMP 1 and RMP 2','RMP 2 only','RMP 3 only'],
    'C23-004':[
      'Control of all VHF and HF transceivers',
      'All VHF transceivers but no HF transceivers',
      'Control of both HF transceivers and its normally assigned VHF transceiver',
      'Control of only its normally assigned VHF and HF transceivers'
    ],
    'C23-005':[
      'The ACTIVE and STBY/CRS frequencies interchange and the receiver tunes the new active frequency',
      'The STBY/CRS frequency is copied to ACTIVE while the previous active entry is discarded',
      'The ACTIVE frequency is copied to STBY/CRS while the receiver remains on the old active frequency',
      'The two displayed frequencies interchange but the receiver remains tuned to the previous active frequency'
    ],
    'C23-006':[
      'The outer knob selects whole numbers and the inner knob selects decimal fractions',
      'The outer knob selects decimal fractions and the inner knob selects whole numbers',
      'The outer knob changes the active frequency and the inner knob changes the standby frequency',
      'The outer knob selects the radio and the inner knob tunes its complete standby frequency'
    ],
    'C23-007':[
      'SSB is the default; press the AM pushbutton to select AM',
      'AM is the default; press the AM pushbutton to select SSB',
      'SSB is the default; press the NAV pushbutton to select AM',
      'AM is the default; press the transfer key to select SSB'
    ],
    'C23-008':[
      'It enables RMP selection of navigation receivers and courses without changing communication-radio selections or frequencies',
      'It enables RMP selection of navigation receivers and courses but clears every communication-radio selection and frequency on that RMP',
      'It enables navigation backup after transferring the active communication frequency to standby',
      'It displays navigation-receiver data, but all tuning remains under normal FMGS control'
    ],
    'C23-009':[
      'An Audio Management Unit and three Audio Control Panels, plus the associated audio sockets and controls',
      'Two Audio Management Units and two Audio Control Panels, plus separate audio sockets and controls for each crew position',
      'An Audio Management Unit and three Radio Management Panels, plus the cockpit loudspeakers',
      'Two CIDS directors and three Audio Control Panels, plus the cabin-interphone handsets'
    ],
    'C23-010':[
      'Use the AUDIO SWITCHING selector to connect the affected position to the third audio channel',
      'Use the AUDIO SWITCHING selector to connect the affected position to the other pilot’s audio channel',
      'Select RMP 3 to replace the failed ACP or AMU audio channel at the affected position',
      'Cycle the affected ACP transmission and reception keys to reset the failed AMU audio channel'
    ],
    'C23-011':[
      'The Cabin Intercommunication Data System',
      'The Audio Management System',
      'The Air Traffic Service Unit',
      'The Radio Management System'
    ],
    'C23-012':['The last 2 hours','The last 30 minutes','The last 12 hours','The last 25 hours'],
    'C23-013':[
      'When PA reception is selected on at least one Audio Control Panel',
      'Whenever a PA transmission key is selected, whether or not PA reception is selected',
      'Only when PA reception is selected on all three Audio Control Panels',
      'Only when the announcement is transmitted using the cockpit handset'
    ],
    'C23-014':[
      '5 minutes, provided the CVR jack is not used',
      '5 minutes, whether or not the CVR jack is used',
      '2 minutes, provided the CVR jack is not used',
      'Until aircraft electrical power is removed, with no timed shutdown'
    ],
    'C23-015':[
      'The aircraft is on the ground and the parking brake is on',
      'The aircraft is on the ground and the parking brake is off',
      'The aircraft is airborne and the landing gear is selected down',
      'The aircraft is on the ground, regardless of parking-brake position'
    ],
    'C23-016':[
      'The CVR must be on, the parking brake on, and the CVR TEST pushbutton pressed and held',
      'The CVR must be on, the parking brake off, and the CVR TEST pushbutton pressed and released',
      'The CVR must be off, the parking brake on, and the CVR ERASE pushbutton pressed and held',
      'The CVR must be on, the parking brake on, and the CVR TEST pushbutton pressed and released'
    ],
    'C23-017':[
      'An incoming SELCAL',
      'An active transmission',
      'A radio selected by a non-assigned RMP',
      'A continuously keyed microphone'
    ],
    'C23-018':[
      'The cockpit buzzer associated with the call',
      'The incoming SELCAL stored by the radio receiver',
      'The reception selection for the called radio',
      'The transmission selection for the active radio'
    ],
    'C23-019':[
      'To inhibit the commonly used VOR and ADF identification audio signals',
      'To inhibit voice audio while retaining VOR and ADF identification signals',
      'To suppress background static without affecting voice or navigation-ident audio',
      'To mute all received audio except the sidetone from the selected transmitter'
    ],
    'C23-020':[
      'RAD is momentary and the switch returns to the off position when released',
      'RAD is maintained and the switch remains in RAD until the crew deliberately selects another position',
      'RAD is momentary and the switch returns to INT when released',
      'RAD remains selected until the associated transmission key is released'
    ],
    'C23-021':[
      'It remains in INT until another switch position is selected',
      'It remains in INT only while the switch is held against spring pressure',
      'It returns to the off position immediately after the switch is released',
      'It returns to RAD immediately after the switch is released'
    ],
    'C23-022':['Radio transmission','Interphone transmission','Passenger-address transmission','SELCAL call reception'],
    'C23-023':[
      'The loudness of aural alerts and voice messages',
      'Selected radio-audio loudness through the cockpit loudspeaker',
      'The loudness of navigation-ident audio selected on an ACP',
      'The loudness of interphone audio routed to the cockpit loudspeaker'
    ],
    'C23-024':[
      'Select CAPT 3; the captain uses ACP 3 and AUDIO 3 XFRD appears in green',
      'Select F/O 3; the first officer uses ACP 3 while the captain remains connected to ACP 1',
      'Select CAPT 3; the captain transfers to ACP 2 and the third occupant retains ACP 3',
      'Leave the selector in NORM; the captain transfers automatically to the first officer’s ACP'
    ],
    'C23-025':[
      'At the FLT INT jack on the maintenance nose-landing-gear panel forward of the nose-gear bay',
      'At the FLT INT jack on the maintenance nose-landing-gear panel immediately aft of the nose-gear bay access door',
      'At the SVCE INT jack on the external-power panel forward of the nose-gear bay',
      'At the FLT INT jack on the aft-fuselage service-interphone panel'
    ],
    'C23-026':[
      'Select the INT reception knob out, press the INT transmission key, then use a PTT switch or RAD',
      'Select the INT reception knob in, press the INT transmission key, then use a PTT switch or RAD',
      'Select the INT reception knob out, leave the INT transmission key off, then use a PTT switch or RAD',
      'Select the CAB reception knob out, press the INT transmission key, then use the handset PTT'
    ],
    'C23-027':[
      'Press and release the CAB reception knob to the out position, then rotate it for volume',
      'Press and release the CAB reception knob to the out position, then use the loudspeaker knob for volume',
      'Leave the CAB reception knob in, then rotate it clockwise to receive and adjust the audio',
      'Select the CAB transmission key, then rotate the associated RMP knob for received-audio volume'
    ],
    'C23-028':[
      'Two steady pink area-call lights, a CAPTAIN CALL message with a green light, and a high-low chime',
      'Two flashing pink area-call lights, a CAPTAIN CALL message with an amber light, and three high-low chimes',
      'One steady pink area-call light, a CAPTAIN CALL message with a green light, and one high chime',
      'Two steady pink area-call lights, an EMERGENCY CALL message with a red light, and a continuous tone'
    ],
    'C23-029':[
      'Flashing pink lights at all area call panels, EMERGENCY CALL on all AIPs, and three high-low chimes',
      'Steady pink lights at the selected area call panel, CAPTAIN CALL on one AIP, and one high-low chime',
      'Flashing pink lights at all area call panels, CAPTAIN CALL on all AIPs, and a continuous high-low chime',
      'Flashing red EVAC lights at all area call panels, EMERGENCY CALL on all AIPs, and one low chime'
    ],
    'C23-030':[
      'ATT lights flash on all ACPs and a buzzer sounds unless inhibited for takeoff or landing',
      'ATT lights flash on ACP 1 only and three buzzers sound unless inhibited for takeoff or landing',
      'MECH lights flash on all ACPs and a buzzer sounds unless inhibited for takeoff or landing',
      'ATT lights illuminate steadily on all ACPs with no aural alert during a normal call'
    ],
    'C23-031':[
      'The EMER ON light flashes white, CALL flashes amber, ATT flashes on all ACPs, and three buzzers sound unless inhibited',
      'The EMER ON light illuminates steadily, CALL flashes green, ATT flashes on ACP 1, and one buzzer sounds unless inhibited',
      'The EMER ON light flashes white, CALL flashes amber, MECH flashes on all ACPs, and the buzzer sounds continuously',
      'The EMER ON light remains off, CALL flashes amber, ATT flashes on all ACPs, and one high-low chime sounds'
    ],
    'C23-032':['Seven','Five','Eight','Ten'],
    'C23-033':[
      'Ten seconds after landing, provided the landing gear is locked down',
      'Ten seconds after touchdown, regardless of landing-gear position',
      'Immediately after landing, provided the landing gear is locked down',
      'Sixty seconds after landing, provided the landing gear is locked down'
    ],
    'C23-034':[
      'Press the SVCE INT OVRD pushbutton',
      'Select CAB transmission and hold PTT',
      'Place the ACP INT/RAD switch in the INT position',
      'Select CAPT 3 on the AUDIO SWITCHING panel'
    ],
    'C23-035':[
      'CAB reception knob out, CAB transmission key selected, then a PTT switch or RAD',
      'CAB reception knob out, INT transmission key selected, then a PTT switch or RAD',
      'CAB reception knob in, CAB transmission key selected, then a PTT switch or RAD',
      'CAB reception knob out, CAB transmission key selected, with no PTT or RAD selection required'
    ],
    'C23-036':[
      'MECH lights flash amber on the ACPs and a buzzer sounds; the buzzer stops on release and the lights time out after 60 seconds unless reset',
      'MECH lights illuminate steadily on the ACPs and a buzzer sounds for three seconds; both stop when the pushbutton is released',
      'ATT lights flash amber on the ACPs and a buzzer sounds; the buzzer stops on release and the lights time out after 60 seconds unless reset',
      'MECH lights flash amber on the ACPs and a buzzer sounds continuously; both continue until an ACP RESET key is pressed'
    ],
    'C23-037':[
      'CIDS hosts it; boom/headset, hand, oxygen-mask microphones, or the cockpit handset may be used',
      'CIDS hosts it; only the cockpit handset and hand microphone may be used',
      'The AMU hosts it; boom/headset, hand, or oxygen-mask microphones may be used, but not the handset',
      'The RMP system hosts it; the sidestick PTT or cockpit handset may be used'
    ],
    'C23-038':[
      'Select the PA reception knob out and press and hold the PA transmission key; no separate PTT is required',
      'Select the PA reception knob out and press the PA transmission key; a separate PTT must then be held',
      'Leave the PA reception knob in and press and hold the PA transmission key; a separate PTT is not required',
      'Select the CAB reception knob out and press and hold the PA transmission key; a separate PTT is not required'
    ],
    'C23-039':[
      'When PA is active from the cockpit, cabin, or a prerecorded announcement',
      'When PA is active from cockpit or cabin, but not prerecorded announcements',
      'When PA is active from the cabin or a prerecorded announcement, but not from the cockpit',
      'When PA is transmitted from the ACP at that crew position, but not from any other source'
    ],
    'C23-040':[
      'Switch the affected RMP off; one remaining RMP can control all receivers',
      'Leave it on; the other RMP controls only its assigned receivers',
      'Switch the affected RMP off; the remaining RMP can control only its normally assigned receivers',
      'Cycle the affected RMP NAV key; both RMPs then share control of all receivers'
    ],
    'C23-041':[
      'Only VHF 1 functions, and its tuning range is 118.000 to 136.975 MHz',
      'Only VHF 2 functions, and its tuning range is 118.000 to 136.975 MHz',
      'Only VHF 1 functions, and its tuning range is 108.000 to 117.950 MHz',
      'Only VHF 3 functions, and its tuning range is 118.000 to 136.975 MHz'
    ],
    'C23-042':[
      'HF must not be used during refueling or fuel-transfer operations',
      'HF is prohibited during fuel transfer but permitted during refueling',
      'HF may be used during refueling if SSB mode is selected before transmission',
      'HF must not be used for any voice or data transmission while the aircraft is on the ground'
    ],
    'C23-043':[
      'During takeoff and landing',
      'With parking brake set',
      'While the landing gear is retracted',
      'During operation on emergency electrical power'
    ],
    'C23-044':[
      'It automatically switches to SATCOM',
      'It automatically switches to HF',
      'It automatically switches to VHF 1 data',
      'It remains queued until VHF 3 becomes available again'
    ],
    'C23-045':[
      'The ACP controls call setup and termination, while the MCDU selects the call number',
      'The MCDU controls call setup and termination, while the ACP selects the call number',
      'The ACP controls call setup and termination, while the RMP selects the call number',
      'The CALLS panel controls call setup and termination, while the MCDU selects the call number'
    ],
    'C23-046':[
      'The cockpit EVAC light flashes and the cockpit horn sounds continuously; cabin EVAC lights flash and the evacuation tone sounds continuously',
      'The cockpit EVAC light flashes and the cockpit horn sounds for three seconds; cabin EVAC lights and the evacuation tone remain off',
      'The cockpit EVAC light illuminates steadily with no horn; cabin EVAC lights flash and the evacuation tone sounds continuously',
      'The cockpit receives no indication; cabin EVAC lights flash and the evacuation tone sounds continuously'
    ],
    'C23-047':[
      'It silences the cockpit horn generated by a cabin-initiated evacuation alert',
      'It silences the evacuation tone at every cabin attendant station',
      'It extinguishes the cockpit and cabin EVAC lights but leaves the horn sounding',
      'It cancels and resets all cockpit and cabin evacuation indications'
    ],
    'C23-048':[
      '121.5, 243, and 406 MHz',
      '121.5 and 406 MHz only',
      '121.5, 243, and 329.15 MHz',
      '118.0, 243, and 406 MHz'
    ],
    'C23-049':[
      'Select TEST/RESET to reset the ELT and stop transmission',
      'Select ON and then return the ELT selector to ARMED',
      'Leave the selector in ARMED and press SELCAL/CALL RESET',
      'Cycle both aircraft batteries off and on while the ELT remains ARMED'
    ],
    'C23-050':[
      'ACARS has received a ground message requesting voice communication on VHF',
      'ACARS has received a ground data message requiring no voice response',
      'VHF 3 has been selected for voice and the ACARS data link is temporarily unavailable',
      'SATCOM has received a ground voice call that must be answered through the ACP'
    ],
    'C23-051':[
      'Only when VHF 1 and VHF 2 are inoperative',
      'Whenever either VHF 1 or VHF 2 is inoperative',
      'Whenever an ACARS CALL memo requests voice communication',
      'Whenever the ACARS data link is idle and a third voice radio is desired'
    ]
  });

  const bank=window.SYSTEMS_EXAM_QUESTIONS||[];
  const byId=new Map(bank.map(question=>[question?.verification?.id,question]));
  Object.entries(OPTION_SETS).forEach(([id,options])=>{
    const question=byId.get(id);
    if(!question)throw new Error('Missing Communications question for distractor review: '+id);
    const sourceOptions=Array.from(question.sourceOptions||question.o||[]);
    const sourceAnswerIndex=Number.isInteger(question.sourceAnswerIndex)?question.sourceAnswerIndex:question.a;
    const canonicalAnswer=sourceOptions[sourceAnswerIndex];
    if(options[0]!==canonicalAnswer)throw new Error('Curated options changed the correct answer for '+id);
    if(options.length!==4||new Set(options.map(option=>option.trim().toLowerCase())).size!==4){
      throw new Error('Curated options must contain four unique choices for '+id);
    }
    question.sourceOptions=Object.freeze(sourceOptions);
    question.sourceAnswerIndex=sourceAnswerIndex;
    question.o=Object.freeze(Array.from(options));
    question.a=0;
    question.distractorReview=Object.freeze({status:'curated',revision:REVISION,criteria:CRITERIA});
  });

  window.COMMUNICATIONS_OPTION_QUALITY=Object.freeze({
    revision:REVISION,
    ids:Object.freeze(Object.keys(OPTION_SETS)),
    criteria:CRITERIA
  });
})();
