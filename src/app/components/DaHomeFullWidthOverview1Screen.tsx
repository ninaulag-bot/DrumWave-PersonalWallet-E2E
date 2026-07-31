import DaHomeFullWidthOverview from "@/imports/DaHomeFullWidthOverview-1/index";

const FRAME_W = 390;
const FRAME_H = 844;

interface DaHomeFullWidthOverview1ScreenProps {
  onViewDataCertificates?: () => void;
}

export function DaHomeFullWidthOverview1Screen({ onViewDataCertificates }: DaHomeFullWidthOverview1ScreenProps = {}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        overflowX: "hidden",
        background: "#070707",
        scrollbarWidth: "none",
      }}
      className="[&::-webkit-scrollbar]:hidden"
    >
      <div
        style={{
          position: "relative",
          width: `${FRAME_W}px`,
          height: `${FRAME_H}px`,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <DaHomeFullWidthOverview onViewDataCertificates={onViewDataCertificates} />
      </div>
    </div>
  );
}
