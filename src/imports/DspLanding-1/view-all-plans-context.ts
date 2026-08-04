import { createContext } from "react";

/** Callback invoked when a "View all plans" button in the "Other plans you
 *  qualify for" section is pressed. Provided by the DSP landing screen wrapper
 *  and consumed deep in the generated card tree. */
export const ViewAllPlansContext = createContext<(() => void) | undefined>(undefined);
