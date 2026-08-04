import { createContext } from "react";

/** Fired when the "Data Savings Plan" section header (title + chevron) on the
 *  home screen is tapped. Context rather than a prop because Frame49 sits five
 *  frames deep inside this baked export. */
export const SavingsPlanSectionContext = createContext<(() => void) | undefined>(undefined);
