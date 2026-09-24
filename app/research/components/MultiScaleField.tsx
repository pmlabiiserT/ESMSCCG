"use client";

import { useEffect, useRef } from "react";

type AtomElement = "C" | "N" | "O" | "S" | "H";

type Atom = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  element: AtomElement;
  age: number;
};

type Molecule = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  rotation: number;
  scale: number;
  variant: number;
  age: number;
};

type Protein = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  rotation: number;
  scale: number;
  variant: number;
  size: number;
  phase: number;
  age: number;
};

type Membrane = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  rotation: number;
  scale: number;
  age: number;
};

type Complex = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  rotation: number;
  scale: number;
  variant: number;
  age: number;
};

type Fusion = {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
};

export default function MultiScaleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const atoms: Atom[] = [];
    const molecules: Molecule[] = [];
    const proteins: Protein[] = [];
    const membranes: Membrane[] = [];
    const complexes: Complex[] = [];
    const fusions: Fusion[] = [];

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

    const randomPosition = () => ({
      x: width * 0.2 + Math.random() * (width * 0.6),
      y: height * 0.2 + Math.random() * (height * 0.6),
    });

    const getSafeSpawnPosition = (
      avoidList: { x: number; y: number }[],
      minDistance: number
    ) => {
      let pos = { x: 0, y: 0 };
      let isSafe = false;
      let attempts = 0;

      // Try up to 50 times to find a spawn point far enough away from existing objects
      while (!isSafe && attempts < 50) {
        pos = {
          x: width * 0.15 + Math.random() * (width * 0.7),
          y: height * 0.15 + Math.random() * (height * 0.7),
        };
        isSafe = true;
        for (const obj of avoidList) {
          if (distanceBetween(pos, obj) < minDistance) {
            isSafe = false;
            break;
          }
        }
        attempts++;
      }
      return pos;
    };

    const distanceBetween = (
      a: { x: number; y: number },
      b: { x: number; y: number }
    ) => {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const wrap = (
      object: { x: number; y: number },
      margin: number
    ) => {
      if (object.x < -margin) object.x = width + margin;
      if (object.x > width + margin) object.x = -margin;

      if (object.y < -margin) object.y = height + margin;
      if (object.y > height + margin) object.y = -margin;
    };

    const createAtoms = (count: number) => {
      // Gather existing structures so atoms don't spawn on top of them
      const avoidList: { x: number; y: number }[] = [...molecules, ...proteins, ...atoms];
      
      for (let i = 0; i < count; i++) {
        const position = getSafeSpawnPosition(avoidList, 500); // 500px safe distance
        avoidList.push(position); // Make sure the 2nd atom spawns far from the 1st!

        const direction = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 0.3; // Much faster spawning speed
        const elements: AtomElement[] = ["C", "C", "N", "O", "H", "S"];

        atoms.push({
          x: position.x,
          y: position.y,
          vx: Math.cos(direction) * speed,
          vy: Math.sin(direction) * speed,
          radius: (1.7 + Math.random() * 1.1) * 3.5, 
          phase: Math.random() * Math.PI * 2,
          element: elements[Math.floor(Math.random() * elements.length)],
          age: 0,
        });
      }
    };

    const createMembranes = (count: number) => {
      const avoidList: { x: number; y: number }[] = [...proteins];
      
      for (let i = 0; i < count; i++) {
        const position = getSafeSpawnPosition(avoidList, 700); // 700px safe distance from protein
        const direction = Math.random() * Math.PI * 2;

        membranes.push({
          x: position.x,
          y: position.y,
          vx: Math.cos(direction) * 0.2, // Faster drift
          vy: Math.sin(direction) * 0.2,
          angle: Math.random() * Math.PI * 2,
          rotation: (Math.random() - 0.5) * 0.00045,
          scale: (0.75 + Math.random() * 0.35) * 3.5, 
          age: 0,
        });
      }
    };

    const createComplex = (
      x: number,
      y: number,
      vx: number,
      vy: number,
      scale: number
    ) => {
      complexes.push({
        x,
        y,
        vx,
        vy,
        angle: Math.random() * Math.PI * 2,
        rotation: (Math.random() - 0.5) * 0.0006,
        scale,
        variant: Math.floor(Math.random() * 2),
        age: 0,
      });
    };

    const applyMutualAttraction = (
      a: { x: number; y: number; vx: number; vy: number },
      b: { x: number; y: number; vx: number; vy: number },
      force: number
    ) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 0 && dist < 3000) {
        a.vx += (dx / dist) * force;
        a.vy += (dy / dist) * force;
        b.vx -= (dx / dist) * force;
        b.vy -= (dy / dist) * force;
      }
    };

    const elementColor = (element: AtomElement) => {
      switch (element) {
        case "N":
          return "rgba(96,165,250,0.85)";
        case "O":
          return "rgba(248,113,113,0.85)";
        case "S":
          return "rgba(250,204,21,0.82)";
        case "H":
          return "rgba(226,232,240,0.72)";
        default:
          return "rgba(103,232,249,0.82)";
      }
    };

    const drawGlow = (
      x: number,
      y: number,
      radius: number,
      color: string,
      alpha: number
    ) => {
      if (radius <= 0) return;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
      glow.addColorStop(0, color.replace("ALPHA", String(alpha)));
      glow.addColorStop(1, color.replace("ALPHA", "0"));

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawAtom = (atom: Atom, time: number) => {
      const pulse = 1 + Math.sin(time * 0.0014 + atom.phase) * 0.15;
      const scaleAnim = Math.min(1, atom.age / 20); // Animates scale up when born
      const radius = atom.radius * pulse * scaleAnim;

      drawGlow(atom.x, atom.y, radius * 5, "rgba(34,211,238,ALPHA)", 0.16);

      ctx.save();
      ctx.strokeStyle = "rgba(103,232,249,0.16)";
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.ellipse(atom.x, atom.y, radius * 2.4, radius * 0.8, atom.phase, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(atom.x, atom.y, radius * 2.4, radius * 0.8, atom.phase + Math.PI / 2, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(atom.x, atom.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = elementColor(atom.element);
      ctx.fill();

      ctx.restore();
    };

    const drawBond = (x1: number, y1: number, x2: number, y2: number, alpha = 0.34) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(125,211,252,${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    };

    const drawMolecule = (molecule: Molecule) => {
      ctx.save();
      ctx.translate(molecule.x, molecule.y);
      ctx.rotate(molecule.angle);
      
      const scaleAnim = Math.min(1, molecule.age / 30); // Smooth grow-in animation
      ctx.scale(molecule.scale * scaleAnim, molecule.scale * scaleAnim);

      // Simple Amino Acid (Alanine) structure
      const points = [
        { x: 0, y: 0, element: "C" as AtomElement },      // 0: Central Alpha Carbon
        { x: -24, y: 0, element: "N" as AtomElement },    // 1: Amino Group
        { x: 24, y: -12, element: "C" as AtomElement },   // 2: Carboxyl Carbon
        { x: 24, y: -32, element: "O" as AtomElement },   // 3: Carboxyl Oxygen (=O)
        { x: 44, y: 0, element: "O" as AtomElement },     // 4: Carboxyl Hydroxyl (-OH)
        { x: 0, y: 26, element: "C" as AtomElement },     // 5: Methyl Group (Side chain)
        { x: 0, y: -20, element: "H" as AtomElement },    // 6: Alpha Hydrogen
      ];

      drawBond(points[0].x, points[0].y, points[1].x, points[1].y); // C-alpha to N
      drawBond(points[0].x, points[0].y, points[2].x, points[2].y); // C-alpha to Carboxyl C
      drawBond(points[2].x, points[2].y, points[3].x, points[3].y); // Carboxyl C to =O
      drawBond(points[2].x, points[2].y, points[4].x, points[4].y); // Carboxyl C to -OH
      drawBond(points[0].x, points[0].y, points[5].x, points[5].y); // C-alpha to Side chain
      drawBond(points[0].x, points[0].y, points[6].x, points[6].y); // C-alpha to H


      points.forEach((point) => {
        drawGlow(point.x, point.y, 8, "rgba(34,211,238,ALPHA)", 0.10);

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.element === "H" ? 2.4 : 4.1, 0, Math.PI * 2);
        ctx.fillStyle = elementColor(point.element);
        ctx.fill();

        ctx.strokeStyle = "rgba(226,232,240,0.18)";
        ctx.lineWidth = 0.55;
        ctx.stroke();
      });

      ctx.restore();
    };

    const drawProteinHelix = (
      offsetX: number,
      offsetY: number,
      length: number,
      radius: number,
      phase: number,
      opacity: number
    ) => {
      const turns = 2.6;
      const points = 42;

      ctx.beginPath();

      for (let i = 0; i <= points; i++) {
        const t = i / points;
        const x = offsetX + (t - 0.5) * length;
        const y = offsetY + Math.sin(t * Math.PI * 2 * turns + phase) * radius;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = `rgba(96,165,250,${opacity})`;
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      ctx.stroke();

      ctx.beginPath();

      for (let i = 0; i <= points; i++) {
        const t = i / points;
        const x = offsetX + (t - 0.5) * length;
        const y = offsetY + Math.sin(t * Math.PI * 2 * turns + phase + Math.PI) * radius;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = `rgba(34,211,238,${opacity * 0.55})`;
      ctx.lineWidth = 1.15;
      ctx.stroke();

      for (let i = 0; i <= points; i += 4) {
        const t = i / points;
        const x = offsetX + (t - 0.5) * length;
        const y = offsetY + Math.sin(t * Math.PI * 2 * turns + phase) * radius;

        ctx.beginPath();
        ctx.arc(x, y, 1.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(103,232,249,${opacity * 0.8})`;
        ctx.fill();
      }
    };

    const drawProtein = (protein: Protein, time: number) => {
      ctx.save();
      ctx.translate(protein.x, protein.y);
      ctx.rotate(protein.angle);

      const size = protein.size;
      const breathing = Math.sin(time * 0.0008 + protein.phase) * 0.05;
      const scaleAnim = Math.min(1, protein.age / 40); // Smooth grow-in animation

      ctx.scale((1 + breathing) * scaleAnim, (1 - breathing * 0.5) * scaleAnim);

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.95);
      gradient.addColorStop(0, "rgba(59,130,246,0.10)");
      gradient.addColorStop(0.65, "rgba(34,211,238,0.035)");
      gradient.addColorStop(1, "rgba(34,211,238,0)");

      ctx.beginPath();
      ctx.arc(0, 0, size * 0.95, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      drawProteinHelix(-size * 0.28, -size * 0.28, size * 0.90, size * 0.10, protein.phase, 0.72);
      drawProteinHelix(size * 0.20, -size * 0.08, size * 0.82, size * 0.105, protein.phase + 1.5, 0.68);
      drawProteinHelix(-size * 0.15, size * 0.20, size * 0.88, size * 0.11, protein.phase + 3.0, 0.64);

      ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const t = i / 60;
        const angle = t * Math.PI * 2.3 + protein.phase;
        const radius = size * (0.20 + Math.sin(t * Math.PI * 3) * size * 0.003);
        const x = Math.cos(angle) * radius * 1.45;
        const y = Math.sin(angle) * radius * 0.70;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(59,130,246,0.34)";
      ctx.lineWidth = 1.3;
      ctx.stroke();

      const nodes = [
        [-0.55, -0.38], [-0.20, -0.08], [0.35, -0.28],
        [0.48, 0.18], [0.05, 0.42], [-0.42, 0.28],
      ];

      nodes.forEach(([nx, ny], index) => {
        const x = nx * size;
        const y = ny * size;
        ctx.beginPath();
        ctx.arc(x, y, index % 2 === 0 ? 2.4 : 2, 0, Math.PI * 2);
        ctx.fillStyle = index % 2 === 0 ? "rgba(103,232,249,0.72)" : "rgba(96,165,250,0.65)";
        ctx.fill();
      });

      ctx.restore();
    };

    const drawLipid = (x: number, y: number, direction: number, scale: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(direction);

      drawGlow(0, 0, 10 * scale, "rgba(45,212,191,ALPHA)", 0.08);

      ctx.beginPath();
      ctx.arc(0, 0, 3.7 * scale, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(45,212,191,0.72)";
      ctx.fill();

      ctx.strokeStyle = "rgba(153,246,228,0.28)";
      ctx.lineWidth = 0.7;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-1.5 * scale, 3 * scale);
      ctx.bezierCurveTo(-7 * scale, 10 * scale, -3 * scale, 18 * scale, -8 * scale, 26 * scale);
      ctx.strokeStyle = "rgba(96,165,250,0.48)";
      ctx.lineWidth = 1.5 * scale;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(1.5 * scale, 3 * scale);
      ctx.bezierCurveTo(7 * scale, 10 * scale, 3 * scale, 19 * scale, 8 * scale, 27 * scale);
      ctx.strokeStyle = "rgba(56,189,248,0.35)";
      ctx.lineWidth = 1.5 * scale;
      ctx.stroke();

      ctx.restore();
    };

    const drawMembrane = (membrane: Membrane) => {
      ctx.save();
      ctx.translate(membrane.x, membrane.y);
      ctx.rotate(membrane.angle);
      
      const scaleAnim = Math.min(1, membrane.age / 40);
      ctx.scale(membrane.scale * scaleAnim, membrane.scale * scaleAnim);

      const lipidCount = 11;
      const spacing = 17;
      const startX = -((lipidCount - 1) * spacing) / 2;

      for (let i = 0; i < lipidCount; i++) {
        const x = startX + i * spacing;
        drawLipid(x, -13, Math.PI, 0.85);
        drawLipid(x, 13, 0, 0.85);
      }

      ctx.beginPath();
      ctx.moveTo(startX - 10, -16);
      ctx.lineTo(-startX + 10, -16);
      ctx.strokeStyle = "rgba(45,212,191,0.20)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(startX - 10, 16);
      ctx.lineTo(-startX + 10, 16);
      ctx.strokeStyle = "rgba(45,212,191,0.20)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    const drawComplex = (complex: Complex, time: number) => {
      ctx.save();
      ctx.translate(complex.x, complex.y);
      ctx.rotate(complex.angle);

      // Fade out effect before it gets reset at age 450
      if (complex.age > 350) {
        ctx.globalAlpha *= Math.max(0, 1 - (complex.age - 350) / 100);
      }

      const scaleAnim = Math.min(1, complex.age / 50); // Smooth grow-in
      ctx.scale(complex.scale * scaleAnim, complex.scale * scaleAnim);

      drawGlow(0, 0, 90, "rgba(34,211,238,ALPHA)", 0.045);

      const lipidCount = 13;
      const spacing = 14;
      const startX = -((lipidCount - 1) * spacing) / 2;

      for (let i = 0; i < lipidCount; i++) {
        const x = startX + i * spacing;
        drawLipid(x, -18, Math.PI, 0.75);
        drawLipid(x, 18, 0, 0.75);
      }

      const size = 42;
      const phase = complex.variant;
      const breathing = Math.sin(time * 0.0008 + phase) * 0.05;

      ctx.save();
      ctx.scale(1 + breathing, 1 - breathing * 0.5);
      ctx.rotate(Math.PI / 2);

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.95);
      gradient.addColorStop(0, "rgba(59,130,246,0.10)");
      gradient.addColorStop(0.65, "rgba(34,211,238,0.035)");
      gradient.addColorStop(1, "rgba(34,211,238,0)");

      ctx.beginPath();
      ctx.arc(0, 0, size * 0.95, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      drawProteinHelix(-size * 0.28, -size * 0.28, size * 0.90, size * 0.10, phase, 0.72);
      drawProteinHelix(size * 0.20, -size * 0.08, size * 0.82, size * 0.105, phase + 1.5, 0.68);
      drawProteinHelix(-size * 0.15, size * 0.20, size * 0.88, size * 0.11, phase + 3.0, 0.64);

      ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const t = i / 60;
        const angle = t * Math.PI * 2.3 + phase;
        const radius = size * (0.20 + Math.sin(t * Math.PI * 3) * size * 0.003);
        const x = Math.cos(angle) * radius * 1.45;
        const y = Math.sin(angle) * radius * 0.70;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(59,130,246,0.34)";
      ctx.lineWidth = 1.3;
      ctx.stroke();

      const nodes = [
        [-0.55, -0.38], [-0.20, -0.08], [0.35, -0.28],
        [0.48, 0.18], [0.05, 0.42], [-0.42, 0.28],
      ];

      nodes.forEach(([nx, ny], index) => {
        const x = nx * size;
        const y = ny * size;
        ctx.beginPath();
        ctx.arc(x, y, index % 2 === 0 ? 2.4 : 2, 0, Math.PI * 2);
        ctx.fillStyle = index % 2 === 0 ? "rgba(103,232,249,0.72)" : "rgba(96,165,250,0.65)";
        ctx.fill();
      });

      ctx.restore();
      ctx.restore();
    };

    const maintainPopulation = () => {
      // Clean orchestrated sequence with pacing delays
      if (complexes.length > 0) return;

      // 4. Give the protein 150 frames (~2.5s) of solo screen time before spawning the membrane
      if (proteins.length === 1 && membranes.length === 0) {
        if (proteins[0].age > 150) {
          createMembranes(1);
        }
        return;
      }

      // 3. Wait for the 2 molecules to merge, don't spawn anything else yet
      if (molecules.length === 2) return;

      // 2. Give the first molecule 100 frames (~1.5s) of solo screen time before spawning the next atoms
      if (molecules.length === 1 && proteins.length === 0) {
        if (molecules[0].age > 100 && atoms.length < 2) {
          createAtoms(2 - atoms.length);
        }
        return;
      }

      // 1. Initial state: Spawn first 2 atoms
      if (molecules.length === 0 && proteins.length === 0) {
        if (atoms.length < 2) {
          createAtoms(2 - atoms.length);
        }
      }
    };

    const combineAtoms = () => {
      if (atoms.length < 2) return;
      const a = atoms[0];
      const b = atoms[1];

      if (distanceBetween(a, b) < 80) { 
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        
        // Spawn a bright flash to hide the geometric pop
        fusions.push({ x: midX, y: midY, life: 30, maxLife: 30, color: "rgba(103,232,249,ALPHA)", size: 75 });

        molecules.push({
          x: midX,
          y: midY,
          vx: (a.vx + b.vx) * 0.35,
          vy: (a.vy + b.vy) * 0.35,
          angle: Math.random() * Math.PI * 2,
          rotation: (Math.random() - 0.5) * 0.003,
          scale: (0.75 + Math.random() * 0.25) * 3.5, 
          variant: Math.floor(Math.random() * 3),
          age: 0,
        });

        atoms.length = 0; 
      }
    };

    const combineMolecules = () => {
      if (molecules.length < 2) return;
      const a = molecules[0];
      const b = molecules[1];

      if (distanceBetween(a, b) < 180) { 
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;

        fusions.push({ x: midX, y: midY, life: 40, maxLife: 40, color: "rgba(56,189,248,ALPHA)", size: 150 });

        proteins.push({
          x: midX,
          y: midY,
          vx: (a.vx + b.vx) * 0.25,
          vy: (a.vy + b.vy) * 0.25,
          angle: Math.random() * Math.PI * 2,
          rotation: (Math.random() - 0.5) * 0.0012,
          scale: (0.75 + Math.random() * 0.30) * 3.5, 
          variant: Math.floor(Math.random() * 3),
          size: (38 + Math.random() * 18) * 3.5, 
          phase: Math.random() * Math.PI * 2,
          age: 0,
        });

        molecules.length = 0; 
      }
    };

    const combineProteinMembrane = () => {
      if (proteins.length === 0 || membranes.length === 0) return;
      const protein = proteins[0];
      const membrane = membranes[0];

      if (distanceBetween(protein, membrane) < 300) { 
        const midX = (protein.x + membrane.x) / 2;
        const midY = (protein.y + membrane.y) / 2;

        fusions.push({ x: midX, y: midY, life: 50, maxLife: 50, color: "rgba(34,211,238,ALPHA)", size: 250 });

        createComplex(
          midX,
          midY,
          (protein.vx + membrane.vx) * 0.22,
          (protein.vy + membrane.vy) * 0.22,
          (0.75 + Math.random() * 0.25) * 3.5 
        );

        proteins.length = 0;
        membranes.length = 0;
      }
    };

    const update = () => {
      // Add slight delays before attraction so they float naturally first
      if (atoms.length === 2 && atoms[0].age > 40 && atoms[1].age > 40) {
        applyMutualAttraction(atoms[0], atoms[1], 0.015);
      }
      if (molecules.length === 2 && molecules[0].age > 60 && molecules[1].age > 60) {
        applyMutualAttraction(molecules[0], molecules[1], 0.020);
      }
      if (proteins.length === 1 && membranes.length === 1 && membranes[0].age > 60) {
        applyMutualAttraction(proteins[0], membranes[0], 0.025);
      }

      // Handle Fusion Flash Logic
      for (let i = fusions.length - 1; i >= 0; i--) {
        fusions[i].life--;
        if (fusions[i].life <= 0) fusions.splice(i, 1);
      }

      atoms.forEach((atom) => {
        atom.x += atom.vx;
        atom.y += atom.vy;
        atom.vx *= 0.985; // Slightly lower friction allows faster snapping
        atom.vy *= 0.985;
        atom.age++;
        wrap(atom, 50);
      });

      molecules.forEach((molecule) => {
        molecule.x += molecule.vx;
        molecule.y += molecule.vy;
        molecule.vx *= 0.985;
        molecule.vy *= 0.985;
        molecule.angle += molecule.rotation;
        molecule.age++;
        wrap(molecule, 150);
      });

      proteins.forEach((protein) => {
        protein.x += protein.vx;
        protein.y += protein.vy;
        protein.vx *= 0.985;
        protein.vy *= 0.985;
        protein.angle += protein.rotation;
        protein.age++;
        wrap(protein, 200);
      });

      membranes.forEach((membrane) => {
        membrane.x += membrane.vx;
        membrane.y += membrane.vy;
        membrane.vx *= 0.985;
        membrane.vy *= 0.985;
        membrane.angle += membrane.rotation;
        membrane.age++;
        wrap(membrane, 250);
      });

      complexes.forEach((complex, index) => {
        complex.x += complex.vx;
        complex.y += complex.vy;
        complex.vx *= 0.995;
        complex.vy *= 0.995;
        complex.angle += complex.rotation;
        complex.age++;

        if (complex.age > 450) {
          complexes.splice(index, 1);
        } else {
          wrap(complex, 300);
        }
      });

      combineAtoms();
      combineMolecules();
      combineProteinMembrane();
      maintainPopulation();
    };

    const drawConnections = () => {
      const connect = (
        objects: { x: number; y: number }[],
        distance: number,
        opacity: number
      ) => {
        if (objects.length < 2) return;
        const a = objects[0];
        const b = objects[1];
        const distanceValue = distanceBetween(a, b);

        if (distanceValue < distance) {
          const alpha = (1 - distanceValue / distance) * opacity;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
          ctx.lineWidth = 2.5; 
          ctx.stroke();
        }
      };

      connect(atoms, 600, 0.15); 
      connect(molecules, 800, 0.10); 

      if (proteins.length === 1 && membranes.length === 1) {
        const a = proteins[0];
        const b = membranes[0];
        const distanceValue = distanceBetween(a, b);
        if (distanceValue < 1000) {
          const alpha = (1 - distanceValue / 1000) * 0.08;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }
      }
    };

    const draw = (time: number) => {
      ctx.globalAlpha = 1.0;
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 0.30; 

      update();
      drawConnections();

      atoms.forEach((atom) => drawAtom(atom, time));
      molecules.forEach((molecule) => drawMolecule(molecule));
      proteins.forEach((protein) => drawProtein(protein, time));
      membranes.forEach((membrane) => drawMembrane(membrane));
      complexes.forEach((complex) => drawComplex(complex, time));

      // Draw the beautiful fusion flashes
      ctx.globalAlpha = 1.0;
      fusions.forEach((f) => {
        const progress = 1 - f.life / f.maxLife;
        const currentSize = f.size + (progress * f.size); // Ring expands slightly as it fades
        const alpha = (f.life / f.maxLife) * 0.4; // Halved the maximum alpha intensity
        drawGlow(f.x, f.y, currentSize, f.color, alpha);
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    maintainPopulation();

    animationFrame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
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