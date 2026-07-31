import ChoosePlans from "@/imports/ChoosePlans/index";
import { FitnessDetailsContext, ChoosePlansCloseContext, SmartDetailsContext } from "@/imports/ChoosePlans/view-details-context";

interface ChoosePlansScreenProps {
  /** Called when "View details" on the dSavings Fitness plan card is pressed. */
  onViewFitnessDetails?: () => void;
  /** Called when "View details" on the dSavings Smart plan card is pressed. */
  onViewSmartDetails?: () => void;
  /** Called when the "X" (close) button in the header is pressed. */
  onClose?: () => void;
}

/** "Choose plans" screen, reached from the "View available plans" button on the
 *  Auto-approved screen. The imported design is taller than the device frame, so
 *  it scrolls vertically. */
export function ChoosePlansScreen({ onViewFitnessDetails, onViewSmartDetails, onClose }: ChoosePlansScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      <ChoosePlansCloseContext.Provider value={onClose}>
        <SmartDetailsContext.Provider value={onViewSmartDetails}>
          <FitnessDetailsContext.Provider value={onViewFitnessDetails}>
            <ChoosePlans />
          </FitnessDetailsContext.Provider>
        </SmartDetailsContext.Provider>
      </ChoosePlansCloseContext.Provider>
    </div>
  );
}
