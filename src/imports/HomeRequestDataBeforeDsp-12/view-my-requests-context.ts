import { createContext } from "react";

/** Fired when the "View my requests" button on the home screen is tapped.
 *  Matches the co-located context pattern used by DspLanding-1 — this baked
 *  export has no other interactive elements, so a callback prop would have to
 *  be threaded through six wrapper frames to reach Frame62. */
export const ViewMyRequestsContext = createContext<(() => void) | undefined>(undefined);

/** Fired when the Tesla tile under "My relationships" is tapped — same reason
 *  for a context as above: MyRelationships sits four frames deep. Only the
 *  dataCertificates variant renders that tile. */
export const TeslaRelationshipContext = createContext<(() => void) | undefined>(undefined);
