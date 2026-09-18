"use client";

import { domAnimation, LazyMotion, MotionConfig, } from "motion/react";

interface MotionProviderProps {
    children: React.ReactNode;
}

export const MotionProvider = ({ children }: MotionProviderProps) => {
    return (
        <LazyMotion features={domAnimation}>
            <MotionConfig reducedMotion="user">
                {children}
            </MotionConfig>
        </LazyMotion>
    );
};