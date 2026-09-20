"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const projectTypes = [
  "Residential",
  "Villa",
  "Apartment",
  "Hospitality",
  "Commercial",
  "Renovation",
];

export default function Spaces() {
  const [selectedType, setSelectedType] = useState("Residential");

  return (
    <section
      id="quote"
      className="
        relative
        overflow-hidden
        bg-[#080807]
        text-[#F1EEE7]
      "
    >
      {/* =====================================================
          TOP VISUAL FIELD
      ===================================================== */}

      <div
        className="
          relative
          min-h-[620px]
          overflow-hidden
          sm:min-h-[700px]
          lg:min-h-[820px]
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90')]
            bg-cover
            bg-center
            scale-[1.02]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[#080807]/45
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#080807]/55
            via-[#080807]/15
            to-[#080807]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#080807]/70
            via-transparent
            to-[#080807]/20
          "
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[620px]
            w-[calc(100%-40px)]
            max-w-[1480px]
            flex-col
            justify-end
            pb-16
            sm:min-h-[700px]
            sm:w-[calc(100%-64px)]
            sm:pb-20
            lg:min-h-[820px]
            lg:pb-28
          "
        >
          <div className="mb-8 flex items-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-[#B69B70]
              "
            />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#D6C7AE]
              "
            >
              07 — Begin a Project
            </span>
          </div>

          <h2
            className="
              max-w-[1100px]
              font-[var(--font-cormorant)]
              text-[clamp(4rem,9vw,9rem)]
              font-normal
              leading-[0.78]
              tracking-[-0.065em]
            "
          >
            Let&apos;s create
            <br />
            <span className="text-[#B69B70]">
              something considered.
            </span>
          </h2>

          <div
            className="
              mt-10
              grid
              gap-8
              lg:grid-cols-[1fr_0.55fr]
              lg:items-end
            "
          >
            <p
              className="
                max-w-[580px]
                text-[12px]
                leading-[1.9]
                text-[#F1EEE7]/60
                sm:text-[13px]
              "
            >
              Tell us a little about your space, your vision
              and where you are in the process. We&apos;ll take
              it from there.
            </p>

            <div
              className="
                flex
                items-center
                gap-4
                lg:justify-end
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-[#F1EEE7]/35
                "
              >
                Chennai · India
              </span>

              <span className="text-[#B69B70]">↘</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          PROJECT TYPE
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-[calc(100%-40px)]
          max-w-[1480px]
          py-24
          sm:w-[calc(100%-64px)]
          sm:py-32
          lg:py-40
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="
            grid
            gap-12
            lg:grid-cols-[0.32fr_1fr]
          "
        >
          {/* Left */}

          <div>
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#B69B70]
              "
            >
              Start with the space
            </span>

            <p
              className="
                mt-6
                max-w-[280px]
                text-[11px]
                leading-[1.9]
                text-[#F1EEE7]/40
              "
            >
              Every project starts differently. Choose the
              direction that best describes yours.
            </p>
          </div>

          {/* Right */}

          <div>
            <h3
              className="
                font-[var(--font-cormorant)]
                text-[clamp(2.8rem,5vw,5.5rem)]
                leading-[0.9]
                tracking-[-0.05em]
              "
            >
              What are you
              <br />
              <span className="text-[#B69B70]">
                imagining?
              </span>
            </h3>

            <div
              className="
                mt-12
                grid
                border-t
                border-[#D6C7AE]/15
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {projectTypes.map((type, index) => {
                const active = selectedType === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`
                      group
                      relative
                      flex
                      min-h-[88px]
                      items-center
                      justify-between
                      border-b
                      border-[#D6C7AE]/15
                      px-1
                      text-left
                      transition-all
                      duration-500
                      sm:px-4
                      lg:min-h-[105px]
                      ${
                        active
                          ? "text-[#F1EEE7]"
                          : "text-[#F1EEE7]/35 hover:text-[#F1EEE7]/80"
                      }
                    `}
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-4
                        font-[var(--font-cormorant)]
                        text-2xl
                        sm:text-3xl
                      "
                    >
                      <span
                        className={`
                          text-[8px]
                          font-[var(--font-manrope)]
                          tracking-[0.18em]
                          transition-colors
                          ${
                            active
                              ? "text-[#B69B70]"
                              : "text-[#F1EEE7]/20"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      {type}
                    </span>

                    <span
                      className={`
                        text-lg
                        transition-all
                        duration-500
                        ${
                          active
                            ? "translate-x-0 opacity-100 text-[#B69B70]"
                            : "translate-x-2 opacity-0"
                        }
                      `}
                    >
                      ↗
                    </span>

                    {active && (
                      <motion.span
                        layoutId="selected-project-line"
                        className="
                          absolute
                          bottom-[-1px]
                          left-0
                          h-px
                          w-full
                          bg-[#B69B70]
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected state */}

            <motion.div
              key={selectedType}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-[#F1EEE7]/30
                "
              >
                Selected
              </span>

              <span
                className="
                  border
                  border-[#B69B70]/35
                  px-4
                  py-2
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-[#D6C7AE]
                "
              >
                {selectedType}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          WHAT WE NEED
      ===================================================== */}

      <div
        className="
          border-y
          border-[#D6C7AE]/10
          bg-[#11110F]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-[calc(100%-40px)]
            max-w-[1480px]
            gap-14
            py-24
            sm:w-[calc(100%-64px)]
            sm:py-32
            lg:grid-cols-[0.32fr_1fr]
            lg:py-40
          "
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#B69B70]
              "
            >
              Before we begin
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeIn}
            className="
              grid
              gap-12
              sm:grid-cols-3
            "
          >
            <div>
              <span
                className="
                  font-[var(--font-cormorant)]
                  text-4xl
                  text-[#D6C7AE]
                "
              >
                01
              </span>

              <h4
                className="
                  mt-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                "
              >
                Your Space
              </h4>

              <p
                className="
                  mt-4
                  text-[11px]
                  leading-[1.8]
                  text-[#F1EEE7]/40
                "
              >
                Location, property type and approximate
                size are enough to begin.
              </p>
            </div>

            <div>
              <span
                className="
                  font-[var(--font-cormorant)]
                  text-4xl
                  text-[#D6C7AE]
                "
              >
                02
              </span>

              <h4
                className="
                  mt-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                "
              >
                Your Vision
              </h4>

              <p
                className="
                  mt-4
                  text-[11px]
                  leading-[1.8]
                  text-[#F1EEE7]/40
                "
              >
                Tell us what you want the space to feel
                like and what matters most to you.
              </p>
            </div>

            <div>
              <span
                className="
                  font-[var(--font-cormorant)]
                  text-4xl
                  text-[#D6C7AE]
                "
              >
                03
              </span>

              <h4
                className="
                  mt-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                "
              >
                Your Timeline
              </h4>

              <p
                className="
                  mt-4
                  text-[11px]
                  leading-[1.8]
                  text-[#F1EEE7]/40
                "
              >
                Whether you are planning or ready to start,
                knowing your timeline helps us guide you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-[#080807]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#B69B70]/[0.035]
            blur-[100px]
          "
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={fadeUp}
          className="
            relative
            z-10
            mx-auto
            flex
            w-[calc(100%-40px)]
            max-w-[1480px]
            flex-col
            items-start
            justify-between
            gap-10
            py-28
            sm:w-[calc(100%-64px)]
            sm:py-36
            lg:flex-row
            lg:items-end
            lg:py-44
          "
        >
          <div>
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#B69B70]
              "
            >
              Ready when you are
            </span>

            <p
              className="
                mt-6
                max-w-[800px]
                font-[var(--font-cormorant)]
                text-[clamp(2.8rem,6vw,6.5rem)]
                leading-[0.86]
                tracking-[-0.055em]
              "
            >
              Your next space
              <br />
              starts with a conversation.
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              flex
              min-h-[58px]
              items-center
              gap-8
              border
              border-[#B69B70]/50
              px-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#D6C7AE]
              transition-all
              duration-500
              hover:border-[#B69B70]
              hover:bg-[#B69B70]
              hover:text-[#080807]
              sm:px-9
            "
          >
            <span>Start an Enquiry</span>

            <span
              className="
                text-base
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        </motion.div>
      </div>

      {/* =====================================================
          GRAIN
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          opacity-[0.035]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />
    </section>
  );
}