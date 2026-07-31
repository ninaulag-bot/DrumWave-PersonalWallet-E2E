import { createContext } from "react";

/** Callback invoked when the "Accept terms & continue" button on the dSavings
 *  Smart Terms & Conditions screen is pressed. Provided by the screen wrapper. */
export const SmartTermsAcceptContext = createContext<(() => void) | undefined>(undefined);
