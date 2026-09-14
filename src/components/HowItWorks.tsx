"use client";

import { useInView } from "@/lib/animations";
import { business } from "@/lib/data";

// Step icon
const StepIcon = ({ num }: { num: number }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a053] text-lg font-bold text-white">
    {num}
  </div>
);

export default function HowItWorks() {
  const ref = useInView({ threshold: 0.1 });

  const steps = [
    {
      title: "Call or Text",
      description: `Reach out at ${business.phone} or use the form below. Tell us your vehicle type and what you need.`,
    },
    {
      title: "We Come to You",
      description: "Andrew brings all equipment and his own water to your driveway — home or work.",
    },
    {
      title: "You Relax",
      description: "While he works, you keep going about your day. Your car comes back looking brand new.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div ref={ref} className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d4a053]">
            How It Works
          </p>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Three Simple Steps
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-lg">
            No waiting in lines, no driving to a shop. Just call, sit back, and let us handle the rest.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4">
                <StepIcon num={i + 1} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-charcoal">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
