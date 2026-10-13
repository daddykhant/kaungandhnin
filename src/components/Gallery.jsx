import { Camera, Heart } from "lucide-react";
import { gallery } from "../data/wedding";
import SectionHeading from "./SectionHeading";
import FloralAccents from "./FloralAccents";

export default function Gallery() {
  return (
    <section id="gallery" className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 min-[641px]:max-[768px]:px-10 min-[641px]:max-[768px]:py-[5.5rem]">
      <FloralAccents variant="gallery" />
      <div className="relative z-10">
      <SectionHeading label="Moments of love" title="Our little gallery">
        A glimpse of the beautiful memories we hold close.
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {gallery.map((photo, index) => (
          <div
            key={photo}
            className={`group relative overflow-hidden ${
              index === 1 || index === 4 ? "lg:translate-y-8" : ""
            }`}
          >
            <img
              src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=800&q=85`}
              alt={`Wedding gallery ${index + 1}`}
              loading="lazy"
              className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-64 lg:h-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent opacity-70 transition group-hover:opacity-100" />

            <div className="absolute bottom-4 left-4 text-sage">
              {index === 0 ? <Camera size={18} /> : <Heart size={18} />}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
