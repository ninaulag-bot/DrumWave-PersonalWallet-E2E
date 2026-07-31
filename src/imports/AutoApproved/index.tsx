import svgPaths from "./svg-nl7h0h1tqc";

function Frame5() {
  return <div className="h-[24px] relative shrink-0 w-[33px]" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[24px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / close">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <path d={svgPaths.p2aa77200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-[342px]">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center left-0 top-[71px] w-[390px]" data-name="Profile header">
      <Frame1 />
      <div className="h-0 relative shrink-0 w-[390px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <path d="M0 0H390" id="Vector 879" opacity="0" stroke="var(--stroke-0, #3D3D3D)" />
        </svg>
      </div>
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

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d2023] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">View available plans</p>
      </div>
    </div>
  );
}

function ButtonState() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex flex-[1_0_0] h-[48px] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
      <div className="flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <Content />
          </div>
        </div>
        <div aria-hidden className="absolute border-[0.911px] border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-full" data-name="Button">
      <ButtonState />
    </div>
  );
}

function Frame2({ onViewPlans }: { onViewPlans?: () => void }) {
  return (
    <button
      type="button"
      onClick={onViewPlans}
      className="-translate-x-1/2 absolute bottom-[45px] content-stretch flex flex-col h-[48px] items-start left-1/2 w-[342px] cursor-pointer"
    >
      <Button />
    </button>
  );
}

function Group() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[108px]">
      <div className="absolute inset-[-70.79%_-50.83%_-56.62%_-80.25%]">
        <svg className="block size-full" fill="none" height="245.597" preserveAspectRatio="none" viewBox="0 0 249.563 245.597" width="249.563">
          <g id="Group 1000005363">
            <g filter="url(#filter0_d_170_2911)" id="Ellipse 14752">
              <circle cx="140.648" cy="130.431" fill="var(--fill-0, #070707)" r="49.4755" transform="rotate(5.48655 140.648 130.431)" />
            </g>
            <g filter="url(#filter1_d_170_2911)" id="Ellipse 14756" opacity="0.3">
              <circle cx="140.689" cy="130.473" fill="url(#paint0_radial_170_2911)" r="49.4755" shapeRendering="crispEdges" transform="rotate(-174.513 140.689 130.473)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="230.332" id="filter0_d_170_2911" width="230.332" x="1.43051e-06" y="15.2653">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="10.9479" result="effect1_dropShadow_170_2911" />
              <feOffset dx="-25.4815" />
              <feGaussianBlur stdDeviation="27.3696" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.117252 0 0 0 0 0.300101 0 0 0 0 0.762601 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_170_2911" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_170_2911" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="217.749" id="filter1_d_170_2911" width="217.749" x="31.8146" y="4.76837e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="5.39959" result="effect1_dropShadow_170_2911" />
              <feOffset dy="-21.5984" />
              <feGaussianBlur stdDeviation="26.998" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.568627 0 0 0 0 1 0 0 0 0.44 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_170_2911" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_170_2911" mode="normal" result="shape" />
            </filter>
            <radialGradient cx="0" cy="0" gradientTransform="translate(154.739 112.237) rotate(109.965) scale(40.7118 64.9883)" gradientUnits="userSpaceOnUse" id="paint0_radial_170_2911" r="1">
              <stop stopColor="#3F76DC" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <div className="col-1 ml-[34.64px] mt-[34.62px] overflow-clip relative row-1 size-[38.756px]" data-name="Material / check">
        <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.4183" preserveAspectRatio="none" viewBox="0 0 26.3216 19.4183" width="26.3216">
            <path d={svgPaths.p1468c700} fill="var(--fill-0, #E3E3E3)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#e3e3e3] text-[32px] text-center tracking-[-0.96px] w-[221px]">{`Congrats! You’ve been approved `}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[215px]">
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Based on your application, you qualify for [x] Data Savings Plan(s).
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[272px]">
      <Frame3 />
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Group1 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[24px] top-1/2 w-[342px]">
      <Frame10 />
    </div>
  );
}

export default function AutoApproved({ onViewPlans }: { onViewPlans?: () => void }) {
  return (
    <div className="bg-[#070707] relative size-full" data-name="Auto-approved">
      <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[148px] left-[calc(50%-0.5px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] to-[39.904%] to-black w-[391px]" />
      <ProfileHeader />
      <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[148px] left-[calc(50%-0.5px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] to-[39.904%] to-black w-[391px]" />
      <div className="absolute bottom-0 h-[21px] left-0 w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[-0.31px] top-0 w-[390px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-full" data-name="Status Bar - iPhone">
          <Frame />
        </div>
      </div>
      <div className="absolute h-0 left-[-0.31px] top-[120px] w-[390px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <path d="M0 0H390" id="Vector 879" opacity="0" stroke="var(--stroke-0, #3D3D3D)" />
        </svg>
      </div>
      <div className="absolute h-0 left-0 top-[120px] w-[371px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <path d="M0 0H371" id="Vector 880" opacity="0" stroke="var(--stroke-0, #0091FF)" />
        </svg>
      </div>
      <Frame2 onViewPlans={onViewPlans} />
      <Frame9 />
    </div>
  );
}