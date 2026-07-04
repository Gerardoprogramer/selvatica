import { LeafyGreen } from "lucide-react";

const items = [
    "Canopy de hierro",
    "Termales volcánicas",
    "Cascadas secretas",
    "Tobogán selvático",
    "Cocina kilómetro cero",
    "Refugio de Guatusos",
    "Cultura Maleku",
    "Senderos ancestrales",
];

export const Marquee = () => {
    return (
        <section className="py-12 border-y border-volcanic/10 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="flex items-center font-serif italic text-3xl md:text-5xl text-volcanic/80"
                    >
                        {item}
                        <span className="text-clay mx-6">
                            <LeafyGreen
                                className="h-7 w-7 shrink-0 text-clay md:h-9 md:w-9"
                                strokeWidth={1.5} />
                        </span>
                    </span>
                ))}
            </div>
        </section>
    )
}
