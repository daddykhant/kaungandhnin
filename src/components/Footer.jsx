import { ArrowUp } from "lucide-react";
import { wedding } from "../data/wedding";
import FloralAccents from "./FloralAccents";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-sage/20 bg-stone-100 px-5 py-8 text-center">
      <FloralAccents variant="footer" />
      <div className="relative z-10">
        <p className="font-script text-2xl">
          {wedding.groom} & {wedding.bride}
        </p>
        <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-sage">
          Forever starts here · {wedding.dateLabel}
        </p>
        <a
          href="#home"
          aria-label="Back to top"
          className="absolute bottom-6 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-sage/30 text-sage transition hover:bg-sage hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:right-10"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
