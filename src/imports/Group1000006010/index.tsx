import img from "./319574173f80dd8fd220243ad3d31d0452504621.png";
import img1 from "./dd0bd139a31114562f62e3d7bf65ac1d8bace93c.png";
import imgImage674 from "./2513dd88975a303674e8b8cea62969b4944fcec2.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute h-[263px] left-0 top-0 w-[328px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="263" preserveAspectRatio="none" viewBox="0 0 328 263" width="328">
        <g id="Frame 2095587325">
          <g clipPath="url(#clip0_170_4120)">
            <g filter="url(#filter0_f_170_4120)" id="Ellipse 21987" opacity="0.7">
              <ellipse cx="144.5" cy="223.387" fill="var(--fill-0, #444BAC)" rx="215.5" ry="74.5" />
            </g>
          </g>
          <rect height="262" rx="23.5" stroke="url(#paint0_linear_170_4120)" width="327" x="0.5" y="0.5" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="269" id="filter0_f_170_4120" width="551" x="-131" y="88.8867">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_170_4120" stdDeviation="30" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_170_4120" x1="59.5" x2="360" y1="5.38671" y2="250.387">
            <stop stopColor="#3642EB" />
            <stop offset="0.745192" stopColor="#3642EB" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_170_4120">
            <rect fill="white" height="263" rx="24" width="328" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

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

function Group3() {
  return (
    <div className="absolute contents left-0 size-[447.368px] top-0">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

export default function Group4() {
  return (
    <div className="contents relative size-full">
      <Frame />
      <Group3 />
    </div>
  );
}