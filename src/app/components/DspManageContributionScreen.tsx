import DspManageContributionPage from "@/imports/DspManageContributionPage/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface DspManageContributionScreenProps {
  /** "Continue without changes" CTA — fires once the required knob is on. */
  onContinue?: () => void;
}

/** DSP "Manage contribution" page, reached from the post-claim "Continue
 *  enrollment" CTA (Offer 1.0). Renders the read-only import as-is inside a
 *  scrollable container since the design is taller than the device frame. */
export function DspManageContributionScreen({ onContinue }: DspManageContributionScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="dsp-manage-contribution-sb" style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
        <DspManageContributionPage onContinue={onContinue} />
          </div>
      <UnifiedStatusBar hostClass="dsp-manage-contribution-sb" />
    </div>
  );
}
