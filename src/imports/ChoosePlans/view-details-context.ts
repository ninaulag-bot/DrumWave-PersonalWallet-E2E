import { createContext } from "react";

/** Callback invoked when the "View details" button on the dSavings Fitness plan
 *  card is pressed. Provided by the ChoosePlans screen wrapper and consumed deep
 *  in the generated card tree, avoiding prop-threading through many components. */
export const FitnessDetailsContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the "X" (close) button in the Choose Plans header is
 *  pressed. Provided by the ChoosePlans screen wrapper. */
export const ChoosePlansCloseContext = createContext<(() => void) | undefined>(undefined);

/** Callback invoked when the "View details" button on the dSavings Smart plan
 *  card is pressed. Provided by the ChoosePlans screen wrapper. */
export const SmartDetailsContext = createContext<(() => void) | undefined>(undefined);
