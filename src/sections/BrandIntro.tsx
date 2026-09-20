"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LAST_HERO_IMAGE = "/images/hero/bedroom.png";

// Temporary Studio image.
// Replace this URL later with the final Studio image.
const STUDIO_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90";

const textLeft: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15,
    },
  },
};

const textRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
};

export default function BrandIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const revealRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const controls = useAnimationControls();

  useEffect(() => {
    if (!sectionRef.current || !stageRef.current || !revealRef.current) {
      return;
    }

    const section = sectionRef.current;
    const stage = stageRef.current;
    const reveal = revealRef.current;
    const image = imageRef.current;

    const ctx = gsap.context(() => {
      /*
       * ---------------------------------------------------------
       * INITIAL STATE
       * ---------------------------------------------------------
       *
       * New Studio image starts hidden from the bottom.
       * The reveal container has 0 height.
       *
       * As the user scrolls:
       *
       * 0%   -> old Hero image visible
       * 50%  -> Studio image halfway revealed
       * 100% -> Studio image completely visible
       *
       * This creates the bottom -> top shutter effect.
       */

      gsap.set(reveal, {
        height: "0%",
        bottom: 0,
        top: "auto",
      });

      gsap.set(image, {
        yPercent: 0,
        scale: 1.08,
      });

      /*
       * ---------------------------------------------------------
       * SCROLL TIMELINE
       * ---------------------------------------------------------
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: stage,
          scrub: 1.1,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onEnter: () => {
            controls.start("visible");
          },

          onEnterBack: () => {
            controls.start("visible");
          },

          onLeave: () => {
            controls.set("hidden");
          },

          onLeaveBack: () => {
            controls.set("hidden");
          },
        },
      });

      /*
       * ---------------------------------------------------------
       * BOTTOM -> TOP SHUTTER
       * ---------------------------------------------------------
       */

      timeline.to(
        reveal,
        {
          height: "100%",
          ease: "none",
          duration: 1,
        },
        0
      );

      /*
       * ---------------------------------------------------------
       * IMAGE MOTION
       * ---------------------------------------------------------
       *
       * Slight cinematic zoom-out while the image opens.
       */

      timeline.to(
        image,
        {
          scale: 1,
          ease: "none",
          duration: 1,
        },
        0
      );

      /*
       * Small delay before the text settles.
       * The actual text movement is handled by Framer Motion.
       */

      timeline.to(
        {},
        {
          duration: 0.25,
        },
        0.65
      );

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="relative h-[230vh] bg-[#080807]"
    >
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* =====================================================
            OLD HERO IMAGE
            ===================================================== */}

        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${LAST_HERO_IMAGE}")`,
            }}
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/40" />
        </div>

        {/* =====================================================
            NEW STUDIO IMAGE
            =====================================================

            This starts at height: 0 from the bottom.

            GSAP increases its height to 100%.

            So the image visually opens:

                    ↑
                    ↑
                    ↑
              bottom → top
        */}

        <div
          ref={revealRef}
          className="absolute bottom-0 left-0 z-10 w-full overflow-hidden"
        >
          <div
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${STUDIO_IMAGE}")`,
            }}
          />

          {/* image readability */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-black/45" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        </div>

        {/* =====================================================
            ARCHITECTURAL FRAME
            ===================================================== */}

        <div className="pointer-events-none absolute inset-0 z-30">
          <div className="absolute left-[5vw] top-[8vh] h-[84vh] w-px bg-white/15" />

          <div className="absolute right-[5vw] top-[8vh] h-[84vh] w-px bg-white/15" />

          <div className="absolute left-[5vw] top-[8vh] h-px w-[90vw] bg-white/15" />

          <div className="absolute bottom-[8vh] left-[5vw] h-px w-[90vw] bg-white/15" />

          <div className="absolute left-1/2 top-[8vh] h-[84vh] w-px -translate-x-1/2 bg-white/[0.06]" />
        </div>

        {/* =====================================================
            TOP LABEL
            ===================================================== */}

        <div className="absolute left-[8vw] top-[11vh] z-40">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#c8a96b]" />

            <span
              className="text-[10px] uppercase tracking-[0.34em] text-white/70"
              style={{
                fontFamily: "var(--font-sans)",
              }}
            >
              01 / Studio
            </span>
          </div>
        </div>

        {/* =====================================================
            MAIN TEXT
            ===================================================== */}

        <div className="absolute inset-x-[8vw] bottom-[11vh] z-40">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-16">
            {/* =================================================
                LEFT TEXT
                ================================================= */}

            <motion.div
              initial="hidden"
              animate={controls}
              variants={textLeft}
              className="max-w-[760px]"
            >
              <p
                className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#d8bd83]"
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              >
                The Rizzy&apos;s Approach
              </p>

              <h2
                className="max-w-[800px] text-[clamp(3rem,7vw,7.5rem)] font-normal leading-[0.84] tracking-[-0.045em] text-white"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                Spaces with
                <br />
                <span className="italic text-white/75">
                  a point of view.
                </span>
              </h2>
            </motion.div>

            {/* =================================================
                RIGHT TEXT
                ================================================= */}

            <motion.div
              initial="hidden"
              animate={controls}
              variants={textRight}
              className="max-w-[430px] md:justify-self-end"
            >
              <div className="mb-6 h-px w-12 bg-[#c8a96b]" />

              <p
                className="text-[15px] font-light leading-[1.85] text-white/80 md:text-[17px]"
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              >
                For over two decades, Rizzy&apos;s Design Concept has shaped
                spaces around the people who live, work and experience them.
                Every detail is considered with intention — from proportion
                and material to light, movement and everyday comfort.
              </p>

              <div className="mt-8 flex items-center gap-8">
                <div>
                  <p
                    className="text-[28px] leading-none text-white"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    20+
                  </p>

                  <p
                    className="mt-2 text-[9px] uppercase tracking-[0.24em] text-white/50"
                    style={{
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Years
                  </p>
                </div>

                <div className="h-10 w-px bg-white/20" />

                <div>
                  <p
                    className="text-[28px] leading-none text-white"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    900+
                  </p>

                  <p
                    className="mt-2 text-[9px] uppercase tracking-[0.24em] text-white/50"
                    style={{
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Projects
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SCROLL INDICATOR
            ===================================================== */}

        <div className="absolute bottom-[5vh] left-1/2 z-40 hidden -translate-x-1/2 items-center gap-4 md:flex">
          <span
            className="text-[9px] uppercase tracking-[0.3em] text-white/45"
            style={{
              fontFamily: "var(--font-sans)",
            }}
          >
            Scroll to explore
          </span>

          <span className="h-px w-14 bg-white/25" />
        </div>
      </div>
    </section>
  );
}