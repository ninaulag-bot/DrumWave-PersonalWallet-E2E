import { ScreenWithNavBar } from "@/app/components/ScreenWithNavBar";
import { MainBottomNav } from "@/app/components/MainBottomNav";
import { StatusBar } from "@/app/components/ui/StatusBar";
import { OffersHeader } from "@/app/components/OffersNotEnrolledScreen";
import { Group10, Group12 } from "@/imports/DspLanding-1/index";
import offerSvgPaths from "@/imports/PlanDetaillPage/svg-hfxtqmo847";
import imgRivianOffers from "@/imports/DspLanding-1/rivian-offers.png";
import imgBestBuyOffers from "@/imports/DspLanding-1/best-buy-offers.png";
import imgBestBuyLogo from "@/imports/DspLanding-1/best-buy-logo.png";
import imgTeslaCarBg1 from "@/imports/PlanDetaillPage/f472d1b36845b43b2500d400f1df89646f59a9a3.png";
import imgTeslaCarBg2 from "@/imports/PlanDetaillPage/d3215bd4f8237e9211ad92ca35aed46057bbaf54.png";
import { MiniFooter } from "@/app/components/MiniFooter";

/**
 * "Offers" — the Offers tab destination for the three enrolled account states
 * (oneDsp / offer1 / dataRequestAccepted). Figma frame "Offers", node 16:83035.
 *
 * Sibling of `OffersNotEnrolledScreen` (16:83111, step 61): same header and
 * New/Claimed toggle — imported from that file — but a horizontal carousel of
 * live offer cards instead of the empty-state fan.
 *
 * The card markup matches the `TeslaOfferCard` family baked into
 * `@/imports/DspLanding-1/index` class-for-class; that copy is hardcoded to one
 * Tesla offer and drives a live screen, so it is mirrored here parametrized
 * rather than edited in place.
 */

/** Forward chevron on an offer title — Figma "Material / arrow_back_ios", mirrored. */
function OfferChevron({ left, top, width, height }: { left: number; top: number; width: number; height: number }) {
  return (
    <div className="absolute flex items-center justify-center" style={{ left, top, width, height }}>
      <div className="-scale-x-100 flex-none" style={{ width, height }}>
        <div className="overflow-clip relative size-full" data-name="Material / arrow_back_ios">
          <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.827 17.5">
              <path d={offerSvgPaths.p2ca33800} fill="var(--fill-0, #999999)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The four white dots that precede the "ENRICHED WITH DATA" label. */
function EnrichedBubbles() {
  return (
    <div className="h-[12.065px] relative shrink-0 w-[27px]" data-name="bubbles">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.0649" preserveAspectRatio="none" viewBox="0 0 26.9997 12.0649" width="26.9997">
        <g id="bubbles">
          <circle cx="25.3222" cy="3.51608" fill="var(--fill-0, white)" r="1.67744" />
          <circle cx="22.8056" cy="9.38922" fill="var(--fill-0, white)" r="2.51616" />
          <circle cx="15.0986" cy="3.35496" fill="var(--fill-0, white)" r="3.35488" />
          <circle cx="5.03232" cy="7.03255" fill="var(--fill-0, white)" r="5.03232" />
        </g>
      </svg>
    </div>
  );
}

/** 24px company mark. `logoSrc` omitted renders the design's plain white base. */
function CompanyMark({ opacity = 1, logoSrc }: { opacity?: number; logoSrc?: string }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div
        className="bg-white border-[0.585px] border-[rgba(203,203,203,0.2)] border-solid col-1 ml-0 mt-0 relative rounded-[58.537px] row-1 size-[24px]"
        style={{ opacity }}
      >
        {logoSrc && (
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={logoSrc} />
        )}
      </div>
    </div>
  );
}

/** Full-width badge pill: company mark + name on the left, "enriched with data" right. */
function EnrichedBadge({ company, markOpacity }: { company: string; markOpacity: number }) {
  return (
    <div
      className="absolute backdrop-blur-[2.5px] content-stretch flex flex-col items-start left-[15px] pl-[9px] pr-[17px] py-[9px] rounded-[40px] top-[15px] w-[310px]"
      style={{ backgroundImage: "linear-gradient(90.3442deg, rgba(0, 0, 0, 0.4) 1.6349%, rgb(66, 81, 112) 99.977%)" }}
      data-name="Dropdown for enriched with data"
    >
      <div aria-hidden className="absolute border border-[rgba(101,117,156,0.3)] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[67px]">
            <CompanyMark opacity={markOpacity} />
            <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap">
              {company}
            </p>
          </div>
          <div className="content-stretch flex items-center justify-end relative shrink-0 w-[183.5px]">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <EnrichedBubbles />
              <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.8px] uppercase whitespace-nowrap">
                <p className="leading-[1.2]">enriched with data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** "Lorem ipsum…" strap under every card title — Figma "Text under title". */
function TextUnderTitle() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Text under title">
      <p
        className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal inset-0 leading-[1.2] text-[14px] text-white"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >{`Lorem ipsum dolor sit amet consectetur. Ante accumsan ac turpis semper elit ligula `}</p>
    </div>
  );
}

