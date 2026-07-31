import { StatusBar } from "./ui/StatusBar";
import { CornerGlow } from "./CornerGlow";

/**
 * No raw Figma import exists for this screen (source is a fresh dev-mode
 * paste from a different Figma file than the rest of this export), so it's
 * hand-built end to end from the pasted coordinates/tokens rather than
 * wrapping a generated `@/imports/...` component.
 */

function BackArrowIcon() {
  return (
    <svg width="16" height="27" viewBox="0 0 16 27" fill="none">
      <path
        d="M14 2L2 13.5L14 25"
        stroke="var(--color-text-primary, #E3E3E3)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Enable 2-step verification"
      aria-pressed={on}
      style={{
        width: 48,
        height: 24,
        padding: 2,
        border: on ? "1px rgba(0,0,0,0.04) solid" : "none",
        borderRadius: 24,
        background: on ? "#16BE76" : "#666666",
        boxShadow: on ? "0px 1.85px 1.85px rgba(0, 0, 0, 0.25) inset" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: on ? "flex-end" : "flex-start",
        cursor: "pointer",
        transition: "background 0.15s ease",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 32,
          height: 20,
          borderRadius: 230.77,
          background: "#111111",
          boxShadow: on
            ? "-1.8px 0px 3.68px rgba(0, 0, 0, 0.25)"
            : "1.8px 0px 3.68px rgba(0, 0, 0, 0.25)",
          outline: "1px rgba(255, 255, 255, 0.23) solid",
          outlineOffset: "-1px",
        }}
      />
    </button>
  );
}

interface TwoStepVerificationScreenProps {
  onNext: () => void;
  onSkip: () => void;
  onBack?: () => void;
  enabled: boolean;
  onEnabledChange: (enabled: boolean) => void;
}

export function TwoStepVerificationScreen({
  onNext,
  onSkip,
  onBack,
  enabled,
  onEnabledChange,
}: TwoStepVerificationScreenProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--color-bg-base, #070707)",
        overflow: "hidden",
      }}
    >
      <CornerGlow side="top-right" color="var(--color-glow-blue, #0091FF)" glowOpacity={0.4} />

      <StatusBar />

      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        aria-label="Go back"
        style={{
          position: "absolute",
          left: 24,
          top: 70,
          padding: 10,
          borderRadius: 500,
          background: "transparent",
          border: "none",
          cursor: onBack ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BackArrowIcon />
      </button>

      {/* Title + description */}
      <div
        style={{
          width: 342,
          left: 24,
          top: 146,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 72,
        }}
      >
        <div
          style={{
            width: 251,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              textAlign: "center",
              color: "white",
              fontSize: 24,
              fontFamily: "var(--font-family-primary, 'Titillium Web')",
              fontWeight: 400,
              lineHeight: "28.8px",
            }}
          >
            Turn on 2-step verification
          </div>
          <div
            style={{
              alignSelf: "stretch",
              textAlign: "center",
              color: "var(--color-text-secondary, #999999)",
              fontSize: 16,
              fontFamily: "var(--font-family-primary, 'Titillium Web')",
              fontWeight: 400,
              lineHeight: "19.2px",
            }}
          >
            Turn on 2-step verification to keep your account secure.
          </div>
        </div>
      </div>

      {/* Enable row + description */}
      <div
        style={{
          width: 342,
          left: 24,
          top: 322,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 232,
              color: "var(--color-text-primary, #E3E3E3)",
              fontSize: 16,
              fontFamily: "var(--font-family-primary, 'Titillium Web')",
              fontWeight: 400,
              lineHeight: "19.2px",
            }}
          >
            Enable 2-step verification
          </div>
          <Toggle on={enabled} onToggle={() => onEnabledChange(!enabled)} />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            color: "var(--color-text-secondary, #999999)",
            fontSize: 16,
            fontFamily: "var(--font-family-primary, 'Titillium Web')",
            fontWeight: 400,
            lineHeight: "19.2px",
          }}
        >
          When this is on, we&rsquo;ll send you a one-time code via SMS every time you sign in to add an extra layer of security to your dWallet account.
        </div>
      </div>

      {/* Next — enabled by default (toggle defaults On); disabled only if the user turns the toggle Off */}
      <button
        type="button"
        onClick={enabled ? onNext : undefined}
        disabled={!enabled}
        style={{
          width: 290,
          height: 48,
          left: 50,
          top: 677,
          position: "absolute",
          borderRadius: 500,
          background: enabled ? "white" : "#2A2A2A",
          border: "none",
          cursor: enabled ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "var(--color-text-inverse, #070707)",
            fontSize: 18,
            fontFamily: "var(--font-family-primary, 'Titillium Web')",
            fontWeight: 600,
            lineHeight: "18px",
          }}
        >
          Next
        </span>
      </button>

      {/* Skip */}
      <button
        type="button"
        onClick={onSkip}
        style={{
          width: 290,
          height: 48,
          left: 50,
          top: 733,
          position: "absolute",
          borderRadius: 500,
          background: "transparent",
          border: "1px white solid",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "var(--color-text-primary, #E3E3E3)",
            fontSize: 18,
            fontFamily: "var(--font-family-primary, 'Titillium Web')",
            fontWeight: 600,
            lineHeight: "18px",
          }}
        >
          Skip
        </span>
      </button>

      {/* Home indicator */}
      <div style={{ width: 390, height: 21, left: 0, top: 823, position: "absolute" }}>
        <div
          style={{
            width: 144,
            height: 5,
            left: 123,
            top: 8,
            position: "absolute",
            background: "white",
            borderRadius: 100,
          }}
        />
      </div>
    </div>
  );
}
