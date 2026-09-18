import ChoosePlans from "@/imports/ChoosePlans-1/index";
import { FitnessDetailsContext } from "@/imports/ChoosePlans-1/view-details-context";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";
import { MiniFooter } from "@/app/components/MiniFooter";

interface JoinAnotherPlanScreenProps {
  /** Called when "View details" on the dSavings Fitness plan card is pressed. */
  onViewFitnessDetails?: () => void;
}

/** "Choose plans" screen shown when the user opts to join another Data Savings
 *  Plan from the success screen. The design is taller than the device frame, so
 *  it scrolls vertically. */
export function JoinAnotherPlanScreen({ onViewFitnessDetails }: JoinAnotherPlanScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="join-another-plan-sb" style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      {/* Full-height column so the footer can sit at the bottom on short screens */}
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>

        <FitnessDetailsContext.Provider value={onViewFitnessDetails}>
          <ChoosePlans />
        </FitnessDetailsContext.Provider>
          
      <MiniFooter />
      
      </div>
      </div>
      <UnifiedStatusBar hostClass="join-another-plan-sb" />
    </div>
  );
}
