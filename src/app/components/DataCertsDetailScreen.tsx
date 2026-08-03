import { useEffect, useRef, useState } from "react";
import DataCerts1 from "@/imports/DataCerts-1/index";
import { CertificateCompaniesContext } from "@/imports/DataCerts-1/companies-context";
import { CertificateCompaniesSection } from "@/app/components/CertificateCompaniesSection";
import { VEHICLE_REGISTRATION, type Certificate } from "@/app/data/certificates";
import { MainBottomNav } from "@/app/components/MainBottomNav";

const FRAME_W = 390;
// Figma frame is 390×1925. Content (My data value card) ends at y=1831 with 94px breathing
// room to the frame bottom. The Home Indicator lives at y=3022 (1097px outside this frame,
// an export artifact) and is clipped by overflow:hidden on the canvas div.
const BASE_CONTENT_H = 1925;
// Collapsed height of the Company(s) summary row. Anything taller is expansion,
// and the clip above has to grow by the same amount or it would cut the list off.
const COLLAPSED_SECTION_H = 24;

interface DataCertsDetailScreenProps {
  onDone?: () => void;
  onHome?: () => void;
  certificate?: Certificate;
  /** No default on purpose — the caller must say which flow led here
   *  ("requests" from the Request Data / certsFlow path, "home" from the
   *  23andMe / DA Home path) so the nav bar highlights the right tab. */
  activeTab: "requests" | "home";
}

export function DataCertsDetailScreen({
  onDone,
  onHome,
  certificate = VEHICLE_REGISTRATION,
  activeTab,
}: DataCertsDetailScreenProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [extraHeight, setExtraHeight] = useState(0);

  // Measure the Company(s) section rather than hardcoding a per-row height, so the
  // clip stays correct for any number of companies.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      const h = el.getBoundingClientRect().height;
      setExtraHeight(Math.max(0, Math.round(h - COLLAPSED_SECTION_H)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const companiesSlot = (
    <div ref={sectionRef} style={{ width: "100%" }}>
      <CertificateCompaniesSection companies={certificate.companies} />
    </div>
  );

  return (
    <div style={{ position: "absolute", inset: 0, background: "#070707" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "72px", overflowY: "auto" }}>
      <div style={{ position: "relative", width: `${FRAME_W}px`, margin: "0 auto" }}>
        {/* Inner frame clipped to actual content height, hiding blank tail of Frame47.
            Grows with the expanded company list so nothing gets cut off. */}
        <div
          style={{
            position: "relative",
            width: `${FRAME_W}px`,
            height: `${BASE_CONTENT_H + extraHeight}px`,
            overflow: "hidden",
          }}
        >
          <CertificateCompaniesContext.Provider value={companiesSlot}>
            <DataCerts1 />
          </CertificateCompaniesContext.Provider>
        </div>

        {/* Interactive "Done" button overlay — sits on top of the design's own Done button */}
        <button
          type="button"
          onClick={onDone}
          aria-label="Done"
          style={{
            position: "absolute",
            top: "78px",
            left: "calc(80% - 3px)",
            transform: "translateX(-50%)",
            width: "92px",
            height: "48px",
            borderRadius: "500px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        />
      </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab={activeTab} onHome={onHome} />
      </div>
    </div>
  );
}
