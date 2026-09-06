"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouterState } from "@tanstack/react-router";

interface InteractiveLightBarProps {
  className?: string;
}

export const VolumetricStudio = ({ className }: InteractiveLightBarProps) => {
  const router = useRouterState();
  const isOn = router.location.pathname === "/blog";

  // Spotlight positions
  const spots = [25, 50, 75];

  return (
    <div className={cn("relative w-full flex flex-col items-center select-none", className)}>
      {/* The Fixture Bar */}
      <div className="relative w-full max-w-4xl h-12 flex items-center justify-center z-30">
        {/* Horizontal Metallic Bar */}
        <div className="absolute top-4 w-full h-3 bg-neutral-900 rounded-full border-t border-white/5 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
        </div>

        {/* Spotlights */}
        <div className="absolute inset-0 flex justify-around items-start px-12 pointer-events-none">
          {spots.map((_, i) => (
            <div key={i} className="relative flex flex-col items-center pt-5">
              {/* Fixture Mount */}
              <div className="w-1 h-3 bg-neutral-800" />
              {/* Spotlight Housing */}
              <div
                className="group relative w-10 h-10 bg-neutral-900 rounded-b-xl border border-white/5 shadow-xl transition-transform pointer-events-none"
              >
                {/* Lens Area */}
                <div className={cn(
                  "absolute inset-1 rounded-full transition-colors duration-700",
                  isOn ? "bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.8)]" : "bg-neutral-800"
                )} />
                
                {/* Inner Detail */}
                <div className="absolute inset-0 rounded-b-xl border-t border-white/10 opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Light Beams */}
      <div className="relative w-full max-w-5xl h-[300px] md:h-[450px] -mt-2 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {isOn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 flex justify-around px-12 mix-blend-screen"
            >
              {spots.map((_, i) => (
                <div key={i} className="relative flex justify-center w-full">
                  {/* The Beam */}
                  <div 
                    className="absolute top-0 w-[60%] h-full opacity-30"
                    style={{
                      background: `linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 80%)`,
                      clipPath: `polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)`,
                      filter: 'blur(15px)'
                    }}
                  />
                  {/* Core Glow */}
                  <div 
                    className="absolute top-0 w-20 h-40 opacity-20"
                    style={{
                      background: `radial-gradient(ellipse at top, rgba(255,255,255,0.8) 0%, transparent 70%)`,
                      filter: 'blur(25px)'
                    }}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Floor Reflections */}
        <AnimatePresence>
          {isOn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 inset-x-0 h-24 mix-blend-screen"
              style={{
                background: `radial-gradient(ellipse 25% 40% at 25% 100%, rgba(255,255,255,0.05) 0%, transparent 80%),
                            radial-gradient(ellipse 25% 40% at 50% 100%, rgba(255,255,255,0.05) 0%, transparent 80%),
                            radial-gradient(ellipse 25% 40% at 75% 100%, rgba(255,255,255,0.05) 0%, transparent 80%)`
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Fixture Details (Wires/Texture) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-neutral-800/50 z-20" />
    </div>
  );
};
