"use client";

import AnimatedButton from "@/components/animatedButton";
import { Silkscreen } from "next/font/google";
import Image from "next/image";

const jacquard = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

interface ProjectCardProps {
  image: string;
  year: string;
  title: string;
  description?: string;
  url?: string;
}

const ProjectCard = ({
  image,
  year,
  title,
  description,
  url,
}: ProjectCardProps) => {
  return (
    <div className="w-[24rem] h-[32rem] bg-transparent border border-black p-8 flex flex-col mx-auto">
      {/* Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden mb-6">
        <Image
          src={image || "/placeholder.svg"}
          width={500}
          height={300}
          alt={`${title} project showcase`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <p className="text-gray-500 text-sm mb-3 font-light font-mono">
          {year}
        </p>

        <h3
          className={`text-black font-bold text-xl mb-4 tracking-wide ${jacquard.className}`}
        >
          {title}
        </h3>

        {/* Fixed text block */}
        <div className="flex-1">
          {description && (
            <p className="text-gray-600 text-base line-clamp-3 font-mono">
              {description}
            </p>
          )}
        </div>

        {/* Button always at bottom */}
        <div className="pt-6">
          <AnimatedButton
            text="VIEW CASE"
            href={url}
            type="external"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
