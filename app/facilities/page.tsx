"use client";

import Image from "next/image";
import { useState } from "react";

export default function FacilitiesPage() {

  const facilities = [
    {
      icon: "🖥️",
      title: "FELUDA",
      subtitle: "PMLab Dedicated HPC Cluster",
      description:
        "High-performance computing facility dedicated to molecular simulations, spectroscopy, quantum chemistry and multiscale modelling workflows.",
      specs: [
        "CPU Nodes: masternode + 7 compute node (64 processors each)",
      ],
    },
    {
      icon: "⚡",
      title: "ARYABHATA",
      subtitle: "IISER Tirupati Central HPC Facility",
      description:
        "Newest addition to IISER Tirupati computational infrastructure supporting large-scale scientific simulations and parallel computing.",
      specs: [
        "62 Total Nodes",
        "10 NVIDIA H100 GPU Nodes + 49 CPU Compute Nodes",
      ],
    },
    {
      icon: "⚙️",
      title: "Additional HPC",
      subtitle: "IISER Tirupati Central HPC Facility",
      description:
        "Supplementary computational infrastructure for high-throughput simulations, workflow testing and data-intensive calculations.",
      specs: [
        "CPU Nodes: 14 compute nodes (40 processors each)",
      ],
    },
    {
      icon: "💻",
      title: "Workstations",
      subtitle: "In-Lab Facility",
      description:
        "High-end laboratory workstations for molecular visualization, simulations, trajectory analysis and scientific rendering.",
      specs: [
        "Workstation: 6 ",
        "GPU Workstation: 5 dedicated GPU workstations ",
        "STORAGE: 22TB NAS",
      ],
    },
    {
      icon: "🔬",
      title: "Softwares",
      subtitle: "Scientific Computing & Simulation Tools",
      description:
        "Computational chemistry, molecular simulation and scientific visualization software routinely used in PMLab research workflows.",
      softwares: [
        {
          name: "Gaussian 09",
          link: "https://gaussian.com/glossary/g09/",
        },
        
        {
          name: "Gaussian 16",
          link: "https://gaussian.com/gaussian16/",
        },
        
        {
          name: "GaussView 6",
          link: "https://gaussian.com/gaussview6/",
        },
        
        {
          name: "Molpro 2025",
          link: "https://www.molpro.net/",
        },
        
        
        {
          name: " Chemcraft",
          link: "https://www.chemcraftprog.com/",
        },
       
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[url('/ESMSCCG/photos/facilities/bg_4.png')] bg-cover bg-center bg-fixed text-white px-8 pt-48 pb-24 relative">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24 -mt-6">

        {/* LEFT */}
        <div>
          <h1 className="text-7xl md:text-8xl font-black leading-none mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            Research Facilities
          </h1>

          <h2 className="text-3xl md:text-5xl text-cyan-300 font-semibold mb-10">
            Computational Infrastructure of PMLab
          </h2>

          <div className="mt-16 flex justify-center lg:justify-start">
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
              className="group flex flex-col items-center text-violet-300 hover:text-white transition-all duration-300 animate-[pulse_1.5s_infinite]"
            >
              <span className="text-2xl tracking-[0.18em] font-semibold mb-2 group-hover:scale-110 transition duration-300">
                Scroll to Explore
              </span>
              <div className="text-5xl leading-none drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:translate-y-2 transition duration-300">
                ↓
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative z-[999]">
          <div className="overflow-hidden rounded-[35px] border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.25)]">
            <Image
              src="/ESMSCCG/photos/facilities/aryabhatta.png"
              alt="Aryabhatta HPC"
              width={1200}
              height={900}
              className="w-full h-[500px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-300 mb-3">
              FELUDA
            </h3>
            <p className="text-gray-300 text-xl">
              ESMSCCG HPC Facility
            </p>
          </div>
        </div>

      </section>

      {/* ================================================= */}
      {/* FACILITIES GRID */}
      {/* ================================================= */}
      <section
        id="facilities-section"
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-[35px] p-10 hover:scale-[1.04] hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_80px_rgba(34,211,238,0.35)] transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="text-5xl">
                  {facility.icon}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-cyan-300">
                    {facility.title}
                  </h2>
                  <p className="text-gray-400 text-lg mt-1">
                    {facility.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                {facility.description}
              </p>

              {/* Specs/Softwares Conditonal Rendering */}
              {'softwares' in facility && facility.softwares ? (
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-8">
                  {facility.softwares.map((software, idx) => (
                    <a
                      key={idx}
                      href={software.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg text-cyan-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{software.name}</span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {facility.specs?.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 text-lg text-gray-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end mt-32 pb-0">

        {/* LEFT — VISITOR MAP */}
        <div className="flex flex-col items-center lg:items-start">
          <a
            href="http://s01.flagcounter.com/more/PPaE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://s01.flagcounter.com/count2/PPaE/bg_021B38/txt_FFFFFF/border_030024/columns_3/maxflags_12/viewers_Global+Visitors/labels_1/pageviews_1/flags_0/percent_0/"
              alt="Global Visitors"
              className="opacity-85 hover:opacity-100 transition duration-300 rounded-xl"
            />
          </a>
        </div>

        {/* CENTER — BACK TO TOP */}
        <div className="flex justify-center mt-10 lg:mt-0">
          <button
            onClick={() => {
              document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex flex-col items-center text-cyan-300 hover:text-white hover:-translate-y-2 transition-all duration-300 animate-[pulse_1.2s_infinite]"
          >
            <div className="text-7xl leading-none mb-2 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]">
              ↑
            </div>
            <span className="text-2xl tracking-[0.28em] font-bold drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]">
              BACK TO TOP
            </span>
          </button>
        </div>

        {/* RIGHT — COPYRIGHT */}
        <div className="flex flex-col items-center lg:items-end text-gray-300 text-center mt-10 lg:mt-0">
          <span className="text-2xl font-semibold">
            © 2026 PMLab
          </span>
          <span className="text-xl mt-2">
            Designed by Sourav Bhandari
          </span>
        </div>

      </div>

    </main>
  );
}
