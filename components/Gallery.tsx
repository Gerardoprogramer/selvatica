'use client';

import { motion } from "motion/react"
import Image from "next/image"

const shots = [
    { src: '/assets/cascada.jpg', label: "Cascada Esmeralda", h: "h-[420px]" },
    { src: '/assets/gastronomia.jpg', label: "Restaurante Raíces", h: "h-[320px]" },
    { src: '/assets/termales.jpg', label: "Termal Obsidiana", h: "h-[360px]" },
    { src: '/assets/tobogan.jpg', label: "Tobogán Selvático", h: "h-[460px]" },
    { src: '/assets/puente.jpg', label: "Puentes Colgantes", h: "h-[380px]" },
    { src: '/assets/hero-mist.jpg', label: "Bosque Nuboso", h: "h-[340px]" },
];

export const Gallery = () => {
    return (
        <section id="galeria" className="py-32 md:py-44 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
            >
                <h2 className="font-serif text-5xl md:text-6xl text-volcanic max-w-xl leading-[1.05]">
                    Postales del <em>refugio</em>
                </h2>
                <p className="text-volcanic/60 max-w-sm">
                    Cada rincón es un capítulo: la niebla del amanecer, el vapor de las termales,
                    el silencio del bosque.
                </p>
            </motion.div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {shots.map((s, i) => (
                    <motion.figure
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.19, 1, 0.22, 1] }}
                        className={`break-inside-avoid overflow-hidden rounded-2xl relative group ${s.h}`}
                    >
                        <Image
                            width={500}
                            height={600}
                            src={s.src}
                            alt={s.label}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <figcaption className="absolute bottom-4 left-4 right-4 text-mist text-xs font-medium uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                            {s.label}
                        </figcaption>
                    </motion.figure>
                ))}
            </div>
        </section>
    )
}
