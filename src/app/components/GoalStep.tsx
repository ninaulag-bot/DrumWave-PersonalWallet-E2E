import React, { useRef } from "react";

function GoalGlow() {
  return null;
}

/** Top of the goal slider's range, in dollars/year. */
const GOAL_MAX = 1000;

function GoalSlider({
  value,
  disabled,
  onChangeValue,
}: {
  value: number;
  disabled: boolean;
  onChangeValue: (v: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const resolveValue = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    // Snap to $25 so the big number reads as a round figure at the top of the range.
    onChangeValue(Math.round((pct * GOAL_MAX) / 25) * 25);
  };

  const pct = value / GOAL_MAX;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
      {/* Interactive track area */}
      <div
        ref={trackRef}
        style={{
          position: "relative",
          height: "48px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          cursor: disabled ? "default" : "pointer",
          pointerEvents: disabled ? "none" : "auto",
          touchAction: "none",
        }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          resolveValue(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 0) return;
          resolveValue(e.clientX);
        }}
      >
        {/* Gradient track */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "8px",
            borderRadius: "20px",
            background:
              "linear-gradient(to right, rgba(255,255,255,0.1) 9.615%, rgba(255,0,217,0.6) 71.635%, #0091FF 100%)",
          }}
        />

        {/* Draggable knob */}
        <div
          style={{
            position: "absolute",
            left: `calc(${pct} * (100% - 48px))`,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backdropFilter: "blur(14.667px)",
            background: "rgba(255,255,255,0.05)",
            border: "0.733px solid rgba(255,255,255,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 2.933px 17.6px -1.467px rgba(0,0,0,0.2)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

export function GoalStep({
  value,
  onChangeValue,
  preferNotToMonetize,
  onChangePreferNotToMonetize,
}: {
  value: number;
  onChangeValue: (v: number) => void;
  preferNotToMonetize: boolean;
  onChangePreferNotToMonetize: (v: boolean) => void;
}) {
  const handleSliderChange = (v: number) => {
    onChangeValue(v);
    onChangePreferNotToMonetize(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", position: "relative" }}>
      <GoalGlow />

      {/* Title + subtitle */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", zIndex: 1 }}>
        <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "24px", lineHeight: "1.2", color: "var(--color-text-primary)" }}>
          Set your desired goal for this{"\n"}Data Savings Plan
        </p>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", lineHeight: "1.32", color: "var(--color-text-secondary)", fontVariationSettings: '"wdth" 100' }}>
          This helps us tailor your dWallet experience.
        </p>
      </div>

      {/* Dollar amount + slider — dims when card is selected */}
      <div
        style={{
          opacity: preferNotToMonetize ? 0.2 : 1,
          transition: "opacity 200ms ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Dollar amount display */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "6px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "88px",
              lineHeight: "1.2",
              letterSpacing: "-5.28px",
              color: "var(--color-text-primary)",
              whiteSpace: "nowrap",
            }}
          >
            ${value}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "24px" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.32",
                color: "var(--color-text-primary)",
                whiteSpace: "nowrap",
                fontVariationSettings: '"wdth" 100',
              }}
            >
              / year
            </p>
          </div>
        </div>

        <GoalSlider
          value={value}
          disabled={preferNotToMonetize}
          onChangeValue={handleSliderChange}
        />
      </div>
    </div>
  );
}
