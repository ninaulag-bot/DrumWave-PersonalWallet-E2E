import DspLanding from "@/imports/DspLanding/index";
import { UpdateContributionsContext } from "@/imports/DspLanding/update-context";

interface DspLandingScreenProps {
  /** Called when the "Update data contributions" button is pressed. */
  onUpdate?: () => void;
}

/** "Contribution settings" screen, reached from "Join this plan" on a dSavings
 *  Smart plan detail page. The design is taller than the device frame, so it
 *  scrolls vertically. */
export function DspLandingScreen({ onUpdate }: DspLandingScreenProps) {
  return (
    <div
      className="[&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}
    >
      <UpdateContributionsContext.Provider value={onUpdate}>
        <DspLanding />
      </UpdateContributionsContext.Provider>
    </div>
  );
}
