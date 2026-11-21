import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Comparison } from "@/components/sections/comparison";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Marquee } from "@/components/sections/marquee";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Tools } from "@/components/sections/tools";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Tools />
        <Comparison />
        <Portfolio />
        <Journey />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
