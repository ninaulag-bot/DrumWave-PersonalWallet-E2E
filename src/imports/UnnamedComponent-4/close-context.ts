import { createContext } from "react";

/** Fired when the X button is pressed on the "Welcome to your Data Savings Plan" screen. */
export const CloseContext = createContext<(() => void) | undefined>(undefined);
