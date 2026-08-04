import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DWCloud from "@/imports/DWCloud/index";
import DWCloudDeleted from "@/imports/DWCloud-5/index";
import dwSvg from "@/imports/DWCloud/svg-ze2s0rutt2";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface DWCloudScreenProps {
  /** Back arrow in the profile header. */
  onBack?: () => void;
  /** "Upload more files" button (bottom). */
  onUploadMore?: () => void;
}

/** Files shown in the vault. */
const FILES = [
  { id: "tesla", name: "Tesladata.zip", size: "33.4 MB", date: "Sep 9, 2025" },
  { id: "file2", name: "File2.zip", size: "33.4 MB", date: "Sep 9, 2025" },
  { id: "file3", name: "File3.zip", size: "33.4 MB", date: "Sep 9, 2025" },
];

type SelectedFile = (typeof FILES)[number];

/** The dWCloud file vault screen. Renders the read-only DWCloud import for chrome and
 *  overlays transparent tap-targets for interactivity. Tapping a file's three-dot menu
 *  opens the file-actions sheet; Confirm Delete navigates to the DWCloud-5 screen. */
export function DWCloudScreen({ onBack, onUploadMore }: DWCloudScreenProps) {
  const [selected, setSelected] = useState<SelectedFile | null>(null);
  const [confirming, setConfirming] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);

  const closeSheet = () => {
    setSelected(null);
    setConfirming(false);
  };

  const confirmDelete = () => {
    closeSheet();
    setShowDeleted(true);
  };

  // After confirming a delete, show the post-delete screen exactly as designed.
  if (showDeleted) {
    return (
            <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <div className="dwcloud-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
          <DWCloudDeleted />

          {/* Back arrow tap-target (profile header, ~top:66px left:24px). */}
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            style={{
              position: "absolute",
              top: "66px",
              left: "24px",
              width: "44px",
              height: "48px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 5,
            }}
          />

          {/* "Upload more files" tap-target (bottom:45px, 342px wide, centered). */}
          <button
            type="button"
            onClick={onUploadMore}
            aria-label="Upload more files"
            style={{
              position: "absolute",
              bottom: "45px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "342px",
              height: "48px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 5,
            }}
          />
              </div>
        <UnifiedStatusBar hostClass="dwcloud-sb" />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <DWCloud />

      {/* Back arrow tap-target (profile header, ~top:66px left:24px). */}
      <button
        type="button"
        onClick={onBack}
        aria-label="Go back"
        style={{
          position: "absolute",
          top: "66px",
          left: "24px",
          width: "44px",
          height: "48px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 5,
        }}
      />

      {/* Transparent tap-targets over the import's three-dot menu icons, one per baked
          row. Clicking opens the file-actions slide-up sheet for that file. */}
      {[422, 510, 598].map((dotY, i) => {
        const file = FILES[i];
        return (
          <button
            key={file.id}
            type="button"
            onClick={() => setSelected(file)}
            aria-label={`Options for ${file.name}`}
            style={{
              position: "absolute",
              top: `${dotY - 22}px`,
              left: "306px",
              width: "44px",
              height: "44px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 6,
            }}
          />
        );
      })}

      {/* "Upload more files" tap-target (bottom:45px, 342px wide, centered). */}
      <button
        type="button"
        onClick={onUploadMore}
        aria-label="Upload more files"
        style={{
          position: "absolute",
          bottom: "45px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "342px",
          height: "48px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 5,
        }}
      />

      {/* File-actions bottom sheet. */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="file-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSheet}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(7,7,7,0.72)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              zIndex: 20,
            }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 38 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#1d1d1d",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                padding: "24px 24px 0",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {confirming ? (
                <>
                  {/* Confirmation copy */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p style={{ margin: 0, fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "24px", lineHeight: 1.2, color: "#e3e3e3" }}>
                      Are you sure you want to delete your file and it’s associated data?
                    </p>
                    <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", lineHeight: 1.5, color: "#999", fontVariationSettings: '"wdth" 100' }}>
                      Deleting your data file could result in a data balance decrease.
                    </p>
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {/* Confirm Delete (red outline) */}
                    <button
                      type="button"
                      onClick={confirmDelete}
                      style={{
                        height: "48px",
                        borderRadius: "500px",
                        background: "transparent",
                        border: "0.911px solid #DD5050",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        width: "100%",
                      }}
                    >
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" style={{ display: "block" }}>
                        <path d="M4 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 2 18V4H1V2h5V1h6v1h5v2h-1v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 14 20H4ZM6 16h2V6H6v10Zm4 0h2V6h-2v10Z" fill="#DD5050" />
                      </svg>
                      <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "18px", lineHeight: 1, color: "#DD5050" }}>Confirm Delete</span>
                    </button>

                    {/* Cancel (white filled) */}
                    <button
                      type="button"
                      onClick={closeSheet}
                      style={{
                        height: "48px",
                        borderRadius: "500px",
                        background: "white",
                        border: "0.911px solid #ffffff",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "18px", lineHeight: 1, color: "#1d2023" }}>Cancel</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Title */}
                  <p style={{ margin: 0, fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "24px", lineHeight: 1.2, color: "#e3e3e3" }}>
                    {selected.name}
                  </p>

                  {/* Size · date */}
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "14px", lineHeight: 1.5, color: "#999", fontVariationSettings: '"wdth" 100' }}>{selected.size}</span>
                    <span style={{ width: "2px", height: "2px", borderRadius: "50%", background: "#cacaca", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", lineHeight: 1.5, color: "#e3e3e3", fontVariationSettings: '"wdth" 100' }}>{selected.date}</span>
                  </div>

                  {/* Delete file button */}
                  <button
                    type="button"
                    onClick={() => setConfirming(true)}
                    style={{
                      height: "48px",
                      borderRadius: "500px",
                      background: "transparent",
                      border: "0.911px solid #ffffff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      width: "100%",
                    }}
                  >
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" style={{ display: "block" }}>
                      <path d="M4 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 2 18V4H1V2h5V1h6v1h5v2h-1v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 14 20H4ZM6 16h2V6H6v10Zm4 0h2V6h-2v10Z" fill="#E3E3E3" />
                    </svg>
                    <span style={{ fontFamily: "var(--font-family-primary)", fontWeight: 600, fontSize: "18px", lineHeight: 1, color: "#e3e3e3" }}>Delete file</span>
                  </button>
                </>
              )}

              {/* Home indicator */}
              <div style={{ height: "21px", position: "relative", width: "100%" }}>
                <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "144px", height: "5px", borderRadius: "100px", background: "white" }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
