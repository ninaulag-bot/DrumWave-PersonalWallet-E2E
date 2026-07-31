import { createContext, useContext } from "react";
import svgPaths from "./svg-6x7n6outhv";

const CloseContext = createContext<(() => void) | undefined>(undefined);

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[#e3e3e3] text-[18px]">Pending deposits</p>
    </div>
  );
}

function Frame2() {
  const onClose = useContext(CloseContext);
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame />
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="Material / close"
        onClick={onClose}
        style={{ cursor: "pointer" }}
      >
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <path d={svgPaths.p2aa77200} fill="var(--fill-0, #E3E3E3)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[#999] text-[16px]">Deposits may take up to 2 business days to appear in your available balance.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Got it</p>
      </div>
    </div>
  );
}

function Frame4() {
  const onClose = useContext(CloseContext);
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame1 />
      <div
        className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-full"
        data-name="Button"
        onClick={onClose}
        style={{ cursor: "pointer" }}
      >
        <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
          <div className="flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative size-full">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[290px]">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Modal() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Modal">
      <Frame3 />
    </div>
  );
}

export default function PendingDepositModal({ onClose }: { onClose?: () => void }) {
  return (
    <CloseContext.Provider value={onClose}>
      <div className="bg-[#111] content-stretch flex flex-col items-center justify-center p-[24px] relative rounded-[16px]" data-name="Pending deposit modal">
        <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Modal />
      </div>
    </CloseContext.Provider>
  );
}
