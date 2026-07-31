# Components — dWallet Prototype

Supporting file for `guidelines.md`. Full specs + inventory for every reusable component. **Check the inventory before building anything. If it exists, reference it by name — never recreate.**

---

## Component inventory (single source of truth)
Every shared component: its exact name in the Assets/components library, and where it's used. Add every new reusable component here the first time it's built.

| Component | Name in library | States | Used on |
|-----------|----------------|--------|---------|
| DrumWave logo | `Logo` (24×24) | — | Top nav, footer branding (many screens) |
| Text input field | `[PLACEHOLDER]` | default / hover / focused / filled | Onboarding forms |
| Primary button | `[PLACEHOLDER]` | default / hover | Most screens |
| Secondary button | `[PLACEHOLDER]` | default | Skip / secondary actions |
| Top nav bar | `[PLACEHOLDER]` | collapsed / expanded | All home-flow screens |
| Status bar | `[PLACEHOLDER]` | — | All screens |
| `[PLACEHOLDER: add rows as built — cards, accordions, stat blocks, search bar, FAQ rows, etc.]` | | | |

---

## Confirmed component specs
(If these become published Figma components, delete the duplicated spec here and keep only the inventory row — don't carry the same info in two places.)

### Text input field
States: default, hover, focused, filled. (Error/disabled exist in the system; include only if a screen shows them.)
- Structure: label → 8px gap → input container → (optional 4px gap → hint text, right-aligned)
- Container: `#111111` bg, 8px radius, 1px `#2A2A2A` inset border, 12px/2px padding, 44px inner height
- Default: placeholder `#999999`
- Hover/Focused: border `#999999`; focused shows cursor + text switches to `#E3E3E3`
- Filled: border relaxes back to `#2A2A2A`, value text `#E3E3E3`
- Optional slots: leading icon, trailing icon-button, hint line (all toggleable)

### Primary button
- Pill shape, 24px/12px padding, Titillium Web 600 / 18px label
- Default: white bg, `#070707` text
- Hover: `#E3E3E3` bg, `#070707` text

### Secondary button
- Pill shape, 1px white inset border, transparent fill, `#E3E3E3` text

### Top nav bar (persistent across all home-flow screens)
- Container: `rgba(40.67,40.67,40.67,0.60)`, 2.5px backdrop blur, 12px radius, 16px/8px padding, 36px row
- Collapsed: DrumWave logo (24px) + 12px gap + "Welcome back, [Name]!" (Titillium Web 400/14px) left; hamburger icon (18×12px) right
- Expanded (on tap): hamburger → X; reveals "Account settings" + "Logout" rows (`#C9C9C9`, 14px)
- Build as a top-level shared component, not per-screen

### `[PLACEHOLDER: status bar, cards, accordions, stat blocks, search bar, FAQ rows, etc.]`

---

## Screen sequencing & batching
1. **Build shared components first** (everything in the inventory) before screens that use them.
2. **Then build screen-by-screen in flow order,** grouping by section. Finish/verify one section before the next.
3. **Build both states of a screen together** when it shows empty/filled or collapsed/expanded variants.
4. **Checkpoint after each screen or small batch:** verify, confirm reuse, then clear context (see `session-hygiene.md`).
5. `[PLACEHOLDER: record actual section/flow order once mapped]`