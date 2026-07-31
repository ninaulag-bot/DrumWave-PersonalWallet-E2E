import DaHomeFullWidthOverview from "@/imports/DaHomeFullWidthOverview/index";

const FRAME_W = 390;
const FRAME_H = 844;

export function DaHomeScreen() {
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
        <DaHomeFullWidthOverview />
      </div>
    </div>
  );
}
