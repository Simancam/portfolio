"use client";

import { Separator } from "@radix-ui/react-separator";
import Navigation from "@/components/navigation";
import { Silkscreen } from "next/font/google";
import { motion } from "framer-motion";
import { containerVariants2, wordVariants } from "@/utils/animations";
import InfiniteCarousel from "@/sections/projects/infiniteCarousel";
import Footer from "@/components/footer";

const jacquard = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

const title = "MY PROJECTS";

const projectsData = [
  {
    id: 1,
    image: "/travelwisemed.png",
    year: "2025",
    title: "TravelWiseMed",
    description:
      "Landing page for a company offering financial, medical, and travel.",
    url: "https://travelwisemed.com/",
  },
  {
    id: 2,
    image: "/artesue.png",
    year: "2023",
    title: "Artesue",
    description:
      "Real estate landing page focused on showcasing properties attractively.",
    url: "https://artesue.vercel.app/",
  },
  {
    id: 3,
    image: "/lucy.png",
    year: "2024",
    title: "Lucy Gomez Portfolio",
    description:
      "Interactive portfolio with a modern and fluid design.",
    url: "https://lucy-portfolio-chi.vercel.app/",
  },
  {
    id: 4,
    image: "/lilibeth.png",
    year: "2023",
    title: "Lilibeth Reales",
    description:
      "Professional landing page for a dentist with informative content.",
    url: "https://lilibeth-reales.vercel.app/",
  },
  {
    id: 5,
    image: "/r444.png",
    year: "2025",
    title: "Randy 44",
    description:
      "Custom UI/UX design for a graphic designer, focused on aesthetics.",
    url: "https://randy444.com/portafolio",
  },
];


export default function AboutPage() {
  return (
    <>
      <div className="relative z-20 bg-[#f5f1e9] min-h-screen mb-[350px] shadow-[3px_2px_2px_0px_rgba(51,51,51,0.5)]">
        <div className="flex flex-col md:flex-row">
          <Navigation />
          <main className="text-right p-4 sm:p-6 md:p-10 pt-3 sm:pt-5 md:pt-5 md:ml-15 md:flex-1">
            <motion.h1
              className={`font-bold ${jacquard.className} text-5xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[7rem]`}
              variants={containerVariants2}
              initial="hidden"
              animate="visible"
            >
              {title.split(" ").map((title, index) => (
                <span
                  key={index}
                  className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
                >
                  <motion.span variants={wordVariants} className="inline-block">
                    {title}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </main>
        </div>

        <Separator
          orientation="horizontal"
          className="w-full h-[1px] bg-black"
        />

        <div className="w-full mt-8 overflow-hidden">
          <InfiniteCarousel
            projects={projectsData}
            speed={20}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
