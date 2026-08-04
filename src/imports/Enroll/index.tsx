import React from "react";
import { motion } from "motion/react";
import svgPaths from "./svg-gq1sgllx8v";
import { DataContributionStep } from "../../app/components/DataContributionStep";
import { GoalStep } from "../../app/components/GoalStep";
import { CornerGlow } from "../../app/components/CornerGlow";
import imgRectangle5595 from "./741a120aa50a1efc4ca25391e35f954fa9bea854.png";

function Group1() {
  return (
    <div className="absolute h-[651px] left-[-106px] top-[-108px] w-[544px]">
      <div className="absolute inset-[-31.83%_-38.64%_-7.68%_-27.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 904.444 908.222">
          <g id="Group 1000006091">
            <g id="Group 1000005989">
              <g filter="url(#filter0_f_151_967)" id="Ellipse 1384" opacity="0">
                <ellipse cx="413.013" cy="484.875" fill="var(--fill-0, #00FF91)" rx="262.791" ry="277.653" />
              </g>
              <g filter="url(#filter1_f_151_967)" id="Ellipse 1386" opacity="0.3">
                <circle cx="452.222" cy="452.222" fill="var(--fill-0, #0091FF)" r="182" />
              </g>
            </g>
            <g filter="url(#filter2_f_151_967)" id="Ellipse 1387" opacity="0.6">
              <circle cx="373.222" cy="686.222" fill="var(--fill-0, #070707)" r="172" />
            </g>
            <g filter="url(#filter3_f_151_967)" id="Ellipse 1387_2" opacity="0.6">
              <circle cx="571.222" cy="620.222" fill="var(--fill-0, #070707)" r="123" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_151_967" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_151_967" stdDeviation="135.111" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="904.444" id="filter1_f_151_967" width="904.444" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_151_967" stdDeviation="135.111" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="444" id="filter2_f_151_967" width="444" x="151.222" y="464.222">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_151_967" stdDeviation="25" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="346" id="filter3_f_151_967" width="346" x="398.222" y="447.222">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_151_967" stdDeviation="25" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / account_circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p7f34500} fill="var(--fill-0, #E3E3E3)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[24px] whitespace-nowrap">Personal info</p>
    </div>
  );
}

function TopText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="top text">
      <Frame8 />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] opacity-70 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        We need some basic information to get started.
      </p>
    </div>
  );
}

function IconLeftPlaceholder() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">(Autofill)</p>
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

function Content() {
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
      <Content />
    </div>
  );
}

function IconLeftPlaceholder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">(Autofill)</p>
      </div>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[152px] items-center justify-center min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder1 />
    </div>
  );
}

function Content1() {
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
      <Content1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              First name
            </p>
            <Container />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Last Name
            </p>
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconLeftPlaceholder2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">mm/dd/yyyy</p>
      </div>
    </div>
  );
}

function TextIcon2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[152px] items-center justify-center min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder2 />
    </div>
  );
}

