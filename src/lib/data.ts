// ============================================================================
// Pepe's Mobile Detail — Content Data
// ============================================================================
// Custom site for: Andrew Carrier — Pepe's Mobile Detail
// Location: 898 Herman Ave, Livermore, CA 94551
// Phone: (925) 518-5055
// Yelp: 5.0★ (117 reviews)
// ============================================================================
// v2.0.0 — Pepes update — livermore tri-valley

export const business = {
  name: "Pepe's Mobile Detail",
  tagline: "Detailing Done Right at Your Doorstep",
  phone: "(925) 518-5055",
  phoneLink: "+19255185055",
  email: "pepesmobiledetail@gmail.com",
  address: "Livermore, CA 94551",
  serviceArea: "Livermore, Pleasanton, Dublin, San Ramon, Alamo, Danville",
  hours: {
    monFri: "Monday – Friday: 8:00 AM – 6:00 PM",
    sat: "Saturday: 8:00 AM – 4:00 PM",
    sun: "Sunday: By Appointment",
  },
  owner: "Andrew Carrier",
  yelpRating: "5.0",
  yelpReviews: "117",
  priceTier: "$",
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

// Services data — tailored to Pepe's actual offerings + expansion opportunities
export const services = [
  {
    name: "Wash & Wax",
    price: "$75+",
    description:
      "Quick and affordable exterior hand wash with wax finish. Perfect for regular maintenance between full details.",
    features: [
      "Hand wash & dry",
      "Wheel & tire cleaning",
      "Carnauba wax finish",
      "Exterior glass clean",
      "Tire dressing",
    ],
    popular: false,
  },
  {
    name: "Interior Detail",
    price: "$99+",
    description:
      "Deep clean of every interior surface — vacuum, shampoo, condition, and protect. Make your interior feel new again.",
    features: [
      "Full vacuum & shampoo",
      "Seat & carpet cleaning",
      "Dashboard & console wipe",
      "Leather conditioning",
      "Door panel & trim detail",
      "Window interior",
    ],
    popular: false,
  },
  {
    name: "Full Detail",
    price: "$175+",
    description:
      "Our most popular package — complete interior and exterior detail for a showroom finish. Interior and exterior, done right.",
    features: [
      "Full exterior wash & wax",
      "Clay bar treatment",
      "Interior deep clean",
      "Leather cleaning & conditioning",
      "Engine bay wipe",
      "Floor mat steam clean",
    ],
    popular: true,
  },
  {
    name: "Premium Detail",
    price: "$275+",
    description:
      "The ultimate refresh — full detail plus paint correction, multi-stage polish, and protective sealant for lasting shine.",
    features: [
      "Everything in Full Detail",
      "One-stage paint correction",
      "Multi-stage polish",
      "Premium sealant coating",
      "Headlight restoration",
      "Odor elimination",
    ],
    popular: false,
  },
  {
    name: "Ceramic Coating",
    price: "$500+",
    description:
      "Professional-grade ceramic coating for long-lasting protection and incredible gloss. 2-year guarantee. (Coming Soon)",
    features: [
      "Paint decontamination",
      "Surface preparation",
      "2-year ceramic coat",
      "UV & chemical resistance",
      "Hydrophobic protection",
    ],
    popular: false,
    comingSoon: true,
  },
  {
    name: "Mobile Wash Specials",
    price: "$49+",
    description:
      "Simple, economical car wash specials delivered right to your driveway. Great for regular maintenance.",
    features: [
      "Exterior hand wash",
      "Wheel cleaning",
      "Window cleaning",
      "Tire shine",
      "Air freshener",
    ],
    popular: false,
  },
] as const;

// Reviews / testimonials — drawn from actual Yelp reviews
export const reviews = [
  {
    name: "Tesla Owner",
    rating: 5,
    quote:
      "Best detail job I've ever had done in my life. My Tesla is my pride and joy so I don't trust it to anyone, and Andrew treated it with such high care.",
    vehicle: "Tesla Model 3",
  },
  {
    name: "Local Neighbor",
    rating: 5,
    quote:
      "My family and I have used Andrew several times. Fantastic work, punctual, very polite and professional. Goes above and beyond. Highly recommend!",
    vehicle: "Toyota Tacoma",
  },
  {
    name: "Livermore Resident",
    rating: 5,
    quote:
      "He came to our address, spent like 3 or 4 hours, did an excellent job, got paid and left. Wonderful job on my Jeep.",
    vehicle: "Jeep Grand Cherokee",
  },
  {
    name: "Pleasanton Customer",
    rating: 5,
    quote:
      "Was able to come last minute and extremely friendly. He brings his own water and was able to wash my car while I was at work.",
    vehicle: "Honda Civic",
  },
] as const;

// About / value propositions
export const about = {
  headline: "Why Livermore Chooses Pepe's Mobile Detail",
  paragraphs: [
    "For years, Andrew Carrier has been Livermore's most trusted mobile detailer — and for good reason. With over 117 five-star Yelp reviews, he's earned a reputation for treating every vehicle like it's his own.",
    "No waiting in lines, no driving to a shop. Andrew comes to you — whether you're at work, out shopping, at the gym, or just relaxing at home. He brings everything he needs, including his own water, so you don't have to lift a finger.",
    "From sedans to SUVs, trucks to boats, motorcycles to RVs — Pepe's Mobile Detail handles it all. Family-oriented, honest pricing, and a personal touch you won't find at the big shops.",
  ],
  valueProps: [
    {
      title: "5.0★ on Yelp — 117 Reviews",
      description:
        "Livermore's highest-rated mobile detailer. Every customer leaves happy.",
    },
    {
      title: "We Come to You",
      description:
        "Fully mobile — we bring all equipment and our own water. You just point us to your driveway.",
    },
    {
      title: "Family-Oriented & Honest",
      description:
        "No upselling, no surprises. Andrew gives you an honest quote and delivers on his word.",
    },
    {
      title: "All Vehicles Welcome",
      description:
        "Cars, trucks, SUVs, boats, RVs, motorcycles — if it has wheels or a hull, we detail it.",
    },
  ],
  stats: [
    { value: "117+", label: "Five-Star Reviews" },
    { value: "5.0★", label: "Yelp Rating" },
    { value: "5+", label: "Years Serving Livermore" },
    { value: "100%", label: "Satisfaction Rate" },
  ],
} as const;

// FAQ items
export const faq = [
  {
    question: "How much does a full detail cost?",
    answer:
      "Full detail packages start at $175 for sedans and vary by vehicle size and condition. We also offer wash specials starting at $49 for regular maintenance. Call or text Andrew at (925) 518-5055 for a free, no-obligation quote.",
  },
  {
    question: "How long does a detailing appointment take?",
    answer:
      "A wash & wax takes about 1–2 hours. A full interior detail takes 2–3 hours. Our complete detail package typically takes 4–5 hours. We take our time to get it right — no rush jobs.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Nothing. Andrew brings everything including his own water and power. You just need a place to park your vehicle within easy reach of your driveway. If you have a water spigot nearby, that's a bonus but not required.",
  },
  {
    question: "Do you come to my location?",
    answer:
      "That's the whole point! We're fully mobile and serve Livermore, Pleasanton, Dublin, San Ramon, Alamo, and Danville. Just call or text to book and we'll come to your home or workplace.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve the Tri-Valley area: Livermore, Pleasanton, Dublin, San Ramon, Alamo, and Danville. Contact us if you're outside this area — we may still be able to help!",
  },
  {
    question: "Do you work on boats and RVs?",
    answer:
      "Yes! We detail cars, trucks, SUVs, motorcycles, boats, and RVs. Whether it's a seasonal prep before storage or a full restoration, give us a call.",
  },
  {
    question: "Can I book for a last-minute appointment?",
    answer:
      "Absolutely — Andrew often accommodates same-day and last-minute bookings. Call or text (925) 518-5055 to check availability.",
  },
  {
    question: "Do you offer ceramic coating?",
    answer:
      "Ceramic coating is coming soon! Andrew is expanding his services to include professional-grade ceramic coatings with a 2-year guarantee. Contact us to get on the notification list.",
  },
] as const;

// Contact form services dropdown options
export const contactServices = services.map((s) => s.name);

// Footer social links
export const socialLinks = [
  { name: "Facebook", url: "#", icon: "facebook" as const },
  { name: "Instagram", url: "#", icon: "instagram" as const },
  { name: "Yelp", url: "https://www.yelp.com/biz/pepes-mobile-detail-livermore", icon: "yelp" as const },
] as const;

// Service area ZIP codes
export const serviceAreas = [
  "Livermore, CA 94550",
  "Livermore, CA 94551",
  "Livermore, CA 94552",
  "Pleasanton, CA 94566",
  "Dublin, CA 94568",
  "San Ramon, CA 94583",
  "Alamo, CA 94507",
  "Danville, CA 94526",
];

// Vehicle types
export const vehicleTypes = [
  { name: "Sedan / Coupe", icon: "Car" },
  { name: "SUV", icon: "Truck" },
  { name: "Truck", icon: "Truck" },
  { name: "Motorcycle", icon: "Bicycle" },
  { name: "Boat", icon: "Anchor" },
  { name: "RV / Trailer", icon: "Van" },
];
