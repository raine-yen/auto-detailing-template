"use client";

import { useInView } from "@/lib/animations";
import { business } from "@/lib/data";

// Simple SVG icons — no external dependencies
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4a053" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
  </svg>
);

export default function Hero() {
  const ref = useInView({ threshold: 0.1 });

  return (
    <section id="hero" className="relative min-h-[85vh] overflow-hidden">
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

      {/* Content — tighter spacing */}
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Yelp Badge — smaller, less gap */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-gold">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <span className="ml-1 font-medium">{business.yelpRating}★ on Yelp — {business.yelpReviews} Reviews</span>
          </div>

          {/* Headline — tighter spacing below */}
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {business.tagline}
          </h1>

          {/* Subheadline — smaller, less gap */}
          <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
            Livermore's top-rated mobile auto detailing. Andrew comes to your driveway with everything he needs — including his own water. No waiting in lines, no driving to a shop.
          </p>

          {/* CTAs — tighter gap */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Your Detail
            </a>
            <a
              href={`tel:${business.phoneLink}`}
              className="btn-secondary"
            >
              <span className="mr-2"><PhoneIcon /></span>
              {business.phone}
            </a>
          </div>

          {/* Trust badges — smaller, tighter */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              We Bring Our Own Water
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Same-Day Service
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Family-Owned & Trusted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
