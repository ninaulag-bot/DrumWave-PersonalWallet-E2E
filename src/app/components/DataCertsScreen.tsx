import DataCerts from "@/imports/DataCerts/index";
import { MainBottomNav } from "./MainBottomNav";

const FRAME_W = 390;
const FRAME_H = 844;

export function DataCertsScreen({ onDone, onHome, onMyData, onSavingsPlan, onOffers }: { onDone?: () => void; onHome?: () => void; onMyData?: () => void; onSavingsPlan?: () => void; onOffers?: () => void }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
      {/* Hide the nav bar baked into the import; the shared MainBottomNav renders in its place. */}
      <style>{`.datacerts-import .h-\\[72px\\] { display: none !important; }`}</style>
      <div className="datacerts-import" style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
        <DataCerts />

        {/* Interactive "Done" overlay — sits on top of the design's own Done button.
            Geometry mirrors the import's Button frame (and DataCertsDetailScreen's
            equivalent overlay): top 78, left calc(80% - 3px) centered, 92×48. */}
        <button
          type="button"
          onClick={onDone}
          aria-label="Done"
          style={{
            position: "absolute",
            top: "78px",
            left: "calc(80% - 3px)",
            transform: "translateX(-50%)",
            width: "92px",
            height: "48px",
            borderRadius: "500px",
            background: "transparent",
            border: "none",
            cursor: onDone ? "pointer" : "default",
            zIndex: 10,
          }}
        />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="home" onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
      </div>
    </div>
  );
}
