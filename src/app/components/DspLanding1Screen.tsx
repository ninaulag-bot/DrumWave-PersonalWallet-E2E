import DspLanding1 from "@/imports/DspLanding-1/index";
import { LearnMoreContext } from "@/imports/DspLanding-1/learn-more-context";
import { GoToHomeContext } from "@/imports/DspLanding-1/go-to-home-context";
import { MyDataContext } from "@/imports/DspLanding-1/my-data-context";
import { OffersContext } from "@/imports/DspLanding-1/offers-context";
import { ManageMyPlanContext } from "@/imports/DspLanding-1/manage-my-plan-context";
import { CashBalanceContext } from "@/imports/DspLanding-1/cash-balance-context";
import { DataBalanceContext } from "@/imports/DspLanding-1/data-balance-context";
import { ViewAllPlansContext } from "@/imports/DspLanding-1/view-all-plans-context";
import { DataContributionContext } from "@/imports/DspLanding-1/data-contribution-context";
import { RequestMoreDataContext } from "@/imports/DspLanding-1/request-more-data-context";
import { BackToAllPlansContext } from "@/imports/DspLanding-1/back-to-all-plans-context";
import { OfferVariantContext, type OfferVariant } from "@/imports/DspLanding-1/offer-variant-context";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface DspLanding1ScreenProps {
  onLearnMore?: () => void;
  onGoHome?: () => void;
  onMyData?: () => void;
  onOffers?: () => void;
  onManageMyPlan?: () => void;
  onCashBalance?: () => void;
  onDataBalance?: () => void;
  /** Called when a "View all plans" button in "Other plans you qualify for" is pressed. */
  onViewAllPlans?: () => void;
  /** Called when the "Data contribution" row is tapped. Only passed in the data
   *  certificates flow; left undefined elsewhere so the row stays inert. */
  onDataContribution?: () => void;
  /** Request more data company pills → Request Data (step 10). */
  onRequestMoreData?: () => void;
  /** Called by the "Back to all plans" link. Only passed when this screen was
   *  opened from the all-plans overview; left undefined elsewhere, which is what
   *  keeps the link from rendering at all. */
  onBackToAllPlans?: () => void;
  /** "receivingOffers" (after an offer is accepted) shows data balance 4 and the
   *  Rivian offer photo; "enrolled" keeps 0 and the original Tesla photos. */
  variant?: OfferVariant;
}

/** "My Data Savings Plan" dashboard screen, reached after "Go to my plan"
 *  on the Welcome to your Data Savings Plan page. */
export function DspLanding1Screen({ onLearnMore, onGoHome, onMyData, onOffers, onManageMyPlan, onCashBalance, onDataBalance, onViewAllPlans, onDataContribution, onRequestMoreData, onBackToAllPlans, variant = "enrolled" }: DspLanding1ScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="dsp-landing1-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <OfferVariantContext.Provider value={variant}>
        <LearnMoreContext.Provider value={onLearnMore}>
          <GoToHomeContext.Provider value={onGoHome}>
            <MyDataContext.Provider value={onMyData}>
              <OffersContext.Provider value={onOffers}>
                <ManageMyPlanContext.Provider value={onManageMyPlan}>
                  <CashBalanceContext.Provider value={onCashBalance}>
                    <DataBalanceContext.Provider value={onDataBalance}>
                      <ViewAllPlansContext.Provider value={onViewAllPlans}>
                        <DataContributionContext.Provider value={onDataContribution}>
                          <RequestMoreDataContext.Provider value={onRequestMoreData}>
                          <BackToAllPlansContext.Provider value={onBackToAllPlans}>
                            <DspLanding1 />
                          </BackToAllPlansContext.Provider>
                          </RequestMoreDataContext.Provider>
                        </DataContributionContext.Provider>
                      </ViewAllPlansContext.Provider>
                    </DataBalanceContext.Provider>
                  </CashBalanceContext.Provider>
                </ManageMyPlanContext.Provider>
              </OffersContext.Provider>
            </MyDataContext.Provider>
          </GoToHomeContext.Provider>
        </LearnMoreContext.Provider>
        </OfferVariantContext.Provider>
          </div>
      <UnifiedStatusBar hostClass="dsp-landing1-sb" />
    </div>
  );
}
