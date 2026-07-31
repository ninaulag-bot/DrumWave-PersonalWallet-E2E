import { createContext, useContext } from "react";

export const HomeViewAllPlansContext = createContext<(() => void) | undefined>(undefined);

export function useViewAllPlans() {
  return useContext(HomeViewAllPlansContext);
}
