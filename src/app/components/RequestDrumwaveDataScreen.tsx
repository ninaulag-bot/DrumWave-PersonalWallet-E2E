import PasswordImport from "@/imports/Password/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface RequestDrumwaveDataScreenProps {
  onBack: () => void;
  onSubmit: () => void;
}

export function RequestDrumwaveDataScreen({ onBack, onSubmit }: RequestDrumwaveDataScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="request-drumwave-data-sb" style={{ position: "relative", width: "100%", height: "100%" }}>
        <PasswordImport />

        {/* Back button tap target over the imported back arrow */}
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          style={{
            position: "absolute",
            top: "71px",
            left: "12px",
            width: "60px",
            height: "48px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
        />

        {/* Submit Request button overlay — top: 753px, left: 24px, 342×44px */}
        <button
          type="button"
          onClick={onSubmit}
          style={{
            position: "absolute",
            top: "753px",
            left: "24px",
            width: "342px",
            height: "44px",
            borderRadius: "500px",
            background: "var(--color-action-primary-bg)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-family-primary)",
              fontWeight: 600,
              fontSize: "18px",
              color: "var(--color-action-primary-text)",
              lineHeight: "24px",
            }}
          >
            Submit Request
          </span>
        </button>
          </div>
      <UnifiedStatusBar hostClass="request-drumwave-data-sb" />
    </div>
  );
}
