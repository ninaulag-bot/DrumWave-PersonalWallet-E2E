import { useState } from "react";
import IssueImport from "@/imports/Issue/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface ContactSupportScreenProps {
  onBack: () => void;
  onSubmit: () => void;
}

export function ContactSupportScreen({ onBack, onSubmit }: ContactSupportScreenProps) {
  const [description, setDescription] = useState("");
  // Submit is only clickable once the user has typed a description
  const canSubmit = description.trim().length > 0;

  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="contact-support-sb" style={{ position: "relative", width: "100%", height: "100%" }}>
        <IssueImport />

        {/* Back button tap target over the imported back arrow */}
        <button
          type="button"
          onClick={onBack}
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

        {/* Typable description field — overlays the imported (static) description box.
            Matches the import's box: 342×150, #111 fill, #2a2a2a border, 8px radius. */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What actions did you take just prior the the event"
          style={{
            position: "absolute",
            top: "477px",
            left: "24px",
            width: "342px",
            height: "150px",
            boxSizing: "border-box",
            padding: "8px 2px 8px 12px",
            background: "#111",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            resize: "none",
            outline: "none",
            zIndex: 20,
            fontFamily: "var(--font-family-primary)",
            fontSize: "16px",
            lineHeight: 1.2,
            color: "#e3e3e3",
          }}
        />

        {/* Submit button overlay — covers the imported button, renders "Submit" at 600 weight.
            Disabled (dimmed) until the user types a description, then becomes active/clickable. */}
        <button
          type="button"
          onClick={onSubmit}
          disabled={!canSubmit}
          aria-label="Submit"
          style={{
            position: "absolute",
            top: "730px",
            left: "24px",
            width: "342px",
            height: "44px",
            borderRadius: "500px",
            background: canSubmit ? "var(--color-action-primary-bg)" : "#2a2a2a",
            border: "none",
            cursor: canSubmit ? "pointer" : "not-allowed",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-family-primary)",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: 1,
              color: canSubmit ? "var(--color-action-primary-text)" : "#666",
            }}
          >
            Submit
          </span>
        </button>
          </div>
      <UnifiedStatusBar hostClass="contact-support-sb" />
    </div>
  );
}
