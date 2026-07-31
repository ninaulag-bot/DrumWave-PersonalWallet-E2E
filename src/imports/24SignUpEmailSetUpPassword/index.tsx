import svgPaths from "./svg-uxrlpspnta";

function Frame1() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(50%+22.89px)] size-[1.73px] top-[865.82px]">
      <div className="flex-none rotate-[34.17deg]">
        <div className="bg-[rgba(7,7,7,0.01)] relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(255,0,217,0.2)] size-[1.246px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute flex items-center justify-center left-[70.12px] size-[1.73px] top-[311.74px]">
      <div className="flex-none rotate-[34.17deg]">
        <div className="bg-[rgba(7,7,7,0.01)] relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(0,145,255,0.2)] size-[1.246px]" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(100%+215.49px)] size-[1.73px] top-[452.68px]">
      <div className="flex-none rotate-[34.17deg]">
        <div className="bg-[rgba(7,7,7,0.01)] relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(0,255,145,0.3)] size-[1.246px]" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents h-[757.909px] left-[-140.75px] top-[159.43px] w-[747.968px]">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[235px]">
      <div className="absolute content-stretch flex items-center left-[calc(25%+77.5px)] top-[235px]" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Material / verified">
          <div className="absolute inset-[6.25%_4.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6667 35">
              <path d={svgPaths.pb19fc80} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.2] left-1/2 not-italic text-[#e3e3e3] text-[24px] text-center top-[291px] w-[312px]">Congrats! You now have a dWallet account.</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[63px] leading-[1.5] left-1/2 text-[#e3e3e3] text-[16px] text-center top-[386px] w-[182px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`You're one step closer to data ownership. `}</p>
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

export default function Component24SignUpEmailSetUpPassword() {
  return (
    <div className="bg-[#070707] relative size-full" data-name="2.4 Sign Up Email [set up password]">
      <Group1 />
      <div className="absolute h-[21px] left-0 top-[823px] w-[390px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <Group />
      <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-[390px]" data-name="Status Bar">
        <Frame />
      </div>
    </div>
  );
}