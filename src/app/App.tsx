// Prototype entrypoint. (rebuild)
import React, { useState, useEffect, useRef } from "react";
import DrumWaveFooter from "@/imports/UnnamedComponent/index";
import HomeRequestDataBeforeDsp from "@/imports/HomeRequestDataBeforeDsp-1/index";
import NoResultsIcon from "@/imports/Frame/index";
import NoResultsText from "@/imports/Frame2095587046/index";
import { motion, AnimatePresence } from "motion/react";
import { DrumWaveLogo } from "@/app/components/DrumWaveLogo";
import { CornerGlow } from "@/app/components/CornerGlow";
import { MainBottomNav } from "@/app/components/MainBottomNav";
import { ApplyForDspCard } from "@/app/components/ApplyForDspCard";
import { MyDataSavingsScreen } from "@/app/components/MyDataSavingsScreen";
import { OffersNotEnrolledScreen } from "@/app/components/OffersNotEnrolledScreen";
import { OffersEnrolledScreen } from "@/app/components/OffersEnrolledScreen";
import { StatusBar } from "@/app/components/ui/StatusBar";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";
import { EnrollHeroVisual } from "@/app/components/EnrollHeroVisual";
import { PhotoFanStack } from "@/app/components/PhotoFanStack";
import EnrollForm from "@/imports/Enroll/index";
import Enroll3 from "@/imports/Enroll-3/index";
import Enroll4 from "@/imports/Enroll-4/index";
import Enroll5 from "@/imports/Enroll-5/index";
import { AccountSettingsScreen } from "@/app/components/AccountSettingsScreen";
import { UserProfileScreen } from "@/app/components/UserProfileScreen";
import { PhotoSelectModalScreen } from "@/app/components/PhotoSelectModalScreen";
import { PhotoSavedScreen } from "@/app/components/PhotoSavedScreen";
import { ProfileUpdatedScreen } from "@/app/components/ProfileUpdatedScreen";
import { ChangePasswordScreen } from "@/app/components/ChangePasswordScreen";
import { RequestDrumwaveDataScreen } from "@/app/components/RequestDrumwaveDataScreen";
import { DataRequestConfirmScreen } from "@/app/components/DataRequestConfirmScreen";
import { FaqScreen } from "@/app/components/FaqScreen";
import { ContactSupportScreen } from "@/app/components/ContactSupportScreen";
import { LegalScreen } from "@/app/components/LegalScreen";
import { ConfirmApplicationScreen } from "@/app/components/ConfirmApplicationScreen";
import { UploadDataScreen } from "@/app/components/UploadDataScreen";
import { RequestDataProgressScreen } from "@/app/components/RequestDataProgressScreen";
import { UploadSuccessScreen } from "@/app/components/UploadSuccessScreen";
import { DWCloudScreen } from "@/app/components/DWCloudScreen";
import { HomeRequestDataBeforeDspScreen } from "@/app/components/HomeRequestDataBeforeDspScreen";
import { HowToGetDataScreen } from "@/app/components/HowToGetDataScreen";
import { OfferCampaignScreen } from "@/app/components/OfferCampaignScreen";
import { OfferSavingsScreen } from "@/app/components/OfferSavingsScreen";
import { OfferClaimScreen } from "@/app/components/OfferClaimScreen";
import { OfferClaimingLoadingScreen } from "@/app/components/OfferClaimingLoadingScreen";
import { OfferContinueScreen } from "@/app/components/OfferContinueScreen";
import { DspManageContributionScreen } from "@/app/components/DspManageContributionScreen";
import { OfferClaimSuccessScreen } from "@/app/components/OfferClaimSuccessScreen";
import { ReviewApplicationLoadingScreen } from "@/app/components/ReviewApplicationLoadingScreen";
import { AutoApprovedScreen } from "@/app/components/AutoApprovedScreen";
import { ProfileHalo } from "@/app/components/ProfileHalo";
import { MyPlanScreen } from "@/app/components/MyPlanScreen";
import { DspLanding1Screen } from "@/app/components/DspLanding1Screen";
import { DspLandingFitnessScreen } from "@/app/components/DspLandingFitnessScreen";
import { DspActivePlansScreen } from "@/app/components/DspActivePlansScreen";
import { ManageMyPlanScreen } from "@/app/components/ManageMyPlanScreen";
import { ChoosePlansScreen } from "@/app/components/ChoosePlansScreen";
import { PlanDetailScreen } from "@/app/components/PlanDetailScreen";
import { DspPlanNotSelectedScreen } from "@/app/components/DspPlanNotSelectedScreen";
import { TermsConditionsScreen } from "@/app/components/TermsConditionsScreen";
import { SuccessfullyJoinedScreen } from "@/app/components/SuccessfullyJoinedScreen";
import { JoinAnotherPlanScreen } from "@/app/components/JoinAnotherPlanScreen";
import { SmartPlanDetailScreen } from "@/app/components/SmartPlanDetailScreen";
import { Smart2PlanDetailScreen } from "@/app/components/Smart2PlanDetailScreen";
import { DspLandingScreen } from "@/app/components/DspLandingScreen";
import { SmartTermsConditionsScreen } from "@/app/components/SmartTermsConditionsScreen";
import { PlanJoinedIntroScreen } from "@/app/components/PlanJoinedIntroScreen";
import { SmartSuccessfullyJoinedScreen } from "@/app/components/SmartSuccessfullyJoinedScreen";
import { RequestYourDataScreen } from "@/app/components/RequestYourDataScreen";
import { DaHomeScreen } from "@/app/components/DaHomeScreen";
import { HomeRequestDataBeforeDsp11Screen } from "@/app/components/HomeRequestDataBeforeDsp11Screen";
import { DaHomeFullWidthOverview1Screen } from "@/app/components/DaHomeFullWidthOverview1Screen";
import { DataCertificatesScreen } from "@/app/components/DataCertificatesScreen";
import { DataCertsScreen } from "@/app/components/DataCertsScreen";
import { InitialEmailScreen } from "@/app/components/InitialEmailScreen";
import { DataCertsLoadingScreen } from "@/app/components/DataCertsLoadingScreen";
import { DataCertsDetailScreen } from "@/app/components/DataCertsDetailScreen";
import { MyCertificatesScreen } from "@/app/components/MyCertificatesScreen";
import { TeslaDataJourneyScreen } from "@/app/components/TeslaDataJourneyScreen";
import { DataBalanceScreen } from "@/app/components/DataBalanceScreen";
import { DataTransactionScreen } from "@/app/components/DataTransactionScreen";
import { CashBalanceUSScreen } from "@/app/components/CashBalanceUSScreen";
import { Enroll6Screen } from "@/app/components/Enroll6Screen";
import { Success1Screen } from "@/app/components/Success1Screen";
import { OneDspHomeScreen } from "@/app/components/OneDspHomeScreen";
import { TopNav } from "@/app/components/TopNav";
import { TwoStepVerificationScreen } from "@/app/components/TwoStepVerificationScreen";
import { AddPhoneNumberScreen } from "@/app/components/AddPhoneNumberScreen";
import { VerifyPhoneNumberScreen } from "@/app/components/VerifyPhoneNumberScreen";
import nameSvg from "@/imports/20SignUpName/svg-yrez388jqg";
import emailSvg from "@/imports/201EmailState/svg-n8bftxvkmp";
import passwordSvg from "@/imports/21SignUpEmailSetUpPassword/svg-m89hy89puf";
import verifySvg from "@/imports/22AccountVerificationEmailCode/svg-2k0kgcun7s";
import photoSvg from "@/imports/23SignUpEmailSetUpPassword/svg-yzgd4ggazh";
import photo2Svg from "@/imports/231SignUpEmailSetUpPassword/svg-swm3sldrfw";
import womanWithPhoneImg from "@/imports/Profile-1/43d2ce771435ace34d12c02bbe1cfd0b7749f275.png";
import congratsSvg from "@/imports/24SignUpEmailSetUpPassword/svg-uxrlpspnta";

// Inlined SVG paths from HomeRequestDataBeforeDsp-3 (only the 5 used here)
const rejectedSvgPaths = {
  p28734380: "M27.4701 40.2267L19.3859 32.1426L21.407 30.1216L27.4701 36.1847L40.4827 23.172L42.5038 25.1931L27.4701 40.2267Z",
  p14312900: "M36.0501 38.216L38.2162 36.0499L32.4915 30.3252V23.2081H29.3971V31.563L36.0501 38.216ZM30.9443 46.4162C28.804 46.4162 26.7927 46.01 24.9102 45.1977C23.0278 44.3855 21.3903 43.2831 19.9979 41.8906C18.6054 40.4981 17.503 38.8606 16.6907 36.9782C15.8784 35.0958 15.4723 33.0844 15.4723 30.9441C15.4723 28.8038 15.8784 26.7925 16.6907 24.91C17.503 23.0276 18.6054 21.3901 19.9979 19.9977C21.3903 18.6052 23.0278 17.5028 24.9102 16.6905C26.7927 15.8782 28.804 15.4721 30.9443 15.4721C33.0846 15.4721 35.096 15.8782 36.9784 16.6905C38.8609 17.5028 40.4983 18.6052 41.8908 19.9977C43.2833 21.3901 44.3857 23.0276 45.1979 24.91C46.0102 26.7925 46.4164 28.8038 46.4164 30.9441C46.4164 33.0844 46.0102 35.0958 45.1979 36.9782C44.3857 38.8606 43.2833 40.4981 41.8908 41.8906C40.4983 43.2831 38.8609 44.3855 36.9784 45.1977C35.096 46.01 33.0846 46.4162 30.9443 46.4162ZM30.9443 43.3218C34.374 43.3218 37.2943 42.1162 39.7054 39.7052C42.1164 37.2941 43.322 34.3738 43.322 30.9441C43.322 27.5145 42.1164 24.5941 39.7054 22.1831C37.2943 19.772 34.374 18.5665 30.9443 18.5665C27.5147 18.5665 24.5943 19.772 22.1833 22.1831C19.7722 24.5941 18.5667 27.5145 18.5667 30.9441C18.5667 34.3738 19.7722 37.2941 22.1833 39.7052C24.5943 42.1162 27.5147 43.3218 30.9443 43.3218Z",
  pcdc7000: "M38.8117 19.8469L38.8977 19.9904L39.0607 20.0275L44.2971 21.1906L43.7873 26.5754L43.7717 26.7414L43.882 26.8664L47.4494 30.9435L43.882 35.0217L43.7717 35.1467L43.7873 35.3127L44.2971 40.6965L39.0607 41.8615L38.8977 41.8976L38.8117 42.0412L36.0441 46.7004L31.0959 44.59L30.9445 44.5256L30.7922 44.59L25.843 46.7004L23.0764 42.0412L22.9914 41.8976L22.8283 41.8615L17.59 40.6965L18.1008 35.3127L18.1164 35.1467L18.007 35.0217L14.4377 30.9435L18.007 26.8664L18.1164 26.7414L18.1008 26.5754L17.59 21.1906L22.8283 20.0275L22.9914 19.9904L23.0764 19.8469L25.843 15.1867L30.7922 17.298L30.9445 17.3625L31.0959 17.298L36.0441 15.1867L38.8117 19.8469ZM34.7365 18.2883L30.9426 19.925L27.0725 18.2873L26.759 18.1555L26.5871 18.4484L24.507 22.0148L20.4182 22.9074L20.0852 22.9807L20.1154 23.3195L20.4875 27.4885L17.7316 30.6916L17.5119 30.9474L17.7346 31.1994L20.4875 34.3244L20.1154 38.5685L20.0852 38.9084L20.4182 38.9807L24.51 39.8732L26.6682 43.4445L26.842 43.7336L27.1525 43.5998L30.9455 41.9631L34.8166 43.6008L35.1301 43.7336L35.301 43.4396L37.383 39.8683L41.4768 38.9016L41.8029 38.8244L41.7727 38.4914L41.4006 34.3234L44.1535 31.1994L44.3762 30.9474L44.1564 30.6916L41.3996 27.4885L41.7727 23.3195L41.8039 22.9807L41.4699 22.9074L37.3771 22.0139L35.2209 18.4435L35.0461 18.1555L34.7365 18.2883ZM37.5187 27.6896L29.3195 35.8889L24.3742 30.9435L25.9963 29.3215L29.049 32.3039L29.3225 32.5705L29.593 32.301L35.8898 26.0031L37.5187 27.6896Z",
  p2d3aea00: "M23.0125 40.7159C21.7862 40.7159 20.7386 40.2814 19.8697 39.4125C19.0008 38.5436 18.5664 37.496 18.5664 36.2697V26.107C18.5664 24.8807 19.0008 23.8331 19.8697 22.9642C20.7386 22.0953 21.7862 21.6609 23.0125 21.6609H38.2566C39.4829 21.6609 40.5305 22.0953 41.3994 22.9642C42.2683 23.8331 42.7028 24.8807 42.7028 26.107V36.2697C42.7028 37.496 42.2683 38.5436 41.3994 39.4125C40.5305 40.2814 39.4829 40.7159 38.2566 40.7159H23.0125ZM23.0125 26.4246H38.2566C38.7387 26.4246 39.1935 26.4938 39.6209 26.6323C40.0484 26.7708 40.4405 26.9809 40.7972 27.2627V26.107C40.7972 25.4083 40.5485 24.8102 40.0509 24.3127C39.5534 23.8151 38.9553 23.5664 38.2566 23.5664H23.0125C22.3139 23.5664 21.7157 23.8151 21.2182 24.3127C20.7206 24.8102 20.4719 25.4083 20.4719 26.107V27.2627C20.8286 26.9809 21.2207 26.7708 21.6482 26.6323C22.0757 26.4938 22.5305 26.4246 23.0125 26.4246ZM20.5891 30.2236L34.8559 33.69C35.0301 33.7323 35.2065 33.7343 35.385 33.696C35.5633 33.6577 35.7249 33.5791 35.8699 33.4604L40.4431 29.6176C40.2346 29.2348 39.9361 28.9245 39.5476 28.6868C39.1593 28.449 38.7289 28.3301 38.2566 28.3301H23.0125C22.4132 28.3301 21.8928 28.5056 21.4516 28.8567C21.0102 29.2075 20.7227 29.6631 20.5891 30.2236Z",
  p440bb00: "M13.7529 24.7553L0 8.25176L4.12588 0H23.38L27.5059 8.25176L13.7529 24.7553ZM10.4866 6.87646H17.0192L14.9563 2.75059H12.5495L10.4866 6.87646ZM12.3776 18.8071V9.62705H4.74476L12.3776 18.8071ZM15.1282 18.8071L22.7611 9.62705H15.1282V18.8071ZM20.0793 6.87646H23.7238L21.6609 2.75059H18.0163L20.0793 6.87646ZM3.78206 6.87646H7.42658L9.48952 2.75059H5.84499L3.78206 6.87646Z",
} as const;

import landingSvg from "@/imports/PdW-1/svg-s3flsclnw6";
import pdw5Svg from "@/imports/PdW-5/svg-k39ov3fgj7";
import signInSvg from "@/imports/PdW/svg-zxs40abwmv";
import landingPhoto from "@/imports/dwalletbackgroundphoto.png";
import { UsaFlag } from "@/app/components/ui/UsaFlag";
import ringsBg from "@/imports/rings-bg.png";
import sparkles from "@/imports/sparkles.png";
import lockPng from "@/imports/lock.png";
import teslaMotorsLogo from "@/imports/tesla-motors-loading.png";
import teslaOfferImg from "@/imports/tesla-car.png";
import teslaDrivingImg from "@/imports/tesla-driving-source.png";
import categorySvgTravel from "@/imports/Categories/svg-h3d1gqb6et";
import categorySvgTech from "@/imports/Frame2095587620/svg-0rkxrz2ck8";
import categorySvgFinance from "@/imports/Frame2095587622/svg-sc87ik1xwp";
import categorySvgRetail from "@/imports/Frame2095587623/svg-e32w39j4rz";
import categorySvgHealth from "@/imports/Frame2095587624/svg-2yun6skhj7";
import categorySvgEntertainment from "@/imports/Frame2095587625/svg-laxthr64i4";
import categorySvgInsurance from "@/imports/Frame2095587626/svg-tdh88oever";
import categorySvgCivic from "@/imports/Frame2095587627/svg-xl8kkpvr94";
import dataSavingsPhoto from "@/imports/datasavingsplan.png";
import kaiserHeroPhoto from "@/imports/DspLanding-1/kaiser-hero-photo.png";
import kaiserLogo from "@/imports/DspLanding-1/kaiser-logo.png";
import dSavingsWordmark from "@/imports/DspLanding-1/dsavings-wordmark.svg";
import { ClaroLogo, MastercardLogo, NubankLogo, VivoLogo } from "@/app/components/CompanyLogos";
import enrollDsavingsGaming from "@/imports/dsavings-gaming.png";
import enrollDsavingsSmartGreen from "@/imports/dsavings-smart-green.png";
import enrollRewardLinkedIn from "@/imports/reward-linkedin.png";
import enrollRewardAmazon from "@/imports/reward-amazon.png";
import enrollRewardStarbucks from "@/imports/reward-starbucks.png";
import enrollDrumwaveRibbon from "@/imports/drumwave-ribbon.png";
import enrollDecorativeFrame from "@/imports/decorative-frame.svg";
import DspIntroSplash from "@/imports/DspIntroSplashDesktop4X/index";
import goalGlowBg from "@/imports/goal-glow.png";
import updatedProfilePhoto from "@/imports/Profile-2/741a120aa50a1efc4ca25391e35f954fa9bea854.png";
import dsavingsFitnessCard from "@/imports/dsavings-fitness-card.png";
const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function ConfettiLayer() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        opacity: 0.6,
        mixBlendMode: "lighten",
        pointerEvents: "none",
      }}
    >
      {/* Confetti SVG — extends beyond screen bounds via negative inset, matching Figma spec */}
      <div
        style={{
          position: "absolute",
          top: "-109.16%",
          right: "-113.08%",
          bottom: "-87.92%",
          left: "-87.18%",
          mixBlendMode: "lighten",
        }}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1171 2531.1"
        >
          <g opacity="0.6" style={{ mixBlendMode: "lighten" }}>
            <path d={pdw5Svg.p36fdcb00} fill="#915CB5" />
            <path d={pdw5Svg.p18921100} fill="#5263D9" />
            <path d={pdw5Svg.p3156fb80} fill="#18D687" />
            <path d={pdw5Svg.p3a9c2c00} fill="#6E78AB" />
            <path d={pdw5Svg.p13b37b00} fill="#AB309E" />
            <path d={pdw5Svg.p17d5e700} fill="#5282AD" />
            <path d={pdw5Svg.p13ccc180} fill="#478080" />
            <path d={pdw5Svg.p3f45be40} fill="#6E6E91" />
            <path d={pdw5Svg.p8f6d080} fill="#734FB0" />
            <path d={pdw5Svg.p125c6c00} fill="#00C7C7" />
            <path d={pdw5Svg.p1713c600} fill="#0091FF" />
            <path d={pdw5Svg.p31b2f640} fill="#00FF91" />
            <path d={pdw5Svg.p7337a00} fill="#244AFF" />
            <path d={pdw5Svg.p34550000} fill="#00FF91" />
            <path d={pdw5Svg.pe35fc80} fill="#0091FF" />
            <path d={pdw5Svg.p979c700} fill="#D13875" />
            <path d={pdw5Svg.p895300} fill="#895852" />
            <path d={pdw5Svg.p312f6000} fill="#C24A54" />
            <path d={pdw5Svg.p2ff1c200} fill="#00C7C7" />
            <path d={pdw5Svg.p3df42500} fill="#D13875" />
            <path d={pdw5Svg.p35c1c080} fill="#82667D" />
            <path d={pdw5Svg.p3d2c5b00} fill="#52A39C" />
            <path d={pdw5Svg.p168e200} fill="#73B07D" />
            <path d={pdw5Svg.p1431b80} fill="#00FF91" />
            <path d={pdw5Svg.p56ecf00} fill="#935AB1" />
            <path d={pdw5Svg.p31391300} fill="#827D91" />
            <path d={pdw5Svg.p2ff4a00} fill="#6E78AB" />
            <path d={pdw5Svg.p255f6c00} fill="#BF5C75" />
            <path d={pdw5Svg.pca70f00} fill="#A37540" />
            <path d={pdw5Svg.pbc45200} fill="#244AFF" />
            <path d={pdw5Svg.p2cea2780} fill="#00FF91" />
            <path d={pdw5Svg.p26ab0500} fill="#4700FF" />
            <path d={pdw5Svg.p36d5840} fill="#8080B5" />
            <path d={pdw5Svg.pdf238f0} fill="#639C80" />
            <path d={pdw5Svg.p1571e800} fill="#5263D9" />
            <path d={pdw5Svg.p15eed500} fill="#7A7A7A" />
            <path d={pdw5Svg.p2c033a00} fill="#7A7A7A" />
            <path d={pdw5Svg.p576f640} fill="#7B90A3" />
            <path d={pdw5Svg.p3d99d600} fill="#52A39C" />
            <path d={pdw5Svg.p20094200} fill="#24FF4A" />
            <path d={pdw5Svg.pc670572} fill="#8C6691" />
            <path d={pdw5Svg.p1975f480} fill="#244AFF" />
            <path d={pdw5Svg.p12c9fd00} fill="#915CB5" />
            <path d={pdw5Svg.p23a8b100} fill="#5263A3" />
            <path d={pdw5Svg.p28aac080} fill="#24FF4A" />
            <path d={pdw5Svg.p1d552900} fill="#6E6E91" />
            <path d={pdw5Svg.p27cd4500} fill="#6DAA7A" />
            <path d={pdw5Svg.p3fa13f00} fill="#478080" />
            <path d={pdw5Svg.p3e694c80} fill="#C24A54" />
            <path d={pdw5Svg.p1fffe700} fill="#24A3A3" />
            <path d={pdw5Svg.p194bb200} fill="#91409C" />
            <path
              d={pdw5Svg.p35372700}
              fill="#00FF8F"
              fillOpacity="0.06"
            />
            <path d={pdw5Svg.p10a6de00} fill="#9124B5" />
            <path d={pdw5Svg.p164d5400} fill="#52A39C" />
            <path d={pdw5Svg.p28511d00} fill="#6363B5" />
            <path d={pdw5Svg.p3960bdf0} fill="#6E30AB" />
            <path d={pdw5Svg.p26ad5000} fill="#A64A91" />
            <path d={pdw5Svg.pd0a200} fill="#00C7C7" />
            <path d={pdw5Svg.p15424d00} fill="#73B07D" />
            <path d={pdw5Svg.p1d2863c0} fill="#2FAA89" />
            <path d={pdw5Svg.p1dabbb00} fill="#00FF91" />
            <path d={pdw5Svg.pb7bde00} fill="#00FF91" />
            <path d={pdw5Svg.p3d45e570} fill="#00FF91" />
            <path d={pdw5Svg.p26ef2af0} fill="#8080B5" />
            <path d={pdw5Svg.p37778000} fill="#804AED" />
            <path d={pdw5Svg.p1bf2ebf0} fill="#3085AB" />
            <path d={pdw5Svg.p2a16de00} fill="#AB789E" />
            <path d={pdw5Svg.pf43a1b0} fill="#478080" />
            <path d={pdw5Svg.p9025880} fill="#C24A9E" />
            <path d={pdw5Svg.p250ad100} fill="#3085AB" />
            <path d={pdw5Svg.p2b744cc0} fill="#6EAB78" />
            <path d={pdw5Svg.p6005c40} fill="#6E5485" />
            <path d={pdw5Svg.p913d700} fill="#6E30F2" />
            <path d={pdw5Svg.p5ad2700} fill="#7A7A7A" />
            <path d={pdw5Svg.pc6defc0} fill="#91409C" />
            <path d={pdw5Svg.p1894f700} fill="#0091FF" />
            <path d={pdw5Svg.p2b291100} fill="#73B07D" />
            <path d={pdw5Svg.pec5880} fill="#5263D9" />
            <path d={pdw5Svg.p3e68e900} fill="#00C7C7" />
            <path d={pdw5Svg.p31bba0c0} fill="#29DA64" />
            <path d={pdw5Svg.p2d94bf80} fill="#7A7A7A" />
            <path d={pdw5Svg.p2b9a8a00} fill="#855454" />
            <path d={pdw5Svg.p28bc8000} fill="#6363B5" />
            <path d={pdw5Svg.p26eaf6f0} fill="#6E78AB" />
            <path d={pdw5Svg.p9b2300} fill="#8C6691" />
            <path d={pdw5Svg.p215e7500} fill="#6E54CF" />
            <path
              d={pdw5Svg.paf51300}
              fill="#00FF92"
              fillOpacity="0.62"
            />
            <path d={pdw5Svg.p523a0f0} fill="#00FF91" />
            <path d={pdw5Svg.p21cf8700} fill="#5263A3" />
            <path d={pdw5Svg.p3bf2d880} fill="#6EAB78" />
            <path d={pdw5Svg.p23eb7c00} fill="#5263A3" />
            <path d={pdw5Svg.p35a15900} fill="#6363B5" />
            <path d={pdw5Svg.pf390280} fill="#804A80" />
            <path d={pdw5Svg.p949b500} fill="#915CB5" />
            <path d={pdw5Svg.p25ffe300} fill="#6363B5" />
            <path d={pdw5Svg.p32af0100} fill="#478080" />
            <path d={pdw5Svg.p8343e00} fill="#5263A3" />
            <path d={pdw5Svg.p24033600} fill="#0091FF" />
            <path d={pdw5Svg.p26c30480} fill="#6363B5" />
            <path d={pdw5Svg.p3a710d00} fill="#548585" />
            <path d={pdw5Svg.pcbd6d80} fill="#52A39C" />
            <path d={pdw5Svg.p263b47f1} fill="#24C780" />
            <path d={pdw5Svg.p1b47df00} fill="#5680A9" />
            <path d={pdw5Svg.p326d8700} fill="#8C6691" />
            <path d={pdw5Svg.p3d03b380} fill="#63809C" />
            <path d={pdw5Svg.p1b5bca00} fill="#1785D9" />
            <path d={pdw5Svg.p2f4daa80} fill="#00C7C7" />
            <path d={pdw5Svg.p13a2cd00} fill="#A300ED" />
            <path d={pdw5Svg.p3b578900} fill="#6E859E" />
            <path d={pdw5Svg.p91dc380} fill="#5293A5" />
            <path d={pdw5Svg.pe7c000} fill="#A300ED" />
            <path d={pdw5Svg.p3fca1500} fill="#996678" />
            <path d={pdw5Svg.p28184dc0} fill="#548585" />
            <path d={pdw5Svg.pe88d200} fill="#47FF00" />
            <path d={pdw5Svg.p20b5d480} fill="#5263A3" />
            <path d={pdw5Svg.p3dbaac00} fill="#827D91" />
            <path d={pdw5Svg.p3da33900} fill="#5CC06D" />
            <path d={pdw5Svg.p26545a80} fill="#6E78AB" />
            <path d={pdw5Svg.p10e47f80} fill="#24C780" />
            <path d={pdw5Svg.p123acf00} fill="#809C9C" />
            <path d={pdw5Svg.p3970fd00} fill="#0091FF" />
            <path d={pdw5Svg.p28bc1f00} fill="#5282AD" />
            <path d={pdw5Svg.p7497b80} fill="#6E9191" />
            <path d={pdw5Svg.p1401c880} fill="#804AED" />
            <path d={pdw5Svg.p6f03d00} fill="#996678" />
            <path d={pdw5Svg.p25d2dac0} fill="#9124B5" />
            <path d={pdw5Svg.p269c43f0} fill="#478080" />
            <path d={pdw5Svg.p12731100} fill="#5263D9" />
            <path d={pdw5Svg.p2106b680} fill="#AB309E" />
            <path d={pdw5Svg.p114f7ff2} fill="#00FF91" />
            <path d={pdw5Svg.p16cf1970} fill="#548585" />
            <path d={pdw5Svg.p25eb7e80} fill="#7779B1" />
            <path d={pdw5Svg.p2c387100} fill="#804AED" />
            <path d={pdw5Svg.p92e3580} fill="#804A80" />
            <path d={pdw5Svg.p14f72480} fill="#52A39C" />
            <path d={pdw5Svg.p2feac100} fill="#A36E80" />
            <path d={pdw5Svg.p3e4beb00} fill="#244AFF" />
            <path d={pdw5Svg.p1b735070} fill="#915C80" />
            <path d={pdw5Svg.p1f463a00} fill="#3085AB" />
            <path d={pdw5Svg.pc10be00} fill="#A30080" />
            <path d={pdw5Svg.p28168d00} fill="#52A39C" />
            <path d={pdw5Svg.p119edf0} fill="#636380" />
            <path d={pdw5Svg.p3b849d00} fill="#91409C" />
            <path d={pdw5Svg.p33e31880} fill="#915C80" />
            <path d={pdw5Svg.pa083700} fill="#734FB0" />
            <path d={pdw5Svg.p2ec18100} fill="#8080B5" />
            <path d={pdw5Svg.p1f02d380} fill="#734FB0" />
            <path d={pdw5Svg.p3b09d180} fill="#1785D9" />
            <path d={pdw5Svg.p2bdf4240} fill="#6FA97C" />
            <path d={pdw5Svg.p2e4f4400} fill="#8000F3" />
            <path d={pdw5Svg.p18049500} fill="#859696" />
            <path d={pdw5Svg.p113c1780} fill="#5263A3" />
            <path d={pdw5Svg.pa38b100} fill="#24FF4A" />
            <path d={pdw5Svg.pac5a900} fill="#52A39C" />
            <path d={pdw5Svg.p22c6b580} fill="#827D66" />
            <path d={pdw5Svg.p22ee9b00} fill="#636380" />
            <path d={pdw5Svg.p142e2340} fill="#3085AB" />
            <path d={pdw5Svg.p36642500} fill="#7A7A7A" />
            <path d={pdw5Svg.p11064b00} fill="#548585" />
            <path d={pdw5Svg.p2485ff00} fill="#AB309E" />
            <path d={pdw5Svg.p12b91100} fill="#0091FF" />
            <path d={pdw5Svg.p390e380} fill="#804AED" />
            <path d={pdw5Svg.p173ca700} fill="#24FF4A" />
            <path d={pdw5Svg.p2ec98200} fill="#0091FF" />
            <path d={pdw5Svg.p9eb3800} fill="#5485CF" />
            <path d={pdw5Svg.p32159700} fill="#6E78AB" />
            <path d={pdw5Svg.p2a4f6d80} fill="#915CB5" />
            <path d={pdw5Svg.p37ab8e80} fill="#4F8282" />
            <path d={pdw5Svg.p3d099800} fill="#827D66" />
            <path d={pdw5Svg.p142f0c70} fill="#24FF4A" />
            <path d={pdw5Svg.p3095400} fill="#00FF91" />
            <path d={pdw5Svg.p311a1de0} fill="#24A3A3" />
            <path d={pdw5Svg.p2a115c80} fill="#804A80" />
            <path d={pdw5Svg.p340e7b40} fill="#5282AD" />
            <path d={pdw5Svg.p5d44c00} fill="#8080B5" />
            <path d={pdw5Svg.p2d03400} fill="#4700FF" />
            <path d={pdw5Svg.p29cdf980} fill="#52A39C" />
            <path d={pdw5Svg.p2ee30800} fill="#24A3A3" />
            <path d={pdw5Svg.p1c22ab50} fill="#25C383" />
            <path d={pdw5Svg.p39fa6600} fill="#AB309E" />
            <path d={pdw5Svg.p1fdaf000} fill="#6363B5" />
            <path d={pdw5Svg.p30bb2800} fill="#80639C" />
            <path d={pdw5Svg.p12594540} fill="#5263A3" />
            <path d={pdw5Svg.p331ae900} fill="#80639C" />
            <path d={pdw5Svg.p1af7e300} fill="#6E78AB" />
            <path d={pdw5Svg.p227f3100} fill="#00C7C7" />
            <path d={pdw5Svg.p1dafb000} fill="#8F4598" />
            <path d={pdw5Svg.p2791f140} fill="#244AFF" />
            <path d={pdw5Svg.p7028f80} fill="#3085AB" />
            <path d={pdw5Svg.p1f65cf00} fill="#24A3A3" />
            <path d={pdw5Svg.p40a1200} fill="#6E5485" />
            <path d={pdw5Svg.p39743800} fill="#0091FF" />
            <path d={pdw5Svg.p3868cc80} fill="#997D7D" />
            <path d={pdw5Svg.p234ba9c0} fill="#AB309E" />
            <path d={pdw5Svg.p141c7a00} fill="#00FF91" />
            <path d={pdw5Svg.p2a70c300} fill="#B62E65" />
            <path d={pdw5Svg.p3bed4700} fill="#91409C" />
            <path d={pdw5Svg.pcdc6130} fill="#804AED" />
            <path d={pdw5Svg.p11ccac80} fill="#244AFF" />
            <path d={pdw5Svg.p6b9ef00} fill="#824F91" />
            <path d={pdw5Svg.p376d7700} fill="#24FF4A" />
            <path d={pdw5Svg.p2cc7b280} fill="#3085AB" />
            <path d={pdw5Svg.p32215040} fill="#52A39C" />
            <path d={pdw5Svg.p50ddd80} fill="#C24A54" />
            <path d={pdw5Svg.p1a0f79f0} fill="#7A7A7A" />
            <path d={pdw5Svg.p23687500} fill="#5263D9" />
            <path d={pdw5Svg.p1ad58480} fill="#5485CF" />
            <path d={pdw5Svg.p29f46080} fill="#24FF4A" />
            <path d={pdw5Svg.p33033000} fill="#47FF00" />
            <path d={pdw5Svg.p5500000} fill="#734FB0" />
            <path d={pdw5Svg.p2750eb80} fill="#5485CF" />
            <path d={pdw5Svg.p3f656d00} fill="#804AED" />
            <path d={pdw5Svg.p34b23c00} fill="#24FF4A" />
            <path d={pdw5Svg.p13a95b80} fill="#0091FF" />
            <path d={pdw5Svg.p1e77de00} fill="#24C780" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LandingBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--color-bg-base)",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Layer 1 — Photo at 70% opacity */}
      <img
        src={landingPhoto}
        alt=""
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          opacity: 0.7,
          display: "block",
          pointerEvents: "none",
        }}
      />

      {/* Layer 2 — Confetti with lighten blend */}
      <ConfettiLayer />

      {/* Layer 3 — Bottom overlay: mask on outer, blur on inner */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "400px",
          width: "100%",
          height: "452px",
          maskImage:
            "linear-gradient(180deg, transparent 0%, black 15%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, black 15%)",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(235deg, rgba(255,0,217,0.03) 0%, rgba(0,0,0,0.10) 100%)",
            backdropFilter: "blur(20px)",
          }}
        />
      </div>

      {/* Layer 4 — Top overlay: mask on outer, blur on inner */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "284px",
          maskImage:
            "linear-gradient(180deg, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, black 85%, transparent 100%)",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(235deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.10) 100%)",
            backdropFilter: "blur(20px)",
          }}
        />
      </div>

      {/* dWallet wordmark — centered at top:239px */}
      <div
        style={{
          position: "absolute",
          left: "107px",
          top: "239px",
          width: "176.012px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <svg
          width="176.012"
          height="41.2812"
          viewBox="0 0 176.012 41.2812"
          fill="none"
          style={{ display: "block" }}
        >
          <path d={landingSvg.p2b4fdf00} fill="white" />
          <path d={landingSvg.p24793700} fill="white" />
        </svg>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "14.40px",
            letterSpacing: "1.92px",
            color: "white",
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          PERSONAL
        </p>
      </div>

      {/* Headline: Titillium Web Light (300), 40px/42px, centered, width:290px, top:362px */}
      <p
        style={{
          position: "absolute",
          left: "50px",
          top: "362px",
          width: "290px",
          margin: 0,
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "40px",
          lineHeight: "42px",
          letterSpacing: "-1.6px",
          color: "white",
        }}
      >
        Own Your Data.
        <br />
        Own Your Future.
      </p>

      {/* Status bar */}
      <StatusBar />

      {/* Home indicator zone: top:823px */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "831px",
          width: "393px",
          height: "21px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "144px",
            height: "5px",
            borderRadius: "9999px",
            background: "#FFFFFF",
          }}
        />
      </div>

      {children}
    </div>
  );
}

