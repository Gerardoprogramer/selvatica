import { BookingBar } from "@/components/BookingBar";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Experiences } from "@/components/Experiences";

export default function Home() {
  return (
    <div className="bg-mist text-volcanic">
        <Nav />
        <Hero />
        <BookingBar />
        <Experiences />
    </div>
  );
}
