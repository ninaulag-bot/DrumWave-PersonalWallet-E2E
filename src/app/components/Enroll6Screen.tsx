import Enroll from "@/imports/Enroll-6/index";

const FRAME_W = 390;
const FRAME_H = 844;

interface Enroll6ScreenProps {
  onSaveChanges?: () => void;
}

export function Enroll6Screen({ onSaveChanges }: Enroll6ScreenProps = {}) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
      <div style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
        <Enroll onSaveChanges={onSaveChanges} />
      </div>
    </div>
  );
}
