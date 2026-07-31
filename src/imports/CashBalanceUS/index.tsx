import { useState, createContext, useContext } from "react";
import svgPaths from "./svg-mfwup5gqhy";
import imgScreenshot20251203At1413331 from "./59ab77234037ae389172bf960eb91fac1815fa66.png";
import PendingDepositModal from "../PendingDepositModal/index";

const InfoClickContext = createContext<(() => void) | undefined>(undefined);
const PayoutMethodContext = createContext<(() => void) | undefined>(undefined);

function Frame15() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(50%+25.16px)] size-[1.73px] top-[294.11px]">
      <div className="flex-none rotate-[34.17deg]">
        <div className="bg-[rgba(7,7,7,0.01)] opacity-20 relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(0,85,255,0.2)] size-[1.246px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute flex items-center justify-center left-[-64.21px] size-[1.568px] top-[336.28px]">
      <div className="flex-none rotate-[-10.69deg]">
        <div className="bg-[rgba(7,7,7,0.01)] relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(0,85,255,0.2)] size-[1.343px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(100%+61.88px)] size-[1.568px] top-[37px]">
      <div className="flex-none rotate-[-10.69deg]">
        <div className="bg-[rgba(7,7,7,0.01)] relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(0,85,255,0.3)] size-[1.343px]" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents h-[300.845px] left-[-101px] top-[37px] w-[591.237px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[-101px] top-[37px]">
      <Group />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(50%+25.16px)] size-[1.73px] top-[294.11px]">
      <div className="flex-none rotate-[34.17deg]">
        <div className="bg-[rgba(7,7,7,0.01)] opacity-20 relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(0,85,255,0.2)] size-[1.246px]" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute flex items-center justify-center left-[-64.21px] size-[1.568px] top-[306.28px]">
      <div className="flex-none rotate-[-10.69deg]">
        <div className="bg-[rgba(7,7,7,0.01)] opacity-20 relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(0,85,255,0.2)] size-[1.343px]" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(100%+61.88px)] size-[1.568px] top-[7px]">
      <div className="flex-none rotate-[-10.69deg]">
        <div className="bg-[rgba(7,7,7,0.01)] opacity-10 relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(0,85,255,0.3)] size-[1.343px]" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents h-[300.845px] left-[-101px] top-[7px] w-[591.237px]">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-101px] top-[7px]">
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-101px] top-[7px]">
      <Frame15 />
      <Group3 />
      <Frame14 />
      <Group2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[33px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / arrow_back_ios">
        <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.775 20">
            <path d={svgPaths.p30d4a680} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-[342px]">
      <Frame13 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[18px] text-center text-white">Cash balance</p>
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Skip</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.02] not-italic relative shrink-0 text-[#e3e3e3] text-[64px] text-right tracking-[-1.92px] whitespace-nowrap">$0</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Available balance
      </p>
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[341px]">
      <Frame20 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[207.776px]">
      <Frame19 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999] text-[14px] tracking-[-0.1504px] w-[342px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        On the 1st of each month, balances of $25 or more are automatically transferred to your linked bank account.
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Add payout method</p>
      </div>
    </div>
  );
}

function Frame17() {
  const onAddPayoutMethod = useContext(PayoutMethodContext);
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[342px]">
      <Frame12 />
      <Frame16 />
      <div className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-full" data-name="Button" onClick={onAddPayoutMethod} style={{ cursor: onAddPayoutMethod ? "pointer" : undefined }}>
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

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[24px] whitespace-nowrap">Recent activity</p>
      <div className="h-[21px] opacity-0 relative shrink-0 w-[89px]" data-name="Screenshot 2025-12-03 at 14.13.33 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[261.9%] left-0 max-w-none top-[-76.19%] w-[113.48%]" src={imgScreenshot20251203At1413331} />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative size-full">
        <Frame5 />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Pending (1)
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#999] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Pending
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[305px]">
      <Frame10 />
    </div>
  );
}

function Frame24() {
  const onInfoClick = useContext(InfoClickContext);
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#00ff91] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        +$20
      </p>
      <div
        className="overflow-clip relative shrink-0 size-[20px]"
        data-name="Material / info"
        onClick={onInfoClick}
        style={{ cursor: "pointer" }}
      >
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
            <path d={svgPaths.peb96800} fill="var(--fill-0, #999999)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between py-[2px] relative shrink-0 w-[342px]">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#d0d0d0] text-[16px] w-[223px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cash deposited
      </p>
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame9 />
      <Frame22 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[342px]">
      <Frame23 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-start justify-center left-[24px] pb-[16px] top-0 w-[342px]">
      <div aria-hidden className="absolute border-[#222] border-b border-solid inset-0 pointer-events-none" />
      <Frame8 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="h-[68px] relative shrink-0 w-[390px]" data-name="Activity cards">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col h-[68px] items-start relative shrink-0">
      <Frame26 />
    </div>
  );
}

function Historico() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[270px] items-start relative shrink-0 w-[390px]" data-name="Histórico">
      <Frame7 />
      <Frame27 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col h-[179px] items-start relative shrink-0 w-full">
      <Historico />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-center left-0 top-[151px] w-[390px]">
      <Frame17 />
      <Frame18 />
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[402px]" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

export default function CashBalanceUS({ onAddPayoutMethod }: { onAddPayoutMethod?: () => void } = {}) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <PayoutMethodContext.Provider value={onAddPayoutMethod}>
    <InfoClickContext.Provider value={() => setShowModal(v => !v)}>
      <div className="bg-[#070707] relative size-full" data-name="Cash balance (U.S.)">
        <Group4 />
        <div className="absolute bottom-[-1248px] h-[21px] left-0 w-[390px]" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-px items-center left-1/2 top-[70px] w-[390px]" data-name="Profile header">
          <Frame11 />
          <div className="h-0 relative shrink-0 w-[390px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d="M0 0H390" id="Vector 879" opacity="0" stroke="var(--stroke-0, #3D3D3D)" />
            </svg>
          </div>
        </div>
        <Frame25 />
        <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
          <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-full" data-name="Status Bar - iPhone">
            <Frame />
          </div>
        </div>
        <div className="absolute bottom-[-367px] h-[21px] left-0 w-[390px]" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 h-[21px] left-1/2 w-[390px]" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
            </div>
          </div>
        </div>

        {showModal && (
          <>
            <div
              style={{ position: "absolute", inset: 0, zIndex: 40 }}
              onClick={closeModal}
            />
            <div style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 590,
              width: 338,
              zIndex: 50,
            }}>
              <PendingDepositModal onClose={closeModal} />
            </div>
          </>
        )}
      </div>
    </InfoClickContext.Provider>
    </PayoutMethodContext.Provider>
  );
}