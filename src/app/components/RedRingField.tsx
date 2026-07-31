import redRings from "../../imports/red-concentric-rings.png";

interface RedRingFieldProps {
  centerX: number;
  centerY: number;
}

export function RedRingField({ centerX, centerY }: RedRingFieldProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: centerX,
        top: centerY,
        width: 390,
        height: 476,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    >
      <img
        src={redRings}
        alt=""
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
