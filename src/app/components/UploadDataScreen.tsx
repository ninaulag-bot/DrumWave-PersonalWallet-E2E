import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "@/imports/RequestData/svg-te9anx1ork";
import uploadSvg from "@/imports/Upload3/svg-6h72v7eg5k";
import { MainBottomNav } from "@/app/components/MainBottomNav";

// The first file is present as soon as files are selected…
const INITIAL_FILE = { id: "tesla", name: "Tesladata.zip", size: "33.4 MB" };
// …and these two fade in on the second "Select file(s) to upload" tap.
const ADDITIONAL_FILES = [
  { id: "file2", name: "File2.zip", size: "18.2 MB" },
  { id: "file3", name: "File3.zip", size: "24.7 MB" },
];

// File-list sizing — the scroll container is locked to exactly 3 rows tall.
const ROW_HEIGHT = 78;
const ROW_GAP = 12;
const VISIBLE_ROWS = 3;
const LIST_HEIGHT = VISIBLE_ROWS * ROW_HEIGHT + (VISIBLE_ROWS - 1) * ROW_GAP; // 258
const MIN_GAP_BELOW_LIST = 79; // at least 79px between the list and the agree row

/** A single "ready to upload" file card, matching the Upload3 design. */
function FileCard({ name, size }: { name: string; size: string }) {
  return (
    <div
      style={{
        background: "#121212",
        border: "1px solid #262626",
        borderRadius: "16px",
        padding: "16px",
        height: `${ROW_HEIGHT}px`,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
          <span style={{ width: "24px", height: "24px", position: "relative", flexShrink: 0 }}>
            <span style={{ position: "absolute", top: "16.67%", bottom: "16.67%", left: "8.33%", right: "8.33%" }}>
              <svg viewBox="0 0 20 16" width="100%" height="100%" fill="none" style={{ display: "block" }}>
                <path d={uploadSvg.p3e1ce00} fill="#E3E3E3" />
              </svg>
            </span>
          </span>
          <p style={{ margin: 0, fontFamily: "var(--font-family-primary)", fontWeight: 400, fontSize: "18px", lineHeight: 1.2, color: "#cacaca" }}>{name}</p>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "12px", lineHeight: 1.5, color: "#cacaca", fontVariationSettings: '"wdth" 100' }}>{size}</p>
          <span style={{ width: "2px", height: "2px", borderRadius: "9999px", background: "#CACACA", flexShrink: 0 }} />
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "12px", lineHeight: 1.5, color: "#D6D6D6", fontVariationSettings: '"wdth" 100' }}>Ready to upload</p>
        </div>
      </div>
      <span style={{ width: "24px", height: "24px", position: "relative", flexShrink: 0 }}>
        <span style={{ position: "absolute", inset: "20.83%" }}>
          <svg viewBox="0 0 14 14" width="100%" height="100%" fill="none" style={{ display: "block" }}>
            <path d={uploadSvg.p2aa77200} fill="#E3E3E3" />
          </svg>
        </span>
      </span>
    </div>
  );
}

/** "Select file(s) to upload" dashed drop box — matches the Figma design. */
function SelectFilesBox({ onClick, disabled = false }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "16px",
        padding: "40px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        // Exact Figma dashed stroke: color #565656, weight 1, dash 8 / gap 4, inside, radius 16.
        // CSS `border: dashed` can't set the 8/4 rhythm, so we draw it with an inset SVG border image.
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23565656' stroke-width='1' stroke-dasharray='8%2c 4'/%3e%3c/svg%3e\"), linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
        backgroundClip: "border-box",
      }}
    >
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        style={{
          height: "48px",
          padding: "12px 24px",
          borderRadius: "500px",
          background: "transparent",
          border: "0.911px solid #ffffff",
          cursor: disabled ? "default" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-family-primary)",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: 1,
          color: "#f3f3f3",
          // Never dim — the button keeps its look even after the last file is added.
          opacity: 1,
        }}
      >
        Select file(s) to upload
      </button>
    </div>
  );
}

