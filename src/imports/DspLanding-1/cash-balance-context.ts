import { createContext } from "react";

/** Callback invoked when the "Cash balance" card on the DSP Landing screen is pressed. */
export const CashBalanceContext = createContext<(() => void) | undefined>(undefined);
