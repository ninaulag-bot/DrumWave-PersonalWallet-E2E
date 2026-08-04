import { StatusBar } from "@/app/components/ui/StatusBar";
import { MainBottomNav } from "@/app/components/MainBottomNav";
import { ApplyForDspCard } from "@/app/components/ApplyForDspCard";
import noiseTexture from "@/imports/DspLanding-1/b1b492b467327e373268d8c777b3bb8b425c81c9.png";

/**
 * "My Data Savings" — Savings-plan tab destination for the onboarding /
 * not-enrolled account state (Figma frame "Not enrolled", node 16:82941).
 *
 * Reuse notes:
 * - Card 1 of "What happens next?" is the shared <ApplyForDspCard/>, identical
 *   to the one in DashboardScreenNoDsp.
 * - The "Get offers" card here is NOT the dashboard's third card: the design
 *   gives it different body copy, a "Learn more" button, and a noise+glow
 *   treatment instead of a lock icon, so it's built to the design.
 * - Noise texture reuses the asset already committed for DspLanding-1.
 * - Company rows reuse the letter-avatar pattern from MyDataRequestsScreen
 *   (Nubank #820AD1 / Bradesco #EA200D) — the design uses the same treatment,
 *   so no logo assets are involved.
 */

const NAV_H = 72;

/** Section heading — Titillium 24px, matching every section title in the frame. */
function SectionTitle({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: 1.2,
        color: "var(--color-text-primary)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/** Card 2 of "What happens next?" — noise + blue glow + "Learn more". */
function GetOffersCard({ onLearnMore }: { onLearnMore?: () => void }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: "311px",
        height: "184px",
        borderRadius: "var(--radius-lg)",
        background: "#181818",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Noise-Animation overlay */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "343px",
          height: "250px",
          backgroundImage: `url("${noiseTexture}")`,
          backgroundSize: "256px 256px",
          backgroundPosition: "top left",
          mixBlendMode: "soft-light",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />
      {/* Rotated blue glow */}
      <div
        style={{
          position: "absolute",
          left: "32px",
          top: "-100px",
          width: "322.202px",
          height: "205.224px",
          background: "#0037FF",
          opacity: 0.2,
          filter: "blur(75px)",
          transform: "rotate(-30.1deg)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "24px",
          top: "24px",
          width: "262px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: 1.2,
              color: "var(--color-text-white)",
            }}
          >
            Get offers and cash benefits
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: 1.2,
              opacity: 0.8,
              color: "var(--color-text-primary)",
            }}
          >
            As more companies join dWallet, you&rsquo;ll receive more offers&mdash;including cash benefits.
          </p>
        </div>
        <button
          type="button"
          onClick={onLearnMore}
          style={{
            width: "157px",
            height: "37px",
            padding: "0 10.315px",
            borderRadius: "41.259px",
            background: "transparent",
            border: "1.031px solid #ffffff",
            cursor: onLearnMore ? "pointer" : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "16.504px",
            lineHeight: 1.2,
            color: "var(--color-text-white)",
          }}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

/** "Request more data" company card — letter avatar + category + Request pill.
 *  Exported so the certificates variant of the DSP Landing screen (Figma
 *  9:93931) renders the same carousel card instead of duplicating it. */
export function CompanyRequestCard({
  initial,
  avatarColor,
  category,
  name,
  onRequest,
}: {
  initial: string;
  avatarColor: string;
  category: string;
  name: string;
  onRequest?: () => void;
}) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: "206.294px",
        height: "185.665px",
        borderRadius: "24.755px",
        background: "#181818",
        boxSizing: "border-box",
        padding: "14.44px 17.42px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28.881px",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
        <div
          style={{
            width: "24.755px",
            height: "24.755px",
            borderRadius: "49.511px",
            background: avatarColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "12.731px",
              lineHeight: 1.2,
              color: "var(--color-text-white)",
            }}
          >
            {initial}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "14.441px",
            lineHeight: 1.2,
            opacity: 0.7,
            color: "var(--color-text-white)",
          }}
        >
          {category}
        </span>
      </div>

      <p
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "24.755px",
          lineHeight: 1.2,
          textAlign: "center",
          color: "var(--color-text-white)",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </p>

      <button
        type="button"
        onClick={onRequest}
        style={{
          width: "100%",
          height: "37.133px",
          borderRadius: "41.259px",
          background: "#ffffff",
          border: "none",
          cursor: onRequest ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "16.504px",
          lineHeight: 1.2,
          color: "#1A1B1C",
        }}
      >
        Request
      </button>
    </div>
  );
}

interface MyDataSavingsScreenProps {
  onApplyForDsp?: () => void;
  onLearnMore?: () => void;
  onHome?: () => void;
}

export function MyDataSavingsScreen({ onApplyForDsp, onLearnMore, onHome }: MyDataSavingsScreenProps) {
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
      {/* Ambient blue glows, matching the frame's scattered background wash */}
      {[
        { l: 40, t: 250, b: "rgba(0,85,255,0.20)", r: 110 },
        { l: 300, t: 300, b: "rgba(0,85,255,0.20)", r: 95 },
      ].map((g, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            left: g.l,
            top: g.t,
            boxShadow: `0 -20px 200px 140px ${g.b}`,
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
          top: "54px",
          left: 0,
          right: 0,
          bottom: `${NAV_H}px`,
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "40px 0 48px" }}>
          {/* Header */}
          <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
              My Data Savings
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
              Own, save, and benefit from the value of your data.
            </p>
          </div>

          <SectionTitle style={{ padding: "0 24px" }}>Select plans to continue</SectionTitle>

          {/* What happens next? — horizontal card row */}
          <div>
            <SectionTitle style={{ padding: "0 24px", marginBottom: "16px" }}>What happens next?</SectionTitle>
            <div
              className="[&::-webkit-scrollbar]:hidden"
              style={{
                display: "flex",
                gap: "16px",
                overflowX: "auto",
                padding: "0 24px 4px",
                scrollbarWidth: "none",
              }}
            >
              <ApplyForDspCard onApply={onApplyForDsp} />
              <GetOffersCard onLearnMore={onLearnMore} />
            </div>
          </div>

          {/* Request more data */}
          <div>
            <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <SectionTitle>Request more data</SectionTitle>
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
                Requesting data from additional companies can increase your account&rsquo;s value and unlock new offers.
              </p>
            </div>
            <div
              className="[&::-webkit-scrollbar]:hidden"
              style={{
                display: "flex",
                gap: "16px",
                overflowX: "auto",
                padding: "24px 24px 4px",
                scrollbarWidth: "none",
              }}
            >
              {/* TODO(wiring): Request has no destination screen yet — left as a no-op. */}
              <CompanyRequestCard initial="N" avatarColor="#820AD1" category="Banks" name="Nubank" />
              <CompanyRequestCard initial="B" avatarColor="#EA200D" category="Financial" name="Bradesco" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="savingsPlan" onHome={onHome} />
      </div>
    </div>
  );
}
