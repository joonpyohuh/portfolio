import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://junpyo-heo.vercel.app"),
  title: {
    default: "Junpyo Heo — Portfolio 2026",
    template: "%s — Junpyo Heo",
  },
  description:
    "AI 시대에 아날로그 가치를 만드는 사람. Founder, builder, brand thinker.",
  openGraph: {
    title: "Junpyo Heo — Portfolio 2026",
    description:
      "AI 시대에 아날로그 가치를 만드는 사람. Founder, builder, brand thinker.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junpyo Heo — Portfolio 2026",
    description:
      "AI 시대에 아날로그 가치를 만드는 사람. Founder, builder, brand thinker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-base text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
