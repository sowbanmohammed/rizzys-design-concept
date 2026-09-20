"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

/* =========================================================
   ANIMATIONS
========================================================= */

const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -70,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1.1,
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
      duration: 1.1,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   ANIMATED NUMBER
========================================================= */

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let frame = 0;

    const animate = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      const duration = 1500;
      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        const eased =
          1 - Math.pow(1 - progress, 4);

        const currentValue = Math.floor(
          eased * value
        );

        element.textContent =
          `${currentValue}${suffix}`;

        if (progress < 1) {
          frame = requestAnimationFrame(update);
        } else {
          element.textContent =
            `${value}${suffix}`;
        }
      };

      frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [value, suffix]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  return (
    <section
      id="expertise"
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

      <div className="h-[16vh] md:h-[22vh]" />

      {/* =====================================================
          INTRO
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
          className="
            flex
            items-center
            gap-4
          "
        >
          {/* GOLD LINE */}

          <span
            className="
              h-px
              w-10
              bg-[#c8a96b]
            "
          />

          {/* FANCY SECTION LABEL */}

          <span
            className="
              text-[15px]
              italic
              leading-none
              tracking-[0.015em]
              text-[#c8a96b]/90
              md:text-[17px]
            "
            style={{
              fontFamily:
                "var(--font-display)",
              fontWeight: 500,
            }}
          >
            02 / Experience
          </span>
        </motion.div>

        {/* =================================================
            TITLE + DESCRIPTION
        ================================================= */}

        <div
          className="
            mt-8
            grid
            gap-10
            md:mt-12
            md:grid-cols-[1.25fr_0.75fr]
            md:items-end
          "
        >
          {/* TITLE */}

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={revealLeft}
            className="
              max-w-[950px]
              text-[clamp(3.2rem,9.5vw,7.6rem)]
              font-normal
              italic
              leading-[0.8]
              tracking-[-0.055em]
              text-[#eee8dc]
              md:text-[clamp(4rem,7.4vw,7.9rem)]
            "
            style={{
              fontFamily:
                "var(--font-display)",
              fontWeight: 500,
            }}
          >
            A legacy built
            <br />

            <span className="text-[#d8d0c2]/60">
              around people.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

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
              text-[12px]
              font-light
              leading-[1.85]
              text-white/55
              md:justify-self-end
              md:text-[14px]
            "
            style={{
              fontFamily:
                "var(--font-sans)",
            }}
          >
            For more than two decades, Rizzy&apos;s
            Design Concept has transformed ordinary
            spaces into deeply personal environments —
            balancing refined aesthetics with the
            realities of everyday life.
          </motion.p>
        </div>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[12vh]
          w-[84vw]
          max-w-[1500px]
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-[55vh]
            min-h-[420px]
            overflow-hidden
            md:h-[72vh]
          "
        >
          {/* IMAGE */}

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
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-0
              bg-cover
              bg-center
            "
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90")',
            }}
          />

          {/* OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-black/10
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/55
              via-transparent
              to-black/10
            "
          />

          {/* FRAME */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[4%]
              border
              border-white/15
            "
          />

          {/* IMAGE LABEL */}

          <div
            className="
              absolute
              bottom-[7%]
              left-[7%]
            "
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.32em]
                text-white/55
                md:text-[9px]
              "
              style={{
                fontFamily:
                  "var(--font-sans)",
              }}
            >
              Crafted with intention
            </p>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          STORY
      ===================================================== */}

      <div
        className="
          mx-auto
          w-[84vw]
          max-w-[1500px]
        "
      >
        <div
          className="
            grid
            gap-16
            py-[14vh]
            md:grid-cols-[0.65fr_1.35fr]
            md:gap-24
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            {/* SINCE 2005 */}

            <span
              className="
                text-[16px]
                italic
                tracking-[0.01em]
                text-[#c8a96b]
              "
              style={{
                fontFamily:
                  "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Since 2005
            </span>

            <p
              className="
                mt-5
                max-w-[280px]
                text-[13px]
                font-light
                leading-[1.8]
                text-white/45
              "
              style={{
                fontFamily:
                  "var(--font-sans)",
              }}
            >
              A multi-generation family practice built
              on honesty, transparency and personal
              accountability.
            </p>
          </motion.div>

          {/* =================================================
              RIGHT
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.15,
            }}
            variants={revealRight}
          >
            {/* LEAD STORY */}

            <p
              className="
                max-w-[900px]
                text-[clamp(1.7rem,3.2vw,3rem)]
                font-normal
                italic
                leading-[1.2]
                tracking-[-0.025em]
                text-[#e7dfd2]/90
              "
              style={{
                fontFamily:
                  "var(--font-display)",
                fontWeight: 400,
              }}
            >
              For over 20 years, Rizzy&apos;s Design
              Concept has been at the forefront of
              transforming ordinary spaces into
              extraordinary environments, building a
              rich legacy defined by a singular
              commitment to turning our clients&apos;
              visions into living reality.
            </p>

            {/* BODY */}

            <p
              className="
                mt-10
                max-w-[760px]
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
              No two clients are alike, and neither
              should their spaces be. Every layout,
              material and finish is thoughtfully
              curated to reflect personality, lifestyle
              and taste without compromising how well
              the space works for everyday life.
            </p>

            <p
              className="
                mt-7
                max-w-[760px]
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
              From initial concept sketches and precise
              AutoCAD floor plans to photorealistic 3D
              visualisations and final turnkey execution,
              every moving part is managed with
              precision.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          PREMIUM STATS
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-[84vw]
          max-w-[1500px]
          py-[8vh]
          md:py-[10vh]
        "
      >
        {/* ARCHITECTURAL LINE */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-white/10
          "
        />

        <div
          className="
            grid
            gap-14
            md:grid-cols-2
            md:gap-0
          "
        >
          {/* =================================================
              20+ YEARS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.35,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              md:pr-[8vw]
            "
          >
            <div
              className="
                flex
                items-end
                gap-4
              "
            >
              {/* NUMBER */}

              <span
                className="
                  text-[clamp(5rem,12vw,10rem)]
                  font-normal
                  italic
                  leading-[0.7]
                  tracking-[-0.075em]
                  text-[#c8a96b]
                "
                style={{
                  fontFamily:
                    "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                <AnimatedNumber
                  value={20}
                  suffix="+"
                />
              </span>

              {/* YEARS */}

              <span
                className="
                  mb-1
                  text-[clamp(1.35rem,2.2vw,1.8rem)]
                  font-normal
                  italic
                  leading-none
                  tracking-[-0.015em]
                  text-[#c8a96b]/80
                  md:mb-2
                "
                style={{
                  fontFamily:
                    "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Years
              </span>
            </div>

            <div
              className="
                mt-7
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[#c8a96b]/70
                "
              />

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                  md:text-[9px]
                "
                style={{
                  fontFamily:
                    "var(--font-sans)",
                }}
              >
                Of experience
              </p>
            </div>
          </motion.div>

          {/* =================================================
              900+ PROJECTS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.35,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              md:border-l
              md:border-white/10
              md:pl-[8vw]
            "
          >
            <div
              className="
                flex
                items-end
                gap-4
              "
            >
              {/* NUMBER */}

              <span
                className="
                  text-[clamp(5rem,12vw,10rem)]
                  font-normal
                  italic
                  leading-[0.7]
                  tracking-[-0.075em]
                  text-[#c8a96b]
                "
                style={{
                  fontFamily:
                    "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                <AnimatedNumber
                  value={900}
                  suffix="+"
                />
              </span>

              {/* PROJECTS */}

              <span
                className="
                  mb-1
                  text-[clamp(1.35rem,2.2vw,1.8rem)]
                  font-normal
                  italic
                  leading-none
                  tracking-[-0.015em]
                  text-[#c8a96b]/80
                  md:mb-2
                "
                style={{
                  fontFamily:
                    "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Projects
              </span>
            </div>

            <div
              className="
                mt-7
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[#c8a96b]/70
                "
              />

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                  md:text-[9px]
                "
                style={{
                  fontFamily:
                    "var(--font-sans)",
                }}
              >
                Completed with care
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}

      <div
        className="
          mx-auto
          w-[84vw]
          max-w-[1500px]
        "
      >
        <div
          className="
            pb-[16vh]
            pt-[8vh]
          "
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              border-t
              border-white/10
              pt-[10vh]
            "
          >
            <p
              className="
                max-w-[1050px]
                text-[clamp(2.2rem,5vw,5.6rem)]
                font-normal
                italic
                leading-[0.9]
                tracking-[-0.045em]
                text-[#e7dfd2]/90
              "
              style={{
                fontFamily:
                  "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Exceptional design should feel personal,
              <br />

              <span className="text-[#c8a96b]/80">
                never imposed.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}