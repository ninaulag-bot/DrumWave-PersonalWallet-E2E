import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// DSP hero card photos — same assets as the "Apply for your Data Savings Plan" hero fan
import cardImgBack from "@/imports/Group1000006010/319574173f80dd8fd220243ad3d31d0452504621.png";
import cardImgMid from "@/imports/Group1000006010/dd0bd139a31114562f62e3d7bf65ac1d8bace93c.png";
import cardImgFront from "@/imports/Group1000006010/2513dd88975a303674e8b8cea62969b4944fcec2.png";
import { StatusBar } from "@/app/components/ui/StatusBar";
import dim2Icon from "@/imports/dim_2.png";
import summarySvg from "@/imports/Summary/svg-z7xy8lpy3q";
import contributeSvg from "@/imports/Contribute/svg-ffwivnx1yn";

// Categories — mirrors DataContributionStep
const CATEGORIES = [
  { key: "tech",          label: "Technology & Social Media", path: contributeSvg.p813af00 },
  { key: "travel",        label: "Travel & Transportation",   path: contributeSvg.p1692f180 },
  { key: "finance",       label: "Finance & Investments",     path: contributeSvg.p3ef00b80 },
  { key: "retail",        label: "Retail & Food",             path: contributeSvg.pc328900 },
  { key: "health",        label: "Health & Wellness",         path: contributeSvg.p2eac9d00 },
  { key: "entertainment", label: "Entertainment & Gaming",    path: contributeSvg.p7298e00 },
  { key: "insurance",     label: "Insurance & Utilities",     path: contributeSvg.p36b5c480 },
  { key: "civic",         label: "Civic & Government",        path: contributeSvg.p324dffc0 },
];

// ── Decorative card frame SVG (Frame4 from Summary Figma) ─────────────────────

