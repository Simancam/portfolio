"use client";
import React from "react";
import { Cover } from "../components/ui/cover";
import { Github, Linkedin, Twitter, Paperclip, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-transparent min-h-screen">
      <div className="grid max-w-7xl px-8 py-16 mx-auto lg:gap-12 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-8 mt-60 lg:mt-48">
          <h1 className="max-w-3xl mb-6 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl dark:text-white">
            <Cover>Camilo Simanca</Cover>
          </h1>
          <p className="max-w-3xl mb-8 font-light text-gray-500 lg:mb-6 md:text-xl lg:text-2xl dark:text-gray-400">
            Web Developer
            <Code className="inline ml-6" size={24} color="#FF3E3E" />
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 mb-8 text-lg font-medium text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
            style={{ backgroundColor: "#FF3E3E" }}
          >
            Download CV
            <Paperclip className="ml-6" size={24} />
          </a>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <Twitter size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}