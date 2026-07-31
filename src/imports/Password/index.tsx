import svgPaths from "./svg-00giii3l6v";

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none font-[600]">Submit Request</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="hub_24dp">
        <div className="absolute inset-[0_0_4.17%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 24 23" width="24">
            <path d={svgPaths.p38639200} fill="var(--fill-0, #070707)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[342px]">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Account
      </p>
      <Frame2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[23px] h-[206px] items-start left-[24px] not-italic text-center top-[216px] w-[346px]">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.1] min-h-px relative text-[24px] text-white tracking-[0.48px] w-full">Request a copy of your DrumWave data</p>
      <div className="font-['Titillium_Web:Regular',sans-serif] leading-[0] relative shrink-0 text-[#999] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.2] mb-0">
          {`Your download will include a copy of all your `}
          <br aria-hidden />
          data—like your account profile, activity history, and any company data requests you’ve made through dWallet.
        </p>
        <p className="leading-[1.2]">
          <br aria-hidden />
          {`Keep in mind that requesting your data doesn’t delete it from DrumWave’s servers. `}
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[33px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / arrow_back_ios">
        <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 11.775 20" width="11.775">
            <path d={svgPaths.p30d4a680} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-[342px]">
      <Frame4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[18px] text-center text-white">Request my DrumWave data</p>
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Skip</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#999] text-[0px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="not-italic text-[16px]">
          <span className="font-['Titillium_Web:Regular',sans-serif] leading-[1.2]">{`Questions? Email us at `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] underline">support@drumwave.com</span>
        </p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#181818] content-stretch flex flex-col items-start left-1/2 p-[16px] rounded-[16px] top-[455px] w-[342px]">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame6 />
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

export default function Password() {
  return (
    <div className="bg-[#070707] relative size-full" data-name="Password">
      <div className="absolute content-stretch flex items-start left-[24px] rounded-[500px] top-[753px] w-[342px]" data-name="Button">
        <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
          <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative size-full">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Titillium_Web:SemiBold',sans-serif] leading-[1.1] left-1/2 not-italic opacity-0 text-[24px] text-center text-white top-[77px] tracking-[0.48px] whitespace-nowrap">Request my data</p>
      <Frame1 />
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Personal Profile
      </p>
      <Frame8 />
      <div className="absolute content-stretch flex flex-col gap-px items-center left-0 top-[71px] w-[390px]" data-name="Profile header">
        <Frame3 />
        <div className="h-0 relative shrink-0 w-[390px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <path d="M0 0H390" id="Vector 879" opacity="0" stroke="var(--stroke-0, #3D3D3D)" />
          </svg>
        </div>
      </div>
      <Frame7 />
      <div className="absolute bg-[#070707] h-[54px] left-0 top-0 w-[390px]" />
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
          <Frame />
        </div>
      </div>
      <div className="absolute bottom-[2px] h-[21px] right-px w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
    </div>
  );
}