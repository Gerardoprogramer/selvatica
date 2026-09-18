import { GalleryStage } from "@/components/gallery/GalleryStage";
import { Reveal } from "@/components/motion/Reveal";

import { GALLERY_ITEMS } from "@/content/gallery";

export const Gallery = () => {
    return (
        <section id="galeria" aria-labelledby="gallery-title" className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-44">
            <Reveal className="mb-20 grid gap-8 md:mb-28 md:grid-cols-12 md:items-end">
                <div className="md:col-span-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay-ink">03 / Archivo</p>
                </div>

                <div className="md:col-span-7">
                    <h2 id="gallery-title" className="font-serif text-5xl leading-[0.88] tracking-[-0.04em] md:text-7xl lg:text-8xl">
                        Fragmentos de
                        <br />
                        <em>una estancia.</em>
                    </h2>
                </div>

                <div className="md:col-span-2">
                    <p className="max-w-xs text-sm leading-relaxed text-volcanic/50">Un archivo visual de materia, movimiento, agua y bosque.</p>
                </div>
            </Reveal>

            <GalleryStage items={GALLERY_ITEMS} />
        </section>
    );
};