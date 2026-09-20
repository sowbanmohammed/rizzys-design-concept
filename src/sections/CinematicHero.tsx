"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    number: "01",
    eyebrow: "Tamaya · Royapettah",
    title: "The Art of Indulgence",
    description:
      "A richly layered setting where deep tones, sculptural details and ambient light come together to create an atmosphere made for lingering.",
    image: "/images/hero/hookahbar.png",
    position: "center",
  },
  {
    number: "02",
    eyebrow: "Private Residence · Chennai",
    title: "Quietly Refined",
    description:
      "A considered kitchen shaped around warmth and restraint, where refined materials meet the rhythm of everyday living.",
    image: "/images/hero/kitchen.png",
    position: "center",
  },
  {
    number: "03",
    eyebrow: "Residential · Chennai",
    title: "A Study in Warmth",
    description:
      "Balanced proportions, soft textures and thoughtful lighting create a living space that feels composed without ever feeling distant.",
    image: "/images/hero/hall.png",
    position: "center",
  },
  {
    number: "04",
    eyebrow: "Hospitality · Royapettah",
    title: "An Evening Affair",
    description:
      "A dramatic lounge designed around atmosphere — intimate lighting, expressive materials and spaces that invite conversation.",
    image: "/images/hero/loungearea.png",
    position: "center",
  },
  {
    number: "05",
    eyebrow: "Private Residence · Chennai",
    title: "The Quietest Luxury",
    description:
      "A private retreat where natural tones, layered textures and measured detailing turn the everyday bedroom into a place of complete calm.",
    image: "/images/hero/bedroom.png",
    position: "center",
  },
];

