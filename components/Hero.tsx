import Image from "next/image";

import {
    HiOutlineArrowDown,
    HiOutlineCalendarDays,
} from "react-icons/hi2";

import { BookingTrigger } from "@/components/booking/BookingTrigger";
import { Reveal } from "@/components/motion/Reveal";

export const Hero = () => {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative min-h-dvh overflow-hidden bg-volcanic text-mist"
        >
            <Image
                src="/assets/hero-mist.jpg"
                alt="Bosque húmedo cubierto por neblina en Costa Rica"
                fill
                preload
                sizes="100vw"
                className="object-cover object-center"
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-b from-volcanic/30 via-volcanic/5 to-volcanic/80"
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-r from-volcanic/35 via-transparent to-transparent"
            />

            <div
                className="relative mx-auto flex min-h-dvh max-w-[1600px] flex-col px-6 pb-8 pt-28 md:px-10 md:pb-10"
            >
                <div className="flex items-center justify-between">
                    <Reveal>
                        <p
                            className="font-mono text-[9px] uppercase tracking-[0.25em] text-mist/60"
                        >
                            Arenal · Costa Rica
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <p
                            className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-mist/45 sm:block"
                        >
                            Hospitality concept / 2026
                        </p>
                    </Reveal>
                </div>

                <div className="my-auto py-16">
                    <Reveal>
                        <h1
                            id="hero-title"
                            className="font-sans font-medium uppercase text-[clamp(4.5rem,15vw,14rem)] leading-[0.72] tracking-[-0.075em]"
                        >
                            Selvática
                        </h1>
                    </Reveal>

                    <div
                        className="mt-8 grid gap-8 md:grid-cols-12 md:items-start"
                    >
                        <Reveal
                            delay={0.08}
                            className="md:col-span-5 md:col-start-7"
                        >
                            <p
                                className="font-serif text-3xl leading-[1.05] tracking-[-0.02em] md:text-5xl"
                            >
                                Donde la aventura
                                <br />
                                <em>baja el volumen.</em>
                            </p>
                        </Reveal>

                        <Reveal
                            delay={0.14}
                            className="md:col-span-3 md:col-start-10"
                        >
                            <p
                                className="max-w-xs text-sm leading-relaxed text-mist/65"
                            >
                                Una experiencia conceptual de
                                hospitalidad construida alrededor
                                del bosque, el agua volcánica y
                                el movimiento.
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div
                    className="grid gap-6 border-t border-mist/20 pt-6 sm:grid-cols-2 sm:items-end"
                >
                    <a
                        href="#experiencias"
                        className="group flex w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em]"
                    >
                        Descubrir

                        <HiOutlineArrowDown
                            aria-hidden="true"
                            className="size-4 transition-transform group-hover:translate-y-1"
                        />
                    </a>

                    <BookingTrigger
                        label="Preparar estancia"
                        className="group flex w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] sm:justify-self-end"
                    />
                </div>
            </div>
        </section>
    );
};