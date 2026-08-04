import Continue from "@/imports/Continue/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface OfferContinueScreenProps {
  /** "Continue enrollment" CTA — opens the DSP enrollment form. */
  onContinue?: () => void;
}

/** Post-claim "Continue enrollment" screen (Offer 1.0), reached once the
 *  "Claiming your Tesla data" progress bar finishes. Renders the read-only
 *  import as-is and overlays a transparent tap-target on the primary CTA. */
export function OfferContinueScreen({ onContinue }: OfferContinueScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="offer-continue-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <Continue />

        {/* "Continue enrollment" CTA tap-target. The offer card sits at top 121px /
            left 25px; the button (Offer CTAs, 310×36) is below the 456px hero plus
            the footer's top padding (20) + benefit row (~24) + gap (16). */}
        <button
          type="button"
          onClick={onContinue}
          aria-label="Continue enrollment"
          style={{
            position: "absolute",
            top: "637px",
            left: "41px",
            width: "310px",
            height: "36px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 5,
          }}
        />
          </div>
      <UnifiedStatusBar hostClass="offer-continue-sb" />
    </div>
  );
}
