import React, { useState } from "react";

type StatKey = "Pending" | "Accepted" | "Rejected";

interface StatBlockProps {
  count: number;
  label: StatKey;
  selected: boolean;
  onClick: () => void;
}

function StatBlock({ count, label, selected, onClick }: StatBlockProps) {
  const numberColor = selected ? "#E3E3E3" : "#999999";
  const labelColor = selected ? "#E3E3E3" : "#999999";
  // Non-zero counts are bold (600); zero counts are regular (400). Count-driven, not selection-driven.
  const numberWeight = count !== 0 ? 600 : 400;

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "13px",
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        opacity: selected ? 1 : 0.55,
        transition: "opacity 150ms ease",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-family-primary)",
          fontWeight: numberWeight,
          fontSize: "40px",
          lineHeight: "48px",
          color: numberColor,
          textAlign: "center",
          whiteSpace: "nowrap",
          transition: "color 150ms ease, font-weight 150ms ease",
        }}
      >
        {count}
      </span>
      <span
        style={{
          fontFamily: "var(--font-family-primary)",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "16.8px",
          color: labelColor,
          textAlign: "center",
          whiteSpace: "nowrap",
          transition: "color 150ms ease",
        }}
      >
        {label}
      </span>
    </button>
  );
}

interface StatsRowProps {
  pending?: number;
  accepted?: number;
  rejected?: number;
  defaultSelected?: StatKey;
  onSelectionChange?: (selected: StatKey) => void;
}

export function StatsRow({
  pending = 7,
  accepted = 0,
  rejected = 0,
  defaultSelected = "Pending",
  onSelectionChange,
}: StatsRowProps) {
  const [selected, setSelected] = useState<StatKey>(defaultSelected);

  function select(key: StatKey) {
    setSelected(key);
    onSelectionChange?.(key);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "18px",
        padding: "16px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <StatBlock count={pending}  label="Pending"  selected={selected === "Pending"}  onClick={() => select("Pending")}  />
      <div style={{ width: 1, height: "52.5px", flexShrink: 0, background: "#3D3D3D" }} />
      <StatBlock count={accepted} label="Accepted" selected={selected === "Accepted"} onClick={() => select("Accepted")} />
      <div style={{ width: 1, height: "52.5px", flexShrink: 0, background: "#3D3D3D" }} />
      <StatBlock count={rejected} label="Rejected" selected={selected === "Rejected"} onClick={() => select("Rejected")} />
    </div>
  );
}

export default StatsRow;
