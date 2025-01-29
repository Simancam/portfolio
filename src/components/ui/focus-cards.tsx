"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  link: string;
}

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardProps;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-[#1a1a1a] dark:bg-neutral-900 overflow-hidden h-[450px] w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        hovered === index && "shadow-[0_0_30px_-5px_rgba(255,62,62,0.3)] scale-[1.02]"
      )}
    >
      <div className="relative w-full h-48">
        <Image
          src={card.imageSrc || "/placeholder.svg"}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col h-[calc(450px-12rem)]">
        <h3 className={cn(
          "text-xl font-semibold mb-2 text-white transition-colors duration-300",
          hovered === index && "text-red-400"
        )}>
          {card.title}
        </h3>
        <p className="text-sm text-gray-400 dark:text-gray-300 mb-4">
          {card.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {card.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary"
              className={cn(
                "bg-neutral-800 text-gray-200 transition-colors duration-300",
                hovered === index && "bg-neutral-700"
              )}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto">
          <Link href={card.link} className="block" target="_blank">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] w-full group">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF3E3E_0%,#991F1F_50%,#FF3E3E_100%)]" />
              <span className={cn(
                "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl bg-black/80 transition-all duration-300 group-hover:bg-black/60 relative",
                hovered === index && "bg-black/70"
              )}>
                View Project
              </span>
            </button>
          </Link>
        </div>
      </div>
      {hovered === index && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-pulse" />
        </div>
      )}
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardProps[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}