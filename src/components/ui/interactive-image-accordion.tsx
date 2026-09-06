import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { getOptimizedImageUrl, getImageSrcSet } from '@/utils/image-optimization';

const accordionItems = [
  {
    id: 1,
    title: 'AI Phone Callers',
    imageUrl: '/images/services/Ai_phone_callers.jpg',
    imageFit: 'contain' as const,
    link: '/services/ai-phone-callers',
  },
  {
    id: 2,
    title: 'Intelligent AI Chatbots',
    imageUrl: '/images/services/Ai_Chatbot.jpg',
    imageFit: 'contain' as const,
    link: '/services/ai-chatbots',
  },
  {
    id: 3,
    title: 'Web Development',
    imageUrl: '/images/services/Web_Developement.jpg',
    imageFit: 'contain' as const,
    link: '/services/web-development',
  },
  {
    id: 4,
    title: 'App Development',
    imageUrl: '/images/services/App_Developement.jpg',
    imageFit: 'contain' as const,
    link: '/services/app-development',
  },
  {
    id: 5,
    title: 'Cold Email Dashboards',
    imageUrl: '/images/services/Cold_Email_Dashboards.jpg',
    imageFit: 'contain' as const,
    link: '/services/cold-email-dashboard',
  },
  {
    id: 6,
    title: 'Content Creation',
    imageUrl: '/images/hanane_benalia_image_copy.jpeg',
    link: '/services/content-creation',
  },
  {
    id: 7,
    title: 'Digital Marketing',
    imageUrl: '/images/image.png',
    link: '/services/digital-marketing',
  },
];


const AccordionItem = ({ item, isActive, onMouseEnter, isMobile, index }: { item: typeof accordionItems[0], isActive: boolean, onMouseEnter: () => void, isMobile: boolean, index: number }) => {
  return (
    <Link
      to={item.link}
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isMobile
          ? isActive ? 'w-full h-[300px]' : 'w-full h-[60px]'
          : isActive ? 'w-[400px] h-[450px]' : 'w-[60px] h-[450px]'
        }
      `}
      onMouseEnter={onMouseEnter}
      aria-label={item.title}
    >
      <div className={`absolute inset-0 z-0 ${item.imageFit === 'contain' ? 'bg-black' : ''}`}>
        <img
          src={getOptimizedImageUrl(item.imageUrl, isActive ? 800 : 400)}
          srcSet={getImageSrcSet(item.imageUrl, [800, 1200, 1600])}
          sizes={isActive ? "(max-width: 768px) 100vw, 800px" : "400px"}
          key={item.imageUrl}
          alt=""
          aria-hidden="true"
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding={index === 0 ? "sync" : "async"}
          className={`w-full h-full ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
          width="400"
          height="450"
          onError={(e) => { 
            const target = e.target as HTMLImageElement; 
            target.onerror = null; 
            target.src = `https://placehold.co/400x450/2d3748/ffffff?text=${encodeURIComponent(item.title)}`; 
          }}
        />
        <div className={`absolute inset-0 ${item.imageFit === 'contain' ? 'bg-black/10' : 'bg-black/20'}`}></div>
      </div>
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap z-10
          transition-all duration-300 ease-in-out
          ${isMobile
            ? isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'left-6 top-1/2 -translate-y-1/2 rotate-0'
            : isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </Link>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative bg-transparent overflow-hidden min-h-[500px]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/[0.02] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/[0.02] rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content removed as it is now in HomePage.tsx hero */}
          <div className="w-full">
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center gap-4 p-4 ${isMobile ? '' : 'overflow-x-auto'}`}>
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
