import { ScreenWithNavBar } from "@/app/components/ScreenWithNavBar";
import { MainBottomNav } from "@/app/components/MainBottomNav";
import { StatusBar } from "@/app/components/ui/StatusBar";
import { Group10, Group12, Frame83, Frame87 } from "@/imports/DspLanding-1/index";
import svgPaths from "@/imports/DspLanding-1/svg-m5uou8o78c";
import dataDollarPaths from "@/imports/Frame2095588102/svg-n24lup08st";
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

/* Figma 15:34974 "DSP LANDING" — the all-plans overview reached from
   "Back to all plans" on the step-83 screen. */

/* DrumWave data-dollar mark. Same glyph the DspLanding-1 export draws at 16px;
   the plan cards use it at 20px. */
function DataDollarMark({ size }: { size: number }) {
  return (
    <div className="overflow-clip relative shrink-0" style={{ width: size, height: size }}>
      <div className="-translate-y-1/2 absolute aspect-[8/9.750870704650879] left-[16.67%] right-[20.83%] top-1/2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12.1886">
          <path d={dataDollarPaths.p38abf380} fill="#FFFFFF" />
          <path d={dataDollarPaths.p324e1220} fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
}

/* Title + subtitle and the two summary balances — Figma 15:34991 (342×187 at
   x=24,y=94). Unlike the step-83 screen these balances are borderless and sit
   side by side, split by a hairline rule. */
function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative w-[342px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[304px]">
        <p
          className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.02] relative shrink-0 text-[31.788px] text-white tracking-[-0.9536px] w-full"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >{`My Data Savings `}</p>
        <p
          className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] w-[293px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Own, save, and benefit from the value of your data
        </p>
      </div>

      <div className="content-stretch flex gap-[8px] h-[81px] items-center relative shrink-0 w-full">
        {/* Total cash balance */}
        <div className="content-stretch flex flex-col gap-[7px] items-start pr-[16px] py-[8px] relative shrink-0 w-[147px]">
          <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">
            $250
          </p>
          <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-[87px]">
              <p
                className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Total cash balance
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

        {/* Figma 15:35010 — a 64px hairline rule; the export gives it as a
            stroke-only vector with no colour, so it takes the sibling border
            token. */}
        <div className="shrink-0" style={{ width: 1, height: 64, background: "#2a2a2a" }} />

        {/* Total data balance */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-w-px px-[16px] py-[8px] relative">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="h-[24px] relative shrink-0 w-[18.736px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.736 23.9999">
                <path d={svgPaths.p2c83c300} fill="var(--fill-0, white)" />
              </svg>
            </div>
            <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">
              4
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-[87px]">
              <p
                className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Total data balance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Per-card cash + data figures — Figma 15:35064 / 15:35124. */
function CardAmounts({ cash, data }: { cash: string; data: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative w-[59px]">
      <p
        className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[20px] text-right text-white tracking-[-0.4px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {cash}
      </p>
      <div className="content-stretch flex items-center opacity-60 relative shrink-0">
        <DataDollarMark size={20} />
        <p
          className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[20px] text-right text-white tracking-[-0.4px] whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {data}
        </p>
      </div>
    </div>
  );
}

/* dSavings Fitness card — Figma 15:35050. The baked artwork already carries the
   photo, gradient, glows and the "dSavings / Fitness" lockup, so only the
   figures, member count and partner marks are drawn over it (same division of
   labour as the step-48 catalog card in ChoosePlans-1). */
function FitnessCard({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="absolute left-0 top-0 overflow-hidden"
      style={{
        width: 342,
        height: 214,
        borderRadius: 16,
        border: "0.914px solid rgba(255,255,255,0.4)",
        cursor: onClick ? "pointer" : undefined,
      }}
      onClick={onClick}
      data-name="dSavings Fitness card"
    >
      <img alt="" src={imgFitnessCard} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

      <div className="absolute" style={{ left: 20, top: 20, width: 302, height: 174 }} data-name="Content">
        <div className="absolute" style={{ left: 243, top: 0 }}>
          <CardAmounts cash="$120" data="1.25" />
        </div>

        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] left-0 text-[#e3e3e3] text-[14px] top-[162px] w-[112px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <p className="leading-[1.5]">23,391 members</p>
        </div>

        <div className="absolute content-stretch flex gap-[12px] items-center" style={{ left: 226, top: 148, width: 76, height: 26 }}>
          <DrumWaveLogo size={26} />
          {/* Zero-width in layout so the row still measures 76px; the rule bleeds ±0.5px. */}
          <div className="relative shrink-0" style={{ width: 0, height: 20.458 }}>
            <div className="absolute" style={{ left: -0.5, right: -0.5, top: 0, bottom: 0, background: "#fff" }} />
          </div>
          <div className="flex items-center justify-center relative shrink-0" style={{ width: 26.106, height: 26.106 }}>
            <img
              alt=""
              src={imgKaiserLogo}
              style={{ width: 26, height: 26, borderRadius: 108.863, objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* dSavings Smart card — Figma 15:35076. The whole card (photo, glows, lockup,
   member count, DrumWave mark) already exists as Frame87 in the DspLanding-1
   export; this frame only adds the cash/data figures on top. */
function SmartCard({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="absolute left-0"
      style={{ top: 60, width: 342, height: 214, cursor: onClick ? "pointer" : undefined }}
      onClick={onClick}
      data-name="dSavings Smart card"
    >
      <Frame87 />
      <div className="absolute" style={{ left: 262, top: 19 }}>
        <CardAmounts cash="$130" data="1.75" />
      </div>
    </div>
  );
}

interface DspActivePlansScreenProps {
  onSavingsPlan?: () => void;
  onFitnessPlan?: () => void;
  onSmartPlan?: () => void;
  onLearnMore?: () => void;
  onGoHome?: () => void;
  onMyData?: () => void;
  onOffers?: () => void;
  onManageMyPlan?: () => void;
  onCashBalance?: () => void;
  onDataBalance?: () => void;
  onViewAllPlans?: () => void;
}

/** "My Data Savings" all-plans overview — Figma 15:34974. Reached from
 *  "Back to all plans" on the step-83 plan dashboard. Lists the active plans as
 *  a stacked deck, then the "Other plans you qualify for" carousel. */
export function DspActivePlansScreen({
  onSavingsPlan,
  onFitnessPlan,
  onSmartPlan,
  onLearnMore,
  onGoHome,
  onMyData,
  onOffers,
  onManageMyPlan,
  onCashBalance,
  onDataBalance,
  onViewAllPlans,
}: DspActivePlansScreenProps) {
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
                          onSavingsPlan={onSavingsPlan}
                          onOffers={onOffers}
                        />
                      }
                    >
                      {/* 54px status bar + 40px to the title, per the frame */}
                      <div style={{ height: "94px" }} />

                      <div style={{ marginLeft: "24px" }}>
                        <Header />
                      </div>

                      <div style={{ marginTop: "64px", marginLeft: "24px" }}>
                        <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic text-[#e3e3e3] text-[24px] whitespace-nowrap">
                          Your active plans
                        </p>
                      </div>

                      {/* Stacked deck — Figma 15:35023: the Smart card overlaps
                          the Fitness card by 154px, leaving its top 60px visible. */}
                      <div className="relative" style={{ marginTop: "24px", marginLeft: "24px", width: 342, height: 274 }}>
                        <FitnessCard onClick={onFitnessPlan} />
                        <SmartCard onClick={onSmartPlan} />
                      </div>

                      <div style={{ marginTop: "64px", marginLeft: "24px" }}>
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

      {/* Status bar — pinned at frame top */}
      <div className="absolute left-0 top-0 w-[390px]" style={{ zIndex: 10 }}>
        <StatusBar />
      </div>
    </div>
  );
}
