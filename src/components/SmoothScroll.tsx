"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    /*
     * =====================================================
     * LENIS — CINEMATIC SMOOTH SCROLL
     * =====================================================
     */

    const lenis = new Lenis({
      duration: 1.8,
      lerp: 0.065,

      smoothWheel: true,
      syncTouch: false,

      wheelMultiplier: 0.42,
      touchMultiplier: 0.8,

      orientation: "vertical",
      gestureOrientation: "vertical",

      anchors: true,

      autoRaf: false,
    });

    /*
     * =====================================================
     * GSAP + LENIS SYNC
     * =====================================================
     */

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    /*
     * Every Lenis scroll event updates ScrollTrigger.
     */

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);

    /*
     * =====================================================
     * REFRESH
     * =====================================================
     *
     * Important because:
     *
     * - images load after initial render
     * - hero has large scroll height
     * - ScrollTrigger calculations depend on exact dimensions
     */

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    requestAnimationFrame(() => {
      refresh();
    });

    const refreshTimer1 = window.setTimeout(() => {
      refresh();
    }, 300);

    const refreshTimer2 = window.setTimeout(() => {
      refresh();
    }, 1000);

    const refreshTimer3 = window.setTimeout(() => {
      refresh();
    }, 2000);

    /*
     * =====================================================
     * IMAGE LOAD REFRESH
     * =====================================================
     */

    const images = Array.from(
      document.querySelectorAll("img")
    );

    const imageHandlers: Array<{
      image: HTMLImageElement;
      handler: () => void;
    }> = [];

    images.forEach((image) => {
      if (image.complete) return;

      const handler = () => {
        ScrollTrigger.refresh();
      };

      image.addEventListener("load", handler);

      imageHandlers.push({
        image,
        handler,
      });
    });

    /*
     * =====================================================
     * RESIZE
     * =====================================================
     */

    let resizeTimer: number | undefined;

    const handleResize = () => {
      window.clearTimeout(resizeTimer);

      resizeTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    /*
     * =====================================================
     * VISIBILITY
     * =====================================================
     *
     * When browser tab becomes visible again,
     * recalculate ScrollTrigger.
     */

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    /*
     * =====================================================
     * CLEANUP
     * =====================================================
     */

    return () => {
      gsap.ticker.remove(raf);

      lenis.off("scroll", handleScroll);

      window.removeEventListener(
        "resize",
        handleResize
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      window.clearTimeout(refreshTimer1);
      window.clearTimeout(refreshTimer2);
      window.clearTimeout(refreshTimer3);
      window.clearTimeout(resizeTimer);

      imageHandlers.forEach(({ image, handler }) => {
        image.removeEventListener("load", handler);
      });

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}