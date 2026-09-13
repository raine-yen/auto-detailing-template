"use client";

import { useEffect, useRef, type CSSProperties } from "react";

// ---------------------------------------------------------------------------
// useInView — IntersectionObserver-based visibility hook
// ---------------------------------------------------------------------------
// Usage:
//   const ref = useInView({ threshold: 0.1, triggerOnce: true });
//   return <section ref={ref} className={ref.current ? "animate-in" : "opacity-0"}>
//
// Adds the class `animate-in` when the element scrolls into view.
// Respects `prefers-reduced-motion` — when enabled, the element is shown
// immediately with no animation.

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  /** Which animation to apply. Defaults to slide-up. */
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right";
}

const defaultOptions: UseInViewOptions = {
  threshold: 0.1,
  rootMargin: "0px",
  triggerOnce: true,
  animation: "slide-up",
};

// Map animation names to Tailwind classes
const animationClass: Record<string, string> = {
  "fade-in": "opacity-0",
  "slide-up": "opacity-0 translate-y-6",
  "slide-left": "opacity-0 translate-x-6",
  "slide-right": "opacity-0 -translate-x-6",
};

const animatedClass: Record<string, string> = {
  "fade-in": "opacity-100",
  "slide-up": "opacity-100 translate-y-0",
  "slide-left": "opacity-100 translate-x-0",
  "slide-right": "opacity-100 translate-x-0",
};

export function useInView(
  options: UseInViewOptions = defaultOptions,
): React.RefCallback<HTMLElement | null> {
  const merged = { ...defaultOptions, ...options };
  const elementRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // If user prefers reduced motion, show everything immediately
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      if (elementRef.current) {
        elementRef.current.classList.remove(
          animationClass[merged.animation!],
        );
        elementRef.current.classList.add(animatedClass[merged.animation!]);
      }
      return;
    }

    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(animationClass[merged.animation!]);
          el.classList.add(animatedClass[merged.animation!]);
          el.style.transition =
            "opacity 0.6s ease-out, transform 0.6s ease-out";

          if (merged.triggerOnce) {
            observer.unobserve(el);
          }
        }
      },
      { threshold: merged.threshold, rootMargin: merged.rootMargin },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [merged.animation, merged.threshold, merged.rootMargin, merged.triggerOnce]);

  return (el) => {
    elementRef.current = el;
  };
}
