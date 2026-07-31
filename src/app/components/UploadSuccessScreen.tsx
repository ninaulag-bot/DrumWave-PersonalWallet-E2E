import Success from "@/imports/Success/index";

/** Authored frame size from Figma (node 361:117614). */
const FRAME_W = 390;
const FRAME_H = 1095;

/** Continue button geometry, authored values from Figma. */
const BTN = { left: 24, top: 1002, width: 342, height: 48 };

interface UploadSuccessScreenProps {
  /** Fired when the user taps "Continue". */
  onContinue?: () => void;
}

/** "You're all set" success screen. The Success import is authored at
 *  390×1095 — taller than the viewport — so it renders at 1:1 inside a
 *  vertical scroll container rather than being scaled down (scaling
 *  letterboxes it and leaves a visible seam at the stage edge). */
export function UploadSuccessScreen({ onContinue }: UploadSuccessScreenProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        overflowX: "hidden",
        background: "#070707",
        scrollbarWidth: "none",
      }}
      className="[&::-webkit-scrollbar]:hidden"
    >
      {/* Fixed-size canvas at authored dimensions — never width/height 100%,
          or the geometry inside distorts. */}
      <div
        style={{
          position: "relative",
          width: `${FRAME_W}px`,
          height: `${FRAME_H}px`,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Success />

        {/* Transparent tap-target over the imported "Continue" button. */}
        <button
          type="button"
          onClick={onContinue}
          aria-label="Continue"
          style={{
            position: "absolute",
            left: `${BTN.left}px`,
            top: `${BTN.top}px`,
            width: `${BTN.width}px`,
            height: `${BTN.height}px`,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 5,
          }}
        />
      </div>
    </div>
  );
}