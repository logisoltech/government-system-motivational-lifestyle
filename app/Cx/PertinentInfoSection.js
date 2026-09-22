"use client";

import { useEffect, useState } from "react";

export default function PertinentInfoSection() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    setName("");
    setComment("");
  };

  return (
    <section
      id="pertinent-info"
      className="w-full scroll-mt-24 border-t border-neutral-100 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-neutral-900 sm:text-base md:text-lg">
          MORE PERTINENT INFORMATION WILL BE AVAILABLE ON THIS SITE. IF OR HOW
          MD LIFESTYLE AND PRODUCTS WOULD OR SHOULD CHANGE THEM.
        </p>
        <p className="mt-6 text-2xl font-black uppercase tracking-[0.12em] text-[#b91c1c] sm:text-3xl md:text-4xl lg:text-5xl">
          AFTER YOU DECIDE
        </p>
        <p className="mt-5 max-w-3xl text-sm font-bold uppercase leading-relaxed tracking-wide text-neutral-900 sm:text-base md:text-lg">
          WITH YOUR INSIGHT, COMMENTS AND SUGGESTIONS FOR BETTER GOVERNMENT AND
          SOCIETY.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 inline-flex min-w-[14rem] items-center justify-center rounded-xl bg-[#b91c1c] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#991b1b]"
        >
          Comment Your Ideas
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          aria-label="Close comment form"
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="comment-modal-title"
          className={`absolute left-1/2 top-1/2 z-10 w-[min(92vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl transition-transform duration-300 sm:p-8 ${
            open ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <h2
              id="comment-modal-title"
              className="text-lg font-black uppercase tracking-wide text-neutral-900 sm:text-xl"
            >
              Comment Your Ideas
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
            >
              Close
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-left">
            <div>
              <label
                htmlFor="comment-name"
                className="mb-1.5 block text-sm font-semibold text-neutral-800"
              >
                Name
              </label>
              <input
                id="comment-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="comment-text"
                className="mb-1.5 block text-sm font-semibold text-neutral-800"
              >
                Comment
              </label>
              <textarea
                id="comment-text"
                rows={5}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full resize-y rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20"
                placeholder="Share your ideas..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#b91c1c] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#991b1b]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
