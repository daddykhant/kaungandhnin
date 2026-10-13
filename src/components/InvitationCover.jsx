import { Heart, Sparkles } from "lucide-react";
import { wedding } from "../data/wedding";

export default function InvitationCover({ onOpen, closing }) {
  return (
    <div className={`invitation-cover fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#21040c] px-5 py-10${closing ? " is-closing" : ""}`}>
      <div className="absolute inset-4 border border-gold/30 sm:inset-8" />
      <div className="absolute inset-8 border border-gold/10 sm:inset-12" />

      <div className="cover-content relative my-auto max-w-lg text-center">
        <Sparkles className="mx-auto mb-6 text-gold" size={25} />

        <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
          Wedding invitation
        </p>

        <h1 className="mt-6 font-script text-5xl text-cream sm:mt-8 sm:text-7xl">
          {wedding.groom}
          <span className="block text-gold">&</span>
          {wedding.bride}
        </h1>

        <p className="mt-6 font-serif text-xl italic text-cream/70">
          Two hearts, one beautiful beginning.
        </p>

        <p className="mt-6 text-xs tracking-[0.3em] text-gold">
          {wedding.dateLabel}
        </p>

        <button
          onClick={onOpen}
          className="mt-10 border border-gold px-8 py-2 text-xs uppercase tracking-[0.2em] rounded-2xl transition hover:bg-gold hover:text-velvet"
        >
          Open invitation <Heart className="ml-2 inline" size={14} />
        </button>
      </div>
    </div>
  );
}
