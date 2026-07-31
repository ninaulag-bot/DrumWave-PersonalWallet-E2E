import OfferClaimSuccess from "@/imports/OfferClaimSuccess/index";

/** "You've claimed this offer" success screen (Offer 1.0), reached after the
 *  required knob is turned on and "Continue without changes" is pressed. Renders
 *  the read-only import as-is. */
export function OfferClaimSuccessScreen() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <OfferClaimSuccess />
    </div>
  );
}
