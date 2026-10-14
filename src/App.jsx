import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import InvitationCover from "./components/InvitationCover";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Couple from "./components/Couple";
import Calendar from "./components/Calendar";
import Countdown from "./components/Countdown";
import Gifts from "./components/Gifts";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  const [coverOpen, setCoverOpen] = useState(false);
  const [coverClosing, setCoverClosing] = useState(false);
  const reduced = useReducedMotion();

  function openInvitation() {
    setCoverClosing(true);
    window.setTimeout(() => setCoverOpen(true), 400);
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl overflow-hidden bg-stone-50 text-stone-900 selection:bg-burgundy-200 selection:text-burgundy-950">
      {!coverOpen && (
        <InvitationCover closing={coverClosing} onOpen={openInvitation} />
      )}

      {[Hero, Invitation, Couple, Countdown, Calendar, Gifts, Footer].map(
        (Section, index) => (
          <motion.div
            key={Section.name || index}
            initial={
              reduced ? false : { opacity: 0, y: 38, filter: "blur(8px)" }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.08,
              margin: "0px 0px -32px 0px",
            }}
            transition={{
              duration: reduced ? 0 : 0.85,
              delay: reduced ? 0 : index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Section />
          </motion.div>
        ),
      )}
    </main>
  );
}
