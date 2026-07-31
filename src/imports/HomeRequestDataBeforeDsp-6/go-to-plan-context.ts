import { createContext } from "react";

/** Fired when the "Go to my plan" button is clicked on the approved home screen. */
export const GoToMyPlanContext = createContext<(() => void) | undefined>(undefined);
