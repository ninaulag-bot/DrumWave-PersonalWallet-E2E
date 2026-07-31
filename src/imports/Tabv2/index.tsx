function Frame() {
  return (
    <div className="h-[9px] relative shrink-0 w-[8px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
        <g id="Frame 2095587548">
          <circle cx="4" cy="5" fill="var(--fill-0, #FFB700)" id="Ellipse 22050" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-[1_0_0] gap-[10px] h-full items-center justify-center min-w-px relative rounded-[8px]" data-name="4">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.04)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame />
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#eee] text-[16px] text-center whitespace-nowrap">Pending</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-name="5">
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#999] text-[16px] text-center whitespace-nowrap">Accepted</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="3">
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#999] text-[16px] text-center whitespace-nowrap">Rejected</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-0 p-[4px] top-0 w-[342px]" data-name="content">
      <Component1 />
      <Component2 />
      <Component />
    </div>
  );
}

export default function Tabv() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[12px] size-full" data-name="tabv2">
      <Content />
    </div>
  );
}