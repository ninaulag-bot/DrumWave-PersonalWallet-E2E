import DataCertificates from "@/imports/DataCertificates/index";

const FRAME_W = 390;
const FRAME_H = 844;

interface DataCertificatesScreenProps {
  onCustomerProfile?: () => void;
}

export function DataCertificatesScreen({ onCustomerProfile }: DataCertificatesScreenProps = {}) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
      <div style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
        <DataCertificates onCustomerProfile={onCustomerProfile} />
      </div>
    </div>
  );
}
