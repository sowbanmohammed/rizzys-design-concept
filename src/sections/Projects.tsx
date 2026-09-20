"use client";

import { motion, type Variants } from "framer-motion";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    number: "01",
    title: "Chiron Villa",
    location: "ECR · Chennai",
    category: "Residential",
    description:
      "A refined contemporary villa shaped around spacious living, warm materials and understated detailing. Every space is carefully composed to create a calm, sophisticated home where architecture and interiors flow naturally together.",
    images: [
      "/images/projects/chiron1.jpeg",
      "/images/projects/chiron4.jpeg",
      "/images/projects/chiron3.jpeg",
      "/images/projects/chiron2.jpeg",
    ],
  },

  {
    number: "02",
    title: "S.I.S — Florence",
    location: "Porur · Chennai",
    category: "Residential",
    description:
      "A sophisticated residential interior balancing elegant finishes, thoughtful proportions and everyday functionality, creating a home that feels refined yet naturally lived-in.",
    images: [
      "/images/projects/sis1.jpeg",
      "/images/projects/sis2.jpeg",
      "/images/projects/sis3.jpeg",
    ],
  },

  {
    number: "03",
    title: "SPR City",
    location: "B2 · Chennai",
    category: "Residential",
    description:
      "A contemporary urban residence defined by clean geometry, layered lighting and a restrained material palette, bringing together modern character and comfortable living.",
    images: [
      "/images/projects/spr1.jpeg",
      "/images/projects/spr2.jpeg",
      "/images/projects/spr3.jpeg",
      "/images/projects/spr4.jpeg",
    ],
  },

  {
    number: "04",
    title: "Tamaya",
    location: "Royapettah · Chennai",
    category: "Hookah Lounge",
    description:
      "A distinctive hookah lounge created around an immersive evening atmosphere, combining rich tones, intimate seating, dramatic lighting and layered textures to shape a memorable hospitality experience.",
    images: [
      "/images/projects/tamaya1.jpeg",
      "/images/projects/tamaya2.jpeg",
      "/images/projects/tamaya3.jpeg",
      "/images/projects/tamaya4.jpeg",
    ],
  },

  {
    number: "05",
    title: "Perambur Residence",
    location: "Perambur · Chennai",
    category: "Residential",
    description:
      "A personalised home where practical planning meets refined detailing, with warm materials and carefully considered spaces designed around the rhythm of everyday family life.",
    images: [
      "/images/projects/perambur1.jpeg",
      "/images/projects/perambur2.jpeg",
      "/images/projects/perambur3.jpeg",
      "/images/projects/perambur4.jpeg",
    ],
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
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
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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

/* =========================================================
   IMAGE COMPONENT
   - No crop
   - No stretch
   - Natural aspect ratio
========================================================= */

function ProjectImage({
  image,
  main = false,
}: {
  image: string;
  main?: boolean;
}) {
  return (
    <div
      className="
        group
        relative
        w-full
        overflow-hidden
        bg-[#151311]
      "
    >
      <motion.img
        src={image}
        alt=""
        draggable={false}
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
        transition={{
          opacity: {
            duration: main ? 1.1 : 0.9,
          },
          scale: {
            duration: main ? 1.5 : 1.25,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className="
          relative
          block
          h-auto
          w-full
          object-contain
          object-center
          transition-transform
          duration-[1200ms]
          ease-out
          group-hover:scale-[1.015]
        "
      />

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          ${
            main
              ? "bg-gradient-to-t from-black/55 via-black/5 to-transparent"
              : "bg-black/5"
          }
        `}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[3.5%]
          border
          border-white/10
        "
      />
    </div>
  );
}

/* =========================================================
   PROJECT HEADER
========================================================= */

function ProjectHeader({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div
      className="
        mb-8
        grid
        gap-7
        md:mb-10
        md:grid-cols-[1fr_auto]
        md:items-end
      "
    >
      <div>
        <div
          className="
            mb-5
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-8
              bg-[#c8a96b]
            "
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.32em]
              text-white/45
              md:text-[9px]
            "
            style={{
              fontFamily: "var(--font-sans)",
            }}
          >
            {project.category}
          </span>
        </div>

        <h3
          className="
            text-[clamp(2.7rem,6vw,6rem)]
            font-normal
            leading-[0.84]
            tracking-[-0.045em]
            text-white
          "
          style={{
            fontFamily: "var(--font-display)",
          }}
        >
          {project.title}
        </h3>

        <p
          className="
            mt-4
            text-[8px]
            uppercase
            tracking-[0.28em]
            text-white/35
          "
          style={{
            fontFamily: "var(--font-sans)",
          }}
        >
          {project.location}
        </p>
      </div>

      <span
        className="
          text-[10px]
          tracking-[0.25em]
          text-white/25
        "
        style={{
          fontFamily: "var(--font-sans)",
        }}
      >
        {project.number}
      </span>
    </div>
  );
}

/* =========================================================
   DESCRIPTION
========================================================= */

function ProjectDescription({
  description,
  align = "left",
}: {
  description: string;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.2,
      }}
      variants={fadeUp}
      className={`
        relative
        max-w-[570px]
        ${align === "right" ? "ml-auto text-right" : ""}
      `}
    >
      <span
        className="
          mb-5
          block
          h-px
          w-12
          bg-[#c8a96b]/70
        "
        style={{
          marginLeft: align === "right" ? "auto" : undefined,
        }}
      />

      <p
        className="
          text-[19px]
          font-normal
          italic
          leading-[1.55]
          tracking-[-0.01em]
          text-[#d8d0c2]/85
          md:text-[23px]
        "
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   PROJECT 01
========================================================= */

function ProjectOne() {
  const project = projects[0];

  return (
    <div>
      <ProjectHeader project={project} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
        }}
        variants={revealUp}
        className="relative"
      >
        <ProjectImage
          image={project.images[0]}
          main
        />
      </motion.div>

      <div
        className="
          mt-8
          md:mt-12
          md:ml-[10vw]
        "
      >
        <ProjectDescription
          description={project.description}
        />
      </div>

      <div
        className="
          mt-8
          grid
          gap-5
          md:mt-12
          md:grid-cols-[0.72fr_1.28fr]
          md:items-start
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealLeft}
        >
          <ProjectImage
            image={project.images[1]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealRight}
        >
          <ProjectImage
            image={project.images[2]}
          />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
        }}
        variants={revealUp}
        className="
          relative
          mt-5
          md:ml-[17vw]
          md:mt-8
        "
      >
        <ProjectImage
          image={project.images[3]}
        />
      </motion.div>
    </div>
  );
}

/* =========================================================
   PROJECT 02
========================================================= */

function ProjectTwo() {
  const project = projects[1];

  return (
    <div>
      <ProjectHeader project={project} />

      <div
        className="
          grid
          gap-8
          md:grid-cols-[0.72fr_1.28fr]
          md:items-start
          md:gap-[6vw]
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealLeft}
          className="md:mt-[8vh]"
        >
          <ProjectImage
            image={project.images[0]}
            main
          />
        </motion.div>

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.12,
            }}
            variants={revealRight}
          >
            <ProjectImage
              image={project.images[1]}
            />
          </motion.div>

          <div
            className="
              mt-8
              md:mt-10
            "
          >
            <ProjectDescription
              description={project.description}
            />
          </div>

          <div
            className="
              mt-8
              grid
              gap-5
              md:mt-12
              md:grid-cols-2
              md:items-start
            "
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.1,
              }}
              variants={revealRight}
            >
              <ProjectImage
                image={project.images[2]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT 03
========================================================= */

function ProjectThree() {
  const project = projects[2];

  return (
    <div>
      <ProjectHeader project={project} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
        }}
        variants={revealRight}
        className="relative"
      >
        <ProjectImage
          image={project.images[0]}
          main
        />
      </motion.div>

      <div
        className="
          mt-8
          md:ml-[24vw]
          md:mt-12
        "
      >
        <ProjectDescription
          description={project.description}
          align="left"
        />
      </div>

      <div
        className="
          mt-8
          grid
          gap-5
          md:mt-12
          md:grid-cols-[1fr_0.75fr_1fr]
          md:items-start
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealLeft}
        >
          <ProjectImage
            image={project.images[1]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealUp}
          className="md:mt-[8vh]"
        >
          <ProjectImage
            image={project.images[2]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealRight}
        >
          <ProjectImage
            image={project.images[3]}
          />
        </motion.div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT 04 — TAMAYA HOOKAH LOUNGE
========================================================= */

function ProjectFour() {
  const project = projects[3];

  return (
    <div>
      <div
        className="
          grid
          gap-10
          md:grid-cols-[0.35fr_1fr]
          md:items-start
          md:gap-[7vw]
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          variants={revealLeft}
          className="md:mb-[7vh]"
        >
          <ProjectHeader project={project} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealRight}
        >
          <ProjectImage
            image={project.images[0]}
            main
          />
        </motion.div>
      </div>

      <div
        className="
          mt-8
          md:ml-[23vw]
          md:mt-12
        "
      >
        <ProjectDescription
          description={project.description}
        />
      </div>

      <div
        className="
          mt-8
          grid
          gap-5
          md:ml-[23vw]
          md:mt-12
          md:grid-cols-[1.15fr_0.85fr]
          md:items-start
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealLeft}
        >
          <ProjectImage
            image={project.images[1]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealRight}
          className="md:mt-[8vh]"
        >
          <ProjectImage
            image={project.images[2]}
          />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
        }}
        variants={revealUp}
        className="
          mt-5
          md:ml-[40vw]
          md:mt-8
        "
      >
        <ProjectImage
          image={project.images[3]}
        />
      </motion.div>
    </div>
  );
}

/* =========================================================
   PROJECT 05
========================================================= */

function ProjectFive() {
  const project = projects[4];

  return (
    <div>
      <ProjectHeader project={project} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
        }}
        variants={revealUp}
        className="relative"
      >
        <ProjectImage
          image={project.images[0]}
          main
        />
      </motion.div>

      <div
        className="
          mt-8
          md:ml-[10vw]
          md:mt-12
        "
      >
        <ProjectDescription
          description={project.description}
        />
      </div>

      <div
        className="
          mt-8
          grid
          gap-5
          md:mt-12
          md:grid-cols-[1.3fr_0.7fr]
          md:items-start
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealLeft}
        >
          <ProjectImage
            image={project.images[1]}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          variants={revealRight}
          className="md:mt-[9vh]"
        >
          <ProjectImage
            image={project.images[2]}
          />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.12,
        }}
        variants={revealUp}
        className="
          relative
          mt-5
          md:ml-[18vw]
          md:mt-8
        "
      >
        <ProjectImage
          image={project.images[3]}
        />
      </motion.div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="
        relative
        overflow-hidden
        bg-[#080807]
        text-[#f1eee7]
      "
    >
      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="h-[14vh] md:h-[20vh]" />

      <div
        className="
          mx-auto
          w-[84vw]
          max-w-[1500px]
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          variants={revealUp}
          className="
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              h-px
              w-10
              bg-[#c8a96b]
            "
          />

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
            04 / Selected Work
          </span>
        </motion.div>

        <div
          className="
            mt-8
            grid
            gap-10
            md:mt-12
            md:grid-cols-[1.3fr_0.7fr]
            md:items-end
          "
        >
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
              text-[clamp(3.2rem,10vw,7.8rem)]
              font-normal
              leading-[0.84]
              tracking-[-0.05em]
              text-white
              md:text-[clamp(4rem,7.5vw,8rem)]
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Spaces with
            <br />

            <span className="italic text-white/50">
              a point of view.
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={revealRight}
            className="
              max-w-[370px]
              text-[12px]
              font-light
              leading-[1.85]
              text-white/50
              md:justify-self-end
              md:text-[14px]
            "
            style={{
              fontFamily: "var(--font-sans)",
            }}
          >
            A selection of spaces shaped through
            proportion, material, atmosphere and the
            details that make a room feel unmistakably
            its own.
          </motion.p>
        </div>
      </div>

      {/* =====================================================
          PROJECT 01
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[13vh]
          w-[84vw]
          max-w-[1500px]
        "
      >
        <ProjectOne />
      </div>

      {/* =====================================================
          PROJECT 02
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[20vh]
          w-[84vw]
          max-w-[1500px]
        "
      >
        <ProjectTwo />
      </div>

      {/* =====================================================
          PROJECT 03
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[20vh]
          w-[84vw]
          max-w-[1500px]
        "
      >
        <ProjectThree />
      </div>

      {/* =====================================================
          PROJECT 04
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[20vh]
          w-[84vw]
          max-w-[1500px]
        "
      >
        <ProjectFour />
      </div>

      {/* =====================================================
          PROJECT 05
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[20vh]
          w-[84vw]
          max-w-[1500px]
        "
      >
        <ProjectFive />
      </div>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <div
        className="
          mx-auto
          w-[84vw]
          max-w-[1500px]
          pb-[16vh]
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="
            relative
            mt-[20vh]
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
              text-[clamp(2rem,5vw,5.5rem)]
              font-normal
              leading-[0.95]
              tracking-[-0.045em]
              text-white/90
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Every project begins with a space,
            <br />

            <span className="italic text-[#c8a96b]/75">
              and ends with a feeling.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}