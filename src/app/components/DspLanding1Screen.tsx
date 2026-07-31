import DspLanding1 from "@/imports/DspLanding-1/index";
import { LearnMoreContext } from "@/imports/DspLanding-1/learn-more-context";
import { GoToHomeContext } from "@/imports/DspLanding-1/go-to-home-context";
import { ManageMyPlanContext } from "@/imports/DspLanding-1/manage-my-plan-context";
import { CashBalanceContext } from "@/imports/DspLanding-1/cash-balance-context";

interface DspLanding1ScreenProps {
  onLearnMore?: () => void;
  onGoHome?: () => void;
  onManageMyPlan?: () => void;
  onCashBalance?: () => void;
}

/** "My Data Savings Plan" dashboard screen, reached after "Go to my plan"
 *  on the Welcome to your Data Savings Plan page. */
export function DspLanding1Screen({ onLearnMore, onGoHome, onManageMyPlan, onCashBalance }: DspLanding1ScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <LearnMoreContext.Provider value={onLearnMore}>
        <GoToHomeContext.Provider value={onGoHome}>
          <ManageMyPlanContext.Provider value={onManageMyPlan}>
            <CashBalanceContext.Provider value={onCashBalance}>
              <DspLanding1 />
            </CashBalanceContext.Provider>
          </ManageMyPlanContext.Provider>
        </GoToHomeContext.Provider>
      </LearnMoreContext.Provider>
    </div>
  );
}
