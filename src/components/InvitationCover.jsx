import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { wedding } from "../data/wedding";
import flower1 from "../assets/flower1.png";
import flower3 from "../assets/flower3.png";
import "./InvitationCover.css";

export default function InvitationCover({ onOpen, closing }) {
  const reduced = useReducedMotion();
  const [isOpening, setIsOpening] = useState(false);

  function handleOpen() {
    if (isOpening || closing) return;

    setIsOpening(true);

    window.setTimeout(
      () => {
        onOpen();
      },
      reduced ? 0 : 1400,
    );
  }

  return (
    <motion.div
      className="invitation-cover max-w-3xl mx-auto"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: closing ? 0 : 1 }}
      transition={{ duration: reduced ? 0 : 0.4 }}
      style={{ pointerEvents: closing ? "none" : "auto" }}
    >
      {" "}
      <div className="cover-border cover-border-outer" />{" "}
      <div className="cover-border cover-border-inner" />
      <img src={flower1} alt="" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-0 w-44 -translate-x-10 -translate-y-10 -rotate-12 opacity-20 sm:w-64" />
      <img src={flower3} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-0 w-52 translate-x-12 translate-y-10 rotate-12 opacity-20 sm:w-72" />
      {/* Botanical decorations */}
      {/* Floating petals */}
      {!reduced &&
        Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className={`rose-petal petal-${i + 1}`} />
        ))}
      <motion.div
        className="cover-content"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={{
          opacity: isOpening ? 0 : 1,
          y: isOpening ? -12 : 0,
        }}
        transition={{ duration: reduced ? 0 : 0.5 }}
      >
        <motion.div
          className="cover-sparkle"
          animate={
            reduced ? undefined : { rotate: [0, 12, -12, 0], y: [0, -5, 0] }
          }
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles size={25} strokeWidth={1.2} />
        </motion.div>

        <p className="cover-eyebrow">Wedding Invitation</p>

        <div className="cover-divider">
          <span />
          <Heart size={13} fill="currentColor" />
          <span />
        </div>

        <p className="cover-date">{wedding.dateLabel}</p>

        {/* CSS Envelope */}
        <button
          type="button"
          className={`envelope-button ${isOpening ? "is-opening" : ""}`}
          onClick={handleOpen}
          disabled={isOpening || closing}
          aria-label="Click to open the wedding invitation"
        >
          <div className="envelope">
            {/* Letter inside envelope */}
            <div className="envelope-letter">
              <Sparkles size={19} />
              <span>With Love</span>
              <Heart size={17} fill="currentColor" />
            </div>

            {/* Envelope body */}
            <div className="envelope-back" />

            <div className="envelope-front-left" />
            <div className="envelope-front-right" />
            <div className="envelope-front-bottom" />

            {/* Top flap */}
            <div className="envelope-flap">
              <div className="flap-inner" />
            </div>

            {/* Wax seal */}
            <div className="wax-seal">
              <Heart size={23} fill="currentColor" strokeWidth={1.3} />
            </div>
          </div>
        </button>
      </motion.div>
    </motion.div>
  );
}
