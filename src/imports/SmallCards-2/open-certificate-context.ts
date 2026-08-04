import { createContext } from "react";

/** Fired by tapping this card, which opens the Vehicle Registration certificate
 *  detail screen (step 73). Scoped to this export only: SmallCards-2 is the
 *  Vehicle Registration card, and its five siblings (SmallCards-3…-7) have no
 *  detail frame in Figma, so they stay non-tappable. Left undefined elsewhere,
 *  in which case the card renders exactly as before with no pointer cursor. */
export const OpenCertificateContext = createContext<(() => void) | undefined>(undefined);
