"use client";

import { useEffect, useRef } from "react";

type Electron = {
  angle: number;
  speed: number;
};

export default function QuantumFieldBackground() {
  const fieldRef = useRef<HTMLDivElement>(null);

  const electrons: Electron[] = [
    { angle: 0, speed: 0.018 },
    { angle: Math.PI * 0.65, speed: 0.014 },
    { angle: Math.PI * 1.25, speed: 0.011 },
    { angle: Math.PI * 1.8, speed: 0.016 },
    { angle: Math.PI * 0.25, speed: 0.013 },
  ];

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      if (fieldRef.current) {
        fieldRef.current.style.setProperty(
          "--field-x",
          `${x * 84}px`
        );

        fieldRef.current.style.setProperty(
          "--field-y",
          `${y * 60}px`
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateElectrons = () => {
      const root = fieldRef.current;

      if (root) {
        electrons.forEach((electron, index) => {
          electron.angle += electron.speed;

          const electronElement = root.querySelector(
            `[data-electron="${index}"]`
          ) as SVGCircleElement | null;

          if (!electronElement) return;

          const orbit = [
            { rx: 390, ry: 170, rotation: -12 },
            { rx: 330, ry: 135, rotation: 24 },
            { rx: 270, ry: 105, rotation: -38 },
            { rx: 470, ry: 230, rotation: 8 },
            { rx: 410, ry: 150, rotation: 65 },
          ][index];

          const angle = electron.angle;

          const x =
            orbit.rx * Math.cos(angle);

          const y =
            orbit.ry * Math.sin(angle);

          const rotation =
            (orbit.rotation * Math.PI) / 180;

          const rotatedX =
            x * Math.cos(rotation) -
            y * Math.sin(rotation);

          const rotatedY =
            x * Math.sin(rotation) +
            y * Math.cos(rotation);

          electronElement.setAttribute(
            "cx",
            `${500 + rotatedX}`
          );

          electronElement.setAttribute(
            "cy",
            `${430 + rotatedY}`
          );
        });
      }

      animationFrame = requestAnimationFrame(animateElectrons);
    };

    animationFrame = requestAnimationFrame(animateElectrons);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={fieldRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >

      {/* ================================================= */}
      {/* BASE BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-blue-900 to-slate-800" />

      {/* Central scientific glow */}

      <div className="absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-cyan-400/[0.06] blur-[130px]" />


      {/* ================================================= */}
      {/* MAIN QUANTUM ORBITAL FIELD */}
      {/* ================================================= */}

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.55] animate-[orbitalRotate_14s_ease-in-out_infinite]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        style={{
          transform:
            "translate3d(var(--field-x, 0px), var(--field-y, 0px), 0)",
        }}
      >

        {/* Main orbital */}

        <ellipse
          cx="500"
          cy="430"
          rx="390"
          ry="170"
          fill="none"
          stroke="rgba(34,211,238,0.48)"
          strokeWidth="4"
          transform="rotate(-12 500 430)"
        />

        {/* Second orbital */}

        <ellipse
          cx="500"
          cy="430"
          rx="330"
          ry="135"
          fill="none"
          stroke="rgba(56,189,248,0.38)"
          strokeWidth="3.4"
          transform="rotate(24 500 430)"
        />

        {/* Third orbital */}

        <ellipse
          cx="500"
          cy="430"
          rx="270"
          ry="105"
          fill="none"
          stroke="rgba(34,211,238,0.32)"
          strokeWidth="3"
          transform="rotate(-38 500 430)"
        />

        {/* Outer field */}

        <ellipse
          cx="500"
          cy="430"
          rx="470"
          ry="230"
          fill="none"
          stroke="rgba(59,130,246,0.24)"
          strokeWidth="2.6"
          transform="rotate(8 500 430)"
        />

        {/* Orbital crossing */}

        <ellipse
          cx="500"
          cy="430"
          rx="410"
          ry="150"
          fill="none"
          stroke="rgba(34,211,238,0.22)"
          strokeWidth="2.6"
          transform="rotate(65 500 430)"
        />


        {/* ================================================= */}
        {/* ELECTRONS */}
        {/* ================================================= */}

        <circle
          data-electron="0"
          cx="890"
          cy="430"
          r="7"
          fill="#67e8f9"
          opacity="0.95"
          style={{
            filter:
              "drop-shadow(0 0 10px rgba(34,211,238,1))",
          }}
        />

        <circle
          data-electron="1"
          cx="830"
          cy="430"
          r="6"
          fill="#38bdf8"
          opacity="0.95"
          style={{
            filter:
              "drop-shadow(0 0 9px rgba(56,189,248,1))",
          }}
        />

        <circle
          data-electron="2"
          cx="770"
          cy="430"
          r="5.5"
          fill="#67e8f9"
          opacity="0.95"
          style={{
            filter:
              "drop-shadow(0 0 8px rgba(34,211,238,1))",
          }}
        />

        <circle
          data-electron="3"
          cx="970"
          cy="430"
          r="6"
          fill="#60a5fa"
          opacity="0.95"
          style={{
            filter:
              "drop-shadow(0 0 9px rgba(59,130,246,1))",
          }}
        />

        <circle
          data-electron="4"
          cx="910"
          cy="430"
          r="5.5"
          fill="#22d3ee"
          opacity="0.95"
          style={{
            filter:
              "drop-shadow(0 0 8px rgba(34,211,238,1))",
          }}
        />

      </svg>



      {/* ================================================= */}
      {/* NO VIGNETTE */}
      {/* ================================================= */}


      <style jsx>{`

        /* ================================================= */
        /* MAIN ORBITAL ROTATION */
        /* ================================================= */

        @keyframes orbitalRotate {

          0% {
            transform:
              translate3d(
                var(--field-x, 0px),
                var(--field-y, 0px),
                0
              )
              rotate(-3deg)
              scale(1);
          }

          20% {
            transform:
              translate3d(
                var(--field-x, 0px),
                var(--field-y, 0px),
                0
              )
              rotate(2deg)
              scale(1.008);
          }

          40% {
            transform:
              translate3d(
                var(--field-x, 0px),
                var(--field-y, 0px),
                0
              )
              rotate(-2deg)
              scale(1.012);
          }

          60% {
            transform:
              translate3d(
                var(--field-x, 0px),
                var(--field-y, 0px),
                0
              )
              rotate(3deg)
              scale(1.008);
          }

          80% {
            transform:
              translate3d(
                var(--field-x, 0px),
                var(--field-y, 0px),
                0
              )
              rotate(-1.5deg)
              scale(1.004);
          }

          100% {
            transform:
              translate3d(
                var(--field-x, 0px),
                var(--field-y, 0px),
                0
              )
              rotate(-3deg)
              scale(1);
          }

        }


        /* ================================================= */
        /* SECONDARY FIELD */
        /* ================================================= */

        @keyframes quantumDrift {

          0% {
            transform:
              translate3d(
                calc(var(--field-x, 0px) * -0.8),
                calc(var(--field-y, 0px) * -0.8),
                0
              )
              scale(1);
          }

          50% {
            transform:
              translate3d(
                calc(var(--field-x, 0px) * -0.8 + 1.5%),
                calc(var(--field-y, 0px) * -0.8 + 1.5%),
                0
              )
              scale(1.02);
          }

          100% {
            transform:
              translate3d(
                calc(var(--field-x, 0px) * -0.8 - 1%),
                calc(var(--field-y, 0px) * -0.8 - 1%),
                0
              )
              scale(1.015);
          }

        }


        /* ================================================= */
        /* MOBILE */
        /* ================================================= */

        @media (max-width: 768px) {

          svg {
            opacity: 0.40;
          }

          @keyframes orbitalRotate {

            0% {
              transform:
                translate3d(
                  var(--field-x, 0px),
                  var(--field-y, 0px),
                  0
                )
                rotate(0deg)
                scale(1);
            }

            25% {
              transform:
                translate3d(
                  var(--field-x, 0px),
                  var(--field-y, 0px),
                  0
                )
                rotate(90deg)
                scale(1.01);
            }

            50% {
              transform:
                translate3d(
                  var(--field-x, 0px),
                  var(--field-y, 0px),
                  0
                )
                rotate(180deg)
                scale(1.015);
            }

            75% {
              transform:
                translate3d(
                  var(--field-x, 0px),
                  var(--field-y, 0px),
                  0
                )
                rotate(270deg)
                scale(1.01);
            }

            100% {
              transform:
                translate3d(
                  var(--field-x, 0px),
                  var(--field-y, 0px),
                  0
                )
                rotate(360deg)
                scale(1);
            }

          }

        }


        /* ================================================= */
        /* REDUCED MOTION */
        /* ================================================= */

        @media (prefers-reduced-motion: reduce) {

          svg {
            animation: none !important;
          }

        }

      `}</style>

    </div>
  );
}