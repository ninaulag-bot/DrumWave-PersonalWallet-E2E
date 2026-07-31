import { useState } from "react";
import type { CSSProperties } from "react";
import HomeRequestDataBeforeDsp from "@/imports/HomeRequestDataBeforeDsp-4/index";
import { TabGlow } from "./TabGlow";
import { StatusBar } from "./ui/StatusBar";
import { DrumWaveLogo } from "./DrumWaveLogo";
import { DataRequestCard } from "./DataRequestCard";

const TABS = [
  { key: "pending",  label: "Pending",  dot: "#FFB700" },
  { key: "accepted", label: "Accepted", dot: "#16BE76" },
  { key: "rejected", label: "Rejected", dot: "#C82628" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

/**
 * Glow ellipse coordinates and copy per state.
 *
 * Pending  — confirmed Figma coords, pending frame.
 * Accepted — confirmed Figma coords, node 361:52864.
 * Rejected — confirmed Figma coords, node 361:44399.
 *
 * Each state uses its OWN bright-ellipse left/top. Dark-mask coords may
 * coincide between states only because Figma places them identically there.
 */
const STATE_CONFIG = {
  pending: {
    // Bright ellipse: #FFB700 · 10% opacity · blur 75px · 364×364 · left -133 · top -45
    glowColor:   "#FFB700",
    glowOpacity: 0.10,
    glowSize:    364,
    glowLeft:    -133,
    glowTop:     -45,
    // Dark mask 1: #070707 · 60% · blur 25px · 344×344 · left -86 · top 229
    mask1Size:   344,
    mask1Left:   -86,
    mask1Top:    229,
    // Dark mask 2: #070707 · 60% · blur 25px · 246×246 · left 161 · top 212
    mask2Size:   246,
    mask2Left:   161,
    mask2Top:    212,
  },
  accepted: {
    // Bright ellipse: #16BE76 · 15% opacity · blur 75px · 364×364 · left 14 · top -106
    glowColor:   "#16BE76",
    glowOpacity: 0.15,
    glowSize:    364,
    glowLeft:    14,
    glowTop:     -106,
    // Dark mask 1: #070707 · 60% · blur 25px · 344×344 · left -185 · top 138
    mask1Size:   344,
    mask1Left:   -185,
    mask1Top:    138,
    // Dark mask 2: #070707 · 60% · blur 25px · 246×246 · left 62 · top 121
    mask2Size:   246,
    mask2Left:   62,
    mask2Top:    121,
  },
  rejected: {
    // Bright ellipse: #C82628 · 20% opacity · blur 75px · 364×364 · left 123 · top -55
    glowColor:   "#C82628",
    glowOpacity: 0.20,
    glowSize:    364,
    glowLeft:    123,
    glowTop:     -55,
    // Dark mask 1: #070707 · 60% · blur 25px · 344×344 · left -86 · top 229
    mask1Size:   344,
    mask1Left:   -86,
    mask1Top:    229,
    // Dark mask 2: #070707 · 60% · blur 25px · 246×246 · left 161 · top 212
    mask2Size:   246,
    mask2Left:   161,
    mask2Top:    212,
  },
} as const;

// Canvas heights per state (from Figma frames)
const CANVAS_HEIGHT: Record<TabKey, number> = {
  pending:  1046,
  accepted:  808,
  rejected: 1041,
};

// iOS back-chevron path from the Figma export (arrow_back_ios)
const BACK_ARROW_PATH = "M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z";

// ── Shared overlay chrome ──────────────────────────────────────────────────

function OverlayStatusBar() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "390px",
        zIndex: 5,
        pointerEvents: "none",
      }}
    >
      <StatusBar />
    </div>
  );
}

function OverlayHeader({ onBack }: { onBack?: () => void }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 71,
        left: 0,
        width: "390px",
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
      }}
    >
      <div style={{ width: 342, display: "flex", alignItems: "center", height: "100%" }}>
        <button
          type="button"
          aria-label="Back"
          onClick={onBack}
          style={{
            width: 33,
            height: 24,
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
            cursor: onBack ? "pointer" : "default",
            padding: 0,
            flexShrink: 0,
          }}
        >
          <div style={{ width: 24, height: 24, position: "relative", overflow: "hidden" }}>
            <svg
              width="11.775"
              height="20"
              viewBox="0 0 11.775 20"
              fill="none"
              style={{
                position: "absolute",
                top: "8.33%",
                left: 0,
                bottom: "8.33%",
                right: "50.94%",
              }}
            >
              <path d={BACK_ARROW_PATH} fill="white" />
            </svg>
          </div>
        </button>
        <p
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 18,
            color: "white",
            margin: 0,
          }}
        >
          My data requests
        </p>
        {/* Invisible spacer keeps title centered */}
        <div style={{ width: 33, flexShrink: 0 }} />
      </div>
    </div>
  );
}

