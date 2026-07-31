function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[24px] relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        / year
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[6px] inset-[0_15.43%_30.09%_0] items-end">
      <p className="[word-break:break-word] font-['Titillium_Web:ExtraLight',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[88px] tracking-[-5.28px] whitespace-nowrap">$0</p>
      <Frame5 />
    </div>
  );
}

function DrumWaveDim() {
  return <div className="h-[16.978px] relative shrink-0 w-[20.373px]" data-name="DrumWave / dim_2" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <DrumWaveDim />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function DrumWaveDim1() {
  return <div className="absolute h-[20px] left-[13.27px] top-[13.27px] w-[24px]" data-name="DrumWave / dim_2" />;
}

function Frame() {
  return (
    <div className="backdrop-blur-[14.667px] bg-[rgba(255,255,255,0.05)] border-[0.733px] border-[rgba(255,255,255,0.4)] border-solid col-1 ml-0 mt-0 overflow-clip relative rounded-[29.333px] row-1 shadow-[0px_2.933px_17.6px_-1.467px_rgba(0,0,0,0.2)] size-[48px]">
      <DrumWaveDim1 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-gradient-to-r col-1 from-[9.615%] from-[rgba(255,255,255,0.1)] h-[8px] ml-0 mt-[20px] relative rounded-[20px] row-1 to-[#0091ff] via-[71.635%] via-[rgba(255,0,217,0.6)] w-[342px]" />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] inset-[62.63%_0_0_2.29%] items-start">
      <Frame2 />
      <Group />
    </div>
  );
}

export default function ChooseMyGoal() {
  return (
    <div className="relative size-full" data-name="Choose my goal">
      <Frame4 />
      <Frame3 />
    </div>
  );
}