"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { createPortal } from "react-dom";

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
  },

  {
    id: 2,
    image: "/images/gallery2.jpeg",
    title: "TV Unit",
    subtitle: "Modern. Functional. Beautiful.",
  },

  {
    id: 3,
    image: "/images/gallery3.jpeg",
    title: "Stylish Wardrobe",
    subtitle: "Your private retreat",
  },

  {
    id: 4,
    image: "/images/gallery4.jpeg",
    title: "Wooden Wardrobe",
    subtitle: "Thoughtfully considered",
  },

  {
    id: 5,
    image: "/images/gallery5.jpeg",
    title: "Bedroom",
    subtitle: "Designed around you",
  },

  {
    id: 6,
    image: "/images/gallery6.jpeg",
    title: "Living Area",
    subtitle: "Quiet. Warm. Personal.",
  },

  {
    id: 7,
    image: "/images/gallery9.jpeg",
    title: "Specious Living Room",
    subtitle: "Made unmistakably yours",
  },

  {
    id: 8,
    image: "/images/gallery8.jpeg",
    title: "Kitchen",
    subtitle: "Form meets function",
  },

  {
    id: 9,
    image: "/images/gallery7.jpeg",
    title: "Contemporary Space",
    subtitle: "The beauty is in the details",
  },
];

/* =========================================================
   GALLERY CARD
   IMPORTANT:
   Both original and duplicate groups use this SAME component.
   So styling can never become different between cycles.
========================================================= */

type GalleryCardProps = {
  item: (typeof galleryImages)[number];
  index: number;
  duplicate?: boolean;
  onOpen: (index: number) => void;
};

function GalleryCard({
  item,
  index,
  duplicate = false,
  onOpen,
}: GalleryCardProps) {
  return (
    <motion.button
      type="button"
      variants={duplicate ? undefined : galleryItem}
      onClick={() => onOpen(index)}
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate ? true : undefined}
      className="
        group relative
        h-[220px]
        min-h-[220px]
        w-[60vw]
        min-w-[60vw]
        shrink-0
        overflow-hidden
        rounded-xl
        text-left
        focus:outline-none
        focus-visible:ring-1
        focus-visible:ring-[#c8a96b]/80

        sm:h-[330px]
        sm:min-h-[330px]
        sm:w-[50vw]
        sm:min-w-[50vw]

        md:h-[420px]
        md:min-h-[420px]
        md:w-[40vw]
        md:min-w-[40vw]

        lg:h-[470px]
        lg:min-h-[470px]
        lg:w-[34vw]
        lg:min-w-[34vw]

        xl:h-[510px]
        xl:min-h-[510px]
        xl:w-[30vw]
        xl:min-w-[30vw]
      "
      whileHover={{
        y: -6,
        scale: 1.018,
      }}
      transition={{
        duration: 0.6,
        ease,
      }}
    >
      {/* ===================================================
          IMAGE
      =================================================== */}

      <motion.img
        src={item.image}
        alt={duplicate ? "" : item.title}
        loading={
          duplicate
            ? "lazy"
            : index < 4
              ? "eager"
              : "lazy"
        }
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        whileHover={{
          scale: 1.055,
        }}
        transition={{
          duration: 1.4,
          ease,
        }}
      />

      {/* ===================================================
          DARK OVERLAY
      =================================================== */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5 opacity-80 transition-opacity duration-700 group-hover:opacity-95" />

      {/* ===================================================
          WARM FILM
      =================================================== */}

      <div className="absolute inset-0 bg-[#6d5231]/[0.055] mix-blend-multiply" />

      {/* ===================================================
          BORDER
      =================================================== */}

      <div className="absolute inset-0 rounded-xl border border-white/[0.09] transition-all duration-700 group-hover:border-[#c8a96b]/45" />

      {/* ===================================================
          TOP NUMBER
      =================================================== */}

      <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-6 sm:top-6 md:left-7 md:top-7">
        <span className="font-sans text-[9px] tracking-[0.3em] text-white/70 sm:text-[10px]">
          {String(item.id).padStart(2, "0")}
        </span>

        <span className="h-px w-7 bg-white/35 transition-all duration-500 group-hover:w-12 group-hover:bg-[#c8a96b]/70" />
      </div>

      {/* ===================================================
          TOP RIGHT CORNER
      =================================================== */}

      <div className="absolute right-5 top-5 h-6 w-6 opacity-60 transition-all duration-500 group-hover:rotate-90 group-hover:opacity-100 sm:right-6 sm:top-6 md:right-7 md:top-7">
        <span className="absolute right-0 top-0 h-px w-6 bg-white/75" />

        <span className="absolute right-0 top-0 h-6 w-px bg-white/75" />
      </div>

      {/* ===================================================
          CENTER VIEW
      =================================================== */}

      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full border border-white/25 bg-black/10 opacity-0 backdrop-blur-md transition-all duration-700 group-hover:scale-100 group-hover:opacity-100">
        <span className="relative block h-5 w-5">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/75" />

          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/75" />
        </span>
      </div>

      {/* ===================================================
          BOTTOM CONTENT
      =================================================== */}

      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-7 md:left-7 md:right-7">
        <p className="font-display text-[26px] font-light leading-none text-white transition-transform duration-700 group-hover:-translate-y-1 sm:text-[30px] md:text-[34px]">
          {item.title}
        </p>

        <p className="mt-2 font-display text-[13px] italic text-[#c8a96b] transition-all duration-700 sm:text-[14px] md:text-[15px]">
          {item.subtitle}
        </p>
      </div>

      {/* ===================================================
          BOTTOM LINE
      =================================================== */}

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c8a96b] transition-all duration-1000 group-hover:w-full" />
    </motion.button>
  );
}

