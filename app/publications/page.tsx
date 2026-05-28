"use client";
import Image from "next/image";

export default function PublicationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white px-6 pt-12 pb-24">

  {/* Background Image */}

  <div
    className="fixed inset-0 bg-cover bg-center opacity-30 z-0"
    style={{
      backgroundImage: "url('/photos/publications/bg.png')",
    }}
  />

  {/* Dark Overlay */}






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

<div className="relative z-20 max-w-7xl mx-auto px-16 py-6 flex justify-between items-center mb-20">

  {/* Title */}

  <div>

    <h1 className="relative z-20 text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.18)]">

      Publications

    </h1>

  </div>

  {/* Logos */}

  <a
    href="/"
    className="relative z-20 flex items-center gap-5 group"
  >

    {/* Lab Logo */}

    <Image
      src="/ESMSCCG/photos/home_pic/logo_round_wo_B.png"
      alt="Lab Logo"
      width={52}
      height={52}
      className="drop-shadow-[0_0_28px_rgba(34,211,238,1)]"
    />

    {/* Lab Name */}

    <div className="text-center">

      <h1 className="text-cyan-400 font-bold text-2xl leading-none group-hover:text-white transition drop-shadow-[0_0_18px_rgba(34,211,238,0.7)]">

        PMLab

      </h1>

      <p className="text-sm text-gray-300 tracking-[0.25em] mt-1 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">

        IISER Tirupati

      </p>

    </div>

    {/* IISER Logo */}

    <Image
      src="/ESMSCCG/photos/home_pic/iisert_logo.jpg"
      alt="IISER Logo"
      width={52}
      height={52}
      className="drop-shadow-[0_0_28px_rgba(34,211,238,1)]"
    />

  </a>

</div>









     {/* Year Navigation Buttons */}

<section className="max-w-7xl mx-auto mb-50">

  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">

    {[
      "2026",
      "2025",
      "2024",
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2015",
      "Older",
    ].map((year) => (
      <a
        key={year}
        href={`#year-${year}`}
        className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-3xl px-10 py-5 text-3xl font-semibold text-cyan-300 hover:scale-[1.08] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-500"
      >
        {year}
      </a>
    ))}

  </div>

</section>


{/* ========================== */}
{/* 2026 */}
{/* ========================== */}

<section
  id="year-2026"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2026
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://doi.org/10.1039/D6QI00546B"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Bhardwaj, S. Muthusamy, S. Ray,
          P. Mondal, P. Kumar,

          "Biomimetic Modeling of Copper Nitrite Reductase:
          Acid-Catalyzed Reduction of Nitrite to Nitric Oxide
          at Cu(I)-center via a Cu(II)-hydroxide Intermediate"

          <span className="italic text-cyan-400 ml-2">
            Inorg. Chem. Front.
          </span>

          , 2026, (Accepted Manuscript)

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://doi.org/10.1002/adts.202501684"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          S. Samanta, S. Ray, P. Mondal,

          "Computational Insights Into Light-Induced
          Spin Crossover and Magnetic Properties
          of [FeII(Tp)(CN)3]−2 Complex"

          <span className="italic text-cyan-400 ml-2">
            Adv. Theor. Simul.
          </span>

          , 2025, 9, e01684.

        </p>

      </a>

    </div>

  </div>

</section>


{/* ========================== */}
{/* 2025 */}
{/* ========================== */}

<section
  id="year-2025"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2025
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://doi.org/10.1063/5.0287684"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          S. Ray, S. Sasmal, P. Mondal,

          "Nonadiabatic photodissociation dynamics of indole
          using multi-configuration time-dependent Hartree method"

          <span className="italic text-cyan-400 ml-2">
            J. Chem. Phys.
          </span>

          , 2025, 163, 144310.

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="http://dx.doi.org/10.1038/s41589-025-01961-w"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Rana ... P. Mondal, S. Gayen and D. Laha,

          "GA-independent DELLA regulation by inositol
          pyrophosphate in a nonvascular land plant."

          <span className="italic text-cyan-400 ml-2">
            Nature Chemical Biology
          </span>

          , 2025, 1-12.

        </p>

      </a>

    </div>

    {/* Paper 3 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://doi.org/10.1039/D5RA03789A"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          A. S. Dhaliwal, A. Verma and P. Mondal,

          "In search of a photoswitchable drug for serotonin receptors:
          a molecular dynamics simulation study"

          <span className="italic text-cyan-400 ml-2">
            RSC Advances
          </span>

          , 2025, 15, 21077-21088.

        </p>

      </a>

    </div>

    {/* Paper 4 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://doi.org/10.1016/j.bpc.2024.107386"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          A. Verma and P. Mondal,

          "Investigation of serotonin-receptor interactions,
          stability and signal transduction pathways
          via molecular dynamics simulations"

          <span className="italic text-cyan-400 ml-2">
            Biophysical Chemistry
          </span>

          , 2025, 318, 107386.

        </p>

      </a>

    </div>

  </div>

</section>



{/* ========================== */}
{/* 2024 */}
{/* ========================== */}

