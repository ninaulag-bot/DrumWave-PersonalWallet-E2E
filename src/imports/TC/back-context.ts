import { createContext } from "react";

/** Callback invoked when the back arrow on the Terms & Conditions page is
 *  pressed. Provided by the Terms & Conditions screen wrapper. */
export const TermsBackContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the "Accept terms & continue" button on the Terms &
 *  Conditions page is pressed. Provided by the Terms & Conditions screen wrapper. */
export const TermsAcceptContext = createContext<(() => void) | undefined>(undefined);
