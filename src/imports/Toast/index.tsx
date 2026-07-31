import svgPaths from "./svg-rja2wqj4d7";

function DrumWaveCheckboxRoundChecked() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DrumWave / checkbox_round_checked">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="DrumWave / checkbox_round_checked">
          <g id="Vector">
            <path d={svgPaths.pd01100} fill="#E3E3E3" />
            <path clipRule="evenodd" d={svgPaths.p14951d00} fill="#E3E3E3" fillRule="evenodd" />
            <path d={svgPaths.p3791280} fill="var(--fill-0, #004E2C)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <DrumWaveCheckboxRoundChecked />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Your report has been sent! `}</p>
    </div>
  );
}

export default function Toast() {
  return (
    <div className="bg-[#004e2c] content-stretch flex items-center justify-between p-[16px] relative rounded-[16px] size-full" data-name="Toast">
      <Frame />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Material / close">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p19fbbe60} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}