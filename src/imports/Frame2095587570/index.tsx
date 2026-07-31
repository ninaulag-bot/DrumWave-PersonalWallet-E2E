import svgPaths from "./svg-sire5vuib1";

export default function Frame() {
  return (
    <div className="relative size-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 143">
        <g clipPath="url(#clip0_158_2508)" id="Frame 2095587570">
          <path d={svgPaths.p1d058200} fill="url(#paint0_radial_158_2508)" id="Rectangle 35008" />
          <g id="Rectangle 35009">
            <g clipPath="url(#paint1_diamond_158_2508_clip_path)" data-figma-skip-parse="true">
              <g transform="matrix(0.287108 -0.13113 0.324024 0.529447 16.4775 130.954)">
                <rect fill="url(#paint1_diamond_158_2508)" height="240.875" opacity="1" shapeRendering="crispEdges" width="1102" x="0" y="0" />
                <rect fill="url(#paint1_diamond_158_2508)" height="240.875" opacity="1" shapeRendering="crispEdges" transform="scale(1 -1)" width="1102" x="0" y="0" />
                <rect fill="url(#paint1_diamond_158_2508)" height="240.875" opacity="1" shapeRendering="crispEdges" transform="scale(-1 1)" width="1102" x="0" y="0" />
                <rect fill="url(#paint1_diamond_158_2508)" height="240.875" opacity="1" shapeRendering="crispEdges" transform="scale(-1)" width="1102" x="0" y="0" />
              </g>
            </g>
            {/* Curve stroke — was invisible due to empty mask; now directly stroked with a linear gradient */}
            <path d={svgPaths.p3b2cc0c0} fill="none" stroke="url(#curveStrokeGrad)" strokeWidth="1.5" />
          </g>
        </g>
        <defs>
          <clipPath id="paint1_diamond_158_2508_clip_path">
            <path d={svgPaths.p3b2cc0c0} />
          </clipPath>
          <linearGradient id="curveStrokeGrad" gradientUnits="userSpaceOnUse" x1="0" y1="120" x2="342" y2="100">
            <stop stopColor="#003670" />
            <stop offset="1" stopColor="#0091FF" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-79.3915 -99.6415 319.814 -190.36 396.426 60.6125)" gradientUnits="userSpaceOnUse" id="paint0_radial_158_2508" r="1">
            <stop stopOpacity="0" />
            <stop offset="1" stopColor="#2067D1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_diamond_158_2508" x1="0" x2="500" y1="0" y2="500">
            <stop stopColor="#003670" />
            <stop offset="1" stopColor="#0091FF" />
          </linearGradient>
          <clipPath id="clip0_158_2508">
            <rect fill="white" height="143" width="342" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}