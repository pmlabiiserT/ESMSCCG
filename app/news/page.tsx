"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function NewsGalleryPage() {
const newsRef = useRef<HTMLDivElement>(null);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
const [allImages, setAllImages] = useState<string[]>([]);
  const newsItems = [




          {
            title: "🎓 MS Thesis Defense",

            content:
              "MS Thesis Defense of Hitesh on 07/05/2026",

            doi: "",

            note:
              "Congratulations Hitesh and wishing you success for your future journey.",
          },



      {
        title: "📰 New Publication",

        content:
          "Soumyadip Ray, Atheena Krishna D. and Padmabati Mondal published in <strong>PCCP</strong> on 06 May 2026 ",

        doi:
          "10.1039/d5cp04855a",

        note:
          "Congratulations Atheena for your first publication (semester project work). Congrats to Soumyadip also.",
      },

      
      {
        title: "🎓 Open Defense",

        content:
          "Congratulations <strong>Dr. Soumyadip Ray</strong> for successful open defense on 02/04/2026",

        doi:
          "",

        note:
          "Wishing you all the best for your future journey. May your journey ahead be filled with impactful achievements.",
      },

      {
        title: "📰 New Publication",

        content:
          "Suvadip Samanta, Soumyadip Ray, Padmabati Mondal published in <strong>Advanced Theory and Simulations</strong>",

        doi:
          "10.1002/adts.202501684",

        note: "",
      },

      {
        title: "📰 New Publication",

        content:
          "Soumyadip Ray, Sudip Sasmal, Padmabati Mondal published in <strong>Journal of Chemical Physics</strong>",

        doi:
          "10.1063/5.0287684",

        note: "",
      },

      {
        title: "📰 New Publication",

        content:
          "Padmabati Mondal published in <strong>Nature Chemical Biology</strong>",

        doi:
          "10.1038/s41589-025-01961-w",

        note: "",
      },

      {
        title: "📰 New Publication",

        content:
          "Arshjot S Dhaliwal, Arunima Verma and Padmabati Mondal published in <strong>RSC Advances</strong>",

        doi:
          "10.1039/D5RA03789A",

        note:
          "Congratulations Arshjot for your publications on your MS thesis work.",
      },

      {
        title: "🏆 Achievement",

        content:
          "<strong>Atheena Krishna D</strong> received the Summer Undergraduate Research Exposure (SURE) internship fellowship at IIT Hyderabad.",

        doi: "",

        note: "",
      },

      {
        title: "🏆 Best Presentation Award",

        content:
          "<strong>Arunima Verma</strong> received best oral presentation award in Statistical Mechanics in Chemistry and Biology 2024 (SMCB2024) held at IIT Tirupati (16-19 December, 2024).",

        doi: "",

        note: "",
      },

  ];

  const gallery = [


    {
      caption: "MS Thesis Defense of Hitesh (07/05/2026)",
      images: [
        "/ESMSCCG/photos/news/hitesh_1.jpeg",
        "/ESMSCCG/photos/news/hitesh_2.jpeg",
        "/ESMSCCG/photos/news/hitesh_3.jpeg",
      ],
    },



    {
      caption: "Dinner party by Dr. Ray for his successful thesis defence (03/04/2026)",
      images: [
        "/ESMSCCG/photos/news/ray_party.jpeg",
        
      ],
    },




    {
      caption: "Soumyadip Ray's Open Defence: 02/04/2026",
      images: [
        "/ESMSCCG/photos/news/ray_defence/f_1.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_2.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_3.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_4.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_5.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_6.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_7.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_8.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_9.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_10.jpg",
        "/ESMSCCG/photos/news/ray_defence/f_11.jpg",
      ],
    },

    {
      caption: "IINCM 2026 (IISER Tirupati): 9-10 Jan, 2026",
      images: [
        "/ESMSCCG/photos/news/iincm_2026/f_1.jpg",
        "/ESMSCCG/photos/news/iincm_2026/f_2.jpg",
        "/ESMSCCG/photos/news/iincm_2026/f_3.jpg",
        "/ESMSCCG/photos/news/iincm_2026/f_4.jpg",
        "/ESMSCCG/photos/news/iincm_2026/f_5.jpg",
        "/ESMSCCG/photos/news/iincm_2026/f_6.jpg",
        "/ESMSCCG/photos/news/iincm_2026/f_7.jpg",
        "/ESMSCCG/photos/news/iincm_2026/f_8.jpg",
        "/ESMSCCG/photos/news/iincm_2026/f_9.jpg",
      ],
    },

    {
      caption: "Lab Dinner 2025",
      images: [
        "/ESMSCCG/photos/news/2025_2.jpg",
        "/ESMSCCG/photos/news/2025_1.png",
      ],
    },

    {
      caption: "CSTT-2025",
      images: [
        "/ESMSCCG/photos/news/2025_f.jpg",
      ],
    },

    {
      caption: "Chemistry Day - 2024",
      images: [
        "/ESMSCCG/photos/news/2024.jpg",
        
      ],
    },

    {
      caption: "Teachers' Day - 2023",
      images: [
        "/ESMSCCG/photos/news/2023_teachers_1.jpeg",
        "/ESMSCCG/photos/news/2023_teachers_2_f.jpeg",
      ],
    },


    {
      caption: "PMLab 2023",
      images: [
        "/ESMSCCG/photos/news/2023.jpeg",
      ],
    },



    {
      caption: "Lab Dinner 2022",
      images: [
        "/ESMSCCG/photos/news/2022_1.jpeg",
        "/ESMSCCG/photos/news/2022_2_f.jpeg",
        "/ESMSCCG/photos/news/2022_4.jpeg",
      ],
    },



    

  ];



  useEffect(() => {

  const container = newsRef.current;

  if (!container) return;

  let interval: NodeJS.Timeout;

  const startScroll = () => {

    interval = setInterval(() => {

      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight
      ) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += 1;
      }

    }, 35);
  };

  startScroll();

  container.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  container.addEventListener("mouseleave", () => {
    startScroll();
  });

  return () => clearInterval(interval);

}, []);


