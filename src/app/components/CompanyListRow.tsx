import { ImageWithFallback } from "./figma/ImageWithFallback";
import { type Company, formatCompanyStatus } from "@/app/data/certificates";

/**
 * Avatar + name + status + right chevron row.
 *
 * New shared component — the audit found no existing avatar/list-row to reuse
 * (CompanyLogos only carries Claro/Mastercard/Nubank/Vivo marks, none of which
 * appear here). Values below are literal from the Figma dev-mode spec.
 */

const AVATAR = 40;

/**
 * Circular company avatar. Three states, all specified by the design itself:
 *  1. logoSrc      → the real exported brand mark
 *  2. brandColor   → brand-coloured circle with the initial (used for Tesla)
 *  3. neither      → the design's own #414141 placeholder ("Company 4"/"Company 5")
 *
 * Brand marks are never drawn by hand — if a real Tesla/Uber/Rivian vector is
 * exported from Figma later, set `logoSrc` and it takes over with no other change.
 */
export function CompanyAvatar({ company, size = AVATAR }: { company: Company; size?: number }) {
  const shared: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%", // Figma exports 60.58 / 156.10 / 68.29 — all fully circular at 40px
    flexShrink: 0,
    overflow: "hidden",
  };

  if (company.logoSrc) {
    return (
      <div style={{ ...shared, border: "1.56px solid rgba(203,203,203,0.20)" }}>
        <ImageWithFallback
          src={company.logoSrc}
          alt={company.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    );
  }

  const filled = !!company.brandColor;
  return (
    <div
      aria-hidden="true"
      style={{
        ...shared,
        background: company.brandColor ?? "#414141",
        outline: filled ? "1.73px solid rgba(255,255,255,0.02)" : undefined,
        border: filled ? undefined : "0.68px solid rgba(203,203,203,0.20)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-family-primary)",
          fontWeight: 600,
          fontSize: 16,
          lineHeight: 1,
          color: "#FFFFFF",
        }}
      >
        {company.name.trim().charAt(0).toUpperCase()}
      </span>
    </div>
  );
}

export function CompanyListRow({ company, onClick }: { company: Company; onClick?: () => void }) {
  const interactive = !!onClick;
  return (
    <div
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={interactive ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick?.(); } } : undefined}
      style={{
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        cursor: interactive ? "pointer" : "default",
      }}
    >
      <div style={{ height: 50, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 16, minWidth: 0 }}>
        <CompanyAvatar company={company} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: 4, minWidth: 0 }}>
          <span
            style={{
              color: "var(--color-text-default, #E3E3E3)",
              fontSize: 18,
              fontFamily: "var(--font-family-primary)",
              fontWeight: 600,
              lineHeight: "21.6px",
              wordBreak: "break-word",
            }}
          >
            {company.name}
          </span>
          <span
            style={{
              color: "var(--color-text-inactive, #999999)",
              fontSize: 14,
              fontFamily: "var(--font-family-secondary)",
              fontWeight: 400,
              lineHeight: "16.8px",
              wordBreak: "break-word",
            }}
          >
            {formatCompanyStatus(company)}
          </span>
        </div>
      </div>

      {/* Right chevron — 24×24 box, 7.4×12 glyph at left 8 / top 6, #BBBBBB */}
      <div style={{ width: 24, height: 24, position: "relative", flexShrink: 0 }} aria-hidden="true">
        <svg
          width="7.4"
          height="12"
          viewBox="0 0 7.4 12"
          fill="none"
          style={{ position: "absolute", left: 8, top: 6, display: "block" }}
        >
          <path d="M1 1L6 6L1 11" stroke="#BBBBBB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
