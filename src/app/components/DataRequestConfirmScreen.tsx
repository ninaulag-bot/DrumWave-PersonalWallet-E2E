import ConfirmImport from "@/imports/UnnamedComponent-1/index";

interface DataRequestConfirmScreenProps {
  onDone: () => void;
}

export function DataRequestConfirmScreen({ onDone }: DataRequestConfirmScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ConfirmImport />

      {/* Back button tap target over the imported back arrow */}
      <button
        type="button"
        onClick={onDone}
        aria-label="Go back"
        style={{
          position: "absolute",
          top: "71px",
          left: "12px",
          width: "60px",
          height: "48px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 20,
        }}
      />

      {/* Done button overlay — covers Frame8 at ~top:546px */}
      <button
        type="button"
        onClick={onDone}
        aria-label="Done"
        style={{
          position: "absolute",
          top: "540px",
          left: "23px",
          width: "342px",
          height: "52px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 20,
        }}
      />
    </div>
  );
}
