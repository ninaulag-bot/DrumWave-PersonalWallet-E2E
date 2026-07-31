function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f3f3f3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Select file(s) to upload</p>
      </div>
    </div>
  );
}

export default function ButtonBase() {
  return (
    <div className="relative rounded-[500px] size-full" data-name="_ButtonBase">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
        <Content />
      </div>
      <div aria-hidden className="absolute border-[0.911px] border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
    </div>
  );
}