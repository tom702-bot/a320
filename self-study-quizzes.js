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
            "q": "An engine accelerates its intake airflow rearwards. Which reaction produces thrust?",
            "o": [
              "The compressor pressure rise acts forward on the engine casing.",
              "The intake momentum pulls the aircraft towards the oncoming airflow.",
              "The rearward change in air momentum produces an equal forward reaction.",
              "The turbine torque is transferred through the mounts as forward force."
            ],
            "a": 2,
            "w": "The engine accelerates atmospheric air, producing an equal force in the opposite direction.",
            "slide": 6
          },
          {
            "q": "For a similar thrust requirement, which airflow strategy distinguishes a propeller from a jet?",
            "o": [
              "A propeller accelerates a large air mass slightly; a jet accelerates a smaller air mass more.",
              "A propeller accelerates a small air mass greatly; a jet accelerates a larger air mass less.",
              "A propeller and jet use similar mass flow, but the propeller creates the larger velocity change.",
              "A propeller relies on pressure change, whereas a jet relies on mass flow without acceleration."
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
            "q": "How are the Brayton-cycle processes arranged in a running gas turbine?",
            "o": [
              "Each section performs its process continuously while the other sections operate at the same time.",
              "The engine completes compression and combustion alternately during successive shaft revolutions.",
              "Combustion pauses during turbine work so pressure can recover ahead of the nozzle.",
              "Each process moves sequentially through the engine after the preceding process is complete."
            ],
            "a": 0,
            "w": "Unlike the separate events of a piston-engine cycle, all gas-turbine stages operate continuously at the same time.",
            "slide": 10
          },
          {
            "q": "Where does a turboprop direct most of the energy extracted by its turbine?",
            "o": [
              "Into residual exhaust velocity through a propelling nozzle.",
              "Through a shaft and reduction gearbox to the propeller.",
              "Into bypass airflow driven directly by the compressor.",
              "Through the accessory gearbox to produce propeller thrust."
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
              "Very-low bypass turbofan",
              "Low-bypass turbofan",
              "High-bypass turbofan",
              "Medium-bypass turbofan"
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
            "q": "What change should the diffuser produce before airflow enters the combustion chamber?",
            "o": [
              "Raise velocity while lowering static pressure.",
              "Lower both velocity and static pressure.",
              "Raise both velocity and static pressure.",
              "Lower velocity while raising static pressure."
            ],
            "a": 3,
            "w": "A diffuser is a divergent duct that slows the gas stream and raises its pressure.",
            "slide": 20
          },
          {
            "q": "Why does the intake decelerate even supersonic flight airflow before the compressor?",
            "o": [
              "The compressor and turbine blade rows require smooth subsonic flow.",
              "Subsonic inlet flow removes most of the compressor's pressure-rise requirement.",
              "The exhaust nozzle requires the compressor inlet flow to remain subsonic.",
              "The fan's bypass-thrust efficiency depends on an inlet Mach number below one."
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
              "A small frontal area for a given mass flow.",
              "A pressure rise of up to about 8:1 from one stage.",
              "A smaller leakage path between rotating and stationary parts.",
              "A higher multi-stage compression ratio than the axial type."
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
            "q": "After an axial-compressor rotor accelerates the air, what is the stator row intended to do?",
            "o": [
              "Add heat while turning the air towards the combustor.",
              "Add shaft work and increase the air's tangential velocity.",
              "Recover pressure from velocity and set the angle for the next rotor.",
              "Convert static pressure into velocity for the next rotor."
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
              "Simpler construction with lower manufacturing cost.",
              "Lower starting power with a wider efficient speed range.",
              "Greater pressure rise from each individual stage.",
              "Higher overall pressure ratio with a smaller frontal diameter."
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
            "q": "Why is dilution air introduced in the final zone of the combustion chamber?",
            "o": [
              "To even and reduce gas temperature before the turbine while cooling the liner.",
              "To establish the primary recirculation zone immediately around the igniter.",
              "To accelerate the primary-zone flow to compressor-delivery velocity.",
              "To increase the local fuel-air ratio before the turbine nozzle guide vanes."
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
              "Its separate flame tubes make individual chamber replacement straightforward.",
              "Its reverse-flow gas path gives the smallest engine package.",
              "Its separated cans reduce interaction between adjacent flame zones.",
              "Its continuous flame annulus gives efficient combustion in a short chamber."
            ],
            "a": 3,
            "w": "The annular design provides an unbroken flame, high combustion efficiency, lower emissions, and a shorter arrangement.",
            "slide": 41
          },
          {
            "q": "Why is the gas path folded through a reverse-flow annular combustor?",
            "o": [
              "To shorten the engine package substantially.",
              "To reduce pressure loss through the chamber to negligible levels.",
              "To accommodate greater mass flow than a straight annular chamber.",
              "To replace the need for turbine nozzle guide vanes."
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
            "q": "Which cooling path is used for turbine blades and nozzle guide vanes?",
            "o": [
              "Scavenge oil is routed through internal passages and returned at the blade root.",
              "Fan discharge air is directed externally across the exhaust cone and blade tips.",
              "Fuel passes through the blade root before entering the combustion chamber.",
              "Compressor bleed air passes internally and exits through small surface holes."
            ],
            "a": 3,
            "w": "Compressor bleed air passes internally through the blades and exits via small cooling holes.",
            "slide": 49
          },
          {
            "q": "Which statement correctly describes the IAE V2500 low-pressure system?",
            "o": [
              "The LP compressor comprises the fan plus four stages, driven by a five-stage LP turbine.",
              "The LP compressor comprises five stages after the fan, driven by a four-stage LP turbine.",
              "The LP compressor and LP turbine each comprise four stages in addition to the fan.",
              "The fan and four-stage LP compressor are driven through the HP turbine shaft."
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
            "q": "Following EPR loss and reversion to N1 thrust control, which protections become unavailable?",
            "o": [
              "Thrust-limit computation and engine overspeed protection.",
              "Automatic relight and start-sequence monitoring.",
              "Autothrust and alpha-floor protection.",
              "Generator-load control and hydraulic-pump control."
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
              "They are unequal in magnitude and oppose one another.",
              "They are equal in magnitude and opposite in direction.",
              "They are equal in magnitude and act in the same direction.",
              "Their magnitudes depend on which body begins the interaction."
            ],
            "a": 1,
            "w": "Newton's third law describes equal-magnitude forces acting in opposite directions.",
            "slide": 5
          },
          {
            "q": "What change does combustion add to the compressed core airflow?",
            "o": [
              "Heat energy that produces expansion.",
              "Shaft work that produces compression.",
              "Pressure recovery that reduces volume.",
              "Kinetic energy recovered by diffusion."
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
              "Compressor pressure rise or turbine temperature drop.",
              "Bleed-air pressure or accessory gearbox torque.",
              "Fuel-flow energy or exhaust static pressure.",
              "Jet reaction thrust or shaft horsepower."
            ],
            "a": 3,
            "w": "The enclosed Brayton-cycle area represents useful output as jet reaction or shaft horsepower.",
            "slide": 10
          },
          {
            "q": "Why does the guide associate the basic turbojet with flight above roughly 450 mph?",
            "o": [
              "Its propulsive efficiency peaks below the speed range used by propellers.",
              "Propeller efficiency falls as blade-tip airflow is disturbed at higher speeds.",
              "Its compressor requires a propeller slipstream at lower forward speeds.",
              "Its thrust remains constant with forward speed while propeller thrust increases."
            ],
            "a": 1,
            "w": "The guide associates turbojets with speeds exceeding about 450 mph as propeller efficiency falls at high blade-tip speeds.",
            "slide": 12
          },
          {
            "q": "Which operating characteristic is listed as a turboprop advantage over a comparable piston engine?",
            "o": [
              "Smoother running and easier starting in low temperatures.",
              "Lower fuel consumption and lower replacement cost at every speed.",
              "A larger share of thrust produced by the exhaust stream.",
              "Peak efficiency at speeds well above the propeller operating range."
            ],
            "a": 0,
            "w": "The guide lists smooth running, lower weight, easier cold starting, and easier maintenance as turboprop advantages.",
            "slide": 13
          },
          {
            "q": "Which operation best matches the turboprop use described in the guide?",
            "o": [
              "Long-range transport above the efficient propeller speed range.",
              "Low-speed vertical-lift operation below regional cruise speeds.",
              "Short-range regional flight at speeds above roughly 300 mph.",
              "High-altitude supersonic flight where exhaust thrust dominates."
            ],
            "a": 2,
            "w": "Turboprops are described as appropriate above about 300 mph and well suited to short-range regional aircraft.",
            "slide": 14
          },
          {
            "q": "Which additional benefit accompanies the turbofan's fuel-efficiency advantage?",
            "o": [
              "A higher exhaust velocity for the same core fuel flow.",
              "A smaller fan mass flow for the same thrust.",
              "A higher proportion of thrust from the core jet.",
              "Reduced noise compared with a basic turbojet."
            ],
            "a": 3,
            "w": "Reduced noise is identified as an added turbofan benefit.",
            "slide": 16
          },
          {
            "q": "Which pairing of bypass ratio and aircraft category matches the guide?",
            "o": [
              "Medium bypass — business jets.",
              "High bypass — combat aircraft requiring afterburning.",
              "Low bypass — commercial passenger aircraft.",
              "Medium bypass — regional turboprops."
            ],
            "a": 0,
            "w": "The guide associates medium-bypass turbofans with business jets and low-bypass engines with combat aircraft.",
            "slide": 17
          },
          {
            "q": "What is the aerodynamic purpose of the convergent passages formed by turbine nozzle guide vanes?",
            "o": [
              "Diffuse the gas and increase static pressure before the blades.",
              "Accelerate the gas before it reaches the turbine blades.",
              "Hold gas velocity constant while turning it onto the blades.",
              "Reduce gas temperature while bypassing the first turbine stage."
            ],
            "a": 1,
            "w": "The convergent nozzle guide vanes accelerate the gas stream so the turbine can rotate at high speed.",
            "slide": 19
          },
          {
            "q": "How is gas pressure intended to behave through the combustion chamber?",
            "o": [
              "Increase progressively as combustion adds heat.",
              "Fall sharply as fuel is introduced.",
              "Remain reasonably constant through the chamber.",
              "Fall and recover with each combustion zone."
            ],
            "a": 2,
            "w": "The guide shows pressure being held reasonably constant through the combustion chamber.",
            "slide": 21
          },
          {
            "q": "Besides capturing and decelerating air, what does the intake contribute?",
            "o": [
              "A degree of compression through its duct shape.",
              "Fuel-air mixing before the compressor.",
              "Cooling air for the turbine section.",
              "Pressure-to-velocity conversion before the compressor."
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
            "q": "Which design characteristic gives a centrifugal compressor comparatively good FOD resistance?",
            "o": [
              "Its impeller has fewer rotating elements than an axial stage.",
              "Its structure is more robust than the axial type.",
              "Its diffuser shields the impeller from incoming objects.",
              "Its radial flow turns debris away before it reaches the impeller."
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
            "q": "What is the likely consequence of making centrifugal-compressor impeller clearance excessively small?",
            "o": [
              "Reduced leakage with steadier flow throughout the speed range.",
              "A lower pressure rise as the diffuser throat area increases.",
              "Aerodynamic buffeting that produces unsteady flow and vibration.",
              "Reduced impeller speed caused by diffuser pressure recovery."
            ],
            "a": 2,
            "w": "Excessively small clearance can cause buffeting that produces unsteady airflow and vibration.",
            "slide": 27
          },
          {
            "q": "Why is the axial compressor suited to the thrust requirement of large jet aircraft?",
            "o": [
              "It obtains a high pressure rise without turbine shaft work.",
              "It obtains the required pressure ratio from a single stage.",
              "Its rotor arrangement makes it less vulnerable to FOD.",
              "Its multi-stage flow capacity supports high thrust per engine."
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
            "q": "Which performance requirement applies to a combustion chamber across the engine operating range?",
            "o": [
              "Retain a small fuel fraction to sustain relight downstream.",
              "Maintain a fixed fuel flow as compressor airflow changes.",
              "Trade combustion efficiency for a stable visible flame.",
              "Mix and burn large, changing quantities of fuel and air efficiently."
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
            "q": "How does the primary-zone swirl vane assist stable combustion?",
            "o": [
              "It measures the temperature profile near the flame.",
              "It promotes fuel-air mixing and supports flame-anchoring recirculation.",
              "It extracts shaft work to turn the compressor.",
              "It meters cooling flow into the dilution zone."
            ],
            "a": 1,
            "w": "Swirling promotes efficient fuel-air mixing and helps maintain the recirculation that anchors the flame.",
            "slide": 34
          },
          {
            "q": "What does airflow through the perforated flare do in the primary zone?",
            "o": [
              "Forms a low-turbulence cooling film around the flame.",
              "Supports the liner against turbine-entry pressure.",
              "Creates turbulence that improves fuel-air mixing.",
              "Meters the secondary air that sets turbine-entry temperature."
            ],
            "a": 2,
            "w": "The perforated flare admits primary air and creates turbulence for effective mixing.",
            "slide": 35
          },
          {
            "q": "Which operating change can create the mixture condition for a rich flameout?",
            "o": [
              "Reducing fuel pressure during a high-speed descent.",
              "Holding the mixture near its optimum ratio.",
              "Reducing engine speed while maintaining the same airflow.",
              "Accelerating rapidly so fuel temporarily exceeds the available airflow."
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
            "q": "Why is a can-annular combustor comparatively convenient to repair on the wing?",
            "o": [
              "Its continuous liner can be removed as one short assembly.",
              "Its modular flame tubes can be repaired or replaced individually.",
              "Its cooling system is separate from compressor delivery air.",
              "Its pressure loss is lower because adjacent cans are isolated."
            ],
            "a": 1,
            "w": "The modular can-annular arrangement is easier to repair or replace on the wing.",
            "slide": 40
          },
          {
            "q": "Once the turbine has supplied the compressor and accessories, how can the remaining gas energy produce propulsion?",
            "o": [
              "It can drive a hydraulic motor coupled to the fan.",
              "It can drive a generator coupled to the propelling nozzle.",
              "It can drive a fan or propeller, or remain as jet efflux.",
              "It can be recovered as cabin-pressure work through bleed air."
            ],
            "a": 2,
            "w": "Residual energy can drive a fan or propeller or remain as jet efflux in a pure jet.",
            "slide": 43
          },
          {
            "q": "Which two aerodynamic jobs are performed by turbine nozzle guide vanes?",
            "o": [
              "Meter fuel and stabilise the combustion flame.",
              "Reduce turbine speed and recover exhaust pressure.",
              "Cool the gas and straighten it into the exhaust.",
              "Aim the gas at the blades and convert pressure into velocity."
            ],
            "a": 3,
            "w": "NGVs aim the flow at the turbine blades while accelerating it by converting pressure energy into kinetic energy.",
            "slide": 45
          },
          {
            "q": "Why are turbine blades commonly retained by a fir-tree root?",
            "o": [
              "Its serrations distribute the large centrifugal load.",
              "Its passages meter cooling flow into the blade tip.",
              "Its shape seals the gas path between adjacent blades.",
              "Its contact faces sense blade temperature through the disc."
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
            "q": "Which mass-flow and velocity-change combination characterises basic turbojet thrust?",
            "o": [
              "A relatively large air mass given a small velocity increase.",
              "A large propeller mass flow using most of the turbine energy.",
              "A relatively small air mass given a large velocity increase.",
              "A small exhaust mass flow with most energy converted to shaft power."
            ],
            "a": 2,
            "w": "A turbojet relies on a high acceleration applied to a relatively small mass of air.",
            "slide": 12
          },
          {
            "q": "In a turboprop, what share of useful propulsive output normally comes from the exhaust jet?",
            "o": [
              "A minor share; most turbine energy reaches the propeller.",
              "Roughly half, with the remainder reaching the propeller.",
              "The major share, with the propeller contributing less.",
              "A variable share that exceeds the propeller output above 300 mph."
            ],
            "a": 0,
            "w": "Almost all useful energy is transferred to the propeller, so exhaust contributes little thrust.",
            "slide": 13
          },
          {
            "q": "Which installation feature helps a turbofan fan remain efficient at speeds that challenge an open propeller?",
            "o": [
              "A low blade count that reduces fan-tip disturbance.",
              "A fan rotational speed below that of comparable propellers.",
              "An uncontained fan that captures a wider free-stream area.",
              "An inlet-enclosed fan with many blades."
            ],
            "a": 3,
            "w": "The enclosed, many-bladed fan avoids some high-speed propeller limitations.",
            "slide": 16
          },
          {
            "q": "For the same thrust, what benefit does bypass airflow provide?",
            "o": [
              "A higher exhaust velocity for the same mass flow.",
              "Lower fuel consumption for the same thrust.",
              "Less turbine work required to drive the fan.",
              "A higher core pressure ratio for the same fan speed."
            ],
            "a": 1,
            "w": "The guide states that bypass flow reduces fuel consumption for the same thrust.",
            "slide": 17
          },
          {
            "q": "What defines a divergent duct?",
            "o": [
              "Its flow area increases in the direction of flow.",
              "Its flow area decreases in the direction of flow.",
              "Its flow area remains constant while its shape changes.",
              "Its flow area alternates through rotating and stationary rows."
            ],
            "a": 0,
            "w": "A divergent duct widens in the direction of flow.",
            "slide": 18
          },
          {
            "q": "How is remaining exhaust pressure treated as the gas approaches the propelling nozzle?",
            "o": [
              "Static pressure rises and velocity falls through the nozzle.",
              "Static pressure is held near compressor-delivery pressure.",
              "Pressure falls and the convergent nozzle converts more of it into velocity.",
              "Pressure and velocity change independently through the exhaust."
            ],
            "a": 2,
            "w": "Pressure falls through the turbine and markedly at the exhaust as the propelling nozzle converts pressure to velocity.",
            "slide": 21
          },
          {
            "q": "Despite their different flow paths, what output must both centrifugal and axial compressors provide?",
            "o": [
              "Cooled gas for the exhaust section.",
              "Compressed air for the combustion chamber.",
              "Metered oil for the main bearings.",
              "Reversed flow for landing deceleration."
            ],
            "a": 1,
            "w": "Both compressor types raise air pressure before combustion.",
            "slide": 23
          },
          {
            "q": "Which clearances create the leakage concern identified for a centrifugal compressor?",
            "o": [
              "The clearance between the exhaust cone and tailpipe.",
              "The clearance between fuel nozzles and the chamber liner.",
              "The clearance between the impeller eye and intake lip.",
              "The gaps among the impeller, diffuser and compressor casing."
            ],
            "a": 3,
            "w": "The guide identifies the small impeller-to-diffuser-and-casing gaps as leakage paths.",
            "slide": 27
          },
          {
            "q": "Which group contains disadvantages of an axial compressor?",
            "o": [
              "Complex manufacture, high cost and greater FOD susceptibility.",
              "Large frontal area, low thrust capability and high leakage.",
              "Limited staging, low overall pressure ratio and high drag.",
              "High starting power, low stage pressure rise and simpler manufacture."
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
              "Its individual cans give the shortest and most space-efficient chamber.",
              "Its can layout is normally paired with a single axial compressor stage.",
              "Its individual flame tubes can be replaced comparatively easily.",
              "Each can uses a dedicated igniter rather than interconnecting tubes."
            ],
            "a": 2,
            "w": "A multi-can system is modular and individual cans are comparatively easy to replace.",
            "slide": 39
          },
          {
            "q": "How does combustion extend around a fully annular chamber?",
            "o": [
              "As separate flame fronts divided by the liner supports.",
              "As two arcs extending from the igniter locations.",
              "As linked flames confined within individual cans.",
              "As a continuous sheet of flame around the engine."
            ],
            "a": 3,
            "w": "The continuous annular passage supports an unbroken peripheral flame sheet.",
            "slide": 41
          },
          {
            "q": "What limits use of a reverse-flow annular combustor in a large, high-mass-flow engine?",
            "o": [
              "The S-bend adds efficiency loss and restricts very high mass flow.",
              "The folded liner leaves insufficient space for standard igniter locations.",
              "The layout leaves no direct flow path to the turbine inlet.",
              "The folded gas path increases overall engine length."
            ],
            "a": 0,
            "w": "The reversing gas path shortens the engine but costs efficiency and is not suited to high mass flow.",
            "slide": 42
          },
          {
            "q": "What design requirement drives the number of turbine stages?",
            "o": [
              "The turbine-entry pressure permitted by the combustion liner.",
              "The amount of shaft power that must be extracted.",
              "The number of compressor bleed-air services supplied.",
              "The exhaust velocity required at idle thrust."
            ],
            "a": 1,
            "w": "Additional stages are used when more power must be extracted from the gas stream.",
            "slide": 44
          },
          {
            "q": "How does a typical turbine blade's aerodynamic form vary from root to tip?",
            "o": [
              "Reaction at the root, becoming impulse at the tip.",
              "Impulse at both root and tip, with reaction at mid-span.",
              "Impulse near the root, becoming more reaction-like towards the tip.",
              "Reaction near the root, alternating with impulse each stage."
            ],
            "a": 2,
            "w": "A typical blade blends impulse characteristics at the root into reaction characteristics toward the tip.",
            "slide": 47
          },
          {
            "q": "Why is the aerofoil section of a turbine blade twisted along its span?",
            "o": [
              "To concentrate aerodynamic loading near the root.",
              "To raise fuel-nozzle pressure through the turbine disc.",
              "To turn the discharge away from the axial direction.",
              "To equalise work along the blade and produce uniform axial discharge."
            ],
            "a": 3,
            "w": "Blade twist balances work across the span and promotes uniform axial exit flow.",
            "slide": 48
          },
          {
            "q": "Which combination describes the function of a turbine-blade shroud ring?",
            "o": [
              "Stiffen the tips, reduce vibration and restrict tip leakage.",
              "Feed cooling air, seal the root and retain the blade axially.",
              "Disconnect the starter, damp shaft vibration and support the bearing.",
              "Measure turbine speed, temperature and pressure ratio."
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
            "q": "What flow change is produced by the divergent exhaust passage around the cone?",
            "o": [
              "Velocity rises and static pressure falls, increasing turbulence.",
              "Velocity and pressure fall together as the gas cools.",
              "Velocity falls and pressure rises, helping reduce turbulence.",
              "Velocity is held constant while swirl is increased."
            ],
            "a": 2,
            "w": "The divergent exhaust passage slows the gas and recovers pressure, reducing downstream turbulence.",
            "slide": 53
          },
          {
            "q": "What aerodynamic function accompanies the exhaust struts' bearing-support role?",
            "o": [
              "Meter the exhaust mass flow.",
              "Diffuse the exhaust to recover pressure.",
              "Drive the fan through the rear bearing.",
              "Straighten turbine discharge towards axial flow."
            ],
            "a": 3,
            "w": "Exhaust struts help straighten the flow after it leaves the turbine.",
            "slide": 54
          },
          {
            "q": "How does a convergent tailpipe nozzle use the pressure remaining after the turbine?",
            "o": [
              "It converts the remaining pressure into exhaust velocity.",
              "It diffuses the exhaust and recovers static pressure.",
              "It transfers the pressure mechanically to the HP compressor.",
              "It varies area to hold exhaust velocity constant at takeoff."
            ],
            "a": 0,
            "w": "The convergent tailpipe gives the gas a final acceleration by converting pressure to velocity.",
            "slide": 54
          },
          {
            "q": "Which control feature is fitted to the IAE V2500-A5?",
            "o": [
              "A hydromechanical fuel control with electronic trimming.",
              "Full Authority Digital Engine Control.",
              "A supervisory electronic control retaining manual fuel metering.",
              "A mechanical propeller and turbine governor."
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
            "q": "Which crew input is one of the variables used by V2500 FADEC to compute command EPR?",
            "o": [
              "Thrust lever angle.",
              "Selected cabin vertical speed.",
              "Brake temperature.",
              "Landing-gear position."
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
            "q": "Which group belongs primarily on the lower engine display rather than the primary upper display?",
            "o": [
              "Oil temperature and pressure, fuel flow and engine vibration.",
              "N1, EPR, EGT and the thrust-limit reference.",
              "N1 and EPR with the commanded thrust mode.",
              "N2, EGT, fuel-on-board and the thrust-limit reference."
            ],
            "a": 0,
            "w": "Secondary engine information includes oil temperature, oil pressure, fuel flow, and vibration.",
            "slide": 3
          },
          {
            "q": "Which pair of pressure-sensing locations forms the EPR comparison?",
            "o": [
              "Compressor delivery and combustion-chamber outlet.",
              "Fan discharge and HP-compressor delivery.",
              "Ahead of the fan and downstream of the final turbine stage.",
              "LP-compressor inlet and HP-compressor outlet."
            ],
            "a": 2,
            "w": "EPR compares inlet pressure just before the fan with pressure downstream of the last turbine stage.",
            "slide": 4
          },
          {
            "q": "Which sensing arrangement can provide the N1 speed signal?",
            "o": [
              "A pressure capsule connected to the fan discharge.",
              "A small AC generator on the N1 shaft or a magnetic pickup.",
              "A thermocouple ring downstream of the turbine.",
              "A resolver comparing N1 with the fuel-flow transmitter."
            ],
            "a": 1,
            "w": "The slide identifies a small shaft-mounted AC generator or a magnetic pickup as N1 speed sources.",
            "slide": 5
          },
          {
            "q": "If thrust is referenced to N1, which spool speed does the fuel control still use to schedule the required fuel?",
            "o": [
              "Corrected N1.",
              "Starter turbine speed.",
              "N2.",
              "Accessory gearbox speed."
            ],
            "a": 2,
            "w": "The guide states that required fuel quantity is governed by the N2 shaft speed.",
            "slide": 6
          },
          {
            "q": "For the temperature indication described as EGT, where are the sensing probes positioned?",
            "o": [
              "At compressor delivery, immediately before fuel is introduced.",
              "Between the HP-compressor stages near maximum air temperature.",
              "At the first-stage turbine inlet ahead of the nozzle guide vanes.",
              "In the jet pipe downstream of the last turbine stage."
            ],
            "a": 3,
            "w": "EGT, TGT, and JPT refer to temperature measured in the jet-pipe area after the final turbine stage.",
            "slide": 7
          },
          {
            "q": "Why is first-stage turbine inlet temperature normally inferred from a cooler sensing location?",
            "o": [
              "The first-stage inlet temperature is too high for reliable sensor survival.",
              "The flow at the first-stage inlet is too slow for thermocouple response.",
              "The first-stage inlet lies outside the gas path used for thrust control.",
              "Temperature signals ahead of the turbine are unsuitable for pressure correction."
            ],
            "a": 0,
            "w": "The first-stage inlet is so hot that a temperature sensor would have a very short life.",
            "slide": 8
          },
          {
            "q": "How does the indication convert sensed tank volume into the normal cockpit fuel-quantity display?",
            "o": [
              "It displays corrected tank volume after thermal expansion.",
              "It converts volume to pressure using tank-head height.",
              "It converts volume to fuel weight using specific gravity and temperature.",
              "It converts volume to endurance using current engine RPM."
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
            "q": "At which point is engine oil delivery pressure sensed?",
            "o": [
              "In the delivery line between the pressure pump and the engine.",
              "In the scavenge line between the bearings and the tank.",
              "At the oil-tank outlet upstream of the pressure pump.",
              "Across the fuel-oil heat exchanger in the return line."
            ],
            "a": 0,
            "w": "The oil-pressure sensing point is in the delivery line between the pump and the engine.",
            "slide": 12
          },
          {
            "q": "Why may a power increase lower excessive oil temperature on the affected engine?",
            "o": [
              "Higher pressure closes the filter bypass and sends oil through the cooler.",
              "Higher shaft speed increases scavenge flow while stopping delivery flow.",
              "Higher fuel flow absorbs more oil heat in the fuel-oil heat exchanger.",
              "Higher N2 reduces bearing loading enough to remove the heat source."
            ],
            "a": 2,
            "w": "Higher power increases fuel flow, allowing more heat to be removed from the oil in the fuel-oil heat exchanger.",
            "slide": 13
          },
          {
            "q": "For a turboprop, the torquemeter is the closest performance counterpart to which jet-engine indication?",
            "o": [
              "Fuel-flow or EGT indication.",
              "N1 or EPR indication.",
              "Oil-pressure or oil-quantity indication.",
              "N2 or starter-valve indication."
            ],
            "a": 1,
            "w": "Torque is used to set turboprop power and is compared with the role of N1 or EPR in a jet engine.",
            "slide": 14
          },
          {
            "q": "When compressor discharge pressure is no longer contained effectively, where does surge tend to originate?",
            "o": [
              "At the fan and then progress rearwards through the compressor.",
              "At the first LP-compressor stator and remain locally contained.",
              "At the diffuser and progress downstream into the combustion chamber.",
              "At the rear compressor rotors and progress forwards."
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
            "q": "Which condition can disturb compressor airflow enough to initiate a stall?",
            "o": [
              "A matched rotor speed and axial airflow within the design envelope.",
              "Foreign-object damage, inlet icing or operation outside the design envelope.",
              "A normal automatic start with stable fuel scheduling.",
              "A steady thrust reduction with uniform inlet airflow."
            ],
            "a": 1,
            "w": "FOD, contamination, icing, extreme manoeuvres, and improper handling are all listed causes.",
            "slide": 19
          },
          {
            "q": "Which combination most strongly indicates a compressor stall rather than a normal thrust transient?",
            "o": [
              "A steady EGT rise, smooth acceleration and stable vibration.",
              "A low N1 response with otherwise stable parameters and no noise.",
              "Bangs, fluctuating indications, vibration and high or rapidly rising EGT.",
              "A fuel-flow increase followed by a proportional, stable EGT rise."
            ],
            "a": 2,
            "w": "The presentation lists abnormal noises, possible flame, parameter fluctuations, vibration, sluggish response, and high EGT.",
            "slide": 20
          },
          {
            "q": "Subject to the engine type and situation, which initial thrust-lever action is used to clear a compressor stall?",
            "o": [
              "Reduce thrust on the affected engine immediately but steadily.",
              "Advance thrust slowly until rotor speed overtakes the airflow disturbance.",
              "Hold the lever fixed while selecting continuous ignition.",
              "Retard thrust abruptly to shut off fuel before rotor speed changes."
            ],
            "a": 0,
            "w": "The guide says the usual response is an immediate, steady thrust reduction on the affected engine.",
            "slide": 21
          },
          {
            "q": "Why does dividing the compressor into separately driven spools improve surge margin?",
            "o": [
              "Each compressor group is locked to a common optimum shaft speed.",
              "Rear stages are bypassed whenever front-stage airflow decreases.",
              "The spools share one turbine but use different reduction ratios.",
              "Each compressor group can rotate at the speed suited to its airflow."
            ],
            "a": 3,
            "w": "Separate spools can rotate at the speeds best suited to their compressor stages.",
            "slide": 17
          },
          {
            "q": "Which combination lists the normal pneumatic sources available for engine starting?",
            "o": [
              "Aircraft batteries, external electrical power and the APU generator.",
              "A ground air source, another operating engine or the APU.",
              "Ram air, pack discharge air or hydraulic accumulator pressure.",
              "Cabin differential pressure, crossbleed air or reservoir air."
            ],
            "a": 1,
            "w": "The guide lists a ground source, another running engine, and the APU as pneumatic start-air sources.",
            "slide": 22
          },
          {
            "q": "What mechanical change does the air-starter reduction gearbox make before driving N2?",
            "o": [
              "It increases starter turbine speed while reducing available torque.",
              "It converts pneumatic pressure directly into HP-fuel pressure.",
              "It reduces starter turbine speed and increases torque at the N2 drive.",
              "It transfers starter torque to N1 before coupling N1 to N2."
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
            "q": "Which set of components is sequenced directly by FADEC during an A320 engine start?",
            "o": [
              "Start valve, igniters and HP fuel valves.",
              "Pack valves, crossbleed valve and APU inlet door.",
              "LP fuel pumps, generator contactor and hydraulic pump.",
              "Outflow valve, safety valves and ram-air inlet."
            ],
            "a": 0,
            "w": "The FADEC controls the start valve, ignition, and high-pressure fuel valves during starting.",
            "slide": 26
          },
          {
            "q": "Before ENG MASTER is selected ON, what does selecting ENG MODE to IGN/START do?",
            "o": [
              "It opens HP fuel, energises ignition and begins N2 rotation.",
              "It calls up engine information and closes the pack valves.",
              "It opens the start valve while keeping the system display unchanged.",
              "It closes the crossbleed path and commands the outflow valve closed."
            ],
            "a": 1,
            "w": "IGN/START calls up the ENG SD page, makes engine parameters available, and closes the pack valves.",
            "slide": 27
          },
          {
            "q": "At about 43% N2 during an automatic start, which transition should occur?",
            "o": [
              "HP fuel closes and the engine begins a dry-crank sequence.",
              "LP fuel closes while the starter remains engaged to idle.",
              "The start valve closes and ignition is discontinued.",
              "The pack valves reopen while the start valve remains open."
            ],
            "a": 2,
            "w": "At N2 above about 43%, the start valve closes and ignition is discontinued.",
            "slide": 28
          },
          {
            "q": "Which parameter sequence provides the earliest confirmation that fuel has ignited?",
            "o": [
              "EGT begins to rise and engine acceleration continues.",
              "N2 decreases as fuel flow rises and EGT remains stable.",
              "Oil temperature falls before either fuel flow or EGT changes.",
              "N1 stabilises while EGT decreases and the starter remains engaged."
            ],
            "a": 0,
            "w": "Successful light-off is first shown by increasing EGT together with continued acceleration.",
            "slide": 29
          },
          {
            "q": "Which set of timing limits matches the start limitations shown in the guide?",
            "o": [
              "30-second pause between cycles; five-minute manual start; two-minute crank.",
              "15-second pause between cycles; two-minute manual start; five-minute crank.",
              "15-second pause between cycles; five-minute manual start; two-minute crank.",
              "Two-minute pause between cycles; 15-second manual start; five-minute crank."
            ],
            "a": 1,
            "w": "The stated limits include a 15-second pause, a two-minute manual-start cycle, and a five-minute crank cycle.",
            "slide": 31
          },
          {
            "q": "Which indication pattern separates a hung start from a hot start?",
            "o": [
              "Hung: normal RPM rise with high EGT; hot: RPM remains near static.",
              "Hung: N2 rises but fuel flow does not appear; hot: N2 rises with low EGT.",
              "Hung: RPM remains near-static and low; hot: RPM rises with a dramatic EGT increase.",
              "Hung: EGT rises before fuel flow; hot: fuel flow rises before EGT."
            ],
            "a": 2,
            "w": "Hung starts fail to accelerate adequately, while hot starts accelerate but develop excessive temperature.",
            "slide": 33
          },
          {
            "q": "After FADEC identifies a hot or hung start, what recovery sequence does it command?",
            "o": [
              "Fuel off, starter off and parameters removed until crew reset.",
              "Fuel held on with one igniter while starter airflow is increased.",
              "Fuel off followed by a 30-second dry crank before crew relight.",
              "Dual ignition, fuel off, then fuel re-commanded after about 0.5 seconds."
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
            "q": "Under what condition does the lower engine display appear or become relevant without routine crew selection?",
            "o": [
              "After touchdown when reverse thrust is selected.",
              "When an engine fault or out-of-tolerance parameter occurs.",
              "During refuelling when tank quantity is changing.",
              "Whenever the landing gear is extended below 10,000 ft."
            ],
            "a": 1,
            "w": "The lower display normally carries little information but presents secondary data when a fault or abnormal parameter occurs.",
            "slide": 3
          },
          {
            "q": "If EPR increases, what does the pressure comparison indicate?",
            "o": [
              "The inlet-to-exhaust pressure difference has decreased.",
              "The work indication is unchanged because EPR measures speed.",
              "The inlet-to-exhaust pressure difference and indicated work have increased.",
              "Oil-delivery pressure has increased relative to fuel pressure."
            ],
            "a": 2,
            "w": "The pressure difference represented by EPR is directly proportional to the work being done.",
            "slide": 4
          },
          {
            "q": "The use of two pressure sources for EPR is analogous to which flight instrument?",
            "o": [
              "Airspeed indication using pitot and static pressures.",
              "Altitude indication using static pressure and barometric setting.",
              "Vertical-speed indication using calibrated static leakage.",
              "Mach indication using air-data temperature correction."
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
              "As corrected revolutions per minute.",
              "As percentages of reference speed.",
              "As shaft horsepower values.",
              "As pressure-ratio values."
            ],
            "a": 1,
            "w": "Both spool speeds are displayed as percentage values.",
            "slide": 6
          },
          {
            "q": "What proportion of total engine power is developed in the upper 10% of gas-turbine speed?",
            "o": [
              "About 30%.",
              "About 10%.",
              "About 60%.",
              "About 90%."
            ],
            "a": 0,
            "w": "The slide states that roughly 30% of developed power occurs in the upper 10% of engine speed.",
            "slide": 6
          },
          {
            "q": "Which alternative labels can refer to the same downstream temperature-sensing region as EGT?",
            "o": [
              "TIT and ITT.",
              "EPR and JPT.",
              "TGT and JPT.",
              "TIT and TGT."
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
            "q": "How is the first-stage turbine temperature limit protected when the temperature cannot be measured there directly?",
            "o": [
              "A cooler downstream reading is limited using a known temperature-drop allowance.",
              "Oil temperature is converted to turbine temperature with an RPM correction.",
              "EGT is assumed to equal turbine inlet temperature at takeoff thrust.",
              "A computed limit is based on outside air temperature without gas-path sensing."
            ],
            "a": 0,
            "w": "More survivable probe locations are used and corrected for the known temperature reduction across stages.",
            "slide": 8
          },
          {
            "q": "How is a representative turbine-exhaust temperature obtained across the jetpipe?",
            "o": [
              "A probe is placed at the hottest point identified during engine test.",
              "Thermocouples are distributed in a ring around the inner walls.",
              "Two probes are mounted opposite one another on the outer cowling.",
              "A temperature sensor is fitted in the starter gearbox oil return."
            ],
            "a": 1,
            "w": "Multiple thermocouples are distributed circumferentially around the jetpipe inner wall.",
            "slide": 8
          },
          {
            "q": "Which correction allows tank volume to be displayed as fuel weight?",
            "o": [
              "Aircraft altitude and tank pressure.",
              "Engine RPM and current fuel flow.",
              "Fuel specific gravity at the current temperature.",
              "Cabin differential pressure and outside air temperature."
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
            "q": "Which fuel-quantity presentation is described for ECAM/EICAS?",
            "o": [
              "Individual tank quantities or total fuel on board.",
              "Tank volume with centre-tank quantity highlighted.",
              "Estimated endurance with fuel flow replacing tank quantity.",
              "Total fuel on board displayed when a tank imbalance exists."
            ],
            "a": 0,
            "w": "The display may show separate tank quantities or a total fuel-on-board value.",
            "slide": 9
          },
          {
            "q": "Where is fuel flow sensed for the engine display?",
            "o": [
              "In the return line from the fuel-oil heat exchanger.",
              "In the line feeding the combustion-chamber spray nozzles.",
              "At the LP-pump inlet before the main fuel filter.",
              "In the manifold between the tanks and the engine spar valve."
            ],
            "a": 1,
            "w": "The transmitter sits in the fuel line supplying the burner fuel spray nozzles.",
            "slide": 10
          },
          {
            "q": "Which pair of fuel-flow indications is shown in the guide?",
            "o": [
              "An analogue pointer and a fuel-used totaliser.",
              "A digital rate and an estimated endurance value.",
              "A pointer and a digital flow-rate readout.",
              "A digital rate and a low-flow warning light."
            ],
            "a": 2,
            "w": "The fuel-flow indication combines a pointer or needle with a digital value.",
            "slide": 10
          },
          {
            "q": "Why is engine fuel flow normally stated in kilograms or pounds per unit time?",
            "o": [
              "Mass flow stays proportional to tank volume as temperature changes.",
              "Pressure-line volume sensing would be less accurate than mass sensing.",
              "Specific gravity is fixed, so mass and volume are interchangeable.",
              "The useful measurement is the mass of fuel delivered to the engine."
            ],
            "a": 3,
            "w": "Fuel flow is measured as weight/mass per time rather than volume per time.",
            "slide": 10
          },
          {
            "q": "Which engine regions are instrumented to provide vibration indications?",
            "o": [
              "N1, N2 and turbine regions.",
              "N1 and N2 regions, with turbine vibration derived from EGT.",
              "Fan and accessory gearbox regions, with N2 inferred from oil pressure.",
              "Engine mounts and pylon structure rather than the rotating assemblies."
            ],
            "a": 0,
            "w": "Sensors in the compressor spools and turbine area convert vibration into electrical indications.",
            "slide": 11
          },
          {
            "q": "Where should the crew find the approved maximum engine-vibration limits?",
            "o": [
              "In the abnormal procedure, with no indication marking.",
              "In the AFM and commonly as an amber band on the indication.",
              "In the maintenance manual and on the fuel-control panel.",
              "In the engine-start limitations table beside starter duty cycles."
            ],
            "a": 1,
            "w": "The AFM contains vibration limits and the display may also show an amber caution band.",
            "slide": 11
          },
          {
            "q": "A vibration value of 5 or greater directs the crew to which reference?",
            "o": [
              "The engine-stall recovery memory item.",
              "The dispatch deviation procedure after landing.",
              "The HIGH ENGINE VIBRATION abnormal procedure.",
              "The engine fire procedure and immediate agent discharge."
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
            "q": "Where is oil temperature sensed relative to the fuel-oil heat exchanger?",
            "o": [
              "Downstream of the heat exchanger in the delivery system.",
              "Upstream of the heat exchanger at the pressure-pump inlet.",
              "Across the heat exchanger using delivery and scavenge probes.",
              "In the oil tank before the oil enters the delivery system."
            ],
            "a": 0,
            "w": "Oil temperature is sensed on the delivery side after the fuel/oil heat exchanger.",
            "slide": 13
          },
          {
            "q": "What operating caution follows from the way oil quantity is indicated?",
            "o": [
              "The indication shows pressure-equivalent quantity and varies with N2.",
              "It represents tank volume, so the tank must not be overfilled.",
              "It is unreliable until the oil reaches operating temperature in flight.",
              "It represents total system oil, including oil distributed through the engine."
            ],
            "a": 1,
            "w": "Oil quantity is a volume measurement of the tank contents; the guide warns not to overfill it.",
            "slide": 13
          },
          {
            "q": "What does a turboprop torquemeter measure to derive shaft horsepower?",
            "o": [
              "Propeller rotational speed without shaft loading.",
              "Gas-generator pressure ratio across the turbine.",
              "Turning force delivered through the propeller shaft.",
              "Fuel flow corrected for propeller RPM."
            ],
            "a": 2,
            "w": "The torquemeter measures propeller-shaft turning force and relates it to shaft horsepower.",
            "slide": 14
          },
          {
            "q": "How can rear-stage airflow separation develop into a full axial-compressor surge?",
            "o": [
              "The disturbance can propagate progressively towards the front stages.",
              "The disturbance moves downstream through the combustor and turbine stages.",
              "The affected rear stage accelerates until front-stage airflow catches up.",
              "The disturbance remains at the rear while pressure rises in the front stages."
            ],
            "a": 0,
            "w": "Surge commonly begins at the highly loaded rear rotors and can propagate forward.",
            "slide": 15
          },
          {
            "q": "What directly causes the thrust loss during compressor surge?",
            "o": [
              "The turbine absorbs more work as propeller pitch increases.",
              "Stable compressed airflow to the combustion chambers is reduced.",
              "Bypass mass flow increases while core speed remains constant.",
              "Exhaust-nozzle pressure rises enough to reduce gas velocity."
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
            "q": "What speed-matching problem made the older single-spool compressor vulnerable to surge?",
            "o": [
              "Rear stages often needed a different, higher speed than the front stages.",
              "Front stages needed to stop rotating while rear stages accelerated.",
              "Each stage was driven by a separate turbine at an unrelated speed.",
              "Rear-stage speed varied with fuel flow while front-stage speed stayed fixed."
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
            "q": "Which velocity relationship sets compressor-rotor blade angle of attack?",
            "o": [
              "Fuel-flow velocity relative to rotor speed.",
              "Aircraft forward speed relative to fan-tip speed.",
              "Rotor speed relative to axial airflow velocity.",
              "Exhaust velocity relative to compressor-delivery pressure."
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
            "q": "Which set contains conditions capable of upsetting the compressor's rotor-speed/airflow match?",
            "o": [
              "FOD, contamination, icing, extreme manoeuvres or improper handling.",
              "Low cabin altitude, high oil quantity or pack-valve closure.",
              "A steady inlet, matched shaft speed and scheduled fuel flow.",
              "Normal acceleration, stable bleed demand and clean compressor blades."
            ],
            "a": 0,
            "w": "The guide lists FOD, worn or contaminated components, icing, operation outside the design envelope, and poor handling.",
            "slide": 19
          },
          {
            "q": "During a severe compressor stall, where may flame be observed?",
            "o": [
              "At the exhaust nozzle but not at the inlet.",
              "At the exhaust and, in severe cases, at the inlet.",
              "At the inlet but not downstream of the turbine.",
              "At the pneumatic-starter exhaust and accessory gearbox vent."
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
            "q": "How does a starter/generator change function after engine start?",
            "o": [
              "It remains engaged as an electrical starter and regulates N2.",
              "It drives the engine electrically, then is driven to generate power.",
              "It starts pneumatically, then drives the fan mechanically.",
              "It supplies ignition current, then becomes the engine fuel pump."
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
            "q": "Which event removes starter torque after the engine reaches self-sustaining speed?",
            "o": [
              "Fuel pressure releases the clutch while starter air continues.",
              "Centrifugal force reverses the reduction gearbox.",
              "The clutch disengages as the starter turbine reaches maximum speed.",
              "The air-valve solenoid de-energises, removing air from the starter."
            ],
            "a": 3,
            "w": "At self-sustaining speed the valve closes; without driving air, the clutch releases.",
            "slide": 24
          },
          {
            "q": "What is the principal hazard if the air-starter clutch remains engaged?",
            "o": [
              "The engine can drive the starter beyond its safe speed and damage it.",
              "The starter changes into generator mode and overloads the electrical system.",
              "N2 remains near starter cutout speed and does not accelerate to idle.",
              "The pack valves reopen while starter air remains supplied."
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
            "q": "What pack-valve response follows initial selection of ENG MODE to IGN/START?",
            "o": [
              "Both valves remain open until ENG MASTER is selected ON.",
              "One valve closes to preserve bleed pressure for the selected engine.",
              "Both valves transfer to manual control pending crew selection.",
              "Both pack valves close automatically."
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
            "q": "What is the next automatic-start event after the initial dry-crank period?",
            "o": [
              "The start valve closes and N2 decays before fuel introduction.",
              "The pack valves reopen while the starter continues to motor N2.",
              "Ignition is energised and the HP fuel valve opens.",
              "LP fuel closes briefly to confirm the start-valve position."
            ],
            "a": 2,
            "w": "After dry cranking, FADEC applies an igniter and introduces HP fuel.",
            "slide": 28
          },
          {
            "q": "During normal fuel introduction, which indication should respond first?",
            "o": [
              "EGT rises before fuel flow appears.",
              "Fuel flow and EGT rise simultaneously.",
              "EGT falls as fuel flow rises.",
              "Fuel flow appears, followed by the EGT rise."
            ],
            "a": 3,
            "w": "The sequence shown is fuel flow increase followed by an EGT rise as ignition succeeds.",
            "slide": 28
          },
          {
            "q": "Which combination is necessary for a turbine engine to light and accelerate successfully?",
            "o": [
              "Adequate compressor RPM, correctly scheduled fuel and ignition.",
              "Bleed pressure, oil pressure and an open generator contactor.",
              "Starter RPM, pack flow and cabin differential pressure.",
              "N1 rotation, reverse-thrust stowage and ram-air flow."
            ],
            "a": 0,
            "w": "A successful start needs compression/airflow, fuel, and an ignition source.",
            "slide": 29
          },
          {
            "q": "Which indication pair gives the most immediate warning of a hung or hot start?",
            "o": [
              "Fuel quantity and oil temperature.",
              "EGT and engine RPM.",
              "N1 and cabin altitude.",
              "Oil pressure and starter-valve position."
            ],
            "a": 1,
            "w": "EGT and spool rpm show whether ignition and acceleration are normal.",
            "slide": 29
          },
          {
            "q": "How does FADEC secure an automatic start interrupted with ENG MASTER OFF?",
            "o": [
              "It closes HP fuel while leaving LP fuel and ignition on for cooling.",
              "It closes fuel valves but keeps the start valve open until idle speed.",
              "It closes LP and HP fuel, stops ignition and closes the start valve.",
              "It removes ignition and leaves fuel flow unchanged during dry cranking."
            ],
            "a": 2,
            "w": "FADEC removes fuel and ignition and shuts the engine start valve.",
            "slide": 30
          },
          {
            "q": "For starter-duty accounting, what constitutes one standard cycle?",
            "o": [
              "One 15-second cooling pause between attempts.",
              "One minute of starter operation at any N2.",
              "Every start attempt made during one flight sector.",
              "One standard automatic start containing one attempt."
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
            "q": "Which ground and flight N2 thresholds prohibit starter operation?",
            "o": [
              "Above 18% on the ground and 10% in flight.",
              "Above 10% on the ground and 18% in flight.",
              "Above 10% for both ground and flight starts.",
              "Above 18% for both ground and flight starts."
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
            "q": "Why does a tailwind above 10 kt favour the manual-start procedure?",
            "o": [
              "Tailwind can drive the engine in the reverse direction before the start.",
              "Tailwind reduces N2 indication without changing actual shaft speed.",
              "Tailwind increases pack demand and delays start-valve opening.",
              "Tailwind raises EGT by reducing fuel flow during ignition."
            ],
            "a": 0,
            "w": "A tailwind above 10 kt may cause counter-rotation, so the manual procedure is recommended.",
            "slide": 35
          },
          {
            "q": "Which switch sequence correctly aborts a manual start on either side of fuel introduction?",
            "o": [
              "Select MAN START off in both cases; ENG MASTER remains unchanged.",
              "Before MASTER ON select MAN START off; afterwards select MASTER off, then MAN START off.",
              "Before MASTER ON select MASTER off; afterwards select MAN START off and leave fuel on.",
              "Before MASTER ON select ENG MODE NORM; afterwards select IGN/START again."
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
            "q": "Which two pressures are compared when cabin differential pressure is displayed?",
            "o": [
              "Cabin pressure and conditioned-air duct pressure.",
              "Cabin pressure and ambient pressure outside the aircraft.",
              "Cockpit pressure and passenger-cabin pressure.",
              "Cabin pressure and the selected landing-elevation pressure."
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
            "q": "Why is self-recognition an unreliable defence against developing hypoxia?",
            "o": [
              "Early symptoms are consistent enough to be recognised but are easily mistaken for fatigue.",
              "The onset can be gradual and insidious while judgement is already deteriorating.",
              "Physical symptoms usually appear after the brain has adapted to the lower oxygen level.",
              "The first effects are confined to vision, leaving reasoning intact for self-diagnosis."
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
            "q": "Which combination explains why pressurisation makes routine high-altitude flight useful?",
            "o": [
              "Higher airspeed, improved jet performance, obstacle clearance and less weather exposure.",
              "Lower true airspeed, improved propeller efficiency and greater weather avoidance.",
              "Higher cabin oxygen percentage, lower aircraft drag and removal of terrain constraints.",
              "Sea-level cabin pressure, unrestricted differential pressure and complete turbulence avoidance."
            ],
            "a": 0,
            "w": "The slides cite faster flight, engine efficiency, terrain clearance, reduced weather exposure, and passenger comfort.",
            "slide": 9
          },
          {
            "q": "How is normal cabin pressure established and regulated?",
            "o": [
              "By varying pack inflow while holding the outflow valve closed.",
              "By using safety valves to meter cabin discharge during each flight phase.",
              "By varying recirculated airflow while keeping fresh-air inflow constant.",
              "By supplying conditioned air and controlling discharge through the outflow valve."
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
            "q": "Which condition marks a depressurisation rather than a normal cabin-altitude change?",
            "o": [
              "Cabin altitude can no longer be maintained and pressure moves towards ambient.",
              "Cabin altitude follows the scheduled climb while differential pressure increases.",
              "The outflow valve modulates during descent to match landing elevation.",
              "Cabin altitude briefly falls below airport elevation during pre-pressurisation."
            ],
            "a": 0,
            "w": "Depressurisation occurs when the system cannot maintain cabin altitude and pressure starts equalising with ambient conditions.",
            "slide": 11
          },
          {
            "q": "Which combination points to rapid rather than slow decompression?",
            "o": [
              "Ear discomfort, a door-seal hiss and a gradual cabin-altitude rise.",
              "A loud bang, blast of air, cooling, mist and rapid hypoxia onset.",
              "Passenger-mask deployment with no airflow, sound or temperature change.",
              "A cabin-altitude alert followed by slowly increasing differential pressure."
            ],
            "a": 1,
            "w": "Those are the rapid-decompression indications listed on the slide.",
            "slide": 12
          },
          {
            "q": "Which group is consistent with a developing slow decompression?",
            "o": [
              "Ear popping, abdominal discomfort, a cabin-altitude alert or door-seal hissing.",
              "A loud bang, debris and an immediate fog cloud without warning indications.",
              "A pressure increase, ear pain and automatic closure of the safety valves.",
              "A pack-flow reduction with stable cabin altitude and no physiological effects."
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
            "q": "What event defines the end of Time of Useful Consciousness?",
            "o": [
              "The point at which the person first notices hypoxia symptoms.",
              "The point at which consciousness is completely lost.",
              "The point at which effective task performance is no longer possible.",
              "The point at which supplemental oxygen begins restoring performance."
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
            "q": "What processing occurs before high-pressure pack air reaches the cabin?",
            "o": [
              "It is cooled and supplied directly, with recirculated air exhausted separately.",
              "It is conditioned, mixed with recirculated air and distributed.",
              "It is stored under pressure and released when the outflow valve opens.",
              "It is mixed with oxygen before distribution to maintain oxygen percentage."
            ],
            "a": 3,
            "w": "The packs condition the high-pressure air, which is then mixed with recirculated air and distributed.",
            "slide": 17
          },
          {
            "q": "Which architecture description matches the A320 Cabin Pressure Controllers?",
            "o": [
              "Two independent automatic controllers that also generate pressurisation data for ECAM.",
              "Two controllers that share one pressure channel and operate alternately in manual mode.",
              "One automatic controller backed up by the Residual Pressure Control Unit in flight.",
              "Two manual valve controllers with pressurisation data generated by the ADIRS."
            ],
            "a": 0,
            "w": "The two CPCs are described as independent and automatic, and they generate required ECAM information.",
            "slide": 17
          },
          {
            "q": "Which location identifies the A320's normal outflow valve?",
            "o": [
              "Left side of the rear fuselage above the flotation line.",
              "Rear pressure bulkhead above the flotation line.",
              "Right side of the rear fuselage above the flotation line.",
              "Right side of the fuselage below the flotation line."
            ],
            "a": 3,
            "w": "The outflow valve is on the right-hand side of the fuselage below the flotation line.",
            "slide": 18
          },
          {
            "q": "Which complete condition set permits the RPCU to open the outflow valve for residual pressure?",
            "o": [
              "Valve not fully open; both CPCs failed or MAN selected; on ground; engines off or all ADIRS below 100 kt.",
              "Valve fully closed; one CPC failed; on ground; at least one engine off or one ADIRS below 100 kt.",
              "Valve not fully open; both CPCs failed; airborne; engines idle and ADIRS indications below 100 kt.",
              "Valve not fully open; AUTO selected; on ground; engines off and any ADIRS below 100 kt."
            ],
            "a": 0,
            "w": "The slide lists that combination of residual-pressure, controller/mode, ground, and engine/airspeed conditions.",
            "slide": 19
          },
          {
            "q": "Which combination triggers the passenger-door residual-pressure warning described in the guide?",
            "o": [
              "Residual pressure, slide armed and aircraft on the ground.",
              "Residual pressure, slide disarmed and engines off or aircraft on the ground.",
              "Negative differential pressure, slide disarmed and engines running.",
              "Positive differential pressure, slide armed and aircraft airborne."
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
            "q": "When is the RAM AIR inlet available to provide ambient air in the emergency use described?",
            "o": [
              "Below 10,000 ft with DITCHING not selected.",
              "Below 10,000 ft with DITCHING selected and differential above 1 psi.",
              "Above 10,000 ft with DITCHING not selected and packs off.",
              "At any altitude once differential pressure falls below 1 psi."
            ],
            "a": 0,
            "w": "The emergency ram-air function is described for use below 10,000 ft and is inhibited by ditching selection.",
            "slide": 22
          },
          {
            "q": "How does cabin differential pressure modify a selected RAM AIR command?",
            "o": [
              "Below 1 psi the inlet opens; above 1 psi it opens after the safety valves relieve pressure.",
              "Below 1 psi the outflow valve remains closed; above 1 psi the inlet opens with reduced flow.",
              "Below 1 psi automatic control opens the outflow valve about halfway; above 1 psi the inlet stays closed.",
              "Below 1 psi both safety valves open; above 1 psi the outflow valve opens fully before the inlet."
            ],
            "a": 2,
            "w": "The guide uses 1 psi as the threshold for opening the outflow valve and permitting actual ram airflow.",
            "slide": 22
          },
          {
            "q": "Which operating modes are available for the A320 pressurisation system?",
            "o": [
              "Automatic, with manual valve control available after both CPCs fail.",
              "Automatic and manual, with landing elevation entered in both modes.",
              "Automatic and semi-automatic, with RPCU control as the manual backup.",
              "Automatic, semi-automatic and manual."
            ],
            "a": 3,
            "w": "The presentation identifies automatic, semi-automatic, and manual modes.",
            "slide": 23
          },
          {
            "q": "How do semi-automatic and manual pressurisation differ?",
            "o": [
              "Semi-automatic uses entered landing elevation; manual lets the crew position the outflow valve.",
              "Semi-automatic uses the RPCU for valve control; manual uses the active CPC.",
              "Semi-automatic fixes cabin altitude at 8,000 ft; manual controls cabin vertical speed.",
              "Semi-automatic uses FMGS data; manual leaves the automatic motors powered."
            ],
            "a": 1,
            "w": "Without FMGS data, landing elevation is selected; MAN mode removes power from the automatic motors and enables the manual motor.",
            "slide": 23
          },
          {
            "q": "Which set accounts for the three categories of oxygen equipment on the A320?",
            "o": [
              "Cockpit fixed, passenger portable and cabin-crew portable.",
              "Cockpit fixed, cabin fixed and portable equipment.",
              "Cockpit portable, cabin chemical and maintenance fixed.",
              "Flight-crew fixed, observer fixed and passenger portable."
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
            "q": "If cabin altitude has risen until it equals aircraft altitude, what is cabin differential pressure?",
            "o": [
              "Maximum positive differential.",
              "Zero differential.",
              "Maximum negative differential.",
              "Approximately +1 psi."
            ],
            "a": 1,
            "w": "Equal cabin and aircraft altitudes mean the inside and outside pressures are equal, so differential pressure is zero.",
            "slide": 3
          },
          {
            "q": "Which DSC references does the revision slide assign to oxygen and pressurisation?",
            "o": [
              "Oxygen DSC-35-10; pressurisation DSC-21-20-10.",
              "Oxygen DSC-21-20-10; pressurisation DSC-35-10.",
              "Oxygen DSC-35-20; pressurisation DSC-21-10.",
              "Oxygen DSC-21-10; pressurisation DSC-35-20."
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
            "q": "Which approximate atmospheric composition completes the major nitrogen and oxygen proportions?",
            "o": [
              "Argon 0.1%; other gases 0.9%.",
              "Argon 1.9%; other gases 0.1%.",
              "Argon 0.9%; other gases 1.0%.",
              "Argon 0.9%; other gases 0.1%."
            ],
            "a": 3,
            "w": "The slide assigns about 0.9% to argon and 0.1% to other gases.",
            "slide": 5
          },
          {
            "q": "Compared with sea-level air, how does air density change with altitude?",
            "o": [
              "It decreases.",
              "It remains constant while oxygen percentage decreases.",
              "It increases as ambient pressure decreases.",
              "It decreases during climb but recovers above 10,000 ft."
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
            "q": "Which set of factors can change the onset or severity of hypoxia for an individual?",
            "o": [
              "Fitness, age, cabin temperature and aircraft heading.",
              "Time at altitude, aircraft speed, diet and cabin humidity.",
              "Fitness, exposure time, activity, ascent rate, stress and fatigue.",
              "Altitude, landing elevation, differential pressure and pack flow."
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
            "q": "Which visual pattern is consistent with hypoxia?",
            "o": [
              "Dimmer light, reduced colour and acuity, and narrowed peripheral vision.",
              "Dimmer light with improved colour discrimination and wider peripheral vision.",
              "Brighter light with reduced acuity but unchanged peripheral vision.",
              "Reduced near vision with sharper distance vision and normal colour perception."
            ],
            "a": 0,
            "w": "The guide lists dimming, loss of colour discrimination, reduced acuity, and narrowed peripheral vision.",
            "slide": 7
          },
          {
            "q": "Which group of higher-order abilities is degraded by hypoxia?",
            "o": [
              "Hearing, balance and long-term memory.",
              "Coordination, judgement, reasoning, memory and reaction time.",
              "Speech, colour vision and muscle strength.",
              "Peripheral vision, hearing and fine touch."
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
            "q": "Which pair is identified as an operational advantage of high-altitude flight?",
            "o": [
              "Obstacle clearance and reduced exposure to weather.",
              "Lower true airspeed and reduced engine efficiency.",
              "Higher air density and improved propeller performance.",
              "Lower cabin altitude and reduced differential pressure."
            ],
            "a": 0,
            "w": "Altitude provides terrain clearance and often less weather, in addition to speed and engine-performance benefits.",
            "slide": 9
          },
          {
            "q": "What is the pressure effect of supplying conditioned bleed air to the cabin?",
            "o": [
              "Cabin pressure falls, making effective cabin altitude rise.",
              "Cabin pressure rises, making effective cabin altitude fall.",
              "Cabin pressure stays constant while oxygen percentage rises.",
              "Ambient pressure rises relative to the cabin, reducing differential pressure."
            ],
            "a": 1,
            "w": "Adding conditioned air increases cabin pressure, which represents a lower cabin altitude.",
            "slide": 10
          },
          {
            "q": "What ultimately constrains the maximum pressure difference that can be maintained across the cabin?",
            "o": [
              "The maximum flow capacity of both air-conditioning packs.",
              "The pressure schedule programmed into the active CPC.",
              "The differential pressure the fuselage structure can withstand.",
              "The amount of recirculated air mixed with conditioned air."
            ],
            "a": 2,
            "w": "Fuselage structural differential-pressure capability limits cabin pressurisation.",
            "slide": 10
          },
          {
            "q": "Which two broad causes of depressurisation are identified?",
            "o": [
              "Pack overheat and high cabin vertical speed.",
              "Outflow-valve modulation and landing-elevation error.",
              "Safety-valve opening and residual pressure on the ground.",
              "A system malfunction or a breach in the aircraft structure."
            ],
            "a": 3,
            "w": "A system failure or structural opening can prevent the cabin from maintaining pressure.",
            "slide": 11
          },
          {
            "q": "Which visible and temperature effects can follow sudden cabin-air expansion?",
            "o": [
              "A temperature drop with possible fog or mist.",
              "A temperature rise with condensation clearing.",
              "A temperature drop with cabin humidity falling too quickly for mist.",
              "A stable temperature with fog caused by increasing pressure."
            ],
            "a": 0,
            "w": "Rapid decompression commonly produces cooling and visible fog or mist, with a wind blast and debris.",
            "slide": 12
          },
          {
            "q": "Which sound particularly suggests leakage at a door seal during slow decompression?",
            "o": [
              "A brief pressure-equalisation pop.",
              "Whistling or hissing.",
              "A continuous pack-compressor rumble.",
              "Repeated safety-valve clicks."
            ],
            "a": 1,
            "w": "Leakage through a door seal may produce a whistle or hiss.",
            "slide": 13
          },
          {
            "q": "At which three points did the Helios crew miss the pressurisation-system state?",
            "o": [
              "Pre-flight, before-start and taxi checks.",
              "After-start, line-up and initial-climb checks.",
              "Pre-flight, after-start and after-takeoff checks.",
              "Pre-flight, top-of-climb and approach checks."
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
            "q": "Why are tabulated Time of Useful Consciousness values not precise personal guarantees?",
            "o": [
              "They vary among people and rapid decompression can shorten them.",
              "They are based on cabin altitude but ignore aircraft altitude.",
              "They apply to rapid decompression but not gradual exposure.",
              "They change with aircraft weight and pressurisation mode."
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
            "q": "If the engines are not confirmed shut down, which airspeed evidence can satisfy the RPCU ground logic?",
            "o": [
              "Either ADIRS indicates less than 100 kt.",
              "The mean ADIRS indication is less than 100 kt.",
              "At least two ADIRS indicate less than 100 kt.",
              "All ADIRS indicate less than 100 kt."
            ],
            "a": 3,
            "w": "The RPCU accepts either all engines shut down or all ADIRS indicating less than 100 kt.",
            "slide": 19
          },
          {
            "q": "Which location distinguishes the safety valves from the normal outflow valve?",
            "o": [
              "Rear pressure bulkhead above the flotation line.",
              "Right rear fuselage below the flotation line.",
              "Left rear fuselage below the flotation line.",
              "Forward pressure bulkhead above the flotation line."
            ],
            "a": 0,
            "w": "Both independent safety valves are on the rear pressure bulkhead above the flotation line.",
            "slide": 21
          },
          {
            "q": "What display lag should be allowed for the outflow-valve position during manual operation?",
            "o": [
              "About one second.",
              "Up to about five seconds.",
              "Up to about ten seconds.",
              "About 30 seconds."
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
            "q": "What makes early hypoxia particularly hazardous to self-monitoring?",
            "o": [
              "Impairment develops gradually and can reduce the ability to recognise it.",
              "Symptoms begin abruptly but disappear before performance is affected.",
              "Judgement improves temporarily while physical coordination declines.",
              "The effects begin in passengers and reach flight crew later."
            ],
            "a": 0,
            "w": "Its insidious onset can impair self-awareness and decision-making before the person recognises the problem.",
            "slide": 6
          },
          {
            "q": "Which group contains possible physical manifestations of hypoxia?",
            "o": [
              "Ear popping, abdominal discomfort and a door-seal hiss.",
              "Headache, dizziness, nausea, tingling, weakness or sweating.",
              "Cyanosis, improved coordination and slower breathing.",
              "Euphoria, narrowed vision and improved task performance."
            ],
            "a": 1,
            "w": "The guide lists those respiratory, neurological, and physical symptoms among possible hypoxia signs.",
            "slide": 7
          },
          {
            "q": "Which observation is described as cyanosis?",
            "o": [
              "Pale lips with reddened fingernails.",
              "Blue discolouration around the eyes.",
              "Blue discolouration of the lips or fingernails.",
              "Yellow discolouration of the skin and eyes."
            ],
            "a": 2,
            "w": "Cyanosis is the blue discolouration caused by inadequate oxygenation.",
            "slide": 7
          },
          {
            "q": "Which change in mood can accompany hypoxia?",
            "o": [
              "Irritability or euphoria.",
              "Anxiety followed consistently by depression.",
              "Unusual calmness without any change in judgement.",
              "Emotional blunting with preserved reasoning."
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
            "q": "In the Helios case, what did the prolonged lack of radio response imply while the aircraft remained airborne?",
            "o": [
              "The crew had transferred control to the cabin while holding.",
              "The radios had failed while the occupants remained operational.",
              "The occupants were no longer responding as the autopilot continued flight.",
              "The aircraft had begun an emergency descent without making a call."
            ],
            "a": 2,
            "w": "Nineteen contact attempts received no response while the aircraft continued at altitude under autopilot.",
            "slide": 14
          },
          {
            "q": "How can consciousness and useful performance differ during hypoxia?",
            "o": [
              "Useful performance can be lost while the person remains conscious.",
              "Loss of useful performance occurs after loss of consciousness.",
              "They are lost together once cabin altitude exceeds 10,000 ft.",
              "Consciousness remains useful until supplemental oxygen is fitted."
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
            "q": "What pressurisation-related output do the CPCs generate for the crew?",
            "o": [
              "Pack outlet temperatures and recirculation-fan status.",
              "Information used for ECAM pressurisation indications.",
              "Passenger oxygen-mask status and bottle pressure.",
              "RAM AIR temperature and ditching-valve position."
            ],
            "a": 1,
            "w": "The independent automatic CPCs generate the pressurisation data required by ECAM.",
            "slide": 17
          },
          {
            "q": "How many outflow valves normally regulate A320 cabin-air discharge?",
            "o": [
              "One valve for each CPC.",
              "One main valve and one standby valve.",
              "One normal outflow valve.",
              "Two normal valves plus two safety valves."
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
            "q": "Why does slide status matter to the passenger-door residual-pressure warning logic?",
            "o": [
              "The warning condition includes residual pressure while the slide is disarmed.",
              "The warning is inhibited with the slide disarmed to prevent nuisance alerts.",
              "The slide-arming mechanism mechanically opens the outflow valve.",
              "The light indicates slide pressure rather than cabin residual pressure."
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
            "q": "Which relative locations correctly distinguish the normal outflow valve and safety valves?",
            "o": [
              "Outflow valve below the flotation line; safety valves beside it below the line.",
              "Outflow valve on the rear bulkhead; safety valves on the right fuselage.",
              "Outflow valve above the flotation line; safety valves below it.",
              "Outflow valve below the flotation line; safety valves on the rear bulkhead above it."
            ],
            "a": 3,
            "w": "The normal valve is low on the right fuselage, while the two safety valves are aft and above the flotation line.",
            "slide": 18
          },
          {
            "q": "Within which altitude band is emergency RAM AIR intended to supply ambient air?",
            "o": [
              "Below 10,000 ft.",
              "Below 25,000 ft.",
              "Between 10,000 and 25,000 ft.",
              "Below maximum certified cabin altitude."
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
            "q": "If RAM AIR is selected while differential pressure remains above 1 psi, what is the inlet response?",
            "o": [
              "It opens while the outflow valve drives fully open.",
              "It opens at reduced area until differential pressure falls.",
              "It remains closed until both safety valves have opened.",
              "It remains closed and supplies no ram airflow."
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
            "q": "With FMGS landing data unavailable, which crew entry enables semi-automatic operation?",
            "o": [
              "Destination QNH.",
              "Landing elevation.",
              "Cruise flight level.",
              "Target cabin vertical speed."
            ],
            "a": 1,
            "w": "Loss of FMGS landing data requires the crew to set LDG ELEV.",
            "slide": 23
          },
          {
            "q": "Which barometric input does the CPC use in semi-automatic operation?",
            "o": [
              "The standby-altimeter barometric setting.",
              "Destination QNH entered on the PERF page.",
              "The captain's BARO reference from the ADIRS.",
              "The first officer's BARO reference from the ADIRS."
            ],
            "a": 2,
            "w": "The course specifies the captain's barometric reference supplied through ADIRS.",
            "slide": 23
          },
          {
            "q": "What motor-power transfer occurs when MODE SEL is selected to MAN?",
            "o": [
              "AUTO-motor power is removed and the MAN motor is enabled.",
              "The active AUTO motor remains powered while the standby motor is isolated.",
              "Both AUTO motors are enabled and the MAN motor is inhibited.",
              "All outflow-valve motors are depowered until the valve switch is moved."
            ],
            "a": 3,
            "w": "Manual selection disables the automatic valve motors and enables the crew-controlled manual motor.",
            "slide": 23
          },
          {
            "q": "Why should the ECAM valve-position indication not be expected to respond instantly in manual control?",
            "o": [
              "The indication can take up to five seconds to show valve movement.",
              "The valve moves immediately but CPC data updates at 30-second intervals.",
              "The indication is inhibited until the valve reaches a commanded detent.",
              "The manual motor remains unpowered for five seconds after MODE SEL."
            ],
            "a": 0,
            "w": "Valve movement/position reporting is not instantaneous and can lag by up to about five seconds.",
            "slide": 23
          },
          {
            "q": "Which parameter set belongs to the pressurisation EIS presentation?",
            "o": [
              "Differential pressure, pack flow, bleed pressure and valve positions.",
              "Differential pressure, cabin altitude and rate, mode, landing elevation and valve positions.",
              "Cabin altitude and rate, oxygen pressure, pack temperature and mode.",
              "Cabin altitude, aircraft altitude, ADIRS airspeed and safety-valve position."
            ],
            "a": 1,
            "w": "The system display combines pressure, cabin rate/altitude, control mode, landing elevation, and valve-position information.",
            "slide": 24
          },
          {
            "q": "Who receives oxygen from the cockpit-fixed system?",
            "o": [
              "Flight-deck occupants.",
              "Flight crew and the forward cabin crew.",
              "Flight crew and passengers in the forward cabin.",
              "Flight-deck occupants and ground personnel through portable outlets."
            ],
            "a": 2,
            "w": "The cockpit-fixed system supplies the occupants of the flight deck.",
            "slide": 25
          },
          {
            "q": "Who is served by the cabin-fixed oxygen system?",
            "o": [
              "Passengers and flight-deck observers.",
              "Cabin crew and flight-deck occupants.",
              "Passengers and cabin crew.",
              "Passengers, cabin crew and flight-deck occupants."
            ],
            "a": 3,
            "w": "The fixed cabin system is provided for passengers and cabin crew.",
            "slide": 25
          },
          {
            "q": "Who may be supported by the portable oxygen equipment?",
            "o": [
              "Flight-deck or cabin occupants as required.",
              "Cabin crew responding to a decompression, but not flight crew.",
              "Passengers requiring first aid, but not operating crew.",
              "Flight-deck occupants during smoke procedures, but not cabin occupants."
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
