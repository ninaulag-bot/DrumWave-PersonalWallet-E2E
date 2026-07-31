import svgPaths from "./svg-nt678newvn";

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#090908] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">View my data certificates</p>
      </div>
    </div>
  );
}

function ButtonState() {
  return (
    <div className="backdrop-blur-[2px] bg-white content-stretch flex flex-[1_0_0] h-[48px] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
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

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / upload">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
              <path d={svgPaths.p6e1140} fill="var(--fill-0, #E3E3E3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Upload more files</p>
      </div>
    </div>
  );
}

function ButtonState1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[48px] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
      <div className="flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <Content1 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[0.911px] border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-[342px]" data-name="Button">
      <ButtonState1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <Button />
      <Button1 />
    </div>
  );
}