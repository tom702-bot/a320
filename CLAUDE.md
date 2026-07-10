# A321P2F Checkride Trainer — Project Guide

This is a **self-contained offline PWA** (single HTML file) that quizzes an airline pilot on
A321P2F **limitations, systems, and memory items**. It is installed on an iPhone Home Screen
via GitHub Pages and runs fully offline. Your job is to **help modify the app** and **manage
the GitHub deploys**.

Read this whole file before editing anything.

---

## 1. Files in this project

| File | Role |
|------|------|
| `index.html` | **The app.** Single file: HTML + CSS + JS + question data all inline. This is what GitHub Pages serves and what the phone installs. |
| `sw.js` | Service worker. Caches the app for offline use. **Its `CACHE` version string is the update mechanism** (see §5). |
| `manifest.webmanifest` | PWA manifest (name, icons, standalone display). Rarely changes. |
| `icon-180.png`, `icon-192.png`, `icon-512.png` | App icons. Rarely change. |
| `A320_Checkride_Trainer.html` | **Standalone twin** of `index.html`, kept for desktop/backup use. NOT deployed to Pages, but **keep its question data in sync** with `index.html` whenever you change questions. |

All of the first group live together in the repo directory that GitHub Pages serves (repo root
or `/a320-app`, confirm with the user). `manifest`, `sw.js`, and icons must sit **beside**
`index.html`.

---

## 2. How the app works (just enough to edit safely)

Inside `index.html` there is one `<script>` block. The question data is held in **three JS
arrays**, all merged into `BANK` at load:

```js
const BANK   = [ ... ];   // limitation-topic + expanded system questions (source: FCOM LIM + DSC)
const BTC_Q  = [ ... ];   // questions from the pilot's BTC type-course tests
for (const x of BTC_Q) { BANK.push(x); }

const NEW_Q  = [ ... ];   // later DSC-mined expansion questions
for (const x of NEW_Q) { BANK.push(x); }

const MEM    = [ ... ];   // memory-item DRILL cards (separate cold-recall mode, not MCQs)
```

The UI derives the subject filter chips from `[...new Set(BANK.map(x => x.c))]`, so **a
question's `c` field is its subject category** — no separate config.

### Question object format (MCQ)
```js
{ c:"Engine & APU",
  q:"EGT limit for Takeoff and Go-around?",
  o:["610 °C","635 °C","650 °C","1083 °C"],   // 2–4 options
  a:2,                                          // index of the CORRECT option in o[]
  w:"Takeoff/GA 650 °C ... · FCOM LIM-ENG" }    // reasoning shown on answer + reference
```
- `a` is **0-based** and must point at the correct option.
- `w` is shown in the ECAM-style debrief after every answer. It should be a plain-language
  reason **plus a source reference** (see §3). If `w` is missing the app shows a generic
  "Source" line — avoid that; every question should have a `w`.

### Current state (keep this updated as you work)
- **330 questions**, **18 subject categories**, **0 duplicates**, all with a `w` reference.
- `sw.js` cache: **`a320-trainer-v6`** (bump on every content change).
- Subjects: Auto Flight, Air & Pressurisation, Flight Controls & Flaps, Aircraft General,
  Engine & APU, Gear & Brakes, Electrical, Navigation, Hydraulics, Fire Protection, Fuel,
  Abnormal & Memory, Ice & Rain, Surveillance, Oxygen, Communication, Freighter Ops, ROW/ROP.

---

## 3. Reference & sourcing rules (important — accuracy over volume)

This app is a **study aid, not an authority**, and the pilot flies the real aircraft, so
correctness matters. Follow the same discipline used to build it:

- **Limitations** questions cite the FCOM LIM chapter: `· FCOM LIM-AG-SPD`, `· FCOM LIM-ENG`, etc.
- **Systems** questions cite the DSC volume: `· FCOM DSC-24` (Electrical), `· FCOM DSC-29-20`
  (Hydraulics PTU), etc. Use the specific section code when known, chapter-level when not.
- **Memory items** cite `· QRH memory items`.
- **Do NOT invent references or fabricate facts.** If you add a question and cannot confirm it
  against a source the user has provided in-session, say so and mark it, rather than guessing a
  DSC code. The user can re-upload the FCOM LIM / DSC PDFs into the session if new questions
  need verification.
- Values are **A321P2F freighter-specific** (e.g. MTOW 93,000 kg, max tailwind 15 kt, EGT T/O
  650 °C). Do not "correct" them to generic passenger-A320 numbers.

### Known flagged items (leave as-is unless the user asks)
- One Navigation question about the **ISIS** taking ADIRU 1/3 data — flagged as unverified in its `w`.
- One Auto Flight question wording **A/THR "white = active"** — flagged as imprecise in its `w`.
The user has said these are fine as they stand.

---

## 4. Editing questions — the safe procedure

