"use client";

import { motion, type Variants } from "framer-motion";

const founders = [
  {
    number: "01",
    name: "Mohammed Rizwan Nadeem",
    role: "Business Head",
    image: "/images/founders/mohammed-rizwan-nadeem.png",
    alt: "Mohammed Rizwan Nadeem, Founder of Rizzy's Design Concept",
  },
  {
    number: "02",
    name: "Mubeen Nadeem",
    role: "Managing Partner",
    image: "/images/founders/mubeen-nadeem.png",
    alt: "Mubeen Nadeem, Founder of Rizzy's Design Concept",
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

      <div
        className="
          mx-auto
          mt-[10vh]
          w-[84vw]
          max-w-[1500px]

          sm:mt-[11vh]

          md:mt-[12vh]
        "
      >
        <div
          className="
            grid
            gap-[10vh]

            sm:gap-[12vh]

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
                min-w-0

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
                  mx-auto
                  aspect-[0.82]
                  w-[88%]
                  overflow-hidden
                  bg-[#151311]

                  sm:w-[90%]

                  md:mx-0
                  md:aspect-[0.78]
                  md:w-full
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

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    right-[7%]
                    top-[7%]
                  "
                >
                  <span
                    className="
                      text-[9px]
                      tracking-[0.28em]
                      text-white/65

                      sm:text-[10px]

                      md:text-[11px]
                    "
                    style={{
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {founder.number}
                  </span>
                </div>

                {/* ROLE */}

                <div
                  className="
                    absolute
                    bottom-[7%]
                    left-[7%]
                    flex
                    max-w-[80%]
                    items-center
                    gap-3
                  "
                >
                  <span className="h-px w-7 shrink-0 bg-[#c8a96b] sm:w-8" />

                  <span
                    className="
                      whitespace-nowrap
                      text-[7px]
                      uppercase
                      tracking-[0.28em]
                      text-white/70

                      sm:text-[8px]
                      sm:tracking-[0.32em]
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

              <div
                className="
                  mx-auto
                  mt-6
                  w-[88%]

                  sm:mt-7
                  sm:w-[90%]

                  md:mx-0
                  md:w-full
                "
              >
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <h3
                    className="
                      min-w-0
                      max-w-[540px]
                      break-words
                      text-[clamp(2.25rem,9vw,5.5rem)]
                      font-normal
                      italic
                      leading-[0.88]
                      tracking-[-0.045em]
                      text-[#eee8dc]

                      sm:text-[clamp(2.5rem,6vw,5.5rem)]

                      md:text-[clamp(2.6rem,5.3vw,5.5rem)]
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
                      hidden
                      shrink-0
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-[#c8a96b]/75

                      md:mt-4
                      md:block
                    "
                    style={{
                      fontFamily:
                        "var(--font-sans)",
                    }}
                  />
                </div>

                {/* SMALL GOLD LINE */}

                <div
                  className="
                    mt-5
                    h-px
                    w-10
                    bg-[#c8a96b]/60

                    sm:mt-6
                    sm:w-12
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
                text-[clamp(1.65rem,3.8vw,3.8rem)]
                font-normal
                italic
                leading-[1.16]
                tracking-[-0.035em]
                text-[#e5ded2]/90

                md:text-[clamp(2rem,3.8vw,3.8rem)]
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
                mt-14
                max-w-[800px]
                text-[12px]
                font-light
                leading-[1.9]
                text-white/45

                md:mt-9
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
        {/* =====================================================
    RUMANA — AFTER THE STORY
===================================================== */}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: false,
    amount: 0.2,
  }}
  variants={fadeUp}
  className="
    mx-auto
    flex
    w-full
    max-w-[1200px]
    flex-col
    items-center
    justify-center
    px-4
    pt-[5vh]
    pb-[8vh]
    text-center

    sm:px-6
    sm:pt-[6vh]

    md:px-8
    md:pt-[7vh]
    md:pb-[10vh]

    lg:pt-[6vh]
  "
>
  {/* SMALL GOLD LINE */}
  <div
    className="
      mx-auto
      mb-6
      h-px
      w-16
      bg-[#c8a96b]

      md:mb-7
      md:w-24
    "
  />

  {/* LABEL */}
<div
  className="
    flex
    w-full
    flex-col
    items-center
    justify-center
    text-center
  "
>
  {/* THE NEXT GENERATION */}
  <p
    className="
      w-full
      text-center
      text-[9px]
      uppercase
      tracking-[0.45em]
      text-[#c8a96b]

      sm:text-[10px]
      md:tracking-[0.5em]
    "
    style={{
      fontFamily: "var(--font-sans)",
    }}
  >
    The Next Generation
  </p>

  {/* RUMANA */}
 <h2
  className="
    relative
    top-[35px]
    mt-2
    w-full
    px-4
    text-center
    text-[clamp(4.8rem,13vw,12rem)]
    font-normal
    leading-[1]
    tracking-[-0.035em]

    sm:top-[45px]
    sm:text-[clamp(5.5rem,14vw,13rem)]

    md:top-[55px]
    md:text-[clamp(6rem,13vw,14rem)]

    lg:top-[65px]
    lg:text-[clamp(7rem,12vw,15rem)]
    
  "
  style={{
    fontFamily: "SymphonieCalligraphyDEMO-Regular, cursive",
    fontWeight: 200,
    color: "#c8a96b/80",
    
  }}
>
  <span className="text-[#c8a96b]/70">
  Rumana
  </span>
</h2>
  
</div>
  {/* GOLD LINE */}
  <div
    className="
      mx-auto
      mt-[4rem]
      h-px
      w-20
      bg-[#c8a96b]/70

      sm:mt-[5rem]
      sm:w-28

      md:mt-[7rem]

      lg:mt-[7rem]
    "
  />

  {/* =================================================
      DESCRIPTION
  ================================================= */}

 <p
  className="
    mx-auto
    mt-8
    w-full
    max-w-[1050px]
    px-2
    text-center
    text-[clamp(1.45rem,2.6vw,2.35rem)]
    font-normal
    italic
    leading-[1.25]
    tracking-[-0.025em]
    text-[#e5ded2]/90

    sm:px-4
    sm:mt-9

    md:mt-10
    md:px-0
    md:leading-[1.3]

    lg:mt-11
  "
  style={{
    fontFamily: "var(--font-display)",
    fontWeight: 400,
  }}
>
  With a natural passion for creativity and design, Rumana brings
  a fresh and contemporary perspective to the creative world.
  Working independently as a freelancer, she explores design,
  visual storytelling, and digital creativity, creating work that
  reflects her own unique style and artistic expression.
</p>
  {/* =================================================
      BOTTOM DETAIL
  ================================================= */}

  <div
    className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      gap-4

      md:mt-10
    "
  >
    <span
      className="
        h-px
        w-10
        bg-[#c8a96b]/30

        md:w-16
      "
    />

    <span
      className="
        text-[7px]
        uppercase
        tracking-[0.35em]
        text-[#c8a96b]

        md:text-[8px]
        md:tracking-[0.45em]
      "
      style={{
        fontFamily: "var(--font-sans)",
      }}
    >
      Creativity · Design · Vision
    </span>

    <span
      className="
        h-px
        w-10
        bg-[#c8a96b]/30

        md:w-16
      "
    />
  </div>
</motion.div>
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
