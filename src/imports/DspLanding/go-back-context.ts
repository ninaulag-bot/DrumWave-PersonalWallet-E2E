import { createContext } from "react";

/** Callback invoked when the back arrow on the Contribution settings screen is
 *  pressed. Provided by the screen wrapper. */
export const GoBackContext = createContext<(() => void) | undefined>(undefined);
