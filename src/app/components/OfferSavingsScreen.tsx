import Savings from "@/imports/Savings/index";
import { MiniFooter } from "@/app/components/MiniFooter";

interface OfferSavingsScreenProps {
  /** "Go to my Data Savings Plan" CTA — advances the Offer 1.0 flow. */
  onContinue?: () => void;
  /** "Claim my Tesla data" bar — opens the unauthenticated claim landing page. */
  onClaim?: () => void;
}

/** First screen of the "Offer 1.0" demo flow. Renders the read-only Savings
 *  import as-is inside a scrollable container (the design is taller than the
 *  device frame) and overlays a transparent tap-target on the primary CTA. */
export function OfferSavingsScreen({ onContinue, onClaim }: OfferSavingsScreenProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div
        style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}
      >
      {/* Full-height column so the footer can sit at the bottom on short screens */}
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>

        {/* The Savings design is absolutely positioned. The black IMG_9143 screenshot
            begins at ~1118px; we clip it and place the email footer on top instead. */}
        <div style={{ position: "relative", width: "100%", height: "1600px", overflow: "hidden" }}>
          <Savings />

          {/* "Claim my Tesla data" bar tap-target (Frame3: y ≈ 1062px, 390×56). */}
          <button
            type="button"
            onClick={onClaim}
            aria-label="Claim my Tesla data"
            style={{
              position: "absolute",
              top: "1062px",
              left: 0,
              width: "100%",
              height: "56px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 6,
            }}
          />

          {/* Email footer — added below "Claim my Tesla data". White email surface
              masks the clipped black screenshot behind it. */}
          <div
            style={{
              position: "absolute",
              top: "1118px",
              left: 0,
              right: 0,
              bottom: 0,
              background: "#ffffff",
              padding: "28px 24px",
              fontFamily: "var(--font-family-secondary)",
            }}
          >
            <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.4, color: "#3a3a3a" }}>
              Questions? Visit{" "}
              <a href="#" style={{ color: "#3a3a3a", textDecoration: "underline" }}>
                support
              </a>
            </p>

            <div style={{ height: "1px", background: "#e2e2e2", margin: "22px 0" }} />

            {/* Tesla wordmark */}
            <p
              style={{
                margin: "0 0 18px",
                fontFamily: "var(--font-family-primary)",
                fontSize: "17px",
                fontWeight: 400,
                letterSpacing: "0.42em",
                color: "#4a4a4a",
              }}
            >
              TESLA
            </p>

            <p style={{ margin: "0 0 14px", fontSize: "18px", fontWeight: 700, color: "#1a1a1a" }}>
              2025 Tesla Insurance, Inc.
            </p>

            <p style={{ margin: 0, fontSize: "14px", color: "#3a3a3a" }}>Privacy &amp; Legal | Careers</p>

            <p style={{ margin: "40px 0 0", fontSize: "12px", lineHeight: 1.6, color: "#8a8a8a" }}>
              This email and any files transmitted with it are confidential and intended solely for the
              use of the individual or entity to which they are addressed. Contact us if you have any
              questions related to the content of this email or if you have received it in error.
              Confidential and personally identifiable information should not be transmitted to Tesla
              Insurance via email or email attachment. Tesla Insurance is not responsible for any
              confidential or personally identifiable information that is lost or misused during
              transmission via email or email attachment to Tesla Insurance. Contact us if you have any
              questions about our policy.
            </p>
          </div>

          {/* "Go to my Data Savings Plan" CTA tap-target.
              Button lives at left 24px, top 507.5px, 290×48 in the import. */}
          <button
            type="button"
            onClick={onContinue}
            aria-label="Go to my Data Savings Plan"
            style={{
              position: "absolute",
              top: "507.5px",
              left: "24px",
              width: "290px",
              height: "48px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 5,
            }}
          />
        </div>
      
      <MiniFooter />
      
      </div>
      </div>
      {/* No UnifiedStatusBar — the Savings import's IMG_6075 chrome already
          paints time/wifi/battery at the top. */}
    </div>
  );
}
