import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import HorizontalServices from "@/components/HorizontalServices";
import ScaleReveal from "@/components/ScaleReveal";
import About from "@/components/About";
import Process from "@/components/Process";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <HorizontalServices />
      <ScaleReveal />
      <About />
      <Process />
      <Numbers />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
