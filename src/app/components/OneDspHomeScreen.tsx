import HomeRequestDataBeforeDsp12 from "@/imports/HomeRequestDataBeforeDsp-12/index";
import { ScreenWithNavBar } from "./ScreenWithNavBar";
import { OneDspBottomNav } from "./OneDspBottomNav";

// The import is a single absolutely-positioned frame; its content runs to a
// footer at ~3451px, so it needs an explicit height to lay out inside a scroll area.
const FRAME_W = 390;
const CONTENT_H = 3560;

export function OneDspHomeScreen({ onHome }: { onHome?: () => void }) {
  return (
    <ScreenWithNavBar navBar={<OneDspBottomNav onHome={onHome} />} navBarHeight={72}>
      {/* Hide the nav bar baked into the import. Component4 is the only element
          with both border-t and bottom-0; targeting both prevents accidental matches. */}
      <style>{`.onedsp-import .border-t.bottom-0 { display: none !important; }`}</style>
      <div
        className="onedsp-import"
        style={{ position: "relative", width: `${FRAME_W}px`, height: `${CONTENT_H}px`, margin: "0 auto", overflow: "hidden" }}
      >
        <HomeRequestDataBeforeDsp12 />
      </div>
    </ScreenWithNavBar>
  );
}
