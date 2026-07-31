import svgPaths from "./svg-ph9osg2rtc";

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center left-[24px] top-[69px] w-[343px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / arrow_back_ios">
        <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 11.775 20" width="11.775">
            <path d={svgPaths.p30d4a680} fill="var(--fill-0, #070707)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(7,7,7,0.01)] bottom-[-9.82px] left-[calc(50%+0.18px)] rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(255,0,217,0.2)] size-[10px]" />;
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g clipPath="url(#clip0_189_491)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.pb59bd80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p2815a300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
        <defs>
          <clipPath id="clip0_189_491">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.21] relative shrink-0 text-[28px] text-white tracking-[-0.84px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Upload your data to the dWCloud
      </p>
      <p className="font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#cacaca] text-[16px] w-full">Encrypted. Private. Always your choice.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame7 />
    </div>
  );
}

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

function Frame4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-center justify-center py-[40px] relative rounded-[16px] shrink-0 w-full">
      
      <Button />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[24px] top-[133px] w-[348px]">
      <Frame9 />
      <Frame4 />
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[402px]" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="DrumWave / checkbox_square">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <path d={svgPaths.p3a94b900} fill="var(--fill-0, #070707)" id="Vector" stroke="var(--stroke-0, #999999)" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px relative text-[#e3e3e3] text-[0px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="text-[14px]">
          <span className="leading-[1.5]">{`I agree to the dWCloud `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] underline" style={{ fontVariationSettings: '"wdth" 100' }}>
            Terms of Service.
          </span>
        </p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Upload my Data</p>
      </div>
    </div>
  );
}

function ButtonState1() {
  return (
    <div className="bg-[#2a2a2a] content-stretch flex h-[48px] items-start relative rounded-[500px] shrink-0 w-[342px]" data-name="_ButtonState">
      <div className="flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <Content1 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[0.911px] border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <ButtonState1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-end left-[23px] top-[703px] w-[344px]">
      <Frame8 />
      <Frame6 />
    </div>
  );
}

export default function Upload() {
  return (
    <div className="bg-[#070707] relative size-full" data-name="Upload 1">
      <Frame3 />
      <Frame2 />
      <Frame11 />
      <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[177px] left-[calc(50%-0.5px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] to-[39.904%] to-black w-[391px]" />
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-full" data-name="Status Bar - iPhone">
          <Frame1 />
        </div>
      </div>
      <div className="absolute bottom-0 h-[21px] right-px w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}