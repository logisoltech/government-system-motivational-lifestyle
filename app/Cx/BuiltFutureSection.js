import { Cpu, Eye, Leaf, Lock, Scale, Zap } from "lucide-react";

const ITEMS = [
  { label: "Secure & reliable", Icon: Lock },
  { label: "100% transparent", Icon: Eye },
  { label: "Powered by youth", Icon: Zap },
  { label: "Fair & efficient", Icon: Scale },
  { label: "Smart management", Icon: Cpu },
  { label: "Sustainable growth", Icon: Leaf },
];

export default function BuiltFutureSection() {
  return (
    <section
      id="gallery"
      className="w-full scroll-mt-24 border-y border-neutral-100 bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
          Built for a better future
        </h2>
        <ul className="mx-auto mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {ITEMS.map(({ label, Icon }) => (
            <li key={label} className="flex flex-col items-center text-center">
              <span className="flex size-14 items-center justify-center rounded-2xl border border-neutral-100 bg-white text-[#b45309] shadow-sm">
                <Icon className="size-7" aria-hidden strokeWidth={1.5} />
              </span>
              <span className="mt-3 text-xs font-semibold uppercase leading-tight tracking-wide text-neutral-700 sm:text-[0.8rem]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
