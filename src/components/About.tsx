"use client";

import { useInView } from "@/lib/animations";
import { about } from "@/lib/data";

// Shield icon (Licensed & Insured)
const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Award icon (Experience)
const AwardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

// Leaf icon (Eco-Friendly)
const LeafIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

// CheckCircle icon (Satisfaction)
const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const iconMap = {
  "Licensed & Insured": <ShieldIcon />,
  "5+ Years Experience": <AwardIcon />,
  "Eco-Friendly Products": <LeafIcon />,
  "Satisfaction Guaranteed": <CheckCircleIcon />,
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
                {iconMap[prop.title as keyof typeof iconMap]}
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
