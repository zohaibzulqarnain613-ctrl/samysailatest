import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { ChevronDown, Menu, X } from 'lucide-react';
import { SterlingGateKineticNavigation } from './ui/sterling-gate-kinetic-navigation';
import { scrollToSection } from '@/utils/scroll-to-section';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const navigateAndScroll = () => scrollToSection('contact', 80);

    if (location.pathname !== '/') {
      navigate({ to: '/' }).then(() => {
        setTimeout(navigateAndScroll, 100);
      });
    } else {
      navigateAndScroll();
    }
  };

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const serviceCategories = [
    {
      label: 'AI & Automation',
      items: [
        { name: 'AI Phone Callers', path: '/services/ai-phone-callers' },
        { name: 'AI Chatbots', path: '/services/ai-chatbots' }
      ]
    },
    {
      label: 'Digital Development',
      items: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'App Development', path: '/services/app-development' }
      ]
    },
    {
      label: 'Growth & Operations',
      items: [
        { name: 'Cold Email Dashboards', path: '/services/cold-email-dashboard' },
        { name: 'Content Creation', path: '/services/content-creation' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' }
      ]
    }
  ];

  const allServices = serviceCategories.flatMap(cat => cat.items);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-white/10'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-2 border-blue-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] overflow-hidden">
                <img
                  src="/favicon.png"
                  alt="SamysAI Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
              SamysAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                location.pathname === '/about' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              About
            </Link>

            {/* Dropdown Menu for Services */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                  location.pathname.startsWith('/services') ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Services Dropdown */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-left ${
                isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}>
                <div className="p-4 space-y-4">
                  {serviceCategories.map((category) => (
                    <div key={category.label} className="space-y-2">
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest px-2">
                        {category.label}
                      </div>
                      <div className="space-y-1">
                        {category.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/blog"
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                location.pathname.startsWith('/blog') ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Blog
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-5 py-2 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <SterlingGateKineticNavigation />
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;