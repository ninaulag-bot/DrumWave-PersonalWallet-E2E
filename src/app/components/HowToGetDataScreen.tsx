import { useState } from "react";
import svgPaths from "@/imports/RequestData-1/svg-s0ia0gm4yp";
import Step1Open from "@/imports/Frame2095586464/index";
import Step2Image from "@/imports/Frame2095586924/index";
import Step3Open from "@/imports/Frame2095586466/index";

interface HowToGetDataScreenProps {
  onBack: () => void;
  onGetData?: () => void;
}

/** Small chevron used on each step card. `open` rotates it to point up. */
function StepChevron({ open }: { open: boolean }) {
  return (
    <span
      style={{
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform 0.2s ease",
      }}
    >
      <span style={{ display: "flex", transform: "rotate(90deg) scaleY(-1)" }}>
        <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none" style={{ display: "block" }}>
          <path d={svgPaths.p33166380} fill="#E3E3E3" />
        </svg>
      </span>
    </span>
  );
}

/** A collapsed step row inside a #121212 card. */
function StepCard({ number, label, onClick, open }: { number: string; label: string; onClick?: () => void; open?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: "#121212",
        borderRadius: "8px",
        padding: "16px",
        width: "342px",
        border: "none",
        cursor: onClick ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "12px", alignItems: "center", minWidth: 0 }}>
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "200px",
            background: "#232323",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-family-primary)",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: 1.2,
            color: "white",
          }}
        >
          {number}
        </span>
        <p style={{ margin: 0, textAlign: "left", fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "16px", lineHeight: 1.2, color: "#f3f3f3" }}>{label}</p>
      </div>
      <StepChevron open={!!open} />
    </button>
  );
}

/** An expanded step card: header row + description + screenshot image. */
function OpenStepCard({ number, label, description, onToggle, children }: { number: string; label: string; description: string; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div style={{ width: "342px", background: "#121212", borderRadius: "8px", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        <button
          type="button"
          onClick={onToggle}
          style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", width: "100%" }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center", minWidth: 0 }}>
            <span style={{ width: "28px", height: "28px", borderRadius: "200px", background: "#232323", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "16px", lineHeight: 1.2, color: "white" }}>{number}</span>
            <p style={{ margin: 0, textAlign: "left", fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "16px", lineHeight: 1.2, color: "#f3f3f3" }}>{label}</p>
          </div>
          <StepChevron open={true} />
        </button>
        <p style={{ margin: 0, fontFamily: "var(--font-family-primary)", fontWeight: 400, fontSize: "16px", lineHeight: 1.2, color: "#919191" }}>{description}</p>
      </div>
      {children}
    </div>
  );
}

