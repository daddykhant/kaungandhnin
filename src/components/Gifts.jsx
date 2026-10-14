import { useEffect, useState } from "react";
import { Gift, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import kpayQR from "../assets/kpayQR.JPG";
import FloralAccents from "./FloralAccents";

export default function Gifts() {
  const [showPayment, setShowPayment] = useState(false);
  const reduced = useReducedMotion();

  // Reusable scroll reveal animation
  const reveal = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    if (!showPayment) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setShowPayment(false);
    }

    window.addEventListener("keydown", closeOnEscape);

    // Prevent background scrolling while the modal is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [showPayment]);

  return (
    <section
      id="gifts"
      className="gift-section relative isolate overflow-hidden bg-linear-to-br from-burgundy-900 via-burgundy-600 to-burgundy-700 px-5 py-16 text-center sm:px-8 sm:py-24"
    >
      <FloralAccents variant="gifts" />

      {/* Ambient background glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/10 blur-3xl sm:h-96 sm:w-96"
        animate={
          reduced
            ? undefined
            : {
                scale: [0.85, 1.15, 0.85],
                opacity: [0.25, 0.65, 0.25],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={reduced ? false : "hidden"}
        whileInView={reduced ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        {/* Floating gift icon */}
        <motion.div
          variants={reveal}
          className="mx-auto mb-6 flex justify-center"
        >
          <motion.div
            animate={
              reduced
                ? undefined
                : {
                    y: [0, -8, 0],
                    rotate: [0, -5, 5, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Gift className="text-stone-50" size={32} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={reveal}
          className="text-[10px] uppercase tracking-[0.3em] text-stone-50 sm:text-xs sm:tracking-[0.35em]"
        >
          A thoughtful gesture
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={reveal}
          className="mx-auto mt-5 max-w-3xl font-serif text-3xl text-stone-50 sm:text-5xl"
        >
          Gifts for the Bride and Groom
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={reveal}
          className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-100/70 sm:text-base sm:leading-8"
        >
          Gifts for us are not necessary, but if you wish to give, we would be
          grateful for your blessings and support. Your presence at our wedding
          is the greatest gift of all.
        </motion.p>

        {/* Gift button */}
        <motion.button
          type="button"
          variants={reveal}
          onClick={() => setShowPayment(true)}
          whileHover={
            reduced
              ? undefined
              : {
                  y: -4,
                  scale: 1.04,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                }
          }
          whileTap={reduced ? undefined : { scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="gift-button mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy-50 shadow-lg shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage sm:px-8"
        >
          <Gift size={16} />
          မင်္ဂလာလက်ဖွဲ့
        </motion.button>
      </motion.div>

      {/* Payment modal */}
      {showPayment && (
        <motion.div
          key="gift-dialog"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-stone-950/60 p-4 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowPayment(false);
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gift-dialog-title"
            initial={
              reduced
                ? false
                : {
                    opacity: 0,
                    y: 35,
                    scale: 0.92,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: reduced ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative my-auto w-full max-w-sm overflow-hidden rounded-3xl border border-sage/35 bg-linear-to-br from-burgundy-50 to-stone-100 p-5 text-center shadow-2xl shadow-black/30 sm:p-8"
          >
            {/* Decorative top glow */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sage/20 blur-3xl"
              animate={
                reduced
                  ? undefined
                  : {
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.4, 0.8, 0.4],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Close button */}
            <motion.button
              type="button"
              onClick={() => setShowPayment(false)}
              whileHover={reduced ? undefined : { rotate: 90 }}
              whileTap={reduced ? undefined : { scale: 0.9 }}
              aria-label="Close gift details"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full text-stone-900/70 transition-colors hover:bg-black/5 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-sage sm:right-4 sm:top-4"
            >
              <X size={20} />
            </motion.button>

            {/* Modal content */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduced ? 0 : 0.12,
                duration: 0.4,
              }}
              className="relative"
            >
              <motion.div
                animate={
                  reduced
                    ? undefined
                    : {
                        y: [0, -4, 0],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Gift
                  size={25}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-burgundy-700"
                />
              </motion.div>

              <h3
                id="gift-dialog-title"
                className="mt-2 font-serif text-3xl text-stone-900 sm:text-4xl"
              >
                KBZPay
              </h3>

              <p className="mt-1 text-sm text-stone-900/65">
                Scan the QR code to send your gift
              </p>

              {/* QR code entrance animation */}
              <motion.div
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.9,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  delay: reduced ? 0 : 0.18,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="mx-auto mt-5 w-full max-w-[min(72vw,280px)] rounded-2xl bg-white p-2 shadow-xl shadow-black/15 sm:mt-6 sm:p-3"
              >
                <img
                  src={kpayQR}
                  alt="KBZPay payment QR code"
                  className="block aspect-square w-full rounded-xl object-contain"
                />
              </motion.div>

              {/* Payment account details */}
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduced ? 0 : 0.3,
                  duration: 0.4,
                }}
                className="mt-5 rounded-2xl border border-sage/30 bg-black/5 px-4 py-3 sm:px-5"
              >
                <p className="font-serif text-xl text-stone-900 sm:text-2xl">
                  Daw Hnin Wut Yee Htun
                </p>

                <a
                  href="tel:09441594352"
                  className="mt-1 inline-block min-h-10 pt-2 text-sm tracking-wider text-burgundy-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-sage"
                >
                  09441594352
                </a>
              </motion.div>

              <p className="mt-4 text-xs leading-5 text-stone-900/55">
                Thank you for being part of our special day.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
