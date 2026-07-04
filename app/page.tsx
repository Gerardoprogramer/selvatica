import { BookingBar } from "@/components/BookingBar";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Experiences } from "@/components/Experiences";
import { Marquee } from "@/components/Marquee";
import { Indigenous } from "@/components/Indigenous";

export default function Home() {
  return (
    <div className="bg-mist text-volcanic">
        <Nav />
        <Hero />
        <BookingBar />
        <Experiences />
        <Marquee />
        <Indigenous />
    </div>
  );
}
