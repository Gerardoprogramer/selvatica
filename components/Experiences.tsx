'use client'

import { motion } from "motion/react"
import { ExperienceCard } from "./ExperienceCard"

export const Experiences = () => {
    return (
        <section id="experiencias" className="py-32 md:py-44 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9 }}
                className="flex flex-col gap-3 mb-20"
            >
                <span className="text-clay font-medium tracking-[0.25em] uppercase text-xs">
                    La Inmersión
                </span>
                <h2 className="font-serif text-5xl md:text-7xl text-volcanic text-balance max-w-[20ch] leading-[1.02]">
                    Rituales de la <em>selva</em> y el agua
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                <ExperienceCard
                    className="md:col-span-7"
                    number="01"
                    title="Aguas Termales del Volcán"
                    desc="Minerales milenarios que emergen del núcleo de la tierra. Un descanso sagrado bajo el dosel."
                    img='/assets/termales.jpg'
                    ratio="aspect-[16/10]"
                />
                <ExperienceCard
                    className="md:col-span-5 md:mt-32"
                    number="02"
                    title="Dosel & Puentes Colgantes"
                    desc="Camine entre las nubes. Perspectiva aérea de la biodiversidad más vibrante del planeta."
                    img='/assets/puente.jpg'
                    ratio="aspect-[4/5]"
                />
                <ExperienceCard
                    className="md:col-span-5"
                    number="03"
                    title="El Mega Tobogán"
                    desc="420 metros de pura adrenalina tropical que termina en una laguna turquesa."
                    img='/assets/tobogan.jpg'
                    ratio="aspect-[4/5]"
                />
                <ExperienceCard
                    className="md:col-span-7 md:mt-24"
                    number="04"
                    title="Cascadas Secretas"
                    desc="Senderos privados que descienden hasta caídas de agua escondidas en la espesura."
                    img='/assets/cascada.jpg'
                    ratio="aspect-[16/10]"
                />
            </div>
        </section>
    )
}
