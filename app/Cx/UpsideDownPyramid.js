export default function UpsideDownPyramid({ className = "", tone = "dark" }) {
  const light = tone === "light";

  const titleClass = light
    ? "text-center text-sm font-black uppercase tracking-[0.14em] text-[#a16207] sm:text-base"
    : "text-center text-sm font-black uppercase tracking-[0.14em] text-white sm:text-base";

  const subtitleClass = light
    ? "text-center text-xs font-bold uppercase tracking-[0.14em] text-[#b45309] sm:text-sm"
    : "text-center text-xs font-bold uppercase tracking-[0.14em] text-white sm:text-sm";

  const layerClass = light
    ? "relative mb-1 flex h-8 items-center justify-center border border-amber-300 bg-amber-50 text-[0.55rem] font-bold uppercase tracking-wider text-amber-950 sm:h-9 sm:text-[0.65rem]"
    : "relative mb-1 flex h-8 items-center justify-center border border-white/35 bg-white/10 text-[0.55rem] font-bold uppercase tracking-wider text-white/95 sm:h-9 sm:text-[0.65rem]";

  const iconClass = light ? "text-[#b45309]" : "text-white";

  const collateralClass = light
    ? "text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#a16207] sm:text-xs"
    : "text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white sm:text-xs";

  const sideLabelClass = light
    ? "text-[0.55rem] font-bold uppercase tracking-wide text-[#b45309] sm:text-[0.65rem]"
    : "text-[0.55rem] font-bold uppercase tracking-wide text-white/90 sm:text-[0.65rem]";

  return (
    <div className={`my-3 flex flex-col items-center gap-2 ${className}`}>
      <p className={titleClass}>-PRESENT FINANCING SYSTEM-</p>
      <p className={subtitleClass}>Upside Down Pyramid Danger</p>
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
              className={layerClass}
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
            <div className={`flex items-end gap-1.5 ${iconClass}`}>
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
            <p className={collateralClass}>Collateral</p>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-1 pt-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex h-8 items-center sm:h-9">
              <span className={sideLabelClass}>Financing</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
