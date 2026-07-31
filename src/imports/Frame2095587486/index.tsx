function Content() {
  return (
    <div className="content-stretch flex h-[16.25px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Save</p>
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-white flex-[1_0_0] h-[44px] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function ButtonState() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
      <ButtonBase />
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-full" data-name="Primary Button">
      <ButtonState />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Buttons">
      <PrimaryButton />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Cancel</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Buttons />
      <div className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-full" data-name="Button">
        <div className="content-stretch flex flex-[1_0_0] h-[48px] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
          <div className="flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <Content1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}