import { Reveal } from "@/components/motion/Reveal";
import { HiOutlineArrowRight } from "react-icons/hi2";

export const CTA = () => {
    return (
        <section id="contacto" className="bg-clay text-mist px-6 py-28 md:px-10 md:py-44">
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <p className="text-mist/65 font-mono text-[10px] tracking-[0.25em] uppercase">Preparar la estancia</p>

                    <div className="mt-8 grid gap-12 md:grid-cols-12 md:items-end">
                        <h2 className="font-serif text-[clamp(4rem,8vw,8rem)] leading-[0.82] tracking-[-0.04em] md:col-span-9">
                            Cambiá ruido
                            <br />
                            por <em>bosque.</em>
                        </h2>

                        <div className="md:col-span-3">
                            <a
                                href="#reservar"
                                className="group border-mist/35 flex items-center justify-between border-y py-5 text-[11px] tracking-[0.18em] uppercase"
                            >
                                Consultar fechas
                                <HiOutlineArrowRight
                                    aria-hidden="true"
                                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
