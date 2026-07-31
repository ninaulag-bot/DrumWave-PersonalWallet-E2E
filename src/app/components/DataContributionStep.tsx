import React from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "@/imports/Contribute/svg-ffwivnx1yn";
import LeftDash from "@/imports/Vector935";
import RightDash from "@/imports/Vector934";
import { GradientGlowCard } from "./GradientGlowCard";

// ─── SVG path data (identical across all three chart stages) ──────────────────
const CURVE_FILL =
  "M1 143C1 143 103.917 139.123 207.862 101.857C304.382 67.2522 342 5 342 5V143H1Z";

const CURVE_STROKE =
  "M206.862 101.857L207.199 102.798V102.798L206.862 101.857ZM0 143C0.0376425 143.999 0.0381931 143.999 0.0391356 143.999C0.0399728 143.999 0.0413074 143.999 0.0429803 143.999C0.0463264 143.999 0.0512371 143.999 0.0577065 143.999C0.0706452 143.998 0.0898185 143.997 0.115178 143.996C0.165896 143.994 0.241359 143.991 0.341177 143.987C0.540813 143.978 0.837872 143.965 1.22924 143.946C2.01198 143.909 3.17199 143.849 4.68437 143.759C7.70912 143.58 12.1435 143.282 17.7885 142.808C29.0782 141.861 45.2113 140.21 64.5953 137.393C103.359 131.759 155.144 121.461 207.199 102.798L206.862 101.857L206.524 100.915C154.634 119.519 102.989 129.792 64.3076 135.414C44.9693 138.224 28.8767 139.871 17.6213 140.815C11.9937 141.288 7.5756 141.584 4.56606 141.762C3.0613 141.852 1.9087 141.911 1.13312 141.949C0.745326 141.967 0.451795 141.98 0.255631 141.989C0.15755 141.993 0.0838102 141.996 0.0348016 141.998C0.0102973 141.999 -0.0080242 142 -0.0201144 142C-0.0261595 142 -0.0306468 142 -0.0335702 142.001C-0.0350319 142.001 -0.0360499 142.001 -0.0367815 142.001C-0.0374079 142.001 -0.0376425 142.001 0 143ZM206.862 101.857L207.199 102.798C255.603 85.4443 289.251 61.1526 310.805 41.1853C321.582 31.2022 329.335 22.3004 334.399 15.8873C336.931 12.6807 338.79 10.096 340.019 8.30914C340.633 7.4157 341.09 6.72167 341.395 6.24903C341.547 6.01271 341.661 5.83173 341.738 5.70884C341.776 5.6474 341.805 5.60048 341.825 5.56842C341.834 5.55239 341.842 5.54008 341.847 5.53153C341.85 5.52725 341.852 5.52392 341.853 5.52152C341.854 5.52033 341.855 5.51924 341.855 5.51865C341.855 5.5178 341.856 5.51719 341 5C340.144 4.48281 340.144 4.48267 340.144 4.48278C340.144 4.48313 340.144 4.48347 340.143 4.48416C340.142 4.48556 340.141 4.4879 340.139 4.49118C340.135 4.49774 340.129 4.50806 340.12 4.52208C340.103 4.55013 340.076 4.59303 340.041 4.65043C339.969 4.76523 339.86 4.93804 339.713 5.16611C339.419 5.62227 338.974 6.29948 338.371 7.17583C337.166 8.92855 335.332 11.4777 332.829 14.6479C327.823 20.9885 320.139 29.8125 309.446 39.7181C288.062 59.528 254.641 83.6646 206.524 100.915L206.862 101.857Z";

// Fade-line fill paths for the curve continuation visible beyond each smaller card
// Stage 1 (from Enroll-1 svg-5dypho080t.ts p21936a80)
const FADE_FILL_S1 =
  "M-282 138C-282 138 -179.083 134.123 -75.1384 96.8567C21.3819 62.2522 59 0 59 0V138H-282Z";
// Stage 2 (from Enroll-2 svg-gc8tpzuf2v.ts p1ed1bf00)
const FADE_FILL_S2 =
  "M-250 138C-250 138 -147.083 134.123 -43.1384 96.8567C53.3819 62.2522 91 0 91 0V138H-250Z";

// ─── Stage config — exact pixel values pulled from Figma nodes ────────────────
// Stage 0 = Contribute-1: card 342 wide, dot at top-right corner
// Stage 1 = Enroll-1:     card 284 wide, dot 56px below card top
// Stage 2 = Enroll-2:     card 252 wide, dot 76px below card top
type Stage = 0 | 1 | 2;

