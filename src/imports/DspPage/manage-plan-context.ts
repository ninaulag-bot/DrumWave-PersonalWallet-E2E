import { createContext } from "react";
export const ManagePlanContext = createContext<(() => void) | undefined>(undefined);
