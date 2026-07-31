import { useCertificateCompaniesSlot } from "./companies-context";
import svgPaths from "./svg-aex0c3rb1s";
import imgRectangle830150 from "./6c9199f943c09897149443b7d8b530d2e4d5fc9a.png";
import imgFrame2095587958 from "./58fa28d3afb64afb3af10674263f1f23970861cf.png";
import imgFrame2095587959 from "./f3855eeaf675891208a6a8b617dc84d96cce491d.png";
import imgImage from "./6d4c0a834cd37f21e0677d2d042ef7822ae64e27.png";

function Frame90() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Data Certificate
      </p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[24px] whitespace-nowrap">Vehicle Performance Data</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame90 />
      <Frame88 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame89 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[90px]">
        <div className="absolute inset-[-2px_-2.22%]">
          <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 94 4" width="94">
            <path d="M2 2H92" id="Vector 1664" opacity="0.4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Frame61 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tesla
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] w-[250px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Company(s)
      </p>
      <Frame82 />
    </div>
  );
}

function Title() {
  const companiesSlot = useCertificateCompaniesSlot();

  // Live Company(s) section supplied by the screen. No fixed h-[16px] here — the
  // expanded company list has to grow and push the sections below it down.
  if (companiesSlot) {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
        {companiesSlot}
      </div>
    );
  }

  // Original static row, kept as the fallback when no slot is provided.
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Title">
      <Frame65 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Travel & Transportation`}</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame41 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame39 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame60 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame73 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame40 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame38 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame59 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Category
      </p>
      <Frame81 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        dSavings smart
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] w-[186px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Contribution
      </p>
      <Frame83 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative size-full">
        <Title />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 310 1" width="310">
              <line id="Line 1" stroke="var(--stroke-0, #222222)" x2="310" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame43 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 310 1" width="310">
              <line id="Line 1" stroke="var(--stroke-0, #222222)" x2="310" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame75 />
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
      <Frame74 />
      <Frame76 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[24px] whitespace-nowrap">{`My products & services`}</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <Frame62 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame51 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Frame48 />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Products and services associated with this data certificate
      </p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative rounded-[341.854px] shrink-0 size-[64px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[341.854px]">
        <img alt="" className="absolute h-[110.71%] left-[-12.59%] max-w-none top-[-8.56%] w-[188.62%]" src={imgFrame2095587958} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-white">
        <p className="leading-[1.2]">Model 3 2026</p>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#666] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Matched on Jan 25, 2026
      </p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame55 />
      <Frame5 />
    </div>
  );
}

function Frame78() {
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

function Frame70() {
  return (
    <div className="content-stretch flex h-[20.282px] items-center relative shrink-0">
      <Frame78 />
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[1.2]">0.08</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame77 />
      <Frame70 />
    </div>
  );
}

function Card() {
  return (
    <div className="relative shrink-0 w-full" data-name="card">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[24px] relative rounded-[inherit] size-full">
        <Frame3 />
      </div>
      <div aria-hidden className="absolute border-[#222] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Card />
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[64px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
        <img alt="" className="absolute h-[108.88%] left-[-47.57%] max-w-none top-[-4.69%] w-[174.92%]" src={imgFrame2095587959} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-white">
        <p className="leading-[1.2] whitespace-pre">
          {`Full Self-Driving `}
          <br aria-hidden />
          Subscription
        </p>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#666] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Matched on [date]
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame56 />
      <Frame6 />
    </div>
  );
}

function Frame80() {
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

function Frame71() {
  return (
    <div className="content-stretch flex h-[20.282px] items-center relative shrink-0">
      <Frame80 />
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[1.2]">0.05</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame79 />
      <Frame71 />
    </div>
  );
}

function Card1() {
  return (
    <div className="relative shrink-0 w-full" data-name="card">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[24px] relative rounded-[inherit] size-full">
        <Frame4 />
      </div>
      <div aria-hidden className="absolute border-[#222] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Card1 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[47px] items-start px-[24px] relative shrink-0 w-[390px]">
      <Frame53 />
      <Frame64 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[24px] whitespace-nowrap">My data value</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <Frame63 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Frame49 />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Data value associated with this certificate
      </p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[8px] relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[20.571px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 20.5714 24" width="20.5714">
          <path d={svgPaths.p38a37770} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </svg>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Titillium_Web:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[34.909px] tracking-[-1.3964px] whitespace-nowrap">
        <p className="leading-[1.5]">0.05</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[14px] tracking-[-0.56px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5]">Vehicle Registration</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative rounded-[8px] shrink-0 w-full">
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#999] text-[16px] whitespace-nowrap">Full name</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame14 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[2.125px] items-center relative shrink-0">
      <div className="h-[11px] relative shrink-0 w-[10px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 10 11" width="10">
          <path d={svgPaths.p3c838d80} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">0.01</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame85 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame19 />
      <Frame24 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#999] text-[16px] whitespace-nowrap">Account created</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[2.125px] items-center relative shrink-0">
      <div className="h-[11px] relative shrink-0 w-[10px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 10 11" width="10">
          <path d={svgPaths.p3c838d80} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">0.01</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame91 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame20 />
      <Frame26 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#999] text-[16px] whitespace-nowrap">Home zip</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame16 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[2.125px] items-center relative shrink-0">
      <div className="h-[11px] relative shrink-0 w-[10px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 10 11" width="10">
          <path d={svgPaths.p3c838d80} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">0.01</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame92 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame29 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame21 />
      <Frame44 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#999] text-[16px] whitespace-nowrap">Date of birth</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[2.125px] items-center relative shrink-0">
      <div className="h-[11px] relative shrink-0 w-[10px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 10 11" width="10">
          <path d={svgPaths.p3c838d80} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">0.01</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame93 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame33 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame32 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame23 />
      <Frame45 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#999] text-[16px] whitespace-nowrap">Avg trips per week</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame18 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[2.125px] items-center relative shrink-0">
      <div className="h-[11px] relative shrink-0 w-[10px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 10 11" width="10">
          <path d={svgPaths.p3c838d80} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">0.01</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame94 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center px-[2px] relative shrink-0">
      <Frame37 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame36 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame35 />
      <Frame46 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Load more</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Material / keyboard_arrow_down">
          <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="9.86667" preserveAspectRatio="none" viewBox="0 0 16 9.86667" width="16">
              <path d={svgPaths.p23e9b380} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame22 />
      <Frame25 />
      <Frame28 />
      <Frame31 />
      <Frame34 />
      <Content />
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[12px] relative size-full">
        <Frame42 />
        <Frame50 />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="backdrop-blur-[2.5px] content-stretch flex flex-col items-center p-[25px] relative rounded-[16px] shrink-0 w-[343px]" style={{ backgroundImage: "linear-gradient(90.0431deg, rgba(18, 18, 18, 0.4) 1.6349%, rgba(24, 24, 24, 0.4) 99.977%)" }}>
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame69 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame54 />
      <Frame66 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#121212] content-stretch flex flex-col gap-[40px] h-[1449px] items-center left-1/2 pb-[24px] pt-[12px] px-[24px] rounded-[24px] top-[698px] w-[390px]">
      <Frame86 />
      <Frame84 />
      <Frame87 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="content">
      <div className="bg-white h-[4px] relative rounded-[10px] shrink-0 w-[12px]" data-name="bullet1" />
      <div className="bg-white relative rounded-[10px] shrink-0 size-[4px]" data-name="bullet2" />
      <div className="bg-white relative rounded-[10px] shrink-0 size-[4px]" data-name="bullet3" />
      <div className="bg-white relative rounded-[10px] shrink-0 size-[4px]" data-name="bullet3" />
      <div className="bg-white relative rounded-[10px] shrink-0 size-[4px]" data-name="bullet3" />
      <div className="bg-white relative rounded-[10px] shrink-0 size-[4px]" data-name="bullet3" />
      <div className="bg-white relative rounded-[10px] shrink-0 size-[4px]" data-name="bullet3" />
      <div className="bg-white relative rounded-[10px] shrink-0 size-[4px]" data-name="bullet3" />
    </div>
  );
}

function ProgressIndicatorBulletsSecondary() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#121212] content-stretch flex items-center left-1/2 px-[16px] py-[12px] rounded-[500px] top-[638px]" data-name="Progress Indicator / Bullets / Secondary">
      <Content1 />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#070707] text-[18px] text-center tracking-[-0.72px] whitespace-nowrap">Done</p>
        </div>
      </div>
    </div>
  );
}

function ButtonState() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[48px] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
      <ButtonBase />
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-[calc(80%-3px)] rounded-[500px] top-[78px] w-[92px]" data-name="Button">
      <ButtonState />
    </div>
  );
}

function Dvalue() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[228px] top-[20px] w-[78px]" data-name="Dvalue">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="DrumWave / dim_2">
        <div className="-translate-y-1/2 absolute aspect-[8/9.750870704650879] left-[16.67%] right-[20.83%] top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
            <g id="Vector">
              <path d={svgPaths.p23b7b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p25dfde80} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">
        <p className="leading-none">0.05</p>
      </div>
    </div>
  );
}

function SharedCustodyData({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex h-[24px] items-center justify-center left-[176px] px-[16px] py-[4px] rounded-[20px] top-[60px] w-[130px]"} data-name="SHARED CUSTODY DATA">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[8px] text-center tracking-[0.8px] w-[98px]">
        <p className="leading-[1.2]">SHARED CUSTODY DATA</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="travel_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
          <path d={svgPaths.p1692f180} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap">{`Travel & Transportation`}</p>
    </div>
  );
}

function DataCategory() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Data category">
      <Icon />
      <Text />
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end relative shrink-0" data-name="Category">
      <DataCategory />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:Regular',sans-serif] justify-end leading-[0] not-italic opacity-90 relative shrink-0 text-[44px] text-white tracking-[-1.32px] w-full">
        <p className="leading-[1.1] whitespace-pre-wrap">
          {`Vehicle  Performance `}
          <br aria-hidden />
          Data
        </p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#e3e3e3] text-[12px] tracking-[0.48px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        certificate id W9SVSRT.5235
      </p>
      <Frame57 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[286px]">
      <Frame58 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[286px]" data-name="Title">
      <div className="h-0 relative shrink-0 w-[286px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 286 1" width="286">
            <path d="M0 0.5H286" id="Vector 1040" opacity="0.2" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <Frame72 />
    </div>
  );
}

function Name() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.2] relative shrink-0 text-[#e3e3e3] text-[12px] w-full whitespace-nowrap" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Carolina Smith
      </p>
      <p className="font-['Open_Sans:Light',sans-serif] font-light relative shrink-0 tracking-[1.32px] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>
        MINTED 5/1/26
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute bottom-[20px] content-stretch flex flex-col gap-[20px] items-start left-[20px] right-[20px]" data-name="Content">
      <Category />
      <Title1 />
      <Name />
    </div>
  );
}

function LargeCards() {
  return (
    <div className="absolute h-[464px] left-[32px] rounded-[32px] top-[158px] w-[326px]" data-name="Large cards">
      <div className="absolute h-[464px] left-0 pointer-events-none rounded-[32px] top-0 w-[326px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgImage} />
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 rounded-[32px]" />
      </div>
      <Dvalue />
      <SharedCustodyData />
      <Content2 />
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[6px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] relative shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 27.328 13" width="27.328">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" height="12.2264" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264" width="19.2">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" height="12.3283" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283" width="17.1417">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[402px]" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

export default function DataCerts() {
  return (
    <div className="bg-[#070707] relative size-full" data-name="Data certs">
      <div className="absolute h-[388px] left-[calc(80%-2px)] opacity-40 top-[196px] w-[180px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="388" src={imgRectangle830150} width="180" />
      </div>
      <div className="absolute flex h-[442px] items-center justify-center left-[-187px] top-[192px] w-[204px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[442px] relative w-[204px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <path d={svgPaths.p3824f480} fill="var(--fill-0, #D9D9D9)" id="Rectangle 830151" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
      <Frame47 />
      <ProgressIndicatorBulletsSecondary />
      <Button />
      <LargeCards />
      <div className="-translate-x-1/2 absolute bottom-[-1118px] h-[21px] left-1/2 w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-full" data-name="Status Bar - iPhone">
          <Frame />
        </div>
      </div>
    </div>
  );
}