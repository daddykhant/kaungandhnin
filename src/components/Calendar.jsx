import { Heart } from "lucide-react";
import { wedding } from "../data/wedding";
import SectionHeading from "./SectionHeading";

export default function Calendar() {
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
    <section className="bg-[#28050f] px-4 py-16 sm:px-5 sm:py-24">
      <SectionHeading label="Mark your calendar" title={monthTitle}>
        Please save this date and celebrate with us.
      </SectionHeading>

      <div className="calendar-card mx-auto max-w-md rounded-2xl border border-gold/25 p-3 sm:p-8">
        <div className="grid grid-cols-7 gap-1 text-center sm:gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="py-2 text-[9px] uppercase text-gold sm:text-[10px]">{day}</div>
          ))}
          {days.map((day, index) => (
            <div key={index} className="flex aspect-square items-center justify-center">
              {day && (
                <span
                  aria-current={day === weddingDay ? "date" : undefined}
                  className={`calendar-day flex h-8 w-8 items-center justify-center rounded-full text-xs sm:h-10 sm:w-10 ${day === weddingDay ? "calendar-day--wedding bg-gold font-bold text-velvet shadow-lg shadow-gold/20" : "text-cream/75"}`}
                >
                  {day}
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-gold sm:mt-6">
          <Heart className="mr-2 inline" size={13} fill="currentColor" />
          {weekday} · {monthTitle.split(" ")[0]} {weddingDay}
        </p>
      </div>
    </section>
  );
}
