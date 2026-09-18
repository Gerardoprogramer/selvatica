import { ExperienceStage } from "@/components/experiences/ExperienceStage";
import { Reveal } from "@/components/motion/Reveal";

import { EXPERIENCES } from "@/content/experiences";

export const Experiences = () => {
    return (
        <section id="experiencias" aria-labelledby="experiences-title" className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-44">
            <Reveal className="mb-20 grid gap-8 md:mb-28 md:grid-cols-12 md:items-end">
                <div className="md:col-span-3">
                    <p className="text-clay-ink font-mono text-[10px] tracking-[0.25em] uppercase">01 / Experiencias</p>
                </div>

                <div className="md:col-span-7">
                    <h2 id="experiences-title" className="font-serif text-5xl leading-[0.9] tracking-[-0.035em] md:text-7xl lg:text-8xl">
                        Cambiar de ritmo
                        <br />
                        también es <em>viajar.</em>
                    </h2>
                </div>

                <div className="md:col-span-2 md:text-right">
                    <p className="text-volcanic/50 text-sm leading-relaxed">Cuatro formas distintas de entrar al mismo paisaje.</p>
                </div>
            </Reveal>

            <ExperienceStage experiences={EXPERIENCES} />
        </section>
    );
};
