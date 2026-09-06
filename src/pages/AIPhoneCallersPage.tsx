import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';
import { Link } from '@tanstack/react-router';

const AIPhoneCallersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2340&auto=format&fit=crop",
      subheading: "AI Phone Callers",
      heading: "AI Phone Callers for Business",
      title: "24/7 Availability",
      description: (
        <>
          AI phone callers help businesses handle routine conversations, qualify inbound opportunities, answer common questions, and support appointment scheduling through automated voice interactions. These AI phone agents work around the clock, ensuring you never miss a lead. For more on voice automation, see our <Link to="/blog/ai-phone-callers" className="text-blue-400 hover:underline">AI phone callers guide for business</Link>.
        </>
      ) as any
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
      subheading: "Natural Conversations",
      heading: "Context Aware Voice Interactions",
      title: "Lead Qualification & Scheduling",
      description: (
        <>
          Modern voice AI can interpret spoken requests, follow conversation context, ask relevant questions, and provide responses based on the information and workflows connected to the system. This allows for automated lead qualification and appointment scheduling that integrates seamlessly with your <Link to="/services/web-development" className="text-blue-400 hover:underline">digital systems</Link>.
        </>
      ) as any
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      subheading: "Call Analytics",
      heading: "Understand Every Conversation",
      title: "Business Phone Automation",
      description: (
        <>
          Call analytics help teams review conversation outcomes, call duration, recurring questions, and other useful signals. By integrating with <Link to="/services/ai-chatbots" className="text-blue-400 hover:underline">AI chatbots</Link>, businesses can create a unified communication infrastructure that identifies opportunities to improve workflows.
        </>
      ) as any
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI Phone Callers",
        "description": "AI phone callers for business communication, lead qualification, appointment scheduling, and voice automation.",
        "provider": {
          "@type": "Organization",
          "name": "SamysAI",
          "url": "https://samysai.com"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Voice Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lead Qualification"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Appointment Scheduling"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://samysai.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://samysai.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Phone Callers",
            "item": "https://samysai.com/services/ai-phone-callers"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceParallaxContent items={parallaxItems} />
      
      {/* Educational Footer Sections */}
      <div className="bg-black/50 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <section aria-labelledby="use-cases-heading">
            <h2 id="use-cases-heading" className="text-2xl md:text-3xl font-bold text-white mb-6">
              What Can AI Phone Callers Handle?
            </h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Lead qualification</li>
              <li>• Appointment scheduling</li>
              <li>• Frequently asked questions</li>
              <li>• Customer follow up</li>
              <li>• Call routing</li>
              <li>• Basic information collection</li>
              <li>• After hours call handling</li>
              <li>• Routine outbound calls</li>
            </ul>
            <p className="mt-6 text-gray-400 text-sm italic">
              Exact capabilities depend on business workflow, available data, integrations, and system configuration.
            </p>
          </section>

          <section aria-labelledby="integrations-heading">
            <h2 id="integrations-heading" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Connect Voice Automation to Your Workflow
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              AI phone callers can connect with existing business systems to automate data flow and actions.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• CRM systems</li>
              <li>• Calendars</li>
              <li>• Customer databases</li>
              <li>• Lead management systems</li>
              <li>• Internal APIs</li>
              <li>• Automation workflows</li>
            </ul>
          </section>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-20 pt-20 border-t border-white/5 text-center">
          <section aria-labelledby="handoff-heading">
            <h2 id="handoff-heading" className="text-2xl md:text-3xl font-bold text-white mb-6">
              AI That Works With Your Team
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Not every conversation should be automated. A well designed AI phone system should recognize when a request requires human attention and provide a clear path to a team member.
            </p>
            <div className="mt-12">
              <a
                href="https://calendly.com/samysai/clients"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-blue-500/50 transition-all duration-300"
              >
                Book a Strategy Consultation
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIPhoneCallersPage;
