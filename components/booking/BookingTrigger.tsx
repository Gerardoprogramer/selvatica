"use client";

import { HiOutlineCalendarDays } from "react-icons/hi2";

import { useBooking } from "./BookingProvider";

interface BookingTriggerProps {
    className?: string;
    label?: string;
}

export const BookingTrigger = ({
    className = "",
    label = "Consultar estancia",
}: BookingTriggerProps) => {
    const { openBooking } = useBooking();

    return (
        <button
            type="button"
            onClick={openBooking}
            className={className}
        >
            <span>{label}</span>

            <HiOutlineCalendarDays
                aria-hidden="true"
                className="size-4"
            />
        </button>
    );
};