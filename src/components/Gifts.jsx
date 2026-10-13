import { useEffect, useState } from "react";
import { Gift, Heart, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import kpayQR from "../assets/kpayQR.JPG";
import FloralAccents from "./FloralAccents";

export default function Gifts() {
  const [showPayment, setShowPayment] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!showPayment) return undefined;
    function closeOnEscape(event) {
      if (event.key === "Escape") setShowPayment(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showPayment]);

  return (
    <section
      id="gifts"
      className="gift-section relative isolate overflow-hidden bg-linear-to-br from-stone-50 via-emerald-50 to-stone-100 px-5 py-16 text-center sm:px-8 sm:py-24"
    >
      <FloralAccents variant="gifts" />
      <div className="relative z-10">
        <motion.div
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.55, 1, 0.55],
                  y: [-8, 18, -8],
                  scale: [0.9, 1.12, 0.9],
                }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sage/10 blur-3xl"
        />
        <Gift className="mx-auto mb-6 text-sage" size={30} />

        <p className="text-[10px] uppercase tracking-[0.3em] text-sage sm:text-xs sm:tracking-[0.35em]">
          A thoughtful gesture
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl sm:text-5xl">
          Gifts for the Bride and Groom
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-900/70">
          Gifts for us are not necessary, but if you wish to give, we would be
          grateful for your blessings and support. Your presence at our wedding
          is the greatest gift of all.
        </p>
        <button
          type="button"
          onClick={() => setShowPayment(true)}
          className="gift-button mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-950 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage active:translate-y-0 sm:px-8"
        >
          <Gift size={16} /> မင်္ဂလာလက်ဖွဲ့
        </button>

        {showPayment && (
          <motion.div
            key="gift-dialog"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.22 }}
            className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto bg-stone-950/50 p-4 backdrop-blur-md sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setShowPayment(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="gift-dialog-title"
              initial={reduced ? false : { opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: reduced ? 0 : 0.42,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="relative my-auto w-full max-w-sm overflow-hidden rounded-3xl border border-sage/35 bg-linear-to-br from-emerald-50 to-stone-100 p-5 text-center shadow-2xl shadow-black/20 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setShowPayment(false)}
                aria-label="Close gift details"
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-stone-900/70 transition hover:bg-white/10 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-sage sm:right-4 sm:top-4"
              >
                <X size={20} />
              </button>

              <h3
                id="gift-dialog-title"
                className="mt-2 font-serif text-3xl text-stone-900 sm:text-4xl"
              >
                KBZPay
              </h3>
              <p className="mt-1 text-sm text-stone-900/65">
                Scan the QR code to send your gift
              </p>
              <div className="mx-auto mt-5 w-full max-w-[min(72vw,280px)] rounded-2xl bg-white p-2 shadow-xl shadow-black/25 sm:mt-6 sm:p-3">
                <img
                  src={kpayQR}
                  alt="KPay payment QR code"
                  className="block aspect-square w-full rounded-xl object-contain"
                />
              </div>
              <div className="mt-5 rounded-2xl border border-sage/20 bg-black/15 px-4 py-2  sm:px-5 ">
                <p className="font-serif text-xl text-stone-900 sm:text-2xl">
                  Kaung Myat Thu
                </p>
                <a
                  href="tel:09965488904"
                  className="mt-1 inline-block min-h-10  text-sm tracking-wider text-sage underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-sage"
                >
                  09965488904
                </a>
              </div>
              <p className="mt-4 text-xs text-stone-900/55">
                Thank you for being part of our special day.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
