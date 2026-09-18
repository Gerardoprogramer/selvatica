import { BookingProvider } from "@/components/booking/BookingProvider";
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
        <BookingProvider>
            <a href="#contenido" className="bg-mist text-volcanic sr-only fixed top-4 left-4 z-100 px-4 py-3 text-sm focus:not-sr-only">
                Saltar al contenido
            </a>

            <Nav />

            <main id="contenido">
                <Hero />

                <Experiences />

                <Territory />

                <Gallery />

                <Rhythm />

                <CTA />
            </main>

            <Footer />
        </BookingProvider>
    );
}
