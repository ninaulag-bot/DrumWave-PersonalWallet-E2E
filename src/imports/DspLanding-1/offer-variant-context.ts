import { createContext } from "react";

/**
 * Which account state is viewing the DSP Landing screen. Two things differ:
 *  - "enrolled"        → data balance 0, original stacked Tesla hero photos
 *  - "receivingOffers" → data balance 4, the Rivian offer photo (Figma 13:55374)
 *  - "dataCertificates" → same as "enrolled" plus the "My relationships"
 *    section on the home screen (Figma 9:53425). Every other check in this
 *    codebase tests `=== "receivingOffers"`, so this value falls through to
 *    the enrolled look everywhere else.
 * Defaults to "enrolled" so any call site that doesn't pass it keeps the
 * original look.
 */
export type OfferVariant = "enrolled" | "receivingOffers" | "dataCertificates";

export const OfferVariantContext = createContext<OfferVariant>("enrolled");
