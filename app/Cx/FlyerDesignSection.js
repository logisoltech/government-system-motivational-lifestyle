import Image from "next/image";

export default function FlyerDesignSection({ title, imageSrc, imageAlt, sectionId }) {
  return (
    <section
      id={sectionId}
      className="w-full scroll-mt-24 border-y border-neutral-100 bg-white px-4 pb-12 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pb-16"
    >
      <h2 className="mb-7 text-center text-3xl font-extrabold uppercase leading-none text-neutral-900 sm:mb-9 sm:text-[2.15rem]">
        {title}
      </h2>

      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl sm:rounded-[1.75rem]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1400}
          height={900}
          className="h-auto w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
    </section>
  );
}