function LandingScreen({
  onSignIn,
  onGetStarted,
}: {
  onSignIn: () => void;
  onGetStarted: () => void;
}) {
  return (
    <LandingBackground>
      {/* Country selector: left:143px, top:571px, width:104px */}
      <div
        style={{
          position: "absolute",
          left: "143px",
          top: "571px",
          width: "104px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
      {/* US flag — real asset via component */}
        <div
          style={{
            borderRadius: "3px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <UsaFlag size={24} />
        </div>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "16px",
            color: "#EDEDED",
            lineHeight: "19.20px",
            whiteSpace: "nowrap",
          }}
        >
          USA
        </span>
        <svg width="12" height="7.4" viewBox="0 0 12 7.4" fill="none" style={{ flexShrink: 0 }}>
          <path d="M1 1L6 6L11 1" stroke="#EDEDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Get Started: top:648px, 318×44px, white fill */}
      <button
        type="button"
        onClick={onGetStarted}
        style={{
          position: "absolute",
          left: "36px",
          top: "636px",
          width: "318px",
          height: "44px",
          borderRadius: "60px",
          background: "var(--color-action-primary-bg)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            color: "var(--color-action-primary-text)",
            letterSpacing: "-0.72px",
          }}
        >Get Started</span>
      </button>

      {/* Sign in: top:708px, outlined */}
      <button
        type="button"
        onClick={onSignIn}
        style={{
          position: "absolute",
          left: "36px",
          top: "696px",
          width: "318px",
          height: "44px",
          borderRadius: "60px",
          background: "transparent",
          boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            color: "var(--color-action-secondary-text)",
            letterSpacing: "-0.72px",
          }}
        >
          Sign in
        </span>
      </button>

      {/* Go to Business dWallet: left:111px, top:784px */}
      <p
        style={{
          position: "absolute",
          left: "111px",
          top: "772px",
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "14.40px",
          letterSpacing: "0.64px",
          color: "var(--color-text-primary)",
          textAlign: "center",
          whiteSpace: "nowrap",
          cursor: "pointer",
        }}
      >
        Go to Business dWallet
      </p>
    </LandingBackground>
  );
}

function SignInScreen({
  onBack,
  onSignIn,
}: {
  onBack: () => void;
  onSignIn: () => void;
}) {
  const [email, setEmail] = useState("Carolinas@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LandingBackground>
      <BackButton onPress={onBack} />
      {/* Email + Password form: left:24px, top:491px, width:342px, gap:24px */}
      <div
        style={{
          position: "absolute",
          left: "24px",
          top: "491px",
          width: "342px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Email field — focused/active state: border #999999 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: 1,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Email
          </p>
          <div
            style={{
              backdropFilter: "blur(2px)",
              borderRadius: "8px",
              background: "rgba(7,7,7,0.70)",
              boxShadow:
                "inset 0 0 0 1px var(--color-border-primary, #999999)",
              height: "44px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "16px",
                color: "var(--color-text-primary)",
                caretColor: "#E3E3E3",
              }}
            />
          </div>
        </div>

        {/* Password field — default state: border #2A2A2A */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: 1,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Password
          </p>
          <div
            style={{
              backdropFilter: "blur(2px)",
              borderRadius: "8px",
              background: "rgba(7,7,7,0.70)",
              boxShadow:
                "inset 0 0 0 1px var(--color-border-secondary, #2A2A2A)",
              height: "44px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "12px",
              paddingRight: "4px",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "16px",
                color: "var(--color-text-primary)",
                caretColor: "#E3E3E3",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              style={{
                background: "transparent",
                border: "none",
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
              >
                <path d={signInSvg.p8f0c00} fill="#E3E3E3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Reset password link: top:678px, centered */}
      <p
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "678px",
          margin: 0,
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "14px",
          color: "var(--color-text-primary)",
          textAlign: "center",
          textDecoration: "underline",
          whiteSpace: "nowrap",
          cursor: "pointer",
          lineHeight: "1.5",
        }}
      >
        Reset password
      </p>

      {/* Sign in button: top:744px, 318×44px, white fill */}
      <button
        type="button"
        onClick={onSignIn}
        style={{
          position: "absolute",
          left: "36px",
          top: "744px",
          width: "318px",
          height: "44px",
          borderRadius: "60px",
          background: "var(--color-action-primary-bg)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            color: "var(--color-action-primary-text)",
            letterSpacing: "-0.72px",
          }}
        >
          Sign in
        </span>
      </button>
    </LandingBackground>
  );
}

function AmbientGlow() {
  return (
    <div className="absolute flex items-center justify-center left-[-12.23px] size-[1.567px] top-[295.52px]">
      <div className="flex-none rotate-[10.62deg]">
        <div className="bg-[rgba(7,7,7,0.01)] relative rounded-[212.121px] shadow-[0px_-20px_200px_140px_rgba(71,0,255,0.24)] size-[1.343px]" />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute h-[21px] left-0 bottom-0 w-full">
      <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
        <div className="bg-white h-[5px] rounded-[100px] w-[144px]" />
      </div>
    </div>
  );
}

function BackButton({ onPress }: { onPress: () => void }) {
  return (
    <button
      onClick={onPress}
      className="-translate-y-1/2 absolute left-[24px] top-[calc(50%-330px)] flex items-center justify-center p-[10px] rounded-[500px]"
    >
      <div className="relative size-[32px]">
        <div className="absolute inset-[8.33%_50.94%_8.33%_0]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.7 26.6667"
          >
            <path d={nameSvg.p22d51380} fill="#E3E3E3" />
          </svg>
        </div>
      </div>
    </button>
  );
}

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

function PrimaryButton({
  label,
  onClick,
  icon,
  style,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ background: "var(--color-action-primary-bg)", color: "var(--color-action-primary-text)", ...style }}
      className="w-full rounded-full px-[24px] py-[12px] flex items-center justify-center gap-[8px] transition-colors"
    >
      {icon && (
        <span className="flex items-center justify-center size-[24px] shrink-0">
          <span className="flex items-center justify-center size-[18px]">
            {icon}
          </span>
        </span>
      )}
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-primary-text)" }}>
        {label}
      </span>
    </button>
  );
}

function NextButton({ onPress }: { onPress: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 top-[735px] w-[290px]">
      <PrimaryButton label="Next" onClick={onPress} />
    </div>
  );
}

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  /** showLeftIcon: pass an SVG/element to enable the 24×24 leading icon slot */
  leftIcon?: React.ReactNode;
  /** showButton: pass an SVG/element to enable the trailing ghost icon-button slot */
  trailingIcon?: React.ReactNode;
  onTrailingClick?: () => void;
  /** showHint: pass a string to show right-aligned hint text below the container */
  hint?: string;
}

function TextInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  leftIcon,
  onTrailingClick,
  trailingIcon,
  hint,
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Border: #999999 when focused or hovered-but-not-focused; #2A2A2A for default and filled
  const borderColor =
    isFocused || isHovered ? "#999999" : "#2A2A2A";

  // Hint color: #E3E3E3 when focused or filled, #E3E3E3 always per spec (hint only shows when passed)
  const hintColor = "#E3E3E3";

  return (
    <div
      className="flex flex-col w-full"
      style={{ gap: "8px" }}
    >
      {/* Label */}
      <label
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "14px",
          color: "rgba(227, 227, 227, 0.8)",
          width: "100%",
          display: "block",
        }}
      >
        {label}
      </label>

      {/* Input container */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: "var(--color-bg-surface)",
          borderRadius: "8px",
          boxShadow: `inset 0 0 0 1px ${borderColor}`,
          height: "44px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "12px",
          paddingRight: "2px",
          width: "100%",
          boxSizing: "border-box",
          transition: "box-shadow 120ms ease",
        }}
      >
        {/* Leading icon slot — showLeftIcon */}
        {leftIcon && (
          <span
            style={{
              flexShrink: 0,
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
              color: "var(--color-text-secondary)",
            }}
          >
            <span
              style={{
                width: "18px",
                height: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {leftIcon}
            </span>
          </span>
        )}

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            color: "var(--color-text-primary)",
            background: "transparent",
            border: "none",
            outline: "none",
            flex: "1 1 0",
            minWidth: 0,
          }}
          className="placeholder:text-[#999999]"
        />

        {/* Trailing icon-button slot — showButton */}
        {trailingIcon && (
          <button
            type="button"
            onClick={onTrailingClick}
            style={{
              flexShrink: 0,
              padding: "10px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-primary)",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {trailingIcon}
            </span>
          </button>
        )}
      </div>

      {/* Hint text slot — showHint */}
      {hint && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            color: hintColor,
            width: "100%",
            textAlign: "right",
            margin: 0,
            marginTop: "4px",
          }}
        >
          {hint}
        </p>
      )}
    </div>
  );
}

interface NameScreenProps {
  firstName: string;
  setFirstName: (v: string) => void;
  lastName: string;
  setLastName: (v: string) => void;
  onBack: () => void;
  onNext: () => void;
}

function NameScreen({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  onBack,
  onNext,
}: NameScreenProps) {
  return (
    <div className="bg-[var(--color-bg-base)] relative size-full">
      <AmbientGlow />
      <StatusBar />

      <BackButton onPress={onBack} />

      {/* Account circle icon */}
      <div className="-translate-x-1/2 absolute left-1/2 top-[146px] flex items-center">
        <div className="relative size-[40px]">
          <div className="absolute inset-[8.33%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 33.3333 33.3333"
            >
              <path d={nameSvg.p2eea7b00} fill="#E3E3E3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="absolute left-[24px] top-[202px] w-[342px] flex flex-col gap-[64px] items-center">
        {/* Headline */}
        <div className="flex flex-col gap-[16px] items-center text-center w-[251px]">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "28.8px",
              color: "var(--color-text-primary)",
              textAlign: "center",
              width: "100%",
            }}
          >
            {"Let's get to know you! What's your name?"}
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.2px",
              color: "var(--color-text-secondary)",
              textAlign: "center",
              width: "100%",
            }}
          >
            {"This helps us personalize"}
            <br />
            {"your experience."}
          </p>
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-[24px] items-start w-full">
          <TextInput
            label="First name"
            placeholder="Enter your first name"
            value={firstName}
            onChange={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            value={lastName}
            onChange={setLastName}
          />
        </div>
      </div>

      <NextButton onPress={onNext} />
      <HomeIndicator />
    </div>
  );
}

function EmailStateScreen({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  const [email, setEmail] = useState("Carolinas@gmail.com");
  const [selectedState, setSelectedState] = useState("");

  return (
    <div className="bg-[var(--color-bg-base)] relative size-full">
      <AmbientGlow />
      <StatusBar />
      <BackButton onPress={onBack} />

      {/* Mail icon */}
      <div
        className="absolute size-[40px] top-[146px]"
        style={{ left: "calc(25% + 77.5px)" }}
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 40 40"
        >
          <path d={emailSvg.p36430100} fill="#E3E3E3" />
        </svg>
      </div>

      {/* Main content */}
      <div className="absolute left-[24px] top-[202px] w-[342px] flex flex-col gap-[64px] items-center">
        {/* Headline */}
        <div className="flex flex-col gap-[16px] items-center text-center w-[251px]">
          <p className="font-[var(--font-display)] text-[#e3e3e3] text-[24px] leading-[1.2] w-full">
            Please provide your email and state
          </p>
          <p className="text-[#999] text-[16px] leading-[1.2] w-full">
            This helps us verify your identity and request your
            data.
          </p>
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-[24px] items-start w-full">
          {/* Email */}
          <TextInput
            label="Email"
            placeholder="jane@gmail.com"
            type="email"
            value={email}
            onChange={(v) => setEmail(v)}
            leftIcon={
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d={emailSvg.p238840} fill="#999999" />
              </svg>
            }
          />

          {/* State */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <label
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "14px",
                color: "rgba(227, 227, 227, 0.8)",
                width: "100%",
                display: "block",
              }}
            >
              State You Reside In
            </label>
            <div className="flex flex-col gap-[4px] w-full">
              <div className="relative w-full bg-[#111111] border border-[#2A2A2A] rounded-[8px] h-[44px] flex items-center pl-[12px]">
                <div className="shrink-0 size-[24px] mr-[12px]">
                  <svg
                    className="size-full"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d={emailSvg.p1179fd00}
                      fill="#999999"
                    />
                  </svg>
                </div>
                <select
                  value={selectedState}
                  onChange={(e) =>
                    setSelectedState(e.target.value)
                  }
                  className="flex-1 min-w-0 bg-transparent font-normal text-[16px] outline-none appearance-none cursor-pointer pr-[40px]"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: selectedState ? "#e3e3e3" : "#999999",
                  }}
                >
                  <option
                    value=""
                    disabled
                    style={{
                      background: "#111",
                      color: "#999",
                    }}
                  >
                    Select a State
                  </option>
                  {US_STATES.map((s) => (
                    <option
                      key={s}
                      value={s}
                      style={{
                        background: "#111",
                        color: "#e3e3e3",
                      }}
                    >
                      {s}
                    </option>
                  ))}
                </select>
                {/* Chevron */}
                <div className="absolute right-[10px] flex items-center justify-center size-[24px] pointer-events-none">
                  <svg
                    width="12"
                    height="7.4"
                    fill="none"
                    viewBox="0 0 12 7.4"
                  >
                    <path
                      d={emailSvg.p13733a00}
                      fill="#E3E3E3"
                    />
                  </svg>
                </div>
              </div>
              <p className="font-[var(--font-body)] font-normal text-[#999] text-[10px] leading-[1.2] text-right w-full">
                Currently only available in the US
              </p>
            </div>
          </div>
        </div>
      </div>

      <NextButton onPress={onNext} />
      <HomeIndicator />
    </div>
  );
}

const EyeIcon = () => (
  <svg width="22" height="15" fill="none" viewBox="0 0 22 15">
    <path d={passwordSvg.p8f0c00} fill="#E3E3E3" />
  </svg>
);

function LockIcon() {
  return (
    <div
      style={{
        position: "relative",
        width: "40px",
        height: "40px",
        flexShrink: 0,
      }}
    >
      {/* Glyph: 26.67×35px, left:6.67px, top:1.67px (inset 4.17% 16.67% 8.33% 16.67% of 40×40) */}
      <div
        style={{
          position: "absolute",
          top: "1.67px",
          left: "6.67px",
          width: "26.67px",
          height: "35px",
        }}
      >
        <svg
          width="26.6667"
          height="35"
          viewBox="0 0 26.6667 35"
          fill="none"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <path d={passwordSvg.pf7eec00} fill="#E3E3E3" />
        </svg>
      </div>
    </div>
  );
}

function PasswordScreen({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-[var(--color-bg-base)] relative size-full">
      {/* Pink ambient glow — right side */}
      <div
        className="absolute flex items-center justify-center size-[1.591px] top-[289.08px]"
        style={{ left: "calc(100% + 58.56px)" }}
      >
        <div
          className="flex-none"
          style={{ transform: "rotate(-78.1deg)" }}
        >
          <div
            className="relative rounded-[212.121px] size-[1.343px]"
            style={{
              background: "rgba(7,7,7,0.01)",
              boxShadow:
                "0px -20px 200px 140px rgba(255,0,217,0.3)",
            }}
          />
        </div>
      </div>

      <StatusBar />
      <BackButton onPress={onBack} />

      {/* Lock icon */}
      <div className="-translate-x-1/2 absolute left-1/2 top-[146px] flex items-center justify-center">
        <LockIcon />
      </div>

      {/* Main content */}
      <div className="absolute left-[24px] top-[202px] w-[342px] flex flex-col gap-[72px] items-center">
        {/* Headline */}
        <div className="flex flex-col gap-[12px] items-center text-center w-full">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "28.8px",
              color: "var(--color-text-primary)",
              textAlign: "center",
              width: "100%",
            }}
          >
            Set up a secure password
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.2px",
              color: "var(--color-text-secondary)",
              textAlign: "center",
              width: "100%",
            }}
          >
            {"Use at least 12 characters, with a mix"}
            <br />
            {"of letters, numbers, and symbols."}
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-[32px] w-full">
          <TextInput
            label="Password"
            placeholder="Enter a password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(v) => setPassword(v)}
            trailingIcon={<EyeIcon />}
            onTrailingClick={() => setShowPassword((s) => !s)}
          />
          <TextInput
            label="Confirm password"
            placeholder="Confirm password"
            type={showConfirm ? "text" : "password"}
            value={confirm}
            onChange={(v) => setConfirm(v)}
            trailingIcon={<EyeIcon />}
            onTrailingClick={() => setShowConfirm((s) => !s)}
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="absolute left-[24px] top-[643px] w-[342px] flex items-start gap-[12px] px-[8px]">
        <button
          type="button"
          onClick={() => setAgreed((v) => !v)}
          className="shrink-0 flex items-center justify-center mt-[1px]"
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <div className="relative size-[24px]">
            <div
              className="absolute"
              style={{ inset: "8.33%" }}
            >
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
              >
                <path
                  d={passwordSvg.p3a94b900}
                  fill={agreed ? "#E3E3E3" : "#070707"}
                  stroke="#999999"
                />
              </svg>
            </div>
          </div>
        </button>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "1.2",
            color: "var(--color-text-primary)",
            flex: 1,
          }}
        >
          By clicking here, I state that I have read and
          understood the{" "}
          <span style={{ textDecoration: "underline" }}>
            Terms of Use
          </span>{" "}
          and{" "}
          <span style={{ textDecoration: "underline" }}>
            Privacy Policy
          </span>
          .
        </p>
      </div>

      <NextButton onPress={onNext} />
      <HomeIndicator />
    </div>
  );
}

// ─── Verification screen ──────────────────────────────────────────────────────

// ─── Numeric Keyboard ──────────────────────────────────────────────────────
const KEYBOARD_ROWS = [
  [
    { label: "1", sub: "" },
    { label: "2", sub: "ABC" },
    { label: "3", sub: "DEF" },
  ],
  [
    { label: "4", sub: "GHI" },
    { label: "5", sub: "JKL" },
    { label: "6", sub: "MNO" },
  ],
  [
    { label: "7", sub: "PQRS" },
    { label: "8", sub: "TUV" },
    { label: "9", sub: "WXYZ" },
  ],
];

