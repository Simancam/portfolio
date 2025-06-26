"use client"

import cn from "clsx"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTransitionRouter } from "next-view-transitions"
import { containerVariants, itemVariants, dotVariants } from "@/utils/animations"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects[5]" },
  { href: "/contact", label: "Contact" },
]

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  )
  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  )
}

export default function AnimatedNavigation() {
  const router = useTransitionRouter()
  const pathname = usePathname()

  return (
    <motion.nav
      className="flex flex-col md:flex-col uppercase font-mono p-3 sm:p-4 md:p-5 z-2 w-full md:w-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-row md:inline-flex items-center justify-between md:justify-start mb-2 md:mb-0"
        variants={itemVariants}
      >
        <motion.h1 className="text-lg sm:text-xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          Simanca
        </motion.h1>
      </motion.div>


      <motion.ul
        className="flex flex-row md:flex-col md:pl-[25px] text-sm sm:text-base md:text-xl gap-3 md:gap-0 flex-wrap"
        variants={itemVariants}
      >
        <AnimatePresence>
          {LINKS.map((link, index) => (
            <motion.li
              key={link.href}
              variants={itemVariants}
              custom={index}
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              <motion.div className="relative">
                <AnimatePresence>
                  {pathname === link.href && (
                    <motion.span
                      className="hidden md:inline absolute left-[-25px] top-0"
                      variants={dotVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        animation: pathname === link.href ? "blink 1s infinite" : "none",
                      }}
                    >
                      ■
                    </motion.span>
                  )}
                </AnimatePresence>

                <motion.div >
                  <Link
                    href={link.href}
                    className={cn("link relative block", pathname === link.href)}
                    onClick={(e) => {
                      e.preventDefault()
                      router.push(link.href, {
                        onTransitionReady: pageAnimation,
                      })
                    }}
                  >
                    <motion.span
                      className="relative"
                      whileHover={{
                        color: pathname === link.href ? undefined : "#666",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}

                      <motion.span
                        className="absolute bottom-0 left-0 h-[1px] bg-current md:hidden"
                        initial={{ width: pathname === link.href ? "100%" : "0%" }}
                        whileHover={{
                          width: "100%",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
      `}</style>
    </motion.nav>
  )
}