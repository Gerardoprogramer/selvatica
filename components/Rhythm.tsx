import { Reveal } from "@/components/motion/Reveal";

const moments = [
    {
        label: "Mañana",
        title: "El bosque despierta primero.",
        text: "Caminos húmedos, café y una luz que aparece lentamente entre el dosel.",
    },
    {
        label: "Tarde",
        title: "Moverse antes de detenerse.",
        text: "Altura, agua y recorridos de aventura antes de volver al refugio.",
    },
    {
        label: "Noche",
        title: "Bajar el volumen.",
        text: "Vapor, cocina y conversaciones largas cuando desaparece la última luz.",
    },
];

export const Rhythm = () => {
    return (
        <section className="border-y border-volcanic/15 bg-sand py-28 md:py-40">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <Reveal className="grid gap-8 md:grid-cols-12">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay md:col-span-3">
                        04 / El ritmo
                    </p>

                    <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:col-span-7 md:text-7xl">
                        Un día sin
                        <br />
                        <em>prisa.</em>
                    </h2>
                </Reveal>

                <div className="mt-20 border-t border-volcanic/15">
                    {moments.map((moment, index) => (
                        <Reveal
                            key={moment.label}
                            delay={index * 0.05}
                        >
                            <article className="grid gap-5 border-b border-volcanic/15 py-8 md:grid-cols-12 md:items-baseline">
                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-volcanic/40 md:col-span-3">
                                    {moment.label}
                                </span>

                                <h3 className="font-serif text-3xl md:col-span-4 md:text-4xl">
                                    {moment.title}
                                </h3>

                                <p className="max-w-md text-sm leading-relaxed text-volcanic/55 md:col-span-4 md:col-start-9">
                                    {moment.text}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};