(function(){
  'use strict';

  const FCOM_HASH='7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06';
  const SUPPLEMENT_HASH='29f9d3e5690f158bc8a53788810854eefb887940249bc7e4c30f5169c2239d03';
  const SOURCE='Ansett A320 FCOM DSC-23 · Doc1 supplement';
  const REVISION='communications-fcom-20260914';
  const pageLabel=pages=>'PDF '+(pages.length===1?'p.':'pp.')+pages.join(', ');
  const supplementLabel=pages=>pages.length?' · Doc1.docx '+(pages.length===1?'p.':'pp.')+pages.join(', '):'';
  const makeQuestion=(id,n,subtopic,q,o,w,section,pdfPages,supplementPages=[])=>({
    source:SOURCE,
    n,
    p:supplementPages[0]||pdfPages[0],
    c:'Communications',
    subtopic,
    q,
    o,
    a:0,
    w,
    ref:'Ansett A320 FCOM '+section+' · '+pageLabel(pdfPages)+' · page revision 22 MAY 24'+supplementLabel(supplementPages),
    review:'fcom-source-checked',
    verification:{
      id,
      status:'checked',
      pdfPages,
      sourceHash:FCOM_HASH,
      supplementPages,
      supplementHash:SUPPLEMENT_HASH
    },
    revision:REVISION
  });

  const QUESTIONS=[
    makeQuestion(
      'C23-001',1,'General',
      'Which systems provide internal communication on the aircraft?',
      ['The flight, cabin, and service interphones, plus the passenger address system','Only VHF and HF radios','SATCOM and ACARS only','The flight warning and recording systems'],
      'Internal communication is provided by the flight, cabin, and service interphones and by the passenger address system.',
      'DSC-23-10-10',[1062],[9,10]
    ),
    makeQuestion(
      'C23-002',2,'General',
      'Which means can provide external communication in voice or data mode?',
      ['VHF or HF radio and, when installed, SATCOM','The cabin and service interphones only','The passenger address system only','The cockpit voice recorder and DFDR'],
      'The FCOM identifies VHF/HF radio and optional SATCOM as external communication paths for voice or data.',
      'DSC-23-10-10',[1062],[10,11]
    ),
    makeQuestion(
      'C23-003',3,'Radio Tuning',
      'Which Radio Management Panel functions in the emergency electrical configuration?',
      ['RMP 1 only','RMP 2 only','RMP 3 only','All installed RMPs'],
      'Only RMP 1 functions in the emergency electrical configuration.',
      'DSC-23-10-20',[1064],[12]
    ),
    makeQuestion(
      'C23-004',4,'Radio Tuning',
      'If one RMP fails, what capability does the remaining RMP normally retain?',
      ['Control of all VHF and HF transceivers','Control of its onside VHF radio only','Audio reception only, with no tuning capability','Control of navigation receivers only'],
      'The remaining RMP normally controls all VHF and HF transceivers. The FCOM notes a VHF 3/ACARS exception when RMP 3 is not installed.',
      'DSC-23-10-20',[1064],[12]
    ),
    makeQuestion(
      'C23-005',5,'Radio Tuning',
      'What happens when the RMP transfer key is pressed?',
      ['The ACTIVE and STBY/CRS frequencies interchange and the receiver tunes the new active frequency','The active frequency is copied into both windows','The RMP changes from communications to navigation backup','The selected transceiver is switched off'],
      'The transfer key swaps the ACTIVE and STBY/CRS entries and tunes the receiver to the new ACTIVE frequency.',
      'DSC-23-10-20',[1065],[11]
    ),
    makeQuestion(
      'C23-006',6,'Radio Tuning',
      'How do the concentric RMP frequency selector knobs divide the tuning task?',
      ['The outer knob selects whole numbers and the inner knob selects decimal fractions','The outer knob selects decimals and the inner knob selects whole numbers','The outer knob selects the radio and the inner knob controls volume','Both knobs change only the active frequency'],
      'The outer knob changes the whole-number units and the inner knob changes the decimal portion of the standby frequency.',
      'DSC-23-10-20 and DSC-23-60-A',[1066,1116],[11]
    ),
    makeQuestion(
      'C23-007',7,'Radio Tuning',
      'For an equipped HF transceiver, what is the normal mode and how is AM selected?',
      ['SSB is the default; press the AM pushbutton to select AM','AM is the default; press NAV to select SSB','FM is the default; press the transfer key to select AM','AM is permanently selected and cannot be changed'],
      'HF normally operates in single side-band mode. The AM pushbutton selects amplitude modulation when required.',
      'DSC-23-10-20',[1066],[11]
    ),
    makeQuestion(
      'C23-008',8,'Radio Tuning',
      'What is the effect of pressing the guarded NAV key on an RMP?',
      ['It enables RMP selection of navigation receivers and courses without changing communication-radio selections or frequencies','It transfers the standby communication frequency to active','It selects VHF 3 for voice communication','It disables FMGS navigation tuning permanently'],
      'The NAV key enables radio-navigation backup selection through the RMP and does not disturb communication-radio selections or frequencies.',
      'DSC-23-10-20',[1066],[11,12]
    ),
    makeQuestion(
      'C23-009',9,'Audio Management',
      'Which equipment is central to the flight-deck audio management system?',
      ['An Audio Management Unit and three Audio Control Panels, plus the associated audio sockets and controls','A single RMP and the flight control computers','The two CIDS directors only','The CVR and DFDR control panel only'],
      'The audio management system includes the AMU, three ACPs, station sockets, microphones, loudspeakers, PTT controls, and audio switching.',
      'DSC-23-10-30',[1068],[10]
    ),
    makeQuestion(
      'C23-010',10,'Audio Management',
      'If audio channel 1 or 2 fails because of its ACP or corresponding AMU channel, how can the crew restore that position’s audio functions?',
      ['Use the AUDIO SWITCHING selector to connect the affected position to the third audio channel','Retune the radio on the opposite RMP','Select STBY NAV on both RMPs','Press the SELCAL/CALL RESET key'],
      'The AUDIO SWITCHING selector lets the captain or first officer use the third ACP/audio channel after a channel 1 or 2 failure.',
      'DSC-23-10-30 and DSC-23-10-50',[1068,1078],[12]
    ),
    makeQuestion(
      'C23-011',11,'CIDS',
      'Which system transmits, controls, and processes the cabin and service interphones, passenger address, and other cabin-system signals?',
      ['The Cabin Intercommunication Data System','The Flight Augmentation Computer','The Flight Data Interface and Management Unit','The Air Data Inertial Reference System'],
      'CIDS controls and processes the cabin/service interphone, PA, and several other cabin-system functions.',
      'DSC-23-10-30',[1070,1071]
    ),
    makeQuestion(
      'C23-012',12,'Cockpit Voice Recorder',
      'How much cockpit voice recording is retained by the CVR?',
      ['The last 2 hours','The last 30 minutes','The last 12 hours','The last 25 hours'],
      'The CVR retains only the last two hours of recording.',
      'DSC-23-10-40',[1072],[8]
    ),
    makeQuestion(
      'C23-013',13,'Cockpit Voice Recorder',
      'When are passenger-address announcements recorded by the CVR?',
      ['When PA reception is selected on at least one Audio Control Panel','Only when the announcement is made from the cockpit handset','Only while both engines are running','Whenever the PA IN USE light is extinguished'],
      'The CVR records PA announcements when PA reception is selected on at least one ACP.',
      'DSC-23-10-40',[1072],[8]
    ),
    makeQuestion(
      'C23-014',14,'Cockpit Voice Recorder',
      'After the last engine is shut down on the ground, how long does the CVR normally continue recording?',
      ['5 minutes, provided the CVR jack is not used','It stops immediately','2 minutes regardless of CVR-jack use','Until aircraft electrical power is removed, with no time limit'],
      'Automatic CVR recording continues until five minutes after the last engine shutdown, provided the CVR jack is not used.',
      'DSC-23-10-40',[1072],[8]
    ),
    makeQuestion(
      'C23-015',15,'Cockpit Voice Recorder',
      'Under which conditions does holding the CVR ERASE pushbutton for 2 seconds erase the full recording?',
      ['The aircraft is on the ground and the parking brake is on','The aircraft is in flight with the gear down','At least one engine is running and the parking brake is off','The aircraft is on the ground with the parking brake off'],
      'CVR erase is enabled only on the ground with the parking brake on, after the ERASE pushbutton is held for two seconds.',
      'DSC-23-10-40',[1073],[8]
    ),
    makeQuestion(
      'C23-016',16,'Cockpit Voice Recorder',
      'What conditions are required to activate the CVR test?',
      ['The CVR must be on, the parking brake on, and the CVR TEST pushbutton pressed and held','Both engines must be running and the parking brake released','The aircraft must be airborne and the GND CTL pushbutton off','The CVR must be erased immediately before the test'],
      'Press and hold CVR TEST while the CVR is powered and the parking brake is on. GND CTL may be used to power the recorder on the ground when required.',
      'DSC-23-10-40',[1073],[8]
    ),
    makeQuestion(
      'C23-017',17,'Audio Control Panel',
      'What does a flashing external-radio transmission key on an ACP indicate?',
      ['An incoming SELCAL','An invalid tuned frequency','A stuck microphone','A failed RMP'],
      'An external VHF or HF transmission key flashes when an incoming SELCAL is received.',
      'DSC-23-10-50',[1074],[9]
    ),
    makeQuestion(
      'C23-018',18,'Audio Control Panel',
      'What does pressing the SELCAL/CALL RESET key cancel?',
      ['The cockpit buzzer associated with the call','The tuned standby frequency','All radio reception','The active passenger-address transmission'],
      'The SELCAL/CALL RESET key cancels the call buzzer.',
      'DSC-23-10-50',[1075],[9]
    ),
    makeQuestion(
      'C23-019',19,'Audio Control Panel',
      'What is the purpose of the ACP VOICE filter key?',
      ['To inhibit the commonly used VOR and ADF identification audio signals','To remove speech from a received radio signal','To mute all cockpit aural alerts','To select SATCOM voice mode'],
      'The VOICE filter inhibits the common VOR and ADF ident audio so voice messages can be monitored more clearly.',
      'DSC-23-10-50',[1075,1076],[12]
    ),
    makeQuestion(
      'C23-020',20,'Audio Control Panel',
      'How does the ACP INT/RAD switch behave when held in RAD?',
      ['RAD is momentary and the switch returns to the off position when released','RAD latches until INT is selected','RAD changes the RMP active frequency','RAD automatically selects every transmission key'],
      'RAD keys the boomset or oxygen-mask microphone through the selected transmission channel and springs back to off when released.',
      'DSC-23-10-50',[1076],[12]
    ),
    makeQuestion(
      'C23-021',21,'Audio Control Panel',
      'How does the ACP INT/RAD switch behave when selected to INT?',
      ['It remains in INT until another switch position is selected','It springs immediately back to off','It disables interphone reception','It selects the passenger address system'],
      'INT activates the boomset or mask microphone for interphone use and remains selected until the crew selects another position.',
      'DSC-23-10-50',[1076],[12]
    ),
    makeQuestion(
      'C23-022',22,'Audio Control Panel',
      'If the sidestick RADIO selector is pressed while the ACP INT/RAD switch is on INT, which function has priority?',
      ['Radio transmission','Interphone transmission','Passenger address','SELCAL reset'],
      'The sidestick RADIO selection has priority over the interphone function.',
      'DSC-23-10-50',[1077]
    ),
    makeQuestion(
      'C23-023',23,'Audio Control Panel',
      'What does the cockpit loudspeaker volume knob not control?',
      ['The loudness of aural alerts and voice messages','The volume of radio communications','Whether radio audio reaches the loudspeaker','The radio-communication loudspeaker level'],
      'The knob adjusts radio-communication loudspeaker volume; it does not control aural-alert or voice-message loudness.',
      'DSC-23-10-50',[1077]
    ),
    makeQuestion(
      'C23-024',24,'Audio Switching',
      'What is the correct audio-switching action after ACP 1 fails?',
      ['Select CAPT 3; the captain uses ACP 3 and AUDIO 3 XFRD appears in green','Select F/O 3; the captain continues to use ACP 1','Select both RMP NAV keys','No crew action is possible because changeover is automatic'],
      'CAPT 3 connects the captain’s acoustic equipment to the third occupant’s ACP. The green AUDIO 3 XFRD memo appears and the third occupant loses access.',
      'DSC-23-10-50 and DSC-23-50',[1078,1115],[12]
    ),
    makeQuestion(
      'C23-025',25,'Flight Interphone',
      'Where can the ground crew connect to the flight interphone?',
      ['At the FLT INT jack on the maintenance nose-landing-gear panel forward of the nose-gear bay','At the aft attendant panel only','At the RMP on the center pedestal','At the emergency evacuation panel'],
      'The ground-crew FLT INT jack is on the maintenance nose-landing-gear panel forward of the nose-gear bay.',
      'DSC-23-20-10',[1080,1082],[9]
    ),
    makeQuestion(
      'C23-026',26,'Flight Interphone',
      'Before transmitting on the flight interphone, which selection sequence is required?',
      ['Select the INT reception knob out, press the INT transmission key, then use a PTT switch or RAD','Select CAB reception in, press PA, then use the transfer key','Select VHF 1 reception, press SELCAL RESET, then use INT','Press NAV on the RMP, select HF, then use the handset'],
      'The crew selects INT reception out and the INT transmission key, then keys the microphone with a PTT control or the RAD position.',
      'DSC-23-20-10',[1082],[9]
    ),
    makeQuestion(
      'C23-027',27,'Cabin Interphone',
      'How is cabin-interphone audio received and adjusted at an ACP?',
      ['Press and release the CAB reception knob to the out position, then rotate it for volume','Hold the CAB transmission key and rotate the RMP tuning knob','Select PA and use the loudspeaker volume knob','Press the CAB reception knob in and leave its light off'],
      'With the CAB reception knob out, its white light comes on and cabin audio is received; rotating the knob adjusts volume.',
      'DSC-23-20-20',[1084],[9]
    ),
    makeQuestion(
      'C23-028',28,'Cabin Call',
      'What occurs at a selected cabin station when the flight crew makes a normal call from the CALLS panel?',
      ['Two steady pink area-call lights, a CAPTAIN CALL message with a green light, and a high-low chime','Flashing red EVAC lights and a continuous evacuation tone','A blue COCKPIT CALL light and external horn','Only an amber SEL light on the RMP'],
      'A normal cockpit-to-cabin call produces two steady pink lights, CAPTAIN CALL on the applicable AIP with a green light, and a high-low chime.',
      'DSC-23-20-20',[1086],[9]
    ),
    makeQuestion(
      'C23-029',29,'Cabin Call',
      'What does a flight-deck emergency call produce in the cabin?',
      ['Flashing pink lights at all area call panels, EMERGENCY CALL on all AIPs, and three high-low chimes','One steady pink light and a single chime at the forward station only','A continuous cockpit buzzer with no cabin indication','Only an AUDIO 3 XFRD memo'],
      'The guarded EMER pushbutton flashes the pink area-call lights, displays EMERGENCY CALL on all AIPs, and repeats the high-low chime three times.',
      'DSC-23-20-20',[1086],[9]
    ),
    makeQuestion(
      'C23-030',30,'Cabin Call',
      'What flight-deck indications follow a cabin crewmember’s normal CAPT call?',
      ['ATT lights flash on all ACPs and a buzzer sounds unless inhibited for takeoff or landing','MECH lights flash and the external horn sounds','EVAC lights flash and the evacuation tone sounds','Only the RMP SEL lights illuminate'],
      'A cabin CAPT call flashes the ATT lights on all ACPs and sounds a cockpit buzzer, which is inhibited during takeoff and landing.',
      'DSC-23-20-20',[1088],[9]
    ),
    makeQuestion(
      'C23-031',31,'Cabin Call',
      'What distinguishes a cabin EMER CALL on the flight deck?',
      ['The EMER ON light flashes white, CALL flashes amber, ATT flashes on all ACPs, and three buzzers sound unless inhibited','Only one steady ATT light appears with no aural alert','The RMP active frequency changes to 121.5 MHz','The cockpit horn sounds continuously with no visual indication'],
      'A cabin EMER CALL flashes the EMER ON and CALL indications and all ACP ATT lights, with three consecutive buzzers unless takeoff/landing inhibition applies.',
      'DSC-23-20-20',[1088],[9]
    ),
    makeQuestion(
      'C23-032',32,'Service Interphone',
      'How many service-interphone jacks are included in the system described by the FCOM?',
      ['Seven','Three','Five','Nine'],
      'The service-interphone system includes seven interphone jacks and an overhead OVRD switch.',
      'DSC-23-20-30',[1090],[9]
    ),
    makeQuestion(
      'C23-033',33,'Service Interphone',
      'When do the service-interphone jacks become available automatically after landing?',
      ['Ten seconds after landing, provided the landing gear is locked down','Immediately at touchdown regardless of gear position','Only after both engines are shut down','Five minutes after electrical power is removed'],
      'Ground personnel can use the service-interphone jacks ten seconds after landing when the landing gear is locked down.',
      'DSC-23-20-30',[1092],[10]
    ),
    makeQuestion(
      'C23-034',34,'Service Interphone',
      'How can service-interphone communication be enabled when the landing gear is not locked down?',
      ['Press the SVCE INT OVRD pushbutton','Press and hold the CVR TEST pushbutton','Select CAPT 3 on the audio-switching panel','Tune VHF 3 on RMP 1'],
      'The SVCE INT OVRD pushbutton enables service-interphone communication when the landing gear is not locked down, including the on-jacks condition described by the supplement.',
      'DSC-23-20-30',[1092],[5,10]
    ),
    makeQuestion(
      'C23-035',35,'Service Interphone',
      'Which ACP selections are used by flight crew to transmit over the service interphone?',
      ['CAB reception knob out, CAB transmission key selected, then a PTT switch or RAD','INT reception knob in, PA selected, then the RMP transfer key','VHF 1 reception only, with no transmission key','PA reception out and the CVR GND CTL pushbutton'],
      'For service interphone through the audio system, select CAB reception out and CAB transmission, then key the microphone with PTT or RAD.',
      'DSC-23-20-30',[1092],[10]
    ),
    makeQuestion(
      'C23-036',36,'Ground Mechanic Call',
      'What happens when the ground mechanic presses the COCKPIT CALL pushbutton?',
      ['MECH lights flash amber on the ACPs and a buzzer sounds; the buzzer stops on release and the lights time out after 60 seconds unless reset','ATT lights flash and three cabin chimes sound','The blue external COCKPIT CALL light and horn activate at the mechanic’s panel','The evacuation horn sounds for three seconds'],
      'A ground-to-cockpit call flashes the ACP MECH indications and sounds the buzzer. Releasing the button stops the buzzer; unre-set lights extinguish after 60 seconds.',
      'DSC-23-20-30',[1094],[9]
    ),
    makeQuestion(
      'C23-037',37,'Passenger Address',
      'Which system hosts the passenger address function, and which flight-deck microphones may be used?',
      ['CIDS hosts it; boom/headset, hand, oxygen-mask microphones, or the cockpit handset may be used','The FMGC hosts it; only the hand microphone may be used','The CVR hosts it; only the oxygen-mask microphone may be used','The RMP hosts it; only the sidestick PTT may be used'],
      'CIDS hosts the PA system. Flight crew can make announcements with boom/headset, hand, or oxygen-mask microphones, or with the cockpit handset.',
      'DSC-23-20-40',[1096],[10]
    ),
    makeQuestion(
      'C23-038',38,'Passenger Address',
      'To make a PA announcement using a boom, mask, or hand microphone, what must the flight crewmember do?',
      ['Select the PA reception knob out and press and hold the PA transmission key; no separate PTT is required','Select the PA reception knob in and hold the sidestick RADIO selector','Press the RMP NAV key and select CAB reception','Use the cockpit handset because ACP microphones cannot transmit on PA'],
      'Select PA reception out and hold the PA transmission key while speaking. The PA key itself keys the microphone, so a separate PTT selection is not required.',
      'DSC-23-20-40',[1097],[10]
    ),
    makeQuestion(
      'C23-039',39,'Passenger Address',
      'When does the PA IN USE light illuminate?',
      ['When PA is active from the cockpit, cabin, or a prerecorded announcement','Only for flight-deck announcements','Only for cabin-crew announcements','Only while the cockpit handset is off its cradle'],
      'The PA IN USE light comes on for PA activation from the cockpit or cabin, including a prerecorded announcement.',
      'DSC-23-20-40',[1098],[10]
    ),
    makeQuestion(
      'C23-040',40,'Radio Operation',
      'What should the crew do with an RMP that has failed?',
      ['Switch the affected RMP off; one remaining RMP can control all receivers','Leave it on and select CAPT 3','Press its NAV key repeatedly until the displays return','Use the ACP to retune the receivers directly'],
      'The FCOM directs the crew to switch the affected RMP off. One remaining RMP can control all receivers.',
      'DSC-23-60-A',[1117],[12]
    ),
    makeQuestion(
      'C23-041',41,'VHF',
      'Which statement describes VHF 1 in the emergency electrical configuration?',
      ['Only VHF 1 functions, and its tuning range is 118.000 to 136.975 MHz','Only VHF 2 functions, from 108.000 to 117.950 MHz','All VHF systems function with no restrictions','VHF 3 alone functions because it normally carries ACARS'],
      'Only VHF 1 functions in the emergency electrical configuration. The installed VHF communication range is 118.000 to 136.975 MHz.',
      'DSC-23-30-10',[1100]
    ),
    makeQuestion(
      'C23-042',42,'HF',
      'Which restriction applies when using an installed HF radio on the ground?',
      ['HF must not be used during refueling or fuel-transfer operations','HF may be used during refueling if AM mode is selected','HF voice is always inhibited on the ground','HF data automatically overrides every ground-use restriction'],
      'The FCOM prohibits HF use during refueling or fuel transfer and requires people to remain clear of the antenna vicinity.',
      'DSC-23-30-10',[1100]
    ),
    makeQuestion(
      'C23-043',43,'SELCAL',
      'When is the SELCAL aural warning inhibited?',
      ['During takeoff and landing','Whenever the parking brake is on','Only in the emergency electrical configuration','Whenever VHF 3 is in data mode'],
      'The aural SELCAL warning is inhibited during takeoff and landing; the system otherwise advises the crew aurally and visually.',
      'DSC-23-30-10',[1101],[9]
    ),
    makeQuestion(
      'C23-044',44,'SATCOM',
      'On an aircraft equipped with SATCOM, what happens to ATSU or ACARS data when VHF 3 is unavailable?',
      ['It automatically switches to SATCOM','It is permanently lost until VHF 3 returns','It switches to the passenger address system','It is recorded only by the CVR'],
      'ATSU or ACARS normally uses VHF 3 and automatically changes to SATCOM when VHF 3 is unavailable.',
      'DSC-23-30-20-10',[1102]
    ),
    makeQuestion(
      'C23-045',45,'SATCOM',
      'How is the optional SATCOM cockpit voice interface normally controlled?',
      ['The ACP controls call setup and termination, while the MCDU selects the call number','The RMP controls the call number and the CVR ends the call','The CALLS panel controls all call functions','The sidestick selects the number and the ACP tunes the frequency'],
      'For SATCOM cockpit voice, the ACP controls call setup/termination and the MCDU is used for call-number selection.',
      'DSC-23-30-20-10',[1102]
    ),
    makeQuestion(
      'C23-046',46,'Emergency Evacuation',
      'With CAPT & PURS selected, what happens when an evacuation is initiated from the cabin?',
      ['The cockpit EVAC light flashes and the cockpit horn sounds continuously; cabin EVAC lights flash and the evacuation tone sounds continuously','Only a three-second cockpit horn sounds, with no cabin indications','The cockpit ON light alone illuminates steadily','The alert is ignored because only the cockpit can initiate it'],
      'In CAPT & PURS, a cabin command can initiate the alert: the cockpit EVAC light flashes and horn sounds continuously, while cabin lights flash and the tone sounds continuously.',
      'DSC-23-40-10',[1110,1111],[7]
    ),
    makeQuestion(
      'C23-047',47,'Emergency Evacuation',
      'What is the function of the HORN SHUT OFF pushbutton on the evacuation panel?',
      ['It silences the cockpit horn generated by a cabin-initiated evacuation alert','It cancels every evacuation indication in the cockpit and cabin','It prevents a cockpit-initiated evacuation alert','It resets the ELT'],
      'HORN SHUT OFF silences the cockpit horn produced by a cabin-initiated evacuation alert; it is not the master cancellation for the other indications.',
      'DSC-23-40-10',[1111],[7]
    ),
    makeQuestion(
      'C23-048',48,'Emergency Locator Transmitter',
      'In ARMED, which emergency frequencies does the ELT transmit on after an impact?',
      ['121.5, 243, and 406 MHz','118.0, 121.5, and 136.975 MHz','2.8, 24, and 406 MHz','108.0, 243, and 329.15 MHz'],
      'In ARMED, impact activation causes the ELT to transmit on 121.5, 243, and 406 MHz.',
      'DSC-23-40-30',[1112],[7]
    ),
    makeQuestion(
      'C23-049',49,'Emergency Locator Transmitter',
      'If the ELT is triggered unintentionally while ARMED, how is it reset?',
      ['Select TEST/RESET to reset the ELT and stop transmission','Select ON and leave it there for ten seconds','Press the SELCAL/CALL RESET key','Switch off RMP 1'],
      'Selecting TEST/RESET resets an inadvertently triggered ELT and stops its transmission; the same position starts the ELT autotest.',
      'DSC-23-40-30',[1112],[7]
    ),
    makeQuestion(
      'C23-050',50,'Memo Display',
      'What does the green ACARS CALL memo indicate?',
      ['ACARS has received a ground message requesting voice communication on VHF','VHF 3 has failed permanently','The cabin is ready for takeoff','A SATCOM emergency call is connected'],
      'ACARS CALL appears when ACARS receives a ground message requesting VHF voice communication; it pulses green for 60 seconds and then remains steady.',
      'DSC-23-50',[1114]
    ),
    makeQuestion(
      'C23-051',51,'Radio Operation',
      'When should VHF 3 be used for voice communication if ACARS is installed?',
      ['Only when VHF 1 and VHF 2 are inoperative','As the normal primary voice radio','Whenever a SELCAL is received','Only during takeoff and landing'],
      'VHF 3 normally supports ACARS data. Use it for voice only when VHF 1 and VHF 2 are inoperative because voice mode temporarily removes the ATC datalink connection.',
      'DSC-23-60-A',[1118],[11]
    )
  ];

  window.COMMUNICATIONS_FCOM_QUESTIONS=QUESTIONS;
  window.SYSTEMS_EXAM_QUESTIONS=(window.SYSTEMS_EXAM_QUESTIONS||[]).concat(QUESTIONS);
})();
