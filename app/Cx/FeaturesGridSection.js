import Image from "next/image";
import { Building2, Check, Cpu, FlaskConical, Landmark, Scale } from "lucide-react";

const VOTING_CHECKS = [
  "Internet & devices",
  "Phones & tablets",
  "Video meetings (e.g. Zoom)",
  "Home & remote access",
];

export default function FeaturesGridSection() {
  return (
    <section id="voting-system" className="relative w-full bg-white py-14 sm:py-20 scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Voting — red */}
        <article
          id="roman-plebiscites"
          className="flex scroll-mt-28 flex-col rounded-2xl border-2 border-[#b91c1c]/65 bg-white p-5 shadow-md sm:p-6"
        >
          <h2 className="text-lg font-black uppercase tracking-wide text-[#991b1b] sm:text-xl">
            Voting system
          </h2>
          <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src="/reference.png"
              alt="Digital voting workspace"
              fill
              className="object-cover object-[center_18%]"
              sizes="(max-width:1024px) 100vw, 33vw"
            />
          </div>
          <ul className="mt-5 space-y-2">
            {VOTING_CHECKS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-neutral-800">
                <Check className="size-5 shrink-0 text-[#b91c1c]" aria-hidden strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3 rounded-xl border border-neutral-200 bg-white p-4 text-sm leading-relaxed text-neutral-700">
            <p className="flex items-start gap-2 font-semibold text-neutral-900">
              <span className="mt-0.5 rounded bg-[#fef2f2] p-1.5">
                <Landmark className="size-4 text-[#b91c1c]" aria-hidden />
              </span>
              Roman empire plebiscites — precedent for mass participation on decisive issues.
            </p>
            <p className="flex items-start gap-2 font-semibold text-neutral-900">
              <span className="mt-0.5 rounded bg-[#fef2f2] p-1.5">
                <Scale className="size-4 text-[#b91c1c]" aria-hidden />
              </span>
              Public voting on important issues — everyone can weigh in when it matters.
            </p>
          </div>
        </article>

        {/* Hi-tech — green */}
        <article
          id="hi-tech"
          className="flex scroll-mt-28 flex-col rounded-2xl border-2 border-[#15803d]/65 bg-white p-5 shadow-md sm:p-6"
        >
          <h2 className="text-lg font-black uppercase tracking-wide text-[#166534] sm:text-xl">
            Hi-tech products / health / education
          </h2>
          <p className="mt-3 text-xs uppercase tracking-wider text-neutral-500">
            Self-sufficiency · one tool · one ingredient · healthy lifestyle
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-200">
              <Image src="/gov-hero.png" alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative flex aspect-square items-center justify-center rounded-lg border border-[#ca8a04]/40 bg-white p-2 shadow-inner">
              <Image
                src="/silvercoin.png"
                alt="Motivational Lifestyle medallion"
                width={140}
                height={140}
                className="h-auto max-h-full w-full object-contain"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
              <Image src="/hi-tech.png" alt="" fill className="object-cover" sizes="33vw" />
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-neutral-700">
            Value tied to real hi-tech productivity, wellbeing, and learning — currency that reflects
            usefulness and outcomes, not abstract scarcity alone.
          </p>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {["AI-guided products", "Scientific education", "Healthy routines", "Practical tools"].map(
              (t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#15803d]/35 bg-emerald-50 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-emerald-900"
                >
                  <Cpu className="size-3.5" aria-hidden /> {t}
                </span>
              ),
            )}
          </div>
        </article>

        {/* Currency — gold */}
        <article
          id="currency-economy"
          className="flex scroll-mt-28 flex-col rounded-2xl border-2 border-[#ca8a04]/60 bg-white p-5 shadow-md sm:p-6"
        >
          <h2 className="text-lg font-black uppercase tracking-wide text-[#a16207] sm:text-xl">
            Stable MD currency — real purchasing power
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-neutral-700">
            <li className="flex gap-3">
              <Scale className="mt-0.5 size-5 shrink-0 text-[#b45309]" aria-hidden />
              <span>
                <strong className="block text-neutral-900">Barter origins</strong>
                Goods exchanged for goods — value grounded in real needs.
              </span>
            </li>
            <li className="flex gap-3">
              <Building2 className="mt-0.5 size-5 shrink-0 text-[#b45309]" aria-hidden />
              <span>
                <strong className="block text-neutral-900">Finance for efficiency</strong>
                Systems that route capital toward productive outcomes.
              </span>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
            <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a16207]">
              Upside-down pyramid (illustrative)
            </p>
            <div className="mx-auto mt-4 flex max-w-[14rem] flex-col items-center gap-1">
              {["Broad financing layers", "Narrow productive base", "$ purchasing power anchor"].map(
                (layer, i) => (
                  <div
                    key={layer}
                    className={`w-full rounded-md border border-amber-200/90 py-2.5 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-neutral-800 ${
                      i === 2 ? "bg-amber-100/90 text-amber-950" : "bg-white"
                    }`}
                  >
                    {i === 2 ? (
                      <span className="inline-flex items-center gap-2">
                        <Landmark className="size-3.5 text-[#ca8a04]" aria-hidden /> {layer}
                      </span>
                    ) : (
                      layer
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          <p className="mt-6 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-semibold leading-snug text-amber-950">
            <FlaskConical className="size-5 shrink-0 text-[#b45309]" aria-hidden />
            MD aims to reflect more grounded value than typical speculative crypto narratives.
          </p>
        </article>
      </div>
    </section>
  );
}
