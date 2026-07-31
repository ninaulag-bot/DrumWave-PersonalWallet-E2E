// Certificate + company data for the data-certificate screens.
//
// The prototype had no data layer at all — every screen hardcoded its own strings
// inside a static Figma import. The Company(s) section on the certificate detail
// screen has to render a variable number of companies, so it needs real data.
// Kept deliberately small and presentational: display-ready strings, no fetching.

export type CompanyStatus = "accepted" | "updated";

export interface Company {
  id: string;
  name: string;
  status: CompanyStatus;
  /** Pre-formatted for display — the prototype has no date formatting layer. */
  date: string;
  /**
   * Real logo asset. Left undefined for companies whose brand mark hasn't been
   * exported from Figma yet — those fall back to the design's own placeholder
   * treatment (a #414141 circle), which is what the Figma frame specifies for
   * "Company 4" / "Company 5". Never fabricate a brand mark.
   */
  logoSrc?: string;
  /** Brand circle fill used when there's no logoSrc but the brand colour is known. */
  brandColor?: string;
}

export interface Certificate {
  id: string;
  /** e.g. "Vehicle Registration" — shown in the My data value card. */
  title: string;
  /** e.g. "Vehicle Performance Data" — the screen header. */
  headerTitle: string;
  companies: Company[];
}

/**
 * Vehicle Registration is currently the only certificate with a detail design in
 * Figma (verified 2026-07-30: 8 detail frames, all this certificate). The other
 * five list certificates — Purchase Order, Warranty Service Plan, Autopilot Trip
 * Log, Energy Charging, Driver Profile — have list cards but no detail frame yet.
 */
export const VEHICLE_REGISTRATION: Certificate = {
  id: "vehicle-registration",
  title: "Vehicle Registration",
  headerTitle: "Vehicle Performance Data",
  companies: [
    { id: "tesla",     name: "Tesla",     status: "accepted", date: "Jan 25, 2026", brandColor: "#DD2222" },
    { id: "uber",      name: "Uber",      status: "updated",  date: "Jan 25, 2026" },
    { id: "rivian",    name: "Rivian",    status: "accepted", date: "Jan 25, 2026" },
    { id: "company-4", name: "Company 4", status: "accepted", date: "Jan 25, 2026" },
    { id: "company-5", name: "Company 5", status: "accepted", date: "Jan 25, 2026" },
    { id: "company-6", name: "Company 6", status: "accepted", date: "Jan 25, 2026" },
  ],
};

/** "Tesla, Uber and 4 more" — matches the Figma summary row for any list length. */
export function formatCompanySummary(companies: Company[]): string {
  const names = companies.map((c) => c.name);
  if (names.length === 0) return "None";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names[0]}, ${names[1]} and ${names.length - 2} more`;
}

export function formatCompanyStatus(company: Company): string {
  const verb = company.status === "updated" ? "Updated" : "Accepted";
  return `${verb} on ${company.date}`;
}
