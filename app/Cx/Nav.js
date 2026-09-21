"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { label: "Solution", href: "#about" },
  { label: "Old vs New", href: "#old-vs-new" },
  { label: "Voting system", href: "#voting-system" },
  { label: "Hi-tech & apps", href: "#hi-tech" },
];

const ACTIONS = [
  { label: "Invest / Donate", href: "#", variant: "solid" },
  { label: "Buy M.D Crypto", href: "#", variant: "outline" },
];

const ACTION_BTN =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#d4af37] px-4 py-2 text-sm font-bold leading-none tracking-wide text-black shadow-lg transition hover:bg-[#e2bf49] lg:px-5 lg:text-base";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!open && !contactOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, contactOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setContactOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClick = (e, href) => {
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) {
      history.replaceState(null, "", href);
    }
  };

  const openContact = () => {
    setOpen(false);
    setContactOpen(true);
  };

  return (
    <>
      {/* Hamburger button (mobile only) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="absolute right-5 top-6 z-40 inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:bg-black/55 sm:hidden"
      >
        {open ? (
          <FaTimes className="size-5" aria-hidden />
        ) : (
          <FaBars className="size-5" aria-hidden />
        )}
      </button>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-2 bg-black/85 backdrop-blur-md transition-opacity duration-300 sm:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-7">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="text-2xl font-semibold tracking-wide text-white/95 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ACTIONS.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className={ACTION_BTN}>
              {label}
            </a>
          ))}
          <button type="button" onClick={openContact} className={ACTION_BTN}>
            Contact
          </button>
          <a href="#" onClick={() => setOpen(false)} className={ACTION_BTN}>
            Financing Available
          </a>
        </div>
      </div>

      {/* Desktop pill nav */}
      <nav
        className="absolute left-1/2 top-8 z-30 hidden w-max max-w-[calc(100vw-10rem)] -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-2 shadow-lg backdrop-blur-md sm:block sm:px-5 sm:py-2.5"
        aria-label="Primary"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 md:gap-x-4 lg:gap-x-5">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="relative inline-block cursor-pointer text-sm font-normal tracking-wide text-white/95 whitespace-nowrap transition-colors hover:text-white after:pointer-events-none after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right-side action buttons (desktop) — 2x2 gold grid */}
      <div className="absolute right-6 top-8 z-30 hidden grid-cols-2 gap-2.5 sm:grid lg:right-8">
        {ACTIONS.map(({ label, href }) => (
          <a key={label} href={href} className={ACTION_BTN}>
            {label}
          </a>
        ))}
        <button type="button" onClick={openContact} className={ACTION_BTN}>
          Contact
        </button>
        <a href="#" className={ACTION_BTN}>
          Financing Available
        </a>
      </div>

      {/* Contact modal */}
      <div
        aria-hidden={!contactOpen}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          contactOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          tabIndex={contactOpen ? 0 : -1}
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          aria-label="Close contact"
          onClick={() => setContactOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className={`absolute left-1/2 top-1/2 z-10 w-[min(92vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-neutral-950 p-6 shadow-2xl transition-transform duration-300 sm:p-8 ${
            contactOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <h2
              id="contact-modal-title"
              className="text-lg font-black uppercase tracking-wide text-white sm:text-xl"
            >
              Contact
            </h2>
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              Close
            </button>
          </div>
          <p className="mt-4 text-sm font-bold uppercase leading-relaxed tracking-wide text-white/95 sm:text-base">
            M.D. MOTIVATIONAL ENTERPRISES LLC – LOCATION 56 ST. NY. NY. 10019
          </p>
        </div>
      </div>
    </>
  );
}
