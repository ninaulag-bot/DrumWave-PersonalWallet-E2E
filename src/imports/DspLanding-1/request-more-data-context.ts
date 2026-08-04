import { createContext } from "react";

/** Fired when a "Request" pill under Request more data is tapped. */
export const RequestMoreDataContext = createContext<(() => void) | undefined>(undefined);
