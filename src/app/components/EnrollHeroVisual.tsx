import React from "react";
import { StatusBar } from "@/app/components/ui/StatusBar";
import DspIntroSplash from "@/imports/DspIntroSplashDesktop4X/index";

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white" />
    </svg>
  );
}

interface EnrollHeroVisualProps {
  onClose?: () => void;
}

export function EnrollHeroVisual({ onClose }: EnrollHeroVisualProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "450px", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 10 }}>
        <StatusBar />
      </div>
      <div style={{ position: "absolute", inset: 0 }}>
        <DspIntroSplash />
      </div>
      <div style={{ position: "absolute", left: "24px", top: "71px", width: "342px", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
        <div style={{ opacity: 0, width: "24px", height: "24px" }} aria-hidden />
        <p style={{ margin: 0, flex: "1 0 0", opacity: 0, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "white", textAlign: "center" }} aria-hidden>
          Data Savings Plan
        </p>
        <button type="button" onClick={onClose} aria-label="Close" style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: "24px", height: "24px", zIndex: 10 }}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
