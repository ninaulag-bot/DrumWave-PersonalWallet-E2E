import { useState } from "react";
import HomeRequestDataBeforeDsp9 from "@/imports/HomeRequestDataBeforeDsp-9/index";
import { GoBackContext } from "@/imports/HomeRequestDataBeforeDsp-9/go-back-context";
import { AutoRenewToggleContext } from "@/imports/HomeRequestDataBeforeDsp-9/auto-renew-toggle-context";
import { AutoRenewStateContext } from "@/imports/HomeRequestDataBeforeDsp-9/auto-renew-state-context";

function CancelAutoRenewModal({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(7, 7, 7, 0.72)",
      }}
    >
      <div
        style={{
          background: "var(--color-bg-surface)",
          border: "1px solid var(--color-border-secondary)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-6)",
          width: "345px",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-10)",
        }}
      >
        {/* Header + body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {/* Title row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p
              style={{
                fontFamily: "var(--font-family-primary)",
                fontSize: "var(--text-heading-md-size)",
                fontWeight: "var(--text-heading-md-weight)",
                lineHeight: "var(--text-heading-md-line-height)",
                color: "var(--color-text-primary)",
                margin: 0,
                flex: 1,
              }}
            >
              Cancel auto-renew
            </p>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-primary)",
                flexShrink: 0,
              }}
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M13 1L1 13M1 1L13 13"
                  stroke="var(--color-text-primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Body text */}
          <p
            style={{
              fontFamily: "var(--font-family-secondary)",
              fontSize: "var(--text-body-md-size)",
              fontWeight: "var(--text-body-md-weight)",
              lineHeight: "1.5",
              color: "var(--color-text-primary)",
              margin: 0,
            }}
          >
            If you cancel now, you can still contribute and earn until Jan 25, 2026. After the plan period ends, your data contributions will be removed from this Data Savings Plan.
          </p>
        </div>

        {/* Cancel auto renew button */}
        <button
          onClick={onConfirm}
          style={{
            width: "100%",
            padding: "10px 24px",
            borderRadius: "var(--radius-full)",
            border: "1px solid var(--color-status-error)",
            background: "transparent",
            cursor: "pointer",
            fontFamily: "var(--font-family-primary)",
            fontSize: "var(--text-heading-md-size)",
            fontWeight: "var(--text-heading-md-weight)",
            color: "var(--color-status-error)",
            textAlign: "center",
          }}
        >
          Cancel auto renew
        </button>
      </div>
    </div>
  );
}

/** "Manage my plan" screen — reached by tapping "Manage my plan" on the
 *  DSP Landing screen within the approved + not joined flow. */
export function ManageMyPlanScreen({ onBack }: { onBack?: () => void }) {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [autoRenewOn, setAutoRenewOn] = useState(true);

  function handleToggle() {
    if (autoRenewOn) {
      setShowCancelModal(true);
    } else {
      setAutoRenewOn(true);
    }
  }

  function handleConfirmCancel() {
    setAutoRenewOn(false);
    setShowCancelModal(false);
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <GoBackContext.Provider value={onBack}>
        <AutoRenewStateContext.Provider value={autoRenewOn}>
          <AutoRenewToggleContext.Provider value={handleToggle}>
            <HomeRequestDataBeforeDsp9 />
          </AutoRenewToggleContext.Provider>
        </AutoRenewStateContext.Provider>
      </GoBackContext.Provider>

      {showCancelModal && (
        <CancelAutoRenewModal
          onClose={() => setShowCancelModal(false)}
          onConfirm={handleConfirmCancel}
        />
      )}
    </div>
  );
}
