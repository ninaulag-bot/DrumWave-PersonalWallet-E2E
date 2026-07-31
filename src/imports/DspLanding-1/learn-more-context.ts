import { createContext } from "react";

/** Callback invoked when the "Learn more" button on the DSP landing screen is pressed. */
export const LearnMoreContext = createContext<(() => void) | undefined>(undefined);
