"use client";

import type React from "react";
import { Separator } from "@radix-ui/react-separator";
import Navigation from "@/components/navigation";
import { Silkscreen } from "next/font/google";
import { motion } from "framer-motion";
import { containerVariants2, wordVariants } from "@/utils/animations";
import Footer from "@/components/footer";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import AnimatedButton from "@/components/animatedButton";
import { toast } from "sonner";

const jacquard = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

const title = "CONTACT ME";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
  className?: string;
}

const ContactCard = ({
  icon,
  title,
  content,
  buttonText,
  onButtonClick,
  className = "",
}: ContactCardProps) => (
  <motion.div
    variants={itemVariants}
    className={`bg-transparent border border-black p-6 flex flex-col justify-between min-h-[200px] ${className}`}
  >
    <div>
      <div className="flex items-center mb-4">
        <div className="mr-3 text-black">{icon}</div>
        <h3
          className={`text-black font-bold text-lg tracking-wide ${jacquard.className}`}
        >
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm font-mono mb-4">{content}</p>
    </div>
    <div className="mt-auto">
      <AnimatedButton text={buttonText} onClick={onButtonClick} type="button" />
    </div>
  </motion.div>
);

interface SocialCardProps {
  icon: React.ReactNode;
  platform: string;
  handle: string;
  href: string;
  className?: string;
}

const SocialCard = ({
  icon,
  platform,
  handle,
  href,
  className = "",
}: SocialCardProps) => (
  <motion.div
    variants={itemVariants}
    className={`bg-transparent border border-black p-4 flex flex-col items-center justify-center min-h-[150px] hover:bg-black hover:text-white transition-colors duration-300 group ${className}`}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center w-full"
    >
      <div className="mb-3 flex justify-center">{icon}</div>
      <h4
        className={`font-bold text-sm tracking-wide mb-1 ${jacquard.className}`}
      >
        {platform}
      </h4>
      <p className="text-xs font-mono opacity-70 group-hover:opacity-100">
        {handle}
      </p>
    </a>
  </motion.div>
);

export default function ContactPage() {
  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`, {
      description: `${text} has been copied to your clipboard`,
      duration: 3000,
    });
  };

  const handleEmailCopy = () => {
    copyToClipboard("simancamca@gmail.com", "Email");
  };

  const handlePhoneCopy = () => {
    copyToClipboard("+57 3143645807", "Phone number");
  };

  return (
    <>
      {/* Contenedor principal con los estilos necesarios para el efecto del footer */}
      <div className="relative z-20 bg-[#f5f1e9] min-h-screen mb-[350px] shadow-[3px_2px_2px_0px_rgba(51,51,51,0.5)]">
        <div className="flex flex-col md:flex-row">
          <Navigation />
          <main className="text-right p-4 sm:p-6 md:p-10 pt-3 sm:pt-5 md:pt-5 md:ml-15 md:flex-1">
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

        {/* Contact Section - Full Width */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-4 sm:p-6 md:p-10 h-full"
        >
          {/* Main Contact Grid - Full Width */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 h-full"
          >
            {/* Left Column - Contact Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <ContactCard
                icon={<Mail size={24} />}
                title="EMAIL"
                content="Drop me a line anytime. Click to copy my email address to your clipboard."
                buttonText="COPY EMAIL"
                onButtonClick={handleEmailCopy}
              />

              {/* Phone Card */}
              <ContactCard
                icon={<Phone size={24} />}
                title="PHONE"
                content="Let's have a conversation about your next project. Click to copy my phone number."
                buttonText="COPY PHONE"
                onButtonClick={handlePhoneCopy}
              />
            </div>

            {/* Right Column - Call to Action */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={itemVariants}
                className="border border-black p-8 bg-transparent flex-1 flex flex-col justify-center"
              >
                <h3
                  className={`font-bold ${jacquard.className} text-2xl mb-4 text-center`}
                >
                  READY TO START?
                </h3>
                <p className="text-gray-600 font-mono mb-6 text-center">
                  I`&apos;`m always excited to work on new challenges and bring
                  creative ideas to life.
                </p>
                <div className="text-center">
                  <AnimatedButton
                    text="LET'S COLLABORATE"
                    type="external"
                    className="text-xl px-6 py-2"
                  />
                </div>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                variants={itemVariants}
                className="border border-black p-6 bg-transparent"
              >
                <h4 className={`font-bold ${jacquard.className} text-lg mb-3`}>
                  QUICK INFO
                </h4>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-gray-600">Response time: 24h</p>
                  <p className="text-gray-600">Available: Mon-Fri</p>
                  <p className="text-gray-600">Timezone: UTC-5</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media Section - Full Width */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <h3
                className={`font-bold ${jacquard.className} text-3xl mb-4 lg:mb-0`}
              >
                FOLLOW ME
              </h3>
              <p className="text-gray-600 font-mono">
                Stay updated with my latest work and thoughts
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <SocialCard
                icon={<Github size={28} />}
                platform="GITHUB"
                handle="@Simancam"
                href="https://github.com/Simancam"
              />
              <SocialCard
                icon={<Linkedin size={28} />}
                platform="LINKEDIN"
                handle="/in/idk"
                href="https://linkedin.com/"
              />
              <SocialCard
                icon={<MessageCircle size={28} />}
                platform="WHATSAPP"
                handle="+57 3143645807"
                href="https://wa.me/573143645807"
              />
              <SocialCard
                icon={<Instagram size={28} />}
                platform="INSTAGRAM"
                handle="@camilzsz"
                href="https://www.instagram.com/camilzsz/"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Section - Services/Skills */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="border border-black p-6 bg-transparent">
              <h4 className={`font-bold ${jacquard.className} text-lg mb-3`}>
                SERVICES
              </h4>
              <ul className="font-mono text-sm space-y-1 text-gray-600">
                <li>• Web Development</li>
                <li>• UI/UX Design</li>
                <li>• Consulting</li>
              </ul>
            </div>

            <div className="border border-black p-6 bg-transparent">
              <h4 className={`font-bold ${jacquard.className} text-lg mb-3`}>
                TECHNOLOGIES
              </h4>
              <ul className="font-mono text-sm space-y-1 text-gray-600">
                <li>• Astro & Next.js</li>
                <li>• TypeScript</li>
                <li>• Node.js</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div className="border border-black p-6 bg-transparent">
              <h4 className={`font-bold ${jacquard.className} text-lg mb-3`}>
                AVAILABILITY
              </h4>
              <div className="font-mono text-sm space-y-2">
                <p className="text-gray-600">
                  Currently accepting new projects
                </p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-600">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
