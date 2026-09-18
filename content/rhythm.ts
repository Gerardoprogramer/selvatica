export interface RhythmMoment {
    number: string;
    time: string;
    label: string;
    title: string;
    description: string;
    detail: string;
    image: string;
    alt: string;
}

export const RHYTHM_MOMENTS = [
    {
        number: "01",
        time: "06:10",
        label: "Mañana",
        title: "El bosque despierta primero.",
        description: "La humedad todavía permanece suspendida cuando aparece la primera luz entre el dosel.",
        detail: "Café, senderos silenciosos y tiempo suficiente para comenzar sin prisa.",
        image: "/assets/hero-mist.jpg",
        alt: "Bosque tropical cubierto por neblina durante la mañana",
    },
    {
        number: "02",
        time: "14:30",
        label: "Tarde",
        title: "Moverse antes de detenerse.",
        description: "El día gana energía entre altura, agua y recorridos que cambian la forma de percibir el paisaje.",
        detail: "La aventura aparece como contraste frente a las horas más tranquilas.",
        image: "/assets/puente.jpg",
        alt: "Puente suspendido atravesando el bosque tropical",
    },
    {
        number: "03",
        time: "19:40",
        label: "Noche",
        title: "Cuando todo baja el volumen.",
        description: "La última luz desaparece y el recorrido termina alrededor de agua caliente, comida y espacios más íntimos.",
        detail: "No hace falta llenar cada hora. Parte de la experiencia consiste en dejar espacio entre ellas.",
        image: "/assets/termales.jpg",
        alt: "Agua termal rodeada por vegetación en una atmósfera tranquila",
    },
] as const satisfies readonly RhythmMoment[];