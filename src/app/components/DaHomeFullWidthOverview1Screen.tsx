import DaHomeFullWidthOverview from "@/imports/DaHomeFullWidthOverview-1/index";
import { MainBottomNav } from "./MainBottomNav";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";
import { MiniFooter } from "@/app/components/MiniFooter";

const FRAME_W = 390;
const FRAME_H = 844;

interface DaHomeFullWidthOverview1ScreenProps {
  onViewDataCertificates?: () => void;
  onGoToDWCloud?: () => void;
  onUploadMoreFiles?: () => void;
  onHome?: () => void;
  onMyData?: () => void;
  onSavingsPlan?: () => void;
  onOffers?: () => void;
  onBack?: () => void;
}

export function DaHomeFullWidthOverview1Screen({ onViewDataCertificates, onGoToDWCloud, onUploadMoreFiles, onHome, onMyData, onSavingsPlan, onOffers, onBack }: DaHomeFullWidthOverview1ScreenProps = {}) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="da-home-full-width-overview1-sb" style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
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
      {/* Full-height column so the footer can sit at the bottom on short screens */}
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>

          <div
            style={{
              position: "relative",
              width: `${FRAME_W}px`,
              height: `${FRAME_H}px`,
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <DaHomeFullWidthOverview onViewDataCertificates={onViewDataCertificates} onGoToDWCloud={onGoToDWCloud} onUploadMoreFiles={onUploadMoreFiles} />

            {/* Transparent tap target over the back arrow the import already draws in its
                "Profile header" (header at top 66px, 342-wide row inset 24px, 48px tall,
                so the 24px arrow sits at ~left 24 / top 78). Scrolls with the arrow. */}
            <button
              type="button"
              onClick={onBack}
              aria-label="Go back"
              style={{
                position: "absolute",
                top: "66px",
                left: "16px",
                width: "48px",
                height: "48px",
                background: "transparent",
                border: "none",
                cursor: onBack ? "pointer" : "default",
                zIndex: 20,
              }}
            />
          </div>
        
      <MiniFooter />
      
      </div>
      </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <MainBottomNav activeTab="home" onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
        </div>
          </div>
      <UnifiedStatusBar hostClass="da-home-full-width-overview1-sb" />
    </div>
  );
}
