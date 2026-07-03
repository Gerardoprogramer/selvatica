'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";


export const Hero = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            id="top"
            ref={ref}
            className="relative h-svh flex flex-col items-center justify-end pb-32 md:pb-40 overflow-hidden bg-jungle"
        >
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-mist.jpg"
                    alt="Bosque nuboso de Costa Rica al amanecer"
                    width={1920}
                    height={1280}
                    className="w-full h-[120%] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-jungle/40 via-jungle/30 to-jungle/80" />
            </motion.div>

            <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="block text-mist/70 text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] mb-8"
                >
                    La Fortuna · Arenal · Costa Rica
                </motion.span>

                <h1 className="font-serif text-mist text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] text-balance">
                    {"Donde la bruma".split(" ").map((w, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: 0.5 + i * 0.15, duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
                            className="inline-block mr-[0.25em]"
                        >
                            {w}
                        </motion.span>
                    ))}
                    <br />
                    <motion.span
                        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.95, duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
                        className="italic"
                    >
                        toca el alma
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="mt-8 text-mist/80 max-w-md mx-auto text-pretty text-base md:text-lg"
                >
                    Una inmersión profunda en el corazón salvaje de Costa Rica. Aventura, lujo ancestral y biodiversidad entre las copas de los árboles.
                </motion.p>
            </motion.div>


        </section>
    )
}
