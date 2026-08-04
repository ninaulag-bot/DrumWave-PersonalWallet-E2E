import Component3RequestYourDAta from "@/imports/3RequestYourDAta-1/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

const FRAME_W = 390;
const FRAME_H = 1095;

interface RequestYourDataScreenProps {
  onBack?: () => void;
}

export function RequestYourDataScreen({ onBack }: RequestYourDataScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div
      style={{
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        overflowX: "hidden",
        background: "#070707",
        scrollbarWidth: "none",
      }}
      className="[&::-webkit-scrollbar]:hidden request-your-data-sb"
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
          <Component3RequestYourDAta onBack={onBack} />
        </div>
          </div>
      <UnifiedStatusBar hostClass="request-your-data-sb" />
    </div>
  );
}
