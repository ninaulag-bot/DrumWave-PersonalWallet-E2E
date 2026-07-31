function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[40px] text-center whitespace-nowrap">7</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center justify-center relative shrink-0">
      <Frame4 />
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Pending</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Titillium_Web:ExtraLight',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[40px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center justify-center relative shrink-0">
      <Frame5 />
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Accepted</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Titillium_Web:ExtraLight',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[40px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center justify-center relative shrink-0 w-[56px]">
      <Frame6 />
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#999] text-[14px] w-[min-content]">Rejected</p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[18px] items-center justify-center p-[16px] relative size-full">
      <Frame />
      <div className="h-[52.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 52.5">
            <path d="M0.5 0V52.5" id="Vector 924" stroke="var(--stroke-0, #3D3D3D)" />
          </svg>
        </div>
      </div>
      <Frame2 />
      <div className="h-[52.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 52.5">
            <path d="M0.5 0V52.5" id="Vector 924" stroke="var(--stroke-0, #3D3D3D)" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}