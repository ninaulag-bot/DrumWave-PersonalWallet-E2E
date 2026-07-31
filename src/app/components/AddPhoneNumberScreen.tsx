import { useState } from "react";
import { StatusBar } from "./ui/StatusBar";
import { CornerGlow } from "./CornerGlow";

/**
 * No raw Figma import exists for this screen (source is a fresh dev-mode
 * paste from a different Figma file than the rest of this export), so it's
 * hand-built end to end from the pasted coordinates/tokens rather than
 * wrapping a generated `@/imports/...` component. Chrome copied directly
 * from TwoStepVerificationScreen.tsx per build instructions.
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

function ChevronDownIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="var(--color-text-primary, #E3E3E3)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const COUNTRY_OPTIONS = [
  { code: "US", flag: "🇺🇸", dial: "+1" },
  { code: "CA", flag: "🇨🇦", dial: "+1" },
  { code: "MX", flag: "🇲🇽", dial: "+52" },
  { code: "GB", flag: "🇬🇧", dial: "+44" },
  { code: "BR", flag: "🇧🇷", dial: "+55" },
  { code: "DE", flag: "🇩🇪", dial: "+49" },
  { code: "FR", flag: "🇫🇷", dial: "+33" },
  { code: "IN", flag: "🇮🇳", dial: "+91" },
  { code: "JP", flag: "🇯🇵", dial: "+81" },
  { code: "AU", flag: "🇦🇺", dial: "+61" },
];

interface AddPhoneNumberScreenProps {
  onNext: () => void;
  onSkip: () => void;
  onBack?: () => void;
}

export function AddPhoneNumberScreen({ onNext, onSkip, onBack }: AddPhoneNumberScreenProps) {
  const [countryCode, setCountryCode] = useState(COUNTRY_OPTIONS[0].code);
  const selectedCountry = COUNTRY_OPTIONS.find((c) => c.code === countryCode) ?? COUNTRY_OPTIONS[0];

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
            Add phone number
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
            Enter your phone number for account security.
          </div>
        </div>
      </div>

      {/* Country + phone row + disclaimer */}
      <div
        style={{
          width: 342,
          left: 24,
          top: 293,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 24,
        }}
      >
        <div style={{ alignSelf: "stretch", display: "flex", gap: 8 }}>
          {/* Country code dropdown */}
          <div style={{ position: "relative", width: 91, height: 44 }}>
            <div
              style={{
                width: 91,
                height: 44,
                paddingLeft: 12,
                paddingRight: 12,
                background: "var(--color-bg-surface, #111111)",
                borderRadius: 8,
                boxShadow: "inset 0 0 0 1px var(--color-border-secondary, #2A2A2A)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 16, fontFamily: "var(--font-family-secondary, 'Open Sans')" }}>
                  {selectedCountry.flag}
                </span>
                <span
                  style={{
                    color: "var(--color-text-primary, #E3E3E3)",
                    fontSize: 16,
                    fontFamily: "var(--font-family-secondary, 'Open Sans')",
                    fontWeight: 400,
                  }}
                >
                  {selectedCountry.dial}
                </span>
              </div>
              <ChevronDownIcon />
            </div>
            <select
              aria-label="Country code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
            >
              {COUNTRY_OPTIONS.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.dial} {c.code}
                </option>
              ))}
            </select>
          </div>

          {/* Phone number input */}
          <input
            type="tel"
            placeholder="Enter phone number"
            aria-label="Phone number"
            style={{
              flex: "1 1 0",
              height: 44,
              paddingLeft: 12,
              paddingRight: 12,
              background: "var(--color-bg-surface, #111111)",
              borderRadius: 8,
              boxShadow: "inset 0 0 0 1px var(--color-border-secondary, #2A2A2A)",
              border: "none",
              outline: "none",
              color: "var(--color-text-primary, #E3E3E3)",
              fontSize: 16,
              fontFamily: "var(--font-family-secondary, 'Open Sans')",
              fontWeight: 400,
            }}
          />
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
          By submitting your phone number, you agree to receive a text message with a security code. Standard rates may apply.
        </div>
      </div>

      {/* Next — always enabled, no gating condition on this screen */}
      <button
        type="button"
        onClick={onNext}
        style={{
          width: 290,
          height: 48,
          left: 50,
          top: 677,
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
