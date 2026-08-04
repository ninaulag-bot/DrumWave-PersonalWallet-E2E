import DspLanding from "@/imports/DspLanding/index";
import { UpdateContributionsContext } from "@/imports/DspLanding/update-context";
import { GoBackContext } from "@/imports/DspLanding/go-back-context";

interface DspLandingScreenProps {
  /** Called when the "Update data contributions" button is pressed. */
  onUpdate?: () => void;
  /** Called when the back arrow in the header is pressed. */
  onBack?: () => void;
}

/** "Contribution settings" screen, reached from "Join this plan" on a dSavings
 *  Smart plan detail page. The design is taller than the device frame, so it
 *  scrolls vertically. */
export function DspLandingScreen({ onUpdate, onBack }: DspLandingScreenProps) {
  return (
    <div
      className="[&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}
    >
      <UpdateContributionsContext.Provider value={onUpdate}>
        <GoBackContext.Provider value={onBack}>
          <DspLanding />
        </GoBackContext.Provider>
      </UpdateContributionsContext.Provider>
    </div>
  );
}
