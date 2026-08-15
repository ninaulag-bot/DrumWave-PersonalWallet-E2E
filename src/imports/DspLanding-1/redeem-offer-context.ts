import { createContext } from "react";

/** Callback invoked when the "Redeem offer" button on the Tesla offer card is pressed. */
export const RedeemOfferContext = createContext<(() => void) | undefined>(undefined);
