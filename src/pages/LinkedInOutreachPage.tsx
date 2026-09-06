import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';

const LinkedInOutreachPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2340&auto=format&fit=crop",
      subheading: "AI Prospecting",
      heading: "Smart Discovery",
      title: "Intelligent Targeting",
      description: "Our AI analyzes millions of LinkedIn profiles to find prospects that perfectly match your ideal customer profile. No more manual searching or wasted time on unqualified leads."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2340&auto=format&fit=crop",
      subheading: "Automated Outreach",
      heading: "Scale Your Network",
      title: "Personalized at Scale",
      description: "Send hundreds of personalized connection requests and messages daily. Every outreach is tailored to the recipient's profile, industry, and interests for maximum engagement."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2340&auto=format&fit=crop",
      subheading: "Lead Management",
      heading: "Track Everything",
      title: "Response Analytics",
      description: "Monitor connection acceptance rates, message responses, and engagement metrics. Our analytics help you refine your approach and maximize conversion rates over time."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      <ServiceParallaxContent items={parallaxItems} />
    </div>
  );
};

export default LinkedInOutreachPage;
