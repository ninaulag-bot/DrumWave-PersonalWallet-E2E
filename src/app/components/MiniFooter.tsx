import { DrumWaveLogo } from "@/app/components/DrumWaveLogo";
import cdaLogo from "@/imports/FooterMini/cda-logo.svg";
import divider from "@/imports/FooterMini/divider.svg";

/** Mini footer — Figma "[DEV] BdW / PdW / Footer" node 56:15074 ("390 pDW mini").
 *  Sits at the end of a screen's scrolling content, so it is scrolled to rather
 *  than pinned. The home screens use the larger FooterLinks accordion instead. */

const LINKS = [
  { label: "DrumWave.com", underline: false },
  { label: "Privacy Policy", underline: true },
  { label: "Security", underline: true },
  { label: "Terms & Conditions", underline: false },
];

export function MiniFooter() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        background: "#070707",
        marginTop: "auto",
        padding: "110px 24px 0",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        alignItems: "flex-start",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", justifyContent: "center" }}>
        {/* CDA mark · divider · DrumWave mark */}
        <div style={{ position: "relative", zIndex: 1, height: 26, display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 19, height: 49 }}>
            <img src={cdaLogo} alt="" style={{ width: 24, height: 24, flexShrink: 0 }} />
            <img src={divider} alt="" style={{ width: 1, height: 31, flexShrink: 0 }} />
            <DrumWaveLogo size={24} />
          </div>
        </div>

        {/* Link row — wraps within 380px */}
        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 380, marginLeft: -5, display: "flex", flexWrap: "wrap", alignItems: "flex-start", alignContent: "flex-start", gap: 0 }}>
          {LINKS.map(link => (
            <div key={link.label} style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 5px", boxSizing: "border-box", flexShrink: 0 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 12,
                  lineHeight: 1.5,
                  letterSpacing: "-0.132px",
                  color: "#b8b8b8",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  textDecoration: link.underline ? "underline" : "none",
                }}
              >
                {link.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright, right-aligned */}
      <div style={{ width: "100%", height: 25, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 8,
            lineHeight: "12.029px",
            color: "#777",
            fontVariationSettings: '"wdth" 100',
          }}
        >
          DrumWave © 2026
        </span>
      </div>
    </div>
  );
}
