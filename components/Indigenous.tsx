'use client';

import { motion } from "motion/react"
import { Stat } from "./Stat"
import Image from "next/image"

export const Indigenous = () => {
    return (
        <section id="origen" className="bg-volcanic text-mist py-32 md:py-44 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
                    className="md:col-span-6 relative"
                >
                    <div className="aspect-4/5 overflow-hidden rounded-2xl ring-1 ring-mist/10">
                        <Image
                            src='/assets/indigena.jpg'
                            width={500}
                            height={600}
                            alt="Artesano indígena Maleku tallando una máscara"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 p-6 md:p-8 bg-clay text-mist rounded-2xl shadow-2xl"
                    >
                        <p className="font-serif italic text-xl md:text-2xl">Honrando el origen</p>
                        <p className="text-[10px] uppercase tracking-[0.25em] mt-2 opacity-80">
                            Pueblo Maleku
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
                    className="md:col-span-6 flex flex-col gap-8"
                >
                    <span className="text-clay font-medium tracking-[0.25em] uppercase text-xs">
                        Cultura Viva
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-balance leading-[1.05]">
                        Área Indígena & sabiduría <em>ancestral</em>
                    </h2>
                    <p className="text-mist/70 text-lg leading-relaxed max-w-[48ch] text-pretty">
                        Un espacio dedicado al aprendizaje y la preservación de las técnicas de artesanía,
                        ceremonias de cacao y cosmovisión de los pueblos originarios. No somos guías:
                        somos puente con los herederos legítimos.
                    </p>
                    <div className="grid grid-cols-3 gap-6 mt-4 max-w-md">
                        <Stat n="38°" l="Termales" />
                        <Stat n="1.2k" l="Metros canopy" />
                        <Stat n="∞" l="Pura vida" />
                    </div>
                    <a
                        href="#galeria"
                        className="inline-flex items-center gap-3 text-mist hover:text-clay transition-colors w-fit mt-4 text-sm uppercase tracking-[0.2em] font-medium"
                    >
                        Explorar tradición
                        <span className="w-10 h-px bg-current" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
