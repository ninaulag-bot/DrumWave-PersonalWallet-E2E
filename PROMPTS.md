# Prompt templates

Cursor-first. Conventions live in `CLAUDE.md` (which Cursor reads via the
`AGENTS.md` symlink) — these are the copy-paste shapes.

---

## 1. INLINE FIX (Cmd+K) — use this most

**Select the exact lines first**, then Cmd+K. The selection is the scope,
so the prompt stays short:

```
<the change, in one sentence>
Change only what's selected. No other edits.
```

Examples:
- `Add objectFit: "cover" so the photo crops instead of stretching. Change only what's selected.`
- `Change this label to "Enrolled in a DSP". Change only what's selected.`
- `Make this text var(--color-text-disabled, #666666) and remove the onClick. Change only what's selected.`

To get to a known line: Cmd+P for the file, Cmd+G for the line number,
select, Cmd+K.

---

## 2. SCOPED AGENT EDIT — when a change spans a few known files

Agent panel, but pin the files:

```
@<file1> @<file2>

<the change>

Only edit the files I've referenced. Do not search the codebase. Do not
read anything under src/imports/ unless I named it.
Prototype fidelity per CLAUDE.md.
Report only the lines changed.
```

---

## 3. FIND IT — when the location is unknown

```
@codebase Where is <thing> defined and rendered?

Report file paths and line numbers only. This project has many duplicate
copies under src/imports/ — tell me which copy App.tsx actually renders
and which are dead.

Don't edit anything.
```

---

## 4. BUILD — new screen or component

```
BUILD: <name>

Source of truth: <Figma node URL> + pasted Dev Mode code below.
File: src/app/components/<Name>.tsx

Structural template: <an existing screen with the same chrome> — copy its
imports and structure rather than re-deriving from the Dev Mode code.

[Dev Mode code — strip the logo artifact at left:-805/top:3352, any nav
bars, and placehold.co references before pasting]

Fidelity: prototype per CLAUDE.md. Inputs typeable but meaningless. No
validation, no gating, no focus/keyboard handling.

Do NOT wire into App.tsx — that's a separate pass.
Do NOT substitute images. Report any real asset still needed.
Add one row to components.md.
```

---

## 5. WIRE — insert screens into the step chain

```
WIRE: <ScreenName(s)> into the step chain.
Target position: after <screen>, before <screen>.

STEP 1 — report only: find the step numbers of the two neighbours and the
current highest step number in use. Report the exact line of the
preceding screen's onNext handler. Stop.

STEP 2 — after I confirm: assign the next unused step number(s). Do NOT
renumber any existing screen. Add render branches matching the existing
{step === N && <Screen />} pattern. Reroute ONLY the preceding screen's
onNext. Every other setStep call stays untouched.

Report every line changed.
```

---

## 6. CONSOLIDATE — merge near-duplicates

Never a FAST FIX. The two-step is mandatory — skipping it is how
`DashboardScreenEnrolledNoPlan` got deleted instead of merged.

```
CONSOLIDATE: <name1>, <name2>, <name3>

STEP 1 — report only, no code: diff every pair, list every line that
actually differs. Stop until I confirm.

STEP 2 — after I confirm: build ONE component with a variant/state prop
covering every listed difference. Merging removes duplication, not
functionality — every previously-reachable app state must still be
reachable. If merging genuinely requires dropping a state, say so and wait.

STEP 3: update every call site, then update components.md — replace the
individual entries with the new shared component and its variant values.
```

---

## 7. MOVE SCREEN — change a screen's position in the flow

```
MOVE: <ComponentName> from step <X>.

STEP 1 — report only: find every setStep(<X>) call. For each, report the
file, what triggers it, and whether it should still land here after the
move. Also confirm whether more than one demoScreen branch renders step
<X>. Stop.

STEP 2 — after I confirm: move to the next unused step number (don't reuse
an old one). Update only the transitions confirmed in Step 1.
```

---

## 8. Anti-patterns in my own prompts

- **Using the agent panel for a change I could select.** Cmd+K is scoped
  by the selection; the panel searches.
- **"do them one at a time"** → forces serial round trips. Say `one pass`.
- **Fix + audit + screenshot in one message** → the audit dominates.
  Split them.
- **Omitting the file when I know it** → costs a search.
  `PlanDetaillPage/index.tsx:834` is enough.
- **"make it look right"** without a Figma node or pasted spec →
  guesswork.
- **Describing an asset instead of pointing at where it's used** → it will
  search, fail, and ask. Trace by render location.

---

## 9. Phrases that work in both tools

| Phrase | Effect |
|---|---|
| `Change only what's selected` | hard scope for Cmd+K |
| `Only edit the files I've referenced` | hard scope for agent mode |
| `one pass` | batch everything, don't serialize |
| `report only` | never edit files |
| `flag premise errors` | push back if my description of the code is wrong |
| `no browser verification` | skip screenshots and dev-server fiddling |
| `verify properly` | opt back IN to full verification |

---

## 10. Model setting

Sonnet for routine edits. Opus only for the component-layer refactor and
anything architectural. Opus + High reasoning on a rename is paying
extended thinking for a find-and-replace.
