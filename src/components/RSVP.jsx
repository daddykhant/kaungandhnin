import { useState } from "react";
import { Send } from "lucide-react";
import { wedding } from "../data/wedding";
import SectionHeading from "./SectionHeading";
import FloralAccents from "./FloralAccents";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "Accepts with pleasure",
    guests: "1",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Wedding RSVP from ${form.name}`);

    const body = encodeURIComponent(
      `Name: ${form.name}\nAttendance: ${form.attendance}\nGuests: ${form.guests}`,
    );

    window.location.href = `mailto:${wedding.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="rsvp"
      className="relative isolate overflow-hidden bg-linear-to-br from-stone-50 via-burgundy-50 to-stone-100 px-5 py-24 sm:py-32 min-[641px]:max-[768px]:px-10 min-[641px]:max-[768px]:py-[5.5rem]"
    >
      <FloralAccents variant="rsvp" />
      <div className="relative z-10">
      <SectionHeading label="Kindly respond" title="Will you join us?">
        Please let us know so we can prepare a warm welcome for you.
      </SectionHeading>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl border border-sage/25 bg-black/10 p-6 sm:p-10 min-[641px]:max-[768px]:p-8"
      >
        <label className="mb-2 block text-xs text-sage">
          Your name / သင့်နာမည်
        </label>

        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter your full name"
          className="mb-6 w-full border border-sage/25 bg-black/20 px-4 py-4 text-sm outline-none focus:border-sage"
        />

        <label className="mb-2 block text-xs text-sage">
          Attendance / တက်ရောက်မှု
        </label>

        <select
          value={form.attendance}
          onChange={(e) => setForm({ ...form, attendance: e.target.value })}
          className="mb-6 w-full border border-sage/25 bg-stone-100 px-4 py-4 text-sm outline-none focus:border-sage"
        >
          <option>Accepts with pleasure</option>
          <option>Regretfully declines</option>
        </select>

        <label className="mb-2 block text-xs text-sage">
          Number of guests / ဧည့်သည်ဦးရေ
        </label>

        <select
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
          className="mb-8 w-full border border-sage/25 bg-stone-100 px-4 py-4 text-sm outline-none focus:border-sage"
        >
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <option key={number} value={number}>
              {number} {number === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 bg-sage px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy-950 transition hover:bg-stone-100"
        >
          <Send size={16} /> Send RSVP
        </button>
      </form>
      </div>
    </section>
  );
}
