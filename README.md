# Qantas A321P2F Trainer

A personal study site built around the supplied FCOM, FCTM and QRH, FCOM and QRH effective 1 May 2026; FCTM effective 25 September 2026. This is not an official Qantas training product or an operational checklist.

## Study content

- EFA340 line training quiz: 123 multiple-choice questions with automatic marking, source explanations, Learn/Exam modes, 5/10/25/all-question runs, filtered topic practice and retrying missed questions. The bank reuses the existing 92 limitations questions unchanged and adds 31 questions transformed from the existing source-linked flow drills. Progress is separate from the limitations quiz and earlier self-ratings. Incomplete exams do not award a score or question progress.
- All 74 visible checklist rows and their sub-bullets remain represented. Selected material in 29 applicable topics has quiz questions; 42 remain reading-only until a supported answer key is available. Three A330-only rows remain visible outside practice. Earlier written notes are preserved read-only. See DISCUSSION_COVERAGE.md for the row-by-row audit and source limitations.

- A clear study desk with flows, normal/abnormal procedures and limitations practice; a direct 10-question Learn session; private manual status; aircraft systems; progress and a last-opened study shortcut.

- 11 original FCOM flow-pattern pages, rendered privately from the local PDF.
- 8 selected sequence drills with 55 source-linked steps. Guided study and order-sensitive recall. Conditions and printed PF/PM/CM1/CM2 roles are retained. These are selected subsets, not a claim of complete cockpit simulation.
- Normal SOPs, supplementary and systems-related procedures; FCTM techniques; the QRH normal checklist.
- Abnormal procedure indexes and 8 source-linked scenario study prompts. Scenario prompts are self-assessed and do not invent or grade emergency actions.
- 92 newly authored limitations questions, with Learn, Exam, flashcard, weak-question and local progress modes. Exact PDF pages, source hash, section and applicability accompany each question. Only a completed exam updates scored mastery.
- One A321P2F study set and progress record. All 92 questions are available together. Equipment differences are noted on relevant questions; procedure branches and applicability stay with their original source pages. Previous registration selections no longer filter study content or reset progress.
- Local PDF loading (FCOM 4,364 pages; FCTM 532; QRH 330), section browsing, private full-text search, source page links and optional browser storage for offline use.
- Preserved engine, electrical, hydraulic and cross-system illustrative explorers; corrected engine limitations and updated source links. Simplified model assumptions remain explicit and are not a full aircraft-specific simulation.

## Voice limitations quiz

Choose **Limitations → Start voice quiz**, then **Start voice**. The trainer reads each question and its displayed choices. Say a short answer such as “45 metres and 30 metres” or “45 and 30” for “45 m / 30 m.” The matcher accepts spoken numbers, common unit spellings and abbreviations, and “and” in place of a slash. All values must stay in order; signs, decimals and any supplied units must match. Unitless answers must identify exactly one choice. If ambiguous, it asks for a clearer answer. You can still say Alpha, Bravo, Charlie, Delta, or option one–four. Bare numbers are interpreted as answer values. Confirm the recognised choice before it is scored; say “try again” to change it. After spoken feedback, say “next,” “repeat,” or “pause.” Voice practice uses the unchanged limitations bank and Learn scoring. Buttons remain available at all times.

First choose **Prepare local speech** on Wi-Fi. This downloads the speech model and its software (approximately 65 MB); later visits can reuse the browser cache. Allow microphone access when answering. Speech is transcribed on the device with Whisper tiny.en. The trainer does not upload or save microphone audio or transcripts. Recognition speed depends on the device; answer buttons remain available.

Questions, choices and feedback use saved OpenAI-generated voice recordings. These are downloaded as needed and played without a live AI account or API key. The voice is AI-generated. If a recording cannot load, the trainer can use an installed local device voice.

For broader paraphrases, expand **Flexible wording & privacy** and choose **Enable flexible wording**. This optional small language model runs on the device through WebGPU and downloads several hundred MB on first use. It only matches the spoken answer to the displayed choices; the existing question bank supplies scoring. Numeric values, signs and supplied units must still match, and the recognised choice always requires confirmation. Downloaded models and software come from Hugging Face and jsDelivr. No server or live OpenAI connection is required. Offline operation depends on which recordings, software and models the browser has retained.

Pausing, navigating away, opening a manual or putting the page in the background stops audio and microphone capture. Use a current browser with microphone recording support; the optional wording model also requires WebGPU.

## Source fidelity

Manuals are never published or uploaded. Load the supplied PDFs (FCOM/QRH: 1 May 2026; FCTM: 25 September 2026) in the Manual library. The reader verifies SHA-256 hashes against data/manuals.json. Keeping a PDF privately saves it in IndexedDB on that device. Leaving that option unchecked keeps it for the current visit. Remove local copy deletes the browser copy and in-memory search text; browser data clearing also removes stored files. The first full-text search builds its index in memory, with progress and cancellation when leaving search. Manufacturer family terminology, operator identifiers, diagrams, restrictions, modifications and original page effectivity are not altered inside source documents. Extracted text is a search aid: use the PDF for tables, branches, symbols and diagrams. The supplied revision is not represented as a verified latest controlled revision.

The prior aircraft training payloads have been superseded by the new source set. Compatibility files carry retirement markers instead of obsolete question/flow content. Previous Git history is preserved. New study progress uses its own device-local key so old answers do not confer mastery on new aircraft data.

## Implementation

Static HTML/CSS/JavaScript with no analytics or user-data upload API. Voice models and their libraries load from external hosts only when the user enables those features. index.html and the two A321P2F standalone entry pages are identical. trainer.js owns the study experience; data/ contains navigation metadata and authored learning content. private-manuals.mjs uses locally bundled Mozilla PDF.js (Apache-2.0) to read selected File objects. sw.js caches the study shell and reader software. Never put manuals, extracted full page text or images of manual pages in the repository.

Saved voice assets are generated from the public question bank with `node tools/generate-voice-audio.mjs`, using an ignored local `.env.local` file containing `OPENAI_API_KEY`. Use `--plan` to inspect the text count without calling the API. Pack the generated clips with `node tools/pack-voice-audio.mjs <path-to-ffmpeg>`. These maintenance steps are unnecessary for visitors and must never publish the key.

Run node validate-trainer.js for source integrity, page bounds, question structure, local links, branding and syntax checks. Run node test-trainer.js for application logic checks. Browser checks exercise full quizzes, flow recall, procedure navigation, manual readers, search and responsive layouts.
