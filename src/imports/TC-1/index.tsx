import { useContext } from "react";
import { SmartTermsAcceptContext } from "./accept-context";
import svgPaths from "./svg-3yxa3eb55w";
import imgUntitledDesign81 from "./2f1f4e853f2411e35f12bf6b3ea6d0a5bd096b3a.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Active through
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dec 21, 2027
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fees
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        No fees
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[78px]">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Provided by
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        DrumWave
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-center leading-[1.5] relative shrink-0 text-white w-[342px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Knob() {
  return <div className="bg-white relative rounded-[500px] shadow-[0px_0px_16px_0px_rgba(7,7,7,0.24)] shrink-0 size-[28px]" data-name="Knob" />;
}

function Container() {
  return (
    <div className="bg-[#16be76] content-stretch flex h-[32px] items-center justify-end p-[2px] relative rounded-[500px] shrink-0 w-[56px]" data-name="Container">
      <Knob />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[#e3e3e3] text-[18px]">Auto-renew</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Switch">
        <div className="content-stretch flex items-start relative shrink-0" data-name="_SwitchState">
          <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="_SwitchBase">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#999] text-[14px] w-[299px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5] mb-0">{`Your plan will remain active until {{date}}.`}</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">When auto-renew is on, your plan will continue without interruption.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">If auto-renew is off, your data contributions will be removed from this Data Savings Plan. Your data will remain in your dWallet, and you can join another plan at any time.</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[16px] items-center p-[16px] relative rounded-[16px] shrink-0 w-[347.5px]">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame27 />
      <Frame26 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[342px]">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#e3e3e3] text-[32px] w-[min-content]">Terms and conditions for the Data Savings Plan by DrumWave</p>
      <Frame24 />
      <Frame28 />
      <div className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#999] text-[14px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5] mb-0">{`These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and concerning your access to and use of the Website and the Services. You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms of Use. `}</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">{`These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and concerning your access to and use of the Website and the Services. You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms of Use. `}</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms.</p>
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute left-[-198px] size-[738px] top-[-257px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" height="738" preserveAspectRatio="none" viewBox="0 0 738 738" width="738">
        <g clipPath="url(#clip0_220_3044)" id="Layer_1">
          <path d={svgPaths.p13bb2d70} fill="url(#paint0_linear_220_3044)" fillOpacity="0.4" id="Vector" />
          <path d={svgPaths.p16fa2a80} fill="url(#paint1_linear_220_3044)" fillOpacity="0.4" id="Vector_2" />
          <path d={svgPaths.p758efb0} fill="url(#paint2_linear_220_3044)" fillOpacity="0.4" id="Vector_3" />
          <path d={svgPaths.p30cec100} fill="url(#paint3_linear_220_3044)" fillOpacity="0.4" id="Vector_4" />
          <path d={svgPaths.p366eaf00} fill="url(#paint4_linear_220_3044)" fillOpacity="0.4" id="Vector_5" />
          <path d={svgPaths.p3b7792f0} fill="url(#paint5_linear_220_3044)" fillOpacity="0.4" id="Vector_6" />
          <path d={svgPaths.p19f8dd40} fill="url(#paint6_linear_220_3044)" fillOpacity="0.4" id="Vector_7" />
          <path d={svgPaths.p26bb4c00} fill="url(#paint7_linear_220_3044)" fillOpacity="0.4" id="Vector_8" />
          <path d={svgPaths.p29753900} fill="url(#paint8_linear_220_3044)" fillOpacity="0.4" id="Vector_9" />
          <path d={svgPaths.p102ddc00} fill="url(#paint9_linear_220_3044)" fillOpacity="0.4" id="Vector_10" />
          <path d={svgPaths.p3fd4d200} fill="url(#paint10_linear_220_3044)" fillOpacity="0.4" id="Vector_11" />
          <path d={svgPaths.p34a83740} fill="url(#paint11_linear_220_3044)" fillOpacity="0.4" id="Vector_12" />
          <path d={svgPaths.p30991e00} fill="url(#paint12_linear_220_3044)" fillOpacity="0.4" id="Vector_13" />
          <path d={svgPaths.pe300e0} fill="url(#paint13_linear_220_3044)" fillOpacity="0.4" id="Vector_14" />
          <path d={svgPaths.p20bc000} fill="url(#paint14_linear_220_3044)" fillOpacity="0.4" id="Vector_15" />
          <path d={svgPaths.p2f2f2300} fill="url(#paint15_linear_220_3044)" fillOpacity="0.4" id="Vector_16" />
          <path d={svgPaths.p6e10980} fill="url(#paint16_linear_220_3044)" fillOpacity="0.4" id="Vector_17" />
          <path d={svgPaths.p1210dc80} fill="url(#paint17_linear_220_3044)" fillOpacity="0.4" id="Vector_18" />
          <path d={svgPaths.p375c8300} fill="url(#paint18_linear_220_3044)" fillOpacity="0.4" id="Vector_19" />
          <path d={svgPaths.p36c30500} fill="url(#paint19_linear_220_3044)" fillOpacity="0.4" id="Vector_20" />
          <path d={svgPaths.p12f26900} fill="url(#paint20_linear_220_3044)" fillOpacity="0.4" id="Vector_21" />
          <path d={svgPaths.p1275ef00} fill="url(#paint21_linear_220_3044)" fillOpacity="0.4" id="Vector_22" />
          <path d={svgPaths.p24274800} fill="url(#paint22_linear_220_3044)" fillOpacity="0.4" id="Vector_23" />
          <path d={svgPaths.p39aa4b00} fill="url(#paint23_linear_220_3044)" fillOpacity="0.4" id="Vector_24" />
          <path d={svgPaths.p301a9300} fill="url(#paint24_linear_220_3044)" fillOpacity="0.4" id="Vector_25" />
          <path d={svgPaths.pd63f900} fill="url(#paint25_linear_220_3044)" fillOpacity="0.4" id="Vector_26" />
          <path d={svgPaths.p2166ce00} fill="url(#paint26_linear_220_3044)" fillOpacity="0.4" id="Vector_27" />
          <path d={svgPaths.p1704e200} fill="url(#paint27_linear_220_3044)" fillOpacity="0.4" id="Vector_28" />
          <path d={svgPaths.paf4e580} fill="url(#paint28_linear_220_3044)" fillOpacity="0.4" id="Vector_29" />
          <path d={svgPaths.pbd8e200} fill="url(#paint29_linear_220_3044)" fillOpacity="0.4" id="Vector_30" />
          <path d={svgPaths.p22881600} fill="url(#paint30_linear_220_3044)" fillOpacity="0.4" id="Vector_31" />
          <path d={svgPaths.p1e851900} fill="url(#paint31_linear_220_3044)" fillOpacity="0.4" id="Vector_32" />
          <path d={svgPaths.p33794300} fill="url(#paint32_linear_220_3044)" fillOpacity="0.4" id="Vector_33" />
          <path d={svgPaths.pd724e00} fill="url(#paint33_linear_220_3044)" fillOpacity="0.4" id="Vector_34" />
          <path d={svgPaths.p24f8dc00} fill="url(#paint34_linear_220_3044)" fillOpacity="0.4" id="Vector_35" />
          <path d={svgPaths.p2646f500} fill="url(#paint35_linear_220_3044)" fillOpacity="0.4" id="Vector_36" />
          <path d={svgPaths.p33113400} fill="url(#paint36_linear_220_3044)" fillOpacity="0.4" id="Vector_37" />
          <path d={svgPaths.p1ee88f00} fill="url(#paint37_linear_220_3044)" fillOpacity="0.4" id="Vector_38" />
          <path d={svgPaths.p3d5a100} fill="url(#paint38_linear_220_3044)" fillOpacity="0.4" id="Vector_39" />
          <path d={svgPaths.p44d9f30} fill="url(#paint39_linear_220_3044)" fillOpacity="0.4" id="Vector_40" />
          <path d={svgPaths.pd381c00} fill="url(#paint40_linear_220_3044)" fillOpacity="0.4" id="Vector_41" />
          <path d={svgPaths.p6617880} fill="url(#paint41_linear_220_3044)" fillOpacity="0.4" id="Vector_42" />
          <path d={svgPaths.p15a59f00} fill="url(#paint42_linear_220_3044)" fillOpacity="0.4" id="Vector_43" />
          <path d={svgPaths.p3896f6c0} fill="url(#paint43_linear_220_3044)" fillOpacity="0.4" id="Vector_44" />
          <path d={svgPaths.p14cdb200} fill="url(#paint44_linear_220_3044)" fillOpacity="0.4" id="Vector_45" />
          <path d={svgPaths.p18718500} fill="url(#paint45_linear_220_3044)" fillOpacity="0.4" id="Vector_46" />
          <path d={svgPaths.p2eb71800} fill="url(#paint46_linear_220_3044)" fillOpacity="0.4" id="Vector_47" />
          <path d={svgPaths.p25a823f0} fill="url(#paint47_linear_220_3044)" fillOpacity="0.4" id="Vector_48" />
          <path d={svgPaths.p3b364400} fill="url(#paint48_linear_220_3044)" fillOpacity="0.4" id="Vector_49" />
          <path d={svgPaths.p1270fa00} fill="url(#paint49_linear_220_3044)" fillOpacity="0.4" id="Vector_50" />
          <path d={svgPaths.p396a370} fill="url(#paint50_linear_220_3044)" fillOpacity="0.4" id="Vector_51" />
          <path d={svgPaths.p21608d00} fill="url(#paint51_linear_220_3044)" fillOpacity="0.4" id="Vector_52" />
          <path d={svgPaths.p19e9d800} fill="url(#paint52_linear_220_3044)" fillOpacity="0.4" id="Vector_53" />
          <path d={svgPaths.p38e2e380} fill="url(#paint53_linear_220_3044)" fillOpacity="0.4" id="Vector_54" />
          <path d={svgPaths.p1bb9f680} fill="url(#paint54_linear_220_3044)" fillOpacity="0.4" id="Vector_55" />
          <path d={svgPaths.p34723300} fill="url(#paint55_linear_220_3044)" fillOpacity="0.4" id="Vector_56" />
          <path d={svgPaths.p1692e600} fill="url(#paint56_linear_220_3044)" fillOpacity="0.4" id="Vector_57" />
          <path d={svgPaths.p23f9fb40} fill="url(#paint57_linear_220_3044)" fillOpacity="0.4" id="Vector_58" />
          <path d={svgPaths.p258fc000} fill="url(#paint58_linear_220_3044)" fillOpacity="0.4" id="Vector_59" />
          <path d={svgPaths.p28ed800} fill="url(#paint59_linear_220_3044)" fillOpacity="0.4" id="Vector_60" />
          <path d={svgPaths.p3e133d00} fill="url(#paint60_linear_220_3044)" fillOpacity="0.4" id="Vector_61" />
          <path d={svgPaths.p3d81d440} fill="url(#paint61_linear_220_3044)" fillOpacity="0.4" id="Vector_62" />
          <path d={svgPaths.pee19800} fill="url(#paint62_linear_220_3044)" fillOpacity="0.4" id="Vector_63" />
          <path d={svgPaths.p253ec780} fill="url(#paint63_linear_220_3044)" fillOpacity="0.4" id="Vector_64" />
          <path d={svgPaths.p3a410680} fill="url(#paint64_linear_220_3044)" fillOpacity="0.4" id="Vector_65" />
          <path d={svgPaths.p7e43e00} fill="url(#paint65_linear_220_3044)" fillOpacity="0.4" id="Vector_66" />
          <path d={svgPaths.p1e79500} fill="url(#paint66_linear_220_3044)" fillOpacity="0.4" id="Vector_67" />
          <path d={svgPaths.p1b220200} fill="url(#paint67_linear_220_3044)" fillOpacity="0.4" id="Vector_68" />
          <path d={svgPaths.p37efb80} fill="url(#paint68_linear_220_3044)" fillOpacity="0.4" id="Vector_69" />
          <path d={svgPaths.p1b401600} fill="url(#paint69_linear_220_3044)" fillOpacity="0.4" id="Vector_70" />
          <path d={svgPaths.p2435f400} fill="url(#paint70_linear_220_3044)" fillOpacity="0.4" id="Vector_71" />
          <path d={svgPaths.pf8c7f00} fill="url(#paint71_linear_220_3044)" fillOpacity="0.4" id="Vector_72" />
          <path d={svgPaths.p15d77600} fill="url(#paint72_linear_220_3044)" fillOpacity="0.4" id="Vector_73" />
          <path d={svgPaths.pf404880} fill="url(#paint73_linear_220_3044)" fillOpacity="0.4" id="Vector_74" />
          <path d={svgPaths.p5efc200} fill="url(#paint74_linear_220_3044)" fillOpacity="0.4" id="Vector_75" />
          <path d={svgPaths.pb3ac700} fill="url(#paint75_linear_220_3044)" fillOpacity="0.4" id="Vector_76" />
          <path d={svgPaths.pfa06e80} fill="url(#paint76_linear_220_3044)" fillOpacity="0.4" id="Vector_77" />
          <path d={svgPaths.p14d67d00} fill="url(#paint77_linear_220_3044)" fillOpacity="0.4" id="Vector_78" />
          <path d={svgPaths.p1fd60c80} fill="url(#paint78_linear_220_3044)" fillOpacity="0.4" id="Vector_79" />
          <path d={svgPaths.p218cf280} fill="url(#paint79_linear_220_3044)" fillOpacity="0.4" id="Vector_80" />
          <path d={svgPaths.p1a820100} fill="url(#paint80_linear_220_3044)" fillOpacity="0.4" id="Vector_81" />
          <path d={svgPaths.p13c00400} fill="url(#paint81_linear_220_3044)" fillOpacity="0.4" id="Vector_82" />
          <path d={svgPaths.p208bc500} fill="url(#paint82_linear_220_3044)" fillOpacity="0.4" id="Vector_83" />
          <path d={svgPaths.p25b4e740} fill="url(#paint83_linear_220_3044)" fillOpacity="0.4" id="Vector_84" />
          <path d={svgPaths.pdbeba80} fill="url(#paint84_linear_220_3044)" fillOpacity="0.4" id="Vector_85" />
          <path d={svgPaths.p3aec8580} fill="url(#paint85_linear_220_3044)" fillOpacity="0.4" id="Vector_86" />
          <path d={svgPaths.p31a86200} fill="url(#paint86_linear_220_3044)" fillOpacity="0.4" id="Vector_87" />
          <path d={svgPaths.pcc32880} fill="url(#paint87_linear_220_3044)" fillOpacity="0.4" id="Vector_88" />
          <path d={svgPaths.p346a0000} fill="url(#paint88_linear_220_3044)" fillOpacity="0.4" id="Vector_89" />
          <path d={svgPaths.p6952380} fill="url(#paint89_linear_220_3044)" fillOpacity="0.4" id="Vector_90" />
          <path d={svgPaths.p500ed00} fill="url(#paint90_linear_220_3044)" fillOpacity="0.4" id="Vector_91" />
          <path d={svgPaths.p133a0e80} fill="url(#paint91_linear_220_3044)" fillOpacity="0.4" id="Vector_92" />
          <path d={svgPaths.p3875f200} fill="url(#paint92_linear_220_3044)" fillOpacity="0.4" id="Vector_93" />
          <path d={svgPaths.p4fbebb0} fill="url(#paint93_linear_220_3044)" fillOpacity="0.4" id="Vector_94" />
          <path d={svgPaths.p250d100} fill="url(#paint94_linear_220_3044)" fillOpacity="0.4" id="Vector_95" />
          <path d={svgPaths.p154f0c80} fill="url(#paint95_linear_220_3044)" fillOpacity="0.4" id="Vector_96" />
          <path d={svgPaths.p1063e480} fill="url(#paint96_linear_220_3044)" fillOpacity="0.4" id="Vector_97" />
          <path d={svgPaths.p39126300} fill="url(#paint97_linear_220_3044)" fillOpacity="0.4" id="Vector_98" />
          <path d={svgPaths.p22171980} fill="url(#paint98_linear_220_3044)" fillOpacity="0.4" id="Vector_99" />
          <path d={svgPaths.p3cb4f180} fill="url(#paint99_linear_220_3044)" fillOpacity="0.4" id="Vector_100" />
          <path d={svgPaths.p39dc7e80} fill="url(#paint100_linear_220_3044)" fillOpacity="0.4" id="Vector_101" />
          <path d={svgPaths.p79ce700} fill="url(#paint101_linear_220_3044)" fillOpacity="0.4" id="Vector_102" />
          <path d={svgPaths.p31aa980} fill="url(#paint102_linear_220_3044)" fillOpacity="0.4" id="Vector_103" />
          <path d={svgPaths.p7212400} fill="url(#paint103_linear_220_3044)" fillOpacity="0.4" id="Vector_104" />
          <path d={svgPaths.p3f7f780} fill="url(#paint104_linear_220_3044)" fillOpacity="0.4" id="Vector_105" />
          <path d={svgPaths.p103a3600} fill="url(#paint105_linear_220_3044)" fillOpacity="0.4" id="Vector_106" />
          <path d={svgPaths.p2d169100} fill="url(#paint106_linear_220_3044)" fillOpacity="0.4" id="Vector_107" />
          <path d={svgPaths.p9f31b00} fill="url(#paint107_linear_220_3044)" fillOpacity="0.4" id="Vector_108" />
          <path d={svgPaths.p160f8b70} fill="url(#paint108_linear_220_3044)" fillOpacity="0.4" id="Vector_109" />
          <path d={svgPaths.p11174480} fill="url(#paint109_linear_220_3044)" fillOpacity="0.4" id="Vector_110" />
          <path d={svgPaths.p27f7b780} fill="url(#paint110_linear_220_3044)" fillOpacity="0.4" id="Vector_111" />
          <path d={svgPaths.p2ac2b80} fill="url(#paint111_linear_220_3044)" fillOpacity="0.4" id="Vector_112" />
          <path d={svgPaths.p212d1800} fill="url(#paint112_linear_220_3044)" fillOpacity="0.4" id="Vector_113" />
          <path d={svgPaths.pf899600} fill="url(#paint113_linear_220_3044)" fillOpacity="0.4" id="Vector_114" />
          <path d={svgPaths.p1003e00} fill="url(#paint114_linear_220_3044)" fillOpacity="0.4" id="Vector_115" />
          <path d={svgPaths.p34aaf080} fill="url(#paint115_linear_220_3044)" fillOpacity="0.4" id="Vector_116" />
          <path d={svgPaths.pbc36b00} fill="url(#paint116_linear_220_3044)" fillOpacity="0.4" id="Vector_117" />
          <path d={svgPaths.pb83f700} fill="url(#paint117_linear_220_3044)" fillOpacity="0.4" id="Vector_118" />
          <path d={svgPaths.p5029700} fill="url(#paint118_linear_220_3044)" fillOpacity="0.4" id="Vector_119" />
          <path d={svgPaths.p213ad300} fill="url(#paint119_linear_220_3044)" fillOpacity="0.4" id="Vector_120" />
          <path d={svgPaths.p287a1000} fill="url(#paint120_linear_220_3044)" fillOpacity="0.4" id="Vector_121" />
          <path d={svgPaths.p3ac88600} fill="url(#paint121_linear_220_3044)" fillOpacity="0.4" id="Vector_122" />
          <path d={svgPaths.p2aceb680} fill="url(#paint122_linear_220_3044)" fillOpacity="0.4" id="Vector_123" />
          <path d={svgPaths.p20234ec0} fill="url(#paint123_linear_220_3044)" fillOpacity="0.4" id="Vector_124" />
          <path d={svgPaths.p6725000} fill="url(#paint124_linear_220_3044)" fillOpacity="0.4" id="Vector_125" />
          <path d={svgPaths.pa16d500} fill="url(#paint125_linear_220_3044)" fillOpacity="0.4" id="Vector_126" />
          <path d={svgPaths.p2cf14400} fill="url(#paint126_linear_220_3044)" fillOpacity="0.4" id="Vector_127" />
          <path d={svgPaths.p34eeae70} fill="url(#paint127_linear_220_3044)" fillOpacity="0.4" id="Vector_128" />
          <path d={svgPaths.p1d268300} fill="url(#paint128_linear_220_3044)" fillOpacity="0.4" id="Vector_129" />
          <path d={svgPaths.p1374f180} fill="url(#paint129_linear_220_3044)" fillOpacity="0.4" id="Vector_130" />
          <path d={svgPaths.p6b93400} fill="url(#paint130_linear_220_3044)" fillOpacity="0.4" id="Vector_131" />
          <path d={svgPaths.p35a20f80} fill="url(#paint131_linear_220_3044)" fillOpacity="0.4" id="Vector_132" />
          <path d={svgPaths.p1aca7400} fill="url(#paint132_linear_220_3044)" fillOpacity="0.4" id="Vector_133" />
          <path d={svgPaths.p1bd728f2} fill="url(#paint133_linear_220_3044)" fillOpacity="0.4" id="Vector_134" />
          <path d={svgPaths.pb46a240} fill="url(#paint134_linear_220_3044)" fillOpacity="0.4" id="Vector_135" />
          <path d={svgPaths.p1957dd80} fill="url(#paint135_linear_220_3044)" fillOpacity="0.4" id="Vector_136" />
          <path d={svgPaths.p1c1f8000} fill="url(#paint136_linear_220_3044)" fillOpacity="0.4" id="Vector_137" />
          <path d={svgPaths.p14e80080} fill="url(#paint137_linear_220_3044)" fillOpacity="0.4" id="Vector_138" />
          <path d={svgPaths.p325b8700} fill="url(#paint138_linear_220_3044)" fillOpacity="0.4" id="Vector_139" />
          <path d={svgPaths.p30780100} fill="url(#paint139_linear_220_3044)" fillOpacity="0.4" id="Vector_140" />
          <path d={svgPaths.p45a8400} fill="url(#paint140_linear_220_3044)" fillOpacity="0.4" id="Vector_141" />
          <path d={svgPaths.p2267da00} fill="url(#paint141_linear_220_3044)" fillOpacity="0.4" id="Vector_142" />
          <path d={svgPaths.p19a2a200} fill="url(#paint142_linear_220_3044)" fillOpacity="0.4" id="Vector_143" />
          <path d={svgPaths.p1dd94600} fill="url(#paint143_linear_220_3044)" fillOpacity="0.4" id="Vector_144" />
          <path d={svgPaths.p43d5180} fill="url(#paint144_linear_220_3044)" fillOpacity="0.4" id="Vector_145" />
          <path d={svgPaths.p13c85700} fill="url(#paint145_linear_220_3044)" fillOpacity="0.4" id="Vector_146" />
          <path d={svgPaths.p3919d1f0} fill="url(#paint146_linear_220_3044)" fillOpacity="0.4" id="Vector_147" />
          <path d={svgPaths.p7bca200} fill="url(#paint147_linear_220_3044)" fillOpacity="0.4" id="Vector_148" />
          <path d={svgPaths.p2cfaf800} fill="url(#paint148_linear_220_3044)" fillOpacity="0.4" id="Vector_149" />
          <path d={svgPaths.p17495500} fill="url(#paint149_linear_220_3044)" fillOpacity="0.4" id="Vector_150" />
          <path d={svgPaths.p3e5aa9c0} fill="url(#paint150_linear_220_3044)" fillOpacity="0.4" id="Vector_151" />
          <path d={svgPaths.p7270f80} fill="url(#paint151_linear_220_3044)" fillOpacity="0.4" id="Vector_152" />
          <path d={svgPaths.p176307c0} fill="url(#paint152_linear_220_3044)" fillOpacity="0.4" id="Vector_153" />
          <path d={svgPaths.p19c24c80} fill="url(#paint153_linear_220_3044)" fillOpacity="0.4" id="Vector_154" />
          <path d={svgPaths.p373e92c0} fill="url(#paint154_linear_220_3044)" fillOpacity="0.4" id="Vector_155" />
          <path d={svgPaths.p346ef800} fill="url(#paint155_linear_220_3044)" fillOpacity="0.4" id="Vector_156" />
          <path d={svgPaths.p1ad9cc00} fill="url(#paint156_linear_220_3044)" fillOpacity="0.4" id="Vector_157" />
          <path d={svgPaths.p1d386900} fill="url(#paint157_linear_220_3044)" fillOpacity="0.4" id="Vector_158" />
          <path d={svgPaths.p24252d00} fill="url(#paint158_linear_220_3044)" fillOpacity="0.4" id="Vector_159" />
          <path d={svgPaths.p266b7f00} fill="url(#paint159_linear_220_3044)" fillOpacity="0.4" id="Vector_160" />
          <path d={svgPaths.p372baf00} fill="url(#paint160_linear_220_3044)" fillOpacity="0.4" id="Vector_161" />
          <path d={svgPaths.p32e125f0} fill="url(#paint161_linear_220_3044)" fillOpacity="0.4" id="Vector_162" />
          <path d={svgPaths.p3a065d80} fill="url(#paint162_linear_220_3044)" fillOpacity="0.4" id="Vector_163" />
          <path d={svgPaths.p22c5db00} fill="url(#paint163_linear_220_3044)" fillOpacity="0.4" id="Vector_164" />
          <path d={svgPaths.p1abe5180} fill="url(#paint164_linear_220_3044)" fillOpacity="0.4" id="Vector_165" />
          <path d={svgPaths.p2e5e6600} fill="url(#paint165_linear_220_3044)" fillOpacity="0.4" id="Vector_166" />
          <path d={svgPaths.p5826700} fill="url(#paint166_linear_220_3044)" fillOpacity="0.4" id="Vector_167" />
          <path d={svgPaths.p4bb85c0} fill="url(#paint167_linear_220_3044)" fillOpacity="0.4" id="Vector_168" />
          <path d={svgPaths.p195a4900} fill="url(#paint168_linear_220_3044)" fillOpacity="0.4" id="Vector_169" />
          <path d={svgPaths.p10f96280} fill="url(#paint169_linear_220_3044)" fillOpacity="0.4" id="Vector_170" />
          <path d={svgPaths.p2be4c300} fill="url(#paint170_linear_220_3044)" fillOpacity="0.4" id="Vector_171" />
          <path d={svgPaths.p58c9000} fill="url(#paint171_linear_220_3044)" fillOpacity="0.4" id="Vector_172" />
          <path d={svgPaths.p16dedc00} fill="url(#paint172_linear_220_3044)" fillOpacity="0.4" id="Vector_173" />
          <path d={svgPaths.p3e238e00} fill="url(#paint173_linear_220_3044)" fillOpacity="0.4" id="Vector_174" />
          <path d={svgPaths.p220edc00} fill="url(#paint174_linear_220_3044)" fillOpacity="0.4" id="Vector_175" />
          <path d={svgPaths.p396d3500} fill="url(#paint175_linear_220_3044)" fillOpacity="0.4" id="Vector_176" />
          <path d={svgPaths.p3f8bf900} fill="url(#paint176_linear_220_3044)" fillOpacity="0.4" id="Vector_177" />
          <path d={svgPaths.pa55d480} fill="url(#paint177_linear_220_3044)" fillOpacity="0.4" id="Vector_178" />
          <path d={svgPaths.p24a87380} fill="url(#paint178_linear_220_3044)" fillOpacity="0.4" id="Vector_179" />
          <path d={svgPaths.p14172080} fill="url(#paint179_linear_220_3044)" fillOpacity="0.4" id="Vector_180" />
          <path d={svgPaths.p31ef7b71} fill="url(#paint180_linear_220_3044)" fillOpacity="0.4" id="Vector_181" />
          <path d={svgPaths.p10fa5e00} fill="url(#paint181_linear_220_3044)" fillOpacity="0.4" id="Vector_182" />
          <path d={svgPaths.p2737ed00} fill="url(#paint182_linear_220_3044)" fillOpacity="0.4" id="Vector_183" />
          <path d={svgPaths.p2e2976f0} fill="url(#paint183_linear_220_3044)" fillOpacity="0.4" id="Vector_184" />
          <path d={svgPaths.p3a261680} fill="url(#paint184_linear_220_3044)" fillOpacity="0.4" id="Vector_185" />
          <path d={svgPaths.p354c63c0} fill="url(#paint185_linear_220_3044)" fillOpacity="0.4" id="Vector_186" />
          <path d={svgPaths.p2d368500} fill="url(#paint186_linear_220_3044)" fillOpacity="0.4" id="Vector_187" />
          <path d={svgPaths.p3ac29700} fill="url(#paint187_linear_220_3044)" fillOpacity="0.4" id="Vector_188" />
          <path d={svgPaths.p12f5c000} fill="url(#paint188_linear_220_3044)" fillOpacity="0.4" id="Vector_189" />
          <path d={svgPaths.p36652e80} fill="url(#paint189_linear_220_3044)" fillOpacity="0.4" id="Vector_190" />
          <path d={svgPaths.p463bf00} fill="url(#paint190_linear_220_3044)" fillOpacity="0.4" id="Vector_191" />
          <path d={svgPaths.p224fe900} fill="url(#paint191_linear_220_3044)" fillOpacity="0.4" id="Vector_192" />
          <path d={svgPaths.p24e05880} fill="url(#paint192_linear_220_3044)" fillOpacity="0.4" id="Vector_193" />
          <path d={svgPaths.p28c74700} fill="url(#paint193_linear_220_3044)" fillOpacity="0.4" id="Vector_194" />
          <path d={svgPaths.p2ebcd300} fill="url(#paint194_linear_220_3044)" fillOpacity="0.4" id="Vector_195" />
          <path d={svgPaths.p2835a200} fill="url(#paint195_linear_220_3044)" fillOpacity="0.4" id="Vector_196" />
          <path d={svgPaths.p3ea2f280} fill="url(#paint196_linear_220_3044)" fillOpacity="0.4" id="Vector_197" />
          <path d={svgPaths.p605c00} fill="url(#paint197_linear_220_3044)" fillOpacity="0.4" id="Vector_198" />
          <path d={svgPaths.p2b89b000} fill="url(#paint198_linear_220_3044)" fillOpacity="0.4" id="Vector_199" />
          <path d={svgPaths.p2b1d5300} fill="url(#paint199_linear_220_3044)" fillOpacity="0.4" id="Vector_200" />
          <path d={svgPaths.p21dc3500} fill="url(#paint200_linear_220_3044)" fillOpacity="0.4" id="Vector_201" />
          <path d={svgPaths.p2e2b6ac0} fill="url(#paint201_linear_220_3044)" fillOpacity="0.4" id="Vector_202" />
          <path d={svgPaths.p3cc29130} fill="url(#paint202_linear_220_3044)" fillOpacity="0.4" id="Vector_203" />
          <path d={svgPaths.p16891b00} fill="url(#paint203_linear_220_3044)" fillOpacity="0.4" id="Vector_204" />
          <path d={svgPaths.p27044e00} fill="url(#paint204_linear_220_3044)" fillOpacity="0.4" id="Vector_205" />
          <path d={svgPaths.p1b64dd00} fill="url(#paint205_linear_220_3044)" fillOpacity="0.4" id="Vector_206" />
          <path d={svgPaths.p3062c200} fill="url(#paint206_linear_220_3044)" fillOpacity="0.4" id="Vector_207" />
          <path d={svgPaths.p27f8b880} fill="url(#paint207_linear_220_3044)" fillOpacity="0.4" id="Vector_208" />
          <path d={svgPaths.p3e992b00} fill="url(#paint208_linear_220_3044)" fillOpacity="0.4" id="Vector_209" />
          <path d={svgPaths.p28b0fa00} fill="url(#paint209_linear_220_3044)" fillOpacity="0.4" id="Vector_210" />
          <path d={svgPaths.p2b0c880} fill="url(#paint210_linear_220_3044)" fillOpacity="0.4" id="Vector_211" />
          <path d={svgPaths.pa52bfb2} fill="url(#paint211_linear_220_3044)" fillOpacity="0.4" id="Vector_212" />
          <path d={svgPaths.p29a57700} fill="url(#paint212_linear_220_3044)" fillOpacity="0.4" id="Vector_213" />
          <path d={svgPaths.p1afb3100} fill="url(#paint213_linear_220_3044)" fillOpacity="0.4" id="Vector_214" />
          <path d={svgPaths.p3d7ae310} fill="url(#paint214_linear_220_3044)" fillOpacity="0.4" id="Vector_215" />
          <path d={svgPaths.p2bc69800} fill="url(#paint215_linear_220_3044)" fillOpacity="0.4" id="Vector_216" />
          <path d={svgPaths.p1e7a3200} fill="url(#paint216_linear_220_3044)" fillOpacity="0.4" id="Vector_217" />
          <path d={svgPaths.p247176c0} fill="url(#paint217_linear_220_3044)" fillOpacity="0.4" id="Vector_218" />
          <path d={svgPaths.pc89f080} fill="url(#paint218_linear_220_3044)" fillOpacity="0.4" id="Vector_219" />
          <path d={svgPaths.p9ff6c00} fill="url(#paint219_linear_220_3044)" fillOpacity="0.4" id="Vector_220" />
          <path d={svgPaths.p3b9e13c0} fill="url(#paint220_linear_220_3044)" fillOpacity="0.4" id="Vector_221" />
          <path d={svgPaths.p59e2f00} fill="url(#paint221_linear_220_3044)" fillOpacity="0.4" id="Vector_222" />
          <path d={svgPaths.p38fafb00} fill="url(#paint222_linear_220_3044)" fillOpacity="0.4" id="Vector_223" />
          <path d={svgPaths.pf45e000} fill="url(#paint223_linear_220_3044)" fillOpacity="0.4" id="Vector_224" />
          <path d={svgPaths.p1b71a600} fill="url(#paint224_linear_220_3044)" fillOpacity="0.4" id="Vector_225" />
          <path d={svgPaths.p3688b9c0} fill="url(#paint225_linear_220_3044)" fillOpacity="0.4" id="Vector_226" />
          <path d={svgPaths.pcdcf2f0} fill="url(#paint226_linear_220_3044)" fillOpacity="0.4" id="Vector_227" />
          <path d={svgPaths.pcc87100} fill="url(#paint227_linear_220_3044)" fillOpacity="0.4" id="Vector_228" />
          <path d={svgPaths.p3a194400} fill="url(#paint228_linear_220_3044)" fillOpacity="0.4" id="Vector_229" />
          <path d={svgPaths.p14c80900} fill="url(#paint229_linear_220_3044)" fillOpacity="0.4" id="Vector_230" />
          <path d={svgPaths.p1b005800} fill="url(#paint230_linear_220_3044)" fillOpacity="0.4" id="Vector_231" />
          <path d={svgPaths.p10930c80} fill="url(#paint231_linear_220_3044)" fillOpacity="0.4" id="Vector_232" />
          <path d={svgPaths.p1dd9ae00} fill="url(#paint232_linear_220_3044)" fillOpacity="0.4" id="Vector_233" />
          <path d={svgPaths.p11c12700} fill="url(#paint233_linear_220_3044)" fillOpacity="0.4" id="Vector_234" />
          <path d={svgPaths.p31692740} fill="url(#paint234_linear_220_3044)" fillOpacity="0.4" id="Vector_235" />
          <path d={svgPaths.p6000600} fill="url(#paint235_linear_220_3044)" fillOpacity="0.4" id="Vector_236" />
          <path d={svgPaths.p130d6d80} fill="url(#paint236_linear_220_3044)" fillOpacity="0.4" id="Vector_237" />
          <path d={svgPaths.p3d706380} fill="url(#paint237_linear_220_3044)" fillOpacity="0.4" id="Vector_238" />
          <path d={svgPaths.p17c59380} fill="url(#paint238_linear_220_3044)" fillOpacity="0.4" id="Vector_239" />
          <path d={svgPaths.pe049400} fill="url(#paint239_linear_220_3044)" fillOpacity="0.4" id="Vector_240" />
          <path d={svgPaths.p388cf200} fill="url(#paint240_linear_220_3044)" fillOpacity="0.4" id="Vector_241" />
          <path d={svgPaths.p38309fc0} fill="url(#paint241_linear_220_3044)" fillOpacity="0.4" id="Vector_242" />
          <path d={svgPaths.p2ee095c0} fill="url(#paint242_linear_220_3044)" fillOpacity="0.4" id="Vector_243" />
          <path d={svgPaths.p3f4af480} fill="url(#paint243_linear_220_3044)" fillOpacity="0.4" id="Vector_244" />
          <path d={svgPaths.p21361600} fill="url(#paint244_linear_220_3044)" fillOpacity="0.4" id="Vector_245" />
          <path d={svgPaths.p2ed66480} fill="url(#paint245_linear_220_3044)" fillOpacity="0.4" id="Vector_246" />
          <path d={svgPaths.p176af200} fill="url(#paint246_linear_220_3044)" fillOpacity="0.4" id="Vector_247" />
          <path d={svgPaths.pae198c0} fill="url(#paint247_linear_220_3044)" fillOpacity="0.4" id="Vector_248" />
          <path d={svgPaths.p2b52eb00} fill="url(#paint248_linear_220_3044)" fillOpacity="0.4" id="Vector_249" />
          <path d={svgPaths.p153ee580} fill="url(#paint249_linear_220_3044)" fillOpacity="0.4" id="Vector_250" />
          <path d={svgPaths.p17bc2300} fill="url(#paint250_linear_220_3044)" fillOpacity="0.4" id="Vector_251" />
          <path d={svgPaths.p54371c0} fill="url(#paint251_linear_220_3044)" fillOpacity="0.4" id="Vector_252" />
          <path d={svgPaths.p38e9c500} fill="url(#paint252_linear_220_3044)" fillOpacity="0.4" id="Vector_253" />
          <path d={svgPaths.p169f8c40} fill="url(#paint253_linear_220_3044)" fillOpacity="0.4" id="Vector_254" />
          <path d={svgPaths.p3916e200} fill="url(#paint254_linear_220_3044)" fillOpacity="0.4" id="Vector_255" />
          <path d={svgPaths.p285f7910} fill="url(#paint255_linear_220_3044)" fillOpacity="0.4" id="Vector_256" />
          <path d={svgPaths.p10563800} fill="url(#paint256_linear_220_3044)" fillOpacity="0.4" id="Vector_257" />
          <path d={svgPaths.p2cde8d80} fill="url(#paint257_linear_220_3044)" fillOpacity="0.4" id="Vector_258" />
          <path d={svgPaths.p3cd64000} fill="url(#paint258_linear_220_3044)" fillOpacity="0.4" id="Vector_259" />
          <path d={svgPaths.p207e9270} fill="url(#paint259_linear_220_3044)" fillOpacity="0.4" id="Vector_260" />
          <path d={svgPaths.p26d26200} fill="url(#paint260_linear_220_3044)" fillOpacity="0.4" id="Vector_261" />
          <path d={svgPaths.p33086d00} fill="url(#paint261_linear_220_3044)" fillOpacity="0.4" id="Vector_262" />
          <path d={svgPaths.p36416180} fill="url(#paint262_linear_220_3044)" fillOpacity="0.4" id="Vector_263" />
          <path d={svgPaths.p1e2bc00} fill="url(#paint263_linear_220_3044)" fillOpacity="0.4" id="Vector_264" />
          <path d={svgPaths.p7eefc00} fill="url(#paint264_linear_220_3044)" fillOpacity="0.4" id="Vector_265" />
          <path d={svgPaths.p10344b60} fill="url(#paint265_linear_220_3044)" fillOpacity="0.4" id="Vector_266" />
          <path d={svgPaths.p3d5a2c00} fill="url(#paint266_linear_220_3044)" fillOpacity="0.4" id="Vector_267" />
          <path d={svgPaths.p8964600} fill="url(#paint267_linear_220_3044)" fillOpacity="0.4" id="Vector_268" />
          <path d={svgPaths.p35166500} fill="url(#paint268_linear_220_3044)" fillOpacity="0.4" id="Vector_269" />
          <path d={svgPaths.p2ca36b00} fill="url(#paint269_linear_220_3044)" fillOpacity="0.4" id="Vector_270" />
          <path d={svgPaths.p27c060f0} fill="url(#paint270_linear_220_3044)" fillOpacity="0.4" id="Vector_271" />
          <path d={svgPaths.p39895af0} fill="url(#paint271_linear_220_3044)" fillOpacity="0.4" id="Vector_272" />
          <path d={svgPaths.p1ee4c00} fill="url(#paint272_linear_220_3044)" fillOpacity="0.4" id="Vector_273" />
          <path d={svgPaths.p26013d00} fill="url(#paint273_linear_220_3044)" fillOpacity="0.4" id="Vector_274" />
          <path d={svgPaths.p3b86b700} fill="url(#paint274_linear_220_3044)" fillOpacity="0.4" id="Vector_275" />
          <path d={svgPaths.p32144240} fill="url(#paint275_linear_220_3044)" fillOpacity="0.4" id="Vector_276" />
          <path d={svgPaths.p1e467700} fill="url(#paint276_linear_220_3044)" fillOpacity="0.4" id="Vector_277" />
          <path d={svgPaths.p28195d00} fill="url(#paint277_linear_220_3044)" fillOpacity="0.4" id="Vector_278" />
          <path d={svgPaths.p3c67afb0} fill="url(#paint278_linear_220_3044)" fillOpacity="0.4" id="Vector_279" />
          <path d={svgPaths.p1f0ba500} fill="url(#paint279_linear_220_3044)" fillOpacity="0.4" id="Vector_280" />
          <path d={svgPaths.p1fda71f0} fill="url(#paint280_linear_220_3044)" fillOpacity="0.4" id="Vector_281" />
          <path d={svgPaths.pf7cef00} fill="url(#paint281_linear_220_3044)" fillOpacity="0.4" id="Vector_282" />
          <path d={svgPaths.p23334100} fill="url(#paint282_linear_220_3044)" fillOpacity="0.4" id="Vector_283" />
          <path d={svgPaths.p101f5100} fill="url(#paint283_linear_220_3044)" fillOpacity="0.4" id="Vector_284" />
          <path d={svgPaths.p1c57bf00} fill="url(#paint284_linear_220_3044)" fillOpacity="0.4" id="Vector_285" />
          <path d={svgPaths.p3dd98400} fill="url(#paint285_linear_220_3044)" fillOpacity="0.4" id="Vector_286" />
          <path d={svgPaths.p57dec40} fill="url(#paint286_linear_220_3044)" fillOpacity="0.4" id="Vector_287" />
          <path d={svgPaths.p2bbd9a80} fill="url(#paint287_linear_220_3044)" fillOpacity="0.4" id="Vector_288" />
          <path d={svgPaths.p1ca71280} fill="url(#paint288_linear_220_3044)" fillOpacity="0.4" id="Vector_289" />
          <path d={svgPaths.p2dda7180} fill="url(#paint289_linear_220_3044)" fillOpacity="0.4" id="Vector_290" />
          <path d={svgPaths.p2142f980} fill="url(#paint290_linear_220_3044)" fillOpacity="0.4" id="Vector_291" />
          <path d={svgPaths.p19e19d80} fill="url(#paint291_linear_220_3044)" fillOpacity="0.4" id="Vector_292" />
          <path d={svgPaths.p3f9cc280} fill="url(#paint292_linear_220_3044)" fillOpacity="0.4" id="Vector_293" />
          <path d={svgPaths.p2131fb00} fill="url(#paint293_linear_220_3044)" fillOpacity="0.4" id="Vector_294" />
          <path d={svgPaths.p1eb86000} fill="url(#paint294_linear_220_3044)" fillOpacity="0.4" id="Vector_295" />
          <path d={svgPaths.p20b3c7b0} fill="url(#paint295_linear_220_3044)" fillOpacity="0.4" id="Vector_296" />
          <path d={svgPaths.pec97900} fill="url(#paint296_linear_220_3044)" fillOpacity="0.4" id="Vector_297" />
          <path d={svgPaths.p1db93530} fill="url(#paint297_linear_220_3044)" fillOpacity="0.4" id="Vector_298" />
          <path d={svgPaths.p28ea0280} fill="url(#paint298_linear_220_3044)" fillOpacity="0.4" id="Vector_299" />
          <path d={svgPaths.p3c425580} fill="url(#paint299_linear_220_3044)" fillOpacity="0.4" id="Vector_300" />
          <path d={svgPaths.p3539ff30} fill="url(#paint300_linear_220_3044)" fillOpacity="0.4" id="Vector_301" />
          <path d={svgPaths.p1008aa80} fill="url(#paint301_linear_220_3044)" fillOpacity="0.4" id="Vector_302" />
          <path d={svgPaths.p5d12300} fill="url(#paint302_linear_220_3044)" fillOpacity="0.4" id="Vector_303" />
          <path d={svgPaths.pebfa680} fill="url(#paint303_linear_220_3044)" fillOpacity="0.4" id="Vector_304" />
          <path d={svgPaths.p6b00300} fill="url(#paint304_linear_220_3044)" fillOpacity="0.4" id="Vector_305" />
          <path d={svgPaths.p3e86bf00} fill="url(#paint305_linear_220_3044)" fillOpacity="0.4" id="Vector_306" />
          <path d={svgPaths.p23073040} fill="url(#paint306_linear_220_3044)" fillOpacity="0.4" id="Vector_307" />
          <path d={svgPaths.p1fbbd500} fill="url(#paint307_linear_220_3044)" fillOpacity="0.4" id="Vector_308" />
          <path d={svgPaths.p1503e5c0} fill="url(#paint308_linear_220_3044)" fillOpacity="0.4" id="Vector_309" />
          <path d={svgPaths.p29dfe480} fill="url(#paint309_linear_220_3044)" fillOpacity="0.4" id="Vector_310" />
          <path d={svgPaths.p389ef500} fill="url(#paint310_linear_220_3044)" fillOpacity="0.4" id="Vector_311" />
          <path d={svgPaths.p34948480} fill="url(#paint311_linear_220_3044)" fillOpacity="0.4" id="Vector_312" />
          <path d={svgPaths.p11675a00} fill="url(#paint312_linear_220_3044)" fillOpacity="0.4" id="Vector_313" />
          <path d={svgPaths.p1edf6700} fill="url(#paint313_linear_220_3044)" fillOpacity="0.4" id="Vector_314" />
          <path d={svgPaths.p33bb5980} fill="url(#paint314_linear_220_3044)" fillOpacity="0.4" id="Vector_315" />
          <path d={svgPaths.p1e7a8200} fill="url(#paint315_linear_220_3044)" fillOpacity="0.4" id="Vector_316" />
          <path d={svgPaths.p35388480} fill="url(#paint316_linear_220_3044)" fillOpacity="0.4" id="Vector_317" />
          <path d={svgPaths.p8418e00} fill="url(#paint317_linear_220_3044)" fillOpacity="0.4" id="Vector_318" />
          <path d={svgPaths.p26652f00} fill="url(#paint318_linear_220_3044)" fillOpacity="0.4" id="Vector_319" />
          <path d={svgPaths.p1ea3df80} fill="url(#paint319_linear_220_3044)" fillOpacity="0.4" id="Vector_320" />
          <path d={svgPaths.p98dd080} fill="url(#paint320_linear_220_3044)" fillOpacity="0.4" id="Vector_321" />
          <path d={svgPaths.p1fa89700} fill="url(#paint321_linear_220_3044)" fillOpacity="0.4" id="Vector_322" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_220_3044" x1="431.778" x2="431.778" y1="125.557" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_220_3044" x1="427.201" x2="427.201" y1="116.401" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_220_3044" x1="429.489" x2="429.489" y1="120.977" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_220_3044" x1="443.225" x2="443.225" y1="148.449" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_220_3044" x1="422.62" x2="422.62" y1="107.239" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_220_3044" x1="438.647" x2="438.647" y1="139.294" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_220_3044" x1="440.934" x2="440.934" y1="143.868" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_220_3044" x1="420.333" x2="420.333" y1="102.665" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_220_3044" x1="436.356" x2="436.356" y1="134.713" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_220_3044" x1="434.066" x2="434.066" y1="130.132" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_220_3044" x1="424.91" x2="424.91" y1="111.82" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_220_3044" x1="404.309" x2="404.309" y1="70.6113" y2="738.001">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_220_3044" x1="402.018" x2="402.018" y1="66.0361" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_220_3044" x1="406.596" x2="406.596" y1="75.1916" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_220_3044" x1="399.728" x2="399.728" y1="61.4551" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_220_3044" x1="411.174" x2="411.174" y1="84.3467" y2="737.999">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_220_3044" x1="408.886" x2="408.886" y1="79.7725" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_220_3044" x1="413.464" x2="413.464" y1="88.9277" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_220_3044" x1="415.754" x2="415.754" y1="93.5029" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_220_3044" x1="418.042" x2="418.042" y1="98.084" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_220_3044" x1="456.958" x2="456.958" y1="175.922" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_220_3044" x1="475.273" x2="475.273" y1="212.545" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_220_3044" x1="491.299" x2="491.299" y1="244.599" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_220_3044" x1="472.986" x2="472.986" y1="207.971" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_220_3044" x1="470.695" x2="470.695" y1="203.39" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_220_3044" x1="479.853" x2="479.853" y1="221.707" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_220_3044" x1="482.14" x2="482.14" y1="226.281" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_220_3044" x1="489.009" x2="489.009" y1="240.019" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_220_3044" x1="486.719" x2="486.719" y1="235.438" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_220_3044" x1="484.431" x2="484.431" y1="230.862" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_220_3044" x1="468.407" x2="468.407" y1="198.815" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_220_3044" x1="450.093" x2="450.093" y1="162.186" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_220_3044" x1="445.515" x2="445.515" y1="153.024" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_220_3044" x1="454.671" x2="454.671" y1="171.342" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_220_3044" x1="452.38" x2="452.38" y1="166.761" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_220_3044" x1="466.117" x2="466.117" y1="194.233" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_220_3044" x1="447.802" x2="447.802" y1="157.604" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_220_3044" x1="463.826" x2="463.826" y1="189.652" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_220_3044" x1="461.539" x2="461.539" y1="185.078" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_220_3044" x1="459.249" x2="459.249" y1="180.497" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_220_3044" x1="397.44" x2="397.44" y1="56.8799" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_220_3044" x1="477.563" x2="477.563" y1="217.126" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_220_3044" x1="333.673" x2="333.673" y1="0" y2="667.346">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_220_3044" x1="335.96" x2="335.96" y1="0" y2="671.921">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_220_3044" x1="338.251" x2="338.251" y1="0" y2="676.501">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_220_3044" x1="329.092" x2="329.092" y1="0" y2="658.184">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_220_3044" x1="331.382" x2="331.382" y1="0" y2="662.765">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_220_3044" x1="395.15" x2="395.15" y1="52.2988" y2="737.999">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_220_3044" x1="345.119" x2="345.119" y1="0" y2="690.238">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_220_3044" x1="340.538" x2="340.538" y1="0" y2="681.076">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_220_3044" x1="347.406" x2="347.406" y1="0" y2="694.813">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_220_3044" x1="326.805" x2="326.805" y1="0" y2="653.609">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_220_3044" x1="313.068" x2="313.068" y1="0" y2="626.136">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_220_3044" x1="324.514" x2="324.514" y1="0" y2="649.028">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_220_3044" x1="308.49" x2="308.49" y1="0" y2="616.981">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_220_3044" x1="306.2" x2="306.2" y1="0" y2="612.4">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_220_3044" x1="349.697" x2="349.697" y1="0" y2="699.394">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_220_3044" x1="310.778" x2="310.778" y1="0" y2="621.555">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint58_linear_220_3044" x1="319.936" x2="319.936" y1="0" y2="639.873">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint59_linear_220_3044" x1="322.227" x2="322.227" y1="0" y2="644.447">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint60_linear_220_3044" x1="315.359" x2="315.359" y1="0" y2="630.717">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint61_linear_220_3044" x1="317.646" x2="317.646" y1="0" y2="635.292">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint62_linear_220_3044" x1="342.829" x2="342.829" y1="0" y2="685.657">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint63_linear_220_3044" x1="374.548" x2="374.548" y1="11.0959" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint64_linear_220_3044" x1="383.704" x2="383.704" y1="29.4072" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint65_linear_220_3044" x1="379.126" x2="379.126" y1="20.251" y2="737.999">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint66_linear_220_3044" x1="376.836" x2="376.836" y1="15.6709" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint67_linear_220_3044" x1="381.413" x2="381.413" y1="24.8262" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint68_linear_220_3044" x1="392.86" x2="392.86" y1="47.7187" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint69_linear_220_3044" x1="385.994" x2="385.994" y1="33.9883" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint70_linear_220_3044" x1="390.572" x2="390.572" y1="43.1438" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint71_linear_220_3044" x1="388.281" x2="388.281" y1="38.5625" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint72_linear_220_3044" x1="358.853" x2="358.853" y1="0" y2="717.705">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint73_linear_220_3044" x1="361.143" x2="361.143" y1="0" y2="722.286">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint74_linear_220_3044" x1="351.984" x2="351.984" y1="0" y2="703.969">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint75_linear_220_3044" x1="356.565" x2="356.565" y1="0" y2="713.13">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint76_linear_220_3044" x1="354.275" x2="354.275" y1="0" y2="708.549">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint77_linear_220_3044" x1="365.721" x2="365.721" y1="0" y2="731.442">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint78_linear_220_3044" x1="363.433" x2="363.433" y1="0" y2="726.867">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint79_linear_220_3044" x1="369.967" x2="369.967" y1="1.93359" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint80_linear_220_3044" x1="303.912" x2="303.912" y1="0" y2="607.825">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint81_linear_220_3044" x1="372.257" x2="372.257" y1="6.51465" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint82_linear_220_3044" x1="368.011" x2="368.011" y1="0" y2="736.023">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint83_linear_220_3044" x1="626.362" x2="626.362" y1="514.725" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint84_linear_220_3044" x1="628.653" x2="628.653" y1="519.306" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint85_linear_220_3044" x1="630.943" x2="630.943" y1="523.887" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint86_linear_220_3044" x1="624.075" x2="624.075" y1="510.15" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint87_linear_220_3044" x1="633.23" x2="633.23" y1="528.461" y2="737.999">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint88_linear_220_3044" x1="617.206" x2="617.206" y1="496.413" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint89_linear_220_3044" x1="621.785" x2="621.785" y1="505.569" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint90_linear_220_3044" x1="635.521" x2="635.521" y1="533.042" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint91_linear_220_3044" x1="614.919" x2="614.919" y1="491.833" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint92_linear_220_3044" x1="619.497" x2="619.497" y1="500.994" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint93_linear_220_3044" x1="649.258" x2="649.258" y1="560.515" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint94_linear_220_3044" x1="612.629" x2="612.629" y1="487.258" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint95_linear_220_3044" x1="653.835" x2="653.835" y1="569.671" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint96_linear_220_3044" x1="651.545" x2="651.545" y1="565.09" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint97_linear_220_3044" x1="656.123" x2="656.123" y1="574.246" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint98_linear_220_3044" x1="637.812" x2="637.812" y1="537.623" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint99_linear_220_3044" x1="642.39" x2="642.39" y1="546.778" y2="737.999">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint100_linear_220_3044" x1="640.099" x2="640.099" y1="542.198" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint101_linear_220_3044" x1="646.967" x2="646.967" y1="555.935" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint102_linear_220_3044" x1="644.677" x2="644.677" y1="551.354" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint103_linear_220_3044" x1="592.024" x2="592.024" y1="446.048" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint104_linear_220_3044" x1="580.578" x2="580.578" y1="423.156" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint105_linear_220_3044" x1="578.291" x2="578.291" y1="418.581" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint106_linear_220_3044" x1="582.869" x2="582.869" y1="427.737" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint107_linear_220_3044" x1="585.158" x2="585.158" y1="432.317" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint108_linear_220_3044" x1="571.422" x2="571.422" y1="404.845" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint109_linear_220_3044" x1="569.132" x2="569.132" y1="400.264" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint110_linear_220_3044" x1="587.446" x2="587.446" y1="436.893" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint111_linear_220_3044" x1="576" x2="576" y1="414" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint112_linear_220_3044" x1="573.713" x2="573.713" y1="409.426" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint113_linear_220_3044" x1="589.737" x2="589.737" y1="441.473" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint114_linear_220_3044" x1="605.761" x2="605.761" y1="473.521" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint115_linear_220_3044" x1="610.338" x2="610.338" y1="482.677" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint116_linear_220_3044" x1="601.182" x2="601.182" y1="464.365" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint117_linear_220_3044" x1="493.587" x2="493.587" y1="249.174" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint118_linear_220_3044" x1="603.47" x2="603.47" y1="468.94" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint119_linear_220_3044" x1="594.315" x2="594.315" y1="450.629" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint120_linear_220_3044" x1="658.414" x2="658.414" y1="578.827" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint121_linear_220_3044" x1="598.893" x2="598.893" y1="459.785" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint122_linear_220_3044" x1="596.605" x2="596.605" y1="455.21" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint123_linear_220_3044" x1="608.051" x2="608.051" y1="478.103" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint124_linear_220_3044" x1="525.638" x2="525.638" y1="313.275" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint125_linear_220_3044" x1="660.703" x2="660.703" y1="583.407" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint126_linear_220_3044" x1="523.347" x2="523.347" y1="308.694" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint127_linear_220_3044" x1="518.77" x2="518.77" y1="299.539" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint128_linear_220_3044" x1="521.057" x2="521.057" y1="304.114" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint129_linear_220_3044" x1="537.084" x2="537.084" y1="336.168" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint130_linear_220_3044" x1="539.371" x2="539.371" y1="340.742" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint131_linear_220_3044" x1="530.216" x2="530.216" y1="322.432" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint132_linear_220_3044" x1="534.794" x2="534.794" y1="331.587" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint133_linear_220_3044" x1="532.507" x2="532.507" y1="327.012" y2="737.999">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint134_linear_220_3044" x1="516.479" x2="516.479" y1="294.958" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint135_linear_220_3044" x1="498.164" x2="498.164" y1="258.336" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint136_linear_220_3044" x1="514.192" x2="514.192" y1="290.384" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint137_linear_220_3044" x1="500.455" x2="500.455" y1="262.91" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint138_linear_220_3044" x1="495.878" x2="495.878" y1="253.755" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint139_linear_220_3044" x1="502.746" x2="502.746" y1="267.491" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint140_linear_220_3044" x1="511.901" x2="511.901" y1="285.803" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint141_linear_220_3044" x1="505.033" x2="505.033" y1="272.066" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint142_linear_220_3044" x1="509.611" x2="509.611" y1="281.222" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint143_linear_220_3044" x1="507.323" x2="507.323" y1="276.646" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint144_linear_220_3044" x1="527.925" x2="527.925" y1="317.851" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint145_linear_220_3044" x1="676.727" x2="676.727" y1="615.455" y2="737.999">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint146_linear_220_3044" x1="672.15" x2="672.15" y1="606.3" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint147_linear_220_3044" x1="674.438" x2="674.438" y1="610.874" y2="737.999">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint148_linear_220_3044" x1="679.018" x2="679.018" y1="620.03" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint149_linear_220_3044" x1="681.306" x2="681.306" y1="624.611" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint150_linear_220_3044" x1="665.282" x2="665.282" y1="592.564" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint151_linear_220_3044" x1="662.991" x2="662.991" y1="587.982" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint152_linear_220_3044" x1="669.859" x2="669.859" y1="601.719" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint153_linear_220_3044" x1="667.569" x2="667.569" y1="597.138" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint154_linear_220_3044" x1="688.174" x2="688.174" y1="638.348" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint155_linear_220_3044" x1="697.33" x2="697.33" y1="656.659" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint156_linear_220_3044" x1="695.042" x2="695.042" y1="652.084" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint157_linear_220_3044" x1="699.62" x2="699.62" y1="661.24" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint158_linear_220_3044" x1="543.952" x2="543.952" y1="349.904" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint159_linear_220_3044" x1="690.462" x2="690.462" y1="642.923" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint160_linear_220_3044" x1="692.752" x2="692.752" y1="647.504" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint161_linear_220_3044" x1="541.661" x2="541.661" y1="345.323" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint162_linear_220_3044" x1="685.883" x2="685.883" y1="633.767" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint163_linear_220_3044" x1="683.596" x2="683.596" y1="629.192" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint164_linear_220_3044" x1="196.316" x2="196.316" y1="0" y2="392.633">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint165_linear_220_3044" x1="47.517" x2="47.517" y1="0" y2="95.034">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint166_linear_220_3044" x1="49.8044" x2="49.8044" y1="0" y2="99.6088">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint167_linear_220_3044" x1="45.2266" x2="45.2266" y1="0" y2="90.4531">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint168_linear_220_3044" x1="63.541" x2="63.541" y1="0" y2="127.082">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint169_linear_220_3044" x1="42.9361" x2="42.9361" y1="0" y2="85.8722">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint170_linear_220_3044" x1="56.6727" x2="56.6727" y1="0" y2="113.345">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint171_linear_220_3044" x1="61.2505" x2="61.2505" y1="0" y2="122.501">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint172_linear_220_3044" x1="58.9631" x2="58.9631" y1="0" y2="117.926">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint173_linear_220_3044" x1="40.6487" x2="40.6487" y1="0" y2="81.2975">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint174_linear_220_3044" x1="54.3822" x2="54.3822" y1="0" y2="108.764">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint175_linear_220_3044" x1="52.0948" x2="52.0948" y1="0" y2="104.19">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint176_linear_220_3044" x1="22.3343" x2="22.3343" y1="0" y2="44.6687">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint177_linear_220_3044" x1="26.9122" x2="26.9122" y1="0" y2="53.8243">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint178_linear_220_3044" x1="17.7565" x2="17.7565" y1="0" y2="35.513">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint179_linear_220_3044" x1="20.0439" x2="20.0439" y1="0" y2="40.0877">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint180_linear_220_3044" x1="29.2026" x2="29.2026" y1="0" y2="58.4052">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint181_linear_220_3044" x1="33.7804" x2="33.7804" y1="0" y2="67.5609">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint182_linear_220_3044" x1="38.3583" x2="38.3583" y1="0" y2="76.7165">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint183_linear_220_3044" x1="36.0678" x2="36.0678" y1="0" y2="72.1356">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint184_linear_220_3044" x1="31.49" x2="31.49" y1="0" y2="62.98">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint185_linear_220_3044" x1="24.6217" x2="24.6217" y1="0" y2="49.2434">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint186_linear_220_3044" x1="97.8793" x2="97.8793" y1="0" y2="195.759">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint187_linear_220_3044" x1="100.167" x2="100.167" y1="0" y2="200.34">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint188_linear_220_3044" x1="95.5888" x2="95.5888" y1="0" y2="191.178">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint189_linear_220_3044" x1="91.011" x2="91.011" y1="0" y2="182.022">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint190_linear_220_3044" x1="93.3015" x2="93.3015" y1="0" y2="186.603">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint191_linear_220_3044" x1="102.457" x2="102.457" y1="0" y2="204.914">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint192_linear_220_3044" x1="88.7236" x2="88.7236" y1="0" y2="177.447">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint193_linear_220_3044" x1="107.035" x2="107.035" y1="0" y2="214.07">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint194_linear_220_3044" x1="109.325" x2="109.325" y1="0" y2="218.651">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint195_linear_220_3044" x1="104.748" x2="104.748" y1="0" y2="209.495">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint196_linear_220_3044" x1="86.4332" x2="86.4332" y1="0" y2="172.866">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint197_linear_220_3044" x1="72.6966" x2="72.6966" y1="0" y2="145.393">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint198_linear_220_3044" x1="70.4092" x2="70.4092" y1="0" y2="140.818">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint199_linear_220_3044" x1="74.9871" x2="74.9871" y1="0" y2="149.974">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint200_linear_220_3044" x1="68.1188" x2="68.1188" y1="0" y2="136.238">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint201_linear_220_3044" x1="84.1427" x2="84.1427" y1="0" y2="168.285">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint202_linear_220_3044" x1="77.2744" x2="77.2744" y1="0" y2="154.549">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint203_linear_220_3044" x1="65.8283" x2="65.8283" y1="0" y2="131.657">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint204_linear_220_3044" x1="81.8554" x2="81.8554" y1="0" y2="163.711">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint205_linear_220_3044" x1="79.5649" x2="79.5649" y1="0" y2="159.13">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint206_linear_220_3044" x1="4.01993" x2="4.01993" y1="0" y2="8.03986">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint207_linear_220_3044" x1="1.72947" x2="1.72947" y1="0" y2="3.45894">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint208_linear_220_3044" x1="15.466" x2="15.466" y1="0" y2="30.9321">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint209_linear_220_3044" x1="111.616" x2="111.616" y1="0" y2="223.232">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint210_linear_220_3044" x1="10.8882" x2="10.8882" y1="0" y2="21.7764">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint211_linear_220_3044" x1="13.1756" x2="13.1756" y1="0" y2="26.3512">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint212_linear_220_3044" x1="8.59776" x2="8.59776" y1="0" y2="17.1955">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint213_linear_220_3044" x1="6.31039" x2="6.31039" y1="0" y2="12.6208">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint214_linear_220_3044" x1="264.993" x2="264.993" y1="0" y2="529.986">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint215_linear_220_3044" x1="239.814" x2="239.814" y1="0" y2="479.627">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint216_linear_220_3044" x1="242.101" x2="242.101" y1="0" y2="484.202">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint217_linear_220_3044" x1="235.233" x2="235.233" y1="0" y2="470.465">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint218_linear_220_3044" x1="244.391" x2="244.391" y1="0" y2="488.783">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint219_linear_220_3044" x1="237.523" x2="237.523" y1="0" y2="475.046">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint220_linear_220_3044" x1="253.547" x2="253.547" y1="0" y2="507.094">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint221_linear_220_3044" x1="232.945" x2="232.945" y1="0" y2="465.891">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint222_linear_220_3044" x1="246.679" x2="246.679" y1="0" y2="493.358">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint223_linear_220_3044" x1="251.26" x2="251.26" y1="0" y2="502.519">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint224_linear_220_3044" x1="248.969" x2="248.969" y1="0" y2="497.939">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint225_linear_220_3044" x1="216.921" x2="216.921" y1="0" y2="433.843">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint226_linear_220_3044" x1="113.903" x2="113.903" y1="0" y2="227.806">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint227_linear_220_3044" x1="214.631" x2="214.631" y1="0" y2="429.262">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint228_linear_220_3044" x1="219.209" x2="219.209" y1="0" y2="438.417">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint229_linear_220_3044" x1="210.053" x2="210.053" y1="0" y2="420.106">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint230_linear_220_3044" x1="228.367" x2="228.367" y1="0" y2="456.735">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint231_linear_220_3044" x1="221.499" x2="221.499" y1="0" y2="442.998">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint232_linear_220_3044" x1="226.077" x2="226.077" y1="0" y2="452.154">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint233_linear_220_3044" x1="230.655" x2="230.655" y1="0" y2="461.31">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint234_linear_220_3044" x1="223.787" x2="223.787" y1="0" y2="447.573">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint235_linear_220_3044" x1="212.34" x2="212.34" y1="0" y2="424.681">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint236_linear_220_3044" x1="290.176" x2="290.176" y1="0" y2="580.352">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint237_linear_220_3044" x1="285.598" x2="285.598" y1="0" y2="571.196">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint238_linear_220_3044" x1="287.885" x2="287.885" y1="0" y2="575.771">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint239_linear_220_3044" x1="283.308" x2="283.308" y1="0" y2="566.615">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint240_linear_220_3044" x1="294.754" x2="294.754" y1="0" y2="589.507">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint241_linear_220_3044" x1="297.044" x2="297.044" y1="0" y2="594.088">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint242_linear_220_3044" x1="299.332" x2="299.332" y1="0" y2="598.669">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint243_linear_220_3044" x1="281.02" x2="281.02" y1="0" y2="562.04">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint244_linear_220_3044" x1="292.466" x2="292.466" y1="0" y2="584.933">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint245_linear_220_3044" x1="258.128" x2="258.128" y1="0" y2="516.25">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint246_linear_220_3044" x1="262.706" x2="262.706" y1="0" y2="525.412">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint247_linear_220_3044" x1="301.622" x2="301.622" y1="0" y2="603.244">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint248_linear_220_3044" x1="260.415" x2="260.415" y1="0" y2="520.831">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint249_linear_220_3044" x1="267.284" x2="267.284" y1="0" y2="534.567">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint250_linear_220_3044" x1="271.861" x2="271.861" y1="0" y2="543.723">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint251_linear_220_3044" x1="274.152" x2="274.152" y1="0" y2="548.304">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint252_linear_220_3044" x1="276.439" x2="276.439" y1="0" y2="552.879">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint253_linear_220_3044" x1="269.574" x2="269.574" y1="0" y2="539.148">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint254_linear_220_3044" x1="278.73" x2="278.73" y1="0" y2="557.459">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint255_linear_220_3044" x1="255.838" x2="255.838" y1="0" y2="511.675">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint256_linear_220_3044" x1="145.954" x2="145.954" y1="0" y2="291.908">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint257_linear_220_3044" x1="143.664" x2="143.664" y1="0" y2="287.327">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint258_linear_220_3044" x1="139.086" x2="139.086" y1="0" y2="278.172">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint259_linear_220_3044" x1="141.373" x2="141.373" y1="0" y2="282.747">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint260_linear_220_3044" x1="148.242" x2="148.242" y1="0" y2="296.483">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint261_linear_220_3044" x1="150.532" x2="150.532" y1="0" y2="301.064">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint262_linear_220_3044" x1="157.4" x2="157.4" y1="0" y2="314.801">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint263_linear_220_3044" x1="155.11" x2="155.11" y1="0" y2="310.22">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint264_linear_220_3044" x1="136.795" x2="136.795" y1="0" y2="273.591">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint265_linear_220_3044" x1="152.822" x2="152.822" y1="0" y2="305.639">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint266_linear_220_3044" x1="129.927" x2="129.927" y1="0" y2="259.854">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint267_linear_220_3044" x1="118.481" x2="118.481" y1="0" y2="236.962">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint268_linear_220_3044" x1="207.763" x2="207.763" y1="0" y2="415.525">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint269_linear_220_3044" x1="116.194" x2="116.194" y1="0" y2="232.387">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint270_linear_220_3044" x1="134.508" x2="134.508" y1="0" y2="269.016">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint271_linear_220_3044" x1="123.062" x2="123.062" y1="0" y2="246.124">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint272_linear_220_3044" x1="159.688" x2="159.688" y1="0" y2="319.375">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint273_linear_220_3044" x1="125.349" x2="125.349" y1="0" y2="250.699">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint274_linear_220_3044" x1="132.218" x2="132.218" y1="0" y2="264.435">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint275_linear_220_3044" x1="127.64" x2="127.64" y1="0" y2="255.28">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint276_linear_220_3044" x1="120.772" x2="120.772" y1="0" y2="241.543">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint277_linear_220_3044" x1="194.026" x2="194.026" y1="0" y2="388.052">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint278_linear_220_3044" x1="191.739" x2="191.739" y1="0" y2="383.477">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint279_linear_220_3044" x1="187.161" x2="187.161" y1="0" y2="374.322">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint280_linear_220_3044" x1="184.87" x2="184.87" y1="0" y2="369.741">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint281_linear_220_3044" x1="566.845" x2="566.845" y1="395.689" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint282_linear_220_3044" x1="205.472" x2="205.472" y1="0" y2="410.944">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint283_linear_220_3044" x1="203.185" x2="203.185" y1="0" y2="406.37">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint284_linear_220_3044" x1="200.894" x2="200.894" y1="0" y2="401.789">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint285_linear_220_3044" x1="161.978" x2="161.978" y1="0" y2="323.956">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint286_linear_220_3044" x1="198.607" x2="198.607" y1="0" y2="397.214">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint287_linear_220_3044" x1="166.556" x2="166.556" y1="0" y2="333.112">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint288_linear_220_3044" x1="182.58" x2="182.58" y1="0" y2="365.16">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint289_linear_220_3044" x1="168.846" x2="168.846" y1="0" y2="337.693">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint290_linear_220_3044" x1="164.269" x2="164.269" y1="0" y2="328.537">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint291_linear_220_3044" x1="171.134" x2="171.134" y1="0" y2="342.268">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint292_linear_220_3044" x1="180.293" x2="180.293" y1="0" y2="360.585">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint293_linear_220_3044" x1="173.424" x2="173.424" y1="0" y2="346.849">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint294_linear_220_3044" x1="178.002" x2="178.002" y1="0" y2="356.004">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint295_linear_220_3044" x1="175.715" x2="175.715" y1="0" y2="351.429">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint296_linear_220_3044" x1="731.668" x2="731.668" y1="725.336" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint297_linear_220_3044" x1="711.066" x2="711.066" y1="684.132" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint298_linear_220_3044" x1="708.776" x2="708.776" y1="679.552" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint299_linear_220_3044" x1="704.198" x2="704.198" y1="670.396" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint300_linear_220_3044" x1="713.356" x2="713.356" y1="688.713" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint301_linear_220_3044" x1="724.803" x2="724.803" y1="711.605" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint302_linear_220_3044" x1="706.488" x2="706.488" y1="674.977" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint303_linear_220_3044" x1="722.512" x2="722.512" y1="707.024" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint304_linear_220_3044" x1="720.222" x2="720.222" y1="702.444" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint305_linear_220_3044" x1="715.644" x2="715.644" y1="693.288" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint306_linear_220_3044" x1="717.935" x2="717.935" y1="697.869" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint307_linear_220_3044" x1="701.911" x2="701.911" y1="665.821" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint308_linear_220_3044" x1="559.976" x2="559.976" y1="381.952" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint309_linear_220_3044" x1="555.398" x2="555.398" y1="372.797" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint310_linear_220_3044" x1="557.685" x2="557.685" y1="377.372" y2="738.001">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint311_linear_220_3044" x1="562.264" x2="562.264" y1="386.527" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint312_linear_220_3044" x1="553.108" x2="553.108" y1="368.216" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint313_linear_220_3044" x1="189.448" x2="189.448" y1="0" y2="378.896">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint314_linear_220_3044" x1="546.24" x2="546.24" y1="354.479" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint315_linear_220_3044" x1="550.817" x2="550.817" y1="363.635" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint316_linear_220_3044" x1="548.53" x2="548.53" y1="359.061" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint317_linear_220_3044" x1="729.38" x2="729.38" y1="720.761" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint318_linear_220_3044" x1="564.554" x2="564.554" y1="391.108" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint319_linear_220_3044" x1="733.959" x2="733.959" y1="729.917" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint320_linear_220_3044" x1="736.249" x2="736.249" y1="734.498" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint321_linear_220_3044" x1="727.09" x2="727.09" y1="716.18" y2="738">
            <stop offset="0.274038" stopColor="#16285E" />
            <stop offset="0.725962" stopColor="#2E53C4" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_220_3044">
            <rect fill="white" height="738" width="738" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-198.9px] top-[-257.9px]">
      <Layer />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[24.34px] relative shrink-0 w-[90.299px]">
      <div className="absolute inset-[-1.23%_-0.33%]">
        <svg className="block size-full" fill="none" height="24.9393" preserveAspectRatio="none" viewBox="0 0 90.8987 24.9393" width="90.8987">
          <g id="Group 1000005954">
            <g id="dSavings">
              <mask fill="black" height="26" id="path-1-outside-1_220_3368" maskUnits="userSpaceOnUse" width="92" x="-0.700295" y="-0.700295">
                <rect fill="white" height="26" width="92" x="-0.700295" y="-0.700295" />
                <path d={svgPaths.p37aded20} />
                <path d={svgPaths.p125e0700} />
                <path d={svgPaths.p7765d80} />
                <path d={svgPaths.p3a3ae700} />
                <path d={svgPaths.p1721bc00} />
                <path d={svgPaths.p343b400} />
                <path d={svgPaths.p1a475900} />
                <path d={svgPaths.p24decd00} />
              </mask>
              <path d={svgPaths.p37aded20} fill="var(--fill-0, #E3E3E3)" />
              <path d={svgPaths.p125e0700} fill="var(--fill-0, #E3E3E3)" />
              <path d={svgPaths.p7765d80} fill="var(--fill-0, #E3E3E3)" />
              <path d={svgPaths.p3a3ae700} fill="var(--fill-0, #E3E3E3)" />
              <path d={svgPaths.p1721bc00} fill="var(--fill-0, #E3E3E3)" />
              <path d={svgPaths.p343b400} fill="var(--fill-0, #E3E3E3)" />
              <path d={svgPaths.p1a475900} fill="var(--fill-0, #E3E3E3)" />
              <path d={svgPaths.p24decd00} fill="var(--fill-0, #E3E3E3)" />
              <path d={svgPaths.p37aded20} mask="url(#path-1-outside-1_220_3368)" stroke="var(--stroke-0, #E3E3E3)" strokeWidth="0.599411" />
              <path d={svgPaths.p125e0700} mask="url(#path-1-outside-1_220_3368)" stroke="var(--stroke-0, #E3E3E3)" strokeWidth="0.599411" />
              <path d={svgPaths.p7765d80} mask="url(#path-1-outside-1_220_3368)" stroke="var(--stroke-0, #E3E3E3)" strokeWidth="0.599411" />
              <path d={svgPaths.p3a3ae700} mask="url(#path-1-outside-1_220_3368)" stroke="var(--stroke-0, #E3E3E3)" strokeWidth="0.599411" />
              <path d={svgPaths.p1721bc00} mask="url(#path-1-outside-1_220_3368)" stroke="var(--stroke-0, #E3E3E3)" strokeWidth="0.599411" />
              <path d={svgPaths.p343b400} mask="url(#path-1-outside-1_220_3368)" stroke="var(--stroke-0, #E3E3E3)" strokeWidth="0.599411" />
              <path d={svgPaths.p1a475900} mask="url(#path-1-outside-1_220_3368)" stroke="var(--stroke-0, #E3E3E3)" strokeWidth="0.599411" />
              <path d={svgPaths.p24decd00} mask="url(#path-1-outside-1_220_3368)" stroke="var(--stroke-0, #E3E3E3)" strokeWidth="0.599411" />
            </g>
            <path d={svgPaths.p258f8580} fill="var(--fill-0, #E3E3E3)" id="i" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16.114px] whitespace-nowrap">smart</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[23.1px] top-[23.1px]">
      <Group1 />
      <Frame1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[calc(80.64%+0.55px)_calc(7.05%-0.78px)_calc(11.54%-0.7px)_calc(60.53%+0.19px)]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.7331" preserveAspectRatio="none" viewBox="0 0 110.892 16.7331" width="110.892">
        <g id="Group 1000006006">
          <path d={svgPaths.p18d6b480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3c351300} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pabf53a0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p5d7ea70} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p32054f00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p14f32500} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p36e93900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p27599d80} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute border-[0.904px] border-[rgba(255,255,255,0.4)] border-solid h-[214px] left-[24px] opacity-0 overflow-clip rounded-[16.112px] top-[-290px] w-[342px]" style={{ backgroundImage: "linear-gradient(257.213deg, rgb(35, 94, 222) 9.9267%, rgb(96, 143, 236) 77.67%)" }} data-name="-">
      <Group />
      <div className="absolute flex h-[249px] items-center justify-center left-[55.1px] top-[12.1px] w-[257px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[249px] relative w-[257px]" data-name="Untitled design (8) 1">
            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgUntitledDesign81} />
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[5.035px] bg-gradient-to-b bottom-[-0.9px] from-[rgba(35,94,222,0)] h-[74px] right-[-0.9px] shadow-[0px_4.028px_4.028px_0px_rgba(0,0,0,0.25)] to-[57.692%] to-[rgba(35,94,222,0.7)] w-[342px]" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[0] left-[317.1px] opacity-0 text-[0px] text-right text-white top-[23.1px] tracking-[-0.84px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[1.02] text-[28px]">$1000</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.02] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          /yr
        </span>
      </p>
      <Frame2 />
      <div className="absolute h-[17.227px] left-[25.1px] top-[56.1px] w-[77.971px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <path d={svgPaths.p22eca470} fill="var(--fill-0, white)" id="Union" opacity="0" />
        </svg>
      </div>
      <Group2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Titillium_Web:SemiBold',sans-serif] items-center justify-between not-italic relative shrink-0 text-[16px] w-full whitespace-nowrap">
      <p className="leading-[1.2] relative shrink-0 text-[#e3e3e3]">Personal info</p>
      <p className="leading-[normal] relative shrink-0 text-[#d9d9d9] text-center tracking-[-0.64px]">Edit</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Carolina Smith</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">01/22/19XX</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] relative shrink-0 text-[#999] text-[14px] w-full">
      <Frame11 />
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Carolinas@gmail.com</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">(123) 456 - 7891</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">SSN: XXXX</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#181818] content-stretch flex flex-col gap-[19px] items-start left-[24px] opacity-0 p-[16px] rounded-[16px] top-[-209px] w-[342px]">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame13 />
      <Frame12 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Titillium_Web:SemiBold',sans-serif] items-center justify-between not-italic relative shrink-0 text-[16px] w-full whitespace-nowrap">
      <p className="leading-[1.2] relative shrink-0 text-[#e3e3e3]">Payout info</p>
      <p className="leading-[normal] relative shrink-0 text-[#d9d9d9] text-center tracking-[-0.64px]">Edit</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Chase Bank</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">01/22/19XX</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] relative shrink-0 text-[#999] text-[14px] w-full">
      <Frame18 />
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Account number: 123354</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Routing number: 2345223</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#181818] content-stretch flex flex-col gap-[19px] items-start left-[24px] opacity-0 p-[16px] rounded-[16px] top-[-169px] w-[342px]">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Titillium_Web:SemiBold',sans-serif] items-center justify-between not-italic relative shrink-0 text-[16px] w-full whitespace-nowrap">
      <p className="leading-[1.2] relative shrink-0 text-[#e3e3e3]">Data Contribution</p>
      <p className="leading-[normal] relative shrink-0 text-[#d9d9d9] text-center tracking-[-0.64px]">Edit</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="[word-break:break-word] col-1 font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] ml-0 mt-0 not-italic relative row-1 text-[#e3e3e3] text-[16px] whitespace-nowrap">$1,000/yr</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-[123px]">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#999] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Potential earnings</p>
      </div>
      <Group3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[200px] shrink-0" data-name="Multi select pills">
        <div aria-hidden className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[200px]" />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          🧑‍💻
        </p>
        <p className="[word-break:break-word] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap">Tech</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[200px] shrink-0" data-name="Multi select pills">
        <div aria-hidden className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[200px]" />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          🏥
        </p>
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Health
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[200px] shrink-0" data-name="Multi select pills">
        <div aria-hidden className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[200px]" />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          💰
        </p>
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Finance
        </p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[200px] shrink-0" data-name="Multi select pills">
        <div aria-hidden className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[200px]" />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          👕
        </p>
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Retail
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[200px] shrink-0" data-name="Multi select pills">
        <div aria-hidden className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[200px]" />
        <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          👩‍⚖️
        </p>
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Civic/government
        </p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[#181818] content-stretch flex flex-col gap-[19px] items-start left-[24px] opacity-0 p-[16px] rounded-[16px] top-[-142px] w-[342px]">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame20 />
      <Frame10 />
      <Frame21 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Titillium_Web:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[1.2]">Successfully joined plan</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center pl-[12px] pr-[8px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Material / close">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
              <path d={svgPaths.p2dc32500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[33px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Material / arrow_back_ios">
        <div className="absolute inset-[8.33%_50.94%_8.33%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 11.775 20" width="11.775">
            <path d={svgPaths.p30d4a680} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-[342px]">
      <Frame9 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] min-w-px not-italic relative text-[18px] text-center text-white">{`Terms & conditions`}</p>
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#e3e3e3] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">Skip</p>
      </div>
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
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 27.328 13" width="27.328">
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
            <svg className="absolute block inset-0 size-full" fill="none" height="12.2264" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264" width="19.2">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" height="12.3283" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283" width="17.1417">
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

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[18px] text-center whitespace-nowrap">
        <p className="leading-none">{`Accept terms & continue`}</p>
      </div>
    </div>
  );
}

