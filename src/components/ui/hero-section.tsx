"use client";

import React, { useEffect, useRef } from "react";
import InfinitePlaneBg from "./infinite-plane";

const colors = {
  50: "#f8f7f5",
  100: "#e6e1d7",
  200: "#c8b4a0",
  300: "#a89080",
  400: "#8a7060",
  500: "#6b5545",
  600: "#544237",
  700: "#3c4237",
  800: "#2a2e26",
  900: "#1a1d18",
};

export function Component() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(147, 197, 253, 0.5)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });

    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(147, 197, 253, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);

    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll<HTMLElement>(".floating-element").forEach((el, index) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, index * 200);
        });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative w-full"
    >
      <div className="absolute inset-0 z-0">
        <InfinitePlaneBg planeHeight={0} speed={0.5} />
      </div>
      <svg className="absolute inset-0 w-full h-full z-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(96,165,250,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.05 }}
        />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

      <div className="corner-element top-4 left-4 md:top-8 md:left-8" style={{ animationDelay: "4s" }}>
        <div
          className="absolute top-0 left-0 w-2 h-2 opacity-30 bg-blue-400"
        ></div>
      </div>
      <div className="corner-element top-4 right-4 md:top-8 md:right-8" style={{ animationDelay: "4.2s" }}>
        <div
          className="absolute top-0 right-0 w-2 h-2 opacity-30 bg-purple-400"
        ></div>
      </div>
      <div className="corner-element bottom-4 left-4 md:bottom-8 md:left-8" style={{ animationDelay: "4.4s" }}>
        <div
          className="absolute bottom-0 left-0 w-2 h-2 opacity-30 bg-purple-400"
        ></div>
      </div>
      <div className="corner-element bottom-4 right-4 md:bottom-8 md:right-8" style={{ animationDelay: "4.6s" }}>
        <div
          className="absolute bottom-0 right-0 w-2 h-2 opacity-30 bg-pink-400"
        ></div>
      </div>

      <div className="floating-element hidden md:block" style={{ top: "25%", left: "15%", animationDelay: "5s" }}></div>
      <div className="floating-element hidden md:block" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}></div>
      <div className="floating-element hidden md:block" style={{ top: "40%", left: "10%", animationDelay: "6s" }}></div>
      <div className="floating-element hidden md:block" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-around md:justify-between items-center px-4 py-20 sm:py-24 md:py-16 lg:py-20">
        <div className="text-center w-full mt-4 md:mt-0">
          <h2
            className="text-[12px] sm:text-xs md:text-sm font-mono font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] opacity-80 text-blue-300 px-2"
          >
            <span className="word" data-delay="0">
              SamysAI
            </span>
            <span className="word" data-delay="200">
              |
            </span>
            <span className="word" data-delay="400">
              AI
            </span>
            <span className="word" data-delay="600">
              Systems,
            </span>
            <span className="word" data-delay="800">
              Digital
            </span>
            <span className="word" data-delay="1000">
              Products,
            </span>
            <span className="word" data-delay="1200">
              Growth
            </span>
            <span className="word" data-delay="1400">
              Infrastructure
            </span>
          </h2>
          <div
            className="mt-3 md:mt-4 mx-auto w-12 md:w-16 h-px opacity-30 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          ></div>
        </div>

        <div className="text-center max-w-5xl mx-auto w-full px-4 my-8 md:my-0">
          <div className="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
            <p className="word" data-delay="1600">
              SamysAI builds intelligent systems and digital products that help businesses operate, communicate, and grow more effectively.
            </p>
            <p className="word" data-delay="2000">
              We combine AI and automation, digital development, and growth infrastructure to build connected systems across communication, operations, and growth.
            </p>
          </div>
        </div>

        <div className="text-center w-full mb-4 md:mb-0">
          <div
            className="mb-3 md:mb-4 mx-auto w-12 md:w-16 h-px opacity-30 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          ></div>
          <h2
            className="text-[12px] sm:text-xs md:text-sm font-mono font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] opacity-80 text-purple-300 px-2 mb-6 md:mb-8"
          >
            <span className="word" data-delay="5200">
              Technology
            </span>
            <span className="word" data-delay="5350">
              built
            </span>
            <span className="word" data-delay="5500">
              around
            </span>
            <span className="word" data-delay="5650">
              real
            </span>
            <span className="word" data-delay="5800">
              business
            </span>
            <span className="word" data-delay="5950">
              problems,
            </span>
            <span className="word" data-delay="6100">
              designed
            </span>
            <span className="word" data-delay="6250">
              to
            </span>
            <span className="word" data-delay="6400">
              run
            </span>
            <span className="word" data-delay="6550">
              every
            </span>
            <span className="word" data-delay="6700">
              day.
            </span>
          </h2>

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 opacity-0 px-4"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "6s",
            }}
          >
            <a
              href="https://calendly.com/samysai/clients"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 md:hover:scale-110 transition-all duration-500 ease-in-out overflow-hidden"
            >
              <span className="relative z-10">Book a Strategy Consultation</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </a>
            <a
              href="/#services"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <span className="relative z-10">Explore Our Services</span>
            </a>

          </div>

          <div
            className="mt-4 md:mt-6 flex justify-center space-x-3 md:space-x-4 opacity-0"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "6.5s",
            }}
          >
            <div
              className="w-1 h-1 rounded-full opacity-40 bg-blue-400"
            ></div>
            <div
              className="w-1 h-1 rounded-full opacity-60 bg-purple-400"
            ></div>
            <div
              className="w-1 h-1 rounded-full opacity-40 bg-pink-400"
            ></div>
          </div>
        </div>
      </div>

      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="fixed pointer-events-none w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 100%)`,
        }}
      ></div>
    </div>
  );
}
