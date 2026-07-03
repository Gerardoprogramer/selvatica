import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
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
  weight: "400", // Instrument Serif solo tiene 400 en Google Fonts
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selvatica.cr"),
  title: {
    default: "Selvática — Hotel de Aventura en Costa Rica",
    template: "%s | Selvática",
  },
  description:
    "Refugio entre la bruma del Volcán Arenal: canopy, termales, cascadas, tobogán, gastronomía y cultura Maleku. Reserva tu aventura.",
  keywords: [
    "Selvática",
    "Volcán Arenal",
    "canopy Costa Rica",
    "hotel aventura Costa Rica",
    "tobogán Arenal",
    "termales Arenal",
  ],
  authors: [{ name: "Selvática" }],
  openGraph: {
    title: "Selvática — Hotel de Aventura en Costa Rica",
    description: "Donde la bruma toca el alma.",
    url: "https://selvatica.cr",
    siteName: "Selvática",
    images: [
      {
        url: "/assets/hero-mist.jpg", // 1200x630 recomendado, en /public
        width: 1200,
        height: 630,
        alt: "Selvática — Volcán Arenal",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selvática — Hotel de Aventura en Costa Rica",
    description: "Donde la bruma toca el alma.",
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
  alternates: {
    canonical: "https://selvatica.cr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}