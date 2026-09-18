export const Footer = () => {
    return (
        <footer className="bg-volcanic text-mist">
            <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
                <div className="flex flex-col gap-8 border-b border-mist/15 pb-10 md:flex-row md:items-end md:justify-between">
                    <a
                        href="#top"
                        className="font-serif text-4xl italic tracking-tight"
                    >
                        Selvática
                    </a>

                    <nav
                        aria-label="Navegación secundaria"
                        className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.18em] text-mist/60"
                    >
                        <a href="#experiencias">Experiencias</a>
                        <a href="#territorio">Territorio</a>
                        <a href="#galeria">Archivo</a>
                        <a href="#reservar">Consulta</a>
                    </nav>
                </div>

                <div className="grid gap-4 pt-6 text-[10px] leading-relaxed text-mist/40 md:grid-cols-2">
                    <p>
                        Proyecto conceptual de diseño y desarrollo frontend.
                        Selvática no representa actualmente un hotel operativo.
                    </p>

                    <p className="md:text-right">
                        Arenal · Costa Rica
                    </p>
                </div>
            </div>
        </footer>
    );
};