import React from "react";

interface ScreenWithNavBarProps {
  children: React.ReactNode;
  navBar: React.ReactNode;
  navBarHeight?: number;
}

/**
 * Structural wrapper for screens that have a pinned bottom nav bar.
 * The scroll area ends above the nav bar so content is never obscured.
 */
export function ScreenWithNavBar({ children, navBar, navBarHeight = 72 }: ScreenWithNavBarProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* Scroll area — full height; nav bar overlays the bottom via z-index */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
        }}
        className="[&::-webkit-scrollbar]:hidden"
      >
        {/* Content column — paddingBottom is the sole clearance for the nav bar */}
        <div
          style={{
            paddingBottom: `calc(${navBarHeight}px + env(safe-area-inset-bottom, 0px))`,
            minHeight: "100%",
            boxSizing: "border-box",
          }}
        >
          {children}
        </div>
      </div>
      {/* Nav bar — sibling of scroll area, always anchored to the bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10 }}>
        {navBar}
      </div>
    </div>
  );
}
