import { createContext } from "react";

/** Callback invoked when the "Join this plan" button on this dSavings Smart plan
 *  detail page is pressed. Provided by the screen wrapper. */
export const Smart2JoinPlanContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the back arrow on this dSavings Smart plan detail page
 *  is pressed. Provided by the screen wrapper. */
export const Smart2PlanDetailBackContext = createContext<(() => void) | undefined>(undefined);
