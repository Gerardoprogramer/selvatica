"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <LazyMotion features={domAnimation}>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LazyMotion>
    );
};
