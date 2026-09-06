import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';

const CRMAutoSyncPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop",
      subheading: "Real-Time Sync",
      heading: "Always Updated",
      title: "Instant Synchronization",
      description: "Every customer interaction, form submission, and touchpoint is automatically captured and synced to your CRM in real-time. No delays, no manual entry, no lost opportunities."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      subheading: "AI Lead Scoring",
      heading: "Smart Prioritization",
      title: "Focus on Hot Leads",
      description: "Our AI analyzes engagement patterns, browsing behavior, and interaction history to automatically score and prioritize leads. Your sales team knows exactly who to follow up with first."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      subheading: "Universal Integration",
      heading: "Works Everywhere",
      title: "Seamless Connections",
      description: "Integrates with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and more. Connect your email, social media, website, and marketing tools for complete data harmony."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      <ServiceParallaxContent items={parallaxItems} />
    </div>
  );
};

export default CRMAutoSyncPage;
