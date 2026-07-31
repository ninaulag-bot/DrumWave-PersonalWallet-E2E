import svgPaths from "./svg-nk770tkaph";

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Change password</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[753px] w-[342px]">
      <div className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-[342px]" data-name="Button">
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
    </div>
  );
}

function Frame5() {
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
      <Frame5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Enter current password
      </p>
    </div>
  );
}

function IconLeftPlaceholder() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">• • • • • • •</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / visibility">
          <div className="absolute inset-[16.67%_4.17%_20.83%_4.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 22 15" width="22">
              <path d={svgPaths.p8f0c00} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder />
      <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="_ButtonState">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[500px] shrink-0" data-name="_ButtonBase">
            <Content2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[2px] relative size-full">
          <TextIcon />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame2 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        New password
      </p>
    </div>
  );
}

function IconLeftPlaceholder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">• • • • • • •</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / visibility">
          <div className="absolute inset-[16.67%_4.17%_20.83%_4.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 22 15" width="22">
              <path d={svgPaths.p8f0c00} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder1 />
      <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="_ButtonState">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[500px] shrink-0" data-name="_ButtonBase">
            <Content4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[2px] relative size-full">
          <TextIcon1 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Passwords must have 12+ characters
            </p>
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Confirm password
      </p>
    </div>
  );
}

function IconLeftPlaceholder2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">• • • • • • •</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / visibility">
          <div className="absolute inset-[16.67%_4.17%_20.83%_4.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 22 15" width="22">
              <path d={svgPaths.p8f0c00} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextIcon2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder2 />
      <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="_ButtonState">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[500px] shrink-0" data-name="_ButtonBase">
            <Content6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[2px] relative size-full">
          <TextIcon2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    null
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame4 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[144px] w-[342px]">
      <Frame6 />
      <Frame9 />
    </div>
  );
}

function Frame12() {
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

function Frame11() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-[342px]">
      <Frame12 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[18px] text-center text-white">Change password</p>
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Skip</p>
      </div>
    </div>
  );
}

function DrumWaveCheckboxRoundChecked() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DrumWave / checkbox_round_checked">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="DrumWave / checkbox_round_checked">
          <g id="Vector">
            <path d={svgPaths.pd01100} fill="#E3E3E3" />
            <path clipRule="evenodd" d={svgPaths.p14951d00} fill="#E3E3E3" fillRule="evenodd" />
            <path d={svgPaths.p3791280} fill="var(--fill-0, #004E2C)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <DrumWaveCheckboxRoundChecked />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Password successfully updated!
      </p>
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

export default function Name() {
  return (
    <div className="bg-[#070707] relative size-full" data-name="Name">
      <Frame14 />
      <Frame1 />
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Personal Profile
      </p>
      <Frame8 />
      <div className="absolute content-stretch flex flex-col gap-px items-center left-0 top-[71px] w-[390px]" data-name="Profile header">
        <Frame11 />
        <div className="h-0 relative shrink-0 w-[390px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <path d="M0 0H390" id="Vector 879" opacity="0" stroke="var(--stroke-0, #3D3D3D)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#004e2c] content-stretch flex items-center justify-between left-[418px] opacity-0 p-[16px] rounded-[16px] top-[62px] w-[344px]" data-name="Toast">
        <Frame13 />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Material / close">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
              <path d={svgPaths.p19fbbe60} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
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