// One tilted/skewed hero card — mirrors Component/Component1/Group2 from the Enroll-3 fan
function FanCard({
  left,
  top,
  src,
  bordered,
}: {
  left: number;
  top: number;
  src: string;
  bordered?: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${left}px`,
        top: `${top}px`,
        width: "238.838px",
        height: "187.523px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <div style={{ transform: "rotate(-15deg) skewX(-30deg) scaleY(0.87)" }}>
        <div style={{ position: "relative", width: "210.345px", height: "137.77px", borderRadius: "12px" }}>
          <ImageWithFallback
            src={src}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
          />
          {bordered && (
            <div
              aria-hidden
              style={{ position: "absolute", inset: 0, border: "1px solid rgba(255,255,255,0.4)", borderRadius: "12px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function PhotoCardFrame() {
  return (
    <div
      style={{
        position: "absolute",
        left: "23px",
        top: "122px",
        width: "328px",
        height: "263px",
        pointerEvents: "none",
      }}
    >
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 328 263"
      >
        <g>
          <g clipPath="url(#cfClip)">
            <g filter="url(#cfBlur)" opacity="0.7">
              <ellipse cx="144.5" cy="223.387" fill="#444BAC" rx="215.5" ry="74.5" />
            </g>
          </g>
          <rect height="262" rx="23.5" stroke="url(#cfGrad)" width="327" x="0.5" y="0.5" />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="269"
            id="cfBlur"
            width="551"
            x="-131"
            y="88.8867"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="30" />
          </filter>
          <linearGradient
            id="cfGrad"
            x1="59.5"
            x2="360"
            y1="5.387"
            y2="250.387"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3642EB" />
            <stop offset="0.745" stopColor="#3642EB" stopOpacity="0" />
          </linearGradient>
          <clipPath id="cfClip">
            <rect fill="white" height="263" rx="24" width="328" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ── Body text helper ──────────────────────────────────────────────────────────

function BodyText({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "1.2",
        color: "var(--color-text-secondary)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ── Section icon wrapper ──────────────────────────────────────────────────────

function SectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        flexShrink: 0,
        position: "relative",
      }}
    >{children}</div>
  );
}

// ── Summary Card ──────────────────────────────────────────────────────────────

function SummaryCard({
  icon,
  title,
  onEdit,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--color-bg-surface-alt)",
        borderRadius: "var(--radius-lg)",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid black",
          borderRadius: "var(--radius-lg)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          padding: "var(--space-4)",
          display: "flex",
          flexDirection: "column",
          gap: "19px",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {icon}
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "1.2",
                color: "var(--color-text-primary)",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </p>
          </div>
          <button
            onClick={onEdit}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "normal",
                color: "var(--color-text-primary)",
                letterSpacing: "-0.64px",
              }}
            >
              Edit
            </p>
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ── Shared icon SVG helper ────────────────────────────────────────────────────

function PathIcon({
  d,
  viewBox = "0 0 20 20",
  fill = "#E3E3E3",
}: {
  d: string;
  viewBox?: string;
  fill?: string;
}) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      fill="none"
      viewBox={viewBox}
    >
      <path d={d} fill={fill} />
    </svg>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface ConfirmApplicationProps {
  onBack: () => void;
  onEditStep: (step: number) => void;
  /** "Looks good" CTA — submits the application and routes to the review screen. */
  onConfirm?: () => void;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  ssn: string;
  phone: string;
  addr1: string;
  addr2: string;
  city: string;
  addrState: string;
  zip: string;
  bankName: string;
  routing: string;
  account: string;
  toggles: Record<string, boolean>;
  goalValue: number;
  preferNotToMonetize: boolean;
}

// ── Main component ────────────────────────────────────────────────────────────

export function ConfirmApplicationScreen({
  onBack,
  onEditStep,
  onConfirm,
  firstName,
  lastName,
  email,
  dob,
  ssn,
  phone,
  addr1,
  addr2,
  city,
  addrState,
  zip,
  bankName,
  routing,
  account,
  toggles,
  goalValue,
  preferNotToMonetize,
}: ConfirmApplicationProps) {
  const activeCategories = CATEGORIES.filter((c) => toggles[c.key]);

  const nameDisplay = [firstName, lastName].filter(Boolean).join(" ") || "—";
  const payoutSkipped = !bankName && !routing && !account;

  return (
    <div
      style={{
        background: "var(--color-bg-base)",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* ── Scrollable content ────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "21px",
          overflowY: "auto",
        }}
      >
        {/* Photo section: 430px container — fanned DSP cards matching the apply-screen hero */}
        <div style={{ position: "relative", height: "430px", width: "100%" }}>
          {/* Glow frame sits behind the cards */}
          <PhotoCardFrame />

          {/* Fanned cards — exact offsets/rotation from the Enroll-3 hero (back → front) */}
          <FanCard left={130.82} top={178.02} src={cardImgBack} bordered />
          <FanCard left={65.44} top={219.56} src={cardImgMid} />
          <FanCard left={37.82} top={155.7} src={cardImgFront} bordered />
        </div>

        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            padding: "0 24px 16px",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "1.2",
              color: "var(--color-text-primary)",
            }}
          >
            Confirm your application
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "1.32",
              color: "var(--color-text-primary)",
              opacity: 0.7,
              fontVariationSettings: '"wdth" 100',
            }}
          >
            Make sure all your details are correct before submitting your application.
          </p>
        </div>

        {/* Summary cards */}
        <div
          style={{
            padding: "8px 24px 160px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* 1. Personal info */}
          <SummaryCard
            icon={
              <SectionIcon>
                <PathIcon d={summarySvg.p7f34500} viewBox="0 0 20 20" />
              </SectionIcon>
            }
            title="Personal info"
            onEdit={() => onEditStep(1)}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <BodyText>{nameDisplay}</BodyText>
              <BodyText>{dob || "—"}</BodyText>
            </div>
            <BodyText>{email || "—"}</BodyText>
            <BodyText>{phone || "—"}</BodyText>
            <BodyText>SSN: XXXX</BodyText>
          </SummaryCard>

          {/* 2. Home address */}
          <SummaryCard
            icon={
              <SectionIcon>
                <div style={{ position: "absolute", inset: "8.33% 8.33%" }}>
                  <PathIcon d={summarySvg.p272d9900} viewBox="0 0 18 20" />
                </div>
              </SectionIcon>
            }
            title="Home address"
            onEdit={() => onEditStep(2)}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <BodyText>{addr1 || "—"}</BodyText>
              {addr2 ? <BodyText>{addr2}</BodyText> : null}
            </div>
            <BodyText>
              {city && addrState
                ? `${city}, ${addrState}`
                : city || addrState || "—"}
            </BodyText>
            {zip ? <BodyText>{zip}</BodyText> : null}
          </SummaryCard>

          {/* 3. Payout info */}
          <SummaryCard
            icon={
              <SectionIcon>
                <div style={{ position: "absolute", inset: "8.33%" }}>
                  <PathIcon d={summarySvg.p396e2400} viewBox="0 0 20 20" />
                </div>
              </SectionIcon>
            }
            title="Payout info"
            onEdit={() => onEditStep(3)}
          >
            {payoutSkipped ? (
              <BodyText>Not provided (skipped)</BodyText>
            ) : (
              <>
                <BodyText>{bankName || "—"}</BodyText>
                {account ? <BodyText>Account number: {account}</BodyText> : null}
                {routing ? <BodyText>Routing number: {routing}</BodyText> : null}
              </>
            )}
          </SummaryCard>

          {/* 4. Data contribution */}
          <SummaryCard
            icon={
              <SectionIcon>
                <ImageWithFallback
                  src={dim2Icon}
                  alt="Data contribution"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
              </SectionIcon>
            }
            title="Data contribution"
            onEdit={() => onEditStep(4)}
          >
            {activeCategories.length === 0 ? (
              <BodyText>No categories selected</BodyText>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                }}
              >
                {activeCategories.map((cat) => (
                  <div
                    key={cat.key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* Category-specific icon */}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        position: "relative",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path d={cat.path} fill="#999999" />
                      </svg>
                    </div>
                    <BodyText style={{ whiteSpace: "nowrap" }}>{cat.label}</BodyText>
                  </div>
                ))}
              </div>
            )}
          </SummaryCard>

          {/* 5. Desired goal */}
          <SummaryCard
            icon={
              <SectionIcon>
                <svg
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <mask
                    id="goalMask"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" as const }}
                    height="24"
                    width="24"
                    x="0"
                    y="0"
                  >
                    <rect fill="#D9D9D9" height="24" width="24" />
                  </mask>
                  <g mask="url(#goalMask)">
                    <path d={summarySvg.p1ccfe480} fill="#E3E3E3" />
                  </g>
                </svg>
              </SectionIcon>
            }
            title="Desired goal"
            onEdit={() => onEditStep(5)}
          >
            {preferNotToMonetize ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <BodyText>Prefer not to monetize</BodyText>
                <BodyText>N/A</BodyText>
              </div>
            ) : (
              <BodyText>${goalValue} / year</BodyText>
            )}
          </SummaryCard>
        </div>
      </div>

      {/* ── Fixed overlay: status bar backdrop ───────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "119px",
          backdropFilter: "blur(20px)",
          background: "rgba(7,7,7,0.1)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Status bar */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 11, pointerEvents: "none" }}>
        <StatusBar />
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          position: "absolute",
          top: "71px",
          left: "24px",
          width: "33px",
          height: "48px",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          zIndex: 11,
          padding: 0,
        }}
      >
        <div style={{ width: "24px", height: "24px", position: "relative", overflow: "visible" }}>
          <div style={{ position: "absolute", top: "8.33%", bottom: "8.33%", left: 0, right: "50.94%" }}>
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 11.775 20"
            >
              <path d={summarySvg.p30d4a680} fill="white" />
            </svg>
          </div>
        </div>
      </button>

      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "148px",
          backdropFilter: "blur(5px)",
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 40%)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* "Looks good" CTA */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "24px",
          right: "24px",
          zIndex: 11,
        }}
      >
        <button
          onClick={onConfirm}
          style={{
            width: "100%",
            height: "48px",
            background: "#E3E3E3",
            borderRadius: "500px",
            border: "0.911px solid white",
            cursor: "pointer",
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
              color: "#1d2023",
            }}
          >
            Looks good
          </span>
        </button>
      </div>

      {/* Home indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "21px",
          zIndex: 12,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "8px",
        }}
      >
        <div
          style={{
            background: "white",
            height: "5px",
            width: "144px",
            borderRadius: "100px",
          }}
        />
      </div>
    </div>
  );
}
