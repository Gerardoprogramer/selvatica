import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { HiOutlineArrowDown } from "react-icons/hi2";

export const Hero = () => {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative min-h-svh overflow-hidden bg-volcanic text-mist"
        >
            <Image
                src="/assets/hero-mist.jpg"
                alt="Bosque cubierto por neblina en la región de Arenal"
                fill
                preload
                sizes="100vw"
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-linear-to-t from-volcanic via-volcanic/20 to-volcanic/15" />

            <div className="absolute inset-0 bg-linear-to-r from-volcanic/40 via-transparent to-transparent" />

            <div
                className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-6 pb-16 pt-36 md:px-10 md:pb-20"
            >
                <Reveal>
                    <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.28em] text-mist/70">
                        Arenal · Costa Rica
                    </p>
                </Reveal>

                <Reveal delay={0.08}>
                    <h1
                        id="hero-title"
                        className="max-w-5xl font-serif text-[clamp(4.2rem,10vw,9rem)] leading-[0.82] tracking-[-0.045em]"
                    >
                        El bosque
                        <br />
                        marca el <em>ritmo.</em>
                    </h1>
                </Reveal>

                <div
                    className="mt-10 grid gap-8 border-t border-mist/25 pt-6 md:grid-cols-12 md:items-end"
                >
                    <Reveal
                        delay={0.16}
                        className="md:col-span-5 md:col-start-7"
                    >
                        <p className="max-w-md text-base leading-relaxed text-mist/75 md:text-lg">
                            Una experiencia de hospitalidad construida alrededor
                            del bosque, el agua volcánica y la exploración.
                        </p>
                    </Reveal>

                    <Reveal
                        delay={0.22}
                        className="md:col-span-2 md:text-right"
                    >
                        <a
                            href="#experiencias"
                            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                        >
                            Explorar
                            <HiOutlineArrowDown
                                aria-hidden="true"
                                className="size-4"
                            />
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};