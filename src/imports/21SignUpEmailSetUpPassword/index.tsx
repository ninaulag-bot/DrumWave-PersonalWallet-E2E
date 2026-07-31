import svgPaths from "./svg-m89hy89puf";

function Frame1() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(100%+58.56px)] size-[1.591px] top-[289.08px]">
      <div className="flex-none rotate-[-78.1deg]">
        <div className="bg-[rgba(7,7,7,0.01)] relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(255,0,217,0.3)] size-[1.343px]" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(100%+58.56px)] size-[1.591px] top-[289.08px]">
      <Frame1 />
    </div>
  );
}

function TopText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Titillium_Web:Regular',sans-serif] gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-name="top text">
      <p className="leading-[1.2] relative shrink-0 text-[#e3e3e3] text-[24px] w-full">Set up a secure password</p>
      <div className="leading-[0] relative shrink-0 text-[#999] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.2] mb-0">{`Use at least 12 characters, with a mix `}</p>
        <p className="leading-[1.2]">of letters, numbers, and symbols.</p>
      </div>
    </div>
  );
}

function IconLeftPlaceholder() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">Enter a password</p>
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
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
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function IconLeftPlaceholder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">Confirm password</p>
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
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
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[342px]" data-name="form">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#1d1d1d] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Password
            </p>
            <Container />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#1d1d1d] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Confirm password
            </p>
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[72px] items-center left-[24px] top-[202px] w-[342px]" data-name="content">
      <TopText />
      <Form />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-none">Next</p>
      </div>
    </div>
  );
}

function CheckboxBase() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[8px] relative rounded-[4px] shrink-0 w-[342px]" data-name="_CheckboxBase">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="relative shrink-0 size-[24px]" data-name="DrumWave / checkbox_square">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3a94b900} fill="var(--fill-0, #070707)" id="Vector" stroke="var(--stroke-0, #999999)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#e3e3e3] text-[0px] w-[292px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="text-[14px]">
          <span className="leading-[1.2]">{`By clicking here, I state that I have read and understood the `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] underline" style={{ fontVariationSettings: '"wdth" 100' }}>
            Terms of Use
          </span>
          <span className="leading-[1.2]">{` and `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] underline" style={{ fontVariationSettings: '"wdth" 100' }}>
            Privacy Policy
          </span>
          <span className="leading-[1.2]">.</span>
        </p>
      </div>
    </div>
  );
}

function CheckboxState() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="_CheckboxState">
      <CheckboxBase />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="absolute content-stretch flex items-start left-[24px] top-[643px] w-[342px]" data-name="Checkbox">
      <CheckboxState />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Material / arrow_back_ios">
          <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7 26.6667">
              <path d={svgPaths.p22d51380} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
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
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
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

export default function Component21SignUpEmailSetUpPassword() {
  return (
    <div className="bg-[#070707] relative size-full" data-name="2.1 Sign Up Email [set up password]">
      <Group />
      <div className="absolute h-[21px] left-0 top-[823px] w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <Content />
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[500px] top-[735px] w-[290px]" data-name="Button">
        <div className="content-stretch flex flex-[1_0_0] h-[48px] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
          <div className="bg-[#070707] flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <Content5 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Checkbox />
      <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[146px]" data-name="Master Icon">
        <div className="relative shrink-0 size-[40px]" data-name="Material / lock">
          <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 35">
              <path d={svgPaths.pf7eec00} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[17px] left-[calc(25%+75.5px)] top-[658px] w-[87px]" data-name="terms" />
      <div className="absolute h-[17px] left-[calc(75%-0.5px)] top-[658px] w-[49px]" data-name="privacy" />
      <div className="absolute h-[17px] left-[68px] top-[675px] w-[49px]" data-name="privacy" />
      <div className="-translate-y-1/2 absolute content-stretch flex items-start left-[24px] rounded-[500px] top-[calc(50%-330px)]" data-name="Button">
        <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="_ButtonState">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[500px] shrink-0" data-name="_ButtonBase">
            <Content6 />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-[390px]" data-name="Status Bar">
        <Frame />
      </div>
    </div>
  );
}