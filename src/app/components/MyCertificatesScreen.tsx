import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import DataCertificates1 from "@/imports/DataCertificates-1/index";
import SmallCards2 from "@/imports/SmallCards-2/index";
import SmallCards3 from "@/imports/SmallCards-3/index";
import SmallCards4 from "@/imports/SmallCards-4/index";
import SmallCards5 from "@/imports/SmallCards-5/index";
import SmallCards6 from "@/imports/SmallCards-6/index";
import SmallCards7 from "@/imports/SmallCards-7/index";
import Enroll7 from "@/imports/Enroll-7/index";
import FiltersImport from "@/imports/Filters/index";
import { MainBottomNav } from "./MainBottomNav";

const CARD_W = 342;
const CARD_H = 200;
const CARD_GAP = 16;
const CARDS_TOP = 364;
const BOTTOM_NAV_H = 72;
const LEARN_MORE_SHEET_H = 1481;
const FILTERS_SHEET_H = 960;

const SPRING = { type: "spring" as const, damping: 30, stiffness: 260 };

export function MyCertificatesScreen({ onHome, onSavingsPlan }: { onHome?: () => void; onSavingsPlan?: () => void } = {}) {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    // Full-bleed wrapper — fills the 393×852 device frame exactly, no slivers
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#070707" }}>

      {/* Base design: status bar, header, filter row. Its own baked bottom nav
          is hidden below in favor of the shared MainBottomNav. */}
      <style>{`.mycertificates-import .h-\\[72px\\] { display: none !important; }`}</style>
      <div className="mycertificates-import" style={{ position: "absolute", inset: 0 }}>
        <DataCertificates1 />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <MainBottomNav activeTab="savingsPlan" onHome={onHome} onSavingsPlan={onSavingsPlan} />
      </div>

      {/* Scrollable certificate cards */}
      <div
        style={{
          position: "absolute",
          top: `${CARDS_TOP}px`,
          left: 0,
          right: 0,
          bottom: `${BOTTOM_NAV_H}px`,
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: `${CARD_GAP}px`,
          padding: "16px 0 16px",
        }}
      >
        <div style={{ width: `${CARD_W}px`, height: `${CARD_H}px`, flexShrink: 0 }}><SmallCards2 /></div>
        <div style={{ width: `${CARD_W}px`, height: `${CARD_H}px`, flexShrink: 0 }}><SmallCards3 /></div>
        <div style={{ width: `${CARD_W}px`, height: `${CARD_H}px`, flexShrink: 0 }}><SmallCards4 /></div>
        <div style={{ width: `${CARD_W}px`, height: `${CARD_H}px`, flexShrink: 0 }}><SmallCards5 /></div>
        <div style={{ width: `${CARD_W}px`, height: `${CARD_H}px`, flexShrink: 0 }}><SmallCards6 /></div>
        <div style={{ width: `${CARD_W}px`, height: `${CARD_H}px`, flexShrink: 0 }}><SmallCards7 /></div>
      </div>

      {/* Tap target: "Learn more" subtitle in Frame7 (top 128px) */}
      <button
        type="button"
        aria-label="Learn more about data certificates"
        onClick={() => setShowLearnMore(true)}
        style={{
          position: "absolute",
          top: "128px",
          left: "24px",
          width: "342px",
          height: "41px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 5,
        }}
      />

      {/* Tap target: Filters pill — Frame12 at top-[208px], pill is ~130px wide */}
      <button
        type="button"
        aria-label="Open filters"
        onClick={() => setShowFilters(true)}
        style={{
          position: "absolute",
          top: "208px",
          left: "24px",
          width: "130px",
          height: "44px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 5,
        }}
      >
        {/* Corrected "1" badge — covers the import's over-padded badge (p-[10px] on a 20px circle) */}
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "20px",
            height: "20px",
            borderRadius: "100px",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-family-secondary)",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: 1,
              color: "#070707",
            }}
          >
            1
          </span>
        </div>
      </button>

      {/* ── Learn More sheet ── */}
      <AnimatePresence>
        {showLearnMore && (
          <motion.div
            key="learn-more-sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={SPRING}
            style={{ position: "absolute", inset: 0, overflowY: "auto", overflowX: "hidden", zIndex: 20 }}
          >
            <div style={{ position: "relative", width: "100%", height: `${LEARN_MORE_SHEET_H}px` }}>
              <Enroll7 />

              {/* X button — over Frame1's close icon (top-71, right-24, 24×24) */}
              <button
                type="button"
                aria-label="Close"
                onClick={() => setShowLearnMore(false)}
                style={{
                  position: "absolute",
                  top: "71px",
                  right: "24px",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 30,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="#E3E3E3" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              {/* "Done" button — over the import's Done button (top-1158, left-24, w-338, h-44) */}
              <button
                type="button"
                aria-label="Done"
                onClick={() => setShowLearnMore(false)}
                style={{
                  position: "absolute",
                  top: "1158px",
                  left: "24px",
                  width: "338px",
                  height: "44px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 30,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Filters sheet ── slides up to sit flush beneath the status bar (54px) */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            key="filters-sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={SPRING}
            style={{ position: "absolute", top: "54px", left: 0, right: 0, bottom: 0, overflowY: "auto", overflowX: "hidden", zIndex: 20 }}
          >
            <div style={{ position: "relative", width: "100%", height: `${FILTERS_SHEET_H}px` }}>
              <FiltersImport />

              {/* X button — over Filters1's close icon (top-26, right-24, 24×24) */}
              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setShowFilters(false)}
                style={{
                  position: "absolute",
                  top: "26px",
                  right: "24px",
                  width: "24px",
                  height: "24px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 30,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
