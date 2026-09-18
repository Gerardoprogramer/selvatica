import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";

export const Territory = () => {
    return (
        <section
            id="territorio"
            aria-labelledby="territory-title"
            className="overflow-hidden bg-volcanic py-28 text-mist md:py-44"
        >
            <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:items-center md:px-10">
                <Reveal className="md:col-span-7">
                    <div className="relative aspect-4/5 overflow-hidden md:aspect-5/6">
                        <Image
                            fill
                            src="/assets/indigena.jpg"
                            alt="Detalle de naturaleza y materia inspirado en el territorio de Arenal"
                            sizes="(max-width: 768px) 100vw, 58vw"
                            className="object-cover"
                        />
                    </div>
                </Reveal>

                <div className="md:col-span-4 md:col-start-9">
                    <Reveal>
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay">
                            02 / Territorio
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h2
                            id="territory-title"
                            className="mt-8 font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl"
                        >
                            El paisaje no es
                            <br />
                            <em>decoración.</em>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.14}>
                        <p className="mt-8 max-w-md text-base leading-relaxed text-mist/65">
                            Selvática parte de una idea sencilla: el diseño
                            debe adaptarse al territorio. Bosque húmedo,
                            piedra volcánica, agua y altura definen el ritmo
                            de cada espacio.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="mt-12 divide-y divide-mist/15 border-y border-mist/15">
                            {[
                                ["Materia", "Piedra · madera · agua"],
                                ["Paisaje", "Bosque húmedo"],
                                ["Ritmo", "Exploración · pausa"],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="grid grid-cols-3 gap-6 py-5"
                                >
                                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist/35">
                                        {label}
                                    </span>

                                    <span className="col-span-2 text-sm text-mist/80">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};