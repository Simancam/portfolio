"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900 text-white transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--aurora:repeating-linear-gradient(100deg,#3B82F6_10%,#A5B4FC_15%,#60A5FA_20%,#DDD6FE_25%,#60A5FA_30%)]
              [--gradient-dark:repeating-linear-gradient(100deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_7%,transparent_10%,transparent_12%,rgba(0,0,0,0.8)_16%)]
              [background-image:var(--gradient-dark),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px]
              after:content-[""]
              after:absolute
              after:inset-0
              after:[background-image:var(--gradient-dark),var(--aurora)]
              after:[background-size:200%,_100%] 
              after:animate-aurora
              after:[background-attachment:fixed]
              after:mix-blend-difference
              pointer-events-none
              absolute
              -inset-[10px]
              opacity-50
              will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
};