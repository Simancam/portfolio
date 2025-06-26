"use client";

import { Separator } from "@radix-ui/react-separator";
import { Silkscreen } from "next/font/google";

const jacquard = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

const studies = [
  {
    institution: "UNIVERSIDAD AUTONOMA DEL CARIBE",
    degree: "Software Ingieneer",
    period: "2020 - Present",
  },
  {
    institution: "UNIVERSIDAD AUTONOMA DEL CARIBE",
    degree: "Junior Investigator",
    period: "2020 - 2022",
  },
];

export default function StudiesSection() {
  return (
    <div className="p-4 sm:p-6 md:p-10 mt-8">
      {/* Studies Title */}
      <h2
        className={`font-bold ${jacquard.className} text-5xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[7rem]`}
      >
          <span
            className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
          >
            <span className="inline-block">MY STUDIES</span>
          </span>
      </h2>

      <Separator
        orientation="horizontal"
        className="w-full h-[1px] bg-black mb-8"
      />

      {/* Studies List */}
      <div className="space-y-8 w-full sm:w-1/2 sm:ml-auto">
        {studies.map((study, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-300 pb-4"
          >
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-base text-gray-600 font-mono uppercase tracking-wider">
                {study.institution}
              </h3>
              <h4 className="text-lg sm:text-xl font-mono font-medium mt-1">
                {study.degree}
              </h4>
            </div>
            <span className="text-lg sm:text-xl font-mono mt-2 sm:mt-0">
              {study.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}