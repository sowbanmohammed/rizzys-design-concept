"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOADER_DURATION = 2400;

export default function OpeningLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    /* =====================================================
       FORCE PAGE TO TOP ON REFRESH
    ===================================================== */

    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    /* =====================================================
       LOCK SCROLL WHILE LOADER IS ACTIVE
    ===================================================== */

    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.overflow = "hidden";

    let animationFrame: number;
    let hideTimeout: ReturnType<typeof setTimeout>;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min(
        elapsed / LOADER_DURATION,
        1
      );

      // Smooth luxury-style loading curve
      const easedProgress =
        percentage < 0.8
          ? percentage / 0.8
          : 1 - Math.pow((1 - percentage) / 0.2, 2);

      setProgress(
        Math.min(easedProgress * 100, 100)
      );

      if (percentage < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        hideTimeout = setTimeout(() => {
          /* ===============================================
             MAKE SURE PAGE IS STILL AT TOP
          =============================================== */

          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });

          setIsVisible(false);

          /* ===============================================
             RELEASE SCROLL
          =============================================== */

          document.body.style.overflow = "";
        }, 250);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(hideTimeout);

      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-[#050505]
          "
        >
          {/* Subtle architectural frame */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[24px]
              border
              border-white/[0.045]
              md:inset-[40px]
            "
          />

          {/* Corner marks */}
          <div className="pointer-events-none absolute left-[24px] top-[24px] h-[18px] w-[18px] border-l border-t border-[#c8a96b]/20 md:left-[40px] md:top-[40px]" />

          <div className="pointer-events-none absolute right-[24px] top-[24px] h-[18px] w-[18px] border-r border-t border-[#c8a96b]/20 md:right-[40px] md:top-[40px]" />

          <div className="pointer-events-none absolute bottom-[24px] left-[24px] h-[18px] w-[18px] border-b border-l border-[#c8a96b]/20 md:bottom-[40px] md:left-[40px]" />

          <div className="pointer-events-none absolute bottom-[24px] right-[24px] h-[18px] w-[18px] border-b border-r border-[#c8a96b]/20 md:bottom-[40px] md:right-[40px]" />

          <div className="relative flex w-[min(420px,78vw)] flex-col items-center">

            {/* =================================================
                LOGO
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                items-center
                justify-center
              "
            >
              <img
                src="/icons/logo.svg"
                alt="Rizzy's Design Concept"
                className="
                  h-auto
                  w-[170px]
                  object-contain
                  brightness-0
                  invert
                  md:w-[210px]
                "
              />
            </motion.div>

            {/* =================================================
                SMALL BRAND LINE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="
                mt-5
                font-sans
                text-[8px]
                uppercase
                tracking-[0.42em]
                text-white/35
              "
            >
              Interior Design Studio
            </motion.div>

            {/* =================================================
                LOADING AREA
            ================================================= */}

            <div className="mt-12 w-full">
              <div className="mb-3 flex items-center justify-between">

                <span
                  className="
                    font-sans
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  Loading
                </span>

                <span
                  className="
                    font-sans
                    text-[8px]
                    tabular-nums
                    tracking-[0.2em]
                    text-[#c8a96b]/75
                  "
                >
                  {Math.round(progress)
                    .toString()
                    .padStart(2, "0")}
                </span>

              </div>

              {/* Track */}
              <div className="relative h-[1px] w-full bg-white/[0.12]">

                {/* Gold progress */}
                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[1px]
                    bg-[#c8a96b]
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />

                {/* Gold glow */}
                <motion.div
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-[3px]
                    w-[22px]
                    -translate-y-1/2
                    bg-[#c8a96b]/30
                    blur-[5px]
                  "
                  style={{
                    left: `calc(${progress}% - 11px)`,
                  }}
                />

              </div>
            </div>

            {/* =================================================
                BOTTOM CAPTION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="
                mt-5
                text-center
                font-display
                text-[13px]
                italic
                tracking-[0.03em]
                text-white/35
              "
            >
              Transforming Spaces, Enhancing Lives.
            </motion.div>

          </div>

          {/* ===================================================
              VERTICAL ARCHITECTURAL LINE
          =================================================== */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
            }}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-[18vh]
              w-px
              origin-bottom
              -translate-x-1/2
              bg-gradient-to-t
              from-[#c8a96b]/20
              to-transparent
            "
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}