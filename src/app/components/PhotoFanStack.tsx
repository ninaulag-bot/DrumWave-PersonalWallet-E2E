import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

// Photos for the fanned card stack. Sourced from Unsplash so the component no
// longer depends on the figma:asset virtual scheme (which is not resolvable in
// this project's Vite config and was breaking the App.tsx module load).
const IMAGES = [
  "https://images.unsplash.com/photo-1517256673644-36ad11246d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1757700314602-d0971e793203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
];

const CARDS = [
  { left: 159.82, top: 186.47, border: true },  // backmost
  { left: 94.44,  top: 228.01, border: false }, // middle
  { left: 66.82,  top: 164.16, border: true },  // frontmost
];

export function PhotoFanStack() {
  return (
    <>
      {CARDS.map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${card.left}px`,
            top: `${card.top}px`,
            width: "210.345px",
            height: "137.77px",
            borderRadius: "12px",
            overflow: "hidden",
            transform: "rotate(-15deg) skewX(-30deg) scaleY(0.87)",
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
        >
          <ImageWithFallback
            src={IMAGES[i]}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {card.border && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            />
          )}
        </div>
      ))}
    </>
  );
}
