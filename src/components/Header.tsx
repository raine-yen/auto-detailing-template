"use client";

import * as React from "react";
import { Link as LinkIcon } from "lucide-react";
import { business, navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation
  const handleNav = React.useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={`header transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="logo-text flex items-center gap-1"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 md:hidden"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="15" stroke="#d4a053" strokeWidth="2" />
            <path
              d="M10 18c0-4 3-7 6-8 3 1 6 4 6 8"
              stroke="#d4a053"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="16" cy="12" r="2" fill="#d4a053" />
          </svg>
          <span>Pepe's <span className="logo-accent">Mobile Detail</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button (desktop) */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#contact");
          }}
          className="btn-primary hidden md:inline-flex"
        >
          Get Free Quote
        </a>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <nav className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="nav-link py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
              className="btn-primary mt-2"
            >
              Get Free Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
