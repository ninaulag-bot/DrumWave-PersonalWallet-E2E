import React from "react";

export function GradientGlowCard({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "138px",
        boxSizing: "border-box",
        borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