/** Minimal status bar (9:41 + right-side glyphs). Prototype-level, not pixel-exact. */
function StatusBar() {
  return (
    <div
      style={{
        height: "54px",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "21px 20px 0",
        boxSizing: "border-box",
      }}
    >
      <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "17px", color: "white" }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <div style={{ width: "18px", height: "12px", background: "white", clipPath: "polygon(0 100%,20% 60%,20% 100%,40% 40%,40% 100%,60% 25%,60% 100%,80% 10%,80% 100%,100% 0,100% 100%)" }} />
        <div style={{ width: "17px", height: "12px", borderRadius: "2px", background: "white", opacity: 0.9 }} />
        <div style={{ width: "24px", height: "12px", borderRadius: "3px", border: "1px solid white", position: "relative" }}>
          <div style={{ position: "absolute", inset: "2px", right: "4px", background: "white", borderRadius: "1px" }} />
        </div>
      </div>
    </div>
  );
}

/** Shield-with-check icon, reconstructed inline (import path unavailable). */
function ShieldCheck() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
      <path
        d="M12 3 L19 5.6 V11 C19 15.4 16 18.9 12 21 C8 18.9 5 15.4 5 11 V5.6 Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8.8 11.4 L11 13.6 L15.2 9" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface UploadDataScreenProps {
  onBack: () => void;
  onUpload?: () => void;
  onHome?: () => void;
}

