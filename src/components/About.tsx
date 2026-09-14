"use client";

import { useInView } from "@/lib/animations";
import { about } from "@/lib/data";

// Star icon (5.0★ Rating)
const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" fill="#d4a053" stroke="none" />
  </svg>
);

// Truck icon (Mobile Service)
const TruckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 17h4V5H2v12h3" />
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

// Heart icon (Family-Oriented)
const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// Layers icon (All Vehicles)
const LayersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  "5.0★ on Yelp — 117 Reviews": <StarIcon />,
  "We Come to You": <TruckIcon />,
  "Family-Oriented & Honest": <HeartIcon />,
  "All Vehicles Welcome": <LayersIcon />,
};

export default function About() {
  const ref = useInView({ threshold: 0.1 });
  const textRef = useInView({ threshold: 0.05 });

  return (
    <section id="about" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Headline + text */}
        <div ref={ref} className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d4a053]">
            Our Story
          </p>
          <h2 className="mb-6 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            {about.headline}
          </h2>
          <div ref={textRef} className="mx-auto max-w-3xl space-y-4 text-gray-500 md:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {about.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#d4a053] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Value props */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.valueProps.map((prop) => (
            <div key={prop.title} className="card text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                {iconMap[prop.title] || <StarIcon />}
              </div>
              <h3 className="mb-2 text-lg font-bold text-charcoal">
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