/** "Data and cash benefit +$N" row plus the Claim offer CTA — Figma 16:83075. */
function OfferFooter({ amount, onClaimOffer }: { amount: string; onClaimOffer?: () => void }) {
  return (
    <div className="bg-[#111] relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[20px] relative size-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[310px]" data-name="Company and benefit">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <div
              className="[word-break:break-word] content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[16px] tracking-[-0.64px] whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0 text-[#e3e3e3]">
                <p className="leading-[1.2]">Data and cash benefit</p>
              </div>
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#00ff91]">
                <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.2]">+</p>
                </div>
                <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.2]">$</p>
                </div>
                <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0">
                  <p className="leading-[1.2]">{amount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[36px] relative shrink-0 w-[310px]" data-name="Offer CTAs">
          <button
            type="button"
            onClick={onClaimOffer}
            className="absolute bg-gradient-to-r content-stretch flex from-[#4b27ff] inset-0 items-center justify-center px-[17px] py-[5px] rounded-[56px] to-[#0091ff]"
            style={{ border: "none", cursor: "pointer" }}
          >
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[0.36px] whitespace-nowrap">
              <p className="leading-[1.2]">Claim offer</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Card 1 — Best Buy (Figma 16:83063). Structurally its own thing: the title is
 * absolutely placed against the hero box rather than stacked in a 310px column,
 * the badge is auto-width with no "enriched with data" section, and the fade
 * gradient is 279px instead of 240px.
 */
function BestBuyOfferCard({ onClaimOffer }: { onClaimOffer?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[342px]" data-name="Offer cards">
      <div className="h-[456px] mb-[-1px] overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
        {/* 342×456 source, exactly this hero box — object-cover, no crop. */}
        <div className="absolute inset-0 overflow-hidden rounded-tl-[24px] rounded-tr-[24px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBestBuyOffers} />
        </div>
        <div className="absolute bg-gradient-to-b bottom-[-1px] from-[4.398%] from-[rgba(22,22,22,0)] h-[279px] left-[-1px] to-[#111] to-[66.907%] w-[342px]" />
        <p
          className="[word-break:break-word] absolute font-['Titillium_Web:Regular',sans-serif] leading-[1.1] not-italic text-[32px] text-white whitespace-pre-wrap"
          style={{ left: 15.1, top: 275.22, width: 311.8, height: 105.43, margin: 0 }}
        >{`License your streaming  data to Best Buy for $25`}</p>
        <OfferChevron left={253.97} top={353.55} width={22.19} height={21.1} />
        <div className="absolute h-[34px] left-[15px] top-[393px] w-[310px]" data-name="Text under title">
          <p
            className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal inset-0 leading-[1.2] text-[14px] text-white"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >{`Lorem ipsum dolor sit amet consectetur. Ante accumsan ac turpis semper elit ligula `}</p>
        </div>
        <div
          className="absolute backdrop-blur-[2.5px] content-stretch flex flex-col items-start left-[15px] pl-[9px] pr-[17px] py-[9px] rounded-[40px] top-[15px]"
          style={{ backgroundImage: "linear-gradient(90.1333deg, rgba(0, 0, 0, 0.4) 1.6349%, rgb(72, 47, 66) 99.977%)" }}
          data-name="Dropdown for enriched with data"
        >
          <div aria-hidden className="absolute border border-[rgba(101,117,156,0.3)] border-solid inset-0 pointer-events-none rounded-[40px]" />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <CompanyMark logoSrc={imgBestBuyLogo} />
            <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap">
              Best Buy
            </p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
      </div>
      <OfferFooter amount="25" onClaimOffer={onClaimOffer} />
    </div>
  );
}

/**
 * Cards 2 and 3 — Rivian (16:83078) and Delta (16:83091). Both are instances of
 * the same "Offer cards" component: 310px stacked title column at y=301, a
 * full-width enriched badge, and a 240px fade.
 */
function EnrichedOfferCard({
  company,
  title,
  amount,
  markOpacity,
  chevron,
  hero,
  onClaimOffer,
}: {
  company: string;
  title: string;
  amount: string;
  markOpacity: number;
  chevron: { left: number; top: number; width: number; height: number };
  hero: React.ReactNode;
  onClaimOffer?: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[342px]" data-name="Offer cards">
      <div className="h-[456px] mb-[-1px] overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]">
          {hero}
        </div>
        <div className="absolute bg-gradient-to-b bottom-[-1px] from-[4.398%] from-[rgba(22,22,22,0)] h-[240px] left-[-1px] to-[#111] to-[66.907%] w-[342px]" />
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[301px] w-[310px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="h-[76px] relative shrink-0 w-full" data-name="Header for offers">
              <p className="[word-break:break-word] absolute font-['Titillium_Web:Regular',sans-serif] inset-0 leading-[1.2] not-italic text-[32px] text-white">
                {title}
              </p>
              <OfferChevron {...chevron} />
            </div>
            <TextUnderTitle />
          </div>
        </div>
        <EnrichedBadge company={company} markOpacity={markOpacity} />
        <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
      </div>
      <OfferFooter amount={amount} onClaimOffer={onClaimOffer} />
    </div>
  );
}

/** Extra bottom-left ambient wash — Figma 16:83039 "Ellipse 22030". */
function Ellipse22030() {
  return (
    <div className="-translate-x-1/2 absolute flex items-center justify-center left-[8.81px] size-[625.613px] top-[769px]">
      <div className="flex-none rotate-[61.24deg]">
        <div className="relative size-[460.759px]">
          <div className="absolute inset-[-32.55%]">
            <svg className="block size-full" fill="none" height="760.759" preserveAspectRatio="none" viewBox="0 0 760.759 760.759" width="760.759">
              <g filter="url(#filter0_f_offers_22030)" id="Ellipse 22030" opacity="0.1">
                <circle cx="380.38" cy="380.38" fill="var(--fill-0, #0037FF)" r="230.38" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="760.759" id="filter0_f_offers_22030" width="760.759" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_offers_22030" stdDeviation="75" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

interface OffersEnrolledScreenProps {
  onGoHome?: () => void;
  onMyData?: () => void;
  onSavingsPlan?: () => void;
  onClaimOffer?: () => void;
}

export function OffersEnrolledScreen({
  onGoHome,
  onMyData,
  onSavingsPlan,
  onClaimOffer,
}: OffersEnrolledScreenProps) {
  return (
    <div className="bg-[#070707] relative size-full overflow-hidden" data-name="Offers">
      <Group10 />
      <Ellipse22030 />
      <Group12 />

      <ScreenWithNavBar
        navBar={
          <MainBottomNav
            activeTab="offers"
            onHome={onGoHome}
            onMyData={onMyData}
            onSavingsPlan={onSavingsPlan}
          />
        }
      >
        {/* 54px status bar + 40px to the title, per the frame */}
        <div style={{ height: "94px" }} />

        <div style={{ marginLeft: "24px", width: "343px" }}>
          <OffersHeader />
        </div>

        {/* Carousel — Figma 16:83062 at y=260; cards overflow the 342px frame. */}
        <div
          className="[&::-webkit-scrollbar]:hidden"
          style={{
            marginTop: "33px",
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
            paddingLeft: "24px",
            paddingRight: "24px",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          <BestBuyOfferCard onClaimOffer={onClaimOffer} />
          <EnrichedOfferCard
            company="Rivian"
            title="Claim your Rivian data and earn $20"
            amount="20"
            markOpacity={0.22}
            chevron={{ left: 184.48, top: 48, width: 22.07, height: 21 }}
            onClaimOffer={onClaimOffer}
            hero={
              /* 342×456 source, exactly this hero box — object-cover, no crop. */
              <div className="absolute inset-0 overflow-hidden rounded-tl-[24px] rounded-tr-[24px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRivianOffers} />
              </div>
            }
          />
          <EnrichedOfferCard
            company="Delta"
            title="Claim your Delta data and earn $20"
            amount="20"
            markOpacity={0.3}
            chevron={{ left: 237.49, top: 51, width: 22.07, height: 21 }}
            onClaimOffer={onClaimOffer}
            hero={
              <>
                <div className="absolute inset-0 overflow-hidden rounded-tl-[24px] rounded-tr-[24px]">
                  <img alt="" className="absolute h-[109.31%] left-[-78.66%] max-w-none top-0 w-[257.31%]" src={imgTeslaCarBg1} />
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-tl-[24px] rounded-tr-[24px]">
                  <img alt="" className="absolute h-[118.67%] left-[-144.17%] max-w-none top-[-22.6%] w-[270.45%]" src={imgTeslaCarBg2} />
                </div>
                <div className="absolute bg-gradient-to-b from-[28%] from-[rgba(0,0,0,0)] inset-0 rounded-tl-[24px] rounded-tr-[24px] to-[71.269%] to-[rgba(0,0,0,0.4)]" />
              </>
            }
          />
        </div>
        <MiniFooter />
                    </ScreenWithNavBar>

      {/* Status bar — pinned at frame top */}
      <div className="absolute left-0 top-0 w-[390px]" style={{ zIndex: 10 }}>
        <StatusBar />
      </div>
    </div>
  );
}
