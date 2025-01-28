import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Lilibeth Reales",
      description: "Landing page for international and renowned dentist",
      technologies: ["Astro", "HTML", "Tailwind", "JavaScript"],
      imageSrc: "/lilibeth-reales.png",
      link: "https://lilibeth-reales.vercel.app/",
    },
    {
      title: "Dostorecol",
      description: "Shoe sales and administrative inventory page",
      technologies: ["React", "TypeScript", "Tailwind"],
      imageSrc: "/dostorecol.png",
      link: "https://dostorecol.vercel.app/",
    },
    {
      title: "R4",
      description: "UI/UX design for designer, known for work with artists such as Blessed",
      technologies: ["Figma"],
      imageSrc: "/R4.png",
      link: "https://www.figma.com/design/a7HrVoC5QHPlroqie4YDHU/R4-Portfolio?node-id=0-1&t=jC1vxpZCenEpPrtA-1",
    },
  ];

  return <FocusCards cards={cards} />;
}