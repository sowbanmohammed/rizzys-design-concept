"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   INTRO ANIMATIONS
========================================================= */

const introFade: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.2,
      ease,
    },
  },
};

const introTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.45,
      ease,
    },
  },
};

/* =========================================================
   IMAGE ANIMATIONS
========================================================= */

const imageFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -120,
    scale: 1.06,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 1.5,
      ease,
    },
  },
};

const imageFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    scale: 1.06,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 1.5,
      ease,
    },
  },
};

/* =========================================================
   TEXT CONTAINER ANIMATIONS
========================================================= */

const textFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -120,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1.35,
      ease,
    },
  },
};

const textFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1.35,
      ease,
    },
  },
};

/* =========================================================
   TEXT CHILD ANIMATIONS
========================================================= */

const childReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(5px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      ease,
    },
  },
};

/* =========================================================
   DIVIDER
========================================================= */

const dividerReveal: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },

  visible: {
    opacity: 1,
    scaleX: 1,

    transition: {
      duration: 1.2,
      ease,
    },
  },
};

/* =========================================================
   GALLERY ANIMATIONS
========================================================= */

const galleryContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const galleryItem: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(7px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 1.15,
      ease,
    },
  },
};

const galleryHeading: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.25,
      ease,
    },
  },
};

/* =========================================================
   PROCESS DATA
========================================================= */

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding the space",
    description:
      "Every project begins with listening. We understand how you live, how the space needs to function and what you want it to feel like.",
    image: "/images/process/modernhall.png",
    position: "center",
    imageAlt: "Contemporary architectural interior",
    layout: "image-left",
  },

  {
    number: "02",
    title: "Imagine",
    subtitle: "Defining the visual language",
    description:
      "Ideas take shape through proportion, material, colour, lighting and architectural character, creating a clear direction before execution begins.",
    image: "/images/process/bedroom.png",
    position: "center",
    imageAlt: "Refined contemporary bedroom",
    layout: "image-right",
  },

  {
    number: "03",
    title: "Develop",
    subtitle: "Making every detail precise",
    description:
      "Layouts, AutoCAD drawings, material selections and photorealistic 3D visualisations turn the initial vision into a precise, buildable environment.",
    image: "/images/process/sofa.png",
    position: "center",
    imageAlt: "Modern architectural residence",
    layout: "image-left",
  },

  {
    number: "04",
    title: "Create",
    subtitle: "Bringing the vision to life",
    description:
      "Our craftsmen, vendors and site teams work together with careful coordination to translate the approved design into a finished environment.",
    image: "/images/process/bedroom2.png",
    position: "center",
    imageAlt: "Warm luxury interior",
    layout: "image-right",
  },

  {
    number: "05",
    title: "Reveal",
    subtitle: "The finished space",
    description:
      "The final result is a space where every material, proportion and detail feels connected — considered, personal and unmistakably yours.",
    image: "/images/process/tvunit.png",
    position: "center",
    imageAlt: "Elegant luxury interior",
    layout: "image-left",
  },
];

/* =========================================================
   GALLERY DATA
========================================================= */

const galleryImages = [
  {
    id: 1,
    image: "/images/gallery1.jpeg",
    title: "Living Room",
    subtitle: "Comfort meets elegance",
    className: "lg:col-span-7 lg:row-span-2",
  },

  {
    id: 2,
    image: "/images/gallery2.jpeg",
    title: "TV Unit",
    subtitle: "Modern. Functional. Beautiful.",
    className: "lg:col-span-5 lg:row-span-2",
  },

  {
    id: 3,
    image: "/images/gallery3.jpeg",
    title: "Stylish Wardrobe",
    subtitle: "Your private retreat",
    className: "lg:col-span-4",
  },

  {
    id: 4,
    image: "/images/gallery4.jpeg",
    title: "Wooden Wardrobe",
    subtitle: "Thoughtfully considered",
    className: "lg:col-span-4",
  },

  {
    id: 5,
    image: "/images/gallery5.jpeg",
    title: "Bedroom",
    subtitle: "Designed around you",
    className: "lg:col-span-4",
  },

  {
    id: 6,
    image: "/images/gallery6.jpeg",
    title: "Living Area",
    subtitle: "Quiet. Warm. Personal.",
    className: "lg:col-span-4",
  },

  {
    id: 7,
     image: "/images/gallery9.jpeg",
    title: "Specious Living Room",
    subtitle: "Made unmistakably yours",
    className: "lg:col-span-4",
  },

  {
    id: 8,
    image: "/images/gallery8.jpeg",
    title: "Kitchen",
    subtitle: "Form meets function",
    className: "lg:col-span-4",
  }
];

