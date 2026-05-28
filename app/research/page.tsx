"use client";
import Image from "next/image";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#030712] via-[#07111f] to-[#030712] text-white px-6 pt-12 pb-24">

      {/* ================================================= */}
{/* HOVER MENU */}
{/* ================================================= */}

<div className="fixed top-10 left-10 z-[99999] group">

  {/* MENU ICON */}

  <div className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-black/75 border border-cyan-400/30 flex flex-col justify-center items-center gap-2 cursor-pointer shadow-[0_0_35px_rgba(34,211,238,0.25)] hover:scale-110 transition-all duration-300">

    <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />
    <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />
    <div className="w-8 h-[3px] bg-cyan-300 rounded-full" />

  </div>

  {/* EXPANDING MENU */}

  <div className="absolute top-0 left-0 w-0 opacity-0 overflow-hidden group-hover:w-[420px] group-hover:opacity-100 transition-all duration-500">

    <div className="ml-24 min-w-[300px] backdrop-blur-2xl bg-black/92 border border-cyan-400/30 rounded-[35px] p-10 shadow-[0_0_80px_rgba(34,211,238,0.4)]">

      <div className="flex flex-col gap-7 text-2xl">

        <a href="/" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">
          Home
        </a>

        <a href="/about" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">
          Team Leader
        </a>

        <a href="/research" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">
          Research
        </a>

        <a href="/publications" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">
          Publications
        </a>

        <a href="/facilities" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">
          Research Facilities
        </a>

        <a href="/team" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">
          Team
        </a>

        <a href="/news" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">
          News & Gallery
        </a>

        <a href="/contact" className="text-cyan-300 hover:text-white hover:translate-x-3 transition-all duration-300">
          Opportunities & Contact
        </a>

      </div>

    </div>

  </div>

</div>

{/* ================================================= */}
{/* TOP HEADER */}
{/* ================================================= */}

<div className="relative z-20 max-w-7xl mx-auto px-14 py-6 flex justify-between items-center mb-20">

  {/* Title */}

  <div>

    <h1 className="text-5xl md:text-7xl font-bold leading-tight">

      Research Interests

    </h1>

  </div>

  {/* Logos */}

  <a href="/" className="flex items-center gap-5 group">

    {/* Lab Logo */}

    <Image
      src="/ESMSCCG/photos/home_pic/logo_round_wo_B.png"
      alt="Lab Logo"
      width={52}
      height={52}
      className="drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]"
    />

    {/* Lab Name */}

    <div className="text-center">

      <h1 className="text-cyan-400 font-bold text-2xl leading-none group-hover:text-white transition">

        PMLab

      </h1>

      <p className="text-sm text-gray-400 tracking-[0.25em] mt-1">

        IISER Tirupati

      </p>

    </div>

    {/* IISER Logo */}

    <Image
      src="/ESMSCCG/photos/home_pic/iisert_logo.jpg"
      alt="IISER Logo"
      width={52}
      height={52}
      className="drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]"
    />

  </a>

</div>

      {/* Intro Text */}

      <section 
      id="research-start"
      className="scroll-mt-0.2 max-w-6xl mx-auto -mt-10 mb-40">

        <p className="text-gray-300 text-2xl md:text-3xl leading-relaxed">

         We investigate molecular phenomena across multiple length and time scales using integrated computational approaches spanning excited-state quantum chemistry, computational photochemistry, classical molecular dynamics, hybrid QM/MM methodologies, and ab-initio force field development. Our research focuses on vibronic and excited-state dynamics, biomolecular interactions, photochemical processes in complex protein environments, and quantum mechanically derived models for spectroscopy and non-covalent interactions in chemical and biological systems.
        </p>

      </section>



{/* Enter Research Sections */}

<div className="w-full flex justify-center -mt-30 mb-10">

  <a
    href="#research-start"
    className="flex flex-col items-center text-cyan-400 hover:text-white hover:-translate-y-2 transition-all duration-300 animate-[pulse_1.2s_infinite]"
  >

    <span className="text-lg tracking-[0.35em] uppercase mb-4 font-semibold drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">

      Scroll to Explore

    </span>

    <div className="text-6xl animate-bounce drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">

      ↓

    </div>

  </a>

