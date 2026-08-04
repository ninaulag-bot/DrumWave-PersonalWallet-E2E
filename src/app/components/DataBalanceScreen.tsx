import { StatusBar } from "./ui/StatusBar";
import dataDollarPaths from "@/imports/Frame2095588102/svg-n24lup08st";

/**
 * Data Balance — Figma 9:94403. Opened by the Data balance card on the savings
 * plan screen in the View Data Certificates flow.
 *
 * The frame has no bottom nav (home indicator only), so this screen doesn't
 * render one either. The cash-balance equivalent (CashBalanceUSScreen) is a
 * different design — an empty state with "Add payout method" and "Recent
 * activity" — so there was nothing to reuse but the data-dollar glyph.
 */

const BACK = "M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z";

const TRANSACTIONS = [
  {
    month: "March 2026",
    /* Only the Tesla row has a detail frame (Figma 9:94266); Uber has none, so
       it stays untapped rather than reusing Tesla's numbers. */
    rows: [{ name: "Tesla Model 3", value: "0.08", meta: "Tesla | W9SVSRT.5235", opensDetail: true }],
  },
  {
    month: "February 2026",
    rows: [{ name: "Uber Rideshare", value: "0.55", meta: "Uber | W9SVSRT.5235", opensDetail: false }],
  },
];

/** DrumWave data-dollar mark, sized to the text it sits beside. */
function DataDollar({ size, fill = "white" }: { size: number; fill?: string }) {
  return (
    <div style={{ position: "relative", width: size, height: size, overflow: "hidden", flexShrink: 0 }}>
      <div style={{ position: "absolute", left: "16.67%", right: "20.83%", top: "50%", transform: "translateY(-50%)", aspectRatio: "8 / 9.7508707" }}>
        <svg style={{ display: "block", width: "100%", height: "100%" }} fill="none" viewBox="0 0 10 12.1886" preserveAspectRatio="none">
          <path d={dataDollarPaths.p38abf380} fill={fill} />
          <path d={dataDollarPaths.p324e1220} fill={fill} />
        </svg>
      </div>
    </div>
  );
}

export function DataBalanceScreen({ onBack, onTransaction }: { onBack?: () => void; onTransaction?: () => void }) {
  const tw = { fontFamily: "var(--font-display)" };
  const os = { fontFamily: "var(--font-body)", fontVariationSettings: '"wdth" 100' } as React.CSSProperties;

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
        <p style={{ ...tw, flex: 1, textAlign: "center", fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-white)", margin: 0 }}>Data Balance</p>
        <div style={{ width: 24, height: 24, flexShrink: 0 }} />
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }} className="[&::-webkit-scrollbar]:hidden">
        <div style={{ paddingTop: 138, paddingBottom: "var(--space-10)" }}>

          {/* Balance */}
          <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <p style={{ ...os, margin: 0, fontSize: "var(--text-body-lg-size)", lineHeight: 1.2, color: "var(--color-text-secondary)" }}>Data Balance</p>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
              <DataDollar size={48} />
              <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 48, lineHeight: 1.2, color: "var(--color-text-white)" }}>1.25</p>
            </div>
            <p style={{ ...os, margin: 0, marginTop: "var(--space-3)", fontSize: "var(--text-body-md-size)", lineHeight: 1.5, color: "var(--color-text-secondary)" }}>The value generated from your contributed data</p>
          </div>

          {/* Transactions */}
          <p style={{ ...tw, margin: 0, padding: "0 24px", marginTop: "var(--space-12)", fontWeight: 400, fontSize: 24, lineHeight: 1.2, color: "var(--color-text-primary)" }}>Transactions</p>

          <div style={{ marginTop: "var(--space-5)" }}>
            {TRANSACTIONS.map(group => (
              <div key={group.month}>
                <p style={{ ...os, margin: 0, padding: "0 24px", fontSize: "var(--text-body-md-size)", lineHeight: 1.5, color: "var(--color-text-secondary)" }}>{group.month}</p>
                {group.rows.map(row => (
                  <div
                    key={row.name}
                    onClick={row.opensDetail ? onTransaction : undefined}
                    style={{ margin: "0 24px", padding: "var(--space-2) 0 var(--space-4)", borderBottom: "1px solid #222", cursor: row.opensDetail && onTransaction ? "pointer" : undefined }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
                      <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", lineHeight: 1.2, color: "var(--color-text-white)" }}>{row.name}</span>
                      <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                        <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", lineHeight: 1.2, color: "#00FF91" }}>+</span>
                        <DataDollar size={16} fill="#00FF91" />
                        <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", lineHeight: 1.2, color: "#00FF91" }}>{row.value}</span>
                      </div>
                    </div>
                    <p style={{ ...os, margin: 0, marginTop: "var(--space-2)", fontSize: "var(--text-body-md-size)", lineHeight: 1.5, color: "#666" }}>{row.meta}</p>
                  </div>
                ))}
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
