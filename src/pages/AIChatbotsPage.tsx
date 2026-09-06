import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';
import { Link } from '@tanstack/react-router';

const AIChatbotsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2340&auto=format&fit=crop",
      subheading: "Instant Support",
      heading: "AI Chatbots for Business",
      title: "24/7 Customer Service",
      description: (
        <>
          Deploy intelligent AI chatbots that handle customer inquiries instantly. These conversational AI systems support customer service by providing immediate responses to common questions, helping businesses manage volume and maintain communication around the clock. Learn more in our <Link to="/blog/ai-chatbots" className="text-blue-400 hover:underline">AI chatbots business guide</Link>.
        </>
      ) as any
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2340&auto=format&fit=crop",
      subheading: "Smart Automation",
      heading: "Automated Lead Qualification",
      title: "Intelligent Workflows",
      description: (
        <>
          AI virtual assistants use natural language processing to understand context and intent. They can qualify leads by asking relevant questions and collecting basic information before routing conversations to your <Link to="/services/ai-phone-callers" className="text-blue-400 hover:underline">AI phone callers</Link> or human team members.
        </>
      ) as any
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      subheading: "Multi-Channel",
      heading: "Unified Business Communication",
      title: "Omnichannel Deployment",
      description: (
        <>
          Deploy website chatbots and extend them to WhatsApp, Instagram, or Facebook Messenger. By connecting these tools to your <Link to="/services/web-development" className="text-blue-400 hover:underline">web development infrastructure</Link>, you maintain a consistent brand voice while automating support and growth workflows.
        </>
      ) as any
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI Chatbots",
        "description": "AI chatbots for business customer support, automated conversations, lead qualification, and business workflows.",
        "provider": {
          "@type": "Organization",
          "name": "SamysAI",
          "url": "https://samysai.com"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Automation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Customer Support Automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lead Qualification"
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
            "name": "AI Chatbots",
            "item": "https://samysai.com/services/ai-chatbots"
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

      {/* Supporting SEO Content Sections */}
      <div className="bg-black/50 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <section aria-labelledby="chat-use-cases">
            <h2 id="chat-use-cases" className="text-2xl md:text-3xl font-bold text-white mb-6">
              What Can AI Chatbots Handle?
            </h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Frequently asked questions</li>
              <li>• Customer support</li>
              <li>• Lead qualification</li>
              <li>• Basic information collection</li>
              <li>• Product or service guidance</li>
              <li>• Appointment scheduling</li>
              <li>• Website visitor assistance</li>
              <li>• Routing conversations to the team</li>
            </ul>
            <p className="mt-6 text-gray-400 text-sm italic">
              Exact capabilities depend on integrations, business data, and system configuration.
            </p>
          </section>

          <section aria-labelledby="chat-workflow">
            <h2 id="chat-workflow" className="text-2xl md:text-3xl font-bold text-white mb-6">
              How AI Chatbots Work
            </h2>
            <ol className="space-y-4 text-gray-300 text-lg">
              <li>1. A customer sends a message to the bot.</li>
              <li>2. The system interprets the request and context.</li>
              <li>3. The chatbot retrieves information or follows workflows.</li>
              <li>4. It generates an appropriate response.</li>
              <li>5. If necessary, the conversation transfers to a human.</li>
            </ol>
          </section>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-20 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-16">
          <section aria-labelledby="chat-handoff">
            <h2 id="chat-handoff" className="text-2xl md:text-3xl font-bold text-white mb-6">
              AI Chatbots and Human Handoff
            </h2>
            <p className="text-gray-300 text-lg">
              Automation should not replace human support in every situation. A well designed chatbot can identify situations requiring human intervention and route the conversation to the appropriate team member, ensuring complex requests receive the attention they need.
            </p>
          </section>

          <section aria-labelledby="chat-integrations">
            <h2 id="chat-integrations" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Connect AI Chatbots to Business Systems
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Integrations allow chatbots to perform actions and access data across your existing software stack.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• CRM systems & Databases</li>
              <li>• Knowledge bases & FAQs</li>
              <li>• Calendars & Schedulers</li>
              <li>• E-commerce platforms</li>
              <li>• Internal APIs & Workflows</li>
            </ul>
          </section>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-20 text-center">
          <a
            href="https://calendly.com/samysai/clients"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-blue-500/50 transition-all duration-300"
          >
            Book a Strategy Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIChatbotsPage;