// ── DrumWave footer (positioned absolutely at the Figma-spec origin) ────────

function OverlayDrumWaveFooter({ top, left }: { top: number; left: number }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: 228.538,
        zIndex: 4,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <DrumWaveLogo size={28} />
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: 19.478,
            color: "white",
            letterSpacing: "-0.2922px",
            lineHeight: "1.2",
            textAlign: "center",
            margin: 0,
          }}
        >
          DrumWave
        </p>
      </div>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: 17.043,
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "-0.2557px",
          lineHeight: "1.2",
          textAlign: "center",
          margin: 0,
        }}
      >
        Your Life. Your Story. Your Data.
      </p>
    </div>
  );
}

// ── Screen ────────────────────────────────────────────────────────────────────

interface HomeRequestDataBeforeDspScreenProps {
  initialTab?: TabKey;
  onBack?: () => void;
}

/**
 * Home screen shown after a data request is submitted (before a Data Savings
 * Plan exists). Three interactive tab states:
 *
 * Pending  — baked import is correct; no overlay needed.
 * Accepted — covers y 0–360 with #070707, re-renders chrome + green glow + copy.
 * Rejected — covers y 0–1041 with #070707, re-renders chrome + red glow +
 *             stat/copy + card stack + DrumWave footer.
 */
export function HomeRequestDataBeforeDspScreen({
  initialTab = "pending",
  onBack,
}: HomeRequestDataBeforeDspScreenProps) {
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);

  const isAccepted = activeTab === "accepted";
  const isRejected = activeTab === "rejected";

  const labelStyle: CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.5,
    whiteSpace: "nowrap",
    transition: "color 220ms ease",
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "auto" }}>
      {/* Read-only baked import — always renders the pending state */}
      <HomeRequestDataBeforeDsp />

      {/* Cover baked "Pending requests" avatar row at y=1830 */}
      <div
        style={{
          position: "absolute",
          top: "1830px",
          left: 0,
          width: "390px",
          height: "194px",
          background: "#070707",
          zIndex: 5,
        }}
      />

      {/*
       * Pending state renders the baked header (no OverlayHeader cover), so its
       * back arrow is inert. Transparent tap-target at OverlayHeader's arrow
       * coords (top 71 + 12 centering, left 24, 33×24) restores onBack.
       */}
      {!isAccepted && !isRejected && (
        <button
          type="button"
          aria-label="Back"
          onClick={onBack}
          style={{
            position: "absolute",
            top: 83,
            left: 24,
            width: 33,
            height: 24,
            background: "none",
            border: "none",
            cursor: onBack ? "pointer" : "default",
            padding: 0,
            zIndex: 5,
          }}
        />
      )}

      {/* ── Accepted state overlays ──────────────────────────────────────────── */}
      {isAccepted && (
        <>
          {/*
           * Solid cover (z=2, height=360px) erases baked pending glow, header,
           * tab bar, stat, and copy. Frame80 (steps, y=372) stays visible —
           * it is common to both pending and accepted states.
           * Accepted canvas height: 808px.
           */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "390px",
              height: `${CANVAS_HEIGHT.accepted}px`,
              background: "#070707",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Accepted glow (z=3): #16BE76 · 15% · blur 75px · left 14 · top -106 */}
          <TabGlow
            glowColor="#16BE76"
            glowOpacity={0.15}
            glowSize={364}
            glowLeft={14}
            glowTop={-106}
            mask1Size={344}
            mask1Left={-185}
            mask1Top={138}
            mask2Size={246}
            mask2Left={62}
            mask2Top={121}
            zIndex={3}
          />

          <OverlayStatusBar />
          <OverlayHeader onBack={onBack} />

          {/* Stat: "0 accepted" — centered, matching pending layout */}
          <div
            style={{
              position: "absolute",
              top: 219,
              left: "50%",
              transform: "translateX(-50%)",
              width: 342,
              zIndex: 4,
            }}
          >
            <p
              style={{
                fontFamily: "'Titillium Web', sans-serif",
                fontWeight: 300,
                fontSize: 40,
                lineHeight: "42px",
                color: "white",
                letterSpacing: "-1.6px",
                margin: 0,
              }}
            >
              0 accepted
            </p>
          </div>

          {/* Copy text */}
          <p
            style={{
              position: "absolute",
              top: 273,
              left: "calc(50% - 167px)",
              width: 315,
              zIndex: 4,
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.5,
              color: "#999",
              margin: 0,
            }}
          >
            Your matched companies will appear here once a company Accepts your request.
          </p>
        </>
      )}

      {/* ── Rejected state overlays ──────────────────────────────────────────── */}
      {isRejected && (
        <>
          {/*
           * Full-height cover (z=2, height=1041px — the rejected canvas height)
           * erases all baked pending content including Frame80 and Component1,
           * so the rejected card stack and footer can be rendered cleanly.
           */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "390px",
              height: `${CANVAS_HEIGHT.rejected}px`,
              background: "#070707",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/*
           * Rejected glow (z=3): #C82628 · 20% · blur 75px · 364×364
           * Bright ellipse at left 123 · top -55 (right-of-center, tracks
           * the Rejected tab position). Dark masks at the confirmed coords.
           */}
          <TabGlow
            glowColor="#C82628"
            glowOpacity={0.20}
            glowSize={364}
            glowLeft={123}
            glowTop={-55}
            mask1Size={344}
            mask1Left={-86}
            mask1Top={229}
            mask2Size={246}
            mask2Left={161}
            mask2Top={212}
            zIndex={3}
          />

          <OverlayStatusBar />
          <OverlayHeader onBack={onBack} />

          {/* Stat: "3 rejected" — left-aligned at left 24, top 219 */}
          <div style={{ position: "absolute", top: 219, left: 24, zIndex: 4 }}>
            <p
              style={{
                fontFamily: "'Titillium Web', sans-serif",
                fontWeight: 300,
                fontSize: 40,
                lineHeight: "42px",
                color: "white",
                letterSpacing: "-1.6px",
                margin: 0,
              }}
            >
              3 rejected
            </p>
          </div>

          {/* Copy — left 28, top 273, width 315 */}
          <p
            style={{
              position: "absolute",
              top: 273,
              left: 28,
              width: 315,
              zIndex: 4,
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.5,
              color: "#999",
              margin: 0,
            }}
          >
            You legally own your data, even if your request has been Rejected.
          </p>

          {/* Card stack — left 24, top 358, width 342, 16px gaps */}
          <div
            style={{
              position: "absolute",
              top: 358,
              left: 24,
              width: 342,
              zIndex: 4,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Tesla — single full-width outlined button */}
            <DataRequestCard
              initial="T"
              company="Tesla"
              avatarBg="#DD2222"
              avatarFg="#FFFFFF"
              dateLabel="Uploaded on Nov, 2025"
              variant="single-outlined"
              secondaryLabel="Go to dWCloud"
            />
            {/* Nubank — two-button: Upload manually (filled) + See how (outlined) */}
            <DataRequestCard
              initial="N"
              company="Nubank"
              avatarBg="#820AD1"
              avatarFg="#FFFFFF"
              dateLabel="Declined on Sept, 2025"
              variant="two-button"
              primaryLabel="Upload manually"
              secondaryLabel="See how"
            />
            {/* Bradesco — two-button: Upload manually (filled) + See how (outlined) */}
            <DataRequestCard
              initial="B"
              company="Bradesco"
              avatarBg="#EA200D"
              avatarFg="#FFFFFF"
              dateLabel="Declined on Sept, 2025"
              variant="two-button"
              primaryLabel="Upload manually"
              secondaryLabel="See how"
            />
          </div>

          {/* DrumWave footer — left 80.73px, top 886px (calc(20%+2.73px) of 390px) */}
          <OverlayDrumWaveFooter top={886} left={80.73} />
        </>
      )}

      {/* ── Interactive segmented tab control (always z=10) ─────────────────── */}
      <div
        style={{
          position: "absolute",
          top: "144px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "342px",
          height: "48px",
          background: "#070707",
          borderRadius: "12px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.04)",
            borderRadius: "12px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                style={{
                  flex: "1 0 0",
                  height: "100%",
                  minWidth: 0,
                  position: "relative",
                  background: isActive ? "#0A0A0A" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "background 220ms ease",
                }}
              >
                {/* Active tab border inset */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid rgba(255,255,255,0.04)",
                    borderRadius: "8px",
                    pointerEvents: "none",
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 220ms ease",
                  }}
                />

                {/* 8px status dot — color matches the state color, visible only when active */}
                <div
                  style={{
                    width: "8px",
                    height: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    overflow: "hidden",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(0.5)",
                    transition: "opacity 220ms ease, transform 220ms ease",
                  }}
                >
                  <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
                    <circle cx="4" cy="5" r="4" fill={tab.dot} />
                  </svg>
                </div>

                <span style={{ ...labelStyle, color: isActive ? "#EEEEEE" : "#999999" }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
