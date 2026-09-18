import { useState } from "react";
import HomeRequestDataBeforeDsp from "@/imports/HomeRequestDataBeforeDsp-11/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

const FRAME_W = 390;
// Real content (header, "3 pending" list, DrumWave footer) ends at ~996px — the
// footer sits at top-[896px] in the baked import. Everything past that in the
// export is unrelated content baked into the same Figma canvas by mistake (a DSP
// ad card, a duplicate FAQ section, and an off-canvas artifact at left:-690.73px),
// so the frame is clipped here instead of exposing all of that as blank scroll.
const FRAME_H = 996;

/* Tab segments, matching the baked tabv2 pill (342x48 at top 144, 4px padding).
   Only Pending has baked content; the other two show their stat + copy over a
   cover panel. Dot colours follow MyDataRequestsScreen. */
const TABS = [
  { key: "pending",  label: "Pending",  dot: "#FFB700", stat: "3 pending", copy: "Your requests have been sent and are awaiting a response. You can upload data manually at any time." },
  { key: "accepted", label: "Accepted", dot: "var(--color-status-success)", stat: "0 accepted", copy: "Your matched companies will appear here once a company Accepts your request." },
  { key: "rejected", label: "Rejected", dot: "var(--color-status-error)",   stat: "0 rejected", copy: "You legally own your data, even if your request has been Rejected." },
] as const;

type TabKey = (typeof TABS)[number]["key"];

interface HomeRequestDataBeforeDsp11ScreenProps {
  onView23andMe?: () => void;
  onBack?: () => void;
}

export function HomeRequestDataBeforeDsp11Screen({ onView23andMe, onBack }: HomeRequestDataBeforeDsp11ScreenProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("pending");
  const isPending = activeTab === "pending";
  const tab = TABS.find(t => t.key === activeTab)!;

  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* The import bakes its nav row ("My data requests" + back arrow) into the
          scrolling canvas at top 71, so it scrolled away with the content. Hide it
          and render the same row pinned outside the scroller instead. */}
      {/* The baked tabv2 pill is static, so it is hidden too and redrawn below
          as buttons. */}
      <style>{`
        .home-request-data-before-dsp11-sb [data-name="Profile header"] { display: none !important; }
        .home-request-data-before-dsp11-sb [data-name="tabv2"] { display: none !important; }
      `}</style>
      <div
      style={{
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        overflowX: "hidden",
        background: "#070707",
        scrollbarWidth: "none",
      }}
      className="[&::-webkit-scrollbar]:hidden home-request-data-before-dsp11-sb"
    >
        <div
          style={{
            position: "relative",
            width: `${FRAME_W}px`,
            height: `${FRAME_H}px`,
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <HomeRequestDataBeforeDsp />

          {/* Tap target over the 23andMe card (Frame79 in Frame80 at top=372px) */}
          {isPending && (
            <button
              onClick={onView23andMe}
              style={{
                position: "absolute",
                top: 372,
                left: 24,
                width: 342,
                height: 134,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label="View 23andMe data"
            />
          )}

          {/* Accepted / Rejected: cover the pending stat, copy and card list
              (y 200 → 890, stopping short of the DrumWave footer at 896) and
              redraw the stat + copy at the baked coordinates. */}
          {!isPending && (
            <>
              <div style={{ position: "absolute", top: 200, left: 0, width: FRAME_W, height: 690, background: "#070707", zIndex: 5 }} />
              <p
                style={{
                  position: "absolute",
                  top: 219,
                  left: 24,
                  width: 342,
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 40,
                  lineHeight: "42px",
                  letterSpacing: "-1.6px",
                  color: "white",
                  zIndex: 6,
                }}
              >
                {tab.stat}
              </p>
              <p
                style={{
                  position: "absolute",
                  top: 273,
                  left: 28,
                  width: 315,
                  margin: 0,
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: "#999",
                  fontVariationSettings: '"wdth" 100',
                  zIndex: 6,
                }}
              >
                {tab.copy}
              </p>
            </>
          )}

          {/* Interactive tab bar, replacing the hidden baked tabv2 pill */}
          <div
            style={{
              position: "absolute",
              top: 144,
              left: 24,
              width: 342,
              height: 48,
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              display: "flex",
              alignItems: "center",
              padding: 4,
              boxSizing: "border-box",
              zIndex: 6,
            }}
          >
            {TABS.map(t => {
              const isActive = t.key === activeTab;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTab(t.key)}
                  style={{
                    flex: "1 0 0",
                    minWidth: 0,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    borderRadius: 8,
                    background: isActive ? "#0a0a0a" : "transparent",
                    border: isActive ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {isActive && (
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="4" cy="5" r="4" fill={t.dot} />
                    </svg>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 16,
                      lineHeight: 1.5,
                      color: isActive ? "#EEEEEE" : "#999999",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
          </div>

      {/* Pinned nav row — replaces the hidden baked "Profile header", same
          geometry (top 71, 342-wide row inset 24px, 48px tall). */}
      <div
        style={{
          position: "absolute",
          top: 71,
          left: 24,
          width: 342,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 20,
        }}
      >
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          style={{
            width: 33,
            height: 24,
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
            padding: 0,
            cursor: onBack ? "pointer" : "default",
            flexShrink: 0,
          }}
        >
          <svg width="11.775" height="20" viewBox="0 0 11.775 20" fill="none">
            <path d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z" fill="white" />
          </svg>
        </button>
        <p
          style={{
            flex: "1 0 0",
            minWidth: 0,
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 18,
            lineHeight: 1.2,
            color: "white",
            textAlign: "center",
          }}
        >
          My data requests
        </p>
        {/* Matches the import's invisible "Skip" spacer, keeping the title centred */}
        <div style={{ width: 33, flexShrink: 0 }} />
      </div>

      <UnifiedStatusBar hostClass="home-request-data-before-dsp11-sb" />
    </div>
  );
}
