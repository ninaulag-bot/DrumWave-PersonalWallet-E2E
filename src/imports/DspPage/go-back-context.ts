import { createContext } from "react";
export const GoBackContext = createContext<(() => void) | undefined>(undefined);
