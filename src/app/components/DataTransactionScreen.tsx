import { StatusBar } from "./ui/StatusBar";
import dataDollarPaths from "@/imports/Frame2095588102/svg-n24lup08st";

/**
 * Transaction detail — Figma 9:94266. Opened by the Tesla Model 3 (+Ð 0.08) row
 * on the Data Balance screen.
 *
 * Label/value rows use the same treatment as the Customer Profile screen
 * (Titillium Regular 16px, #999 label / white value, #222 divider). Like the
 * Data Balance frame, this one has no bottom nav.
 */

const BACK = "M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z";

const DETAILS = [
  { label: "Product purchased on", value: "Feb 1, 2026" },
  { label: "Data contributed to", value: "dSavings smart" },
  { label: "Data contributed on", value: "March 1, 2026" },
  { label: "Business dWallet ID", value: "455TCVS1.2107" },
  { label: "dSKU", value: "455TCVS1.2107" },
];

export function DataTransactionScreen({ onBack }: { onBack?: () => void }) {
  const tw = { fontFamily: "var(--font-display)" };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "var(--color-bg-base)", overflow: "hidden" }}>
      <StatusBar />

      {/* Nav */}
      <div style={{ position: "absolute", top: 70, left: "50%", transform: "translateX(-50%)", width: 342, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d={BACK} fill="var(--color-text-white)" />
          </svg>
        </button>
        <p style={{ ...tw, flex: 1, textAlign: "center", fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-white)", margin: 0 }}>Tesla Model 3</p>
        <div style={{ width: 24, height: 24, flexShrink: 0 }} />
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }} className="[&::-webkit-scrollbar]:hidden">
        <div style={{ paddingTop: 138, paddingBottom: "var(--space-10)" }}>

          {/* Amount */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-1)" }}>
            <span style={{ ...tw, fontWeight: 400, fontSize: 48, lineHeight: 1.2, color: "#00FF91" }}>+</span>
            <div style={{ position: "relative", width: 48, height: 48, overflow: "hidden", flexShrink: 0 }}>
              <div style={{ position: "absolute", left: "16.67%", right: "20.83%", top: "50%", transform: "translateY(-50%)", aspectRatio: "8 / 9.7508707" }}>
                <svg style={{ display: "block", width: "100%", height: "100%" }} fill="none" viewBox="0 0 10 12.1886" preserveAspectRatio="none">
                  <path d={dataDollarPaths.p38abf380} fill="#00FF91" />
                  <path d={dataDollarPaths.p324e1220} fill="#00FF91" />
                </svg>
              </div>
            </div>
            <span style={{ ...tw, fontWeight: 400, fontSize: 48, lineHeight: 1.2, color: "#00FF91" }}>0.08</span>
          </div>

          {/* Data contributed */}
          <p style={{ ...tw, margin: 0, padding: "0 24px", marginTop: "var(--space-12)", fontWeight: 400, fontSize: 24, lineHeight: 1.2, color: "var(--color-text-primary)" }}>Data contributed</p>

          <div style={{ margin: "var(--space-5) 24px 0" }}>
            {DETAILS.map(row => (
              <div key={row.label} style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", borderBottom: "1px solid #222" }}>
                <span style={{ ...tw, fontWeight: 400, fontSize: "var(--text-body-lg-size)", lineHeight: 1.2, color: "var(--color-text-secondary)" }}>{row.label}</span>
                <span style={{ ...tw, fontWeight: 400, fontSize: "var(--text-body-lg-size)", lineHeight: 1.2, color: "var(--color-text-white)", whiteSpace: "nowrap" }}>{row.value}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Home indicator — the frame's only bottom chrome */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: 8, width: 144, height: 5, borderRadius: 100, background: "var(--color-text-white)" }} />
    </div>
  );
}
