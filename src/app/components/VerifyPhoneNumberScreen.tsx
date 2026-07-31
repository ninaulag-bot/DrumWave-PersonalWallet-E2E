import { useEffect, useState } from "react";
import { StatusBar } from "./ui/StatusBar";
import { CornerGlow } from "./CornerGlow";

/**
 * No raw Figma import exists for this screen. Chrome (StatusBar, glow,
 * back-arrow, title/subtitle block) mirrors TwoStepVerificationScreen.tsx —
 * `AddPhoneNumberScreen.tsx` (the requested structural template) doesn't
 * exist in this repo, see build notes.
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

const COUNTDOWN_SECONDS = 30;
const SYSTEM_FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

const KEY_ROWS = [
  [
    { digit: "1", letters: "" },
    { digit: "2", letters: "ABC" },
    { digit: "3", letters: "DEF" },
  ],
  [
    { digit: "4", letters: "GHI" },
    { digit: "5", letters: "JKL" },
    { digit: "6", letters: "MNO" },
  ],
  [
    { digit: "7", letters: "PQRS" },
    { digit: "8", letters: "TUV" },
    { digit: "9", letters: "WXYZ" },
  ],
];

function KeyboardKey({ digit, letters }: { digit: string; letters: string }) {
  return (
    <div
      style={{
        flex: "1 1 0",
        height: 47.6,
        background: "#434343",
        boxShadow: "0px 1.03px 0px black",
        overflow: "hidden",
        borderRadius: 5.17,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div style={{ textAlign: "center", color: "white", fontSize: 25.87, fontFamily: SYSTEM_FONT_STACK, fontWeight: 400, lineHeight: "31.04px" }}>
        {digit}
      </div>
      <div style={{ textAlign: "center", color: "white", fontSize: 10.35, fontFamily: SYSTEM_FONT_STACK, fontWeight: 700, lineHeight: "12.42px", letterSpacing: 2.07 }}>
        {letters || " "}
      </div>
    </div>
  );
}

/** Static decoration only — not wired to the real OTP inputs above it. */
function StaticNumericKeyboard() {
  return (
    <div style={{ width: "100%", maxWidth: 388.02, left: "50%", transform: "translateX(-50%)", top: 546, bottom: 0, position: "absolute", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: 6.21, background: "rgba(32, 32, 32, 0.92)", backdropFilter: "blur(10.35px)", display: "flex", flexDirection: "column", gap: 7.24 }}>
        {KEY_ROWS.map((row, i) => (
          <div key={i} style={{ display: "flex", gap: 6.21 }}>
            {row.map((k) => (
              <KeyboardKey key={k.digit} digit={k.digit} letters={k.letters} />
            ))}
          </div>
        ))}
        <div style={{ display: "flex", gap: 6.21 }}>
          <div style={{ flex: "1 1 0" }} />
          <KeyboardKey digit="0" letters="" />
          <div style={{ flex: "1 1 0", display: "flex", alignItems: "center", justifyContent: "center", color: "#E7E7E7", fontSize: 22.76, fontFamily: SYSTEM_FONT_STACK }}>
            ⌫
          </div>
        </div>
      </div>
      {/* Fills the remaining space down to the screen's real home indicator (rendered after this component) instead of the source's own duplicate indicator bar */}
      <div style={{ flex: 1, background: "rgba(32, 32, 32, 0.92)", backdropFilter: "blur(10.35px)" }} />
    </div>
  );
}

interface VerifyPhoneNumberScreenProps {
  onVerify: () => void;
  onBack?: () => void;
  phoneNumber: string;
}

const DISPLAY_CODE = "123456";

export function VerifyPhoneNumberScreen({ onVerify, onBack, phoneNumber }: VerifyPhoneNumberScreenProps) {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [secondsLeft]);

  function handleResend() {
    setSecondsLeft(COUNTDOWN_SECONDS);
  }

  const displayPhone = phoneNumber || "your phone number";
  const timerLabel = `00:${String(secondsLeft).padStart(2, "0")}`;

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

      {/* Title + subtitle */}
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
            Verify phone number
          </div>
          <div
            style={{
              alignSelf: "stretch",
              textAlign: "center",
              color: "var(--color-text-primary, #E3E3E3)",
              fontSize: 14,
              fontFamily: "var(--font-family-primary, 'Titillium Web')",
              fontWeight: 400,
              lineHeight: "16.8px",
            }}
          >
            Please enter the code sent to
            <br />
            {displayPhone}
          </div>
        </div>
      </div>

      {/* Timer + code boxes + resend */}
      <div
        style={{
          left: 33,
          top: 269,
          position: "absolute",
          width: 324,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "var(--color-text-disabled, #666666)",
            fontSize: 14,
            fontFamily: "var(--font-family-secondary, 'Open Sans')",
            fontWeight: 700,
            lineHeight: "21px",
          }}
        >
          {timerLabel}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {DISPLAY_CODE.split("").map((digit, i) => (
            <div
              key={i}
              style={{
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-bg-surface, #111111)",
                borderRadius: 8,
                boxShadow: "inset 0 0 0 1px var(--color-border-secondary, #2A2A2A)",
                color: "var(--color-text-primary, #E3E3E3)",
                fontSize: 16,
                fontFamily: "var(--font-family-secondary, 'Open Sans')",
                fontWeight: 400,
              }}
            >
              {digit}
            </div>
          ))}
        </div>

        <div
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "var(--color-text-primary, #E3E3E3)",
            fontSize: 14,
            fontFamily: "var(--font-family-secondary, 'Open Sans')",
            fontWeight: 400,
            lineHeight: "21px",
          }}
        >
          I didn&rsquo;t receive a code! Please{" "}
          <span
            onClick={handleResend}
            role="button"
            tabIndex={0}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            resend
          </span>
        </div>
      </div>

      {/* Verify — enabled by default, not gated on code completeness */}
      <button
        type="button"
        onClick={onVerify}
        style={{
          width: 290,
          height: 48,
          left: 50,
          top: 468,
          position: "absolute",
          borderRadius: 500,
          background: "white",
          border: "none",
          cursor: "pointer",
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
          Verify
        </span>
      </button>

      <StaticNumericKeyboard />

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
