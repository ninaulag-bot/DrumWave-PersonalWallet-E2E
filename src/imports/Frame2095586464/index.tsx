import svgPaths from "./svg-vuc4jguzxa";
import imgFrame2095586922 from "./0e32e6bc0a9fd91390d2a794a435b9a529777640.png";

function Background() {
  return (
    <div className="bg-[#232323] content-stretch flex items-center justify-center relative rounded-[200px] shrink-0 size-[28px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.2]">1</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[#f3f3f3] text-[16px]">Log in and go to Account Settings</p>
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
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full">
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#919191] text-[16px] w-full">
        <p className="leading-[1.2]">Go to your Account Settings from the main menu.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[30.09px] top-[176px]">
      <div className="absolute bg-white h-[8.684px] left-[31.82px] top-[176px] w-[156.176px]" />
      <div className="absolute bg-white h-[8.684px] left-[31.82px] top-[209px] w-[156.176px]" />
      <div className="absolute flex h-[34.736px] items-center justify-center left-[30.09px] top-[181.21px] w-[10.412px]">
        <div className="flex-none rotate-90">
          <div className="bg-white h-[10.412px] relative w-[34.736px]" />
        </div>
      </div>
      <div className="absolute flex h-[34.736px] items-center justify-center left-[174px] top-[181.21px] w-[10.412px]">
        <div className="flex-none rotate-90">
          <div className="bg-white h-[10.412px] relative w-[34.736px]" />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[322px] overflow-clip relative rounded-[10.41px] shrink-0 w-[310px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10.41px]">
        <img alt="" className="absolute h-[228.78%] left-[-2.37%] max-w-none top-[0.31%] w-[298.5%]" src={imgFrame2095586922} />
      </div>
      <Group />
      <div className="absolute h-[335.036px] left-[-10.42px] top-[-3.91px] w-[330.841px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" height="335.036" preserveAspectRatio="none" viewBox="0 0 330.841 335.036" width="330.841">
          <path d={svgPaths.p1ead8a00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col gap-[20px] items-center p-[16px] relative rounded-[8px] size-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}