1. Edit the relevant array in **`index.html`**.
2. **Mirror the same change in `A320_Checkride_Trainer.html`** (same array, same objects).
3. **Validate** before committing (catches JSON/JS mistakes and duplicate questions):

```bash
node -e '
const fs=require("fs");const html=fs.readFileSync("index.html","utf8");
const js=html.split("<script>")[1].split("</scr"+"ipt>")[0];
const noop=()=>({});const el=new Proxy({},{get:(t,p)=>{if(p==="style")return{};if(p==="classList")return{add:noop,remove:noop,toggle:noop,contains:()=>false};if(p==="children")return[];if(["appendChild","setAttribute","addEventListener","focus","scrollIntoView"].includes(p))return noop;return"";},set:()=>true});
global.document={getElementById:()=>el,createElement:()=>el,addEventListener:noop,querySelector:()=>el};global.window={scrollTo:noop};global.alert=noop;
const g=n=>js.match(new RegExp("const "+n+" = \\[[\\s\\S]*?\\n\\];"))[0].replace("const ","global.");
["BANK","BTC_Q","NEW_Q"].forEach(n=>eval(g(n)));[BTC_Q,NEW_Q].forEach(a=>a.forEach(x=>BANK.push(x)));
const seen={};let d=0;for(const q of BANK){const k=q.q.toLowerCase().replace(/[^a-z0-9]/g,"");if(seen[k])d++;seen[k]=1;}
console.log("total:",BANK.length,"| categories:",[...new Set(BANK.map(x=>x.c))].length,
            "| missing reference:",BANK.filter(q=>!q.w).length,
            "| malformed (bad a index):",BANK.filter(q=>!(q.a>=0&&q.a<q.o.length)).length,
            "| duplicates:",d);
try{new Function(js.replace(/const (BANK|BTC_Q|NEW_Q|MEM) =/g,"var $1 ="))();console.log("script executes: OK");}catch(e){console.log("SCRIPT ERROR:",e.message);}
'
```
Expected: `missing reference: 0`, `malformed: 0`, `duplicates: 0`, `script executes: OK`.
**Do not commit if any of those is nonzero.**

4. If you changed question content, **bump the cache** (§5), then deploy (§6).

---

## 5. The cache-version rule (why phones don't see updates)

The service worker caches the app. If you change `index.html` but **don't** change the cache
name, installed phones keep serving the old cached copy. So:

**Any time `index.html` content changes, bump the version in `sw.js`:**
```js
const CACHE = 'a320-trainer-v6';   // → change to v7, v8, ...
```
This is the single most common cause of "I updated it but my phone shows the old version."

---

## 6. Deploy workflow (GitHub Pages)

Deploys are just git pushes to the Pages branch; GitHub Pages auto-builds.

```bash
git add index.html sw.js A320_Checkride_Trainer.html
git commit -m "Update questions + bump cache to vN"
git push
```

Then the site rebuilds automatically. Confirm the repo/branch with the user on first run
(`git remote -v`, and Settings → Pages shows the source branch/folder). Use the `gh` CLI if
available (`gh run list`, `gh run watch`) to watch the Pages build.

### After a successful deploy — tell the user to refresh the phone
The bumped cache updates automatically **on next launch while online**, but the reliable way is:
> Delete the Home-Screen icon → open the Pages URL in **Safari** (online) once → re-add to Home Screen.

### If the Pages build fails or hangs in the queue
This has happened and is usually **GitHub infrastructure, not the files** — e.g.
*"The job was not acquired by Runner of type hosted"* or an internal-server error. It means no
build machine was available, before the files are ever evaluated.
- First: **re-run** the workflow (`gh run rerun <id>` or the Actions UI), or push a trivial commit.
- Check **githubstatus.com**; if Actions/Pages shows an incident, wait for green, then re-run.
- Zero-build fallback: the files are static, so they can be dragged onto
  **app.netlify.com/drop** for an instant HTTPS URL with no runner involved.

---

## 7. Things NOT to break

- **No `localStorage` / `sessionStorage` / IndexedDB** anywhere. The app deliberately keeps no
  persistent state (scores reset each session). Don't add browser storage — it also fails in
  some embedded contexts.
- Keep everything **inline in `index.html`** — no external scripts, fonts, or CDNs. Offline
  operation depends on it.
- Keep `manifest.webmanifest`, `sw.js`, and the icons **beside** `index.html` with matching paths.
- Keep the two HTML files' **question data in sync**.

---

## 8. Backlog / possible next work (only if the user asks)

- Deeper DSC passes on specific systems (Auto Flight FMA mode reversions, ECAM/EIS warning
  logic) — the DSC volume has much more testable detail than is currently mined. Requires the
  user to re-upload the DSC PDFs into the session for verification.
- Memory-item and SOP expansion from the QRH / FCTM / PRO-NOR-SOP (not yet incorporated).
- Optional: a timed "rapid-fire" quiz mode; per-subject score summaries.

Always verify new technical content against a source the user supplies. When unsure, flag it
rather than assert it.
