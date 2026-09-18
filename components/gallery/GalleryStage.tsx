"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineArrowsPointingOut, HiOutlineXMark } from "react-icons/hi2";

import type { GalleryItem } from "@/content/gallery";

interface GalleryStageProps {
    items: readonly GalleryItem[];
}

const EASE = [0.19, 1, 0.22, 1] as const;

export const GalleryStage = ({ items }: GalleryStageProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const openerRef = useRef<HTMLElement | null>(null);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [visible, setVisible] = useState(false);

    const selected = selectedIndex === null ? null : items[selectedIndex];

    const openImage = (index: number) => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        openerRef.current = document.activeElement as HTMLElement;
        setSelectedIndex(index);

        if (!dialog.open) {
            dialog.showModal();
        }

        document.body.style.overflow = "hidden";

        requestAnimationFrame(() => {
            setVisible(true);
        });
    };

    const requestClose = () => {
        setVisible(false);
    };

    const finishClose = () => {
        const dialog = dialogRef.current;

        if (dialog?.open) {
            dialog.close();
        }

        setSelectedIndex(null);
        document.body.style.overflow = "";

        requestAnimationFrame(() => {
            openerRef.current?.focus();
        });
    };

    const previous = () => {
        setSelectedIndex((current) => {
            if (current === null) return null;

            return current === 0 ? items.length - 1 : current - 1;
        });
    };

    const next = () => {
        setSelectedIndex((current) => {
            if (current === null) return null;

            return current === items.length - 1 ? 0 : current + 1;
        });
    };

    useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                previous();
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                next();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-12 md:gap-y-24">
                {items.map((item, index) => (
                    <m.figure
                        key={item.src}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-8% 0px" }}
                        transition={{ duration: 0.8, delay: (index % 2) * 0.06, ease: EASE }}
                        className={item.className}
                    >
                        <button type="button" onClick={() => openImage(index)} aria-label={`Abrir imagen: ${item.title}`} className="group block w-full text-left">
                            <div className={`relative overflow-hidden bg-stone ${item.aspect}`}>
                                <Image
                                    fill
                                    src={item.src}
                                    alt={item.alt}
                                    sizes="(max-width: 768px) 100vw, 58vw"
                                    className="object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.015]"
                                />

                                <div aria-hidden="true" className="absolute inset-0 bg-volcanic/0 transition-colors duration-500 group-hover:bg-volcanic/10" />

                                <div className="absolute right-4 top-4 grid size-10 place-items-center bg-mist text-volcanic opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <HiOutlineArrowsPointingOut aria-hidden="true" className="size-4" />
                                </div>
                            </div>

                            <figcaption className="mt-4 grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 border-t border-volcanic/15 pt-3">
                                <span className="font-mono text-[9px] text-volcanic/70">{String(index + 1).padStart(2, "0")}</span>

                                <div>
                                    <p className="font-serif text-2xl">{item.title}</p>
                                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-volcanic/70">{item.category}</p>
                                </div>

                                <HiOutlineArrowRight aria-hidden="true" className="size-4 text-volcanic/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-clay-ink" />
                            </figcaption>
                        </button>
                    </m.figure>
                ))}
            </div>

            <dialog
                ref={dialogRef}
                aria-label="Visor de fotografías"
                onCancel={(event) => {
                    event.preventDefault();
                    requestClose();
                }}
                className="gallery-dialog fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0"
            >
                <AnimatePresence onExitComplete={finishClose}>
                    {visible && selected && selectedIndex !== null && (
                        <m.div
                            key="gallery-lightbox"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="fixed inset-0 flex flex-col bg-volcanic text-mist"
                        >
                            <header className="relative z-20 flex h-20 items-center justify-between border-b border-mist/15 px-6 md:px-10">
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist/40">Archivo</span>

                                    <span className="font-serif text-xl italic">{selected.title}</span>
                                </div>

                                <button type="button" onClick={requestClose} aria-label="Cerrar imagen" className="grid size-11 place-items-center border border-mist/20 transition-colors hover:bg-mist hover:text-volcanic">
                                    <HiOutlineXMark aria-hidden="true" className="size-5" />
                                </button>
                            </header>

                            <div className="relative flex-1 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <m.div
                                        key={selected.src}
                                        initial={{ opacity: 0, scale: 1.015 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.99 }}
                                        transition={{ duration: 0.5, ease: EASE }}
                                        className="absolute inset-0"
                                    >
                                        <Image fill src={selected.src} alt={selected.alt} sizes="100vw" className="object-contain p-4 md:p-10" />
                                    </m.div>
                                </AnimatePresence>
                            </div>

                            <footer className="relative z-20 border-t border-mist/15 px-6 py-5 md:px-10">
                                <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-[1fr_auto] md:items-end">
                                    <div className="grid gap-2 md:max-w-xl">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-[9px] text-mist/60">
                                                {String(selectedIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                                            </span>

                                            <span className="text-[10px] uppercase tracking-[0.18em] text-clay-ink">{selected.category}</span>
                                        </div>

                                        <p className="text-sm leading-relaxed text-mist/55">{selected.description}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <button type="button" onClick={previous} aria-label="Imagen anterior" className="grid size-12 place-items-center border border-mist/20 transition-colors hover:bg-mist hover:text-volcanic">
                                            <HiOutlineArrowLeft aria-hidden="true" className="size-5" />
                                        </button>

                                        <button type="button" onClick={next} aria-label="Imagen siguiente" className="grid size-12 place-items-center border border-mist/20 transition-colors hover:bg-mist hover:text-volcanic">
                                            <HiOutlineArrowRight aria-hidden="true" className="size-5" />
                                        </button>
                                    </div>
                                </div>
                            </footer>
                        </m.div>
                    )}
                </AnimatePresence>
            </dialog>
        </>
    );
};