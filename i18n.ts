"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: {
        nav: {
          home: string;
          about: string;
          experience: string;
          contact: string;
        };
        hero: {
          name: string;
          role: string;
          downloadCV: string;
          socialLinks: {
            github: string;
            linkedin: string;
            twitter: string;
          };
        };
        about: {
          title: string;
          description: string;
          education: {
            title: string;
            degrees: {
              degree: string;
              institution: string;
              years: string;
            }[];
          };
          techStack: {
            title: string;
            description: string;
          };
        };
        projects: {
          title: string;
          cards: {
            title: string;
            description: string;
            technologies: string[];
            imageSrc: string;
            link: string;
          }[];
        };
        contact: {
          title: string;
          description: string;
          form: {
            title: string;
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            phonePrefix: string;
            phoneNumber: string;
            projectType: string;
            submit: string;
          };
        };
        footer:{
          text: string;
        }
      };
    };
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About me",
            experience: "Experience",
            contact: "Contact me",
          },
          hero: {
            name: "Camilo Simanca",
            role: "Front-End Developer",
            downloadCV: "Download CV",
            socialLinks: {
              github: "Visit GitHub",
              linkedin: "Visit LinkedIn",
              twitter: "Visit Twitter",
            },
          },
          about: {
            title: "About Me",
            description:
              "Web designer and developer from Barranquilla, Colombia. My passion for programming began at the age of 14, when I created my first weight calculator in different planets with Atom.  \n\n Currently I specialize in designing  and developing original, creative and visually stunning websites, focused on usability without being monotonous.  I have worked with a designer whose clients include well-known figures such as Blessd, WestCol and Pirlo.",
            education: {
              title: "Education",
              degrees: [
                {
                  degree: "Software Engineer",
                  institution: "Universidad Autónoma del Caribe",
                  years: "2023 - Present",
                },
                {
                  degree: "Junior Researcher",
                  institution: "Universidad Autónoma del Caribe",
                  years: "2020 - 2022",
                },
              ],
            },
            techStack: {
              title: "Technologies I Use",
              description:
                "I am constantly learning and exploring new tools to develop innovative, efficient, and scalable solutions. I focus on creating optimized projects, adapting to market trends, and continuously improving my skills. Currently, I use.",
            },
          },
          projects: {
            title: "Experience",
            cards: [
              {
                title: "Lilibeth Reales",
                description:
                  "Landing page for an internationally renowned dentist",
                technologies: ["Astro", "HTML", "Tailwind", "JavaScript"],
                imageSrc: "/lilibeth-reales.png",
                link: "https://lilibeth-reales.vercel.app/",
              },
              {
                title: "Dostorecol",
                description:
                  "E-commerce website for footwear sales and inventory management",
                technologies: ["React", "TypeScript", "Tailwind"],
                imageSrc: "/dostorecol.png",
                link: "https://dostorecol.vercel.app/",
              },
              {
                title: "R4",
                description:
                  "UI/UX design for a designer known for working with artists like Blessed",
                technologies: ["Figma"],
                imageSrc: "/R4.png",
                link: "https://www.figma.com/design/a7HrVoC5QHPlroqie4YDHU/R4-Portfolio?node-id=0-1&t=jC1vxpZCenEpPrtA-1",
              },
            ],
          },
          contact: {
            title: "Contact",
            description:
              "Do you need a custom software solution? Fill out this form, and I will contact you to bring your vision to life.",
            form: {
              title: "Get In Touch",
              firstName: "First Name",
              lastName: "Last Name",
              email: "Email",
              phone: "Phone",
              phonePrefix: "Prefix",
              phoneNumber: "Number",
              projectType: "Project Type",
              submit: "Send",
            },
          },
          footer: {
            text: "All rights reserved.",
          },
        },
      },
      es: {
        translation: {
          nav: {
            home: "Inicio",
            about: "Sobre mí",
            experience: "Experiencia",
            contact: "Contáctame",
          },
          hero: {
            name: "Camilo Simanca",
            role: "Desarrollador Front-End",
            downloadCV: "Descargar CV",
            socialLinks: {
              github: "Visitar GitHub",
              linkedin: "Visitar LinkedIn",
              twitter: "Visitar Twitter",
            },
          },
          about: {
            title: "Sobre Mí",
            description:
              "Diseñador y desarrollador web de Barranquilla, Colombia. Mi pasión por la programación comenzó a los 14 años, cuando creé mi primera calculadora de peso en diferentes planetas con Atom.  \n\n Actualmente me especializo en diseñar y desarrollar páginas web originales, creativas y visualmente impactantes,  enfocadas en la usabilidad sin ser monótonas.  He trabajado con un diseñador cuyos clientes incluyen figuras reconocidas como Blessd, WestCol y Pirlo.",
            education: {
              title: "Educación",
              degrees: [
                {
                  degree: "Ingeniero de Software",
                  institution: "Universidad Autónoma del Caribe",
                  years: "2023 - Presente",
                },
                {
                  degree: "Investigador Junior",
                  institution: "Universidad Autónoma del Caribe",
                  years: "2020 - 2022",
                },
              ],
            },
            techStack: {
              title: "Tecnologías que uso",
              description:
                "Aprendo y exploro constantemente nuevas herramientas para desarrollar soluciones innovadoras, eficientes y escalables. Me centro en crear proyectos optimizados, adaptarme a las tendencias del mercado y mejorar continuamente mis habilidades. Actualmente utilizo.",
            },
          },
          projects: {
            title: "Experiencia",
            cards: [
              {
                title: "Lilibeth Reales",
                description:
                  "Landing page para dentista internacional y de renombre",
                technologies: ["Astro", "HTML", "Tailwind", "JavaScript"],
                imageSrc: "/lilibeth-reales.png",
                link: "https://lilibeth-reales.vercel.app/",
              },
              {
                title: "Dostorecol",
                description:
                  "Página de venta de calzado e inventario administrativo",
                technologies: ["React", "TypeScript", "Tailwind"],
                imageSrc: "/dostorecol.png",
                link: "https://dostorecol.vercel.app/",
              },
              {
                title: "R4",
                description:
                  "Diseño UI/UX para un diseñador, conocido por trabajar con artistas como Blessed",
                technologies: ["Figma"],
                imageSrc: "/R4.png",
                link: "https://www.figma.com/design/a7HrVoC5QHPlroqie4YDHU/R4-Portfolio?node-id=0-1&t=jC1vxpZCenEpPrtA-1",
              },
            ],
          },
          contact: {
            title: "Contactame",
            description:
              "¿Necesitas una solución de software a medida? Completa este formulario y me comunicaré contigo para hacer realidad tu visión.",
            form: {
              title: "Ponte en contacto",
              firstName: "Nombre",
              lastName: "Apellido",
              email: "Correo",
              phone: "Teléfono",
              phonePrefix: "Prefijo",
              phoneNumber: "Número",
              projectType: "Tipo de proyecto",
              submit: "Enviar",
            },
          },
          footer: {
            text: "Todos los derechos reservados.",
          },
        },
      },
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
