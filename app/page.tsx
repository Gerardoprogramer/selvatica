import { BookingPanel } from "@/components/BookingPanel";
import { CTA } from "@/components/CTA";
import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Rhythm } from "@/components/Rhythm";
import { Territory } from "@/components/Territory";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only fixed left-4 top-4 z-100 bg-volcanic px-4 py-3 text-sm text-mist focus:not-sr-only"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main id="contenido">
        <Hero />
        <BookingPanel />
        <Experiences />
        <Territory />
        <Gallery />
        <Rhythm />
        <CTA />
      </main>

      <Footer />
    </>
  );
}