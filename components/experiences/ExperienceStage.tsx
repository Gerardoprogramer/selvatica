"use client";

import { useState } from "react";

import Image from "next/image";
import { m } from "motion/react";

import type { Experience } from "@/content/experiences";

interface ExperienceStageProps {
    experiences: readonly Experience[];
}

const EASE = [0.19, 1, 0.22, 1] as const;

export const ExperienceStage = ({ experiences }: ExperienceStageProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {/* MOBILE */}
            <div className="space-y-20 md:hidden">
                {experiences.map((experience, index) => (
                    <article key={experience.number} className="border-volcanic/15 border-t pt-5">
                        <div className="bg-stone relative aspect-4/5 overflow-hidden">
                            <Image fill src={experience.image} alt={experience.alt} sizes="(max-width: 767px) calc(100vw - 48px), 58vw" className="object-cover" />

                            <div
                                aria-hidden="true"
                                className="from-volcanic/30 absolute inset-0 bg-linear-to-t via-transparent to-transparent"
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-[2.5rem_1fr] gap-3">
                            <span className="text-volcanic/70 pt-1 font-mono text-[9px]">{experience.number}</span>

                            <div>
                                <p className="text-clay-ink font-mono text-[9px] tracking-[0.2em] uppercase">{experience.eyebrow}</p>

                                <h3 className="mt-3 font-serif text-4xl leading-[0.95] tracking-tight">{experience.title}</h3>

                                <p className="text-volcanic/65 mt-5 text-[15px] leading-relaxed">{experience.description}</p>

                                <p className="border-clay/40 text-volcanic/70 mt-4 border-l pl-4 text-sm leading-relaxed">
                                    {experience.detail}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden grid-cols-12 gap-x-12 md:grid">
                {/* Sticky visual */}
                <div className="col-span-7">
                    <div className="bg-volcanic sticky top-28 h-[calc(100svh-9rem)] max-h-200 min-h-140 overflow-hidden">
                        {experiences.map((experience, index) => (
                            <m.div
                                key={experience.number}
                                initial={false}
                                animate={{
                                    opacity: index === activeIndex ? 1 : 0,
                                    scale: index === activeIndex ? 1 : 1.025,
                                }}
                                transition={{
                                    opacity: {
                                        duration: 0.55,
                                        ease: EASE,
                                    },
                                    scale: {
                                        duration: 1,
                                        ease: EASE,
                                    },
                                }}
                                aria-hidden={index !== activeIndex}
                                className="absolute inset-0"
                            >
                                <Image
                                    fill
                                    src={experience.image}
                                    alt={index === activeIndex ? experience.alt : ""}
                                    sizes="58vw"
                                    className="object-cover"
                                />
                            </m.div>
                        ))}

                        <div
                            aria-hidden="true"
                            className="from-volcanic/50 to-volcanic/10 absolute inset-0 bg-linear-to-t via-transparent"
                        />

                        {/* Active index */}
                        <div className="border-mist/20 text-mist absolute inset-x-0 bottom-0 flex items-end justify-between border-t p-7">
                            <div>
                                <p className="text-mist/50 font-mono text-[9px] tracking-[0.22em] uppercase">Experiencia</p>

                                <p className="mt-1 font-serif text-3xl italic">{experiences[activeIndex].title}</p>
                            </div>

                            <div className="flex items-baseline gap-2">
                                <span className="font-serif text-4xl">{String(activeIndex + 1).padStart(2, "0")}</span>

                                <span className="text-mist/40 font-mono text-[9px]">/ {String(experiences.length).padStart(2, "0")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Narrative */}
                <div className="col-span-4 col-start-9">
                    {experiences.map((experience, index) => (
                        <m.article
                            key={experience.number}
                            onViewportEnter={() => setActiveIndex(index)}
                            viewport={{
                                amount: 0.45,
                                margin: "-20% 0px -20% 0px",
                            }}
                            className="relative flex min-h-[72svh] flex-col justify-center border-t border-volcanic/15 py-16"
                        >
                            <m.div
                                aria-hidden="true"
                                initial={false}
                                animate={{
                                    scaleY: activeIndex === index ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.45,
                                    ease: EASE,
                                }}
                                className="absolute -left-5 top-1/2 h-20 w-px origin-center -translate-y-1/2 bg-clay-ink"
                            />

                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[10px] text-volcanic/70">
                                        {experience.number}
                                    </span>

                                    <span className="max-w-50 text-right font-mono text-[9px] uppercase tracking-[0.18em] text-clay-ink">
                                        {experience.eyebrow}
                                    </span>
                                </div>

                                <h3 className="mt-10 font-serif text-5xl leading-[0.9] tracking-[-0.03em] lg:text-6xl">
                                    {experience.title}
                                </h3>

                                <p className="mt-8 text-base leading-relaxed text-volcanic/65">
                                    {experience.description}
                                </p>

                                <p className="mt-6 border-l border-clay/40 pl-5 text-sm leading-relaxed text-volcanic/70">
                                    {experience.detail}
                                </p>
                            </div>
                        </m.article>
                    ))}
                </div>
            </div>
        </>
    );
};
