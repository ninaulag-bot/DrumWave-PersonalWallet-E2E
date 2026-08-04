import SuccessfullyJoinedThePlan from "@/imports/SuccessfullyJoinedThePlan-1/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

/** "Successfully joined the plan" confirmation screen for the dSavings Smart
 *  plan, shown after the user accepts the Terms & Conditions. Renders the
 *  read-only import as-is. */
export function SmartSuccessfullyJoinedScreen() {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="smart-successfully-joined-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <SuccessfullyJoinedThePlan />
          </div>
      <UnifiedStatusBar hostClass="smart-successfully-joined-sb" />
    </div>
  );
}