const STUDIO_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90";

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const studioRevealRef = useRef<HTMLDivElement | null>(null);
  const studioImageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      const contents = contentRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      if (!images.length || !contents.length) return;

      /* 
       * ========================================================= 
       * INITIAL HERO STATE 
       * ========================================================= 
       */

      gsap.set(images, {
        opacity: 0,
        scale: 1.055,
      });

      gsap.set(contents, {
        opacity: 0,
        y: 28,
      });

      gsap.set(images[0], {
        opacity: 1,
        scale: 1,
      });

      gsap.set(contents[0], {
        opacity: 1,
        y: 0,
      });

      /* 
       * ========================================================= 
       * STUDIO INITIAL STATE 
       * ========================================================= 
       */

      const studioReveal = studioRevealRef.current;
      const studioImage = studioImageRef.current;

      if (studioReveal && studioImage) {
        gsap.set(studioReveal, {
          height: "0%",
          top: "auto",
          bottom: 0,
        });

        gsap.set(studioImage, {
          scale: 1.08,
        });
      }

      /* 
       * ========================================================= 
       * MASTER SCROLL TIMELINE 
       * ========================================================= 
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: stage,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* 
       * ========================================================= 
       * HERO IMAGE TRANSITIONS 
       * ========================================================= 
       */

      for (
        let index = 0;
        index < scenes.length - 1;
        index++
      ) {
        const currentImage = images[index];
        const nextImage = images[index + 1];

        const currentContent = contents[index];
        const nextContent = contents[index + 1];

        /* 
         * Current text exits.
         */

        timeline.to(
          currentContent,
          {
            opacity: 0,
            y: -24,
            duration: 0.2,
            ease: "power2.inOut",
          },
          `scene-${index}`
        );

        /* 
         * Current image fades away.
         */

        timeline.to(
          currentImage,
          {
            opacity: 0,
            scale: 1.075,
            duration: 0.72,
            ease: "power2.inOut",
          },
          `scene-${index}+=0.08`
        );

        /* 
         * Next image appears.
         */

        timeline.fromTo(
          nextImage,
          {
            opacity: 0,
            scale: 1.06,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.72,
            ease: "power2.inOut",
          },
          `scene-${index}+=0.12`
        );

        /* 
         * Next text enters.
         */

        timeline.fromTo(
          nextContent,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.48,
            ease: "power3.out",
          },
          `scene-${index}+=0.42`
        );

        /* 
         * Hold.
         */

        timeline.to(
          {},
          {
            duration: 0.95,
          },
          `scene-${index}+=0.78`
        );
      }

      /* 
       * ========================================================= 
       * 05 BEDROOM → STUDIO TRANSITION 
       * =========================================================
       * 
       * IMPORTANT:
       * 
       * Bedroom is NOT duplicated.
       * 
       * The actual 05 hero image stays underneath.
       * 
       * Studio image rises from bottom to top.
       */

      if (studioReveal && studioImage) {
        /* 
         * Small pause while Bedroom remains fully visible.
         */

        timeline.to(
          {},
          {
            duration: 0.3,
          }
        );

        /* 
         * Bottom → Top shutter.
         */

        timeline.to(studioReveal, {
          height: "100%",
          duration: 1.35,
          ease: "none",
        });

        /* 
         * Slight cinematic zoom.
         */

        timeline.to(
          studioImage,
          {
            scale: 1,
            duration: 1.35,
            ease: "none",
          },
          "<"
        );

        /* 
         * Hold Studio.
         */

        timeline.to(
          {},
          {
            duration: 0.35,
          }
        );
      }

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[760vh] bg-[#080807]"
    >
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* =====================================================
            HERO IMAGES
        ===================================================== */}

        {scenes.map((scene, index) => (
          <div
            key={scene.number}
            ref={(element) => {
              imageRefs.current[index] = element;
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url("${scene.image}")`,
                backgroundPosition: scene.position,
              }}
            />

            {/* Slightly brighter image */}
            <div className="absolute inset-0 bg-white/[0.035]" />

            {/* Main readability gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

            {/* Bottom readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>
        ))}

        {/* =====================================================
            ARCHITECTURAL FRAME
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="absolute left-[5vw] top-[7vh] h-[86vh] w-px bg-white/15" />

          <div className="absolute right-[5vw] top-[7vh] h-[86vh] w-px bg-white/15" />

          <div className="absolute left-[5vw] top-[7vh] h-px w-[90vw] bg-white/15" />

          <div className="absolute bottom-[7vh] left-[5vw] h-px w-[90vw] bg-white/15" />

          <div className="absolute left-1/2 top-[7vh] hidden h-[86vh] w-px -translate-x-1/2 bg-white/[0.045] md:block" />
        </div>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        {scenes.map((scene, index) => (
          <div
            key={`content-${scene.number}`}
            ref={(element) => {
              contentRefs.current[index] = element;
            }}
            className="absolute inset-0 z-30"
          >
            {/* -------------------------------------------------
                TOP LEFT META
            ------------------------------------------------- */}

            <div className="absolute left-[8vw] top-[11vh]">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="h-px w-7 bg-[#c8a96b] md:w-10" />

                <span
                  className="text-[8px] uppercase tracking-[0.28em] text-white/75 md:text-[10px] md:tracking-[0.34em]"
                  style={{
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {scene.eyebrow}
                </span>
              </div>
            </div>

            {/* -------------------------------------------------
                TOP RIGHT NUMBER
            ------------------------------------------------- */}

            <div className="absolute right-[8vw] top-[10vh]">
              <span
                className="text-[9px] tracking-[0.22em] text-white/60 md:text-[11px]"
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              >
                {scene.number}
              </span>
            </div>

            {/* -------------------------------------------------
                HERO TITLE + DESCRIPTION
            ------------------------------------------------- */}

            <div
              className="
                absolute
                bottom-[11vh]
                left-[8vw]
                right-[8vw]
                max-w-[850px]
                md:bottom-[13vh]
                md:right-auto
              "
            >
              <h1
                className="
                  max-w-[760px]
                  text-[clamp(3rem,12vw,5rem)]
                  italic
                  font-normal
                  leading-[0.84]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[clamp(3.4rem,9vw,6rem)]
                  md:text-[clamp(3.8rem,7.2vw,8rem)]
                "
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                {scene.title}
              </h1>

              <div className="mt-5 flex max-w-[560px] items-start gap-4 md:mt-9 md:gap-5">
                <span className="mt-[7px] h-px w-6 shrink-0 bg-[#c8a96b] md:mt-2 md:w-8" />

                <p
                  className="
                    max-w-[500px]
                    italic
                    text-[11px]
                    font-light
                    leading-[1.7]
                    text-white/75
                    sm:text-[12px]
                    md:text-[15px]
                    md:leading-[1.75]
                  "
                  style={{
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {scene.description}
                </p>
              </div>
            </div>

            {/* -------------------------------------------------
                BOTTOM RIGHT BRAND
            ------------------------------------------------- */}

            <div className="absolute bottom-[7vh] right-[8vw] hidden md:block">
              <p
                className="text-[9px] uppercase tracking-[0.3em] text-white/45"
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              >
                Rizzy&apos;s Design Concept
              </p>
            </div>
          </div>
        ))}

        {/* =====================================================
            STUDIO REVEAL
        ===================================================== */}

        <div
          ref={studioRevealRef}
          className="absolute bottom-0 left-0 z-50 w-full overflow-hidden"
        >
          {/* ---------------------------------------------------
              STUDIO IMAGE
          --------------------------------------------------- */}

          <div
            ref={studioImageRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${STUDIO_IMAGE}")`,
            }}
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-black/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

          {/* ---------------------------------------------------
              STUDIO FRAME
          --------------------------------------------------- */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[5vw] top-[7vh] h-[86vh] w-px bg-white/15" />

            <div className="absolute right-[5vw] top-[7vh] h-[86vh] w-px bg-white/15" />

            <div className="absolute left-[5vw] top-[7vh] h-px w-[90vw] bg-white/15" />

            <div className="absolute bottom-[7vh] left-[5vw] h-px w-[90vw] bg-white/15" />
          </div>

          {/* =================================================
              STUDIO CONTENT
          ================================================= */}

          <div className="absolute inset-0">
            {/* =================================================
                LEFT TEXT
            ================================================= */}

            <div
              className="
                absolute
                left-[8vw]
                right-[8vw]
                top-[18vh]
                max-w-[700px]
                md:bottom-[13vh]
                md:right-auto
                md:top-auto
              "
            >
              <div className="flex items-center gap-3 md:mb-5 md:gap-4">
                <span className="h-px w-7 bg-[#c8a96b] md:w-10" />

                <span
                  className="text-[8px] uppercase tracking-[0.3em] text-[#d7bb7c] md:text-[10px]"
                  style={{
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  The Studio
                </span>
              </div>

              <h2
                className="
                  mt-5
                  italic
                  text-[clamp(2.7rem,11vw,4.5rem)]
                  font-normal
                  leading-[0.87]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[clamp(3rem,9vw,5.5rem)]
                  md:mt-0
                  md:text-[clamp(3.2rem,7vw,7.5rem)]
                "
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                Designed around
                <br />
                <span className="italic text-white/75">
                  the way you live.
                </span>
              </h2>
            </div>

            {/* =================================================
                RIGHT TEXT
            ================================================= */}

            <div
              className="
                absolute
                bottom-[8vh]
                left-[8vw]
                right-[8vw]
                max-w-[500px]
                md:bottom-[13vh]
                md:left-auto
                md:right-[8vw]
                md:max-w-[400px]
              "
            >
              <div className="mb-4 h-px w-10 bg-[#c8a96b] md:mb-6 md:w-12" />

              <p
                className="
                  italic
                  text-[11px]
                  font-light
                  leading-[1.7]
                  text-white/80
                  sm:text-[12px]
                  md:text-[16px]
                  md:leading-[1.85]
                "
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              >
                Every Rizzy&apos;s space begins with a simple idea — that
                beautiful design should feel deeply personal. From the first
                sketch to the final detail, we create interiors that balance
                character, comfort and enduring craftsmanship.
              </p>

              {/* =================================================
                  STATS
              ================================================= */}

              <div className="mt-5 flex items-center gap-6 sm:gap-8 md:mt-8">
                <div>
                  <p
                    className="text-[25px] leading-none text-white sm:text-[28px] md:text-[29px]"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    20+
                  </p>

                  <p
                    className="mt-1.5 text-[7px] uppercase tracking-[0.23em] text-white/50 md:mt-2 md:text-[9px]"
                    style={{
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Years
                  </p>
                </div>

                <div className="h-8 w-px bg-white/20 md:h-10" />

                <div>
                  <p
                    className="text-[25px] leading-none text-white sm:text-[28px] md:text-[29px]"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    900+
                  </p>

                  <p
                    className="mt-1.5 text-[7px] uppercase tracking-[0.23em] text-white/50 md:mt-2 md:text-[9px]"
                    style={{
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}