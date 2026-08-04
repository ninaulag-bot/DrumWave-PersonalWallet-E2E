import CashBalanceUS from "@/imports/CashBalanceUS/index";
import { MainBottomNav } from "./MainBottomNav";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

const FRAME_W = 390;
const FRAME_H = 844;

interface CashBalanceUSScreenProps {
  onAddPayoutMethod?: () => void;
  onHome?: () => void;
  onMyData?: () => void;
  onOffers?: () => void;
  onBack?: () => void;
}

export function CashBalanceUSScreen({ onAddPayoutMethod, onHome, onMyData, onOffers, onBack }: CashBalanceUSScreenProps = {}) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="cash-balance-us-sb" style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
        <div style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
          <CashBalanceUS onAddPayoutMethod={onAddPayoutMethod} />
          {/* Transparent tap target over the back arrow the import draws in its
              header (header sits at top-[70px], 342-wide row inset 24px). */}
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            style={{ position: "absolute", top: 70, left: 16, width: 48, height: 48, background: "transparent", border: "none", cursor: onBack ? "pointer" : "default", padding: 0, zIndex: 20 }}
          />
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <MainBottomNav activeTab="savingsPlan" onHome={onHome} onMyData={onMyData} onOffers={onOffers} />
        </div>
          </div>
      <UnifiedStatusBar hostClass="cash-balance-us-sb" />
    </div>
  );
}
