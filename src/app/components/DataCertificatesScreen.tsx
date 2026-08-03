import DataCertificates from "@/imports/DataCertificates/index";
import { MainBottomNav } from "./MainBottomNav";

const FRAME_W = 390;
const FRAME_H = 844;

interface DataCertificatesScreenProps {
  onCustomerProfile?: () => void;
  onHome?: () => void;
}

export function DataCertificatesScreen({ onCustomerProfile, onHome }: DataCertificatesScreenProps = {}) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
      {/* Hide the nav bar baked into the import; the shared MainBottomNav renders in its place. */}
      <style>{`.datacertificates-import .h-\\[72px\\] { display: none !important; }`}</style>
      <div className="datacertificates-import" style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
        <DataCertificates onCustomerProfile={onCustomerProfile} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="home" onHome={onHome} />
      </div>
    </div>
  );
}
