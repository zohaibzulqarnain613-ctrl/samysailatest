import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';

const IGDMBotPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=2340&auto=format&fit=crop",
      subheading: "Automated Engagement",
      heading: "24/7 Conversations",
      title: "Always-On AI Assistant",
      description: "Your Instagram DM bot never sleeps. It greets new followers instantly, answers common questions, and guides prospects toward conversion — all while maintaining natural, human-like conversation."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2340&auto=format&fit=crop",
      subheading: "Smart Responses",
      heading: "AI-Powered Replies",
      title: "Intelligent Messaging",
      description: "Train the AI to match your brand voice perfectly. Every message is contextually aware and personalized to each user's inquiry, creating authentic connections that drive engagement."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2340&auto=format&fit=crop",
      subheading: "Performance Tracking",
      heading: "Real-Time Analytics",
      title: "Measure Success",
      description: "Monitor conversation quality, response rates, and conversion metrics from a comprehensive dashboard. Continuously optimize your messaging strategy based on data-driven insights."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      <ServiceParallaxContent items={parallaxItems} />
    </div>
  );
};

export default IGDMBotPage;
