/* Source-grounded A320 self-study quizzes. Options remain in fixed A-D order. */
window.SELF_STUDY_QUIZZES = [
  {
    "id": "gte1",
    "title": "Quiz 1 - Gas Turbine Engines: Fundamentals and IAE V2500",
    "source": "Gas Turbine Engines A320 Self Study Guide - Part 1",
    "banks": [
      {
        "id": "A",
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
        "id": "B",
        "questions": [
          {
            "q": "According to Newton's third law, how do the forces produced when two bodies interact compare?",
            "o": [
              "They are unequal and act in the same direction",
              "They are equal in magnitude and opposite in direction",
              "Only the heavier body experiences a force",
              "They cancel before either body accelerates"
            ],
            "a": 1,
            "w": "Newton's third law describes equal-magnitude forces acting in opposite directions.",
            "slide": 5
          },
          {
            "q": "What does the combustion chamber add to the compressed airflow?",
            "o": [
              "Energy through heating and expansion",
              "Only mechanical shaft speed",
              "Cold bypass air only",
              "Lubricating oil pressure"
            ],
            "a": 0,
            "w": "Combustion adds energy by heating and expanding the compressed air.",
            "slide": 8
          },
          {
            "q": "What is the basic function of the exhaust nozzle?",
            "o": [
              "Reduce compressor inlet velocity",
              "Meter fuel into the burner",
              "Exhaust air at high speed to produce thrust",
              "Drive the accessory gearbox directly"
            ],
            "a": 2,
            "w": "The exhaust nozzle accelerates the gas stream for the final production of thrust.",
            "slide": 8
          },
          {
            "q": "In the Brayton-cycle diagram, useful output may appear in which forms?",
            "o": [
              "Electrical power or hydraulic pressure only",
              "Cabin pressure or bleed-air flow",
              "Oil pressure or fuel pressure",
              "Jet reaction thrust or shaft horsepower"
            ],
            "a": 3,
            "w": "The enclosed Brayton-cycle area represents useful output as jet reaction or shaft horsepower.",
            "slide": 10
          },
          {
            "q": "Why are pure turbojets principally associated with higher-speed aircraft?",
            "o": [
              "They cannot operate above 350 mph",
              "They are designed for speeds above about 450 mph, where propeller efficiency falls",
              "They require a propeller at low altitude",
              "Their thrust is independent of forward speed"
            ],
            "a": 1,
            "w": "The guide associates turbojets with speeds exceeding about 450 mph as propeller efficiency falls at high blade-tip speeds.",
            "slide": 12
          },
          {
            "q": "Which operating characteristic is listed as a turboprop advantage over a comparable piston engine?",
            "o": [
              "Smooth running and easier starting at low temperatures",
              "Zero maintenance cost",
              "All thrust comes from the exhaust",
              "Best efficiency only above supersonic speed"
            ],
            "a": 0,
            "w": "The guide lists smooth running, lower weight, easier cold starting, and easier maintenance as turboprop advantages.",
            "slide": 13
          },
          {
            "q": "For what kind of operation are turboprops described as particularly suitable?",
            "o": [
              "Long-range supersonic transport",
              "Only hovering flight",
              "Short-range regional operation at speeds above about 300 mph",
              "Space-launch vehicles"
            ],
            "a": 2,
            "w": "Turboprops are described as appropriate above about 300 mph and well suited to short-range regional aircraft.",
            "slide": 14
          },
          {
            "q": "Which additional benefit accompanies the turbofan's fuel-efficiency advantage?",
            "o": [
              "Higher propeller-tip noise",
              "Elimination of the turbine",
              "A larger frontal area than every other engine",
              "Reduced noise"
            ],
            "a": 3,
            "w": "Reduced noise is identified as an added turbofan benefit.",
            "slide": 16
          },
          {
            "q": "Which pairing of bypass ratio and aircraft category matches the guide?",
            "o": [
              "Medium bypass - business jets",
              "High bypass - combat aircraft",
              "Low bypass - commercial transports only",
              "Zero bypass - regional turboprops"
            ],
            "a": 0,
            "w": "The guide associates medium-bypass turbofans with business jets and low-bypass engines with combat aircraft.",
            "slide": 17
          },
          {
            "q": "Why are turbine nozzle guide vanes formed as convergent ducts?",
            "o": [
              "To slow the gas before the turbine",
              "To accelerate the gas stream before it strikes the turbine blades",
              "To increase static pressure without changing velocity",
              "To divert all gas around the turbine"
            ],
            "a": 1,
            "w": "The convergent nozzle guide vanes accelerate the gas stream so the turbine can rotate at high speed.",
            "slide": 19
          },
          {
            "q": "How is gas pressure intended to behave through the combustion chamber?",
            "o": [
              "Rise continuously to the exhaust",
              "Fall to zero before ignition",
              "Remain reasonably constant",
              "Oscillate once per turbine revolution"
            ],
            "a": 2,
            "w": "The guide shows pressure being held reasonably constant through the combustion chamber.",
            "slide": 21
          },
          {
            "q": "Besides capturing and decelerating air, what does the intake contribute?",
            "o": [
              "Some compression",
              "Fuel atomisation",
              "Turbine cooling only",
              "Ignition energy"
            ],
            "a": 0,
            "w": "The inlet duct shape also performs some compression before the compressor.",
            "slide": 22
          },
          {
            "q": "What happens to air as it moves across a centrifugal compressor impeller?",
            "o": [
              "It is drawn toward the shaft centre and slowed",
              "It is burned within the impeller",
              "It bypasses the diffuser",
              "It is accelerated radially toward the rim"
            ],
            "a": 3,
            "w": "The impeller's radial blades accelerate air outward toward the rim before it enters the diffusers.",
            "slide": 24
          },
          {
            "q": "Why is a centrifugal compressor relatively tolerant of foreign-object damage?",
            "o": [
              "It has no moving components",
              "Its structure is more robust than the axial type",
              "Its blades are made of rubber",
              "All inlet air bypasses the impeller"
            ],
            "a": 1,
            "w": "The guide identifies the centrifugal compressor's robust structure as giving better FOD resistance.",
            "slide": 26
          },
          {
            "q": "Which dimensional disadvantage applies to a centrifugal compressor for a given airflow?",
            "o": [
              "A large frontal area",
              "An excessively long tailpipe",
              "No diffuser area",
              "A smaller diameter than an axial compressor"
            ],
            "a": 0,
            "w": "A centrifugal compressor needs a comparatively large frontal area for a given airflow.",
            "slide": 27
          },
          {
            "q": "What can result if centrifugal-compressor impeller vane clearance is made too small?",
            "o": [
              "Perfectly steady flow at all speeds",
              "Higher bypass ratio",
              "Aerodynamic buffeting, unsteady flow, and vibration",
              "Automatic ignition"
            ],
            "a": 2,
            "w": "Excessively small clearance can cause buffeting that produces unsteady airflow and vibration.",
            "slide": 27
          },
          {
            "q": "Why do large jet aircraft normally use axial compressors?",
            "o": [
              "They require no turbine drive",
              "They have only one compressor stage",
              "They are immune to FOD",
              "They can provide the high thrust per engine required"
            ],
            "a": 3,
            "w": "The axial compressor's high overall compression and airflow capability supports the thrust required by large aircraft.",
            "slide": 28
          },
          {
            "q": "Within an axial compressor rotor passage, which parameters rise along with airflow velocity?",
            "o": [
              "Pressure and temperature",
              "Fuel flow and oil quantity",
              "Bypass ratio and propeller pitch",
              "Exhaust area and turbine diameter"
            ],
            "a": 0,
            "w": "The rotor's divergent passage raises pressure and temperature while the blades increase velocity.",
            "slide": 30
          },
          {
            "q": "Which is a disadvantage of an axial compressor noted in the guide?",
            "o": [
              "Low overall compression ratio",
              "High starting-power requirement",
              "Inability to power large aircraft",
              "Very large pressure rise per stage"
            ],
            "a": 1,
            "w": "Axial compressors require relatively high starting power.",
            "slide": 31
          },
          {
            "q": "How is combustion-chamber expansion converted into useful gas velocity?",
            "o": [
              "Through a divergent duct at the front",
              "By closing the intake",
              "Through a convergent duct at the rear",
              "By slowing the turbine"
            ],
            "a": 2,
            "w": "Expansion is converted into velocity through a convergent section at the rear of the chamber.",
            "slide": 32
          },
          {
            "q": "Which is a stated requirement of a combustion chamber?",
            "o": [
              "Leave a controlled amount of fuel unburnt",
              "Operate only at one fuel flow",
              "Produce maximum smoke for visibility",
              "Mix and burn large quantities of fuel and air across the operating range"
            ],
            "a": 3,
            "w": "The chamber must mix and burn large fuel and airflow quantities throughout the operating range while limiting waste and emissions.",
            "slide": 33
          },
          {
            "q": "Approximately how much does the diffuser reduce the incoming combustion-chamber airflow speed before primary-zone recirculation?",
            "o": [
              "From about 500 ft/s to about 80 ft/s",
              "From 80 ft/s to Mach 1",
              "From 5 ft/s to 500 ft/s",
              "It leaves the speed unchanged"
            ],
            "a": 0,
            "w": "The diffuser reduces the roughly 500 ft/s entry flow to about 80 ft/s before further local slowing.",
            "slide": 34
          },
          {
            "q": "What is the purpose of the primary-zone swirl vane?",
            "o": [
              "Measure EGT",
              "Promote mixing and help anchor the flame",
              "Drive the compressor shaft",
              "Cool the oil tank"
            ],
            "a": 1,
            "w": "Swirling promotes efficient fuel-air mixing and helps maintain the recirculation that anchors the flame.",
            "slide": 34
          },
          {
            "q": "What is the function of the perforated flare in the primary combustion zone?",
            "o": [
              "It blocks all primary air",
              "It supports the turbine wheel",
              "Its holes create turbulence for efficient fuel-air mixing",
              "It meters engine oil"
            ],
            "a": 2,
            "w": "The perforated flare admits primary air and creates turbulence for effective mixing.",
            "slide": 35
          },
          {
            "q": "Which condition is most closely associated with a rich flameout?",
            "o": [
              "Low fuel pressure during descent",
              "A steady optimum mixture",
              "Low airspeed with no throttle movement",
              "Rapid engine acceleration producing an over-rich mixture"
            ],
            "a": 3,
            "w": "Rapid acceleration can produce an over-rich mixture, over-pressure, airflow stagnation, and flame extinction.",
            "slide": 37
          },
          {
            "q": "How is ignition passed between the separate cans in a multi-can combustion system?",
            "o": [
              "Interconnecting tubes link the cans",
              "Every can has its own starter motor",
              "The exhaust struts carry fuel",
              "The compressor shaft contains igniters"
            ],
            "a": 0,
            "w": "Interconnecting tubes link the cans; only two cans need contain igniter plugs.",
            "slide": 39
          },
          {
            "q": "What maintenance advantage does a can-annular combustor have over a fully annular design?",
            "o": [
              "It has no flame tubes",
              "Its modular flame tubes are easier to repair or replace on the wing",
              "It requires no cooling air",
              "It eliminates all pressure loss"
            ],
            "a": 1,
            "w": "The modular can-annular arrangement is easier to repair or replace on the wing.",
            "slide": 40
          },
          {
            "q": "After the turbine drives the compressor and accessories, how can residual gas-stream energy propel the aircraft?",
            "o": [
              "Only through a hydraulic pump",
              "Only through an electrical generator",
              "Through a fan, propeller, or jet efflux",
              "By pressurising the cabin"
            ],
            "a": 2,
            "w": "Residual energy can drive a fan or propeller or remain as jet efflux in a pure jet.",
            "slide": 43
          },
          {
            "q": "What two functions do turbine nozzle guide vanes perform?",
            "o": [
              "Add fuel and ignite the gas",
              "Reduce compressor rpm and raise oil pressure",
              "Cool the cabin and exhaust",
              "Direct gas at the optimum blade angle and convert pressure energy to kinetic energy"
            ],
            "a": 3,
            "w": "NGVs aim the flow at the turbine blades while accelerating it by converting pressure energy into kinetic energy.",
            "slide": 45
          },
          {
            "q": "Why is the turbine-blade root commonly attached with a fir-tree form?",
            "o": [
              "To distribute centrifugal loading among several serrations",
              "To increase fuel flow",
              "To seal the combustion chamber",
              "To measure blade temperature"
            ],
            "a": 0,
            "w": "The fir-tree serrations share the large centrifugal load at turbine speed.",
            "slide": 50
          }
        ]
      },
      {
        "id": "C",
        "questions": [
          {
            "q": "During Brayton-cycle expansion through the turbine and nozzle, what happens to gas volume and pressure?",
            "o": [
              "Volume falls and pressure rises",
              "Volume rises and pressure falls",
              "Both remain constant",
              "Both rise"
            ],
            "a": 1,
            "w": "The expanding gas increases in volume while its pressure decreases.",
            "slide": 10
          },
          {
            "q": "How does a basic turbojet create its thrust?",
            "o": [
              "By giving a small acceleration to a very large air mass",
              "By driving a propeller with nearly all turbine energy",
              "By high acceleration of a relatively small air mass",
              "By extracting all exhaust energy as shaft power"
            ],
            "a": 2,
            "w": "A turbojet relies on a high acceleration applied to a relatively small mass of air.",
            "slide": 12
          },
          {
            "q": "In a turboprop, how much of the total thrust normally comes from the exhaust stream?",
            "o": [
              "Only a minor amount",
              "Exactly half",
              "Almost all",
              "None of the turbine energy reaches the propeller"
            ],
            "a": 0,
            "w": "Almost all useful energy is transferred to the propeller, so exhaust contributes little thrust.",
            "slide": 13
          },
          {
            "q": "Why can an enclosed turbofan fan operate efficiently at higher speeds than an open propeller?",
            "o": [
              "It has only one blade",
              "It turns more slowly than all propellers",
              "It operates without an inlet",
              "The inlet encloses the fan and it uses many blades"
            ],
            "a": 3,
            "w": "The enclosed, many-bladed fan avoids some high-speed propeller limitations.",
            "slide": 16
          },
          {
            "q": "For the same thrust, what benefit does bypass airflow provide?",
            "o": [
              "Higher fuel consumption",
              "Lower fuel consumption",
              "No need for a turbine",
              "Higher compressor leakage"
            ],
            "a": 1,
            "w": "The guide states that bypass flow reduces fuel consumption for the same thrust.",
            "slide": 17
          },
          {
            "q": "What defines a divergent duct?",
            "o": [
              "Its cross-section becomes wider in the direction of flow",
              "Its cross-section narrows continuously",
              "Its area remains constant",
              "It contains rotating blades"
            ],
            "a": 0,
            "w": "A divergent duct widens in the direction of flow.",
            "slide": 18
          },
          {
            "q": "What pressure pattern is shown immediately before and at the exhaust?",
            "o": [
              "Pressure rises markedly at the exhaust",
              "Pressure remains at compressor-delivery value",
              "Pressure drops, with exhaust velocity then increased by a convergent duct",
              "Pressure becomes independent of velocity"
            ],
            "a": 2,
            "w": "Pressure falls through the turbine and markedly at the exhaust as the propelling nozzle converts pressure to velocity.",
            "slide": 21
          },
          {
            "q": "What common purpose do centrifugal and axial compressors serve?",
            "o": [
              "Cool exhaust gas",
              "Compress air before delivery to the combustion chamber",
              "Meter oil into the bearings",
              "Reverse the thrust after landing"
            ],
            "a": 1,
            "w": "Both compressor types raise air pressure before combustion.",
            "slide": 23
          },
          {
            "q": "Where is centrifugal-compressor leakage particularly likely?",
            "o": [
              "Between the exhaust cone and tailpipe",
              "At the fuel nozzles only",
              "Inside the oil tank",
              "Across clearances between the impeller, diffuser, and casing"
            ],
            "a": 3,
            "w": "The guide identifies the small impeller-to-diffuser-and-casing gaps as leakage paths.",
            "slide": 27
          },
          {
            "q": "Which group contains disadvantages of an axial compressor?",
            "o": [
              "Manufacturing complexity, high cost, and greater FOD susceptibility",
              "Low thrust capability and large frontal area only",
              "No ability to use multiple stages",
              "Low weight and low starting power"
            ],
            "a": 0,
            "w": "Axial compressors are more complex and costly and are more vulnerable to foreign-object damage.",
            "slide": 28
          },
          {
            "q": "What drives the rotor blades of an axial compressor?",
            "o": [
              "The fuel pump on a separate shaft",
              "The turbine mounted on the same shaft",
              "Ram air alone",
              "The exhaust struts"
            ],
            "a": 1,
            "w": "The turbine rotates the compressor rotor rows through their common shaft.",
            "slide": 29
          },
          {
            "q": "How does the axial compressor's smaller engine diameter benefit the aircraft?",
            "o": [
              "It increases cabin altitude",
              "It removes the need for an intake",
              "It reduces aerodynamic drag",
              "It raises oil temperature"
            ],
            "a": 2,
            "w": "A reduced engine diameter presents less frontal area and therefore less drag.",
            "slide": 31
          },
          {
            "q": "Roughly what proportion of the primary air enters through the snout before the flare admits more air?",
            "o": [
              "About 50%",
              "About 75%",
              "About 20%",
              "About 8%"
            ],
            "a": 3,
            "w": "The slide labels the primary air not picked up by the snout as approximately 8%.",
            "slide": 35
          },
          {
            "q": "Which part of the combustion chamber is the hottest?",
            "o": [
              "The first third, or primary zone",
              "The final exhaust cone",
              "The accessory gearbox",
              "The intake lip"
            ],
            "a": 0,
            "w": "The primary zone in the first third of the chamber is the hottest section.",
            "slide": 36
          },
          {
            "q": "Which list contains all four combustion-chamber types presented?",
            "o": [
              "Axial, centrifugal, impulse, reaction",
              "Multi-can, can-annular, annular, reverse-flow",
              "Turbojet, turbofan, turboprop, ramjet",
              "Primary, secondary, tertiary, dilution"
            ],
            "a": 1,
            "w": "The guide lists multi-can, can-annular, annular, and reverse-flow combustors.",
            "slide": 38
          },
          {
            "q": "Which statement about a multi-can combustor is correct?",
            "o": [
              "It is the most space-efficient modern design",
              "It is best matched only to axial compressors",
              "Individual cans can be replaced relatively easily",
              "Every can must have its own igniter"
            ],
            "a": 2,
            "w": "A multi-can system is modular and individual cans are comparatively easy to replace.",
            "slide": 39
          },
          {
            "q": "What flame pattern is produced by an annular combustion chamber?",
            "o": [
              "Separate flames that cannot communicate",
              "One flame only at the bottom",
              "A flame confined to two cans",
              "An unbroken sheet of flame around the engine periphery"
            ],
            "a": 3,
            "w": "The continuous annular passage supports an unbroken peripheral flame sheet.",
            "slide": 41
          },
          {
            "q": "Why is a reverse-flow annular combustor unsuitable for a large, high-mass-flow engine?",
            "o": [
              "Its S-bend creates efficiency losses and does not suit high mass airflow",
              "It cannot contain igniters",
              "It has no turbine outlet",
              "It requires a longer engine"
            ],
            "a": 0,
            "w": "The reversing gas path shortens the engine but costs efficiency and is not suited to high mass flow.",
            "slide": 42
          },
          {
            "q": "What determines how many turbine stages an engine requires?",
            "o": [
              "The cabin altitude",
              "The amount of power that must be extracted",
              "The number of fuel tanks",
              "The aircraft tyre pressure"
            ],
            "a": 1,
            "w": "Additional stages are used when more power must be extracted from the gas stream.",
            "slide": 44
          },
          {
            "q": "How are impulse-reaction turbine blades commonly distributed along blade length?",
            "o": [
              "Reaction at the root only",
              "Impulse at the tip only",
              "Impulse near the root, changing toward reaction near the tip",
              "Reaction and impulse alternate every revolution"
            ],
            "a": 2,
            "w": "A typical blade blends impulse characteristics at the root into reaction characteristics toward the tip.",
            "slide": 47
          },
          {
            "q": "What is one purpose of twisting a turbine blade?",
            "o": [
              "Make the root carry all aerodynamic work",
              "Increase fuel-nozzle pressure",
              "Block axial exhaust flow",
              "Make the gas perform equal work along the blade and leave with uniform axial velocity"
            ],
            "a": 3,
            "w": "Blade twist balances work across the span and promotes uniform axial exit flow.",
            "slide": 48
          },
          {
            "q": "What does the turbine-blade shroud ring do?",
            "o": [
              "Stiffens blade tips, reduces vibration, and limits tip leakage",
              "Supplies fuel to the combustor",
              "Disconnects the starter clutch",
              "Measures EPR"
            ],
            "a": 0,
            "w": "The shroud stiffens the tips and carries knife-edge seals that reduce leakage.",
            "slide": 51
          },
          {
            "q": "Which phase of turbine blade creep signals that reliable blade life is nearing its end?",
            "o": [
              "Primary creep",
              "Tertiary creep",
              "Elastic recovery",
              "Cold soak"
            ],
            "a": 1,
            "w": "Tertiary creep accelerates and indicates that the blade is approaching the end of reliable life.",
            "slide": 52
          },
          {
            "q": "What does the divergent passage between the exhaust walls and cone achieve?",
            "o": [
              "Accelerates gas and lowers pressure",
              "Ignites residual fuel",
              "Reduces velocity and raises pressure, helping reduce turbulence",
              "Drives the starter"
            ],
            "a": 2,
            "w": "The divergent exhaust passage slows the gas and recovers pressure, reducing downstream turbulence.",
            "slide": 53
          },
          {
            "q": "Besides supporting a rear shaft bearing, what do exhaust struts do?",
            "o": [
              "Meter fuel flow",
              "Cool the cabin",
              "Drive the fan",
              "Straighten turbine discharge into axial flow"
            ],
            "a": 3,
            "w": "Exhaust struts help straighten the flow after it leaves the turbine.",
            "slide": 54
          },
          {
            "q": "How does the tailpipe propelling nozzle maximise design thrust?",
            "o": [
              "Its convergent shape converts remaining pressure into velocity",
              "It diffuses the exhaust to zero speed",
              "It drives the HP compressor mechanically",
              "It closes during takeoff"
            ],
            "a": 0,
            "w": "The convergent tailpipe gives the gas a final acceleration by converting pressure to velocity.",
            "slide": 54
          },
          {
            "q": "Which control feature is fitted to the IAE V2500-A5?",
            "o": [
              "Manual fuel control only",
              "Full Authority Digital Engine Control",
              "No electronic engine control",
              "A mechanical propeller governor"
            ],
            "a": 1,
            "w": "The V2500-A5 installation includes a FADEC along with fuel, oil, air, ignition, start, and reverser systems.",
            "slide": 56
          },
          {
            "q": "Where is the V2500 annular combustion chamber located?",
            "o": [
              "Between the fan and LP compressor",
              "Behind the exhaust cone",
              "Between the HP compressor and HP turbine",
              "Inside the accessory gearbox"
            ],
            "a": 2,
            "w": "The annular combustor, with fuel nozzles and two igniters, lies between the HP compressor and HP turbine.",
            "slide": 57
          },
          {
            "q": "Which accessory receives mechanical drive from the V2500 accessory gearbox?",
            "o": [
              "Passenger oxygen generator",
              "Outflow valve",
              "Wing-tip brake",
              "Main engine fuel pump"
            ],
            "a": 3,
            "w": "The accessory gearbox drives the main fuel pump along with oil, hydraulic, electrical, FADEC, and starter accessories.",
            "slide": 58
          },
          {
            "q": "Which variable is included when the V2500 FADEC computes command EPR?",
            "o": [
              "Thrust lever angle",
              "Cabin vertical speed only",
              "Brake temperature",
              "Landing-gear position only"
            ],
            "a": 0,
            "w": "Command EPR uses TLA plus altitude, Mach, ambient and inlet temperatures, and extracted bleed air.",
            "slide": 59
          }
        ]
      }
    ]
  },
  {
    "id": "gte2",
    "title": "Quiz 2 - Gas Turbine Engines: Instrumentation, Stalls and Starting",
    "source": "Gas Turbine Engines A320 Self Study Guide - Part 2",
    "banks": [
      {
        "id": "A",
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
        "id": "B",
        "questions": [
          {
            "q": "When does the normally minimal or selected-off lower engine display automatically become useful?",
            "o": [
              "Only after landing",
              "When a fault or out-of-tolerance parameter occurs",
              "Only during refuelling",
              "Whenever the landing gear is down"
            ],
            "a": 1,
            "w": "The lower display normally carries little information but presents secondary data when a fault or abnormal parameter occurs.",
            "slide": 3
          },
          {
            "q": "What does a higher engine pressure ratio indicate about engine work?",
            "o": [
              "EPR is unrelated to work",
              "Work falls as EPR rises",
              "Pressure difference, and therefore work done, has increased",
              "Only oil pressure has changed"
            ],
            "a": 2,
            "w": "The pressure difference represented by EPR is directly proportional to the work being done.",
            "slide": 4
          },
          {
            "q": "The EPR sensing arrangement is compared with which familiar flight instrument system?",
            "o": [
              "Airspeed indication using pitot and static sensing",
              "Magnetic compass",
              "Radio altimeter",
              "Vertical-speed inertial sensing"
            ],
            "a": 0,
            "w": "The guide likens EPR to an airspeed-indicator pressure system using pitot and static sensing.",
            "slide": 4
          },
          {
            "q": "After an N1 shaft sensor detects rotational speed, what is sent to the cockpit display?",
            "o": [
              "A pneumatic pressure line",
              "A mechanical cable",
              "A hydraulic pulse",
              "An electrical signal"
            ],
            "a": 3,
            "w": "A small AC generator or magnetic pickup converts N1 speed into an electrical signal.",
            "slide": 5
          },
          {
            "q": "How are N1 and N2 rotational speeds normally presented?",
            "o": [
              "As degrees per second",
              "As percentages",
              "As shaft horsepower only",
              "As fuel mass"
            ],
            "a": 1,
            "w": "Both spool speeds are displayed as percentage values.",
            "slide": 6
          },
          {
            "q": "Approximately how much engine power is developed in the upper 10% of the gas turbine's speed range?",
            "o": [
              "About 30%",
              "About 5%",
              "About 75%",
              "All of it"
            ],
            "a": 0,
            "w": "The slide states that roughly 30% of developed power occurs in the upper 10% of engine speed.",
            "slide": 6
          },
          {
            "q": "Which abbreviations may describe the same downstream turbine temperature indication as EGT?",
            "o": [
              "N1 and N2",
              "EPR and SHP",
              "TGT and JPT",
              "ITT and TIT only"
            ],
            "a": 2,
            "w": "Turbine gas temperature and jet pipe temperature are alternative names for the EGT-type sensing location.",
            "slide": 7
          },
          {
            "q": "Where is inter-stage turbine temperature measured?",
            "o": [
              "Ahead of the fan",
              "Inside the fuel tank",
              "Downstream of the tailpipe",
              "Between two turbine stages"
            ],
            "a": 3,
            "w": "ITT places the temperature probes between turbine stages.",
            "slide": 8
          },
          {
            "q": "How is the first-stage turbine temperature limit established when TIT cannot be sensed directly?",
            "o": [
              "Sensors elsewhere are used with an allowance for known temperature drop",
              "Oil temperature is used without correction",
              "The value is assumed to equal outside air temperature",
              "TIT is ignored entirely"
            ],
            "a": 0,
            "w": "More survivable probe locations are used and corrected for the known temperature reduction across stages.",
            "slide": 8
          },
          {
            "q": "How are turbine-temperature thermocouples arranged in the jetpipe?",
            "o": [
              "One probe in the oil tank",
              "In a ring around the inner walls",
              "Only on the outside cowling",
              "Inside the starter gearbox"
            ],
            "a": 1,
            "w": "Multiple thermocouples are distributed circumferentially around the jetpipe inner wall.",
            "slide": 8
          },
          {
            "q": "What does the aircraft computer use when converting fuel volume into displayed fuel weight?",
            "o": [
              "Only aircraft altitude",
              "Only engine rpm",
              "Fuel specific gravity at the current temperature",
              "Cabin differential pressure"
            ],
            "a": 2,
            "w": "Volume is converted to kg or lb using fuel density/specific gravity adjusted for fuel temperature.",
            "slide": 9
          },
          {
            "q": "What standard fuel specific-gravity value is quoted in the presentation?",
            "o": [
              "1.00",
              "0.50",
              "1.29",
              "0.79"
            ],
            "a": 3,
            "w": "The standard specific gravity shown is 0.79.",
            "slide": 9
          },
          {
            "q": "How may ECAM/EICAS present fuel quantity?",
            "o": [
              "By individual tanks or as total fuel on board",
              "Only as litres in the centre tank",
              "Only as estimated endurance",
              "Only when a fuel fault exists"
            ],
            "a": 0,
            "w": "The display may show separate tank quantities or a total fuel-on-board value.",
            "slide": 9
          },
          {
            "q": "Where is the engine fuel-flow transmitter located?",
            "o": [
              "In the oil return line",
              "In the fuel line feeding the combustion-chamber spray nozzles",
              "At the fan inlet",
              "In the cabin recirculation duct"
            ],
            "a": 1,
            "w": "The transmitter sits in the fuel line supplying the burner fuel spray nozzles.",
            "slide": 10
          },
          {
            "q": "Which two presentations of fuel flow are described on the engine display?",
            "o": [
              "Only an analogue pointer",
              "Only a totaliser",
              "A needle/pointer and a digital readout",
              "A coloured warning lamp only"
            ],
            "a": 2,
            "w": "The fuel-flow indication combines a pointer or needle with a digital value.",
            "slide": 10
          },
          {
            "q": "Why is engine fuel flow expressed in kg or lb rather than litres or gallons?",
            "o": [
              "Volume never changes with temperature",
              "The FMS cannot process volume",
              "All fuel has a specific gravity of 1",
              "The measurement represents fuel mass delivered to the engine"
            ],
            "a": 3,
            "w": "Fuel flow is measured as weight/mass per time rather than volume per time.",
            "slide": 10
          },
          {
            "q": "Where are sensors placed to monitor engine vibration?",
            "o": [
              "Around N1, N2, and turbine regions",
              "Only in the cockpit",
              "Only in the fuel tanks",
              "On the landing gear"
            ],
            "a": 0,
            "w": "Sensors in the compressor spools and turbine area convert vibration into electrical indications.",
            "slide": 11
          },
          {
            "q": "Where are maximum engine-vibration limits normally found?",
            "o": [
              "In the passenger briefing card",
              "In the AFM and often as an amber gauge band",
              "Only on the fuel panel",
              "In the airport chart"
            ],
            "a": 1,
            "w": "The AFM contains vibration limits and the display may also show an amber caution band.",
            "slide": 11
          },
          {
            "q": "What action reference is associated with a vibration indication of 5 or greater?",
            "o": [
              "No action is required",
              "Refer only to the MEL after landing",
              "Refer to the HIGH ENGINE VIBRATION abnormal procedure",
              "Immediately discharge the fire bottle"
            ],
            "a": 2,
            "w": "The slide directs VIB 5 or greater to the QRH/PRO-ABN-ENG high-engine-vibration procedure.",
            "slide": 11
          },
          {
            "q": "What alerts the crew when oil delivery pressure moves outside permitted parameters?",
            "o": [
              "A passenger-door light",
              "A stall warning horn",
              "A fuel-quantity flag",
              "A warning light or ECAM message"
            ],
            "a": 3,
            "w": "Abnormal oil pressure produces a warning light or ECAM message.",
            "slide": 12
          },
          {
            "q": "Where is the oil-temperature sensor located in the delivery system?",
            "o": [
              "Downstream of the fuel/oil heat exchanger",
              "Before the oil pump inlet only",
              "Inside the combustion chamber",
              "At the exhaust cone"
            ],
            "a": 0,
            "w": "Oil temperature is sensed on the delivery side after the fuel/oil heat exchanger.",
            "slide": 13
          },
          {
            "q": "What is the caution associated with the oil-quantity indication?",
            "o": [
              "It is calibrated only in pressure",
              "It shows tank volume and the tank must not be overfilled",
              "It is valid only in flight",
              "It measures bearing temperature"
            ],
            "a": 1,
            "w": "Oil quantity is a volume measurement of the tank contents; the guide warns not to overfill it.",
            "slide": 13
          },
          {
            "q": "What physical quantity does a turboprop torquemeter sense?",
            "o": [
              "Exhaust temperature",
              "Fuel specific gravity",
              "Turning force delivered to the propeller shaft, expressed as SHP",
              "Cabin vertical speed"
            ],
            "a": 2,
            "w": "The torquemeter measures propeller-shaft turning force and relates it to shaft horsepower.",
            "slide": 14
          },
          {
            "q": "If highly compressed air breaks away at the rear axial-compressor stages, how can the disturbance progress?",
            "o": [
              "It can affect stages progressively farther forward",
              "It remains confined to the exhaust",
              "It increases fuel quantity only",
              "It automatically stops the turbine"
            ],
            "a": 0,
            "w": "Surge commonly begins at the highly loaded rear rotors and can propagate forward.",
            "slide": 15
          },
          {
            "q": "Why does compressor surge reduce thrust?",
            "o": [
              "It increases propeller pitch",
              "Less stable compressed airflow reaches the combustion chambers",
              "It raises cabin pressure",
              "It increases bypass mass flow"
            ],
            "a": 1,
            "w": "Airflow breakdown reduces the mass of compressed air supplied for combustion and therefore reduces thrust.",
            "slide": 15
          },
          {
            "q": "Which throttle movement can create a stall through excessive fuel flow?",
            "o": [
              "A steady idle setting",
              "A slow power reduction",
              "An abrupt acceleration",
              "No throttle movement"
            ],
            "a": 2,
            "w": "Abrupt acceleration can command excessive fuel before compressor airflow is ready.",
            "slide": 16
          },
          {
            "q": "Which throttle movement is associated with an excessively lean mixture as a stall trigger?",
            "o": [
              "A smooth acceleration",
              "A constant climb setting",
              "A takeoff thrust hold",
              "An abrupt deceleration"
            ],
            "a": 3,
            "w": "Abrupt deceleration can create an excessively lean condition and upset compressor stability.",
            "slide": 16
          },
          {
            "q": "Why were older single-spool compressors particularly vulnerable to surge?",
            "o": [
              "Rear stages ideally need a different, often higher speed than front stages",
              "Their rear stages had no blades",
              "They had independent turbines for each stage",
              "They always received too little fuel"
            ],
            "a": 0,
            "w": "One shaft cannot independently optimise the front and rear rotor speeds across the operating range.",
            "slide": 17
          },
          {
            "q": "How is each compressor spool allowed to select its own rotational speed?",
            "o": [
              "Each spool has a separate intake",
              "Each spool is driven by its own turbine",
              "The starter remains engaged",
              "The fuel tanks rotate the spools"
            ],
            "a": 1,
            "w": "Splitting the compressor and assigning each spool its own turbine permits different shaft speeds.",
            "slide": 17
          },
          {
            "q": "Which two variables determine compressor-rotor blade angle of attack?",
            "o": [
              "Fuel temperature and oil pressure",
              "Aircraft weight and cabin altitude",
              "Rotor speed and axial airflow velocity",
              "EPR and outside humidity only"
            ],
            "a": 2,
            "w": "Blade AoA depends on the relationship between rotational speed and axial airflow through the compressor.",
            "slide": 18
          }
        ]
      },
      {
        "id": "C",
        "questions": [
          {
            "q": "Which combination contains recognised compressor-stall causes?",
            "o": [
              "FOD, contamination, icing, extreme manoeuvres, or improper handling",
              "Low cabin altitude and high oil quantity",
              "A correctly matched rotor speed and airflow",
              "Normal steady-state operation"
            ],
            "a": 0,
            "w": "The guide lists FOD, worn or contaminated components, icing, operation outside the design envelope, and poor handling.",
            "slide": 19
          },
          {
            "q": "In a severe compressor stall, where may flame become visible?",
            "o": [
              "Only at the wing tip",
              "At the exhaust and possibly the inlet",
              "Only inside the oil tank",
              "At the pneumatic starter"
            ],
            "a": 1,
            "w": "Severe airflow reversal and rich combustion may produce flame at the exhaust and even the inlet.",
            "slide": 20
          },
          {
            "q": "Which EGT behaviour is a compressor-stall warning when thrust is advanced?",
            "o": [
              "A steady low EGT",
              "No EGT indication",
              "A high EGT or rapid EGT rise",
              "An immediate EGT drop to ambient"
            ],
            "a": 2,
            "w": "A high or rapidly increasing EGT with thrust application is a listed stall indication.",
            "slide": 20
          },
          {
            "q": "How should thrust usually be reduced to help clear a compressor stall?",
            "o": [
              "Abruptly increased first",
              "Left unchanged",
              "Cycled rapidly",
              "Immediately but steadily decreased"
            ],
            "a": 3,
            "w": "The general response is to reduce affected-engine thrust promptly and steadily, subject to type procedures.",
            "slide": 21
          },
          {
            "q": "Which source is not one of the three usual pneumatic starting-air sources listed?",
            "o": [
              "The aircraft battery by itself",
              "A ground air source",
              "Another operating engine",
              "The APU"
            ],
            "a": 0,
            "w": "A battery may power an electrical starter on a small aircraft, but it is not itself a pneumatic-air source.",
            "slide": 22
          },
          {
            "q": "What is a starter/generator?",
            "o": [
              "A pneumatic starter that never disengages",
              "An electrical machine that starts the engine and then operates as a generator",
              "A turbine nozzle that powers the fan",
              "A manual fuel pump"
            ],
            "a": 1,
            "w": "Some turboprops use one electrical machine as the starter and then as the generator after the engine starts.",
            "slide": 22
          },
          {
            "q": "How does the A320 pneumatic starter's weight compare with an equivalent electrical starter?",
            "o": [
              "About the same",
              "About five times heavier",
              "About one fifth as much",
              "The guide gives no comparison"
            ],
            "a": 2,
            "w": "The presentation states the pneumatic starter weighs about one fifth of an equivalent electrical unit.",
            "slide": 22
          },
          {
            "q": "What air-pressure range is delivered to the pneumatic air starter?",
            "o": [
              "1-5 psi",
              "10-20 psi",
              "80-100 psi",
              "About 30-50 psi"
            ],
            "a": 3,
            "w": "The stated starter supply is approximately 30 to 50 psi.",
            "slide": 23
          },
          {
            "q": "Within the air starter, what converts pneumatic pressure into high gas velocity?",
            "o": [
              "Convergent turbine nozzle guide vanes",
              "A divergent oil cooler",
              "The fuel spray nozzles",
              "The clutch plates"
            ],
            "a": 0,
            "w": "Starter NGVs use convergent passages to accelerate the supply air onto the turbine wheel.",
            "slide": 23
          },
          {
            "q": "What energy conversion is made by the air-starter reduction gearbox?",
            "o": [
              "Low rpm/high torque into high rpm/low torque",
              "High rpm/low torque into lower rpm/higher torque",
              "Pressure into electrical energy",
              "Fuel heat into cabin pressure"
            ],
            "a": 1,
            "w": "Reduction gearing converts small-turbine speed into the torque needed at the N2 shaft.",
            "slide": 23
          },
          {
            "q": "What initially opens the pneumatic starter air-control valve?",
            "o": [
              "Fuel pressure",
              "Centrifugal blade creep",
              "An energised electrical solenoid",
              "The outflow valve motor"
            ],
            "a": 2,
            "w": "Selecting start energises the solenoid, which opens the air-control valve.",
            "slide": 24
          },
          {
            "q": "What causes the starter clutch to disengage after self-sustaining speed?",
            "o": [
              "The fuel tank empties",
              "The turbine stops instantly",
              "The gearbox reverses",
              "The solenoid closes the air valve and starter air is removed"
            ],
            "a": 3,
            "w": "At self-sustaining speed the valve closes; without driving air, the clutch releases.",
            "slide": 24
          },
          {
            "q": "What may happen if the air-starter clutch fails to disengage?",
            "o": [
              "The engine can overspeed the starter and damage it",
              "The starter becomes a generator normally",
              "N2 stops at idle",
              "The packs open automatically"
            ],
            "a": 0,
            "w": "A clutch that stays engaged lets the running engine drive the starter to damaging speed.",
            "slide": 25
          },
          {
            "q": "What sound can indicate normal starter disengagement?",
            "o": [
              "A continuous siren",
              "A popping sound",
              "A stall-warning clacker",
              "A cabin chime sequence"
            ],
            "a": 1,
            "w": "Starter disengagement can often be heard as a pop.",
            "slide": 25
          },
          {
            "q": "Which three start-system elements does A320 FADEC directly control?",
            "o": [
              "Packs, outflow valve, and ram air",
              "Nosewheel steering, brakes, and flaps",
              "Start valve, igniters, and HP fuel valves",
              "Oil tank, hydraulic reservoir, and generator bus"
            ],
            "a": 2,
            "w": "FADEC commands the start valve, ignition, and high-pressure fuel valves.",
            "slide": 26
          },
          {
            "q": "What happens to the pack valves when ENG MODE is first selected to IGN/START?",
            "o": [
              "They remain open permanently",
              "Only one closes after ignition",
              "They move to manual control",
              "They automatically close"
            ],
            "a": 3,
            "w": "IGN/START calls up engine indications and closes the pack valves to conserve starting air.",
            "slide": 27
          },
          {
            "q": "If ENG MASTER is not selected ON within 30 seconds of IGN/START selection, what happens?",
            "o": [
              "The pack valves reopen automatically",
              "Both fuel valves open",
              "The starter remains energised indefinitely",
              "The engine is declared AVAIL"
            ],
            "a": 0,
            "w": "The packs reopen if the crew does not continue the start within about 30 seconds.",
            "slide": 27
          },
          {
            "q": "Immediately after ENG MASTER is selected ON, which sequence begins?",
            "o": [
              "HP fuel opens before any rotation",
              "LP fuel opens, the start valve opens, and N2 rises",
              "The packs reopen and N2 falls",
              "The starter clutch is commanded off"
            ],
            "a": 1,
            "w": "MASTER ON opens LP fuel and starting air so N2 begins increasing.",
            "slide": 28
          },
          {
            "q": "What occurs after the approximately 30-second automatic dry crank?",
            "o": [
              "The engine is shut down",
              "The pack valves remain the only active item",
              "Ignition starts and the HP fuel valve opens",
              "N2 is commanded to zero"
            ],
            "a": 2,
            "w": "After dry cranking, FADEC applies an igniter and introduces HP fuel.",
            "slide": 28
          },
          {
            "q": "What is the expected relationship between fuel flow and EGT during fuel introduction?",
            "o": [
              "EGT rises before fuel flow",
              "Both remain at zero",
              "EGT falls as fuel enters",
              "Fuel flow rises first, followed by EGT"
            ],
            "a": 3,
            "w": "The sequence shown is fuel flow increase followed by an EGT rise as ignition succeeds.",
            "slide": 28
          },
          {
            "q": "What three essentials are required for a successful turbine-engine start?",
            "o": [
              "Sufficient compressor rpm, fuel, and ignition",
              "Hydraulic pressure, cabin pressure, and brakes",
              "Only fuel and oil",
              "N1 indication, reverse thrust, and ram air"
            ],
            "a": 0,
            "w": "A successful start needs compression/airflow, fuel, and an ignition source.",
            "slide": 29
          },
          {
            "q": "Which indications should be watched especially closely throughout a start?",
            "o": [
              "Cabin altitude and brake temperature",
              "EGT and rpm",
              "Fuel tank temperature only",
              "Radio altitude and airspeed"
            ],
            "a": 1,
            "w": "EGT and spool rpm show whether ignition and acceleration are normal.",
            "slide": 29
          },
          {
            "q": "If ENG MASTER is selected OFF to interrupt an automatic start, what does FADEC do?",
            "o": [
              "Opens both fuel valves",
              "Keeps ignition energised",
              "Closes LP/HP fuel, stops ignition, and closes the start valve",
              "Commands maximum thrust"
            ],
            "a": 2,
            "w": "FADEC removes fuel and ignition and shuts the engine start valve.",
            "slide": 30
          },
          {
            "q": "What counts as one starter duty cycle?",
            "o": [
              "Any 15-second pause",
              "One minute at idle",
              "An entire flight",
              "A standard automatic start containing one start attempt"
            ],
            "a": 3,
            "w": "One normal automatic start with one attempt is defined as one duty cycle.",
            "slide": 31
          },
          {
            "q": "What are the maximum continuous times for a manual start cycle and a crank cycle?",
            "o": [
              "Manual start 2 minutes; crank 5 minutes",
              "Manual start 5 minutes; crank 2 minutes",
              "Both 30 minutes",
              "Both 15 seconds"
            ],
            "a": 0,
            "w": "The guide limits a manual start cycle to two minutes and cranking to five minutes.",
            "slide": 31
          },
          {
            "q": "Above which N2 speeds must the starter not be run?",
            "o": [
              "35% ground and 43% flight",
              "10% on the ground and 18% in flight",
              "18% ground and 10% flight",
              "50% in all cases"
            ],
            "a": 1,
            "w": "The stated starter cut-in limits are 10% N2 on the ground and 18% in flight.",
            "slide": 31
          },
          {
            "q": "What starting EGT limit is stated for both ground and in-flight starts?",
            "o": [
              "725 C",
              "950 C",
              "635 C",
              "1,090 C"
            ],
            "a": 2,
            "w": "The presentation gives a 635 C starting EGT limit for ground or in-flight starts.",
            "slide": 31
          },
          {
            "q": "Which condition can contribute to a hung start?",
            "o": [
              "Excessively high starter torque",
              "Normal pneumatic pressure",
              "A strong ignition source",
              "Binding bearings or seals"
            ],
            "a": 3,
            "w": "Binding bearings/seals, weak battery or ignition, and low pneumatic pressure are listed hung-start causes.",
            "slide": 32
          },
          {
            "q": "Why is manual start recommended with a tailwind greater than 10 kt?",
            "o": [
              "Tailwind may cause engine counter-rotation",
              "Tailwind always improves starter pressure",
              "It forces both packs open",
              "It prevents fuel flow"
            ],
            "a": 0,
            "w": "A tailwind above 10 kt may cause counter-rotation, so the manual procedure is recommended.",
            "slide": 35
          },
          {
            "q": "During a manual start, how does the abort action differ before and after ENG MASTER ON?",
            "o": [
              "There is no difference",
              "Before MASTER ON select MAN START off; after MASTER ON select MASTER off, then MAN START off",
              "Before MASTER ON open HP fuel; after MASTER ON increase thrust",
              "After MASTER ON no abort is possible"
            ],
            "a": 1,
            "w": "Before fuel selection the manual-start pushbutton is switched off; after MASTER ON fuel is removed first, followed by MAN START off.",
            "slide": 36
          }
        ]
      }
    ]
  },
  {
    "id": "pxs",
    "title": "Quiz 3 - A320 Pressurisation, Hypoxia and Oxygen",
    "source": "Pressurisation A320 Self Study Guide",
    "banks": [
      {
        "id": "A",
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
      },
      {
        "id": "B",
        "questions": [
          {
            "q": "What is cabin differential pressure when cabin altitude equals aircraft altitude?",
            "o": [
              "Maximum positive differential",
              "Zero",
              "Negative 8.6 psi",
              "Exactly 1 psi"
            ],
            "a": 1,
            "w": "Equal cabin and aircraft altitudes mean the inside and outside pressures are equal, so differential pressure is zero.",
            "slide": 3
          },
          {
            "q": "Which FCOM chapters are identified for oxygen and pressurisation system revision?",
            "o": [
              "Oxygen DSC-35-10 and pressurisation DSC-21-20-10",
              "Oxygen DSC-21 and pressurisation DSC-35",
              "Both in DSC-70",
              "Both in DSC-29"
            ],
            "a": 0,
            "w": "The revision slide points to DSC-35-10 for oxygen and DSC-21-20-10 for pressurisation.",
            "slide": 4
          },
          {
            "q": "Approximately what proportion of the atmosphere is nitrogen?",
            "o": [
              "21%",
              "50%",
              "78%",
              "0.9%"
            ],
            "a": 2,
            "w": "The atmospheric composition shown is approximately 78% nitrogen.",
            "slide": 5
          },
          {
            "q": "Which atmospheric composition statement matches the guide?",
            "o": [
              "Argon 21%, oxygen 0.9%",
              "Other gases 21%",
              "Nitrogen 0.1%",
              "Argon about 0.9% and other gases about 0.1%"
            ],
            "a": 3,
            "w": "The slide assigns about 0.9% to argon and 0.1% to other gases.",
            "slide": 5
          },
          {
            "q": "How does air density at altitude compare with sea-level air?",
            "o": [
              "It is lower",
              "It is always identical",
              "It is higher",
              "It becomes independent of pressure"
            ],
            "a": 0,
            "w": "Air becomes less dense as altitude increases.",
            "slide": 5
          },
          {
            "q": "What causes hypoxic hypoxia in the context of this course?",
            "o": [
              "Excess cabin pressure",
              "Altitude",
              "High oil temperature",
              "Low fuel flow"
            ],
            "a": 1,
            "w": "The guide identifies altitude as the cause of hypoxic hypoxia.",
            "slide": 6
          },
          {
            "q": "Which combination can affect how hypoxia develops?",
            "o": [
              "Only age and height",
              "Only cabin temperature",
              "Fitness, time at altitude, activity, ascent rate, stress, and fatigue",
              "Aircraft groundspeed only"
            ],
            "a": 2,
            "w": "The slide lists those personal and exposure factors as influencing hypoxia onset and severity.",
            "slide": 6
          },
          {
            "q": "What may happen to a simple task as hypoxia impairs cognitive function?",
            "o": [
              "It automatically becomes easier",
              "It remains unaffected",
              "It can be completed faster",
              "It may become difficult to complete"
            ],
            "a": 3,
            "w": "Even simple tasks can become difficult as cognitive ability declines.",
            "slide": 7
          },
          {
            "q": "Which visual changes may accompany hypoxia?",
            "o": [
              "Dimmer light, reduced colour vision and acuity, and narrowed peripheral vision",
              "Brighter colours and wider peripheral vision",
              "Only improved night vision",
              "No visual change is possible"
            ],
            "a": 0,
            "w": "The guide lists dimming, loss of colour discrimination, reduced acuity, and narrowed peripheral vision.",
            "slide": 7
          },
          {
            "q": "Which group of mental and motor abilities is impaired by hypoxia?",
            "o": [
              "Only hearing",
              "Coordination, judgement, reasoning, memory, and reaction time",
              "Only long-term memory",
              "Only muscle strength"
            ],
            "a": 1,
            "w": "Hypoxia degrades coordination and several judgement, reasoning, memory, and reaction functions.",
            "slide": 7
          },
          {
            "q": "What primarily determines how quickly hypoxia affects a person?",
            "o": [
              "Aircraft heading",
              "Fuel quantity",
              "Altitude",
              "Landing-elevation selection"
            ],
            "a": 2,
            "w": "The guide emphasises that the rate of impairment depends strongly on altitude.",
            "slide": 8
          },
          {
            "q": "After fitting oxygen for suspected hypoxia, what operational decision should be considered?",
            "o": [
              "Climb to a higher altitude",
              "Continue without monitoring",
              "Remove the mask to communicate",
              "Land as soon as safely possible"
            ],
            "a": 3,
            "w": "The presentation advises considering a landing as soon as it can be made safely.",
            "slide": 8
          },
          {
            "q": "Which operational advantage of high-altitude flight is identified?",
            "o": [
              "Obstacle clearance and reduced exposure to weather",
              "Elimination of all turbulence",
              "No need for fuel",
              "Unlimited airspeed"
            ],
            "a": 0,
            "w": "Altitude provides terrain clearance and often less weather, in addition to speed and engine-performance benefits.",
            "slide": 9
          },
          {
            "q": "How does introducing conditioned bleed air affect effective cabin altitude?",
            "o": [
              "It raises cabin altitude",
              "It raises cabin pressure and therefore lowers effective cabin altitude",
              "It has no pressure effect",
              "It opens the safety valves"
            ],
            "a": 1,
            "w": "Adding conditioned air increases cabin pressure, which represents a lower cabin altitude.",
            "slide": 10
          },
          {
            "q": "What structural factor limits how much a cabin can be pressurised?",
            "o": [
              "The number of passengers",
              "The oxygen percentage",
              "The differential pressure the fuselage can withstand",
              "The amount of recirculated air"
            ],
            "a": 2,
            "w": "Fuselage structural differential-pressure capability limits cabin pressurisation.",
            "slide": 10
          },
          {
            "q": "Which pair contains the two causes of depressurisation identified in the guide?",
            "o": [
              "High fuel flow and low oil pressure",
              "Engine overspeed and brake failure",
              "Icing and radio failure",
              "System malfunction or a breach in the aircraft structure"
            ],
            "a": 3,
            "w": "A system failure or structural opening can prevent the cabin from maintaining pressure.",
            "slide": 11
          },
          {
            "q": "What rapid-decompression effects are associated with the sudden expansion and cooling of cabin air?",
            "o": [
              "A temperature drop and possible fog or mist",
              "A steady temperature rise only",
              "Improved visibility",
              "No airflow or debris"
            ],
            "a": 0,
            "w": "Rapid decompression commonly produces cooling and visible fog or mist, with a wind blast and debris.",
            "slide": 12
          },
          {
            "q": "What sound may identify a slow decompression associated with a door seal?",
            "o": [
              "A starter pop",
              "Whistling or hissing",
              "A fire bell only",
              "A landing-gear horn"
            ],
            "a": 1,
            "w": "Leakage through a door seal may produce a whistle or hiss.",
            "slide": 13
          },
          {
            "q": "On which checks did the Helios crew overlook the pressurisation-system state?",
            "o": [
              "Taxi, cruise, and descent only",
              "Before landing only",
              "Pre-flight, after-start, and after-takeoff",
              "Refuelling and pushback only"
            ],
            "a": 2,
            "w": "The case-study quotation identifies the pre-flight, after-start, and after-takeoff checks.",
            "slide": 14
          },
          {
            "q": "How long did the Helios aircraft remain under autopilot control in the FL340 holding pattern?",
            "o": [
              "10 minutes",
              "20 minutes",
              "40 minutes",
              "About 70 minutes"
            ],
            "a": 3,
            "w": "The case study states that it remained in the holding pattern at FL340 for about 70 minutes.",
            "slide": 14
          },
          {
            "q": "What TUC is shown at 15,000 ft?",
            "o": [
              "About 30 minutes",
              "3-5 minutes",
              "30-60 seconds",
              "15-20 seconds"
            ],
            "a": 0,
            "w": "The table gives approximately 30 minutes at 15,000 ft.",
            "slide": 16
          },
          {
            "q": "What TUC range is shown at 18,000 ft?",
            "o": [
              "1-3 minutes",
              "20-30 minutes",
              "5-10 minutes",
              "30-60 seconds"
            ],
            "a": 1,
            "w": "The table gives approximately 20-30 minutes at 18,000 ft.",
            "slide": 16
          },
          {
            "q": "What TUC range is shown at 22,000 ft?",
            "o": [
              "30 minutes",
              "20-30 minutes",
              "5-10 minutes",
              "15-20 seconds"
            ],
            "a": 2,
            "w": "The table gives approximately 5-10 minutes at 22,000 ft.",
            "slide": 16
          },
          {
            "q": "What TUC range is shown at 30,000 ft?",
            "o": [
              "20-30 minutes",
              "5-10 minutes",
              "30-60 seconds",
              "1-3 minutes"
            ],
            "a": 3,
            "w": "The table gives approximately 1-3 minutes at 30,000 ft.",
            "slide": 16
          },
          {
            "q": "What TUC range is shown at 40,000 ft?",
            "o": [
              "15-20 seconds",
              "1-3 minutes",
              "5-10 minutes",
              "30 minutes"
            ],
            "a": 0,
            "w": "The table gives approximately 15-20 seconds at 40,000 ft.",
            "slide": 16
          },
          {
            "q": "Why should published TUC values be treated as approximate?",
            "o": [
              "They apply only on the ground",
              "TUC varies between people and can be affected by rapid decompression",
              "Altitude has no effect",
              "They are determined only by aircraft weight"
            ],
            "a": 1,
            "w": "The slide warns that TUC varies and specifically highlights rapid decompression.",
            "slide": 16
          },
          {
            "q": "What does the single outflow valve directly regulate?",
            "o": [
              "The oxygen concentration",
              "The pack outlet temperature",
              "How much cabin air is released",
              "Engine fuel flow"
            ],
            "a": 2,
            "w": "By metering air leaving the fuselage, the outflow valve controls cabin pressure.",
            "slide": 18
          },
          {
            "q": "Which airspeed condition can satisfy the RPCU ground-depressurisation logic when the engines are not all shut down?",
            "o": [
              "One ADIRS below 250 kt",
              "Aircraft groundspeed below 150 kt",
              "Indicated airspeed exactly zero only",
              "All ADIRS indicate below 100 kt"
            ],
            "a": 3,
            "w": "The RPCU accepts either all engines shut down or all ADIRS indicating less than 100 kt.",
            "slide": 19
          },
          {
            "q": "Where are the two A320 safety valves installed?",
            "o": [
              "On the rear pressure bulkhead above the flotation line",
              "Beside the outflow valve below the flotation line",
              "Inside the cockpit roof",
              "On the engine pylons"
            ],
            "a": 0,
            "w": "Both independent safety valves are on the rear pressure bulkhead above the flotation line.",
            "slide": 21
          },
          {
            "q": "How long can the ECAM outflow-valve position indication take to update during manual operation?",
            "o": [
              "It is instantaneous in all cases",
              "Up to about 5 seconds",
              "Exactly 30 seconds",
              "More than 10 minutes"
            ],
            "a": 1,
            "w": "The guide notes that the manual-mode valve-position indication may take up to five seconds.",
            "slide": 23
          }
        ]
      },
      {
        "id": "C",
        "questions": [
          {
            "q": "Why is hypoxia described as especially dangerous even before severe symptoms appear?",
            "o": [
              "It is gradual and a person may not recognise their own impairment",
              "It always produces an immediate loud warning",
              "It improves judgement at first",
              "It affects only passengers"
            ],
            "a": 0,
            "w": "Its insidious onset can impair self-awareness and decision-making before the person recognises the problem.",
            "slide": 6
          },
          {
            "q": "Which group contains possible physical symptoms of hypoxia?",
            "o": [
              "Lower breathing rate and improved speech",
              "Headache, dizziness, nausea, tingling, weakness, or sweating",
              "Only blue fingernails",
              "Only abdominal discomfort from pressure change"
            ],
            "a": 1,
            "w": "The guide lists those respiratory, neurological, and physical symptoms among possible hypoxia signs.",
            "slide": 7
          },
          {
            "q": "What does cyanosis look like?",
            "o": [
              "Red eyes",
              "Pale hair",
              "Blue discolouration of the lips or fingernails",
              "Yellow skin from fuel vapour"
            ],
            "a": 2,
            "w": "Cyanosis is the blue discolouration caused by inadequate oxygenation.",
            "slide": 7
          },
          {
            "q": "Which mood changes can occur with hypoxia?",
            "o": [
              "Only sadness",
              "No emotional change",
              "Only calmness",
              "Irritability or euphoria"
            ],
            "a": 3,
            "w": "The presentation lists both irritability and a misleading sense of euphoria.",
            "slide": 7
          },
          {
            "q": "Which personal condition can shorten or otherwise alter useful performance at altitude?",
            "o": [
              "Fatigue",
              "Landing-gear position",
              "Fuel specific gravity",
              "Outflow-valve colour"
            ],
            "a": 0,
            "w": "Fatigue is one of the listed factors that influence susceptibility to hypoxia.",
            "slide": 6
          },
          {
            "q": "Which cabin event may be an indication of a slow decompression before a loud structural event occurs?",
            "o": [
              "Automatic retraction of the landing gear",
              "Automatic deployment of passenger oxygen masks",
              "Starter clutch disengagement",
              "Engine reverse deployment"
            ],
            "a": 1,
            "w": "Passenger-mask deployment is a listed slow-decompression indication.",
            "slide": 13
          },
          {
            "q": "What did the repeated failure to establish radio contact in the Helios case indicate?",
            "o": [
              "The aircraft had landed safely",
              "The crew had selected manual radio tuning",
              "The occupants were no longer responding while the aircraft remained airborne",
              "The autopilot was disconnected"
            ],
            "a": 2,
            "w": "Nineteen contact attempts received no response while the aircraft continued at altitude under autopilot.",
            "slide": 14
          },
          {
            "q": "Can a hypoxic person remain conscious after useful task performance has been lost?",
            "o": [
              "No, loss of usefulness and consciousness are simultaneous",
              "Only below 10,000 ft",
              "Only if cabin pressure is zero",
              "Yes; TUC ends when effective performance is lost, not necessarily when consciousness is lost"
            ],
            "a": 3,
            "w": "The guide explains that confusion may prevent effective task completion while the person remains conscious.",
            "slide": 16
          },
          {
            "q": "What happens to conditioned pack air before it is distributed through the cabin?",
            "o": [
              "It is mixed with recirculated air",
              "It is vented through the outflow valve",
              "It is stored in oxygen bottles",
              "It is routed through the fuel tanks"
            ],
            "a": 0,
            "w": "Conditioned high-pressure air is blended with recirculated cabin air before distribution.",
            "slide": 17
          },
          {
            "q": "What system information do the CPCs provide to the crew?",
            "o": [
              "Only engine thrust data",
              "Information required for ECAM pressurisation indications",
              "Only passenger-mask status",
              "Only ram-air temperature"
            ],
            "a": 1,
            "w": "The independent automatic CPCs generate the pressurisation data required by ECAM.",
            "slide": 17
          },
          {
            "q": "How many normal outflow valves regulate the A320 cabin?",
            "o": [
              "Four",
              "Two",
              "One",
              "None"
            ],
            "a": 2,
            "w": "The A320 uses one outflow valve to meter cabin-air discharge.",
            "slide": 18
          },
          {
            "q": "Which controller condition is sufficient for the RPCU logic, provided the other ground conditions are met?",
            "o": [
              "One CPC selected off",
              "Both CPCs operating normally",
              "FMGS data available",
              "Both CPCs failed or manual mode selected"
            ],
            "a": 3,
            "w": "The RPCU logic accepts either failure of both CPCs or selection of manual mode.",
            "slide": 19
          },
          {
            "q": "Why must the passenger-door slide be disarmed for the residual-pressure warning light logic described?",
            "o": [
              "The listed warning conditions specifically include residual pressure with the slide disarmed",
              "The warning only works in flight with the slide armed",
              "The light measures oxygen flow",
              "The slide controls the outflow valve directly"
            ],
            "a": 0,
            "w": "The warning is designed to alert a person preparing to open a disarmed door while residual pressure remains.",
            "slide": 20
          },
          {
            "q": "How many independent safety valves protect the A320 pressure vessel?",
            "o": [
              "One",
              "Two",
              "Three",
              "Four"
            ],
            "a": 1,
            "w": "Two independent valves provide positive and negative differential-pressure protection.",
            "slide": 21
          },
          {
            "q": "Which safety-valve setting protects against negative cabin differential pressure?",
            "o": [
              "+9.0 psi",
              "+8.6 psi",
              "Approximately -1 psi",
              "Approximately -8.6 psi"
            ],
            "a": 2,
            "w": "The safety valves protect at approximately -1 psi on the negative side.",
            "slide": 21
          },
          {
            "q": "Where is the normal outflow valve relative to the safety valves?",
            "o": [
              "Both are on the right fuselage below the flotation line",
              "All are in the cockpit",
              "The outflow valve is above and the safety valves below the flotation line",
              "The outflow valve is below the flotation line; the safety valves are on the rear bulkhead above it"
            ],
            "a": 3,
            "w": "The normal valve is low on the right fuselage, while the two safety valves are aft and above the flotation line.",
            "slide": 18
          },
          {
            "q": "At what altitude range is emergency RAM AIR intended to supply ambient air?",
            "o": [
              "Below 10,000 ft",
              "Above 35,000 ft only",
              "At any altitude without restriction",
              "Only on the ground"
            ],
            "a": 0,
            "w": "The ram-air inlet is described as an emergency ambient-air source below 10,000 ft.",
            "slide": 22
          },
          {
            "q": "Which selection prevents the RAM AIR inlet from opening?",
            "o": [
              "LDG ELEV",
              "DITCHING",
              "MODE SEL to AUTO",
              "ENG MODE to NORM"
            ],
            "a": 1,
            "w": "The ditching configuration inhibits the ram-air door.",
            "slide": 22
          },
          {
            "q": "With RAM AIR selected and differential pressure below 1 psi, what does automatic pressurisation control do?",
            "o": [
              "Closes the outflow valve fully",
              "Opens both safety valves",
              "Opens the outflow valve to approximately 50%",
              "Commands maximum positive differential"
            ],
            "a": 2,
            "w": "Below the one-psi threshold, automatic control opens the outflow valve about halfway to establish airflow.",
            "slide": 22
          },
          {
            "q": "What happens if RAM AIR is selected while differential pressure remains above 1 psi?",
            "o": [
              "The door opens fully",
              "The safety valves open first",
              "The packs shut down permanently",
              "The ram-air door does not open and no ram airflow is supplied"
            ],
            "a": 3,
            "w": "Differential pressure above one psi inhibits actual ram-air door opening.",
            "slide": 22
          },
          {
            "q": "In normal automatic pressurisation operation, how much routine pilot input is required?",
            "o": [
              "Normally none",
              "Continuous manual valve control",
              "A landing-elevation update every minute",
              "Manual safety-valve operation"
            ],
            "a": 0,
            "w": "The automatic system is intended to manage the pressure schedule without routine crew input.",
            "slide": 23
          },
          {
            "q": "What crew input is required for semi-automatic operation when FMGS data is unavailable?",
            "o": [
              "Select RAM AIR",
              "Select landing elevation",
              "Open both safety valves",
              "Turn off all ADIRS"
            ],
            "a": 1,
            "w": "Loss of FMGS landing data requires the crew to set LDG ELEV.",
            "slide": 23
          },
          {
            "q": "Which barometric reference does the CPC use in semi-automatic operation?",
            "o": [
              "The first officer's standby altimeter only",
              "Destination QNH from ACARS only",
              "The captain's BARO reference from the ADIRS",
              "Cabin differential pressure"
            ],
            "a": 2,
            "w": "The course specifies the captain's barometric reference supplied through ADIRS.",
            "slide": 23
          },
          {
            "q": "What electrical change occurs when MODE SEL is selected to MAN?",
            "o": [
              "All outflow-valve motors lose power",
              "The safety valves are powered open",
              "The automatic motors remain active",
              "Power is removed from AUTO motors and the MAN motor is enabled"
            ],
            "a": 3,
            "w": "Manual selection disables the automatic valve motors and enables the crew-controlled manual motor.",
            "slide": 23
          },
          {
            "q": "Why should the crew allow for a delay after commanding the outflow valve manually?",
            "o": [
              "The ECAM position display may take up to five seconds to reflect movement",
              "The valve cannot move on the ground",
              "CPC data is available only after landing",
              "The display intentionally remains blank for 30 minutes"
            ],
            "a": 0,
            "w": "Valve movement/position reporting is not instantaneous and can lag by up to about five seconds.",
            "slide": 23
          },
          {
            "q": "Which group of parameters is shown on the pressurisation EIS presentation?",
            "o": [
              "N1, N2, EGT, and fuel flow",
              "Differential pressure, cabin altitude/vertical speed, operating mode, landing elevation, and valve positions",
              "Hydraulic quantity and brake pressure only",
              "Radio altitude and groundspeed only"
            ],
            "a": 1,
            "w": "The system display combines pressure, cabin rate/altitude, control mode, landing elevation, and valve-position information.",
            "slide": 24
          },
          {
            "q": "Who is supplied by the cockpit-fixed A320 oxygen system?",
            "o": [
              "Passengers only",
              "Cabin crew only",
              "Flight-deck occupants",
              "Ground engineers only"
            ],
            "a": 2,
            "w": "The cockpit-fixed system supplies the occupants of the flight deck.",
            "slide": 25
          },
          {
            "q": "Who is supplied by the cabin-fixed oxygen system?",
            "o": [
              "Only pilots",
              "Only maintenance staff",
              "Only observers",
              "Passengers and cabin crew"
            ],
            "a": 3,
            "w": "The fixed cabin system is provided for passengers and cabin crew.",
            "slide": 25
          },
          {
            "q": "Who may use the portable A320 oxygen equipment?",
            "o": [
              "Either flight-deck or cabin occupants as required",
              "Only the captain",
              "Only passengers seated over the wing",
              "Only external ground staff"
            ],
            "a": 0,
            "w": "The portable oxygen system can be used by either flight-deck or cabin occupants.",
            "slide": 25
          },
          {
            "q": "Which follow-up topic is explicitly prompted on the emergency-descent review slide?",
            "o": [
              "How to calculate takeoff performance",
              "What to do after reaching a safe altitude",
              "How to start the APU on the ground",
              "How to arm the cargo doors"
            ],
            "a": 1,
            "w": "The review prompts include structural-damage recognition, mask use, descent initiation and considerations, and actions at safe altitude.",
            "slide": 26
          }
        ]
      }
    ]
  }
];
