"use client";
import React from "react";
import { Cover } from "../components/ui/cover";

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
            <i className="bi bi-code-slash ml-6" style={{ color: '#FF3E3E' }}></i>
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 mb-8 text-lg font-medium text-white rounded-lg hover:bg-red-600 transition-colors duration-300" 
            style={{ backgroundColor: "#FF3E3E" }}
          >
            Download CV
            <i className="bi bi-paperclip ml-6"></i>
          </a>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-3xl transition-colors duration-300"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-3xl transition-colors duration-300"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-3xl transition-colors duration-300"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}