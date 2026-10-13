import { wedding } from "../data/wedding";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-5 py-24 text-center"
      // style={{ backgroundImage: `url("${wedding.cover}")` }}
    >
      {/* Velvet gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#21040c]/75 via-[#4b0b1c]/65 to-velvet" />

      {/* Decorative border */}
      <div className="pointer-events-none absolute inset-4 border border-gold/30 sm:inset-8 anim-fade" />

      {/* Hero content */}
      <div className="hero-content relative z-10 max-w-4xl">
        {/* Intro text */}
        <p className="text-xs uppercase tracking-[0.4em] text-gold anim-slide-down">
          We’re getting married
        </p>

        {/* Couple's names */}
        <div className="mt-8 sm:mt-10 ">
          <h1 className="font-script text-5xl text-cream sm:text-7xl md:inline md:text-[6rem] ">
            {wedding.groom}
          </h1>

          <span className="mx-3 inline-block font-script text-4xl text-gold sm:mx-6 sm:text-6xl md:text-[5rem] anim-float">
            &
          </span>

          <h1 className="font-script text-5xl text-cream sm:text-7xl md:ml-3 md:inline md:text-[6rem]">
            {wedding.bride}
          </h1>
        </div>

        {/* Description */}
        <p className="mt-8 font-serif text-2xl italic text-cream anim-slide-up delay-200 sm:text-3xl">
          A celebration of love and togetherness
        </p>

        {/* Wedding date */}
        <p className="mt-7 text-sm tracking-[0.25em] text-gold anim-fade delay-400">
          {wedding.dateLabel}
        </p>

        {/* Decorative divider */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3 anim-pop delay-500">
          <span className="h-px w-12 bg-gold/60" />
          <span className="text-gold">✦</span>
          <span className="h-px w-12 bg-gold/60" />
        </div>
      </div>
    </section>
  );
}
