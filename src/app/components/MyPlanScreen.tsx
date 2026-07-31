import Component from "@/imports/UnnamedComponent-4/index";
import { CloseContext } from "@/imports/UnnamedComponent-4/close-context";
import { GoToPlanContext } from "@/imports/UnnamedComponent-4/go-to-plan-context";

/** "Welcome to your Data Savings Plan" landing page, reached from the
 *  "Go to my plan" button on the Approved + not joined home screen. */
export function MyPlanScreen({ onClose, onGoToPlan }: { onClose?: () => void; onGoToPlan?: () => void }) {
  return (
    <CloseContext.Provider value={onClose}>
      <GoToPlanContext.Provider value={onGoToPlan}>
        <div
          className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ position: "relative", width: "100%", height: "100%", overflowX: "hidden", overflowY: "auto" }}
        >
          <Component />
        </div>
      </GoToPlanContext.Provider>
    </CloseContext.Provider>
  );
}
