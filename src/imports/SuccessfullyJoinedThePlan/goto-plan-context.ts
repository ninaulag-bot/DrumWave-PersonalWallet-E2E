import { createContext } from "react";

/** Callback invoked when the "Go to my plan" button on the "Welcome to your Data
 *  Savings Plan" screen is pressed. Provided by the screen wrapper. */
export const GoToPlanContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the "Join another plan" button on the "Welcome to your
 *  Data Savings Plan" screen is pressed. Provided by the screen wrapper. */
export const JoinAnotherPlanContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the X (close) button on the "Welcome to your Data
 *  Savings Plan" screen is pressed. Provided by the screen wrapper. */
export const CloseContext = createContext<(() => void) | undefined>(undefined);
