import Image from "next/image";

export default function MindSection() {
  return (
    <section id="about" className="w-full bg-white py-10 sm:py-14 scroll-mt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-center md:gap-20 lg:px-12">
        <div className="w-full max-w-xl md:w-104 md:max-w-none lg:w-md">
          <Image
            src="/people.png"
            alt="Thinker immunizer cap visual"
            width={900}
            height={620}
            className="h-auto w-full rounded-[1.75rem]"
            priority={false}
          />
        </div>

        <div className="w-full max-w-md md:w-96 md:max-w-none lg:w-md">
          <h2 className="max-w-sm text-balance text-3xl leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-[2.55rem]">
            1 GOVERMENT FAIR SYSTEM
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-700 md:text-[1.05rem]">
          Efficient voting process where everyone decides on every issue if possible on special computer software at home. Everyone is a leader in what they need. Not just a few reps.
          </p>
        </div>
      </div>
    </section>
  );
}