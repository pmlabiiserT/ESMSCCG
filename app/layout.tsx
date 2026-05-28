import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // <-- Added the Link import
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
      <body className="min-h-full flex flex-col">
        
        {/* ================================================= */}
        {/* GLOBAL HOVER MENU (Now applies to every page!) */}
        {/* ================================================= */}
        <div className="fixed top-10 left-10 z-[99999] group">
          <div className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-black/75 border border-cyan-400/30 flex flex-col justify-center items-center gap-2 cursor-pointer shadow-[0_0_35px_rgba(34,211,238,0.25)] hover:scale-110 transition-all duration-300">
            <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />
            <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />
            <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />
          </div>
          <div className="absolute top-0 left-0 w-0 opacity-0 overflow-hidden group-hover:w-[420px] group-hover:opacity-100 transition-all duration-500">
            <div className="ml-24 min-w-[300px] backdrop-blur-2xl bg-black/92 border border-cyan-400/30 rounded-[35px] p-10 shadow-[0_0_80px_rgba(34,211,238,0.4)]">
              <div className="flex flex-col gap-7 text-2xl">
                <Link href="/" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">Home</Link>
                <Link href="/about" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">Team Leader</Link>
                <Link href="/research" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">Research</Link>
                <Link href="/publications" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">Publications</Link>
                <Link href="/facilities" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">Research Facilities</Link>
                <Link href="/team" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">Team</Link>
                <Link href="/news" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">News & Gallery</Link>
                <Link href="/contact" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">Opportunities & Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* This renders whatever specific page you are on */}
        {children}

      </body>
    </html>
  );
}