const STAGES = {
  0: {
    clipWidth: 342 as const,
    cardW: "100%",
    dotTop: 0,    // at card top edge — kept inside card boundary
    dollars: 5,
    badge: null as null,
    fadeW: 2,
    fadeH: 133,
    fadeOffsetLeft: "calc(100% - 1px)" as string,
  },
  1: {
    clipWidth: 284 as const,
    cardW: "83.04%",     // 284/342 — from Figma w=[284px] on 342px container
    dotTop: 56,          // Figma: dot top=270, card top=214 → 270-214=56
    dollars: 4,
    badge: { top: 9, leftPct: "89.8%" } as { top: number; leftPct: string },
    // badge top: Figma 223-214=9; leftPct: 255/284≈89.8% (centered at card-right)
    fadeW: 59,
    fadeH: 138,
    fadeOffsetLeft: "100%" as string,
  },
  2: {
    clipWidth: 252 as const,
    cardW: "73.68%",     // 252/342
    dotTop: 76,          // Figma: dot top=290, card top=214 → 290-214=76
    dollars: 3,
    badge: { top: 28, leftPct: "88.5%" } as { top: number; leftPct: string },
    // badge top: Figma 242-214=28; leftPct: 223/252≈88.5%
    fadeW: 91,
    fadeH: 138,
    fadeOffsetLeft: "100%" as string,
  },
} as const;

function getStage(tech: boolean, travel: boolean): Stage {
  if (tech) return 0;         // Tech ON → Stage 0 regardless of Travel
  if (!travel) return 2;      // Tech OFF, Travel OFF → Stage 2
  return 1;                   // Tech OFF, Travel ON → Stage 1
}

// ─── Chart SVG (broken-mask stroke fixed for all three stages) ───────────────
// All stages use the same path data; clipWidth controls how much of the curve
// is visible. The broken <mask> export pattern has been replaced with a direct
// fill="none" stroke using a linearGradient.
// Always renders the full 342-wide curve. The card wrapper's animated width and
// GradientGlowCard's overflow:hidden clip the right edge — that's what makes
// the curve appear to retract as the stage shrinks.
function ChartSVG() {
  return (
    <svg
      style={{ position: "absolute", top: 0, left: 0, display: "block", width: "342px", height: "100%" }}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 342 143"
    >
      <path d={CURVE_FILL} fill="url(#fill_c)" />
      <path d={CURVE_STROKE} fill="none" stroke="#0091FF" strokeWidth="1.25" />
      <defs>
        <radialGradient id="fill_c" cx="0" cy="0" r="1" gradientTransform="matrix(258.68 0 0 230.20 396.42 60.61)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="rgba(0,0,0,0)" />
          <stop offset="1" stopColor="#2067D1" />
        </radialGradient>
      </defs>
    </svg>
  );
}
// ─── Toggle Switch ─────────────────────────────────────────────────────────────
function ToggleSwitch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-checked={on}
      role="switch"
      style={{
        background: on ? "#16be76" : "rgba(255,255,255,0.15)",
        width: "56px",
        height: "32px",
        borderRadius: "500px",
        border: "none",
        padding: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: on ? "flex-end" : "flex-start",
        cursor: "pointer",
        flexShrink: 0,
        transition: "background 200ms ease",
      }}
    >
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "500px",
          background: "white",
          boxShadow: "0px 0px 16px 0px rgba(7,7,7,0.24)",
          flexShrink: 0,
        }}
      />
    </button>
  );
}

// ─── Category icon ─────────────────────────────────────────────────────────────
function CategoryIcon({ d }: { d: string }) {
  return (
    <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 24 24">
        <path d={d} fill="#E3E3E3" />
      </svg>
    </div>
  );
}

// ─── Toggle Row ───────────────────────────────────────────────────────────────
function CategoryToggleRow({
  iconPath, label, on, onToggle,
}: {
  iconPath: string; label: string; on: boolean; onToggle: () => void;
}) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.05)",
      height: "64px",
      borderRadius: "var(--radius-lg)",
      border: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      gap: "8px",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: "1 0 0", minWidth: 0 }}>
        <CategoryIcon d={iconPath} />
        <p style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "1.2",
          color: "var(--color-text-primary)",
          whiteSpace: "nowrap",
        }}>
          {label}
        </p>
      </div>
      <ToggleSwitch on={on} onToggle={onToggle} />
    </div>
  );
}

