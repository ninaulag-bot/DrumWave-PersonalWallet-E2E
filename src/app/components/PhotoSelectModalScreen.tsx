import PhotoSelectModalImport from "@/imports/233DesktopOnlyPhotoSelectModal/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface PhotoSelectModalScreenProps {
  onBack: () => void;
  onSave: () => void;
}

// The original import has incorrect Cancel button styling (black border + black text,
// invisible on dark modal). We render corrected buttons as an overlay at the same
// position, covering the originals.
function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        height: "44px",
        borderRadius: "500px",
        background: "white",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "18px",
        color: "var(--color-text-inverse)",
        lineHeight: 1,
      }}>Save</span>
    </button>
  );
}

function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        height: "48px",
        borderRadius: "500px",
        background: "transparent",
        border: "1px solid white",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "18px",
        color: "var(--color-text-primary)",
        lineHeight: 1,
      }}>Cancel</span>
    </button>
  );
}

export function PhotoSelectModalScreen({ onBack, onSave }: PhotoSelectModalScreenProps) {
  return (
    <div className="relative size-full overflow-hidden">
      <div className="photo-select-modal-sb relative size-full">
        <PhotoSelectModalImport />

        {/* Back arrow — top-left, calc(50%-330px) with -translate-y-1/2 ≈ y=76px */}
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          style={{
            position: "absolute",
            top: "62px",
            left: "12px",
            width: "72px",
            height: "56px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
        />

        {/* Modal close (X) icon — top-right of the modal card at ~y=192px */}
        <button
          type="button"
          onClick={onBack}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "186px",
            right: "38px",
            width: "52px",
            height: "52px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
        />

        {/* Corrected buttons overlay — covers the original broken Save/Cancel buttons.
            Modal content left=48px (24px modal margin + 24px padding), width=294px.
            Frame6 starts at ~y=545px: Save(44) + gap(16) + Cancel(48) = 108px total. */}
        <div
          style={{
            position: "absolute",
            top: "541px",
            left: "48px",
            width: "294px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 20,
            background: "#1d1d1d",
            padding: "4px 0",
          }}
        >
          <SaveButton onClick={onSave} />
          <CancelButton onClick={onBack} />
        </div>
      </div>
      <UnifiedStatusBar hostClass="photo-select-modal-sb" />
    </div>
  );
}
