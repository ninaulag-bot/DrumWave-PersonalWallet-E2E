import { createContext } from "react";

/** Callback invoked when the "View details" button on the dSavings Smart plan
 *  card is pressed within the "Join another plan" Choose Plans screen. Provided
 *  by the screen wrapper and consumed deep in the generated card tree. */
export const Smart2DetailsContext = createContext<(() => void) | undefined>(undefined);
