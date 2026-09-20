"use client";

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
                From the first conversation to the final detail, every stage
                is considered with the same attention, discipline and
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
          const imageLeft = step.layout === "image-left";

          return (
            <article
              key={step.number}
              className="relative mx-auto max-w-[1500px] px-6 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36"
            >
              {/* =================================================
                  ARCHITECTURAL GUIDE
              ================================================= */}

              <div
                className={`pointer-events-none absolute top-0 hidden h-full w-px bg-white/[0.035] lg:block ${
                  imageLeft ? "right-[25%]" : "left-[25%]"
                }`}
              />

              {/* =================================================
                  DESKTOP GRID
              ================================================= */}

              <div className="relative grid items-center lg:grid-cols-12 lg:gap-0">
                {/* =================================================
                    IMAGE
                ================================================= */}

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
                    imageLeft ? imageFromLeft : imageFromRight
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

                {/* =================================================
                    TEXT
                ================================================= */}

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
                    imageLeft ? textFromRight : textFromLeft
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

              {/* =================================================
                  DIVIDER
              ================================================= */}

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
          BOTTOM TRANSITION
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#080807] to-transparent" />
    </section>
  );
}