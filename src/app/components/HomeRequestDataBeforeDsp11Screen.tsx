import HomeRequestDataBeforeDsp from "@/imports/HomeRequestDataBeforeDsp-11/index";

const FRAME_W = 390;
// Real content (header, "3 pending" list, DrumWave footer) ends at ~996px — the
// footer sits at top-[896px] in the baked import. Everything past that in the
// export is unrelated content baked into the same Figma canvas by mistake (a DSP
// ad card, a duplicate FAQ section, and an off-canvas artifact at left:-690.73px),
// so the frame is clipped here instead of exposing all of that as blank scroll.
const FRAME_H = 996;

interface HomeRequestDataBeforeDsp11ScreenProps {
  onView23andMe?: () => void;
  onBack?: () => void;
}

export function HomeRequestDataBeforeDsp11Screen({ onView23andMe, onBack }: HomeRequestDataBeforeDsp11ScreenProps) {
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
        {/* Transparent tap target over the back arrow the import already draws in its
            "Profile header" (header at top 71px, 342-wide row inset 24px, 48px tall,
            so the 24px arrow sits at ~left 24 / top 83). */}
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          style={{
            position: "absolute",
            top: 71,
            left: 16,
            width: 48,
            height: 48,
            background: "transparent",
            border: "none",
            cursor: onBack ? "pointer" : "default",
            padding: 0,
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
