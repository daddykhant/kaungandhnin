import coupleBg from "../assets/bg_couple.JPG";

export default function Invitation() {
  return (
    <section
      id="invitation"
      className="relative isolate overflow-hidden bg-[#28050f] px-5 py-24 text-cream sm:py-32"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${coupleBg}")` }}
        aria-hidden="true"
      />

      {/* Velvet overlay for text readability */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#28050f]/85 via-[#4b0b1c]/75 to-[#21040c]/85"
        aria-hidden="true"
      />

      {/* Groom */}
      <div className="invitation-content invitation-groom mx-auto mb-12 max-w-4xl">
        <h2 className="mb-5 border-b border-gold/60 pb-3 font-serif text-4xl uppercase anim-slide-down">
          The Groom
        </h2>

        <p className="leading-8 anim-slide-up">
          မန္တလေးတိုင်းဒေသကြီး ၊ ရမည်းသင်းမြို့ ၊ ဗ.မ.က ( ရွှေစည်းခုံ ) ရပ်ကွက်
          ၊ မေတ္တာလမ်းနေ Hj ဦးခင်မောင်ထွေး + Hj ဒေါ်စောဝတ်ရည် တို့၏
          တစ်ဦးတည်းသောသား
        </p>

        <h2 className="py-5 text-2xl">حبيب الرحمن@ မောင်ကောင်းမြတ်သူ</h2>

        <span className="font-serif italic">B.E(Mech)</span>
      </div>

      {/* Bride */}
      <div className="invitation-content invitation-bride mx-auto max-w-4xl ">
        <h2 className="mb-5 border-b border-gold/60 pb-3 font-serif text-4xl uppercase anim-slide-down">
          The Bride
        </h2>

        <p className="leading-8 anim-slide-up">
          ပဲခူးတိုင်းဒေသကြီး၊ ပြည်မြို့ ၊ စစ်ကဲလမ်း ၊ ဆင်မဂျီးခြံဝန်းနေ Hj
          ဘေလားလ် + Hj ရစူလ်ဘီ တို့၏ သမီးလတ်
        </p>

        <h2 className="py-5 text-2xl">عريفة پاتيل@ မနှင်းဝတ်ရည်ထွန်း</h2>

        <span className="font-serif italic">B.A(English)</span>
      </div>
    </section>
  );
}
