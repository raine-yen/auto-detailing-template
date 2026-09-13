// ============================================================================
// Premier Auto Detailing — Content Data
// ============================================================================
// This file is the single source of truth for all site content.
// Edit here to customize the template for any client.
// ============================================================================

export const business = {
  name: "Premier Auto Detailing",
  tagline: "Your Car Deserves the Shine It Deserved",
  phone: "800-555-DETAIL",
  phoneFormatted: "(800) 555-DETAI1",
  email: "info@premierautodetailing.com",
  address: "1234 Shine Boulevard, Suite 100, Los Angeles, CA 90001",
  hours: {
    monFri: "Monday – Friday: 7:00 AM – 6:00 PM",
    sat: "Saturday: 8:00 AM – 4:00 PM",
    sun: "Sunday: Closed",
  },
} as const;

// Navigation links
export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

// Services data
export const services = [
  {
    name: "Exterior Wash",
    price: "$49",
    description:
      "Hand wash, dry, and tire shine. A thorough exterior clean that leaves your vehicle spotless.",
    features: [
      "Hand wash & dry",
      "Wheel cleaning",
      "Tire shine",
      "Window cleaning",
    ],
  },
  {
    name: "Full Interior Detail",
    price: "$99",
    description:
      "Deep cleaning of every interior surface — vacuum, shampoo, condition, and protect.",
    features: [
      "Vacuum & shampoo",
      "Dashboard & console wipe",
      "Leather conditioning",
      "Glass interior",
    ],
  },
  {
    name: "Complete Detail",
    price: "$199",
    description:
      "Our most popular package — full interior and exterior detail for a showroom finish.",
    features: [
      "Full exterior wash & wax",
      "Interior deep clean",
      "Engine bay wipe",
      "Clay bar treatment",
    ],
  },
  {
    name: "Ceramic Coating",
    price: "$499",
    description:
      "Professional-grade ceramic coating for long-lasting protection and an incredible mirror shine.",
    features: [
      "Paint decontamination",
      "Surface preparation",
      "2-year ceramic coat",
      "UV & chemical resistance",
    ],
  },
  {
    name: "Paint Correction",
    price: "$399",
    description:
      "Multi-stage machine polish to remove swirl marks, scratches, and oxidation.",
    features: [
      "One-stage or multi-stage",
      "Swirl removal",
      "Gloss enhancement",
      "Protective sealant",
    ],
  },
  {
    name: "Fleet Services",
    price: "Custom",
    description:
      "Tailored maintenance plans for business fleets — sedans to trucks, scheduled or on-call.",
    features: [
      "Custom scheduling",
      "Volume discounts",
      "Dedicated account manager",
      "Mobile service available",
    ],
  },
] as const;

// Reviews / testimonials
export const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    quote:
      "I've tried dozens of detailers over the years. Premier is the only shop I trust with my collection. The attention to detail is unmatched.",
    vehicle: "BMW M4 Competition",
  },
  {
    name: "Sarah L.",
    rating: 5,
    quote:
      "They transformed my 8-year-old sedan into something that looks brand new. The ceramic coating is the real deal — water just beads right off.",
    vehicle: "Honda Accord 2018",
  },
  {
    name: "James R.",
    rating: 5,
    quote:
      "Professional from start to finish. Fair pricing, great communication, and the results speak for themselves. My truck has never looked better.",
    vehicle: "Ford F-150 Raptor",
  },
  {
    name: "Priya K.",
    rating: 4,
    quote:
      "Excellent interior work — they got out stains I thought were permanent. Very thorough and the team was super friendly. Will be coming back monthly.",
    vehicle: "Mercedes GLE 450",
  },
] as const;

// About / value propositions
export const about = {
  headline: "Why Choose Premier Auto Detailing?",
  paragraphs: [
    "For over five years, Premier Auto Detailing has been the trusted choice for car enthusiasts and everyday drivers alike. We treat every vehicle — whether a daily commuter or a weekend collector's item — with the same level of care and precision.",
    "Our team is trained in the latest detailing techniques and uses only premium, eco-friendly products that are tough on grime but safe for your paint and the planet.",
  ],
  valueProps: [
    {
      title: "Licensed & Insured",
      description:
        "Full liability coverage and proper licensing for your peace of mind. We follow industry standards on every job.",
    },
    {
      title: "5+ Years Experience",
      description:
        "Our certified detailers bring years of hands-on experience, staying current with evolving techniques and products.",
    },
    {
      title: "Eco-Friendly Products",
      description:
        "We use biodegradable, non-toxic products that deliver professional results without harming the environment.",
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "Not happy? We'll re-do the work at no charge. Your satisfaction is our priority — no strings attached.",
    },
  ],
  stats: [
    { value: "2,500+", label: "Vehicles Detailed" },
    { value: "4.9★", label: "Average Rating" },
    { value: "5+", label: "Years in Business" },
    { value: "100%", label: "Satisfaction Rate" },
  ],
} as const;

// FAQ items
export const faq = [
  {
    question: "How much does a full detail cost?",
    answer:
      "Full detail packages start at $99 for interior-only and $199 for our complete interior and exterior package. Final pricing depends on vehicle size and condition. Contact us for a free, no-obligation quote.",
  },
  {
    question: "How long does a detailing appointment take?",
    answer:
      "A standard exterior wash takes about 45 minutes. A full interior detail takes 2–3 hours. Our complete detail package typically takes 4–5 hours. Ceramic coating appointments may require a full day.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes — we recommend booking at least 48 hours ahead, especially on weekends. Walk-ins are welcome when capacity allows, but we can't guarantee availability without an appointment.",
  },
  {
    question: "Do you offer mobile detailing — do you come to me?",
    answer:
      "Absolutely. We offer on-site mobile detailing for most services. A small travel fee may apply depending on your location. Call us to confirm mobile availability in your area.",
  },
  {
    question: "What products do you use on my vehicle?",
    answer:
      "We exclusively use premium, pH-balanced, and eco-friendly products from industry leaders like Gtechniq, CarPro, and Koch Chemie. Everything is safe for all paint types, interiors, and wheels.",
  },
  {
    question: "How often should I get my car detailed?",
    answer:
      "For best results, we recommend a maintenance detail every 3–4 months. Ceramic coated vehicles benefit from a quick detail every 6 months to maintain the hydrophobic layer. Daily drivers in harsh climates may benefit from more frequent visits.",
  },
] as const;

// Contact form services dropdown options
export const contactServices = services.map((s) => s.name);

// Footer social links
export const socialLinks = [
  { name: "Facebook", url: "https://facebook.com/premierautodetailing", icon: "facebook" as const },
  { name: "Instagram", url: "https://instagram.com/premierautodetailing", icon: "instagram" as const },
  { name: "Twitter / X", url: "https://x.com/premierdetail", icon: "twitter" as const },
  { name: "YouTube", url: "https://youtube.com/@premierautodetailing", icon: "youtube" as const },
] as const;
