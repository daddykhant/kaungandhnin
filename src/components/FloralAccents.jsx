import flower1 from "../assets/flower1.png";
import flower2 from "../assets/flower2.png";
import flower3 from "../assets/flower3.png";
import flower4 from "../assets/flower4.png";

const arrangements = {
  invitation: [
    [flower4, "-left-24 top-1/4 w-60 -rotate-12 opacity-20 sm:w-80"],
    [flower3, "-bottom-12 -right-24 w-72 rotate-12 opacity-25 sm:w-96"],
  ],
  countdown: [
    // [flower4, "-right-16 -top-12 w-60 rotate-12 opacity-20 sm:w-80"],
    [flower3, "top-12 -right-24 w-48 -rotate-75 opacity-70 sm:w-64"],
  ],
  calendar: [
    [flower4, "-left-16 top-1/4 w-56 rotate-30 opacity-40 sm:w-72"],
    [flower4, "bottom-10 -right-20 w-64 rotate-12 opacity-45 sm:w-80"],
  ],
  gallery: [
    [flower4, "-right-12 -top-12 w-52 rotate-45 opacity-20 sm:w-72"],
    [flower3, "-bottom-12 -left-20 w-72 rotate-24 opacity-20 sm:w-96"],
  ],
  gifts: [
    [flower4, "-left-20 top-16 w-72 rotate-180 opacity-80 sm:w-96"],
    // [flower3, "-bottom-16 -right-24 w-72 -rotate-12 opacity-25 sm:w-96"],
  ],
  rsvp: [
    [flower4, "-left-20 -top-16 w-72 -rotate-12 opacity-80 sm:w-96"],
    [flower3, "-bottom-12 -right-16 w-56 rotate-45 opacity-80 sm:w-72"],
  ],
  footer: [[flower4, "-bottom-10 -left-16 w-48 -rotate-12 opacity-80 sm:w-64"]],
  couple: [
    [flower3, "-left-45 -bottom-16 w-64 rotate-45 opacity-80 sm:w-80 md:w-96"],
    [
      flower4,
      "bottom-12 -right-36 w-72 rotate-12 opacity-80 sm:w-96 md:w-[30rem]",
    ],
  ],
};

export default function FloralAccents({ variant = "invitation" }) {
  const flowers = arrangements[variant] ?? arrangements.invitation;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {flowers.map(([src, className]) => (
        <img key={src} src={src} alt="" className={`absolute ${className}`} />
      ))}
    </div>
  );
}
