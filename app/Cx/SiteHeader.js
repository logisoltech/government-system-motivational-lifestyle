"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  {
    label: "Voting System",
    dropdown: [
      { label: "REP-1 voting", href: "#voting-system" },
      { label: "Public participation", href: "#roman-plebiscites" },
    ],
  },
  { label: "Hi-Tech Products", href: "#hi-tech" },
  { label: "Currency & Economy", href: "#currency-economy" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollToId(e, href, onDone) {
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  const target = id ? document.getElementById(id) : null;
  if (!target) return;
  e.preventDefault();
  onDone?.();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  if (history.replaceState) {
    history.replaceState(null, "", href === "#home" ? "#" : href);
  }
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopVotingOpen, setDesktopVotingOpen] = useState(false);
  const [mobileVotingOpen, setMobileVotingOpen] = useState(false);
  const votingDropdownRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!desktopVotingOpen) return;
    const onPointer = (event) => {
      const el = votingDropdownRef.current;
      if (el && !el.contains(event.target)) setDesktopVotingOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [desktopVotingOpen]);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setMobileVotingOpen(false);
    setDesktopVotingOpen(false);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => scrollToId(e, "#home", closeAll)}
          className="flex min-w-0 shrink items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt=""
            width={120}
            height={40}
            className="h-10 w-auto shrink-0 sm:h-11"
            priority
          />
          <div className="min-w-0 text-left leading-tight">
            <span className="block truncate text-sm font-bold tracking-tight text-white sm:text-base">
              ONE MD CRYPTO COIN
            </span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-wider text-white/60 sm:block">
              Empowering youth. Strengthening democracy.
            </span>
          </div>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative" ref={votingDropdownRef}>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                  aria-expanded={desktopVotingOpen}
                  aria-haspopup="true"
                  onClick={() => setDesktopVotingOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown
                    className={`size-4 transition ${desktopVotingOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {desktopVotingOpen ? (
                  <ul
                    className="absolute left-0 top-full z-50 mt-1 min-w-[12rem] rounded-xl border border-white/10 bg-[#141414] py-2 shadow-xl"
                    role="menu"
                  >
                    {item.dropdown.map((sub) => (
                      <li key={sub.href} role="presentation">
                        <a
                          href={sub.href}
                          role="menuitem"
                          className="block px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                          onClick={(e) =>
                            scrollToId(e, sub.href, () => {
                              setDesktopVotingOpen(false);
                            })
                          }
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToId(e, item.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => scrollToId(e, "#contact", closeAll)}
            className="hidden rounded-xl bg-[#b91c1c] px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#991b1b] sm:inline-flex"
          >
            Get started
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <FaTimes className="size-5" aria-hidden />
            ) : (
              <FaBars className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${mobileOpen ? "border-t border-white/10" : "hidden border-t border-transparent"}`}
      >
        <nav className="mx-auto flex max-h-[min(70vh,calc(100dvh-5rem))] w-full max-w-7xl flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6">
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="flex flex-col">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-semibold text-white"
                  onClick={() => setMobileVotingOpen((v) => !v)}
                  aria-expanded={mobileVotingOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={`size-5 transition ${mobileVotingOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {mobileVotingOpen ? (
                  <div className="ml-2 flex flex-col border-l border-white/10 pl-3">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="py-2 text-sm text-white/85"
                        onClick={(e) =>
                          scrollToId(e, sub.href, () => {
                            setMobileOpen(false);
                            setMobileVotingOpen(false);
                          })
                        }
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-white"
                onClick={(e) => scrollToId(e, item.href, () => setMobileOpen(false))}
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#b91c1c] px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
            onClick={(e) => scrollToId(e, "#contact", () => setMobileOpen(false))}
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
