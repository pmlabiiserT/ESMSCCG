"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#081c34] to-[#0d2d52] text-white px-8 pt-10 pb-24">

      

{/* ================================================= */}
{/* TOP LOGOS */}
{/* ================================================= */}

<div className="relative z-20 max-w-7xl mx-auto flex justify-end items-center gap-6 mb-0">

  <a href="/" className="flex items-center gap-5 group">

    {/* Lab Logo */}

    <Image
      src="/ESMSCCG/photos/home_pic/logo_round_wo_B.png"
      alt="Lab Logo"
      width={60}
      height={60}
      className="drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]"
    />

    {/* Text */}

    <div>

      <h1 className="text-cyan-400 text-3xl font-bold group-hover:text-white transition">

        PMLab

      </h1>

      <p className="text-gray-300 tracking-[0.25em] text-sm">

        IISER Tirupati

      </p>

    </div>

    {/* IISER Logo */}

    <Image
      src="/ESMSCCG/photos/home_pic/iisert_logo.jpg"
      alt="IISER Logo"
      width={60}
      height={60}
      className="drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]"
    />

  </a>

</div>




      {/* ================================================= */}
      {/* CONTACT */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto mb-40">

        <h1 className="text-7xl font-black mb-10 ml-12 drop-shadow-[0_0_25px_rgba(255,255,255,0.12)]">

          Contact

        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="space-y-12">

            {/* Address */}

            <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Address
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">

                Office No 30, Lab No. 16 <br />
                Research Block - 4th Floor <br />
                Department of Chemistry <br />
                IISER Tirupati <br />
                Srinivasapuram, Venkatagiri Road, Jangalapalli Village, <br />
                Panguru (G.P), Yerpedu Mandal, Tirupati District,  <br />
                Andhra Pradesh, India - 517619

              </p>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Office No 30, Lab No. 16, Research Block - 4th Floor, Department of Chemistry, IISER Tirupati, Srinivasapuram, Venkatagiri Road, Jangalapalli Village, Panguru (G.P), Yerpedu Mandal, Tirupati District, Andhra Pradesh, India - 517619"
                  );

                  alert("Address copied!");
                }}
                className="px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition duration-300"
              >
                Copy Address
              </button>

            </div>

            {/* Phone */}

            <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Phone
              </h2>

              <p className="text-2xl text-gray-300 mb-6">

                +91 8772500926

              </p>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("+91 8772500926");

                  alert("Phone number copied!");
                }}
                className="px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition duration-300"
              >
                Copy Number
              </button>

            </div>

            {/* Email */}

            <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Email
              </h2>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=padmabati.mondal@labs.iisertirupati.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-300 hover:text-white hover:underline transition"
              >
                padmabati.mondal@labs.iisertirupati.ac.in
              </a>

              <div className="mt-6">


              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "padmabati.mondal@labs.iisertirupati.ac.in"
                  );

                  alert("Email copied!");
                }}
                className="px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition duration-300"
              >
                Copy Email
              </button>   


              </div>

            </div>

          </div>

          {/* RIGHT MAP */}

              <div className="rounded-[35px] overflow-hidden border border-cyan-400/20 shadow-[0_0_45px_rgba(34,211,238,0.18)] h-[700px]">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6492.374880398716!2d79.59710534056399!3d13.747003176023401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4996d4dd7ba3%3A0x57d3825378f71777!2sIndian%20Institute%20of%20Science%20Education%20and%20Research%20Tirupati!5e1!3m2!1sen!2sin!4v1779745736297!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* Opportunities */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto">

        <h1 className="text-7xl font-black mb-20 drop-shadow-[0_0_25px_rgba(255,255,255,0.12)]">

          Opportunities

        </h1>

        <div className="backdrop-blur-md bg-black/20 border border-cyan-400/10 rounded-[40px] p-14 text-center hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] transition-all duration-500">

          <h2 className="text-5xl font-bold text-cyan-300 mb-10">

            Join Our Lab

          </h2>

          <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10">

            Opportunities for PhD, MS Thesis,
            semester projects, and research collaborations
            will be announced here.

          </p>


          <div className="mt-12 text-gray-400 text-xl tracking-[0.25em] uppercase">

            Stay Tuned for Future Opportunities

          </div>

          

          <div className="mt-16 flex justify-center">

            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

          </div>

        </div>

      </section>

      







{/* ================================================= */}
{/* FOOTER */}
{/* ================================================= */}

<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end mt-15 pb-0">

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
