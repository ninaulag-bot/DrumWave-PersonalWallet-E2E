import InitialEmail from "@/imports/InitialEmail/index";

interface InitialEmailScreenProps {
  /** Fired when the "View my data certificates" CTA is tapped. */
  onViewCertificates: () => void;
}

// The imported email design is absolutely positioned against a fixed-size frame
// and runs well past the 852px device viewport, so it needs an explicit content
// height inside a vertical scroll area.
const FRAME_W = 390;
const CONTENT_H = 2480;

/**
 * First screen of the "Data request accepted" flow — the notification email
 * telling the user Tesla accepted their data request. Renders the Figma import
 * faithfully inside a scroll area, with a tap target over the hero CTA.
 */
export function InitialEmailScreen({ onViewCertificates }: InitialEmailScreenProps) {
  return (
    <div
      style={{ position: "absolute", inset: 0, overflowY: "auto", overflowX: "hidden", background: "var(--color-bg-base)" }}
      className="[&::-webkit-scrollbar]:hidden"
    >
      <div style={{ position: "relative", width: `${FRAME_W}px`, height: `${CONTENT_H}px`, margin: "0 auto", overflow: "hidden" }}>
        <InitialEmail />

        {/* Transparent tap target over the hero "View my data certificates" button
            (import positions it at top:527.5px, width:331, height:48, centered). */}
        <button
          type="button"
          onClick={onViewCertificates}
          aria-label="View my data certificates"
          style={{
            position: "absolute",
            top: "527.5px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "331px",
            height: "48px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
