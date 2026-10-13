import { wedding } from "../data/wedding";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-5 py-24 text-center"
      //   style={{ backgroundImage: `url("${wedding.cover}")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#21040c]/75 via-[#4b0b1c]/65 to-velvet" />
      <div className="absolute inset-4 border border-gold/30 sm:inset-8" />

      <div className="hero-content relative max-w-4xl">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          We’re getting married
        </p>

        <h1 className="mt-8 font-script text-5xl text-cream sm:text-7xl md:text-[10rem] ">
          {wedding.groom}
          <span className="mx-12 text-gold">&</span>
          <span className="block sm:inline">{wedding.bride}</span>
        </h1>

        <p className="mt-8 font-serif text-2xl italic sm:text-3xl">
          A celebration of love and togetherness
        </p>

        <p className="mt-7 text-sm tracking-[0.25em] text-gold">
          {wedding.dateLabel}
        </p>
      </div>
    </section>
  );
}
