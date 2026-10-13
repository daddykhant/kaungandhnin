import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";
import SectionHeading from "./SectionHeading";

export default function Countdown() {
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
    <section className="px-5 py-12 sm:py-24">
      <SectionHeading label="Until our forever" title="The Countdown">
        We cannot wait to celebrate this unforgettable day with you.
      </SectionHeading>

      <div className="mx-auto grid max-w-2xl grid-cols-4 gap-3">
        {Object.entries(time).map(([label, value]) => (
          <div
            key={label}
            className="countdown-card rounded-4xl border border-gold/30 bg-black/15 px-2 py-5 text-center sm:py-7"
          >
            <p className="font-serif text-3xl text-gold sm:text-5xl">
              {String(value).padStart(2, "0")}
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-widest text-cream/60 sm:text-xs">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
