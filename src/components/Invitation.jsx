import coupleBg from "../assets/bg_couple.webp";
import { motion, useReducedMotion } from "motion/react";
import FloralAccents from "./FloralAccents";

export default function Invitation() {
  const reduced = useReducedMotion();
  return (
    <section
      id="invitation"
      className="relative isolate overflow-hidden bg-stone-50 px-5 py-12 text-stone-900  min-[641px]:max-[768px]:px-10 min-[641px]:max-[768px]:py-[5.5rem]"
    >
      <FloralAccents variant="invitation" />
      {/* Background photo */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${coupleBg}")`,
          backgroundPosition: "50% 25%",
        }}
        aria-hidden="true"
      />

      {/* Light sage overlay for text readability */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-50/85 via-emerald-50/75 to-stone-100/85"
        aria-hidden="true"
      />

      {/* Groom */}
      <motion.div
        initial={reduced ? false : { opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mb-12 max-w-4xl"
      >
        <h2 className="mb-5 border-b border-sage/60 pb-3 font-serif text-4xl uppercase">
          The Groom
        </h2>

        <p className="leading-8">
          မန္တလေးတိုင်းဒေသကြီး ၊ ရမည်းသင်းမြို့ ၊ ဗ.မ.က ( ရွှေစည်းခုံ ) ရပ်ကွက်
          ၊ မေတ္တာလမ်းနေ Hj ဦးခင်မောင်ထွေး + Hj ဒေါ်စောဝတ်ရည် တို့၏
          တစ်ဦးတည်းသောသား
        </p>

        <h2 className="py-5 text-2xl">حبيب الرحمن@ မောင်ကောင်းမြတ်သူ</h2>

        <span className="font-serif italic">B.E(Mech)</span>
      </motion.div>

      {/* Bride */}
      <motion.div
        initial={reduced ? false : { opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: reduced ? 0 : 0.8,
          delay: reduced ? 0 : 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <h2 className="mb-5 border-b border-sage/60 pb-3 font-serif text-4xl uppercase">
          The Bride
        </h2>

        <p className="leading-8">
          ပဲခူးတိုင်းဒေသကြီး၊ ပြည်မြို့ ၊ စစ်ကဲလမ်း ၊ ဆင်မဂျီးခြံဝန်းနေ Hj
          ဘေလားလ် + Hj ရစူလ်ဘီ တို့၏ သမီးလတ်
        </p>

        <h2 className="py-5 text-2xl">عريفة پاتيل@ မနှင်းဝတ်ရည်ထွန်း</h2>

        <span className="font-serif italic">B.A(English)</span>
      </motion.div>
    </section>
  );
}
