"use client";

import { FormEvent, useEffect, useState } from "react";

import { m } from "motion/react";

import { WHATSAPP_URL } from "@/lib/constants/WHATSAPP_URL";
import { HiOutlineArrowRight } from "react-icons/hi2";

const formatDate = (value: string) => {
    if (!value) return "";

    return new Intl.DateTimeFormat("es-CR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${value}T00:00:00Z`));
};

export const BookingPanel = () => {
    const [arrival, setArrival] = useState("");
    const [departure, setDeparture] = useState("");
    const [guests, setGuests] = useState("2");
    const [today, setToday] = useState("");

    useEffect(() => {
        const now = new Date();

        const localDate = [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0"),
        ].join("-");

        setToday(localDate);
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!arrival || !departure) return;

        if (departure <= arrival) return;

        const message = [
            "Hola, quisiera consultar disponibilidad en Selvática.",
            "",
            `Llegada: ${formatDate(arrival)}`,
            `Salida: ${formatDate(departure)}`,
            `Huéspedes: ${guests}`,
        ].join("\n");

        const url = new URL(WHATSAPP_URL);

        url.searchParams.set("text", message);

        window.open(
            url.toString(),
            "_blank",
            "noopener,noreferrer",
        );
    };

    return (
        <section
            id="reservar"
            aria-labelledby="booking-title"
            className="border-b border-volcanic/15 bg-mist"
        >
            <m.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mx-auto grid max-w-7xl md:grid-cols-[1.2fr_1fr_1fr_1fr_auto]"
            >
                <div
                    className="border-b border-volcanic/15 px-6 py-6 md:border-b-0 md:border-r md:px-8"
                >
                    <p
                        id="booking-title"
                        className="font-mono text-[9px] uppercase tracking-[0.25em] text-volcanic/45"
                    >
                        Consulta
                    </p>

                    <p className="mt-2 font-serif text-2xl italic">
                        Prepará tu estancia
                    </p>
                </div>

                <label
                    className="border-b border-volcanic/15 px-6 py-5 md:border-b-0 md:border-r"
                >
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-volcanic/45">
                        Llegada
                    </span>

                    <input
                        required
                        type="date"
                        min={today || undefined}
                        value={arrival}
                        onChange={(event) => {
                            const nextArrival = event.target.value;

                            setArrival(nextArrival);

                            if (
                                departure &&
                                departure <= nextArrival
                            ) {
                                setDeparture("");
                            }
                        }}
                        className="mt-2 w-full bg-transparent font-serif text-xl outline-none"
                    />
                </label>

                <label
                    className="border-b border-volcanic/15 px-6 py-5 md:border-b-0 md:border-r"
                >
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-volcanic/45">
                        Salida
                    </span>

                    <input
                        required
                        type="date"
                        min={arrival || today || undefined}
                        value={departure}
                        onChange={(event) =>
                            setDeparture(event.target.value)
                        }
                        className="mt-2 w-full bg-transparent font-serif text-xl outline-none"
                    />
                </label>

                <label
                    className="border-b border-volcanic/15 px-6 py-5 md:border-b-0 md:border-r"
                >
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-volcanic/45">
                        Huéspedes
                    </span>

                    <select
                        value={guests}
                        onChange={(event) =>
                            setGuests(event.target.value)
                        }
                        className="mt-2 w-full bg-transparent font-serif text-xl outline-none"
                    >
                        {[1, 2, 3, 4, 5, 6].map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </label>

                <button
                    type="submit"
                    className="group flex min-h-20 items-center justify-between gap-8 bg-volcanic px-7 text-left text-mist transition-colors hover:bg-clay md:min-h-full"
                >
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em]">
                        Consultar
                    </span>

                    <HiOutlineArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </button>
            </m.form>
        </section>
    );
};