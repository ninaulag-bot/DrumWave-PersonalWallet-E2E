import svgPaths from "./svg-lsyxlsw5qz";
import imgFrame2095586925 from "./374bc925487a8fe01616e62f808c3c84df1ffd32.png";

function Background() {
  return (
    <div className="bg-[#232323] content-stretch flex items-center justify-center relative rounded-[200px] shrink-0 size-[28px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.2]">3</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[#f3f3f3] text-[16px]">Choose your data and submit</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
      <Background />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame2 />
      <div className="flex items-center justify-center relative shrink-0 size-[24px]">
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="content-stretch flex items-center relative" data-name="Master Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / chevron_right">
              <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
                  <path d={svgPaths.p33166380} fill="var(--fill-0, #E3E3E3)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[631px] relative rounded-[8px] shrink-0 w-[310px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[121.27%] left-0 max-w-none top-0 w-[125.51%]" src={imgFrame2095586925} />
      </div>
      <div className="absolute h-[631px] left-0 top-0 w-[310px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" height="631" preserveAspectRatio="none" viewBox="0 0 310 631" width="310">
          <path d={svgPaths.p81d2000} fill="var(--fill-0, black)" fillOpacity="0.4" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col gap-[19px] items-center p-[16px] relative rounded-[8px] size-full">
      <Frame1 />
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#919191] text-[16px] w-[min-content]">
        <p className="leading-[1.2]">Pick your vehicle from the dropdown and select the dates you want and click submit.</p>
      </div>
      <Frame4 />
    </div>
  );
}