import type { Metadata } from "next";

import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import { MotionProvider } from "@/components/providers/MotionProvider";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument-serif",
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
});

const siteUrl = "https://selvatica.vercel.app";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: "Selvática — Arenal, Costa Rica",
        template: "%s · Selvática",
    },

    description:
        "Proyecto conceptual de hospitalidad y aventura inspirado en el paisaje volcánico y el bosque húmedo de Arenal, Costa Rica.",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        title: "Selvática — Arenal, Costa Rica",
        description: "Bosque, agua volcánica y aventura en una experiencia editorial inspirada en Arenal.",
        url: "/",
        siteName: "Selvática",
        locale: "es_CR",
        type: "website",
        images: ["/assets/hero-mist.jpg"],
    },

    twitter: {
        card: "summary_large_image",
        title: "Selvática — Arenal, Costa Rica",
        description: "Donde el bosque marca el ritmo.",
        images: ["/assets/hero-mist.jpg"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es-CR" className={` ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} `}>
            <body id="top" className="bg-mist text-volcanic min-h-dvh antialiased">
                <MotionProvider>{children}</MotionProvider>
            </body>
        </html>
    );
}
