import HomeRequestDataBeforeDsp12 from "@/imports/HomeRequestDataBeforeDsp-12/index";
import { OfferVariantContext, type OfferVariant } from "@/imports/DspLanding-1/offer-variant-context";
import { ViewMyRequestsContext, TeslaRelationshipContext } from "@/imports/HomeRequestDataBeforeDsp-12/view-my-requests-context";
import { RequestMoreDataContext } from "@/imports/HomeRequestDataBeforeDsp-12/request-more-data-context";
import { SavingsPlanSectionContext } from "@/imports/HomeRequestDataBeforeDsp-12/savings-plan-context";
import { RedeemOfferContext } from "@/imports/HomeRequestDataBeforeDsp-12/redeem-offer-context";
import { HasSecondPlanContext } from "@/imports/HomeRequestDataBeforeDsp-12/has-second-plan-context";
import { ScreenWithNavBar } from "./ScreenWithNavBar";
import { MainBottomNav } from "./MainBottomNav";
import { TopNav } from "./TopNav";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";
import { FooterLinks } from "@/app/components/FooterLinks";
import { SubFooter } from "@/app/components/SubFooter";

// The import's main column (Frame122) runs in flow and carries the DrumWave
// footer as its last child, so the frame sizes to its own content. It used to
// need a hardcoded height (3560px) with overflow:hidden, which clipped whatever
// the FAQ column pushed past that line.
const FRAME_W = 390;

export function OneDspHomeScreen({
  name = "Carolina Smith",
  onHome,
  onMyData,
  onRequestMoreData,
  onViewMyRequests,
  onTeslaRelationship,
  onSavingsPlan,
  onOffers,
  onSavingsPlanSection,
  onRedeemOffer,
  onAccountSettings,
  hasSecondPlan = false,
  variant = "enrolled",
}: {
  name?: string;
  onHome?: () => void;
  onMyData?: () => void;
  onRequestMoreData?: () => void;
  onViewMyRequests?: () => void;
  onTeslaRelationship?: () => void;
  onSavingsPlan?: () => void;
  onOffers?: () => void;
  onSavingsPlanSection?: () => void;
  onRedeemOffer?: () => void;
  onAccountSettings?: () => void;
  hasSecondPlan?: boolean;
  variant?: OfferVariant;
}) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="one-dsp-home-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <ScreenWithNavBar navBar={<MainBottomNav activeTab="home" onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />} navBarHeight={72}>
          {/* Hide chrome baked into the import: bottom nav + dead Top nav pill
              (replaced by the sticky shared TopNav sibling below). */}
          <style>{`
            .onedsp-import .border-t.bottom-0 { display: none !important; }
            .onedsp-import [data-name="Top nav"] { display: none !important; }
            .onedsp-import [data-name="Status Bar - iPhone"],
            .onedsp-import [data-name="Status Bar"] { display: none !important; }
          `}</style>
          <div
            className="onedsp-import"
            style={{ position: "relative", width: `${FRAME_W}px`, margin: "0 auto", overflow: "hidden" }}
          >
            <OfferVariantContext.Provider value={variant}>
              <RequestMoreDataContext.Provider value={onRequestMoreData}>
              <ViewMyRequestsContext.Provider value={onViewMyRequests}>
                <TeslaRelationshipContext.Provider value={onTeslaRelationship}>
                  <HasSecondPlanContext.Provider value={hasSecondPlan}>
                    <SavingsPlanSectionContext.Provider value={onSavingsPlanSection}>
                      <RedeemOfferContext.Provider value={onRedeemOffer}>
                        <HomeRequestDataBeforeDsp12 />
                      </RedeemOfferContext.Provider>
                    </SavingsPlanSectionContext.Provider>
                  </HasSecondPlanContext.Provider>
                </TeslaRelationshipContext.Provider>
              </ViewMyRequestsContext.Provider>
              </RequestMoreDataContext.Provider>
            </OfferVariantContext.Provider>
          </div>

          {/* Footer link accordion, at the end of the scrolling content */}
          <div style={{ width: `${FRAME_W}px`, margin: "80px auto 0", paddingBottom: 48 }}>
            <FooterLinks />
            <div style={{ height: 60 }} />
            <div style={{ padding: "0 24px" }}>
              <SubFooter />
            </div>
          </div>
        </ScreenWithNavBar>
        {/* Persistent top nav — sibling of ScreenWithNavBar so it stays pinned while content scrolls */}
        <TopNav name={name} onAccountSettings={onAccountSettings} />
          </div>
      <UnifiedStatusBar hostClass="one-dsp-home-sb" />
    </div>
  );
}
