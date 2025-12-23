import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV KAILI KAZAM - Jasa Konstruksi Profesional di Samarinda",
  description: "CV KAILI KAZAM adalah perusahaan konstruksi profesional di Samarinda, Kalimantan Timur. Menyediakan jasa bangun, renovasi, dan konsultasi konstruksi dengan kualitas terbaik.",
  keywords: ["CV KAILI KAZAM", "konstruksi", "bangunan", "renovasi", "Samarinda", "Kalimantan Timur", "jasa konstruksi", "kontraktor"],
  authors: [{ name: "CV KAILI KAZAM" }],
  icons: {
    icon: "/logo-kaili-kazam.png",
  },
  openGraph: {
    title: "CV KAILI KAZAM - Jasa Konstruksi Profesional",
    description: "Solusi konstruksi terpercaya untuk semua kebutuhan bangunan Anda di Samarinda dan sekitarnya",
    url: "https://kailikazam.com",
    siteName: "CV KAILI KAZAM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV KAILI KAZAM - Jasa Konstruksi Profesional",
    description: "Solusi konstruksi terpercaya untuk semua kebutuhan bangunan Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
