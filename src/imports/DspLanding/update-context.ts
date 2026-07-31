import { createContext } from "react";

/** Callback invoked when the "Update data contributions" button on the
 *  Contribution settings screen is pressed. Provided by the screen wrapper. */
export const UpdateContributionsContext = createContext<(() => void) | undefined>(undefined);
