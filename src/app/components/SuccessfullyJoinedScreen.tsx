import SuccessfullyJoinedThePlan from "@/imports/SuccessfullyJoinedThePlan/index";
import { GoToPlanContext, JoinAnotherPlanContext, CloseContext } from "@/imports/SuccessfullyJoinedThePlan/goto-plan-context";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface SuccessfullyJoinedScreenProps {
  /** Called when the "Go to my plan" button is pressed. */
  onGoToPlan?: () => void;
  /** Called when the "Join another plan" button is pressed. */
  onJoinAnother?: () => void;
  /** Called when the X (close) button is pressed. */
  onClose?: () => void;
}

/** "Successfully joined the plan" confirmation screen, shown after the user
 *  accepts the Terms & Conditions. Renders the read-only import as-is. */
export function SuccessfullyJoinedScreen({ onGoToPlan, onJoinAnother, onClose }: SuccessfullyJoinedScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="successfully-joined-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <CloseContext.Provider value={onClose}>
          <GoToPlanContext.Provider value={onGoToPlan}>
            <JoinAnotherPlanContext.Provider value={onJoinAnother}>
              <SuccessfullyJoinedThePlan />
            </JoinAnotherPlanContext.Provider>
          </GoToPlanContext.Provider>
        </CloseContext.Provider>
          </div>
      <UnifiedStatusBar hostClass="successfully-joined-sb" />
    </div>
  );
}
