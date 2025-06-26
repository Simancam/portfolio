"use client"

import { motion } from "framer-motion"
import ProjectCard from "./projectCard"

interface Project {
  id: number
  image: string
  year: string
  title: string
  description?: string
  url: string
}

interface InfiniteCarouselProps {
  projects: Project[]
  speed?: number
}

const InfiniteCarousel = ({ projects, speed = 20 }: InfiniteCarouselProps) => {
  // Duplicamos los proyectos para el efecto infinito
  const duplicatedProjects = [...projects, ...projects]

  // Calculamos el ancho total de una copia de los proyectos
  const cardWidth = 22 // 22rem por card
  const gap = 1.5 // 1.5rem de gap (24px)
  const totalWidth = projects.length * (cardWidth + gap)

  return (
    <div className="overflow-hidden w-full relative">
      {/* Extendemos el contenedor más allá de la pantalla */}
      <motion.div
        className="flex gap-6"
        animate={{
          x: [`100vw`, `-${totalWidth}rem`], // Empieza desde fuera de la pantalla
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          width: `calc(${duplicatedProjects.length * cardWidth + (duplicatedProjects.length - 1) * gap}rem + 100vw)`,
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
            image={project.image}
            year={project.year}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteCarousel
