import { StatusBar } from "./ui/StatusBar";
import { MainBottomNav } from "./MainBottomNav";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import dataDollarPaths from "@/imports/Frame2095588102/svg-n24lup08st";
import teslaMotorsLogo from "@/imports/tesla-motors-loading.png";
import ringsPng from "@/imports/tesla-certificates-circles.png";
import model3Img from "@/imports/DataCertsSuccess/58fa28d3afb64afb3af10674263f1f23970861cf.png";
import fullSelfDrivingImg from "@/imports/DataCertsSuccess/f3855eeaf675891208a6a8b617dc84d96cce491d.png";
import solarImg from "@/imports/tesla-solar-roof.png";

/**
 * Tesla company page — Figma 9:6610. Opened by the Tesla row on the Accepted tab
 * of My data requests in the View Data Certificates flow.
 *
 * Hand-built rather than imported: this frame has no baked export in the repo.
 * The pieces it shares with existing screens are reused — StatusBar,
 * MainBottomNav, the rings PNG from the certs loading screen, the Model 3 and
 * Full Self-Driving photos from DataCertsSuccess, and the DrumWave data-dollar
 * glyph from the Frame2095588102 export (which is the baked version of this
 * frame's "My products & services" row).
 *
 * The product row values below — heading sizes, #666 date text, the #222 row
 * divider, pb-24 — come from that baked export, so this list matches the one on
 * the certificate detail screen.
 */

const BACK = "M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z";

/* Exported Figma vector (22×21) — the "Matched on" verified seal. */
const SEAL =
  "M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM8.45 18.45L11 17.35L13.6 18.45L15 16.05L17.75 15.4L17.5 12.6L19.35 10.5L17.5 8.35L17.75 5.55L15 4.95L13.55 2.55L11 3.65L8.4 2.55L7 4.95L4.25 5.55L4.5 8.35L2.65 10.5L4.5 12.6L4.25 15.45L7 16.05L8.45 18.45ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z";

const products = [
  { name: "Model 3 2026", meta: "Matched on [date]", value: "0.50", img: model3Img },
  { name: "Full Self-Driving Subscription", meta: "Matched on [date]", value: "0.50", img: fullSelfDrivingImg },
  { name: "Solar", meta: "Uploaded on [date]", value: "0.25", img: solarImg },
];

/** DrumWave data-dollar mark — same 16px treatment as the baked product rows. */
function DataDollar({ size = 16 }: { size?: number }) {
  return (
    <div style={{ position: "relative", width: size, height: size, overflow: "hidden", flexShrink: 0 }}>
      <div style={{ position: "absolute", left: "16.67%", right: "20.83%", top: "50%", transform: "translateY(-50%)", aspectRatio: "8 / 9.7508707" }}>
        <svg style={{ display: "block", width: "100%", height: "100%" }} fill="none" viewBox="0 0 10 12.1886" preserveAspectRatio="none">
          <path d={dataDollarPaths.p38abf380} fill="white" />
          <path d={dataDollarPaths.p324e1220} fill="white" />
        </svg>
      </div>
    </div>
  );
}

