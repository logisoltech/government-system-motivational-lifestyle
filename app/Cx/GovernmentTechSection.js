const SPEECH_ITEMS = [
  "Reduce Crime",
  "Better Health Care",
  "Create Jobs",
  "Taxes",
  "Stable Economy",
  "Currency",
  "Education",
];

export default function GovernmentTechSection() {
  return (
    <section
      id="government-technology"
      className="w-full scroll-mt-24 bg-white text-black"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-12 lg:py-14">
        {/* Main title */}
        <h2 className="font-sans text-[clamp(2rem,6vw,3.75rem)] font-bold uppercase leading-tight tracking-tight">
          You Decide Party
        </h2>
        <p className="mt-2 font-sans text-[clamp(1rem,2.6vw,1.5rem)] font-black uppercase leading-tight tracking-wide sm:mt-3">
          Pursuit of Happiness Is Self-Sufficiency — M.D.
        </p>

        {/* Subheadings */}
        <div className="mt-4 flex flex-col items-center gap-1 sm:mt-5 sm:gap-1.5">
          <p className="font-sans text-[clamp(1.35rem,3.5vw,2.25rem)] font-bold uppercase leading-tight tracking-tight">
            No More Kings and Queens
          </p>
          <p className="font-sans text-[clamp(1.1rem,2.8vw,1.75rem)] font-bold uppercase leading-tight tracking-tight">
            You Are The Leaders.
          </p>
          <p className="font-sans text-[clamp(1.1rem,2.8vw,1.75rem)] font-bold uppercase leading-tight tracking-tight">
            Government Is Technology
          </p>
        </div>

        {/* Body copy */}
        <div className="mt-6 flex max-w-4xl flex-col gap-1 sm:mt-7 sm:gap-1.5">
          <p className="font-sans text-[clamp(0.875rem,2.2vw,1.125rem)] font-bold uppercase leading-snug tracking-wide">
            Make It Easy to Come Together and Have Discussions.
          </p>
          <p className="font-sans text-[clamp(0.875rem,2.2vw,1.125rem)] font-bold uppercase leading-snug tracking-wide">
            We Have Airplanes, Cars, and Wireless Communications, Not a Horse and Buggy.
          </p>
          <p className="mt-3 font-sans text-[clamp(0.75rem,1.8vw,0.95rem)] font-bold uppercase leading-snug tracking-wide sm:mt-4">
            There Is Nothing More Fair and Promotes Equality More Than Products That Do It All for You.
          </p>
          <p className="mt-3 font-sans text-[clamp(0.75rem,1.8vw,0.95rem)] font-bold uppercase leading-snug tracking-wide sm:mt-4">
            A Stable, Valuable M.D. Currency Means Real Purchasing &amp; Selling Power.
          </p>
        </div>

        {/* Speech section */}
        <div className="mt-6 flex max-w-5xl flex-col items-center gap-1.5 sm:mt-7 sm:gap-2">
          <p className="font-sans text-[clamp(1.1rem,2.8vw,1.75rem)] font-bold uppercase leading-tight tracking-tight">
            Fair Taxes and Strong Military at End.
          </p>
          <p className="mt-1 font-sans text-[clamp(0.75rem,1.8vw,0.95rem)] font-bold uppercase leading-snug tracking-wide sm:mt-1.5">
            There Is Nothing More Fair Which Promotes Equality More Than Products That Do It All for You. M.D.
          </p>
          <p className="mt-3 font-sans text-[clamp(1.1rem,2.8vw,1.75rem)] font-bold uppercase leading-tight tracking-tight sm:mt-4">
            My 5 Minute Speech
          </p>
          <p className="font-sans text-[clamp(0.8rem,1.9vw,1rem)] font-bold uppercase leading-relaxed tracking-wide">
            {SPEECH_ITEMS.join(" | ")}.
          </p>
        </div>
      </div>
    </section>
  );
}
