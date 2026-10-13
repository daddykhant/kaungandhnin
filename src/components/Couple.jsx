import bride from "../assets/bride.webp";
import groom from "../assets/groom.webp";
import SectionHeading from "./SectionHeading";
import WeddingDetails from "./WeddingDetails";

export default function Couple() {
  return (
    <section
      id="couple"
      className="couple-section bg-linear-to-br from-[#28050f] via-[#4b0b1c] to-[#21040c] px-5 py-12 sm:py-24"
    >
      <div className="couple-heading">
        <SectionHeading label="The happy couple" title="Wedding Events">
          Join us as we celebrate the beginning of our life together.
        </SectionHeading>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
        {/* Couple portraits */}
        <div className="couple-portraits flex items-center justify-center px-3 sm:px-0">
          {/* Groom */}
          <div className="portrait-card portrait-groom portrait-float-groom -rotate-6 m-auto h-fit w-[min(42vw,14rem)] overflow-hidden rounded-3xl shadow-xl shadow-black/25 sm:-rotate-12">
            <img
              src={groom}
              alt="Portrait of the groom"
              loading="lazy"
              className="h-auto w-full"
            />
          </div>

          {/* Bride */}
          <div className="portrait-card portrait-bride portrait-float-bride rotate-6 m-auto h-fit w-[min(42vw,14rem)] overflow-hidden rounded-3xl shadow-xl shadow-black/25 sm:rotate-12">
            <img
              src={bride}
              alt="Portrait of the bride"
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Wedding information */}
        <div className="couple-details">
          <WeddingDetails />
        </div>
      </div>
    </section>
  );
}
