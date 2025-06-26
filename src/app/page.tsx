"use client";

import { Separator } from "@radix-ui/react-separator";
import Navigation from "@/components/navigation";
import { Jacquard_24 } from "next/font/google";
import { motion } from "framer-motion";
import {
  containerVariants2,
  wordVariants,
  imageVariants,
  linkVariants,
} from "@/utils/animations";
import Link from "next/link";

const jacquard = Jacquard_24({
  subsets: ["latin"],
  weight: "400",
});

const MotionLink = motion(Link);

const text =
  "My name is Camilo Simanca. I'm Web Developer and Designer appassionate about creative and unique Websites.";

const title = "Get Your Pages To A Next F*king Level";

export default function Home() {
  const words = text.split(" ");

  return (
    <>
      <div className="bg-[#f5f1e9]">
        <div className="flex flex-col md:flex-row ">
          <Navigation />
          <main className="p-4 sm:p-6 md:p-10 pt-3 sm:pt-5 md:pt-5 md:ml-15 md:flex-1">
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

        <div className="flex flex-col lg:flex-row p-4 sm:p-10 gap-6 lg:gap-0">
          <div className="flex-[2] text-left lg:pr-10 flex flex-col min-h-[300px] sm:min-h-[500px]">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono lg:mr-96"
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
            </motion.h1>

            {/* Mobile Image */}
            <div className="flex justify-center my-28 sm:my-10 lg:hidden bg-gray-300">
              <motion.img
                src="/DS.svg"
                alt="Imagen descriptiva"
                className="max-w-[80%] max-h-[270px] sm:max-h-[250px] h-auto"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              />
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-lg lg:text-xl font-mono sm:pt-20">
              <MotionLink
                href="/linkedin"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                className="hover:underline"
              >
                LINKEDIN
              </MotionLink>
              <span>/</span>
              <MotionLink
                href="https://github.com/Simancam"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                className="hover:underline"
              >
                GITHUB
              </MotionLink>
              <span>/</span>
              <MotionLink
                href="mailto:simancamca@gmail.com"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                className="hover:underline"
              >
                EMAIL
              </MotionLink>
              <span>/</span>
              <MotionLink
                href="https://curriculum-lime.vercel.app/"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                className="hover:underline"
              >
                CV
              </MotionLink>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:flex flex-1 justify-end bg-gray-300">
            <motion.img
              src="/sf.svg"
              alt="Imagen descriptiva"
              className="max-w-[100%] max-h-[500px] h-auto"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      </div>
    </>
  );
}
