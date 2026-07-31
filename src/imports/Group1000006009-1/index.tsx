import img from "./319574173f80dd8fd220243ad3d31d0452504621.png";
import img1 from "./dd0bd139a31114562f62e3d7bf65ac1d8bace93c.png";
import imgImage674 from "./2513dd88975a303674e8b8cea62969b4944fcec2.png";

function Component() {
  return (
    <div className="absolute flex h-[187.523px] items-center justify-center left-0 top-0 w-[238.838px]">
      <div className="-rotate-15 -skew-x-30 flex-none scale-y-87">
        <div className="h-[137.77px] pointer-events-none relative rounded-[12px] w-[210.345px]" data-name="-">
          <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[12px] size-full" src={img} />
          <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 size-[336.25px] top-0" data-name="Group">
      <Component />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute flex h-[187.523px] items-center justify-center left-0 top-0 w-[238.838px]">
      <div className="-rotate-15 -skew-x-30 flex-none scale-y-87">
        <div className="h-[137.77px] relative rounded-[12px] w-[210.345px]" data-name="-">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img1} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 size-[336.25px] top-0" data-name="Group">
      <Component1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 size-[336.25px] top-0" data-name="Group">
      <div className="absolute flex h-[187.523px] items-center justify-center left-0 top-0 w-[238.838px]">
        <div className="-rotate-15 -skew-x-30 flex-none scale-y-87">
          <div className="h-[137.77px] pointer-events-none relative rounded-[12px] w-[210.345px]" data-name="image 674">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[12px] size-full" src={imgImage674} />
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Group3() {
  return (
    <div className="contents relative size-full">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}