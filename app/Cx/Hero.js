"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Nav from "./Nav";

const SIDE_BUTTON_BASE =
  "inline-flex min-w-[9.25rem] items-center justify-center rounded-xl border px-3.5 py-2.5 text-center text-xs font-bold leading-tight tracking-wide shadow-md backdrop-blur-md transition hover:border-white/30 sm:min-w-[9.75rem] sm:px-4 sm:py-2.5 md:min-w-[9rem] md:px-3.5 md:py-2 md:text-[0.8rem] lg:min-w-[9.75rem] lg:px-4 lg:py-2.5 lg:text-[0.82rem]";

const SIDE_BUTTON_IDLE =
  "border-white/15 bg-black/45 text-white hover:bg-black/55";
const SIDE_BUTTON_ACTIVE =
  "border-white/40 bg-black/65 text-white ring-2 ring-white/25 ring-offset-2 ring-offset-transparent";

const PANEL_TITLE = {
  "hi-tech": "Hi-Tech Products",
  education: "Education",
  government: "Government",
  currency: "Currency & Economy",
};

export default function Hero() {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = useCallback((id) => {
    setOpenPanel((prev) => (prev === id ? null : id));
  }, []);

  useEffect(() => {
    let mounted = true;

    async function initAOS() {
      const AOS = (await import("aos")).default;
      if (!mounted) return;
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
      requestAnimationFrame(() => AOS.refreshHard());
    }

    initAOS();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!openPanel) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openPanel]);

  useEffect(() => {
    if (!openPanel) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenPanel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPanel]);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <Image
        src="/gov-hero.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/55 via-black/45 to-black/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[min(38vh,18rem)] bg-linear-to-t from-white/20 via-white/5 to-transparent"
        aria-hidden
      />

      <a
        href="/"
        className="absolute left-5 top-5 z-30 sm:left-8 sm:top-8"
        aria-label="Home"
        data-aos="fade-right"
        data-aos-delay="80"
      >
        <Image
          src="/logo.png"
          alt="Motivational Lifestyle"
          width={400}
          height={130}
          className="h-12 w-auto drop-shadow-md sm:h-15 md:h-16 lg:h-[3.6rem]"
          priority
        />
      </a>

      <Nav />

      {/* Mobile: centered. md+: block aligned left */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-4 pb-8 pt-28 text-center sm:px-6 sm:pb-10 sm:pt-32 md:items-start md:justify-center md:pl-8 md:pt-34 md:text-left lg:pl-12 xl:pl-16">
        <div className="flex w-full max-w-sm flex-col items-center md:mr-auto md:max-w-[min(24rem,calc(100%-1rem))] md:items-start lg:max-w-100">
          <div className="flex w-full flex-col items-center justify-center gap-7 sm:gap-6 md:flex-row md:justify-start md:gap-4 lg:gap-5">
            <div
              className="order-2 flex w-full max-w-44 flex-col gap-3 sm:max-w-none sm:gap-3.5 md:order-1 md:max-w-40 md:items-start"
              data-aos="fade-right"
              data-aos-delay="120"
            >
              <button
                type="button"
                id="hero-btn-hi-tech"
                aria-expanded={openPanel === "hi-tech"}
                aria-controls="hero-detail-panel"
                onClick={() => togglePanel("hi-tech")}
                className={`${SIDE_BUTTON_BASE} ${openPanel === "hi-tech" ? SIDE_BUTTON_ACTIVE : SIDE_BUTTON_IDLE}`}
              >
                Hi-Tech Products
              </button>
              <button
                type="button"
                id="hero-btn-education"
                aria-expanded={openPanel === "education"}
                aria-controls="hero-detail-panel"
                onClick={() => togglePanel("education")}
                className={`${SIDE_BUTTON_BASE} ${openPanel === "education" ? SIDE_BUTTON_ACTIVE : SIDE_BUTTON_IDLE}`}
              >
                Education
              </button>
            </div>

            <div
              className="relative order-1 aspect-square w-[min(70vw,14.5rem)] shrink-0 sm:w-56 md:order-2 md:w-36 lg:w-44"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Image
                src="/silvercoin.png"
                alt="Motivational Lifestyle coin"
                fill
                className="object-contain drop-shadow-[0_6px_28px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 768px) 70vw, 176px"
                priority
              />
            </div>

            <div
              className="order-3 flex w-full max-w-44 flex-col gap-3 sm:max-w-none sm:gap-3.5 md:max-w-40 md:items-start"
              data-aos="fade-left"
              data-aos-delay="120"
            >
              <button
                type="button"
                id="hero-btn-government"
                aria-expanded={openPanel === "government"}
                aria-controls="hero-detail-panel"
                onClick={() => togglePanel("government")}
                className={`${SIDE_BUTTON_BASE} ${openPanel === "government" ? SIDE_BUTTON_ACTIVE : SIDE_BUTTON_IDLE}`}
              >
                Government
              </button>
              <button
                type="button"
                id="hero-btn-currency"
                aria-expanded={openPanel === "currency"}
                aria-controls="hero-detail-panel"
                onClick={() => togglePanel("currency")}
                className={`${SIDE_BUTTON_BASE} ${openPanel === "currency" ? SIDE_BUTTON_ACTIVE : SIDE_BUTTON_IDLE}`}
              >
                Currency &amp; Economy
              </button>
            </div>
          </div>

          <p
            className="mt-8 max-w-80 text-xs font-normal leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] sm:mt-9 sm:max-w-md sm:text-sm md:mt-7 md:max-w-xl md:text-[0.88rem] lg:max-w-2xl lg:text-[0.92rem]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Crypto based on real value – self-sufficiency or true freedom, hi-tech
            intelligent products, healthy foods &amp; lifestyles, and finally good
            efficient fair government not useless rare metals like gold based on
            rareness.
          </p>
        </div>
      </div>

      {/* Slide-over detail panel */}
      <div
        aria-hidden={!openPanel}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          openPanel ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          tabIndex={openPanel ? 0 : -1}
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          aria-label="Close panel"
          onClick={() => setOpenPanel(null)}
        />
      </div>

      <aside
        id="hero-detail-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-panel-title"
        hidden={!openPanel}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-white/10 bg-neutral-950/95 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-out sm:max-w-lg lg:max-w-xl ${
          openPanel ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex items-start justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
          <h2
            id="hero-panel-title"
            className="font-sans text-lg font-bold uppercase tracking-tight text-white sm:text-xl"
          >
            {openPanel ? PANEL_TITLE[openPanel] : "\u00A0"}
          </h2>
          <button
            type="button"
            onClick={() => setOpenPanel(null)}
            className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          {!openPanel ? null : openPanel === "hi-tech" ? (
            <div className="space-y-4 text-sm leading-relaxed text-neutral-200 sm:text-[0.9375rem]">
              <p>
                Freedom of self-sufficiency – create all your own products with the
                right tools and always the healthy ingredients for food that will
                always be good for you tasting the way you want – no need for drugs.
              </p>
            </div>
          ) : openPanel === "education" ? (
            <div className="space-y-4 text-sm leading-relaxed text-neutral-200 sm:text-[0.9375rem]">
              <p>
                The right knowledge mostly scientific information rather than easy
                social jargon created to ensure a college degree for students so that
                will pay tuition for 4 years but in the end knowing very little.
              </p>
            </div>
          ) : openPanel === "government" ? (
            <div className="space-y-4 text-sm leading-relaxed text-neutral-200 sm:text-[0.9375rem]">
              <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs italic text-white/85 sm:text-sm">
                Show a voter voting on their computer with specialized software on
                every issue.
              </p>
              <p>
                More people participating in the decision-making voting process like
                a 12-person jury in court means more leaders who know what they need
                and fairness. A voting system by everyone is the ultimate in fairness.
              </p>
              <p>
                A few representatives can only manage complaints and distribution of
                taxes to satisfy them as the population increased to almost 3 times the
                population but little increase in representatives to make decisions for
                everyone. In 1912 the population was 95 million with 48 states and 435
                representatives. Now we still have 435 representatives and a
                population of 349 million. We need more people to be part of the
                decision-making process. We have a good system of voting therefore we
                should take advantage of it.
              </p>
              <p>
                At the time of the Roman Empire emperors who weren&apos;t sure about their
                decision on a special issue allowed a plebiscite which allowed everyone
                to vote on the issue.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-sm leading-relaxed text-neutral-200 sm:text-[0.9375rem]">
              <p>
                Using stable valuable MD currency for purchasing &amp; selling power.
              </p>
              <p>
                Barter was first used to exchange products – 1 cow is worth 3 chickens.
                Or 2 pigs or a cart full of tomatoes, onions, cucumbers, lettuce and
                oranges. This will have more value than any other crypto.
              </p>
            </div>
          )}
        </div>
      </aside>
    </section>
  );
}
