import { createContext } from "react";

/** Fired when the back arrow is tapped on the Manage plan screen. */
export const GoBackContext = createContext<(() => void) | undefined>(undefined);
