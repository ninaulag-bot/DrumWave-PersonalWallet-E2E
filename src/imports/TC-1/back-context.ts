import { createContext } from "react";

/** Callback invoked when the back arrow on the dSavings Smart Terms & Conditions
 *  screen is pressed. Provided by the screen wrapper. Mirrors TC/back-context.ts,
 *  which does the same for the base Terms & Conditions export. */
export const SmartTermsBackContext = createContext<(() => void) | undefined>(undefined);
