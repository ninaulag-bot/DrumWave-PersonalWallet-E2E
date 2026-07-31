import { useEffect, useRef, useState } from "react";

interface RequestDataProgressScreenProps {
  /** Called ~0.8s after the counter reaches 100%. If omitted, the animation loops. */
  onComplete?: () => void;
  /** Total count-up duration in ms (spec: ~4–6s). */
  durationMs?: number;
}

// Disc center in the 393×852 frame (from the Figma export: biggest cluster circles
// center around here).
const CENTER_X = 195;
const CENTER_Y = 382;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Interpolate between two hex colors. Disc color goes from #390631 (dim) → #FF00D9 (full).
const DISC_COLOR_START = { r: 0x39, g: 0x06, b: 0x31 }; // #390631
const DISC_COLOR_END = { r: 0xff, g: 0x00, b: 0xd9 };   // #FF00D9
const discColorAt = (t: number) => {
  const r = Math.round(lerp(DISC_COLOR_START.r, DISC_COLOR_END.r, t));
  const g = Math.round(lerp(DISC_COLOR_START.g, DISC_COLOR_END.g, t));
  const b = Math.round(lerp(DISC_COLOR_START.b, DISC_COLOR_END.b, t));
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * ── EXACT: Central sharp circle cluster (the magenta disc) ──
 * Transcribed 1:1 from the Figma export — absolute coords in the 393×852 frame.
 * Bordered pass first, then solid pass on top (same stacking order as Figma).
 */
type Circle = { size: number; left: number; top: number; rot?: number; border?: boolean };
const DISC_CIRCLES: Circle[] = [
  { size: 53.19, left: 179.49, top: 352.17, border: true },
  { size: 53.19, left: 235.45, top: 397.58, rot: 161, border: true },
  { size: 106.37, left: 143.88, top: 329.51, border: true },
  { size: 26.59, left: 225.28, top: 391.29, rot: 161, border: true },
  { size: 159.56, left: 113.35, top: 301.76, border: true },
  { size: 53.19, left: 235.45, top: 397.58, rot: 161, border: true },
  { size: 53.19, left: 179.49, top: 352.17, border: true },
  { size: 53.19, left: 235.45, top: 397.58, rot: 161, border: true },
  { size: 79.78, left: 164.23, top: 345.92, border: true },
  { size: 79.78, left: 245.63, top: 403.87, rot: 161, border: true },
  { size: 79.78, left: 164.23, top: 345.92, border: true },
  { size: 79.78, left: 245.63, top: 403.87, rot: 161, border: true },
  { size: 79.78, left: 164.22, top: 345.92, border: true },
  { size: 79.78, left: 245.63, top: 403.87, rot: 161, border: true },
  { size: 79.78, left: 164.22, top: 345.92, border: true },
  { size: 79.78, left: 245.63, top: 403.87, rot: 161, border: true },
  { size: 106.37, left: 143.88, top: 329.51, border: true },
  { size: 159.56, left: 296.5, top: 427.83, rot: 161, border: true },
  { size: 159.56, left: 113.35, top: 301.76, border: true },
  { size: 26.59, left: 225.28, top: 391.29, rot: 161, border: true },
  { size: 53.19, left: 179.49, top: 352.17 },
  { size: 53.19, left: 235.45, top: 397.58, rot: 161 },
  { size: 106.37, left: 143.88, top: 329.51 },
  { size: 26.59, left: 225.28, top: 391.29, rot: 161 },
  { size: 77.81, left: 164.22, top: 342.81 },
  { size: 53.19, left: 235.45, top: 397.58, rot: 161 },
  { size: 53.19, left: 179.49, top: 352.17 },
  { size: 53.19, left: 235.45, top: 397.58, rot: 161 },
  { size: 79.78, left: 164.23, top: 345.92 },
  { size: 79.78, left: 245.63, top: 403.87, rot: 161 },
  { size: 79.78, left: 164.23, top: 345.92 },
  { size: 79.78, left: 245.63, top: 403.87, rot: 161 },
  { size: 79.78, left: 164.22, top: 345.92 },
  { size: 79.78, left: 245.63, top: 403.87, rot: 161 },
  { size: 79.78, left: 164.22, top: 345.92 },
  { size: 79.78, left: 245.63, top: 403.87, rot: 161 },
  { size: 106.37, left: 143.88, top: 329.51 },
  { size: 159.56, left: 296.5, top: 427.83, rot: 161 },
  { size: 116.72, left: 138.79, top: 324.25 },
  { size: 26.59, left: 225.28, top: 391.29, rot: 161 },
];

function DiscCluster({ color }: { color: string }) {
  return (
    <>
      {DISC_CIRCLES.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${c.size}px`,
            height: `${c.size}px`,
            left: `${c.left}px`,
            top: `${c.top}px`,
            background: color,
            borderRadius: 9999,
            ...(c.border ? { border: `9.73px solid ${color}` } : {}),
            ...(c.rot ? { transform: `rotate(${c.rot}deg)`, transformOrigin: "top left" } : {}),
          }}
        />
      ))}
    </>
  );
}

/** ── EXACT: soft blurred halo behind the disc (verbatim from the import's <Group>). */
function GlowHalo() {
  return (
    <div className="absolute flex items-center justify-center left-[93.62px] size-[202.877px] top-[277px]">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[202.877px]">
          <div className="absolute inset-[-86.74%_-85.22%_-85.22%_-86.16%]">
            <svg className="block size-full" fill="none" height="551.734" preserveAspectRatio="none" viewBox="0 0 550.566 551.734" width="550.566">
              <g filter="url(#filter_charge_halo)">
                <circle cx="287.257" cy="277.082" fill="#FF00D9" r="21.7302" stroke="#FF00D9" strokeWidth="9.72631" />
                <circle cx="282.814" cy="274.724" fill="#FF00D9" r="21.7302" stroke="#FF00D9" strokeWidth="9.72631" transform="rotate(160.964 282.814 274.724)" />
                <circle cx="278.238" cy="273.15" fill="#FF00D9" r="48.3235" stroke="#FF00D9" strokeWidth="9.72631" />
                <circle cx="289.545" cy="272.781" fill="#FF00D9" r="8.43352" stroke="#FF00D9" strokeWidth="9.72631" transform="rotate(160.964 289.545 272.781)" />
                <circle cx="274.306" cy="274.306" fill="#FF00D9" r="74.9169" stroke="#FF00D9" strokeWidth="9.72631" />
                <circle cx="285.294" cy="270.029" fill="#FF00D9" r="35.0269" stroke="#FF00D9" strokeWidth="9.72631" />
                <circle cx="276.082" cy="276.666" fill="#FF00D9" r="35.0269" stroke="#FF00D9" strokeWidth="9.72631" transform="rotate(160.964 276.082 276.666)" />
                <circle cx="274.306" cy="274.306" fill="#FF00D9" r="74.9169" stroke="#FF00D9" strokeWidth="9.72631" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="551.733" id="filter_charge_halo" width="550.566" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="97.2631" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/** ── EXACT: three concentric ring outlines (bottom of frame). */
function ConcentricRings() {
  const ring: React.CSSProperties = {
    position: "absolute",
    opacity: 0.2,
    borderRadius: 9999,
    border: "1px solid #FF00D9",
    pointerEvents: "none",
  };
  return (
    <>
      <div style={{ ...ring, width: 646, height: 646, left: -126, top: 625 }} />
      <div style={{ ...ring, width: 840, height: 840, left: -223, top: 471 }} />
      <div style={{ ...ring, width: 1076, height: 1076, left: -341, top: 235 }} />
    </>
  );
}

/** Minimal status bar (9:41 + glyphs). */
function StatusBar() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "54px", paddingTop: "21px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "21px 20px 0", zIndex: 20 }}>
      <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "17px", color: "white" }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <div style={{ width: "18px", height: "12px", background: "white", clipPath: "polygon(0 100%,20% 60%,20% 100%,40% 40%,40% 100%,60% 25%,60% 100%,80% 10%,80% 100%,100% 0,100% 100%)" }} />
        <div style={{ width: "17px", height: "12px", borderRadius: "2px", background: "white", opacity: 0.9 }} />
        <div style={{ width: "24px", height: "12px", borderRadius: "3px", border: "1px solid white", position: "relative" }}>
          <div style={{ position: "absolute", inset: "2px", right: "4px", background: "white", borderRadius: "1px" }} />
        </div>
      </div>
    </div>
  );
}

export function RequestDataProgressScreen({ onComplete, durationMs = 5000 }: RequestDataProgressScreenProps) {
  const [percent, setPercent] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const holdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / durationMs, 1);
      setPercent(easeInOutCubic(t) * 100);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        holdRef.current = setTimeout(() => {
          if (onComplete) {
            onComplete();
          } else {
            startRef.current = null;
            setPercent(0);
            rafRef.current = requestAnimationFrame(tick);
          }
        }, 800);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (holdRef.current !== null) clearTimeout(holdRef.current);
    };
  }, [durationMs, onComplete]);

  const p = percent / 100;
  const display = Math.round(percent);

  // The soft halo charges up (dim → bright) with progress; the sharp disc stays solid
  // but gains a little brightness/scale.
  const haloStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    opacity: lerp(0.1, 0.85, p),
    transform: `scale(${lerp(0.82, 1.06, p)})`,
    transformOrigin: `${CENTER_X}px ${CENTER_Y}px`,
    // Ramp saturation up to full (1.0) but never brighten past 1.0 — the peak color
    // stays exactly #FF00D9, never lighter.
    filter: `saturate(${lerp(0.6, 1.0, p)}) brightness(${lerp(0.85, 1.0, p)})`,
    pointerEvents: "none",
    zIndex: 6,
  };
  const discStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    transform: `scale(${lerp(0.96, 1.02, p)})`,
    transformOrigin: `${CENTER_X}px ${CENTER_Y}px`,
    pointerEvents: "none",
    zIndex: 7,
  };
  // Disc fill interpolates #390631 (0%) → #FF00D9 (100%).
  const discColor = discColorAt(p);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#070707" }}>
      {/* EXACT: concentric rings */}
      <ConcentricRings />

      {/* EXACT: soft blurred halo (animated brightness) */}
      <div style={haloStyle}>
        <GlowHalo />
      </div>

      {/* EXACT: sharp magenta disc cluster (color ramps #390631 → #FF00D9) */}
      <div style={discStyle}>
        <DiscCluster color={discColor} />
      </div>

      {/* EXACT: bottom-center magenta glow (box-shadow technique) */}
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          left: 192.18,
          top: 851.82,
          background: "rgba(7,7,7,0.01)",
          boxShadow: "0px -20px 200px 140px rgba(255, 0, 217, 0.20)",
          borderRadius: 212.12,
          pointerEvents: "none",
          zIndex: 4,
        }}
      />

      {/* Percentage + label, centered on the disc (exact fonts/positions). */}
      <div style={{ position: "absolute", width: 172, left: 111, top: 328, textAlign: "center", zIndex: 12 }}>
        <p style={{ margin: 0, fontFamily: "var(--font-family-primary)", fontWeight: 400, fontSize: "48px", lineHeight: 1.2, color: "white" }}>{display}%</p>
      </div>
      <div style={{ position: "absolute", width: 172, left: 111, top: 389, textAlign: "center", color: "white", fontFamily: "var(--font-family-primary)", fontWeight: 400, fontSize: "24px", lineHeight: 1.2, zIndex: 12 }}>
        Uploading
      </div>

      {/* Status bar */}
      <StatusBar />

      {/* Back arrow (top-left, Figma: top 69 left 24) */}
      <div style={{ position: "absolute", top: 69, left: 24, width: 24, height: 24, zIndex: 20 }}>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ display: "block" }}>
          <path d="M10 1 L2 10 L10 19" stroke="#E3E3E3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Home indicator */}
      <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 144, height: 5, borderRadius: 100, background: "white", zIndex: 20 }} />
    </div>
  );
}