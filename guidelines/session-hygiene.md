# Session Hygiene — dWallet Prototype

Supporting file for `guidelines.md`. At 200+ screens in one continuous file, context/performance management is load-bearing, not cleanup. Long Make prompt histories have caused severe lag, recovery-mode loops, and out-of-memory crashes. Treat the following as required practice.

- **Reuse shared components** rather than rebuilding — highest-leverage rule for consistency and the reason the inventory in `components.md` exists.
- **Reference saved assets by name; never re-paste large SVG or Dev Mode code blocks once an asset exists.** Re-pasting the full logo SVG or a whole screen's Dev Mode export on every screen is a primary driver of context bloat and slow generation.
- **Clear chat context at natural checkpoints** (after each completed screen or small batch). This does NOT delete already-built components or assets — only conversation memory. Build the component/asset, confirm it's saved, then clear.
- **Trim Dev Mode code before pasting** — include only the specific component being built, not the entire screen's nested export.
- **Isolate genuinely complex assets** (like the multi-path logo) in a scratch session, then bring the finished asset into the main build, to keep the primary file's context lean.
- Because everything lives in one continuous file, a single unmanaged context is the main crash risk — the checkpoint-and-clear rhythm is what keeps the file healthy across all 200+ screens.

## Fallback if performance degrades badly
The build target is one continuous file for consistency. If lag/crashes become prohibitive, batch by flow/section into leaner sessions and stitch the click-through together at the published/shared layer. Since the deliverable is a non-functional click-through, nothing needs to actually function across file boundaries — this fallback costs consistency-of-editing, not the final investor experience.