// ─── Required-category warning pill ──────────────────────────────────────────────
// When a required category (Travel) is toggled off, the row expands into this pill
// with the red "Required for this offer" message. The toggle stays interactive so
// the user can turn it back on. Mirrors the CategoryPills design import.
function CategoryWarningPill({
  iconPath, label, on, onToggle,
}: {
  iconPath: string; label: string; on: boolean; onToggle: () => void;
}) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.05)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "16px",
      gap: "4px",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: "1 0 0", minWidth: 0 }}>
          <CategoryIcon d={iconPath} />
          <p style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "1.2",
            color: "var(--color-text-primary)",
            whiteSpace: "nowrap",
          }}>
            {label}
          </p>
        </div>
        <ToggleSwitch on={on} onToggle={onToggle} />
      </div>
      <p style={{
        margin: 0,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "1.5",
        color: "#dd5050",
        width: "248px",
      }}>
        Required for this offer. Keep this category on to receive $1.
      </p>
    </div>
  );
}

// ─── Earning Badge ─────────────────────────────────────────────────────────────
function EarningBadge({ dollars }: { dollars: number }) {
  return (
    <div style={{
      background: "rgba(32,103,209,0.1)",
      border: "1px solid rgba(255,255,255,0.4)",
      borderRadius: "var(--radius-xs)",
      padding: "2px 10px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      <p style={{
        margin: 0,
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "1.5",
        letterSpacing: "-2.4px",
        fontVariationSettings: '"wdth" 100',
        whiteSpace: "nowrap",
      }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: i < dollars ? "#0091FF" : "#3A3A3A" }}>$</span>
        ))}
      </p>
    </div>
  );
}

