import { ImageWithFallback } from "./figma/ImageWithFallback";
import circlesPng from "@/imports/tesla-certificates-circles.png";

// The Tesla logo in the "Data certs loading" import is a 120px red disc centered
// horizontally with its center at y≈418px in the 390-wide frame. These concentric
// rings sit around that logo; the PNG has a transparent center so the logo shows
// through it. Sized/centered to surround the logo without covering it.
const CIRCLES_W = 360;
const CIRCLES_H = (CIRCLES_W * 483) / 390; // preserve the PNG's 390×483 aspect ratio
const LOGO_CENTER_X = 195;
const LOGO_CENTER_Y = 418;

/** Ambient concentric rings surrounding the Tesla logo on the loading screen. */
export function TeslaCertificatesCircles() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: `${LOGO_CENTER_X}px`,
        top: `${LOGO_CENTER_Y}px`,
        width: `${CIRCLES_W}px`,
        height: `${CIRCLES_H}px`,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      <ImageWithFallback
        src={circlesPng}
        alt="Concentric rings surrounding the Tesla logo"
        className="absolute inset-0 size-full object-contain"
      />
    </div>
  );
}
