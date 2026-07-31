export default function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <p className="font-['Titillium_Web:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[24px] whitespace-nowrap">All companies</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#999] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Request data from the companies you have relationships with.
      </p>
    </div>
  );
}