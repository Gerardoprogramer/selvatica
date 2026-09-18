export interface Experience {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    detail: string;
    image: string;
    alt: string;
}

export const EXPERIENCES = [
    {
        number: "01",
        eyebrow: "Temperatura · piedra · vapor",
        title: "Agua volcánica",
        description:
            "El paisaje geotérmico se convierte en una pausa. Agua caliente, piedra oscura y vegetación húmeda marcan un cambio de ritmo.",
        detail: "Una experiencia pensada menos como actividad y más como transición entre movimiento y descanso.",
        image: "/assets/termales.jpg",
        alt: "Agua termal rodeada por vegetación tropical",
    },
    {
        number: "02",
        eyebrow: "Altura · perspectiva · bosque",
        title: "Sobre el dosel",
        description:
            "El recorrido asciende hasta cambiar por completo la escala del bosque. Lo que desde abajo parece cerrado, arriba se vuelve horizonte.",
        detail: "Puentes y pasos elevados construyen una lectura distinta del paisaje sin quitarle protagonismo.",
        image: "/assets/puente.jpg",
        alt: "Puente suspendido atravesando el bosque tropical",
    },
    {
        number: "03",
        eyebrow: "Velocidad · agua · descenso",
        title: "Movimiento",
        description:
            "No todo pide silencio. Parte del recorrido está diseñado para acelerar: agua, pendiente y vegetación pasan a convertirse en movimiento.",
        detail: "La aventura aparece como contraste, no como ruido permanente.",
        image: "/assets/tobogan.jpg",
        alt: "Recorrido acuático rodeado por vegetación",
    },
    {
        number: "04",
        eyebrow: "Sendero · agua · profundidad",
        title: "Agua escondida",
        description: "Los recorridos más lentos descienden hacia pequeñas caídas de agua entre vegetación densa y terreno húmedo.",
        detail: "Hay lugares que funcionan mejor cuando llegar forma parte de la experiencia.",
        image: "/assets/cascada.jpg",
        alt: "Cascada entre vegetación densa",
    },
] as const satisfies readonly Experience[];
