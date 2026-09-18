import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "@/imports/Faq-1/svg-j91kby9dq9";
import { StatusBar } from "@/app/components/ui/StatusBar";
import { MiniFooter } from "@/app/components/MiniFooter";

interface FaqScreenProps {
  onBack: () => void;
}

interface FaqItem {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    question: "How does my Personal dWallet work?",
    answer:
      "Your Personal dWallet is like a bank account for your data. Today, your money lives in the bank, and your data lives in the cloud. You’re free to send, receive, or spend your money however you choose—but not your data. Right now, others manage and profit from your data. Your data is valuable. With Personal dWallet, you can request your data, certify it, and truly own it.",
  },
  {
    question: "How does a data request work?",
    answer:
      "To request data with your Personal dWallet, simply choose a company you have a relationship with, click the “Request Data” button and confirm. Each request received by DrumWave will be forwarded to the respective company. We’ll keep you informed every step of the way. In this first phase, you’ll be able to request data from a list of 40 companies. This list will grow over time.",
  },
  {
    question: "What’s a data certificate and how is data value captured?",
    answer:
      "Each submitted and accepted request generates a data certificate between you and the requested company. This certificate establishes the rights to the value of the data stored therein. The first certificate activates your Personal dWallet. The more certificates accepted, the greater the potential value of your data. The certification phase is important to begin capturing value, as in many cases, you have years-long relationships that have already produced a large amount of data.",
  },
  {
    question: "What’s a Data Savings Plan and how will it work?",
    answer: (
      <>
        <p style={{ margin: "0 0 19.2px", lineHeight: 1.2 }}>
          Data Savings Plans are coming soon to your Personal dWallet. Just as
          traditional savings plans build wealth from money, Data Savings Plans
          build wealth from certified data value. They empower individuals and
          organizations to save, manage, and grow the value of the data they
          generate—securely and transparently.
        </p>
        <p style={{ margin: "0 0 19.2px", lineHeight: 1.2 }}>
          When available, you’ll be able to enroll in a Data Savings Plan and
          set preferences aligned with your personal goals. Your verified data
          certificates will be automatically added to your plan—putting your
          data to work for you. Over time, your data’s certified value grows,
          and as companies license its use, you’ll receive cash directly to
          your bank account.
        </p>
        <p style={{ margin: 0, lineHeight: 1.2 }}>
          DrumWave will never sell your data. Every transaction is transparent,
          auditable, and under your full control. Data savings is a long-term
          investment in your future—and in a more equitable data economy.
        </p>
      </>
    ),
  },
];

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#121212",
        borderRadius: "8px",
        width: "342px",
        overflow: "hidden",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "16px",
          padding: "16px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            flex: "1 1 0",
            minWidth: 0,
            fontFamily: "var(--font-family-primary)",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: 1.2,
            color: "var(--color-text-primary)",
          }}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{
            flexShrink: 0,
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Chevron pointing down (closed) → rotates 180° to point up (open) */}
          <span style={{ transform: "rotate(90deg)", display: "flex" }}>
            <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none">
              <path d={svgPaths.p33166380} fill="var(--color-text-primary)" />
            </svg>
          </span>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 16px 16px",
                fontFamily: "var(--font-family-primary)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.2,
                color: "var(--color-text-secondary)",
              }}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqScreen({ onBack }: FaqScreenProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--color-bg-base)",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
      }}
    >
      {/* Full-height column so the footer can sit at the bottom on short screens */}
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>

      {/* Status bar */}
      <StatusBar />

      {/* Header: back arrow + title — sticky so it stays put while the page
          scrolls under it. The root is the scroll container, so sticky is the
          only option here; absolute would scroll with the content. */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "48px",
          width: "342px",
          margin: "71px auto 0",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "var(--color-bg-base)",
        }}
      >
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          style={{
            width: "33px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span style={{ width: "24px", height: "24px", display: "flex", alignItems: "center" }}>
            <svg width="11.775" height="20" viewBox="0 0 11.775 20" fill="none">
              <path d={svgPaths.p30d4a680} fill="white" />
            </svg>
          </span>
        </button>
        <p
          style={{
            flex: "1 1 0",
            minWidth: 0,
            margin: 0,
            fontFamily: "var(--font-family-primary)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: 1.2,
            color: "white",
            textAlign: "center",
          }}
        >
          FAQs
        </p>
        {/* Spacer to balance the back button and keep the title centered */}
        <span style={{ width: "33px", flexShrink: 0 }} />
      </div>

      {/* Accordion list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          width: "342px",
          margin: "24px auto 0",
        }}
      >
        {FAQS.map((item, i) => (
          <AccordionItem key={i} item={item} />
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          width: "245px",
          margin: "331px auto 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-family-primary)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: 1.2,
            color: "white",
            textDecoration: "underline",
          }}
        >
          support@drumwave.com
        </p>
      </div>
    
      <MiniFooter />
      
      </div>
      </div>
  );
}
