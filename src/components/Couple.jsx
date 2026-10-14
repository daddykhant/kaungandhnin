import bride from "../assets/bride.webp";
import groom from "../assets/groom.webp";
import { wedding } from "../data/wedding";
import SectionHeading from "./SectionHeading";
import WeddingDetails from "./WeddingDetails";
import { motion, useReducedMotion } from "motion/react";
import FloralAccents from "./FloralAccents";

const portraits = [
  { name: wedding.groom, role: "The groom", image: groom, rotation: -6 },
  { name: wedding.bride, role: "The bride", image: bride, rotation: 6 },
];

export default function Couple() {
  const reduced = useReducedMotion();

  return (
    <section
      id="couple"
      className="relative isolate overflow-hidden bg-linear-to-br from-burgundy-500 via-burgundy-700 to-burgundy-900 px-5 py-8 sm:px-8 min-[641px]:max-[768px]:px-10"
    >
      <FloralAccents variant="couple" />

      <div className="relative z-10">
        <SectionHeading label="Meet the couple">
          We can’t wait to celebrate our wedding day with you.
        </SectionHeading>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid grid-cols-2 items-center gap-4 sm:gap-6">
            {portraits.map(({ name, role, image, rotation }, index) => (
              <motion.figure
                key={name}
                initial={
                  reduced ? false : { opacity: 0, y: 24, rotate: rotation * 2 }
                }
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: reduced ? 0 : 0.7,
                  delay: reduced ? 0 : index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduced ? undefined : { y: -6, rotate: 0, scale: 1.02 }
                }
                className=" border border-sage/15 bg-white/85 p-2 shadow-xl shadow-burgundy-950/10 sm:p-3"
              >
                <div className="overflow-hidden  bg-burgundy-50">
                  <motion.img
                    src={image}
                    alt={`Portrait of ${name}, ${role.toLowerCase()}`}
                    loading="lazy"
                    whileHover={reduced ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </motion.figure>
            ))}
          </div>

          <div className="rounded-3xl border border-sage/15 bg-white/75 p-5 shadow-lg shadow-burgundy-950/5 sm:p-7">
            <p className="mb-5 text-center text-xs uppercase tracking-[0.22em] text-sage lg:text-left">
              Wedding day details
            </p>
            <WeddingDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
