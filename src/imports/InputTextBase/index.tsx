function IconLeftPlaceholder() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">Street address</p>
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
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

export default function InputTextBase() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="_InputTextBase">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#1d1d1d] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Address line 1
      </p>
      <Container />
    </div>
  );
}