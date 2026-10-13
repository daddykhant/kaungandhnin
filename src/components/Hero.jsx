import { wedding } from "../data/wedding";
import { motion, useReducedMotion } from "motion/react";
import leftflower from "../assets/flower3.png";
import rightflower from "../assets/flower4.png";
import bottomflower from "../assets/flower2.png";
export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section
      id="home"
      className="relative flex  items-center justify-center overflow-hidden bg-cover bg-center px-5 py-24 text-center min-[641px]:max-[768px]:min-h-[88svh] min-[641px]:max-[768px]:px-10"
      // style={{ backgroundImage: `url("${wedding.cover}")` }}
    >
      {/* Soft stone and sage overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-stone-50 via-emerald-50 to-stone-100" />

      {/* Decorative border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-4  sm:inset-8"
      />

      {/* Hero content */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduced ? 0 : 1,
          delay: reduced ? 0 : 0.18,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 max-w-4xl"
      >
        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-sage"
        >
          We’re getting married
        </motion.p>

        {/* Couple's names */}
        <div className="hero-names mt-8 sm:mt-10">
          <h1 className="font-script text-5xl text-stone-900 sm:text-7xl lg:inline lg:text-[6rem] min-[641px]:max-[768px]:text-[clamp(3.5rem,9vw,4.5rem)]">
            {wedding.groom}
          </h1>

          <motion.span
            animate={reduced ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-3 inline-block font-script text-4xl text-sage sm:mx-6 sm:text-6xl lg:text-[5rem]"
          >
            &
          </motion.span>

          <h1 className="font-script text-5xl text-stone-900 sm:text-7xl lg:ml-3 lg:inline lg:text-[6rem] min-[641px]:max-[768px]:text-[clamp(3.5rem,9vw,4.5rem)]">
            {wedding.bride}
          </h1>
        </div>

        {/* Description */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduced ? 0 : 0.45, duration: 0.75 }}
          className="mt-8 font-serif text-2xl italic text-stone-900 sm:text-3xl"
        >
          A celebration of love and togetherness
        </motion.p>

        {/* Wedding date */}
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 0.65, duration: 1 }}
          className="mt-7 text-sm tracking-[0.25em] text-sage"
        >
          {wedding.dateLabel}
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: reduced ? 0 : 0.8,
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className="mx-auto mt-8 flex items-center justify-center gap-3"
        >
          <img src={bottomflower} alt="Decorative flower" className=" w-48" />
        </motion.div>
      </motion.div>
    </section>
  );
}
