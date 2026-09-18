import OfferCampaignLandingPageUnauthenticatedV1 from "@/imports/OfferCampaignLandingPageUnauthenticated-1/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";
import { MiniFooter } from "@/app/components/MiniFooter";

interface OfferClaimScreenProps {
  /** "Sign up to claim now" CTA — starts the sign-up flow. */
  onContinue?: () => void;
  /** "Already have an account? Sign in" — goes to the sign-in landing page. */
  onSignIn?: () => void;
}

/** Unauthenticated "Claim your offer" landing page reached from the Savings
 *  email's "Claim my Tesla data" button. Renders the read-only import as-is
 *  inside a scrollable container and overlays a transparent tap-target on the
 *  primary CTA. */
export function OfferClaimScreen({ onContinue, onSignIn }: OfferClaimScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="offer-claim-sb" style={{ position: "relative", width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      {/* Full-height column so the footer can sit at the bottom on short screens */}
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>

        {/* The design's content is taller than the device frame; give it its full
            height so the wrapper scrolls instead of clipping. The CTA is anchored
            to the bottom of this container (import uses bottom-[45px]). */}
        <div style={{ position: "relative", width: "100%", height: "1550px" }}>
          <OfferCampaignLandingPageUnauthenticatedV1 />

          {/* "Sign up to claim now" CTA tap-target. The import's Frame31 is anchored
              bottom-[45px] and stacks the button above the sign-in row (gap 16), so the
              button sits ~82px from the bottom. */}
          <button
            type="button"
            onClick={onContinue}
            aria-label="Sign up to claim now"
            style={{
              position: "absolute",
              bottom: "82px",
              left: "24px",
              width: "342px",
              height: "48px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 5,
            }}
          />

          {/* "Already have an account? Sign in" tap-target — bottom-[45px] row. */}
          <button
            type="button"
            onClick={onSignIn}
            aria-label="Sign in"
            style={{
              position: "absolute",
              bottom: "43px",
              left: "24px",
              width: "342px",
              height: "24px",
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
      <UnifiedStatusBar hostClass="offer-claim-sb" />
    </div>
  );
}