/* =========================================================
   GALLERY COMPONENT
========================================================= */

function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage =
    activeIndex !== null ? galleryImages[activeIndex] : null;

  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex(
          (activeIndex + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (activeIndex - 1 + galleryImages.length) %
            galleryImages.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      {/* ===================================================
          GALLERY SECTION
      =================================================== */}

      <section
        id="gallery"
        className="relative bg-[#080807] px-6 pb-32 pt-8 text-[#f1eee7] sm:px-8 md:pb-44 md:pt-12 lg:px-12"
      >
        <div className="mx-auto max-w-[1500px]">
          {/* =================================================
              GALLERY INTRO
          ================================================= */}

          <div className="grid grid-cols-12 gap-y-12">
            <motion.div
              className="col-span-12 lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.3,
              }}
              variants={galleryHeading}
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-[15px] italic leading-none text-[#c8a96b]/90 md:text-[17px]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  07 / Selected Work
                </span>

                <span className="h-px w-12 bg-[#c8a96b]/30" />
              </div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-8 lg:col-start-5"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.3,
              }}
              variants={galleryHeading}
            >
              <h2 className="font-display text-[clamp(3.5rem,7vw,8.5rem)] font-light leading-[0.84] tracking-[-0.05em] text-[#f1eee7]">
                Spaces made
                <br />

                <span className="italic text-[#c8a96b]">
                  personal.
                </span>
              </h2>

              <div className="mt-10 max-w-[560px] md:ml-[15%]">
                <p className="font-sans text-[13px] font-light leading-[1.9] tracking-[0.01em] text-[#99948c] md:text-[14px]">
                  A selection of interiors shaped by material,
                  proportion, light and the individuality of the
                  people who inhabit them.
                </p>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              GALLERY GRID
          ================================================= */}

          <motion.div
            className="mt-24 grid auto-rows-[210px] grid-cols-1 gap-3 sm:auto-rows-[250px] sm:grid-cols-2 md:mt-32 md:auto-rows-[280px] md:gap-4 lg:grid-cols-12 lg:auto-rows-[250px]"
            variants={galleryContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.12,
            }}
          >
            {galleryImages.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                variants={galleryItem}
                onClick={() => setActiveIndex(index)}
                className={`group relative block min-h-[230px] overflow-hidden text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c8a96b]/70 ${item.className}`}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.5,
                  ease,
                }}
              >
                {/* IMAGE */}

                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={{
                    scale: 1.07,
                  }}
                  transition={{
                    duration: 1.2,
                    ease,
                  }}
                />

                {/* DARK OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10 opacity-70 transition-opacity duration-700 group-hover:opacity-90" />

                {/* WARM TONE */}

                <div className="absolute inset-0 bg-[#6d5231]/[0.045] mix-blend-multiply" />

                {/* BORDER */}

                <div className="absolute inset-0 border border-white/[0.08] transition-all duration-700 group-hover:border-[#c8a96b]/30" />

                {/* NUMBER */}

                <div className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7">
                  <span className="font-sans text-[9px] tracking-[0.28em] text-white/70">
                    {String(item.id).padStart(2, "0")}
                  </span>

                  <span className="h-px w-7 bg-white/35 transition-all duration-500 group-hover:w-12 group-hover:bg-[#c8a96b]/70" />
                </div>

                {/* CENTER VIEW INDICATOR */}

                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/10 opacity-0 backdrop-blur-sm transition-all duration-700 group-hover:scale-100 group-hover:opacity-100">
                  <span className="relative block h-5 w-5">
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/75" />
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/75" />
                  </span>
                </div>

                {/* TEXT */}

                <div className="absolute bottom-5 left-5 right-5 translate-y-2 transition-transform duration-700 group-hover:translate-y-0 md:bottom-7 md:left-7 md:right-7">
                  <p className="font-display text-[24px] font-light leading-none text-white md:text-[29px]">
                    {item.title}
                  </p>

                  <p className="mt-2 font-display text-[13px] italic text-[#c8a96b] opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:text-[15px]">
                    {item.subtitle}
                  </p>
                </div>

                {/* TOP RIGHT DETAIL */}

                <div className="absolute right-5 top-5 h-5 w-5 opacity-50 transition-all duration-500 group-hover:rotate-90 group-hover:opacity-100 md:right-7 md:top-7">
                  <span className="absolute right-0 top-0 h-px w-5 bg-white/70" />
                  <span className="absolute right-0 top-0 h-5 w-px bg-white/70" />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* =================================================
              GALLERY FOOTER DETAIL
          ================================================= */}

          <motion.div
            className="mt-16 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[5px] w-[5px] rounded-full bg-[#c8a96b]" />

              <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-[#77736d]">
                Selected interiors
              </span>
            </div>

            <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-[#77736d]">
              Click an image to explore
            </span>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FULLSCREEN LIGHTBOX
      ===================================================== */}

      {activeImage && activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050504]/[0.97] p-4 backdrop-blur-md sm:p-8"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={() => setActiveIndex(null)}
        >
          {/* =================================================
              TOP BAR
          ================================================= */}

          <div
            className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <span className="font-sans text-[10px] tracking-[0.3em] text-[#c8a96b]">
                {String(activeImage.id).padStart(2, "0")}
              </span>

              <span className="h-px w-8 bg-[#c8a96b]/40" />

              <span className="hidden font-sans text-[9px] uppercase tracking-[0.3em] text-white/50 sm:block">
                Rizzy&apos;s Design Concept
              </span>
            </div>

            {/* CLOSE */}

            <button
              type="button"
              aria-label="Close gallery"
              onClick={() => setActiveIndex(null)}
              className="group flex h-11 w-11 items-center justify-center border border-white/15 transition-all duration-500 hover:border-[#c8a96b]/60 hover:bg-[#c8a96b]/10"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/75 transition-colors group-hover:bg-[#c8a96b]" />

                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/75 transition-colors group-hover:bg-[#c8a96b]" />
              </span>
            </button>
          </div>

          {/* =================================================
              PREVIOUS
          ================================================= */}

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();

              setActiveIndex(
                (activeIndex - 1 + galleryImages.length) %
                  galleryImages.length
              );
            }}
            className="group absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-500 hover:border-[#c8a96b]/50 hover:bg-[#c8a96b]/10 sm:left-8 sm:h-14 sm:w-14"
          >
            <span className="text-xl font-light text-white/60 transition-all duration-500 group-hover:-translate-x-1 group-hover:text-[#c8a96b]">
              ←
            </span>
          </button>

          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            className="relative flex h-[72vh] w-full max-w-[1200px] items-center justify-center"
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-full max-w-full object-contain"
            />

            {/* IMAGE FRAME */}

            <div className="pointer-events-none absolute inset-0 border border-white/[0.08]" />
          </motion.div>

          {/* =================================================
              NEXT
          ================================================= */}

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();

              setActiveIndex(
                (activeIndex + 1) % galleryImages.length
              );
            }}
            className="group absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-500 hover:border-[#c8a96b]/50 hover:bg-[#c8a96b]/10 sm:right-8 sm:h-14 sm:w-14"
          >
            <span className="text-xl font-light text-white/60 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c8a96b]">
              →
            </span>
          </button>

          {/* =================================================
              BOTTOM INFO
          ================================================= */}

          <motion.div
            className="absolute bottom-5 left-5 right-5 z-20 flex flex-col gap-4 sm:bottom-8 sm:left-8 sm:right-8 sm:flex-row sm:items-end sm:justify-between"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div>
              <h3 className="font-display text-[32px] font-light leading-none text-white sm:text-[42px]">
                {activeImage.title}
              </h3>

              <p className="mt-2 font-display text-[14px] italic text-[#c8a96b] sm:text-[16px]">
                {activeImage.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/35">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-8 bg-white/20" />

              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/35">
                {String(galleryImages.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* =================================================
              PROGRESS LINE
          ================================================= */}

          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]">
            <motion.div
              className="h-full origin-left bg-[#c8a96b]"
              animate={{
                scaleX:
                  (activeIndex + 1) / galleryImages.length,
              }}
              transition={{
                duration: 0.5,
                ease,
              }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}

/* =========================================================
   PROCESS
========================================================= */

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#080807] text-[#f1eee7]"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#b08b4f]/[0.035] blur-[130px]" />

        <div className="absolute right-[-12%] top-[48%] h-[620px] w-[620px] rounded-full bg-[#7d6848]/[0.025] blur-[150px]" />

        <div className="absolute bottom-[8%] left-[30%] h-[420px] w-[420px] rounded-full bg-[#c8a96b]/[0.018] blur-[130px]" />
      </div>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-32 sm:px-8 md:pb-32 md:pt-40 lg:px-12 lg:pt-48">
        <div className="grid grid-cols-12 gap-y-10">
          {/* SECTION LABEL */}

          <motion.div
            className="col-span-12 lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.35,
            }}
            variants={introFade}
          >
            <div className="flex items-center gap-4">
              <span
                className="text-[15px] italic leading-none text-[#c8a96b]/90 md:text-[17px]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                06 / Our Process
              </span>

              <span className="h-px w-12 bg-[#c8a96b]/30" />
            </div>
          </motion.div>

          {/* INTRO TITLE */}

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <motion.h2
              className="max-w-[920px] font-display text-[clamp(3.6rem,7.2vw,8.8rem)] font-light leading-[0.83] tracking-[-0.045em] text-[#f1eee7]"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.35,
              }}
              variants={introTitle}
            >
              Designed with
              <br />

              <span className="italic text-[#c8a96b]">
                intention.
              </span>
            </motion.h2>

            <motion.div
              className="mt-12 max-w-[570px] md:ml-[15%]"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.3,
              }}
              variants={introFade}
            >
              <p className="font-sans text-[14px] font-light leading-[1.9] tracking-[0.01em] text-[#aaa59d] md:text-[15px]">
                From the first conversation to the final detail,
                every stage is considered with the same attention,
                discipline and sensitivity that defines our work.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PROCESS STEPS
      ===================================================== */}

      <div className="relative">
        {steps.map((step, index) => {
          const imageLeft = step.layout === "image-left";

          return (
            <article
              key={step.number}
              className="relative mx-auto max-w-[1500px] px-6 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36"
            >
              {/* ARCHITECTURAL GUIDE */}

              <div
                className={`pointer-events-none absolute top-0 hidden h-full w-px bg-white/[0.035] lg:block ${
                  imageLeft
                    ? "right-[25%]"
                    : "left-[25%]"
                }`}
              />

              {/* DESKTOP GRID */}

              <div className="relative grid items-center lg:grid-cols-12 lg:gap-0">
                {/* IMAGE */}

                <motion.div
                  className={`relative col-span-12 overflow-hidden lg:col-span-7 ${
                    imageLeft
                      ? "lg:col-start-1"
                      : "lg:col-start-6"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.28,
                  }}
                  variants={
                    imageLeft
                      ? imageFromLeft
                      : imageFromRight
                  }
                >
                  <div className="group relative aspect-[16/10] overflow-hidden bg-[#151311] md:aspect-[16/9]">
                    <motion.img
                      src={step.image}
                      alt={step.imageAlt}
                      className="h-full w-full object-cover"
                      style={{
                        objectPosition: step.position,
                      }}
                      whileHover={{
                        scale: 1.035,
                      }}
                      transition={{
                        duration: 1.4,
                        ease,
                      }}
                    />

                    {/* DARK IMAGE GRADIENT */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/[0.05] to-transparent" />

                    {/* WARM FILM TONE */}

                    <div className="absolute inset-0 bg-[#6d5231]/[0.035] mix-blend-multiply" />

                    {/* IMAGE NUMBER */}

                    <motion.div
                      className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7"
                      variants={childReveal}
                    >
                      <span className="font-sans text-[10px] tracking-[0.28em] text-white/75">
                        {step.number}
                      </span>

                      <span className="h-px w-7 bg-white/40" />
                    </motion.div>

                    {/* IMAGE BRAND */}

                    <motion.div
                      className="absolute bottom-5 left-5 md:bottom-7 md:left-7"
                      variants={childReveal}
                    >
                      <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-white/65">
                        Rizzy&apos;s Design Concept
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* TEXT */}

                <motion.div
                  className={`relative z-10 col-span-12 mt-12 lg:mt-0 ${
                    imageLeft
                      ? "lg:col-start-8 lg:pl-[8%]"
                      : "lg:col-start-1 lg:row-start-1 lg:pr-[8%] lg:translate-y-[135px]"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.28,
                  }}
                  variants={
                    imageLeft
                      ? textFromRight
                      : textFromLeft
                  }
                >
                  {/* NUMBER */}

                  <motion.div
                    className="mb-7 flex items-center gap-4"
                    variants={childReveal}
                  >
                    <span className="font-sans text-[10px] tracking-[0.3em] text-[#c8a96b]/75">
                      {step.number}
                    </span>

                    <span className="h-px w-9 bg-[#c8a96b]/35" />
                  </motion.div>

                  {/* TITLE */}

                  <motion.h3
                    className="font-display text-[clamp(3.1rem,5.2vw,6.2rem)] font-light leading-[0.84] tracking-[-0.045em] text-[#f1eee7]"
                    variants={childReveal}
                  >
                    {step.title}
                  </motion.h3>

                  {/* SUBTITLE */}

                  <motion.p
                    className="mt-6 font-display text-[21px] font-light italic leading-[1.1] text-[#c8a96b]/90 md:text-[25px]"
                    variants={childReveal}
                  >
                    {step.subtitle}
                  </motion.p>

                  {/* DESCRIPTION */}

                  <motion.p
                    className="mt-7 max-w-[430px] font-sans text-[13px] font-light leading-[1.9] tracking-[0.01em] text-[#99948c] md:text-[14px]"
                    variants={childReveal}
                  >
                    {step.description}
                  </motion.p>

                  {/* BOTTOM DETAIL */}

                  <motion.div
                    className="mt-9 flex items-center gap-4"
                    variants={childReveal}
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-[#c8a96b]" />

                    <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-[#77736d]">
                      Thoughtfully considered
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* DIVIDER */}

              {index !== steps.length - 1 && (
                <motion.div
                  className={`mt-20 flex md:mt-28 ${
                    imageLeft
                      ? "justify-end"
                      : "justify-start"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.25,
                  }}
                  variants={dividerReveal}
                >
                  <span className="h-px w-[34%] origin-center bg-white/[0.07]" />
                </motion.div>
              )}
            </article>
          );
        })}
      </div>

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 pb-36 pt-28 sm:px-8 md:pb-48 md:pt-40 lg:px-12">
        <div className="grid grid-cols-12">
          <motion.div
            className="col-span-12 lg:col-span-9 lg:col-start-2"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            variants={textFromLeft}
          >
            <div className="relative">
              <span className="absolute -left-6 top-[16px] hidden h-px w-4 bg-[#c8a96b]/50 md:block" />

              <motion.p
                className="font-display text-[clamp(3rem,6.4vw,7.5rem)] font-light leading-[0.88] tracking-[-0.045em] text-[#e7e2d9]"
                variants={childReveal}
              >
                A space that feels
                <br />

                <span className="italic text-[#c8a96b]">
                  unmistakably yours.
                </span>
              </motion.p>
            </div>

            <motion.div
              className="mt-12 flex items-center gap-5 md:ml-[32%]"
              variants={childReveal}
            >
              <span className="h-px w-16 bg-[#c8a96b]/45" />

              <span className="font-sans text-[9px] uppercase tracking-[0.34em] text-[#77736d]">
                From imagination to reality
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <Gallery />

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#080807] to-transparent" />
    </section>
  );
}
