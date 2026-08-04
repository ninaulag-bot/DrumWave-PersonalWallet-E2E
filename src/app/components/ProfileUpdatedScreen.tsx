import Profile3Import from "@/imports/Profile-3/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface ProfileUpdatedScreenProps {
  onBack: () => void;
  onUploadClick: () => void;
}

export function ProfileUpdatedScreen({ onBack, onUploadClick }: ProfileUpdatedScreenProps) {
  return (
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div className="profile-updated-sb" style={{ position: "relative", width: "100%", height: "100%" }}>
        <Profile3Import />

        {/* Back arrow — header at top=71px, h=48px */}
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
            zIndex: 10,
          }}
        />

        {/* "Upload a new photo" button — same position as UserProfileScreen */}
        <button
          type="button"
          onClick={onUploadClick}
          aria-label="Upload a new photo"
          style={{
            position: "absolute",
            top: "280px",
            left: "50px",
            right: "50px",
            height: "54px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        />
          </div>
      <UnifiedStatusBar hostClass="profile-updated-sb" />
    </div>
  );
}
