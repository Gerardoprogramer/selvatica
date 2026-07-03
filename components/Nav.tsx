'use client';

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Nav = () => {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-colors duration-500 ${scrolled
                ? "bg-mist/85 backdrop-blur-xl text-volcanic border-b border-volcanic/5"
                : "text-mist"
                }`}
        >
            <a href="#top" className="font-serif italic text-2xl md:text-3xl tracking-tight">
                Selvática
            </a>
            <div className="hidden md:flex gap-10 text-[11px] font-medium uppercase tracking-[0.22em]">
                <a href="#experiencias" className="hover:opacity-60 transition-opacity">Experiencias</a>
                <a href="#origen" className="hover:opacity-60 transition-opacity">Origen</a>
                <a href="#galeria" className="hover:opacity-60 transition-opacity">Galería</a>
                <a href="#contacto" className="hover:opacity-60 transition-opacity">Contacto</a>
            </div>
            <a
                href="#reservar"
                className={`text-xs font-medium px-5 py-2.5 rounded-full ring-1 transition-colors ${scrolled
                    ? "bg-volcanic text-mist ring-volcanic hover:bg-clay hover:ring-clay"
                    : "bg-mist text-volcanic ring-mist hover:bg-transparent hover:text-mist"
                    }`}
            >
                Reservar
            </a>
        </motion.nav>
    )
}
