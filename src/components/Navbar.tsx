"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Link from "next/link";

// ============================================================
// NAVIGATION
// ============================================================

const navItems = [
  {
    number: "01",
    label: "The Studio",
    href: "#expertise",
    description: "Our story & philosophy",
  },
  {
    number: "02",
    label: "Selected Work",
    href: "#portfolio",
    description: "A collection of spaces",
  },
  {
    number: "03",
    label: "The Craft",
    href: "#process",
    description: "How we bring ideas to life",
  },
];

// ============================================================
// ANIMATION
// ============================================================

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.7, 0, 0.84, 0] as const,
    },
  },
};

const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + index * 0.08,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// ============================================================
// LOGO
// ============================================================

function BrandLogo({
  menuOpen,
  onClick,
  mobile = false,
}: {
  menuOpen: boolean;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const content = (
    <div
      className={`
        group
        relative
        flex
        items-center
        gap-3
        outline-none
        ${mobile ? "cursor-pointer" : ""}
      `}
    >
      {/* ======================================================
          MONOGRAM
      ====================================================== */}

  <div className="block">
  <img
    src="/icons/logo.svg"
    alt="Rizzy's Design Concept"
    className="
      h-auto
      w-[90px]
      sm:w-[120px]
      object-contain
    "
  />
</div>

      {/* ======================================================
          BRAND NAME
      ====================================================== */}

     
    </div>
  );

  if (mobile && onClick) {
    return (
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={onClick}
        className="outline-none"
      >
        {content}
      </button>
    );
  }

  return (
    <Link href="/" aria-label="Rizzy's Design Concept">
      {content}
    </Link>
  );
}

// ============================================================
// NAVBAR
// ============================================================

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroFinished, setHeroFinished] = useState(false);

  // ==========================================================
  // HERO / SCROLL STATE
  // ==========================================================

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(
        "[data-cinematic-hero]"
      ) as HTMLElement | null;

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      setHeroFinished(rect.bottom <= 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================================
  // LOCK BODY
  // ==========================================================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // ==========================================================
  // CLOSE MENU
  // ==========================================================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ==========================================================
  // NAVIGATION
  // ==========================================================

  const handleNavClick = (href: string) => {
    closeMenu();

    const target = document.querySelector(href);

    if (!target) return;

    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 180);
  };

  // ==========================================================
  // NAVBAR BACKGROUND
  // ==========================================================

  const solidNavbar = heroFinished || menuOpen;

  // ==========================================================
  // JSX
  // ==========================================================

  return (
    <>
      {/* ======================================================
          MAIN HEADER
      ====================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-[100]
          transition-all
          duration-700
          ${
            solidNavbar
              ? "border-b border-[#B69B70]/15 bg-[#080807]/94 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[82px]
            w-full
            max-w-[1600px]
            items-center
            justify-between
            px-5
            sm:px-7
            lg:px-12
            xl:px-16
          "
        >
          {/* ==================================================
              DESKTOP LOGO
          ================================================== */}

          <div className="hidden lg:block">
            <BrandLogo menuOpen={false} />
          </div>

          {/* ==================================================
              MOBILE LOGO BUTTON
          ================================================== */}

          <div className="lg:hidden">
            <BrandLogo
              mobile
              menuOpen={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </div>

          {/* ==================================================
              DESKTOP NAV
          ================================================== */}

          <nav
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-10
              lg:flex
              xl:gap-14
            "
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="
                  group
                  relative
                  py-3
                  font-[var(--font-sans)]
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[#D6C7AE]
                  transition-colors
                  duration-300
                  hover:text-[#F1EEE7]
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#B69B70]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </button>
            ))}
          </nav>

          {/* ==================================================
              DESKTOP CTA
          ================================================== */}

          <div className="hidden lg:flex">
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="
                group
                relative
                flex
                items-center
                gap-4
                border
                border-[#B69B70]/45
                px-6
                py-3
                font-[var(--font-sans)]
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#F1EEE7]
                transition-all
                duration-500
                hover:border-[#D6C7AE]
                hover:bg-[#B69B70]/[0.06]
              "
            >
              <span>Start a Conversation</span>

              <span
                className="
                  block
                  h-px
                  w-5
                  bg-[#B69B70]
                  transition-all
                  duration-500
                  group-hover:w-8
                "
              />
            </button>
          </div>

          {/* ==================================================
              MOBILE MENU HINT
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-2
              lg:hidden
            "
          >
            <span
              className="
                hidden
                font-[var(--font-sans)]
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/40
                sm:block
              "
            >
              {menuOpen ? "Close" : "Explore"}
            </span>

            <motion.span
              animate={{
                opacity: menuOpen ? 1 : 0.45,
              }}
              className="
                h-1
                w-1
                rounded-full
                bg-[#B69B70]
              "
            />
          </div>
        </div>
      </header>

      {/* ======================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed
              inset-0
              z-[90]
              min-h-screen
              overflow-hidden
              bg-[#080807]
              lg:hidden
            "
          >
            {/* =================================================
                AMBIENT LIGHT
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[160px]
                top-[90px]
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#B69B70]/[0.045]
                blur-[120px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[180px]
                -left-[140px]
                h-[380px]
                w-[380px]
                rounded-full
                bg-[#B69B70]/[0.035]
                blur-[120px]
              "
            />

            {/* =================================================
                VERY SUBTLE ARCHITECTURAL LINES
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[14%]
                top-0
                w-px
                bg-white/[0.025]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-[14%]
                top-0
                w-px
                bg-white/[0.025]
              "
            />

            {/* =================================================
                MENU CONTENT
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                flex
                min-h-screen
                w-full
                max-w-[1600px]
                flex-col
                px-6
                pb-7
                pt-[108px]
                sm:px-10
              "
            >
              {/* =================================================
                  TOP
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.09]
                  pb-5
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-px
                      w-7
                      bg-[#B69B70]
                    "
                  />

                  <span
                    className="
                      font-[var(--font-sans)]
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.3em]
                      text-white/40
                    "
                  >
                    Explore the studio
                  </span>
                </div>

                <span
                  className="
                    font-[var(--font-display)]
                    text-[13px]
                    italic
                    tracking-[0.08em]
                    text-[#B69B70]
                  "
                >
                  R / D
                </span>
              </motion.div>

              {/* =================================================
                  NAVIGATION
              ================================================= */}

              <nav
                className="
                  flex
                  flex-1
                  flex-col
                  justify-center
                  py-8
                "
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      border-b
                      border-white/[0.09]
                      py-6
                      text-left
                      sm:py-7
                    "
                  >
                    {/* LEFT */}

                    <div className="flex items-center gap-5">
                      {/* NUMBER */}

                      <span
                        className="
                          w-5
                          font-[var(--font-sans)]
                          text-[8px]
                          font-medium
                          tracking-[0.16em]
                          text-[#B69B70]/70
                        "
                      >
                        {item.number}
                      </span>

                      {/* TITLE */}

                      <div>
                        <div
                          className="
                            font-[var(--font-display)]
                            text-[31px]
                            font-medium
                            leading-none
                            tracking-[-0.015em]
                            text-[#F1EEE7]
                            transition-all
                            duration-500
                            group-hover:translate-x-1
                            group-hover:text-[#D6C7AE]
                            sm:text-[36px]
                          "
                        >
                          {item.label}
                        </div>

                        <div
                          className="
                            mt-2
                            font-[var(--font-sans)]
                            text-[8px]
                            font-light
                            uppercase
                            tracking-[0.16em]
                            text-white/30
                            transition-colors
                            duration-500
                            group-hover:text-white/50
                          "
                        >
                          {item.description}
                        </div>
                      </div>
                    </div>

                    {/* ARROW */}

                    <span
                      className="
                        font-[var(--font-display)]
                        text-[22px]
                        font-light
                        text-[#B69B70]/50
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        group-hover:text-[#B69B70]
                      "
                    >
                      ↗
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* =================================================
                  CTA
              ================================================= */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  border
                  border-[#B69B70]/45
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-500
                  hover:border-[#D6C7AE]
                  hover:bg-[#B69B70]/[0.05]
                "
              >
                <div>
                  <div
                    className="
                      font-[var(--font-sans)]
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.28em]
                      text-[#B69B70]
                    "
                  >
                    Begin
                  </div>

                  <div
                    className="
                      mt-1
                      font-[var(--font-display)]
                      text-[20px]
                      italic
                      text-[#F1EEE7]
                    "
                  >
                    Start a Conversation
                  </div>
                </div>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    border
                    border-[#B69B70]/40
                    text-[#B69B70]
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:border-[#B69B70]
                    group-hover:bg-[#B69B70]
                    group-hover:text-[#080807]
                  "
                >
                  ↗
                </span>
              </motion.button>

              {/* =================================================
                  FOOTER
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.6,
                }}
                className="
                  mt-7
                  flex
                  items-end
                  justify-between
                  gap-5
                "
              >
                {/* BRAND */}

                <div>
                  <div
                    className="
                      font-[var(--font-sans)]
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
                    Chennai · India
                  </div>

                  <div
                    className="
                      mt-1
                      font-[var(--font-display)]
                      text-[15px]
                      italic
                      text-[#D6C7AE]
                    "
                  >
                    Transforming Spaces,
                  </div>

                  <div
                    className="
                      font-[var(--font-display)]
                      text-[15px]
                      italic
                      text-[#D6C7AE]
                    "
                  >
                    Enhancing Lives.
                  </div>
                </div>

                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/rizzysdesignconcept_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-[var(--font-sans)]
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-white/35
                    transition-colors
                    duration-300
                    hover:text-[#D6C7AE]
                  "
                >
                  Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
