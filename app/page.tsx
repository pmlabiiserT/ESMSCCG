"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-x-hidden">

  {/* ================================================= */}
  {/* BACKGROUND */}
  {/* ================================================= */}

  <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-blue-950 z-0" />

  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),_transparent_60%)] z-0" />

  <div
    className="fixed inset-0 bg-cover bg-center opacity-40 z-0"
    style={{
      backgroundImage: "url('/ESMSCCG/photos/home_pic/home_bg_final.png')",
    }}
  />

  <div className="absolute inset-0 bg-black/25 z-0" />


  {/* ================================================= */}
  {/* MAIN HERO SECTION */}
  {/* ================================================= */}
      {/* Main Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen -mt-20 px-6 pt-38 text-center">

        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/ESMSCCG/photos/home_pic/logo_round_wo_B.png"
            alt="Lab Logo"
            width={160}
            height={160}
            className="drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-5xl">

          Excited State & Multi Scale <br />

          <span className="text-cyan-400">
             Computational Chemistry Group
          </span>

          <br />

          
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-gray-300 text-lg md:text-2xl max-w-3xl leading-relaxed">

          Excited State Quantum Chemistry - Photochemistry & Spectroscopy   Multi-Scale Molecular Modelling & Simulation         

        </p>

       <a
          href="#explore-section"
          className="mt-20 flex flex-col items-center text-cyan-400 hover:text-white hover:-translate-y-2 transition-all duration-300 animate-pulse"
        >

          <span className="text-3xl md:text-3xl tracking-[0.5em] uppercase mb-6 font-bold drop-shadow-[0_0_25px_rgba(34,211,238,1)]">
            Explore
          </span>

          <div className="text-7xl md:text-6xl animate-bounce drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            ↓
          </div>

        </a>
                
      </section>
        {/* Navigation Scroll Section */}

          <section
            id="explore-section"
            className="relative z-10 min-h-screen flex items-center justify-center px-6"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">

              {/* About PI */}
              <Link
              href="/about"
              className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-3xl p-7 hover:scale-[1.08] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition-all duration-500 cursor-pointer text-left block"
            >

<h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Team Leader
              </h2>

              <p className="text-gray-300 text-xl">
                Dr. Padmabati Mondal
              </p>

            </Link>

             {/* Research */}
              <Link
                href="/research"
                className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-3xl p-7 hover:scale-[1.08] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition-all duration-500 cursor-pointer text-left block"
              >

                <h2 className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  Research
                </h2>

                <p className="text-gray-300 text-xl leading-relaxed">
                  Excited-state chemistry, spectroscopy,
                  molecular simulations, and multiscale modelling.
                </p>

              </Link>

             {/* Publications */}
            <Link
              href="/publications"
              className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-3xl p-7 hover:scale-[1.08] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition-all duration-500 cursor-pointer text-left block"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                Publications
              </h2>

              <p className="text-gray-300 text-xl leading-relaxed">
                Explore our scientific publications,
                computational studies, and discoveries.
              </p>

            </Link>

              {/* Research Facilities */}
                <Link
                  href="/facilities"
                  className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-3xl p-7 hover:scale-[1.08] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition-all duration-500 cursor-pointer text-left block"
                >

                  <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                    Research Facilities
                  </h2>

                  <p className="text-gray-300 text-xl">
                    High-performance computing resources,
                    simulation tools, and computational workflows.
                  </p>

                </Link>


              {/* Group */}
              <Link href="/team" className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-3xl p-7 hover:scale-[1.08] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition-all duration-500 cursor-pointer">

                <h2 className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  Team
                </h2>

                <p className="text-gray-300 text-xl">
                  Meet the researchers and students
                  of the computational chemistry group.
                </p>

              </Link>



              {/* News and Gallery */}
              <Link href="/news" className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-3xl p-7 hover:scale-[1.08] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition-all duration-500 cursor-pointer">

                <h2 className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  News & Gallery
                </h2>

                <p className="text-gray-300 text-xl">
                  Conferences, achievements, events,
                  snapshots, and scientific activities.
                </p>

              </Link>


{/* Opportunity and Contact */}
              <Link href="/contact" className="lg:col-start-2 backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-3xl p-7 hover:scale-[1.08] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition-all duration-500 cursor-pointer">

                <h2 className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  Opportunity & Contact
                </h2>

                <p className="text-gray-300 text-xl">
                  PhD opportunities, collaborations,
                  internships, and contact details.
                </p>

              </Link>

            </div>
          </section>


{/* ================================================= */}
{/* FOOTER */}
{/* ================================================= */}

<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end mt-0 pb-8">

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

  <div className="flex flex-col items-center lg:items-end text-gray-300 text-center">

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
