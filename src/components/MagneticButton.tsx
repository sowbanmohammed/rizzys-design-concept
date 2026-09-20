"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<
      HTMLAnchorElement | HTMLButtonElement
    >
  ) => {
    const element = buttonRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.12}px, ${
      y * 0.12
    }px)`;
  };

  const handleMouseLeave = () => {
    const element = buttonRef.current;

    if (!element) return;

    element.style.transform = "translate(0px, 0px)";
  };

  const sharedClassName = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-4
    overflow-hidden
    border
    border-[#B69B70]/45
    bg-transparent
    px-7
    py-4
    font-[var(--font-manrope)]
    text-[9px]
    font-medium
    uppercase
    tracking-[0.28em]
    text-[#F1EEE7]
    transition-[transform,border-color]
    duration-500
    ease-out
    hover:border-[#D6C7AE]
    ${className}
  `;

  const content = (
    <>
      {/* Hover fill */}
      <motion.span
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          inset-0
          origin-left
          bg-[#B69B70]/[0.08]
        "
      />

      {/* Text */}
      <span className="relative z-10">
        {children}
      </span>

      {/* Arrow */}
      <span
        className="
          relative
          z-10
          flex
          h-5
          w-5
          items-center
          justify-center
          overflow-hidden
          text-[#B69B70]
        "
      >
        <motion.span
          initial={{
            x: 0,
          }}
          whileHover={{
            x: 3,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          →
        </motion.span>
      </span>

      {/* Bottom accent */}
      <span
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-[#D6C7AE]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </>
  );

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={sharedClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={sharedClassName}
    >
      {content}
    </button>
  );
}