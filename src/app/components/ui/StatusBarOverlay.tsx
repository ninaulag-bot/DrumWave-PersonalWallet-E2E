import React from "react";
import { StatusBar } from "./StatusBar";

/**
 * Hide Figma-baked status bars under `hostClass`, and pin the shared
 * StatusBar overlay at the top of the screen wrapper (sibling of the host).
 * StatusBar itself is absolute; this wrapper keeps z-index / hide-CSS scoped.
 */
export function UnifiedStatusBar({
  hostClass,
  style = {},
}: {
  hostClass: string;
  style?: React.CSSProperties;
}) {
  return (
    <>
      <style>{`
        .${hostClass} [data-name="Status Bar - iPhone"],
        .${hostClass} [data-name="Status Bar"],
        .${hostClass} [data-name="Status Bar/Pro"] { display: none !important; }
      `}</style>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          pointerEvents: "none",
          ...style,
        }}
      >
        <StatusBar />
      </div>
    </>
  );
}
