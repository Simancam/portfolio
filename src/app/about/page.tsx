"use client";

import { Separator } from "@radix-ui/react-separator";
import Navigation from "@/components/navigation";
import { Silkscreen } from 'next/font/google';
import { motion } from "framer-motion";
import { containerVariants2, wordVariants } from "@/utils/animations";
import IntroSection from "@/sections/about/introSection";
import AboutContentSection from "@/sections/about/aboutContent";
import StudiesSection from "@/sections/about/studiesSection";
import JobExperienceSection from "@/sections/about/experienceSection";
import Footer from "@/components/footer";

const jacquard = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

const title = "WHO I AM?";

export default function AboutPage() {
  return (
    <>
      {/* Contenedor principal con los estilos necesarios para el efecto del footer */}
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

        <Separator orientation="horizontal" className="w-full h-[1px] bg-black" />

        <IntroSection />
        <AboutContentSection />
        <StudiesSection />
        <JobExperienceSection />
        
      </div>
      
      <Footer />
    </>
  );
}