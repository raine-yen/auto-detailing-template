"use client";

import { useInView } from "@/lib/animations";
import { business } from "@/lib/data";

// Simple SVG icons — no external dependencies
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Hero() {
  const ref = useInView({ threshold: 0.1 });

  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden">
      {/* Background — dark gradient simulating a car detail photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
        {/* Decorative radial glow */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#d4a053]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#d4a053]/5 blur-3xl" />
        {/* Horizontal "shine" lines */}
        <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4a053" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
            </svg>
            Premium Auto Detailing in Los Angeles
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Your Car Deserves the{" "}
            <span className="text-[#d4a053]">Shine</span> It Deserved
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Expert detailing services that transform your vehicle inside and out.
            From a quick exterior wash to ceramic coating protection — we bring
            showroom-quality results to every job.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Free Quote
            </a>
            <a
              href="tel:+18005553328"
              className="btn-secondary"
            >
              <span className="mr-2"><PhoneIcon /></span>
              {business.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Satisfaction Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Same-Day Service Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
