import DspPlanNotSelected from "@/imports/DspPlanNotSelected-1/index";
import { MainBottomNav } from "./MainBottomNav";

/** "Plan not selected" screen, shown when the user closes the Choose Plans page
 *  without selecting a Data Savings Plan. Renders the read-only import as-is. */
export function DspPlanNotSelectedScreen({ onHome, onMyData, onOffers }: { onHome?: () => void; onMyData?: () => void; onOffers?: () => void } = {}) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* Hide the nav bar baked into the import; the shared MainBottomNav renders in its place. */}
      <style>{`.dspplannotselected-import .h-\\[72px\\] { display: none !important; }`}</style>
      <div className="dspplannotselected-import" style={{ position: "relative", width: "100%", height: "100%" }}>
        <DspPlanNotSelected />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="savingsPlan" onHome={onHome} onMyData={onMyData} onOffers={onOffers} />
      </div>
    </div>
  );
}
