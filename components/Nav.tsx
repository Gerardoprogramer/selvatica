"use client";

import { useEffect, useState } from "react";

import {
    AnimatePresence,
    m,
} from "motion/react";

import {
    HiOutlineBars2,
    HiOutlineCalendarDays,
    HiOutlineXMark,
} from "react-icons/hi2";

import { useBooking } from "@/components/booking/BookingProvider";

const links = [
    {
        href: "#experiencias",
        label: "Experiencias",
    },
    {
        href: "#territorio",
        label: "Territorio",
    },
    {
        href: "#galeria",
        label: "Archivo",
    },
];

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { openBooking } = useBooking();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            },
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll,
            );
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen
            ? "hidden"
            : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500
                    ${scrolled
                        ? "border-volcanic/10 bg-mist/92 text-volcanic backdrop-blur-md"
                        : "border-mist/15 bg-transparent text-mist"
                    }
                `}
            >
                <nav
                    aria-label="Navegación principal"
                    className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10"
                >
                    <a
                        href="#top"
                        aria-label="Selvática — Inicio"
                        className="text-sm font-semibold uppercase tracking-[0.18em]"
                    >
                        Selvática
                    </a>

                    <div className="hidden items-center gap-10 md:flex">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-[10px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-45"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={openBooking}
                            className="hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] md:flex"
                        >
                            Consultar

                            <HiOutlineCalendarDays
                                aria-hidden="true"
                                className="size-4"
                            />
                        </button>

                        <button
                            type="button"
                            aria-label={
                                menuOpen
                                    ? "Cerrar menú"
                                    : "Abrir menú"
                            }
                            aria-expanded={menuOpen}
                            onClick={() =>
                                setMenuOpen((value) => !value)
                            }
                            className="relative grid size-11 place-items-center md:hidden"
                        >
                            <AnimatePresence mode="wait">
                                {menuOpen ? (
                                    <m.span
                                        key="close"
                                        initial={{
                                            opacity: 0,
                                            rotate: -45,
                                            scale: 0.8,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: 45,
                                            scale: 0.8,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        <HiOutlineXMark className="size-6" />
                                    </m.span>
                                ) : (
                                    <m.span
                                        key="menu"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.8,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        <HiOutlineBars2 className="size-6" />
                                    </m.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <m.div
                        key="mobile-menu"
                        initial={{
                            clipPath: "inset(0 0 100% 0)",
                        }}
                        animate={{
                            clipPath: "inset(0 0 0% 0)",
                        }}
                        exit={{
                            clipPath: "inset(0 0 100% 0)",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.19, 1, 0.22, 1],
                        }}
                        className="
        fixed inset-0 z-40
        flex flex-col
        bg-volcanic px-6
        pb-8 pt-28
        text-mist
        md:hidden
      "
                    >
                        <m.nav
                            aria-label="Navegación móvil"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        delayChildren: 0.18,
                                        staggerChildren: 0.07,
                                    },
                                },
                            }}
                            className="flex flex-1 flex-col"
                        >
                            {links.map((link, index) => (
                                <m.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: 18,
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.5,
                                                ease: [
                                                    0.19,
                                                    1,
                                                    0.22,
                                                    1,
                                                ],
                                            },
                                        },
                                    }}
                                    className="
              grid grid-cols-[3rem_1fr]
              items-baseline
              border-t border-mist/15
              py-6
            "
                                >
                                    <span className="font-mono text-[9px] text-mist/35">
                                        {String(index + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </span>

                                    <span className="font-serif text-4xl italic">
                                        {link.label}
                                    </span>
                                </m.a>
                            ))}

                            <m.button
                                type="button"
                                onClick={() => {
                                    setMenuOpen(false);

                                    setTimeout(() => {
                                        openBooking();
                                    }, 350);
                                }}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 16,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            ease: [
                                                0.19,
                                                1,
                                                0.22,
                                                1,
                                            ],
                                        },
                                    },
                                }}
                                className="
            mt-auto flex
            items-center justify-between
            border-y border-mist/20
            py-5
          "
                            >
                                <span className="text-[11px] uppercase tracking-[0.18em]">
                                    Consultar estancia
                                </span>

                                <HiOutlineCalendarDays
                                    aria-hidden="true"
                                    className="size-5"
                                />
                            </m.button>
                        </m.nav>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
};