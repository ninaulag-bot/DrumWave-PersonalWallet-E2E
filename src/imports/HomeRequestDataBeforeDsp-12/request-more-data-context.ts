import { createContext } from "react";

/** Fired when the "Request more data" button on the home screen is tapped.
 *  Same co-located context pattern as ViewMyRequests — Button sits several
 *  frames deep in the baked export. */
export const RequestMoreDataContext = createContext<(() => void) | undefined>(undefined);
