import { createContext } from "react";

/** Fired when "Go to my plan" is pressed on the "Welcome to your Data Savings Plan" screen. */
export const GoToPlanContext = createContext<(() => void) | undefined>(undefined);
