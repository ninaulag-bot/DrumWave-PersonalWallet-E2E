export default function Frame() {
  return (
    <div className="bg-[rgba(32,103,209,0.1)] content-stretch flex items-center justify-center px-[10px] py-[2px] relative rounded-[8px] size-full">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0091ff] text-[24px] tracking-[-2.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        $$$$$
      </p>
    </div>
  );
}