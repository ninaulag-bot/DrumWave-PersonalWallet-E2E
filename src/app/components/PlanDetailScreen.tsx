import PlanDetaillPage from "@/imports/PlanDetaillPage/index";
import { JoinPlanContext, PlanDetailBackContext, PlanDetailCloseContext } from "@/imports/PlanDetaillPage/join-plan-context";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";
import { MiniFooter } from "@/app/components/MiniFooter";

interface PlanDetailScreenProps {
  /** Called when the "Join this plan" button is pressed. */
  onJoin?: () => void;
  /** Called when the back arrow is pressed. */
  onBack?: () => void;
  /** Called when the X (close) button is pressed. */
  onClose?: () => void;
}

/** "Plan details" screen for a Data Savings Plan, reached from the "View details"
 *  button on the dSavings Fitness card. The imported design is taller than the
 *  device frame, so it scrolls vertically. */
export function PlanDetailScreen({ onJoin, onBack, onClose }: PlanDetailScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="plan-detail-sb" style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      {/* Full-height column so the footer can sit at the bottom on short screens */}
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>

        <PlanDetailCloseContext.Provider value={onClose}>
          <PlanDetailBackContext.Provider value={onBack}>
            <JoinPlanContext.Provider value={onJoin}>
              <PlanDetaillPage />
            </JoinPlanContext.Provider>
          </PlanDetailBackContext.Provider>
        </PlanDetailCloseContext.Provider>
          
      <MiniFooter />
      
      </div>
      </div>
      <UnifiedStatusBar hostClass="plan-detail-sb" />
    </div>
  );
}
