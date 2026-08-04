import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DrumWaveLogo } from "@/app/components/DrumWaveLogo";
import accountCirclePng from "@/imports/account_circle.png";

/** Expandable hamburger pill — Account settings + Logout. Pinned via absolute positioning by the parent. */
export function TopNav({ name, onAccountSettings }: { name: string; onAccountSettings?: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const firstName = name.split(" ")[0] || "Carolina";

  const rowStyle: React.CSSProperties = {
    height: "36px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    paddingTop: "4px",
  };

  return (
    <>
      {/* Tap-outside dismissal */}
      {expanded && (
        <div
          onClick={() => setExpanded(false)}
          style={{ position: "absolute", inset: 0, zIndex: 99 }}
        />
      )}

      {/* Nav pill */}
      <div
        style={{
          position: "absolute",
          top: "70px",
          left: "24px",
          width: "342px",
          background: "rgba(41, 41, 41, 0.60)",
          backdropFilter: "blur(2.5px)",
          WebkitBackdropFilter: "blur(2.5px)",
          borderRadius: "12px",
          padding: "8px 16px",
          display: "flex",
          flexDirection: "column",
          zIndex: 100,
          boxSizing: "border-box",
        }}
      >
        {/* Header row — always visible */}
        <div style={{
          height: "36px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}>
          {/* Content group: logo + text */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
            <DrumWaveLogo size={24} />
            <span
              style={{
                fontFamily: "var(--mobile-subheading-small-regular-font-family)",
                fontWeight: "var(--mobile-subheading-small-regular-font-weight)" as React.CSSProperties["fontWeight"],
                fontSize: "var(--mobile-subheading-small-regular-font-size)",
                lineHeight: "var(--mobile-subheading-small-regular-line-height)",
                color: "#FFFFFF",
              }}
            >
              Welcome back, {firstName}!
            </span>
          </div>

          {/* Hamburger / X toggle */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              width: "24px",
              height: "24px",
              position: "relative",
              flexShrink: 0,
              padding: 0,
            }}
          >
            {expanded ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ position: "absolute", left: "5px", top: "5px" }}
              >
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                style={{ position: "absolute", left: "3px", top: "6px" }}
              >
                <rect y="0" width="18" height="1.5" rx="0.75" fill="white" />
                <rect y="5" width="18" height="1.5" rx="0.75" fill="white" />
                <rect y="10" width="18" height="1.5" rx="0.75" fill="white" />
              </svg>
            )}
          </button>
        </div>

        {/* Expanded rows */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="menu-items"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: "24px", marginTop: "24px" }}
            >
              {/* Account settings */}
              <div style={{ ...rowStyle, cursor: "pointer" }} onClick={onAccountSettings}>
                <img
                  src={accountCirclePng}
                  alt="Profile"
                  style={{ width: "24px", height: "24px", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: "var(--mobile-subheading-regular-14-font-family)",
                    fontWeight: "var(--mobile-subheading-regular-14-font-weight)" as React.CSSProperties["fontWeight"],
                    fontSize: "var(--mobile-subheading-regular-14-font-size)",
                    lineHeight: "var(--mobile-subheading-regular-14-line-height)",
                    color: "#C9C9C9",
                  }}
                >
                  Account settings
                </span>
              </div>

              {/* Logout */}
              <div style={{ ...rowStyle, cursor: "pointer" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M10 19H5a1 1 0 01-1-1V6a1 1 0 011-1h5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 16l4-4-4-4M19 12H9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--mobile-subheading-regular-14-font-family)",
                    fontWeight: "var(--mobile-subheading-regular-14-font-weight)" as React.CSSProperties["fontWeight"],
                    fontSize: "var(--mobile-subheading-regular-14-font-size)",
                    lineHeight: "var(--mobile-subheading-regular-14-line-height)",
                    color: "#C9C9C9",
                  }}
                >
                  Logout
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
