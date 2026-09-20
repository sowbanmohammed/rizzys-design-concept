"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
};

const softReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease,
    },
  },
};

const slowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
      ease,
    },
  },
};

const processSteps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "The Brief",
    text: "Understanding how you live, what you need and what you want the space to become.",
  },
  {
    number: "02",
    title: "Define",
    subtitle: "The Concept",
    text: "Translating your requirements into a clear architectural and interior direction.",
  },
  {
    number: "03",
    title: "Visualise",
    subtitle: "The Experience",
    text: "Bringing layouts, materials, lighting and proportions together before execution.",
  },
  {
    number: "04",
    title: "Refine",
    subtitle: "The Details",
    text: "Every finish, texture and detail is considered until the composition feels complete.",
  },
  {
    number: "05",
    title: "Execute",
    subtitle: "The Reality",
    text: "Carrying the original vision through every stage until the finished space feels effortless.",
  },
];

const capabilities = [
  "Concept Development",
  "Space Planning",
  "AutoCAD Documentation",
  "3D Visualisation",
  "Material Selection",
  "Turnkey Execution",
];

export default function Philosophy() {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        bg-[#0b0a09]
        text-[#f1eee7]
      "
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 2,
            ease,
          }}
          className="
            absolute
            left-[58%]
            top-[5%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#c8a96b]/[0.025]
            blur-[150px]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 2.2,
            delay: 0.2,
            ease,
          }}
          className="
            absolute
            bottom-[10%]
            left-[5%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-white/[0.01]
            blur-[130px]
          "
        />
      </div>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="relative z-10 mx-auto w-[86vw] max-w-[1450px]">
        <div className="pt-[16vh] md:pt-[18vh]">
          {/* Label */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            <span
              className="
                text-[14px]
                italic
                leading-none
                text-[#c8a96b]
                md:text-[16px]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              05 / How We Create
            </span>
          </motion.div>

          {/* Main heading */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            variants={softReveal}
            className="mt-10 md:mt-12"
          >
            <h2
              className="
                max-w-[1050px]
                text-[clamp(3.4rem,7vw,7rem)]
                font-normal
                italic
                leading-[0.84]
                tracking-[-0.055em]
                text-[#f1eee7]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Thoughtful from
              <br />

              <span className="text-white/30">
                beginning to end.
              </span>
            </h2>
          </motion.div>

          {/* Intro copy */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="
              mt-10
              max-w-[570px]
              md:ml-[27vw]
              md:mt-12
            "
          >
            <p
              className="
                text-[11px]
                font-light
                leading-[1.95]
                tracking-[0.01em]
                text-white/40
                md:text-[13px]
              "
              style={{
                fontFamily: "var(--font-sans)",
              }}
            >
              We believe exceptional interiors are not created through
              decoration alone. They are shaped through understanding,
              proportion, material, light and precise execution.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          PROCESS INTRO
      ========================================================= */}

      <div className="relative z-10 mx-auto mt-[18vh] w-[86vw] max-w-[1450px] md:mt-[22vh]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          variants={fadeUp}
          className="
            flex
            items-end
            justify-between
          "
        >
          <div>
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.34em]
                text-white/25
              "
              style={{
                fontFamily: "var(--font-sans)",
              }}
            >
              Our Process
            </span>

            <h3
              className="
                mt-4
                text-[clamp(2rem,3.5vw,3.8rem)]
                font-normal
                italic
                leading-[0.9]
                tracking-[-0.04em]
                text-white/80
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Five stages.
              <span className="text-white/25">
                {" "}
                One vision.
              </span>
            </h3>
          </div>

          <span
            className="
              hidden
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/20
              md:block
            "
            style={{
              fontFamily: "var(--font-sans)",
            }}
          >
            05 — 05
          </span>
        </motion.div>
      </div>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <div className="relative z-10 mx-auto mt-[7vh] w-[86vw] max-w-[1450px]">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.number}
            initial={{
              opacity: 0,
              y: 65,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: index * 0.08,
              ease,
            }}
            className="
              group
              relative
              py-[7vh]
              md:py-[8vh]
            "
          >
            <div
              className="
                grid
                gap-8
                md:grid-cols-[100px_1fr_0.65fr]
                md:gap-[6vw]
                md:items-center
              "
            >
              {/* Number */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08 + 0.15,
                  ease,
                }}
              >
                <span
                  className="
                    text-[9px]
                    tracking-[0.22em]
                    text-[#c8a96b]/80
                  "
                  style={{
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {step.number}
                </span>

                <div className="mt-3 h-px w-5 bg-[#c8a96b]/40 transition-all duration-700 group-hover:w-10 group-hover:bg-[#c8a96b]" />
              </motion.div>

              {/* Title */}

              <div className="overflow-hidden">
                <motion.h4
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08 + 0.1,
                    ease,
                  }}
                  className="
                    text-[clamp(2.8rem,5.4vw,5.5rem)]
                    font-normal
                    italic
                    leading-[0.82]
                    tracking-[-0.055em]
                    text-[#f1eee7]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-3
                  "
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  {step.title}
                </motion.h4>

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08 + 0.25,
                    ease,
                  }}
                  className="
                    mt-3
                    block
                    text-[7px]
                    uppercase
                    tracking-[0.34em]
                    text-white/25
                    md:mt-4
                  "
                  style={{
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {step.subtitle}
                </motion.span>
              </div>

              {/* Description */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08 + 0.3,
                  ease,
                }}
                className="max-w-[390px]"
              >
                <p
                  className="
                    text-[10px]
                    font-light
                    leading-[1.9]
                    text-white/35
                    transition-colors
                    duration-500
                    group-hover:text-white/60
                    md:text-[12px]
                  "
                  style={{
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {step.text}
                </p>
              </motion.div>
            </div>

            {/* Minimal hover indicator */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: "100%",
                opacity: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.08 + 0.4,
                ease,
              }}
              className="
                absolute
                bottom-0
                left-0
                h-px
                bg-white/[0.055]
              "
            />

            <span
              className="
                absolute
                bottom-[-1px]
                left-0
                h-[1px]
                w-0
                bg-[#c8a96b]/60
                transition-all
                duration-700
                group-hover:w-16
              "
            />
          </motion.article>
        ))}
      </div>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <div className="relative z-10 mx-auto mt-[18vh] w-[86vw] max-w-[1450px] md:mt-[22vh]">
        <div className="grid gap-14 md:grid-cols-[0.65fr_1.35fr] md:gap-[8vw]">
          {/* Left */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            variants={softReveal}
          >
            <span
              className="
                text-[14px]
                italic
                text-[#c8a96b]
                md:text-[16px]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              What We Deliver
            </span>

            <h3
              className="
                mt-6
                max-w-[430px]
                text-[clamp(2.7rem,4.5vw,4.8rem)]
                font-normal
                italic
                leading-[0.84]
                tracking-[-0.05em]
                text-[#f1eee7]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              From idea
              <br />
              <span className="text-white/25">
                to reality.
              </span>
            </h3>
          </motion.div>

          {/* Right */}

          <div>
            {capabilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.07,
                  ease,
                }}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  py-5
                  md:py-[22px]
                "
              >
                <div className="flex items-center gap-7">
                  <span
                    className="
                      text-[8px]
                      tracking-[0.2em]
                      text-[#c8a96b]/60
                    "
                    style={{
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      text-[clamp(1.35rem,2.3vw,2.4rem)]
                      font-normal
                      italic
                      leading-none
                      tracking-[-0.025em]
                      text-white/50
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                      group-hover:text-[#f1eee7]
                    "
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </div>

                <motion.span
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07 + 0.3,
                    ease,
                  }}
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#c8a96b]/40
                    transition-all
                    duration-500
                    group-hover:bg-[#c8a96b]
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          FINAL PHILOSOPHY
      ========================================================= */}

      <div className="relative z-10 mx-auto w-[86vw] max-w-[1450px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          variants={slowReveal}
          className="
            pb-[18vh]
            pt-[22vh]
            md:pb-[22vh]
            md:pt-[26vh]
          "
        >
          {/* Label */}

          <span
            className="
              text-[14px]
              italic
              text-[#c8a96b]
              md:text-[16px]
            "
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
            }}
          >
            Our Philosophy
          </span>

          {/* Statement */}

          <div className="mt-10 md:mt-12">
            <motion.h3
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 1.3,
                ease,
              }}
              className="
                max-w-[1000px]
                text-[clamp(3.5rem,7vw,7.2rem)]
                font-normal
                italic
                leading-[0.8]
                tracking-[-0.06em]
                text-[#f1eee7]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Good design
              <br />

              <span className="text-white/25">
                is visible.
              </span>

              <br />

              <span className="text-[#c8a96b]/85">
                Good execution
              </span>

              <br />

              <span className="text-white/25">
                is felt.
              </span>
            </motion.h3>
          </div>

          {/* Closing copy */}

          <motion.div
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
              delay: 0.2,
              ease,
            }}
            className="
              mt-12
              max-w-[390px]
              md:ml-[42vw]
              md:mt-16
            "
          >
            <p
              className="
                text-[10px]
                font-light
                leading-[2]
                text-white/35
                md:text-[12px]
              "
              style={{
                fontFamily: "var(--font-sans)",
              }}
            >
              The finest spaces are not defined by how much they contain, but
              by how naturally everything belongs.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              >
                Rizzy&apos;s Design Concept
              </span>

              <span className="h-px w-8 bg-[#c8a96b]/50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}