import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";
import SectionHeading from "./SectionHeading";
import { motion, useReducedMotion } from "motion/react";
import FloralAccents from "./FloralAccents";

export default function Countdown() {
  const reduced = useReducedMotion();
  const [time, setTime] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  useEffect(() => {
    function updateCountdown() {
      const remaining = Math.max(
        0,
        new Date(wedding.date).getTime() - Date.now(),
      );

      setTime({
        Days: Math.floor(remaining / 86400000),
        Hours: Math.floor((remaining / 3600000) % 24),
        Minutes: Math.floor((remaining / 60000) % 60),
        Seconds: Math.floor((remaining / 1000) % 60),
      });
    }

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden px-5 py-12 sm:py-24">
      <FloralAccents variant="countdown" />
      <div className="relative z-10">
        <SectionHeading title="Until our forever">
          We will become husband and wife in.
        </SectionHeading>

        <div className="mx-auto grid max-w-2xl grid-cols-4 gap-3">
          {Object.entries(time).map(([label, value]) => (
            <motion.div
              key={label}
              initial={reduced ? false : { opacity: 0, y: 28, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduced ? 0 : 0.6,
                delay: reduced ? 0 : Object.keys(time).indexOf(label) * 0.1,
                type: "spring",
                stiffness: 130,
                damping: 18,
              }}
              whileHover={
                reduced
                  ? undefined
                  : {
                      y: -7,
                      borderColor: "rgba(47,107,79,.45)",
                      boxShadow: "0 16px 36px rgba(0,0,0,.12)",
                    }
              }
              className="rounded-4xl border border-sage/30 bg-black/15 px-2 py-5 text-center sm:py-7"
            >
              <p className="font-serif text-3xl text-sage sm:text-5xl">
                <motion.span
                  key={value}
                  initial={reduced ? false : { y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: reduced ? 0 : 0.25 }}
                >
                  {String(value).padStart(2, "0")}
                </motion.span>
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-widest text-stone-900/60 sm:text-xs">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
