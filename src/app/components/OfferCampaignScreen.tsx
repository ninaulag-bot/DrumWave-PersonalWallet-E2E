import OfferCampaignLandingPageUnauthenticated from "@/imports/OfferCampaignLandingPageUnauthenticated/index";
import { MainBottomNav } from "./MainBottomNav";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface OfferCampaignScreenProps {
  /** Back arrow in the profile header. */
  onBack?: () => void;
  /** "Continue enrollment" CTA — starts the DSP enroll flow. */
  onContinue?: () => void;
  onHome?: () => void;
  onMyData?: () => void;
  onSavingsPlan?: () => void;
}

/** Offer campaign landing page reached from the Tesla "Continue enrollment" CTA.
 *  Renders the read-only import as-is and overlays a transparent tap-target on the
 *  header back arrow so the user can return to the home screen. */
export function OfferCampaignScreen({ onBack, onContinue, onHome, onMyData, onSavingsPlan }: OfferCampaignScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="offer-campaign-sb" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        {/* Force the "Continue enrollment" CTA label (inside the read-only import's
            "Offer CTAs" node) to 600 weight, without editing the protected import. */}
        <style>{`
          [data-name="Offer CTAs"] p {
            font-weight: 600 !important;
          }
        `}</style>
        {/* The imported page is taller than the phone frame (CTA sits at ~top 1319px).
            Give it its full height so the wrapper can scroll instead of clipping. */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "72px", overflowY: "auto", overflowX: "hidden" }}>
        <div style={{ position: "relative", width: "100%", height: "1400px" }}>
          <OfferCampaignLandingPageUnauthenticated />

          {/* "Continue enrollment" CTA tap-target (import's Offer CTAs: top 1319px,
              left 40.25px, 310×36). Starts the DSP enroll flow. */}
          <button
            type="button"
            onClick={onContinue}
            aria-label="Continue enrollment"
            style={{
              position: "absolute",
              top: "1319px",
              left: "40.25px",
              width: "310px",
              height: "36px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 5,
              fontFamily: "var(--font-family-primary)",
              fontWeight: 600,
            }}
          />
        </div>

        {/* Back arrow tap-target (profile header, ~top 71px, left edge). */}
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          style={{
            position: "absolute",
            top: "71px",
            left: "24px",
            width: "44px",
            height: "48px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 5,
          }}
        />
        </div>

        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <MainBottomNav activeTab="offers" onHome={onHome} onMyData={onMyData} onSavingsPlan={onSavingsPlan} />
        </div>
          </div>
      <UnifiedStatusBar hostClass="offer-campaign-sb" />
    </div>
  );
}
