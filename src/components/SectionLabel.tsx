"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({
  number,
  children,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.7,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        flex
        items-center
        gap-3
        ${className}
      `}
    >
      {/* Number */}
      <span
        className={`
          font-[var(--font-manrope)]
          text-[9px]
          font-medium
          tracking-[0.18em]
          ${
            light
              ? "text-[#B69B70]"
              : "text-[#B69B70]"
          }
        `}
      >
        {number}
      </span>

      {/* Line */}
      <span
        className={`
          h-px
          w-8
          ${
            light
              ? "bg-[#B69B70]/60"
              : "bg-[#B69B70]/50"
          }
        `}
      />

      {/* Label */}
      <span
        className={`
          font-[var(--font-manrope)]
          text-[9px]
          font-medium
          uppercase
          tracking-[0.3em]
          ${
            light
              ? "text-[#D6C7AE]"
              : "text-[#9A9185]"
          }
        `}
      >
        {children}
      </span>
    </motion.div>
  );
}