import HomeRequestDataBeforeDsp12 from "@/imports/HomeRequestDataBeforeDsp-12/index";
import { OfferVariantContext, type OfferVariant } from "@/imports/DspLanding-1/offer-variant-context";
import { ViewMyRequestsContext, TeslaRelationshipContext } from "@/imports/HomeRequestDataBeforeDsp-12/view-my-requests-context";
import { ScreenWithNavBar } from "./ScreenWithNavBar";
import { MainBottomNav } from "./MainBottomNav";

// The import's main column (Frame122) runs in flow and carries the DrumWave
// footer as its last child, so the frame sizes to its own content. It used to
// need a hardcoded height (3560px) with overflow:hidden, which clipped whatever
// the FAQ column pushed past that line.
const FRAME_W = 390;

export function OneDspHomeScreen({ onHome, onViewMyRequests, onTeslaRelationship, onSavingsPlan, variant = "enrolled" }: { onHome?: () => void; onViewMyRequests?: () => void; onTeslaRelationship?: () => void; onSavingsPlan?: () => void; variant?: OfferVariant }) {
  return (
    <ScreenWithNavBar navBar={<MainBottomNav activeTab="home" onHome={onHome} onSavingsPlan={onSavingsPlan} />} navBarHeight={72}>
      {/* Hide the nav bar baked into the import. Component4 is the only element
          with both border-t and bottom-0; targeting both prevents accidental matches. */}
      <style>{`.onedsp-import .border-t.bottom-0 { display: none !important; }`}</style>
      <div
        className="onedsp-import"
        style={{ position: "relative", width: `${FRAME_W}px`, margin: "0 auto", overflow: "hidden" }}
      >
        <OfferVariantContext.Provider value={variant}>
          <ViewMyRequestsContext.Provider value={onViewMyRequests}>
            <TeslaRelationshipContext.Provider value={onTeslaRelationship}>
              <HomeRequestDataBeforeDsp12 />
            </TeslaRelationshipContext.Provider>
          </ViewMyRequestsContext.Provider>
        </OfferVariantContext.Provider>
      </div>
    </ScreenWithNavBar>
  );
}
