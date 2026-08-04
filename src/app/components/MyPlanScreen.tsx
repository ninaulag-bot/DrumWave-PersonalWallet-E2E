import Component from "@/imports/UnnamedComponent-4/index";
import { CloseContext } from "@/imports/UnnamedComponent-4/close-context";
import { GoToPlanContext } from "@/imports/UnnamedComponent-4/go-to-plan-context";
import { MainBottomNav } from "./MainBottomNav";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

/** "Welcome to your Data Savings Plan" landing page, reached from the
 *  "Go to my plan" button on the Approved + not joined home screen. */
export function MyPlanScreen({ onClose, onGoToPlan, onHome, onMyData, onOffers }: { onClose?: () => void; onGoToPlan?: () => void; onHome?: () => void; onMyData?: () => void; onOffers?: () => void }) {
  return (
    <CloseContext.Provider value={onClose}>
      <GoToPlanContext.Provider value={onGoToPlan}>
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
          <div
            className="my-plan-sb [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "72px", overflowX: "hidden", overflowY: "auto" }}
          >
            <Component />
          </div>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
            <MainBottomNav activeTab="savingsPlan" onHome={onHome} onMyData={onMyData} onOffers={onOffers} />
          </div>
          <UnifiedStatusBar hostClass="my-plan-sb" />
        </div>
      </GoToPlanContext.Provider>
    </CloseContext.Provider>
  );
}
