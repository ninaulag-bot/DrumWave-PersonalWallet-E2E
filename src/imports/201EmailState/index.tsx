import svgPaths from "./svg-n8bftxvkmp";

function Frame1() {
  return (
    <div className="absolute flex items-center justify-center left-[-12.23px] size-[1.567px] top-[295.52px]">
      <div className="flex-none rotate-[10.62deg]">
        <div className="bg-[rgba(7,7,7,0.01)] relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(71,0,255,0.24)] size-[1.343px]" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-12.23px] size-[1.567px] top-[295.52px]">
      <Frame1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-none">Next</p>
      </div>
    </div>
  );
}

function Content1() {
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

function TopText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Titillium_Web:Regular',sans-serif] gap-[16px] items-center leading-[1.2] not-italic relative shrink-0 text-center w-[251px]" data-name="top text">
      <p className="relative shrink-0 text-[#e3e3e3] text-[24px] w-full">Please provide your email and state</p>
      <p className="relative shrink-0 text-[#999] text-[16px] w-full">This helps us verify your identity and request your data.</p>
    </div>
  );
}

function Mail24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mail_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mail_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p238840} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLeftPlaceholder() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <Mail24Dp1F1F1FFill0Wght400Grad0Opsz />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">jane@gmail.com</p>
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[152px] items-center justify-center min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder />
    </div>
  );
}

function Content3() {
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
      <Content3 />
    </div>
  );
}

function InputTextBase() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Email
      </p>
      <Container />
    </div>
  );
}

function InputTextState() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
      <InputTextBase />
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Input Text">
      <InputTextState />
    </div>
  );
}

function LocationOn24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="location_on_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="location_on_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p1179fd00} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLeftPlaceholder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="icon left + placeholder">
      <LocationOn24Dp1F1F1FFill0Wght400Grad0Opsz />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#999] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">Select a State</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / keyboard_arrow_down">
          <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
              <path d={svgPaths.p13733a00} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextButton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="text + button">
      <IconLeftPlaceholder1 />
      <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="_ButtonState">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[500px] shrink-0" data-name="_ButtonBase">
            <Content5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[12px] relative size-full">
          <TextButton />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content4 />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#999] text-[10px] text-right w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Currently only available in the US
      </p>
    </div>
  );
}

function SelectBase() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[342px]" data-name="_SelectBase">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        State You Reside In
      </p>
      <Container1 />
    </div>
  );
}

function SelectSimpleState() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_SelectSimpleState">
      <SelectBase />
    </div>
  );
}

function SelectWeb() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Select/Web">
      <SelectSimpleState />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="form">
      <InputText />
      <SelectWeb />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-center left-[24px] top-[202px] w-[342px]" data-name="content">
      <TopText />
      <Form />
    </div>
  );
}

function Mail24Dp1F1F1FFill0Wght400Grad0Opsz1() {
  return (
    <div className="absolute left-[calc(25%+77.5px)] size-[40px] top-[146px]" data-name="mail_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="mail_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p36430100} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </g>
      </svg>
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

export default function Component201EmailState() {
  return (
    <div className="bg-[#070707] relative size-full" data-name="2.0.1 Email + State">
      <Group />
      <div className="absolute h-[21px] left-0 top-[823px] w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[500px] top-[735px] w-[290px]" data-name="Button">
        <div className="content-stretch flex flex-[1_0_0] h-[48px] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
          <div className="bg-[#070707] flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex items-start left-[24px] rounded-[500px] top-[calc(50%-330px)]" data-name="Button">
        <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="_ButtonState">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[500px] shrink-0" data-name="_ButtonBase">
            <Content1 />
          </div>
        </div>
      </div>
      <Content2 />
      <Mail24Dp1F1F1FFill0Wght400Grad0Opsz1 />
      <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-[390px]" data-name="Status Bar">
        <Frame />
      </div>
    </div>
  );
}