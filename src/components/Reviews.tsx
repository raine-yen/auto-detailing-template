"use client";

import { useInView } from "@/lib/animations";
import { reviews } from "@/lib/data";

// Star component
function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#d4a053" : "none"}
          stroke="#d4a053"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
        </svg>
      ))}
    </span>
  );
}

// Quote icon
const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#d4a053" opacity="0.15" className="mb-4">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

export default function Reviews() {
  const ref = useInView({ threshold: 0.1 });

  return (
    <section id="reviews" className={""}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Section header */}
        <div ref={ref} className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d4a053]">
            Testimonials
          </p>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-lg">
            Don't take our word for it — hear from the car owners who trust
            Premier with their vehicles.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div key={review.name} className="card flex flex-col">
              <QuoteIcon />
              <Stars rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                {/* Avatar circle */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-charcoal">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Average rating callout */}
        <div className="mt-12 flex items-center justify-center gap-6 rounded-xl bg-gray-50 px-6 py-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-charcoal">4.9</p>
            <Stars rating={5} />
          </div>
          <div className="h-10 w-px bg-gray-200" />
          <div className="max-w-xs text-center">
            <p className="text-sm font-semibold text-charcoal">Based on 200+ reviews</p>
            <p className="text-xs text-gray-400">Google · Yelp · Facebook</p>
          </div>
        </div>
      </div>
    </section>
  );
}
