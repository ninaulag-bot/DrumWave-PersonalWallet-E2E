import ChoosePlans from "@/imports/ChoosePlans/index";
import { FitnessDetailsContext, ChoosePlansCloseContext, SmartDetailsContext } from "@/imports/ChoosePlans/view-details-context";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";
import { MiniFooter } from "@/app/components/MiniFooter";

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
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="choose-plans-sb" style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      {/* Full-height column so the footer can sit at the bottom on short screens */}
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>

        <ChoosePlansCloseContext.Provider value={onClose}>
          <SmartDetailsContext.Provider value={onViewSmartDetails}>
            <FitnessDetailsContext.Provider value={onViewFitnessDetails}>
              <ChoosePlans />
            </FitnessDetailsContext.Provider>
          </SmartDetailsContext.Provider>
        </ChoosePlansCloseContext.Provider>
          
      <MiniFooter />
      
      </div>
      </div>
      <UnifiedStatusBar hostClass="choose-plans-sb" />
    </div>
  );
}
