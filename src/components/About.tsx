"use client";

import Image from "next/image";
import { animate, AnimationSequence } from "framer-motion";
import React, { useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiAstro, SiNextdotjs } from "react-icons/si";
import { IconType } from "react-icons";
import { FlipWords } from "../components/ui/flip-words";


// Define proper types for the technology object
interface Technology {
  icon: IconType;
  color: string;
  name: string;
  textColor: string;
}

const words = ["React", "NextJS", "Astro", "Python", "Tailwind"];

export default function About() {
  const description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iusto quisquam, voluptas quas perspiciatis ullam facere velit quidem! Cumque ducimus consequatur distinctio, atque possimus facere exercitationem reiciendis quidem maxime. Maxime!`;

  const technologies: Technology[] = [
    { icon: FaReact, color: "#4A90E2", name: "React", textColor: "white" },
    { icon: SiAstro, color: "#F77F00", name: "Astro", textColor: "white" },
    {
      icon: SiNextdotjs,
      color: "#1C1C1E",
      name: "Next.js",
      textColor: "white",
    },
    {
      icon: SiTailwindcss,
      color: "#38BDF8",
      name: "Tailwind",
      textColor: "white",
    },
    { icon: FaPython, color: "#FFC857", name: "Python", textColor: "#2B2D42" },
  ];

  return (
    <div
      className="min-h-screen bg-transparent text-white p-8 pt-28"
      id="about"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <Card className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
            <CardSkeletonContainer className="!h-auto aspect-square max-w-[400px] mx-auto md:mx-0">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="About section image"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </CardSkeletonContainer>

            <div className="space-y-6">
              <CardTitle className="text-[#FF3E3E] !text-4xl md:!text-5xl">
                About Me
              </CardTitle>
              <CardDescription className="!text-base leading-relaxed font-outfit">
                {description}
              </CardDescription>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r p-6 rounded-2xl shadow-lg">
            <CardTitle className="text-[#FF3E3E] text-2xl mb-8">
              Education
            </CardTitle>
            <CardDescription className="font-outfit">
              <ul className="space-y-6">
                <li className="flex flex-col space-y-1">
                  <div className="font-bold text-white text-xl">
                    Software Engineer
                  </div>
                  <div className="text-base text-gray-300 italic">
                    Universidad Autónoma del Caribe
                  </div>
                  <div className="text-sm text-gray-400">2023 - Present</div>
                </li>
                <li className="flex flex-col space-y-1">
                  <div className="font-bold text-white text-xl">
                    Junior Investigator
                  </div>
                  <div className="text-base text-gray-300 italic">
                    Universidad Autónoma del Caribe
                  </div>
                  <div className="text-sm text-gray-400">2020 - 2022</div>
                </li>
              </ul>
            </CardDescription>
          </Card>

          <Card>
            <CardSkeletonContainer>
              <TechStack technologies={technologies} />
            </CardSkeletonContainer>
            <CardTitle className="text-[#FF3E3E] mb-4">
              Technologies used
            </CardTitle>
            <CardDescription className="font-outfit">
              Lorem ipsum dolor, <FlipWords words={words}/>sit amet consectetur adipisicing elit. Nisi
              molestias aut quos vero ipsum veniam officia quas ducimus! Cum
              adipisci iure veniam tempore temporibus sapiente vitae totam
              reprehenderit possimus. Autem.
            </CardDescription>
          </Card>
        </div>
      </div>
    </div>
  );
}

const TechStack = ({ technologies }: { technologies: Technology[] }) => {
  const sequence = useMemo(
    () =>
      technologies.map((_, index) => [
        `.tech-${index}`,
        {
          scale: [1, 1.1, 1],
          transform: ["translateY(0px)", "translateY(-4px)", "translateY(0px)"],
        },
        { duration: 0.8 },
      ]),
    [technologies]
  );

  useEffect(() => {
    const animationSequence = sequence as AnimationSequence;
    animate(animationSequence, {
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 1,
    });
  }, [sequence]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        {technologies.map((tech, index) => {
          const centerIndex = Math.floor(technologies.length / 2);
          const baseSize = 5;
          const sizeScale = baseSize + Math.abs(centerIndex - index) * -1;

          return (
            <Container
              key={index}
              className={`tech-${index}`}
              style={{
                backgroundColor: tech.color,
                height: `${sizeScale}rem`,
                width: `${sizeScale}rem`,
              }}
            >
              <tech.icon
                className={`h-${sizeScale * 2} w-${sizeScale * 2}`}
                style={{ color: tech.textColor || "white" }}
              />
            </Container>
          );
        })}
      </div>
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full p-8 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(40,40,40,0.7)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-2xl font-bold text-white", className)}>
      {children}
    </h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("text-sm text-neutral-400", className)}>{children}</div>
  );
};

const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-[rgba(40,40,40,0.7)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.4)]
        transition-all duration-300`,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};