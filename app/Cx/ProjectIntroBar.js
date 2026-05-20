import Image from "next/image";
import {
  BarChart3,
  Database,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

const PILLARS = [
  { label: "Secure platform", Icon: ShieldCheck },
  { label: "Inclusive participation", Icon: Users },
  { label: "Real-time results", Icon: BarChart3 },
  { label: "Data protection", Icon: Database },
  { label: "Smart management", Icon: Settings },
];

export default function ProjectIntroBar() {
  return (
    <section
      id="intro"
      className="w-full border-y border-neutral-100 bg-white py-10 sm:py-12 scroll-mt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-8">
        <div className="flex shrink-0 items-center gap-4">
          <Image
            src="/logo.png"
            alt=""
            width={96}
            height={96}
            className="h-16 w-auto sm:h-[4.25rem]"
          />
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#b45309] sm:text-2xl">
              ONE MD CRYPTO COIN
            </h2>
            <p className="mt-1 max-w-md text-sm font-medium uppercase leading-snug tracking-wide text-neutral-600 sm:text-[0.9375rem]">
              New currency based on hi-tech products — not gold
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {PILLARS.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <Icon
                className="size-7 text-neutral-700 sm:size-8"
                aria-hidden
                strokeWidth={1.75}
              />
              <span className="mt-2 text-[0.72rem] font-semibold uppercase leading-tight tracking-wide text-neutral-600 sm:text-xs">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
