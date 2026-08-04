import { useState } from "react";
import { StatusBar } from "@/app/components/ui/StatusBar";
import { MainBottomNav } from "@/app/components/MainBottomNav";
import offerCardAuto from "@/imports/OffersNotEnrolled/offer-card-auto.png";
import offerCardTravel from "@/imports/OffersNotEnrolled/offer-card-travel.png";
import offerCardRetail from "@/imports/OffersNotEnrolled/offer-card-retail.png";

/**
 * "Offers" — Offers tab destination for the onboarding / not-enrolled account
 * state (Figma frame "Offers", node 16:83111).
 *
 * Notes:
 * - The three fanned cards are flattened card renders exported from Figma
 *   (auto centre, retail left, travel right). They are NOT the PhotoFanStack
 *   component, which is a different 3D-skewed hero treatment on remote images.
 * - Offsets below are the frame's absolute tops minus the 54px status bar,
 *   since the scroll area starts below it.
 * - The New/Claimed toggle is local: MyDataRequestsScreen's segmented control
 *   looks similar but uses different tokens (status dots, --color-bg-overlay,
 *   --radius-md/xs), so it isn't a drop-in match for this design.
 */

const NAV_H = 72;
const STATUS_H = 54;
/** Frame-absolute top → scroll-content top. */
const y = (frameTop: number) => frameTop - STATUS_H;
/** Tallest content is the button bottom (714.19 + 44); pad a little past it. */
const CONTENT_H = 730;

function OffersTabs() {
  const [tab, setTab] = useState<"new" | "claimed">("new");
  const tabBase: React.CSSProperties = {
    flex: "1 0 0",
    minWidth: 0,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: 1.5,
    textAlign: "center",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "48px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "12px",
        boxSizing: "border-box",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <button
        type="button"
        onClick={() => setTab("new")}
        style={{
          ...tabBase,
          background: tab === "new" ? "#0A0A0A" : "transparent",
          borderRadius: "8px",
          boxShadow: tab === "new" ? "inset 0 0 0 1px rgba(255,255,255,0.04)" : "none",
          color: tab === "new" ? "#EEEEEE" : "var(--color-text-secondary)",
        }}
      >
        New
      </button>
      <button
        type="button"
        onClick={() => setTab("claimed")}
        style={{
          ...tabBase,
          background: tab === "claimed" ? "#0A0A0A" : "transparent",
          borderRadius: "8px",
          boxShadow: tab === "claimed" ? "inset 0 0 0 1px rgba(255,255,255,0.04)" : "none",
          color: tab === "claimed" ? "#EEEEEE" : "var(--color-text-secondary)",
        }}
      >
        Claimed
      </button>
    </div>
  );
}

/** One of the two dimmed, rotated side cards. Positioned by its centre point. */
function SideOfferCard({
  src,
  centerX,
  centerY,
  rotate,
}: {
  src: string;
  centerX: number;
  centerY: number;
  rotate: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${centerX}px`,
        top: `${centerY}px`,
        width: "78px",
        height: "121px",
        opacity: 0.4,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        pointerEvents: "none",
      }}
    >
      <img
        src={src}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

interface OffersNotEnrolledScreenProps {
  onRequestMoreData?: () => void;
  onHome?: () => void;
  onMyData?: () => void;
  onSavingsPlan?: () => void;
}

export function OffersNotEnrolledScreen({ onRequestMoreData, onHome, onMyData, onSavingsPlan }: OffersNotEnrolledScreenProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--color-bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Ambient colour wash behind the card fan — green/magenta/blue, per the frame */}
      {[
        { l: 40, t: 400, c: "rgba(0,255,145,0.40)", s: 115, sp: 80 },
        { l: 300, t: 330, c: "rgba(255,0,217,0.20)", s: 177, sp: 124 },
        { l: 20, t: 380, c: "rgba(0,145,255,0.20)", s: 177, sp: 124 },
      ].map((g, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            left: g.l,
            top: g.t,
            boxShadow: `0 -${Math.round(g.s * 0.1)}px ${g.s}px ${g.sp}px ${g.c}`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      <StatusBar />

      <div
        className="[&::-webkit-scrollbar]:hidden"
        style={{
          position: "absolute",
          top: `${STATUS_H}px`,
          left: 0,
          right: 0,
          bottom: `${NAV_H}px`,
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: `${CONTENT_H}px` }}>
          {/* Header + New/Claimed toggle */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: `${y(94)}px`,
              width: "343px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "31.788px",
                  lineHeight: 1.02,
                  letterSpacing: "-0.9536px",
                  color: "var(--color-text-white)",
                }}
              >
                Offers
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "var(--color-text-secondary)",
                }}
              >
                Explore available offers.
              </p>
            </div>
            <OffersTabs />
          </div>

          {/* Fanned offer cards — retail left, auto centre, travel right */}
          <SideOfferCard src={offerCardRetail} centerX={66.88} centerY={y(413.33)} rotate={-15} />
          <SideOfferCard src={offerCardTravel} centerX={322.08} centerY={y(408.02)} rotate={15} />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: `${y(313)}px`,
              transform: "translateX(-50%)",
              width: "128px",
              height: "199px",
              pointerEvents: "none",
            }}
          >
            <img
              src={offerCardAuto}
              alt="Contribute your auto data. Earn $20"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Empty state */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: `${y(543)}px`,
              transform: "translateX(-50%)",
              width: "342px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: 1.2,
                color: "var(--color-text-primary)",
              }}
            >
              No offers yet
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.5,
                color: "var(--color-text-secondary)",
              }}
            >
              New offers will appear here as they become available.
            </p>
          </div>

          {/* Request more data */}
          <button
            type="button"
            onClick={onRequestMoreData}
            style={{
              position: "absolute",
              left: "50%",
              top: `${y(714.19)}px`,
              transform: "translateX(-50%)",
              width: "343px",
              padding: "10px 24px",
              borderRadius: "500px",
              background: "transparent",
              border: "1px solid var(--color-text-white)",
              cursor: onRequestMoreData ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: 1,
              color: "var(--color-text-primary)",
            }}
          >
            Request more data
          </button>
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="offers" onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} />
      </div>
    </div>
  );
}
