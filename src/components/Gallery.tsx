"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useInView } from "@/lib/animations";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Gallery data — each entry represents a before/after pair
const galleryItems = [
  {
    id: 1,
    title: "Paint Correction",
    description: "Multi-stage polish removing swirls and scratches",
  },
  {
    id: 2,
    title: "Interior Deep Clean",
    description: "Full shampoo and conditioning of leather surfaces",
  },
  {
    id: 3,
    title: "Ceramic Coating",
    description: "Mirror-like finish with hydrophobic protection",
  },
  {
    id: 4,
    title: "Engine Bay Detail",
    description: "Degrease, dress, and protect engine components",
  },
  {
    id: 5,
    title: "Exterior Restoration",
    description: "Wash, clay, polish, and sealant for faded paint",
  },
  {
    id: 6,
    title: "Wheel & Tire Detail",
    description: "Brake dust removal and tire dressing application",
  },
];

// Placeholder SVGs — simulating before (dirty) and after (clean) states
function BeforeImage({ className }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="260" fill="#3d3529" />
        {/* Dirty car silhouette */}
        <ellipse cx="200" cy="160" rx="140" ry="60" fill="#5a4d3c" opacity="0.5" />
        <path d="M120 140 Q140 90 200 85 Q260 90 280 140 Z" fill="#6b5e4d" />
        <rect x="160" y="95" width="80" height="30" rx="4" fill="#4a3f30" />
        {/* Dirt spots */}
        {[100, 150, 200, 250, 300, 120, 180, 230, 280, 160].map((cx, i) => (
          <circle key={i} cx={cx} cy={100 + (i % 3) * 30} r={2 + (i % 3) * 2} fill="#8a7b65" opacity="0.4" />
        ))}
        <text x="200" y="240" textAnchor="middle" fill="#a0926b" fontSize="12" fontFamily="sans-serif">Before</text>
      </svg>
    </div>
  );
}

function AfterImage({ className }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="260" fill="#1e293b" />
        {/* Clean car silhouette */}
        <ellipse cx="200" cy="160" rx="140" ry="60" fill="#3b82f6" opacity="0.15" />
        <path d="M120 140 Q140 90 200 85 Q260 90 280 140 Z" fill="#60a5fa" opacity="0.6" />
        <rect x="160" y="95" width="80" height="30" rx="4" fill="#3b82f6" opacity="0.3" />
        {/* Shine lines */}
        {[140, 180, 220, 260].map((cx, i) => (
          <line key={i} x1={cx} y1="90" x2={cx} y2="140" stroke="white" strokeWidth="1" opacity={0.1 - i * 0.015} />
        ))}
        <text x="200" y="240" textAnchor="middle" fill="#60a5fa" fontSize="12" fontFamily="sans-serif">After</text>
      </svg>
    </div>
  );
}

export default function Gallery() {
  const ref = useInView({ threshold: 0.1 });
  const [activeItem, setActiveItem] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Handle slider drag
  const handleMove = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      setSliderPos(pct);
    },
    [],
  );

  const handleMouseDown = useCallback(() => { isDragging.current = true; }, []);
  const handleMouseUp = useCallback(() => { isDragging.current = false; }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      handleMove(e.touches[0].clientX);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMove, handleMouseUp]);

  const item = galleryItems[activeItem];

  return (
    <section id="gallery" className={""}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Section header */}
        <div ref={ref} className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d4a053]">
            Our Work
          </p>
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            See the Difference
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-lg">
            Drag the slider to compare before and after results from our
            detailing work.
          </p>
        </div>

        {/* Before/After slider */}
        <div
          ref={containerRef}
          className="ba-slider mb-8 cursor-col-resize"
          style={{ height: "360px" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After image (bottom layer — always visible) */}
          <div className="ba-slider-image">
            <AfterImage />
          </div>

          {/* Before image (top layer — clipped) */}
          <div
            className="ba-slider-image"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <BeforeImage />
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-ml-1">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute left-4 top-4 rounded bg-charcoal/70 px-3 py-1 text-xs font-semibold text-white">
            Before
          </div>
          <div className="absolute right-4 top-4 rounded bg-gold/80 px-3 py-1 text-xs font-semibold text-white">
            After
          </div>
        </div>

        {/* Item selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {galleryItems.map((gi, i) => (
            <button
              key={gi.id}
              onClick={() => {
                setActiveItem(i);
                setSliderPos(50);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                i === activeItem
                  ? "bg-[#d4a053] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {gi.title}
            </button>
          ))}
        </div>

        {/* Active item info */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
          <p className="text-gray-500">{item.description}</p>
        </div>
      </div>
    </section>
  );
}
