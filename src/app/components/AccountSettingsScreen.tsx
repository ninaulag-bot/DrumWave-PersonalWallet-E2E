import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import AccountProfile from "@/imports/Profile/index";
import svgPaths from "@/imports/Name-1/svg-nk770tkaph";

interface AccountSettingsScreenProps {
  onBack: () => void;
  onCarolinaClick: () => void;
  onChangePassword: () => void;
  onRequestDrumwaveData: () => void;
  onFaqs: () => void;
  onContactSupport: () => void;
  onLegal: () => void;
  profilePhotoSrc?: string | null;
  /** Shows the "Password successfully updated!" toast for 3s, then calls onDismissPasswordToast */
  showPasswordToast?: boolean;
  onDismissPasswordToast?: () => void;
  /** Shows the "Your report has been sent!" toast for 3s, then calls onDismissReportToast */
  showReportToast?: boolean;
  onDismissReportToast?: () => void;
}

/** Green success toast that slides in from above and can be dismissed. */
function SuccessToast({ show, message, onDismiss }: { show?: boolean; message: string; onDismiss?: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -160, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -160, x: "-50%", opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
          style={{
            position: "absolute",
            top: "62px",
            left: "50%",
            width: "344px",
            maxWidth: "calc(100% - 44px)",
            zIndex: 50,
            background: "#004e2c",
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0 }}>
              <CheckmarkIcon />
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--color-text-primary)",
                whiteSpace: "nowrap",
              }}
            >
              {message}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onDismiss?.()}
            aria-label="Dismiss"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              width: "20px",
              height: "20px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CloseIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CheckmarkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.pd01100} fill="#E3E3E3" />
      <path clipRule="evenodd" d={svgPaths.p14951d00} fill="#E3E3E3" fillRule="evenodd" />
      <path d={svgPaths.p3791280} fill="#004E2C" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="11.6667" height="11.6667" viewBox="0 0 11.6667 11.6667" fill="none">
      <path d={svgPaths.p19fbbe60} fill="white" />
    </svg>
  );
}

export function AccountSettingsScreen({ onBack, onCarolinaClick, onChangePassword, onRequestDrumwaveData, onFaqs, onContactSupport, onLegal, profilePhotoSrc, showPasswordToast, onDismissPasswordToast, showReportToast, onDismissReportToast }: AccountSettingsScreenProps) {
  // Auto-dismiss the password toast after 3 seconds
  useEffect(() => {
    if (!showPasswordToast) return;
    const t = setTimeout(() => onDismissPasswordToast?.(), 3000);
    return () => clearTimeout(t);
  }, [showPasswordToast, onDismissPasswordToast]);

  // Auto-dismiss the report toast after 3 seconds
  useEffect(() => {
    if (!showReportToast) return;
    const t = setTimeout(() => onDismissReportToast?.(), 3000);
    return () => clearTimeout(t);
  }, [showReportToast, onDismissReportToast]);

  return (
    // Scroll container — fills the phone viewport, scrolls vertically, no visible scrollbar
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        // scrollbar hidden globally via globals.css, but also set here for safety
        scrollbarWidth: "none",
      }}
    >
      {/* Inner canvas is taller than 852px so absolutely-positioned content
          (the DrumWave logo at the bottom) isn't clipped */}
      <div style={{ position: "relative", width: "100%", height: "940px" }}>
        <AccountProfile onBack={onBack} />

        {/* Override the status-bar "9:41" to render in Open Sans (import uses SF Pro,
            and imports are read-only). Masks the original Time region (flex-1 of the
            402px status bar ≈ 139px wide) at status bar top (pt:21) and restates it. */}
        <div
          style={{
            position: "absolute",
            top: "21px",
            left: 0,
            width: "139px",
            height: "33px",
            paddingLeft: "16px",
            paddingRight: "6px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--color-bg-base)",
            zIndex: 6,
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 600,
              fontSize: "17px",
              lineHeight: "22px",
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            9:41
          </p>
        </div>

        {/* Overlay updated 64×64 avatar (Frame20) inside the user account card.
            Frame23 starts at top:134px; header ~24px + gap 16px + card padding 16px = top:190px.
            Frame23 is centered (343px wide); card has 16px padding → left ≈ 40px. */}
        {profilePhotoSrc && (
          <img
            src={profilePhotoSrc}
            alt="Profile photo"
            style={{
              position: "absolute",
              top: "190px",
              left: "40px",
              width: "64px",
              height: "64px",
              borderRadius: "9999px",
              objectFit: "cover",
              pointerEvents: "none",
              zIndex: 5,
            }}
          />
        )}

        {/* Transparent tap target over the "Carolina Smith" user account row.
            Frame27 (avatar row) is at ~y=190px, ~100px tall. */}
        <button
          type="button"
          onClick={onCarolinaClick}
          aria-label="View Carolina Smith profile"
          style={{
            position: "absolute",
            top: "186px",
            left: "24px",
            right: "24px",
            height: "100px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        />

        {/* Transparent tap target over the "Change password" row.
            Frame30 → Frame7 sits below the avatar row:
            card top ~174px + 16px padding + 64px avatar + 24px gap + 16px gap = ~294px */}
        <button
          type="button"
          onClick={onChangePassword}
          aria-label="Change password"
          style={{
            position: "absolute",
            top: "278px",
            left: "24px",
            right: "24px",
            height: "52px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        />

        {/* Transparent tap target over the "Request my DrumWave data" row.
            General section card top ~410px + 16px padding = ~426px */}
        <button
          type="button"
          onClick={onRequestDrumwaveData}
          aria-label="Request my DrumWave data"
          style={{
            position: "absolute",
            top: "420px",
            left: "24px",
            right: "24px",
            height: "44px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        />

        {/* Transparent tap target over the "FAQs" row.
            Second row in the General section, ~56px below the
            "Request my DrumWave data" row (24px row + 16px gap + divider + 16px gap). */}
        <button
          type="button"
          onClick={onFaqs}
          aria-label="FAQs"
          style={{
            position: "absolute",
            top: "476px",
            left: "24px",
            right: "24px",
            height: "44px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        />

        {/* Transparent tap target over the "Contact support" row.
            Third row in the General section, ~56px below the "FAQs" row. */}
        <button
          type="button"
          onClick={onContactSupport}
          aria-label="Contact support"
          style={{
            position: "absolute",
            top: "532px",
            left: "24px",
            right: "24px",
            height: "44px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        />

        {/* Transparent tap target over the "Legal" row.
            Fifth row in the General section (Delete account sits between it and Contact support). */}
        <button
          type="button"
          onClick={onLegal}
          aria-label="Legal"
          style={{
            position: "absolute",
            top: "644px",
            left: "24px",
            right: "24px",
            height: "44px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        />
      </div>

      {/* Success toasts — slide in from above, auto-hide after 3s */}
      <SuccessToast show={showPasswordToast} message="Password successfully updated!" onDismiss={onDismissPasswordToast} />
      <SuccessToast show={showReportToast} message="Your report has been sent!" onDismiss={onDismissReportToast} />
    </div>
  );
}
