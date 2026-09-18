import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { Topography } from "@/components/territory/Topography";

const territoryNotes = [
    {
        label: "Atmósfera",
        value: "Bosque húmedo · niebla · lluvia",
    },
    {
        label: "Materia",
        value: "Piedra · madera · agua",
    },
    {
        label: "Ritmo",
        value: "Explorar · detenerse · volver",
    },
];

export const Territory = () => {
    return (
        <section id="territorio" aria-labelledby="territory-title" className="relative overflow-hidden bg-volcanic py-28 text-mist md:py-44">
            <div aria-hidden="true" className="absolute right-[18%] top-[5%] h-[70%] w-[70%] opacity-80">
                <Topography />
            </div>

            <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
                <div className="grid gap-10 md:grid-cols-12 md:items-end">
                    <Reveal className="md:col-span-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay">02 / Territorio</p>
                    </Reveal>

                    <Reveal delay={0.06} className="md:col-span-7">
                        <h2 id="territory-title" className="max-w-5xl font-serif text-5xl leading-[0.88] tracking-[-0.04em] md:text-7xl lg:text-8xl">
                            El paisaje entra
                            <br />
                            <em>antes que nosotros.</em>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.12} className="md:col-span-2">
                        <p className="max-w-xs text-sm leading-relaxed text-mist/55">Selvática nace de una idea: diseñar alrededor del lugar, no colocar una experiencia encima de él.</p>
                    </Reveal>
                </div>

                <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12 md:gap-8">
                    <Reveal className="md:col-span-8">
                        <figure>
                            <div className="relative aspect-4/5 overflow-hidden bg-jungle sm:aspect-16/10">
                                <Image
                                    fill
                                    src="/assets/hero-mist.jpg"
                                    alt="Bosque húmedo cubierto de neblina"
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                    className="object-cover object-center"
                                />

                                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-volcanic/35 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 border-t border-r border-mist/20 bg-volcanic/75 px-5 py-4 backdrop-blur-sm">
                                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-mist/45">Campo / 01</p>
                                    <p className="mt-1 font-serif text-xl italic">Bruma</p>
                                </div>
                            </div>
                        </figure>
                    </Reveal>

                    <div className="flex flex-col justify-between md:col-span-4 md:pl-10">
                        <Reveal delay={0.08}>
                            <div className="max-w-md">
                                <p className="font-serif text-3xl leading-[1.05] tracking-[-0.02em] md:text-4xl">
                                    Arenal no funciona como fondo.
                                    <br />
                                    <em>Es el punto de partida.</em>
                                </p>

                                <p className="mt-7 text-[15px] leading-relaxed text-mist/55">
                                    La humedad, la piedra volcánica, la vegetación y el agua determinan la paleta, los materiales y el ritmo imaginado para la estancia.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.14} className="mt-16 md:mt-24">
                            <div className="border-t border-mist/15">
                                {territoryNotes.map((item) => (
                                    <div key={item.label} className="grid grid-cols-[6rem_1fr] gap-5 border-b border-mist/15 py-5">
                                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-mist/30">{item.label}</span>
                                        <span className="text-sm text-mist/70">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-12">
                    <Reveal delay={0.1} className="md:col-span-4 md:col-start-8">
                        <figure>
                            <div className="relative aspect-4/5 overflow-hidden bg-jungle">
                                <Image fill src="/assets/cascada.jpg" alt="Caída de agua dentro del bosque" sizes="(max-width: 768px) 100vw, 34vw" className="object-cover" />
                            </div>

                            <figcaption className="mt-3 flex items-center justify-between gap-4">
                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist/35">Campo / 02</span>
                                <span className="text-[10px] uppercase tracking-[0.18em] text-mist/60">Agua</span>
                            </figcaption>
                        </figure>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};