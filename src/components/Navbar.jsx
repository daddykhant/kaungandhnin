import { useState } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { wedding } from "../data/wedding";

const links = [
  ["Invitation", "#invitation"],
  ["Our Couple", "#couple"],
  ["Wedding", "#wedding"],
  ["Gallery", "#gallery"],
  ["RSVP", "#rsvp"],
];

export default function Navbar({ musicPlaying, onToggleMusic }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#home" className="font-script text-3xl text-sage">
          {wedding.groom} & {wedding.bride}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[10px] uppercase tracking-[0.15em] text-stone-900/75 transition hover:text-sage"
            >
              {label}
            </a>
          ))}

          <button
            onClick={onToggleMusic}
            aria-label="Toggle music"
            className="border border-sage/40 p-2.5 text-sage hover:bg-sage hover:text-emerald-950"
          >
            {musicPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>

        <button
          className="text-sage lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-sage/20 bg-stone-50 px-6 py-6 lg:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em]"
            >
              {label}
            </a>
          ))}

          <button
            onClick={onToggleMusic}
            className="flex items-center gap-2 text-left text-xs uppercase tracking-widest text-sage"
          >
            {musicPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            {musicPlaying ? "Pause music" : "Play music"}
          </button>
        </div>
      )}
    </nav>
  );
}
