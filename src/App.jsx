import { useEffect, useRef, useState } from "react";

import InvitationCover from "./components/InvitationCover";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Couple from "./components/Couple";
import Calendar from "./components/Calendar";
import Countdown from "./components/Countdown";
import Gifts from "./components/Gifts";
import Footer from "./components/Footer";

export default function App() {
  const [coverOpen, setCoverOpen] = useState(false);
  const [coverClosing, setCoverClosing] = useState(false);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const sections = sectionsRef.current?.querySelectorAll(".reveal");
    if (!sections?.length) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function openInvitation() {
    setCoverClosing(true);
    window.setTimeout(() => setCoverOpen(true), 400);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-velvet text-cream" ref={sectionsRef}>
      {!coverOpen && <InvitationCover closing={coverClosing} onOpen={openInvitation} />}

      {[Hero, Invitation, Couple, Countdown, Calendar, Gifts, Footer].map((Section, index) => (
        <div className="reveal" key={Section.name || index}>
          <Section />
        </div>
      ))}

    </main>
  );
}
