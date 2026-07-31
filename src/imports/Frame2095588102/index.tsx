import svgPaths from "./svg-n24lup08st";
import imgFrame2095587958 from "./fa410bd360936cb1ae71dae532cff0d9f6c5873e.png";

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[24px] w-full">{`My products & services`}</p>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5]">Products and services associated with this data certificate</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[341.854px] shrink-0 size-[64px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[341.854px] size-full" src={imgFrame2095587958} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-white">
        <p className="leading-[1.2]">23andMe product</p>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#666] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Matched on [date]
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="DrumWave / dim_2">
        <div className="-translate-y-1/2 absolute aspect-[8/9.750870704650879] left-[16.67%] right-[20.83%] top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.1886" preserveAspectRatio="none" viewBox="0 0 10 12.1886" width="10">
            <g id="Vector">
              <path d={svgPaths.p38abf380} fill="var(--fill-0, white)" />
              <path d={svgPaths.p324e1220} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[20.282px] items-center relative shrink-0">
      <Frame9 />
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[1.2]">0.08</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Card() {
  return (
    <div className="relative shrink-0 w-full" data-name="card">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[24px] relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden className="absolute border-[#222] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Card />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full">
      <Frame5 />
    </div>
  );
}