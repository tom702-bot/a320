'use strict';
// Shared lesson model: company guidance is inserted among the FCOM blocks.
const StudyFlow = (() => {
  const label = b => b.label || b.text || '';
  function cards(phase, step) {
    return phase.steps.filter(s => s.kind === 'company' && s.study.target === step.id)
      .map(s => ({...s.study, id:s.id, title:s.title, sourceStep:s.id}))
      .concat(step.study.insertions || []);
  }
  function sequence(phase, step) {
    if (step.kind === 'checkpoint') return [];
    const before = [], after = [], at = new Map(), blocks = step.study.blocks;
    for (const card of cards(phase,step)) {
      if (card.anchor) {
        const index = blocks.findIndex(b => label(b).toUpperCase().includes(card.anchor.toUpperCase()));
        if (index < 0) throw Error('Missing study placement: '+card.id);
        const key = index + (card.position === 'after' ? 1 : 0);
        at.set(key, [...(at.get(key)||[]),{kind:'company',...card}]);
      } else (card.position === 'after' ? after : before).push({kind:'company',...card});
    }
    const out = [...before];
    blocks.forEach((b,i) => out.push(...(at.get(i)||[]),b));
    return out.concat(at.get(blocks.length)||[],after);
  }
  function lessons(phase) {
    return phase.steps.filter(s => s.kind === 'checkpoint' || s.kind === 'fcom' && (s.study.blocks.length || cards(phase,s).length));
  }
  function crewRole(crew, pfSeat='CM1') {
    const raw=crew?.role||'UNASSIGNED';
    if(raw==='CM1'||raw==='CM2')return {label:raw===pfSeat?'PF':'PM',tone:raw===pfSeat?'pf':'pm',detail:`Source ${raw} · ${raw==='CM1'?'left':'right'} seat`,basis:crew.basis||crew.note||''};
    if(['BOTH','PF-PM','PF/PM','CM1-CM2','CM1/CM2'].includes(raw))return {label:'PF + PM',tone:'both',detail:crew.note||(['CM1-CM2','CM1/CM2'].includes(raw)?'Source CM1 + CM2':'Both pilots'),basis:crew.basis||''};
    if(raw==='PF'||raw==='PM')return {label:raw,tone:raw.toLowerCase(),detail:crew.note||(crew.type==='context'?'Task sharing · FCOM p. 3645':raw==='PF'?'Pilot flying':'Pilot monitoring'),basis:crew.basis||''};
    if(raw==='PIC')return {label:'PIC · PF or PM',tone:'both',detail:crew.note||'PIC responsibility',basis:crew.basis||''};
    return {label:'PF / PM',tone:'unassigned',detail:'Allocation not specified',basis:crew?.basis||'The source does not allocate this item to a pilot.'};
  }
  return {cards,sequence,lessons,crewRole};
})();
if(typeof module !== 'undefined') module.exports=StudyFlow;
