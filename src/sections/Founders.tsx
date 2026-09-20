"use client";

import { motion, type Variants } from "framer-motion";

const founders = [
  {
    number: "",
    name: "Mubeen Nadeem",
    role: "Managing Partner",
    image: "/images/founders/mubeen-nadeem.png",
    alt: "Mubeen Nadeem, Founder of Rizzy's Design Concept",
  },
  {
    number: "",
    name: "Mohammed Rizwan Nadeem",
    role: "Business Head",
    image: "/images/founders/mohammed-rizwan-nadeem.png",
    alt: "Mohammed Rizwan Nadeem, Founder of Rizzy's Design Concept",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -70,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 70,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.15,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Founders() {
  return (
    <section
      id="founders"
      className="
        relative
        overflow-hidden
        bg-[#0b0a09]
        text-[#f1eee7]
      "
    >
      {/* =====================================================
          TOP SPACE
      ===================================================== */}

      <div className="h-[14vh] md:h-[20vh]" />

      {/* =====================================================
          SECTION INTRO
      ===================================================== */}

      <div className="mx-auto w-[84vw] max-w-[1500px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#c8a96b]" />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.34em]
              text-white/45
              md:text-[10px]
            "
            style={{
              fontFamily: "var(--font-sans)",
            }}
          >
            03 / The Founders
          </span>
        </motion.div>

        <div
          className="
            mt-8
            grid
            gap-10
            md:mt-12
            md:grid-cols-[1.15fr_0.85fr]
            md:items-end
          "
        >
          {/* =================================================
              MAIN TITLE
          ================================================= */}

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={revealLeft}
            className="
              max-w-[900px]
              text-[clamp(3.2rem,10vw,7.8rem)]
              font-normal
              leading-[0.82]
              tracking-[-0.055em]
              text-white
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Two minds.
            <br />

            <span
              className="
                italic
                font-medium
                text-[#d8d0c2]/70
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              One vision.
            </span>
          </motion.h2>

          {/* =================================================
              INTRO COPY
          ================================================= */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={revealRight}
            className="
              max-w-[390px]
              text-[13px]
              font-light
              leading-[1.9]
              text-white/50
              md:justify-self-end
              md:text-[14px]
            "
            style={{
              fontFamily: "var(--font-sans)",
            }}
          >
            Founded in 2005 by Mubeen Nadeem and
            Mohammed Rizwan Nadeem, Rizzy&apos;s Design
            Concept grew from a shared belief that
            quality interiors begin with understanding
            the people who live in them.
          </motion.p>
        </div>
      </div>

      {/* =====================================================
          FOUNDERS
      ===================================================== */}

      <div className="mx-auto mt-[12vh] w-[84vw] max-w-[1500px]">
        <div
          className="
            grid
            gap-[12vh]
            md:grid-cols-2
            md:gap-[7vw]
          "
        >
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.15,
              }}
              variants={
                index === 0
                  ? revealLeft
                  : revealRight
              }
              className={`
                relative
                ${
                  index === 1
                    ? "md:mt-[14vh]"
                    : ""
                }
              `}
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  group
                  relative
                  aspect-[0.78]
                  overflow-hidden
                  bg-[#151311]
                "
              >
                <motion.div
                  initial={{
                    scale: 1.08,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.025]
                  "
                  style={{
                    backgroundImage: `url("${founder.image}")`,
                  }}
                  role="img"
                  aria-label={founder.alt}
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                  "
                />

                {/* ARCHITECTURAL FRAME */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[4%]
                    border
                    border-white/15
                  "
                />

                {/* ROLE */}

                <div
                  className="
                    absolute
                    bottom-[7%]
                    left-[7%]
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span className="h-px w-8 bg-[#c8a96b]" />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.32em]
                      text-white/70
                    "
                    style={{
                      fontFamily:
                        "var(--font-sans)",
                    }}
                  >
                    {founder.role}
                  </span>
                </div>
              </div>

              {/* =================================================
                  FOUNDER NAME
              ================================================= */}

              <div className="mt-7">
                <div className="flex items-start justify-between gap-5">
                  <h3
                    className="
                      max-w-[540px]
                      text-[clamp(2.6rem,5.3vw,5.5rem)]
                      font-normal
                      italic
                      leading-[0.88]
                      tracking-[-0.045em]
                      text-[#eee8dc]
                    "
                    style={{
                      fontFamily:
                        "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    {founder.name}
                  </h3>

                  <span
                    className="
                      mt-3
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-[#c8a96b]/75
                      md:mt-4
                    "
                    style={{
                      fontFamily:
                        "var(--font-sans)",
                    }}
                  >
                    
                  </span>
                </div>

                {/* SMALL GOLD LINE */}

                <div
                  className="
                    mt-6
                    h-px
                    w-12
                    bg-[#c8a96b]/60
                  "
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =====================================================
          FOUNDERS STORY
      ===================================================== */}

      <div className="mx-auto w-[84vw] max-w-[1500px]">
        <div
          className="
            grid
            gap-12
            py-[15vh]
            md:grid-cols-[0.55fr_1.45fr]
            md:gap-24
            md:items-start
          "
        >
          {/* LEFT */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            variants={fadeUp}
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#c8a96b]
              "
              style={{
                fontFamily: "var(--font-sans)",
              }}
            >
              The Story
            </span>

            <div className="mt-6 h-px w-16 bg-white/15" />
          </motion.div>

          {/* STORY */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={revealRight}
          >
            <p
              className="
                max-w-[1000px]
                text-[clamp(2rem,3.8vw,3.8rem)]
                font-normal
                italic
                leading-[1.18]
                tracking-[-0.035em]
                text-[#e5ded2]/90
              "
              style={{
                fontFamily:
                  "var(--font-display)",
                fontWeight: 400,
              }}
            >
              What began in 2005 as a shared mission
              to create quality interiors has grown
              into a practice shaped by two decades of
              hands-on dedication.
            </p>

            <p
              className="
                mt-9
                max-w-[800px]
                text-[12px]
                font-light
                leading-[1.9]
                text-white/45
                md:text-[14px]
              "
              style={{
                fontFamily:
                  "var(--font-sans)",
              }}
            >
              Both founders remain closely involved
              with the work, bringing meticulous
              attention to detail and a personal
              approach to every project. Their
              philosophy is simple — understand the
              client, respect the space, and let
              craftsmanship define the result.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}

      <div className="mx-auto w-[84vw] max-w-[1500px] pb-[16vh]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          variants={fadeUp}
          className="
            relative
            border-t
            border-white/10
            pt-[10vh]
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-px
              w-20
              bg-[#c8a96b]
            "
          />

          <p
            className="
              max-w-[1100px]
              text-[clamp(2.2rem,5.2vw,5.7rem)]
              font-normal
              italic
              leading-[0.92]
              tracking-[-0.045em]
              text-[#e7dfd2]/90
            "
            style={{
              fontFamily:
                "var(--font-display)",
              fontWeight: 500,
            }}
          >
            A personal approach,
            <br />

            <span className="text-[#c8a96b]/80">
              carried through every detail.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}