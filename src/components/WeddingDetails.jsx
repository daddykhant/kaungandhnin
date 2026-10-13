import { CalendarDays, Clock, MapPin } from "lucide-react";
import { wedding } from "../data/wedding";
import { motion, useReducedMotion } from "motion/react";

export default function WeddingDetails() {
  const reduced = useReducedMotion();
  const details = [
    { icon: CalendarDays, title: "Wedding date", value: wedding.dateLabel },
    { icon: Clock, title: "Wedding time", value: wedding.time },
    { icon: MapPin, title: "Wedding venue", value: wedding.venue },
  ];

  return (
    <section id="wedding" className="w-full">
      <div className="grid gap-3">
        {details.map(({ icon: Icon, title, value }, index) => (
          <motion.div
            key={title}
            initial={reduced ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : index * 0.1 }}
            whileHover={reduced ? undefined : { x: 4, borderColor: "rgba(47,107,79,.35)", backgroundColor: "rgba(47,107,79,.04)" }}
            className="flex items-center gap-4 rounded-2xl border border-sage/15 bg-white/70 p-4 text-left sm:p-5"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-sage">
              <Icon size={21} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-900/55 sm:text-[10px]">
                {title}
              </span>
              <span className="mt-1 block break-words font-serif text-lg leading-tight text-stone-900 sm:text-xl">
                {value}
              </span>
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-center text-xs text-stone-900/65 sm:text-left">{wedding.address}</p>
        <motion.a
          href={wedding.map}
          target="_blank"
          rel="noreferrer"
          whileHover={reduced ? undefined : { y: -2, scale: 1.02 }}
          whileTap={reduced ? undefined : { scale: 0.98 }}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-md shadow-emerald-950/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage sm:text-xs"
        >
          <MapPin size={16} /> လမ်းညွှန်
        </motion.a>
      </div>
    </section>
  );
}
