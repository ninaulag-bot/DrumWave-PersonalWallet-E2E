import img from "./319574173f80dd8fd220243ad3d31d0452504621.png";
import img1 from "./dd0bd139a31114562f62e3d7bf65ac1d8bace93c.png";
import imgImage674 from "./2513dd88975a303674e8b8cea62969b4944fcec2.png";
import { PhotoFanStack } from "@/app/components/PhotoFanStack";

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute h-[263px] left-[calc(50%-7.68px)] top-[76.12px] w-[328px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 263">
        <g clipPath="url(#clip0_dsp)">
          <g filter="url(#filter0_dsp)" opacity="0.7">
            <ellipse cx="144.5" cy="223.387" fill="#444BAC" rx="215.5" ry="74.5" />
          </g>
        </g>
        <rect height="262" rx="23.5" stroke="#3642EB" strokeWidth="1" width="327" x="0.5" y="0.5" />
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="269" id="filter0_dsp" width="551" x="-131" y="88.8867">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_dsp" stdDeviation="30" />
          </filter>
          <clipPath id="clip0_dsp">
            <rect fill="white" height="263" rx="24" width="328" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function DspIntroSplashDesktop4X() {
  return (
    <div className="relative size-full" data-name="dsp-intro-splash-desktop_4X">
      <Frame />
      <PhotoFanStack images={[img, img1, imgImage674]} />
    </div>
  );
}
