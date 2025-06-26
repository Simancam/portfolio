"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

interface AnimatedButtonProps {
  text: string
  className?: string
  href?: string
  type?: "button" | "link" | "external"
  onClick?: () => void
  target?: "_blank" | "_self"
  disabled?: boolean
}

export default function AnimatedButton({
  text,
  className = "",
  href,
  type = "button",
  onClick,
  target = "_self",
  disabled = false,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const buttonContent = (
    <motion.div
      className={`relative overflow-hidden px-3 py-1 rounded-full border border-black font-medium text-xl tracking-wide inline-block cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      style={{
        backgroundColor: isHovered && !disabled ? "#000000" : "transparent",
        color: isHovered && !disabled ? "#ffffff" : "#000000",
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      animate={{
        backgroundColor: isHovered && !disabled ? "#000000" : "transparent",
        color: isHovered && !disabled ? "#ffffff" : "#000000",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="relative h-5">
        <span className="invisible whitespace-nowrap">{text}</span>

        {/* Animated text elements */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          animate={{
            y: isHovered && !disabled ? -20 : 0,
            opacity: isHovered && !disabled ? 0 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          animate={{
            y: isHovered && !disabled ? 0 : 20,
            opacity: isHovered && !disabled ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.span>
      </div>
    </motion.div>
  )

  if (type === "external" && href) {
    return (
      <div className="bg-transparent">
        <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
          {buttonContent}
        </a>
      </div>
    )
  }

  if (type === "link" && href) {
    return (
      <div className="bg-transparent">
        <Link href={href} target={target}>
          {buttonContent}
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-transparent">
      <button disabled={disabled}>{buttonContent}</button>
    </div>
  )
}
