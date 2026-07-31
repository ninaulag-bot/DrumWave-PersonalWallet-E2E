# Changing images & components — workflow

Merge into `asset-handling.md`. Written from actual failure patterns in
this project, not generic advice.

---

## Why repeat prompting happens

Claude Code stops and asks when it hits something it can't know:
1. **Where the file is** — it can't see outside the repo
2. **What the real dimensions are** — it won't guess and distort
3. **Whether a component is shared** — editing a shared baked import
   silently changes other screens

Every one of those is knowable up front. State all three and the task
completes in one pass.

---

## Images

### Step 1 — get the asset into the repo (do this first, always)

Assets in `~/Downloads`, Desktop, or anywhere outside the project are
invisible to Claude Code. Copy before prompting:

```bash
cp ~/Downloads/<file>.png <project>/src/imports/
```

Name it descriptively (`dsavings-smart.png`), not by hash. Figma's own
exports use hashed names like `43d2ce77...png`, which is why searching
for an asset by description never finds it.

### Step 2 — get the real dimensions from Figma Dev Mode

Select the image frame in Dev Mode and read off:
- the **container** width × height
- whether the image should **crop** (fill the frame, edges cut) or
  **fit** (whole image visible, letterboxed)

Almost always crop for card artwork.

### Step 3 — the prompt

```
Replace <oldVariable> in <file> with src/imports/<new-file>.png.

Container: <W>×<H>. Use objectFit: "cover" so the photo crops rather
than stretches. Do not set width/height on the img independently of the
container.

Remove the old import if it becomes unused.
Do not fabricate, download, or substitute any image.

esbuild only. Report lines changed.
```

**The distortion bug:** an `<img>` with hardcoded `width`/`height` and no
`objectFit` squeezes the photo to fit. Always specify `objectFit: "cover"`
plus a container that matches the source aspect ratio.

### Reusing an image already in the project

Don't describe it ("the concert photo") — Claude Code will search, fail,
and ask. Point at where it's already rendered:

```
Find the image variable used by <the card/screen that renders it
correctly>. Report the variable name and its import path. Then use that
same import in <target file>.
```

---

## Components

### First: is it editable, or baked?

This project has two kinds of component, and they behave completely
differently:

| Location | Nature | How to change it |
|---|---|---|
| `src/app/components/` | Real React, props, editable | Edit directly |
| `src/imports/` | Baked Figma export | See below |

Baked imports often take **no props**, are sometimes **shared across
screens**, and can be deeply nested (one screen's export importing
another's). A wrapper in `src/app/components/` may turn out to contain no
content at all — `ChoosePlansScreen.tsx` was a thin shell that just
rendered `@/imports/ChoosePlans/index`.

**Always check before planning the edit:**

```
REPORT ONLY — no edits.
Is <Component> real markup, or a wrapper around a baked @/imports/ file?
If baked: which file, and is that file imported by more than one screen?
Report and stop.
```

Two minutes of report saves a 40-tool-call trace through a nested export.

### Changing a baked import

- **Shared by multiple screens** → don't edit it. Editing changes every
  screen that uses it. Either accept that, or handle it at the screen
  level instead.
- **Used by one screen** → editing is fine, but tell Claude Code the
  exact file and element. Never say "find the card and change it" —
  baked exports duplicate markup heavily and it'll trace the graph
  looking for the right one.
- **Needs interactivity** → baked components take no props. The
  established pattern is a transparent overlay tap-target positioned at
  the element's exact coordinates. Don't rebuild the import.

### Reusing a component across screens

Baked exports don't share — each screen holds its own copy of the markup.
So "make this screen use that card" often means copying markup between
imports, which is expensive and duplicative. Usually better: fix the
local copy, and note the duplication in `components.md` for a later
consolidation pass.

---

## Pixel-perfect, in one pass

The values that must come from Dev Mode, never estimated:

- exact hex colours (not "dark grey")
- font family + weight + size + line-height per element
- container width/height and absolute left/top
- border radius, outline width, outline offset
- gradient stops, blur radii, shadow spreads, opacity

Paste them into the prompt. Anything omitted gets approximated, and
approximation is what causes the second and third round trip.

**Before pasting Dev Mode code, strip:**
- the DrumWave logo block at `left: -805, top: 3352` — an off-canvas
  Figma artifact, ~150 lines of tiny coloured divs
- any bottom nav bars, unless the nav is genuinely the task
- `placehold.co` image references — replace with a real asset path or an
  explicit instruction to keep the existing image

---

## The template

```
FAST FIX — scoped read. Prototype fidelity per CLAUDE.md.

File: <exact path>
Target: <exact element, with line number or a grep to find it>

Change: <specific, with exact Dev Mode values>

Asset: src/imports/<file>.png  ← already in the repo
Container: <W>×<H>, objectFit: "cover"

Do not fabricate or substitute images.
Do not edit anything under @/imports/ without reporting first.
Do not change props, callbacks, or step wiring.

esbuild only, no browser session. Report lines changed.
```

---

## Quick checklist

Before sending any image or component change:

- [ ] Asset copied into `src/imports/` (not sitting in Downloads)
- [ ] Exact file path in the prompt, not a description
- [ ] Container dimensions from Dev Mode, plus `objectFit`
- [ ] Checked whether the target is baked or real markup
- [ ] If baked: confirmed whether it's shared
- [ ] Dev Mode code stripped of logo artifact / nav bars / placehold.co
- [ ] "Do not substitute images" stated explicitly
- [ ] Verification scoped to esbuild unless you actually need a screenshot
