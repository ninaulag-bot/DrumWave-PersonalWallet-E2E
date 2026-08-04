import ChoosePlans from "@/imports/ChoosePlans-1/index";
import { FitnessDetailsContext } from "@/imports/ChoosePlans-1/view-details-context";

interface JoinAnotherPlanScreenProps {
  /** Called when "View details" on the dSavings Fitness plan card is pressed. */
  onViewFitnessDetails?: () => void;
}

/** "Choose plans" screen shown when the user opts to join another Data Savings
 *  Plan from the success screen. The design is taller than the device frame, so
 *  it scrolls vertically. */
export function JoinAnotherPlanScreen({ onViewFitnessDetails }: JoinAnotherPlanScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      <FitnessDetailsContext.Provider value={onViewFitnessDetails}>
        <ChoosePlans />
      </FitnessDetailsContext.Provider>
    </div>
  );
}
