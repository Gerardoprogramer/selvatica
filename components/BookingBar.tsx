'use client'

import { motion } from "motion/react"
import { BookingField } from "./BookingField"
import { Divider } from "./Divider"
import { WHATSAPP_URL } from "@/lib/constants/WHATSAPP_URL"

export const BookingBar = () => {
    return (
        <div id="reservar" className="relative z-30 mx-auto max-w-5xl px-4 -mt-16 md:-mt-20">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
                className="bg-mist/95 backdrop-blur-xl rounded-2xl ring-1 ring-volcanic/5 shadow-[0_30px_80px_-30px_rgba(6,26,20,0.35)] p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2"
            >
                <BookingField label="Llegada" type="date" defaultValue="2026-07-12" />
                <Divider />
                <BookingField label="Salida" type="date" defaultValue="2026-07-18" />
                <Divider />
                <BookingField label="Huéspedes" type="select" />
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full md:w-auto bg-jungle text-mist px-8 py-4 rounded-xl font-medium text-sm hover:bg-clay transition-colors text-center"
                >
                    Ver Disponibilidad
                </a>
            </motion.div>
        </div>
    )
}
