import CinematicHero from "@/sections/CinematicHero";
import About from "@/sections/About";
import Founders from "@/sections/Founders";
import Projects from "@/sections/Projects";
import Philosophy from "@/sections/Philosophy";
import Process from "@/sections/Process";
import Spaces from "@/sections/Spaces";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080807] text-[#F1EEE7]">
      {/* =====================================================
          01 — CINEMATIC HERO
      ===================================================== */}

      <CinematicHero />


      {/* =====================================================
          03 — THE EXPERIENCE
      ===================================================== */}

      <About />

      {/* =====================================================
          04 — DESIGN LANGUAGE
      ===================================================== */}

      <Founders />

      {/* =====================================================
          05 — SELECTED WORK
      ===================================================== */}

      <Projects />

      {/* =====================================================
          06 — HOW WE CREATE
      ===================================================== */}

      {/* <Philosophy /> */}

      {/* =====================================================
          07 — THE SPACES
      ===================================================== */}

      <Process />

      {/* =====================================================
          08 — BEGIN A PROJECT
      ===================================================== */}


      {/* =====================================================
          09 — GET A QUOTE
      ===================================================== */}

      <Contact />

      {/* =====================================================
          10 — FOOTER
      ===================================================== */}

    </main>
  );
}