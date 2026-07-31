import Success from "@/imports/Success-1/index";

const FRAME_W = 390;
const FRAME_H = 844;

export function Success1Screen() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>
      <div style={{ position: "relative", width: `${FRAME_W}px`, height: `${FRAME_H}px`, margin: "0 auto", overflow: "hidden" }}>
        <Success />
      </div>
    </div>
  );
}
