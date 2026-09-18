import Image from "next/image";

import { BookingCTA } from "@/components/cta/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";

export const CTA = () => {
    return (
        <section aria-labelledby="cta-title" className="overflow-hidden bg-mist text-volcanic">
            <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-44">
                <div className="grid gap-y-16 md:grid-cols-12 md:gap-x-10">
                    <Reveal className="md:col-span-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay">05 / Estancia</p>
                    </Reveal>

                    <Reveal delay={0.06} className="md:col-span-3 md:col-start-10">
                        <p className="max-w-xs text-sm leading-relaxed text-volcanic/55">
                            Una propuesta conceptual de hospitalidad donde paisaje, movimiento y descanso forman parte de la misma experiencia.
                        </p>
                    </Reveal>

                    <Reveal delay={0.08} className="md:col-span-8 md:mt-12">
                        <h2 id="cta-title" className="max-w-5xl font-serif text-6xl leading-[0.84] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
                            Cambiá ruido
                            <br />
                            por <em>bosque.</em>
                        </h2>

                        <div className="mt-12 md:mt-16">
                            <BookingCTA />
                        </div>
                    </Reveal>

                    <Reveal delay={0.14} className="md:col-span-4 md:mt-32">
                        <figure>
                            <div className="relative aspect-3/4 overflow-hidden bg-stone">
                                <Image
                                    fill
                                    src="/assets/termales.jpg"
                                    alt="Agua termal rodeada por bosque tropical"
                                    sizes="(max-width: 768px) 100vw, 34vw"
                                    className="object-cover"
                                />

                                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-volcanic/30 via-transparent to-transparent" />
                            </div>

                            <figcaption className="mt-4 flex items-center justify-between border-t border-volcanic/15 pt-3">
                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-volcanic/35">Última luz</span>
                                <span className="text-[10px] uppercase tracking-[0.18em] text-volcanic/45">Arenal · Costa Rica</span>
                            </figcaption>
                        </figure>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};