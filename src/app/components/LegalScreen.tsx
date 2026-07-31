import TopText from "@/imports/TopText/index";
import svgPaths from "@/imports/Legal/svg-djmc6kjkfh";
import { StatusBar } from "@/app/components/ui/StatusBar";

interface LegalScreenProps {
  onBack: () => void;
}

export function LegalScreen({ onBack }: LegalScreenProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--color-bg-base)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Status bar */}
      <StatusBar />

      {/* Header: back arrow + title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "48px",
          width: "342px",
          margin: "17px auto 0",
          flexShrink: 0,
        }}
      >
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          style={{
            width: "33px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span style={{ width: "24px", height: "24px", display: "flex", alignItems: "center" }}>
            <svg width="11.775" height="20" viewBox="0 0 11.775 20" fill="none">
              <path d={svgPaths.p30d4a680} fill="white" />
            </svg>
          </span>
        </button>
        <p
          style={{
            flex: "1 1 0",
            minWidth: 0,
            margin: 0,
            fontFamily: "var(--font-family-primary)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: 1.2,
            color: "white",
            textAlign: "center",
          }}
        >
          Legal
        </p>
        {/* Spacer to keep the title centered */}
        <span style={{ width: "33px", flexShrink: 0 }} />
      </div>

      {/* Scrollable content — scrollbar hidden */}
      <div style={{ position: "relative", flex: "1 1 0", minHeight: 0 }}>
        <div
          style={{
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "21px 24px 40px",
            boxSizing: "border-box",
          }}
        >
          <TopText />
        </div>

        {/* Bottom fade — transparent → base background, matching the design */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "127px",
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(7,7,7,0.01) 0%, var(--color-bg-base) 60.542%)",
          }}
        />
      </div>
    </div>
  );
}