function NumericKeyboard({
  onDigit,
  onDelete,
}: {
  onDigit: (d: string) => void;
  onDelete: () => void;
}) {
  const keyStyle: React.CSSProperties = {
    flex: "1 0 0",
    height: "47.6px",
    background: "#4A4A4A",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
    color: "white",
    textAlign: "center",
    border: "none",
  };

  return (
    <div
      style={{
        background: "rgba(32,32,32,0.92)",
        width: "100%",
        padding: "6.2px",
        display: "flex",
        flexDirection: "column",
        gap: "7.2px",
      }}
    >
      {KEYBOARD_ROWS.map((row, ri) => (
        <div key={ri} style={{ display: "flex", gap: "6.2px" }}>
          {row.map(({ label, sub }) => (
            <button
              key={label}
              type="button"
              onClick={() => onDigit(label)}
              style={keyStyle}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "25.9px",
                  lineHeight: "31px",
                  display: "block",
                }}
              >
                {label}
              </span>
              {sub && (
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "10.35px",
                    letterSpacing: "2.07px",
                    lineHeight: "12.4px",
                    display: "block",
                  }}
                >
                  {sub}
                </span>
              )}
            </button>
          ))}
        </div>
      ))}
    

      {/* Bottom row: blank / 0 / backspace */}
      <div style={{ display: "flex", gap: "6.2px" }}>
        <div style={{ flex: "1 0 0" }} />
        <button type="button" onClick={() => onDigit("0")} style={keyStyle}>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "25.9px",
              lineHeight: "31px",
              display: "block",
            }}
          >
            0
          </span>
        </button>
        <button
          type="button"
          onClick={onDelete}
          style={{
            flex: "1 0 0",
            height: "47.6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {/* Backspace glyph */}
          <svg width="24" height="18" fill="none" viewBox="0 0 24 18">
            <path
              d="M9 1H22C22.5523 1 23 1.44772 23 2V16C23 16.5523 22.5523 17 22 17H9L1 9L9 1Z"
              stroke="#E7E7E7"
              strokeWidth="1.5"
            />
            <path
              d="M14 6L18 12M18 6L14 12"
              stroke="#E7E7E7"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {/* Spacer between keypad and home indicator */}
      <div style={{ height: "9px", background: "rgba(32,32,32,0.92)" }} />
      {/* Home indicator bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        
      </div>
    </div>
  );
}

function OtpBox({
  digit,
  isActive,
}: {
  digit: string;
  isActive: boolean;
}) {
  return (
    <div
      style={{
        width: "44px",
        height: "44px",
        background: "var(--color-bg-surface)",
        borderRadius: "8px",
        border: `1px solid ${isActive ? "#E3E3E3" : "#2A2A2A"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {isActive && !digit ? (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--color-text-primary)",
            animation: "blink 1s step-start infinite",
          }}
        >
          |
        </span>
      ) : (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--color-text-primary)",
            fontWeight: 400,
          }}
        >
          {digit}
        </span>
      )}
    </div>
  );
}

function VerificationScreen({
  onBack,
  onVerify,
}: {
  onBack: () => void;
  onVerify: () => void;
}) {
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(30);
  const activeIndex = Math.min(code.length, 5);

  React.useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const handleDigit = (d: string) => {
    if (code.length < 6) setCode((c) => c + d);
  };
  const handleDelete = () => setCode((c) => c.slice(0, -1));
  const timer = `00:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="bg-[var(--color-bg-base)] relative size-full">
      {/* Blue ambient glow */}
      <div
        className="absolute flex items-center justify-center size-[1.567px] top-[254.28px]"
        style={{ left: "calc(100% + 127.34px)" }}
      >
        <div className="flex-none rotate-[10.62deg]">
          <div
            className="relative rounded-[212.121px] size-[1.343px]"
            style={{
              background: "rgba(7,7,7,0.01)",
              boxShadow:
                "0px -20px 200px 140px rgba(0,145,255,0.4)",
            }}
          />
        </div>
      </div>

      <StatusBar />
      <BackButton onPress={onBack} />

      {/* Headline */}
      <div className="absolute left-[24px] top-[146px] w-[342px] flex flex-col items-center text-center gap-[16px]">
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "28.8px",
            color: "#FFFFFF",
            width: "100%",
            textAlign: "center",
          }}
        >
          Verify your email
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19.2px",
            color: "var(--color-text-secondary)",
            width: "100%",
            textAlign: "center",
          }}
        >
          Enter the email code we sent to{" "}
          <span style={{ fontWeight: 600, color: "var(--color-text-secondary)" }}>
            barry.smith@gmail.com
          </span>
        </p>
      </div>

      {/* Countdown + OTP boxes + resend */}
      <div className="-translate-x-1/2 absolute left-1/2 top-[269px] flex flex-col gap-[24px] items-center">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "21px",
            color: "#666666",
            textAlign: "center",
          }}
        >
          {timer}
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <OtpBox
              key={i}
              digit={code[i] ?? ""}
              isActive={i === activeIndex && code.length < 6}
            />
          ))}
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            color: "var(--color-text-primary)",
            textAlign: "center",
          }}
        >
          {"I didn't receive a code! Please "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => setSeconds(30)}
          >
            resend
          </span>
        </p>
      </div>

      {/* Verify button — sits above the keyboard */}
      <div className="-translate-x-1/2 absolute left-1/2 top-[468px] w-[290px]">
        <PrimaryButton label="Verify" onClick={onVerify} style={{ width: "290px", height: "48px" }} />
      </div>

      {/* Numeric keyboard + home indicator */}
      <div className="-translate-x-1/2 absolute bottom-0 left-1/2 w-full" style={{ paddingTop: "30px" }}>
        <NumericKeyboard
          onDigit={handleDigit}
          onDelete={handleDelete}
        />
        <div
          style={{
            background: "rgba(32,32,32,0.92)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <div
            style={{
              width: "144px",
              height: "5px",
              borderRadius: "100px",
              background: "#E7E7E7",
            }}
          />
        </div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}

function PhotoUploadScreen({
  name,
  onBack,
  onSkip,
  onUpload,
}: {
  name: string;
  onBack: () => void;
  onSkip: () => void;
  onUpload: () => void;
}) {
  const displayName = name || "Carolina Smith";

  return (
    <div
      style={{
        background: "var(--color-bg-base)",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Blue glow */}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          borderRadius: "50%",
          left: "-42px",
          top: "366px",
          boxShadow: "0 0 200px 140px rgba(0,145,255,0.20)",
          pointerEvents: "none",
        }}
      />
      {/* Green glow */}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          borderRadius: "50%",
          right: "-157px",
          top: "274px",
          boxShadow: "0 0 200px 140px rgba(0,255,145,0.30)",
          pointerEvents: "none",
        }}
      />

      {/* Status bar: left:0, top:0, width:390px, height:50px */}
      <StatusBar />
      <BackButton onPress={onBack} />

      {/* Headline: left:68px, top:146px, width:251px */}
      <p
        style={{
          position: "absolute",
          left: "68px",
          top: "146px",
          width: "251px",
          margin: 0,
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "28.8px",
          color: "#FFFFFF",
        }}
      >
        Upload your photo
      </p>

      {/* Placeholder circle (before-upload state): left:115px, top:229px, 160×160px */}
      <div
        style={{
          position: "absolute",
          left: "115px",
          top: "229px",
          width: "160px",
          height: "160px",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse 111.89% 111.89% at 39.16% 74.10%, #FF00DA 0%, #9D0386 50%, #FF00DA 100%)",
          boxShadow:
            "0px 64px 160px 0px rgba(255, 0, 217, 0.6), 0px 0px 320px 0px rgba(255, 0, 218, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-family-primary)",
            fontWeight: 600,
            fontSize: "64px",
            lineHeight: 1,
            color: "#FFFFFF",
          }}
        >
          {displayName.trim().charAt(0).toUpperCase()}
        </span>
      </div>

      {/* Upload icon button: screen left:236px, top:350px, 48×48px */}
      <button
        type="button"
        onClick={onUpload}
        style={{
          position: "absolute",
          left: "236px",
          top: "350px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "#FFFFFF",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path d={photoSvg.p6e1140} fill="#070707" />
        </svg>
      </button>

      {/* Name + subtext block: left:24px, top:421px, width:342px — inner content centered to 251px */}
      <div
        style={{
          position: "absolute",
          left: "24px",
          top: "421px",
          width: "342px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            width: "251px",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "28.8px",
            color: "#FFFFFF",
          }}
        >
          {displayName}
        </p>
        <p
          style={{
            margin: 0,
            width: "251px",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "16.8px",
            color: "var(--color-text-secondary)",
            whiteSpace: "nowrap",
          }}
        >
          Upload a photo to personalize your account
        </p>
      </div>

      {/* Skip button: left:50px, top:733px, width:290px, height:48px */}
      <button
        type="button"
        onClick={onSkip}
        style={{
          position: "absolute",
          left: "50px",
          top: "733px",
          width: "290px",
          height: "48px",
          borderRadius: "9999px",
          background: "transparent",
          boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "18px",
            color: "var(--color-action-secondary-text)",
          }}
        >
          Skip
        </span>
      </button>

      {/* Home indicator: zone top:823px, 390×21px; bar 144×5px centered */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "831px",
          width: "393px",
          height: "21px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "144px",
            height: "5px",
            borderRadius: "9999px",
            background: "#FFFFFF",
          }}
        />
      </div>
    </div>
  );
}

