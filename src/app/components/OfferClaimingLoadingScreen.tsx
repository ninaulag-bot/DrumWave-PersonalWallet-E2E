import { useEffect, useState } from "react";
import { motion } from "motion/react";
import svgPaths from "@/imports/LoadingScreenClaimingData/svg-xw1owgacvm";

/** Reused status bar from the read-only loading-screen import (same SVG assets). */
function StatusBarPro() {
  return (
    <div className="absolute bg-[#070707] h-[59px] left-0 top-0 w-full" data-name="Status Bar/Pro">
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[7.33px] items-center right-[28.05px] top-[calc(50%+0.74px)]" data-name="Status/Pro">
        <div className="h-[12.333px] relative shrink-0 w-[19.333px]" data-name="Cellular">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 19.3333 12.3333" width="19.3333">
            <g id="Cellular">
              <path d={svgPaths.p8bdef00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p12dc6500} fill="var(--fill-0, white)" />
              <path d={svgPaths.p5f0ea00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p189c4440} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
        <div className="h-[12.333px] relative shrink-0 w-[17px]" data-name="Wifi">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 17 12.3333" width="17">
            <path clipRule="evenodd" d={svgPaths.p70af300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
          </svg>
        </div>
        <div className="h-[13.667px] relative shrink-0 w-[27.333px]" data-name="Battery/Percentage">
          <div className="-translate-y-1/2 absolute bg-white h-[9px] left-[2px] rounded-[2.667px] top-1/2 w-[10.333px]" data-name="percent" />
          <div className="-translate-y-1/2 absolute h-[13px] left-0 top-1/2 w-[27.333px]" data-name="battery">
            <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 27.3333 13" width="27.3333">
              <g id="battery" opacity="0.4">
                <path clipRule="evenodd" d={svgPaths.p2b410900} fill="var(--fill-0, white)" fillRule="evenodd" />
                <path d={svgPaths.p2c79ba00} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute h-[12.592px] left-[54.87px] top-[calc(50%-0.1px)] w-[33.265px]" data-name="Time">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.5923" preserveAspectRatio="none" viewBox="0 0 33.2648 12.5923" width="33.2648">
          <g id="Time">
            <path d={svgPaths.p10408380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1252ba00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36383fe1} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e7ac780} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

const STAGES = ["Claiming your Tesla data", "Almost there", "Done"] as const;

/** Vertical spacing between stage lines (line box + gap), in px. Mirrors the
 *  imported designs, whose text block shifts up ~93px as each stage completes. */
const STEP = 93;
/** Bar fill (0–1) reached when each stage becomes active. */
const STAGE_PROGRESS = [0.08, 0.55, 1];
/** Time each stage stays active before advancing, in ms. */
const STAGE_DURATION = 1800;

interface OfferClaimingLoadingScreenProps {
  /** Called once the bar reaches 100% and "Done" has settled. */
  onComplete?: () => void;
}

/** "Claiming your Tesla data" loading screen (Offer 1.0). Animates the progress
 *  bar filling and steps the emphasized label through the three states defined
 *  by the read-only imports (Claiming → Almost there → Done). */
export function OfferClaimingLoadingScreen({ onComplete }: OfferClaimingLoadingScreenProps) {
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
    <div className="bg-[#070707] overflow-clip relative rounded-[32px] size-full" data-name="Loading Screen Claiming data">
      {/* Stage labels — the whole stack slides up as each stage completes so the
          active line holds a fixed position, matching the design progression. */}
      <div
        className="[word-break:break-word] absolute flex flex-col gap-[50px] items-start left-[24px] w-[294px]"
        style={{
          top: "623px",
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
      <StatusBarPro />
    </div>
  );
}
