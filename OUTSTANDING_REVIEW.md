# Outstanding FCOM records: follow-up, 6 September 2026

All 102 records withheld at the 5 September review were checked again against the supplied 3,901-page PDFA320_FCOM_AATIAECUSTOM20260521.pdf. The original file is available and was used directly; no substitute online manual was used.

| Follow-up result | Records | Practice status |
|---|---:|---|
| Corrected or qualified against an explicit FCOM passage | 4 | Restored |
| Keyed value/statement matches the cited source; Ansett applicability still unresolved | 84 | Withheld |
| Conflicting standard, conflicting text, or missing legacy/MEL description | 14 | Withheld |
| Total rechecked | 102 | 98 remain withheld |

The cover explicitly identifies a training compilation covering multiple engine options and says the AAT Melbourne simulators use IAE. That establishes the intended training context, but does not establish every weight variant, optional system, software standard or fuel approval. The AAT SOP itself requires checking the Aircraft Configuration Summary (PDF p.3177). A source-page value is not proof of simulator fit. No engine-specific value was inferred from a different engine section.

## Four restored questions

| ID | Resolution | Supplied FCOM PDF pages |
|---|---|---|
| L133 | The narrow-runway VMCG increments have their own general table. The earlier group exclusion incorrectly treated these increments as engine-dependent base VMCG values. The revised question asks only for the increments to the applicable base value. | 3688 |
| S116 | The normal temperature-controller description explicitly lists both arrangements. The question now includes one zone controller/two pack controllers OR two ACSCs, without asserting simulator fit. This does not resolve legacy controller failure questions. | 155, 161 |
| S128 | Replaced the incorrect all-of-the-above wing anti-ice answer with the explicit prohibition on supplying wing anti-ice with APU bleed. A single-side fault does not establish total loss on both wings. | 3719, 2502, 1366, 1904 |
| S145 | Added the exact MODE SEL FAULT conditions: AUTO, centre quantity greater than 250 kg, and either wing quantity less than 5,000 kg. Removed the pump/slat distractor. This checks the stated indication logic, not an electric centre-pump installation. | 1325 |

Restored questions are checked for correct options, distractors and explanations, and have a new content revision so old mastery cannot be inherited.

## 84 answers present in the manual, still awaiting applicability

| Subject | Records | Why source matching alone is insufficient | PDF pages |
|---|---:|---|---|
| Weights, minimum control speeds, thrust bump and the conditional high-weight taxi limit | 39 | The 21-CMHT tables match the stored values; the IAE simulator weight/engine configuration is not independently established. The above-76,000-kg taxi condition also exceeds the adjacent 73,500-kg takeoff-weight table. | 3687-3690 |
| Optional avionics, special approach approvals, GSM, in-seat power, ROPS and HUD | 40 | A described function or limitation does not establish installed equipment or an operational approval. Conditions in each cited passage still apply. | 3702-3710, 3724, 3730, 3788, 3794-3795 |
| JET B / JP4 temperatures | 5 | The temperature table contains both fuels but the certified-fuel list on the same page omits them. A temperature row is not a fuel approval. | 3758 |

Two GSM fill-cell references were corrected to p.3730. The combined ROPS/predictive-GPWS cell now cites both pp.3788 and 3794. The 15-NM threshold applies only with the specified database/procedure conditions; it is not a blanket permission to inhibit either system.

## 14 source conflicts or gaps

| IDs | Finding | Evidence needed to resolve |
|---|---|---|
| S107, S108, S117 | The general description lists both architectures, but the supplied failure page describes ACSC lane failures. It does not verify the guide's legacy zone/pack-controller fallback temperatures and frozen-flow claims (pp.155-163). | Applicable legacy-controller failure description. |
| S143, S149 | The supplied centre-tank quantity box refers to both transfer valves failed closed. The total-FOB half-box has a separate description that mentions centre pumps. These are different indications (pp.1333-1334). | Simulator centre-tank standard and matching indication description. |
| S146, S148 | The supplied manual controls describe transfer valves and XFR pushbuttons, not the guide's electric centre pumps (pp.1311-1312, 1325). | Applicable electric centre-pump controls description, if fitted. |
| S151, S152 | The transfer-valve feed logic does not verify the combined legacy pump-failure/IDG-return statements. Centre-pump mentions in the AAT SOP do not supply the missing complete description (pp.1310-1312, 1325, 1333, 3238). | Matching fuel-system description and failure procedures for the FSTD configuration. |
| S155 | The supplied panel describes an IR FAULT light, not the legacy ALIGN light. Flashing FAULT behaviour cannot be substituted for flashing ALIGN (pp.1634-1635). | Applicable legacy ADIRS/ALIGN-light description. |
| S173 | The radio description says SEL on both RMPs, while the How To section says three RMPs (pp.1064, 1066, 1116). | Corrected documentation or confirmation of the installed RMP standard. |
| S267 | The rendered Yellow-steering graph reaches zero handwheel authority at 80 kt; the guide says 70 kt (p.1572). | Ansett steering standard and its applicable steering graph. |
| S303, S304 | FCOM refers dispatch to the MEL but does not provide the required rectification-interval or (O) marker definitions (pp.1930, 3177). | Applicable MEL preamble. |

## Traceability

Every one of the 102 records has a dated `followUp` entry in [verification-audit.json](verification-audit.json), including the finding, disposition, PDF pages and evidence needed next. Page identifiers and revisions are preserved there. The FCOM SHA-256 remains `7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06`.

The trainer retains its Ansett A320 IAE scope. P2F and the removed PXS/GTE courses are not reintroduced. Withheld items remain excluded from quizzes, weak-area review, limitation lookup and scored fill-in practice.
