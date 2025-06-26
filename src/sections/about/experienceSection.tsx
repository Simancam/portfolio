"use client";

import { Separator } from "@radix-ui/react-separator";
import { Silkscreen, Jacquarda_Bastarda_9 } from "next/font/google";
import { Marquee } from "@/components/ui/marquee";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

const jacquard = Jacquarda_Bastarda_9({
  subsets: ["latin"],
  weight: "400",
});

const soonWords = Array(3).fill("soon");

const WordItem = ({ word }: { word: string }) => {
  return (
    <div className={`${jacquard.className} text-6xl md:text-8xl lg:text-9xl font-bold mx-8 md:mx-12 lg:mx-16`}>
      {word}
    </div>
  );
};

export default function JobExperienceSection() {
  return (
    <>
      {/* Job Experience Title */}
      <div className="p-4 sm:p-6 md:p-10">
        <h2
          className={`text-right font-bold ${silkscreen.className} text-5xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[7rem]`}
        >
          <span className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <span className="inline-block">JOB EXPERIENCE</span>
          </span>
        </h2>

        <Separator
          orientation="horizontal"
          className="w-full h-[1px] bg-black mb-8"
        />
      </div>

      {/* Marquee Section */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
        
        <Marquee pauseOnHover className="[--duration:25s]">
          {soonWords.map((word, index) => (
            <WordItem key={`first-${index}`} word={word} />
          ))}
        </Marquee>
        
        <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
          {soonWords.map((word, index) => (
            <WordItem key={`second-${index}`} word={word} />
          ))}
        </Marquee>
        
        <Marquee pauseOnHover className="[--duration:25s] mt-4">
          {soonWords.map((word, index) => (
            <WordItem key={`third-${index}`} word={word} />
          ))}
        </Marquee>
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </>
  );
}