import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import IsoCertification from "./components/IsoCertification";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <IsoCertification />
      <Partners />
      <Services />
      <HowItWorks />
      <FAQ />
      <CTA />
    </main>
  );
}
