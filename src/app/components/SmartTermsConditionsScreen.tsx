import TC from "@/imports/TC-1/index";
import { SmartTermsAcceptContext } from "@/imports/TC-1/accept-context";

interface SmartTermsConditionsScreenProps {
  /** Called when "Accept terms & continue" is pressed. */
  onAccept?: () => void;
}

/** Terms & Conditions screen, reached from "Update data contributions" on the
 *  Contribution settings screen for the dSavings Smart plan. The design is
 *  taller than the device frame, so it scrolls vertically. */
export function SmartTermsConditionsScreen({ onAccept }: SmartTermsConditionsScreenProps) {
  return (
    <div
      className="[&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}
    >
      <SmartTermsAcceptContext.Provider value={onAccept}>
        <TC />
      </SmartTermsAcceptContext.Provider>
    </div>
  );
}
