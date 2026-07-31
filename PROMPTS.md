# Prompt templates — for fast turnaround

Copy/paste and fill the blanks. The bracketed rules are what actually cut round trips.

---

## 1. FAST FIX — small, isolated edits (use this most)

```
FAST FIX — minimal mode.

Files: <path:line, if known>
Change:
1. <change>
2. <change>
3. <change>

Rules: do all of the above in ONE pass. No browser verification, no
screenshots, no components.md/pitfalls.md updates, no re-reading files
already read this session. Verify with esbuild only. If something blocks
you, one line and stop — don't investigate.
```

**Why each rule earns its place**
- *one pass* — "one at a time" forces serial round trips
- *no browser verification* — the default is verify-after-every-edit; overkill for a constant
- *no docs update* — CLAUDE.md tells me to update those by default; real overhead
- *esbuild only* — catches syntax/type breakage in ~1 call instead of a reload + screenshot
- *one line and stop* — prevents a 6-call investigation you didn't ask for

---

## 2. REPORT ONLY — audits, mapping, "where is X"

```
REPORT ONLY — no edits, no file writes.

Question: <what you need to know>
Scope: <files//dirs to look at>

Use grep + targeted line reads. Output a markdown table. Don't read whole
files. Don't fix anything you find — list it.
```

Add `Flag premise errors` if you want me to push back when your assumption
about the code is wrong (e.g. "the consolidated DashboardScreen" — there were four).

---

## 3. BUILD — new component or screen

```
BUILD: <component/screen name>

Source of truth: <Figma link + node-id, or paste dev-mode code>
Data: <hardcode OK | must be dynamic from X>

Reuse from components.md if a match exists; if not, build it and add one row.
Fidelity: prototype default per CLAUDE.md — inputs typeable but meaningless,
no validation, no gating, no focus/keyboard handling. Say so explicitly here
ONLY if this screen is an exception and needs real logic.
Verify: ONE screenshot at the end. No intermediate screenshots.
If the design is missing/inconsistent, one line and proceed with an assumption
stated — don't stop to ask.
```

---

## 4. CONSOLIDATE — merge near-duplicate components

Use this instead of FAST FIX whenever the task is "merge/dedupe X and Y,"
not "change one thing." FAST FIX's "don't investigate, one line and stop"
rule is right for isolated edits and wrong here — it rewards the cheapest
path, and deleting the most-different variant is cheaper than actually
merging it in. That's what happened to `DashboardScreenEnrolledNoPlan`.

```
CONSOLIDATE — merge near-duplicates into one parameterized component.

Components: <name1>, <name2>, <name3>, ... (pull from components.md's
"Known near-duplicate screens" list — if the set you want isn't listed
there yet, add it first, don't proceed on an unlisted set)

Step 1 — REPORT ONLY, no code: diff every pair, list every line that
actually differs, report back. Stop here until I confirm.
Step 2 — after I confirm: build ONE component with a variant/state prop
covering every listed difference. Merging removes duplication, it does not
remove functionality — every previously-reachable app state must still be
reachable afterward. If merging genuinely requires dropping a state, say so
explicitly and wait for confirmation before doing it.
Step 3: update every call site, then update components.md — replace the
individual entries with the new shared component and its variant values.

Rules: this two-step (diff-then-confirm) process is mandatory even in
minimal mode — don't skip Step 1.
```

---

## 5. Toggle phrases — drop into any prompt

| Phrase | Effect |
|---|---|
| `minimal mode` | no browser verify, no docs, no extra investigation |
| `one pass` | batch everything, don't serialize |
| `esbuild only` | skip runtime verification |
| `no docs` | leave components.md / pitfalls.md alone |
| `skip the caveats` | fewer flags/warnings in the reply |
| `report only` | never edit files |
| `flag premise errors` | push back if my description of the code is wrong |
| `verify properly` | opt back IN to full browser verification |
| `use agents` | fan out to parallel subagents (only when explicitly asked) |
| `scoped read` | grep for the target's line range first, read/edit only that range — never the whole file (default for any `App.tsx` edit, see `CLAUDE.md`) |

---

## 6. Anti-patterns to avoid in your prompts

- **"do them one at a time"** → forces serial round trips. Say `one pass`.
- **Asking for a fix + an audit + a screenshot in one message** → the audit
  dominates. Split: fast fix first, audit separately.
- **Omitting the file when you know it** → costs a search. `App.tsx:7787` is enough.
- **"make it look right"** without a Figma node or pasted spec → guesswork.

---

## 7. Standing preferences (optional)

Anything you'd repeat every session belongs in `CLAUDE.md` instead, e.g.:

```
## Working style
- Default to minimal mode: no browser verification unless asked, no doc
  updates unless asked.
- Batch multi-item requests into one pass.
- Verify with esbuild; only use the browser preview when explicitly asked
  or when the change is a new interactive component.
- Cap log reads (`lines`/`level`) — never dump full stack traces.
- Check cheap before expensive: parse check before reading error logs.
```
