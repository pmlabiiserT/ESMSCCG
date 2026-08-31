"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white px-6 pt-28 pb-24">
     

      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">

          {/* PI Image */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-400/35 blur-[90px] rounded-full"></div>

              <Image
                src="/photos/about_pi_pic/blurry.jpg"
                alt="Dr. Padmabati Mondal"
                width={420}
                height={420}
                className="relative rounded-3xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.55)] object-cover"
              />

            </div>

          </div>

          {/* Intro */}
          <div>

            <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4 text-sm">
              Principal Investigator
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">

              Dr. Padmabati Mondal

            </h1>


                <div className="flex flex-wrap items-center gap-3 md:gap-5 mb-8 text-lg md:text-xl">
                
                  <a
                    href="https://scholar.google.com/citations?user=u61Vm5MAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  >
                    Google Scholar
                  </a>
                
                  <span className="text-gray-500">|</span>
                
                  <a
                    href="https://orcid.org/0000-0003-1523-630X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  >
                    ORCID ID
                  </a>
                
                  <span className="text-gray-500">|</span>
                
                  <a
                    href="https://www.researchgate.net/profile/Padmabati-Mondal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white transition duration-300 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  >
                    ResearchGate
                  </a>
                
                </div>

                <div className="flex items-center gap-5 mt-5 mb-8 flex-wrap">

                  <p className="text-gray-300 text-xl md:text-2xl leading-relaxed tracking-wide">

                    Academic Genealogy →

                  </p>

                  <a
                    href="https://academictree.org/chemistry/tree.php?pid=831191"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-cyan-400/10 border border-cyan-400 text-cyan-300 font-semibold tracking-wide hover:bg-cyan-400 hover:text-black hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.65)] animate-[pulse_1.2s_infinite]"
                  >

                    Click Here 

                  </a>

                </div>






            <p className="text-gray-200 text-lg text-xl md:text-2xl leading-relaxed">

              Assistant Professor at the Indian Institute of Science
              Education and Research (IISER) Tirupati working in
              excited-state quantum chemistry, spectroscopy,
              molecular modelling, and multiscale computational simulations.

            </p>

          </div>

        </div>

        {/* Education and Research */}
        <section className="mb-20">

          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-10">
              Education and Research
            </h2>

            <div className="space-y-6 text-gray-200 text-xl md:text-1xl leading-relaxed">

              <p>
                <span className="text-white font-semibold">
                  02/2019 - Current:
                </span>{" "}
                Assistant Professor, Indian Institute of Science Education and Research (IISER) Tirupati, India.
              </p>

              <p>
                <span className="text-white font-semibold">
                  01/2018 - 12/2018:
                </span>{" "}
                Postdoctoral Fellow, Aix-Marseille University, France.
              </p>

              <p>
                <span className="text-white font-semibold">
                  08/2015 - 10/2017:
                </span>{" "}
                Postdoctoral Fellow, University of Basel, Switzerland.
              </p>

              <p>
                <span className="text-white font-semibold">
                  04/2013 - 07/2015:
                </span>{" "}
                Postdoctoral Fellow, Goethe University Frankfurt, Germany.
              </p>

              <p>
                <span className="text-white font-semibold">
                  12/2008 - 12/2012:
                </span>{" "}
                PhD (Theoretical Chemistry), Technical University of Munich, Germany.
              </p>

              <p>
                <span className="text-white font-semibold">
                  2006 - 2008:
                </span>{" "}
                M.Sc. (Chemical Sciences), SNBNCBS and IACS, Kolkata, India.
              </p>

              <p>
                <span className="text-white font-semibold">
                  2003 - 2006:
                </span>{" "}
                B.Sc. (Chemistry), Visva-Bharati University, India.
              </p>

            </div>

          </div>

        </section>

        {/* Teaching Experiences */}
        <section className="mb-20">

          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-10">
              Teaching Experiences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl md:text-1xl leading-relaxed text-gray-200">

              <div>Physical Chemistry</div>
              <div>Physical Chemistry Practical</div>
              <div>Quantum Chemistry I</div>
              <div>Computational Methods</div>
              <div>Quantum Chemistry II</div>
              <div>Simulation and Modelling</div>
              <div>Chemical Kinetics and Photochemistry</div>

            </div>

          </div>

        </section>

        {/* Awards */}
        <section className="mb-20">

          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-10">
              Awards and Fellowships
            </h2>

            <div className="space-y-6 text-gray-200 text-xl md:text-1xl leading-relaxed">

              <p>2019: Seal of Excellence award by European Commission</p>

              <p>
                2017: Wiley JCC/IJQC award for best poster in Asia Pacific Conference on Theoretical and Computational Chemistry 2017, IIT Bombay
              </p>

              <p>
                2008: Qualified in National Eligibility Test (CSIR) for Junior Research Fellowship + Lecturership.
              </p>

              <p>
                2007: Received Rajiv Gandhi Science Talent Research Scholarship
              </p>

              <p>
                2007: Received Jawaharlal Nehru Summer Research Fellowship
              </p>

              <p>
                2004: Was awarded a certificate of appreciation for an outstanding performance in Pre-Degree (10+2 level) examination by MHRD, Gov. of India
              </p>

            </div>

          </div>

        </section>

        {/* Professional Service */}
        <section className="mb-20">

          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-10">
              Professional Service
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl md:text-1xl leading-relaxed text-gray-200">

              <div>Invited article review, Chem. Phys.</div>

              <div>Invited article review, J. Mater. Chem. A</div>

              <div>Invited article review, RSC. Advances</div>

              <div>Invited article review, Frontiers</div>

              <div>Invited article review, Journal of Physical Chemistry</div>

            </div>

          </div>

        </section>

      </div>



     

{/* ================================================= */}
{/* FOOTER */}
{/* ================================================= */}

<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end mt-32 pb-8">

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

  <div className="flex flex-col items-center lg:items-end text-white
  -300 text-center">

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
