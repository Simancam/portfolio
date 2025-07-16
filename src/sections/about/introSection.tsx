"use client";

import { motion } from "framer-motion";
import { containerVariants2, wordVariants } from "@/utils/animations";

const text =
  "I'm from Barranquilla, Colombia. I started coding in Atom since 2020. I like to be authentical and original.";

export default function IntroSection() {
  const words = text.split(" ");

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <motion.div
        className="text-left"
        variants={containerVariants2}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono leading-relaxed"
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
        </motion.h2>
      </motion.div>
    </div>
  );
}