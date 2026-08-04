import { createContext } from "react";

/** Fired when the "Data contribution" row is tapped. Only provided in the data
 *  certificates flow, where the row's chevron is visible. */
export const DataContributionContext = createContext<(() => void) | undefined>(undefined);
