import { createContext } from "react";
export const AutoRenewToggleContext = createContext<(() => void) | undefined>(undefined);
