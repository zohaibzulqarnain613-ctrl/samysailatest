import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { scrollToSection } from "@/utils/scroll-to-section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export function SterlingGateKineticNavigation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollLockY = useRef(0);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always close the menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!overlayRef.current) return;


    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      const menuItems = overlayRef.current!.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = overlayRef.current!.querySelector(".ambient-background-shapes");

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        let hoverTimeout: any;

        const onEnter = () => {
          clearTimeout(hoverTimeout);
          hoverTimeout = setTimeout(() => {
            if (shapesContainer) {
              shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
            }
            shape.classList.add("active");

            gsap.fromTo(
              shapeEls,
              { scale: 0.5, opacity: 0, rotation: -10 },
              {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "back.out(1.7)",
                overwrite: "auto",
                force3D: true,
              }
            );
          }, 50);
        };

        const onLeave = () => {
          clearTimeout(hoverTimeout);
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
            force3D: true,
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });
    }, overlayRef);

    return () => {
      ctx.revert();
      if (overlayRef.current) {
        const items = overlayRef.current.querySelectorAll(".menu-list-item[data-shape]");
        items.forEach((item: any) => item._cleanup && item._cleanup());
      }
    };
  }, [mounted]);

  useEffect(() => {
    if (!overlayRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = overlayRef.current!;
      const menu = overlayRef.current!.querySelector(".menu-content");
      const overlay = overlayRef.current!.querySelector(".overlay");
      const bgPanels = overlayRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = overlayRef.current!.querySelectorAll(".nav-link");
      const fadeTargets = overlayRef.current!.querySelectorAll("[data-menu-fade]");

      const menuButton = containerRef.current?.querySelector(".nav-close-btn");
      const menuButtonTexts = menuButton?.querySelectorAll("p");
      const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

      const tl = gsap.timeline({
        overwrite: true,
        onStart: () => {
          setIsAnimating(true);
          if (isMenuOpen && navWrap) {
            gsap.set(navWrap, { display: "block" });
          }
        },
        onComplete: () => {
          setIsAnimating(false);
          if (!isMenuOpen && navWrap) {
            gsap.set(navWrap, { display: "none" });
          }
        },
      });

      if (isMenuOpen) {
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(menu, { xPercent: 0 })
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, force3D: true }, "<")
          .fromTo(
            bgPanels,
            { xPercent: 101 },
            { xPercent: 0, stagger: 0.12, duration: 0.575, force3D: true },
            "<"
          )
          .fromTo(
            menuLinks,
            { yPercent: 140, rotate: 10 },
            { yPercent: 0, rotate: 0, stagger: 0.05, force3D: true },
            "<+=0.35"
          );

        if (menuButtonTexts && menuButtonTexts.length > 0) {
          tl.fromTo(
            Array.from(menuButtonTexts),
            { yPercent: 0 },
            { yPercent: -100, force3D: true },
            "<"
          );
        }
        if (menuButtonIcon) {
          tl.fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315, force3D: true }, "<");
        }

        if (fadeTargets.length) {
          tl.fromTo(
            fadeTargets,
            { autoAlpha: 0, yPercent: 50 },
            { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all", force3D: true },
            "<+=0.2"
          );
        }
      } else {
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0, force3D: true })
          .to(menu, { xPercent: 120, force3D: true }, "<")
          .to(Array.from(menuButtonTexts || []), { yPercent: 0, force3D: true }, "<")
          .to(menuButtonIcon || [], { rotate: 0, duration: 0.4, force3D: true }, "<");

      }
    }, overlayRef);

    return () => {
      ctx.revert();
    };
  }, [isMenuOpen, mounted]);

  // Body scroll lock that preserves scroll position
  useEffect(() => {
    if (!isMenuOpen) return;
    scrollLockY.current = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollLockY.current}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollLockY.current);
    };
  }, [isMenuOpen]);


  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen, isAnimating]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();

    const navigateAndScroll = () => scrollToSection("contact", 80);

    if (location.pathname !== "/") {
      navigate({ to: "/" }).then(() => {
        setTimeout(navigateAndScroll, 150);
      });
    } else {
      navigateAndScroll();
    }
  };

  const menuLinks = [
    { label: "About us", path: "/about", shape: "1" },
    { label: "Services", path: "/#services", shape: "3" },
    { label: "Blog", path: "/blog", shape: "4" },
    { label: "Contact us", path: "#contact", shape: "5", isScroll: true },
  ];

  return (
    <div ref={containerRef} className="sterling-kinetic-nav">
      {/* Trigger Area */}
      <div className="flex items-center gap-2">
        <div
          className="nav-toggle-label hidden sm:flex items-center cursor-pointer"
          onClick={toggleMenu}
          style={{ pointerEvents: "auto" }}
        >
          <span className="toggle-text text-gray-400 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors">
            click me
          </span>
        </div>
        <button
          role="button"
          className="nav-close-btn relative flex items-center gap-2 cursor-pointer p-2"
          onClick={toggleMenu}
          style={{ pointerEvents: "auto" }}
        >
          <div className="menu-button-text relative flex flex-col h-5 overflow-hidden">
            <p className="h-5 flex items-center text-white text-sm font-bold uppercase tracking-widest">Menu</p>
            <p className="h-5 flex items-center text-blue-400 text-sm font-bold uppercase tracking-widest">Close</p>
          </div>
          <div className="icon-wrap relative w-4 h-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 16 16"
              fill="none"
              className="menu-button-icon text-white"
            >
              <path
                d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z"
                fill="currentColor"
              />
              <path
                d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z"
                fill="currentColor"
              />
              <path
                d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z"
                fill="currentColor"
              />
              <path
                d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z"
                fill="currentColor"
              />
              <path
                d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z"
                fill="currentColor"
              />
              <path
                d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Navigation Overlay (portalled to body so it is always pinned to the viewport) */}
      {mounted && createPortal(
      <div
        ref={overlayRef}
        className="nav-overlay-wrapper fixed inset-0 pointer-events-none"
        style={{ zIndex: 2147483000, overflow: "hidden", display: "none" }}
      >
        <div
          className="overlay absolute inset-0 bg-gray-950 opacity-0 pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation();
            closeMenu();
          }}
        />

        {/* Animated Background Layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="backdrop-layer absolute inset-0 bg-blue-600/10 translate-x-[101%]" />
          <div className="backdrop-layer absolute inset-0 bg-gray-900 translate-x-[101%]" />
          <div className="backdrop-layer absolute inset-0 bg-gray-950 translate-x-[101%]" />
        </div>

        {/* Menu Content */}
        <div className="menu-content absolute inset-0 flex flex-col justify-center px-8 pointer-events-auto overflow-y-auto overflow-x-hidden">
          <button
            type="button"
            className="close-menu-btn absolute top-6 right-6 z-20 flex items-center gap-2 border border-blue-500/60 rounded-sm px-3 py-2 text-white hover:bg-blue-500/10 transition-colors"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Close</span>
            <span className="text-xl leading-none" aria-hidden="true">×</span>
          </button>

          {/* Abstract background shapes */}
          <div className="ambient-background-shapes absolute inset-0 pointer-events-none overflow-hidden">
            {/* Shape 1: Floating circles */}
            <svg className="bg-shape bg-shape-1 absolute top-1/4 left-1/4 w-64 h-64" viewBox="0 0 400 400" fill="none">
              <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(99,102,241,0.15)" />
              <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(139,92,246,0.12)" />
              <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(236,72,153,0.1)" />
              <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(99,102,241,0.15)" />
            </svg>

            {/* Shape 2: Wave pattern */}
            <svg className="bg-shape bg-shape-2 absolute bottom-1/4 right-1/4 w-64 h-64" viewBox="0 0 400 400" fill="none">
              <path
                className="shape-element"
                d="M0 200 Q100 100, 200 200 T 400 200"
                stroke="rgba(99,102,241,0.2)"
                strokeWidth="60"
                fill="none"
              />
              <path
                className="shape-element"
                d="M0 280 Q100 180, 200 280 T 400 280"
                stroke="rgba(139,92,246,0.15)"
                strokeWidth="40"
                fill="none"
              />
            </svg>

            {/* Shape 3: Grid dots */}
            <svg className="bg-shape bg-shape-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64" viewBox="0 0 400 400" fill="none">
              <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(99,102,241,0.3)" />
              <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(139,92,246,0.3)" />
              <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(236,72,153,0.3)" />
              <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(99,102,241,0.3)" />
              <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(139,92,246,0.25)" />
              <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(236,72,153,0.25)" />
              <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(99,102,241,0.25)" />
              <circle className="shape-element" cx="50" cy="250" r="10" fill="rgba(236,72,153,0.3)" />
              <circle className="shape-element" cx="150" cy="250" r="10" fill="rgba(99,102,241,0.3)" />
              <circle className="shape-element" cx="250" cy="250" r="10" fill="rgba(139,92,246,0.3)" />
              <circle className="shape-element" cx="350" cy="250" r="10" fill="rgba(236,72,153,0.3)" />
              <circle className="shape-element" cx="100" cy="350" r="6" fill="rgba(99,102,241,0.3)" />
              <circle className="shape-element" cx="200" cy="350" r="6" fill="rgba(139,92,246,0.3)" />
              <circle className="shape-element" cx="300" cy="350" r="6" fill="rgba(236,72,153,0.3)" />
            </svg>

            {/* Shape 4: Organic blobs */}
            <svg className="bg-shape bg-shape-4 absolute top-20 right-10 w-56 h-56" viewBox="0 0 400 400" fill="none">
              <path
                className="shape-element"
                d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
                fill="rgba(99,102,241,0.12)"
              />
              <path
                className="shape-element"
                d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
                fill="rgba(236,72,153,0.1)"
              />
            </svg>

            {/* Shape 5: Diagonal lines */}
            <svg className="bg-shape bg-shape-5 absolute bottom-20 left-10 w-56 h-56" viewBox="0 0 400 400" fill="none">
              <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(99,102,241,0.15)" strokeWidth="30" />
              <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(139,92,246,0.12)" strokeWidth="25" />
              <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(236,72,153,0.1)" strokeWidth="20" />
            </svg>
          </div>

          {/* Link List */}
          <nav className="relative z-10 flex flex-col space-y-4 pt-20 pb-8">
            {menuLinks.map((link, idx) => (
              <div key={idx} className="menu-list-item overflow-hidden" data-shape={link.shape}>
                {link.isScroll ? (
                  <a
                    href={link.path}
                    onClick={handleContactClick}
                    className="nav-link block text-4xl sm:text-5xl font-black text-white hover:text-blue-500 transition-colors uppercase italic"
                  >
                    <p className="nav-link-text">{link.label}</p>
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="nav-link block text-4xl sm:text-5xl font-black text-white hover:text-blue-500 transition-colors uppercase italic"
                  >
                    <p className="nav-link-text">{link.label}</p>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Footer content inside menu */}
          <div
            className="mt-auto mb-6 flex flex-col gap-6 border-t border-white/10 pt-6"
            data-menu-fade
          >
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Socials</p>
              <div className="flex gap-6 text-sm font-bold text-white uppercase italic">
                <a href="#" className="hover:text-blue-400">Instagram</a>
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Get in touch</p>
              <a
                href="mailto:hello@samysai.com"
                className="text-lg font-black text-white hover:text-blue-400 transition-colors italic"
              >
                hello@samysai.com
              </a>
            </div>
          </div>
        </div>
      </div>,
      document.body)}

      <style>{`
        .nav-overlay-wrapper {
          will-change: transform, opacity;
          contain: paint;
        }
        .backdrop-layer, .nav-link, .menu-list-item, .shape-element {
          will-change: transform, opacity;
        }
        .bg-shape {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
          contain: layout paint;
        }
        .bg-shape.active { opacity: 1; }
      `}</style>
    </div>
  );
}
