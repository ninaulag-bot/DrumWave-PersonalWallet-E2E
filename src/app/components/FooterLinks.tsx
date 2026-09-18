import { useState } from "react";
import caretIcon from "@/imports/Footer/caret-down.svg";

/** Footer link accordion — Figma "[DEV] BdW / PdW / Footer" node 56:13757
 *  ("Dropdown open"). Three sections that collapse when their caret row is
 *  tapped; all three open by default, which is the state the frame shows.
 *  Added to the bottom of every home screen's scrolling content. */

const SECTIONS = [
  { key: "company", title: "Company", links: ["Resources", "DrumWave.com", "Terms & Conditions"], underline: false },
  { key: "contact", title: "Contact", links: ["Get in touch", "Contact Sales Team"], underline: false },
  { key: "trust",   title: "Trust",   links: ["Security", "Privacy Policy"], underline: true },
] as const;

export function FooterLinks() {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        padding: "0 24px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
      }}
    >
      {SECTIONS.map(section => {
        const isCollapsed = !!collapsed[section.key];
        return (
          <div key={section.key} style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            {/* Caret row */}
            <button
              type="button"
              onClick={() => setCollapsed(c => ({ ...c, [section.key]: !c[section.key] }))}
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  height: 44,
                  width: 74,
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#e3e3e3",
                  whiteSpace: "nowrap",
                }}
              >
                {section.title}
              </span>
              <img
                src={caretIcon}
                alt=""
                style={{
                  width: 30,
                  height: 30,
                  flexShrink: 0,
                  transform: isCollapsed ? "rotate(180deg)" : "none",
                  transition: "transform 220ms ease",
                }}
              />
            </button>

            {/* Links */}
            {!isCollapsed &&
              section.links.map(link => (
                <div
                  key={link}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "0 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      flex: "1 0 0",
                      minWidth: 0,
                      height: 44,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: 11,
                      lineHeight: 1.5,
                      letterSpacing: "-0.121px",
                      color: "#e3e3e3",
                      textDecoration: section.underline ? "underline" : "none",
                    }}
                  >
                    {link}
                  </span>
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}
