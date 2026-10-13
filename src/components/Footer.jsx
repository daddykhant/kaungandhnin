import { ArrowUp } from "lucide-react";
import { wedding } from "../data/wedding";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-[#19030a] px-5 py-8 text-center">
      <p className="font-script text-5xl">{wedding.groom} & {wedding.bride}</p>
      <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-gold">
        Forever starts here · {wedding.dateLabel}
      </p>
      <a href="#home" aria-label="Back to top" className="absolute bottom-6 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-velvet focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-10">
        <ArrowUp size={16} />
      </a>
    </footer>
  );
}
