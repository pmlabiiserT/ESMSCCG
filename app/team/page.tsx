"use client";

import Image from "next/image";
import Link from "next/link"; // <-- Added the Link import

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050816] via-[#081c34] to-[#0d2d52] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),_transparent_60%)]" />

      {/* ===================================================== */}
      {/* HERO + FOOTBALL FIELD */}
      {/* ===================================================== */}

      <section className="relative z-10 min-h-screen px-8 pt-48 pb-24">

        {/* Main Hero */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center -mt-15">

          {/* LEFT SIDE */}

          <div>
            
            <h1 className="text-5xl sm:text-7xl md:text-7xl whitespace-nowrap font-black leading-none mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">

              Team PMLab 

            </h1>

            <h2 className="text-3xl md:text-5xl text-cyan-300 font-semibold mb-10">

              The Computational Squad

            </h2>

            <p className="text-gray-300 text-2xl leading-relaxed max-w-2xl mb-12">

              A multidisciplinary computational chemistry group
              exploring excited-state dynamics, spectroscopy,
              molecular simulations, and multiscale modelling.

            </p>

            {/* Feluda */}

            {/* FIXED: Changed <a> to <Link> */}
            <Link href="/facilities" className="flex items-center gap-6">

              <Image
                src="/ESMSCCG/photos/team/feluda_logo_final.png"
                alt="Feluda HPC"
                width={150}
                height={150}
                className="drop-shadow-[0_0_35px_rgba(34,211,238,0.9)] animate-pulse group-hover:scale-110 transition duration-300"
              />

              <div>

                <h3 className="text-cyan-400 text-3xl font-bold">

                  FELUDA

                </h3>

                <p className="text-gray-300 text-xl">

                  HPC Node & Team Mascot

                </p>

              </div>

            </Link>

          </div>

          {/* RIGHT SIDE FOOTBALL FIELD */}

          <div className="relative w-full h-[800px] rounded-[40px] border border-cyan-400/20 overflow-hidden bg-[#03101f]/70 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.18)]">

            {/* Football Field Lines */}

            <div className="absolute inset-10 border-2 border-cyan-400/40 rounded-xl" />

            <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-cyan-400/30" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-2 border-cyan-400/30 rounded-full" />

            {/* Goal Boxes */}

            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 h-24 border-2 border-cyan-400/30" />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 h-24 border-2 border-cyan-400/30" />

{/* Goal Boxes */}

            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 h-24 border-2 border-cyan-400/30" />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 h-24 border-2 border-cyan-400/30" />

            {/* ================================================= */}
            {/* PLAYERS */}
            {/* ================================================= */}

            {/* ST 1 */}

            <a
              href="#phd1"
              className="absolute top-[12%] left-[32%] flex flex-col items-center group"
            >

              <Image
                src="/ESMSCCG/photos/team/f_soumyadip.jpg"
                alt="member"
                width={90}
                height={90}
                className="rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)] group-hover:scale-110 transition duration-300 animate-pulse object-cover"
              />

              <p className="text-cyan-300 font-bold mt-1">PhD</p>

              <p className="text-white text-xs leading-none mt-1">Soumyadip</p>

            </a>

            {/* ST 2 */}

            <a
              href="#phd2"
              className="absolute top-[12%] right-[32%] flex flex-col items-center group"
            >

              <Image
                src="/ESMSCCG/photos/team/f_arunima.jpg"
                alt="member"
                width={90}
                height={90}
                className="rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)] group-hover:scale-110 transition duration-300 animate-pulse object-cover"
              />

              <p className="text-cyan-300 font-bold mt-1">PhD</p>

              <p className="text-white text-xs leading-none mt-1">Arunima</p>

            </a>

            {/* CAM 1 */}

            <a
              href="#phd3"
              className="absolute top-[36%] left-[15%] flex flex-col items-center group"
            >

              <Image
                src="/ESMSCCG/photos/team/f_subhadip.jpeg"
                alt="member"
                width={90}
                height={90}
                className="rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)] group-hover:scale-110 transition duration-300 animate-pulse object-cover"
              />

              <p className="text-cyan-300 font-bold mt-1">PhD</p>

              <p className="text-white text-xs leading-none mt-1">Suvadip</p>

            </a>

            {/* CAM 2 */}

            <a
              href="#phd4"
              className="absolute top-[36%] right-[15%] flex flex-col items-center group"
            >

              <Image
                src="/ESMSCCG/photos/team/f_momus.jpg" 
                alt="member"
                width={90}
                height={90}
                className="rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)] group-hover:scale-110 transition duration-300 animate-pulse object-cover"
              />

              <p className="text-cyan-300 font-bold mt-1">PhD</p>

              <p className="text-white text-xs leading-none mt-1">Momus</p>

            </a>

            {/* DMF */}

            <a
              href="#jrf1"
              className="absolute z-40 top-[45%] left-1/2 -translate-x-1/2 flex flex-col items-center group"
            >

              <Image
                src="/ESMSCCG/photos/team/f_sourav_3.jpg" 
                alt="member"
                width={90}
                height={90}
                className="rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)] group-hover:scale-110 transition duration-300 animate-pulse object-cover"
              />

              <p className="text-cyan-300 font-bold mt-1">PA-I</p>

              <p className="text-white text-xs leading-none mt-1">Sourav</p>

            </a>

{/* DEFENDERS */}

            <a
              href="#ms1"
              className="absolute bottom-[20%] left-[20%] flex flex-col items-center group"
            >

              <Image
                src="/ESMSCCG/photos/team/f_sulekha_1.jpeg"
                alt="member"
                width={90}
                height={90}
                className="rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)] group-hover:scale-110 transition duration-300 animate-pulse object-cover"
              />

              <p className="text-cyan-300 font-bold mt-1">MS(R) Thesis</p>

              <p className="text-white text-xs leading-none mt-1">Sulekha</p>

            </a>

            <a
              href="#ms3"
              className="absolute bottom-[20%] right-[20%] flex flex-col items-center group"
            >

              <Image
                src="/ESMSCCG/photos/team/f_ina.jpg"
                alt="member"
                width={90}
                height={90}
                className="rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)] group-hover:scale-110 transition duration-300 animate-pulse object-cover"
              />

              <p className="text-cyan-300 font-bold mt-1">MS Thesis</p>

              <p className="text-white text-xs leading-none mt-1">Ina</p>

            </a>

            {/* GK */}

            <a
              href="#semester1"
              className="absolute bottom-[3%] left-1/2 -translate-x-1/2 flex flex-col items-center group"
            >

              <Image
                src="/ESMSCCG/photos/team/tba.png"
                alt="member"
                width={90}
                height={90}
                className="rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)] group-hover:scale-110 transition duration-300 animate-pulse object-cover"
              />

              <p className="text-cyan-300 font-bold mt-1">Sem Proj</p>

              <p className="text-white text-xs leading-none mt-1">TBA</p>

            </a>

            {/* Coach */}

            <div className="absolute bottom-4 right-4 flex gap-6">

              {/* FIXED: Changed <a> to <Link> for external page routing */}
              <Link href="/about" className="flex flex-col items-center">

                <Image
                  src="/ESMSCCG/photos/team/f_madam.png"
                  alt="Coach"
                  width={70}
                  height={70}
                  className="rounded-full border-4 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.8)] object-cover"
                />

                <p className="text-yellow-300 text-sm mt-2">
                  Manager
                </p>

              </Link>

              <div className="flex flex-col items-center">

                <Image
                  src="/ESMSCCG/photos/team/f_bujul.jpeg"
                  alt="Assistant Coach"
                  width={70}
                  height={70}
                  className="rounded-full border-4 border-pink-400 shadow-[0_0_25px_rgba(244,114,182,0.8)] object-cover"
                />

                <p className="text-pink-300 text-sm mt-2">
                  Assistant
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

{/* ===================================================== */}
      {/* MEMBER DETAILS */}
      {/* ===================================================== */}

      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32">

        {/* ================================================= */}
        {/* PhD Students */}
        {/* ================================================= */}

        <h2 className="text-6xl font-bold text-cyan-400 mb-24">
          PhD Students
        </h2>

        {/* MEMBER 1 */}

        <div
          id="phd1"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40"
        >

          <div className="flex justify-center">

            <Image
              src="/ESMSCCG/photos/team/soumyadip.jpg"
              alt="member"
              width={420}
              height={420}
              className="rounded-[35px] border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.25)] object-cover"
            />

          </div>

          <div>

            <h3 className="text-5xl font-bold mb-8">
              Soumyadip Ray
            </h3>

            <div className="space-y-6 text-2xl text-gray-300 leading-relaxed">

              <p>
                <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                  Member Since:
                </span>{" "}
                January 2020 (Completed)
              </p>

              <p>
                <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                  Research Topic:
                </span>{" "}
                Excited State Quantum Dynamics ; Photophysics and Photochemistry ; Weak Interaction
              </p>

              <p>
                <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                  About me:
                </span>{" "}
                Cooking, Hip-Hop, Writing, Basketball, Table Tennis
              </p>


              <p>
                <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                  Contact:
                </span>{" "}

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=soumyadipray@students.iisertirupati.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white hover:underline transition duration-300"
                >
                  soumyadipray@students.iisertirupati.ac.in
                </a>

              </p>

            </div>

          </div>

        </div>


{/* MEMBER 2 */}

      <div
        id="phd2"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40"
      >

        <div className="order-2 lg:order-1">

          <h3 className="text-5xl font-bold mb-8">
            Arunima Verma
          </h3>

          <div className="space-y-6 text-2xl text-gray-300 leading-relaxed">

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Member Since:
              </span>{" "}
              January 2021
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Research Topic: 
              </span>{" "}
              Biomolecular Simulation of Protein and DNA ; MD Simulation with Enhanced Sampling Methods
            </p>

           <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                About me:
              </span>{" "}
               Sketching & Painting , Basketball, Reading & Writing
            </p>


            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Contact:
              </span>{" "}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arunimaverma@students.iisertirupati.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white hover:underline transition duration-300">
                arunimaverma@students.iisertirupati.ac.in
              </a>

            </p>

          </div>

        </div>

        <div className="flex justify-center order-1 lg:order-2">

          <Image
            src="/ESMSCCG/photos/team/arunima_1.jpg"
            alt="member"
            width={420}
            height={420}
            className="rounded-[35px] border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.25)] object-cover"
          />

        </div>

      </div>

      {/* MEMBER 3 */}

      <div
        id="phd3"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40"
      >

        <div className="flex justify-center">

          <Image
            src="/ESMSCCG/photos/team/subhadip_4.jpeg"
            alt="member"
            width={420}
            height={420}
            className="rounded-[35px] border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.25)] object-cover"
          />

        </div>

        <div>

          <h3 className="text-5xl font-bold mb-8">
           Suvadip Samanta
          </h3>

          <div className="space-y-6 text-2xl text-gray-300 leading-relaxed">

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Member Since:
              </span>{" "}
              August 2023
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Research Topic:
              </span>{" "}
              Reaction Mechanism ; Photochemistry ; QM/MM MD Simulation ; Force Field Development
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                About me:
              </span>{" "}
              Chess, Reading, Long walks
            </p>



            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Contact:
              </span>{" "}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=suvadipsamanta@students.iisertirupati.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white hover:underline transition duration-300">
                suvadipsamanta@students.iisertirupati.ac.in
              </a>

            </p>


          </div>

        </div>

      </div>

{/* MEMBER 4 */}

      <div
        id="phd4"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40"
      >

        <div className="order-2 lg:order-1">

          <h3 className="text-5xl font-bold mb-8">
           Momus Mikado Pradhan
          </h3>

          <div className="space-y-6 text-2xl text-gray-300 leading-relaxed">

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Member Since:
              </span>{" "}
              August 2025
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Research Topic:
              </span>{" "}
              Computational Spectroscopy ; Photophysics and Photochemistry
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                About me:
              </span>{" "}
              Cricket, Listening song, Newspaper Reader 
            </p>



            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Contact:
              </span>{" "}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=momusmikado20253219@students.iisertirupati.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white hover:underline transition duration-300">
                momusmikado20253219@students.iisertirupati.ac.in
              </a>

            </p>


          </div>

        </div>

        <div className="flex justify-center order-1 lg:order-2">

          <Image
            src="/ESMSCCG/photos/team/momus.jpg"
            alt="member"
            width={420}
            height={420}
            className="rounded-[35px] border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.25)] object-cover"
          />

        </div>

      </div>

      {/* ================================================= */}
      {/* JRF Project */}
      {/* ================================================= */}

      <h2 className="text-6xl font-bold text-cyan-400 mb-24 mt-32">
        JRF Project Student
      </h2>

      <div
        id="jrf1"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40"
      >

        <div className="flex justify-center">

          <Image
            src="/ESMSCCG/photos/team/sourav.jpg"
            alt="member"
            width={420}
            height={420}
            className="rounded-[35px] border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.25)] object-cover"
          />

        </div>

        <div>

          <h3 className="text-5xl font-bold mb-8">
            Sourav Bhandari
          </h3>

          <div className="space-y-6 text-2xl text-gray-300 leading-relaxed">

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Member Since:
              </span>{" "}
              December 2025
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Research Topic:
              </span>{" "}
              Classical MD simulation of Serotonin receptors
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                About me:
              </span>{" "}
               Numismatist, Philatelist, Gypsy traveller. Food-Football-Photography.
            </p>



            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Contact:
              </span>{" "}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=souravbhandari@labs.iisertirupati.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white hover:underline transition duration-300">
                souravbhandari@labs.iisertirupati.ac.in
              </a>

            </p>

          </div>

        </div>

      </div>

{/* ================================================= */}
      {/* MS Thesis */}
      {/* ================================================= */}

      <h2 className="text-6xl font-bold text-cyan-400 mb-24 mt-32">
        MS Thesis Students
      </h2>

      {/* MS 1 */}

      <div
        id="ms1"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40"
      >

        <div className="order-2 lg:order-1">

          <h3 className="text-5xl font-bold mb-8">
            Sulekha Bhardwaj
          </h3>

          <div className="space-y-6 text-2xl text-gray-300 leading-relaxed">

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Member Since:
              </span>{" "}
              August 2026
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Research Topic:
              </span>{" "}
              Photochemistry
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                About me:
              </span>{" "}
              Art, Music enthusiast, Watching reels, Sleeping
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Contact:
              </span>{" "}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sulekha20255209@students.iisertirupati.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white hover:underline transition duration-300">
                sulekha20255209@students.iisertirupati.ac.in
              </a>

            </p>

          </div>

        </div>

        <div className="flex justify-center order-1 lg:order-2">

          <Image
            src="/ESMSCCG/photos/team/sulekha_1.jpeg"
            alt="member"
            width={420}
            height={420}
            className="rounded-[35px] border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.25)] object-cover"
          />

        </div>

      </div>


      {/* MS 2 */}

      <div
        id="ms3"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40"
      >

        <div className="order-2 lg:order-1">

          <h3 className="text-5xl font-bold mb-8">
            Ina Dhar
          </h3>

          <div className="space-y-6 text-2xl text-gray-300 leading-relaxed">

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Member Since:
              </span>{" "}
              August 2025
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Research Topic:
              </span>{" "}
              Reaction Mechanism ; Biomolecular simulation ; QM/MM-MD Simulation
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                About me:
              </span>{" "}
              Singing, Dancing, Badminton, Overthinking
            </p>



           <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Contact:
              </span>{" "}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ina_20221066@students.iisertirupati.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white hover:underline transition duration-300">
                ina_20221066@students.iisertirupati.ac.in
              </a>

            </p>



          </div>

        </div>

        <div className="flex justify-center order-1 lg:order-2">

          <Image
            src="/ESMSCCG/photos/team/ina.jpg"
            alt="member"
            width={420}
            height={420}
            className="rounded-[35px] border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.25)] object-cover"
          />

        </div>

      </div>
{/* ================================================= */}
      {/* Semester Project */}
      {/* ================================================= */}

      <h2 className="text-6xl font-bold text-cyan-400 mb-24 mt-32">
        Semester Project Student
      </h2>

      <div
        id="semester1"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10"
      >

        <div className="flex justify-center">

          <Image
            src="/ESMSCCG/photos/team/tba.png"
            alt="member"
            width={420}
            height={420}
            className="rounded-[35px] border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.25)] object-cover"
          />

        </div>

        <div>

          <h3 className="text-5xl font-bold mb-8">
            TBA
          </h3>

          <div className="space-y-6 text-2xl text-gray-300 leading-relaxed">

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Member Since:
              </span>{" "}
              Aug, 2026
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Research Topic:
              </span>{" "}
              XXXXXXXXXXXXX
            </p>

            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                About me:
              </span>{" "}
              XXXXXXXXXXXXXXX
            </p>



            <p>
              <span className="text-lime-400 font-semibold drop-shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                Contact:
              </span>{" "}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=soumyadpray@students.iisertirupati.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white hover:underline transition duration-300">
                XXXXXXXXXXX
              </a>

            </p>

          </div>

        </div>

      </div>

    </section>


{/* ================================================= */}
      {/* Alumni */}
      {/* ================================================= */}

      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-20">

        <h2 className="text-6xl font-bold text-cyan-400 mb-24 mt-32 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">

          Alumni

        </h2>

        {/* Alumni Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Alumni 1 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">

            <Image
              src="/ESMSCCG/photos/team/alumni/f_hitesh.jpg"
              alt="alumni"
              width={240}
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              Hitesh Devalapelli
            </h3>

            <p className="text-cyan-300 text-lg mb-1">
              MS Thesis
            </p>

            <p className="text-gray-400">
              Aug,2025 — Jul,2026
            </p>

          </div>

          {/* Alumni 2 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">

            <Image
              src="/ESMSCCG/photos/team/alumni/f_atheena.jpg"
              alt="alumni"
              width={240}
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              Atheena Krishna D
            </h3>

            <p className="text-cyan-300 text-lg mb-1">
              MS Thesis
            </p>

            <p className="text-gray-400">
              Jan,2025 — Jul,2026
            </p>

          </div>

{/* Alumni  */}
	  <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">

            <Image
              src="/ESMSCCG/photos/team/alumni/f_gourav.png"
              alt="alumni"
              width={240}
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              Gourav Karhana
            </h3>

            <p className="text-cyan-300 text-lg mb-1">
              Semester Project
            </p>

            <p className="text-gray-400">
              Aug,2025 — Dec,2025
            </p>

          </div>

          {/* Alumni 3 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">

            <Image
              src="/ESMSCCG/photos/team/alumni/f_prasad.jpg"
              alt="alumni"
              width={240}
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              Prasad Dhali
            </h3>

            <p className="text-cyan-300 text-lg mb-1">
              Project Associate
            </p>

            <p className="text-gray-400">
              Sep,2024 — Jun,2025
            </p>

          </div>

          {/* Alumni 4 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">

            <Image
              src="/ESMSCCG/photos/team/alumni/f_arshjot.jpg"
              alt="alumni"
              width={240}
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              Arshjot Singh Dhaliwal
            </h3>

            <p className="text-cyan-300 text-lg mb-1">
              MS Thesis
            </p>

            <p className="text-gray-400">
              Aug,2024 — Jul,2025
            </p>

          </div>
{/* Alumni 5 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_prachi.jpg" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Prachi Gupta</h3>
            <p className="text-cyan-300 text-lg mb-1">Semester Project</p>
            <p className="text-gray-400">Jan,2025 — Jul,2025</p>
          </div>

          {/* Alumni 6 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_nihad.jpeg" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Nehad Ahmed</h3>
            <p className="text-cyan-300 text-lg mb-1">Semester Project</p>
            <p className="text-gray-400">Jan,2025 — Jul,2025</p>
          </div>

          {/* Alumni 7 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_vanisha.jpeg" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Vanisha Mishra</h3>
            <p className="text-cyan-300 text-lg mb-1">Semester Project</p>
            <p className="text-gray-400">Aug,2024 — Dec,2024</p>
          </div>

          {/* Alumni 8 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_vyshna_1.jpeg" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Vyshna Ratheesh</h3>
            <p className="text-cyan-300 text-lg mb-1">Semester Project</p>
            <p className="text-gray-400">Aug,2023 — Jul,2024</p>
          </div>

          {/* Alumni 9 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_abhishek_kumar.png" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Abhishek Kumar</h3>
            <p className="text-cyan-300 text-lg mb-1">Project Associate</p>
            <p className="text-gray-400">Aug,2023 — Jul,2024</p>
          </div>

          {/* Alumni 10 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_kruthika.png" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Kruthika Avadhani</h3>
            <p className="text-cyan-300 text-lg mb-1">MS Thesis</p>
            <p className="text-gray-400">Aug,2022 — Jul,2023</p>
          </div>

{/* Alumni 11 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_prantik_1.jpeg" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Prantic Debnath</h3>
            <p className="text-cyan-300 text-lg mb-1">Summer Project <span className="block">(IIT Tirupati)</span></p>
            <p className="text-gray-400">May,2022 — Jun,2022</p>
          </div>

          {/* Alumni 12 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_ranjhita.jpg" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Ranjitha R</h3>
            <p className="text-cyan-300 text-lg mb-1">MS Thesis</p>
            <p className="text-gray-400">XXXX — XXXX</p>
          </div>

          {/* Alumni 13 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_camelia.jpg" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Camelia Dutta</h3>
            <p className="text-cyan-300 text-lg mb-1">Semester project</p>
            <p className="text-gray-400">XXXX — XXXX</p>
          </div>

          {/* Alumni 14 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/f_prajwal.jpg" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Prajwal Dattatray Pisal</h3>
            <p className="text-cyan-300 text-lg mb-1">Semester Project</p>
            <p className="text-gray-400">XXXX — XXXX</p>
          </div>

          {/* Alumni 15 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/tba.png" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Aparna K</h3>
            <p className="text-cyan-300 text-lg mb-1">Summer Project</p>
            <p className="text-gray-400">XXXX — XXXX</p>
          </div>

          {/* Alumni 16 */}
          <div className="flex flex-col items-center text-center backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-6 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300">
            <Image 
              src="/ESMSCCG/photos/team/alumni/tba.png" 
              alt="alumni" 
              width={240} 
              height={240}
              className="rounded-2xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)] object-cover aspect-square mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-2"> Preet Bhanjan Pati</h3>
            <p className="text-cyan-300 text-lg mb-1">Summer Project</p>
            <p className="text-gray-400">XXXX — XXXX</p>
          </div>

        </div>

      </section>




{/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end mt-5 pb-8">

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
            className="flex flex-col items-center text-lime-300 hover:text-white hover:-translate-y-2 transition-all duration-300 animate-[pulse_1.2s_infinite]"
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

        {/* FIXED: Changed invalid text-white-300 to text-gray-300 */}
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
