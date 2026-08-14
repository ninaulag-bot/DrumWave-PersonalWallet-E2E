import successGlow from "@/imports/DataRequestSuccessDialog/data-request-success.png";

/** "Congratulations!" data-request confirmation dialog — Figma 207:48122.
 *  Shown over the Request data screen when a Travel & Transportation company
 *  row is tapped; `company` is whichever row opened it. The Figma frame is 454
 *  wide (390 content + 32 side padding); in the 390 phone frame the card is
 *  inset 16px a side, so the body copy wraps rather than keeping the design's
 *  baked line breaks. */
export function DataRequestSuccessDialog({ company, onDone, onClose }: { company: string; onDone?: () => void; onClose?: () => void }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 300,
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "calc(100% - 32px)",
          background: "#1d1d1d",
          borderRadius: 24,
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
          padding: "24px 24px 40px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Close row */}
        <div style={{ width: "100%", height: 40, display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="var(--color-text-white)" />
            </svg>
          </button>
        </div>

        {/* Glow badge — sits 32px up under the close row, per the design */}
        <div style={{ width: 300, height: 213, marginTop: -32, flexShrink: 0 }}>
          <img src={successGlow} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>

        <p
          style={{
            margin: "-16px 0 0",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "24px",
            color: "var(--color-text-primary)",
            textAlign: "center",
          }}
        >
          Congratulations!
        </p>

        <p
          style={{
            margin: "24px 0 0",
            width: "100%",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: "var(--color-text-primary)",
          }}
        >
          You have authorized DrumWave to send a data request to{" "}
          <span style={{ fontWeight: 700 }}>{company}</span> on your behalf. Once
          accepted, your data will be certified and linked to your Personal
          dWallet—making it eligible for inclusion in the Data Savings Plan of
          your choice.
        </p>

        <button
          type="button"
          onClick={onDone}
          style={{
            marginTop: 24,
            width: "100%",
            minHeight: 48,
            padding: "12px 24px",
            boxSizing: "border-box",
            background: "var(--color-text-white)",
            border: "none",
            borderRadius: 500,
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "24px",
            color: "var(--color-text-inverse)",
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}
