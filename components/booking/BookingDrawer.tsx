"use client";

import {
    FormEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { AnimatePresence, m } from "motion/react";

import {
    HiOutlineArrowUpRight,
    HiOutlineCalendarDays,
    HiOutlineUserGroup,
    HiOutlineXMark,
} from "react-icons/hi2";

import { WHATSAPP_URL } from "@/lib/constants/WHATSAPP_URL";

interface BookingDrawerProps {
    open: boolean;
    onClose: () => void;
}

const EASE = [0.19, 1, 0.22, 1] as const;

const formatDate = (value: string) => {
    if (!value) return "";

    return new Intl.DateTimeFormat("es-CR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${value}T00:00:00Z`));
};

const getNights = (
    arrival: string,
    departure: string,
) => {
    if (!arrival || !departure) return 0;

    const start = Date.parse(`${arrival}T00:00:00Z`);
    const end = Date.parse(`${departure}T00:00:00Z`);

    return Math.max(
        0,
        Math.round((end - start) / 86_400_000),
    );
};

export const BookingDrawer = ({
    open,
    onClose,
}: BookingDrawerProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [visible, setVisible] = useState(false);

    const [arrival, setArrival] = useState("");
    const [departure, setDeparture] = useState("");
    const [guests, setGuests] = useState("2");
    const [today, setToday] = useState("");

    useEffect(() => {
        const now = new Date();

        setToday(
            [
                now.getFullYear(),
                String(now.getMonth() + 1).padStart(2, "0"),
                String(now.getDate()).padStart(2, "0"),
            ].join("-"),
        );
    }, []);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        if (open) {
            if (!dialog.open) {
                dialog.showModal();
            }

            requestAnimationFrame(() => {
                setVisible(true);
            });

            document.body.style.overflow = "hidden";

            return;
        }

        setVisible(false);
    }, [open]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const nights = useMemo(
        () => getNights(arrival, departure),
        [arrival, departure],
    );

    const finishClose = () => {
        const dialog = dialogRef.current;

        if (!open && dialog?.open) {
            dialog.close();
        }

        document.body.style.overflow = "";
    };

    const requestClose = () => {
        setVisible(false);
        onClose();
    };

    const handleSubmit = (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (!arrival || !departure || nights <= 0) {
            return;
        }

        const message = [
            "Hola, quisiera consultar disponibilidad en Selvática.",
            "",
            `Llegada: ${formatDate(arrival)}`,
            `Salida: ${formatDate(departure)}`,
            `Noches: ${nights}`,
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
        <dialog
            ref={dialogRef}
            aria-labelledby="booking-title"
            onCancel={(event) => {
                event.preventDefault();
                requestClose();
            }}
            className="booking-dialog fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0"
        >
            <AnimatePresence
                mode="wait"
                onExitComplete={finishClose}
            >
                {visible && (
                    <m.div
                        key="booking-layer"
                        className="fixed inset-0 flex justify-end"
                    >
                        {/* Overlay */}
                        <m.button
                            type="button"
                            aria-label="Cerrar panel de reserva"
                            onClick={requestClose}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.35,
                                ease: EASE,
                            }}
                            className="absolute inset-0 cursor-default bg-volcanic/75 backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <m.div
                            initial={{
                                x: "100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "100%",
                            }}
                            transition={{
                                duration: 0.55,
                                ease: EASE,
                            }}
                            className="relative z-10 h-dvh w-full bg-mist text-volcanic sm:max-w-xl
              "
                        >
                            <div className="flex min-h-dvh flex-col">
                                <header
                                    className="flex items-center justify-between border-b border-volcanic/15 px-6 py-5 md:px-8"
                                >
                                    <div>
                                        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-volcanic/40">
                                            Selvática / Estancia
                                        </p>

                                        <h2
                                            id="booking-title"
                                            className="mt-1 font-serif text-2xl italic"
                                        >
                                            Preparar visita
                                        </h2>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={requestClose}
                                        aria-label="Cerrar reserva"
                                        className="grid size-11 place-items-center border border-volcanic/15 transition-colors hover:bg-volcanic hover:text-mist"
                                    >
                                        <HiOutlineXMark
                                            aria-hidden="true"
                                            className="size-5"
                                        />
                                    </button>
                                </header>

                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-1 flex-col"
                                >
                                    <div className="flex-1 px-6 py-10 md:px-8">
                                        <m.div
                                            initial={{
                                                opacity: 0,
                                                y: 16,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.18,
                                                duration: 0.55,
                                                ease: EASE,
                                            }}
                                        >
                                            <p
                                                className="max-w-sm font-serif text-4xl leading-[0.95] tracking-tight md:text-5xl"
                                            >
                                                Elegí las fechas.
                                                <br />
                                                <em>Nosotros seguimos.</em>
                                            </p>
                                        </m.div>

                                        <m.div
                                            initial={{
                                                opacity: 0,
                                                y: 18,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.25,
                                                duration: 0.55,
                                                ease: EASE,
                                            }}
                                            className="mt-12 border-t border-volcanic/15"
                                        >
                                            <label className="grid gap-4 border-b border-volcanic/15 py-6 md:grid-cols-[1fr_1.4fr] md:items-center">
                                                <span className="flex items-center gap-3">
                                                    <HiOutlineCalendarDays
                                                        aria-hidden="true"
                                                        className="size-4 text-clay"
                                                    />

                                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-volcanic/45">
                                                        Llegada
                                                    </span>
                                                </span>

                                                <input
                                                    required
                                                    type="date"
                                                    min={today || undefined}
                                                    value={arrival}
                                                    onChange={(event) => {
                                                        const nextArrival =
                                                            event.target.value;

                                                        setArrival(nextArrival);

                                                        if (
                                                            departure &&
                                                            departure <= nextArrival
                                                        ) {
                                                            setDeparture("");
                                                        }
                                                    }}
                                                    className="w-full bg-transparent font-serif text-xl outline-none md:text-right"
                                                />
                                            </label>

                                            <label className="grid gap-4 border-b border-volcanic/15 py-6 md:grid-cols-[1fr_1.4fr] md:items-center">
                                                <span className="flex items-center gap-3">
                                                    <HiOutlineCalendarDays
                                                        aria-hidden="true"
                                                        className="size-4 text-clay"
                                                    />

                                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-volcanic/45">
                                                        Salida
                                                    </span>
                                                </span>

                                                <input
                                                    required
                                                    type="date"
                                                    min={
                                                        arrival ||
                                                        today ||
                                                        undefined
                                                    }
                                                    value={departure}
                                                    onChange={(event) =>
                                                        setDeparture(
                                                            event.target.value,
                                                        )
                                                    }
                                                    className="w-full bg-transparent font-serif text-xl outline-none md:text-right"
                                                />
                                            </label>

                                            <label className="grid gap-4 border-b border-volcanic/15 py-6 md:grid-cols-[1fr_1.4fr] md:items-center">
                                                <span className="flex items-center gap-3">
                                                    <HiOutlineUserGroup
                                                        aria-hidden="true"
                                                        className="size-4 text-clay"
                                                    />

                                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-volcanic/45">
                                                        Huéspedes
                                                    </span>
                                                </span>

                                                <select
                                                    value={guests}
                                                    onChange={(event) =>
                                                        setGuests(
                                                            event.target.value,
                                                        )
                                                    }
                                                    className="w-full bg-transparent font-serif text-xl outline-none md:text-right"
                                                >
                                                    {[1, 2, 3, 4, 5, 6].map(
                                                        (value) => (
                                                            <option
                                                                key={value}
                                                                value={value}
                                                            >
                                                                {value}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                            </label>
                                        </m.div>

                                        <AnimatePresence>
                                            {nights > 0 && (
                                                <m.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 12,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: 8,
                                                    }}
                                                    transition={{
                                                        duration: 0.35,
                                                        ease: EASE,
                                                    }}
                                                    className="mt-8 grid grid-cols-2 gap-8"
                                                >
                                                    <div>
                                                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-volcanic/35">
                                                            Estancia
                                                        </p>

                                                        <p className="mt-2 font-serif text-2xl">
                                                            {nights}{" "}
                                                            {nights === 1
                                                                ? "noche"
                                                                : "noches"}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-volcanic/35">
                                                            Personas
                                                        </p>

                                                        <p className="mt-2 font-serif text-2xl">
                                                            {guests}
                                                        </p>
                                                    </div>
                                                </m.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <footer
                                        className="border-t border-volcanic/15 p-6 md:p-8"
                                    >
                                        <button
                                            type="submit"
                                            disabled={
                                                !arrival ||
                                                !departure ||
                                                nights <= 0
                                            }
                                            className="group flex w-full items-center justify-between bg-volcanic px-6 py-5 text-mist transition-colors hover:bg-clay disabled:cursor-not-allowed disabled:opacity-35"
                                        >
                                            <span className="text-[11px] font-medium uppercase tracking-[0.18em]">
                                                Consultar disponibilidad
                                            </span>

                                            <HiOutlineArrowUpRight
                                                aria-hidden="true"
                                                className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </button>

                                        <p className="mt-4 text-xs leading-relaxed text-volcanic/40">
                                            La consulta se prepara con tus
                                            fechas y continúa por WhatsApp.
                                        </p>
                                    </footer>
                                </form>
                            </div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </dialog>
    );
};