import dataSavingsPhoto from "@/imports/datasavingsplan.png";

/**
 * "Apply for a Data Savings Plan" card from the "What happens next?" row.
 * Extracted verbatim from DashboardScreenNoDsp so MyDataSavingsScreen can reuse
 * it instead of adding a 4th copy — the Figma "Not enrolled" frame uses this
 * card unchanged. The sibling cards in each dashboard's row differ per screen,
 * so only this one is shared.
 */
export function ApplyForDspCard({ onApply }: { onApply?: () => void }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: "265px",
        height: "184px",
        borderRadius: "var(--radius-lg)",
        background:
          "linear-gradient(90deg, rgba(18,53,193,0.40) 0%, rgba(43,100,225,0) 100%), #181818",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "24px 63px 31px 23px",
        boxSizing: "border-box",
      }}
    >
      {/* Photo — right side, with fade overlays */}
      <img
        src={dataSavingsPhoto}
        alt=""
        style={{
          position: "absolute",
          width: "212px",
          height: "188px",
          right: 0,
          top: 0,
        }}
      />

      {/* Text + button */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--mobile-heading-small-font-family)",
              fontWeight: "var(--mobile-heading-small-font-weight)" as React.CSSProperties["fontWeight"],
              fontSize: "var(--mobile-heading-small-font-size)",
              lineHeight: "var(--mobile-heading-small-line-height)",
              color: "var(--color-text-primary)",
            }}
          >
            Apply for a Data Savings Plan
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              margin: 0,
              opacity: 0.8,
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "16.8px",
              color: "var(--color-text-primary)",
            }}
          >
            Contribute data. Earn offers.
          </p>
        </div>
        <button
          onClick={onApply}
          style={{
            background: "var(--color-action-primary-bg)",
            border: "none",
            borderRadius: "60px",
            padding: "6px 19px",
            height: "40px",
            width: "151px",
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "18px",
            color: "var(--color-action-primary-text)",
            alignSelf: "flex-start",
          }}
        >
          Apply now
        </button>
      </div>
    </div>
  );
}
