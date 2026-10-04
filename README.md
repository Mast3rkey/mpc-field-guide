# MPC · My practice journal

A personal, action-led study notebook for Mast3rkey's MPC playing, creations, experiments, and development. Publicly readable does not mean designed for a general audience.

## Open the notebook

Once GitHub Pages is enabled, the address is **https://mast3rkey.github.io/mpc-field-guide/**.

One-time owner setup: **Settings → Pages → Deploy from a branch → main → /(root) → Save**. This repository is a static site; no build command, template installation, paid hosting, or local laptop is needed. The `.nojekyll` file tells Pages to serve the files directly. Deployment status must be checked separately; committing the files does not itself establish that Pages is enabled.

## What is included

- A mobile-friendly personal dashboard and learning path.
- Three short experiential assignment briefs: identify the sound path, preserve/reopen work, and change one target deliberately.
- Nine later lesson outlines clearly marked planned, not finished.
- A starting inventory of eight reported creations/resources and five open experiments.
- Search across lesson outlines, fundamentals, techniques, and the workbench.
- A journal form with recoverable browser drafts, copy/download, and an explicit review step before a public GitHub save.

## Where the permanent records live

Lessons: `content/lessons/L01.json`, etc. Course map and teaching method: `content/catalog.json`. Inventory: `content/workbench.json`. Reference: `content/reference.json`.

Practice entries can be saved as owner-authored GitHub issues. The website prepares the entry; **submit it on GitHub to save it**, then refresh the journal. It recognizes issues beginning `<!-- mpc-practice:v1 -->`. Issues stay available across devices. Unsubmitted browser drafts do **not** sync and are not an independent backup. An assistant may instead append supplied results to `content/journal.json`; do not invent sessions or assessments.

The site only displays the repository owner's marked issues as personal practice. It checks up to the newest 500 issues and reports a partial history if that ceiling is reached. Network or rate-limit failures are shown as failures, not as an empty journal. No token is placed in browser code or storage.

## Improve a lesson without rebuilding the course

Edit its individual JSON file and commit. The layout is shared in `index.html` and `assets/`. There is no generated bundle and no dependency installation. Keep stable lesson/experiment IDs. Do not replace the whole notebook to fix one entry.

The existing Google Docs remain intact as migration sources. This first site adapts the learning purpose, core workbench, and starter assignments; it does not claim every earlier research note or device file has been migrated. No Google Doc sharing permissions were changed and no recordings were uploaded.

## Development checks

Run `node --test tests/core.test.mjs` for the pure helpers and `python3 tests/validate.py` for content/structure checks. Preview with `python3 -m http.server 8000`, then open `http://localhost:8000` (a local developer convenience, not a requirement for the learner). Browser checks should include a 390px phone viewport, navigation, draft persistence, public-save confirmation, cloud errors, and issue author filtering.

## Sources and scope

Technical references link to Akai, the MIDI Association, and Kymatica from within each lesson. Hardware model and installed software matter; the installed MPC OS version and the phone route are not yet verified. Ordinary button hints are assistance, not proof of mastery. The original sources and research limits remain separate from proposed creative experiments.

GitHub's [Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [prefilled issue URLs](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) document the publishing and journal mechanisms.

Nothing here saves preferences on the MPC or backs up its projects automatically. Keep credentials, account information, private material, and uncleared audio out of public commits and entries. No license has been selected. Not affiliated with or endorsed by Akai Professional.
