import { createContext } from "react";

/** Fired by the "Back to all plans" link above the hero card. Only provided when
 *  this screen was opened from the all-plans overview (step 84); left undefined
 *  everywhere else, and the link renders nothing at all when it is. */
export const BackToAllPlansContext = createContext<(() => void) | undefined>(undefined);