function Content2() {
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
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame11 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Date of birth `}</p>
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconLeftPlaceholder3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">(Autofill)</p>
      </div>
    </div>
  );
}

function TextIcon3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[152px] items-center justify-center min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[2px] relative size-full">
          <TextIcon3 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content3 />
    </div>
  );
}

function IconLeftPlaceholder4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">XXX-XXX-XXXX</p>
      </div>
    </div>
  );
}

function TextIcon4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[152px] items-center justify-center min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[2px] relative size-full">
          <TextIcon4 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content4 />
    </div>
  );
}

function IconLeftPlaceholder5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px relative" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">0000</p>
      </div>
    </div>
  );
}

function TextIcon5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[152px] items-center justify-center min-w-px relative" data-name="text + icon">
      <IconLeftPlaceholder5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[2px] relative size-full">
          <TextIcon5 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <Content5 />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="text">
      <div className="content-stretch flex flex-col gap-[2px] items-start pr-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-none">As a regulatory requirement, we need to verify your SSN before forwarding payments.</p>
        </div>
      </div>
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="icon + text">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Material / info">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
              <path d={svgPaths.p239aea00} fill="var(--fill-0, #666666)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-[#181818] content-stretch flex gap-[16px] items-center pl-[16px] pr-[8px] py-[16px] relative rounded-[16px] shrink-0 w-[342px]" data-name="Alert">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <IconText />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Last 4 of your SSN
            </p>
            <Container5 />
          </div>
        </div>
      </div>
      <Alert />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Email
            </p>
            <Container3 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Text">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_InputTextState">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_InputTextBase">
            <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              Phone number
            </p>
            <Container4 />
          </div>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="form">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <TopText />
      <Form />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[159px] w-[342px]">
      <Frame5 />
    </div>
  );
}

function Frame3({ onContinue, label = "Continue" }: { onContinue?: () => void; label?: string }) {
  return (
    <button
      onClick={onContinue}
      className="bg-[#e3e3e3] w-full flex h-[48px] items-center justify-center rounded-[500px] cursor-pointer border-0"
    >
      <span className="font-['Titillium_Web:SemiBold',sans-serif] not-italic text-[#1d2023] text-[18px]">{label}</span>
    </button>
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[402px]" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-0 place-items-start relative shrink-0">
      <div className="col-1 h-[48px] ml-0 mt-0 relative row-1 w-[24px]" data-name="Vector">
        <div className="absolute inset-[-142.86%_-250%_-142.86%_-321.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.143 185.143">
            <g filter="url(#filter0_d_119_7872)" id="Vector">
              <path d={svgPaths.p3be7c500} fill="url(#paint0_radial_119_7872)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="185.143" id="filter0_d_119_7872" width="161.143" x="-1.90735e-06" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-8.57143" />
                <feGaussianBlur stdDeviation="34.2857" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.85098 0 0 0 0.4 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_119_7872" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_119_7872" mode="normal" result="shape" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(11.8542 -41.8849 -20.9424 -23.7084 83.4857 113.829)" gradientUnits="userSpaceOnUse" id="paint0_radial_119_7872" r="1">
                <stop stopColor="#FF00DA" />
                <stop offset="0.76607" stopColor="#7D1F70" />
                <stop offset="0.9999" stopColor="#FF00DA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-[7.03px] relative row-1 size-[24px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative rounded-[100px] size-[24px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
              <img alt="" className="absolute h-[184.94%] left-[-13.21%] max-w-none top-[-7.44%] w-[185.4%]" src={imgRectangle5595} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step-specific form content ────────────────────────────────────────────────

function EnrollField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none opacity-80 relative shrink-0 text-[#e3e3e3] text-[14px] w-full"
         style={{ fontVariationSettings: '"wdth" 100' }}>
        {label}
      </p>
      <div className="bg-[#111] relative rounded-[8px] shrink-0 w-full h-[44px] flex items-center pl-[12px] pr-[2px]">
        <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#999] text-[16px]"
           style={{ fontVariationSettings: '"wdth" 100' }}>
          {placeholder}
        </p>
      </div>
    </div>
  );
}

function EnrollStepHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]">{icon}</div>
        <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[24px]">
          {title}
        </p>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] opacity-70 relative shrink-0 text-[#e3e3e3] text-[14px] w-full"
         style={{ fontVariationSettings: '"wdth" 100' }}>
        {subtitle}
      </p>
    </div>
  );
}

function HomeAddressStep({
  addr1, setAddr1,
  addr2, setAddr2,
  city, setCity,
  addrState, setAddrState,
  zip, setZip,
}: {
  addr1: string; setAddr1: (v: string) => void;
  addr2: string; setAddr2: (v: string) => void;
  city: string; setCity: (v: string) => void;
  addrState: string; setAddrState: (v: string) => void;
  zip: string; setZip: (v: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <EnrollStepHeader
        icon={
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#E3E3E3" />
          </svg>
        }
        title="Home address"
        subtitle="We need your home address to verify your identity and comply with regulations."
      />
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <PersonalInfoField label="Address line 1" value={addr1} onChange={setAddr1} placeholder="123 Main St" />
        <PersonalInfoField label="Address line 2" value={addr2} onChange={setAddr2} placeholder="Apt, suite, unit…" />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", width: "100%" }}>
          <div style={{ display: "flex", gap: "var(--space-4)", width: "100%" }}>
            <div style={{ flex: "1 0 0", minWidth: 0 }}>
              <PersonalInfoField label="City" value={city} onChange={setCity} placeholder="City" />
            </div>
            <div style={{ flex: "1 0 0", minWidth: 0 }}>
              <PersonalInfoField label="State" value={addrState} onChange={setAddrState} placeholder="State" />
            </div>
          </div>
          <PersonalInfoField label="Zip code" value={zip} onChange={setZip} placeholder="00000" />
        </div>
      </div>
    </div>
  );
}

function PayoutMethodStep({
  firstName, lastName,
  bankName, setBankName,
  routing, setRouting,
  account, setAccount,
}: {
  firstName: string; lastName: string;
  bankName: string; setBankName: (v: string) => void;
  routing: string; setRouting: (v: string) => void;
  account: string; setAccount: (v: string) => void;
}) {
  const [confirmAccount, setConfirmAccount] = React.useState("");

  const lastInitial = lastName ? lastName[0].toUpperCase() + "." : "";
  const nameLabel = firstName || lastInitial ? `${firstName}${lastInitial ? " " + lastInitial : ""}` : "[First name, last initial]";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ position: "relative", width: "24px", height: "24px", flexShrink: 0 }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 24 24">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="var(--color-text-primary)" />
            </svg>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "24px", lineHeight: "1.2", color: "var(--color-text-primary)", margin: 0 }}>
            Payout method <span style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>(optional)</span>
          </p>
        </div>
        {/* Subtitle with bold name portion */}
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "var(--text-body-md-size)", lineHeight: "1.32", color: "var(--color-text-primary)", opacity: 0.7, margin: 0, fontVariationSettings: '"wdth" 100' }}>
          Enter bank account information for{" "}
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, opacity: 1, fontVariationSettings: '"wdth" 100' }}>
            {nameLabel}.
          </span>{" "}
          We need this info to send payments.
        </p>
      </div>

      {/* Fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", width: "100%" }}>
        <PersonalInfoField label="Name of the Bank" value={bankName} onChange={setBankName} placeholder="Bank Name" />
        <PersonalInfoField label="Routing number" value={routing} onChange={setRouting} placeholder="000000" />
        <PersonalInfoField label="Account number" value={account} onChange={setAccount} placeholder="000000" />
        <PersonalInfoField label="Confirm account number" value={confirmAccount} onChange={setConfirmAccount} placeholder="000000" />
      </div>
    </div>
  );
}

function EmploymentStep() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <EnrollStepHeader
        icon={
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
            <path d="M20 6h-2.18c.07-.44.18-.86.18-1a3 3 0 0 0-6 0c0 .14.11.56.18 1H10c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 14H10V8h10v11z" fill="#E3E3E3" />
          </svg>
        }
        title="Employment"
        subtitle="Tell us about your current employment so we can tailor your plan."
      />
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <EnrollField label="Employer name" placeholder="Acme Corp" />
        <EnrollField label="Job title" placeholder="Software Engineer" />
        <EnrollField label="Employment status" placeholder="Full-time" />
      </div>
    </div>
  );
}

function IncomeStep() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <EnrollStepHeader
        icon={
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="#E3E3E3" />
          </svg>
        }
        title="Income"
        subtitle="This helps us understand how to maximise the value of your data plan."
      />
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <EnrollField label="Annual income" placeholder="$75,000" />
        <EnrollField label="Additional income sources (optional)" placeholder="Freelance, investments…" />
      </div>
    </div>
  );
}

function ReviewStep() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <EnrollStepHeader
        icon={
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#E3E3E3" />
          </svg>
        }
        title="Review & submit"
        subtitle="Please confirm all your information is correct before submitting."
      />
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {[
          { label: "Personal info", value: "Verified" },
          { label: "Home address", value: "Verified" },
          { label: "Employment", value: "Verified" },
          { label: "Income", value: "Verified" },
        ].map(({ label, value }) => (
          <div key={label} className="content-stretch flex items-center justify-between relative shrink-0 w-full py-[12px]"
               style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#e3e3e3] text-[14px]"
               style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#18D687] text-[14px]"
               style={{ fontVariationSettings: '"wdth" 100' }}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Nav bar (step indicator) ──────────────────────────────────────────────────

function Frame1({ onBack, step = 1, totalSteps = 5, label }: { onBack?: () => void; step?: number; totalSteps?: number; label?: string }) {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] top-[71px] w-[342px]">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="Material / arrow_back_ios" onClick={onBack}>
        <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.775 20">
            <path d={svgPaths.p30d4a680} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </button>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[18px] text-center text-white">
        {label ?? `${step}/${totalSteps}`}
      </p>
      <Group />
    </div>
  );
}

// ── Shared input field for Personal Info step ────────────────────────────────

function PersonalInfoField({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  const filled = value.length > 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "var(--text-body-md-size)",
          lineHeight: 1,
          color: "var(--color-text-primary)",
          opacity: 0.8,
          margin: 0,
          fontVariationSettings: '"wdth" 100',
        }}
      >
        {label}
      </p>
      <div
        style={{
          background: "var(--color-bg-surface)",
          borderRadius: "var(--radius-xs)",
          boxShadow: `inset 0 0 0 1px var(--color-border-secondary)`,
          height: "44px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "12px",
          paddingRight: "4px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "var(--text-body-lg-size)",
            color: filled ? "var(--color-text-primary)" : "var(--color-text-secondary)",
            fontVariationSettings: '"wdth" 100',
            caretColor: "var(--color-text-primary)",
          }}
        />
      </div>
    </div>
  );
}

interface PersonalInfoProps {
  firstName: string; setFirstName: (v: string) => void;
  lastName: string; setLastName: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  dob: string; setDob: (v: string) => void;
  ssn: string; setSsn: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
}

function PersonalInfoStep({
  firstName, setFirstName,
  lastName, setLastName,
  email, setEmail,
  dob, setDob,
  ssn, setSsn,
  phone, setPhone,
}: PersonalInfoProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ position: "relative", width: "24px", height: "24px", flexShrink: 0 }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p7f34500} fill="#E3E3E3" />
            </svg>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "24px", lineHeight: "1.2", color: "var(--color-text-primary)", margin: 0 }}>
            Personal info
          </p>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "var(--text-body-md-size)", lineHeight: "1.32", color: "var(--color-text-primary)", opacity: 0.7, margin: 0, fontVariationSettings: '"wdth" 100' }}>
          We need some basic information to get started.
        </p>
      </div>

      {/* Form fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
        {/* First / Last name row */}
        <div style={{ display: "flex", gap: "16px", width: "100%" }}>
          <div style={{ flex: "1 0 0", minWidth: 0 }}>
            <PersonalInfoField label="First name" value={firstName} onChange={setFirstName} placeholder="First name" />
          </div>
          <div style={{ flex: "1 0 0", minWidth: 0 }}>
            <PersonalInfoField label="Last name" value={lastName} onChange={setLastName} placeholder="Last name" />
          </div>
        </div>

        <PersonalInfoField label="Date of birth" value={dob} onChange={setDob} placeholder="mm/dd/yyyy" />
        <PersonalInfoField label="Email" value={email} onChange={setEmail} placeholder="email@example.com" type="email" />
        <PersonalInfoField label="Phone number" value={phone} onChange={setPhone} placeholder="XXX-XXX-XXXX" type="tel" />

        {/* SSN + disclosure */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <PersonalInfoField label="Last 4 of your SSN" value={ssn} onChange={setSsn} placeholder="0000" type="password" />
          {/* Disclosure box */}
          <div
            style={{
              background: "var(--color-bg-surface-alt)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-secondary)",
              padding: "16px",
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <div style={{ flexShrink: 0, width: "40px", height: "40px", position: "relative" }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 33.3333 33.3333">
                <path d={svgPaths.p239aea00} fill="var(--color-text-disabled)" />
              </svg>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "var(--text-body-md-size)", lineHeight: "1.32", color: "var(--color-text-secondary)", margin: 0, fontVariationSettings: '"wdth" 100' }}>
              As a regulatory requirement, we need to verify your SSN before forwarding payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Enroll({
  onBack,
  onContinue,
  step = 1,
  totalSteps = 5,
  stepLabel,
  firstName = "", setFirstName,
  lastName = "", setLastName,
  email = "", setEmail,
  dob = "", setDob,
  ssn = "", setSsn,
  phone = "", setPhone,
  addr1 = "123 Main Street", setAddr1,
  addr2 = "Apt 4B", setAddr2,
  city = "Mountain View", setCity,
  addrState = "California", setAddrState,
  zip = "12345", setZip,
  bankName = "", setBankName,
  routing = "", setRouting,
  account = "", setAccount,
  toggles = {}, onToggle,
  goalValue = 0, setGoalValue,
  preferNotToMonetize = false, setPreferNotToMonetize,
}: {
  onBack?: () => void;
  onContinue?: () => void;
  step?: number;
  totalSteps?: number;
  stepLabel?: string;
  firstName?: string; setFirstName?: (v: string) => void;
  lastName?: string; setLastName?: (v: string) => void;
  email?: string; setEmail?: (v: string) => void;
  dob?: string; setDob?: (v: string) => void;
  ssn?: string; setSsn?: (v: string) => void;
  phone?: string; setPhone?: (v: string) => void;
  addr1?: string; setAddr1?: (v: string) => void;
  addr2?: string; setAddr2?: (v: string) => void;
  city?: string; setCity?: (v: string) => void;
  addrState?: string; setAddrState?: (v: string) => void;
  zip?: string; setZip?: (v: string) => void;
  bankName?: string; setBankName?: (v: string) => void;
  routing?: string; setRouting?: (v: string) => void;
  account?: string; setAccount?: (v: string) => void;
  toggles?: Record<string, boolean>; onToggle?: (key: string) => void;
  goalValue?: number; setGoalValue?: (v: number) => void;
  preferNotToMonetize?: boolean; setPreferNotToMonetize?: (v: boolean) => void;
}) {
  const progressWidth = (step / totalSteps) * 390;

  const personalInfoStep = (
    <PersonalInfoStep
      firstName={firstName} setFirstName={setFirstName ?? (() => {})}
      lastName={lastName} setLastName={setLastName ?? (() => {})}
      email={email} setEmail={setEmail ?? (() => {})}
      dob={dob} setDob={setDob ?? (() => {})}
      ssn={ssn} setSsn={setSsn ?? (() => {})}
      phone={phone} setPhone={setPhone ?? (() => {})}
    />
  );

  const stepContent: Record<number, React.ReactNode> = {
    1: personalInfoStep,
    2: <HomeAddressStep
         addr1={addr1} setAddr1={setAddr1 ?? (() => {})}
         addr2={addr2} setAddr2={setAddr2 ?? (() => {})}
         city={city} setCity={setCity ?? (() => {})}
         addrState={addrState} setAddrState={setAddrState ?? (() => {})}
         zip={zip} setZip={setZip ?? (() => {})}
       />,
    3: <PayoutMethodStep
         firstName={firstName} lastName={lastName}
         bankName={bankName} setBankName={setBankName ?? (() => {})}
         routing={routing} setRouting={setRouting ?? (() => {})}
         account={account} setAccount={setAccount ?? (() => {})}
       />,
    4: <DataContributionStep
         toggles={toggles}
         onToggle={onToggle ?? (() => {})}
       />,
    5: <GoalStep
         value={goalValue}
         onChangeValue={setGoalValue ?? (() => {})}
         preferNotToMonetize={preferNotToMonetize}
         onChangePreferNotToMonetize={setPreferNotToMonetize ?? (() => {})}
       />,
  };

  return (
    <div className="bg-[#070707] relative size-full overflow-hidden" data-name="Enroll">
      {/* Background glow — top-right for step 5 only.
          Use CornerGlow (self-clipped) instead of a bare filter:blur — Safari
          blanks the whole phone frame when CSS blur sits under the frame's
          clip-path. */}
      {step === 5 && (
        <CornerGlow side="top-right" color="var(--color-glow-blue)" glowOpacity={0.6} />
      )}
      {step !== 4 && step !== 5 && <Group1 />}

      {/* Scrollable content area — starts below nav/progress, sits above home indicator */}
      <div
        style={{
          position: "absolute",
          top: "159px",
          left: "24px",
          right: "24px",
          bottom: "21px",
          overflowY: "auto",
          overflowX: "visible",
        }}
      >
        {stepContent[step] ?? personalInfoStep}
        {/* Continue button — 40px below the step content */}
        <div style={{ marginTop: "40px", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <Frame3
            onContinue={onContinue}
            label={step === 5 ? "Confirm my selection" : "Continue"}
          />
          {step === 3 && (
            <button
              onClick={onContinue}
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "500px",
                background: "transparent",
                border: "1px solid var(--color-text-primary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px", color: "var(--color-text-primary)" }}>
                Skip for now
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Progress track (dim) */}
      <div className="absolute left-0 top-[120px] w-[390px]" style={{ height: "2px" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(227,227,227,0.2)" }} />
      </div>

      {/* Animated blue progress fill */}
      <motion.div
        style={{ position: "absolute", left: 0, top: "119px", height: "2px", background: "#0091FF" }}
        initial={{ width: progressWidth }}
        animate={{ width: progressWidth }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Top header backdrop blur */}
      <div className="absolute backdrop-blur-[20px] bg-[rgba(7,7,7,0.1)] h-[119px] left-0 top-0 w-[390px]" />

      {/* Status bar */}
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-full" data-name="Status Bar - iPhone">
          <Frame />
        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-0 h-[21px] left-0 w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>

      {/* Back button + step indicator */}
      <Frame1 onBack={onBack} step={step} totalSteps={totalSteps} label={stepLabel} />
    </div>
  );
}