"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import { Cover } from "../components/ui/cover";
import { Github, Linkedin, MessageCircle, Paperclip, Code } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-transparent min-h-screen">
      <div className="grid max-w-7xl px-8 py-16 mx-auto lg:gap-12 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-8 mt-60 lg:mt-48">
          <h1 className="max-w-3xl mb-6 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl dark:text-white font-space-grotesk">
            <Cover>{t('hero.name')}</Cover>
          </h1>
          <p className="max-w-3xl mb-8 font-light text-gray-500 lg:mb-6 md:text-xl lg:text-2xl dark:text-gray-400 font-outfit">
            {t('hero.role')}
            <Code className="inline ml-6" size={24} color="#FF3E3E" />
          </p>
          <a href="https://curriculum-lime.vercel.app/" target="_blank">
            <button className="font-outfit inline-flex h-12 animate-shimmer items-center justify-center whitespace-nowrap rounded-md border border-red-900 bg-[linear-gradient(110deg,#1a0000,45%,#4a0f0f,55%,#1a0000)] bg-[length:200%_100%] px-6 font-medium text-gray-300 transition-colors focus:outline-none">
              {t('hero.downloadCV')}
              <Paperclip className="ml-2" size={24} />
            </button>
          </a>
          <div className="flex space-x-6 mt-8">
            <a
              href="https://github.com/Simancam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label={t('hero.socialLinks.github')}
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label={t('hero.socialLinks.linkedin')}
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label={t('hero.socialLinks.twitter')}
            >
              <MessageCircle size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}