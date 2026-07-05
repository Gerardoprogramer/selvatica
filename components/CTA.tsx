'use client';

import { motion } from "motion/react"
import { WHATSAPP_URL } from "@/lib/constants/WHATSAPP_URL"
import Image from "next/image"

export const CTA = () => {
    return (
        <section className="relative py-32 md:py-44 px-6 overflow-hidden bg-jungle text-mist">
            <div className="absolute inset-0 opacity-30">
                <Image src='/assets/hero-mist.jpg'
                    alt="" height={500} width={1000}
                    className="w-full h-full object-cover"
                    priority
                    sizes="100vw"
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative max-w-4xl mx-auto text-center flex flex-col gap-10"
            >
                <span className="text-clay text-xs uppercase tracking-[0.3em]">Tu próxima aventura</span>
                <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
                    Reserva tu refugio <em>entre la niebla</em>
                </h2>
                <p className="text-mist/70 max-w-xl mx-auto text-lg">
                    Disponibilidad limitada a 14 cabañas. Atención personalizada por WhatsApp en menos de
                    10 minutos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a
                        href="#reservar"
                        className="bg-mist text-volcanic px-8 py-4 rounded-full text-sm font-medium hover:bg-clay hover:text-mist transition-colors"
                    >
                        Reservar ahora
                    </a>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-4 rounded-full text-sm font-medium ring-1 ring-mist/40 hover:bg-mist/10 transition-colors"
                    >
                        Hablar por WhatsApp
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
