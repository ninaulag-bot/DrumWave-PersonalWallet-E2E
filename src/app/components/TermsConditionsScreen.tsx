import TC from "@/imports/TC/index";
import { TermsBackContext, TermsAcceptContext } from "@/imports/TC/back-context";

interface TermsConditionsScreenProps {
  /** Called when the back arrow is pressed. */
  onBack?: () => void;
  /** Called when the "Accept terms & continue" button is pressed. */
  onAccept?: () => void;
}

/** Terms & Conditions screen, shown after the user presses "Join this plan" on
 *  the plan detail page. Renders the read-only import as-is. */
export function TermsConditionsScreen({ onBack, onAccept }: TermsConditionsScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      <TermsBackContext.Provider value={onBack}>
        <TermsAcceptContext.Provider value={onAccept}>
          <TC />
        </TermsAcceptContext.Provider>
      </TermsBackContext.Provider>
    </div>
  );
}
