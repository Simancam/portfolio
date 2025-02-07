"use client"

import { motion, useAnimation } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const controls = useAnimation()

  const waveAnimation = {
    backgroundPosition: ["0% 0%", "100% 0%"],
    transition: {
      duration: 15,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  }

  const onHover = async () => {
    await controls.start({
      background: [
        "linear-gradient(90deg, #FF3E3E 0%, #FF5757 50%, #FF3E3E 100%)",
        "linear-gradient(90deg, #FF5757 0%, #FF3E3E 50%, #FF5757 100%)",
      ],
      transition: { duration: 1 },
    })
    controls.start({ background: "linear-gradient(90deg, #FF3E3E 0%, #FF5757 50%, #FF3E3E 100%)" })
  }

  return (
    <motion.footer
      className="relative overflow-hidden"
      animate={controls}
      onHoverStart={onHover}
      initial={{
        background: "linear-gradient(90deg, #FF3E3E 0%, #FF5757 50%, #FF3E3E 100%)",
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(90deg, transparent 0%, #FFF 50%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={waveAnimation}
      />

      <motion.div
        className="relative flex items-center justify-center py-4 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p className="text-sm text-white">
          © {currentYear} Camilo Simanca. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </motion.footer>
  )
}