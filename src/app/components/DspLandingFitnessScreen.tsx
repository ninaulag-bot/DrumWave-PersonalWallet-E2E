import { ScreenWithNavBar } from "@/app/components/ScreenWithNavBar";
import { MainBottomNav } from "@/app/components/MainBottomNav";
import { StatusBar } from "@/app/components/ui/StatusBar";
import { Group10, Group12, Frame70, Frame83 } from "@/imports/DspLanding-1/index";
import svgPaths from "@/imports/DspLanding-1/svg-m5uou8o78c";
import { LearnMoreContext } from "@/imports/DspLanding-1/learn-more-context";
import { GoToHomeContext } from "@/imports/DspLanding-1/go-to-home-context";
import { ManageMyPlanContext } from "@/imports/DspLanding-1/manage-my-plan-context";
import { CashBalanceContext } from "@/imports/DspLanding-1/cash-balance-context";
import { DataBalanceContext } from "@/imports/DspLanding-1/data-balance-context";
import { ViewAllPlansContext } from "@/imports/DspLanding-1/view-all-plans-context";
import { OfferVariantContext } from "@/imports/DspLanding-1/offer-variant-context";
import imgFitnessCard from "@/imports/dsavings-fitness-card.png";
import imgKaiserLogo from "@/imports/DspLanding-1/kaiser-logo.png";
import { DrumWaveLogo } from "./DrumWaveLogo";

/* DrumWave + divider + Kaiser row. The artwork bakes in the title and gradient
   but not the partner marks, so they're drawn over it. Position keeps the
   reference row's 25.57px right / 27.03px bottom inset from the card edge. */
function PartnerMarks() {
  return (
    <div style={{ position: "absolute", left: 240.4, top: 160.9, width: 76.03, display: "flex", alignItems: "center", gap: 11.98 }}>
      <DrumWaveLogo size={26} />
      {/* Zero-width in layout so the row measures 76.03px; the rule bleeds ±0.5px. */}
      <div style={{ position: "relative", width: 0, height: 20.43, flexShrink: 0 }}>
        <div style={{ position: "absolute", left: -0.5, right: -0.5, top: 0, bottom: 0, background: "#fff" }} />
      </div>
      <div style={{ width: 26.07, height: 26.07, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img alt="" src={imgKaiserLogo} style={{ width: 25.96, height: 25.96, borderRadius: 100, objectFit: "cover", display: "block" }} />
      </div>
    </div>
  );
}

/* Figma 15:35144 "DSP LANDING". Rows below the plan carousel (Data contribution,
   Offers, Request more data) are the same frames the step-56 screen renders, so
   they're reused from the DspLanding-1 export rather than re-derived. */

function BackArrowIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Material / arrow_back_ios">
      <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.775 20">
          <path d={svgPaths.p30d4a680} fill="var(--fill-0, #E3E3E3)" />
        </svg>
      </div>
    </div>
  );
}

/* Title + subtitle — Figma 15:35161 (342×82 at x=24,y=94). */
function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-[342px]">
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.02] relative shrink-0 text-[31.788px] text-white tracking-[-0.9536px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        My Data Savings
      </p>
      <p
        className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] w-[293px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >{`Own, save, and benefit from the value of your data. `}</p>
    </div>
  );
}

/* "Back to all plans" — Figma 15:35167. */
function BackToAllPlansRow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="content-stretch flex gap-[8px] h-[24px] items-center relative cursor-pointer bg-transparent border-0 p-0 text-left"
      onClick={onClick}
    >
      <BackArrowIcon />
      <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[20px] whitespace-nowrap">
        Back to all plans
      </p>
    </button>
  );
}

/* Plan carousel — Figma 15:35171 (342×214 cards, 8px apart, at x=22,y=248).
   Card 1 artwork carries its own "dSavings / Fitness" lockup, so nothing is
   drawn over it. Card 2 is only ~18px on-screen. */
function PlanCarousel() {
  return (
    <div
      className="[&::-webkit-scrollbar]:hidden"
      style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none", width: 368, paddingBottom: 4 }}
    >
      <div
        style={{
          width: 342,
          height: 214,
          flexShrink: 0,
          position: "relative",
          borderRadius: 16.241,
          overflow: "hidden",
          border: "0.911px solid rgba(255,255,255,0.4)",
          boxShadow: "10.021px 0px 20.043px 0px rgba(0,0,0,0.4)",
        }}
        data-name="dSavings Fitness card"
      >
        <img alt="" src={imgFitnessCard} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <PartnerMarks />
      </div>

      <div
        style={{
          width: 342,
          height: 214,
          flexShrink: 0,
          position: "relative",
          borderRadius: 16.197,
          overflow: "hidden",
          background: "#0000ff",
        }}
        data-name="Next plan card"
      >
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 349.25 219.67' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-0.51916 15.757 -25.052 -0.79588 174.63 109.84)'><stop stop-color='rgba(217,217,217,0)' offset='0'/><stop stop-color='rgba(109,109,236,0.5)' offset='0.5'/><stop stop-color='rgba(81,81,241,0.625)' offset='0.625'/><stop stop-color='rgba(54,54,246,0.75)' offset='0.75'/><stop stop-color='rgba(27,27,250,0.875)' offset='0.875'/><stop stop-color='rgba(14,14,253,0.9375)' offset='0.9375'/><stop stop-color='rgba(0,0,255,1)' offset='1'/></radialGradient></defs></svg>\")",
          }}
        />
        <div className="absolute flex h-[192.298px] items-center justify-center left-[-78.96px] top-[-86.05px] w-[216.427px]">
          <div className="flex-none rotate-[-30.1deg]">
            <div className="bg-[#0037ff] blur-[42.145px] h-[116.371px] opacity-70 relative w-[182.703px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Cash + data balance cards and "Manage my plan" — Figma 15:35280 (342×265 at
   x=24,y=478). Markup mirrors the step-56 screen's equivalent rows; the amounts
   are this frame's own ($130 / 2.75). */