</div>
      {/* ========================= */}
      {/* Research Topic 1 */}
      {/* ========================= */}

      <section className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

        {/* Left Image */}
        <div className="relative">

          <div className="absolute inset-0 bg-cyan-400/30 blur-[45px] rounded-3xl"></div>

          <Image
            src="/ESMSCCG/photos/research/1_final.png"
            alt="Research Topic"
            width={700}
            height={500}
            className="relative rounded-3xl object-cover shadow-[0_0_18px_rgba(34,211,238,0.25)]"
          />

        </div>

        {/* Right Text */}
        <div>

         

          <h2 className="text-5xl font-bold mb-8 leading-tight">

            Ground & Excited State Quantum Chemistry

          </h2>

          <p className="text-gray-300 text-2xl leading-relaxed">

            We investigate light-induced molecular processes using excited-state quantum chemistry and computational photochemistry, focusing on vibronic coupling, nonadiabatic dynamics, and spin–orbit interactions in organic chromophores and transition metal complexes through TDDFT, MCTDH, and surface hopping simulations.

          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* Research Topic 2 */}
      {/* ========================= */}

      <section className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

        {/* Left Text */}
        <div>

          

          <h2 className="text-5xl font-bold mb-8 leading-tight">

            Classical Molecular Dynamics Simulations of Biomolecules

          </h2>

          <p className="text-gray-300 text-2xl leading-relaxed">

            We employ classical molecular dynamics simulations to investigate the structural dynamics of biomolecular systems, with particular emphasis on protein–ligand and protein–DNA interactions, membrane environments, and allosteric regulation. Through atomistic simulations and free energy analyses, we explore conformational dynamics, molecular recognition, and interaction mechanisms governing biomolecular function

          </p>

        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="absolute inset-0 bg-cyan-400/10 blur-[45px] rounded-3xl"></div>

          <Image
            src="/ESMSCCG/photos/research/2_final.png"
            alt="Research Topic"
            width={700}
            height={500}
            className="relative rounded-3xl object-cover shadow-[0_0_18px_rgba(34,211,238,0.25)]"
          />

        </div>

      </section>

      {/* ========================= */}
      {/* Research Topic 3 */}
      {/* ========================= */}

      <section className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

        {/* Left Image */}
        <div className="relative">

          <div className="absolute inset-0 bg-cyan-400/10 blur-[45px] rounded-3xl"></div>

          <Image
            src="/ESMSCCG/photos/research/3_final.png"
            alt="Research Topic"
            width={700}
            height={500}
            className="relative rounded-3xl object-cover shadow-[0_0_18px_rgba(34,211,238,0.25)]"
          />

        </div>

        {/* Right Text */}
        <div>

          

          <h2 className="text-5xl font-bold mb-8 leading-tight">

            Hybrid QM/MM Calculations

          </h2>

          <p className="text-gray-300 text-2xl leading-relaxed">

            We apply hybrid QM/MM approaches to probe excited-state reactivity and photochemical processes in protein environments by combining quantum mechanical treatment of reactive chromophore regions with atomistic molecular mechanics descriptions of the surrounding biomolecular system. Our work focuses on environment-dependent electronic structure, charge transfer, and photodynamics in complex biological systems.
          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* Research Topic 4 */}
      {/* ========================= */}

      <section className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Text */}
        <div>

          

          <h2 className="text-5xl font-bold mb-8 leading-tight">

            Non-conventional Forcefield Developments

          </h2>

          <p className="text-gray-300 text-2xl leading-relaxed">

            We develop ab-initio and non-conventional force fields for spectroscopy and non-covalent interactions through quantum mechanically derived parameterization of bonded and electrostatic interactions, potential energy surface fitting, and transferable charge models for complex molecular systems.

          </p>

        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="absolute inset-0 bg-cyan-400/10 blur-[45px] rounded-3xl"></div>

          <Image
            src="/ESMSCCG/photos/research/4_final.png"
            alt="Research Topic"
            width={700}
            height={500}
            className="relative rounded-3xl object-cover shadow-[0_0_18px_rgba(34,211,238,0.25)]"
          />

        </div>

      </section>



      {/* ================================================= */}
{/* FOOTER */}
{/* ================================================= */}

<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end mt-0 pb-0">

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

  <div className="flex justify-center">

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

  <div className="flex flex-col items-center lg:items-end text-white-300 text-center">

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