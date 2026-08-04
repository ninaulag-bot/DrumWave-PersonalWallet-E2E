import Enroll from "@/imports/Enroll-6/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

const FRAME_W = 390;
const FRAME_H = 844;

interface Enroll6ScreenProps {
  onSaveChanges?: () => void;
  onBack?: () => void;
}

export function Enroll6Screen({ onSaveChanges, onBack }: Enroll6ScreenProps = {}) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="enroll6-sb" style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
        <div style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
          <Enroll onSaveChanges={onSaveChanges} />
          {/* Transparent tap target over the back arrow the import draws in its
              header (header sits at top-[70px], 342-wide row inset 24px). */}
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            style={{ position: "absolute", top: 70, left: 16, width: 48, height: 48, background: "transparent", border: "none", cursor: onBack ? "pointer" : "default", padding: 0, zIndex: 20 }}
          />
        </div>
          </div>
      <UnifiedStatusBar hostClass="enroll6-sb" />
    </div>
  );
}
