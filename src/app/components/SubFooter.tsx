import { DrumWaveLogo } from "@/app/components/DrumWaveLogo";
import cdaLogo from "@/imports/FooterMini/cda-logo.svg";
import divider from "@/imports/FooterMini/divider.svg";

/** Subfooter — Figma "[DEV] BdW / PdW / Footer" node 56:13790 ("Subfooter content").
 *  Replaces the old DrumWave logo + wordmark + large tagline block: the tagline
 *  survives here at 8px, paired with the copyright under the CDA/DW logo row.
 *  Pairs with FooterLinks to form the full footer on the home screens. */

export function SubFooter() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
      {/* CDA mark · divider · DrumWave mark */}
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ height: 26, display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 19, height: 49 }}>
            <img src={cdaLogo} alt="" style={{ width: 24, height: 24, flexShrink: 0 }} />
            <img src={divider} alt="" style={{ width: 1, height: 31, flexShrink: 0 }} />
            <DrumWaveLogo size={24} />
          </div>
        </div>
      </div>

      {/* Tagline · copyright */}
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", color: "#777", fontSize: 8 }}>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.12px",
              whiteSpace: "nowrap",
              marginRight: -1,
              fontVariationSettings: '"wdth" 100',
            }}
          >
            Your Life. Your Story. Your Data.
          </span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, height: 16, lineHeight: "12px", width: 4, textAlign: "center" }}>®</span>
        </div>
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
