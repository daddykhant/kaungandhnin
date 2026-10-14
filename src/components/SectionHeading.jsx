import { motion, useReducedMotion } from "motion/react";

export default function SectionHeading({ label, title, children }) {
  const reduced = useReducedMotion();
  const item = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
      }}
      className="mx-auto mb-2 max-w-2xl text-center"
    >
      <motion.p
        variants={item}
        transition={{ duration: 0.65 }}
        className="mb-2 text-xs uppercase tracking-[0.35em] text-stone-100"
      >
        {label}
      </motion.p>

      <motion.h2
        variants={item}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-balance font-serif text-3xl text-stone-100 sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>

      {children && (
        <motion.p
          variants={item}
          transition={{ duration: 0.65 }}
          className="mx-auto mt-3 max-w-xl text-sm leading-7 text-stone-100/65"
        >
          {children}
        </motion.p>
      )}

      {/* <div className="mt-6 flex items-center justify-center gap-3 text-sage">
        <span className="h-px w-12 bg-sage/40" />
        <Heart size={14} fill="currentColor" />
        <span className="h-px w-12 bg-sage/40" />
      </div> */}
    </motion.div>
  );
}
