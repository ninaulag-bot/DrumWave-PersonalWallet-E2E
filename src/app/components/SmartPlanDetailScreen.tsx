import PlanDetaillPage from "@/imports/PlanDetaillPage-1/index";
import { SmartJoinPlanContext, SmartPlanDetailBackContext } from "@/imports/PlanDetaillPage-1/smart-plan-context";

interface SmartPlanDetailScreenProps {
  /** Called when "Join this plan" is pressed. */
  onJoin?: () => void;
  /** Called when the back arrow is pressed. */
  onBack?: () => void;
}

/** dSavings Smart plan detail page, reached from "View details" on the dSavings
 *  Smart card in the Choose Plans screen. The design is taller than the device
 *  frame, so it scrolls vertically. */
export function SmartPlanDetailScreen({ onJoin, onBack }: SmartPlanDetailScreenProps) {
  return (
    <div
      className="[&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}
    >
      <SmartPlanDetailBackContext.Provider value={onBack}>
        <SmartJoinPlanContext.Provider value={onJoin}>
          <PlanDetaillPage />
        </SmartJoinPlanContext.Provider>
      </SmartPlanDetailBackContext.Provider>
    </div>
  );
}
