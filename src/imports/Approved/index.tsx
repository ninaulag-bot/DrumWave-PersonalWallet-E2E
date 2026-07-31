import svgPaths from "./svg-gcreqg6beh";
import imgPexelsFiraazhisyari335167621 from "./d022ee07a506d14dd6a1cc303ccd590034866a46.png";

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="DrumWave / checkbox_round_checked">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g id="Vector">
              <path d={svgPaths.p3aa02200} fill="#E3E3E3" />
              <path clipRule="evenodd" d={svgPaths.p30772c80} fill="#999999" fillRule="evenodd" />
              <path d={svgPaths.p42dab00} fill="var(--fill-0, #070707)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        You’re approved
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[20px] w-[236px]">Start earning with your Data Savings Plan</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex h-[40px] items-center justify-center px-[19px] py-[6px] relative rounded-[60px] shrink-0 w-[151px]">
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#070707] text-[16px] text-center whitespace-nowrap">Go to my plan</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[24px] w-[263px]">
      <Frame4 />
      <Frame1 />
    </div>
  );
}

export default function Approved() {
  return (
    <div className="overflow-clip relative rounded-[16px] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(18, 53, 193, 0.4) 0%, rgba(43, 100, 225, 0) 100%), linear-gradient(90deg, rgb(24, 24, 24) 0%, rgb(24, 24, 24) 100%)" }} data-name="approved">
      <div className="-translate-x-1/2 absolute blur-[0px] h-[226px] left-[calc(50%+115px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-12px] w-[191px]" data-name="pexels-firaazhisyari-3351676 2 1">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[121.66%] left-[-2.55%] max-w-none top-[-15.02%] w-[102.55%]" src={imgPexelsFiraazhisyari335167621} />
          </div>
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(180deg, rgba(22, 36, 89, 0) 68.326%, rgb(22, 36, 89) 97.647%), linear-gradient(270deg, rgba(22, 36, 89, 0) 52.562%, rgb(22, 36, 89) 89.825%)" }} />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}