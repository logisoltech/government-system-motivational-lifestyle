import Image from "next/image";
import Nav from "./Nav";

const PANEL_BASE =
  "rounded-xl border border-white/15 bg-black/45 px-4 py-4 text-left shadow-md backdrop-blur-md sm:px-5 sm:py-5";

const PANEL_HEADING =
  "mb-3 border-b border-white/25 pb-2 text-base font-bold uppercase tracking-[0.12em] text-white sm:text-lg lg:text-xl";

const PANEL_BODY =
  "text-sm font-normal leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-base lg:text-[1.05rem] lg:leading-relaxed";

const HERO_BODY =
  "text-sm font-normal leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] sm:text-base md:text-lg md:leading-relaxed";

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
              <h3 className={PANEL_HEADING}>GOVERNMENT</h3>
              <ul className={`${PANEL_BODY} space-y-1`}>
                <li>FAIR VOTING SYSTEM</li>
                <li>FAIR TAXATION</li>
                <li>STRONG CRYPTO</li>
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
            </div>

            <div className={`${PANEL_BASE} order-3 h-full`}>
              <h3 className={PANEL_HEADING}>MD ONE FOR ALL PRODUCTS ON WEBSITE</h3>
              <ul className={`${PANEL_BODY} space-y-1.5`}>
                <li>3D PRINTER/RECYCLER &amp; SOFTWARE-PRODUCE ALL PRODUCTS</li>
                <li>FOOD FOR ALL DIETS-PROTEIN MATERIAL FOR ALL PRODUCTS</li>
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

          <p className={`${HERO_BODY} mx-auto max-w-4xl text-center`}>
            USING STABLE VALUABLE MD CRYPTO CURRENCY BASED ON INTELLIGENT,
            EFFICIENT, GOOD PRODUCTS AND INTELLIGENT, EFFICIENT, GOOD
            GOVERNMENT FOR PURCHASING AND SELLING POWER. NOT ON FALSE PROMISES
            AND FALSE VALUES LIKE GOLD AND PURSUIT OF REAL HAPPINESS
          </p>

          <p className={`${HERO_BODY} mx-auto max-w-4xl text-center`}>
            TRUE FREEDOM, HI-TECH INTELLIGENT PRODUCTS, HEALTHY FOODS &amp;
            LIFESTYLES, AND FINALLY GOOD, EFFICIENT FAIR GOVERNMENT AND VOTING
            PROCESS — NOT USELESS RARE METALS LIKE GOLD BASED ONLY ON RARITY.
            USING STABLE VALUABLE MD CURRENCY FOR PURCHASING &amp; SELLING
            POWER.
          </p>
        </div>
      </div>
    </section>
  );
}
