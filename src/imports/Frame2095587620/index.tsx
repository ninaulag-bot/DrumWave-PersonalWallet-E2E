import svgPaths from "./svg-0rkxrz2ck8";

function Memory24Dp1F1F1FFill0Wght300Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="memory_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="memory_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
          <path d={svgPaths.p813af00} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[185px]">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16px] w-full">{`Technology & Social Media `}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999] text-[14px] tracking-[-0.1504px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        GM, BYD, Tesla and 8 others
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Memory24Dp1F1F1FFill0Wght300Grad0Opsz />
      <Frame />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-between p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
      <Icon />
    </div>
  );
}