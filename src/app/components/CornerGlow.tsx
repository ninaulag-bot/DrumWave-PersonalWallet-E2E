import type { CSSProperties } from "react";

/** Safari: filter:blur children escape overflow+border-radius; clip-path holds them. */
const HOST: CSSProperties = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  overflow: "hidden",
  clipPath: "inset(0)",
  WebkitClipPath: "inset(0)",
};

export function CornerGlow({
  color = "#FFB700",
  glowOpacity = 0.10,
  side = "top-left",
}: {
  color?: string;
  glowOpacity?: number;
  side?: "top-left" | "left" | "top-right" | "center";
}) {
  if (side === "center") {
    return (
      <div style={HOST} aria-hidden>
        {/* Primary glow at top, centered horizontally */}
        <div style={{ position: "absolute", left: "50%", top: -140, transform: "translateX(-50%)", width: 420, height: 420, opacity: glowOpacity, background: color, borderRadius: "9999px", filter: "blur(110px)" }} />
        {/* Softer secondary bloom */}
        <div style={{ position: "absolute", left: "50%", top: -60, transform: "translateX(-50%)", width: 220, height: 220, opacity: glowOpacity * 0.5, background: color, borderRadius: "9999px", filter: "blur(70px)" }} />
      </div>
    );
  }

  if (side === "left") {
    return (
      <div style={HOST} aria-hidden>
        <div style={{ position: "absolute", left: -160, top: "20%", width: 360, height: 360, opacity: glowOpacity, background: color, borderRadius: "9999px", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", left: -120, top: "55%", width: 280, height: 280, opacity: glowOpacity * 0.6, background: color, borderRadius: "9999px", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", left: 120, top: "15%", width: 340, height: 500, opacity: 0.70, background: "var(--color-bg-base)", borderRadius: "9999px", filter: "blur(40px)" }} />
      </div>
    );
  }

  if (side === "top-right") {
    return (
      <div style={HOST} aria-hidden>
        {/* Primary glow anchored to top-right corner */}
        <div style={{ position: "absolute", right: -120, top: -120, width: 380, height: 380, opacity: glowOpacity, background: color, borderRadius: "9999px", filter: "blur(90px)" }} />
        {/* Softer secondary bloom along the top-right */}
        <div style={{ position: "absolute", right: -60, top: -40, width: 260, height: 260, opacity: glowOpacity * 0.5, background: color, borderRadius: "9999px", filter: "blur(70px)" }} />
        {/* Dark mask to keep center/left of screen clean */}
        <div style={{ position: "absolute", right: 140, top: -60, width: 340, height: 400, opacity: 0.70, background: "var(--color-bg-base)", borderRadius: "9999px", filter: "blur(40px)" }} />
      </div>
    );
  }

  // default: top-left
  return (
    <div style={HOST} aria-hidden>
      {/* Primary glow anchored to top-left corner */}
      <div style={{ position: "absolute", left: -120, top: -120, width: 380, height: 380, opacity: glowOpacity, background: color, borderRadius: "9999px", filter: "blur(90px)" }} />
      {/* Softer secondary bloom */}
      <div style={{ position: "absolute", left: -60, top: -40, width: 260, height: 260, opacity: glowOpacity * 0.5, background: color, borderRadius: "9999px", filter: "blur(70px)" }} />
      {/* Dark mask to keep center/right of screen clean */}
      <div style={{ position: "absolute", left: 140, top: -60, width: 340, height: 400, opacity: 0.70, background: "var(--color-bg-base)", borderRadius: "9999px", filter: "blur(40px)" }} />
    </div>
  );
}