/* =========================================================
   GALLERY COMPONENT
========================================================= */

function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    null
  );

  const [mounted, setMounted] = useState(false);

  const [isMarqueePaused, setIsMarqueePaused] =
    useState(false);

  const activeImage =
    activeIndex !== null
      ? galleryImages[activeIndex]
      : null;

  /* =======================================================
     MOUNT
  ======================================================= */

  useEffect(() => {
    setMounted(true);
  }, []);

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
        setActiveIndex((current) => {
          if (current === null) return null;

          return (
            (current + 1) %
            galleryImages.length
          );
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return null;

          return (
            (current - 1 + galleryImages.length) %
            galleryImages.length
          );
        });
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeIndex]);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (activeIndex !== null) {
      const previousOverflow =
        document.body.style.overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow =
          previousOverflow;
      };
    }
  }, [activeIndex]);

  /* =======================================================
     OPEN IMAGE
  ======================================================= */

  const openImage = (index: number) => {
    setActiveIndex(index);
  };

  /* =======================================================
     PREVIOUS IMAGE
  ======================================================= */

  const previousImage = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return (
        (current - 1 + galleryImages.length) %
        galleryImages.length
      );
    });
  };

  /* =======================================================
     NEXT IMAGE
  ======================================================= */

  const nextImage = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return (
        (current + 1) %
        galleryImages.length
      );
    });
  };

  return (
    <>
      {/* ===================================================
          GALLERY SECTION
      =================================================== */}

      <section
        id="gallery"
        className="relative overflow-hidden bg-[#080807] pb-32 pt-8 text-[#f1eee7] sm:pb-40 sm:pt-12 md:pb-48"
      >
        <div className="mx-auto max-w-[1500px]">
          {/* =================================================
              GALLERY INTRO
          ================================================= */}

          <div className="grid grid-cols-12 gap-y-12 px-6 sm:px-8 lg:px-12">
            {/* SECTION LABEL */}

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
                    fontFamily:
                      "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  07 / Selected Work
                </span>

                <span className="h-px w-12 bg-[#c8a96b]/30" />
              </div>
            </motion.div>

            {/* TITLE */}

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
                  A selection of interiors shaped by
                  material, proportion, light and the
                  individuality of the people who inhabit
                  them.
                </p>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              GALLERY AUTO MARQUEE
          ================================================= */}

          <motion.div
            className="relative mt-20 overflow-hidden md:mt-28"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.12,
            }}
            variants={galleryContainer}
            onMouseEnter={() =>
              setIsMarqueePaused(true)
            }
            onMouseLeave={() =>
              setIsMarqueePaused(false)
            }
          >
            {/* LEFT FADE */}

            <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-12 bg-gradient-to-r from-[#080807] via-[#080807]/80 to-transparent sm:w-20 md:w-32" />

            {/* RIGHT FADE */}

            <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-12 bg-gradient-to-l from-[#080807] via-[#080807]/80 to-transparent sm:w-20 md:w-32" />

            {/* =================================================
                TRUE CONTINUOUS MARQUEE
            ================================================= */}

            <div
              className="gallery-marquee-track"
              style={{
                animationPlayState:
                  isMarqueePaused
                    ? "paused"
                    : "running",
              }}
            >
              {/* =================================================
                  FIRST GROUP
              ================================================= */}

              <div className="gallery-marquee-group">
                {galleryImages.map((item, index) => (
                  <GalleryCard
                    key={`gallery-original-${item.id}`}
                    item={item}
                    index={index}
                    onOpen={openImage}
                  />
                ))}
              </div>

              {/* =================================================
                  SECOND DUPLICATE GROUP

                  EXACT SAME GalleryCard COMPONENT
                  AS FIRST GROUP.
              ================================================= */}

              <div
                className="gallery-marquee-group"
                aria-hidden="true"
              >
                {galleryImages.map((item, index) => (
                  <GalleryCard
                    key={`gallery-duplicate-${item.id}`}
                    item={item}
                    index={index}
                    duplicate
                    onOpen={openImage}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* =================================================
              GALLERY FOOTER
          ================================================= */}

          <motion.div
            className="mt-10 flex flex-col justify-between gap-5 border-t border-white/[0.07] px-6 pt-6 sm:flex-row sm:items-center sm:px-8 lg:px-12"
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

            <div className="flex items-center gap-4">
              <span className="hidden font-sans text-[9px] uppercase tracking-[0.32em] text-[#77736d] sm:block">
                Slowly discovering spaces
              </span>

              <span className="h-px w-8 bg-[#c8a96b]/30" />

              <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-[#77736d]">
                Click to explore
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FULLSCREEN LIGHTBOX
      ===================================================== */}

      {mounted &&
        activeImage &&
        activeIndex !== null &&
        createPortal(
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050504]/[0.98] p-3 backdrop-blur-xl sm:p-6 md:p-8"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
              ease,
            }}
            onClick={() => setActiveIndex(null)}
          >
            {/* =================================================
                TOP BAR
            ================================================= */}

            <div
              className="absolute left-4 right-4 top-4 z-30 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7 md:left-9 md:right-9 md:top-9"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-sans text-[9px] tracking-[0.3em] text-[#c8a96b] sm:text-[10px]">
                  {String(activeImage.id).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="h-px w-6 bg-[#c8a96b]/40 sm:w-8" />

                <span className="hidden font-sans text-[9px] uppercase tracking-[0.3em] text-white/50 sm:block">
                  Rizzy&apos;s Design Concept
                </span>
              </div>

              {/* CLOSE */}

              <button
                type="button"
                aria-label="Close gallery"
                onClick={() =>
                  setActiveIndex(null)
                }
                className="group flex h-10 w-10 items-center justify-center border border-white/15 transition-all duration-500 hover:border-[#c8a96b]/60 hover:bg-[#c8a96b]/10 sm:h-11 sm:w-11"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/75 transition-colors group-hover:bg-[#c8a96b]" />

                  <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/75 transition-colors group-hover:bg-[#c8a96b]" />
                </span>
              </button>
            </div>

            {/* =================================================
                PREVIOUS BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="group absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/25 backdrop-blur-md transition-all duration-500 hover:border-[#c8a96b]/50 hover:bg-[#c8a96b]/10 sm:left-5 sm:h-13 sm:w-13 md:left-8 md:h-14 md:w-14"
            >
              <span className="text-lg font-light text-white/65 transition-all duration-500 group-hover:-translate-x-1 group-hover:text-[#c8a96b] sm:text-xl">
                ←
              </span>
            </button>

            {/* =================================================
                MAIN IMAGE
            ================================================= */}

            <motion.div
              key={activeImage.image}
              className="relative flex h-[68vh] w-[calc(100vw-90px)] max-w-[1450px] items-center justify-center sm:h-[78vh] sm:w-[calc(100vw-150px)] md:h-[82vh] md:w-[calc(100vw-190px)]"
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 18,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                ease,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <img
                src={activeImage.image}
                alt={activeImage.title}
                draggable={false}
                className="max-h-full max-w-full object-contain"
              />

              {/* IMAGE FRAME */}

              <div className="pointer-events-none absolute inset-0 border border-white/[0.08]" />
            </motion.div>

            {/* =================================================
                NEXT BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="group absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/25 backdrop-blur-md transition-all duration-500 hover:border-[#c8a96b]/50 hover:bg-[#c8a96b]/10 sm:right-5 sm:h-13 sm:w-13 md:right-8 md:h-14 md:w-14"
            >
              <span className="text-lg font-light text-white/65 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c8a96b] sm:text-xl">
                →
              </span>
            </button>

            {/* =================================================
                BOTTOM INFO
            ================================================= */}

            <motion.div
              className="absolute bottom-4 left-4 right-4 z-30 flex flex-col gap-3 sm:bottom-7 sm:left-7 sm:right-7 sm:flex-row sm:items-end sm:justify-between md:bottom-9 md:left-9 md:right-9"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.12,
                duration: 0.65,
                ease,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div>
                <h3 className="font-display text-[28px] font-light leading-none text-white sm:text-[36px] md:text-[44px]">
                  {activeImage.title}
                </h3>

                <p className="mt-2 font-display text-[13px] italic text-[#c8a96b] sm:text-[15px] md:text-[16px]">
                  {activeImage.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/35">
                  {String(activeIndex + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="h-px w-8 bg-white/20" />

                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/35">
                  {String(
                    galleryImages.length
                  ).padStart(2, "0")}
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
                    (activeIndex + 1) /
                    galleryImages.length,
                }}
                transition={{
                  duration: 0.5,
                  ease,
                }}
              />
            </div>
          </motion.div>,
          document.body
        )}

      {/* =====================================================
          MARQUEE CSS
      ===================================================== */}

      <style jsx>{`
        .gallery-marquee-track {
          display: flex;
          width: max-content;
          animation: gallery-marquee 75s linear infinite;
          will-change: transform;
        }

        .gallery-marquee-group {
          display: flex;
          flex-shrink: 0;
          gap: 12px;
          padding-right: 12px;
        }

        @media (min-width: 640px) {
          .gallery-marquee-group {
            gap: 16px;
            padding-right: 16px;
          }
        }

        @keyframes gallery-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-marquee-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>
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
                  fontFamily:
                    "var(--font-display)",
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
                From the first conversation to the
                final detail, every stage is considered
                with the same attention, discipline and
                sensitivity that defines our work.
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
          const imageLeft =
            step.layout === "image-left";

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
                        objectPosition:
                          step.position,
                      }}
                      whileHover={{
                        scale: 1.035,
                      }}
                      transition={{
                        duration: 1.4,
                        ease,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/[0.05] to-transparent" />

                    <div className="absolute inset-0 bg-[#6d5231]/[0.035] mix-blend-multiply" />

                    <motion.div
                      className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7"
                      variants={childReveal}
                    >
                      <span className="font-sans text-[10px] tracking-[0.28em] text-white/75">
                        {step.number}
                      </span>

                      <span className="h-px w-7 bg-white/40" />
                    </motion.div>

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
                  <motion.div
                    className="mb-7 flex items-center gap-4"
                    variants={childReveal}
                  >
                    <span className="font-sans text-[10px] tracking-[0.3em] text-[#c8a96b]/75">
                      {step.number}
                    </span>

                    <span className="h-px w-9 bg-[#c8a96b]/35" />
                  </motion.div>

                  <motion.h3
                    className="font-display text-[clamp(3.1rem,5.2vw,6.2rem)] font-light leading-[0.84] tracking-[-0.045em] text-[#f1eee7]"
                    variants={childReveal}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="mt-6 font-display text-[21px] font-light italic leading-[1.1] text-[#c8a96b]/90 md:text-[25px]"
                    variants={childReveal}
                  >
                    {step.subtitle}
                  </motion.p>

                  <motion.p
                    className="mt-7 max-w-[430px] font-sans text-[13px] font-light leading-[1.9] tracking-[0.01em] text-[#99948c] md:text-[14px]"
                    variants={childReveal}
                  >
                    {step.description}
                  </motion.p>

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
