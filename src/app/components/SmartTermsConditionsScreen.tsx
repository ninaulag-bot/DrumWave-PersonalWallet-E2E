import TC from "@/imports/TC-1/index";
import { SmartTermsAcceptContext } from "@/imports/TC-1/accept-context";
import { SmartTermsBackContext } from "@/imports/TC-1/back-context";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface SmartTermsConditionsScreenProps {
  /** Called when "Accept terms & continue" is pressed. */
  onAccept?: () => void;
  /** Called when the back arrow in the header is pressed. */
  onBack?: () => void;
}

/** Terms & Conditions screen, reached from "Update data contributions" on the
 *  Contribution settings screen for the dSavings Smart plan. The design is
 *  taller than the device frame, so it scrolls vertically. */
export function SmartTermsConditionsScreen({ onAccept, onBack }: SmartTermsConditionsScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div
        className="smart-terms-sb [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}
      >
        <SmartTermsAcceptContext.Provider value={onAccept}>
          <SmartTermsBackContext.Provider value={onBack}>
            <TC />
          </SmartTermsBackContext.Provider>
        </SmartTermsAcceptContext.Provider>
      </div>
      <UnifiedStatusBar hostClass="smart-terms-sb" />
    </div>
  );
}
