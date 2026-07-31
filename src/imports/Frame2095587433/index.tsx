function IconLeftPlaceholder() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">City</p>
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[152px] items-center justify-center min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[2px] relative size-full">
          <TextIcon />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content />
    </div>
  );
}

function IconLeftPlaceholder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">State</p>
      </div>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[152px] items-center justify-center min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[2px] relative size-full">
          <TextIcon1 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              City
            </p>
            <Container />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              State
            </p>
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}