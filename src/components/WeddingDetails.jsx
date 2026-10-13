import { CalendarDays, Clock, MapPin } from "lucide-react";
import { wedding } from "../data/wedding";

export default function WeddingDetails() {
  const details = [
    { icon: CalendarDays, title: "Wedding date", value: wedding.dateLabel },
    { icon: Clock, title: "Wedding time", value: wedding.time },
    { icon: MapPin, title: "Wedding venue", value: wedding.venue },
  ];

  return (
    <section id="wedding" className="px-3 sm:px-5 sm:py-5">
      <div className="mx-auto max-w-4xl">
        {details.map(({ icon: Icon, title, value }) => (
          <div
            key={title}
            className="detail-card mb-3 rounded-r-xl border-l-2 border-gold/25 px-5 py-4 text-center transition duration-300 hover:border-gold/70 hover:bg-white/[0.03] sm:px-8"
          >
            <Icon className="mx-auto mb-2 text-gold" size={26} />
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
              {title}
            </p>
            <p className="mt-2 break-words font-serif text-xl sm:text-2xl">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-7 text-center">
        <p className="mb-5 text-sm text-cream/60">{wedding.address}</p>
        <a
          href={wedding.map}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-widest text-velvet transition hover:-translate-y-0.5 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <MapPin size={16} /> လမ်းညွှန်
        </a>
      </div>
    </section>
  );
}
