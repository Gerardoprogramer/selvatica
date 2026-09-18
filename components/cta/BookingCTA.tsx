"use client";

import { HiOutlineArrowUpRight } from "react-icons/hi2";

import { useBooking } from "@/components/booking/BookingProvider";

export const BookingCTA = () => {
    const { openBooking } = useBooking();

    return (
        <button
            type="button"
            onClick={openBooking}
            className="group inline-flex items-center gap-4 border-b border-volcanic pb-2 text-sm font-medium uppercase tracking-[0.14em] text-volcanic transition-colors duration-300 hover:border-clay hover:text-clay"
        >
            Preparar estancia
            <HiOutlineArrowUpRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
    );
};