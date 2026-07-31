import svgPaths from "./svg-j3zbsj7gqp";
import imgImage from "./47b2ff98323020d63517c0b5f53a87cf87714e99.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:Regular',sans-serif] h-[38px] justify-end leading-[0] not-italic opacity-90 relative shrink-0 text-[32px] text-white tracking-[-0.96px] w-full">
        <p className="leading-[1.2]">Genotype Array</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[19px] top-[calc(80%-17.4px)] w-[298px]" data-name="Text">
      <Frame1 />
    </div>
  );
}

function SelfUploadedData2() {
  return (
    <div className="bg-[#484f00] content-stretch flex h-[24px] items-center justify-center px-[16px] py-[4px] relative rounded-[20px] shrink-0 w-[124px]" data-name="SELF UPLOADED DATA">
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[8px] text-center tracking-[0.8px] whitespace-nowrap">
        <p className="leading-[1.2]">SELF-UPLOADED DATA</p>
      </div>
    </div>
  );
}

function SelfUploadedData1() {
  return (
    <div className="bg-[#7c0b38] content-stretch flex h-[24px] items-center justify-center px-[16px] py-[4px] relative rounded-[20px] shrink-0 w-[124px]" data-name="SELF UPLOADED DATA">
      <SelfUploadedData2 />
    </div>
  );
}

function SelfUploadedData() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[calc(60%-7px)] px-[16px] py-[4px] rounded-[20px] top-[calc(20%+11.4px)] w-[124px]" data-name="Self uploaded data">
      <div aria-hidden className="absolute bg-[#009253] inset-0 pointer-events-none rounded-[20px]" />
      <SelfUploadedData1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_-4px_11px_0px_rgba(0,0,0,0.06),inset_4px_4px_12px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Dvalue() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[calc(60%+39px)] top-[19px] w-[78px]" data-name="Dvalue">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="DrumWave / dim_2">
        <div className="-translate-y-1/2 absolute aspect-[8/9.750870704650879] left-[16.67%] right-[20.83%] top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
            <g id="Vector">
              <path d={svgPaths.p23b7b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p25dfde80} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">
        <p className="leading-none">0.05</p>
      </div>
    </div>
  );
}

function Cardiology24Dp1F1F1FFill0Wght300Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="cardiology_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="cardiology_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
          <path d={svgPaths.pda4f000} fill="var(--fill-0, #E3E3E3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[32px]" data-name="Icon">
      <Cardiology24Dp1F1F1FFill0Wght300Grad0Opsz />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute content-stretch flex items-center left-[19px] size-[32px] top-[19px]" data-name="Icon">
      <Icon1 />
    </div>
  );
}

export default function SmallCards() {
  return (
    <div className="border border-[rgba(255,255,255,0.05)] border-solid overflow-clip relative rounded-[24px] size-full" data-name="Small cards">
      <div className="absolute h-[200px] left-[-1px] pointer-events-none top-[-1px] w-[342px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4px_-4px_11px_0px_rgba(0,0,0,0.06),inset_4px_4px_12px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <Text />
      <SelfUploadedData />
      <Dvalue />
      <Icon />
    </div>
  );
}