export function UploadDataScreen({ onBack, onUpload, onHome }: UploadDataScreenProps) {
  const [showTerms, setShowTerms] = useState(false);
  const closeTerms = () => setShowTerms(false);

  const [agreed, setAgreed] = useState(false);

  // 0 = empty, 1 = first file added, 2 = all files added. Each tap advances.
  const [uploadStep, setUploadStep] = useState(0);
  const MAX_STEP = 2;
  const selectMore = () => setUploadStep((s) => Math.min(s + 1, MAX_STEP));
  const goBack = () => (uploadStep === 0 ? onBack() : setUploadStep((s) => Math.max(s - 1, 0)));

  const showFiles = uploadStep >= 1;
  // Upload button is enabled only once at least one file is selected AND terms are agreed.
  const canUpload = showFiles && agreed;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* Main screen — one flex column for ALL steps. No imports, no overlays, no masks. */}
      <div style={{ position: "relative", width: "100%", height: "100%", background: "#070707", overflow: "hidden" }}>
        {/* Ambient purple/pink glow, bottom-center (box-shadow technique) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "1.28px",
            height: "1.28px",
            borderRadius: "212px",
            boxShadow: "0px -20px 200px 140px rgba(170, 40, 150, 0.22)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Content column, above the glow */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", width: "100%", height: "100%", boxSizing: "border-box" }}>
          <StatusBar />

          {/* Back button — absolutely positioned (Figma: top 69, left 24), OUT of flow so
              it doesn't push the heading down. */}
          <button
            type="button"
            onClick={goBack}
            aria-label="Go back"
            style={{ position: "absolute", top: "69px", left: "24px", background: "transparent", border: "none", cursor: "pointer", padding: "2px", display: "flex", alignItems: "center", zIndex: 2 }}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ display: "block" }}>
              <path d="M10 1 L2 10 L10 19" stroke="#E3E3E3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Header — heading lands at 180px from top: 54 (status bar) + 79 (pad) + 40 (icon) + 7 (gap) */}
          <div style={{ flexShrink: 0, padding: "79px 24px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ShieldCheck />
            <div style={{ marginTop: "7px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <p
                style={{
                  margin: 0,
                  width: "100%",
                  textAlign: "center",
                  fontFamily: "var(--font-family-primary)",
                  fontWeight: 400,
                  fontSize: "28px",
                  lineHeight: 1.21,
                  letterSpacing: "-0.84px",
                  color: "white",
                }}
              >
                Upload your data to the dWCloud
              </p>
              <p style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "#999" }}>
                Encrypted. Private. Always your choice.
              </p>
            </div>
          </div>

          {/* Dashed select box */}
          <div style={{ flexShrink: 0, padding: "28px 24px 0" }}>
            <SelectFilesBox onClick={selectMore} disabled={uploadStep >= MAX_STEP} fill="#131313" />
          </div>

          {/* Scrollable file list — only once files exist. Locked to 3 rows; scrolls if more. */}
          {showFiles && (
            <div style={{ flexShrink: 0, padding: "24px 24px 0" }}>
              <div
                className="[&::-webkit-scrollbar]:hidden"
                style={{
                  width: "100%",
                  height: `${LIST_HEIGHT}px`,
                  overflowY: "auto",
                  overflowX: "hidden",
                  scrollbarWidth: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: `${ROW_GAP}px`,
                }}
              >
                <FileCard name={INITIAL_FILE.name} size={INITIAL_FILE.size} />
                <AnimatePresence>
                  {uploadStep >= MAX_STEP &&
                    ADDITIONAL_FILES.map((f, i) => (
                      <motion.div
                        key={f.id}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.32, ease: "easeOut", delay: i * 0.08 }}
                        style={{ flexShrink: 0 }}
                      >
                        <FileCard name={f.name} size={f.size} />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Flexible spacer — grows to push the footer to the bottom when there's room
              (empty state), but collapses to 0 when files fill the screen so the footer is
              NEVER pushed off-frame. */}
          <div style={{ flex: "1 1 auto", minHeight: 0 }} />

          {/* Footer: agree row + Upload my Data */}
          <div style={{ flexShrink: 0, padding: "0 24px 12px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
            {/* Agree row — checkbox toggles */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center", width: "100%" }}>
              <button
                type="button"
                onClick={() => setAgreed((v) => !v)}
                aria-pressed={agreed}
                aria-label="I agree to the dWCloud Terms of Service"
                style={{ width: "24px", height: "24px", padding: 0, background: "transparent", border: "none", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "4px",
                    border: agreed ? "none" : "1.5px solid #565656",
                    background: agreed ? "var(--color-action-primary-bg, #0091FF)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {agreed && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ display: "block" }}>
                      <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="var(--color-action-primary-text, #ffffff)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </button>
              <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.4, color: "#e3e3e3" }}>
                I agree to the dWCloud{" "}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "#e3e3e3", fontWeight: 700, textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}
                >
                  Terms of Service.
                </button>
              </p>
            </div>

            {/* "Upload my Data" button — disabled (grey) until a file is selected AND terms agreed */}
            <button
              type="button"
              onClick={onUpload}
              disabled={!canUpload}
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "500px",
                background: canUpload ? "white" : "#2A2A2A",
                border: "0.911px solid #ffffff",
                cursor: canUpload ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "18px", lineHeight: 1, color: canUpload ? "#1d2023" : "#666666" }}>Upload my Data</span>
            </button>
          </div>

          <MainBottomNav onHome={onHome} />
        </div>
      </div>

      {/* Terms & conditions bottom sheet — slides up on open, down on dismiss. */}
      <AnimatePresence>
        {showTerms && (
          <>
            <motion.button
              type="button"
              onClick={closeTerms}
              aria-label="Dismiss terms"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ position: "absolute", inset: 0, background: "rgba(7,7,7,0.72)", border: "none", cursor: "pointer", zIndex: 30 }}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.9 }}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                maxWidth: "390px",
                background: "#1d1d1d",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                padding: "16px 24px 0",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
                zIndex: 31,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%" }}>
                <p style={{ margin: 0, flex: "1 0 0", fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "24px", lineHeight: 1.2, color: "#e3e3e3" }}>
                  Terms and conditions
                </p>
                <button
                  type="button"
                  onClick={closeTerms}
                  aria-label="Close"
                  style={{ background: "transparent", border: "none", cursor: "pointer", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <span style={{ width: "24px", height: "24px", position: "relative", display: "block" }}>
                    <span style={{ position: "absolute", inset: "20.83%" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ display: "block", width: "100%", height: "100%" }}>
                        <path d={svgPaths.p2aa77200} fill="#E3E3E3" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>

              <div style={{ width: "100%", fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "#999", fontVariationSettings: '"wdth" 100' }}>
                <p style={{ margin: 0 }}>{`These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and concerning your access to and use of the Website and the Services. You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms of Use. `}</p>
                <p style={{ margin: 0 }}>​</p>
                <p style={{ margin: 0 }}>IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
                <p style={{ margin: 0 }}>​</p>
                <p style={{ margin: 0 }}>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms.</p>
              </div>

              <div style={{ width: "100%" }}>
                <button
                  type="button"
                  onClick={closeTerms}
                  style={{ width: "100%", height: "48px", borderRadius: "500px", background: "transparent", border: "1px solid #ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <span style={{ width: "24px", height: "24px", position: "relative", display: "block" }}>
                    <span style={{ position: "absolute", inset: "16.67%" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ display: "block", width: "100%", height: "100%" }}>
                        <path d={svgPaths.p3573eb00} fill="#E3E3E3" />
                      </svg>
                    </span>
                  </span>
                  <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "18px", lineHeight: 1, color: "#e3e3e3" }}>Go Back</span>
                </button>
              </div>

              <div style={{ width: "100%", height: "21px", position: "relative" }}>
                <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "144px", height: "5px", borderRadius: "100px", background: "white" }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}