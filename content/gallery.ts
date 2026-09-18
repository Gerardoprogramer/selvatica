export interface GalleryItem {
    src: string;
    alt: string;
    title: string;
    category: string;
    description: string;
    className: string;
    aspect: string;
}

export const GALLERY_ITEMS = [
    {
        src: "/assets/hero-mist.jpg",
        alt: "Bosque húmedo cubierto por neblina",
        title: "Bruma",
        category: "Atmósfera",
        description: "La luz aparece lentamente entre humedad, vegetación y niebla.",
        className: "md:col-span-7",
        aspect: "aspect-16/10",
    },
    {
        src: "/assets/termales.jpg",
        alt: "Agua termal rodeada por vegetación tropical",
        title: "Agua volcánica",
        category: "Materia",
        description: "Vapor, piedra y vegetación construyen uno de los momentos más quietos del recorrido.",
        className: "md:col-span-4 md:col-start-9 md:mt-24",
        aspect: "aspect-4/5",
    },
    {
        src: "/assets/puente.jpg",
        alt: "Puente suspendido atravesando el bosque",
        title: "Altura",
        category: "Recorrido",
        description: "El bosque cambia cuando la mirada deja el suelo.",
        className: "md:col-span-5",
        aspect: "aspect-4/5",
    },
    {
        src: "/assets/cascada.jpg",
        alt: "Cascada dentro de vegetación densa",
        title: "Descenso",
        category: "Agua",
        description: "Llegar también forma parte de la experiencia.",
        className: "md:col-span-6 md:col-start-7 md:mt-28",
        aspect: "aspect-16/10",
    },
    {
        src: "/assets/gastronomia.jpg",
        alt: "Mesa preparada dentro de una experiencia gastronómica tropical",
        title: "Mesa",
        category: "Pausa",
        description: "Después del movimiento, el ritmo cambia alrededor de una mesa.",
        className: "md:col-span-4 md:col-start-2",
        aspect: "aspect-4/5",
    },
    {
        src: "/assets/tobogan.jpg",
        alt: "Recorrido acuático dentro de vegetación tropical",
        title: "Movimiento",
        category: "Aventura",
        description: "Velocidad y agua como contraste frente a los momentos más contemplativos.",
        className: "md:col-span-7 md:col-start-6 md:mt-16",
        aspect: "aspect-16/10",
    },
] as const satisfies readonly GalleryItem[];