function PhotoUploadedScreen({
  name,
  onBack,
  onNext,
}: {
  name: string;
  onBack: () => void;
  onNext: () => void;
}) {
  const displayName = name || "Carolina Smith";

  return (
    <div
      style={{
        background: "var(--color-bg-base)",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Blue glow — lower-left */}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          borderRadius: "50%",
          left: "-42px",
          top: "366px",
          boxShadow: "0 0 200px 140px rgba(0,145,255,0.20)",
          pointerEvents: "none",
        }}
      />

      {/* Green glow — right side */}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          borderRadius: "50%",
          right: "-160px",
          top: "274px",
          boxShadow: "0 0 200px 140px rgba(0,255,145,0.30)",
          pointerEvents: "none",
        }}
      />

      <StatusBar />
      <BackButton onPress={onBack} />

      {/* Headline: left:68px, top:146px, width:251px */}
      <p
        style={{
          position: "absolute",
          left: "68px",
          top: "146px",
          width: "251px",
          margin: 0,
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "28.8px",
          color: "#FFFFFF",
        }}
      >
        Upload your photo
      </p>

      {/* Gradient circle: left:115px, top:229px, 160×160px */}
      <div
        style={{
          position: "absolute",
          left: "115px",
          top: "229px",
          width: "160px",
          height: "160px",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse 111.89% 111.89% at 39.16% 74.10%, #FF00DA 0%, #9D0386 50%, #FF00DA 100%)",
          boxShadow:
            "0px 64px 160px 0px rgba(255, 0, 217, 0.6), 0px 0px 320px 0px rgba(255, 0, 218, 0.7)",
        }}
      />

      {/* Photo: left:123px, top:237px, 144×144px — inset ~8px within gradient circle */}
      <div
        style={{
          position: "absolute",
          left: "123px",
          top: "237px",
          width: "144px",
          height: "144px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={womanWithPhoneImg}
          alt={displayName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Pencil button: left:236px, top:331px, 48×48px */}
      <button
        type="button"
        onClick={() => {}}
        style={{
          position: "absolute",
          left: "236px",
          top: "331px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "#FFFFFF",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path d={photo2Svg.p20646d00} fill="#070707" />
        </svg>
      </button>

      {/* Name + subtext: left:24px, top:421px, width:342px; inner 251px centered, 16px gap */}
      <div
        style={{
          position: "absolute",
          left: "24px",
          top: "421px",
          width: "342px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            width: "251px",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "28.8px",
            color: "#FFFFFF",
          }}
        >
          {displayName}
        </p>
        <p
          style={{
            margin: 0,
            width: "251px",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "16.8px",
            color: "var(--color-text-secondary)",
            whiteSpace: "nowrap",
          }}
        >
          Upload a photo to personalize your account
        </p>
      </div>

      {/* Next button: left:50px, top:733px, 290×48px, white fill black text */}
      <button
        type="button"
        onClick={onNext}
        style={{
          position: "absolute",
          left: "50px",
          top: "733px",
          width: "290px",
          height: "48px",
          borderRadius: "9999px",
          background: "var(--color-action-primary-bg)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "18px",
            color: "var(--color-action-primary-text)",
          }}
        >
          Next
        </span>
      </button>

      {/* Home indicator: zone top:823px, 390×21px; bar 144×5px centered */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "831px",
          width: "393px",
          height: "21px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "144px",
            height: "5px",
            borderRadius: "9999px",
            background: "#FFFFFF",
          }}
        />
      </div>
    </div>
  );
}

const SPRING_EASING = "cubic-bezier(0.34, 1.2, 0.4, 1)";

// ─── Persistent Top Nav ───────────────────────────────────────────────────────

const GLOW_TRANSITION = `left 1500ms ${SPRING_EASING}, top 1500ms ${SPRING_EASING}, transform 1500ms ${SPRING_EASING}`;

function CongratsScreen({
  onContinue,
}: {
  onContinue: () => void;
}) {
  const [animated, setAnimated] = useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(t);
  }, []);

  const glowBase: React.CSSProperties = {
    position: "absolute",
    width: "1.25px",
    height: "1.25px",
    borderRadius: "212.12px",
    background: "rgba(7,7,7,0.01)",
    pointerEvents: "none",
    transformOrigin: "top left",
    transition: GLOW_TRANSITION,
  };

  return (
    <div
      style={{
        background: "var(--color-bg-base)",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Glow 1 — pink */}
      <div
        style={{
          ...glowBase,
          left: animated ? "-86.88px" : "218.59px",
          top: animated ? "608.77px" : "865.82px",
          transform: `rotate(${animated ? 109 : 34}deg)`,
          boxShadow:
            "0px -20px 200px 140px rgba(255,0,217,0.20)",
        }}
      />

      {/* Glow 2 — blue */}
      <div
        style={{
          ...glowBase,
          left: animated ? "410.27px" : "70.82px",
          top: animated ? "322.96px" : "311.74px",
          transform: `rotate(${animated ? 109 : 34}deg)`,
          boxShadow:
            "0px -20px 200px 140px rgba(0,145,255,0.20)",
        }}
      />

      {/* Glow 3 — green */}
      <div
        style={{
          ...glowBase,
          left: animated ? "412.33px" : "606.19px",
          top: animated ? "876.57px" : "452.68px",
          transform: `rotate(${animated ? 109 : 34}deg)`,
          boxShadow:
            "0px -20px 200px 140px rgba(0,255,145,0.30)",
        }}
      />

      <StatusBar />

      {/* Verified badge icon — 40×40, centered at top: 235px */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "235px",
          width: "40px",
          height: "40px",
        }}
      >
        <svg
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 36.6667 35"
        >
          <path d={congratsSvg.pb19fc80} fill="#E3E3E3" />
        </svg>
      </div>

      {/* Headline — Titillium Web Regular 24px, 312px wide, top 291px */}
      <p
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "291px",
          width: "312px",
          margin: 0,
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "28.8px",
          color: "var(--color-text-primary)",
        }}
      >
        Congrats! You now have a dWallet account.
      </p>

      {/* Subtext — Open Sans Regular 16px, 182px wide, top 386px */}
      <p
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "386px",
          width: "182px",
          margin: 0,
          textAlign: "center",
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          color: "var(--color-text-primary)",
        }}
      >
        {"You're one step closer to data ownership."}
      </p>

      {/* Let's go button */}
      <button
        type="button"
        onClick={onContinue}
        style={{
          position: "absolute",
          left: "50px",
          bottom: "60px",
          width: "290px",
          height: "48px",
          borderRadius: "9999px",
          background: "var(--color-action-primary-bg)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            color: "var(--color-action-primary-text)",
            letterSpacing: "-0.72px",
          }}
        >
          {"Let's go!"}
        </span>
      </button>

      {/* Home indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "144px",
          height: "5px",
          borderRadius: "9999px",
          background: "#FFFFFF",
        }}
      />
    </div>
  );
}

// ─── Confetti for Dashboard ───────────────────────────────────────────────────

const CONFETTI_COLORS_DASH = [
  "#FF3B77",
  "#FF6B35",
  "#FFD700",
  "#00FF91",
  "#0091FF",
  "#7B2FFF",
  "#FF00D4",
  "#24FF4A",
  "#00C7C7",
  "#FF4A4A",
  "#4AFFB5",
  "#FF8C00",
  "#A855F7",
  "#3B82F6",
  "#EC4899",
  "#F97316",
  "#FBBF24",
  "#34D399",
  "#60A5FA",
  "#F472B6",
];

const DASH_CONFETTI = (() => {
  let s = 98765;
  const rand = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
  return Array.from({ length: 150 }, () => {
    const a = rand() * Math.PI * 2;
    const d = rand() * 145 + 40;
    return {
      x: Math.cos(a) * d,
      y: Math.sin(a) * d,
      sz: rand() * 3.5 + 2,
      c: CONFETTI_COLORS_DASH[
        Math.floor(rand() * CONFETTI_COLORS_DASH.length)
      ],
      o: rand() * 0.55 + 0.45,
    };
  });
})();

// Avatar center within the confetti/avatar wrapper (scroll-content-relative)
const AV_CX = 196.5; // horizontal center of 393px screen
const AV_CY = 163; // 100px paddingTop + 63px (half of 126px avatar)

// ── Stable module-level components for RequestDataScreen ──────────────────────
const RD_TW: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-body-lg-size)",
  fontWeight: "var(--text-body-lg-weight)" as React.CSSProperties["fontWeight"],
  lineHeight: "var(--text-body-lg-line-height)",
};
const RD_OS: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: "var(--text-body-md-weight)" as React.CSSProperties["fontWeight"], fontSize: "var(--text-body-md-size)", lineHeight: "var(--text-body-md-line-height)" };

const RdActiveChevron = ({ rotated }: { rotated?: boolean }) => (
  <div style={{ flexShrink: 0, width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", transform: rotated ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeOpacity="0.4" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const RdStaticChevron = () => (
  <div style={{ flexShrink: 0, width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const RdCatIcon = ({ d }: { d: string }) => (
  <div style={{ flexShrink: 0, width: 24, height: 24 }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={d} fill="var(--color-text-primary)" />
    </svg>
  </div>
);

const RdStaticCatRow = ({ cat }: { cat: { id: string; icon: string; name: string; sub: string } }) => (
  <div style={{ background: "var(--color-bg-overlay)", borderRadius: "var(--radius-lg)", position: "relative", height: 75, boxSizing: "border-box" }}>
    <div aria-hidden style={{ position: "absolute", inset: 0, border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-lg)", pointerEvents: "none" }} />
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-4)", height: "100%", boxSizing: "border-box", gap: "var(--space-2)" }}>
      <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start", flex: 1, minWidth: 0 }}>
        <RdCatIcon d={cat.icon} />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
          <p style={{ ...RD_TW, margin: 0, textAlign: "left", color: "var(--color-text-primary)" }}>{cat.name}</p>
          <p style={{ ...RD_OS, margin: 0, color: "var(--color-text-secondary)", letterSpacing: "-0.15px" }}>{cat.sub}</p>
        </div>
      </div>
      <RdStaticChevron />
    </div>
  </div>
);
// ─────────────────────────────────────────────────────────────────────────────

function RequestDataScreen({ onBack, onSpiritClick, onHome, onMyData, onSavingsPlan, onOffers }: { onBack: () => void; onSpiritClick?: () => void; onHome?: () => void; onMyData?: () => void; onSavingsPlan?: () => void; onOffers?: () => void }) {
  const [rdTravelExpanded, setRdTravelExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const tw = RD_TW;
  const os = RD_OS;

  const BACK = "M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z";
  const SEARCH_CIRCLE = "M8.75 15C12.2018 15 15 12.2018 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15Z";
  const SEARCH_LINE = "M13.1699 13.1696L17.5004 17.5";
  const SEND = "M3.5 19.25V4.75L20.7115 12L3.5 19.25ZM5 17L16.85 12L5 7V10.6923L10.423 12L5 13.3078V17Z";

  const rdTravelCos = [
    { initial: "N",  color: "#820AD1", name: "United",    darkText: false },
    { initial: "I",  color: "#FF6F00", name: "American",  darkText: false },
    { initial: "B",  color: "#EA200D", name: "Alaska",    darkText: false },
    { initial: "BB", color: "#FFD500", name: "Greyhound", darkText: true  },
    { initial: "S",  color: "#EC0000", name: "Spirit",    darkText: true  },
  ];

  // 7 STATIC categories (Tech first, then the rest after Travel) + the 1 interactive
  // Travel card below = 8 total, matching the design's 8-category list/order exactly.
  // Flagged, not changed: the design's "Retail" card is labeled "Retail & Home" / "Company
  // A, Company B, and 2 others", but this file (and 4 other DashCategoryRow call sites
  // elsewhere in App.tsx) consistently use "Retail & Food" / "McDonald's, Starbucks and 2
  // others" — left as-is since renaming a shared category is a content decision, not a
  // restyle, and would create a one-off inconsistency with those other 4 instances.
  const TECH_ICON = "M9.49972 14.5V9.50002H14.4997V14.5H9.49972ZM10.9997 13H12.9997V11H10.9997V13ZM9.24972 20.2693V18.5H7.30747C6.8023 18.5 6.37472 18.325 6.02472 17.975C5.67472 17.625 5.49972 17.1974 5.49972 16.6923V14.75H3.73047V13.25H5.49972V10.75H3.73047V9.25002H5.49972V7.30777C5.49972 6.80261 5.67472 6.37502 6.02472 6.02502C6.37472 5.67502 6.8023 5.50002 7.30747 5.50002H9.24972V3.73077H10.7497V5.50002H13.2497V3.73077H14.7497V5.50002H16.692C17.1971 5.50002 17.6247 5.67502 17.9747 6.02502C18.3247 6.37502 18.4997 6.80261 18.4997 7.30777V9.25002H20.269V10.75H18.4997V13.25H20.269V14.75H18.4997V16.6923C18.4997 17.1974 18.3247 17.625 17.9747 17.975C17.6247 18.325 17.1971 18.5 16.692 18.5H14.7497V20.2693H13.2497V18.5H10.7497V20.2693H9.24972ZM16.692 17C16.769 17 16.8395 16.9679 16.9035 16.9038C16.9676 16.8398 16.9997 16.7693 16.9997 16.6923V7.30777C16.9997 7.23077 16.9676 7.16027 16.9035 7.09627C16.8395 7.03211 16.769 7.00002 16.692 7.00002H7.30747C7.23047 7.00002 7.15997 7.03211 7.09597 7.09627C7.0318 7.16027 6.99972 7.23077 6.99972 7.30777V16.6923C6.99972 16.7693 7.0318 16.8398 7.09597 16.9038C7.15997 16.9679 7.23047 17 7.30747 17H16.692Z";
  const staticCatsBefore = [
    { id: "tech",      icon: TECH_ICON,                           name: "Technology & Social Media", sub: "GM, BYD, Tesla and 8 others" },
  ];
  const staticCatsAfter = [
    { id: "finance",   icon: categorySvgFinance.p3ef00b80,        name: "Finance & Investments",    sub: "Chase, Wells Fargo, and 5 others" },
    { id: "retail",    icon: categorySvgRetail.pc328900,           name: "Retail & Food",            sub: "McDonald's, Starbucks and 2 others" },
    { id: "health",    icon: categorySvgHealth.p7d33bf0,           name: "Health & Wellness",        sub: "Kimberly-Clark and 2 others" },
    { id: "entertain", icon: categorySvgEntertainment.p7298e00,    name: "Entertainment & Gaming",   sub: "Gamestop, Infinity, and 4 others" },
    { id: "insurance", icon: categorySvgInsurance.p36b5c480,       name: "Insurance & Utilities",    sub: "Enel, Raízen, Ultrapar and 6 others" },
    { id: "civic",     icon: categorySvgCivic.p14710000,           name: "Civic & Government",       sub: "CNN, Globo, SBT and 9 others" },
  ];

  const q = searchQuery.toLowerCase();
  const isSearching = searchQuery !== "";
  const filteredTravelCos = isSearching ? rdTravelCos.filter(c => c.name.toLowerCase().includes(q)) : rdTravelCos;
  const showTravel = filteredTravelCos.length > 0;
  const noResults = isSearching && !showTravel;

  React.useEffect(() => {
    if (isSearching && showTravel) setRdTravelExpanded(true);
  }, [isSearching, showTravel]);



  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "var(--color-bg-base)", overflow: "hidden" }}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", width: 472, height: 471, left: -41, top: -129, borderRadius: "9999px", background: "rgba(0, 55.25, 255, 0.70)", opacity: 0.2, filter: "blur(50px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 390, height: 443, left: 0, top: 0, background: "linear-gradient(180deg, rgba(7,7,7,0) 0%, #070707 58%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 338, height: 338, left: -164, top: 989, borderRadius: "50%", background: "#2067D1", opacity: 0.2, filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 338, height: 338, left: 123, top: 1832, borderRadius: "50%", background: "#2067D1", opacity: 0.1, filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 338, height: 338, left: -218, top: 2035, borderRadius: "50%", background: "#2067D1", opacity: 0.2, filter: "blur(120px)", pointerEvents: "none" }} />

      {/* Status bar */}
      <StatusBar />

      {/* Back button — the design's own frame doesn't show a nav row (title now lives in
          the heading below), but onBack still needs a visible trigger, so this keeps
          just the chevron in the same top-left slot other screens use. */}
      <button onClick={onBack} style={{ position: "absolute", top: 70, left: 24, background: "none", border: "none", cursor: "pointer", padding: 0, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 10 }}>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d={BACK} fill="var(--color-text-white)" />
        </svg>
      </button>

      {/* Scrollable content */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "72px", overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }} className="[&::-webkit-scrollbar]:hidden">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", alignItems: "center", paddingTop: 118, paddingBottom: "var(--space-12)" }}>

          {/* Heading — design specifies Open Sans for this title, conflicting with
              CLAUDE.md's Titillium-Web-for-headers rule; following the design here
              per instructions and flagging the conflict rather than silently picking. */}
          <div style={{ width: 342, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "31.79px", lineHeight: "32.42px", color: "white" }}>Request data</p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "var(--text-body-md-size)", lineHeight: "21px", color: "var(--color-text-secondary)" }}>Request data from the companies you have relationships with.</p>
          </div>

          {/* Search */}
          <div style={{ width: "100%", padding: "0 var(--space-6)", boxSizing: "border-box" }}>
            <div style={{ position: "relative", background: "rgba(0, 0, 0, 0.70)", border: "1px solid #232323", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-4)" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                <path d={SEARCH_CIRCLE} stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d={SEARCH_LINE} stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search company or category"
                className="placeholder:text-[#666666]"
                style={{ background: "transparent", border: "none", outline: "none", flex: 1, ...tw, fontWeight: "var(--text-body-lg-weight)" as React.CSSProperties["fontWeight"], fontSize: "var(--text-body-lg-size)", color: "var(--color-text-primary)", caretColor: "var(--color-text-primary)" }}
              />
            </div>
          </div>

          {/* Categories */}
          <div style={{ width: 342, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {noResults ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, paddingTop: 49 }}>
                <div style={{ width: 56, height: 56, flexShrink: 0 }}>
                  <NoResultsIcon />
                </div>
                <div style={{ width: "100%" }}>
                  <NoResultsText />
                </div>
              </div>
            ) : (
              <>
                {/* Static categories before Travel (Tech only) */}
                {!isSearching && staticCatsBefore.map(cat => <RdStaticCatRow key={cat.id} cat={cat} />)}

                {/* Travel & Transportation — interactive */}
                {(!isSearching || showTravel) && (
                  <div style={{ background: "var(--color-bg-overlay)", borderRadius: "var(--radius-lg)", position: "relative" }}>
                    <div aria-hidden style={{ position: "absolute", inset: 0, border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-lg)", pointerEvents: "none", zIndex: 0 }} />
                    <div style={{ display: "flex", flexDirection: "column", padding: "var(--space-4)", gap: 0, position: "relative", zIndex: 1 }}>
                      <button
                        type="button"
                        onClick={() => setRdTravelExpanded(v => !v)}
                        style={{ position: "relative", zIndex: 1, width: "100%", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-2)", padding: 0, height: 43 }}
                      >
                        <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start", flex: 1, minWidth: 0 }}>
                          <RdCatIcon d={categorySvgTravel.p1692f180} />
                          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                            <p style={{ ...tw, margin: 0, textAlign: "left", color: "var(--color-text-primary)" }}>Travel &amp; Transportation</p>
                            <p style={{ ...os, margin: 0, color: "var(--color-text-secondary)", letterSpacing: "-0.15px" }}>United, American, and 3 others</p>
                          </div>
                        </div>
                        <RdActiveChevron rotated={rdTravelExpanded} />
                      </button>
                      <div style={{ display: "grid", gridTemplateRows: rdTravelExpanded ? "1fr" : "0fr", transition: "grid-template-rows 260ms ease" }}>
                        <div style={{ overflow: "hidden" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginTop: "var(--space-3)" }}>
                            {filteredTravelCos.map(co => (
                              <div
                                key={co.name}
                                onClick={co.name === "Spirit" ? onSpiritClick : undefined}
                                style={{ background: "var(--color-bg-overlay)", borderRadius: "var(--radius-sm)", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--space-3)", cursor: co.name === "Spirit" ? "pointer" : "default" }}
                              >
                                <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: co.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-sm-size)", color: co.darkText ? "var(--color-text-inverse)" : "var(--color-text-white)", lineHeight: "20px", letterSpacing: "-0.1504px" }}>{co.initial}</span>
                                  </div>
                                  <span style={{ ...tw, fontWeight: 600, color: "var(--color-text-white)" }}>{co.name}</span>
                                </div>
                                <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                                  <span style={{ ...os, color: "var(--color-text-secondary)" }}>Request</span>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d={SEND} fill="var(--color-text-white)" />
                                  </svg>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Static categories after Travel */}
                {!isSearching && staticCatsAfter.map(cat => <RdStaticCatRow key={cat.id} cat={cat} />)}
              </>
            )}
          </div>

          {/* DrumWave footer */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginTop: 146 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)" }}>
              <DrumWaveLogo size={28} />
              <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 19.478, color: "var(--color-text-white)", letterSpacing: "-0.2922px", lineHeight: "1.2", textAlign: "center" }}>DrumWave</p>
            </div>
            <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 17.043, color: "var(--color-text-secondary)", letterSpacing: "-0.2557px", lineHeight: "1.2", textAlign: "center" }}>Your Life. Your Story. Your Data.</p>
          </div>

        </div>
      </div>

      {/* Persistent bottom nav */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="requests" onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
      </div>
    </div>
  );
}

/* `variant="certificates"` is Figma 9:89701 — the screen the Tesla tile under
   "My relationships" opens in the View Data Certificates flow. It differs from
   the default (step 12) entry in four ways: it opens on the Accepted tab, uses
   that frame's caption, shows the accepted company as a tappable row with a
   chevron instead of a card with a "View certificate" button, drops the
   DrumWave footer, and keeps Home lit in the bottom nav. */
function MyDataRequestsScreen({ onBack, onUploadManually, onSeeHow, onGoToDWCloud, onHome, onMyData, onViewCertificate, onSavingsPlan, onOffers, variant = "default", hasAccepted = true }: { onBack: () => void; onUploadManually?: () => void; onSeeHow?: () => void; onGoToDWCloud?: () => void; onHome?: () => void; onMyData?: () => void; onViewCertificate?: () => void; onSavingsPlan?: () => void; onOffers?: () => void; variant?: "default" | "certificates"; hasAccepted?: boolean }) {
  const isCerts = variant === "certificates";
  const [activeTab, setActiveTab] = useState<"pending" | "accepted" | "rejected">(isCerts ? "accepted" : "pending");

  const tw = {
    fontFamily: "var(--font-display)",
    fontSize: "var(--text-body-lg-size)",
    fontWeight: "var(--text-body-lg-weight)" as React.CSSProperties["fontWeight"],
    lineHeight: "var(--text-body-lg-line-height)",
  };
  const os = { fontFamily: "var(--font-body)", fontWeight: "var(--text-body-lg-weight)" as React.CSSProperties["fontWeight"] };

  const BACK = "M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z";

  const requests = [
    { badge: "23", name: "23andMe",        bg: "#92C646", fg: "#F4F4F4" },
    { badge: "GM", name: "General Motors", bg: "#311FA9", fg: "#FFFFFF" },
    { badge: "VW", name: "Volkswagon",     bg: "#F3F3F3", fg: "#3322B8" },
  ];

  const tabs = [
    { key: "pending",  label: "Pending",  dot: "var(--color-status-pending)" },
    { key: "accepted", label: "Accepted", dot: "var(--color-status-success)" },
    { key: "rejected", label: "Rejected", dot: "var(--color-status-error)" },
  ] as const;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "var(--color-bg-base)", overflow: "hidden" }}>
      {activeTab === "rejected"
        ? <CornerGlow color="#C82628" glowOpacity={0.30} side="top-right" />
        : activeTab === "accepted"
        ? <CornerGlow color="var(--color-glow-green)" glowOpacity={0.15} side="center" />
        : <CornerGlow color="var(--color-status-pending)" glowOpacity={0.22} />}
      <StatusBar />

      {/* Nav */}
      <div style={{ position: "absolute", top: 70, left: "50%", transform: "translateX(-50%)", width: 342, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d={BACK} fill="var(--color-text-white)" />
          </svg>
        </button>
        <p style={{ ...tw, flex: 1, textAlign: "center", fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-white)", margin: 0 }}>My data requests</p>
        <div style={{ width: 24, height: 24, flexShrink: 0 }} />
      </div>

      {/* Scrollable content */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "72px", overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }} className="[&::-webkit-scrollbar]:hidden">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", alignItems: "center", paddingTop: 138, paddingBottom: "var(--space-12)" }}>

          {/* Segmented control */}
          <div style={{ width: 342, height: 48, position: "relative", background: "var(--color-bg-overlay)", borderRadius: "var(--radius-md)" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "var(--space-1)" }}>
              {tabs.map(tab => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      flex: "1 0 0",
                      height: "100%",
                      minWidth: 0,
                      position: "relative",
                      background: isActive ? "var(--color-bg-base)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "var(--radius-xs)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      transition: "background 220ms ease",
                    }}
                  >
                    <div aria-hidden style={{ position: "absolute", inset: 0, border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-xs)", pointerEvents: "none", opacity: isActive ? 1 : 0, transition: "opacity 220ms ease" }} />
                    <div style={{ width: 8, height: 9, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", opacity: isActive ? 1 : 0, transform: isActive ? "scale(1)" : "scale(0.5)", transition: "opacity 220ms ease, transform 220ms ease" }}>
                      <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
                        <circle cx="4" cy="5" r="4" fill={tab.dot} />
                      </svg>
                    </div>
                    <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-body-lg-size)", color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)", whiteSpace: "nowrap", lineHeight: "var(--text-body-lg-line-height)", transition: "color 220ms ease" }}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Heading + caption */}
          <div style={{ width: 342, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <p style={{ ...tw, margin: 0, fontWeight: "var(--text-display-xl-weight)" as React.CSSProperties["fontWeight"], fontSize: "var(--text-display-xl-size)", color: "var(--color-text-primary)", lineHeight: "var(--text-display-xl-line-height)" }}>
              {activeTab === "pending" ? `${requests.length} pending` : activeTab === "accepted" ? (hasAccepted ? "1 accepted" : "0 accepted") : "3 rejected"}
            </p>
            <p style={{ ...os, margin: 0, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-text-secondary)" }}>
              {activeTab === "pending"
                ? "Your requests have been sent and are awaiting a response. You can upload data manually at any time."
                : activeTab === "accepted"
                ? !hasAccepted
                  /* Empty-state copy from the Figma-confirmed accepted state in
                     HomeRequestDataBeforeDspScreen (node 361:52864). */
                  ? "Your matched companies will appear here once a company Accepts your request."
                  : isCerts
                  ? "Companies that accepted your data requests appear here"
                  : "These companies accepted your request. Open a certificate to see the data and its value."
                : "You legally own your data, even if your request has been Rejected."}
            </p>
          </div>

          {/* Cards */}
          <div style={{ width: 342, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {activeTab === "pending" && requests.map(req => (
              <div key={req.name} style={{ background: "var(--color-bg-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                {/* Top row */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--space-4)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: req.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ ...tw, fontWeight: 600, fontSize: 20.57, color: req.fg, lineHeight: 1 }}>{req.badge}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                    <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-primary)", lineHeight: "var(--text-heading-md-line-height)" }}>{req.name}</span>
                    <span style={{ ...os, fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)", lineHeight: "var(--text-body-md-line-height)" }}>Requested on Aug, 2025</span>
                  </div>
                </div>
                {/* Button row */}
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                  <button
                    type="button"
                    onClick={onUploadManually}
                    style={{ height: 44, borderRadius: "var(--radius-xl)", background: "var(--color-action-primary-bg)", border: "none", cursor: "pointer", padding: "var(--space-1) 19px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-action-primary-text)", whiteSpace: "nowrap" }}>Upload manually</span>
                  </button>
                  <button
                    type="button"
                    style={{ height: 44, borderRadius: "var(--radius-xl)", background: "transparent", border: "none", cursor: "pointer", flex: 1, boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-action-secondary-text)" }}>How to upload</span>
                  </button>
                </div>
              </div>
            ))}

            {/* ── Accepted card ─────────────────────────────────────────────
                Composed from the rejected Tesla card below — this tab had no
                cards and no Figma frame. Tesla / "Jan 25, 2026" match the
                VEHICLE_REGISTRATION entry in @/app/data/certificates so the
                card and the certificate it opens agree. Copy is invented. */}
            {activeTab === "accepted" && hasAccepted && (isCerts ? (
              /* Figma 9:89701 — whole row is the tap target, chevron replaces the
                 button. Chevron is the nav BACK glyph mirrored, so the two arrows
                 on this screen stay the same weight. */
              <button
                type="button"
                onClick={onViewCertificate}
                style={{ background: "var(--color-bg-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", border: "none", cursor: "pointer", width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: "var(--space-4)" }}
              >
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#e82127", flexShrink: 0, overflow: "hidden", position: "relative" }}>
                  <img
                    src={teslaMotorsLogo}
                    alt=""
                    style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 18, height: 18, objectFit: "contain" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", flex: 1, minWidth: 0 }}>
                  <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-primary)", lineHeight: "var(--text-heading-md-line-height)" }}>Tesla</span>
                  <span style={{ ...os, fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)", lineHeight: "var(--text-body-md-line-height)" }}>Accepted on Jan 25, 2026</span>
                </div>
                <svg width="7" height="12" viewBox="0 0 12 20" fill="none" style={{ flexShrink: 0, transform: "scaleX(-1)" }}>
                  <path d={BACK} fill="var(--color-text-white)" />
                </svg>
              </button>
            ) : (
              <div style={{ background: "var(--color-bg-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#DD2222", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ ...tw, fontWeight: 600, fontSize: 20.57, color: "var(--color-text-white)", lineHeight: 1 }}>T</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                    <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-primary)", lineHeight: "var(--text-heading-md-line-height)" }}>Tesla</span>
                    <span style={{ ...os, fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)", lineHeight: "var(--text-body-md-line-height)" }}>Accepted on Jan 25, 2026</span>
                  </div>
                </div>
                <button type="button" onClick={onViewCertificate} style={{ height: 44, borderRadius: "var(--radius-xl)", background: "transparent", border: "none", cursor: "pointer", width: "100%", boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-action-secondary-text)" }}>View certificate</span>
                </button>
              </div>
            ))}

            {/* ── Rejected cards ────────────────────────────────────────── */}
            {activeTab === "rejected" && (
              <>
                {/* Tesla */}
                <div style={{ background: "var(--color-bg-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#DD2222", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ ...tw, fontWeight: 600, fontSize: 20.57, color: "var(--color-text-white)", lineHeight: 1 }}>T</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                      <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-primary)", lineHeight: "var(--text-heading-md-line-height)" }}>Tesla</span>
                      <span style={{ ...os, fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)", lineHeight: "var(--text-body-md-line-height)" }}>Uploaded on Nov, 2025</span>
                    </div>
                  </div>
                  <button type="button" onClick={onGoToDWCloud} style={{ height: 44, borderRadius: "var(--radius-xl)", background: "transparent", border: "none", cursor: "pointer", width: "100%", boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-action-secondary-text)" }}>Go to dWCloud</span>
                  </button>
                </div>

                {/* Nubank */}
                <div style={{ background: "var(--color-bg-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#820AD1", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ ...tw, fontWeight: 600, fontSize: 20.57, color: "var(--color-text-white)", lineHeight: 1 }}>N</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                      <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-primary)", lineHeight: "var(--text-heading-md-line-height)" }}>Nubank</span>
                      <span style={{ ...os, fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)", lineHeight: "var(--text-body-md-line-height)" }}>Declined on Sept, 2025</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-2)" }}>
                    <button type="button" onClick={onUploadManually} style={{ height: 44, borderRadius: "var(--radius-xl)", background: "var(--color-action-primary-bg)", border: "none", cursor: "pointer", padding: "var(--space-1) 19px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-action-primary-text)", whiteSpace: "nowrap" }}>Upload manually</span>
                    </button>
                    <button type="button" onClick={onSeeHow} style={{ height: 44, borderRadius: "var(--radius-xl)", background: "transparent", border: "none", cursor: "pointer", flex: 1, boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-action-secondary-text)" }}>See how</span>
                    </button>
                  </div>
                </div>

                {/* Bradesco */}
                <div style={{ background: "var(--color-bg-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#EA200D", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ ...tw, fontWeight: 600, fontSize: 20.57, color: "var(--color-text-white)", lineHeight: 1 }}>B</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                      <span style={{ ...tw, fontWeight: 600, fontSize: "var(--text-heading-md-size)", color: "var(--color-text-primary)", lineHeight: "var(--text-heading-md-line-height)" }}>Bradesco</span>
                      <span style={{ ...os, fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)", lineHeight: "var(--text-body-md-line-height)" }}>Declined on Sept, 2025</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-2)" }}>
                    <button type="button" onClick={onUploadManually} style={{ height: 44, borderRadius: "var(--radius-xl)", background: "var(--color-action-primary-bg)", border: "none", cursor: "pointer", padding: "var(--space-1) 19px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-action-primary-text)", whiteSpace: "nowrap" }}>Upload manually</span>
                    </button>
                    <button type="button" onClick={onSeeHow} style={{ height: 44, borderRadius: "var(--radius-xl)", background: "transparent", border: "none", cursor: "pointer", flex: 1, boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "var(--text-body-lg-line-height)", color: "var(--color-action-secondary-text)" }}>See how</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ── Rejected-only extended content ─────────────────────────── */}
          {activeTab === "rejected" && (
            <>
              {/* What happens next? */}


            </>
          )}

          {/* DrumWave footer — not in Figma 9:89701, which ends at the card */}
          {!isCerts && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginTop: "var(--space-8)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)" }}>
                <DrumWaveLogo size={28} />
                <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 19.478, color: "var(--color-text-white)", letterSpacing: "-0.2922px", lineHeight: "1.2", textAlign: "center" }}>DrumWave</p>
              </div>
              <p style={{ ...tw, margin: 0, fontWeight: 400, fontSize: 17.043, color: "var(--color-text-secondary)", letterSpacing: "-0.2557px", lineHeight: "1.2", textAlign: "center" }}>Your Life. Your Story. Your Data.</p>
            </div>
          )}

        </div>
      </div>

      {/* Persistent bottom nav */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab={isCerts ? "home" : null} onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
      </div>
    </div>
  );
}

// ── Stable module-level components for DashboardScreen ───────────────────────
const DashChevronIcon = ({ rotated }: { rotated?: boolean }) => (
  <div style={{ flexShrink: 0, transform: rotated ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.66667" />
    </svg>
  </div>
);

const DashCategoryIcon = ({ path }: { path: string }) => (
  <div style={{ flexShrink: 0, width: 24, height: 24 }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={path} fill="var(--color-text-primary)" />
    </svg>
  </div>
);

type DashCo = { initial: string; color: string; name: string; darkText?: boolean };

const DashCategoryRow = ({ iconPath, name, sub, expandable, expanded, onToggle, companies }: {
  iconPath: string; name: string; sub: string;
  expandable?: boolean; expanded?: boolean; onToggle?: () => void;
  companies?: DashCo[];
}) => (
  <div style={{ background: "var(--color-bg-overlay)", borderRadius: "var(--radius-lg)", position: "relative" }}>
    <div aria-hidden style={{ position: "absolute", inset: 0, border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-lg)", pointerEvents: "none", zIndex: 0 }} />
    <button
      type="button"
      onClick={onToggle}
      style={{ position: "relative", zIndex: 1, width: "100%", background: "transparent", border: "none", cursor: expandable ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", gap: "12px" }}
    >
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", flex: 1, minWidth: 0 }}>
        <DashCategoryIcon path={iconPath} />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "left" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-body-lg-size)", lineHeight: "1.2", color: "var(--color-text-primary)" }}>{name}</p>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "var(--text-body-md-size)", lineHeight: "20px", color: "var(--color-text-secondary)", letterSpacing: "-0.15px" }}>{sub}</p>
        </div>
      </div>
      <DashChevronIcon rotated={expanded} />
    </button>
    {companies && (
      <div style={{ display: "grid", gridTemplateRows: expanded ? "1fr" : "0fr", transition: "grid-template-rows 260ms ease", position: "relative", zIndex: 1 }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{ padding: "8px 16px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
            {companies.map((co) => (
              <div key={co.name} style={{ background: "var(--color-bg-overlay)", borderRadius: 10, height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: co.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, color: co.darkText ? "#161616" : "white", lineHeight: "20px", letterSpacing: "-0.1504px" }}>{co.initial}</span>
                  </div>
                  <span style={{ fontFamily: "var(--mobile-subcategory-medium-font-family)", fontWeight: 600, fontSize: "16px", color: "#FFFFFF", lineHeight: "1.2" }}>{co.name}</span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 16, color: "var(--color-text-secondary)" }}>Request</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3.5 19.25V4.75L20.7115 12L3.5 19.25ZM5 17L16.85 12L5 7V10.6923L10.423 12L5 13.3078V17Z" fill="white" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);
// ─────────────────────────────────────────────────────────────────────────────

function DashboardScreen({ name, onRequestData, onViewRequests, onApplyForDsp, onAccountSettings, onHome }: { name: string; onRequestData: () => void; onViewRequests?: () => void; onApplyForDsp?: () => void; onAccountSettings?: () => void; onHome?: () => void }) {
  const [travelExpanded, setTravelExpanded] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(
    null,
  );

  const faqs = [
    { q: "How does my Personal dWallet work?", multiline: false },
    { q: "How does a data request work?", multiline: false },
    { q: "What's a data certificate and how is\ndata value captured?", multiline: true },
    { q: "What's a Data Savings Plan?", multiline: false },
  ];

  const travelCos = [
    { initial: "N",  color: "#820AD1", name: "United",    darkText: false },
    { initial: "I",  color: "#FF6F00", name: "American",  darkText: false },
    { initial: "B",  color: "#EA200D", name: "Alaska",    darkText: false },
    { initial: "BB", color: "#FFD500", name: "Greyhound", darkText: true  },
    { initial: "S",  color: "#EC0000", name: "Spirit",    darkText: true  },
  ];

  const collapsedCats = [
    {
      e: "🏥",
      name: "Healthcare & Medical",
      sub: "Hospitals, Pharmacies, Clinics",
    },
    {
      e: "🏦",
      name: "Finance & Banking",
      sub: "Banks, Credit Cards, Loans",
    },
    {
      e: "📱",
      name: "Technology & Social Media",
      sub: "Apps, Platforms, Streaming",
    },
    {
      e: "🛒",
      name: "Retail & Shopping",
      sub: "E-commerce, Grocery, Fashion",
    },
  ];

  const tw: React.CSSProperties = {
    fontFamily: "var(--font-display)",
  };
  const os: React.CSSProperties = {
    fontFamily: "var(--font-body)",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--color-bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Ambient blue glows (atmospheric, scatter across full height) */}
      {[
        { l: 40, t: 260, b: "rgba(0,55,255,0.13)", r: 110 },
        { l: 320, t: 580, b: "rgba(32,103,209,0.10)", r: 90 },
        { l: 80, t: 950, b: "rgba(0,55,255,0.10)", r: 100 },
        { l: 310, t: 1400, b: "rgba(32,103,209,0.12)", r: 85 },
        { l: 50, t: 1900, b: "rgba(0,55,255,0.09)", r: 95 },
      ].map((g, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            left: g.l,
            top: g.t,
            boxShadow: `0 0 ${g.r}px ${Math.round(g.r * 0.65)}px ${g.b}`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      <StatusBar />

      {/* Scrollable body */}
<div
  style={{
    position: "absolute",
    top: 0,
    paddingTop: "117px",
    left: 0,
    right: 0,
    bottom: "72px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  }}
  className="[&::-webkit-scrollbar]:hidden"
>
        {/* Confetti + Avatar block */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "360px",
          }}
        >
          {/* Rings + gradient ring + photo halo (matches "Approved + not joined") */}
          <ProfileHalo centerTop={170} />
          {/* Company badges — positions from reference, sizes 28px.
             left/top are the badge's top-left = centerX - 14, centerY - 14. */}
         <MastercardLogo size={17} style={{ position: "absolute", left: "224.3px", top: "39.8px", zIndex: 4, pointerEvents: "none" }} />
<VivoLogo       size={17} style={{ position: "absolute", left: "126.2px", top: "54.2px", zIndex: 4, pointerEvents: "none" }} />
<ClaroLogo      size={17} style={{ position: "absolute", left: "82.2px",  top: "82.8px", zIndex: 4, pointerEvents: "none" }} />
<NubankLogo     size={17} style={{ position: "absolute", left: "307.1px", top: "125.6px", zIndex: 4, pointerEvents: "none" }} />

          {/* Title + subtitle */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "281px",
              width: "342px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                ...tw,
                margin: 0,
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "28.8px",
                color: "var(--color-text-primary)",
              }}
            >
              My data requests
            </p>
            <p
              style={{
                ...os,
                margin: "8px 0 0",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--color-text-secondary)",
              }}
            >
              Request data from the companies you have
              relationships with
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
            padding: "16px",
          }}
        >
          {[
            { n: "7", l: "Pending" },
            { n: "0", l: "Accepted" },
            { n: "0", l: "Rejected" },
          ].map((s, i) => (
            <React.Fragment key={s.l}>
              {i > 0 && (
                <div
                  style={{
                    width: "1px",
                    height: "52px",
                    background: "#3D3D3D",
                    flexShrink: 0,
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13px",
                }}
              >
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: s.n !== "0" ? 600 : 200,
                    fontSize: "40px",
                    lineHeight: "48px",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {s.n}
                </p>
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16.8px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {s.l}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Action buttons */}
        <div
          style={{
            marginTop: "24px",
            paddingLeft: "24px",
            paddingRight: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <button
            type="button"
            onClick={onRequestData}
            style={{
              height: "44px",
              borderRadius: "500px",
              padding: "10px 24px",
              background: "var(--color-action-primary-bg)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ ...tw, fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-primary-text)" }}>
              Request more data
            </span>
          </button>
          <button
            type="button"
            onClick={onViewRequests}
            style={{
              height: "44px",
              borderRadius: "500px",
              padding: "10px 24px",
              background: "transparent",
              border: "none",
              boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ ...tw, fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-secondary-text)" }}>
              View my requests
            </span>
          </button>
        </div>

        {/* What happens next? */}
        <div style={{ marginTop: "36px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              padding: "0 24px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            What happens next?
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              padding: "0 24px 4px",
              scrollbarWidth: "none",
            }}
          >
            {/* Card 1 — featured */}
            <div
              style={{
                flexShrink: 0,
                width: "265px",
                height: "184px",
                borderRadius: "var(--radius-lg)",
                background:
                  "linear-gradient(90deg, rgba(18,53,193,0.40) 0%, rgba(43,100,225,0) 100%), #181818",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                padding: "24px 63px 31px 23px",
                boxSizing: "border-box",
              }}
            >
              {/* Photo — right side, with fade overlays */}
              <img
                src={dataSavingsPhoto}
                alt=""
                style={{
                  position: "absolute",
                  width: "212px",
                  height: "188px",
                  right: 0,
                  top: 0,
                }}
              />

              {/* Text + button */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--mobile-heading-small-font-family)",
                      fontWeight: "var(--mobile-heading-small-font-weight)" as React.CSSProperties["fontWeight"],
                      fontSize: "var(--mobile-heading-small-font-size)",
                      lineHeight: "var(--mobile-heading-small-line-height)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Apply for a Data Savings Plan
                  </p>
                  <p
                    style={{
                      ...tw,
                      margin: 0,
                      opacity: 0.8,
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Contribute data. Earn offers.
                  </p>
                </div>
                <button
                  onClick={onApplyForDsp}
                  style={{
                    background: "var(--color-action-primary-bg)",
                    border: "none",
                    borderRadius: "60px",
                    padding: "6px 19px",
                    height: "40px",
                    width: "151px",
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "18px",
                    color: "var(--color-action-primary-text)",
                    alignSelf: "flex-start",
                  }}
                >
                  Apply now
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div
              style={{
                flexShrink: 0,
                width: "265px",
                height: "184px",
                borderRadius: "var(--radius-lg)",
                background: "#181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "24px",
                textAlign: "left",
              }}
            >
              <img
                src={lockPng}
                alt="lock"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
              <p
                style={{
                  ...tw,
                  margin: 0,
                  marginTop: "24px",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                }}
              >
                Receive your Data Savings Plan
              </p>
              <p
                style={{
                  ...os,
                  margin: 0,
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                Once approved, you'll receive an email and link to view your plan.
              </p>
            </div>
            {/* Card 3 */}
            <div
              style={{
                flexShrink: 0,
                width: "265px",
                height: "184px",
                borderRadius: "var(--radius-lg)",
                background: "#181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "24px",
                textAlign: "left",
              }}
            >
              <img
                src={lockPng}
                alt="lock"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
              <p
                style={{
                  ...tw,
                  margin: 0,
                  marginTop: "24px",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                }}
              >
                Get offers and cash benefits
              </p>
              <p
                style={{
                  ...os,
                  margin: 0,
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                Earn real rewards when companies receive your
                consented data
              </p>
            </div>
          </div>
        </div>

        {/* Recently added */}
        <div style={{ marginTop: "28px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              padding: "0 24px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            Recently added
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              padding: "0 24px 4px",
              scrollbarWidth: "none",
            }}
          >
            {/* Nubank */}
            <div
              style={{
                flexShrink: 0,
                width: "206px",
                height: "186px",
                borderRadius: "25px",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.12) 100%), #181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                padding: "20px",
              }}
            >
              {/* Top row: purple N badge + Banks label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    background: "#820ad1",
                    borderRadius: "50px",
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      ...tw,
                      fontWeight: 600,
                      fontSize: "13px",
                      lineHeight: 1.2,
                      color: "#FFFFFF",
                    }}
                  >
                    N
                  </span>
                </div>
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.2,
                    opacity: 0.7,
                    color: "#FFFFFF",
                  }}
                >
                  Banks
                </p>
              </div>
              {/* Title */}
              <p
                style={{
                  ...tw,
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Nubank
              </p>
              {/* Request button (full width) */}
              <button
                type="button"
                onClick={onRequestData}
                style={{
                  background: "var(--color-action-primary-bg)",
                  border: "none",
                  borderRadius: "41px",
                  height: "37px",
                  width: "100%",
                  padding: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...tw,
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: 1.2,
                  color: "var(--color-action-primary-text)",
                }}
              >
                Request
              </button>
            </div>
            {/* Bradesco */}
<div
  style={{
    flexShrink: 0,
    width: "206px",
    height: "186px",
    borderRadius: "25px",
    background: "#151515",
    position: "relative",
  }}
>
  <div
    style={{
      position: "absolute",
      left: "19px",
      top: "14px",
      width: "171px",
      height: "155px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "29px",
    }}
  >
    {/* Badge + category */}
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "#EA200D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ ...tw, fontWeight: 600, fontSize: "13px", lineHeight: "15px", color: "#FFFFFF" }}>
          B
        </span>
      </div>
      <span style={{ ...tw, opacity: 0.7, fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#FFFFFF" }}>
        Financial
      </span>
    </div>

    {/* Company name */}
    <p style={{ ...tw, margin: 0, fontWeight: 600, fontSize: "25px", lineHeight: "30px", color: "#FFFFFF", textAlign: "center" }}>
      Bradesco
    </p>

    {/* Request button */}
    <button
      type="button"
      onClick={onRequestData}
      style={{
        alignSelf: "stretch",
        height: "37px",
        borderRadius: "41px",
        background: "var(--color-action-primary-bg)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...tw,
        fontWeight: 600,
        fontSize: "18px",
        color: "var(--color-action-primary-text)",
      }}
    >
      Request
    </button>
  </div>
</div>
          </div>
        </div>

        {/* All companies */}
        <div style={{ marginTop: "28px", padding: "0 24px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            All companies
          </p>
          {/* Search bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--color-bg-overlay)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "12px",
              padding: "12px 16px",
              marginBottom: "12px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="#666"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5L21 21"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                ...os,
                fontSize: "14px",
                color: "#666666",
              }}
            >
              Search company or category
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <DashCategoryRow iconPath={categorySvgTech.p813af00} name="Technology & Social Media" sub="GM, BYD, Tesla and 8 others" />
                  <DashCategoryRow iconPath={categorySvgTravel.p1692f180} name="Travel & Transportation" sub="United, American, and 3 others" expandable expanded={travelExpanded} onToggle={() => setTravelExpanded(v => !v)} companies={travelCos} />
                  <DashCategoryRow iconPath={categorySvgFinance.p3ef00b80} name="Finance & Investments" sub="Chase, Wells Fargo, and 5 others" />
                  <DashCategoryRow iconPath={categorySvgRetail.pc328900} name="Retail & Food" sub="McDonald's, Starbucks and 2 others" />
                  <DashCategoryRow iconPath={categorySvgHealth.p7d33bf0} name="Health & Wellness" sub="Kimberly-Clark and 2 others" />
                  <DashCategoryRow iconPath={categorySvgEntertainment.p7298e00} name="Entertainment & Gaming" sub="Gamestop, Infinity, and 4 others" />
                  <DashCategoryRow iconPath={categorySvgInsurance.p36b5c480} name="Insurance & Utilities" sub="Enel, Raízen, Ultrapar and 6 others" />
                  <DashCategoryRow iconPath={categorySvgCivic.p14710000} name="Civic & Government" sub="CNN, Globo, SBT and 9 others" />
          </div>
        </div>

        {/* FAQs */}
        <div style={{ marginTop: "32px", padding: "0 24px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            FAQs
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {faqs.map((item, i) => (
              <button
                key={i}
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                style={{
                  width: "100%",
                  minHeight: "60px",
                  background: "#181818",
                  border: "none",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  cursor: "pointer",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: "8px", width: "100%", height: "100%" }}>
                  <span
                    style={{
                      fontFamily: "var(--mobile-heading-small-font-family)",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "1.2",
                      color: "var(--color-text-primary)",
                      flex: 1,
                      whiteSpace: item.multiline ? "pre-wrap" : "nowrap",
                    }}
                  >
                    {item.q}
                  </span>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: expandedFaq === i ? "rotate(180deg)" : "none",
                      transition: "transform 200ms",
                    }}
                  >
                    <svg width="12" height="8" viewBox="0 0 12 7.4" fill="none">
                      <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#E3E3E3" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "48px", paddingBottom: "48px", width: "100%" }}>
          <DrumWaveFooter />
        </div>
      </div>

      {/* Persistent top nav */}
      <TopNav name={name} onAccountSettings={onAccountSettings} />

      {/* Persistent bottom nav */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="home" onHome={onHome} onMyData={onRequestData} />
      </div>
    </div>
  );
}

function DashboardScreenNoDsp({ name, onRequestData, onViewRequests, onApplyForDsp, onAccountSettings, onLearnMoreOffers, onHome, onSavingsPlan, onOffers }: { name: string; onRequestData: () => void; onViewRequests?: () => void; onApplyForDsp?: () => void; onAccountSettings?: () => void; onLearnMoreOffers?: () => void; onHome?: () => void; onSavingsPlan?: () => void; onOffers?: () => void }) {
  const [travelExpanded, setTravelExpanded] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(
    null,
  );

  const faqs = [
    { q: "How does my Personal dWallet work?", multiline: false },
    { q: "How does a data request work?", multiline: false },
    { q: "What's a data certificate and how is\ndata value captured?", multiline: true },
    { q: "What's a Data Savings Plan?", multiline: false },
  ];

  const travelCos = [
    { initial: "N",  color: "#820AD1", name: "United",    darkText: false },
    { initial: "I",  color: "#FF6F00", name: "American",  darkText: false },
    { initial: "B",  color: "#EA200D", name: "Alaska",    darkText: false },
    { initial: "BB", color: "#FFD500", name: "Greyhound", darkText: true  },
    { initial: "S",  color: "#EC0000", name: "Spirit",    darkText: true  },
  ];

  const collapsedCats = [
    {
      e: "🏥",
      name: "Healthcare & Medical",
      sub: "Hospitals, Pharmacies, Clinics",
    },
    {
      e: "🏦",
      name: "Finance & Banking",
      sub: "Banks, Credit Cards, Loans",
    },
    {
      e: "📱",
      name: "Technology & Social Media",
      sub: "Apps, Platforms, Streaming",
    },
    {
      e: "🛒",
      name: "Retail & Shopping",
      sub: "E-commerce, Grocery, Fashion",
    },
  ];

  const tw: React.CSSProperties = {
    fontFamily: "var(--font-display)",
  };
  const os: React.CSSProperties = {
    fontFamily: "var(--font-body)",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--color-bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Ambient blue glows (atmospheric, scatter across full height) */}
      {[
        { l: 40, t: 260, b: "rgba(0,55,255,0.13)", r: 110 },
        { l: 320, t: 580, b: "rgba(32,103,209,0.10)", r: 90 },
        { l: 80, t: 950, b: "rgba(0,55,255,0.10)", r: 100 },
        { l: 310, t: 1400, b: "rgba(32,103,209,0.12)", r: 85 },
        { l: 50, t: 1900, b: "rgba(0,55,255,0.09)", r: 95 },
      ].map((g, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            left: g.l,
            top: g.t,
            boxShadow: `0 0 ${g.r}px ${Math.round(g.r * 0.65)}px ${g.b}`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      <StatusBar />

      {/* Scrollable body */}
<div
  style={{
    position: "absolute",
    top: 0,
    paddingTop: "117px",
    left: 0,
    right: 0,
    bottom: "72px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  }}
  className="[&::-webkit-scrollbar]:hidden"
>
        {/* Confetti + Avatar block */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "360px",
          }}
        >
          {/* Rings + gradient ring + photo halo (matches "Approved + not joined") */}
          <ProfileHalo centerTop={170} />
          {/* Company badges — positions from reference, sizes 28px.
             left/top are the badge's top-left = centerX - 14, centerY - 14. */}
         <MastercardLogo size={17} style={{ position: "absolute", left: "224.3px", top: "39.8px", zIndex: 4, pointerEvents: "none" }} />
<VivoLogo       size={17} style={{ position: "absolute", left: "126.2px", top: "54.2px", zIndex: 4, pointerEvents: "none" }} />
<ClaroLogo      size={17} style={{ position: "absolute", left: "82.2px",  top: "82.8px", zIndex: 4, pointerEvents: "none" }} />
<NubankLogo     size={17} style={{ position: "absolute", left: "307.1px", top: "125.6px", zIndex: 4, pointerEvents: "none" }} />

          {/* Title + subtitle */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "281px",
              width: "342px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                ...tw,
                margin: 0,
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "28.8px",
                color: "var(--color-text-primary)",
              }}
            >
              My data requests
            </p>
            <p
              style={{
                ...os,
                margin: "8px 0 0",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--color-text-secondary)",
              }}
            >
              Request data from the companies you have
              relationships with
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
            padding: "16px",
          }}
        >
          {[
            { n: "7", l: "Pending" },
            { n: "0", l: "Accepted" },
            { n: "0", l: "Rejected" },
          ].map((s, i) => (
            <React.Fragment key={s.l}>
              {i > 0 && (
                <div
                  style={{
                    width: "1px",
                    height: "52px",
                    background: "#3D3D3D",
                    flexShrink: 0,
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13px",
                }}
              >
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: s.n !== "0" ? 600 : 200,
                    fontSize: "40px",
                    lineHeight: "48px",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {s.n}
                </p>
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16.8px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {s.l}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Action buttons */}
        <div
          style={{
            marginTop: "24px",
            paddingLeft: "24px",
            paddingRight: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <button
            type="button"
            onClick={onRequestData}
            style={{
              height: "44px",
              borderRadius: "500px",
              padding: "10px 24px",
              background: "var(--color-action-primary-bg)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ ...tw, fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-primary-text)" }}>
              Request more data
            </span>
          </button>
          <button
            type="button"
            onClick={onViewRequests}
            style={{
              height: "44px",
              borderRadius: "500px",
              padding: "10px 24px",
              background: "transparent",
              border: "none",
              boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ ...tw, fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-secondary-text)" }}>
              View my requests
            </span>
          </button>
        </div>

        {/* What happens next? */}
        <div style={{ marginTop: "36px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              padding: "0 24px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            What happens next?
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              padding: "0 24px 4px",
              scrollbarWidth: "none",
            }}
          >
            {/* Card 1 — featured (shared with MyDataSavingsScreen) */}
            <ApplyForDspCard onApply={onApplyForDsp} />
            {/* Card 2 */}
            <div
              style={{
                flexShrink: 0,
                width: "265px",
                height: "184px",
                borderRadius: "var(--radius-lg)",
                background: "#181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "24px",
                textAlign: "left",
              }}
            >
              <img
                src={lockPng}
                alt="lock"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
              <p
                style={{
                  ...tw,
                  margin: 0,
                  marginTop: "24px",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                }}
              >
                Receive your Data Savings Plan
              </p>
              <p
                style={{
                  ...os,
                  margin: 0,
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                Once approved, you'll receive an email and link to view your plan.
              </p>
            </div>
            {/* Card 3 */}
            <div
              style={{
                flexShrink: 0,
                width: "265px",
                height: "184px",
                borderRadius: "var(--radius-lg)",
                background: "#181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "24px",
                textAlign: "left",
              }}
            >
              <img
                src={lockPng}
                alt="lock"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
              <p
                style={{
                  ...tw,
                  margin: 0,
                  marginTop: "24px",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                }}
              >
                Get offers and cash benefits
              </p>
              <p
                style={{
                  ...os,
                  margin: 0,
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                Earn real rewards when companies receive your
                consented data
              </p>
            </div>
          </div>
        </div>

        {/* Recently added */}
        <div style={{ marginTop: "28px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              padding: "0 24px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            Recently added
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              padding: "0 24px 4px",
              scrollbarWidth: "none",
            }}
          >
            {/* Nubank */}
            <div
              style={{
                flexShrink: 0,
                width: "206px",
                height: "186px",
                borderRadius: "25px",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.12) 100%), #181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                padding: "20px",
              }}
            >
              {/* Top row: purple N badge + Banks label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    background: "#820ad1",
                    borderRadius: "50px",
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      ...tw,
                      fontWeight: 600,
                      fontSize: "13px",
                      lineHeight: 1.2,
                      color: "#FFFFFF",
                    }}
                  >
                    N
                  </span>
                </div>
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.2,
                    opacity: 0.7,
                    color: "#FFFFFF",
                  }}
                >
                  Banks
                </p>
              </div>
              {/* Title */}
              <p
                style={{
                  ...tw,
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Nubank
              </p>
              {/* Request button (full width) */}
              <button
                type="button"
                onClick={onRequestData}
                style={{
                  background: "var(--color-action-primary-bg)",
                  border: "none",
                  borderRadius: "41px",
                  height: "37px",
                  width: "100%",
                  padding: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...tw,
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: 1.2,
                  color: "var(--color-action-primary-text)",
                }}
              >
                Request
              </button>
            </div>
            {/* Bradesco */}
<div
  style={{
    flexShrink: 0,
    width: "206px",
    height: "186px",
    borderRadius: "25px",
    background: "#151515",
    position: "relative",
  }}
>
  <div
    style={{
      position: "absolute",
      left: "19px",
      top: "14px",
      width: "171px",
      height: "155px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "29px",
    }}
  >
    {/* Badge + category */}
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "#EA200D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ ...tw, fontWeight: 600, fontSize: "13px", lineHeight: "15px", color: "#FFFFFF" }}>
          B
        </span>
      </div>
      <span style={{ ...tw, opacity: 0.7, fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#FFFFFF" }}>
        Financial
      </span>
    </div>

    {/* Company name */}
    <p style={{ ...tw, margin: 0, fontWeight: 600, fontSize: "25px", lineHeight: "30px", color: "#FFFFFF", textAlign: "center" }}>
      Bradesco
    </p>

    {/* Request button */}
    <button
      type="button"
      onClick={onRequestData}
      style={{
        alignSelf: "stretch",
        height: "37px",
        borderRadius: "41px",
        background: "var(--color-action-primary-bg)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...tw,
        fontWeight: 600,
        fontSize: "18px",
        color: "var(--color-action-primary-text)",
      }}
    >
      Request
    </button>
  </div>
</div>
          </div>
        </div>

        {/* All companies */}
        <div style={{ marginTop: "28px", padding: "0 24px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            All companies
          </p>
          {/* Search bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--color-bg-overlay)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "12px",
              padding: "12px 16px",
              marginBottom: "12px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="#666"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5L21 21"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                ...os,
                fontSize: "14px",
                color: "#666666",
              }}
            >
              Search company or category
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <DashCategoryRow iconPath={categorySvgTech.p813af00} name="Technology & Social Media" sub="GM, BYD, Tesla and 8 others" />
                  <DashCategoryRow iconPath={categorySvgTravel.p1692f180} name="Travel & Transportation" sub="United, American, and 3 others" expandable expanded={travelExpanded} onToggle={() => setTravelExpanded(v => !v)} companies={travelCos} />
                  <DashCategoryRow iconPath={categorySvgFinance.p3ef00b80} name="Finance & Investments" sub="Chase, Wells Fargo, and 5 others" />
                  <DashCategoryRow iconPath={categorySvgRetail.pc328900} name="Retail & Food" sub="McDonald's, Starbucks and 2 others" />
                  <DashCategoryRow iconPath={categorySvgHealth.p7d33bf0} name="Health & Wellness" sub="Kimberly-Clark and 2 others" />
                  <DashCategoryRow iconPath={categorySvgEntertainment.p7298e00} name="Entertainment & Gaming" sub="Gamestop, Infinity, and 4 others" />
                  <DashCategoryRow iconPath={categorySvgInsurance.p36b5c480} name="Insurance & Utilities" sub="Enel, Raízen, Ultrapar and 6 others" />
                  <DashCategoryRow iconPath={categorySvgCivic.p14710000} name="Civic & Government" sub="CNN, Globo, SBT and 9 others" />
          </div>
        </div>

        {/* FAQs */}
        <div style={{ marginTop: "32px", padding: "0 24px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            FAQs
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {faqs.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === 3 && onLearnMoreOffers) {
                    onLearnMoreOffers();
                  } else {
                    setExpandedFaq(expandedFaq === i ? null : i);
                  }
                }}
                style={{
                  width: "100%",
                  minHeight: "60px",
                  background: "#181818",
                  border: "none",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  cursor: "pointer",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: "8px", width: "100%", height: "100%" }}>
                  <span
                    style={{
                      fontFamily: "var(--mobile-heading-small-font-family)",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "1.2",
                      color: "var(--color-text-primary)",
                      flex: 1,
                      whiteSpace: item.multiline ? "pre-wrap" : "nowrap",
                    }}
                  >
                    {item.q}
                  </span>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: expandedFaq === i ? "rotate(180deg)" : "none",
                      transition: "transform 200ms",
                    }}
                  >
                    {i === 3 && onLearnMoreOffers ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6L11 6M7 2L11 6L7 10" stroke="#E3E3E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="12" height="8" viewBox="0 0 12 7.4" fill="none">
                        <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#E3E3E3" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "48px", paddingBottom: "48px", width: "100%" }}>
          <DrumWaveFooter />
        </div>
      </div>

      {/* Persistent top nav */}
      <TopNav name={name} onAccountSettings={onAccountSettings} />

      {/* Persistent bottom nav */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav onHome={onHome} onMyData={onRequestData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
      </div>
    </div>
  );
}

function DashboardScreenEnrolledNoPlan({ name, onRequestData, onViewRequests, onApplyForDsp, onAccountSettings, onContinueEnrollment, onViewAllPlans, onHome, onSavingsPlan, onOffers }: { name: string; onRequestData: () => void; onViewRequests?: () => void; onApplyForDsp?: () => void; onAccountSettings?: () => void; onContinueEnrollment?: () => void; onViewAllPlans?: () => void; onHome?: () => void; onSavingsPlan?: () => void; onOffers?: () => void }) {
  const [snackbarDismissed, setSnackbarDismissed] = useState(false);
  const [travelExpanded, setTravelExpanded] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(
    null,
  );

  const faqs = [
    { q: "How does my Personal dWallet work?", multiline: false },
    { q: "How does a data request work?", multiline: false },
    { q: "What's a data certificate and how is\ndata value captured?", multiline: true },
    { q: "What's a Data Savings Plan?", multiline: false },
  ];

  const travelCos = [
    { initial: "N",  color: "#820AD1", name: "United",    darkText: false },
    { initial: "I",  color: "#FF6F00", name: "American",  darkText: false },
    { initial: "B",  color: "#EA200D", name: "Alaska",    darkText: false },
    { initial: "BB", color: "#FFD500", name: "Greyhound", darkText: true  },
    { initial: "S",  color: "#EC0000", name: "Spirit",    darkText: true  },
  ];

  const collapsedCats = [
    {
      e: "🏥",
      name: "Healthcare & Medical",
      sub: "Hospitals, Pharmacies, Clinics",
    },
    {
      e: "🏦",
      name: "Finance & Banking",
      sub: "Banks, Credit Cards, Loans",
    },
    {
      e: "📱",
      name: "Technology & Social Media",
      sub: "Apps, Platforms, Streaming",
    },
    {
      e: "🛒",
      name: "Retail & Shopping",
      sub: "E-commerce, Grocery, Fashion",
    },
  ];

  // "Choose a plan" cards. Design uses placehold.co images for the company
  // logo and artwork photo — not substituted; logo uses the same
  // initial-in-a-circle placeholder convention as CompanyAvatar elsewhere.
  const plans = [
    // Kaiser now uses the real Figma hero (photo + wash + glow + logo row), matching
    // the same card on the DSP page. Best Buy keeps the placeholder treatment until
    // its artwork is provided, so `heroPhoto` acts as the variant switch below.
    {
      initial: "K", company: "Kaiser Permanente", category: "Health", planName: "dSavings Health",
      heroTitle: "Plan name B", heroPhoto: kaiserHeroPhoto, logo: kaiserLogo,
    },
    { initial: "BB", company: "Best Buy", category: "Gaming", planName: "dSavings Gaming" },
  ] as Array<{
    initial: string; company: string; category: string; planName: string;
    heroTitle?: string; heroPhoto?: string; logo?: string;
  }>;

  const tw: React.CSSProperties = {
    fontFamily: "var(--font-display)",
  };
  const os: React.CSSProperties = {
    fontFamily: "var(--font-body)",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--color-bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Ambient blue glows (atmospheric, scatter across full height) */}
      {[
        { l: 40, t: 260, b: "rgba(0,55,255,0.13)", r: 110 },
        { l: 320, t: 580, b: "rgba(32,103,209,0.10)", r: 90 },
        { l: 80, t: 950, b: "rgba(0,55,255,0.10)", r: 100 },
        { l: 310, t: 1400, b: "rgba(32,103,209,0.12)", r: 85 },
        { l: 50, t: 1900, b: "rgba(0,55,255,0.09)", r: 95 },
      ].map((g, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            left: g.l,
            top: g.t,
            boxShadow: `0 0 ${g.r}px ${Math.round(g.r * 0.65)}px ${g.b}`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      <StatusBar />
      <TopNav name={name} onAccountSettings={onAccountSettings} />

      {/* Scrollable body */}
<div
  style={{
    position: "absolute",
    top: 0,
    paddingTop: "117px",
    left: 0,
    right: 0,
    bottom: "72px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  }}
  className="[&::-webkit-scrollbar]:hidden"
>
        {/* Confetti + Avatar block */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "360px",
          }}
        >
          {/* Rings + gradient ring + photo halo (matches "Approved + not joined") */}
          <ProfileHalo centerTop={170} />
          {/* Company badges — positions from reference, sizes 28px.
             left/top are the badge's top-left = centerX - 14, centerY - 14. */}
         <MastercardLogo size={17} style={{ position: "absolute", left: "224.3px", top: "39.8px", zIndex: 4, pointerEvents: "none" }} />
<VivoLogo       size={17} style={{ position: "absolute", left: "126.2px", top: "54.2px", zIndex: 4, pointerEvents: "none" }} />
<ClaroLogo      size={17} style={{ position: "absolute", left: "82.2px",  top: "82.8px", zIndex: 4, pointerEvents: "none" }} />
<NubankLogo     size={17} style={{ position: "absolute", left: "307.1px", top: "125.6px", zIndex: 4, pointerEvents: "none" }} />

          {/* Title + subtitle */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "281px",
              width: "342px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                ...tw,
                margin: 0,
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "28.8px",
                color: "var(--color-text-primary)",
              }}
            >
              My data requests
            </p>
            <p
              style={{
                ...os,
                margin: "8px 0 0",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--color-text-secondary)",
              }}
            >
              Request data from the companies you have
              relationships with
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
            padding: "16px",
          }}
        >
          {[
            { n: "7", l: "Pending" },
            { n: "2", l: "Accepted" },
            { n: "0", l: "Rejected" },
          ].map((s, i) => (
            <React.Fragment key={s.l}>
              {i > 0 && (
                <div
                  style={{
                    width: "1px",
                    height: "52px",
                    background: "#3D3D3D",
                    flexShrink: 0,
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13px",
                }}
              >
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: s.n === "7" ? 600 : 275,
                    fontSize: "40px",
                    lineHeight: "48px",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {s.n}
                </p>
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16.8px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {s.l}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Action buttons */}
        <div
          style={{
            marginTop: "24px",
            paddingLeft: "24px",
            paddingRight: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <button
            type="button"
            onClick={onRequestData}
            style={{
              height: "44px",
              borderRadius: "500px",
              padding: "10px 24px",
              background: "var(--color-action-primary-bg)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ ...tw, fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-primary-text)" }}>
              Request more data
            </span>
          </button>
          <button
            type="button"
            onClick={onViewRequests}
            style={{
              height: "44px",
              borderRadius: "500px",
              padding: "10px 24px",
              background: "transparent",
              border: "none",
              boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ ...tw, fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-secondary-text)" }}>
              View my requests
            </span>
          </button>
        </div>

        {/* Choose a plan. Buttons are decorative — no prop exists on this
            component for plan navigation. "What happens next?" and "Offers"
            were removed per instruction; onContinueEnrollment is now an
            unused optional prop (still passed in from App.tsx, no call
            site left in this component — flagged, not removed, since the
            prop itself wasn't asked to be dropped from the signature). */}
        <div style={{ marginTop: "36px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              padding: "0 24px",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "28.8px",
              color: "var(--color-text-primary)",
            }}
          >
            Choose a plan
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              padding: "0 24px 4px",
              scrollbarWidth: "none",
            }}
            className="[&::-webkit-scrollbar]:hidden"
          >
            {plans.map((plan) => (
              <div
                key={plan.company}
                style={{
                  flexShrink: 0,
                  width: "342px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "24px",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.10)",
                  padding: "16px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {/* Logo + company name */}
                <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#414141",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ ...tw, fontWeight: 600, fontSize: "13px", color: "#FFFFFF" }}>{plan.initial}</span>
                  </div>
                  <span style={{ ...os, fontWeight: 700, fontSize: "16px", lineHeight: "24px", color: "#FFFFFF" }}>{plan.company}</span>
                </div>

                {/* Artwork card. Two variants: plans with a real Figma hero (heroPhoto)
                    get the photo + wash + glow + wordmark + logo row; the rest keep the
                    original flat-green placeholder so they're visually unchanged. */}
                <div
                  style={{
                    width: "100%",
                    height: "194px",
                    borderRadius: "16px",
                    background: "#17A530",
                    boxShadow: plan.heroPhoto ? "inset 0 0 0 1px rgba(255,255,255,0.4)" : "inset 0 0 0 1px #FFFFFF",
                    boxSizing: "border-box",
                    position: "relative",
                    overflow: "hidden",
                    padding: "20px",
                  }}
                >
                  {plan.heroPhoto && (
                    <>
                      <img
                        src={plan.heroPhoto}
                        alt=""
                        style={{ position: "absolute", left: "-73.3px", top: "-13.81px", width: "388.71px", height: "259.171px", objectFit: "cover", opacity: 0.9, pointerEvents: "none" }}
                      />
                      <div style={{ position: "absolute", left: "-99.84px", right: "-30.29px", top: "-11.98px", height: "219.649px", background: "linear-gradient(-47.03deg, rgba(123,182,203,0.5) 26.413%, rgba(5,111,23,0.5) 103.65%)", pointerEvents: "none" }} />
                      <div style={{ position: "absolute", left: "-181.3px", top: "-177.63px", width: "351.2px", height: "367.93px", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                        <div style={{ transform: "rotate(-51.64deg)", flex: "none" }}>
                          <div style={{ width: "307.101px", height: "204.837px", background: "#35C237", filter: "blur(84.199px)", borderRadius: "9999px" }} />
                        </div>
                      </div>
                    </>
                  )}
                  <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
                    {plan.heroPhoto && (
                      <img src={dSavingsWordmark} alt="dSavings" style={{ display: "block", width: "38.712px", height: "10.543px", marginBottom: "4px" }} />
                    )}
                    <p style={{ ...tw, margin: 0, fontWeight: 600, fontSize: "28px", lineHeight: plan.heroPhoto ? "1.5" : "42px", color: "#FFFFFF" }}>
                      {plan.heroTitle ?? plan.category}
                    </p>
                    {plan.heroPhoto ? (
                      <>
                        <p style={{ ...os, position: "absolute", left: 0, bottom: 0, margin: 0, fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "var(--color-text-primary)" }}>
                          23,391 members
                        </p>
                        <div style={{ position: "absolute", right: 0, bottom: 0, display: "flex", alignItems: "center", gap: "12px" }}>
                          <DrumWaveLogo size={26} />
                          <div style={{ width: "1px", height: "20.458px", background: "rgba(255,255,255,0.4)" }} />
                          <div style={{ width: "26px", height: "26px", borderRadius: "100px", overflow: "hidden", flexShrink: 0 }}>
                            <img src={plan.logo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <p style={{ ...os, margin: "0", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "var(--color-text-primary)" }}>
                          23,391 members
                        </p>
                        <div style={{ position: "absolute", right: 0, top: 0 }}>
                          <DrumWaveLogo size={26} />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Plan name + description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p style={{ ...tw, margin: 0, fontWeight: 600, fontSize: "17.01px", lineHeight: "20.41px", color: "var(--color-text-primary)" }}>
                    {plan.planName}
                  </p>
                  <p style={{ ...os, margin: 0, fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "var(--color-text-disabled, #666666)" }}>
                    Lorem ipsum dolor sit amet consectetur. Vitae viverra sit enim volutpat malesuada.
                  </p>
                </div>

                {/* Active through / Members / Fee */}
                <div style={{ display: "flex", alignItems: "center", gap: "38px" }}>
                  <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ ...os, opacity: 0.7, fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#FFFFFF" }}>Active through</span>
                    <span style={{ ...os, fontWeight: 700, fontSize: "14px", lineHeight: "21px", color: "#FFFFFF" }}>Sept 30, 2027</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ ...os, opacity: 0.7, fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#FFFFFF" }}>Members</span>
                    <span style={{ ...os, fontWeight: 700, fontSize: "14px", lineHeight: "21px", color: "#FFFFFF" }}>498</span>
                  </div>
                  <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ ...os, opacity: 0.7, fontWeight: 400, fontSize: "12px", lineHeight: "18px", color: "#FFFFFF" }}>Fee</span>
                    <span style={{ ...os, fontWeight: 700, fontSize: "14px", lineHeight: "21px", color: "#FFFFFF" }}>No fees</span>
                  </div>
                </div>

                {/* Buttons — decorative, no prop exists for plan navigation */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div
                    style={{
                      height: "44px",
                      borderRadius: "500px",
                      boxShadow: "inset 0 0 0 1px #FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ ...tw, fontWeight: 600, fontSize: "18px", color: "var(--color-text-primary)" }}>View details</span>
                  </div>
                  <button
                    type="button"
                    onClick={onViewAllPlans}
                    style={{
                      height: "44px",
                      borderRadius: "500px",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ ...tw, fontWeight: 600, fontSize: "18px", color: "var(--color-text-primary)" }}>View all plans</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Request more data (design retitles "Recently added") */}
        <div style={{ marginTop: "28px" }}>
          <div style={{ padding: "0 24px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p
              style={{
                ...tw,
                margin: 0,
                fontWeight: 400,
                fontSize: "24px",
                color: "var(--color-text-primary)",
              }}
            >
              Request more data
            </p>
            <p
              style={{
                ...os,
                margin: 0,
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "21px",
                color: "var(--color-text-secondary)",
              }}
            >
              Requesting data from additional companies can increase your account&rsquo;s value and unlock new offers.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              padding: "0 24px 4px",
              scrollbarWidth: "none",
            }}
          >
            {/* Nubank */}
            <div
              style={{
                flexShrink: 0,
                width: "206px",
                height: "186px",
                borderRadius: "25px",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.12) 100%), #181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                padding: "20px",
              }}
            >
              {/* Top row: purple N badge + Banks label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    background: "#820ad1",
                    borderRadius: "50px",
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      ...tw,
                      fontWeight: 600,
                      fontSize: "13px",
                      lineHeight: 1.2,
                      color: "#FFFFFF",
                    }}
                  >
                    N
                  </span>
                </div>
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.2,
                    opacity: 0.7,
                    color: "#FFFFFF",
                  }}
                >
                  Banks
                </p>
              </div>
              {/* Title */}
              <p
                style={{
                  ...tw,
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Nubank
              </p>
              {/* Request button (full width) */}
              <button
                type="button"
                onClick={onRequestData}
                style={{
                  background: "var(--color-action-primary-bg)",
                  border: "none",
                  borderRadius: "41px",
                  height: "37px",
                  width: "100%",
                  padding: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...tw,
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: 1.2,
                  color: "var(--color-action-primary-text)",
                }}
              >
                Request
              </button>
            </div>
            {/* Bradesco */}
<div
  style={{
    flexShrink: 0,
    width: "206px",
    height: "186px",
    borderRadius: "25px",
    background: "#151515",
    position: "relative",
  }}
>
  <div
    style={{
      position: "absolute",
      left: "19px",
      top: "14px",
      width: "171px",
      height: "155px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "29px",
    }}
  >
    {/* Badge + category */}
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "#EA200D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ ...tw, fontWeight: 600, fontSize: "13px", lineHeight: "15px", color: "#FFFFFF" }}>
          B
        </span>
      </div>
      <span style={{ ...tw, opacity: 0.7, fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#FFFFFF" }}>
        Financial
      </span>
    </div>

    {/* Company name */}
    <p style={{ ...tw, margin: 0, fontWeight: 600, fontSize: "25px", lineHeight: "30px", color: "#FFFFFF", textAlign: "center" }}>
      Bradesco
    </p>

    {/* Request button */}
    <button
      type="button"
      onClick={onRequestData}
      style={{
        alignSelf: "stretch",
        height: "37px",
        borderRadius: "41px",
        background: "var(--color-action-primary-bg)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...tw,
        fontWeight: 600,
        fontSize: "18px",
        color: "var(--color-action-primary-text)",
      }}
    >
      Request
    </button>
  </div>
</div>
          </div>
        </div>

        {/* All companies */}
        <div style={{ marginTop: "28px", padding: "0 24px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            All companies
          </p>
          {/* Search bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(0, 0, 0, 0.70)",
              border: "1px solid #232323",
              borderRadius: "16px",
              padding: "16px",
              marginBottom: "12px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="#666"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5L21 21"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                ...os,
                fontSize: "14px",
                color: "#666666",
              }}
            >
              Search company or category
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <DashCategoryRow iconPath={categorySvgTech.p813af00} name="Technology & Social Media" sub="GM, BYD, Tesla and 8 others" />
                  <DashCategoryRow iconPath={categorySvgTravel.p1692f180} name="Travel & Transportation" sub="United, American, and 3 others" expandable expanded={travelExpanded} onToggle={() => setTravelExpanded(v => !v)} companies={travelCos} />
                  <DashCategoryRow iconPath={categorySvgFinance.p3ef00b80} name="Finance & Investments" sub="Chase, Wells Fargo, and 5 others" />
                  <DashCategoryRow iconPath={categorySvgRetail.pc328900} name="Retail & Food" sub="McDonald's, Starbucks and 2 others" />
                  <DashCategoryRow iconPath={categorySvgHealth.p7d33bf0} name="Health & Wellness" sub="Kimberly-Clark and 2 others" />
                  <DashCategoryRow iconPath={categorySvgEntertainment.p7298e00} name="Entertainment & Gaming" sub="Gamestop, Infinity, and 4 others" />
                  <DashCategoryRow iconPath={categorySvgInsurance.p36b5c480} name="Insurance & Utilities" sub="Enel, Raízen, Ultrapar and 6 others" />
                  <DashCategoryRow iconPath={categorySvgCivic.p14710000} name="Civic & Government" sub="CNN, Globo, SBT and 9 others" />
          </div>
        </div>

        {/* FAQs */}
        <div style={{ marginTop: "32px", padding: "0 24px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            FAQs
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {faqs.map((item, i) => (
              <button
                key={i}
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                style={{
                  width: "100%",
                  minHeight: "60px",
                  background: "#181818",
                  border: "none",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  cursor: "pointer",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: "8px", width: "100%", height: "100%" }}>
                  <span
                    style={{
                      fontFamily: "var(--mobile-heading-small-font-family)",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "1.2",
                      color: "var(--color-text-primary)",
                      flex: 1,
                      whiteSpace: item.multiline ? "pre-wrap" : "nowrap",
                    }}
                  >
                    {item.q}
                  </span>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: expandedFaq === i ? "rotate(180deg)" : "none",
                      transition: "transform 200ms",
                    }}
                  >
                    <svg width="12" height="8" viewBox="0 0 12 7.4" fill="none">
                      <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#E3E3E3" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "48px", paddingBottom: "48px", width: "100%" }}>
          <DrumWaveFooter />
        </div>
      </div>

      {/* Snackbar — replaces the welcome pill in this state */}
      {!snackbarDismissed && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: "24px",
            width: "342px",
            minHeight: "69px",
            background: "#2A2A2A",
            borderRadius: "4px",
            outline: "1px solid #3D3D3D",
            outlineOffset: "-1px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            padding: "16px 12px",
            boxSizing: "border-box",
            zIndex: 100,
          }}
        >
          {/* Red error bar */}
          <div
            style={{
              flexShrink: 0,
              width: "4px",
              height: "28px",
              background: "#DD5050",
            }}
          />

          {/* Message + inline chevron */}
          <p
            style={{
              ...tw,
              flex: "1 1 0",
              margin: 0,
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.2px",
              color: "#FFFFFF",
            }}
          >
            Finish the Data Savings Plan enrollment to earn $1 cash
            <span
              style={{
                display: "inline-block",
                verticalAlign: "-2px",
                marginLeft: "8px",
              }}
            >
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
                <path
                  d="M1 1L5.5 5.5L1 10"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </p>

          {/* Close */}
          <button
            type="button"
            onClick={() => setSnackbarDismissed(true)}
            style={{
              flexShrink: 0,
              background: "none",
              border: "none",
              padding: "4px",
              cursor: "pointer",
              lineHeight: 0,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 1L9 9M9 1L1 9"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Persistent bottom nav */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="home" onHome={onHome} onMyData={onRequestData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
      </div>
    </div>
  );
}

function DashboardScreenOneDsp({ name, onRequestData, onViewRequests, onApplyForDsp, onAccountSettings, onHome, onSavingsPlan, onOffers }: { name: string; onRequestData: () => void; onViewRequests?: () => void; onApplyForDsp?: () => void; onAccountSettings?: () => void; onHome?: () => void; onSavingsPlan?: () => void; onOffers?: () => void }) {
  const [travelExpanded, setTravelExpanded] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(
    null,
  );

  const faqs = [
    { q: "How does my Personal dWallet work?", multiline: false },
    { q: "How does a data request work?", multiline: false },
    { q: "What's a data certificate and how is\ndata value captured?", multiline: true },
    { q: "What's a Data Savings Plan?", multiline: false },
  ];

  const travelCos = [
    { initial: "N",  color: "#820AD1", name: "United",    darkText: false },
    { initial: "I",  color: "#FF6F00", name: "American",  darkText: false },
    { initial: "B",  color: "#EA200D", name: "Alaska",    darkText: false },
    { initial: "BB", color: "#FFD500", name: "Greyhound", darkText: true  },
    { initial: "S",  color: "#EC0000", name: "Spirit",    darkText: true  },
  ];

  const collapsedCats = [
    {
      e: "🏥",
      name: "Healthcare & Medical",
      sub: "Hospitals, Pharmacies, Clinics",
    },
    {
      e: "🏦",
      name: "Finance & Banking",
      sub: "Banks, Credit Cards, Loans",
    },
    {
      e: "📱",
      name: "Technology & Social Media",
      sub: "Apps, Platforms, Streaming",
    },
    {
      e: "🛒",
      name: "Retail & Shopping",
      sub: "E-commerce, Grocery, Fashion",
    },
  ];

  const tw: React.CSSProperties = {
    fontFamily: "var(--font-display)",
  };
  const os: React.CSSProperties = {
    fontFamily: "var(--font-body)",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--color-bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Ambient blue glows (atmospheric, scatter across full height) */}
      {[
        { l: 40, t: 260, b: "rgba(0,55,255,0.13)", r: 110 },
        { l: 320, t: 580, b: "rgba(32,103,209,0.10)", r: 90 },
        { l: 80, t: 950, b: "rgba(0,55,255,0.10)", r: 100 },
        { l: 310, t: 1400, b: "rgba(32,103,209,0.12)", r: 85 },
        { l: 50, t: 1900, b: "rgba(0,55,255,0.09)", r: 95 },
      ].map((g, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            left: g.l,
            top: g.t,
            boxShadow: `0 0 ${g.r}px ${Math.round(g.r * 0.65)}px ${g.b}`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      <StatusBar />

      {/* Scrollable body */}
<div
  style={{
    position: "absolute",
    top: 0,
    paddingTop: "117px",
    left: 0,
    right: 0,
    bottom: "72px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  }}
  className="[&::-webkit-scrollbar]:hidden"
>
        {/* Confetti + Avatar block */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "360px",
          }}
        >
          {/* Rings + gradient ring + photo halo (matches "Approved + not joined") */}
          <ProfileHalo centerTop={170} />
          {/* Company badges — positions from reference, sizes 28px.
             left/top are the badge's top-left = centerX - 14, centerY - 14. */}
         <MastercardLogo size={17} style={{ position: "absolute", left: "224.3px", top: "39.8px", zIndex: 4, pointerEvents: "none" }} />
<VivoLogo       size={17} style={{ position: "absolute", left: "126.2px", top: "54.2px", zIndex: 4, pointerEvents: "none" }} />
<ClaroLogo      size={17} style={{ position: "absolute", left: "82.2px",  top: "82.8px", zIndex: 4, pointerEvents: "none" }} />
<NubankLogo     size={17} style={{ position: "absolute", left: "307.1px", top: "125.6px", zIndex: 4, pointerEvents: "none" }} />

          {/* Title + subtitle */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "281px",
              width: "342px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                ...tw,
                margin: 0,
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "28.8px",
                color: "var(--color-text-primary)",
              }}
            >
              My data requests
            </p>
            <p
              style={{
                ...os,
                margin: "8px 0 0",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "1.4",
                color: "var(--color-text-secondary)",
              }}
            >
              Request data from the companies you have
              relationships with
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
            padding: "16px",
          }}
        >
          {[
            { n: "7", l: "Pending" },
            { n: "0", l: "Accepted" },
            { n: "0", l: "Rejected" },
          ].map((s, i) => (
            <React.Fragment key={s.l}>
              {i > 0 && (
                <div
                  style={{
                    width: "1px",
                    height: "52px",
                    background: "#3D3D3D",
                    flexShrink: 0,
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13px",
                }}
              >
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: s.n !== "0" ? 600 : 200,
                    fontSize: "40px",
                    lineHeight: "48px",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {s.n}
                </p>
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16.8px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {s.l}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Action buttons */}
        <div
          style={{
            marginTop: "24px",
            paddingLeft: "24px",
            paddingRight: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <button
            type="button"
            onClick={onRequestData}
            style={{
              height: "44px",
              borderRadius: "500px",
              padding: "10px 24px",
              background: "var(--color-action-primary-bg)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ ...tw, fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-primary-text)" }}>
              Request more data
            </span>
          </button>
          <button
            type="button"
            onClick={onViewRequests}
            style={{
              height: "44px",
              borderRadius: "500px",
              padding: "10px 24px",
              background: "transparent",
              border: "none",
              boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ ...tw, fontWeight: 600, fontSize: "18px", lineHeight: "18px", color: "var(--color-action-secondary-text)" }}>
              View my requests
            </span>
          </button>
        </div>

        {/* What happens next? */}
        <div style={{ marginTop: "36px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              padding: "0 24px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            What happens next?
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              padding: "0 24px 4px",
              scrollbarWidth: "none",
            }}
          >
            {/* Card 1 — featured */}
            <div
              style={{
                flexShrink: 0,
                width: "265px",
                height: "184px",
                borderRadius: "var(--radius-lg)",
                background:
                  "linear-gradient(90deg, rgba(18,53,193,0.40) 0%, rgba(43,100,225,0) 100%), #181818",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                padding: "24px 63px 31px 23px",
                boxSizing: "border-box",
              }}
            >
              {/* Photo — right side, with fade overlays */}
              <img
                src={dataSavingsPhoto}
                alt=""
                style={{
                  position: "absolute",
                  width: "212px",
                  height: "188px",
                  right: 0,
                  top: 0,
                }}
              />

              {/* Text + button */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--mobile-heading-small-font-family)",
                      fontWeight: "var(--mobile-heading-small-font-weight)" as React.CSSProperties["fontWeight"],
                      fontSize: "var(--mobile-heading-small-font-size)",
                      lineHeight: "var(--mobile-heading-small-line-height)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Apply for a Data Savings Plan
                  </p>
                  <p
                    style={{
                      ...tw,
                      margin: 0,
                      opacity: 0.8,
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Contribute data. Earn offers.
                  </p>
                </div>
                <button
                  onClick={onApplyForDsp}
                  style={{
                    background: "var(--color-action-primary-bg)",
                    border: "none",
                    borderRadius: "60px",
                    padding: "6px 19px",
                    height: "40px",
                    width: "151px",
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "18px",
                    color: "var(--color-action-primary-text)",
                    alignSelf: "flex-start",
                  }}
                >
                  Apply now
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div
              style={{
                flexShrink: 0,
                width: "265px",
                height: "184px",
                borderRadius: "var(--radius-lg)",
                background: "#181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "24px",
                textAlign: "left",
              }}
            >
              <img
                src={lockPng}
                alt="lock"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
              <p
                style={{
                  ...tw,
                  margin: 0,
                  marginTop: "24px",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                }}
              >
                Receive your Data Savings Plan
              </p>
              <p
                style={{
                  ...os,
                  margin: 0,
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                Once approved, you'll receive an email and link to view your plan.
              </p>
            </div>
            {/* Card 3 */}
            <div
              style={{
                flexShrink: 0,
                width: "265px",
                height: "184px",
                borderRadius: "var(--radius-lg)",
                background: "#181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "24px",
                textAlign: "left",
              }}
            >
              <img
                src={lockPng}
                alt="lock"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
              <p
                style={{
                  ...tw,
                  margin: 0,
                  marginTop: "24px",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                }}
              >
                Get offers and cash benefits
              </p>
              <p
                style={{
                  ...os,
                  margin: 0,
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                Earn real rewards when companies receive your
                consented data
              </p>
            </div>
          </div>
        </div>

        {/* Recently added */}
        <div style={{ marginTop: "28px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              padding: "0 24px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            Recently added
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              padding: "0 24px 4px",
              scrollbarWidth: "none",
            }}
          >
            {/* Nubank */}
            <div
              style={{
                flexShrink: 0,
                width: "206px",
                height: "186px",
                borderRadius: "25px",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.12) 100%), #181818",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                padding: "20px",
              }}
            >
              {/* Top row: purple N badge + Banks label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    background: "#820ad1",
                    borderRadius: "50px",
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      ...tw,
                      fontWeight: 600,
                      fontSize: "13px",
                      lineHeight: 1.2,
                      color: "#FFFFFF",
                    }}
                  >
                    N
                  </span>
                </div>
                <p
                  style={{
                    ...tw,
                    margin: 0,
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.2,
                    opacity: 0.7,
                    color: "#FFFFFF",
                  }}
                >
                  Banks
                </p>
              </div>
              {/* Title */}
              <p
                style={{
                  ...tw,
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Nubank
              </p>
              {/* Request button (full width) */}
              <button
                type="button"
                onClick={onRequestData}
                style={{
                  background: "var(--color-action-primary-bg)",
                  border: "none",
                  borderRadius: "41px",
                  height: "37px",
                  width: "100%",
                  padding: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...tw,
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: 1.2,
                  color: "var(--color-action-primary-text)",
                }}
              >
                Request
              </button>
            </div>
            {/* Bradesco */}
<div
  style={{
    flexShrink: 0,
    width: "206px",
    height: "186px",
    borderRadius: "25px",
    background: "#151515",
    position: "relative",
  }}
>
  <div
    style={{
      position: "absolute",
      left: "19px",
      top: "14px",
      width: "171px",
      height: "155px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "29px",
    }}
  >
    {/* Badge + category */}
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "#EA200D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ ...tw, fontWeight: 600, fontSize: "13px", lineHeight: "15px", color: "#FFFFFF" }}>
          B
        </span>
      </div>
      <span style={{ ...tw, opacity: 0.7, fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#FFFFFF" }}>
        Financial
      </span>
    </div>

    {/* Company name */}
    <p style={{ ...tw, margin: 0, fontWeight: 600, fontSize: "25px", lineHeight: "30px", color: "#FFFFFF", textAlign: "center" }}>
      Bradesco
    </p>

    {/* Request button */}
    <button
      type="button"
      onClick={onRequestData}
      style={{
        alignSelf: "stretch",
        height: "37px",
        borderRadius: "41px",
        background: "var(--color-action-primary-bg)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...tw,
        fontWeight: 600,
        fontSize: "18px",
        color: "var(--color-action-primary-text)",
      }}
    >
      Request
    </button>
  </div>
</div>
          </div>
        </div>

        {/* All companies */}
        <div style={{ marginTop: "28px", padding: "0 24px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            All companies
          </p>
          {/* Search bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--color-bg-overlay)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "12px",
              padding: "12px 16px",
              marginBottom: "12px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="#666"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5L21 21"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                ...os,
                fontSize: "14px",
                color: "#666666",
              }}
            >
              Search company or category
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <DashCategoryRow iconPath={categorySvgTech.p813af00} name="Technology & Social Media" sub="GM, BYD, Tesla and 8 others" />
                  <DashCategoryRow iconPath={categorySvgTravel.p1692f180} name="Travel & Transportation" sub="United, American, and 3 others" expandable expanded={travelExpanded} onToggle={() => setTravelExpanded(v => !v)} companies={travelCos} />
                  <DashCategoryRow iconPath={categorySvgFinance.p3ef00b80} name="Finance & Investments" sub="Chase, Wells Fargo, and 5 others" />
                  <DashCategoryRow iconPath={categorySvgRetail.pc328900} name="Retail & Food" sub="McDonald's, Starbucks and 2 others" />
                  <DashCategoryRow iconPath={categorySvgHealth.p7d33bf0} name="Health & Wellness" sub="Kimberly-Clark and 2 others" />
                  <DashCategoryRow iconPath={categorySvgEntertainment.p7298e00} name="Entertainment & Gaming" sub="Gamestop, Infinity, and 4 others" />
                  <DashCategoryRow iconPath={categorySvgInsurance.p36b5c480} name="Insurance & Utilities" sub="Enel, Raízen, Ultrapar and 6 others" />
                  <DashCategoryRow iconPath={categorySvgCivic.p14710000} name="Civic & Government" sub="CNN, Globo, SBT and 9 others" />
          </div>
        </div>

        {/* FAQs */}
        <div style={{ marginTop: "32px", padding: "0 24px" }}>
          <p
            style={{
              ...tw,
              margin: "0 0 16px",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-primary)",
            }}
          >
            FAQs
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {faqs.map((item, i) => (
              <button
                key={i}
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                style={{
                  width: "100%",
                  minHeight: "60px",
                  background: "#181818",
                  border: "none",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  cursor: "pointer",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: "8px", width: "100%", height: "100%" }}>
                  <span
                    style={{
                      fontFamily: "var(--mobile-heading-small-font-family)",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "1.2",
                      color: "var(--color-text-primary)",
                      flex: 1,
                      whiteSpace: item.multiline ? "pre-wrap" : "nowrap",
                    }}
                  >
                    {item.q}
                  </span>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: expandedFaq === i ? "rotate(180deg)" : "none",
                      transition: "transform 200ms",
                    }}
                  >
                    <svg width="12" height="8" viewBox="0 0 12 7.4" fill="none">
                      <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#E3E3E3" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "48px", paddingBottom: "48px", width: "100%" }}>
          <DrumWaveFooter />
        </div>
      </div>

      {/* Persistent top nav */}
      <TopNav name={name} onAccountSettings={onAccountSettings} />

      {/* Persistent bottom nav */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="home" onHome={onHome} onMyData={onRequestData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
      </div>
    </div>
  );
}

function SpiritDetailScreen({ onBack, onContinue, onHome, onMyData, onSavingsPlan, onOffers }: { onBack: () => void; onContinue?: () => void; onHome?: () => void; onMyData?: () => void; onSavingsPlan?: () => void; onOffers?: () => void }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="spirit-detail-sb" style={{ position: "relative", width: "100%", height: "100%" }}>
        <HomeRequestDataBeforeDsp />
        {/* Transparent overlay button aligned to the Figma back-arrow position */}
        <button
          onClick={onBack}
          style={{
            position: "absolute",
            top: 62,
            left: 24,
            width: 40,
            height: 40,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
          aria-label="Back"
        />

        {/* Persistent bottom nav */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <MainBottomNav activeTab="requests" onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} onOffers={onOffers} />
        </div>
      </div>
      <UnifiedStatusBar hostClass="spirit-detail-sb" />
    </div>
  );
}

function EnrollCloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white" />
    </svg>
  );
}

function EnrollBackArrowIcon() {
  return (
    <svg width="11.775" height="20" viewBox="0 0 11.775 20" fill="none">
      <path d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z" fill="white" />
    </svg>
  );
}

function EnrollPlusIcon() {
  return (
    <svg width="6.28901" height="7.66541" viewBox="0 0 6.28901 7.66541" fill="none">
      <path d="M0 7.66473H2.64337C3.974 7.68392 4.65263 7.29914 5.13784 6.56615C5.3473 6.24972 5.4684 5.90447 5.56241 5.50288H6.28901V4.91406H3.60695L3.53757 4.91329V5.50288H4.21445C4.18128 5.5915 4.13917 5.6838 4.08455 5.78309C3.78054 6.33584 3.3795 6.56817 2.64337 6.56817H1.23803V1.08537H2.64337C3.36462 1.08537 3.84051 1.29051 4.07101 1.70079C4.14318 1.82924 4.20405 1.98293 4.25363 2.16185H3.53757V2.81253H3.68439V2.81055H6.28901V2.16185H5.56759C5.46307 1.63873 5.29554 1.21507 5.062 0.891899C4.63073 0.295132 3.8182 0 2.64337 0H0V7.66473Z" fill="#E3E3E3" />
      <path d="M3.60695 4.12716V4.12486H6.28901V3.47692H3.68439L3.53757 3.47648V4.12716H3.60695Z" fill="#E3E3E3" />
    </svg>
  );
}

function EnrollTiltedCard({ left, top, bordered, src }: { left: number; top: number; bordered?: boolean; src: string }) {
  return (
    <div style={{ position: "absolute", left: `${left}px`, top: `${top}px`, width: "238.838px", height: "187.523px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: "rotate(-15deg) skewX(-30deg) scaleY(0.87)" }}>
        <div style={{ width: "210.345px", height: "137.77px", borderRadius: "12px", border: bordered ? "1px solid rgba(255,255,255,0.4)" : undefined, overflow: "hidden", position: "relative" }}>
          <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
}


function EnrollHowItWorksStep({ number, title, body }: { number: number; title: string; body: string }) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", width: "100%" }}>
      <div style={{ border: "0.824px solid var(--color-text-primary)", borderRadius: "82.353px", width: "28px", height: "28px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "14.824px", color: "var(--color-text-primary)" }}>{number}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "9px", alignItems: "flex-start", flex: "1 0 0", minWidth: 0 }}>
        <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px", color: "var(--color-text-primary)" }}>{title}</p>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", lineHeight: 1.5, color: "var(--color-text-secondary)" }}>{body}</p>
      </div>
    </div>
  );
}

function EnrollDataValuePill({ left, top, value }: { left: number; top: number; value: string }) {
  return (
    <div style={{ position: "absolute", left: `${left}px`, top: `${top}px`, background: "rgba(0,145,255,0.25)", border: "0.731px solid rgba(0,145,255,0.5)", borderRadius: "73.11px", display: "flex", gap: "2.924px", alignItems: "center", justifyContent: "center", padding: "2.924px 5.849px", height: "18.775px" }}>
      <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "8.773px", color: "var(--color-text-primary)" }}>+</p>
      <EnrollPlusIcon />
      <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "8.773px", color: "var(--color-text-primary)" }}>{value}</p>
    </div>
  );
}

function EnrollCompanyBadge({ left, top, bg, textColor, label }: { left: number; top: number; bg: string; textColor: string; label: string }) {
  return (
    <div style={{ position: "absolute", left: `${left}px`, top: `${top}px`, background: bg, borderRadius: "9999px", width: "27px", height: "27px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "14px", color: textColor }}>{label}</p>
    </div>
  );
}

function EnrollBenefitCard({ children, height = 348, background = "#05101a" }: { children: React.ReactNode; height?: number; background?: string }) {
  return (
    <div style={{ background, height: `${height}px`, width: "100%", borderRadius: "16px", overflow: "hidden", position: "relative" }}>
      {children}
    </div>
  );
}

function EnrollBenefitCaption({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center", width: "100%" }}>
      <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "24px", color: "var(--color-text-primary)" }}>{title}</p>
      <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "16px", lineHeight: 1.5, color: "var(--color-text-secondary)" }}>{body}</p>
    </div>
  );
}

function EnrollInfoScreen({ onBack, onRequestData }: { onBack?: () => void; onRequestData?: () => void }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div
        className="enroll-info-sb [&::-webkit-scrollbar]:hidden"
        style={{ background: "#070707", position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }}
      >
        <div style={{ position: "relative", width: "390px", height: "1800px", margin: "0 auto" }}>
          <Enroll4 />
          {/* Back arrow overlay — covers the back arrow icon in Frame29 */}
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            style={{ position: "absolute", top: "60px", left: "12px", width: "52px", height: "52px", background: "transparent", border: "none", cursor: "pointer", zIndex: 30 }}
          />
          {/* Request more data button overlay — covers the CTA at the bottom of Frame32 */}
          <button
            type="button"
            onClick={onRequestData}
            aria-label="Request more data"
            style={{ position: "absolute", top: "1620px", left: "24px", width: "343px", height: "48px", background: "transparent", border: "none", cursor: "pointer", zIndex: 30 }}
          />
        </div>
      </div>
      <UnifiedStatusBar hostClass="enroll-info-sb" />
    </div>
  );
}

function EnrollOffersScreen({ onBack, onRequestData }: { onBack?: () => void; onRequestData?: () => void }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div
        className="enroll-offers-sb [&::-webkit-scrollbar]:hidden"
        style={{ background: "#070707", position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }}
      >
        <div style={{ position: "relative", width: "390px", height: "1800px", margin: "0 auto" }}>
          <Enroll5 />
          {/* Back arrow overlay */}
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            style={{ position: "absolute", top: "60px", left: "12px", width: "52px", height: "52px", background: "transparent", border: "none", cursor: "pointer", zIndex: 30 }}
          />
          {/* Request more data button overlay */}
          <button
            type="button"
            onClick={onRequestData}
            aria-label="Request more data"
            style={{ position: "absolute", top: "1620px", left: "24px", width: "343px", height: "48px", background: "transparent", border: "none", cursor: "pointer", zIndex: 30 }}
          />
        </div>
      </div>
      <UnifiedStatusBar hostClass="enroll-offers-sb" />
    </div>
  );
}

function EnrollScreen({ onClose, onApply }: { onClose?: () => void; onApply?: () => void }) {
  // Renders the imported Enroll-3 Figma design faithfully (real photos, ribbon,
  // phone screenshots) inside a hidden-scrollbar scroll container. The design is a
  // fixed 390px-wide, absolutely-positioned frame, so we give the inner canvas an
  // explicit height and overlay transparent tap targets for the close (X) and
  // "Apply now" controls.
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div
        className="enroll-screen-sb [&::-webkit-scrollbar]:hidden"
        style={{ background: "var(--color-bg-base)", position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }}
      >
        <div style={{ position: "relative", width: "390px", height: "2920px", margin: "0 auto" }}>
          <Enroll3 />

          {/* Close (X) — top-right of the header */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{ position: "absolute", top: "63px", left: "322px", width: "48px", height: "48px", background: "transparent", border: "none", cursor: "pointer", zIndex: 30 }}
          />

          {/* Apply now — pinned button at the bottom of the frame */}
          <button
            type="button"
            onClick={onApply}
            aria-label="Apply now"
            style={{ position: "absolute", bottom: "45px", left: "24px", width: "342px", height: "48px", borderRadius: "500px", background: "#e3e3e3", border: "0.911px solid #ffffff", cursor: "pointer", zIndex: 30, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "18px", lineHeight: 1, color: "#1d2023" }}>Apply now</span>
          </button>
        </div>
      </div>
      <UnifiedStatusBar hostClass="enroll-screen-sb" />
    </div>
  );
}

function EnrollScreenOld({ onClose, onApply }: { onClose?: () => void; onApply?: () => void }) {
  return (
    <div style={{ background: "var(--color-bg-base)", position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }} className="[&::-webkit-scrollbar]:hidden">
      <EnrollHeroVisual onClose={onClose} />

      <div style={{ display: "flex", flexDirection: "column", gap: "25px", padding: "0 24px", boxSizing: "border-box", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "16px", color: "var(--color-text-secondary)" }}>
            Contribute data. Earn Offers.
          </p>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "48px", lineHeight: 1.1, letterSpacing: "-1.44px", color: "var(--color-text-primary)" }}>
            Apply for your
            <br />
            Data Savings Plan
          </p>
        </div>
        <div style={{ display: "flex", gap: "38px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-start" }}>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "12px", color: "var(--color-text-secondary)" }}>Locked in for</p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", color: "var(--color-text-primary)" }}>18 months</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-start" }}>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "12px", color: "var(--color-text-secondary)" }}>Fees</p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", color: "var(--color-text-primary)" }}>0% Fees</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "64px 24px 0", boxSizing: "border-box", width: "100%" }}>
        <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "20px", color: "var(--color-text-primary)" }}>How it works</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
          <EnrollHowItWorksStep number={1} title="Submit your application" body="Complete and submit this application to be considered for a Data Savings Plan." />
          <EnrollHowItWorksStep number={2} title="Contribute your data" body={`Once approved, your certified data will be added to your Data Savings Plan, a "smart" data pool that enables both individual and collective savings.`} />
          <EnrollHowItWorksStep number={3} title="Earn cash and other benefits" body="With your Data Savings Plan, companies can offer you cash benefits in exchange for licensing your data. You have the freedom to accept or decline any offer." />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "64px", padding: "96px 20px 0", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
        <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "32px", color: "var(--color-text-primary)", textAlign: "center" }}>
          Benefits of a Data Savings Plan
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "center", width: "100%" }}>
          <EnrollBenefitCard>
            <PhotoFanStack />
            <EnrollCompanyBadge left={63} top={122} bg="#1966c4" textColor="var(--color-text-primary)" label="IN" />
            <EnrollCompanyBadge left={144} top={159} bg="#f7f7f7" textColor="#a51b1b" label="SP" />
            <EnrollCompanyBadge left={104} top={135} bg="#006341" textColor="#c5c5c5" label="S" />
          </EnrollBenefitCard>
          <EnrollBenefitCaption title="Get exclusive offers" body="Turn the value of your verified data into real income with exclusive offers." />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "center", width: "100%" }}>
          <EnrollBenefitCard background="#1c1c1c">
            <div style={{ position: "absolute", left: "48px", top: 0, width: "258px", height: "282px", borderRadius: "0 0 44px 44px", overflow: "hidden", boxShadow: "24px 24px 30px 0 rgba(0,0,0,0.35)", background: "var(--color-bg-surface)", display: "flex", flexDirection: "column", padding: "24px 20px", gap: 16 }}>
              {[
                { label: "Location data", on: false },
                { label: "Purchase history", on: true },
                { label: "Health metrics", on: false },
                { label: "Browsing habits", on: true },
              ].map(row => (
                <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.3 }}>{row.label}</span>
                  <div style={{ width: 36, height: 20, borderRadius: 10, background: row.on ? "var(--color-status-success)" : "var(--color-bg-overlay)", border: "1px solid rgba(255,255,255,0.08)", flexShrink: 0, display: "flex", alignItems: "center", padding: "0 3px", justifyContent: row.on ? "flex-end" : "flex-start" }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: "white" }} />
                  </div>
                </div>
              ))}
            </div>
          </EnrollBenefitCard>
          <EnrollBenefitCaption title="Stay in control" body="You decide what to contribute, what to monetize, and what remains off limits." />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "center", width: "100%" }}>
          <EnrollBenefitCard>
            <div style={{ position: "absolute", left: "-154px", top: "44px", width: "740px", height: "254px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ transform: "rotate(-3.22deg)", width: "729px", height: "214px" }}>
                <img src={enrollDrumwaveRibbon} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            </div>
            <EnrollCompanyBadge left={35} top={166} bg="var(--color-text-primary)" textColor="red" label="SP" />
            <EnrollCompanyBadge left={219} top={100} bg="#d71717" textColor="var(--color-text-primary)" label="T" />
            <EnrollCompanyBadge left={136} top={147} bg="#f3f3f3" textColor="#3322b8" label="VW" />
            <EnrollDataValuePill left={237} top={73} value="40,000" />
            <EnrollDataValuePill left={21} top={138} value="20,000" />
            <EnrollDataValuePill left={118} top={182} value="23,000" />
          </EnrollBenefitCard>
          <EnrollBenefitCaption title="Build your data wealth" body="Grow your data savings to benefit you and your family over the long-term." />
        </div>
      </div>

      <div style={{ padding: "96px 24px 45px", boxSizing: "border-box", width: "100%" }}>
        <button
          type="button"
          onClick={onApply}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            height: "48px",
            borderRadius: "500px",
            background: "#e3e3e3",
            border: "0.911px solid #ffffff",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
        >
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px", color: "#1d2023" }}>Apply now</span>
        </button>
        <p style={{ margin: 0, opacity: 0, textAlign: "center", marginTop: "8px", fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-text-primary)" }}>
          Takes 3 minutes
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 24px" }}>
        <div style={{ width: "144px", height: "5px", borderRadius: "9999px", background: "#FFFFFF" }} />
      </div>
    </div>
  );
}
// Demo-only home-screen switcher. Set to false to hide the switcher entirely.
const DEMO_MODE = true;

/** Step values with no render branch — the prev/next arrows walk past these so
 *  they never land on a blank frame. Steps 32 and 60 are deliberately NOT here:
 *  they render real screens and the arrows are their only access path. */
// 70 = "My Data Savings" and 61 = "Offers", both Savings-plan/Offers tab
// destinations for the noDsp / "Onboarding/Enrollment" state.
const EMPTY_STEPS = [13];

/** Steps that must never be pushed onto the back history.
 *  Every one of these advances on its own — a timer, an animation completing, or
 *  a progress bar finishing — so landing back on one would immediately throw the
 *  user forward again and the back arrow would look broken. goBack skips them and
 *  pops to the last screen the user actually chose to be on.
 *    19 PhotoSavedScreen           — toast, auto-completes to 20
 *    29 RequestDataProgressScreen  — 0→100% upload, auto-completes to 30
 *    36 OfferClaimingLoadingScreen — 3-stage loader, auto-completes to 37
 *    40 ReviewApplicationLoading   — 3-stage loader, auto-completes to 41
 *    47 PlanJoinedIntroScreen      — ~2.2s timer to 56
 *    54 PlanJoinedIntroScreen      — same component, ~2.2s timer to 83
 *    72 DataCertsLoadingScreen     — timed loader; waits for a tap, but replaying
 *                                    it on the way back is never what "back" means
 */
const NO_HISTORY_STEPS = [19, 29, 36, 40, 47, 54, 72];

export default function App() {
  // Entry point: Landing screen. Reset to 0 before committing/sharing.
  const [step, setStep] = useState(0);

  // ── Back history ────────────────────────────────────────────────────────────
  // Back arrows mean "the screen I actually came from", not a fixed step number.
  // Several screens (10, 12, 27, 58, 66 …) are reachable from four or more places,
  // so a hardcoded destination was wrong for every entry point but one.
  //
  // The outgoing step is recorded by an effect rather than by wrapping setStep,
  // so all ~127 existing setStep call sites — including the prototype prev/next
  // arrows and the bottom-nav tabs — feed the history without being touched.
  // Bottom-nav tabs still jump directly; only back arrows pop.
  const [stepHistory, setStepHistory] = useState<number[]>([]);
  const prevStepRef = useRef(step);
  // Set for the one render caused by goBack, so popping doesn't re-push.
  const poppingRef = useRef(false);

  useEffect(() => {
    const from = prevStepRef.current;
    prevStepRef.current = step;
    if (from === step) return;
    if (poppingRef.current) {
      poppingRef.current = false;
      return;
    }
    if (NO_HISTORY_STEPS.includes(from)) return;
    setStepHistory((h) => [...h, from]);
  }, [step]);

  /** Pop to the screen that led here. `fallback` is the screen's original
   *  hardcoded destination, used when the history is empty — e.g. when the flow
   *  was entered mid-way with the prototype step arrows. */
  const goBack = (fallback: number) => {
    poppingRef.current = true;
    if (stepHistory.length > 0) {
      setStep(stepHistory[stepHistory.length - 1]);
      setStepHistory(stepHistory.slice(0, -1));
    } else {
      setStep(fallback);
    }
  };

  // Controlled toggle state for the new TwoStepVerificationScreen (step 75).
  const [twoStepEnabled, setTwoStepEnabled] = useState(true);
  // Demo switcher: which standalone home screen is showing.
  const [demoScreen, setDemoScreen] = useState<"noDsp" | "oneDsp" | "enrolledNoPlan" | "offer1" | "dataRequestAccepted">("noDsp");
  // Bottom-nav destinations that differ per account state, resolved once here and
  // passed to every screen's nav callbacks. Same read-demoScreen-at-the-call-site
  // pattern OneDspHomeScreen's savings-plan tab already used.
  // Home: 9 dispatches to the noDsp / enrolledNoPlan dashboards; 69 is the
  // enrolled states' own home (OneDspHomeScreen, variant follows demoScreen).
  const preEnrollment = demoScreen === "noDsp" || demoScreen === "enrolledNoPlan";
  const homeStep = preEnrollment ? 9 : 69;
  const savingsPlanStep = demoScreen === "dataRequestAccepted" ? 80 : preEnrollment ? 70 : 56;
  // Varies by account state: the two pre-enrolment states keep the not-enrolled
  // Offers frame (61); the three enrolled states get the offer carousel (85).
  const OFFERS_STEP = preEnrollment ? 61 : 85;
  // My data tab → Request Data (step 10). My data requests (12) is only reached
  // via "View my requests" on the home screens.
  const MY_DATA_STEP = 10;
  // Tracks which step to return to when closing the ChoosePlans screen.
  const [choosePlansCloseDest, setChoosePlansCloseDest] = useState(44);
  // Tracks which step to return to when going back from ManageMyPlan.
  const [managePlanBackDest, setManagePlanBackDest] = useState(56);
  // Which plan ManageMyPlan is showing — set by whichever entry opened it.
  const [managePlan, setManagePlan] = useState<"smart" | "fitness">("smart");
  // Cash balance is reachable from step 56 and from the certificates flow (80);
  // its back arrow returns to whichever opened it.
  const [cashBalanceBackDest, setCashBalanceBackDest] = useState(56);
  // True once the user has joined a second DSP (Fitness). Drives the plural
  // "Data Savings Plans" label on the enrolled home, routes that section to the
  // all-plans overview (84), and shows "Back to all plans" on the Smart dashboard.
  const [hasSecondPlan, setHasSecondPlan] = useState(false);
  // Offer 1.0: when true, the sign-up flow ends on the "Claiming your Tesla data"
  // loading screen instead of the dashboard.
  const [claimFlow, setClaimFlow] = useState(false);
  // When set, completing the sign-in flow lands the user on the Tesla data
  // certificates loading screen (entered from the "Data request accepted" email).
  const [certsFlow, setCertsFlow] = useState(false);
  // Controls the "Password successfully updated!" toast shown on the Account Profile screen
  const [passwordToast, setPasswordToast] = useState(false);
  // Controls the "Your report has been sent!" toast shown on the Account Profile screen
  const [reportToast, setReportToast] = useState(false);
  const [profilePhotoSrc, setProfilePhotoSrc] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("Carolina");
  const [lastName, setLastName] = useState("Smith");

  // Personal info form fields — default to Carolina's demo data
  const [enrollEmail, setEnrollEmail] = useState("Carolinas@gmail.com");
  const [enrollDob, setEnrollDob] = useState("07/14/1980");
  const [enrollSsn, setEnrollSsn] = useState("1111");
  const [enrollPhone, setEnrollPhone] = useState("");

  // Address form fields (lifted from HomeAddressStep)
  const [enrollAddr1, setEnrollAddr1] = useState("123 Main Street");
  const [enrollAddr2, setEnrollAddr2] = useState("Apt 4B");
  const [enrollCity, setEnrollCity] = useState("Mountain View");
  const [enrollAddrState, setEnrollAddrState] = useState("California");
  const [enrollZip, setEnrollZip] = useState("12345");

  // Payout form fields (lifted from PayoutMethodStep)
  const [enrollBankName, setEnrollBankName] = useState("");
  const [enrollRouting, setEnrollRouting] = useState("");
  const [enrollAccount, setEnrollAccount] = useState("");

  // Data contribution toggles (lifted from DataContributionStep) — all ON by default
  const [enrollToggles, setEnrollToggles] = useState<Record<string, boolean>>({
    tech: true, travel: true, finance: true, retail: true,
    health: true, entertainment: true, insurance: true, civic: true,
  });
  const handleEnrollToggle = (key: string) =>
    setEnrollToggles(prev => ({ ...prev, [key]: !prev[key] }));

  // Goal fields (lifted from GoalStep)
  const [enrollGoalValue, setEnrollGoalValue] = useState(0);
  const [enrollPreferNotToMonetize, setEnrollPreferNotToMonetize] = useState(false);

  // DSP enroll sheet — controlled separately so the slide-down animation
  // always completes before the overlay unmounts and the dashboard is revealed.
  const [dspMounted, setDspMounted] = useState(false);
  const [dspVisible, setDspVisible] = useState(false);
  // Choose-a-plan close animation — same "slide down, setStep only after the
  // animation finishes" pattern as the DSP enroll sheet above. Entrance (slide
  // up from the bottom) happens automatically via framer-motion's initial/animate
  // diff on every mount, since this screen fully unmounts when step changes
  // (unlike the DSP sheet, which stays mounted and just toggles visibility).
  const [choosePlansClosing, setChoosePlansClosing] = useState(false);
  const closeChoosePlans = () => setChoosePlansClosing(true);
  const [enrollSubStep, setEnrollSubStep] = useState(1);
  // When editing a single section from the Confirm screen, this holds the
  // label to show in place of the "x/5" step indicator (e.g. "Edit home address").
  const [enrollEditLabel, setEnrollEditLabel] = useState<string | null>(null);

  const openDsp = () => {
    setDspMounted(true);
    // Let the DOM paint the element at y:100% before animating in
    requestAnimationFrame(() => setDspVisible(true));
  };

  const closeDsp = () => {
    // Trigger slide-down; setStep(9) fires inside onAnimationComplete
    setDspVisible(false);
  };

  // Prototype navigation — steps run 0..58
  // Highest step with a render branch is 77 (VerifyPhoneNumberScreen, part of the
  // new onboarding-detour steps 75-77 appended after the dense 0-74 range — they
  // can't be renumbered into sequence without shifting every existing screen, so
  // the arrows reach them only after stepping through 74, not right after step 5
  // where they actually sit in the real onNext/onSkip chain). goNext clamps to
  // TOTAL_STEPS - 1, so this must be 86 for step 85 to be reachable via the arrows.
  const TOTAL_STEPS = 86;
  const goPrev = () =>
    setStep((s) => {
      let n = s - 1;
      while (n > 0 && EMPTY_STEPS.includes(n)) n -= 1;
      return Math.max(0, n);
    });
  const goNext = () =>
    setStep((s) => {
      let n = s + 1;
      while (n < TOTAL_STEPS - 1 && EMPTY_STEPS.includes(n)) n += 1;
      return Math.min(TOTAL_STEPS - 1, n);
    });

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-[16px]">
      {/* MARKER-MAKE-KIT-INVOKED */}
      {/* MARKER-MAKE-KIT-DISCOVERY-READ */}
      {/* MARKER-MAKE-KIT-TOKENS-READ */}
      {/* MARKER-MAKE-KIT-ATTACHMENTS-READ */}
      {/* MARKER-MAKE-KIT-FINAL-CHECK-READ */}

      {/* my-auto rather than justify-center on the parent: centres the stack
          vertically when the window is tall enough, but still lets the page
          scroll instead of clipping the top when it isn't. */}
      {/* w-[417px] = the 393px screen + 2×12px bezel, so the controls panel below
          lines up exactly with the device instead of widening the whole stack. */}
      <div className="flex flex-col items-center gap-[20px] my-auto py-[32px] w-[417px] max-w-full">

      {/* ── iPhone device chrome ───────────────────────────────────────────────
          Purely decorative shell around the viewport. The 393×852 screen area
          inside keeps its exact dimensions and its own absolute positioning, so
          no content is cut off — only the four corners round, as on a real
          device. Not part of any Figma screen; this is prototype presentation. */}
      <div
        style={{
          padding: "12px",
          borderRadius: "60px",
          background:
            "linear-gradient(160deg, #4a4a4d 0%, #1c1c1e 20%, #0b0b0c 50%, #1c1c1e 80%, #4a4a4d 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.10), 0 30px 60px -12px rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}
      >
      <div
        className="relative w-[393px] h-[852px] overflow-hidden"
        style={{
          borderRadius: "48px",
          background: "#070707",
          // Safari: filter:blur children escape overflow+border-radius and
          // paint a light square band over the rounded corners. clip-path
          // forces the round mask for every screen in this frame.
          clipPath: "inset(0 round 48px)",
          WebkitClipPath: "inset(0 round 48px)",
          isolation: "isolate",
        }}
      >
        {step === 0 && (
          <LandingScreen
            onSignIn={() => setStep(1)}
            onGetStarted={() => setStep(2)}
          />
        )}
        {step === 1 && (
          <SignInScreen
            /* Left hardcoded: back here is branched on certsFlow and clears the
               flag on the way out, which a history pop wouldn't do. */
            onBack={() => {
              if (certsFlow) {
                setCertsFlow(false);
                setStep(71);
              } else {
                setStep(0);
              }
            }}
            onSignIn={() => {
              if (certsFlow) {
                setCertsFlow(false);
                setStep(72);
              } else if (claimFlow) {
                setClaimFlow(false);
                setStep(36);
              } else {
                setStep(9);
              }
            }}
          />
        )}
        {step === 2 && (
          <NameScreen
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            onBack={() => goBack(0)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <EmailStateScreen
            onBack={() => goBack(2)}
            onNext={() => setStep(4)}
          />
        )}
        {step === 4 && (
          <PasswordScreen
            onBack={() => goBack(3)}
            onNext={() => setStep(5)}
          />
        )}
        {step === 5 && (
          <VerificationScreen
            onBack={() => goBack(4)}
            onVerify={() => setStep(75)}
          />
        )}
        {step === 75 && (
          <TwoStepVerificationScreen
            onNext={() => setStep(76)}
            onSkip={() => setStep(76)}
            onBack={() => goBack(5)}
            enabled={twoStepEnabled}
            onEnabledChange={setTwoStepEnabled}
          />
        )}
        {step === 76 && (
          <AddPhoneNumberScreen
            onNext={() => setStep(77)}
            onSkip={() => setStep(6)}
            onBack={() => goBack(75)}
          />
        )}
        {step === 77 && (
          <VerifyPhoneNumberScreen
            onVerify={() => setStep(6)}
            onBack={() => goBack(76)}
            phoneNumber="+1 (555) 012-3456"
          />
        )}
        {step === 6 && (
          <PhotoUploadScreen
            name={
              firstName && lastName
                ? `${firstName} ${lastName}`
                : "Carolina Smith"
            }
            onBack={() => goBack(5)}
            onSkip={() => setStep(7)}
            onUpload={() => setStep(7)}
          />
        )}
        {step === 7 && (
          <PhotoUploadedScreen
            name={
              firstName && lastName
                ? `${firstName} ${lastName}`
                : "Carolina Smith"
            }
            onBack={() => goBack(6)}
            onNext={() => setStep(8)}
          />
        )}
        {step === 8 && (
          <CongratsScreen
            onContinue={() => {
              if (claimFlow) {
                setClaimFlow(false);
                setStep(36);
              } else {
                setStep(9);
              }
            }}
          />
        )}
        {(step === 9 || dspMounted) && (() => {
          const homeProps = {
            name:
              firstName && lastName
                ? `${firstName} ${lastName}`
                : "Carolina Smith",
            onRequestData: () => setStep(10),
            onViewRequests: () => setStep(12),
            onApplyForDsp: openDsp,
            onAccountSettings: () => setStep(16),
            onHome: () => setStep(9),
          };
          if (DEMO_MODE) {
            if (demoScreen === "noDsp") return <DashboardScreenNoDsp {...homeProps} onLearnMoreOffers={() => setStep(57)} onHome={() => setStep(9)} onSavingsPlan={() => setStep(70)} onOffers={() => setStep(61)} />;
            if (demoScreen === "enrolledNoPlan") return <DashboardScreenEnrolledNoPlan {...homeProps} onContinueEnrollment={() => setStep(33)} onViewAllPlans={() => { setChoosePlansCloseDest(9); setStep(42); }} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} />;
            // "View Data Certificates" home — OneDspHomeScreen is the build of Figma
            // frame 13:73059. Takes no homeProps; variant is passed explicitly so a
            // change to the component's default can't silently retheme this state.
            if (demoScreen === "dataRequestAccepted") return <OneDspHomeScreen name={homeProps.name} onAccountSettings={homeProps.onAccountSettings} variant="dataCertificates" hasSecondPlan={hasSecondPlan} onHome={() => setStep(69)} onMyData={() => setStep(MY_DATA_STEP)} onRequestMoreData={() => setStep(MY_DATA_STEP)} onViewMyRequests={() => setStep(12)} onTeslaRelationship={() => setStep(78)} onSavingsPlanSection={() => setStep(hasSecondPlan ? 84 : savingsPlanStep)} onRedeemOffer={() => setStep(36)} onSavingsPlan={() => setStep(80)} onOffers={() => setStep(OFFERS_STEP)} />;
            return <DashboardScreenOneDsp {...homeProps} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} />;
          }
          return <DashboardScreen {...homeProps} />;
        })()}
        {/* DSP enroll sheet — slides up over dashboard, slides back down on close.
            Uses controlled animation so setStep only fires after the exit animation
            fully completes, guaranteeing the slide-down is visible. */}
        {dspMounted && (
          <motion.div
            style={{ position: "absolute", inset: 0, zIndex: 200 }}
            initial={{ y: "100%" }}
            animate={{ y: dspVisible ? 0 : "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 280, mass: 0.9 }}
            onAnimationComplete={() => {
              if (!dspVisible) {
                setDspMounted(false);
                setStep(9);
              }
            }}
          >
            <EnrollScreen
              onClose={closeDsp}
              onApply={() => { setDspMounted(false); setDspVisible(false); setEnrollEditLabel(null); setEnrollSubStep(1); setStep(14); }}
            />
          </motion.div>
        )}
        {step === 10 && (
          <RequestDataScreen onBack={() => goBack(9)} onSpiritClick={() => setStep(11)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} />
        )}
        {step === 11 && (
  <SpiritDetailScreen
    onBack={() => goBack(10)}
    onContinue={() => {
      setEnrollEditLabel(null);
      setEnrollSubStep(1);
      setStep(14);
    }}
    onHome={() => setStep(homeStep)}
    onMyData={() => setStep(MY_DATA_STEP)}
    onSavingsPlan={() => setStep(savingsPlanStep)}
    onOffers={() => setStep(OFFERS_STEP)}
  />
)}
        {step === 12 && (
          /* Nothing is accepted until a DSP is joined — Onboarding/Enrollment and
             Approved-No-Plan both show the empty Accepted state. */
          <MyDataRequestsScreen hasAccepted={demoScreen !== "noDsp" && demoScreen !== "enrolledNoPlan"} onBack={() => goBack(9)} onUploadManually={() => setStep(27)} onSeeHow={() => setStep(28)} onGoToDWCloud={() => setStep(31)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onViewCertificate={() => { setDemoScreen("dataRequestAccepted"); setStep(72); }} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} />
        )}
        {step === 14 && (
          <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <div className="enroll-form-sb" style={{ position: "relative", width: "100%", height: "100%" }}>
              <EnrollForm
                step={enrollSubStep}
                totalSteps={5}
                stepLabel={enrollEditLabel ?? undefined}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={enrollEmail}
                setEmail={setEnrollEmail}
                dob={enrollDob}
                setDob={setEnrollDob}
                ssn={enrollSsn}
                setSsn={setEnrollSsn}
                phone={enrollPhone}
                setPhone={setEnrollPhone}
                addr1={enrollAddr1} setAddr1={setEnrollAddr1}
                addr2={enrollAddr2} setAddr2={setEnrollAddr2}
                city={enrollCity} setCity={setEnrollCity}
                addrState={enrollAddrState} setAddrState={setEnrollAddrState}
                zip={enrollZip} setZip={setEnrollZip}
                bankName={enrollBankName} setBankName={setEnrollBankName}
                routing={enrollRouting} setRouting={setEnrollRouting}
                account={enrollAccount} setAccount={setEnrollAccount}
                toggles={enrollToggles} onToggle={handleEnrollToggle}
                goalValue={enrollGoalValue} setGoalValue={setEnrollGoalValue}
                preferNotToMonetize={enrollPreferNotToMonetize} setPreferNotToMonetize={setEnrollPreferNotToMonetize}
                onBack={() => {
                  // Editing a single section: return to the Confirm screen.
                  if (enrollEditLabel) {
                    setEnrollEditLabel(null);
                    setStep(15);
                  } else if (enrollSubStep > 1) {
                    setEnrollSubStep(enrollSubStep - 1);
                  } else {
                    goBack(9);
                  }
                }}
                onContinue={() => {
                  // Editing a single section: save and return to the Confirm screen.
                  if (enrollEditLabel) {
                    setEnrollEditLabel(null);
                    setStep(15);
                  } else if (enrollSubStep < 5) {
                    setEnrollSubStep(enrollSubStep + 1);
                  } else {
                    setStep(15);
                  }
                }}
              />
            </div>
            <UnifiedStatusBar hostClass="enroll-form-sb" />
          </div>
        )}
        {step === 15 && (
          <ConfirmApplicationScreen
            firstName={firstName}
            lastName={lastName}
            email={enrollEmail}
            dob={enrollDob}
            ssn={enrollSsn}
            phone={enrollPhone}
            addr1={enrollAddr1}
            addr2={enrollAddr2}
            city={enrollCity}
            addrState={enrollAddrState}
            zip={enrollZip}
            bankName={enrollBankName}
            routing={enrollRouting}
            account={enrollAccount}
            toggles={enrollToggles}
            goalValue={enrollGoalValue}
            preferNotToMonetize={enrollPreferNotToMonetize}
            onBack={() => { setEnrollEditLabel(null); setEnrollSubStep(5); setStep(14); }}
            onConfirm={() => setStep(40)}
            onEditStep={(s) => {
              // Home address gets a dedicated "Edit" title instead of "2/5".
              setEnrollEditLabel(s === 2 ? "Edit home address" : null);
              setEnrollSubStep(s);
              setStep(14);
            }}
          />
        )}
        {step === 16 && (
          <AccountSettingsScreen
            onBack={() => setStep(homeStep)}
            onCarolinaClick={() => setStep(17)}
            onChangePassword={() => setStep(21)}
            onRequestDrumwaveData={() => setStep(22)}
            onFaqs={() => setStep(24)}
            onContactSupport={() => setStep(25)}
            onLegal={() => setStep(26)}
            profilePhotoSrc={profilePhotoSrc}
            showPasswordToast={passwordToast}
            onDismissPasswordToast={() => setPasswordToast(false)}
            showReportToast={reportToast}
            onDismissReportToast={() => setReportToast(false)}
          />
        )}
        {step === 17 && (
          <UserProfileScreen
            onBack={() => goBack(16)}
            onUploadClick={() => setStep(18)}
            profilePhotoSrc={profilePhotoSrc}
          />
        )}
        {step === 18 && (
          <PhotoSelectModalScreen
            onBack={() => goBack(17)}
            onSave={() => { setProfilePhotoSrc(updatedProfilePhoto); setStep(19); }}
          />
        )}
        {step === 19 && (
          /* Deliberately not referrer-based: the referrer is the photo-select
             modal (18), which the user just finished saving from. Both this back
             and step 20's return to the profile screen rather than re-opening a
             completed flow. */
          <PhotoSavedScreen
            onComplete={() => setStep(20)}
            onBack={() => setStep(17)}
          />
        )}
        {step === 20 && (
          <ProfileUpdatedScreen
            onBack={() => setStep(16)}
            onUploadClick={() => setStep(18)}
           
          />
        )}
        {step === 21 && (
          <ChangePasswordScreen
            onBack={() => goBack(16)}
            onSuccess={() => { setPasswordToast(true); setStep(16); }}
          />
        )}
        {step === 22 && (
          <RequestDrumwaveDataScreen
            onBack={() => goBack(16)}
            onSubmit={() => setStep(23)}
          />
        )}
        {step === 23 && (
          <DataRequestConfirmScreen
            onDone={() => setStep(16)}
          />
        )}
        {step === 24 && (
          <FaqScreen onBack={() => goBack(16)} />
        )}
        {step === 25 && (
          <ContactSupportScreen
            onBack={() => goBack(16)}
            onSubmit={() => { setReportToast(true); setStep(16); }}
          />
        )}
        {step === 26 && (
          <LegalScreen onBack={() => goBack(16)} />
        )}
        {step === 27 && (
          <UploadDataScreen onBack={() => goBack(12)} onUpload={() => setStep(29)} />
        )}
        {step === 28 && (
          <HowToGetDataScreen onBack={() => goBack(12)} onGetData={() => setStep(27)} />
        )}
        {step === 29 && (
          <RequestDataProgressScreen onComplete={() => setStep(30)} />
        )}
        {step === 30 && (
          <UploadSuccessScreen onContinue={() => setStep(62)} />
        )}
        {step === 31 && (
          <DWCloudScreen onBack={() => goBack(12)} onUploadMore={() => setStep(27)} />
        )}
        {step === 32 && (
          <HomeRequestDataBeforeDspScreen onBack={() => goBack(9)} />
        )}
        {step === 34 && (
          <OfferSavingsScreen
            onContinue={() => setStep(33)}
            onClaim={() => setStep(35)}
          />
        )}
        {step === 35 && (
          <OfferClaimScreen
            onContinue={() => {
              setClaimFlow(true);
              setStep(0);
            }}
            onSignIn={() => {
              setClaimFlow(true);
              setStep(1);
            }}
          />
        )}
        {step === 36 && <OfferClaimingLoadingScreen onComplete={() => setStep(37)} />}
        {step === 37 && <OfferContinueScreen onContinue={() => setStep(38)} />}
        {step === 38 && <DspManageContributionScreen onContinue={() => setStep(39)} />}
        {/* Done goes to the Data Savings Plan section (step 56, the enrolled
            "My Data Savings Plan" dashboard — not step 70, which is the
            not-yet-enrolled variant with the Apply-for-DSP card). The account
            state stays "Receiving Offers", so Home from there is still step 69,
            that state's own home (Figma 123:52970). */}
        {step === 39 && <OfferClaimSuccessScreen onDone={() => { setDemoScreen("offer1"); setStep(56); }} />}
        {step === 40 && <ReviewApplicationLoadingScreen onComplete={() => setStep(41)} />}
        {step === 41 && <AutoApprovedScreen onViewPlans={() => { setChoosePlansCloseDest(9); setDemoScreen("enrolledNoPlan"); setStep(42); }} />}
        {step === 42 && (
          <motion.div
            style={{ position: "absolute", inset: 0, zIndex: 10 }}
            initial={{ y: "100%" }}
            animate={{ y: choosePlansClosing ? "100%" : 0 }}
            transition={{ type: "spring", damping: 32, stiffness: 280, mass: 0.9 }}
            onAnimationComplete={() => {
              if (choosePlansClosing) {
                setChoosePlansClosing(false);
                setStep(choosePlansCloseDest);
              }
            }}
          >
            <ChoosePlansScreen onViewFitnessDetails={() => setStep(49)} onViewSmartDetails={() => setStep(43)} onClose={closeChoosePlans} />
          </motion.div>
        )}
        {step === 43 && <PlanDetailScreen onJoin={() => setStep(45)} onBack={() => goBack(42)} onClose={() => { setDemoScreen("enrolledNoPlan"); setStep(9); }} />}
        {step === 44 && <DspPlanNotSelectedScreen onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onOffers={() => setStep(OFFERS_STEP)} />}
        {step === 45 && <TermsConditionsScreen onBack={() => goBack(43)} onAccept={() => { setDemoScreen("oneDsp"); setStep(47); }} />}
        {step === 46 && <SuccessfullyJoinedScreen onGoToPlan={() => setStep(47)} onJoinAnother={() => setStep(48)} onClose={() => { setDemoScreen("enrolledNoPlan"); setStep(9); }} />}
        {step === 47 && <PlanJoinedIntroScreen name={firstName} onComplete={() => setStep(56)} />}
        {step === 48 && <JoinAnotherPlanScreen onViewFitnessDetails={() => setStep(50)} />}
        {step === 49 && <SmartPlanDetailScreen onJoin={() => setStep(51)} onBack={() => goBack(42)} />}
        {step === 50 && <Smart2PlanDetailScreen onJoin={() => setStep(51)} onBack={() => goBack(48)} />}
        {/* Reached from both plan-detail screens (49 and 50), so the header arrow
            has to follow the referrer; 49 is only the fallback. */}
        {step === 51 && <DspLandingScreen onUpdate={() => setStep(52)} onBack={() => goBack(49)} />}
        {step === 52 && <SmartTermsConditionsScreen onAccept={() => { setDemoScreen("oneDsp"); setHasSecondPlan(true); setStep(54); }} onBack={() => goBack(51)} />}
        {step === 54 && <PlanJoinedIntroScreen name={firstName} onComplete={() => setStep(83)} planImage={dsavingsFitnessCard} showPartnerMarks />}
        {step === 53 && <SmartSuccessfullyJoinedScreen />}
        {step === 55 && <MyPlanScreen onClose={() => { setDemoScreen("enrolledNoPlan"); setStep(9); }} onGoToPlan={() => setStep(56)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onOffers={() => setStep(OFFERS_STEP)} />}
        {step === 56 && <DspLanding1Screen variant={demoScreen === "offer1" ? "receivingOffers" : "enrolled"} onLearnMore={() => setStep(58)} onGoHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onOffers={() => setStep(OFFERS_STEP)} onManageMyPlan={() => { setManagePlan("smart"); setManagePlanBackDest(56); setStep(59); }} onCashBalance={() => setStep(66)} onViewAllPlans={() => setStep(48)} onRequestMoreData={() => setStep(MY_DATA_STEP)} onBackToAllPlans={hasSecondPlan ? () => setStep(84) : undefined} />}
        {/* Counter shows step+1 → "60 / N" is this screen (Manage my plan).
            Back always returns to the individual plan page that opened it
            (56 Smart / 80 certs Smart / 83 Fitness), via history + managePlanBackDest. */}
        {step === 59 && <ManageMyPlanScreen plan={managePlan} onBack={() => goBack(managePlanBackDest)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onOffers={() => setStep(OFFERS_STEP)} />}
        {step === 60 && <RequestYourDataScreen onBack={() => goBack(30)} />}
        {/* Slide 63 in the prototype counter (it shows step + 1). Back → homepage.
            Deliberately not referrer-based: this is entered at the end of the
            upload flow (30 → 62), and it resets the account state, so back has to
            leave the flow rather than re-enter its success screen. */}
        {step === 62 && <HomeRequestDataBeforeDsp11Screen onView23andMe={() => setStep(63)} onBack={() => { setDemoScreen("noDsp"); setStep(9); }} />}
        {/* Slide 64 in the prototype counter. Back → slide 63 (step 62). */}
        {step === 63 && <DaHomeFullWidthOverview1Screen onViewDataCertificates={() => setStep(64)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} onBack={() => goBack(62)} />}
        {step === 64 && <DataCertificatesScreen onCustomerProfile={() => setStep(65)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} onBack={() => goBack(63)} />}
        {step === 65 && <DataCertsScreen onDone={() => setStep(64)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} />}
        {step === 66 && <CashBalanceUSScreen onAddPayoutMethod={() => setStep(67)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onOffers={() => setStep(OFFERS_STEP)} onBack={() => goBack(cashBalanceBackDest)} />}
        {step === 67 && <Enroll6Screen onSaveChanges={() => setStep(68)} onBack={() => goBack(66)} />}
        {/* Back stays hardcoded: the referrer is the payout form (67) the user just
            submitted, and returning into a completed flow isn't what back means. */}
        {step === 68 && <Success1Screen onDone={() => setStep(56)} onBack={() => setStep(56)} />}
        {/* Step 69 is the home for both "Enrolled in a DSP" and the certificates
            flow (which routes Home here), so the variant follows demoScreen. */}
        {step === 69 && <OneDspHomeScreen name={firstName && lastName ? `${firstName} ${lastName}` : "Carolina Smith"} onAccountSettings={() => setStep(16)} variant={demoScreen === "offer1" ? "receivingOffers" : demoScreen === "dataRequestAccepted" ? "dataCertificates" : "enrolled"} hasSecondPlan={hasSecondPlan} onHome={() => setStep(69)} onMyData={() => setStep(MY_DATA_STEP)} onRequestMoreData={() => setStep(MY_DATA_STEP)} onViewMyRequests={() => setStep(12)} onTeslaRelationship={() => setStep(78)} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} onSavingsPlanSection={() => setStep(hasSecondPlan ? 84 : savingsPlanStep)} onRedeemOffer={() => { setDemoScreen("offer1"); setStep(36); }} />}
        {/* Savings-plan tab destination for the noDsp / "Approved, No Plan" states.
            Figma frame "Not enrolled" (node 16:82941). */}
        {step === 70 && (
          <MyDataSavingsScreen
            onApplyForDsp={openDsp}
            onLearnMore={() => setStep(57)}
            onHome={() => setStep(homeStep)}
            onMyData={() => setStep(MY_DATA_STEP)}
            onOffers={() => setStep(OFFERS_STEP)}
            onRequestMoreData={() => setStep(MY_DATA_STEP)}
          />
        )}
        {/* Offers tab destination for the two pre-enrolment states. Figma frame
            "Offers" (node 16:83111) is authored for the not-enrolled state; the
            enrolled states route to step 85 instead, via OFFERS_STEP. */}
        {step === 61 && (
          <OffersNotEnrolledScreen
            onRequestMoreData={() => setStep(10)}
            onHome={() => setStep(homeStep)}
            onMyData={() => setStep(MY_DATA_STEP)}
            onSavingsPlan={() => setStep(savingsPlanStep)}
          />
        )}
        {step === 71 && <InitialEmailScreen onViewCertificates={() => { setCertsFlow(true); setStep(1); }} />}
        {step === 72 && <DataCertsLoadingScreen onViewCertificates={() => setStep(73)} onClose={() => setStep(71)} />}
        {/* Cert detail: light Home (certs flow); My data tab still goes to Request Data.
            If a future call site reaches this screen from the 23andMe / DA Home flow, pass "home" there instead. */}
        {/* Home resolves through homeStep, which is 69 for the enrolled states —
            9 falls through to DashboardScreenOneDsp, whereas 69 is OneDspHomeScreen,
            the build of Figma frame 13:73059 and these states' home. */}
        {step === 73 && <DataCertsDetailScreen activeTab="home" onDone={() => setStep(74)} onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} />}
        {step === 74 && <MyCertificatesScreen onHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onSavingsPlan={() => setStep(savingsPlanStep)} onOffers={() => setStep(OFFERS_STEP)} onOpenVehicleRegistration={() => setStep(73)} />}
        {/* Figma 9:89701 — opened by the Tesla tile under "My relationships" on the
            certificates home. Back returns to the screen that opened it (69); the
            Tesla row opens the Tesla company page (79). */}
        {step === 78 && (
          <MyDataRequestsScreen
            variant="certificates"
            onBack={() => goBack(69)}
            onHome={() => setStep(homeStep)}
            onUploadManually={() => setStep(27)}
            onSeeHow={() => setStep(28)}
            onGoToDWCloud={() => setStep(31)}
            onMyData={() => setStep(MY_DATA_STEP)}
            onViewCertificate={() => setStep(79)}
            onSavingsPlan={() => setStep(savingsPlanStep)}
            onOffers={() => setStep(OFFERS_STEP)}
          />
        )}
        {/* Figma 9:6610 — Tesla company page. Back returns to the Accepted list
            (78) that opened it; "View my data certificates" opens step 74. */}
        {step === 79 && (
          <TeslaDataJourneyScreen
            onBack={() => goBack(78)}
            onHome={() => setStep(homeStep)}
            onMyData={() => setStep(MY_DATA_STEP)}
            onViewCertificates={() => setStep(74)}
            onSavingsPlan={() => setStep(savingsPlanStep)}
            onOffers={() => setStep(OFFERS_STEP)}
          />
        )}
        {/* Figma 9:93931 — the savings-plan tab in the certificates flow. Same
            screen as step 56 with the dataCertificates variant, which adds the
            category cards, "Contribute more data" and "Request more data". */}
        {step === 80 && (
          <DspLanding1Screen
            variant="dataCertificates"
            onLearnMore={() => setStep(58)}
            onGoHome={() => setStep(homeStep)}
            onMyData={() => setStep(MY_DATA_STEP)}
            onOffers={() => setStep(OFFERS_STEP)}
            onManageMyPlan={() => { setManagePlan("smart"); setManagePlanBackDest(80); setStep(59); }}
            onCashBalance={() => { setCashBalanceBackDest(80); setStep(66); }}
            onDataBalance={() => setStep(81)}
            onDataContribution={() => setStep(74)}
            onRequestMoreData={() => setStep(MY_DATA_STEP)}
          />
        )}
        {/* Figma 9:94403 — Data Balance, opened by the Data balance card on step 80. */}
        {step === 81 && <DataBalanceScreen onBack={() => goBack(80)} onTransaction={() => setStep(82)} />}
        {/* Figma 9:94266 — the Tesla Model 3 (+Ð 0.08) transaction on step 81. */}
        {step === 82 && <DataTransactionScreen onBack={() => goBack(81)} />}
        {step === 83 && <DspLandingFitnessScreen onBackToAllPlans={() => setStep(84)} onManageMyPlan={() => { setManagePlan("fitness"); setManagePlanBackDest(83); setStep(59); }} onCashBalance={() => setStep(66)} onLearnMore={() => setStep(58)} onGoHome={() => setStep(69)} onMyData={() => setStep(MY_DATA_STEP)} onOffers={() => setStep(OFFERS_STEP)} onViewAllPlans={() => setStep(48)} />}
        {/* Figma 15:34974 — "My Data Savings" all-plans overview, reached from "Back to all plans" on step 83. */}
        {/* No "Manage my plan" control renders on 84 (see DspActivePlansScreen —
            Frame49 isn't in its subtree), so onManageMyPlan here is unreachable;
            "fitness" matches where this screen's card taps already lead (83). */}
        {step === 84 && <DspActivePlansScreen onSavingsPlan={() => setStep(83)} onFitnessPlan={() => setStep(83)} onSmartPlan={() => setStep(56)} onManageMyPlan={() => { setManagePlan("fitness"); setManagePlanBackDest(84); setStep(59); }} onCashBalance={() => setStep(66)} onLearnMore={() => setStep(58)} onGoHome={() => setStep(69)} onMyData={() => setStep(MY_DATA_STEP)} onOffers={() => setStep(OFFERS_STEP)} onViewAllPlans={() => setStep(48)} />}
        {/* Figma 16:83035 — the Offers frame authored for the enrolled states; OFFERS_STEP routes oneDsp/offer1/dataRequestAccepted here instead of 61. */}
        {step === 85 && <OffersEnrolledScreen onGoHome={() => setStep(homeStep)} onMyData={() => setStep(MY_DATA_STEP)} onSavingsPlan={() => setStep(savingsPlanStep)} onClaimOffer={() => setStep(36)} />}
        {step === 33 && (
          <OfferCampaignScreen
            onBack={() => goBack(9)}
            onContinue={() => {
              setEnrollEditLabel(null);
              setEnrollSubStep(1);
              setStep(14);
            }}
            onHome={() => setStep(homeStep)}
            onMyData={() => setStep(MY_DATA_STEP)}
            onSavingsPlan={() => setStep(savingsPlanStep)}
          />
        )}
        {step === 57 && (
          <EnrollInfoScreen
            onBack={() => goBack(9)}
            onRequestData={() => setStep(10)}
          />
        )}
        {step === 58 && (
          <EnrollOffersScreen
            onBack={() => goBack(56)}
            onRequestData={() => setStep(10)}
          />
        )}
      {/* Dynamic Island — device chrome, drawn over the screens. It sits in the
          gap the app's own status bar already leaves between the clock and the
          wifi/battery cluster, so it covers no screen content. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "11px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "125px",
          height: "36px",
          borderRadius: "500px",
          background: "#000000",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      </div>
      </div>

      {/* ── Prototype controls ─────────────────────────────────────────────────
          Deliberately OUTSIDE the device frame above: this is tooling for walking
          the flow, not product UI, so it gets its own surface. Groups the stepper
          and the demo-screen switcher into one panel. */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "12px 16px",
          borderRadius: "14px",
          background: "#0d0d0d",
          border: "1px solid #242424",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
      <PrototypeNav step={step} total={TOTAL_STEPS} onPrev={goPrev} onNext={goNext} />

      {/* Demo-only home-screen switcher. Monospace, gray — a dev tool, not product UI. */}
      {DEMO_MODE && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            padding: 8,
            background: "#1a1a1a",
            borderRadius: 6,
            fontFamily: "monospace",
            maxWidth: "100%",
          }}
        >
          {([
            { key: "noDsp", label: "Onboarding/Enrollment", step: 9 },
            { key: "enrolledNoPlan", label: "Approved, No Plan", step: 9 },
            { key: "oneDsp", label: "Enrolled in a DSP", step: 69 },
            { key: "offer1", label: "Receiving Offers", step: 34 },
            { key: "dataRequestAccepted", label: "View Data Certificates", step: 71 },
          ] as const).map((opt) => {
            const active = demoScreen === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => {
                  // Without this, a DSP-enroll sheet left open (dspMounted/dspVisible)
                  // from a prior "Apply for DSP" tap keeps rendering as a zIndex:200
                  // overlay on top of whatever screen this jumps to, since that overlay
                  // isn't gated by `step`.
                  setDspMounted(false);
                  setDspVisible(false);
                  setDemoScreen(opt.key);
                  setStep(opt.step);
                }}
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  textAlign: "left",
                  padding: "6px 10px",
                  borderRadius: 4,
                  border: "1px solid #333",
                  background: active ? "#333" : "#222",
                  color: active ? "#ddd" : "#888",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
      </div>{/* /prototype controls */}
      </div>{/* /centred stack */}
    </div>
  );
}

/** Prototype stepper control shown beneath the device frame (not part of the app UI). */
function PrototypeNav({
  step,
  total,
  onPrev,
  onNext,
}: {
  step: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const atStart = step === 0;
  const atEnd = step === total - 1;

  const arrowStyle = (disabled: boolean): React.CSSProperties => ({
    width: "36px",
    height: "36px",
    borderRadius: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "var(--color-text-secondary)",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.3 : 1,
    padding: 0,
    transition: "opacity 120ms ease, background 120ms ease",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "8px 12px",
        borderRadius: "500px",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <button type="button" aria-label="Previous screen" onClick={onPrev} disabled={atStart} style={arrowStyle(atStart)}><svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none" style={{ display: "block" }}><path d="M6.4 1L1.4 6L6.4 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>

      <span
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "13px",
          lineHeight: 1,
          color: "var(--color-text-secondary)",
          minWidth: "52px",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {step + 1} / {total}
      </span>

      <button type="button" aria-label="Next screen" onClick={onNext} disabled={atEnd} style={arrowStyle(atEnd)}>
        <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none" style={{ display: "block" }}>
          <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
