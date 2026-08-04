import DspLanding1 from "@/imports/DspLanding-1/index";
import { LearnMoreContext } from "@/imports/DspLanding-1/learn-more-context";
import { GoToHomeContext } from "@/imports/DspLanding-1/go-to-home-context";
import { ManageMyPlanContext } from "@/imports/DspLanding-1/manage-my-plan-context";
import { CashBalanceContext } from "@/imports/DspLanding-1/cash-balance-context";
import { DataBalanceContext } from "@/imports/DspLanding-1/data-balance-context";
import { OfferVariantContext, type OfferVariant } from "@/imports/DspLanding-1/offer-variant-context";

interface DspLanding1ScreenProps {
  onLearnMore?: () => void;
  onGoHome?: () => void;
  onManageMyPlan?: () => void;
  onCashBalance?: () => void;
  onDataBalance?: () => void;
  /** "receivingOffers" (after an offer is accepted) shows data balance 4 and the
   *  Rivian offer photo; "enrolled" keeps 0 and the original Tesla photos. */
  variant?: OfferVariant;
}

/** "My Data Savings Plan" dashboard screen, reached after "Go to my plan"
 *  on the Welcome to your Data Savings Plan page. */
export function DspLanding1Screen({ onLearnMore, onGoHome, onManageMyPlan, onCashBalance, onDataBalance, variant = "enrolled" }: DspLanding1ScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <OfferVariantContext.Provider value={variant}>
      <LearnMoreContext.Provider value={onLearnMore}>
        <GoToHomeContext.Provider value={onGoHome}>
          <ManageMyPlanContext.Provider value={onManageMyPlan}>
            <CashBalanceContext.Provider value={onCashBalance}>
              <DataBalanceContext.Provider value={onDataBalance}>
                <DspLanding1 />
              </DataBalanceContext.Provider>
            </CashBalanceContext.Provider>
          </ManageMyPlanContext.Provider>
        </GoToHomeContext.Provider>
      </LearnMoreContext.Provider>
      </OfferVariantContext.Provider>
    </div>
  );
}
