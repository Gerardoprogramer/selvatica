import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";

const shots = [
    {
        src: "/assets/cascada.jpg",
        label: "Cascada",
        className: "md:col-span-7",
        aspect: "aspect-16/10",
    },
    {
        src: "/assets/gastronomia.jpg",
        label: "Mesa",
        className: "md:col-span-5 md:mt-24",
        aspect: "aspect-4/5",
    },
    {
        src: "/assets/termales.jpg",
        label: "Agua volcánica",
        className: "md:col-span-5",
        aspect: "aspect-4/5",
    },
    {
        src: "/assets/tobogan.jpg",
        label: "Descenso",
        className: "md:col-span-7 md:mt-20",
        aspect: "aspect-16/10",
    },
    {
        src: "/assets/puente.jpg",
        label: "Altura",
        className: "md:col-span-6",
        aspect: "aspect-4/5",
    },
    {
        src: "/assets/hero-mist.jpg",
        label: "Bruma",
        className: "md:col-span-6 md:mt-28",
        aspect: "aspect-4/5",
    },
];

export const Gallery = () => {
    return (
        <section id="galeria" aria-labelledby="gallery-title" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-44">
            <Reveal className="mb-20 grid gap-8 md:grid-cols-12">
                <p className="text-clay font-mono text-[10px] tracking-[0.25em] uppercase md:col-span-3">03 / Archivo</p>

                <div className="md:col-span-7">
                    <h2 id="gallery-title" className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl">
                        Fragmentos de
                        <br />
                        <em>una estancia.</em>
                    </h2>

                    <p className="text-volcanic/55 mt-7 max-w-md text-sm leading-relaxed">
                        No una galería de instalaciones. Un registro de atmósferas, materia, movimiento y paisaje.
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-12">
                {shots.map((shot, index) => (
                    <Reveal key={shot.src} delay={(index % 2) * 0.06} className={shot.className}>
                        <figure>
                            <div className={`bg-stone relative overflow-hidden ${shot.aspect}`}>
                                <Image
                                    fill
                                    src={shot.src}
                                    alt={shot.label}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="ease-editorial object-cover transition-transform duration-1000 hover:scale-[1.015]"
                                />
                            </div>

                            <figcaption className="mt-3 flex items-center gap-4">
                                <span className="text-volcanic/35 font-mono text-[9px]">{String(index + 1).padStart(2, "0")}</span>

                                <span className="text-volcanic/60 text-[10px] tracking-[0.18em] uppercase">{shot.label}</span>
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};
