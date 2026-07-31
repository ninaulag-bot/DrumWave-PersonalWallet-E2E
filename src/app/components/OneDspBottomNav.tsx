import svgPaths from "@/imports/HomeRequestDataBeforeDsp-12/svg-envbxqmko5";

/**
 * Standalone, pinnable copy of the bottom navigation bar from the
 * "HomeRequestDataBeforeDsp-12" Figma import. The import bakes this bar into its
 * absolutely-positioned frame, so it scrolls with the content; extracting it here
 * lets it be pinned via <ScreenWithNavBar>. Chrome colors reference the design
 * system CSS variables; the icon vector data is reused as-authored from the import.
 */

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="icon">
          <g id="Vector">
            <path d={svgPaths.p1d971400} fill="var(--color-text-primary)" />
            <path d={svgPaths.p1d971400} fill="var(--color-text-primary)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TollIcon() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="toll">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
        <g id="toll">
          <path d={svgPaths.p10de2100} fill="var(--color-text-secondary)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OffersIcon() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
        <g id="icon">
          <path d={svgPaths.p2b00db00} fill="var(--color-text-secondary)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WalletIcon() {
  return (
    <div className="relative shrink-0 size-[31px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 31 31" width="31">
        <g clipPath="url(#clip0_onedsp_nav)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p20baf080} id="Vector_2" stroke="var(--color-text-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p1f27d380} id="Vector_3" stroke="var(--color-text-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d="M15.5 9.6875V25.1875" id="Vector_4" stroke="var(--color-text-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p1371e700} id="Vector_5" stroke="var(--color-text-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p3f1f8a00} id="Vector_6" stroke="var(--color-text-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
        </g>
        <defs>
          <clipPath id="clip0_onedsp_nav">
            <rect fill="white" height="31" width="31" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function OneDspBottomNav({ onHome }: { onHome?: () => void }) {
  return (
    <div
      className="relative h-[72px] w-[389px] mx-auto overflow-clip border-t border-solid"
      style={{ background: "var(--color-bg-base)", borderColor: "var(--color-border-secondary)" }}
      data-name="One DSP bottom nav"
    >
      {/* Ambient glow behind the active (Home) tab */}
      <div className="absolute left-[12px] size-[86px] top-[-45px]">
        <div className="absolute inset-[-58.14%]">
          <svg className="block size-full" fill="none" height="186" preserveAspectRatio="none" viewBox="0 0 186 186" width="186">
            <g filter="url(#filter0_f_onedsp_nav)" id="Ellipse 22068" opacity="0.6">
              <circle cx="93" cy="93" fill="#3D04D0" r="43" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="186" id="filter0_f_onedsp_nav" width="186" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_onedsp_nav" stdDeviation="25" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] top-[8px] w-[389px]">
        <button
          type="button"
          aria-label="Home"
          onClick={onHome}
          className="content-stretch flex h-[54px] items-center justify-center overflow-clip px-[4px] py-[3px] relative shrink-0 w-[62px] bg-transparent border-none"
          style={{ cursor: onHome ? "pointer" : "default" }}
          data-name="Main nav icons"
        >
          <HomeIcon />
        </button>
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0 w-[62px]" data-name="Main nav icons">
          <TollIcon />
        </div>
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0 w-[62px]" data-name="Main nav icons">
          <OffersIcon />
        </div>
        <div className="content-stretch flex flex-col h-[54px] items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0 w-[62px]" data-name="Offer icons 5">
          <WalletIcon />
        </div>
      </div>
    </div>
  );
}
