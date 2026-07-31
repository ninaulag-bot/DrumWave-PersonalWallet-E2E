<!-- make-kit-guidelines -->
## Design System Setup — MANDATORY

This project depends on `@make-kits/design-system-test` packages. Before writing
any code:

1. Read guidelines/setup.md and guidelines/Guidelines.md by their exact
   path (e.g. node_modules/<scope>/<package>/guidelines/setup.md).
   This project uses pnpm, which symlinks packages — do NOT use
   `find`, `glob`, or `file_search` to discover files as they silently
   fail on symlinks. Instead use: reading files by exact path,
   `ls` (follows symlinks), `find -L` (`-L` follows symlinks), or `cat`.
2. Execute all setup instructions (config changes) against THIS project — not the package itself.
3. Do not skip, modify, or improvise any setup steps.
4. Read ALL other required .md files specified in guidelines/Guidelines.md.
5. Verify that all required .md files have been read before proceeding.
<!-- /make-kit-guidelines -->

# dWallet Prototype — Make Guidelines (parent)

## Purpose & scope
Faithful, 1:1 recreation of the **Personal dWallet end-to-end prototype** (~200+ screens) from existing Figma designs into a Figma Make click-through prototype for investors. **Deliverable is a clickable visual walkthrough — no functional interactivity required.** Reproduce each design exactly. Do not redesign, "improve," clean up, or re-theme anything.

Build target: **one continuous Figma Make file.** (If performance degrades badly at scale, batching by flow is the fallback — see `session-hygiene.md`.)

## How this guidelines set is organized
This parent file holds the always-relevant rules. Detailed, task-specific content lives in supporting files, pulled in only when relevant:
- `components.md` — full component specs + the component inventory (single source of truth for reuse)
- `tokens.md` — design tokens, IF not already defined as Figma variables (see note below)
- `asset-handling.md` — icon/logo/SVG rules and known Dev Mode export failures
- `pitfalls.md` — recurring failure modes to watch for
- `session-hygiene.md` — context/performance management for the large single file
- `[PLACEHOLDER: per-flow files as mapped, e.g. onboarding-flow.md, home-flow.md]`

## Source of truth (read this first)
- **Design tokens:** the published DrumWave Figma variables are the source of truth. Reference them by name. Only fall back to `tokens.md` for any value not yet defined as a variable.
- **Components:** the published Figma components / existing Make components are the source of truth. Check the inventory in `components.md` before building anything — if it exists, reference it; never recreate.
- **Assets (logo, icons):** the saved assets in this file's Assets library. Reference by name; never re-embed or regenerate. See `asset-handling.md`.

## Design system connection (how the DS is wired to Make)
This documents how the DrumWave design system connects to this Make file, and the known limits.

**Tokens / styles — connect via published Figma library (this works).**
- Tokens must exist as real Figma **variables** (not hex values typed into shapes), and elements as real published **components**, in a library that is **enabled in this Make file**.
- Once enabled, Make can reference these variables/styles natively by name. This is the reliable path for a non-codebase design system.
- When a token is a live variable, remove its value from `tokens.md` (see the redundancy note there).

**Components — no reliable wholesale connection for a non-codebase DS.**
- Make kits can connect production components, but the component side currently supports **React codebases via npm packages** only. This prototype is not tied to a React package, so component-level "connection" is not available the way variable connection is.
- Even teams that publish components to npm and write explicit guidelines report Make ignoring them and defaulting to Tailwind/Radix lookalikes. Do not assume connection guarantees usage.
- **Practical substitute:** build each shared component once inside Make (per `components.md` specs), save it, and reuse rigorously via the inventory. The guidelines carry component structure; the inventory enforces reuse.

**Optional — Make kit setup (if pursued):** Make file → Settings → Create a kit → "Assemble your kit" to import library styles/tokens. A guidelines folder is auto-created; this guidelines set drops in there.

**Expectation setting:** connecting variables is reliable; connecting components is not (yet) for a non-codebase DS. The verification checklist and reuse rules exist because "connect it and trust it" does not fully hold.

## Core operating rules
1. **Reuse, don't regenerate. (Highest priority at 200+ screens.)** Check `components.md` before building. If a component or asset exists, reference the existing one by name. Never rebuild a near-duplicate.
2. **Literal values always win.** When exact hex codes, pixel positions, or spacing are provided, use them verbatim. Never substitute a "close" value.
3. **No creative reinterpretation.** Match copy, spacing, color, font weight, and corner radius exactly — even when a different version looks "cleaner."
4. **Preserve effects.** Never flatten gradients (keep all stops), drop shadows, glows, blurs, masks, or clip paths.
5. **Flag, don't fake.** If source data is ambiguous, missing, or exports as an unusable artifact, say so and ask — don't invent a substitute.

## Typography (never normalize the two typefaces)
- **Titillium Web** — headlines, titles, UI chrome (buttons, nav, stats, section headers, card text)
- **Open Sans** — form input text, input labels, body/description text, list subtitles
These are never interchangeable. Full type scale lives in `tokens.md` (or Figma variables if defined).

## Fidelity notes for a click-through (no functionality)
Because the deliverable is a visual click-through, not a functional app:
- Screens must **look** exact and **link** correctly. That is the whole job.
- Interactive states (hover/focused/filled, empty/filled, collapsed/expanded) only need to exist where a screen visually depicts them — reproduce the shown state, don't engineer live behavior.
  ### Scoped functional inputs (general rule)

The click-through is visual-only by default. Two narrow exceptions are allowed.
Both are controlled demo behaviors, not real forms — no validation, no backend,
no persistence beyond the current session's screens.

**1. Filter inputs** — a search/filter field may narrow to a result, but only
among the states the design being implemented already contains.
- Matchable set = exactly the result items shown in that design.
- Case-insensitive substring match against that set only.
- A match reveals the pre-designed result(s); any non-match shows the design's
  own "no results" state.
- If the design has no no-results state, flag it as a design gap and stop — do
  not invent empty-state styling.
- The input can never produce a state that isn't drawn in the frame.

**2. Echo inputs** — a text field (name, email, etc.) may accept free text and
display it back.
- Capture what the user types and render it in the field.
- If the design shows that value reused later (e.g. a greeting on a subsequent
  screen), carry the captured text forward to those screens.
- No validation, no format-checking, no required-field logic. Any input is
  accepted as-is, including empty.
- Style the entered text exactly as the design's filled-field state specifies.

**Out of scope for both:** fuzzy search, autocomplete dropdowns, debounce,
error/validation states, password masking rules, external data, anything
persisted past the walkthrough. Fields the design treats as purely decorative
stay non-functional.

## Verification (after each screen, before moving on)
- [ ] Colors match exact values (eyedrop if unsure)
- [ ] Both fonts correct, not normalized to one
- [ ] Spacing/positions match
- [ ] Shown states reproduced correctly
- [ ] Shared components (nav, status bar, footer) reused, not rebuilt
- [ ] Effects preserved (gradients, glows, shadows, masks)
- [ ] No Dev Mode annotation artifacts (dotted outlines, hatched bars, redline numbers) rendered as UI
- [ ] Screen links correctly to the next screen in the flow
