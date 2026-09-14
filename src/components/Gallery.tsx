"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useInView } from "@/lib/animations";

// Gallery data — each entry uses TWO COMPLETELY DIFFERENT Unsplash photos
// Before = matte/dull car, After = glossy/shiny car
const galleryItems = [
  {
    id: 1,
    title: "Full Detail — Sedan",
    description: "Complete interior & exterior transformation",
    // Different photos: matte gray car vs glossy black car
    before: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&q=70&auto=format&saturation=-15&brightness=-5",
    after: "https://images.unsplash.com/photo-1542362567-b07e543b866c?w=800&h=500&fit=crop&q=85&auto=format&saturation=+10&contrast=+5",
  },
  {
    id: 2,
    title: "Interior Deep Clean",
    description: "Full shampoo and leather conditioning",
    // Interior: dirty fabric vs clean leather
    before: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop&q=70&auto=format&saturation=-20&brightness=-10",
    after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&q=85",
  },
  {
    id: 3,
    title: "Ceramic Coating Prep",
    description: "Paint correction and surface prep work",
    // Dull paint vs mirror finish
    before: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop&q=70&auto=format&saturation=-20&brightness=-8",
    after: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop&q=85&auto=format&saturation=+15&contrast=+5",
  },
  {
    id: 4,
    title: "Exterior Restoration",
    description: "Wash, clay, polish, and sealant",
    // Faded/dusty vs clean/shiny
    before: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=500&fit=crop&q=70&auto=format&saturation=-20&brightness=-10",
    after: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=500&fit=crop&q=85&auto=format&saturation=+10",
  },
  {
    id: 5,
    title: "SUV Detail — Truck",
    description: "Full detail on a work truck",
    // Muddy vs clean truck
    before: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=500&fit=crop&q=70&auto=format&saturation=-25&brightness=-10",
    after: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=500&fit=crop&q=85",
  },
  {
    id: 6,
    title: "Wash & Wax Special",
    description: "Quick exterior refresh — wash, clay, wax",
    // Blue car — different before vs after
    before: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&q=70&auto=format&saturation=-20&brightness=-8",
    after: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=500&fit=crop&q=85&auto=format&saturation=+10",
  },
];

export default function Gallery() {
  const ref = useInView({ threshold: 0.1 });
  const [activeItem, setActiveItem] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [afterLoaded, setAfterLoaded] = useState(true);
  const [beforeLoaded, setBeforeLoaded] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);
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

  // Track loading per item
  useEffect(() => {
    setAfterLoaded(false);
    setBeforeLoaded(false);
  }, [activeItem]);

  const item = galleryItems[activeItem];

  // Preload all images for next item when switching
  const preloadNext = (index: number) => {
    const nextItem = galleryItems[index];
    new Image().src = nextItem.before;
    new Image().src = nextItem.after;
    setActiveItem(index);
    setSliderPos(50);
  };

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
            {!afterLoaded && (
              <div className="flex h-full items-center justify-center bg-gray-100">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#d4a053] border-t-transparent" />
              </div>
            )}
            <img
              src={item.after}
              alt="After — Clean"
              className={`h-full w-full object-cover transition-opacity duration-300 ${afterLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => {
                setAfterLoaded(true);
                if (beforeLoaded) setAllLoaded(true);
              }}
              draggable={false}
            />
          </div>

          {/* Before image (top layer — clipped) */}
          <div
            className="ba-slider-image"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            {!beforeLoaded && (
              <div className="flex h-full items-center justify-center bg-gray-200">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-400 border-t-transparent" />
              </div>
            )}
            <img
              src={item.before}
              alt="Before — Dirty"
              className={`h-full w-full object-cover transition-opacity duration-300 ${beforeLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => {
                setBeforeLoaded(true);
                if (afterLoaded) setAllLoaded(true);
              }}
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

        {/* Item selector — with preloading */}
        <div className="flex flex-wrap justify-center gap-3">
          {galleryItems.map((gi, i) => (
            <button
              key={gi.id}
              onClick={() => preloadNext(i)}
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
