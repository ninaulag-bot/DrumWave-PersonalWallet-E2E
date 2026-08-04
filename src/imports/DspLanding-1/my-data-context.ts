import { createContext } from "react";

/** Fired when the "My data" tab in the bottom nav bar is tapped. */
export const MyDataContext = createContext<(() => void) | undefined>(undefined);
