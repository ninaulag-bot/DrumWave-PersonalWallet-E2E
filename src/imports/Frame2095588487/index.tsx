import svgPaths from "./svg-so4cy22ylr";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">$120</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Material / arrow_back_ios">
            <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 11.775 20" width="11.775">
                <path d={svgPaths.p30d4a680} fill="var(--fill-0, #E3E3E3)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[87px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] opacity-60 relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cash balance
      </p>
    </div>
  );
}

function ArrowUpwardAlt24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow_upward_alt_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="arrow_upward_alt_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p226e2600} fill="var(--fill-0, #00FF91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0">
      <ArrowUpwardAlt24Dp1F1F1FFill0Wght400Grad0Opsz />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#00ff91] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        $50 this week
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-end p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden className="absolute border border-[#272727] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame5 />
      <Frame2 />
    </div>
  );
}