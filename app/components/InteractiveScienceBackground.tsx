"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
};

export default function InteractiveScienceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame: number;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const particles: Particle[] = [];

    const particleCount = 111;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.96 + Math.random() * 0.72;

      particles.push({
        x: (Math.random() + Math.random()) / 2,
        y: (Math.random() + Math.random()) / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 3.2 + Math.random() * 2.5,
        opacity: 0.25 + Math.random() * 0.40,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const drawParticle = (particle: Particle, time: number) => {
      const x = particle.x * width;
      const y = particle.y * height;

      const pulse =
        0.85 + Math.sin(time * 0.0015 + particle.phase) * 0.15;

      const radius = particle.radius * pulse;

      const glow = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius * 5
      );

      glow.addColorStop(
        0,
        `rgba(34, 211, 238, ${particle.opacity * 0.8})`
      );

      glow.addColorStop(
        0.35,
        `rgba(34, 211, 238, ${particle.opacity * 0.25})`
      );

      glow.addColorStop(
        1,
        "rgba(34, 211, 238, 0)"
      );

      ctx.beginPath();
      ctx.arc(x, y, radius * 5, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(34, 211, 238, 0.9)";
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawConnections = () => {
      const maxDistance = 145;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const ax = a.x * width;
          const ay = a.y * height;
          const bx = b.x * width;
          const by = b.y * height;

          const dx = ax - bx;
          const dy = ay - by;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity =
              (1 - distance / maxDistance) * 0.12;

            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.lineWidth = 2.1;
            ctx.stroke();
          }
        }
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (mouse.active) {
          const x = particle.x * width;
          const y = particle.y * height;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const influence = 290;

          if (distance < influence && distance > 0) {
            const force =
              (1 - distance / influence) * 0.088;

            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        const speed = Math.sqrt(
          particle.vx * particle.vx +
          particle.vy * particle.vy
        );

        const minimumSpeed = 0.48;

        if (speed < minimumSpeed) {
          const angle = Math.atan2(
            particle.vy,
            particle.vx
          );

          particle.vx =
            Math.cos(angle) * minimumSpeed;

          particle.vy =
            Math.sin(angle) * minimumSpeed;
        }

        particle.vx *= 0.996;
        particle.vy *= 0.996;

        particle.x += particle.vx / width;
        particle.y += particle.vy / height;

        if (particle.x < -0.02) particle.x = 1.02;
        if (particle.x > 1.02) particle.x = -0.02;

        if (particle.y < -0.02) particle.y = 1.02;
        if (particle.y > 1.02) particle.y = -0.02;
      });

      drawConnections();

      particles.forEach((particle) => {
        drawParticle(particle, time);
      });

      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          220
        );

        gradient.addColorStop(
          0,
          "rgba(34, 211, 238, 0.10)"
        );

        gradient.addColorStop(
          0.35,
          "rgba(34, 211, 238, 0.035)"
        );

        gradient.addColorStop(
          1,
          "rgba(34, 211, 238, 0)"
        );

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(
          mouse.x,
          mouse.y,
          220,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    animationFrame = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}