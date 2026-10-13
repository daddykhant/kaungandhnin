export default function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading mx-auto mb-8 max-w-2xl text-center">
      <p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold">
        {label}
      </p>

      <h2 className="text-balance font-serif text-3xl text-cream sm:text-5xl md:text-6xl">{title}</h2>

      {children && (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-cream/65">
          {children}
        </p>
      )}

      {/* <div className="mt-6 flex items-center justify-center gap-3 text-gold">
        <span className="h-px w-12 bg-gold/40" />
        <Heart size={14} fill="currentColor" />
        <span className="h-px w-12 bg-gold/40" />
      </div> */}
    </div>
  );
}
