"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const footerLinks = [
  {
    label: "Studio",
    href: "#studio",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Expertise",
    href: "#expertise",
  },
  {
    label: "Get a Quote",
    href: "#quote",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#080807]
        text-[#F1EEE7]
      "
    >
      {/* =====================================================
          LARGE BRAND MARK
      ===================================================== */}

      <div
        className="
          mx-auto
          w-[calc(100%-40px)]
          max-w-[1480px]
          pt-20
          sm:w-[calc(100%-64px)]
          sm:pt-28
          lg:pt-36
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
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
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
                text-[#B69B70]
              "
            >
              Rizzy&apos;s Design Concept
            </span>
          </div>

          <h2
            className="
              mt-10
              max-w-[1200px]
              font-[var(--font-cormorant)]
              text-[clamp(4.5rem,12vw,13rem)]
              font-normal
              leading-[0.7]
              tracking-[-0.075em]
            "
          >
            RIZZY&apos;S
          </h2>

          <p
            className="
              mt-8
              font-[var(--font-cormorant)]
              text-[clamp(1.7rem,3vw,3rem)]
              leading-none
              tracking-[-0.03em]
              text-[#B69B70]
            "
          >
            Design Concept
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          FOOTER INFORMATION
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-24
          w-[calc(100%-40px)]
          max-w-[1480px]
          border-t
          border-[#D6C7AE]/15
          pt-12
          sm:w-[calc(100%-64px)]
          sm:mt-32
          sm:pt-16
        "
      >
        <div
          className="
            grid
            gap-14
            md:grid-cols-2
            lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr]
            lg:gap-12
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <p
              className="
                max-w-[330px]
                text-[11px]
                leading-[1.9]
                text-[#F1EEE7]/40
              "
            >
              A Chennai-based interior design studio creating
              refined, personalised spaces through thoughtful
              design, premium materials and considered execution.
            </p>

            <p
              className="
                mt-7
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#D6C7AE]/40
              "
            >
              Transforming Spaces, Enhancing Lives
            </p>
          </motion.div>

          {/* =================================================
              EXPLORE
          ================================================= */}

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
              Explore
            </span>

            <nav
              className="
                mt-6
                flex
                flex-col
                items-start
                gap-4
              "
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[11px]
                    text-[#F1EEE7]/55
                    transition-colors
                    hover:text-[#F1EEE7]
                  "
                >
                  <span
                    className="
                      h-px
                      w-0
                      bg-[#B69B70]
                      transition-all
                      duration-500
                      group-hover:w-4
                    "
                  />

                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================= */}

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
              Contact
            </span>

            <div
              className="
                mt-6
                flex
                flex-col
                items-start
                gap-4
              "
            >
              <a
                href="mailto:rizzysdesignconcept@gmail.com"
                className="
                  break-all
                  text-[11px]
                  leading-[1.7]
                  text-[#F1EEE7]/55
                  transition-colors
                  hover:text-[#B69B70]
                "
              >
                rizzysdesignconcept@gmail.com
              </a>

              <a
                href="tel:9962502979"
                className="
                  text-[11px]
                  text-[#F1EEE7]/55
                  transition-colors
                  hover:text-[#B69B70]
                "
              >
                +91 99625 02979
              </a>

              <a
                href="tel:9962505909"
                className="
                  text-[11px]
                  text-[#F1EEE7]/55
                  transition-colors
                  hover:text-[#B69B70]
                "
              >
                +91 99625 05909
              </a>
            </div>
          </motion.div>

          {/* =================================================
              STUDIO
          ================================================= */}

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
              Studio
            </span>

            <p
              className="
                mt-6
                max-w-[240px]
                text-[11px]
                leading-[1.9]
                text-[#F1EEE7]/45
              "
            >
              No.4/23A,
              <br />
              Sumathinath Residency,
              <br />
              Nanmangalam,
              <br />
              Chennai - 600117
            </p>

            <a
              href="https://www.instagram.com/rizzysdesignconcept_/"
              target="_blank"
              rel="noreferrer"
              className="
                group
                mt-6
                flex
                w-fit
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-[#D6C7AE]/60
                transition-colors
                hover:text-[#B69B70]
              "
            >
              Instagram

              <span
                className="
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
      </div>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-20
          w-[calc(100%-40px)]
          max-w-[1480px]
          border-t
          border-[#D6C7AE]/10
          py-7
          sm:w-[calc(100%-64px)]
          sm:mt-28
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[#F1EEE7]/25
            "
          >
            © {currentYear} Rizzy&apos;s Design Concept
          </p>

          <div
            className="
              flex
              items-center
              gap-6
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[#F1EEE7]/20
              "
            >
              Chennai · India
            </span>

            <span
              className="
                h-px
                w-6
                bg-[#B69B70]/50
              "
            />

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[#D6C7AE]/50
                transition-colors
                hover:text-[#B69B70]
              "
            >
              Back to top ↑
            </button>
          </div>
        </div>
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
    </footer>
  );
}