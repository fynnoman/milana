"use client";

export default function ScaleReveal() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=82"
          alt="Ruhige, hell gestaltete Zahnarztpraxis"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1200px] flex-col items-center justify-center px-6 text-center">
        <span className="eyebrow !text-white/80">Externe Unterstützung</span>
        <h2 className="font-display mt-6 text-[clamp(36px,6vw,88px)] leading-[1.04] text-white max-w-4xl tracking-[-0.01em]">
          Sie behandeln Ihre Patienten.
          <span className="italic block text-white/85"> Ich kümmere mich um die Zahlen.</span>
        </h2>
        <p className="mt-8 max-w-xl text-white/85 text-[15px] leading-[1.75]">
          Im Praxisalltag geht schnell etwas unter. Eine Analogposition,
          eine Materialkosten-Zeile, eine Nachbegründung. Ich schaue mir
          jede Position an, mit Ruhe und in Ihrem Namen.
        </p>
        <div className="mt-10 flex items-center gap-4 text-white/70 text-[11px] uppercase tracking-[0.22em]">
          <span className="h-px w-10 bg-white/40" />
          Persönlich · Präzise · Zuverlässig
          <span className="h-px w-10 bg-white/40" />
        </div>
      </div>
    </section>
  );
}
