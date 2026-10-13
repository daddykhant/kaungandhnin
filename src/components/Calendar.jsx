import { Heart } from "lucide-react";
import { wedding } from "../data/wedding";
import SectionHeading from "./SectionHeading";
import { motion, useReducedMotion } from "motion/react";
import FloralAccents from "./FloralAccents";

export default function Calendar() {
  const reduced = useReducedMotion();
  const [year, monthNumber, weddingDay] = wedding.date.slice(0, 10).split("-").map(Number);
  const month = monthNumber - 1;
  const monthTitle = new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const weekday = new Date(year, month, weddingDay).toLocaleDateString("en-US", {
    weekday: "long",
  });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  return (
    <section className="relative isolate overflow-hidden bg-stone-50 px-4 py-16 sm:px-5 sm:py-24">
      <FloralAccents variant="calendar" />
      <div className="relative z-10">
      <SectionHeading label="Mark your calendar" title={monthTitle}>
        Please save this date and celebrate with us.
      </SectionHeading>

      <div className="mx-auto max-w-md rounded-2xl border border-sage/25 p-3 sm:p-8 min-[641px]:max-[768px]:p-6">
        <div className="grid grid-cols-7 gap-1 text-center sm:gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="py-2 text-[9px] uppercase text-sage sm:text-[10px]">{day}</div>
          ))}
          {days.map((day, index) => (
            <div key={index} className="flex aspect-square items-center justify-center">
              {day && (
                <motion.span
                  aria-current={day === weddingDay ? "date" : undefined}
                  animate={day === weddingDay && !reduced ? { boxShadow: ["0 0 0 0 rgba(47,107,79,.18)", "0 0 0 7px rgba(47,107,79,0)", "0 0 0 0 rgba(47,107,79,.18)"] } : undefined}
                  whileHover={day !== weddingDay && !reduced ? { scale: 1.16, color: "#2f6b4f" } : undefined}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs sm:h-10 sm:w-10 ${day === weddingDay ? "bg-sage font-bold text-emerald-950 shadow-lg shadow-sage/20" : "text-stone-900/75"}`}
                >
                  {day}
                </motion.span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-sage sm:mt-6">
          <Heart className="mr-2 inline" size={13} fill="currentColor" />
          {weekday} · {monthTitle.split(" ")[0]} {weddingDay}
        </p>
      </div>
      </div>
    </section>
  );
}
