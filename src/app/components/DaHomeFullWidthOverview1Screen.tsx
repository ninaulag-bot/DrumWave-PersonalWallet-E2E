import DaHomeFullWidthOverview from "@/imports/DaHomeFullWidthOverview-1/index";
import { MainBottomNav } from "./MainBottomNav";

const FRAME_W = 390;
const FRAME_H = 844;

interface DaHomeFullWidthOverview1ScreenProps {
  onViewDataCertificates?: () => void;
  onHome?: () => void;
}

export function DaHomeFullWidthOverview1Screen({ onViewDataCertificates, onHome }: DaHomeFullWidthOverview1ScreenProps = {}) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
      {/* Hide the nav bar baked into the import; the shared MainBottomNav renders in its place. */}
      <style>{`.dahome1-import .h-\\[72px\\] { display: none !important; }`}</style>
      <div
        className="dahome1-import [&::-webkit-scrollbar]:hidden"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "72px",
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${FRAME_W}px`,
            height: `${FRAME_H}px`,
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <DaHomeFullWidthOverview onViewDataCertificates={onViewDataCertificates} />
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="home" onHome={onHome} />
      </div>
    </div>
  );
}
