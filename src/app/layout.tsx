import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://premierautodetailing.com"),
  title: {
    default: `${business.name} — Premium Auto Detailing in Los Angeles`,
    template: `%s | ${business.name}`,
  },
  description:
    "Professional auto detailing services in Los Angeles. Full interior/exterior detailing, ceramic coating, paint correction, and fleet services. Get a free quote today.",
  keywords: [
    "auto detailing",
    "car detailing",
    "ceramic coating",
    "paint correction",
    "car wash",
    "interior detailing",
    "Los Angeles",
    "mobile detailing",
    "fleet detailing",
    "Premier Auto Detailing",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    title: `${business.name} — Premium Auto Detailing`,
    description:
      "Expert auto detailing services — from a quick wash to ceramic coating. Showroom results, every time.",
    url: "https://premierautodetailing.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} — Premium Auto Detailing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@premierdetail",
    title: `${business.name} — Premium Auto Detailing`,
    description:
      "Expert auto detailing services — from a quick wash to ceramic coating.",
  },
  alternates: {
    canonical: "https://premierautodetailing.com",
  },
};

// Structured data for LocalBusiness SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description:
    "Professional auto detailing services in Los Angeles offering full interior/exterior detailing, ceramic coating, paint correction, and fleet services.",
  url: "https://premierautodetailing.com",
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1234 Shine Boulevard, Suite 100",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
  sameAs: [
    "https://facebook.com/premierautodetailing",
    "https://instagram.com/premierautodetailing",
    "https://x.com/premierdetail",
    "https://youtube.com/@premierautodetailing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#d4a053] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
