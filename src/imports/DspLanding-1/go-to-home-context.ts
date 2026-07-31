import { createContext } from "react";

/** Fired when the home icon in the bottom nav bar is tapped. */
export const GoToHomeContext = createContext<(() => void) | undefined>(undefined);
