// import inviteCard from "../assets/inviteCard.png";
import bride from "../assets/bride.webp";
import groom from "../assets/groom.webp";
import SectionHeading from "./SectionHeading";
import WeddingDetails from "./WeddingDetails";

export default function Couple() {
  return (
    <section id="couple" className="bg-[#28050f] px-5 py-12 sm:py-24">
      <SectionHeading label="The happy couple" title="Wedding Events">
        Join us as we celebrate the beginning of our life together.
      </SectionHeading>

      <div className="mx-auto grid grid-cols-1  max-w-4xl gap-12 sm:grid-cols-2 sm:gap-16">
        <div className="flex items-center justify-center px-3 sm:px-0">
          <div className="portrait-card -rotate-6 sm:-rotate-12 m-auto w-[min(42vw,14rem)] h-fit overflow-hidden rounded-3xl object-cover shadow-xl shadow-black/25">
            <img src={groom} alt="Portrait of the groom" className="w-full h-auto" />
          </div>
          <div className="portrait-card rotate-6 sm:rotate-12 m-auto w-[min(42vw,14rem)] h-fit overflow-hidden rounded-3xl object-cover shadow-xl shadow-black/25">
            <img src={bride} alt="Portrait of the bride" className="w-full h-auto" />
          </div>
        </div>

        <WeddingDetails />
      </div>
    </section>
  );
}
