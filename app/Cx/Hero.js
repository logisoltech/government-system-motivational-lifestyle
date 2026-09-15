import Image from "next/image";
import Nav from "./Nav";

const PANEL_BASE =
  "rounded-xl border border-white/15 bg-black/45 px-4 py-4 text-left shadow-md backdrop-blur-md sm:px-5 sm:py-5";

const PANEL_HEADING =
  "mb-3 border-b border-white/25 pb-2 text-lg font-bold uppercase tracking-[0.12em] text-white sm:text-xl lg:text-2xl xl:text-[1.65rem]";

const PANEL_BODY =
  "text-sm font-normal leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-base lg:text-[1.05rem] lg:leading-relaxed";

const CRYPTO_TITLE =
  "bg-linear-to-r from-neutral-300 via-white to-neutral-400 bg-clip-text text-center font-bold tracking-wide text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col overflow-hidden scroll-mt-24"
    >
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
        href="https://motivational-lifestyle.vercel.app/"
        className="absolute left-4 top-4 z-30 sm:left-6 sm:top-6 lg:left-8 lg:top-8"
        aria-label="Motivational Lifestyle"
      >
        <Image
          src="/logo.png"
          alt="Motivational Lifestyle"
          width={840}
          height={273}
          className="h-16 w-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] sm:h-[4.5rem] md:h-20 lg:h-24 xl:h-28"
          priority
        />
      </a>

      <Nav />

      <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-4 pb-8 pt-28 sm:px-6 sm:pb-10 sm:pt-32">
        <div className="flex w-full max-w-6xl flex-col items-stretch gap-6 sm:gap-7 lg:gap-8">
          <div className={`${PANEL_BASE} w-full`}>
            <p className={PANEL_BODY}>
              SEE OUR SELFSUFFICIENT PRODUCTS ON OUR WEBSITE TO SUPPORT A
              HEALTHY COMFORTABLE LIFESTYLE FOR A GOOD GOVERNMENT AND A STRONG
              CRYPTO CURRENCY WHERE EVERYONE HAS AN OPPORTUNITY TO ADVANCE AND
              PROFIT.
              <span className="mt-2 block font-medium text-white">
                -FINANCING WILL BE AVAILABLE (PLACE ON ALL PRODUCTS)
              </span>
            </p>
          </div>

          <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-10">
            <div className={`${PANEL_BASE} order-2 h-full md:order-1`}>
              <h3 className={PANEL_HEADING}>YOU DECIDE PARTY</h3>
              <p className={`${PANEL_BODY} mb-2 font-medium`}>
                IF YOU WANT CHANGES - YOU HAVE TO PARTICIPATE IN DECISION MAKING
                PROCESS
              </p>
              <p className={`${PANEL_BODY} mb-3 font-bold tracking-wide`}>
                ITS EASY
              </p>
              <ul className={`${PANEL_BODY} space-y-1`}>
                <li>FAIR VOTING SYSTEM &amp; VOTER SOFTWARE</li>
                <li>FAIR TAXATION</li>
                <li>STRONG CRYPTO CURRENCY</li>
                <li>HEALTHCARE</li>
                <li>EDUCATION</li>
                <li>LAWS-CRIME</li>
                <li>MILITARY</li>
              </ul>
            </div>

            <div className="order-1 flex flex-col items-center gap-3 md:order-2 md:px-2 lg:px-4">
              <p className={CRYPTO_TITLE}>
                <span className="block text-base sm:text-lg lg:text-xl xl:text-2xl">
                  M.D LIFESTYLE
                </span>
                <span className="block text-2xl leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
                  CRYPTO
                </span>
              </p>
              <div className="relative aspect-square w-[min(64vw,14rem)] sm:w-[13.75rem] md:w-[14rem] lg:w-[15rem] xl:w-[16.5rem]">
                <Image
                  src="/silvercoin.png"
                  alt="Motivational Lifestyle coin"
                  fill
                  className="object-contain drop-shadow-[0_8px_36px_rgba(0,0,0,0.55)]"
                  sizes="(max-width: 640px) 64vw, (max-width: 1024px) 226px, 264px"
                  priority
                />
              </div>
              <p className="max-w-[16rem] text-center text-xs font-bold uppercase leading-snug tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:max-w-[18rem] sm:text-sm lg:max-w-[20rem] lg:text-[0.9rem]">
                M.D. CRYPTO CAN ALWAYS INCREASE IN VALUE BECAUSE PEOPLE WILL
                ALWAYS IMPROVE SOCIETY BASED ON THEIR ENDLESS &amp; CONTINUOUS
                DESIRE TO CREATE SYSTEMS AND PRODUCTS THAT IMPROVES THEMSELVES
                AND SOCIETY. SEE M.D. PRODUCTS.
              </p>
            </div>

            <div className={`${PANEL_BASE} order-3 h-full`}>
              <h3 className={PANEL_HEADING}>
                MD ONE FOR ALL PRODUCTS &amp; SYSTEMS ON WEBSITE
              </h3>
              <ul className={`${PANEL_BODY} space-y-1.5`}>
                <li>
                  3D PRINTER/RECYCLER &amp; SOFTWARE- PRODUCE ALL PRODUCTS
                </li>
                <li>FOOD FOR ALL DIETS-PROTEIN</li>
                <li>MATERIAL FOR ALL PRODUCTS</li>
                <li>ENERGY-GRAVITY MOTOR-ITS EVERYWHERE FREE</li>
                <li>
                  FLYERS FOR ALL TRANSPORTATION -NO INFRASTRUCTURE JUST AIR
                </li>
                <li>HALO- THINKER, LEARNER, PROTECTION</li>
                <li>CITYOPIA-CITY OF FUTURE- HAS IT ALL</li>
                <li>GOVERNEMENT-YOU DECIDE</li>
              </ul>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <div className={`${PANEL_BASE} h-full`}>
              <p className={`${PANEL_BODY} text-left`}>
                IN THE BEGINNING AND FORMATION OF THIS COUNTRY WE NEEDED
                REPRESENTATIVES POLITICIANS TO MEET, GATHER AND DISCUSS ALL
                ISSUES AND WHATS GOOD FOR A FREE AND DEMOCRATIC SOCIETY THE
                COUNTRY IN ONE PERMANENT LOCATION BECAUSE THEY DIDN&apos;T HAVE
                AUTOMOBILES, AIRPLANES, TELEPHONES OR ANY OTHER WIRELESS
                COMMUNICATIONS. THE PEOPLE WERE TOO BUSY PROVIDING FOR THEMSELVES
                WITH FOOD AND SHELTER. THE GOVERNMENT NEEDED PEOPLE TO MAN THE
                FORT AND MAKE QUICK SERIOUS DECISIONS WHEN NECESSARY. ALL THEY
                HAD WAS A HORSE AND BUGGY TO TRAVEL AND GATHER. 250 YEARS LATER
                WE HAVE ALL THE HI-TECHNOLOGY AVAILABLE FOR LIVING COMFORTABLY,
                INTERNET, WIRELES COMMUNICATION, AIRPLANES, AUTOMOBILES, AI
                MULTIFUNCTIONAL AND FLEXIBLE AS WELL AS DURABLE APPLIANACES AND
                PRODUCTS TO LIVE, GATHER AND COMMUNICATE BUT OUR SYSTEM OF VOTING
                IS STILL THE SAME. ITS OUTDATED. SOMEONE ELSE WILL ALWAYS MAKE
                ALL THE DECISIONS DESPITE ALL THAT TECHNOLOGY. THE
                REPRESENTATIVES. YOU SHOULD MAKE MORE DECISIONS IF YOU WANT
                CHANGES.
              </p>
            </div>

            <div className={`${PANEL_BASE} flex h-full flex-col gap-4 text-left`}>
              <p className={PANEL_BODY}>
                USING STABLE VALUABLE MD CRYPTO CURRENCY BASED ON INTELLIGENT,
                EFFICIENT, GOOD PRODUCTS AND INTELLIGENT, EFFICIENT, GOOD
                GOVERNMENT FOR PURCHASING AND SELLING POWER. NOT ON FALSE
                PROMISES AND FALSE VALUES LIKE GOLD. FOR PURSUIT OF REAL
                HAPPINESS.
              </p>
              <p className={PANEL_BODY}>
                TRUE FREEDOM, HI-TECH INTELLIGENT PRODUCTS, HEALTHY FOODS &amp;
                LIFESTYLES, AND FINALLY GOOD, EFFICIENT FAIR GOVERNMENT AND
                VOTING PROCESS. NOT USELESS RARE METALS LIKE GOLD BASED ONLY ON
                RARITY. USING STABLE VALUABLE MD CURRENCY FOR PURCHASING &amp;
                SELLING POWER.
              </p>

              <div className="mt-2 flex flex-col items-center gap-2">
                <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-white sm:text-sm">
                  Upside Down Pyramid Sham
                </p>
                <div className="flex w-full max-w-sm items-stretch justify-center gap-2 sm:gap-3">
                  <div className="flex flex-1 flex-col items-center">
                    {[
                      { width: "100%", tip: false },
                      { width: "84%", tip: false },
                      { width: "68%", tip: false },
                      { width: "52%", tip: false },
                      { width: "36%", tip: true },
                    ].map((layer, i) => (
                      <div
                        key={i}
                        className="relative mb-1 flex h-8 items-center justify-center border border-white/35 bg-white/10 text-[0.55rem] font-bold uppercase tracking-wider text-white/95 sm:h-9 sm:text-[0.65rem]"
                        style={{
                          width: layer.width,
                          clipPath: layer.tip
                            ? "polygon(12% 0, 88% 0, 50% 100%)"
                            : "polygon(0 0, 100% 0, 94% 100%, 6% 100%)",
                        }}
                      >
                        {!layer.tip ? "FINANCING" : null}
                      </div>
                    ))}
                    <div className="mt-1 flex flex-col items-center gap-0.5">
                      <div className="flex items-end gap-1.5 text-white">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-6 w-6 sm:h-7 sm:w-7"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M12 3 3 10h2v10h6v-6h2v6h6V10h2L12 3z" />
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          aria-hidden
                        >
                          <rect x="5" y="8" width="14" height="12" rx="1.5" />
                          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                        </svg>
                      </div>
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
                        Collateral
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-1 pt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex h-8 items-center sm:h-9"
                      >
                        <span className="text-[0.55rem] font-bold uppercase tracking-wide text-white/90 sm:text-[0.65rem]">
                          Financing
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
