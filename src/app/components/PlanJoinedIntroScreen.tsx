import { useEffect, useRef, useState } from "react";
import { StatusBar } from "./ui/StatusBar";
import imgSmartCard from "@/imports/dsavings-smart-card.png";

/**
 * No raw Figma import exists for this screen — it's a single animated
 * screen whose two Figma frames (node-id=15-45580, node-id=15-45720) are
 * its mount-animation start/end states, not two separate screens. Hand-built
 * per CLAUDE.md's "no Figma import" convention, matching
 * TwoStepVerificationScreen/PlanDetailScreen.
 */

interface PlanJoinedIntroScreenProps {
  /** First name shown in the "Welcome to your new plan, {name}!" heading. */
  name: string;
  /** Called ~1s after the mount animation settles, or immediately on tap. */
  onComplete?: () => void;
}

const FONT_TITILLIUM = "var(--font-family-primary, 'Titillium Web')";

/** Duration of the heading fade / card slide, in ms. */
const ANIMATION_MS = 1200;
/** Delay after the animation settles before auto-advancing, in ms. */
const ADVANCE_DELAY_MS = 1000;
/** Distance the card slides down as the heading fades in, in px — matches
 *  the given top:157 (start) -> top:256 (end) delta exactly, rather than
 *  being derived from the heading's rendered height. */
const CARD_SLIDE_PX = 99;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
}

/** Animated intro shown after accepting a plan's terms, before the
 *  successfully-joined screen. One screen, one mount animation: the heading
 *  fades in while the plan card slides down into the space it occupies. */
export function PlanJoinedIntroScreen({ name, onComplete }: PlanJoinedIntroScreenProps) {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [animateIn, setAnimateIn] = useState(reducedMotion);
  // Guards against the auto-advance timer firing onComplete a second time
  // after a tap already called it (tap-to-skip races the timer, not a
  // meaningful piece of "logic" so much as avoiding calling onComplete twice).
  const firedRef = useRef(false);

  useEffect(() => {
    if (reducedMotion) return;
    // Start from the "before" state on first paint, then flip on the next
    // frame so the transition actually runs instead of snapping instantly.
    const raf = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  useEffect(() => {
    const settleDelay = reducedMotion ? 0 : ANIMATION_MS;
    const t = setTimeout(() => {
      if (firedRef.current) return;
      firedRef.current = true;
      onComplete?.();
    }, settleDelay + ADVANCE_DELAY_MS);
    return () => clearTimeout(t);
  }, [reducedMotion, onComplete]);

  function handleTap() {
    if (firedRef.current) return;
    firedRef.current = true;
    onComplete?.();
  }

  return (
    <div
      onClick={handleTap}
      role="button"
      tabIndex={0}
      aria-label="Skip ahead"
      style={{ position: "relative", width: "100%", height: "100%", background: "#070707", overflow: "hidden", cursor: "pointer" }}
    >
      {/* Ambient background glow, unchanged between start/end states.
          Flag: the Figma export's clipped "ghost card" here contains a
          broken/flattened icon rendered as ~15 tiny raster-fragment
          rectangles (same failure mode as PlanDetailScreen's benefit
          icons) plus a placehold.co filler photo. At 40% opacity inside a
          323px-tall clipping box none of that detail reads, so it's
          approximated as a plain gradient card rather than reconstructed
          fragment-by-fragment, and the placeholder photo is omitted
          entirely (no repo asset for it, and placehold.co is disallowed). */}
      <div aria-hidden style={{ position: "absolute", left: 1, top: 0, width: 388, height: 323, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: -17, top: 257, width: 431, height: 137, opacity: 0.67, background: "#3642EB", borderRadius: 9999, filter: "blur(20px)" }} />
        <div
          style={{
            position: "absolute",
            left: 197,
            top: 279,
            width: 271,
            height: 178,
            transform: "rotate(45deg)",
            transformOrigin: "top left",
            opacity: 0.4,
            backgroundImage: "linear-gradient(250deg, #81C2F3 0%, #3096E3 96%)",
            borderRadius: 13,
            border: "0.72px solid white",
          }}
        />
      </div>
      <div aria-hidden style={{ position: "absolute", left: -92, top: 276, width: 420, height: 420, background: "#070707", borderRadius: 9999, filter: "blur(50px)" }} />

      <StatusBar />

      {/* Heading + card column, laid out once at the end-state position.
          Only the heading's opacity and the card's translateY animate. */}
      <div style={{ position: "absolute", left: 24, top: 147, width: 342, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        <div
          style={{
            width: 270,
            textAlign: "center",
            fontFamily: FONT_TITILLIUM,
            fontWeight: 400,
            fontSize: 32,
            lineHeight: "38.4px",
            color: "var(--color-text-default, #E3E3E3)",
            opacity: animateIn ? 1 : 0,
            transition: `opacity ${ANIMATION_MS}ms ease-out`,
          }}
        >
          Welcome to your new plan, {name}!
        </div>

        <img
          src={imgSmartCard}
          alt=""
          style={{
            width: 342,
            height: 214,
            borderRadius: 16.27,
            border: "1.02px solid white",
            objectFit: "cover",
            display: "block",
            transform: animateIn ? "translateY(0)" : `translateY(-${CARD_SLIDE_PX}px)`,
            transition: `transform ${ANIMATION_MS}ms ease-out`,
          }}
        />
      </div>
    </div>
  );
}
