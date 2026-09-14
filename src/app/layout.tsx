import type { Metadata } from "next";
import { business, socialLinks } from "@/lib/data";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://pepesmobiledetail.com"),
  title: {
    default: `${business.name} — Mobile Auto Detailing in Livermore, CA`,
    template: `%s | ${business.name}`,
  },
  description:
    `Pepe's Mobile Detail — Livermore, CA's top-rated mobile auto detailing service. 5.0★ on Yelp (117 reviews). We come to you for interior, exterior, full detail, and ceramic coating. Serving the Tri-Valley. Call ${business.phone}.`,
  keywords: [
    "mobile detailing",
    "car detailing",
    "auto detailing Livermore",
    "ceramic coating Livermore",
    "mobile car wash",
    "interior detailing",
    "exterior detailing",
    "Tri-Valley",
    "Pleasanton",
    "Dublin",
    "San Ramon",
    "Pepe's Mobile Detail",
    "Andrew Carrier",
    "Tesla detailing Livermore",
    "boat detailing",
    "RV detailing",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    title: `${business.name} — Mobile Auto Detailing in Livermore`,
    description:
      `Livermore's top-rated mobile detailing. 117 five-star reviews. We come to you — cars, trucks, boats, RVs. Call ${business.phone}.`,
    url: "https://pepesmobiledetail.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} — Mobile Auto Detailing in Livermore, CA`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — Mobile Auto Detailing in Livermore`,
    description:
      "Livermore's #1 rated mobile detailing. 117 five-star Yelp reviews. We come to you.",
  },
  alternates: {
    canonical: "https://pepesmobiledetail.com",
  },
};

// Structured data for LocalBusiness SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description:
    `Mobile auto detailing in Livermore, CA. Interior, exterior, full detail, ceramic coating. Serving Tri-Valley: Livermore, Pleasanton, Dublin, San Ramon, Alamo, Danville.`,
  url: "https://pepesmobiledetail.com",
  telephone: business.phoneLink,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "898 Herman Ave",
    addressLocality: "Livermore",
    addressRegion: "CA",
    postalCode: "94551",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.6879,
    longitude: -121.7682,
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
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: business.priceTier,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.yelpRating,
    reviewCount: business.yelpReviews,
  },
  sameAs: socialLinks.map((s) => s.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
