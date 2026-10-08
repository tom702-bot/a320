# Qantas A321P2F Trainer

A personal study site built around the supplied FCOM, FCTM and QRH, FCOM and QRH effective 1 May 2026; FCTM effective 25 September 2026. This is not an official Qantas training product or an operational checklist.

## Study content

- 11 original FCOM flow-pattern pages, rendered privately from the local PDF.
- 8 selected sequence drills with 55 source-linked steps. Guided study and order-sensitive recall. Conditions and printed PF/PM/CM1/CM2 roles are retained. These are selected subsets, not a claim of complete cockpit simulation.
- Normal SOPs, supplementary and systems-related procedures; FCTM techniques; the QRH normal checklist.
- Abnormal procedure indexes and 8 source-linked scenario study prompts. Scenario prompts are self-assessed and do not invent or grade emergency actions.
- 92 newly authored limitations questions, with Learn, Exam, flashcard, weak-question and local progress modes. Exact PDF pages, source hash, section and applicability accompany each question. Only a completed exam updates scored mastery.
- One A321P2F study set and progress record. All 92 questions are available together. Equipment differences are noted on relevant questions; procedure branches and applicability stay with their original source pages. Previous registration selections no longer filter study content or reset progress.
- Local PDF loading (FCOM 4,364 pages; FCTM 532; QRH 330), section browsing, private full-text search, source page links and optional browser storage for offline use.
- Preserved engine, electrical, hydraulic and cross-system illustrative explorers; corrected engine limitations and updated source links. Simplified model assumptions remain explicit and are not a full aircraft-specific simulation.

## Source fidelity

Manuals are never published or uploaded. Load the supplied PDFs (FCOM/QRH: 1 May 2026; FCTM: 25 September 2026) in the Manual library. The reader verifies SHA-256 hashes against data/manuals.json. Keeping a PDF privately saves it in IndexedDB on that device. Leaving that option unchecked keeps it for the current visit. Remove local copy deletes the browser copy and in-memory search text; browser data clearing also removes stored files. The first full-text search builds its index in memory, with progress and cancellation when leaving search. Manufacturer family terminology, operator identifiers, diagrams, restrictions, modifications and original page effectivity are not altered inside source documents. Extracted text is a search aid: use the PDF for tables, branches, symbols and diagrams. The supplied revision is not represented as a verified latest controlled revision.

The prior aircraft training payloads have been superseded by the new source set. Compatibility files carry retirement markers instead of obsolete question/flow content. Previous Git history is preserved. New study progress uses its own device-local key so old answers do not confer mastery on new aircraft data.

## Implementation

Static HTML/CSS/JavaScript; no remote fonts, scripts, analytics or upload APIs. index.html and the two A321P2F standalone entry pages are identical. trainer.js owns the study experience; data/ contains navigation metadata and authored learning content. private-manuals.mjs uses locally bundled Mozilla PDF.js (Apache-2.0) to read selected File objects. sw.js caches the study shell and reader software. Never put manuals, extracted full page text or images of manual pages in the repository.

Run node validate-trainer.js for source integrity, page bounds, question structure, local links, branding and syntax checks. Run node test-trainer.js for application logic checks. Browser checks exercise full quizzes, flow recall, procedure navigation, manual readers, search and responsive layouts.
