import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";

const experiences = [
  {
    number: "01",
    title: "Agua volcánica",
    description:
      "Temperatura, vapor y piedra. Una pausa construida alrededor del paisaje geotérmico.",
    image: "/assets/termales.jpg",
    className: "md:col-span-7",
    aspect: "aspect-16/10",
  },
  {
    number: "02",
    title: "Sobre el dosel",
    description:
      "Puentes y recorridos elevados cambian la escala desde la que se percibe el bosque.",
    image: "/assets/puente.jpg",
    className: "md:col-span-5 md:mt-32",
    aspect: "aspect-4/5",
  },
  {
    number: "03",
    title: "Descenso",
    description:
      "Velocidad, agua y vegetación en una experiencia de aventura integrada al recorrido.",
    image: "/assets/tobogan.jpg",
    className: "md:col-span-5",
    aspect: "aspect-4/5",
  },
  {
    number: "04",
    title: "Agua escondida",
    description:
      "Senderos húmedos conducen hacia pequeñas caídas de agua entre vegetación densa.",
    image: "/assets/cascada.jpg",
    className: "md:col-span-7 md:mt-24",
    aspect: "aspect-16/10",
  },
];

export const Experiences = () => {
  return (
    <section
      id="experiencias"
      aria-labelledby="experiences-title"
      className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-44"
    >
      <Reveal className="mb-20 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay">
            01 / Experiencias
          </p>
        </div>

        <div className="md:col-span-8">
          <h2
            id="experiences-title"
            className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl"
          >
            Rituales de
            <br />
            <em>selva y agua.</em>
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-x-10 gap-y-20 md:grid-cols-12">
        {experiences.map((experience, index) => (
          <Reveal
            key={experience.number}
            delay={(index % 2) * 0.08}
            className={experience.className}
          >
            <figure>
              <div
                className={`relative overflow-hidden bg-stone ${experience.aspect}`}
              >
                <Image
                  fill
                  src={experience.image}
                  alt={experience.title}
                  sizes={
                    experience.className.includes("col-span-7")
                      ? "(max-width: 768px) 100vw, 58vw"
                      : "(max-width: 768px) 100vw, 42vw"
                  }
                  className="object-cover transition-transform duration-1000 ease-editorial hover:scale-[1.02]"
                />
              </div>

              <figcaption className="mt-5 grid grid-cols-[auto_1fr] gap-5">
                <span className="font-mono text-[9px] text-volcanic/40">
                  {experience.number}
                </span>

                <div>
                  <h3 className="font-serif text-3xl leading-none">
                    {experience.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-volcanic/60">
                    {experience.description}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
};