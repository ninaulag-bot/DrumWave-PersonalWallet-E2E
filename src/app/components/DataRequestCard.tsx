import type { CSSProperties } from "react";

const tw: CSSProperties = { fontFamily: "var(--font-display)" };
const os: CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 400 };

interface DataRequestCardProps {
  /** Single capital letter or 2-char abbreviation shown in the avatar */
  initial: string;
  company: string;
  avatarBg: string;
  avatarFg?: string;
  dateLabel: string;
  /**
   * "single-outlined" — one full-width outlined pill (e.g. "Go to dWCloud")
   * "two-button"      — filled primary + outlined secondary side by side
   */
  variant: "single-outlined" | "two-button";
  /** Two-button only: label for the filled (primary) button */
  primaryLabel?: string;
  onPrimary?: () => void;
  /** Single: the full-width outlined button. Two-button: the right outlined button */
  secondaryLabel: string;
  onSecondary?: () => void;
}

/**
 * Reusable data-request card.
 * Matches the card pattern in MyDataRequestsScreen (App.tsx).
 * Use "single-outlined" for Tesla-style (uploaded, one action).
 * Use "two-button" for Nubank/Bradesco-style (declined, upload + see how).
 */
export function DataRequestCard({
  initial,
  company,
  avatarBg,
  avatarFg = "#FFFFFF",
  dateLabel,
  variant,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}: DataRequestCardProps) {
  return (
    <div
      style={{
        background: "#121212",
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Avatar + company info */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: avatarBg,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              ...tw,
              fontWeight: 600,
              fontSize: 20.57,
              color: avatarFg,
              lineHeight: 1,
            }}
          >
            {initial}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              ...tw,
              fontWeight: 600,
              fontSize: 18,
              color: "var(--color-text-primary)",
              lineHeight: "1.2",
            }}
          >
            {company}
          </span>
          <span
            style={{
              ...os,
              fontSize: 14,
              color: "var(--color-text-secondary)",
              lineHeight: "1.5",
            }}
          >
            {dateLabel}
          </span>
        </div>
      </div>

      {/* Action button(s) */}
      {variant === "single-outlined" ? (
        <button
          type="button"
          onClick={onSecondary}
          style={{
            height: 44,
            borderRadius: "var(--radius-xl)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            width: "100%",
            boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              ...tw,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: 1.2,
              color: "var(--color-action-secondary-text)",
            }}
          >
            {secondaryLabel}
          </span>
        </button>
      ) : (
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={onPrimary}
            style={{
              height: 44,
              borderRadius: "var(--radius-xl)",
              background: "var(--color-action-primary-bg)",
              border: "none",
              cursor: "pointer",
              padding: "6px 19px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                ...tw,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: 1.2,
                color: "var(--color-action-primary-text)",
                whiteSpace: "nowrap",
              }}
            >
              {primaryLabel}
            </span>
          </button>
          <button
            type="button"
            onClick={onSecondary}
            style={{
              height: 44,
              borderRadius: "var(--radius-xl)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              flex: 1,
              boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                ...tw,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: 1.2,
                color: "var(--color-action-secondary-text)",
              }}
            >
              {secondaryLabel}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
