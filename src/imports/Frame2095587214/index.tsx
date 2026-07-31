function Frame2() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex h-[44px] items-center px-[19px] py-[6px] relative rounded-[60px] shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#070707] text-[16px] text-center whitespace-nowrap">Upload manually</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-[60px]">
      <div aria-hidden className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#d9d9d9] text-[16px] text-center whitespace-nowrap">How to upload</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}