"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./projectCard";

interface Project {
  id: number;
  image: string;
  year: string;
  title: string;
  description?: string;
  url: string;
}

interface CarouselProps {
  projects: Project[];
}

const Carousel = ({ projects }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full flex flex-col items-start">
      {/* Embla viewport */}
      <div className="w-full overflow-hidden px-4 md:px-10" ref={emblaRef}>
        <div className="flex gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_25%] min-w-0"
            >
              <ProjectCard
                image={project.image}
                year={project.year}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-4 mt-8 md:ml-19 ml-8">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full border border-black bg-transparent hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full border border-black bg-transparent hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
