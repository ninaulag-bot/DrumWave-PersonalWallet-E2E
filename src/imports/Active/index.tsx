import svgPaths from "./svg-6u9pgitz49";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16px] w-[217px]">{`I prefer not to monetize my data `}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] min-w-full relative shrink-0 text-[#999] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        I want to leverage dWallet to build my data savings over the long-term and decide how its used later.
      </p>
    </div>
  );
}

export default function Active() {
  return (
    <div className="bg-[rgba(0,145,255,0.1)] content-stretch flex gap-[12px] items-start p-[24px] relative rounded-[16px] size-full" data-name="Active">
      <div aria-hidden className="absolute border border-[rgba(0,145,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[24px]" data-name="DrumWave / radio_checked">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g id="Vector">
              <path d={svgPaths.p14cada00} fill="#070707" />
              <path clipRule="evenodd" d={svgPaths.p1ccfd080} fill="#999999" fillRule="evenodd" />
              <path d={svgPaths.p6edd080} fill="var(--fill-0, #E3E3E3)" />
            </g>
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}