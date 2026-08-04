import PlanDetaillPage from "@/imports/PlanDetaillPage-2/index";
import { Smart2JoinPlanContext, Smart2PlanDetailBackContext } from "@/imports/PlanDetaillPage-2/smart-plan-context";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface Smart2PlanDetailScreenProps {
  /** Called when "Join this plan" is pressed. */
  onJoin?: () => void;
  /** Called when the back arrow is pressed. */
  onBack?: () => void;
}

/** dSavings Smart plan detail page, reached from "View details" on the dSavings
 *  Smart card in the "Join another plan" Choose Plans screen. The design is
 *  taller than the device frame, so it scrolls vertically. */
export function Smart2PlanDetailScreen({ onJoin, onBack }: Smart2PlanDetailScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div
        className="smart2-plan-detail-sb [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}
      >
        <Smart2PlanDetailBackContext.Provider value={onBack}>
          <Smart2JoinPlanContext.Provider value={onJoin}>
            <PlanDetaillPage />
          </Smart2JoinPlanContext.Provider>
        </Smart2PlanDetailBackContext.Provider>
      </div>
      <UnifiedStatusBar hostClass="smart2-plan-detail-sb" />
    </div>
  );
}
