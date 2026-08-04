import AutoApproved from "@/imports/AutoApproved/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

/** "Congrats! You've been approved" screen, reached once the review-application
 *  loading screen reaches "Ready". Renders the read-only import as-is. */
interface AutoApprovedScreenProps {
  /** Called when the "View available plans" button is pressed. */
  onViewPlans?: () => void;
}

export function AutoApprovedScreen({ onViewPlans }: AutoApprovedScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="auto-approved-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <AutoApproved onViewPlans={onViewPlans} />
          </div>
      <UnifiedStatusBar hostClass="auto-approved-sb" />
    </div>
  );
}