<section
  id="year-2024"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2024
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://doi.org/10.1002/cphc.202400545"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          K. Geethika, A. Verma, P. Mondal*, & S. S. Mandal*,

          "Molecular analysis of changes in DNA binding affinity
          and bending extent induced by the mutations on the
          aromatic amino residues in Cren7"

          <span className="italic text-cyan-400 ml-2">
            Chem. Phys. Chem.
          </span>

          , 2024, 25, e202400545.

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://doi.org/10.1002/cphc.202400401"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          S. Samanta and P. Mondal*,

          "A comprehensive computational study on the thermodynamics
          and kinetics of tetrahydrobiopterin regeneration process"

          <span className="italic text-cyan-400 ml-2">
            Chem. Phys. Chem.
          </span>

          , 2024, 25, e202400401.

        </p>

      </a>

    </div>

    {/* Paper 3 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.aip.org/aip/jcp/article/160/3/034302/3000796"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          A. Roy, S. Samanta, S. Ray, Sunil Kumar S, P. Mondal*,

          "Unraveling the mystery of solvation-dependent fluorescence
          of fluorescein dianion using computational study"

          <span className="italic text-cyan-400 ml-2">
            J. Chem. Phys.
          </span>

          , 2024, 160, 034302.

        </p>

      </a>

    </div>

  </div>

</section>


{/* ========================== */}
{/* 2023 */}
{/* ========================== */}

<section
  id="year-2023"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2023
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.rsc.org/en/content/articlehtml/2023/cp/d3cp02961a"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          C. Hamerla, P. Mondal, R. Hegger and I. Burghardt,

          "Controlled destabilization of caged circularized DNA
          oligonucleotides predicted by replica exchange
          molecular dynamics simulations"

          <span className="italic text-cyan-400 ml-2">
            Phys. Chem. Chem. Phys.
          </span>

          , 2023, 25, 26123.

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.acs.org/doi/full/10.1021/acs.jpclett.3c00902"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          A. Kudlu, ..., S. Ray, P. Mondal, et al.,

          "Strong Dopant–Dopant Electronic Coupling in Emissive
          Codoped Two Dimensional Metal Halide Hybrid"

          <span className="italic text-cyan-400 ml-2">
            J. Phys. Chem. Lett.
          </span>

          , 2023, 14, 4933.

        </p>

      </a>

    </div>

    {/* Paper 3 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://www.cell.com/biophysj/pdf/S0006-3495%2823%2900228-X.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          K. Geethika, A. Verma, P. Mondal* and S. S. Mandal,

          "Molecular contacts in the Cren7-DNA complex:
          A quantitative investigation for electrostatic interaction"

          <span className="italic text-cyan-400 ml-2">
            BioPhys. J.
          </span>

          , 2023, 112, 1701.

        </p>

      </a>

    </div>

    {/* Paper 4 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://iopscience.iop.org/article/10.1088/2516-1075/acb7b8/meta"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          S. Ray, D. Koner and P. Mondal*,

          "High-resolution Electronic and Vibrational Spectroscopy
          of Small-to-medium Sized Molecules with ab initio
          Potential Energy Surface"

          <span className="italic text-cyan-400 ml-2">
            Electron. Struct.
          </span>

          , 2023, 5(1), 013001.

        </p>

      </a>

    </div>

    {/* Paper 5 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="http://dx.doi.org/10.1002/cphc.202200541"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          S. Ray and P. Mondal*,

          "Electronic Substitution Effect on the Ground and
          Excited State Properties of Indole Chromophore:
          A Computational Study"

          <span className="italic text-cyan-400 ml-2">
            ChemPhysChem
          </span>

          , 2023, 24, e202200541.

        </p>

      </a>

    </div>

  </div>

</section>



{/* ========================== */}
{/* 2022 */}
{/* ========================== */}

<section
  id="year-2022"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2022
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.rsc.org/en/content/articlepdf/2022/sc/d1sc06803b"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          S. Das, S. Ray, T. Devi, S. Ghosh,
          S. S Harmalkar, S. N. Dhuri,
          P. Mondal, P. Kumar,

          "Why intermolecular nitric oxide (NO) transfer?
          Exploring the factors and mechanistic aspects
          of NO transfer reaction"

          <span className="italic text-cyan-400 ml-2">
            Chem. Sci.
          </span>

          , 2022, 13, 1706.

        </p>

      </a>

    </div>

  </div>

