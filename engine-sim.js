(function(){
  'use strict';

  const NS='http://www.w3.org/2000/svg';
  const C={normal:'#42e56c',control:'#45d7ec',caution:'#ffb327',fault:'#ff5757',inactive:'#6f7d73',white:'#eef5ef',bg:'#000000',panel:'#09100b'};
  const $=id=>document.getElementById(id);
  const tabsEl=$('systemTabs');
  const modesEl=$('modeButtons');
  const svg=$('systemDiagram');
  const gridEl=$('componentGrid');
  const titleEl=$('diagramTitle');
  const statusEl=$('diagramStatus');
  const nameEl=$('componentName');
  const purposeEl=$('componentPurpose');
  const normalEl=$('componentNormal');
  const abnormalEl=$('componentAbnormal');
  const refEl=$('componentRef');
  const stateCard=$('stateCard');
  const stateTitle=$('stateTitle');
  const stateText=$('stateText');
  const stateImpacts=$('stateImpacts');

  const component=(name,purpose,normal,abnormal,ref)=>({name,purpose,normal,abnormal,ref});
  const node=(id,x,y,w,h,label,detail,sub='')=>({id,x,y,w,h,label,detail,sub});
  const edge=(id,from,to,type='flow',label='',route=[])=>({id,from,to,type,label,route});
  const mode=(id,label,severity,title,text,impacts,states={},edgeStates={})=>({id,label,severity,title,text,impacts,states,edgeStates});

  const systems={
    architecture:{
      tab:'ARCHITECTURE',ata:'DSC 70-10',title:'ENGINE ARCHITECTURE',overviewId:'fan',
      overview:'The V2500-A5 is a high-bypass, twin-spool turbofan. Select a component to trace air, gas and mechanical power through the engine.',
      nodes:[
        node('intake',28,225,95,70,'AIR\nINTAKE',component('AIR INTAKE','Guides ambient air to the fan and provides the inlet-pressure reference used in engine control.','Air enters the fan. P2 is the engine-inlet pressure used with P5 to determine EPR.','Loss of a valid P2 signal causes automatic reversion from EPR to rated N1 control.','DSC-70-10; DSC-70-35-20')),
        node('fan',145,205,100,110,'FAN / N1',component('FAN AND LP ROTOR','The fan forms part of the low-pressure compressor/turbine assembly. Its rotational speed is displayed as N1.','Most fan air bypasses the core and supplies most of the thrust; the remainder enters the core.','FADEC uses N1 to compute applicable thrust and monitors it for control and overspeed protection. Maximum N1 in the supplied IAE limitation is 100%.','DSC-70-10; DSC-70-20; LIM-ENG')),
        node('bypass',290,70,155,66,'BYPASS DUCT',component('BYPASS AIRFLOW','Carries the majority of fan airflow around the engine core.','High bypass flow supplies most of the engine thrust.','During reverse, the translating sleeves and blocker doors redirect this fan stream forward through the cascades.','DSC-70-10; DSC-70-70')),
        node('bypassnozzle',720,70,145,66,'FAN NOZZLE\nBYPASS THRUST',component('FAN NOZZLE / BYPASS THRUST','Accelerates the bypass stream independently of the core exhaust.','Most of the V2500 thrust comes from this fan-bypass airflow.','During ground reverse, deployed sleeves and blocker doors redirect the fan stream forward through the cascades.','DSC-70-10; DSC-70-70')),
        node('lpc',285,225,105,85,'LP COMP\n4 STAGES',component('LOW-PRESSURE COMPRESSOR','The LP compressor contains the fan and four stages, connected to the five-stage LP turbine by the LP shaft.','It compresses the inlet air before the flow divides between bypass and core.','The 2.5 bleed valve improves stall margin during starting, low power and transient operation; its fail-safe position is open.','DSC-70-10; DSC-70-65')),
        node('hpc',420,225,105,85,'HP COMP\n10 STAGES',component('HIGH-PRESSURE COMPRESSOR','Ten compressor stages on the HP shaft further compress the core airflow.','Compressed core air feeds the combustion chamber; the 7th and 10th stage bleeds support starting and stability.','FADEC schedules bleed valves and variable stator vanes to preserve stability. Maximum N2 in the supplied IAE limitation is 100%.','DSC-70-10; DSC-70-20; DSC-70-65; LIM-ENG')),
        node('combustor',555,210,115,115,'COMBUSTION\nCHAMBER',component('ANNULAR COMBUSTION CHAMBER','Mixes fuel with HP-compressor air. Two igniters provide ignition.','FADEC controls the fuel/air mixture for thrust-lever position and operating conditions. Hot gas drives both turbines.','Loss of fuel or ignition prevents light-up; loss of established combustion causes engine thrust and shaft speeds to decay. Use current ECAM/QRH for crew action.','DSC-70-10; DSC-70-80')),
        node('hpt',700,225,88,85,'HP TURB\n2 STAGES',component('HIGH-PRESSURE TURBINE','Extracts combustion-gas energy to drive the HP compressor through the HP shaft.','The HP rotor speed is displayed as N2. The accessory gearbox is mechanically driven from this spool.','FADEC monitors N2 and protects against overspeed by controlling fuel flow.','DSC-70-10; DSC-70-20')),
        node('lpt',810,225,72,85,'LP TURB\n5 STG',component('LOW-PRESSURE TURBINE','Extracts remaining gas energy to drive the fan and LP compressor through the LP shaft.','The five-stage LP turbine sustains fan rotation and bypass thrust. P5 at its exhaust is used in the EPR calculation.','Loss of a valid P5 signal causes automatic reversion to rated N1 mode.','DSC-70-10; DSC-70-35-20')),
        node('exhaust',790,405,92,58,'EXHAUST\nP5',component('LP TURBINE EXHAUST / P5','The LP-turbine exhaust pressure is the numerator in EPR: P5 divided by inlet pressure P2.','Valid P2 and P5 allow normal EPR thrust control.','If sensed EPR is unavailable because P2 and/or P5 is lost, FADEC automatically uses rated N1 mode.','DSC-70-35-10; DSC-70-35-20')),
        node('agb',420,405,190,82,'ACCESSORY GEARBOX',component('ACCESSORY GEARBOX','Converts HP-shaft mechanical power to drive engine and aircraft accessories.','It drives the oil feed pump, main fuel pump, engine-driven hydraulic pump, generator, FADEC alternator and pneumatic starter interface.','Failure of a driven accessory affects its own system; use that system page and current ECAM/QRH for operational consequences.','DSC-70-10')),
        node('aircraft',615,405,155,82,'AIRCRAFT\nINTERFACES',component('AIRCRAFT SYSTEM INTERFACES','The operating engine supplies electrical generation, hydraulic pressure and pneumatic bleed, while its gearbox-driven pumps support fuel and oil systems.','Engine 1 drives the green hydraulic pump and Engine 2 the yellow hydraulic pump. Each engine-driven generator is a primary electrical source.','A stopped or isolated engine removes its own gearbox-driven contributions unless another aircraft source provides the affected service.','DSC-70-10'))
      ],
      edges:[
        edge('air1','intake','fan'),edge('air2','fan','lpc'),edge('air3','lpc','hpc'),edge('air4','hpc','combustor'),edge('gas1','combustor','hpt'),edge('gas2','hpt','lpt'),
        edge('bypass1','fan','bypass','flow','MOST AIR'),edge('bypass2','bypass','bypassnozzle','flow','BYPASS THRUST'),
        edge('p5','lpt','exhaust','flow'),edge('drive1','hpt','agb','mechanical','HP SHAFT',[[744,340],[515,340],[515,405]]),edge('drive2','agb','aircraft','control','MECH / POWER')
      ],
      modes:[
        mode('normal','NORMAL AIRFLOW','normal','NORMAL TWIN-SPOOL OPERATION','Air is compressed, mixed with metered fuel and burned. The gas drives the HP and LP turbines; bypass air provides most thrust.',[
          'N1 represents the fan/LP rotor speed; N2 represents the HP rotor speed.','The accessory gearbox converts HP-shaft power into services for the engine and aircraft.'
        ]),
        mode('core','CORE FLOW FOCUS','normal','CORE AND BYPASS FLOW','The fan stream divides: most air bypasses the core, while the remainder is compressed again, burned and expanded through both turbines.',[
          'The bypass path produces most thrust.','The core gas path supplies the energy that keeps both spools turning.'
        ],{bypass:'normal',lpc:'control',hpc:'control',combustor:'control',hpt:'control',lpt:'control'}),
        mode('accessories','ACCESSORY DRIVE','normal','HP-SHAFT ACCESSORY DRIVE','The accessory gearbox is driven from the HP shaft and powers the principal engine-mounted accessories.',[
          'Oil and fuel pumps are engine driven.','The engine-driven hydraulic pump and generator connect the engine to aircraft systems.','The FADEC alternator provides internal FADEC electrical power.'
        ],{agb:'control',aircraft:'control'},{}),
        mode('flameout','COMBUSTION LOST','fault','COMBUSTION LOST','Without sustained combustion, gas energy and thrust decay and the engine-driven interfaces are no longer sustained.',[
          'Fuel or ignition loss can prevent light-up; established-engine response is handled by ECAM/QRH.','The diagram shows the resulting loss of the gas path and accessory drive, not a crew procedure.'
        ],{combustor:'fault',hpt:'inactive',lpt:'inactive',exhaust:'inactive',agb:'caution',aircraft:'caution'},{gas1:'fault',gas2:'inactive',p5:'inactive',drive1:'caution',drive2:'caution'})
      ]
    },

    fadec:{
      tab:'FADEC / THRUST',ata:'DSC 70-20/35',title:'FADEC & THRUST CONTROL',overviewId:'fadecA',
      overview:'Each engine has a two-channel FADEC. It manages fuel, starting, stability, limits, indications and reverser control, normally using EPR as the thrust-setting parameter.',
      nodes:[
        node('tla',35,70,125,68,'THRUST\nLEVER',component('THRUST LEVER ANGLE','The manually moved thrust lever sends TLA to FADEC.','In manual mode, thrust follows lever position. In autothrust, the FMGC demand is limited by the lever position unless alpha floor is active.','At N1 reversion, equivalent thrust is initially held until a thrust-lever change. Autothrust and alpha-floor protection are lost.','DSC-70-35-10/20/30/50')),
        node('fmgs',35,175,125,68,'FMGC /\nA/THR',component('FMGC / AUTOTHRUST','Computes the thrust demand when autothrust is active.','FADEC controls the engine to the automatic demand without exceeding the lever-position limit, except for alpha floor.','Autothrust and alpha-floor protection are lost in rated or degraded N1 reversion.','DSC-70-35-10; DSC-70-35-20; DSC-70-35-50')),
        node('eiu',35,305,125,85,'EIU',component('ENGINE INTERFACE UNIT','Transfers aircraft and cockpit data between the aircraft systems and FADEC.','Inputs include thrust-lever, ENG MASTER/MODE, air-conditioning and anti-ice, LGCIU and FMGS information.','Loss of required sensor or aircraft data can cause reversion or loss of a controlled function; the exact effect depends on the failed input.','DSC-70-20; DSC-70-80')),
        node('sensors',215,410,145,75,'ENGINE\nSENSORS',component('ENGINE SENSORS','Supply pressures, temperatures and speeds used for engine control and monitoring.','P2/P5 support sensed EPR; T2 and ambient pressure support computed EPR and rated schedules.','Loss of P2/P5 gives rated N1 mode. Loss of T2 or ambient pressure gives degraded N1 mode.','DSC-70-20; DSC-70-35-20')),
        node('magalt',215,70,145,68,'FADEC MAG\nALTERNATOR',component('FADEC MAGNETIC ALTERNATOR','A gearbox-driven internal electrical source for FADEC.','It provides internal FADEC power once engine rotation is sufficient; the aircraft network supports FADEC when required.','In an electrical emergency, both engines lose EPR mode and each FADEC reverts to degraded N1 control.','DSC-70-20; DSC-70-35-20')),
        node('fadecA',410,135,160,90,'FADEC\nCHANNEL A',component('FADEC CHANNEL A','One of two redundant digital engine-control channels.','One channel is active and the other is standby. Either channel can manage the complete engine.','If the active channel fails, the standby automatically takes control. Loss of both channels removes normal electronic engine management.','DSC-70-20')),
        node('fadecB',410,275,160,90,'FADEC\nCHANNEL B',component('FADEC CHANNEL B','The second fully redundant FADEC channel.','It monitors alongside the active channel and remains ready to assume control.','A single-channel condition retains control but loses redundancy. The remaining channel becomes critical.','DSC-70-20')),
        node('epr',615,70,145,75,'EPR\nP5 / P2',component('ENGINE PRESSURE RATIO','The normal V2500 thrust-setting parameter: LP-turbine exhaust pressure P5 divided by inlet pressure P2.','FADEC controls fuel flow to achieve command EPR based on TLA, altitude, Mach, temperatures and bleed extraction.','Loss of sensed EPR produces rated N1 mode; loss of the data needed to compute EPR produces degraded N1 mode.','DSC-70-35-10; DSC-70-35-20')),
        node('fmu',705,180,150,72,'FUEL / FMU',component('FUEL CONTROL OUTPUT','FADEC commands the FMU to meter fuel for target EPR or N1.','Fuel schedules also limit acceleration/deceleration, avoid stall or flameout and protect N1/N2.','The FMU overspeed valve can reduce fuel to minimum and remains there until engine shutdown after operation.','DSC-70-20; DSC-70-45')),
        node('airctrl',705,285,150,72,'VSV / BLEED\nVALVES',component('AIR-SYSTEM CONTROL','FADEC schedules variable stator vanes, variable bleed valves and turbine-clearance cooling.','Schedules preserve compressor stability and efficiency across start, transient and steady operation.','Several bleed-valve fail-safe positions are open; clearance-control fail-safe is closed, increasing fuel consumption slightly.','DSC-70-20; DSC-70-65')),
        node('startctrl',705,390,150,72,'START / IGN',component('START AND IGNITION CONTROL','FADEC controls the start valve, HP fuel valve, fuel flow and ignition during an automatic start.','It monitors N1, N2, fuel flow and EGT and can abort/recycle an abnormal automatic ground start.','During a manual start FADEC monitors, but it does not automatically abort the sequence.','DSC-70-20; DSC-70-80')),
        node('reverser',705,485,150,62,'REVERSER',component('THRUST-REVERSER CONTROL','FADEC commands and monitors translating-sleeve actuation and controls engine setting during reverse.','Before deployment is complete, FADEC holds reverse idle; protection drives thrust toward idle if feedback disagrees with command.','An inadvertent deployment or stowage feedback outside the protection thresholds causes automatic thrust reduction toward idle.','DSC-70-20; DSC-70-70'))
      ],
      edges:[
        edge('tlae','tla','fadecA','control'),edge('fmgse','fmgs','fadecB','control'),edge('eiue','eiu','fadecB','control'),edge('senseA','sensors','fadecA','control'),edge('senseB','sensors','fadecB','control'),edge('powerA','magalt','fadecA','control'),edge('powerB','magalt','fadecB','control'),
        edge('cross','fadecA','fadecB','control','ACTIVE / STANDBY'),edge('eprA','epr','fadecA','control'),edge('fmuO','fadecA','fmu','control'),edge('airO','fadecA','airctrl','control'),edge('startO','fadecB','startctrl','control'),edge('revO','fadecB','reverser','control')
      ],
      modes:[
        mode('dual','DUAL CHANNEL','normal','NORMAL EPR CONTROL','One FADEC channel is active and the other is standby. Valid P2/P5 and supporting data allow normal EPR thrust control.',[
          'FADEC prevents thrust exceeding the rating for the thrust-lever position.','Fuel, air, start, reverser, indication and failure-recording functions remain available.'
        ],{fadecA:'normal',fadecB:'inactive',epr:'control'}),
        mode('single','SINGLE CHANNEL','caution','SINGLE-CHANNEL CONTROL','One channel has failed or is unavailable; the other automatically assumes complete control.',[
          'Engine management continues through the remaining channel.','Redundancy is lost even though the principal controlled functions remain available.'
        ],{fadecA:'fault',fadecB:'normal'}, {powerA:'fault',senseA:'fault'}),
        mode('rated','RATED N1','caution','RATED N1 REVERSION','P2 and/or P5 is unavailable, so sensed EPR is lost and FADEC automatically controls a rated N1 target.',[
          'N1 is scheduled from TLA, altitude and inlet total temperature.','Equivalent thrust is maintained until the thrust lever moves.','Autothrust and alpha-floor protection are lost.'
        ],{epr:'fault',sensors:'caution',fadecA:'caution',fadecB:'caution'},{eprA:'fault'}),
        mode('degraded','DEGRADED N1','fault','DEGRADED N1 REVERSION','T2 or ambient-pressure data is unavailable, so computed EPR is lost and N1 becomes a function of TLA only.',[
          'This is an unrated N1 mode. N1 rating-limit, N1 TLA and maximum-N1 indications are lost.','Autothrust and alpha-floor protection are lost.','Overboost can occur with the thrust lever fully forward.'
        ],{epr:'fault',sensors:'fault',fadecA:'caution',fadecB:'caution'},{senseA:'fault',senseB:'fault',eprA:'fault'}),
        mode('elecemerg','ELEC EMERGENCY','fault','ELECTRICAL EMERGENCY CONFIGURATION','Both engines lose EPR mode and each FADEC reverts to degraded N1 mode.',[
          'N1 is controlled from TLA only.','Autothrust and alpha-floor protection are unavailable.','The FADEC magnetic alternator remains the internal engine-driven source represented here.'
        ],{eiu:'fault',epr:'fault',fadecA:'caution',fadecB:'caution',magalt:'normal'},{eiue:'fault',eprA:'fault'})
      ]
    },

    fuel:{
      tab:'FUEL',ata:'DSC 70-45',title:'ENGINE FUEL SYSTEM',overviewId:'pump',
      overview:'Fuel is pressurised, heated, filtered, metered and distributed to 20 injectors. FADEC also manages fuel recirculation for engine-oil, IDG-oil and fuel temperature control.',
      nodes:[
        node('tank',25,60,115,70,'WING\nTANK',component('AIRCRAFT FUEL TANK','Supplies low-pressure fuel to the engine feed path and receives returned fuel when return-to-tank mode is permitted.','Fuel flows from the selected tank through the LP fuel shutoff valve.','Return-to-tank is inhibited when not allowed, including high fuel flow or high tank-fuel temperature.','DSC-70-45')),
        node('lpvalve',170,60,110,70,'LP FUEL\nS/O VALVE',component('LP FUEL SHUTOFF VALVE','Isolates the engine fuel supply at the aircraft/engine boundary.','ENG MASTER commands the LP valve open for start/running and closed for shutdown.','Closed or failed shut isolates the downstream engine fuel system; the engine cannot receive normal fuel supply.','DSC-70-45; DSC-70-80')),
        node('pump',320,60,125,78,'LP PUMP\nSTAGE',component('LOW-PRESSURE FUEL-PUMP STAGE','The LP and HP pump stages form a dual unit driven from one gearbox output shaft.','The LP stage suppresses cavitation, overcomes heat-exchanger and filter losses and provides pressure at the HP-stage inlet.','Loss of LP pressure interrupts the conditioned feed to the HP pump and downstream fuel system.','DSC-70-45')),
        node('fohe',490,60,125,78,'FUEL / OIL\nHEAT EXCH',component('FUEL/OIL HEAT EXCHANGER','Transfers heat from engine oil into fuel.','It cools engine oil, warms fuel and helps prevent fuel icing.','Reduced heat exchange can affect both oil cooling and fuel temperature conditioning.','DSC-70-45; DSC-70-50')),
        node('filter',650,60,110,70,'LP FUEL\nFILTER',component('LOW-PRESSURE FUEL FILTER','Removes contamination before the HP pump and FMU.','A differential-pressure switch provides a cockpit indication as filter restriction increases.','A clog indication shows excessive differential pressure; use current ECAM/QRH for the operational response.','DSC-70-45')),
        node('hppump',785,60,95,70,'HP PUMP',component('HIGH-PRESSURE FUEL-PUMP STAGE','The gearbox-driven HP stage raises fuel to the pressure required by the FMU, injectors and servo actuators.','It provides the pressure needed for optimum fuel flow and atomisation at all engine operating conditions.','Loss of HP pressure disrupts metering, injection and the high-pressure servo supply.','DSC-70-45')),
        node('fmu',785,175,110,95,'FMU',component('FUEL METERING UNIT','Contains the fuel metering, overspeed and shutoff functions plus servo-pressure regulation.','FADEC controls three torque motors/servo valves to meter fuel, operate shutoff and provide high-pressure servo fuel.','On detected overspeed, the overspeed valve reduces flow to a preset minimum and remains there until engine shutdown. A shutoff fault can prevent start or shutdown command completion.','DSC-70-45')),
        node('distribution',615,285,145,72,'DISTRIBUTION\nVALVE',component('FUEL DISTRIBUTION VALVE','Distributes metered fuel downstream of the FMU.','It supplies the 20 fuel injectors for even combustion-chamber delivery.','Loss or restriction affects fuel delivery to the injectors and therefore combustion.','DSC-70-45')),
        node('injectors',415,285,135,72,'20 FUEL\nINJECTORS',component('FUEL INJECTORS','Atomise and deliver metered fuel into the annular combustion chamber.','The HP pump provides pressure for effective atomisation across engine operating conditions.','No fuel delivery produces no light-up; disrupted established delivery can cause loss of combustion.','DSC-70-45; DSC-70-80')),
        node('actuators',770,335,115,68,'HP FUEL\nACTUATORS',component('HIGH-PRESSURE FUEL ACTUATION','Engine fuel pressure is also the servo medium for several engine actuators.','FMU-regulated high-pressure fuel positions controlled valves and air-system devices.','Loss of servo pressure can move affected devices toward their designed fail-safe position.','DSC-70-45; DSC-70-65')),
        node('diverter',585,430,120,70,'DIVERTER\nVALVE',component('FUEL DIVERTER VALVE','Routes fuel through the IDG cooler and engine fuel/oil heat exchanger arrangements.','FADEC selects among four recirculation modes based on oil and fuel temperatures, system configuration and flight phase.','A fail-safe/no-return mode avoids returning fuel when conditions prohibit it.','DSC-70-20; DSC-70-45')),
        node('idgcooler',395,430,125,70,'IDG OIL\nCOOLER',component('IDG FUEL/OIL COOLER','Uses engine fuel as the heat sink for IDG oil.','FADEC fuel routing regulates IDG-oil temperature as part of the recirculation system.','High fuel flow, high tank-fuel temperature or other conditions can select a no-return mode.','DSC-70-45')),
        node('returnvalve',720,480,135,68,'RETURN TO\nTANK VALVE',component('RETURN-TO-TANK VALVE','Controls whether heated/recirculated fuel is returned to the aircraft tank.','In return modes, fuel can carry heat back to the tank while temperature limits remain within bounds.','No-return modes are selected when return is not allowed, particularly with high fuel flow or high tank-fuel temperature.','DSC-70-45'))
      ],
      edges:[
        edge('feed1','tank','lpvalve'),edge('feed2','lpvalve','pump'),edge('feed3','pump','fohe'),edge('feed4','fohe','filter'),edge('feed5','filter','hppump'),edge('feed6','hppump','fmu'),edge('metered','fmu','distribution'),edge('toinj','distribution','injectors'),edge('servo','fmu','actuators','control','SERVO FUEL'),
        edge('recirc1','fmu','diverter','return','RECIRC',[[790,250],[790,430],[705,430]]),edge('recirc2','diverter','idgcooler','return'),edge('recirc3','idgcooler','returnvalve','return', 'HEAT CONTROL',[[455,500],[720,500]]),edge('return','returnvalve','tank','return','TO TANK',[[788,535],[82,535],[82,130]])
      ],
      modes:[
        mode('normal','NORMAL FEED','normal','NORMAL FUEL FLOW','The gearbox-driven pump supplies conditioned, filtered high-pressure fuel to the FMU, which meters flow to 20 injectors.',[
          'Fuel pressure also operates engine actuators.','FADEC meters flow to maintain target EPR while respecting acceleration, deceleration, stall, flameout and speed limits.'
        ]),
        mode('return','RETURN TO TANK','normal','FUEL RECIRCULATION — RETURN MODE','FADEC positions the diverter and return valves so fuel cools IDG/engine oil and may return heat to the tank.',[
          'This is one of two return-to-tank modes.','Routing is selected from engine-oil temperature, fuel temperature, configuration and flight phase.'
        ],{diverter:'control',idgcooler:'control',returnvalve:'normal'},{recirc1:'control',recirc2:'control',recirc3:'control',return:'normal'}),
        mode('noreturn','NO RETURN','caution','FUEL RECIRCULATION — NO-RETURN MODE','Return-to-tank flow is inhibited while internal routing continues to manage temperatures.',[
          'No-return modes are selected when return is not allowed.','Examples given by the FCOM are high fuel flow and high tank-fuel temperature.'
        ],{diverter:'control',returnvalve:'caution'},{return:'inactive',recirc3:'caution'}),
        mode('clog','FILTER CLOG','caution','FUEL FILTER DIFFERENTIAL PRESSURE','Restriction across the LP fuel filter has reached the cockpit-indication threshold.',[
          'The differential-pressure switch provides the flight-deck indication.','The simplified chart does not infer a bypass path not described in the selected FCOM text.'
        ],{filter:'caution'},{feed4:'caution',feed5:'caution'}),
        mode('overspeed','OVERSPEED VALVE','fault','FMU OVERSPEED PROTECTION','FADEC has detected overspeed and the FMU overspeed valve reduces fuel to the preset minimum-flow position.',[
          'The valve remains at minimum fuel flow until engine shutdown.','The action protects N1/N2 rather than representing a crew-selected fuel setting.'
        ],{fmu:'fault',distribution:'caution',injectors:'caution'},{metered:'fault',toinj:'caution'}),
        mode('isolated','FUEL ISOLATED','fault','FUEL SUPPLY ISOLATED','The LP fuel shutoff valve is closed, so the downstream engine fuel path is not supplied.',[
          'Normal metering and injection stop.','For start study, this produces no light-up; for shutdown, it removes fuel supply.'
        ],{lpvalve:'fault',pump:'inactive',fohe:'inactive',filter:'inactive',hppump:'inactive',fmu:'inactive',distribution:'inactive',injectors:'inactive'},{feed2:'fault',feed3:'inactive',feed4:'inactive',feed5:'inactive',feed6:'inactive',metered:'inactive',toinj:'inactive'})
      ]
    },

    oil:{
      tab:'OIL',ata:'DSC 70-50',title:'ENGINE OIL SYSTEM',overviewId:'tank',
      overview:'The closed oil system stores, pressurises, filters, cools and scavenges oil for the engine bearings and gearbox. ECAM receives pressure, low-pressure, temperature, quantity and clog information.',
      nodes:[
        node('tank',35,215,125,100,'OIL TANK',component('OIL TANK','Stores the engine-oil supply and receives scavenged oil.','Oil quantity is transmitted for ECAM indication; the tank feeds the supply pump.','Low quantity reduces available reserve. The supplied IAE limits in this extract focus on pressure and temperature.','DSC-70-50; LIM-ENG')),
        node('supply',205,225,120,80,'SUPPLY\nPUMP',component('OIL SUPPLY PUMP','A gearbox-driven feed pump pressurises oil from the tank.','Pressure rises with engine rotation and supplies the filter/cooling path before bearings and gearbox.','Minimum oil pressure in the supplied IAE limitation is 60 PSI. Low pressure is indicated on ECAM.','DSC-70-10; DSC-70-50; LIM-ENG')),
        node('filter',360,225,110,80,'OIL\nFILTER',component('OIL FILTER','Removes contamination from pressure oil before it reaches lubricated components.','A bypass/indication arrangement preserves monitoring as restriction develops.','A clog condition is detected and sent to ECAM; follow the current ECAM/QRH response.','DSC-70-50')),
        node('airhx',510,105,125,78,'AIR / OIL\nHEAT EXCH',component('AIR/OIL HEAT EXCHANGER','Provides an additional heat-rejection path for engine oil.','It works with the fuel/oil heat exchanger to control oil temperature.','Reduced cooling can contribute to high oil temperature.','DSC-70-50')),
        node('fuelhx',510,330,125,78,'FUEL / OIL\nHEAT EXCH',component('FUEL/OIL HEAT EXCHANGER','Transfers engine-oil heat into fuel.','It cools oil, warms fuel and helps prevent fuel icing.','Reduced fuel heat-sink capacity or exchanger performance can increase oil temperature.','DSC-70-45; DSC-70-50')),
        node('bearings',690,205,145,110,'BEARINGS &\nGEARBOX',component('BEARINGS AND ACCESSORY GEARBOX','The principal lubricated engine components.','Pressure oil lubricates and cools them; scavenge pumps recover oil from bearing compartments and gearbox.','Insufficient pressure or excessive temperature threatens lubrication. Use current ECAM/QRH for crew response.','DSC-70-50')),
        node('scavenge',690,390,145,78,'SCAVENGE\nPUMPS',component('SCAVENGE PUMPS','Recover used oil from multiple engine sumps and return it toward the tank.','Several scavenge elements collect oil from bearings and gearbox.','Reduced scavenge performance can disturb oil recovery and indications; the training chart does not diagnose maintenance causes.','DSC-70-50')),
        node('scavfilter',450,455,150,72,'MAIN SCAVENGE\nFILTER',component('MAIN SCAVENGE FILTER','Filters recovered oil before it returns to the tank.','A bypass valve maintains the return path if restriction becomes excessive.','A clog indication is sent to ECAM; bypass permits continued return flow while the fault remains.','DSC-70-50')),
        node('ecam',765,55,110,75,'ECAM',component('OIL INDICATIONS','Displays oil pressure, low-pressure warning, temperature, quantity and filter-clog status.','Values and warnings allow crew monitoring throughout start and operation.','IAE engineering limits: pressure at least 60 PSI; temperature maximum 155°C continuous or 165°C for 15 minutes.','DSC-70-50; LIM-ENG'))
      ],
      edges:[
        edge('oil1','tank','supply'),edge('oil2','supply','filter'),edge('oil3','filter','airhx','flow','PRESSURE',[[415,225],[415,144],[510,144]]),edge('oil4','airhx','fuelhx','flow','COOLING'),edge('oil5','fuelhx','bearings'),edge('scav1','bearings','scavenge','return'),edge('scav2','scavenge','scavfilter','return'),edge('scav3','scavfilter','tank','return','RETURN',[[450,510],[95,510],[95,315]]),
        edge('ind1','supply','ecam','control','PRESS',[[265,175],[265,35],[820,35],[820,55]]),edge('ind2','fuelhx','ecam','control','TEMP',[[572,330],[820,330],[820,130]])
      ],
      modes:[
        mode('normal','NORMAL CIRCULATION','normal','NORMAL OIL CIRCULATION','The supply pump sends filtered, cooled oil to bearings and gearbox; scavenge pumps return it through the main scavenge filter to the tank.',[
          'Pressure, temperature, quantity and clog sensing feed ECAM.','Fuel/oil and air/oil exchangers reject heat.'
        ]),
        mode('lowpress','LOW PRESSURE','fault','LOW OIL PRESSURE','Oil pressure is below the supplied IAE minimum of 60 PSI.',[
          'ECAM receives oil-pressure and low-pressure inputs.','The diagram highlights degraded lubrication flow, not a crew procedure; use current ECAM/QRH.'
        ],{supply:'fault',filter:'caution',bearings:'fault',ecam:'fault'},{oil2:'fault',oil3:'caution',oil4:'caution',oil5:'fault',ind1:'fault'}),
        mode('hightemp','HIGH TEMPERATURE','fault','HIGH OIL TEMPERATURE','Cooling is insufficient or heat load is excessive, so oil temperature has entered a limit region.',[
          'Maximum continuous: 155°C.','Maximum transient: 165°C for 15 minutes.','Minimum before takeoff: 50°C in the supplied IAE limitation.'
        ],{airhx:'caution',fuelhx:'fault',bearings:'caution',ecam:'fault'},{oil4:'caution',oil5:'fault',ind2:'fault'}),
        mode('clog','FILTER CLOG','caution','MAIN SCAVENGE FILTER CLOG','The main scavenge filter is restricted and the bypass route preserves return flow to the tank.',[
          'ECAM receives the oil-clog indication.','Return flow continues through the designed bypass while the fault remains.'
        ],{scavfilter:'caution',ecam:'caution'},{scav2:'caution',scav3:'caution'}),
        mode('cold','COLD OIL','caution','OIL TEMPERATURE — COLD LIMITS','Oil must be warm enough for the demanded engine condition.',[
          'Minimum for start: −40°C.','Minimum before idle is exceeded: −10°C.','Minimum before takeoff: 50°C.'
        ],{tank:'caution',supply:'caution',ecam:'caution'})
      ]
    },

    air:{
      tab:'AIR / START',ata:'DSC 70-65/80',title:'AIR, IGNITION & START',overviewId:'startvalve',
      overview:'The engine air system provides aircraft bleed, turbine cooling and compressor-stability control. The starting branch uses pneumatic air to turn the HP rotor while FADEC sequences fuel and ignition.',
      nodes:[
        node('source',25,385,125,78,'PNEUMATIC\nSOURCE',component('START-AIR SOURCE','Supplies compressed air from the aircraft pneumatic system to the engine start valve.','Available pressure drives the air-turbine starter during a start or dry crank.','Without pneumatic pressure, the starter cannot accelerate N2 through the normal path.','DSC-70-65; DSC-70-80')),
        node('startvalve',195,385,125,78,'START\nVALVE',component('START VALVE','Admits pneumatic air to the starter when commanded.','FADEC opens it for automatic start and closes it above 43% N2. MAN START can command the manual/crank path.','A failed-closed or unavailable valve prevents normal starter rotation. During an automatic abort FADEC closes it before commanding the dry-crank phase.','DSC-70-20; DSC-70-80')),
        node('starter',365,385,125,78,'AIR TURBINE\nSTARTER',component('PNEUMATIC STARTER','Uses pneumatic energy to rotate the HP spool through the accessory gearbox.','It accelerates N2 to the fuel/ignition point and cuts out as the engine becomes self-sustaining.','Starter use is prohibited above 10% N2 on the ground or 18% in flight in the supplied IAE limitation.','DSC-70-10; DSC-70-80; LIM-ENG')),
        node('n2',535,385,110,78,'HP ROTOR\nN2',component('HP ROTOR / N2','The starter turns the HP compressor/turbine assembly. N2 is the HP-rotor speed.','HP fuel opens at 10–16% N2; start valve and ignition cut off above 43% N2.','A hung start is insufficient N2 acceleration after light-up. Automatic ground-start monitoring can abort below 50% N2.','DSC-70-80; DSC-70-95')),
        node('fadec',355,70,160,88,'FADEC',component('FADEC START CONTROL','Sequences the automatic start and monitors N1, N2, fuel flow and EGT.','It controls start valve, HP fuel valve, fuel flow and ignition and can abort/recycle an abnormal automatic ground start.','Manual start is monitored but not automatically aborted. Crew action is required for an abnormal manual start.','DSC-70-20; DSC-70-80')),
        node('hpfuel',565,70,125,72,'HP FUEL\nVALVE / FMU',component('HP FUEL AND METERING','Introduces metered fuel once start rotation and control conditions are met.','During automatic start, HP fuel opens at 10–16% N2 and FADEC meters start fuel flow.','For hot, hung, stalled or no-light-up automatic starts below 50% N2, FADEC closes HP fuel during the abort.','DSC-70-80')),
        node('igniters',735,70,120,72,'TWO\nIGNITERS',component('IGNITION SYSTEM','Two independent igniters light the fuel/air mixture.','Automatic start normally uses one igniter; manual start uses both. Ignition stops above 43% N2 during normal start.','No available ignition produces no light-up. FADEC detects the abnormal automatic start and aborts below 50% N2 on the ground.','DSC-70-10; DSC-70-80')),
        node('combustor',710,230,145,90,'COMBUSTION\nEGT / N1 RISE',component('START COMBUSTION','Light-up is confirmed by EGT and N1 increase while N2 continues accelerating.','FADEC monitors EGT and acceleration until idle/AVAIL. Starting EGT maximum in the supplied IAE limitation is 635°C.','Hot start: EGT exceeds the start limit. Hung start: acceleration stalls. No light-up: EGT/N1 rise does not develop.','DSC-70-80; DSC-70-95; LIM-ENG')),
        node('stability',190,205,155,95,'2.5 / 7 / 10\nBLEED VALVES',component('COMPRESSOR STABILITY BLEEDS','Bleed valves unload compressor stages to improve stall margin.','The 2.5 bleed valve responds to low-rotor speed, altitude and Mach. The 7th/10th stage valves are fully open for engine start and normally closed for most running operation.','Their fail-safe position is open. Open valves vent air to the fan stream and preserve stability at the cost of performance.','DSC-70-65')),
        node('cooling',25,70,125,88,'TURBINE\nCOOLING',component('TURBINE COOLING / CLEARANCE CONTROL','Compressor bleed air cools turbine parts and regulates case clearance.','FADEC schedules turbine-clearance cooling from rotor speed and altitude. HPT second-stage cooling uses 10th-stage air based on N2 and altitude.','Clearance control fails closed, slightly increasing fuel consumption. HPT cooling-air control is normally fail-safe open.','DSC-70-65')),
        node('aircraftbleed',25,225,125,78,'AIRCRAFT\nPNEUMATIC',component('AIRCRAFT PNEUMATIC SUPPLY','Engine compressor bleed supplies the aircraft pneumatic system.','Bleed extraction is included in the FADEC command-EPR calculation and idle scheduling.','High bleed demand can increase modulated idle; a bleed-system fault is handled by its own ECAM/QRH logic.','DSC-70-20; DSC-70-35-20; DSC-70-65'))
      ],
      edges:[
        edge('startair1','source','startvalve'),edge('startair2','startvalve','starter'),edge('mechanical','starter','n2','mechanical'),edge('cmdstart','fadec','startvalve','control','OPEN / CLOSE',[[435,114],[435,335],[258,335],[258,385]]),edge('cmdfuel','fadec','hpfuel','control'),edge('cmdign','fadec','igniters','control'),edge('fuelcomb','hpfuel','combustor'),edge('igncomb','igniters','combustor','control'),edge('n2comb','n2','combustor','mechanical','AIRFLOW'),edge('cmdstab','fadec','stability','control'),edge('cool','stability','cooling','flow','BLEED'),edge('pneu','stability','aircraftbleed','flow','BLEED')
      ],
      modes:[
        mode('running','NORMAL RUNNING','normal','NORMAL AIR-SYSTEM OPERATION','FADEC schedules stability bleeds, stator vanes and turbine cooling while engine bleed supplies the aircraft pneumatic system.',[
          'The 7th/10th start bleeds are normally closed for most running operation.','The start valve and starter are inactive after the start.'
        ],{source:'inactive',startvalve:'inactive',starter:'inactive',n2:'normal',fadec:'normal',stability:'normal',cooling:'normal',aircraftbleed:'normal'},{startair1:'inactive',startair2:'inactive',mechanical:'inactive',cmdstart:'inactive'}),
        mode('start','AUTO START','normal','AUTOMATIC GROUND START','Pneumatic air accelerates N2. At 10–16% N2, HP fuel and one igniter are commanded; above 43% N2, start air and ignition cut off.',[
          'FADEC controls and monitors the whole sequence.','The 7th and 10th stage bleed valves are fully open for start.','The engine stabilises at idle and AVAIL is displayed.'
        ],{source:'normal',startvalve:'normal',starter:'normal',n2:'normal',fadec:'control',hpfuel:'normal',igniters:'normal',combustor:'normal',stability:'normal'}),
        mode('hot','HOT START ABORT','fault','HOT START — AUTOMATIC ABORT','EGT exceeds the 635°C start limit while N2 is below 50% during an automatic ground start.',[
          'FADEC closes HP fuel and the start valve and stops ignition.','It then commands approximately 30 seconds of dry cranking to clear fuel vapour.','The displayed logic is protection behaviour, not a crew procedure.'
        ],{combustor:'fault',fadec:'caution',hpfuel:'fault',igniters:'inactive',startvalve:'caution',starter:'caution'},{fuelcomb:'fault',igncomb:'inactive',cmdfuel:'fault',cmdign:'inactive',startair2:'caution'}),
        mode('hung','HUNG START ABORT','fault','HUNG START — AUTOMATIC ABORT','Light-up occurs but N2 stops accelerating below 50% during an automatic ground start.',[
          'FADEC detects the abnormal acceleration and removes fuel and ignition.','The start valve closes before the dry-crank phase is commanded.'
        ],{n2:'fault',combustor:'caution',fadec:'caution',hpfuel:'fault',igniters:'inactive'},{mechanical:'fault',fuelcomb:'fault',cmdfuel:'fault'}),
        mode('nolight','NO LIGHT-UP','fault','NO LIGHT-UP — AUTOMATIC ABORT','Starter rotation, fuel and ignition commands occur, but the expected EGT/N1 rise does not appear.',[
          'FADEC aborts the automatic ground start below 50% N2.','Fuel and ignition are removed and the automatic dry crank follows.'
        ],{combustor:'fault',fadec:'caution',hpfuel:'caution',igniters:'fault'},{igncomb:'fault',fuelcomb:'caution'}),
        mode('manual','MANUAL ABNORMAL','caution','MANUAL START — CREW INTERRUPTION','FADEC monitors a manual start but does not automatically abort an abnormal condition.',[
          'Both available igniters are commanded in manual start.','The crew must respond to the ECAM warning and interrupt the sequence.','Maximum manual-start cycle in the supplied limitation: 2 minutes.'
        ],{fadec:'caution',igniters:'control',combustor:'caution'}),
        mode('failsafe','BLEED FAIL-SAFE','caution','AIR-SYSTEM FAIL-SAFE POSITIONS','Stability valves move to the position designed to preserve compressor margin if control is lost.',[
          '2.5, 7th and 10th stage bleed valves fail open.','Turbine-clearance control fails closed, with slightly higher fuel consumption.','HPT cooling-air control is normally fail-safe open.'
        ],{stability:'caution',cooling:'caution',fadec:'fault'},{cmdstab:'fault',cool:'caution',pneu:'caution'})
      ]
    },

    reverser:{
      tab:'REVERSER / HYD',ata:'DSC 70-70',title:'THRUST REVERSER & HYDRAULICS',overviewId:'sleeves',
      overview:'Each engine has an independent FADEC-controlled, hydraulically actuated thrust reverser. Engine 1 uses green hydraulics and Engine 2 uses yellow hydraulics.',
      nodes:[
        node('tla',30,60,120,68,'REVERSE TLA',component('REVERSE THRUST-LEVER SIGNAL','Reverse selection supplies the throttle-reverse/TLA signal to FADEC and the control logic.','Deployment requires an operating FADEC channel with its associated reverse signal and an SEC reverse-TLA signal.','Reverse selection is prohibited in flight. The protection logic uses independent command and feedback paths.','DSC-70-70; LIM-ENG')),
        node('sec',30,165,120,68,'SEC 1 / 2 / 3',component('SPOILER ELEVATOR COMPUTER SIGNAL','Provides a reverse TLA signal used in the deploy permissive logic.','At least one SEC must provide the required TLA reverse signal.','Without a valid permissive, hydraulic pressurisation/deployment is inhibited.','DSC-70-70')),
        node('lgciu',30,270,120,68,'LGCIU 1 / 2',component('LANDING-GEAR COMPRESSED SIGNAL','Confirms both corresponding main gears are compressed for ground-only reverse deployment.','Right and left main-gear compressed signals are required for deployment.','Missing ground confirmation inhibits normal deployment, helping prevent reverse selection in flight.','DSC-70-70')),
        node('fadec',215,145,150,95,'FADEC\nCH A / B',component('FADEC REVERSER CONTROL','Combines throttle, SEC, gear and feedback information and commands the HCU valves.','Each FADEC channel controls and monitors; before full deployment FADEC sets reverse idle thrust.','If feedback indicates inadvertent deployment or stowage, FADEC automatically drives engine thrust toward idle at the defined position thresholds.','DSC-70-20; DSC-70-70')),
        node('hyd',215,335,150,85,'HYD POWER\nG ENG 1 / Y ENG 2',component('HYDRAULIC POWER','Supplies pressure for the thrust-reverser actuators.','Engine 1 uses the green hydraulic circuit; Engine 2 uses the yellow circuit.','Loss of the applicable hydraulic supply prevents normal powered sleeve movement even if electrical permissives are satisfied.','DSC-70-70')),
        node('sov',430,60,130,72,'HYD SHUTOFF\nVALVE',component('HYDRAULIC SHUTOFF VALVE','Admits or isolates hydraulic pressure to the HCU.','It opens only when the required independent permissives allow pressurisation.','Closed or failed shut isolates hydraulic power and prevents normal actuation.','DSC-70-70')),
        node('hcu',430,180,130,88,'HCU',component('HYDRAULIC CONTROL UNIT','Controls hydraulic flow and direction to the thrust-reverser actuators.','FADEC commands its pressurising and directional solenoid valves.','Without an FADEC valve-control command or system pressure, actuators do not move normally.','DSC-70-70')),
        node('actuators',430,330,130,90,'4 HYD\nACTUATORS',component('FOUR HYDRAULIC ACTUATORS','Move the translating sleeves. A flexible shaft synchronises actuator speed.','All actuators move together to deploy or stow the sleeves.','Asymmetry or position disagreement is monitored through sleeve-position and lock feedback.','DSC-70-70')),
        node('feedback',640,65,145,85,'2 LVDTs +\n2 PROX SW',component('POSITION AND LOCK FEEDBACK','Two LVDTs report sleeve position; two proximity switches report locked/unlocked state.','FADEC uses feedback for control, indication and idle-protection logic.','Feedback inconsistent with command triggers protection and automatic thrust reduction toward idle.','DSC-70-70')),
        node('sleeves',650,220,155,100,'TRANSLATING\nSLEEVES',component('TRANSLATING SLEEVES','Move rearward to expose the cascades and position the blocker-door system.','When fully deployed, blocker doors divert fan flow forward through the cascades.','Incomplete or inadvertent movement invokes FADEC idle protection according to measured sleeve position.','DSC-70-70')),
        node('blockers',650,380,155,95,'BLOCKER DOORS\n& CASCADES',component('BLOCKER DOORS AND CASCADES','Redirect the fan airstream forward to produce reverse thrust.','They are effective only with the sleeves fully deployed; FADEC initially holds reverse idle.','Maximum reverse must not be used below 70 kt; idle reverse is permitted to a stop. Never use reverse to back the aircraft.','DSC-70-70; LIM-ENG')),
        node('fanflow',810,245,68,190,'FAN\nFLOW',component('REVERSED FAN AIRFLOW','Represents bypass air redirected by the deployed sleeve/blocker arrangement.','With the reverser fully deployed, fan flow is directed forward through the cascades.','If deployment is not complete or reverser feedback becomes unsafe, FADEC commands thrust toward idle.','DSC-70-70'))
      ],
      edges:[
        edge('tlaF','tla','fadec','control'),edge('secF','sec','fadec','control'),edge('gearF','lgciu','fadec','control'),edge('hydF','hyd','sov'),edge('sovF','sov','hcu'),edge('cmdF','fadec','hcu','control','VALVE CMD'),edge('hcuF','hcu','actuators'),edge('actF','actuators','sleeves','mechanical','SYNCH FLEX SHAFT'),edge('sleeveF','sleeves','blockers','mechanical'),edge('fanF','blockers','fanflow'),edge('senseF','feedback','fadec','control','POSITION / LOCK',[[712,108],[712,25],[290,25],[290,145]]),edge('sense2','sleeves','feedback','control')
      ],
      modes:[
        mode('stowed','STOWED','normal','REVERSER STOWED','The sleeves are locked forward, hydraulic actuation is not commanded and fan flow produces forward thrust.',[
          'FADEC continues monitoring sleeve position and lock feedback.','The two engine reverser systems are independent.'
        ],{sov:'inactive',hcu:'inactive',actuators:'inactive',sleeves:'normal',blockers:'inactive',fanflow:'normal'},{hydF:'inactive',sovF:'inactive',hcuF:'inactive',actF:'inactive',sleeveF:'inactive'}),
        mode('deploy','DEPLOYED ON GROUND','normal','NORMAL GROUND DEPLOYMENT','Valid TLA/SEC/gear permissives allow hydraulic pressure through the shutoff valve and HCU to move the sleeves fully rearward.',[
          'Engine 1 uses green hydraulics; Engine 2 uses yellow.','Before deployment completes, FADEC sets reverse idle.','The blocker doors then redirect fan flow forward through the cascades.'
        ],{tla:'control',sec:'control',lgciu:'control',fadec:'control',hyd:'normal',sov:'normal',hcu:'normal',actuators:'normal',sleeves:'normal',blockers:'normal',fanflow:'normal'}),
        mode('nohyd','HYDRAULIC LOST','fault','REVERSER HYDRAULIC SUPPLY LOST','The applicable green or yellow hydraulic circuit cannot provide pressure to the HCU.',[
          'Electrical deploy permissives may be valid, but the actuators cannot move normally.','The system remains monitored through position and lock feedback.'
        ],{hyd:'fault',sov:'caution',hcu:'inactive',actuators:'inactive',sleeves:'caution'},{hydF:'fault',sovF:'caution',hcuF:'inactive',actF:'inactive'}),
        mode('inadvertent','INADVERTENT DEPLOY','fault','INADVERTENT DEPLOYMENT PROTECTION','The reverser is commanded stowed but feedback shows sleeve movement.',[
          'Thrust decreases toward idle between 10% and 15% deployed.','FADEC automatically selects idle once feedback is above 15% deployed.','The protection limits engine thrust; it does not make the reverser condition normal.'
        ],{feedback:'fault',sleeves:'fault',fadec:'caution',blockers:'caution'},{sense2:'fault',senseF:'fault'}),
        mode('restow','INADVERTENT STOW','fault','INADVERTENT STOWAGE PROTECTION','The reverser is commanded deployed but feedback indicates the sleeves are moving toward stow.',[
          'Thrust decreases toward idle between 90% and 78% deployed.','FADEC automatically selects idle below 78% deployed.'
        ],{feedback:'fault',sleeves:'fault',fadec:'caution',blockers:'caution'},{sense2:'fault',senseF:'fault'}),
        mode('inflight','IN-FLIGHT INHIBIT','fault','GROUND PERMISSIVE NOT SATISFIED','The main-gear compressed condition is absent, so normal deployment permissives are not met.',[
          'Reverse thrust selection is prohibited in flight.','The LGCIU ground signal is an independent input in the deploy logic.'
        ],{lgciu:'fault',fadec:'caution',sov:'inactive',hcu:'inactive',actuators:'inactive',sleeves:'normal'},{gearF:'fault',hydF:'inactive',sovF:'inactive',hcuF:'inactive',actF:'inactive'})
      ]
    }
  };

  let activeSystem='architecture';
  let activeMode='normal';
  let activeComponent=systems[activeSystem].overviewId;

  function svgEl(tag,attrs={},text=''){
    const el=document.createElementNS(NS,tag);
    Object.entries(attrs).forEach(([key,value])=>el.setAttribute(key,String(value)));
    if(text)el.textContent=text;
    return el;
  }

  function colorFor(status,type){
    if(status&&C[status])return C[status];
    if(type==='control')return C.control;
    if(type==='mechanical')return C.white;
    if(type==='return')return C.normal;
    return C.normal;
  }

  function current(){
    const system=systems[activeSystem];
    return {system,selectedMode:system.modes.find(item=>item.id===activeMode)||system.modes[0]};
  }

  function findNode(system,id){return system.nodes.find(item=>item.id===id)}

  function endPoints(a,b){
    const ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2;
    if(Math.abs(bx-ax)>Math.abs(by-ay)){
      return bx>ax?{x1:a.x+a.w,y1:ay,x2:b.x,y2:by}:{x1:a.x,y1:ay,x2:b.x+b.w,y2:by};
    }
    return by>ay?{x1:ax,y1:a.y+a.h,x2:bx,y2:b.y}:{x1:ax,y1:a.y,x2:bx,y2:b.y+b.h};
  }

  function makeDefs(){
    const defs=svgEl('defs');
    ['normal','control','caution','fault','inactive','white'].forEach(key=>{
      const marker=svgEl('marker',{id:'arrow-'+key,viewBox:'0 0 10 10',refX:9,refY:5,markerWidth:6,markerHeight:6,orient:'auto-start-reverse'});
      marker.appendChild(svgEl('path',{d:'M 0 0 L 10 5 L 0 10 z',fill:C[key]}));defs.appendChild(marker);
    });
    return defs;
  }

  function drawEdge(item,system,selectedMode){
    const a=findNode(system,item.from),b=findNode(system,item.to);if(!a||!b)return;
    const points=endPoints(a,b);
    const route=[{x:points.x1,y:points.y1},...item.route.map(p=>({x:p[0],y:p[1]})),{x:points.x2,y:points.y2}];
    let d='M '+route[0].x+' '+route[0].y;for(let i=1;i<route.length;i++)d+=' L '+route[i].x+' '+route[i].y;
    const status=selectedMode.edgeStates[item.id]||'';
    const color=colorFor(status,item.type);
    const markerKey=status&&C[status]?status:item.type==='control'?'control':item.type==='mechanical'?'white':'normal';
    const path=svgEl('path',{d,fill:'none',stroke:color,'stroke-width':status==='fault'?4:3,'stroke-linecap':'round','stroke-linejoin':'round','marker-end':'url(#arrow-'+markerKey+')'});
    if(item.type==='control')path.setAttribute('stroke-dasharray','7 5');
    if(status==='inactive')path.setAttribute('stroke-dasharray','4 7');
    svg.appendChild(path);
    if(item.label){
      const middleIndex=Math.floor((route.length-1)/2);const p=route[middleIndex],q=route[middleIndex+1]||p;const mid={x:(p.x+q.x)/2,y:(p.y+q.y)/2};
      const text=svgEl('text',{x:mid.x,y:mid.y-8,fill:color,'font-size':11,'text-anchor':'middle','font-family':'ui-monospace,monospace'},item.label);
      svg.appendChild(text);
    }
  }

  function nodeStatus(id,selectedMode){return selectedMode.states[id]||'normal'}

  function drawNode(item,selectedMode){
    const status=nodeStatus(item.id,selectedMode);const color=colorFor(status);
    const group=svgEl('g',{role:'button',tabindex:'0','aria-label':item.detail.name+'. Select for details.','data-node':item.id,style:'cursor:pointer'});
    const selected=item.id===activeComponent;
    group.appendChild(svgEl('rect',{x:item.x,y:item.y,width:item.w,height:item.h,rx:4,fill:C.panel,stroke:selected?C.control:color,'stroke-width':selected?4:2}));
    if(selected)group.appendChild(svgEl('rect',{x:item.x-5,y:item.y-5,width:item.w+10,height:item.h+10,rx:7,fill:'none',stroke:C.control,'stroke-width':1,'stroke-dasharray':'5 4'}));
    const lines=item.label.split('\n');
    const start=item.y+item.h/2-(lines.length-1)*9;
    lines.forEach((line,index)=>group.appendChild(svgEl('text',{x:item.x+item.w/2,y:start+index*18,fill:color,'font-size':13,'text-anchor':'middle','dominant-baseline':'middle','font-family':'ui-monospace,monospace'},line)));
    if(item.sub)group.appendChild(svgEl('text',{x:item.x+item.w/2,y:item.y+item.h-8,fill:C.inactive,'font-size':9,'text-anchor':'middle','font-family':'ui-monospace,monospace'},item.sub));
    group.addEventListener('click',()=>selectComponent(item.id));
    group.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectComponent(item.id)}});
    svg.appendChild(group);
  }

  function renderDiagram(){
    const {system,selectedMode}=current();
    const title=svgEl('title',{id:'svgTitle'},system.title+' — '+selectedMode.title);
    const desc=svgEl('desc',{id:'svgDesc'},selectedMode.text+' Tap a component for details.');
    svg.replaceChildren(title,desc,makeDefs(),svgEl('rect',{x:0,y:0,width:900,height:560,fill:C.bg}));
    system.edges.forEach(item=>drawEdge(item,system,selectedMode));
    system.nodes.forEach(item=>drawNode(item,selectedMode));
    titleEl.textContent=system.title;
    statusEl.textContent=selectedMode.title;
    statusEl.style.color=colorFor(selectedMode.severity);
  }

  function renderTabs(){
    tabsEl.replaceChildren();
    Object.entries(systems).forEach(([id,system])=>{
      const button=document.createElement('button');button.type='button';button.className='tab';button.setAttribute('role','tab');button.dataset.system=id;
      button.setAttribute('aria-selected',String(id===activeSystem));button.innerHTML='<span class="ata"></span><span class="tab-name"></span>';
      button.querySelector('.ata').textContent=system.ata;button.querySelector('.tab-name').textContent=system.tab;
      button.addEventListener('click',()=>selectSystem(id));tabsEl.appendChild(button);
    });
  }

  function renderModes(){
    const {system}=current();modesEl.replaceChildren();
    system.modes.forEach(item=>{
      const button=document.createElement('button');button.type='button';button.className='mode';button.dataset.mode=item.id;button.dataset.severity=item.severity;
      button.setAttribute('aria-pressed',String(item.id===activeMode));button.textContent=item.label;button.addEventListener('click',()=>selectMode(item.id));modesEl.appendChild(button);
    });
  }

  function renderGrid(){
    const {system,selectedMode}=current();gridEl.replaceChildren();
    system.nodes.forEach(item=>{
      const status=nodeStatus(item.id,selectedMode);const button=document.createElement('button');button.type='button';button.className='component-card';button.dataset.component=item.id;
      button.setAttribute('aria-pressed',String(item.id===activeComponent));button.innerHTML='<strong></strong><span></span>';
      button.querySelector('strong').textContent=item.detail.name;
      const statusLine=button.querySelector('span');statusLine.textContent=status==='normal'?'OPERATING / AVAILABLE':status==='control'?'ACTIVE CONTROL':status==='caution'?'DEGRADED / CAUTION':status==='fault'?'FAULT / UNAVAILABLE':'INACTIVE / STANDBY';statusLine.className='status-'+status;
      button.addEventListener('click',()=>selectComponent(item.id));gridEl.appendChild(button);
    });
  }

  function renderInfo(){
    const {system,selectedMode}=current();const selected=findNode(system,activeComponent)||findNode(system,system.overviewId);const detail=selected.detail;
    nameEl.textContent=detail.name;purposeEl.textContent=detail.purpose;normalEl.textContent=detail.normal;abnormalEl.textContent=detail.abnormal;refEl.textContent='FCOM REFERENCE: '+detail.ref+' — SUPPLIED ENGINEERING-USE IAE APPENDIX';
    stateTitle.textContent=selectedMode.title;stateText.textContent=selectedMode.text;stateImpacts.replaceChildren();
    selectedMode.impacts.forEach(text=>{const li=document.createElement('li');li.textContent=text;stateImpacts.appendChild(li)});
    stateCard.className='state-card'+(selectedMode.severity==='normal'?'':' '+selectedMode.severity);
  }

  function renderAll(){renderTabs();renderModes();renderDiagram();renderGrid();renderInfo()}

  function selectSystem(id){
    if(!systems[id])return;activeSystem=id;activeMode=systems[id].modes[0].id;activeComponent=systems[id].overviewId;renderAll();
  }

  function selectMode(id){
    const system=systems[activeSystem];if(!system.modes.some(item=>item.id===id))return;activeMode=id;renderModes();renderDiagram();renderGrid();renderInfo();
  }

  function selectComponent(id){
    const system=systems[activeSystem];if(!findNode(system,id))return;activeComponent=id;renderDiagram();renderGrid();renderInfo();
  }

  window.V2500Trainer={
    selectSystem,selectMode,selectComponent,
    getState:()=>({system:activeSystem,mode:activeMode,component:activeComponent}),
    getSystems:()=>Object.keys(systems),
    getModes:id=>(systems[id]||systems[activeSystem]).modes.map(item=>item.id),
    getComponents:id=>(systems[id]||systems[activeSystem]).nodes.map(item=>item.id)
  };

  renderAll();
})();