export function TeslaDataJourneyScreen({ onBack, onHome, onMyData, onViewCertificates, onSavingsPlan, onOffers }: { onBack?: () => void; onHome?: () => void; onMyData?: () => void; onViewCertificates?: () => void; onSavingsPlan?: () => void; onOffers?: () => void }) {
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
        {/* Spacer where the nav title used to sit — the name already appears
            under the brand disc below, so the header carries just the arrow. */}
        <div style={{ flex: 1 }} />
        <div style={{ width: 24, height: 24, flexShrink: 0 }} />
      </div>

      {/* Scrollable content */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 72, overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }} className="[&::-webkit-scrollbar]:hidden">
        <div style={{ paddingTop: 118, paddingBottom: "var(--space-10)", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Hero — rings behind a 140px brand disc */}
          <div style={{ position: "relative", width: 390, height: 240, flexShrink: 0 }}>
            <ImageWithFallback
              src={ringsPng}
              alt=""
              aria-hidden
              style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 360, height: (360 * 483) / 390, objectFit: "contain", pointerEvents: "none" }}
            />
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 140, height: 140, borderRadius: "var(--radius-full)", background: "#e82127", overflow: "hidden" }}>
              <ImageWithFallback
                src={teslaMotorsLogo}
                alt="Tesla"
                style={{ position: "absolute", left: "calc(50% - 1px)", top: "calc(50% + 5px)", transform: "translate(-50%, -50%)", width: 64, height: 62, objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Name + matched badge + subtitle */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", marginTop: "var(--space-6)" }}>
            <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 32, lineHeight: 1.2, color: "var(--color-text-white)" }}>Tesla</p>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", height: 32, padding: "0 var(--space-3)", borderRadius: "var(--radius-full)", border: "1px solid var(--color-border-subtle)" }}>
              <svg width="16" height="15.27" viewBox="0 0 22 21" fill="none" style={{ flexShrink: 0 }}>
                <path d={SEAL} fill="#E3E3E3" />
              </svg>
              <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-body-md-size)", color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>Matched on May 14, 2026</span>
            </div>
            <p style={{ ...os, margin: 0, fontSize: "var(--text-body-lg-size)", lineHeight: 1.5, color: "var(--color-text-secondary)" }}>Your Tesla data journey</p>
          </div>

          {/* Stat tiles */}
          <div style={{ width: 342, display: "flex", gap: "var(--space-2)", marginTop: "var(--space-8)" }}>
            <div style={{ flex: 1, height: 88, borderRadius: 12, border: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 32, lineHeight: 1.2, color: "var(--color-text-white)" }}>5</p>
              <p style={{ ...os, margin: 0, fontSize: "var(--text-body-md-size)", lineHeight: 1.2, color: "var(--color-text-secondary)" }}>Certificates</p>
            </div>
            <div style={{ flex: 1, height: 88, borderRadius: 12, border: "1px solid var(--color-border-subtle)", padding: "var(--space-4)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                <DataDollar size={26} />
                <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 32, lineHeight: 1.2, color: "var(--color-text-white)" }}>1.25</p>
              </div>
              <p style={{ ...os, margin: 0, fontSize: "var(--text-body-md-size)", lineHeight: 1.2, color: "var(--color-text-secondary)" }}>Total data value</p>
            </div>
          </div>

          {/* My products & services */}
          <div style={{ width: 342, display: "flex", flexDirection: "column", gap: "var(--space-2)", marginTop: "var(--space-10)" }}>
            {/* 24px, not --text-heading-lg-size (20px) — matches the baked export's text-[24px] */}
            <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 24, lineHeight: 1.2, color: "var(--color-text-primary)" }}>My products &amp; services</p>
            <p style={{ ...os, margin: 0, fontSize: "var(--text-body-md-size)", lineHeight: 1.5, color: "var(--color-text-secondary)" }}>Products and services associated with this data certificate</p>
          </div>

          {/* Product rows — dividers run full-bleed, content stays on the 24px gutter */}
          <div style={{ width: "100%", marginTop: "var(--space-6)" }}>
            {products.map(p => (
              <div key={p.name} style={{ padding: "var(--space-6) 24px", borderBottom: "1px solid #222", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)", minWidth: 0 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "var(--radius-full)", overflow: "hidden", flexShrink: 0 }}>
                    <ImageWithFallback src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", justifyContent: "center", minWidth: 0 }}>
                    <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", lineHeight: 1.2, color: "var(--color-text-white)" }}>{p.name}</span>
                    <span style={{ ...os, fontSize: "var(--text-body-md-size)", lineHeight: 1.5, color: "#666" }}>{p.meta}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", paddingTop: 2, flexShrink: 0 }}>
                  <DataDollar />
                  <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", lineHeight: 1.2, color: "var(--color-text-white)" }}>{p.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* View my data certificates */}
          <div style={{ width: 342, marginTop: "var(--space-6)" }}>
            <button
              type="button"
              onClick={onViewCertificates}
              style={{ width: "100%", height: 48, borderRadius: "var(--radius-full)", background: "var(--color-text-white)", border: "0.911px solid var(--color-text-white)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "#090908" }}>View my data certificates</span>
            </button>
          </div>

        </div>
      </div>

      {/* Persistent bottom nav */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="home" onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
      </div>
    </div>
  );
}
