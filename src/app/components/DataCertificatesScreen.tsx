import DataCertificates from "@/imports/DataCertificates/index";
import { MainBottomNav } from "./MainBottomNav";

const FRAME_W = 390;
const FRAME_H = 844;

interface DataCertificatesScreenProps {
  onCustomerProfile?: () => void;
  onHome?: () => void;
  onBack?: () => void;
}

export function DataCertificatesScreen({ onCustomerProfile, onHome, onBack }: DataCertificatesScreenProps = {}) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
      {/* Hide the nav bar baked into the import; the shared MainBottomNav renders in its place. */}
      <style>{`.datacertificates-import .h-\\[72px\\] { display: none !important; }`}</style>
      <div className="datacertificates-import" style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
        <DataCertificates onCustomerProfile={onCustomerProfile} />
      </div>

      {/* Back chevron. This import's frame draws no nav row (its heading block starts at
          top 83), so — same as RequestDataScreen — we render just the chevron in the
          top-left slot other screens use, sitting just above that heading. */}
      <button
        type="button"
        onClick={onBack}
        aria-label="Go back"
        style={{
          // 44x44 hit area centred on the same point the 24x24 box used (36, 68),
          // so the chevron doesn't move but the target is comfortably tappable.
          position: "absolute",
          top: "46px",
          left: "14px",
          width: "44px",
          height: "44px",
          padding: 0,
          background: "none",
          border: "none",
          cursor: onBack ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z" fill="var(--color-text-white)" />
        </svg>
      </button>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="home" onHome={onHome} />
      </div>
    </div>
  );
}