function BalancesAndManage({
  onCashBalance,
  onDataBalance,
  onManageMyPlan,
}: {
  onCashBalance?: () => void;
  onDataBalance?: () => void;
  onManageMyPlan?: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-[342px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {/* Cash balance */}
        <div
          className="relative rounded-[16px] shrink-0 w-full"
          onClick={onCashBalance}
          style={{ cursor: onCashBalance ? "pointer" : undefined }}
        >
          <div aria-hidden className="absolute border border-[#272727] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="content-stretch flex flex-col gap-[7px] items-end p-[16px] relative rounded-[16px] size-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">
                $130
              </p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-180">
                  <div className="overflow-clip relative size-[24px]" data-name="Material / arrow_back_ios">
                    <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.775 20">
                        <path d={svgPaths.p30d4a680} fill="var(--fill-0, #E3E3E3)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0 w-[87px]">
                <p
                  className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] opacity-60 relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Cash balance
                </p>
              </div>
              <div className="content-stretch flex items-center opacity-0 relative shrink-0">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p226e2600} fill="var(--fill-0, #00FF91)" />
                  </svg>
                </div>
                <p
                  className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#00ff91] text-[14px] tracking-[-0.28px] whitespace-nowrap"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  $50 this week
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data balance */}
        <div
          className="relative rounded-[16px] shrink-0 w-full"
          onClick={onDataBalance}
          style={{ cursor: onDataBalance ? "pointer" : undefined }}
        >
          <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="content-stretch flex flex-col gap-[7px] items-end p-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="h-[24px] relative shrink-0 w-[18.736px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.736 23.9999">
                    <path d={svgPaths.p2c83c300} fill="var(--fill-0, white)" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">
                  2.75
                </p>
              </div>
              <div className="opacity-0 overflow-clip relative size-[24px]" />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0 w-[87px]">
                <p
                  className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Data balance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-[343px] cursor-pointer bg-transparent border-0 p-0 text-left"
        data-name="Button"
        onClick={onManageMyPlan}
      >
        <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[500px]" />
          <div className="flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
            <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
                <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
                  <p className="leading-none">Manage my plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

interface DspLandingFitnessScreenProps {
  onBackToAllPlans?: () => void;
  onManageMyPlan?: () => void;
  onCashBalance?: () => void;
  onDataBalance?: () => void;
  onLearnMore?: () => void;
  onGoHome?: () => void;
  onMyData?: () => void;
  onOffers?: () => void;
  onViewAllPlans?: () => void;
}

/** "My Data Savings" plan dashboard shown right after the dSavings Fitness
 *  welcome animation — Figma 15:35144. Carries a plan carousel and a
 *  "Back to all plans" link that the step-56 dashboard doesn't have. */
export function DspLandingFitnessScreen({
  onBackToAllPlans,
  onManageMyPlan,
  onCashBalance,
  onDataBalance,
  onLearnMore,
  onGoHome,
  onMyData,
  onOffers,
  onViewAllPlans,
}: DspLandingFitnessScreenProps) {
  return (
    <div className="bg-[#070707] relative size-full overflow-hidden" data-name="DSP LANDING">
      <Group10 />
      <Group12 />

      <OfferVariantContext.Provider value="enrolled">
        <LearnMoreContext.Provider value={onLearnMore}>
          <GoToHomeContext.Provider value={onGoHome}>
            <ManageMyPlanContext.Provider value={onManageMyPlan}>
              <CashBalanceContext.Provider value={onCashBalance}>
                <DataBalanceContext.Provider value={onDataBalance}>
                  <ViewAllPlansContext.Provider value={onViewAllPlans}>
                    <ScreenWithNavBar
                      navBar={
                        <MainBottomNav
                          activeTab="savingsPlan"
                          onHome={onGoHome}
                          onMyData={onMyData}
                          onOffers={onOffers}
                        />
                      }
                    >
                      {/* 54px status bar + 40px to the title, per the frame */}
                      <div style={{ height: "94px" }} />

                      <div style={{ marginLeft: "24px" }}>
                        <Header />
                      </div>

                      <div style={{ marginTop: "24px", marginLeft: "24px" }}>
                        <BackToAllPlansRow onClick={onBackToAllPlans} />
                      </div>

                      <div style={{ marginTop: "24px", marginLeft: "22px" }}>
                        <PlanCarousel />
                      </div>

                      <div
                        className="content-stretch flex flex-col gap-[64px] items-start"
                        style={{ marginTop: "16px", marginLeft: "24px" }}
                      >
                        <BalancesAndManage
                          onCashBalance={onCashBalance}
                          onDataBalance={onDataBalance}
                          onManageMyPlan={onManageMyPlan}
                        />
                        <Frame70 />
                        <Frame83 />
                      </div>
                    </ScreenWithNavBar>
                  </ViewAllPlansContext.Provider>
                </DataBalanceContext.Provider>
              </CashBalanceContext.Provider>
            </ManageMyPlanContext.Provider>
          </GoToHomeContext.Provider>
        </LearnMoreContext.Provider>
      </OfferVariantContext.Provider>

      {/* Home Indicator — pinned at frame bottom */}
      <div className="absolute bottom-[0] h-[21px] left-0 w-[390px]" style={{ zIndex: 20 }} data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>

      {/* Status bar — Figma 15:35444, pinned at frame top */}
      <div className="absolute left-0 top-0 w-[390px]" style={{ zIndex: 10 }}>
        <StatusBar />
      </div>
    </div>
  );
}
