'use client';

import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants/TESTIMONIALS";

export const Testimonials = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: direction === "right" ? 380 : -380,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-stone py-32 md:py-44">
            <div className="mx-auto mb-16 flex max-w-7xl items-end justify-between gap-8 px-6">
                <h2 className="max-w-xl font-serif text-5xl leading-[1.05] text-volcanic md:text-6xl">
                    Ecos de nuestros <em>huéspedes</em>
                </h2>

                <div className="hidden items-center gap-3 md:flex">
                    <button
                        onClick={() => scroll("left")}
                        className="flex size-12 items-center justify-center rounded-full border border-volcanic/10 bg-mist transition hover:border-clay hover:text-clay"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="flex size-12 items-center justify-center rounded-full border border-volcanic/10 bg-mist transition hover:border-clay hover:text-clay"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto px-6 pb-8 snap-x snap-mandatory no-scrollbar"
            >
                {TESTIMONIALS.map((t, i) => (
                    <motion.blockquote
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="w-[320px] shrink-0 snap-start rounded-3xl bg-mist p-8 ring-1 ring-volcanic/5 md:w-110 md:p-10 flex flex-col gap-8"
                    >
                        <span className="font-serif text-5xl leading-none text-clay">
                            “
                        </span>

                        <p className="flex-1 font-serif text-xl italic leading-snug text-volcanic md:text-2xl">
                            {t.quote}
                        </p>

                        <footer className="flex items-center gap-3 border-t border-volcanic/10 pt-4">
                            <div className="size-10 rounded-full bg-linear-to-br from-clay/40 to-moss/30" />

                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-volcanic">
                                    {t.name}
                                </span>

                                <span className="text-[10px] uppercase tracking-[0.2em] text-volcanic/50">
                                    {t.place}
                                </span>
                            </div>
                        </footer>
                    </motion.blockquote>
                ))}
            </div>
        </section>
    );
};