import { useState } from "react";
import Name1Import from "@/imports/Name-1/index";
import svgPaths from "@/imports/Name-1/svg-nk770tkaph";

function EyeIcon() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" fill="none">
      <path d={svgPaths.p8f0c00} fill="var(--color-text-primary)" />
    </svg>
  );
}

function PasswordField({
  value,
  onChange,
  show,
  onToggle,
}: {
  value: string;
  onChange: (v: string) => void;
  show: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: "var(--color-bg-surface)",
        borderRadius: "var(--radius-xs)",
        boxShadow: "inset 0 0 0 1px var(--color-border-secondary)",
        height: "44px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "12px",
        paddingRight: "2px",
        boxSizing: "border-box",
      }}
    >
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "16px",
          color: "var(--color-text-primary)",
          minWidth: 0,
        }}
      />
      <button
        type="button"
        onClick={onToggle}
        aria-label={show ? "Hide password" : "Show password"}
        style={{
          background: "transparent",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <EyeIcon />
      </button>
    </div>
  );
}

interface ChangePasswordScreenProps {
  onBack: () => void;
  onSuccess: () => void;
}

export function ChangePasswordScreen({ onBack, onSuccess }: ChangePasswordScreenProps) {
  // Demo: fields start empty and accept any input
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;
  // Demo mode: any input is accepted — just require all three fields to be filled
  const isValid =
    currentPassword.length > 0 &&
    newPassword.length > 0 &&
    confirmPassword.length > 0;

  function handleSubmit() {
    if (!isValid) return;
    // Navigate back to Account Profile — the success toast shows there
    onSuccess();
  }

  const labelStyle: React.CSSProperties = {
    margin: 0,
    fontFamily: "var(--font-family-primary)",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "normal",
    color: "var(--color-text-primary)",
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Name-1 import: renders status bar, "Change password" header, home indicator.
          The static form area underneath will be hidden by our overlay. */}
      <Name1Import />

      {/* Back button — covers the static back arrow */}
      <button
        type="button"
        onClick={onBack}
        aria-label="Go back"
        style={{
          position: "absolute",
          top: "71px",
          left: "12px",
          width: "80px",
          height: "48px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 20,
        }}
      />

      {/* Form overlay — covers the static input area with real interactive fields */}
      <div
        style={{
          position: "absolute",
          top: "144px",
          left: "24px",
          width: "342px",
          background: "var(--color-bg-base)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Current password */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{ ...labelStyle, fontFamily: "var(--font-family-secondary)", fontSize: "14px" }}>Enter current password</p>
          <PasswordField
            value={currentPassword}
            onChange={setCurrentPassword}
            show={showCurrent}
            onToggle={() => setShowCurrent((v) => !v)}
          />
        </div>

        {/* New + Confirm */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* New password */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ ...labelStyle, fontFamily: "var(--font-family-secondary)", fontSize: "14px" }}>New password</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.2,
                  color: "var(--color-text-primary)",
                  opacity: 0.8,
                }}
              >
                Passwords must have 12+ characters
              </p>
              <PasswordField
                value={newPassword}
                onChange={setNewPassword}
                show={showNew}
                onToggle={() => setShowNew((v) => !v)}
              />
            </div>
          </div>

          {/* Confirm password */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ ...labelStyle, fontFamily: "var(--font-family-secondary)", fontSize: "14px" }}>Confirm password</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <PasswordField
                value={confirmPassword}
                onChange={setConfirmPassword}
                show={showConfirm}
                onToggle={() => setShowConfirm((v) => !v)}
              />
              {/* "Passwords match" / "Passwords don't match" indicator */}
              {confirmPassword.length > 0 && (
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: 1.5,
                    color: passwordsMatch
                      ? "var(--color-status-success)"
                      : "var(--color-status-error)",
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  {passwordsMatch ? "Passwords match" : "Passwords don't match"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Submit button — dynamic active/disabled state */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isValid}
        style={{
          position: "absolute",
          top: "753px",
          left: "24px",
          width: "342px",
          height: "44px",
          borderRadius: "500px",
          background: isValid
            ? "var(--color-action-primary-bg)"
            : "var(--color-border-secondary)",
          border: "none",
          cursor: isValid ? "pointer" : "default",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            color: isValid
              ? "var(--color-action-primary-text)"
              : "var(--color-text-disabled)",
          }}
        >
          Change password
        </span>
      </button>
    </div>
  );
}
