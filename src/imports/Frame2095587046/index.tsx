export default function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative size-full text-center">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e3e3e3] text-[20px] w-full">No results found</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#999] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`We were unable to find that company or category. As we continue to expand our list, check back another time! `}</p>
    </div>
  );
}