import svgPaths from "./svg-xnskme703k";

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / folder">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
            <path d={svgPaths.p3e1ce00} fill="var(--fill-0, #E3E3E3)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#cacaca] text-[18px] text-center whitespace-nowrap">Tesladata.zip</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cacaca] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        33.4 MB
      </p>
      <div className="relative shrink-0 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 2 2" width="2">
          <circle cx="1" cy="1" fill="var(--fill-0, #CACACA)" id="Ellipse 21956" r="1" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e3e3e3] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ready to upload
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#121212] content-stretch flex items-center justify-between p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / close">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <path d={svgPaths.p2aa77200} fill="var(--fill-0, #E3E3E3)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}