"use client";

import { useInView } from "@/lib/animations";
import { serviceAreas, business } from "@/lib/data";
import { MapPin, Navigation } from "lucide-react";

export default function ServiceArea() {
  const ref = useInView({ threshold: 0.1 });

  return (
    <section id="service-area" className="">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div ref={ref} className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d4a053]">
            Service Area
          </p>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Serving the Tri-Valley
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-lg">
            Mobile auto detailing across the entire Tri-Valley. We come to your home or workplace.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <div key={area} className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-[#d4a053]" />
              <span className="text-sm font-medium text-charcoal">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Not sure if we cover your area? Call {business.phone} — we&apos;ll let you know.
          </p>
        </div>
      </div>
    </section>
  );
}
