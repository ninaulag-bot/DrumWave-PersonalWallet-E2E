# Project Conventions — Figma Make → Claude Code Prototype

## Context
This project was originally built in Figma Make (~60% of screens complete) and exported to GitHub to continue development in Claude Code. It's a click-through prototype: visual and behavioral fidelity to the Figma source matters more than idiomatic React style. Do not "clean up," refactor, or re-theme existing screens.

## Git safety
- Confirm the repo root with `git rev-parse --show-toplevel` before any git operation that stages or commits. If it doesn't resolve to this project's folder, stop and flag it — don't stage anything. (This has already resolved to the wrong directory once — home directory instead of the project folder.)
- Never run `git add -A` or any blanket-add. Always review `git status` first and stage specific paths.
- `.DS_Store` and `node_modules/` belong in `.gitignore`, not committed-then-untracked.
- Commits are local only unless explicitly told to push or add a remote.

## First session in this repo: audit before building anything new
Before writing a single new screen, do this pass:
1. Walk every already-built screen in the codebase. For each, note: file path, what it renders, and any shared components it imports.
2. Fill in `components.md` from what you find — every shared/reusable component (name, file path, states, where it's used). This becomes the source of truth for reuse going forward.
3. Confirm which of the conventions below actually match this codebase, and correct this file where they don't — match what's really here, not the assumed default.
4. Note any recurring visual or behavioral quirks in `pitfalls.md` (create it if it doesn't exist).

Do not skip this pass just because "the code is probably standard" — the whole point is catching where this specific export deviates.

## Code conventions (confirmed against the actual repo 2026-07-30 audit — see `components.md` for the full inventory)
- Absolute pixel positioning (`left`, `top`, `width`, `height` as inline styles) matching exact Figma values — not Tailwind utilities, not flex/grid — unless the source Figma frame itself uses auto-layout. **Confirmed** — used near-universally, including for overlay tap-targets on otherwise-static Figma exports.
- Shared chrome (status bar, footer, nav, background) imports from `@/app/components/...`; per-layer/per-screen generated assets from `@/imports/<LayerName>/...`. **Mostly confirmed, with a known exception:** `DrumWaveFooter` (the shared dashboard footer) is imported directly from `@/imports/UnnamedComponent/index` rather than a flattened `@/app/components` wrapper, and duplicates artwork that `DrumWaveLogo.tsx` already provides. Don't copy this exception into new work — new shared chrome should still live under `@/app/components/`.
- One function component per screen; shared chrome factors into a wrapper reused across screens. **Only partially true in practice.** `ScreenWithNavBar`/`OneDspBottomNav` exist as a shared home-shell pair but are wired into just one screen (`OneDspHomeScreen`) — most screens (~45 of 58) import zero shared components at all and instead duplicate their own status bar / back-button / tap-target markup per screen. Reuse the existing shared components where a screen's role matches (e.g. any future bottom-nav screen should use `ScreenWithNavBar`+`OneDspBottomNav`, any header+scroll screen should reuse `StatusBar` rather than rebuilding it) — don't take the under-use as license to keep duplicating.
- Navigation is plain callback props (`onNext`, `onBack`, `onSignIn`, etc.) driven by a single numeric `step` state in the top-level `App.tsx` (`{step === N && <Screen .../>}` chain) — no routing library. **Confirmed**, with one recurring secondary pattern: DSP/plan-related screens (e.g. `ChoosePlansScreen`, `PlanDetailScreen`, `SuccessfullyJoinedScreen`) wire callbacks via React Context providers exported from a co-located `@/imports/<Screen>/*-context.tsx` module instead of plain props. Both patterns are established — match whichever the screen's existing siblings use.
- Every visual effect preserved literally: full gradient stops, shadows, `backdropFilter` blur, `maskImage`, `mixBlendMode`, opacity — don't simplify these. **Mostly confirmed**, but several screens hand-reconstruct effects/icons because the Figma export failed (e.g. `UploadDataScreen`'s `ShieldCheck` icon, `DataCertsLoadingScreen`'s entire screen) — when that happens, flag it rather than silently approximating, per the pitfalls doc.
- Typefaces: **confirmed two fixed typefaces** — **Titillium Web** for UI chrome/headers/buttons/nav/section titles, **Open Sans** for form input text, labels, and body/description copy (verified via `src/styles/fonts.css` and direct usage in e.g. `HomeRequestDataBeforeDspScreen.tsx`). Never normalize to one.

## Refactoring & consolidation safety
- "Consolidate" or "merge duplicates" means: build one shared component with a `variant`/`state` prop that branches on the real differences. It does NOT mean removing one of the variants. Every app state reachable before the change (every value in a routing/`demoScreen`-style type union, every screen wired to a `step`) must still be reachable after it, unless removal was explicitly requested.
- Before deleting any component, function, or state value: confirm zero references with a repo-wide grep (not just within the file being edited), and report what's being removed and why *before* removing it.
- If a request could mean either "merge into one" or "cut down to one," stop and ask which is meant rather than guessing — a wrong guess here silently removes a demoable app state.

## Scoped reads for App.tsx
`App.tsx` is 7,000+ lines. Never read the whole file for a targeted change.
1. Locate the target function's line range first, via grep (start:
   `grep -n "^function <Name>"`; end: next `^function ` match after it) — or
   from `components.md`/`PROMPTS.md` if the range is already documented there.
2. Read and edit only that range (`offset`/`limit`). State the range
   explicitly in the prompt if it's already known; otherwise require the
   grep step before any `Read` call on the file.
3. Never read the full file unless explicitly doing a whole-file audit —
   and say so explicitly when that's actually what's needed.

## Figma MCP + Code Connect
- Figma MCP server should be connected (remote, via the `figma@claude-plugins-official` plugin).
- Before building or regenerating any component, check for an existing Code Connect mapping (or `components.md`) first. If a mapping exists, use that real code component — don't regenerate a near-duplicate.
- Pull only the specific frame/screen needed for the current task via the MCP — not the whole remaining flow at once.

## Continuing the remaining screens
- Build in the same flow order as the original (fill in remaining sections/screens here as a checklist).
- Checkpoint after each screen or small batch: run the verification checklist below, update `components.md` / `pitfalls.md` if anything new came up, then clear session context before the next screen. At scale, this is what keeps output quality consistent — not optional tidiness.
- If a next screen's design isn't available yet, say so and ask rather than inventing one.

## Working style (default to fast; opt into thorough)
Reusable prompt templates live in `PROMPTS.md`.

**Prototype fidelity — universal default, applies to every screen unless
the request explicitly says otherwise.** This is a click-through prototype
shown to investors and clients to demonstrate *how the product works*. It
is not a functioning application.

- **Visual accuracy matters. Interaction logic does not.**
- Inputs (text fields, code boxes, dropdowns, toggles) should be typeable/
  selectable so a demo feels real — but the values are meaningless. Any
  input, or none, advances the flow.
- No validation. No format/length/required checks. No error states unless
  a specific error screen was requested as a design.
- No gating: buttons that advance the flow are always enabled and always
  work, regardless of what has or hasn't been entered.
- Don't build focus management, auto-advance between fields, keyboard
  event handling, or input masking unless explicitly asked.
- Don't add state that isn't visible on screen during the walkthrough.
- If a screen genuinely needs real logic, the request will say so
  explicitly. Absent that, assume none.

When a request seems to imply real behavior ("make the field fillable,"
"add a dropdown"), it means the control should be *usable and look right* —
not that it needs working logic behind it. If unsure whether something
crosses into real logic, build the simple version and flag the question in
one line rather than building the complex version.

**Default for small, isolated changes** — a constant, a style value, a one-line
rewire, a targeted edit at a known line:
- Batch every item in a multi-item request into ONE pass. Don't serialize.
- Verify with `npx esbuild <file> --outdir=/tmp/check` only. No browser preview,
  no screenshots.
- Don't update `components.md` / `pitfalls.md`.
- Don't re-read files already read this session; don't re-verify what's confirmed.
- If blocked, say so in one line and stop — don't open an investigation.

**Cheap check before expensive check.** Run a parse check before reading error
logs. Cap all log reads with `lines`/`level` — never dump a full stack trace.
Vite errors seen right after an edit are usually stale mid-edit saves; confirm
with a parse check first.

**Match verification depth to risk.** The full checklist below applies to new
screens and new interactive components. It does NOT apply to constants, colour
values, or isolated edits.

**Still flag, always.** Brevity never overrides "flag, don't fake" — state
missing/contradictory design, off-by-one errors, and premise errors in one line,
then proceed under a stated assumption.

**Escape hatches the user can type:** `verify properly` (full browser
verification), `report only` (no edits), `use agents` (parallel subagents),
`skip the caveats` (fewer flags).

## Verification checklist (per screen, before calling it done)
_Applies to new screens and new interactive components — not to isolated edits._
- [ ] Colors match exact hex values (not eyeballed)
- [ ] Correct typeface per element, matching the two-typeface rule
- [ ] Spacing/positions match Figma exactly, including intentionally off-center elements
- [ ] Effects preserved (gradients, blurs, shadows, masks, blend modes)
- [ ] Shared components reused from `components.md`, not rebuilt
- [ ] No Dev Mode annotation artifacts (dotted outlines, redline numbers)
- [ ] Icons/logos are real vector SVG, not flattened bounding boxes
- [ ] Screen navigates correctly to the next screen in the flow
- [ ] Every interaction/edge case in scope was walked through live in the preview
- [ ] Any new reusable component or recurring issue is already logged in `components.md` / `pitfalls.md`
