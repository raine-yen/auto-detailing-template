"use client";

import { useInView } from "@/lib/animations";
import { services } from "@/lib/data";

// Checkmark icon component
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Sparkle icon for the "popular" badge
const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4a053" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
  </svg>
);

export default function Services() {
  const ref = useInView({ threshold: 0.1 });
  const popularIndex = services.findIndex((s) => s.popular);

  return (
    <section id="services" className="">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Section header */}
        <div ref={ref} className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d4a053]">
            Our Packages
          </p>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Professional Detailing Services
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-lg">
            From a quick wash & wax to a full restoration — honest pricing, no surprises. Andrew comes to you.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const isPopular = i === popularIndex;
            const isComingSoon = (service as any).comingSoon;
            return (
              <div
                key={service.name}
                className={`service-card relative flex flex-col ${
                  isPopular
                    ? "border-2 border-[#d4a053] shadow-md"
                    : ""
                } ${isComingSoon ? "opacity-70" : ""}`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-[#d4a053] px-3 py-1 text-xs font-semibold text-white">
                    <SparkleIcon /> Most Popular
                  </div>
                )}

                {/* Coming soon badge */}
                {isComingSoon && (
                  <div className="absolute -top-3 right-3 rounded-full bg-gray-400 px-3 py-1 text-xs font-semibold text-white">
                    Coming Soon
                  </div>
                )}

                {/* Header */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/10 rounded-xl" />

                <div className="relative">
                  <h3 className="mb-2 text-xl font-bold text-charcoal">
                    {service.name}
                    {isComingSoon && <span className="ml-2 text-xs font-normal text-gray-400">(coming soon)</span>}
                  </h3>

                  {/* Price */}
                  <p className="mb-3">
                    <span
                      className={`text-3xl font-bold ${
                        isPopular ? "text-[#d4a053]" : "text-charcoal"
                      }`}
                    >
                      {service.price}
                    </span>
                    <span className="text-gray-400"> starting</span>
                  </p>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-6 flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`mt-auto block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-200 ${
                      isPopular
                        ? "bg-[#d4a053] text-white hover:bg-[#c4913f]"
                        : "bg-gray-50 text-charcoal hover:bg-gray-100"
                    }`}
                  >
                    {isComingSoon ? "Get Notified" : `Book ${service.name}`}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
