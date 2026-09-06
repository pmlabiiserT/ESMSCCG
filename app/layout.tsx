import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import MenuBar from "./MenuBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PMLab | IISER Tirupati",
  description: "Excited State & Multi Scale Computational Chemistry Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816]">
        
        {/* ================================================= */}
        {/* UNIFIED GLOBAL HEADER */}
        {/* ================================================= */}
        
        {/* Floating container covering the top row */}
        <header className="absolute top-0 left-0 w-full z-[99999] pt-10 px-10 pointer-events-none">
          <div className="max-w-[100rem] mx-auto flex justify-between items-start pointer-events-auto">

            {/* LEFT SIDE: Menu + Group Name */}
            <div className="flex items-start gap-8">
              {/* MENU */}
              <MenuBar />

              {/* NEW GROUP TITLE */}
              <div className="hidden md:flex flex-col mt-2">
                <h2 className="text-cyan-400 font-bold text-2xl tracking-wider drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  Excited State & Multi Scale
                </h2>
                <h2 className="text-cyan-400 font-bold text-2xl tracking-wider drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  Computational Chemistry Group
                </h2>
              </div>

            </div>

            {/* RIGHT SIDE: Global Top Logos */}
            <a
              href="/ESMSCCG/"
              className="flex items-center gap-5 group"
            >
              <Image
                src="/ESMSCCG/photos/home_pic/logo_round_wo_B.png"
                alt="Lab Logo"
                width={60}
                height={60}
                className="drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]"
              />

              <div>
                <h1 className="text-cyan-400 text-3xl font-bold group-hover:text-white transition">
                  PMLab
                </h1>

                <p className="text-gray-300 tracking-[0.25em] text-sm">
                  IISER Tirupati
                </p>
              </div>

              <Image
                src="/ESMSCCG/photos/home_pic/iisert_logo.jpg"
                alt="IISER Logo"
                width={60}
                height={60}
                className="drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]"
              />
            </a>
          </div>
        </header>

        {/* This renders whatever specific page you are on */}

        {/* This renders whatever specific page you are on */}
        {children}

      </body>
    </html>
  );
}
