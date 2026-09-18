import { HiOutlineArrowUp } from "react-icons/hi2";

const navigation = [
    {
        label: "Experiencias",
        href: "#experiencias",
    },
    {
        label: "Territorio",
        href: "#territorio",
    },
    {
        label: "Archivo",
        href: "#galeria",
    },
    {
        label: "El ritmo",
        href: "#ritmo",
    },
];

export const Footer = () => {
    return (
        <footer className="overflow-hidden bg-volcanic text-mist">
            <div className="mx-auto max-w-[1600px] px-6 pb-8 pt-20 md:px-10 md:pb-10 md:pt-28">
                <div className="grid gap-16 border-b border-mist/15 pb-20 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-5">
                        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-clay-light">Hospitality concept · 2026</p>

                        <p className="mt-6 max-w-md font-serif text-3xl leading-[1.05] tracking-tight md:text-4xl">
                            Una interpretación digital del paisaje, el descanso y la aventura.
                        </p>
                    </div>

                    <nav aria-label="Navegación del pie" className="md:col-span-3 md:col-start-8">
                        <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.22em] text-mist/60">Explorar</p>

                        <ul className="space-y-3">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className="text-sm text-mist/60 transition-colors duration-300 hover:text-mist">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="md:col-span-2">
                        <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.22em] text-mist/60">Lugar</p>

                        <p className="text-sm leading-relaxed text-mist/60">
                            Arenal
                            <br />
                            Costa Rica
                        </p>
                    </div>
                </div>

                <div className="grid gap-10 py-8 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-7">
                        <p className="max-w-2xl text-[11px] leading-relaxed text-mist/60">
                            Selvática es un proyecto conceptual de diseño y desarrollo web. No representa un alojamiento, operador turístico o establecimiento comercial real.
                        </p>
                    </div>

                    <div className="flex items-center justify-between md:col-span-5 md:justify-end md:gap-12">
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-mist/60">
                            Concepto digital · <time dateTime="2026">2026</time>
                        </span>

                        <a
                            href="#inicio"
                            aria-label="Volver al inicio"
                            className="group grid size-11 place-items-center border border-mist/20 text-mist/60 transition-colors duration-300 hover:bg-mist hover:text-volcanic"
                        >
                            <HiOutlineArrowUp aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-1" />
                        </a>
                    </div>
                </div>

                <div aria-hidden="true" className="border-t border-mist/15 pt-8">
                    <p className="select-none whitespace-nowrap text-center font-sans text-[18vw] font-semibold leading-[0.7] tracking-[-0.075em] text-mist md:text-[15vw]">
                        SELVÁTICA
                    </p>
                </div>
            </div>
        </footer>
    );
};