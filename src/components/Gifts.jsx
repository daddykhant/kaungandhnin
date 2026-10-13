import { useEffect, useState } from "react";
import { Gift, Heart, X } from "lucide-react";
import kpayQR from "../assets/kpayQR.JPG";

export default function Gifts() {
  const [showPayment, setShowPayment] = useState(false);

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
      className="gift-section relative isolate overflow-hidden bg-linear-to-br from-[#28050f] via-[#4b0b1c] to-[#21040c] px-5 py-16 text-center sm:px-8 sm:py-24"
    >
      <div className="gift-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <Gift className="mx-auto mb-6 text-gold" size={30} />

      <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.35em]">
        A thoughtful gesture
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl sm:text-5xl">
        Gifts for the Bride and Groom
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-cream/70">
        Gifts for us are not necessary, but if you wish to give, we would be
        grateful for your blessings and support. Your presence at our wedding is
        the greatest gift of all.
      </p>
      <button
        type="button"
        onClick={() => setShowPayment(true)}
        className="gift-button mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-velvet shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:translate-y-0 sm:px-8"
      >
        <Gift size={16} /> မင်္ဂလာလက်ဖွဲ့
      </button>

      {showPayment && (
        <div
          key="gift-dialog"
          className="gift-backdrop fixed inset-0 z-60 flex items-center justify-center overflow-y-auto bg-[#120208]/80 p-4 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowPayment(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gift-dialog-title"
            className="gift-dialog relative my-auto w-full max-w-md overflow-hidden rounded-3xl border border-gold/35 bg-linear-to-br from-[#4b0b1c] to-[#21040c] p-5 text-center shadow-2xl shadow-black/50 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setShowPayment(false)}
              aria-label="Close gift details"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-cream/70 transition hover:bg-white/10 hover:text-cream focus-visible:outline-2 focus-visible:outline-gold sm:right-4 sm:top-4"
            >
              <X size={20} />
            </button>
            <Heart
              className="mx-auto mb-3 text-gold"
              size={22}
              fill="currentColor"
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
              With love and gratitude
            </p>
            <h3
              id="gift-dialog-title"
              className="mt-2 font-serif text-3xl text-cream sm:text-4xl"
            >
              KPay
            </h3>
            <p className="mt-1 text-sm text-cream/65">
              Scan the QR code to send your gift
            </p>
            <div className="mx-auto mt-5 w-full max-w-[min(72vw,280px)] rounded-2xl bg-white p-2 shadow-xl shadow-black/25 sm:mt-6 sm:p-3">
              <img
                src={kpayQR}
                alt="KPay payment QR code"
                className="block aspect-square w-full rounded-xl object-contain"
              />
            </div>
            <div className="mt-5 rounded-2xl border border-gold/20 bg-black/15 px-4 py-3 sm:mt-6 sm:px-5 sm:py-4">
              <p className="font-serif text-xl text-cream sm:text-2xl">
                Kaung Myat Thu
              </p>
              <a
                href="tel:09965488904"
                className="mt-1 inline-block min-h-10 py-2 text-sm tracking-wider text-gold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-gold"
              >
                09965488904
              </a>
            </div>
            <p className="mt-4 text-xs text-cream/55">
              Thank you for being part of our special day.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
