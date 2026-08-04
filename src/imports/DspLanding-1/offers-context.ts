import { createContext } from "react";

/** Fired when the "Offers" tab in the bottom nav bar is tapped. */
export const OffersContext = createContext<(() => void) | undefined>(undefined);