// ─── Chart Section ─────────────────────────────────────────────────────────────
// No AnimatePresence — card width and dot position animate continuously so the
// curve literally retracts/extends rather than swapping between snapshots.
function EarningChart({ stage }: { stage: Stage }) {
  const cfg = STAGES[stage];
  // Smooth easeOut curve, no spring physics, no bounce.
  const t = { duration: 0.22, ease: [0.4, 0, 0.2, 1] } as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>

      {/* Header row — text is static; invisible badge spacer keeps row height constant */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", lineHeight: "1.5", color: "white", fontVariationSettings: '"wdth" 100' }}>
            Your earning potential.
          </p>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", lineHeight: "1.5", color: "var(--color-text-secondary)", fontVariationSettings: '"wdth" 100' }}>
            More data. More savings.
          </p>
        </div>
        <div style={{ visibility: "hidden", pointerEvents: "none" }}>
          <EarningBadge dollars={5} />
        </div>
      </div>

      {/* Chart area */}
      <div style={{ position: "relative", width: "100%" }}>
        {/* Card wrapper — width animates between stages.
            GradientGlowCard's overflow:hidden clips the fixed-342px SVG,
            so the curve visually retracts to the right as width shrinks. */}
        <motion.div
          animate={{ width: cfg.cardW }}
          transition={t}
          style={{ position: "relative" }}
        >
          <GradientGlowCard>
            <ChartSVG />
          </GradientGlowCard>

          {/* Dot — top slides up/down in sync with card width change */}
          <motion.div
            animate={{ top: cfg.dotTop }}
            transition={t}
            style={{ position: "absolute", right: 0, width: 10, height: 10, pointerEvents: "none" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="5" fill="#0091FF" />
            </svg>
          </motion.div>

          {/* Stage 0 badge: floats above the card in the header gap */}
          <AnimatePresence>
            {stage === 0 && (
              <motion.div
                key="badge-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                style={{ position: "absolute", right: 0, bottom: "calc(100% + 16px)", pointerEvents: "none" }}
              >
                <EarningBadge dollars={5} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage 1 & 2 badge: overlaps card at Figma-exact positions */}
          <AnimatePresence>
            {cfg.badge && (
              <motion.div
                key={`badge-card-${stage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                style={{ position: "absolute", left: cfg.badge.leftPct, top: cfg.badge.top, transform: "translateX(-50%)", pointerEvents: "none" }}
              >
                <EarningBadge dollars={cfg.dollars} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fade / curve-continuation: crossfades between stage-specific shapes */}
          <AnimatePresence>
            <motion.div
              key={`fade-${stage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "absolute",
                left: stage === 0 ? "calc(100% - 1px)" : "100%",
                top: 5,
                pointerEvents: "none",
              }}
            >
              {stage === 0 ? (
                <svg width="2" height="133" viewBox="0 0 2 133" fill="none">
                  <defs>
                    <radialGradient id="vg_s0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 133 -1 0 1 0)">
                      <stop stopColor="#6C6C6C" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="2" height="133" fill="url(#vg_s0)" />
                </svg>
              ) : stage === 1 ? (
                <svg style={{ display: "block", width: 59, height: 138 }} fill="none" viewBox="0 0 59 138" preserveAspectRatio="none">
                  <g clipPath="url(#cfl_s1)">
                    <path d={FADE_FILL_S1} fill="url(#rg_fl_s1)" opacity="0.5" />
                  </g>
                  <defs>
                    <radialGradient id="rg_fl_s1" cx="0" cy="0" gradientTransform="matrix(-79.3915 -99.6415 319.814 -190.36 113.426 55.6125)" gradientUnits="userSpaceOnUse" r="1">
                      <stop stopOpacity="0" /><stop offset="1" stopColor="#6C6C6C" />
                    </radialGradient>
                    <clipPath id="cfl_s1"><rect height="138" width="59" /></clipPath>
                  </defs>
                </svg>
              ) : (
                <svg style={{ display: "block", width: 91, height: 138 }} fill="none" viewBox="0 0 91 138" preserveAspectRatio="none">
                  <g clipPath="url(#cfl_s2)">
                    <path d={FADE_FILL_S2} fill="url(#rg_fl_s2)" opacity="0.5" />
                  </g>
                  <defs>
                    <radialGradient id="rg_fl_s2" cx="0" cy="0" gradientTransform="matrix(-79.3915 -99.6415 319.814 -190.36 145.426 55.6125)" gradientUnits="userSpaceOnUse" r="1">
                      <stop stopOpacity="0" /><stop offset="1" stopColor="#6C6C6C" />
                    </radialGradient>
                    <clipPath id="cfl_s2"><rect height="138" width="91" /></clipPath>
                  </defs>
                </svg>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Data Contributed Label ───────────────────────────────────────────────────
function DataContributedLabel() {
  const deco = (ch: string) => (
    <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "13px", lineHeight: "1.5", color: "var(--color-text-disabled)", fontVariationSettings: '"wdth" 100', flexShrink: 0 }}>
      {ch}
    </p>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%" }}>
      {deco("-")}
      <div style={{ flex: 1, minWidth: 0, height: "1px", position: "relative" }}>
        <LeftDash />
      </div>
      <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", lineHeight: "1.5", color: "white", whiteSpace: "nowrap", fontVariationSettings: '"wdth" 100' }}>
        Data contributed
      </p>
      <div style={{ flex: 1, minWidth: 0, height: "1px", position: "relative" }}>
        <RightDash />
      </div>
      {deco("+")}
    </div>
  );
}

// ─── Main Step Component ──────────────────────────────────────────────────────
const CATEGORIES: { key: string; label: string; path: string }[] = [
  { key: "tech",          label: "Technology & Social Media", path: svgPaths.p813af00 },
  { key: "travel",        label: "Travel & Transportation",   path: svgPaths.p1692f180 },
  { key: "finance",       label: "Finance & Investments",     path: svgPaths.p3ef00b80 },
  { key: "retail",        label: "Retail & Food",             path: svgPaths.pc328900 },
  { key: "health",        label: "Health & Wellness",         path: svgPaths.p2eac9d00 },
  { key: "entertainment", label: "Entertainment & Gaming",    path: svgPaths.p7298e00 },
  { key: "insurance",     label: "Insurance & Utilities",     path: svgPaths.p36b5c480 },
  { key: "civic",         label: "Civic & Government",        path: svgPaths.p324dffc0 },
];

export function DataContributionStep({
  toggles,
  onToggle,
}: {
  toggles: Record<string, boolean>;
  onToggle: (key: string) => void;
}) {
  const techOn   = !!toggles["tech"];
  const travelOn = !!toggles["travel"];
  const stage    = getStage(techOn, travelOn);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
      <EarningChart stage={stage} />

      <DataContributedLabel />

      <p style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "1.2",
        color: "var(--color-text-primary)",
      }}>
        Which types of data would you like to contribute to your Data Savings Plan?
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        {CATEGORIES.map((cat) => {
          // Travel is required for the offer: when it's turned off, the section
          // expands into the warning pill instead of the plain toggle row.
          const isOn = !!toggles[cat.key];
          if (cat.key === "travel" && !isOn) {
            return (
              <CategoryWarningPill
                key={cat.key}
                iconPath={cat.path}
                label={cat.label}
                on={isOn}
                onToggle={() => onToggle(cat.key)}
              />
            );
          }
          return (
            <CategoryToggleRow
              key={cat.key}
              iconPath={cat.path}
              label={cat.label}
              on={isOn}
              onToggle={() => onToggle(cat.key)}
            />
          );
        })}
      </div>
    </div>
  );
}
