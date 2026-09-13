"use client";

import { useState, useRef } from "react";
import { useInView } from "@/lib/animations";
import { faq } from "@/lib/data";

// Chevron icon
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function FAQ() {
  const ref = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className={""}>
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        {/* Section header */}
        <div ref={ref} className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d4a053]">
            FAQ
          </p>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-lg">
            Got questions? We&apos;ve got answers. If you don&apos;t see what
            you&apos;re looking for, give us a call.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-sm font-semibold text-charcoal md:text-base">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-gray-400">
                  <ChevronIcon open={openIndex === i} />
                </span>
              </button>
              <div
                className={`accordion-content ${
                  openIndex === i ? "open" : ""
                }`}
              >
                <div className="px-6 pb-5 text-sm leading-relaxed text-gray-500">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
