import { createContext } from "react";
export type ManagedPlan = "smart" | "fitness";
export const PlanContext = createContext<ManagedPlan>("fitness");
