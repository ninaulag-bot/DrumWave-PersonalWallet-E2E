import { createContext } from "react";

/** Fired when the "Manage my plan" button is clicked on the DSP landing screen. */
export const ManageMyPlanContext = createContext<(() => void) | undefined>(undefined);
