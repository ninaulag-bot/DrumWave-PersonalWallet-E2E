import { createContext } from "react";

/** Callback invoked when the "Join this plan" button on the plan detail page is
 *  pressed. Provided by the plan detail screen wrapper. */
export const JoinPlanContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the back arrow on the plan detail page is pressed.
 *  Provided by the plan detail screen wrapper. */
export const PlanDetailBackContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the X (close) button on the plan detail page is pressed.
 *  Provided by the plan detail screen wrapper. */
export const PlanDetailCloseContext = createContext<(() => void) | undefined>(undefined);
