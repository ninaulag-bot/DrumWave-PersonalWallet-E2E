import svgPaths from "./svg-o0v0vwbjeq";

function Travel24Dp1F1F1FFill0Wght300Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="travel_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="travel_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
          <path d={svgPaths.p1692f180} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap">{`Travel & Transportation`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <Travel24Dp1F1F1FFill0Wght300Grad0Opsz />
      <Frame2 />
    </div>
  );
}

function Knob() {
  return <div className="bg-white relative rounded-[500px] shadow-[0px_0px_16px_0px_rgba(7,7,7,0.24)] shrink-0 size-[28px]" data-name="Knob" />;
}

function Container() {
  return (
    <div className="bg-[#666] content-stretch flex h-[32px] items-center p-[2px] relative rounded-[500px] shrink-0 w-[56px]" data-name="Container">
      <Knob />
    </div>
  );
}

function SwitchState() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="_SwitchState">
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="_SwitchBase">
        <Container />
      </div>
    </div>
  );
}

function Switch() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Switch">
      <SwitchState />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Switch />
    </div>
  );
}

export default function CategoryPills() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] size-full" data-name="Category pills">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#dd5050] text-[14px] w-[248px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Required for this offer. Keep this category on to receive $1.
      </p>
    </div>
  );
}