import svgPaths from "./svg-mm090tiqs1";

function Frame() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Titillium_Web:Regular',sans-serif] gap-[50px] items-start left-[24px] not-italic text-[#d7d7d7] text-[33px] top-[530px] w-[294px]">
      <p className="leading-[1.2] opacity-10 relative shrink-0 w-full">Reviewing your application</p>
      <div className="flex flex-col justify-end leading-[0] relative shrink-0 w-full">
        <p className="leading-[1.2]">Almost there</p>
      </div>
      <div className="flex flex-col justify-end leading-[0] opacity-0 relative shrink-0 w-full">
        <p className="leading-[1.2]">Ready</p>
      </div>
    </div>
  );
}

function StatusBarPro() {
  return (
    <div className="absolute bg-[#070707] h-[59px] left-0 top-0 w-[390px]" data-name="Status Bar/Pro">
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[7.33px] items-center right-[32.67px] top-[calc(50%+0.33px)]" data-name="Status/Pro">
        <div className="h-[12.333px] relative shrink-0 w-[19.333px]" data-name="Cellular">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 19.3333 12.3333" width="19.3333">
            <g id="Cellular">
              <path d={svgPaths.p8bdef00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p12dc6500} fill="var(--fill-0, white)" />
              <path d={svgPaths.p5f0ea00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p189c4440} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
        <div className="h-[12.333px] relative shrink-0 w-[17px]" data-name="Wifi">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 17 12.3333" width="17">
            <path clipRule="evenodd" d={svgPaths.p70af300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
          </svg>
        </div>
        <div className="h-[13.667px] relative shrink-0 w-[27.333px]" data-name="Battery/Percentage">
          <div className="-translate-y-1/2 absolute bg-white h-[9px] left-[2px] rounded-[2.667px] top-1/2 w-[10.333px]" data-name="percent" />
          <div className="-translate-y-1/2 absolute h-[13px] left-0 top-1/2 w-[27.333px]" data-name="battery">
            <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 27.3333 13" width="27.3333">
              <g id="battery" opacity="0.4">
                <path clipRule="evenodd" d={svgPaths.p2b410900} fill="var(--fill-0, white)" fillRule="evenodd" />
                <path d={svgPaths.p2c79ba00} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute h-[12.592px] left-[54.87px] top-[calc(50%-0.1px)] w-[33.265px]" data-name="Time">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.5923" preserveAspectRatio="none" viewBox="0 0 33.2648 12.5923" width="33.2648">
          <g id="Time">
            <path d={svgPaths.p10408380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1252ba00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36383fe1} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e7ac780} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#070707] overflow-clip relative rounded-[32px] size-full" data-name="--">
      <Frame />
      <div className="absolute bg-[#1a1a1a] h-[4px] left-[24px] overflow-clip rounded-[4px] top-[728px] w-[342px]" data-name="Loading">
        <div className="absolute bg-[#2067d1] inset-[0_47.71%_0_0]" />
      </div>
      <div className="absolute bg-[#070707] h-[115px] left-0 top-[733px] w-[390px]" />
      <StatusBarPro />
    </div>
  );
}