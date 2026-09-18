"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

import { BookingDrawer } from "./BookingDrawer";

interface BookingContextValue {
    openBooking: () => void;
    closeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export const useBooking = () => {
    const context = useContext(BookingContext);

    if (!context) {
        throw new Error(
            "useBooking debe utilizarse dentro de BookingProvider",
        );
    }

    return context;
};

export const BookingProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [open, setOpen] = useState(false);

    const openBooking = useCallback(() => {
        setOpen(true);
    }, []);

    const closeBooking = useCallback(() => {
        setOpen(false);
    }, []);

    const value = useMemo(
        () => ({
            openBooking,
            closeBooking,
        }),
        [openBooking, closeBooking],
    );

    return (
        <BookingContext.Provider value={value}>
            {children}

            <BookingDrawer
                open={open}
                onClose={closeBooking}
            />
        </BookingContext.Provider>
    );
};