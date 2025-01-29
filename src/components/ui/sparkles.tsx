"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: {},
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                animation: {
                  h: {
                    enable: false,
                    speed: 1,
                  },
                  s: {
                    enable: false,
                    speed: 1,
                  },
                  l: {
                    enable: false,
                    speed: 1,
                  },
                },
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: {
                  min: 0.1,
                  max: 1,
                },
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                limit: {
                  mode: "delete",
                  value: 0,
                },
                value: particleDensity || 120,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.8,
                },
                animation: {
                  enable: true,
                  speed: speed || 3,
                  decay: 0,
                  sync: false,
                  startValue: "random",
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: minSize || 0.5,
                  max: maxSize || 2,
                },
                animation: {
                  enable: false,
                  speed: 5,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};