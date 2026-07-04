

export const Footer = () => {
    return (
        <footer id="contacto" className="bg-volcanic text-mist pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <span className="font-serif text-4xl italic tracking-tight">Selvática</span>
                        <p className="max-w-[32ch] text-mist/60 text-sm leading-relaxed">
                            En las faldas del Volcán Arenal, un refugio donde la naturaleza, la aventura y el
                            lujo se entrelazan en una sola experiencia.
                        </p>
                    </div>
                    <div className="md:col-span-3 flex flex-col gap-3">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-mist/40 font-semibold">
                            Contacto
                        </span>
                        <a href="tel:+50689462689" className="text-lg hover:text-clay transition-colors">
                            +506 8946 2689
                        </a>
                        <a href="mailto:hola@selvatica.cr" className="text-lg hover:text-clay transition-colors">
                            hola@selvatica.cr
                        </a>
                        <span className="text-sm text-mist/60">
                            La Fortuna, Alajuela
                            <br />
                            Costa Rica
                        </span>
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-3">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-mist/40 font-semibold">
                            Navegar
                        </span>
                        <a href="#experiencias" className="text-sm hover:text-clay transition-colors">
                            Experiencias
                        </a>
                        <a href="#origen" className="text-sm hover:text-clay transition-colors">
                            Origen
                        </a>
                        <a href="#galeria" className="text-sm hover:text-clay transition-colors">
                            Galería
                        </a>
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-3">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-mist/40 font-semibold">
                            Redes
                        </span>
                        <a href="#" className="text-sm hover:text-clay transition-colors">Instagram</a>
                        <a href="#" className="text-sm hover:text-clay transition-colors">TripAdvisor</a>
                        <a href="#" className="text-sm hover:text-clay transition-colors">YouTube</a>
                    </div>
                </div>
                <div className="pt-8 border-t border-mist/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-mist/30">
                        © 2026 Selvática Adventure Lodge · Pura Vida
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.25em] text-mist/30">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
