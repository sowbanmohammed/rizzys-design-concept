"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CONTACT IMAGE
========================================================= */

const CONTACT_IMAGE =
  "/images/process/contact.png";

/* =========================================================
   ICONS
========================================================= */

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M7.5 3.5h2l1.5 4-2 1.8a15.5 15.5 0 0 0 5.7 5.7l1.8-2 4 1.5v2c0 1.1-.9 2-2 2C11.5 18.5 5.5 12.5 5.5 5.5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.4"
        cy="6.6"
        r="0.75"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M20 10.2c0 5.2-8 10.3-8 10.3S4 15.4 4 10.2a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className="h-[15px] w-[15px]"
      aria-hidden="true"
    >
      <path d="M5 19 19 5" />
      <path d="M8 5h11v11" />
    </svg>
  );
}

/* =========================================================
   CONTACT LINK
========================================================= */

function ContactLink({
  icon,
  label,
  href,
  children,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block"
    >
      <div className="flex items-start gap-4 transition-transform duration-500 group-hover:translate-x-1">
        {/* ICON */}

        <div
          className="
            mt-[1px]
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            border
            border-white/25
            bg-black/20
            text-white/80
            transition-all
            duration-500
            group-hover:border-[#c8a96b]/80
            group-hover:bg-[#c8a96b]/10
            group-hover:text-[#c8a96b]
          "
        >
          {icon}
        </div>

        {/* CONTENT */}

        <div className="min-w-0 flex-1">
          <span
            className="
              block
              font-sans
              text-[8px]
              uppercase
              tracking-[0.36em]
              text-white/60
              transition-colors
              duration-500
              group-hover:text-[#c8a96b]
            "
          >
            {label}
          </span>

          <div className="mt-1.5 text-white">
            {children}
          </div>

          {/* LINE */}

          <div className="relative mt-3 h-px w-full overflow-hidden bg-white/15">
            <span
              className="
                absolute
                inset-y-0
                left-0
                w-full
                origin-left
                scale-x-0
                bg-[#c8a96b]
                transition-transform
                duration-500
                group-hover:scale-x-100
              "
            />
          </div>
        </div>

        {/* ARROW */}

        <span
          className="
            mt-3
            hidden
            text-white/40
            opacity-0
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:text-[#c8a96b]
            group-hover:opacity-100
            sm:block
          "
        >
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

/* =========================================================
   CONTACT
========================================================= */

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /*
   * This is the actual image panel.
   *
   * Exactly like CinematicHero:
   *
   * height: 0%
   * bottom: 0
   *
   * then
   *
   * height: 100%
   *
   * So the image itself rises from bottom → top.
   */
  const imageRevealRef = useRef<HTMLDivElement | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const imageReveal = imageRevealRef.current;
    const content = contentRef.current;
    const top = topRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const bottom = bottomRef.current;

    if (
      !section ||
      !imageReveal ||
      !content ||
      !top ||
      !left ||
      !right ||
      !bottom
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /* =====================================================
         INITIAL IMAGE STATE

         Image panel starts with 0 height.
         Because bottom is fixed at 0,
         it opens upward.
      ===================================================== */

      gsap.set(imageReveal, {
        height: "0%",
        bottom: 0,
        top: "auto",
      });

      /* =====================================================
         INITIAL CONTENT STATE

         Content remains completely hidden
         until image is fully opened.
      ===================================================== */

      gsap.set(content, {
        opacity: 0,
      });

      gsap.set(top, {
        opacity: 0,
        y: -18,
      });

      gsap.set(left, {
        opacity: 0,
        x: -55,
      });

      gsap.set(right, {
        opacity: 0,
        x: 55,
      });

      gsap.set(bottom, {
        opacity: 0,
        y: 25,
      });

      /* =====================================================
         ENTER TIMELINE

         This is NOT a scrub animation.

         It plays when Contact enters viewport.
         Every time it enters, it plays again.
      ===================================================== */

      const playContactAnimation = () => {
        const timeline = gsap.timeline();

        /* -----------------------------------------------
           IMAGE:
           BOTTOM → TOP
        ------------------------------------------------ */

        timeline.to(imageReveal, {
          height: "100%",
          duration: 1.65,
          ease: "power3.inOut",
        });

        /* -----------------------------------------------
           VERY SMALL PAUSE
        ------------------------------------------------ */

        timeline.to({}, {
          duration: 0.25,
        });

        /* -----------------------------------------------
           SHOW CONTENT CONTAINER
        ------------------------------------------------ */

        timeline.to(content, {
          opacity: 1,
          duration: 0.01,
        });

        /* -----------------------------------------------
           TOP LABEL
        ------------------------------------------------ */

        timeline.to(
          top,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "+=0.05"
        );

        /* -----------------------------------------------
           LEFT
        ------------------------------------------------ */

        timeline.to(
          left,
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.55"
        );

        /* -----------------------------------------------
           RIGHT
        ------------------------------------------------ */

        timeline.to(
          right,
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.95"
        );

        /* -----------------------------------------------
           BOTTOM
        ------------------------------------------------ */

        timeline.to(
          bottom,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );
      };

      /* =====================================================
         RESET

         Before every new entrance:
         image goes back to bottom with 0 height.
      ===================================================== */

      const resetContact = () => {
        gsap.killTweensOf([
          imageReveal,
          content,
          top,
          left,
          right,
          bottom,
        ]);

        gsap.set(imageReveal, {
          height: "0%",
          bottom: 0,
          top: "auto",
        });

        gsap.set(content, {
          opacity: 0,
        });

        gsap.set(top, {
          opacity: 0,
          y: -18,
        });

        gsap.set(left, {
          opacity: 0,
          x: -55,
        });

        gsap.set(right, {
          opacity: 0,
          x: 55,
        });

        gsap.set(bottom, {
          opacity: 0,
          y: 25,
        });
      };

      /* =====================================================
         SCROLL TRIGGER

         once: false equivalent.
         Every time section enters viewport:
         reset → play.
      ===================================================== */

      ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        end: "bottom 18%",

        onEnter: () => {
          resetContact();
          playContactAnimation();
        },

        onEnterBack: () => {
          resetContact();
          playContactAnimation();
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#090807]
        text-white
      "
    >
      {/* =====================================================
          IMAGE PANEL

          IMPORTANT:

          This is NOT a background image.

          This entire panel starts at 0% height.
          Then grows from bottom → top.

          EXACTLY the same concept as your Hero Studio reveal.
      ===================================================== */}

      <div
        ref={imageRevealRef}
        className="
          absolute
          bottom-0
          left-0
          z-0
          w-full
          overflow-hidden
        "
      >
        {/* ACTUAL IMAGE */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url("${CONTACT_IMAGE}")`,
          }}
        />

        {/* IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-black/42" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/65
            via-black/30
            to-black/45
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/25
            via-transparent
            to-black/75
          "
        />
      </div>

      {/* =====================================================
          CONTENT

          This stays hidden until image reaches 100%.
      ===================================================== */}

      <div
        ref={contentRef}
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-screen
            w-full
            max-w-[1500px]
            flex-col
            px-6
            py-8
            sm:px-8
            md:px-12
            md:py-10
            lg:px-16
          "
        >
          {/* =================================================
              TOP BAR
          ================================================= */}

          <div
            ref={topRef}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  text-[14px]
                  italic
                  leading-none
                  text-white
                  md:text-[16px]
                "
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                07 / Begin a Conversation
              </span>

              <span className="h-px w-10 bg-[#c8a96b]" />
            </div>

            <span
              className="
                hidden
                font-sans
                text-[8px]
                tracking-[0.35em]
                text-white/60
                sm:block
              "
            >
              RIZZY&apos;S / 07
            </span>
          </div>

          {/* =================================================
              MAIN
          ================================================= */}

          <div className="flex flex-1 items-center">
            <div
              className="
                grid
                w-full
                grid-cols-12
                items-end
                gap-y-16
              "
            >
              {/* =============================================
                  LEFT
              ============================================== */}

              <div
                ref={leftRef}
                className="
                  col-span-12
                  lg:col-span-7
                "
              >
                <p
                  className="
                    mb-5
                    font-sans
                    text-[8px]
                    uppercase
                    tracking-[0.42em]
                    text-white/65
                    md:text-[9px]
                  "
                >
                  Transforming Spaces, Enhancing Lives
                </p>

                <h2
                  className="
                    max-w-[850px]
                    font-display
                    text-[clamp(3.1rem,6.5vw,7.1rem)]
                    font-light
                    leading-[0.82]
                    tracking-[-0.055em]
                    text-white
                  "
                >
                  Let&apos;s create
                  <br />

                  <span className="italic text-[#f1eee7]">
                    something timeless.
                  </span>
                </h2>

                <div className="mt-9 max-w-[430px]">
                  <p
                    className="
                      font-display
                      text-[20px]
                      font-light
                      leading-[1.1]
                      text-white/90
                      md:text-[23px]
                    "
                  >
                    Every great space
                    <br />

                    <span className="italic text-[#c8a96b]">
                      begins with an idea.
                    </span>
                  </p>

                  <p
                    className="
                      mt-5
                      max-w-[390px]
                      font-sans
                      text-[11px]
                      font-light
                      leading-[1.8]
                      text-white/65
                      md:text-[12px]
                    "
                  >
                    Tell us about the space you have in mind. We would love
                    to understand your vision and explore what it could
                    become.
                  </p>
                </div>
              </div>

              {/* =============================================
                  RIGHT
              ============================================== */}

              <div
                ref={rightRef}
                className="
                  col-span-12
                  lg:col-span-4
                  lg:col-start-9
                "
              >
                {/* EMAIL */}

                <ContactLink
                  icon={<MailIcon />}
                  label="Email"
                  href="mailto:rizzysdesignconcept@gmail.com"
                >
                  <span
                    className="
                      block
                      break-all
                      font-display
                      text-[17px]
                      font-light
                      tracking-[-0.01em]
                      text-white
                      md:text-[19px]
                    "
                  >
                    rizzysdesignconcept@gmail.com
                  </span>
                </ContactLink>

                {/* PHONE */}

                <div className="mt-7">
                  <ContactLink
                    icon={<PhoneIcon />}
                    label="Call the studio"
                    href="tel:+919962502979"
                  >
                    <div className="flex flex-col">
                      <span
                        className="
                          font-display
                          text-[19px]
                          font-light
                          text-white
                        "
                      >
                        +91 99625 02979
                      </span>

                      <span
                        className="
                          font-display
                          text-[19px]
                          font-light
                          text-white
                        "
                      >
                        +91 99625 05909
                      </span>
                    </div>
                  </ContactLink>
                </div>

                {/* INSTAGRAM */}

                <div className="mt-7">
                  <ContactLink
                    icon={<InstagramIcon />}
                    label="Instagram"
                    href="https://www.instagram.com/rizzysdesignconcept_/"
                    external
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-3
                        font-display
                        text-[19px]
                        font-light
                        text-white
                      "
                    >
                      @rizzysdesignconcept_

                      <span className="text-[13px] text-[#c8a96b]">
                        ↗
                      </span>
                    </span>
                  </ContactLink>
                </div>

                {/* LOCATION */}

                <div className="mt-7">
                  <ContactLink
                    icon={<LocationIcon />}
                    label="Studio / Location"
                    href="https://www.google.com/maps/search/?api=1&query=No.4%2F23A%2C%20Sumathinath%20Residency%2C%20Nanmangalam%2C%20Chennai%20600117"
                    external
                  >
                    <span
                      className="
                        block
                        max-w-[310px]
                        font-display
                        text-[17px]
                        font-light
                        leading-[1.4]
                        text-white
                        md:text-[18px]
                      "
                    >
                      No.4/23A, Sumathinath Residency,
                      <br />
                      Nanmangalam,
                      <br />
                      Chennai — 600117
                    </span>
                  </ContactLink>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <div
            ref={bottomRef}
            className="
              border-t
              border-white/15
              pt-7
            "
          >
            <div
              className="
                flex
                flex-col
                gap-6
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              {/* GET IN TOUCH */}

              <a
                href="mailto:rizzysdesignconcept@gmail.com"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  font-display
                  text-[clamp(2.3rem,4vw,4.8rem)]
                  font-light
                  leading-[0.85]
                  tracking-[-0.045em]
                  text-white
                  transition-colors
                  duration-500
                  hover:text-[#f4efe8]
                "
              >
                Get in touch

                <span
                  className="
                    text-[#c8a96b]
                    transition-all
                    duration-500
                    group-hover:translate-x-2
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>
              </a>

              {/* LOCATION */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=No.4%2F23A%2C%20Sumathinath%20Residency%2C%20Nanmangalam%2C%20Chennai%20600117"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <span
                  className="
                    font-display
                    text-[15px]
                    italic
                    text-white/65
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                >
                  Chennai · Since 2005
                </span>

                <span
                  className="
                    text-[13px]
                    text-[#c8a96b]
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}