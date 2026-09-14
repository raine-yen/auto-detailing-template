import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Gallery />
      <Reviews />
      <ServiceArea />
      <About />
      <FAQ />
      <ContactForm />
    </>
  );
}
