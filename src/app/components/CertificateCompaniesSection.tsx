import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CompanyListRow } from "./CompanyListRow";
import { type Company, formatCompanySummary } from "@/app/data/certificates";

/**
 * The Company(s) section on the certificate detail screen.
 *
 * Replaces the single hardcoded "Company(s) — Tesla" row that was baked into
 * @/imports/DataCerts-1. Collapsed it shows a computed summary ("Tesla, Uber and
 * 4 more"); expanded it lists every company as its own row. Driven entirely by the
 * `companies` array, so it works for any length — nothing is hardcoded to 5.
 *
 * It is injected into the read-only import via CompaniesContext (the codebase's
 * established pattern for making a generated import interactive). Because that
 * import lays out with flexbox rather than absolute positioning, expanding this
 * section reflows Category / Contribution / My products & services / My data
 * value down the page automatically — none of those sections were touched.
 *
 * Literal spacing/colour values come from the Figma dev-mode spec for node 9-44379.
 */

const SPRING = { type: "spring" as const, damping: 30, stiffness: 280 };

export function CertificateCompaniesSection({
  companies,
  onSelectCompany,
}: {
  companies: Company[];
  onSelectCompany?: (company: Company) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = companies.length > 0;

  return (
    <div style={{ alignSelf: "stretch", width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Summary row — label left, computed summary + chevron right */}
      <button
        type="button"
        onClick={() => canExpand && setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse company list" : "Expand company list"}
        disabled={!canExpand}
        style={{
          alignSelf: "stretch",
          width: "100%",
          minHeight: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          background: "transparent",
          border: "none",
          padding: 0,
          margin: 0,
          textAlign: "left",
          cursor: canExpand ? "pointer" : "default",
        }}
      >
        {/* The spec gives this label width:250, but at 310px of usable row width that
            forces the summary onto a second line. Figma renders it on one line, so the
            label takes its natural width and the value fills the rest, right-aligned. */}
        <span
          style={{
            flexShrink: 0,
            color: "var(--color-text-inactive, #999999)",
            fontSize: 14,
            fontFamily: "var(--font-family-secondary)",
            fontWeight: 400,
            lineHeight: "21px",
          }}
        >
          Company(s)
        </span>

        <span style={{ flex: 1, minWidth: 0, display: "flex", justifyContent: "flex-end", alignItems: "flex-start", gap: 8 }}>
          <span
            style={{
              color: "var(--color-text-default, #E3E3E3)",
              fontSize: 14,
              fontFamily: "var(--font-family-secondary)",
              fontWeight: 400,
              lineHeight: "21px",
              textAlign: "right",
              whiteSpace: "nowrap",
            }}
          >
            {formatCompanySummary(companies)}
          </span>

          {/* 24×24 box with a 12×7.4 chevron; rotates 180° when expanded */}
          <motion.span
            aria-hidden="true"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ width: 24, height: 24, position: "relative", display: "block", flexShrink: 0 }}
          >
            <svg
              width="12"
              height="7.4"
              viewBox="0 0 12 7.4"
              fill="none"
              style={{ position: "absolute", left: 6, top: 8.6, display: "block" }}
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="var(--color-icon-default, #E3E3E3)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </span>
      </button>

      {/* Expanded list — one row per company, 24px gap, matching the spec */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="company-rows"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={SPRING}
            style={{ alignSelf: "stretch", width: "100%", overflow: "hidden" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
              {companies.map((c) => (
                <CompanyListRow
                  key={c.id}
                  company={c}
                  onClick={onSelectCompany ? () => onSelectCompany(c) : undefined}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
