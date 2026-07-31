import type { CSSProperties } from "react";

interface TabGlowProps {
  /** Bright color ellipse */
  glowColor: string;
  glowOpacity: number;
  glowSize: number;
  glowLeft: number;
  glowTop: number;
  /** First dark #070707 masking ellipse */
  mask1Size: number;
  mask1Left: number;
  mask1Top: number;
  /** Second dark #070707 masking ellipse */
  mask2Size: number;
  mask2Left: number;
  mask2Top: number;
  zIndex?: number;
}

/**
 * Reusable background glow effect.
 * Structure: one bright blurred color ellipse + two dark #070707 masking ellipses
 * layered on top that carve the fade shape.
 */
export function TabGlow({
  glowColor,
  glowOpacity,
  glowSize,
  glowLeft,
  glowTop,
  mask1Size,
  mask1Left,
  mask1Top,
  mask2Size,
  mask2Left,
  mask2Top,
  zIndex = 3,
}: TabGlowProps) {
  const base: CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
  };

  return (
    <>
      {/* Bright glow ellipse */}
      <div
        style={{
          ...base,
          left: glowLeft,
          top: glowTop,
          width: glowSize,
          height: glowSize,
          background: glowColor,
          opacity: glowOpacity,
          filter: "blur(75px)",
          zIndex,
        }}
      />
      {/* Dark masking ellipse 1 */}
      <div
        style={{
          ...base,
          left: mask1Left,
          top: mask1Top,
          width: mask1Size,
          height: mask1Size,
          background: "#070707",
          opacity: 0.6,
          filter: "blur(25px)",
          zIndex,
        }}
      />
      {/* Dark masking ellipse 2 */}
      <div
        style={{
          ...base,
          left: mask2Left,
          top: mask2Top,
          width: mask2Size,
          height: mask2Size,
          background: "#070707",
          opacity: 0.6,
          filter: "blur(25px)",
          zIndex,
        }}
      />
    </>
  );
}
