import Enroll from "@/imports/Enroll-6/index";

const FRAME_W = 390;
const FRAME_H = 844;

interface Enroll6ScreenProps {
  onSaveChanges?: () => void;
  onBack?: () => void;
}

export function Enroll6Screen({ onSaveChanges, onBack }: Enroll6ScreenProps = {}) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
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
  );
}
