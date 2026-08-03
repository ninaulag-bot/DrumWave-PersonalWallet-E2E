import svgPaths from "@/imports/DaHomeFullWidthOverview/svg-n202z26fwu";
import activeHomeSvgPaths from "@/imports/HomeRequestDataBeforeDsp-12/svg-envbxqmko5";

/**
 * Shared 4-tab bottom nav (Home / My data / Savings plan / Offers) with an
 * active-tab glow, matching the labeled variant baked into
 * `DaHomeFullWidthOverview`/`DataCertificates` plus the active-tab glow
 * pattern from `OneDspBottomNav`/`DspLanding-1`. Those baked copies each
 * hardcode their own active tab (or none); this makes it a `activeTab` prop
 * so every screen can render the same look with the tab that's actually
 * correct for it.
 */

type ActiveTab = "home" | "requests" | "savingsPlan" | "offers";

function HomeIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <path d={active ? activeHomeSvgPaths.p1d971400 : svgPaths.p8f10400} fill={active ? "var(--color-text-primary)" : "#888888"} id="Vector" />
      </svg>
    </div>
  );
}

function MyDataIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="toll">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
        <path d={svgPaths.p10de2100} fill={active ? "var(--color-text-primary)" : "#888888"} id="Vector" />
      </svg>
    </div>
  );
}

function SavingsPlanIcon({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
        <path d={svgPaths.p2b00db00} fill={active ? "var(--color-text-primary)" : "#888888"} id="Vector" />
      </svg>
    </div>
  );
}

function OffersIcon({ active }: { active: boolean }) {
  const stroke = active ? "var(--color-text-primary)" : "#888888";
  return (
    <div className="relative shrink-0 size-[31px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 31 31" width="31">
        <g clipPath="url(#clip0_mainnav_offers)" id="Frame">
          <path d={svgPaths.p20baf080} id="Vector_2" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p1f27d380} id="Vector_3" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d="M15.5 9.6875V25.1875" id="Vector_4" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p1371e700} id="Vector_5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p3f1f8a00} id="Vector_6" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
        </g>
        <defs>
          <clipPath id="clip0_mainnav_offers">
            <rect fill="white" height="31" width="31" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function MainBottomNav({
  activeTab = "home",
  onHome,
  onMyData,
  onSavingsPlan,
  onOffers,
}: {
  activeTab?: ActiveTab;
  onHome?: () => void;
  onMyData?: () => void;
  onSavingsPlan?: () => void;
  onOffers?: () => void;
}) {
  const tabLabel: React.CSSProperties = { fontVariationSettings: '"wdth" 100' };
  const labelStyle = (active: boolean): React.CSSProperties => ({ ...tabLabel, color: active ? "var(--color-text-primary)" : "#888" });
  // Glow center tracks each tab's center under justify-between layout (24px padding,
  // 70px tabs, ~20px gaps): home 12 (design value), requests 106, savingsPlan 198
  // (design value), offers 287 — the last computed the same way as the other three.
  const glowLeft = { home: "12px", requests: "106px", savingsPlan: "198px", offers: "287px" }[activeTab];

  return (
    <div
      className="relative h-[72px] w-[389px] mx-auto overflow-clip border-t border-solid"
      style={{ background: "var(--color-bg-base)", borderColor: "var(--color-border-secondary)" }}
      data-name="Main bottom nav"
    >
      {/* Ambient glow behind whichever tab is active */}
      <div className="absolute size-[86px] top-[-45px]" style={{ left: glowLeft }}>
        <div className="absolute inset-[-58.14%]">
          <svg className="block size-full" fill="none" height="186" preserveAspectRatio="none" viewBox="0 0 186 186" width="186">
            <g filter="url(#filter0_f_mainnav)" id="Ellipse 22068" opacity="0.6">
              <circle cx="93" cy="93" fill="#3D04D0" r="43" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="186" id="filter0_f_mainnav" width="186" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_mainnav" stdDeviation="25" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] top-[-1px] w-[389px]">
        <button
          type="button"
          aria-label="Home"
          onClick={onHome}
          className="content-stretch flex flex-col gap-[3px] h-[56px] items-center justify-end overflow-clip pt-[3px] px-[4px] relative shrink-0 w-[70px] bg-transparent border-none"
          style={{ cursor: onHome ? "pointer" : "default" }}
          data-name="Main nav icons"
        >
          <HomeIcon active={activeTab === "home"} />
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[12px] text-center whitespace-nowrap" style={labelStyle(activeTab === "home")}>
            Home
          </p>
        </button>
        <button
          type="button"
          aria-label="My data"
          onClick={onMyData}
          className="content-stretch flex flex-col gap-[3px] h-[56px] items-center justify-end pt-[12px] px-[16px] relative rounded-[100px] shrink-0 w-[70px] bg-transparent border-none"
          style={{ cursor: onMyData ? "pointer" : "default" }}
          data-name="Main nav icons"
        >
          <MyDataIcon active={activeTab === "requests"} />
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[12px] text-center whitespace-nowrap" style={labelStyle(activeTab === "requests")}>
            My data
          </p>
        </button>
        <button
          type="button"
          aria-label="Savings plan"
          onClick={onSavingsPlan}
          className="content-stretch flex flex-col gap-[3px] h-[56px] items-center justify-end pt-[12px] px-[16px] relative rounded-[100px] shrink-0 w-[70px] bg-transparent border-none"
          style={{ cursor: onSavingsPlan ? "pointer" : "default" }}
          data-name="Main nav icons"
        >
          <SavingsPlanIcon active={activeTab === "savingsPlan"} />
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[12px] text-center whitespace-nowrap" style={labelStyle(activeTab === "savingsPlan")}>
            Savings plan
          </p>
        </button>
        <button
          type="button"
          aria-label="Offers"
          onClick={onOffers}
          className="content-stretch flex flex-col gap-[3px] h-[56px] items-center justify-end pt-[12px] px-[16px] relative rounded-[100px] shrink-0 w-[70px] bg-transparent border-none"
          style={{ cursor: onOffers ? "pointer" : "default" }}
          data-name="Main nav icons"
        >
          <OffersIcon active={activeTab === "offers"} />
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[12px] text-center whitespace-nowrap" style={labelStyle(activeTab === "offers")}>
            Offers
          </p>
        </button>
      </div>
    </div>
  );
}
