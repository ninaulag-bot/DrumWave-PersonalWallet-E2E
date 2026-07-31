import HomeRequestDataBeforeDsp from "@/imports/HomeRequestDataBeforeDsp-11/index";

const FRAME_W = 390;
const FRAME_H = 2700;

interface HomeRequestDataBeforeDsp11ScreenProps {
  onView23andMe?: () => void;
}

export function HomeRequestDataBeforeDsp11Screen({ onView23andMe }: HomeRequestDataBeforeDsp11ScreenProps) {
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
        <HomeRequestDataBeforeDsp />
        {/* Tap target over the 23andMe card (Frame79 in Frame80 at top=372px) */}
        <button
          onClick={onView23andMe}
          style={{
            position: "absolute",
            top: 372,
            left: 24,
            width: 342,
            height: 134,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="View 23andMe data"
        />
      </div>
    </div>
  );
}
