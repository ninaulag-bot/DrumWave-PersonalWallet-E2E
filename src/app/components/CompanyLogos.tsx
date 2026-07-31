import React from "react";

// Company brand marks — self-contained inline SVGs, same pattern as
// DrumWaveLogo / UsaFlag. No @/imports, no <img src> — fixes the Figma Make
// issue where .svg files in the imports folder don't render via <img src>.
//
// Vector data is taken verbatim from the exported Claro.svg / Mc.svg /
// Nubank.svg / Vivo.svg files. Nothing redrawn — only wrapped as components.
//
// Source viewBox is 0 0 16 16 with a 15.472 rounded-rect (the export left a
// ~0.5px transparent margin on the right/bottom). Kept exactly as exported so
// these match the source 1:1. Default render size is 40px to match the 40×40
// circles these replace on the dashboard cards; pass `size` to override.

type LogoProps = { size?: number; style?: React.CSSProperties };

export function ClaroLogo({ size = 40, style = {} }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, ...style }}
    >
      <rect width="15.472" height="15.472" rx="7.73602" fill="#D92A1C" />
      <path
        d="M8.03096 10.8239C7.23525 10.8239 6.69417 10.6037 6.40772 10.1634C6.12657 9.72313 5.98599 8.99904 5.98599 7.99115C5.98599 6.98325 6.12922 6.26712 6.41568 5.84274C6.70213 5.41306 7.24056 5.19822 8.03096 5.19822C8.50308 5.19822 9.02294 5.26453 9.59054 5.39715L9.55871 6.11328C9.08129 6.02841 8.60386 5.98597 8.12644 5.98597C7.64902 5.98597 7.32543 6.1292 7.15568 6.41565C6.98593 6.6968 6.90106 7.22992 6.90106 8.01502C6.90106 8.79481 6.98328 9.32793 7.14772 9.61438C7.31217 9.89553 7.6331 10.0361 8.11053 10.0361C8.58795 10.0361 9.07068 9.99632 9.55871 9.91675L9.58258 10.6488C9.0362 10.7655 8.51899 10.8239 8.03096 10.8239Z"
        fill="white"
      />
    </svg>
  );
}

export function MastercardLogo({ size = 40, style = {} }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, ...style }}
    >
      <rect width="15.472" height="15.472" rx="7.73602" fill="#DB0006" />
      <path
        d="M4.98474 10.7363V5.28575H6.52045L7.73788 9.54277L8.95531 5.28575H10.499V10.7363H9.60779V6.26447H9.48843L8.19939 10.5135H7.27637L5.98733 6.26447H5.86798V10.7363H4.98474Z"
        fill="#FBB201"
      />
    </svg>
  );
}

export function NubankLogo({ size = 40, style = {} }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, ...style }}
    >
      <rect width="15.472" height="15.472" rx="7.73602" fill="#820AD1" />
      <path
        d="M5.63747 10.7363V5.28575H7.18114L8.8362 9.95654H8.95556V5.28575H9.83879V10.7363H8.32695L6.6321 6.05758H6.5207V10.7363H5.63747Z"
        fill="white"
      />
    </svg>
  );
}

export function VivoLogo({ size = 40, style = {} }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, ...style }}
    >
      <rect width="15.472" height="15.472" rx="7.73602" fill="#6D3189" />
      <path
        d="M9.01841 5.28575H9.94143L8.60464 10.7363H6.87L5.53322 5.28575H6.45624L7.5384 9.95654H7.93625L9.01841 5.28575Z"
        fill="white"
      />
    </svg>
  );
}
