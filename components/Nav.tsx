"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
    { label: "Experiencias", href: "#experiencias" },
    { label: "Origen", href: "#origen" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
];

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const nextScrolled = window.scrollY > 60;

            setScrolled((current) =>
                current === nextScrolled ? current : nextScrolled
            );
        };

        onScroll();

        window.addEventListener("scroll", onScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <motion.nav
            aria-label="Navegación principal"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
            }}
            className={`fixed inset-x-0 top-0 z-50 border-b px-6 py-5 md:px-10 transition-[background-color,color,border-color] duration-500
                ${scrolled
                    ? "border-volcanic/5 bg-mist/85 text-volcanic backdrop-blur-xl"
                    : "border-transparent text-mist"
                }
            `}
        >
            <div className="flex items-center justify-between">
                <a
                    href="#top"
                    aria-label="Selvática — Volver al inicio"
                    className="font-serif text-2xl italic tracking-tight md:text-3xl"
                >
                    Selvática
                </a>

                <div className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.22em] md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-offset-4"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-5">
                    <button
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="text-[10px] font-medium uppercase tracking-[0.22em] md:hidden"
                    >
                        {menuOpen ? "Cerrar" : "Menú"}
                    </button>

                    <a
                        href="#reservar"
                        className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] md:text-[11px]"
                    >
                        Reservar

                        <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </a>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.35,
                            ease: [0.19, 1, 0.22, 1],
                        }}
                        className="overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-5 pb-3 pt-8">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="flex items-baseline gap-4 border-t border-current/10 pt-4"
                                >
                                    <span className="font-mono text-[9px] opacity-45">
                                        0{index + 1}
                                    </span>

                                    <span className="font-serif text-3xl italic">
                                        {item.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};