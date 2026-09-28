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
        ============================================================
        ONE SCROLL PER IMAGE
        ============================================================

        Each scene now takes a shorter timeline duration.

        Previous:
        - transition + 0.95 hold

        Now:
        - transition + 0.35 hold

        This makes the image change approximately once per
        viewport scroll instead of around 1.5 scrolls.
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
          CURRENT CONTENT OUT
        */

        timeline.to(
          currentContent,
          {
            opacity: 0,
            y: -24,
            duration: 0.16,
            ease: "power2.inOut",
          },
          `scene-${index}`
        );

        /*
          CURRENT IMAGE OUT
        */

        timeline.to(
          currentImage,
          {
            opacity: 0,
            scale: 1.075,
            duration: 0.52,
            ease: "power2.inOut",
          },
          `scene-${index}+=0.06`
        );

        /*
          NEXT IMAGE IN
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
            duration: 0.52,
            ease: "power2.inOut",
          },
          `scene-${index}+=0.10`
        );

        /*
          NEXT CONTENT IN
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
            duration: 0.38,
            ease: "power3.out",
          },
          `scene-${index}+=0.30`
        );

        /*
          SHORT HOLD

          Reduced from 0.95 → 0.35
          so next image comes after roughly one scroll.
        */

        timeline.to(
          {},
          {
            duration: 0.35,
          },
          `scene-${index}+=0.58`
        );
      }

      /*
        ============================================================
        STUDIO REVEAL
        ============================================================
      */

      if (studioReveal && studioImage) {
        timeline.to(
          {},
          {
            duration: 0.18,
          }
        );

        timeline.to(studioReveal, {
          height: "100%",
          duration: 1.35,
          ease: "none",
        });

        timeline.to(
          studioImage,
          {
            scale: 1,
            duration: 1.35,
            ease: "none",
          },
          "<"
        );

        timeline.to(
          {},
          {
            duration: 0.25,
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
              className="
                absolute
                inset-0
                bg-cover
                bg-no-repeat

                scale-[1.01]
                sm:scale-[1.02]
                md:scale-100
              "
              style={{
                backgroundImage: `url("${scene.image}")`,
                backgroundPosition: scene.position,
              }}
            />

            <div className="absolute inset-0 bg-white/[0.035]" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>
        ))}

        {/* =====================================================
            ARCHITECTURAL FRAME
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 z-20">
          {/* LEFT */}

          <div
            className="
              absolute
              left-[5vw]
              top-[7vh]
              bottom-[7vh]
              w-px
              bg-white/15
            "
          />

          {/* RIGHT */}

          <div
            className="
              absolute
              right-[5vw]
              top-[7vh]
              bottom-[7vh]
              w-px
              bg-white/15
            "
          />

          {/* TOP */}

          <div
            className="
              absolute
              left-[5vw]
              right-[5vw]
              top-[7vh]
              h-px
              bg-white/15
            "
          />

          {/* BOTTOM */}

          <div
            className="
              absolute
              left-[5vw]
              right-[5vw]
              bottom-[7vh]
              h-px
              bg-white/15
            "
          />

          {/* CENTER LINE */}

          <div
            className="
              absolute
              left-1/2
              top-[7vh]
              hidden
              h-[86vh]
              w-px
              -translate-x-1/2
              bg-white/[0.045]
              md:block
            "
          />
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
            {/* =================================================
                TOP LEFT META
            ================================================= */}

            <div
              className="
                absolute
                left-[8vw]
                top-[11vh]
                max-w-[70%]
              "
            >
              <div className="flex items-center gap-3 md:gap-4">
                <span className="h-px w-7 shrink-0 bg-[#c8a96b] md:w-10" />

                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    text-white/75
                    md:text-[10px]
                    md:tracking-[0.34em]
                  "
                  style={{
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {scene.eyebrow}
                </span>
              </div>
            </div>

            {/* =================================================
                TOP RIGHT NUMBER
            ================================================= */}

            <div
              className="
                absolute
                right-[8vw]
                top-[10vh]
              "
            >
              <span
                className="
                  text-[9px]
                  tracking-[0.22em]
                  text-white/60
                  md:text-[11px]
                "
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              >
                {scene.number}
              </span>
            </div>

            {/* =================================================
                HERO TITLE + DESCRIPTION
            ================================================= */}

            <div
              className="
                absolute

                left-[12vw]
                right-[12vw]

                top-1/2
                -translate-y-1/2

                max-w-[850px]

                sm:left-[10vw]
                sm:right-[10vw]

                md:bottom-[13vh]
                md:left-[8vw]
                md:right-auto
                md:top-auto
                md:translate-y-0
              "
            >
              <h1
                className="
                  max-w-[760px]

                  text-[clamp(2.35rem,10.8vw,4.6rem)]
                  italic
                  font-normal
                  leading-[0.88]
                  tracking-[-0.045em]
                  text-white

                  sm:text-[clamp(2.8rem,8vw,6rem)]

                  md:text-[clamp(3.8rem,7.2vw,8rem)]
                "
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                {scene.title}
              </h1>

              <div
                className="
                  mt-5
                  flex
                  max-w-[560px]
                  items-start
                  gap-3

                  sm:gap-4

                  md:mt-9
                  md:gap-5
                "
              >
                <span
                  className="
                    mt-[7px]
                    h-px
                    w-5
                    shrink-0
                    bg-[#c8a96b]

                    sm:w-6

                    md:mt-2
                    md:w-8
                  "
                />

                <p
                  className="
                    max-w-[500px]
                    italic
                    text-[10px]
                    font-light
                    leading-[1.65]
                    text-white/75

                    sm:text-[11px]
                    sm:leading-[1.7]

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

            {/* =================================================
                BOTTOM RIGHT BRAND
            ================================================= */}

            <div
              className="
                absolute
                bottom-[7vh]
                right-[8vw]
                hidden
                md:block
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/45
                "
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
          className="
            absolute
            bottom-0
            left-0
            z-50
            w-full
            overflow-hidden
          "
        >
          {/* STUDIO IMAGE */}

          <div
            ref={studioImageRef}
            className="
              absolute
              inset-0
              bg-cover
              bg-center

              scale-[1.01]

              sm:scale-[1.02]

              md:scale-100
            "
            style={{
              backgroundImage: `url("${STUDIO_IMAGE}")`,
            }}
          />

          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-black/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

          {/* =====================================================
              STUDIO FRAME
          ===================================================== */}

          <div className="pointer-events-none absolute inset-0">
            {/* LEFT */}

            <div
              className="
                absolute
                left-[5vw]
                top-[7vh]
                bottom-[7vh]
                w-px
                bg-white/15
              "
            />

            {/* RIGHT */}

            <div
              className="
                absolute
                right-[5vw]
                top-[7vh]
                bottom-[7vh]
                w-px
                bg-white/15
              "
            />

            {/* TOP */}

            <div
              className="
                absolute
                left-[5vw]
                right-[5vw]
                top-[7vh]
                h-px
                bg-white/15
              "
            />

            {/* BOTTOM */}

            <div
              className="
                absolute
                left-[5vw]
                right-[5vw]
                bottom-[7vh]
                h-px
                bg-white/15
              "
            />
          </div>

          {/* =====================================================
              STUDIO CONTENT
          ===================================================== */}

          <div className="absolute inset-0">
            {/* =================================================
                LEFT TEXT
            ================================================= */}

            <div
              className="
                absolute

                left-[12vw]
                right-[12vw]

                top-[17vh]

                max-w-[700px]

                sm:left-[10vw]
                sm:right-[10vw]

                md:bottom-[13vh]
                md:left-[8vw]
                md:right-auto
                md:top-auto
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3

                  md:mb-5
                  md:gap-4
                "
              >
                <span className="h-px w-7 shrink-0 bg-[#c8a96b] md:w-10" />

                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-[#d7bb7c]

                    md:text-[10px]
                  "
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
                  text-[clamp(2.45rem,10.5vw,4.5rem)]
                  font-normal
                  leading-[0.87]
                  tracking-[-0.045em]
                  text-white

                  sm:text-[clamp(2.8rem,9vw,5.5rem)]

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

                left-[12vw]
                right-[12vw]

                max-w-[500px]

                sm:left-[10vw]
                sm:right-[10vw]

                md:bottom-[13vh]
                md:left-auto
                md:right-[8vw]
                md:max-w-[400px]
              "
            >
              <div
                className="
                  mb-4
                  h-px
                  w-10
                  bg-[#c8a96b]

                  md:mb-6
                  md:w-12
                "
              />

              <p
                className="
                  italic
                  text-[10px]
                  font-light
                  leading-[1.65]
                  text-white/80

                  sm:text-[11px]
                  sm:leading-[1.7]

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

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-5

                  sm:gap-7

                  md:mt-8
                  md:gap-8
                "
              >
                <div>
                  <p
                    className="
                      text-[24px]
                      leading-none
                      text-white

                      sm:text-[27px]

                      md:text-[29px]
                    "
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    20+
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[7px]
                      uppercase
                      tracking-[0.23em]
                      text-white/50

                      md:mt-2
                      md:text-[9px]
                    "
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
                    className="
                      text-[24px]
                      leading-none
                      text-white

                      sm:text-[27px]

                      md:text-[29px]
                    "
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    900+
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[7px]
                      uppercase
                      tracking-[0.23em]
                      text-white/50

                      md:mt-2
                      md:text-[9px]
                    "
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
