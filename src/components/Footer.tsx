import React from 'react';
import { Link } from '@tanstack/react-router';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '/blog', isRoute: true },
    { name: 'Case Studies', href: '/case-studies', isRoute: true },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '/faqs', isRoute: true },
    { name: 'Contact', href: '#contact' }
  ];


  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Glassmorphism Container */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Two Column Layout */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center md:items-start">

              {/* Left Column - Brand */}
              <div className="flex flex-col items-center md:items-start space-y-6">
                <div className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-2 border-blue-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] overflow-hidden">
                      <img src="/favicon.png" alt="SamysAI Logo" className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="absolute inset-0 w-12 h-12 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-3xl font-bold text-white drop-shadow-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                    SamysAI
                  </span>
                </div>
                <p className="text-gray-300 text-center md:text-left leading-relaxed max-w-xs">
                  AI automation that scales your business with intelligent solutions.
                </p>
              </div>

              {/* Right Column - Contact */}
              <div className="flex flex-col items-center md:items-end justify-center">
                {/* Contact Number */}
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                  <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <a
                    href="tel:+15147960151"
                    className="font-medium hover:underline"
                  >
                    +1 (514) 796-0151
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;