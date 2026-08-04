# Project Conventions — DrumWave dWallet Investor Prototype

This file is read by both Cursor (via the `AGENTS.md` symlink) and Claude
Code. Edit this file only — `AGENTS.md` points at it.

---

# READ THIS FIRST: this is a fake prototype, not an application

**Everything in this project is a demo. None of it is real. It exists to
show investors and clients how the product would work.**

There is no backend, no database, no authentication, no API, no real user.
Every screen is a facade. Every piece of data is invented. "Carolina
Smith" is not a user — she is a stage prop. The 7 pending data requests,
the $430 balance, the 23,391 plan members, the phone verification code:
all fake, all hardcoded, all permanent.

**What this means for every task:**

- **Never build logic.** No validation, no error handling, no state
  machines, no conditional gating, no data fetching, no persistence.
- **Never make a button conditional.** Every button that advances the flow
  is always enabled and always works, no matter what has or hasn't been
  entered.
- **Inputs are props, not inputs.** Text fields, dropdowns, toggles, and
  code boxes should be typeable and look real, but nothing reads their
  values and nothing ever will. Any input, or none, advances the flow.
- **Never check whether something "would work."** It doesn't need to work.
  It needs to look right and advance to the next screen.
- **Never add what wasn't asked for.** No loading states, no empty states,
  no edge cases, no accessibility scaffolding, no "while I was in here I
  also…". If it isn't in the design and I didn't ask, don't build it.
- **Never carry state between screens** unless a screen visibly displays
  something entered on a previous one — and even then, prefer a hardcoded
  demo value over real state plumbing.

When a request sounds like it implies real behavior — "make the field
fillable," "add a dropdown," "let the user pick a country" — it means the
control should be **usable and look right**, not that it needs working
logic behind it. Build the simplest version that looks correct. If you
genuinely can't tell whether something crosses into real logic, build the
simple version and flag the question in one line. Do not build the
complex version "just in case."

**The cost of over-building here is real:** it burns limited credits, it
adds code that has to be maintained through a deadline, and it makes the
prototype harder to change. Simpler is not a compromise on this project.
Simpler is correct.

---

# Never verify in a browser

**Do not open a browser. Do not take screenshots. Do not measure the DOM.**

Specifically forbidden:
- Opening or driving a browser (Chrome DevTools Protocol, CDP,
  `Runtime.evaluate`, Playwright, Puppeteer, any browser action)
- Measuring layout at runtime (`getBoundingClientRect`, computed styles,
  scroll heights, element dimensions)
- Taking or reading screenshots to check a result
- Temporarily editing `App.tsx` to force a preview, then reverting it
- Reading PNG or image files to "visually confirm" an asset

**I have the dev server running and the preview open on a second screen. I
will look at it myself.** I can judge spacing, colour, and alignment in
two seconds; a measurement pass costs minutes and credits and tells me
nothing I can't see.

This applies especially to spacing, padding, sizing, and layout tasks —
the ones most likely to tempt a verification pass. Find the value in the
code, change it, report the line, stop.

The only acceptable verification is a parse/type check.

---

## Context
Originally built in Figma Make (~60% of screens complete) and exported to GitHub. Figma Make is no longer available for this project; all remaining work happens in code. Visual fidelity to the Figma source matters more than idiomatic React style. Do not "clean up," refactor, or re-theme existing screens unless asked.

## Scope every edit — the most important workflow rule

`src/app/App.tsx` is ~7,000 lines. Baked exports under `src/imports/` run
to thousands of lines each. Reading a whole file to make a small change is
the single biggest waste in this project.

**In Cursor:** prefer Cmd+K on a selected region over the agent panel for
any edit where the location is already known. Select the exact lines
first. Use `@filename` to scope agent-panel context rather than letting it
search. Never read a whole baked export to change one value.

**In Claude Code:** state the file and line range in the prompt. If the
range isn't known, grep for it first (`grep -n "^function <Name>"`), then
read only that range.

**When a request is ambiguous about location** — e.g. "the bottom of this
screen" when the text appears in five components — ask which file in one
line. Don't search five candidates to find out.

## Known duplication — read before searching

The Figma export flattened the component graph. Many components exist in
near-identical copies. Expect multiple search hits and confirm which one
is live before editing:

- `src/imports/HomeRequestDataBeforeDsp` through `-12` — 13 copies
- `src/imports/SmallCards` through `-7` — 8 copies
- `src/imports/Enroll` through `-7` — 8 copies
- `src/imports/DWCloud` through `-5` — 6 copies
- `src/imports/Profile` through `-4` — 5 copies
- `src/imports/PlanDetaillPage`, `-1`, `-2` — 3 copies
- `src/imports/ChoosePlans`, `-1` — 2 copies, each split into
  `index.tsx` / `index-part2.tsx` / `index-part3.tsx`

The same PNG is duplicated across folders too — e.g.
`2ecd5d81e460c7d3d3cebba32104639d894d3f78.png` exists in six places.

Also note: "View details" appears in `ChoosePlansScreen`,
`PlanDetailScreen`, `SmartPlanDetailScreen`, `Smart2PlanDetailScreen`, and
`JoinAnotherPlanScreen`. Text-based location hints are unreliable here.

**Rule:** before editing anything under `src/imports/`, confirm which copy
`App.tsx` actually renders. Report the answer before editing. Never assume
the first search hit is the live one.

## Git safety
- The repo root is this project folder. Confirm with `git rev-parse --show-toplevel` before any staging or commit; if it resolves anywhere else, stop and flag it.
- Never run `git add -A` or any blanket-add. Review `git status` first and stage specific paths.
- Commits are local only unless explicitly told to push or add a remote.
- An older repo rooted at the home directory still exists and holds commit `d0ebcbe`. Don't delete it; don't run git commands from home.

