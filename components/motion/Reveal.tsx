"use client";

import { m } from "motion/react";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    distance?: number;
}

export const Reveal = ({ children, className, delay = 0, distance = 24 }: RevealProps) => {
    return (
        <m.div
            initial={{
                opacity: 0,
                y: distance,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                margin: "-10% 0px",
            }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.19, 1, 0.22, 1],
            }}
            className={className}
        >
            {children}
        </m.div>
    );
};