export function HowToGetDataScreen({ onBack, onGetData }: HowToGetDataScreenProps) {
  // Accordion — only one step open at a time (starts on step 1)
  const [openStep, setOpenStep] = useState<number | null>(1);
  const toggle = (n: number) => setOpenStep((cur) => (cur === n ? null : n));

  return (
    <div
      className="[&::-webkit-scrollbar]:hidden"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
        background: "#070707",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Status bar */}
      <div style={{ height: "54px", paddingTop: "21px", paddingLeft: "16px", paddingRight: "16px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <p style={{ margin: 0, fontFamily: "var(--font-body), sans-serif", fontWeight: 600, fontSize: "17px", lineHeight: "22px", color: "white" }}>9:41</p>
        <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
          <svg width="19.2" height="12.2264" viewBox="0 0 19.2 12.2264" fill="none"><path clipRule="evenodd" d={svgPaths.p1e09e400} fill="white" fillRule="evenodd" /></svg>
          <svg width="17.1417" height="12.3283" viewBox="0 0 17.1417 12.3283" fill="none"><path clipRule="evenodd" d={svgPaths.p18b35300} fill="white" fillRule="evenodd" /></svg>
          <svg width="27.328" height="13" viewBox="0 0 27.328 13" fill="none">
            <rect height="12" opacity="0.35" rx="3.8" stroke="white" width="24" x="0.5" y="0.5" />
            <path d={svgPaths.p3bbd9700} fill="white" opacity="0.4" />
            <rect fill="white" height="9" rx="2.5" width="21" x="2" y="2" />
          </svg>
        </div>
      </div>

      {/* Back arrow */}
      <div style={{ paddingLeft: "24px", paddingTop: "15px", flexShrink: 0 }}>
        <button type="button" onClick={onBack} aria-label="Go back" style={{ width: "24px", height: "24px", background: "transparent", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
          <svg width="11.775" height="20" viewBox="0 0 11.775 20" fill="none"><path d={svgPaths.p30d4a680} fill="white" /></svg>
        </button>
      </div>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "64px", alignItems: "center", padding: "31px 24px 0", width: "100%", boxSizing: "border-box" }}>
        {/* Header + steps + note */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center", width: "100%" }}>
          {/* Icon + title + link */}
          <div style={{ display: "flex", flexDirection: "column", gap: "25px", alignItems: "center", width: "239px" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "128.536px", background: "#dd2222", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 3.672px rgba(255,255,255,0.02)" }}>
              <svg width="38.3577" height="38.1936" viewBox="0 0 38.3577 38.1936" fill="none"><path d={svgPaths.p141f4d00} fill="white" /></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", alignItems: "center", width: "100%" }}>
              <p style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-family-primary)", fontWeight: 400, fontSize: "32px", lineHeight: 1.2, color: "white", width: "100%" }}>How to get your Tesla data</p>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#0091ff", fontVariationSettings: '"wdth" 100' }}>Go to Tesla.com</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={svgPaths.p32c64b00} fill="#0091FF" /></svg>
              </div>
            </div>
          </div>

          {/* Steps + note */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", width: "342px" }}>
              {/* Step 1 — expandable (uses the dedicated open-state import) */}
              {openStep === 1 ? (
                <div style={{ width: "342px", cursor: "pointer" }} onClick={() => toggle(1)} role="button" tabIndex={0}>
                  <Step1Open />
                </div>
              ) : (
                <StepCard number="1" label="Log in and go to Account Settings" open={false} onClick={() => toggle(1)} />
              )}

              {/* Step 2 — expandable */}
              {openStep === 2 ? (
                <OpenStepCard number="2" label="Open Data & Privacy" description="In the navigation, select Data & Privacy → Request a copy." onToggle={() => toggle(2)}>
                  <div style={{ width: "310px", height: "245px", borderRadius: "10.41px", overflow: "hidden" }}>
                    <Step2Image />
                  </div>
                </OpenStepCard>
              ) : (
                <StepCard number="2" label="Open Data & Privacy" open={false} onClick={() => toggle(2)} />
              )}

              {/* Step 3 — expandable (uses the dedicated open-state import) */}
              {openStep === 3 ? (
                <div style={{ width: "342px", cursor: "pointer" }} onClick={() => toggle(3)} role="button" tabIndex={0}>
                  <Step3Open />
                </div>
              ) : (
                <StepCard number="3" label="Choose your data and submit" open={false} onClick={() => toggle(3)} />
              )}
            </div>

            <div style={{ width: "100%" }}>
              <p style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "16px", lineHeight: 1.2, color: "#f3f3f3" }}>
                When you’ve received the file, log into your DrumWave account to upload it to the dWCloud.
              </p>
            </div>
          </div>
        </div>

        {/* Need help? */}
        <div style={{ display: "flex", flexDirection: "column", gap: "13px", alignItems: "center", width: "100%" }}>
          <p style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "20px", lineHeight: 1.2, color: "#f3f3f3" }}>Need help?</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "center", width: "245px" }}>
            <p style={{ margin: 0, textAlign: "center", opacity: 0.7, fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "#999", fontVariationSettings: '"wdth" 100' }}>Email us and we’ll get back to you as soon as we can</p>
            <p style={{ margin: 0, marginBottom: "109px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "#f3f3f3", fontVariationSettings: '"wdth" 100' }}>support@drumwave.com</p>
          </div>
        </div>
      </div>

      {/* "I've got my data" button — at the very bottom, revealed on scroll */}
      <div style={{ padding: "48px 23px 45px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
        <button
          type="button"
          onClick={onGetData ?? onBack}
          style={{ width: "344px", height: "48px", borderRadius: "500px", background: "white", border: "0.911px solid #ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "18px", lineHeight: 1, color: "#1d2023" }}>I’ve got my data</span>
        </button>
      </div>
    </div>
  );
}
