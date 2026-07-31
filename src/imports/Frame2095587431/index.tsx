function AddressField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
        width: "100%",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "var(--text-body-md-size)",
          lineHeight: 1,
          color: "var(--color-text-primary)",
          opacity: 0.8,
          margin: 0,
          width: "100%",
          fontVariationSettings: '"wdth" 100',
        }}
      >
        {label}
      </p>
      <div
        style={{
          background: "var(--color-bg-surface)",
          borderRadius: "var(--radius-xs)",
          boxShadow: "inset 0 0 0 1px var(--color-border-secondary)",
          height: "44px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "var(--space-3)",
          paddingRight: "var(--space-1)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "var(--text-body-lg-size)",
            lineHeight: 1,
            color: "var(--color-text-secondary)",
            margin: 0,
            fontVariationSettings: '"wdth" 100',
          }}
        >
          {placeholder}
        </p>
      </div>
    </div>
  );
}

function AddressLine1Field() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
        width: "100%",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "var(--text-body-md-size)",
          lineHeight: 1,
          color: "var(--color-text-inverse)",
          opacity: 0.8,
          margin: 0,
          width: "100%",
          fontVariationSettings: '"wdth" 100',
        }}
      >
        Address line 1
      </p>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "var(--radius-xs)",
          boxShadow: "inset 0 0 0 1px var(--color-action-primary-bg)",
          height: "44px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "var(--space-3)",
          paddingRight: "var(--space-1)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "var(--text-body-lg-size)",
            lineHeight: 1,
            color: "var(--color-text-disabled)",
            margin: 0,
            fontVariationSettings: '"wdth" 100',
          }}
        >
          Street address
        </p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        width: "100%",
      }}
    >
      <AddressLine1Field />
      <AddressField label="Address line 2" placeholder="Apt or unit" />

      {/* City + State — side by side */}
      <div
        style={{
          display: "flex",
          gap: "var(--space-4)",
          width: "100%",
        }}
      >
        <div style={{ flex: "1 0 0", minWidth: 0 }}>
          <AddressField label="City" placeholder="City" />
        </div>
        <div style={{ flex: "1 0 0", minWidth: 0 }}>
          <AddressField label="State" placeholder="State" />
        </div>
      </div>

      <AddressField label="Zip code" placeholder="Zip code" />
    </div>
  );
}
