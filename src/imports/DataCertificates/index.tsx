import svgPaths from "./svg-ghpyp3s6qg";
import DataCertificateCards from "../Frame2095589426/index";
import { ScreenWithNavBar } from "../../app/components/ScreenWithNavBar";
import GenotypeArrayCard from "../SmallCards/index";
import AncestryCompositionCard from "../SmallCards-1/index";

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.02] relative shrink-0 text-[32px] text-white tracking-[-0.96px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        My data certificates
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[86px] items-start left-[24px] top-[83px] w-[342px]">
      <Frame6 />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#999] text-[0px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[1.5] text-[16px]">Every purchase generates data. Every certificate proves you own it.</span>
        <span className="leading-[1.5] text-[14px]">{` `}</span>
        <span className="leading-[1.5] text-[#0091ff] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Learn more
        </span>
      </p>
    </div>
  );
}

function DiscoverTune() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="discover_tune">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="discover_tune">
          <mask height="24" id="mask0_247_20154" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_247_20154)">
            <path d={svgPaths.p193e6180} fill="var(--fill-0, #E3E3E3)" id="discover_tune_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[100px] shrink-0 size-[20px]">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5]">1</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16.169px] whitespace-nowrap">Filters</p>
      <Frame10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#111] content-stretch flex gap-[12px] h-[44px] items-center justify-center px-[16px] py-[14px] relative rounded-[8px] shrink-0">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <DiscoverTune />
      <Frame9 />
    </div>
  );
}

function IconLeftPlaceholder() {
  return (
    <div className="content-stretch flex h-[44px] items-center relative shrink-0" data-name="icon left + placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">All plans</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / arrow_drop_down">
          <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 10 5" width="10">
              <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #E3E3E3)" id="Vector" />
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
            <Content1 />
          </div>
        </div>
      </div>
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
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[188px]" data-name="container">
      <Content />
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[9px] items-center left-[calc(50%-1.5px)] top-[208px] w-[339px]">
      <Frame2 />
      <Container />
    </div>
  );
}

function Frame3() {
  return <div className="h-[21px] mr-[-3.5px] opacity-40 relative shrink-0 w-[110px]" />;
}

function ArrowUpwardAlt24Dp1F1F1FFill0Wght300Grad0Opsz() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[24px]" data-name="arrow_upward_alt_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
            <g id="arrow_upward_alt_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
              <path d={svgPaths.p1e4da280} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ArrowUpwardAlt24Dp1F1F1FFill0Wght300Grad0Opsz />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Newest to oldest
      </p>
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] top-[276px] w-[342px]">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] mr-[-3.5px] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Showing 3/123
      </p>
      <Frame3 />
      <Frame12 />
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="icon">
          <path d={svgPaths.p8f10400} fill="var(--fill-0, #888888)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Toll() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="toll">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
        <g id="toll">
          <path d={svgPaths.p10de2100} fill="var(--fill-0, #888888)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
        <g id="icon">
          <path d={svgPaths.p2b00db00} fill="var(--fill-0, #888888)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[31px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 31 31" width="31">
        <g clipPath="url(#clip0_230_6654)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p20baf080} id="Vector_2" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p1f27d380} id="Vector_3" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d="M15.5 9.6875V25.1875" id="Vector_4" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p1371e700} id="Vector_5" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
          <path d={svgPaths.p3f1f8a00} id="Vector_6" stroke="var(--stroke-0, #888888)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9375" />
        </g>
        <defs>
          <clipPath id="clip0_230_6654">
            <rect fill="white" height="31" width="31" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] top-[-1px] w-[389px]">
      <div className="content-stretch flex flex-col gap-[3px] h-[56px] items-center justify-end overflow-clip pt-[3px] px-[4px] relative shrink-0 w-[70px]" data-name="Main nav icons">
        <Icon />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#888] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Home
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[3px] h-[56px] items-center justify-end pt-[12px] px-[16px] relative rounded-[100px] shrink-0 w-[70px]" data-name="Main nav icons">
        <Toll />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#888] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          My data
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[3px] h-[56px] items-center justify-end pt-[12px] px-[16px] relative rounded-[100px] shrink-0 w-[70px]" data-name="Main nav icons">
        <Icon1 />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#888] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Savings plan
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[3px] h-[56px] items-center justify-end pt-[12px] px-[16px] relative rounded-[100px] shrink-0 w-[70px]" data-name="Main nav icons">
        <Frame1 />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#888] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Offers
        </p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#070707] border-[#2e2e2e] border-solid border-t bottom-[-2px] h-[72px] left-[calc(50%+0.5px)] overflow-clip w-[389px]" data-name="-">
      <div className="absolute left-[106px] size-[86px] top-[-45px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_247_10838)" id="Ellipse 22068" opacity="0">
            <circle cx="43" cy="43" fill="var(--fill-0, #3D04D0)" r="43" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_247_10838" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_247_10838" stdDeviation="25" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[136px] size-[86px] top-[-46px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g filter="url(#filter0_f_226_1296)" id="Ellipse 22067" opacity="0">
            <circle cx="43" cy="43" fill="var(--fill-0, #3D04D0)" r="43" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="-inf" id="filter0_f_226_1296" width="-inf" x="inf" y="inf">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_226_1296" stdDeviation="25" />
            </filter>
          </defs>
        </svg>
      </div>
      <Frame8 />
    </div>
  );
}

interface DataCertificatesProps {
  onCustomerProfile?: () => void;
}

export default function DataCertificates({ onCustomerProfile }: DataCertificatesProps = {}) {
  return (
    <div className="bg-[#070707] relative size-full" data-name="Data certificates">
      <ScreenWithNavBar navBar={<Component />} navBarHeight={72}>
        <div style={{ position: "relative", width: "100%", height: 1164 }}>
          <Frame7 />
          <Frame11 />
          <Frame4 />
          <div style={{ position: "absolute", top: 316, left: 24, width: 342 }}>
            <DataCertificateCards />
          </div>
          <button
            onClick={onCustomerProfile}
            style={{ position: "absolute", top: 316, left: 24, width: 342, height: 200, background: "transparent", border: "none", cursor: "pointer", padding: 0, zIndex: 5 }}
            aria-label="Customer Profile"
          />
          <div style={{ position: "absolute", top: 732, left: 24, width: 342, height: 200 }}>
            <GenotypeArrayCard />
          </div>
          <div style={{ position: "absolute", top: 940, left: 24, width: 342, height: 200 }}>
            <AncestryCompositionCard />
          </div>
        </div>
      </ScreenWithNavBar>
      <div className="absolute bottom-[2px] h-[21px] right-px w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
          <Frame />
        </div>
      </div>
    </div>
  );
}