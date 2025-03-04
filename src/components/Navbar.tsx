"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { t } = useTranslation()

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-screen-xl mx-auto backdrop-blur-md bg-black/30 rounded-[20px] border border-white/10 shadow-lg">
        <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-3 font-space-grotesk">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center">
              <h1 className="font-bold text-white text-xl">CS</h1>
            </a>
            {/* Language switcher moved next to logo for better visibility */}
            <div className="hidden md:block border-l border-white/10 pl-8">
              <LanguageSwitcher />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a href="#" className="nav-link block py-2 px-3 md:p-0 font-bold">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link block py-2 px-3 md:p-0 font-bold">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#work" className="nav-link block py-2 px-3 md:p-0 font-bold">
                  {t("nav.experience")}
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link block py-2 px-3 md:p-0 font-bold">
                  {t("nav.contact")}
                </a>
              </li>
              {/* Language switcher for mobile view */}
              <li className="md:hidden ml-3">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          color: rgba(255, 255, 255, 0.37);
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: rgb(255, 255, 255);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: white;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          nav {
            border-radius: 20px !important;
          }
          
          #navbar-default {
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(16px);
            padding: 1rem;
            border-radius: 20px;
            margin-top: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </div>
  )
}

