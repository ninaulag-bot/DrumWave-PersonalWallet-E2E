import { createContext } from "react";

/** True once the user has joined a second DSP (Fitness). Switches the home
 *  section label to "Data Savings Plans" and routes the tap to the all-plans
 *  overview. */
export const HasSecondPlanContext = createContext(false);
