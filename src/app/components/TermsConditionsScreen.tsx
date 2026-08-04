import TC from "@/imports/TC/index";
import { TermsBackContext, TermsAcceptContext } from "@/imports/TC/back-context";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

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
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* 54px top pad: UnifiedStatusBar hides the baked 54px status band, which
          collapsed the in-flow header up under the overlay. Keep that space. */}
      <div className="terms-conditions-sb" style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", paddingTop: 54, boxSizing: "border-box" }}>
        <TermsBackContext.Provider value={onBack}>
          <TermsAcceptContext.Provider value={onAccept}>
            <TC />
          </TermsAcceptContext.Provider>
        </TermsBackContext.Provider>
          </div>
      <UnifiedStatusBar hostClass="terms-conditions-sb" />
    </div>
  );
}