const AutoScrollGallery = ({ images }: { images: string[] }) => {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const container = scrollRef.current;

    if (!container) return;

    let interval: NodeJS.Timeout;

    const startScroll = () => {

      interval = setInterval(() => {

        const width = container.clientWidth;

        if (
          container.scrollLeft + width >=
          container.scrollWidth - 5
        ) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: width,
            behavior: "smooth",
          });
        }

      }, 3500);
    };

    startScroll();

    container.addEventListener("mouseenter", () => {
      clearInterval(interval);
    });

    container.addEventListener("mouseleave", () => {
      startScroll();
    });

    return () => clearInterval(interval);

  }, []);

  return (

 <div className="relative">

  {/* LEFT BUTTON */}

  {images.length > 1 && (

    <button
      onClick={() => {
        scrollRef.current?.scrollBy({
          left: -scrollRef.current.clientWidth,
          behavior: "smooth",
        });
      }}
      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-3xl hover:scale-110 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all duration-300"
    >
      ‹
    </button>

  )}

 {/* RIGHT BUTTON */}

  {images.length > 1 && (

    <button
      onClick={() => {
        scrollRef.current?.scrollBy({
          left: scrollRef.current.clientWidth,
          behavior: "smooth",
        });
      }}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-3xl hover:scale-110 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all duration-300"
    >
      ›
    </button>

  )}

  {/* IMAGE SCROLLER */}

  <div
    ref={scrollRef}
    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
  >

    {images.map((img, idx) => (

      <div
        key={idx}
        className="min-w-full snap-center"
      >

        <Image
          src={img}
          alt="gallery"
          width={600}
          height={450}
          onClick={() => {
            setSelectedImage(img);
            setAllImages(images);
          }}
          className="w-full h-[320px] object-cover cursor-pointer"
        />

      </div>

    ))}

  </div>

</div> 
  );
};



  return (
    <main className="min-h-screen bg-[url('/ESMSCCG/photos/news/bg.png')] bg-cover bg-center bg-fixed text-white px-8 pt-6 pb-24 relative overflow-hidden">

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />







      {/* ================================================= */}
      {/* NEWS SECTION */}
      {/* ================================================= */}

      <section className="relative z-10 max-w-7xl mx-auto mb-10">

        <h1 className="text-7xl font-black mb-12 ml-12 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">

          Latest News

        </h1>

        <div ref={newsRef} className="h-[500px] overflow-y-auto pr-4 space-y-8 scrollbar-thin scrollbar-thumb-cyan-400/40">

          {newsItems.map((item, index) => (

            <div
              key={index}
              className="relative overflow-hidden backdrop-blur-md bg-black/35 border border-cyan-400/15 rounded-[10px] p-3 hover:scale-[1.03] hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_70px_rgba(34,211,238,0.35)] transition-all duration-500"
            >

              {/* Blinking Dot */}

              <div className="absolute top-7 right-7 w-4 h-4 rounded-full bg-lime-400 animate-ping" />

              <h2 className="text-4xl font-bold text-cyan-300 mb-1">

                {item.title}

              </h2>

              <p className="text-2xl text-gray-200 leading-relaxed mb-1">

                <span dangerouslySetInnerHTML={{ __html: item.content }} />

              </p>

              {item.doi && (

                <p className="text-xl mt-4">

                  <span className="italic text-pink-300">
                    DOI:
                  </span>{" "}

                  <a
                    href={`https://doi.org/${item.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white transition duration-300 hover:underline"
                  >

                    {item.doi}

                  </a>

                </p>

              )}

              {item.note && (

                <p className="text-xl text-lime-300 mt-1 leading-relaxed">

                  {item.note}

                </p>

              )}

            </div>

          ))}

        </div>

      </section>

      {/* ================================================= */}
      {/* GALLERY */}
      {/* ================================================= */}

      <section className="relative z-10 max-w-7xl mx-auto">

        <h1 className="text-7xl font-black mb-20 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">

          Gallery

        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">

          {gallery.map((item, index) => (

            <div
              key={index}
              className="backdrop-blur-md bg-black/25 border border-cyan-400/10 rounded-[35px] overflow-hidden hover:scale-[1.07] hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_80px_rgba(34,211,238,0.45)] transition-all duration-500"
            >

              {/* Horizontal Scroll Photos */}

              <AutoScrollGallery images={item.images} />

              
              {/* Dots */}

              <div className="flex justify-center gap-3 py-5">

                {item.images.map((_, idx) => (

                  <div
                    key={idx}
                    className="w-3 h-3 rounded-full bg-cyan-300/60"
                  />

                ))}

              </div>

              {/* Caption */}

              <div className="px-8 pb-8 text-center">

                <p className="text-cyan-300 text-xl tracking-[0.03em]">

                  {item.caption}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>




{/* ================================================= */}
{/* FULLSCREEN IMAGE VIEWER */}
{/* ================================================= */}

{selectedImage && (

  <div
    className="fixed inset-0 z-[999] bg-black/92 backdrop-blur-md flex items-center justify-center p-10"
  >

    {/* CLOSE BUTTON */}

    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-8 right-10 text-white text-6xl hover:text-cyan-400 transition duration-300 z-30"
    >
      ×
    </button>

    {/* LEFT BUTTON */}

    {allImages.length > 1 && (

      <button
        onClick={() => {

          const currentIndex = allImages.indexOf(selectedImage);

          const prevIndex =
            currentIndex === 0
              ? allImages.length - 1
              : currentIndex - 1;

          setSelectedImage(allImages[prevIndex]);
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-black/60 border border-cyan-400/30 text-cyan-300 text-5xl hover:scale-110 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all duration-300"
      >
        ‹
      </button>

    )}



    {/* RIGHT BUTTON */}

    {allImages.length > 1 && (

      <button
        onClick={() => {

          const currentIndex = allImages.indexOf(selectedImage);

          const nextIndex =
            currentIndex === allImages.length - 1
              ? 0
              : currentIndex + 1;

          setSelectedImage(allImages[nextIndex]);
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-black/60 border border-cyan-400/30 text-cyan-300 text-5xl hover:scale-110 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all duration-300"
      >
        ›
      </button>

)}

    {/* FULLSCREEN IMAGE */}

    <Image
      src={selectedImage}
      alt="fullscreen"
      width={1600}
      height={1200}
      className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_60px_rgba(34,211,238,0.35)]"
    />

  </div>

)}






      
{/* ================================================= */}
{/* FOOTER */}
{/* ================================================= */}

<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end mt-10 pb-8">

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
