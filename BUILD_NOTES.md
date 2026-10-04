# First usable version — validation and remaining checks

## Scope

This is a personal practice notebook, not a completed general MPC manual. It includes three experiential assignment briefs, nine planned lesson outlines, a starting inventory, concise references, search, and a journal handoff to GitHub. The existing Google Docs were not deleted or shared. No practice results, actual device filenames, or mastery scores were fabricated.

## Validation performed

- Pure helper tests: 9 passed (`node --test tests/core.test.mjs`).
- Content validation passed (`python3 tests/validate.py`): unique IDs, prerequisite order, available lesson files, required sections, source references, and inventory structure.
- Offline Chromium preview checked 11 routes at 1440px, 768px, and 390px viewport widths with no horizontal page overflow.
- Offline interaction tests checked expandable help, search matches/empty results, serializing/restoring a draft, non-persisted public-sharing consent, prefilled GitHub issue links, owner-only issue filtering, preserving a draft and previously loaded entries after a cloud error, and the skip-to-main link.
- Source files used for the initial local test were compared to Git blob hashes from the repository; the accessibility entry-point and separate N-prefixed technique IDs were then retested.

## Limits of those tests

The browser test used an offline harness: local authored HTML/CSS/JS, in-memory localStorage emulation, supplied JSON, and simulated GitHub API responses. Container policy blocked localhost HTTP navigation. The test therefore does not establish live hosting, network/CORS behavior, deployed Content Security Policy enforcement, native iOS Safari behavior, native-browser storage persistence across actual device restarts, or successful end-to-end live GitHub issue submission. No test issue was published.

## Remaining publication checks

1. Owner enables GitHub Pages: main branch, repository root.
2. Confirm the public site loads the current files and JS modules without console errors.
3. On the actual phone/iPad, check navigation, one saved browser draft, and keyboard/text entry.
4. When there is a real practice result to preserve, review and submit the prepared issue on GitHub; refresh the site and confirm it appears. Do not publish a fake practice result for a test.

Journal drafts are browser-local until submitted on GitHub. Submitted public issues and repository content are durable records outside the chat; the site does not implement a private cloud database or automatic draft synchronization. Device settings and MPC project backups remain separate tasks.
