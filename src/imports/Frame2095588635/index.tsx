function Bubbles() {
  return (
    <div className="h-[12.065px] relative shrink-0 w-[27px]" data-name="bubbles">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.0649" preserveAspectRatio="none" viewBox="0 0 26.9997 12.0649" width="26.9997">
        <g id="bubbles">
          <circle cx="25.3222" cy="3.51608" fill="var(--fill-0, white)" id="Ellipse 14772" r="1.67744" />
          <circle cx="22.8056" cy="9.38922" fill="var(--fill-0, white)" id="Ellipse 14770" r="2.51616" />
          <circle cx="15.0986" cy="3.35496" fill="var(--fill-0, white)" id="Ellipse 14769" r="3.35488" />
          <circle cx="5.03232" cy="7.03255" fill="var(--fill-0, white)" id="Ellipse 14768" r="5.03232" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Bubbles />
      <div className="[word-break:break-word] flex flex-col font-['Titillium_Web:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">enriched with data</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative size-full">
      <Frame1 />
    </div>
  );
}