import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";

import { RHYTHM_MOMENTS } from "@/content/rhythm";

export const Rhythm = () => {
    return (
        <section id="ritmo" aria-labelledby="rhythm-title" className="overflow-hidden bg-volcanic text-mist">
            <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40">
                <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay-ink">04 / El ritmo</p>
                    </div>

                    <div className="md:col-span-7">
                        <h2 id="rhythm-title" className="font-serif text-5xl leading-[0.88] tracking-[-0.04em] md:text-7xl lg:text-8xl">
                            Un día que no
                            <br />
                            necesita <em>prisa.</em>
                        </h2>
                    </div>

                    <div className="md:col-span-2">
                        <p className="max-w-xs text-sm leading-relaxed text-mist/50">La experiencia cambia con la luz, la temperatura y la energía del día.</p>
                    </div>
                </Reveal>
            </div>

            <div className="border-t border-mist/15">
                {RHYTHM_MOMENTS.map((moment, index) => {
                    const reversed = index % 2 !== 0;

                    return (
                        <article key={moment.number} className="border-b border-mist/15">
                            <div className="mx-auto grid max-w-[1600px] md:min-h-[70svh] md:grid-cols-12">
                                <Reveal className={`relative min-h-[52svh] overflow-hidden bg-jungle md:col-span-7 md:min-h-full ${reversed ? "md:order-2" : ""}`}>
                                    <Image fill src={moment.image} alt={moment.alt} sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />

                                    <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-volcanic/45 via-transparent to-volcanic/10" />

                                    <div className="absolute left-5 top-5 border border-mist/25 bg-volcanic/55 px-4 py-3 backdrop-blur-sm md:left-7 md:top-7">
                                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist/60">Momento / {moment.number}</span>
                                    </div>
                                </Reveal>

                                <Reveal delay={0.08} className={`flex flex-col justify-between px-6 py-10 md:col-span-5 md:px-12 md:py-14 lg:px-16 lg:py-16 ${reversed ? "md:order-1" : ""}`}>
                                    <div>
                                        <div className="flex items-baseline justify-between gap-6 border-b border-mist/15 pb-5">
                                            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-clay-ink">{moment.label}</span>
                                            <span className="font-serif text-4xl tracking-[-0.035em] text-mist md:text-5xl">{moment.time}</span>
                                        </div>

                                        <h3 className="mt-12 max-w-md font-serif text-4xl leading-[0.92] tracking-[-0.03em] md:text-5xl lg:text-6xl">{moment.title}</h3>

                                        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-mist/65 md:text-base">{moment.description}</p>
                                    </div>

                                    <div className="mt-14 border-l border-clay/50 pl-5 md:mt-20">
                                        <p className="max-w-sm text-sm leading-relaxed text-mist/45">{moment.detail}</p>
                                    </div>
                                </Reveal>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};