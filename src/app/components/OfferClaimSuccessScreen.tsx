import OfferClaimSuccess from "@/imports/OfferClaimSuccess/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

/** "You've claimed this offer" success screen (Offer 1.0), reached after the
 *  required knob is turned on and "Continue without changes" is pressed. Renders
 *  the read-only import as-is. */
export function OfferClaimSuccessScreen({ onDone }: { onDone?: () => void }) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="offer-claim-success-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <OfferClaimSuccess />
        {/* Transparent tap target over the baked "Done" button (Frame2 in the
            import: left 22, top 748, 344×44). */}
        <button
          type="button"
          onClick={onDone}
          aria-label="Done"
          style={{
            position: "absolute",
            left: 22,
            top: 748,
            width: 344,
            height: 44,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
          </div>
      <UnifiedStatusBar hostClass="offer-claim-success-sb" />
    </div>
  );
}
