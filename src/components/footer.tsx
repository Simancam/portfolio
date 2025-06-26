"use client"

import { Jacquard_24, Silkscreen } from "next/font/google"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

const jacquard = Jacquard_24({
  subsets: ["latin"],
  weight: "400",
})

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: "400",
})

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <footer className="fixed bottom-0 inset-x-0 bg-zinc-900 text-[#f5f1e9] z-10">
        <div className="w-full px-6 py-8 max-w-7xl mx-auto flex flex-col">
          {/* Título */}
          <h2 className={`${jacquard.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8`}>
            Contact To Me
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className={`${silkscreen.className} text-lg mb-4 font-bold`}>GET IN TOUCH</h3>
              <div className="space-y-2 font-mono text-sm">
                <Link href="mailto:hello@camilosimanca.com" className="block hover:underline transition-all">
                  SIMANCAMCA@GMAIL.COM
                </Link>
                <Link href="tel:+57123456789" className="block hover:underline transition-all">
                  +57 314 3645807
                </Link>
              </div>
            </div>

            <div>
              <h3 className={`${silkscreen.className} text-lg mb-4 font-bold`}>FOLLOW ME</h3>
              <div className="space-y-2 font-mono text-sm">
                <Link href="" className="block hover:underline transition-all">
                  LINKEDIN
                </Link>
                <Link href="https://github.com/Simancam" className="block hover:underline transition-all">
                  GITHUB
                </Link>
                <Link href="https://www.instagram.com/camilzsz/" className="block hover:underline transition-all">
                  INSTAGRAM
                </Link>
              </div>
            </div>
          </div>

          {/* Footer inferior */}
          <div className="border-t border-[#f5f1e9] pt-4">
            <p className="font-mono text-xs">© 2024 CAMILO SIMANCA - ALL RIGHTS RESERVED</p>
          </div>
        </div>

        {/* Scroll up */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#f5f1e9] text-zinc-900 p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-110 z-20"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </footer>
    </>
  )
}
