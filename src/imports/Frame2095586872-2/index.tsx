function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f3f3f3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Select file(s) to upload</p>
      </div>
    </div>
  );
}

function ButtonState() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative rounded-[500px] shrink-0" data-name="_ButtonState">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
      <div className="relative rounded-[500px] shrink-0" data-name="_ButtonBase">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
          <Content />
        </div>
        <div aria-hidden className="absolute border-[0.911px] border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center py-[16px] relative rounded-[500px] shrink-0 w-full" data-name="Button">
      <ButtonState />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-center justify-center py-[40px] relative rounded-[16px] size-full">
      <div aria-hidden className="absolute border border-[#565656] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <Button />
    </div>
  );
}