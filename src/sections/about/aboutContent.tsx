"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { containerVariants2, wordVariants } from "@/utils/animations";

const text =
  "I have inspired by a lot of differents things, like music, fashion, sports, youtubers, etc. One of my biggest goals is to create a design for a popular designer in the music industry, working with artists like Blessd, Pirlo, etc. ";

export default function AboutContentSection() {
  const words = text.split(" ");

  return (
    <div className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-10 gap-8 lg:gap-12 items-start">
      {/* Image */}
      <div className="w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] bg-gray-300 relative flex-shrink-0">
          <Image
            src="/foto2.png"
            alt="Profile"
            fill
            className="object-cover filter grayscale sepia-[0.3] contrast-110 brightness-110"
          />
      </div>

      {/* Second text */}
      <div className="flex-1">
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono leading-relaxed text-left"
          variants={containerVariants2}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
            >
              <motion.span variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}