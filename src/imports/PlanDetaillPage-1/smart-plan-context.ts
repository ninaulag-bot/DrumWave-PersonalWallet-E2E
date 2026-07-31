import { createContext } from "react";

/** Callback invoked when the "Join this plan" button on the dSavings Smart plan
 *  detail page is pressed. Provided by the PlanDetail (Smart) screen wrapper. */
export const SmartJoinPlanContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the back arrow on the dSavings Smart plan detail page
 *  is pressed. Provided by the PlanDetail (Smart) screen wrapper. */
export const SmartPlanDetailBackContext = createContext<(() => void) | undefined>(undefined);
