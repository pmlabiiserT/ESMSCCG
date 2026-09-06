"use client";

import Link from "next/link";
import { useState } from "react";

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [clickClosed, setClickClosed] = useState(false);

  return (
    <div
      className="relative z-50"
      onMouseEnter={() => {
        setIsHovering(true);
        if (!clickClosed) {
          setMenuOpen(true);
        }
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setClickClosed(false);
        setMenuOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => {
          if (menuOpen || isHovering) {
            setMenuOpen(false);
            setClickClosed(true);
          } else {
            setMenuOpen(true);
            setClickClosed(false);
          }
        }}
        className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-black/75 border border-cyan-400/30 flex flex-col justify-center items-center gap-2 cursor-pointer shadow-[0_0_35px_rgba(34,211,238,0.25)] hover:scale-110 transition-all duration-300"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
      >
        <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />
        <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />
        <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-0 left-0 overflow-hidden transition-all duration-500 ${
          menuOpen && !clickClosed
            ? "w-[420px] opacity-100"
            : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="ml-24 min-w-[300px] backdrop-blur-2xl bg-black/92 border border-cyan-400/30 rounded-[35px] p-10 shadow-[0_0_80px_rgba(34,211,238,0.4)]">
          <div className="flex flex-col gap-7 text-2xl">
            <Link
              href="/"
              className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300"
            >
              Team Leader
            </Link>

            <Link
              href="/research"
              className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300"
            >
              Research
            </Link>

            <Link
              href="/publications"
              className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300"
            >
              Publications
            </Link>

            <Link
              href="/facilities"
              className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300"
            >
              Research Facilities
            </Link>

            <Link
              href="/team"
              className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300"
            >
              Team
            </Link>

            <Link
              href="/news"
              className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300"
            >
              News & Gallery
            </Link>

            <Link
              href="/contact"
              className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300"
            >
              Opportunities & Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
