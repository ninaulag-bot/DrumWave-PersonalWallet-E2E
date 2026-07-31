function Nubank() {
  return (
    <div className="bg-[#820ad1] content-stretch flex flex-col items-center justify-center p-[6.189px] relative rounded-[49.511px] shrink-0 size-[24.755px]" data-name="Nubank">
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12.731px] text-center text-white whitespace-nowrap">N</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Nubank />
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[14.441px] text-center text-white whitespace-nowrap">Banks</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[37.133px] relative rounded-[41.259px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.315px] relative size-full">
          <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1a1b1c] text-[16.504px] text-center whitespace-nowrap">Request</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[31.976px] items-center justify-center relative size-full">
      <Frame />
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[24.755px] text-center text-white whitespace-nowrap">Nubank</p>
      <Frame2 />
    </div>
  );
}