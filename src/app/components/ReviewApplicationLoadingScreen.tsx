import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { StatusBar } from "@/app/components/ui/StatusBar";

const STAGES = ["Reviewing your application", "Almost there", "Ready"] as const;

/** Vertical spacing between stage lines (line box + gap), in px. Mirrors the
 *  imported designs, whose text block shifts up ~89px as each stage completes. */
const STEP = 89;
/** Bar fill (0–1) reached when each stage becomes active. */
const STAGE_PROGRESS = [0.08, 0.55, 1];
/** Time each stage stays active before advancing, in ms. */
const STAGE_DURATION = 1800;

interface ReviewApplicationLoadingScreenProps {
  /** Called once the bar reaches 100% and "Ready" has settled. */
  onComplete?: () => void;
}

/** Animated "Reviewing your application" loading screen, reached after "Looks
 *  good" on the Confirm Application screen. Animates the progress bar filling and
 *  steps the emphasized label through Reviewing → Almost there → Ready. */
export function ReviewApplicationLoadingScreen({ onComplete }: ReviewApplicationLoadingScreenProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage < STAGES.length - 1) {
      const t = setTimeout(() => setStage((s) => s + 1), STAGE_DURATION);
      return () => clearTimeout(t);
    }
    if (onComplete) {
      const t = setTimeout(onComplete, STAGE_DURATION);
      return () => clearTimeout(t);
    }
  }, [stage, onComplete]);

  return (
    <div className="bg-[#070707] overflow-clip relative rounded-[32px] size-full" data-name="Review application">
      {/* Stage labels — the whole stack slides up as each stage completes so the
          active line holds a fixed position, matching the design progression. */}
      <div
        className="[word-break:break-word] absolute flex flex-col gap-[50px] items-start left-[24px] w-[294px]"
        style={{
          top: "619px",
          fontFamily: "var(--font-family-primary)",
          color: "#d7d7d7",
          fontSize: "33px",
          transform: `translateY(-${stage * STEP}px)`,
          transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {STAGES.map((label, i) => (
          <p
            key={label}
            className="leading-[1.2] w-full"
            style={{
              margin: 0,
              opacity: i === stage ? 1 : i === stage + 1 ? 0.2 : 0,
              transition: "opacity 500ms ease",
            }}
          >
            {label}
          </p>
        ))}
      </div>

      {/* Progress bar track + animated fill. */}
      <div
        className="absolute bg-[#1a1a1a] h-[4px] left-[24px] rounded-[4px] top-[728px] w-[342px] overflow-hidden"
        data-name="Loading"
      >
        <motion.div
          className="h-full rounded-[4px]"
          style={{ background: "#2067d1" }}
          initial={{ width: "0%" }}
          animate={{ width: `${STAGE_PROGRESS[stage] * 100}%` }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute bg-[#070707] h-[115px] left-0 top-[733px] w-full" />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50, pointerEvents: "none" }}>
        <StatusBar />
      </div>
    </div>
  );
}
