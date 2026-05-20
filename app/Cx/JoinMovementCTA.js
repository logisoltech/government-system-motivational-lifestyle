export default function JoinMovementCTA() {
  return (
    <section className="relative w-full scroll-mt-24 border-y border-neutral-100 bg-white py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.06),transparent_65%)]" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <p className="text-balance font-black uppercase tracking-wide text-neutral-900 sm:text-lg md:text-xl">
          One people. One system. One future.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-red-600 sm:text-base">
          Empowering youth. Strengthening democracy.
        </p>
        {/* <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex min-w-[12rem] items-center justify-center rounded-xl bg-[#b91c1c] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#991b1b]"
          >
            Join the movement
          </a>
          <a
            href="#about"
            className="inline-flex min-w-[12rem] items-center justify-center rounded-xl border-2 border-neutral-300 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-neutral-900 transition hover:bg-neutral-50"
          >
            Learn more
          </a>
        </div> */}
      </div>
    </section>
  );
}
