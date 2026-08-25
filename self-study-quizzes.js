/* Source-grounded A320 self-study quizzes. Options remain in fixed A-D order. */
window.SELF_STUDY_QUIZZES = [
  {
    "id": "gte1",
    "title": "Quiz 1 - Gas Turbine Engines: Fundamentals and IAE V2500",
    "source": "Gas Turbine Engines A320 Self Study Guide - Part 1",
    "questions": [
      {
        "q": "Which sequence correctly describes the four events of the Otto cycle?",
        "o": [
          "Compression, intake, exhaust, power",
          "Intake, compression, power, exhaust",
          "Intake, power, compression, exhaust",
          "Power, compression, intake, exhaust"
        ],
        "a": 1,
        "w": "The slide lists the Otto cycle as intake, compression, power, and exhaust.",
        "slide": 4
      },
      {
        "q": "Which statement best applies Newton's third law to jet propulsion?",
        "o": [
          "Thrust is created only by increasing fuel pressure.",
          "The engine pulls atmospheric air forward through the intake.",
          "Accelerating air rearwards produces an equal reaction that accelerates the aircraft forwards.",
          "The turbine pushes directly against the fuselage to create thrust."
        ],
        "a": 2,
        "w": "The engine accelerates atmospheric air, producing an equal force in the opposite direction.",
        "slide": 6
      },
      {
        "q": "How do propeller and jet engines differ in the way they produce thrust?",
        "o": [
          "A propeller gives a small acceleration to a large mass of air; a jet gives a large acceleration to a smaller mass of air.",
          "A propeller gives a large acceleration to a small mass of air; a jet does the opposite.",
          "Both accelerate the same mass of air by the same amount.",
          "A jet produces thrust without accelerating air."
        ],
        "a": 0,
        "w": "The presentation contrasts high-mass/low-acceleration propeller thrust with low-mass/high-acceleration jet thrust.",
        "slide": 7
      },
      {
        "q": "What is the primary purpose of the turbine section in the basic gas turbine engine?",
        "o": [
          "To meter fuel into the combustion chamber",
          "To slow the bypass airflow",
          "To cool the exhaust before discharge",
          "To extract energy to drive the compressor"
        ],
        "a": 3,
        "w": "The turbine extracts energy from the gas stream to drive the compressor and associated equipment.",
        "slide": 8
      },
      {
        "q": "During the inlet-and-compressor portion of the Brayton cycle, what happens to the airflow?",
        "o": [
          "Volume increases and pressure falls.",
          "Volume decreases and pressure rises.",
          "Volume and pressure both remain constant.",
          "Volume decreases while pressure also decreases."
        ],
        "a": 1,
        "w": "Compression reduces volume and raises pressure during the inlet-and-compressor stage.",
        "slide": 9
      },
      {
        "q": "Which statement about the Brayton cycle in an operating jet engine is correct?",
        "o": [
          "The inlet, compression, combustion, turbine and exhaust stages operate simultaneously.",
          "Compression begins only after the exhaust stage has finished.",
          "Combustion stops whenever the turbine is extracting energy.",
          "Only one engine stage is active at any given time."
        ],
        "a": 0,
        "w": "Unlike the separate events of a piston-engine cycle, all gas-turbine stages operate continuously at the same time.",
        "slide": 10
      },
      {
        "q": "Which statement best describes a turboprop engine?",
        "o": [
          "It relies entirely on exhaust jet velocity for thrust.",
          "It transfers most of the turbine energy through a shaft and reduction gears to a propeller.",
          "It has no turbine section downstream of the combustor.",
          "It is intended only for supersonic aircraft."
        ],
        "a": 1,
        "w": "A turboprop uses turbine power, a shaft, and reduction gearing to drive the propeller; the exhaust provides little thrust.",
        "slide": 13
      },
      {
        "q": "In a high-bypass turbofan, where is most of the thrust produced?",
        "o": [
          "By the accessory gearbox",
          "By the compressor bleed system",
          "By the core exhaust alone",
          "By the bypass airflow accelerated by the fan"
        ],
        "a": 3,
        "w": "The guide states that a turbofan receives some thrust from the core but most from bypass airflow.",
        "slide": 15
      },
      {
        "q": "What does a turbofan bypass ratio of 10:1 mean?",
        "o": [
          "Ten kilograms of air bypass the core for every one kilogram entering the core.",
          "One kilogram of air bypasses the core for every ten kilograms entering it.",
          "The fan turns ten times for each core rotation.",
          "Ten percent of the thrust is produced by bypass air."
        ],
        "a": 0,
        "w": "Bypass ratio compares bypass mass flow with core mass flow; 10:1 means ten units bypass for each unit through the core.",
        "slide": 17
      },
      {
        "q": "Which bypass-ratio category is dominant in commercial passenger aircraft?",
        "o": [
          "Zero bypass",
          "Low bypass",
          "High bypass",
          "Reverse bypass"
        ],
        "a": 2,
        "w": "The slide identifies high-bypass turbofans as the dominant commercial passenger-aircraft type.",
        "slide": 17
      },
      {
        "q": "For subsonic airflow, what is the main effect of a convergent duct?",
        "o": [
          "Velocity decreases while pressure and temperature rise.",
          "Velocity increases while pressure and temperature decrease.",
          "Velocity and pressure both increase.",
          "Velocity remains constant while pressure falls."
        ],
        "a": 1,
        "w": "The convergent-duct diagram shows increased velocity with reduced pressure and temperature.",
        "slide": 18
      },
      {
        "q": "What is the purpose of a diffuser ahead of the combustion chamber?",
        "o": [
          "To increase velocity and reduce pressure",
          "To ignite the fuel-air mixture",
          "To divert all airflow around the engine core",
          "To decrease velocity and increase pressure"
        ],
        "a": 3,
        "w": "A diffuser is a divergent duct that slows the gas stream and raises its pressure.",
        "slide": 20
      },
      {
        "q": "Why must intake air reach the compressor below the speed of sound, even on a supersonic aircraft?",
        "o": [
          "To maintain smooth flow through the compressor and turbine blades",
          "To eliminate the need for compression",
          "To ensure the exhaust remains subsonic",
          "To prevent the fan from producing bypass thrust"
        ],
        "a": 0,
        "w": "The inlet decelerates the air so it can flow smoothly through the compressor and turbine blade rows.",
        "slide": 22
      },
      {
        "q": "What makes up one stage of a centrifugal compressor?",
        "o": [
          "One rotor and the preceding turbine wheel",
          "Two stator rows and one combustor",
          "One impeller and one diffuser",
          "One fan and one nozzle guide vane"
        ],
        "a": 2,
        "w": "The guide defines a centrifugal-compressor stage as one impeller plus one diffuser.",
        "slide": 24
      },
      {
        "q": "Which is an advantage of a centrifugal compressor identified in the guide?",
        "o": [
          "Very small frontal area for a given airflow",
          "A high pressure rise per stage, up to about 8:1",
          "Lower susceptibility to leakage than all axial designs",
          "The highest overall compression ratio with one stage"
        ],
        "a": 1,
        "w": "A centrifugal compressor can achieve a high pressure rise per stage, listed as up to approximately 8:1.",
        "slide": 26
      },
      {
        "q": "Which component pair forms one axial-compressor stage?",
        "o": [
          "A rotor row followed by a stator row",
          "An impeller followed by a diffuser",
          "A turbine wheel followed by an exhaust strut",
          "A fan followed by a combustion liner"
        ],
        "a": 0,
        "w": "An axial-compressor stage consists of rotor blades followed by stator vanes.",
        "slide": 29
      },
      {
        "q": "What do axial-compressor stator vanes do?",
        "o": [
          "Add fuel and ignite the airflow",
          "Drive the rotor blades mechanically",
          "Convert kinetic energy into pressure and direct airflow to the next rotor",
          "Convert pressure into bypass thrust only"
        ],
        "a": 2,
        "w": "Stators recover pressure from airflow velocity and set the correct angle for the following rotor row.",
        "slide": 30
      },
      {
        "q": "Approximately what pressure ratio is produced by each axial-compressor stage in the presentation?",
        "o": [
          "8:1",
          "1.2:1",
          "10:1",
          "15:1"
        ],
        "a": 1,
        "w": "The presentation gives an approximate per-stage pressure increase of 1.2:1 for an axial compressor.",
        "slide": 30
      },
      {
        "q": "Which feature is an advantage of axial compressors over centrifugal compressors?",
        "o": [
          "Lower manufacturing complexity",
          "Lower starting-power requirement",
          "Higher pressure rise from a single stage",
          "Higher overall compression ratios and a smaller engine diameter"
        ],
        "a": 3,
        "w": "Axial compressors support high overall pressure ratios and a smaller diameter, reducing drag.",
        "slide": 31
      },
      {
        "q": "About what airflow speed is required in the primary combustion zone to keep the flame anchored?",
        "o": [
          "500 ft/s",
          "80 ft/s",
          "30 ft/s",
          "5-6 ft/s"
        ],
        "a": 3,
        "w": "The diffuser and recirculation reduce local speed to roughly 5-6 ft/s in the flame-anchoring region.",
        "slide": 34
      },
      {
        "q": "What is the main role of the combustion chamber's dilution zone?",
        "o": [
          "To provide a uniform, acceptable turbine-entry temperature and protect the chamber structure",
          "To create the initial ignition spark",
          "To raise airflow velocity to 500 ft/s before combustion",
          "To prevent all compressor bleed-air use"
        ],
        "a": 0,
        "w": "Dilution air evens and reduces the gas temperature before it reaches the turbine and protects the chamber structure.",
        "slide": 36
      },
      {
        "q": "What approximate optimum air-to-fuel ratio is stated for combustion?",
        "o": [
          "5:1",
          "8:1",
          "15:1",
          "30:1"
        ],
        "a": 2,
        "w": "The slide gives an optimum mixture of about 15 parts air to one part fuel by weight.",
        "slide": 37
      },
      {
        "q": "Which combination is associated with a lean flameout?",
        "o": [
          "High fuel pressure, high engine speed, and low airspeed",
          "Low fuel pressure, low engine speed, and high airspeed",
          "Rapid acceleration with excessive fuel flow",
          "High oil pressure with low exhaust velocity"
        ],
        "a": 1,
        "w": "The guide associates lean flameout with low fuel pressure, low engine speed, and high airspeed, such as descent or high altitude.",
        "slide": 37
      },
      {
        "q": "Which is an advantage of an annular combustion chamber?",
        "o": [
          "It uses only two fuel nozzles.",
          "It is the easiest design for individual can replacement.",
          "It is best suited only to centrifugal compressors.",
          "It has high combustion efficiency, reduced emissions, and a shorter length."
        ],
        "a": 3,
        "w": "The annular design provides an unbroken flame, high combustion efficiency, lower emissions, and a shorter arrangement.",
        "slide": 41
      },
      {
        "q": "What is the main packaging advantage of a reverse-flow annular combustor?",
        "o": [
          "It significantly reduces engine length.",
          "It eliminates all pressure losses.",
          "It permits the highest mass airflow in large engines.",
          "It removes the need for turbine nozzle guide vanes."
        ],
        "a": 0,
        "w": "Turning the gas path through an S-bend allows a substantially shorter engine.",
        "slide": 42
      },
      {
        "q": "Approximately how much of the gas-stream energy passing through the turbines is required to drive the compressor and engine accessories?",
        "o": [
          "10%",
          "75%",
          "25%",
          "100%"
        ],
        "a": 1,
        "w": "The presentation states that about 75% is required to turn the compressor and accessories.",
        "slide": 44
      },
      {
        "q": "How are turbine blades and nozzle guide vanes commonly cooled?",
        "o": [
          "By circulating engine oil over their outer surfaces",
          "By routing bypass air around the exhaust cone only",
          "By spraying fuel through the blade root",
          "By passing relatively cool compressor bleed air through the blade and out small holes"
        ],
        "a": 3,
        "w": "Compressor bleed air passes internally through the blades and exits via small cooling holes.",
        "slide": 49
      },
      {
        "q": "Which statement correctly describes the IAE V2500 low-pressure system?",
        "o": [
          "The LP compressor has a fan plus four stages, and the LP turbine has five stages.",
          "The LP compressor has five stages and no fan, while the LP turbine has four stages.",
          "Both the LP compressor and LP turbine have two stages.",
          "The LP turbine drives only the accessory gearbox."
        ],
        "a": 0,
        "w": "The V2500 slide identifies a fan plus four LP-compressor stages and five LP-turbine stages.",
        "slide": 57
      },
      {
        "q": "Through which shaft does the V2500 accessory gearbox receive mechanical power?",
        "o": [
          "Fan shaft",
          "LP shaft",
          "HP shaft",
          "Thrust-reverser shaft"
        ],
        "a": 2,
        "w": "The accessory gearbox is mechanically driven via the high-pressure shaft.",
        "slide": 58
      },
      {
        "q": "If EPR becomes unavailable and the FADEC reverts to N1 mode, which functions are lost according to the guide?",
        "o": [
          "All engine indication and fuel control",
          "Only engine-start capability",
          "Autothrust and alpha-floor protection",
          "Hydraulic and electrical generation"
        ],
        "a": 2,
        "w": "N1 reversion maintains equivalent thrust until lever movement, but autothrust and alpha-floor protection are lost.",
        "slide": 60
      }
    ]
  },
  {
    "id": "gte2",
    "title": "Quiz 2 - Gas Turbine Engines: Instrumentation, Stalls and Starting",
    "source": "Gas Turbine Engines A320 Self Study Guide - Part 2",
    "questions": [
      {
        "q": "Which set is presented as primary engine information on the upper ECAM/EICAS screen?",
        "o": [
          "Oil quantity, oil temperature, and vibration",
          "N1, EPR, and EGT",
          "Fuel used, groundspeed, and hydraulic pressure",
          "N2, cabin altitude, and electrical load"
        ],
        "a": 1,
        "w": "The guide lists N1, EPR, and EGT as primary engine information on the upper screen.",
        "slide": 3
      },
      {
        "q": "Which information is normally associated with the lower engine display?",
        "o": [
          "Oil temperature, oil pressure, fuel flow, and engine vibration",
          "Attitude, altitude, airspeed, and heading",
          "Only N1 and EPR",
          "Cabin altitude and differential pressure only"
        ],
        "a": 0,
        "w": "Secondary engine information includes oil temperature, oil pressure, fuel flow, and vibration.",
        "slide": 3
      },
      {
        "q": "Between which locations is engine pressure ratio (EPR) measured?",
        "o": [
          "Across the fuel pump and fuel nozzles",
          "Across the oil pump and oil filter",
          "Between the inlet before the fan and the area downstream of the last turbine stage",
          "Between the LP and HP compressor shafts"
        ],
        "a": 2,
        "w": "EPR compares inlet pressure just before the fan with pressure downstream of the last turbine stage.",
        "slide": 4
      },
      {
        "q": "How can an N1 rotational-speed signal be generated?",
        "o": [
          "Only by an oil-pressure capsule",
          "By a small AC generator on the N1 shaft or a magnetic pickup",
          "By the cabin pressure controller",
          "By comparing EGT with fuel quantity"
        ],
        "a": 1,
        "w": "The slide identifies a small shaft-mounted AC generator or a magnetic pickup as N1 speed sources.",
        "slide": 5
      },
      {
        "q": "Although N1 may be used to set thrust, which shaft speed governs the fuel quantity required to produce that thrust?",
        "o": [
          "N1",
          "Propeller RPM",
          "N2",
          "Starter RPM only"
        ],
        "a": 2,
        "w": "The guide states that required fuel quantity is governed by the N2 shaft speed.",
        "slide": 6
      },
      {
        "q": "Where is the EGT sensing probe located for the indication described in the guide?",
        "o": [
          "In the inlet ahead of the fan",
          "Inside the fuel tank",
          "Upstream of the compressor",
          "In the jet-pipe area downstream of the last turbine stage"
        ],
        "a": 3,
        "w": "EGT, TGT, and JPT refer to temperature measured in the jet-pipe area after the final turbine stage.",
        "slide": 7
      },
      {
        "q": "Why is turbine inlet temperature not normally measured directly at the first-stage turbine inlet?",
        "o": [
          "The temperature is too high for the sensor to survive reliably.",
          "The airflow is too slow to obtain a reading.",
          "The location is outside the engine core.",
          "The FADEC cannot use a temperature signal."
        ],
        "a": 0,
        "w": "The first-stage inlet is so hot that a temperature sensor would have a very short life.",
        "slide": 8
      },
      {
        "q": "How is aircraft fuel quantity normally displayed?",
        "o": [
          "Only as tank volume in litres",
          "As pressure in psi",
          "As fuel weight, with volume converted using specific gravity and temperature",
          "As a percentage of engine RPM"
        ],
        "a": 2,
        "w": "Fuel quantity is normally shown as mass; the computer converts measured volume using fuel density information.",
        "slide": 9
      },
      {
        "q": "Which pair of inputs is specifically mentioned as helping the FMS predict fuel remaining at future waypoints?",
        "o": [
          "Cabin altitude and EGT",
          "Oil pressure and N2",
          "Fuel quantity and differential pressure",
          "Fuel flow and current groundspeed"
        ],
        "a": 3,
        "w": "The FMS uses fuel flow and current groundspeed to predict remaining fuel along the route.",
        "slide": 10
      },
      {
        "q": "Why is the vibration indication useful to the flight crew and maintenance personnel?",
        "o": [
          "It directly measures fuel specific gravity.",
          "It is a useful indicator of engine health.",
          "It controls the start valve.",
          "It replaces the EGT indication."
        ],
        "a": 1,
        "w": "Vibration sensors monitor engine regions and vibration level is a useful indicator of engine condition.",
        "slide": 11
      },
      {
        "q": "Where is engine oil pressure measured?",
        "o": [
          "In the delivery line between the pump and the engine",
          "In the exhaust tailpipe",
          "At the fan inlet",
          "Inside the hydraulic reservoir"
        ],
        "a": 0,
        "w": "The oil-pressure sensing point is in the delivery line between the pump and the engine.",
        "slide": 12
      },
      {
        "q": "Why can increasing power on an affected engine help reduce high oil temperature?",
        "o": [
          "It closes the oil filter bypass.",
          "It stops the oil pump temporarily.",
          "It increases fuel flow through the fuel-oil heat exchanger, increasing oil cooling.",
          "It lowers N2 to zero."
        ],
        "a": 2,
        "w": "Higher power increases fuel flow, allowing more heat to be removed from the oil in the fuel-oil heat exchanger.",
        "slide": 13
      },
      {
        "q": "A torquemeter on a turboprop is roughly equivalent in importance to which jet-engine indication?",
        "o": [
          "Cabin altitude",
          "N1 or EPR",
          "Oil quantity only",
          "Differential pressure"
        ],
        "a": 1,
        "w": "Torque is used to set turboprop power and is compared with the role of N1 or EPR in a jet engine.",
        "slide": 14
      },
      {
        "q": "Where is compressor surge most likely to begin when compressed air is no longer held back effectively?",
        "o": [
          "At the exhaust nozzle",
          "At the most forward fan blade only",
          "At the fuel nozzles",
          "At the most rearward compressor rotors, progressing forwards"
        ],
        "a": 3,
        "w": "The most highly compressed air is near the rear, so flow breakdown tends to begin at the rearward rotors and move forward.",
        "slide": 15
      },
      {
        "q": "A compressor stall can be described as an imbalance between which two factors?",
        "o": [
          "Inlet airflow velocity and compressor RPM",
          "Fuel temperature and oil quantity",
          "Cabin altitude and aircraft altitude",
          "Fan diameter and turbine temperature"
        ],
        "a": 0,
        "w": "The guide defines compressor stall as an imbalance between inlet velocity and compressor rotational speed.",
        "slide": 16
      },
      {
        "q": "Which is a listed cause of compressor stall?",
        "o": [
          "Correctly matched axial airflow and rotor speed",
          "Foreign-object damage, in-flight icing, or operation outside the design envelope",
          "Normal use of the automatic start sequence",
          "A fully open outflow valve"
        ],
        "a": 1,
        "w": "FOD, contamination, icing, extreme manoeuvres, and improper handling are all listed causes.",
        "slide": 19
      },
      {
        "q": "Which group of indications is most consistent with a compressor stall?",
        "o": [
          "Quiet operation, steady parameters, and normal thrust response",
          "Only a low cabin-altitude indication",
          "Bangs, possible flame, fluctuating parameters, vibration, and high or rapidly rising EGT",
          "A gradual increase in fuel quantity"
        ],
        "a": 2,
        "w": "The presentation lists abnormal noises, possible flame, parameter fluctuations, vibration, sluggish response, and high EGT.",
        "slide": 20
      },
      {
        "q": "What is the usual immediate response for clearing a compressor stall, subject to the engine type and situation?",
        "o": [
          "Immediately and steadily reduce thrust on the affected engine.",
          "Advance the affected thrust lever rapidly to maximum.",
          "Switch off all engine indications.",
          "Increase aircraft angle of attack."
        ],
        "a": 0,
        "w": "The guide says the usual response is an immediate, steady thrust reduction on the affected engine.",
        "slide": 21
      },
      {
        "q": "How does a multi-spool compressor reduce the tendency to surge?",
        "o": [
          "It locks all compressor stages to one speed.",
          "It removes the rear compressor stages.",
          "It routes all air around the core.",
          "It allows separate compressor groups, each with its own turbine, to rotate at different speeds."
        ],
        "a": 3,
        "w": "Separate spools can rotate at the speeds best suited to their compressor stages.",
        "slide": 17
      },
      {
        "q": "Which sources can normally supply pneumatic bleed air for starting?",
        "o": [
          "Only the aircraft batteries",
          "A ground source, another operating engine, or the APU",
          "Only ram air",
          "The hydraulic accumulators"
        ],
        "a": 1,
        "w": "The guide lists a ground source, another running engine, and the APU as pneumatic start-air sources.",
        "slide": 22
      },
      {
        "q": "What does the air-starter reduction gearbox do?",
        "o": [
          "Converts low-RPM/high-torque input into high-RPM/low-torque output",
          "Converts air pressure directly into fuel pressure",
          "Converts high-RPM/low-torque turbine output into lower-RPM/higher-torque drive for N2",
          "Drives the N1 fan without involving N2"
        ],
        "a": 2,
        "w": "The small air turbine runs at high speed; reduction gearing supplies lower-speed, higher-torque drive to the engine shaft.",
        "slide": 23
      },
      {
        "q": "At approximately what engine speed does the air-starter clutch disengage after self-sustaining speed is reached?",
        "o": [
          "10% RPM",
          "20% RPM",
          "75% RPM",
          "35% RPM"
        ],
        "a": 3,
        "w": "The guide places starter air shutoff and clutch disengagement at around 35% engine RPM.",
        "slide": 24
      },
      {
        "q": "Which items are under FADEC control during the A320 start sequence?",
        "o": [
          "The start valve, igniters, and HP fuel valves",
          "Only the pack valves",
          "The landing gear and spoilers",
          "The outflow valve and safety valves"
        ],
        "a": 0,
        "w": "The FADEC controls the start valve, ignition, and high-pressure fuel valves during starting.",
        "slide": 26
      },
      {
        "q": "What happens when the ENG MODE selector is placed to IGN/START?",
        "o": [
          "The HP fuel valve opens immediately and N2 stops.",
          "The ENG system display appears, engine parameters become available, and the pack valves close.",
          "The start valve closes and both igniters stop.",
          "The outflow valve moves fully closed."
        ],
        "a": 1,
        "w": "IGN/START calls up the ENG SD page, makes engine parameters available, and closes the pack valves.",
        "slide": 27
      },
      {
        "q": "During the automatic start, what occurs when N2 exceeds approximately 43%?",
        "o": [
          "The HP fuel valve closes and dry cranking begins.",
          "The LP fuel valve closes and the pack valves remain closed permanently.",
          "The engine start valve closes and ignition stops.",
          "The FADEC removes all engine indications."
        ],
        "a": 2,
        "w": "At N2 above about 43%, the start valve closes and ignition is discontinued.",
        "slide": 28
      },
      {
        "q": "What are the first indications of successful ignition during an engine start?",
        "o": [
          "A rise in EGT and continued engine acceleration",
          "A decrease in N2 and zero fuel flow",
          "An immediate drop in oil temperature only",
          "A compressor-stall warning"
        ],
        "a": 0,
        "w": "Successful light-off is first shown by increasing EGT together with continued acceleration.",
        "slide": 29
      },
      {
        "q": "Which combination correctly states A320 start limitations from the presentation?",
        "o": [
          "No pause between starts; manual start unlimited; crank limited to 30 minutes",
          "15-second pause between ground-start cycles; two-minute manual-start limit; five-minute crank limit",
          "One-minute pause; five-minute manual-start limit; two-minute crank limit",
          "Starter permitted at any N2 on the ground or in flight"
        ],
        "a": 1,
        "w": "The stated limits include a 15-second pause, a two-minute manual-start cycle, and a five-minute crank cycle.",
        "slide": 31
      },
      {
        "q": "Which statement correctly distinguishes a hung start from a hot start?",
        "o": [
          "A hung start has normal acceleration and low EGT; a hot start has no fuel flow.",
          "A hung start is an oil-pressure problem only; a hot start is a cabin-pressure problem.",
          "A hung start shows RPM near-static and too low; a hot start shows acceleration with a dramatic EGT rise.",
          "They have identical indications and causes."
        ],
        "a": 2,
        "w": "Hung starts fail to accelerate adequately, while hot starts accelerate but develop excessive temperature.",
        "slide": 33
      },
      {
        "q": "What automatic recovery action does FADEC take after detecting a hot or hung start?",
        "o": [
          "It shuts the engine down permanently and displays no parameters.",
          "It opens the outflow valve and starts the packs.",
          "It selects only one igniter and increases fuel continuously.",
          "It applies dual ignition, commands fuel off, then re-commands fuel on within about 0.5 seconds."
        ],
        "a": 3,
        "w": "FADEC uses dual ignition and a brief automatic fuel interruption/reintroduction recovery sequence.",
        "slide": 34
      },
      {
        "q": "Which condition is listed as a reason to use or expect the need for a manual engine start?",
        "o": [
          "A previous abort due to hung start or a tailwind greater than 10 kt",
          "Normal cold conditions at sea level with strong bleed performance",
          "An N2 indication above the starter limit",
          "A fully successful automatic start with AVAIL displayed"
        ],
        "a": 0,
        "w": "Manual start is recommended after specified start abnormalities and when degraded margins or tailwind over 10 kt make an abort more likely.",
        "slide": 35
      }
    ]
  },
  {
    "id": "pxs",
    "title": "Quiz 3 - A320 Pressurisation, Hypoxia and Oxygen",
    "source": "Pressurisation A320 Self Study Guide",
    "questions": [
      {
        "q": "What is differential pressure in the context of aircraft pressurisation?",
        "o": [
          "The difference between engine oil and fuel pressure",
          "The difference between pressure inside and outside the aircraft cabin",
          "The difference between N1 and N2",
          "The pressure difference between two cabin zones only"
        ],
        "a": 1,
        "w": "Cabin differential pressure is the difference between internal cabin pressure and outside ambient pressure.",
        "slide": 3
      },
      {
        "q": "Approximately what proportion of Earth's atmosphere is oxygen?",
        "o": [
          "10%",
          "50%",
          "78%",
          "21%"
        ],
        "a": 3,
        "w": "The guide gives atmospheric composition as about 78% nitrogen and 21% oxygen.",
        "slide": 5
      },
      {
        "q": "What is hypoxia?",
        "o": [
          "Excess oxygen in the lungs",
          "A rapid increase in cabin pressure",
          "A decrease in aircraft groundspeed",
          "Insufficient oxygen in body tissues"
        ],
        "a": 3,
        "w": "Hypoxia is defined as insufficient oxygen in the tissues.",
        "slide": 6
      },
      {
        "q": "For most people, at approximately what altitude does hypoxia-related functional decline become significant?",
        "o": [
          "5,000 ft",
          "8,000 ft",
          "10,000 ft",
          "25,000 ft"
        ],
        "a": 2,
        "w": "The presentation states that functional decline becomes significant at about 10,000 ft for most people.",
        "slide": 6
      },
      {
        "q": "Which statement best describes a person's ability to recognise developing hypoxia?",
        "o": [
          "A person will always recognise hypoxia immediately.",
          "A person may not realise they are becoming hypoxic because the condition can be gradual and insidious.",
          "The brain is less susceptible to hypoxia than other body tissues.",
          "Hypoxia produces exactly the same symptoms in every person."
        ],
        "a": 1,
        "w": "Hypoxia is gradual and insidious; a person may not realise that they are becoming impaired.",
        "slide": 8
      },
      {
        "q": "Which is a possible sign or symptom of hypoxia?",
        "o": [
          "Improved peripheral vision and faster reaction time",
          "Cyanosis, impaired judgement, or a sense of euphoria",
          "Permanent improvement in coordination",
          "Increased ability to complete complex tasks"
        ],
        "a": 1,
        "w": "The guide lists cyanosis, cognitive impairment, poor coordination, and mood changes including euphoria.",
        "slide": 7
      },
      {
        "q": "What must be the first action when hypoxia or depressurisation is suspected?",
        "o": [
          "Complete the checklist before using oxygen",
          "Reduce thrust to idle",
          "Fit an oxygen mask",
          "Open the passenger doors"
        ],
        "a": 2,
        "w": "The presentation repeatedly emphasises fitting the oxygen mask first.",
        "slide": 15
      },
      {
        "q": "Which is a benefit of operating at altitude that is enabled by cabin pressurisation?",
        "o": [
          "Faster airspeeds, improved jet-engine performance, obstacle clearance, and less weather",
          "Elimination of all weather and turbulence",
          "Removal of the need for oxygen systems",
          "Unlimited fuselage differential pressure"
        ],
        "a": 0,
        "w": "The slides cite faster flight, engine efficiency, terrain clearance, reduced weather exposure, and passenger comfort.",
        "slide": 9
      },
      {
        "q": "How is cabin pressure normally controlled?",
        "o": [
          "By sealing all airflow in the cabin permanently",
          "By changing only the cockpit oxygen flow",
          "By using the safety valves as the primary controller",
          "By introducing conditioned air and regulating how much air leaves through the outflow valve"
        ],
        "a": 3,
        "w": "Conditioned air enters the cabin, while the outflow valve meters air leaving to control cabin altitude.",
        "slide": 10
      },
      {
        "q": "What cabin altitude is usually expected at maximum cruise altitude according to the guide?",
        "o": [
          "Sea level",
          "About 8,000 ft",
          "About 15,000 ft",
          "Equal to aircraft altitude"
        ],
        "a": 1,
        "w": "The presentation gives a typical maximum-cruise cabin altitude of around 8,000 ft.",
        "slide": 10
      },
      {
        "q": "What defines a depressurisation?",
        "o": [
          "Cabin altitude can no longer be maintained and cabin pressure begins to equalise with aircraft altitude.",
          "The cabin altitude remains constant throughout climb.",
          "The outflow valve operates normally during descent.",
          "Aircraft altitude becomes lower than cabin altitude on the ground."
        ],
        "a": 0,
        "w": "Depressurisation occurs when the system cannot maintain cabin altitude and pressure starts equalising with ambient conditions.",
        "slide": 11
      },
      {
        "q": "Which group is characteristic of a rapid decompression?",
        "o": [
          "A quiet cabin, gradual warming, and no airflow",
          "A loud bang, blast of wind, temperature drop, fog or mist, and rapid hypoxia onset",
          "Only a slow increase in oil temperature",
          "A steady cabin altitude with normal pressure"
        ],
        "a": 1,
        "w": "Those are the rapid-decompression indications listed on the slide.",
        "slide": 12
      },
      {
        "q": "Which may indicate a slow decompression?",
        "o": [
          "Popping ears, abdominal discomfort, oxygen-mask deployment, a cabin-altitude alert, or hissing",
          "A sudden engine overspeed only",
          "An immediate fire warning only",
          "A reduction in groundspeed with no physiological symptoms"
        ],
        "a": 0,
        "w": "The guide lists physiological symptoms, mask deployment, a cabin-altitude alert, and possible hissing near a door seal.",
        "slide": 13
      },
      {
        "q": "In the Helios 2005 example, what pressurisation configuration was overlooked before takeoff?",
        "o": [
          "Automatic mode with the outflow valve fully closed",
          "Semi-automatic mode with landing elevation correctly set",
          "Both safety valves open at maximum positive differential pressure",
          "Manual mode with the aft outflow valve partially open"
        ],
        "a": 3,
        "w": "The case study states that the aircraft departed with pressurisation in manual and the aft outflow valve partially open.",
        "slide": 14
      },
      {
        "q": "What is Time of Useful Consciousness (TUC)?",
        "o": [
          "The time until a person falls asleep at sea level",
          "The time required to descend from cruise altitude",
          "The period during which a person can still perform useful tasks effectively before hypoxia causes serious impairment",
          "The endurance of the portable oxygen bottle only"
        ],
        "a": 2,
        "w": "TUC describes the limited time in which effective action remains possible as hypoxia develops.",
        "slide": 16
      },
      {
        "q": "What TUC range is shown for 25,000 ft?",
        "o": [
          "15-20 seconds",
          "30-60 seconds",
          "3-5 minutes",
          "20-30 minutes"
        ],
        "a": 2,
        "w": "The TUC table gives approximately 3-5 minutes at 25,000 ft.",
        "slide": 16
      },
      {
        "q": "What TUC range is shown for 35,000 ft?",
        "o": [
          "30-60 seconds",
          "3-5 minutes",
          "5-10 minutes",
          "30 minutes"
        ],
        "a": 0,
        "w": "The TUC table gives approximately 30-60 seconds at 35,000 ft.",
        "slide": 16
      },
      {
        "q": "What happens to the high-pressure air received by the A320 packs?",
        "o": [
          "It is discharged overboard without conditioning.",
          "It is used only to start the engines.",
          "It is stored in the oxygen cylinders.",
          "It is conditioned, mixed with recirculated air, and distributed to the cabin."
        ],
        "a": 3,
        "w": "The packs condition the high-pressure air, which is then mixed with recirculated air and distributed.",
        "slide": 17
      },
      {
        "q": "Which statement correctly describes the A320 Cabin Pressure Controllers (CPCs)?",
        "o": [
          "They are independent, automatic controllers and provide information required for ECAM.",
          "They operate only when the aircraft is on the ground.",
          "They are mechanically linked and have no ECAM interface.",
          "They control only the passenger oxygen masks."
        ],
        "a": 0,
        "w": "The two CPCs are described as independent and automatic, and they generate required ECAM information.",
        "slide": 17
      },
      {
        "q": "Where is the A320's single outflow valve located?",
        "o": [
          "On the left side above the flotation line",
          "On the nose landing-gear door",
          "Inside the cockpit overhead panel",
          "On the right side of the fuselage below the flotation line"
        ],
        "a": 3,
        "w": "The outflow valve is on the right-hand side of the fuselage below the flotation line.",
        "slide": 18
      },
      {
        "q": "Under which conditions can the Residual Pressure Control Unit automatically open the outflow valve on the ground?",
        "o": [
          "Outflow valve not fully open; both CPCs failed or manual mode selected; aircraft on ground; engines shut down or all ADIRS below 100 kt",
          "Aircraft airborne above 10,000 ft with both engines running",
          "Only when maximum positive differential pressure is reached in flight",
          "Whenever the landing gear is retracted"
        ],
        "a": 0,
        "w": "The slide lists that combination of residual-pressure, controller/mode, ground, and engine/airspeed conditions.",
        "slide": 19
      },
      {
        "q": "When will a passenger-door residual-pressure warning light flash red?",
        "o": [
          "Whenever the slide is armed in flight",
          "When residual pressure is detected, the slide is disarmed, and the engines are off or the aircraft is on the ground",
          "Only when both safety valves are open",
          "Whenever cabin altitude is below airport elevation"
        ],
        "a": 1,
        "w": "Those three conditions are listed for the flashing red residual-pressure warning.",
        "slide": 20
      },
      {
        "q": "At approximately which differential pressures do the A320 safety valves protect the cabin?",
        "o": [
          "+1 psi and -8.6 psi",
          "+5 psi and 0 psi",
          "+8.6 psi and -1 psi",
          "+9.0 psi and -9.0 psi"
        ],
        "a": 2,
        "w": "The independent safety valves protect at approximately +8.6 psi and -1 psi differential pressure.",
        "slide": 21
      },
      {
        "q": "What maximum positive differential pressure is stated for the A320?",
        "o": [
          "1.0 psi",
          "8.0 psi",
          "8.6 psi",
          "9.0 psi"
        ],
        "a": 3,
        "w": "The slide states a maximum positive differential pressure of 9.0 psi.",
        "slide": 21
      },
      {
        "q": "Under what conditions can the ram-air inlet provide ambient air to the air-conditioning system?",
        "o": [
          "In an emergency below 10,000 ft, provided the ditching pushbutton has not been selected",
          "At any altitude whenever ditching is selected",
          "Only above 25,000 ft",
          "Only with differential pressure above 8.6 psi"
        ],
        "a": 0,
        "w": "The emergency ram-air function is described for use below 10,000 ft and is inhibited by ditching selection.",
        "slide": 22
      },
      {
        "q": "How does cabin differential pressure affect the selected RAM AIR function?",
        "o": [
          "If differential pressure is above 1 psi, the ram-air door opens fully.",
          "Differential pressure has no effect on ram-air operation.",
          "Below 1 psi, automatic control opens the outflow valve to about 50%; above 1 psi, the ram-air door will not open and no airflow is supplied.",
          "Below 1 psi, both safety valves close permanently."
        ],
        "a": 2,
        "w": "The guide uses 1 psi as the threshold for opening the outflow valve and permitting actual ram airflow.",
        "slide": 22
      },
      {
        "q": "Which operating modes are available for the A320 pressurisation system?",
        "o": [
          "Automatic only",
          "Manual and emergency only",
          "Semi-automatic only",
          "Automatic, semi-automatic, and manual"
        ],
        "a": 3,
        "w": "The presentation identifies automatic, semi-automatic, and manual modes.",
        "slide": 23
      },
      {
        "q": "Which statement correctly describes semi-automatic and manual pressurisation operation?",
        "o": [
          "Semi-automatic uses FMGS data only; manual mode keeps the automatic motors powered.",
          "Semi-automatic requires selection of landing elevation when FMGS data is unavailable; manual mode enables the manual outflow-valve motor.",
          "Both modes prevent the outflow valve from moving.",
          "Manual mode is controlled only by the RPCU with no crew input."
        ],
        "a": 1,
        "w": "Without FMGS data, landing elevation is selected; MAN mode removes power from the automatic motors and enables the manual motor.",
        "slide": 23
      },
      {
        "q": "Which oxygen systems are provided on the A320?",
        "o": [
          "Only portable oxygen bottles",
          "A cockpit-fixed system, a cabin-fixed system, and portable oxygen equipment",
          "Only passenger chemical oxygen generators",
          "A single shared cockpit-and-cabin bottle with no portable equipment"
        ],
        "a": 1,
        "w": "The guide identifies cockpit-fixed, cabin-fixed, and portable oxygen systems.",
        "slide": 25
      },
      {
        "q": "What public-address call is shown for an A320 emergency descent?",
        "o": [
          "Brace, brace, brace",
          "Cabin crew, prepare for landing",
          "Attention, attention, emergency descent",
          "Mayday, engine failure"
        ],
        "a": 2,
        "w": "The emergency-descent slide shows the call: 'Attention Attention Emergency Descent.'",
        "slide": 26
      }
    ]
  }
];
