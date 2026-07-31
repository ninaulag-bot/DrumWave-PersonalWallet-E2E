import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Profile2Import from "@/imports/Profile-2/index";
import svgPathsProfile2 from "@/imports/Profile-2/svg-uyscjs6v9k";

interface PhotoSavedScreenProps {
  onComplete: () => void;
  onBack: () => void;
}

type Phase = "enter" | "hold" | "exit";

export function PhotoSavedScreen({ onComplete, onBack }: PhotoSavedScreenProps) {
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    if (phase === "enter") {
      // Allow spring animation to settle (~600ms), then hold
      const t = setTimeout(() => setPhase("hold"), 600);
      return () => clearTimeout(t);
    }
    if (phase === "hold") {
      // Hold visible for 3 seconds, then exit
      const t = setTimeout(() => setPhase("exit"), 3000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Profile2Import />

      {/* Cover the static toast baked into the import — matched to #070707 bg */}
      <div style={{
        position: "absolute",
        top: "62px",
        left: "22px",
        width: "344px",
        height: "62px",
        background: "#070707",
        zIndex: 15,
      }} />

      {/* Animated toast — slides in from above, holds, slides back out */}
      <motion.div
        initial={{ y: -160 }}
        animate={{ y: phase === "exit" ? -160 : 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 280 }}
        onAnimationComplete={() => {
          if (phase === "exit") onComplete();
        }}
        style={{
          position: "absolute",
          top: "62px",
          left: "22px",
          width: "344px",
          zIndex: 20,
          background: "#004e2c",
          borderRadius: "16px",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Left: round checkmark + label */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexShrink: 0 }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d={svgPathsProfile2.pd01100} fill="#E3E3E3" />
              <path clipRule="evenodd" d={svgPathsProfile2.p14951d00} fill="#E3E3E3" fillRule="evenodd" />
              <path d={svgPathsProfile2.p3791280} fill="#004E2C" />
            </svg>
          </div>
          <p style={{
            margin: 0,
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "14px",
            color: "var(--color-text-primary)",
            whiteSpace: "nowrap",
          }}>
            Photo successfully updated!
          </p>
        </div>

        {/* Right: close X — clicking dismisses the toast immediately */}
        <button
          type="button"
          onClick={() => setPhase("exit")}
          aria-label="Dismiss notification"
          style={{
            width: "20px",
            height: "20px",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <div style={{ position: "absolute", inset: "20.83%" }}>
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              fill="none"
              viewBox="0 0 11.6667 11.6667"
            >
              <path d={svgPathsProfile2.p19fbbe60} fill="white" />
            </svg>
          </div>
        </button>
      </motion.div>

      {/* Back arrow overlay — same position as Profile-2 header */}
      <button
        type="button"
        onClick={onBack}
        aria-label="Go back"
        style={{
          position: "absolute",
          top: "71px",
          left: "12px",
          width: "80px",
          height: "48px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 25,
        }}
      />
    </div>
  );
}
