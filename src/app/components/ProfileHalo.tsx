import svgPaths from "@/imports/HomeRequestDataBeforeDsp-6/svg-udqajbpvmn";
import imgImage686 from "@/imports/HomeRequestDataBeforeDsp-6/ed0613d61b8120f65e142a6c92489eebf7d29667.png";
import imgImage14 from "@/imports/HomeRequestDataBeforeDsp-6/eabded7bb48e6ebaedb4863e963568e03b9ce73f.png";
import imgRectangle6021 from "@/imports/HomeRequestDataBeforeDsp-6/43d2ce771435ace34d12c02bbe1cfd0b7749f275.png";

/**
 * The rings + gradient ring + photo halo, reproduced faithfully from the
 * "Approved + not joined" screen (HomeRequestDataBeforeDsp-6, Group9 + its
 * surrounding rings/glows). Rendered centered horizontally, vertically anchored
 * on `centerTop` (the ring/photo center, measured from the top of the parent).
 */
export function ProfileHalo({ centerTop = 170 }: { centerTop?: number }) {
  return (
    <>
      {/* Ambient blue glows */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          left: "50%",
          top: `${centerTop + 53.5}px`,
          transform: "translate(-50%, -50%) translateX(-179px)",
          borderRadius: "50%",
          background: "#2067D1",
          opacity: 0.2,
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "336px",
          height: "336px",
          left: "50%",
          top: `${centerTop - 163.5}px`,
          transform: "translate(-50%, -50%) translateX(155px)",
          borderRadius: "50%",
          background: "#2067D1",
          opacity: 0.2,
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* image 14 — soft overlay behind the rings */}
      <div
        style={{
          position: "absolute",
          width: "390px",
          height: "411px",
          left: "50%",
          top: `${centerTop - 32.5}px`,
          transform: "translate(-50%, -50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <img
          src={imgImage14}
          alt=""
          style={{ position: "absolute", height: "115.69%", left: 0, top: 0, width: "100%", maxWidth: "none" }}
        />
      </div>

      {/* image 686 — concentric rings + sparkles graphic */}
      <img
        src={imgImage686}
        alt=""
        style={{
          position: "absolute",
          width: "323px",
          height: "323px",
          left: "calc(50% + 0.5px)",
          top: `${centerTop + 11.5}px`,
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Gradient ring (radial gradient + drop shadow) */}
      <div
        style={{
          position: "absolute",
          width: "140px",
          height: "140px",
          left: "50%",
          top: `${centerTop}px`,
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <div className="absolute inset-[-28.57%_-21.43%_-28.57%_-35.71%]">
          <svg className="block size-full" fill="none" height="220" preserveAspectRatio="none" viewBox="0 0 220 220" width="220">
            <g filter="url(#filter0_d_halo)" id="Vector">
              <path d={svgPaths.p3f77e660} fill="url(#paint0_radial_halo)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="220" id="filter0_d_halo" width="220" x="9.53674e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-10" />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.216667 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="translate(87 172) rotate(-60.4885) scale(140.377)" gradientUnits="userSpaceOnUse" id="paint0_radial_halo" r="1">
                <stop stopColor="#4700FF" />
                <stop offset="0.5" stopColor="#2F3367" />
                <stop offset="1" stopColor="#4700FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Photo */}
      <div
        style={{
          position: "absolute",
          width: "129.081px",
          height: "129.081px",
          left: "calc(50% - 0.4px)",
          top: `${centerTop + 0.5}px`,
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <div style={{ transform: "rotate(1.42deg)" }}>
          <div style={{ position: "relative", borderRadius: "230.172px", width: "126px", height: "126px" }}>
            <img
              src={imgRectangle6021}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                maxWidth: "none",
                objectFit: "cover",
                objectPosition: "bottom",
                pointerEvents: "none",
                borderRadius: "230.172px",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
