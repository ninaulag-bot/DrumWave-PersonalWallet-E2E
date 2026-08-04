import { createContext } from "react";

/** Fired when the "Redeem offer" CTA on the offer card is tapped — same reason
 *  for a context as the other controls in this export: OfferCard sits four
 *  frames deep. */
export const RedeemOfferContext = createContext<(() => void) | undefined>(undefined);