## Code conventions
_Confirmed in the 2026-07-30 audit. `components.md` (root — not `guidelines/`) holds the full inventory._

- Absolute pixel positioning (`left`, `top`, `width`, `height` as inline styles) matching exact Figma values — not Tailwind utilities, not flex/grid — unless the source frame uses auto-layout. **Confirmed**, including for overlay tap-targets on static Figma exports.
- Shared chrome imports from `@/app/components/...`; per-screen generated assets from `@/imports/<LayerName>/...`. **Known exception:** `DrumWaveFooter` imports directly from `@/imports/UnnamedComponent/index` and duplicates artwork `DrumWaveLogo.tsx` already provides. Don't copy this into new work.
- One function component per screen. **Only partially true in practice** — `ScreenWithNavBar`/`OneDspBottomNav` exist but are wired into one screen only; ~45 of 58 screens import zero shared components and duplicate their own chrome. Reuse existing shared components where a screen's role matches; don't take the under-use as license to keep duplicating.
- Navigation is plain callback props (`onNext`, `onBack`, etc.) driven by a single numeric `step` state in `App.tsx` (`{step === N && <Screen .../>}`) — no routing library. **Confirmed**, with one secondary pattern: DSP/plan screens wire callbacks via React Context from a co-located `@/imports/<Screen>/*-context.tsx`. Match whichever the screen's siblings use.
- Every visual effect preserved literally: gradient stops, shadows, `backdropFilter`, `maskImage`, `mixBlendMode`, opacity. **Mostly confirmed**, but several screens hand-reconstruct effects because the Figma export failed — when that happens, flag it rather than silently approximating.
- Typefaces: **two only** — **Titillium Web** for UI chrome/headers/buttons/nav/section titles, **Open Sans** for input text, labels, and body copy (verified via `src/styles/fonts.css`). Never normalize to one.

## Assets & images
- Assets must live inside the repo. Files in `~/Downloads` or on the Desktop are invisible — copy into `src/imports/` first.
- Figma exports use hashed filenames, so searching by description will never find an asset. To reuse an existing image, trace it by where it's already rendered.
- Never fabricate, download, or substitute an image. Never use `placehold.co`. If an asset is genuinely missing, say so and stop.
- Distortion: an `<img>` with hardcoded `width`/`height` and no `objectFit` squeezes the photo. Use `objectFit: "cover"` plus a container matching the source aspect ratio.
- Before pasting Figma Dev Mode code, strip: the DrumWave logo block at `left: -805, top: 3352` (off-canvas artifact, ~150 lines of tiny coloured divs), any bottom nav bars unless the nav is the task, and `placehold.co` references.

## Refactoring & consolidation safety
- "Consolidate" or "merge duplicates" means one shared component with a `variant` prop branching on the real differences. It does NOT mean removing a variant. Every app state reachable before the change must still be reachable after, unless removal was explicitly requested.
- Before deleting any component, function, or state value: confirm zero references repo-wide, and report what's being removed *before* removing it.
- If a request could mean either "merge into one" or "cut down to one," ask.
- Before changing any screen's `step` number, find every `setStep(N)` reference to it first and report them. Transitions are scattered; missing one creates a silent dead end.

## Figma MCP
- Keep the Figma MCP server connected only when actively pulling from Figma; its tool surface loads into context before any work begins.
- Pull only the specific frame needed — not the whole flow.
- Check `components.md` before building or regenerating anything.

## Working style

### Default for small, isolated changes
- Batch every item in a multi-item request into ONE pass. Don't serialize.
- Don't update `components.md` / `pitfalls.md`.
- Don't re-read files already read this session.
- If blocked, say so in one line and stop — don't open an investigation.

### Cheap check before expensive check
Parse check before reading error logs. Cap all log reads — never dump a
full stack trace. Vite errors right after an edit are usually stale
mid-save; confirm with a parse check first.

### Still flag, always
Brevity never overrides "flag, don't fake" — state missing or
contradictory design, off-by-one errors, and premise errors in one line,
then proceed under a stated assumption.

### Escape hatches I can type
`verify properly` (opt back in to full verification), `report only` (no
edits), `skip the caveats` (fewer flags).

## Companion docs
- `components.md` (root) — component inventory and known near-duplicates. Canonical; `guidelines/components.md` was deleted as a stale stub.
- `pitfalls.md` (root) — recurring quirks. Canonical.
- `PROMPTS.md` — reusable prompt templates.
- `guidelines/tokens.md` — design tokens. **Currently empty; fill before relying on it.**
- `guidelines/asset-handling.md`, `guidelines/session-hygiene.md`, `guidelines/Guidelines.md` — supporting reference.

## Verification checklist (new screens and new components only)
_Does not apply to constants, colour values, spacing tweaks, or isolated edits._
- [ ] Colors match exact hex values (not eyeballed)
- [ ] Correct typeface per element, matching the two-typeface rule
- [ ] Spacing/positions match Figma exactly, including intentionally off-center elements
- [ ] Effects preserved (gradients, blurs, shadows, masks, blend modes)
- [ ] Shared components reused from `components.md`, not rebuilt
- [ ] No Dev Mode annotation artifacts (dotted outlines, redline numbers)
- [ ] Icons/logos are real vector SVG, not flattened bounding boxes
- [ ] Screen navigates correctly to the next screen in the flow
- [ ] Any new reusable component or recurring issue logged in `components.md` / `pitfalls.md`