</section>




{/* ========================== */}
{/* 2021 */}
{/* ========================== */}

<section
  id="year-2021"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2021
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.acs.org/doi/10.1021/acs.jpcb.1c05423"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal*, P.A. Cazade, A.K. Das,
          T. Bereau, M. Meuwly,

          "Multipolar Force Fields for Amide-I Spectroscopy
          from Conformational Dynamics of the Alanine Trimer"

          <span className="italic text-cyan-400 ml-2">
            J. Phys. Chem. B
          </span>

          , 2021, 125, 10928.

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://link.springer.com/article/10.1007/s00214-021-02787-0"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          R. Ravindranath, P. Mondal, and N. Gillet,

          "Radical cation transfer in a guanine pair:
          an insight to the G-quadruplex structure role
          using constrained DFT/MM"

          <span className="italic text-cyan-400 ml-2">
            Theor. Chem. Acc.
          </span>

          , 2021, 140, 1.

        </p>

      </a>

    </div>

  </div>

</section>



{/* ========================== */}
{/* 2020 */}
{/* ========================== */}

<section
  id="year-2020"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2020
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.rsc.org/en/content/articlelanding/2020/ra/d0ra05559j"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal*,

          "In silico decryption of serotonin–receptor binding:
          local non-covalent interactions and long-range
          conformational changes"

          <span className="italic text-cyan-400 ml-2">
            RSC Adv.
          </span>

          , 2020, 10, 37995.

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://aip.scitation.org/doi/10.1063/5.0009628"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          D. Koner, M. S. Salehi, P. Mondal, M. Meuwly,

          "Perspective: Non-conventional Force Fields for
          Applications in Spectroscopy and Chemical
          Reaction Dynamics"

          <span className="italic text-cyan-400 ml-2">
            J. Chem. Phys.
          </span>

          , 2020, 153, 010901.

        </p>

      </a>

    </div>

    {/* Paper 3 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://www.sciencedirect.com/science/article/abs/pii/S1010603019308470"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal*, K. Schwinn and M. Huix Rotllant,

          "Impact of the redox state of flavin chromophore
          on the UV-vis spectra, redox and acidity constants
          and electron affinity"

          <span className="italic text-cyan-400 ml-2">
            J. Photochem. Photobiol. A: Chemistry
          </span>

          , 2020, 387, 112164.

        </p>

      </a>

    </div>

  </div>

</section>



{/* ========================== */}
{/* 2019 */}
{/* ========================== */}

<section
  id="year-2019"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2019
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.rsc.org/en/content/articlelanding/2019/cp/c9cp00782b"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal* and M. Huix Rotllant,

          "Theoretical insights into the formation and stability
          of radical oxygen species in cryptochromes"

          <span className="italic text-cyan-400 ml-2">
            Phys. Chem. Chem. Phys.
          </span>

          , 2019, 21, 8874.

        </p>

      </a>

    </div>

  </div>

</section>




{/* ========================== */}
{/* 2018 */}
{/* ========================== */}

<section
  id="year-2018"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2018
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.rsc.org/en/content/articlelanding/2018/sc/c8sc00072g"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal*, G. Granucci, D. Rastädter,
          M. Persico and I. Burghardt,

          "Azobenzene as a Photoregulator Covalently Attached
          to RNA : A Quantum Mechanics/Molecular Mechanics
          Surface Hopping Dynamics Study"

          <span className="italic text-cyan-400 ml-2">
            Chem. Sci.
          </span>

          , 2018, 9, 4671.

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://www.nature.com/articles/s41598-018-22944-z?proof=t%2529"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal and M. Meuwly,

          "Solvent Composition Drives the Rebinding Kinetics
          of Nitric Oxide to Microper-oxidase"

          <span className="italic text-cyan-400 ml-2">
            Sci. Rep.
          </span>

          , 2018, 8, 5281.

        </p>

      </a>

    </div>

    {/* Paper 3 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://www.tandfonline.com/doi/abs/10.1080/08927022.2017.1416115?tab=permissions&scroll=top"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          K. El. Hage, P. Mondal and M. Meuwly,

          "Free Energy Simulations for Protein Ligand
          Binding and Stability"

          <span className="italic text-cyan-400 ml-2">
            Mol. Sim.
          </span>

          , 2018, 44, 1044.

        </p>

      </a>

    </div>

  </div>

</section>




{/* ========================== */}
{/* 2017 */}
{/* ========================== */}

