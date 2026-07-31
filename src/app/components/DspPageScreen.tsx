import DspPage from "@/imports/DspPage/index";
import { ManagePlanContext } from "@/imports/DspPage/manage-plan-context";
import { GoBackContext } from "@/imports/DspPage/go-back-context";
import { CashBalanceContext } from "@/imports/DspPage/cash-balance-context";

/** The user's Data Savings Plan home page, reached from "Go to my plan" on the
 *  "Welcome to your Data Savings Plan" screen. The design is taller than the
 *  device frame, so it scrolls vertically. */
export function DspPageScreen({ onManageMyPlan, onBack, onCashBalance }: { onManageMyPlan?: () => void; onBack?: () => void; onCashBalance?: () => void }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <GoBackContext.Provider value={onBack}>
        <ManagePlanContext.Provider value={onManageMyPlan}>
          <CashBalanceContext.Provider value={onCashBalance}>
            <DspPage />
          </CashBalanceContext.Provider>
        </ManagePlanContext.Provider>
      </GoBackContext.Provider>
    </div>
  );
}
