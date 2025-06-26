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
    <div className="w-[22rem] min-h-[26rem] bg-transparent border border-black p-6 flex flex-col justify-between flex-shrink-0">
      {/* Image container */}
      <div className="relative h-40 bg-gray-100 overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          width={400}
          height={200}
          alt={`${title} project showcase`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col flex-1">
        <p className="text-gray-500 text-sm mb-2 font-light font-mono">{year}</p>

        <h3 className={`text-black font-bold text-lg mb-3 tracking-wide ${jacquard.className}`}>
          {title}
        </h3>

        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-mono">
            {description}
          </p>
        )}

        {/* View case button */}
        <div className="mt-auto">
          <AnimatedButton text="VIEW CASE" href={url} type="external" target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;