<section
  id="year-2017"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2017
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.rsc.org/en/content/articlelanding/2017/cp/c7cp01892d"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal and M. Meuwly,

          "Vibrational Stark Spectroscopy for Assessing
          Ligand-Binding Strength in a Protein"

          <span className="italic text-cyan-400 ml-2">
            Phys. Chem. Chem. Phys.
          </span>

          , 2017, 19, 16131.

        </p>

      </a>

    </div>

  </div>

</section>



{/* ========================== */}
{/* 2015 */}
{/* ========================== */}

<section
  id="year-2015"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    2015
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.acs.org/doi/full/10.1021/acs.jpcb.5b03118"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal*, M. Biswas, T. Goldau,
          A. Heckel, I. Burghardt,

          "In Search of an Efficient Photoswitch for Functional RNA:
          Design Principles from a Microscopic Analysis of
          Azobenzene-linker-RNA Dynamics with Different Linkers"

          <span className="italic text-cyan-400 ml-2">
            J. Phys. Chem. B
          </span>

          , 2015, 119, 11275.

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201405840"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          T. Goldau, K. Murayama, C. Brieke,
          S. Steinwand, P. Mondal, M. Biswas,
          I. Burghardt, J. Wachtveitl,
          H. Asanuma, A. Heckel,

          "Reversible photoswitching of RNA hybridization
          at room temperature with an azobenzene C-nucleoside"

          <span className="italic text-cyan-400 ml-2">
            Chem. Eur. J.
          </span>

          , 2015, 21(7), 2845.

        </p>

      </a>

    </div>

  </div>

</section>




{/* ========================== */}
{/* Older */}
{/* ========================== */}

<section
  id="year-Older"
  className="relative z-10 scroll-mt-32 max-w-7xl mx-auto mb-32"
>

  <h2 className="text-5xl font-bold text-cyan-400 mb-14">
    Older
  </h2>

  <div className="space-y-12">

    {/* Paper 1 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.acs.org/doi/abs/10.1021/jp4118002"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal* and W. Domcke,

          "Infrared Absorption Spectra of Jahn-Teller Systems:
          Application to the transition-metal trifluorides
          MnF3 and NiF3"

          <span className="italic text-cyan-400 ml-2">
            J. Phys. Chem. A
          </span>

          , 2014, 118(21), 3726.

        </p>

      </a>

    </div>

    {/* Paper 2 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://aip.scitation.org/doi/full/10.1063/1.3687001"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal*, D. Opalka,
          L. V. Poluyanov and W. Domcke,

          "Ab initio study of dynamical E×e Jahn-Teller
          and spin-orbit coupling effects in the
          transition-metal trifluorides TiF3, CrF3 and NiF3"

          <span className="italic text-cyan-400 ml-2">
            J. Chem. Phys.
          </span>

          , 2012, 136, 84308.

        </p>

      </a>

    </div>

    {/* Paper 3 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://www.sciencedirect.com/science/article/abs/pii/S0301010411002734?via%3Dihub"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          P. Mondal*, D. Opalka,
          L. V. Poluyanov and W. Domcke,

          "Jahn-Teller and spin-orbit coupling effects
          in transition-metal trifluorides"

          <span className="italic text-cyan-400 ml-2">
            Chem. Phys.
          </span>

          , 2011, 387, 56.

        </p>

      </a>

    </div>

    {/* Paper 4 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.acs.org/doi/10.1021/jp201524x"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          T. Sahoo, S. Sardar, P. Mondal,
          B. Sarkar and S. Adhikari,

          "Effect of surface modes on the six-dimensional
          molecule-surface scattering dynamics of
          H2-Cu (100) and D2-Cu (111) systems"

          <span className="italic text-cyan-400 ml-2">
            J. Phys. Chem. A
          </span>

          , 2011, 115, 5256.

        </p>

      </a>

    </div>

    {/* Paper 5 */}

    <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8 hover:bg-cyan-400/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      <a
        href="https://pubs.rsc.org/en/content/articlelanding/2008/cp/b805990j"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >

        <p className="text-2xl text-gray-200 leading-relaxed hover:text-cyan-300 transition duration-300">

          S. Sardar, A. K. Paul, P. Mondal,
          B. Sarkar and S. Adhikari,

          "A quantum classical approach to the molecular
          dynamics of the butatriene cation with a realistic
          model Hamiltonian"

          <span className="italic text-cyan-400 ml-2">
            Phys. Chem. Chem. Phys.
          </span>

          , 2008, 10, 6388.

        </p>

      </a>

    </div>

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