import ChoosePlans from "@/imports/ChoosePlans-1/index";
import { Smart2DetailsContext } from "@/imports/ChoosePlans-1/view-details-context";

interface JoinAnotherPlanScreenProps {
  /** Called when "View details" on the dSavings Smart plan card is pressed. */
  onViewSmartDetails?: () => void;
}

/** "Choose plans" screen shown when the user opts to join another Data Savings
 *  Plan from the success screen. The design is taller than the device frame, so
 *  it scrolls vertically. */
export function JoinAnotherPlanScreen({ onViewSmartDetails }: JoinAnotherPlanScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      <Smart2DetailsContext.Provider value={onViewSmartDetails}>
        <ChoosePlans />
      </Smart2DetailsContext.Provider>
    </div>
  );
}