function Frame7() {
  const onAccept = useContext(SmartTermsAcceptContext);
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]">
      <button type="button" onClick={onAccept} className="content-stretch flex items-start relative rounded-[500px] shrink-0 w-full cursor-pointer" data-name="Button">
        <div className="content-stretch flex flex-[1_0_0] h-[48px] items-start min-w-px relative rounded-[500px]" data-name="_ButtonState">
          <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[500px]" data-name="_ButtonBase">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <Content2 />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function TC() {
  return (
    <div className="bg-[#070707] relative w-full flex flex-col items-center" data-name="T&C">
      {/* Status bar + profile header (top chrome, in normal flow) */}
      <div className="content-stretch flex flex-col items-start w-[390px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-full" data-name="Status Bar - iPhone">
          <Frame />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-px items-center w-[390px]" data-name="Profile header">
        <Frame3 />
        <div className="h-0 relative shrink-0 w-[390px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <path d="M0 0H390" id="Vector 879" opacity="0" stroke="var(--stroke-0, #3D3D3D)" />
          </svg>
        </div>
      </div>

      {/* Terms body (in normal flow, stacked so the page scrolls) */}
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[24px] w-[390px]">
        <Frame8 />
      </div>

      {/* Checkbox + accept button, revealed at the end of the terms after scrolling */}
      <div className="content-stretch flex flex-col gap-[14px] items-start px-[24px] pt-[24px] pb-[45px] w-[390px]" data-name="Checkbox for terms">
        <button className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Checkbox">
          <div className="content-stretch flex items-start relative shrink-0 w-[342px]" data-name="Checkbox">
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="_CheckboxState">
              <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-[4px]" data-name="_CheckboxBase">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Master Icon">
                      <div className="relative shrink-0 size-[24px]" data-name="DrumWave / checkbox_square_checked">
                        <div className="absolute inset-[8.33%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                            <g id="Vector">
                              <mask fill="white" id="path-1-inside-1_220_3042">
                                <path d={svgPaths.pe0cb570} />
                                <path clipRule="evenodd" d={svgPaths.pc4fe600} fillRule="evenodd" />
                                <path d={svgPaths.p1a6828c0} />
                              </mask>
                              <path d={svgPaths.pe0cb570} fill="white" />
                              <path clipRule="evenodd" d={svgPaths.pc4fe600} fill="#3D3D3D" fillRule="evenodd" />
                              <path d={svgPaths.p1a6828c0} fill="var(--fill-0, #1D1D1D)" />
                              <path d={svgPaths.p32743f00} fill="var(--stroke-0, #070707)" mask="url(#path-1-inside-1_220_3042)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px relative text-[0px] text-left text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="text-[14px]">
                        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2]" style={{ fontVariationSettings: '"wdth" 100' }}>{`I’ve read and accept the `}</span>
                        <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.2]" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Terms and conditions
                        </span>
                        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2]" style={{ fontVariationSettings: '"wdth" 100' }}>{` of the Data Savings Plan.`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
        <Frame7 />
      </div>

      {/* Hidden/decorative elements retained from the original design */}
      <div className="hidden"><Component /><Frame14 /><Frame15 /><Frame19 /></div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-[calc(100%+190px)] opacity-0 top-[61.5px] w-[342px]" data-name="Snackbar">
        <div className="bg-[#2a2a2a] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="_SnackbarBase">
          <div aria-hidden className="absolute border border-[#3d3d3d] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[4px] py-[4px] relative size-full">
              <div className="bg-[#0091ff] h-[28px] relative shrink-0 w-[4px]" data-name="line" />
              <Content />
              <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="Button">
                <div className="content-stretch flex items-start relative rounded-[500px] shrink-0" data-name="_ButtonState">
                  <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[500px] shrink-0" data-name="_ButtonBase">
                    <Content1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}