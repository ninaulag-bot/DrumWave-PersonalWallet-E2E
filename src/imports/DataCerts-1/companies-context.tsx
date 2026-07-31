import { createContext, useContext, type ReactNode } from "react";

/**
 * Lets the screen inject a live Company(s) section into this generated import,
 * replacing the baked-in "Company(s) — Tesla" row. Same co-located-context
 * pattern as Home/view-all-plans-context.tsx and TC/back-context.tsx.
 *
 * A ReactNode (not a callback) so the import stays dumb: it renders whatever the
 * screen supplies, and all state/data lives in CertificateCompaniesSection.
 * When null, the import falls back to its original static row.
 */
export const CertificateCompaniesContext = createContext<ReactNode>(null);

export function useCertificateCompaniesSlot() {
  return useContext(CertificateCompaniesContext);
}
