import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TeslaCertificatesCircles } from "./TeslaCertificatesCircles";
import teslaMotorsLogo from "@/imports/tesla-motors-loading.png";
import model3Img from "@/imports/DataCertsSuccess/58fa28d3afb64afb3af10674263f1f23970861cf.png";
import fullSelfDrivingImg from "@/imports/DataCertsSuccess/f3855eeaf675891208a6a8b617dc84d96cce491d.png";

const FRAME_W = 390;
const FRAME_H = 844;

/**
 * Tesla data-certificates screen. Starts in the "Gathering your Tesla data
 * certificates" state and transitions into the "Almost done" success state:
 * the progress bar grows, the two product cards fade in, and the title
 * crossfades. The concentric rings stay in the background throughout.
 *
 * This is a lightweight reproduction of the "DataCertsLoading" / "DataCertsSuccess"
 * Figma imports — those files inline thousands of SVG paths (~400KB+ each), which
 * trips Babel's code-generator deopt, so we rebuild the (minimal) visible design
 * here with the design-system tokens.
 */
interface DataCertsLoadingScreenProps {
  onViewCertificates?: () => void;
  onClose?: () => void;
}

export function DataCertsLoadingScreen({ onViewCertificates, onClose }: DataCertsLoadingScreenProps) {
  const [success, setSuccess] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSuccess(true), 1200);
    const t2 = setTimeout(() => setReady(true), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "var(--color-bg-base)" }}>
      <div style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
        {/* Ambient blue glow behind the logo */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "418px",
            width: "320px",
            height: "320px",
            transform: "translate(-50%, -50%)",
            borderRadius: "var(--radius-full)",
            background: "var(--color-glow-blue)",
            opacity: 0.18,
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        {/* Status bar */}
        <div
          style={{
            position: "absolute",
            top: "21px",
            left: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "22px",
          }}
        >
          <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "17px", color: "var(--color-text-white)" }}>
            9:41
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-text-white)" }}>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" /><rect x="5" y="4" width="3" height="8" rx="1" fill="currentColor" /><rect x="10" y="1" width="3" height="11" rx="1" fill="currentColor" /><rect x="15" y="1" width="3" height="11" rx="1" fill="currentColor" opacity="0.4" /></svg>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><path d="M8.5 2.5C11 2.5 13.3 3.5 15 5.2l1.4-1.5C14.3 1.5 11.5 0.3 8.5 0.3S2.7 1.5 0.6 3.7L2 5.2C3.7 3.5 6 2.5 8.5 2.5Z" fill="currentColor" /><path d="M8.5 6.2c1.3 0 2.5 0.5 3.4 1.4l1.4-1.5C11.9 4.8 10.3 4 8.5 4S5.1 4.8 3.7 6.1l1.4 1.5C6 6.7 7.2 6.2 8.5 6.2Z" fill="currentColor" /><path d="M8.5 9.8 10.7 7.6C10.1 7 9.3 6.7 8.5 6.7s-1.6 0.3-2.2 0.9L8.5 9.8Z" fill="currentColor" /></svg>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none"><rect x="0.5" y="0.5" width="24" height="12" rx="3.8" stroke="currentColor" strokeOpacity="0.35" /><rect x="2" y="2" width="21" height="9" rx="2.5" fill="currentColor" /><path d="M26 4v5c0.8-0.3 1.3-1.1 1.3-2.5S26.8 4.3 26 4Z" fill="currentColor" fillOpacity="0.4" /></svg>
          </div>
        </div>

        {/* Title — crossfades from the "gathering" copy to "Almost done" + subtitle */}
        <p
          style={{
            position: "absolute",
            left: "calc(50% + 2.5px)",
            top: "101px",
            width: "334px",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-family-primary)",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: 1.03,
            letterSpacing: "-1px",
            textAlign: "center",
            color: "var(--color-text-white)",
            opacity: success ? 0 : 1,
            transition: "opacity 600ms ease",
          }}
        >
          Gathering your Tesla data certificates
        </p>
        <p
          style={{
            position: "absolute",
            left: "calc(50% + 2.5px)",
            top: "101px",
            width: "334px",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-family-primary)",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: 1.03,
            letterSpacing: "-1px",
            textAlign: "center",
            color: "var(--color-text-white)",
            opacity: success && !ready ? 1 : 0,
            transition: "opacity 600ms ease 200ms",
          }}
        >
          Almost done
        </p>
        <p
          style={{
            position: "absolute",
            left: "197px",
            top: "146px",
            width: "318px",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-family-secondary)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: 1.5,
            textAlign: "center",
            color: "var(--color-text-secondary)",
            opacity: success && !ready ? 1 : 0,
            transition: "opacity 600ms ease 200ms",
          }}
        >
          Gathering data from your verified Tesla products and services
        </p>

        {/* Close button (top-right) — appears in the final "ready" state */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "83px",
            right: "24px",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-primary)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            opacity: ready ? 1 : 0,
            transition: "opacity 600ms ease",
            zIndex: 8,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Final "ready" heading block — Ð pill, title and subtitle crossfade in */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "120px",
            width: "318px",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
            opacity: ready ? 1 : 0,
            transition: "opacity 600ms ease 300ms",
            pointerEvents: "none",
          }}
        >
          {/* Ð 0.41 added */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
            <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "14px", lineHeight: 1, color: "var(--color-text-primary)" }}>Ð</span>
            <span style={{ fontFamily: "var(--font-family-secondary)", fontWeight: 700, fontSize: "14px", lineHeight: 1.5, color: "var(--color-text-primary)" }}>0.41 added</span>
          </div>
          <p
            style={{
              width: "100%",
              margin: 0,
              fontFamily: "var(--font-family-primary)",
              fontWeight: 400,
              fontSize: "38px",
              lineHeight: 1,
              letterSpacing: "-1.52px",
              textAlign: "center",
              color: "var(--color-text-primary)",
            }}
          >
            Your data certificates are ready
          </p>
          <p
            style={{
              width: "100%",
              margin: 0,
              fontFamily: "var(--font-family-secondary)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: 1.5,
              textAlign: "center",
              color: "var(--color-text-secondary)",
            }}
          >
            3 certificates added to your dWallet from your verified Tesla purchases
          </p>
        </div>

        {/* Concentric rings around the Tesla logo (kept in the background) */}
        <TeslaCertificatesCircles />

        {/* Tesla logo disc — #e82127 is the Tesla brand color, kept as brand content */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "358px",
            width: "120px",
            height: "120px",
            transform: "translateX(-50%)",
            borderRadius: "var(--radius-full)",
            background: "#e82127",
            overflow: "hidden",
            zIndex: 6,
          }}
        >
          <ImageWithFallback
            src={teslaMotorsLogo}
            alt="Tesla Motors logo"
            style={{
              position: "absolute",
              width: "55px",
              height: "53px",
              left: "calc(50% - 1px)",
              top: "calc(50% + 5px)",
              transform: "translate(-50%, -50%)",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Model 3 product card — fades in on success */}
        <div style={{ opacity: success ? 1 : 0, transition: "opacity 900ms ease 300ms", zIndex: 6 }}>
          <div style={{ position: "absolute", left: "69px", top: "488px", width: "91px", height: "92px", borderRadius: "var(--radius-full)", overflow: "hidden", pointerEvents: "none" }}>
            <ImageWithFallback
              src={model3Img}
              alt="Tesla Model 3 2026"
              style={{ position: "absolute", height: "110.71%", width: "188.62%", left: "-12.59%", top: "-8.56%", maxWidth: "none", objectFit: "cover" }}
            />
          </div>
          <div style={{ position: "absolute", left: "69px", top: "589px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "14px", lineHeight: 1.2, color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
              Model 3 2026
            </p>
          </div>
        </div>

        {/* Full Self-Driving product card — fades in on success (staggered) */}
        <div style={{ opacity: success ? 1 : 0, transition: "opacity 900ms ease 600ms", zIndex: 6 }}>
          <div style={{ position: "absolute", left: "calc(80% - 16.5px)", top: "452px", width: "65px", height: "65px", transform: "translateX(-50%)", borderRadius: "var(--radius-full)", overflow: "hidden", pointerEvents: "none" }}>
            <ImageWithFallback
              src={fullSelfDrivingImg}
              alt="Full Self-Driving Subscription"
              style={{ position: "absolute", height: "118.75%", width: "190.77%", left: "-46.22%", top: "-9.37%", maxWidth: "none", objectFit: "cover" }}
            />
          </div>
          <div style={{ position: "absolute", left: "calc(60% + 13px)", top: "525px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "14px", lineHeight: 1.2, textAlign: "center", color: "var(--color-text-secondary)", whiteSpace: "pre" }}>
              Full Self-Driving {"\n"}Subscription
            </p>
          </div>
        </div>

        {/* Progress bar — grows through success, completes and fades out on ready */}
        <div
          style={{
            position: "absolute",
            top: "786px",
            left: "25px",
            width: "342px",
            height: "4px",
            borderRadius: "var(--radius-xs)",
            background: "var(--color-bg-surface-alt)",
            overflow: "hidden",
            opacity: ready ? 0 : 1,
            transition: "opacity 500ms ease 400ms",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: ready ? "100%" : success ? "83.33%" : "52.29%",
              background: "var(--color-glow-blue)",
              transition: "width 1600ms ease",
            }}
          />
        </div>

        {/* "View my data certificates" button — slides in for the ready state */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "738px",
            width: "342px",
            transform: `translateX(-50%) translateY(${ready ? "0" : "16px"})`,
            opacity: ready ? 1 : 0,
            transition: "opacity 600ms ease 500ms, transform 600ms ease 500ms",
          }}
        >
          <button
            type="button"
            onClick={onViewCertificates}
            style={{
              width: "100%",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              background: "var(--color-text-white)",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-family-primary)",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: 1,
              color: "var(--color-bg-base)",
            }}
          >
            View my data certificates
          </button>
        </div>
      </div>
    </div>
  );
}
