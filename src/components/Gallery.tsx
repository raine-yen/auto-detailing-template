"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useInView } from "@/lib/animations";

// Gallery data — before/after pairs with real Unsplash images
const galleryItems = [
  {
    id: 1,
    title: "Full Detail — Sedan",
    description: "Complete interior & exterior transformation",
    before: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop&q=80&auto=format&brightness=-15&saturation=-20",
    after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Interior Deep Clean",
    description: "Full shampoo and leather conditioning",
    before: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&q=80&auto=format&brightness=-10&saturation=-30&contrast=+10",
    after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Ceramic Coating Prep",
    description: "Paint correction and surface prep work",
    before: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&q=80&auto=format&brightness=-15&saturation=-25",
    after: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Exterior Restoration",
    description: "Wash, clay, polish, and sealant",
    before: "https://images.unsplash.com/photo-1542362567-b07e543b866c?w=800&h=500&fit=crop&q=80&auto=format&brightness=-10&saturation=-20&contrast=+10",
    after: "https://images.unsplash.com/photo-1542362567-b07e543b866c?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 5,
    title: "SUV Detail — Truck",
    description: "Full detail on a work truck",
    before: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&q=80&auto=format&brightness=-10&saturation=-20",
    after: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Wash & Wax Special",
    description: "Quick exterior refresh — wash, clay, wax",
    before: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=500&fit=crop&q=80&auto=format&brightness=-10&saturation=-25&contrast=+5",
    after: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=500&fit=crop&q=80",
  },
];

export default function Gallery() {
  const ref = useInView({ threshold: 0.1 });
  const [activeItem, setActiveItem] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

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

  // Reset loading when switching items
  useEffect(() => {
    setIsLoading(true);
  }, [activeItem]);

  const item = galleryItems[activeItem];

  return (
    <section id="gallery" className="">
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
            Drag the slider to compare before and after results. Every vehicle gets the same care — from sedans to SUVs, trucks, boats, and motorcycles.
          </p>
        </div>

        {/* Before/After slider */}
        <div
          ref={containerRef}
          className="ba-slider mb-8 cursor-col-resize select-none"
          style={{ height: "400px" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After image (bottom layer — always visible) */}
          <div className="ba-slider-image">
            {isLoading && (
              <div className="flex h-full items-center justify-center bg-gray-100">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#d4a053] border-t-transparent" />
              </div>
            )}
            <img
              src={item.after}
              alt="After — Clean"
              className="h-full w-full object-cover"
              onLoad={() => setIsLoading(false)}
              draggable={false}
            />
          </div>

          {/* Before image (top layer — clipped) */}
          <div
            className="ba-slider-image"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src={item.before}
              alt="Before — Dirty"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 z-10 w-1 cursor-col-resize bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
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
          <div className="absolute left-4 top-4 z-10 rounded bg-charcoal/70 px-3 py-1 text-xs font-semibold text-white">
            Before
          </div>
          <div className="absolute right-4 top-4 z-10 rounded bg-[#d4a053]/80 px-3 py-1 text-xs font-semibold text-white">
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
