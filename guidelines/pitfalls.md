# Known Pitfalls — dWallet Prototype

Supporting file for `guidelines.md`. Recurring failure modes. Each represents a correction round already paid for once — watch for them.

- **Font fixes breaking nearby text.** After any font-loading change, verify surrounding text didn't lose color/opacity or collapse to invisible. Screenshot-compare against the last good state.
- **Gradient hue drift.** Even with identical hex input, rendered gradient color can shift (RGB vs. wider-gamut interpolation). Verify with an eyedropper against the exact hex (e.g. `#FF00DA` / `#9D0386`), not by eye.
- **Missing effects in Dev Mode code.** Drop shadows, glows, and blurs applied via Figma's Effects panel often don't appear in the code export. If a glow/shadow looks missing, check the source layer's Effects panel and add it manually.
- **Dev Mode measurement overlays.** Blue dotted outlines, pink hatched bars, "space/3x" labels, and redline numbers are annotations — never render them as UI. Measurement numbers may reference the frame boundary, not the nearest element, so confirm ambiguous ones against the raw code.
- **Off-center placements are intentional.** Some elements (avatar gradient center, initial letter, icon-button on avatar) are deliberately off-axis. Do not auto-center them to their bounding box.
- **Icons exporting as bounding boxes.** Vector icons often export as flat solid-color rectangles instead of real paths. Render the actual glyph (or reference the real asset), never a plain rectangle. See `asset-handling.md`.