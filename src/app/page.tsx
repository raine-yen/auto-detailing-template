import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <About />
      <FAQ />
      <ContactForm />
    </>
  );
}
