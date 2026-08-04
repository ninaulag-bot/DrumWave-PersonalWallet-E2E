import ProfileImport from "@/imports/Profile-1/index";
import { UnifiedStatusBar } from "@/app/components/ui/StatusBarOverlay";

interface UserProfileScreenProps {
  onBack: () => void;
  onUploadClick: () => void;
  profilePhotoSrc?: string | null;
}

export function UserProfileScreen({ onBack, onUploadClick, profilePhotoSrc }: UserProfileScreenProps) {
  return (
    <div className="relative size-full overflow-hidden">
      <div className="user-profile-sb relative size-full">
        <ProfileImport />

        {/* Overlay updated profile photo on the 124×124 avatar (Frame13, top:144px, centered) */}
        {profilePhotoSrc && (
          <img
            src={profilePhotoSrc}
            alt="Profile photo"
            style={{
              position: "absolute",
              top: "144px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "124px",
              height: "124px",
              borderRadius: "9999px",
              objectFit: "cover",
              pointerEvents: "none",
              zIndex: 5,
            }}
          />
        )}

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

        {/* "Upload a new photo" button — Frame19 sits below the 124px avatar at top=144px,
            gap=17px, so button starts at ~y=285px, h=44px, centered */}
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
      <UnifiedStatusBar hostClass="user-profile-sb" />
    </div>
  );
}
