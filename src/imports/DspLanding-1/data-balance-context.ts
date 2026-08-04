import { createContext } from "react";

/** Fired when the Data balance card on the DSP Landing screen is tapped.
 *  Mirrors cash-balance-context — same co-located pattern, same reason (the
 *  card sits several frames deep in the baked export). Only the certificates
 *  flow wires it today (Figma 9:94403). */
export const DataBalanceContext = createContext<(() => void) | undefined>(undefined);
