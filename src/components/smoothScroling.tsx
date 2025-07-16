"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScrolling() {
  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Función para actualizar Lenis en cada frame
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
