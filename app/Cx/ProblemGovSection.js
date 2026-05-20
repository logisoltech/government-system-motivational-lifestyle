import Image from "next/image";
import { Check, Users } from "lucide-react";

const SOLUTION_CHECKS = [
  "Everyone has a voice",
  "Every issue can be voted on when appropriate",
  "Technology aligns with inclusive participation",
  "Fair processes & transparent outcomes",
];

export default function ProblemGovSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden scroll-mt-24 bg-white py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <Image
          src="/gov-hero.png"
          alt=""
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-white via-white/95 to-white"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-black uppercase tracking-tight text-neutral-900 sm:text-4xl">
          The problem with representative government
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-md sm:p-8">
            <div className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-center">
              <div className="flex-1 rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-sm">
                <p className="text-3xl font-black text-[#b91c1c]">1912</p>
                <p className="mt-3 text-sm text-neutral-700">≈95 million people</p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">435 representatives</p>
                <div className="mx-auto mt-4 flex max-w-34 flex-wrap justify-center gap-1 sm:max-w-none" aria-hidden>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <Users
                      key={`p1912-${i}`}
                      className="size-3.5 shrink-0 text-[#dc2626]/75 sm:size-4"
                      strokeWidth={2}
                      aria-hidden
                    />
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 justify-center">
                <span className="flex size-14 items-center justify-center rounded-full border-2 border-[#eab308]/60 bg-white text-lg font-black text-[#ca8a04] shadow-md">
                  VS
                </span>
              </div>

              <div className="flex-1 rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-sm">
                <p className="text-3xl font-black text-[#15803d]">Today</p>
                <p className="mt-3 text-sm text-neutral-700">≈349 million people</p>
                <p className="mt-1 text-sm font-semibold text-[#ca8a04]">
                  Still only 435 representatives
                </p>
                <div className="mx-auto mt-4 flex max-w-56 flex-wrap justify-center gap-1 sm:max-w-none" aria-hidden>
                  {Array.from({ length: 24 }).map((_, i) => (
                    <Users
                      key={`today-${i}`}
                      className="size-3.5 shrink-0 text-[#15803d]/80 sm:size-4"
                      strokeWidth={2}
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-2xl border border-transparent bg-transparent p-0 sm:p-1">
            <p className="text-lg font-medium leading-relaxed text-neutral-800">
              Technology has advanced. Representation has not.
            </p>
            <p className="text-xl font-black uppercase leading-snug text-[#b91c1c] sm:text-2xl">
              We no longer need few to decide for the many.
            </p>
            <ul className="space-y-3">
              {SOLUTION_CHECKS.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[0.9375rem] text-neutral-800">
                  <Check className="mt-0.5 size-5 shrink-0 text-[#b91c1c]" aria-hidden strokeWidth={2.5} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
