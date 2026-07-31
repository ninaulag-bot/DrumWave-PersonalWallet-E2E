/**
 * RingField — 14 concentric border-only rings positioned around an avatar center.
 *
 * The inner rotating div uses rotate(60deg) + transformOrigin:"top left" (screen origin).
 * Each ring's left/top is a pre-rotation coordinate. Without the rotation the rings sit
 * off-canvas; the 60 ° rotation is what brings them into view at (centerX, centerY).
 * Do NOT remove the rotation or change left/top independently of the math below.
 */

// cos(60°) = 0.5, sin(60°) = √3/2
const COS60 = 0.5;
const SIN60 = 0.8660254;

// 14 rings: size (px), opacity, border-blur (px)
const RINGS: { size: number; opacity: number; blur: number }[] = [
  { size:  62, opacity: 0.50, blur: 0   },
  { size:  96, opacity: 0.45, blur: 0   },
  { size: 130, opacity: 0.40, blur: 0   },
  { size: 168, opacity: 0.36, blur: 0   },
  { size: 207, opacity: 0.31, blur: 0.5 },
  { size: 248, opacity: 0.27, blur: 0.5 },
  { size: 290, opacity: 0.22, blur: 1   },
  { size: 333, opacity: 0.18, blur: 1   },
  { size: 378, opacity: 0.15, blur: 1   },
  { size: 424, opacity: 0.12, blur: 1.5 },
  { size: 471, opacity: 0.09, blur: 1.5 },
  { size: 519, opacity: 0.07, blur: 2   },
  { size: 568, opacity: 0.05, blur: 2   },
  { size: 618, opacity: 0.03, blur: 2.5 },
];

interface RingFieldProps {
  /** Avatar center X in the screen's coordinate space (px). */
  centerX: number;
  /** Avatar center Y in the screen's coordinate space (px). */
  centerY: number;
}

export function RingField({ centerX, centerY }: RingFieldProps) {
  // Inverse-rotate (centerX, centerY) by 60° around (0,0) to get each ring's
  // pre-rotation center in the rotated coordinate space.
  // Rotation matrix: [cos60, -sin60; sin60, cos60] applied to screen→pre-rotation:
  //   preCx = centerX·cos60 + centerY·sin60
  //   preCy = -centerX·sin60 + centerY·cos60
  const preCx = centerX * COS60 + centerY * SIN60;
  const preCy = -centerX * SIN60 + centerY * COS60;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "visible",
      }}
    >
      {/* rotate(60deg) from top left = screen origin brings pre-rotation rings into view */}
      <div style={{ transform: "rotate(60deg)", transformOrigin: "top left" }}>
        {RINGS.map(({ size, opacity, blur }, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: preCx - size / 2,
              top: preCy - size / 2,
              width: size,
              height: size,
              borderRadius: "50%",
              border: "1px solid #FF00D9",
              opacity,
              filter: blur > 0 ? `blur(${blur}px)` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}
