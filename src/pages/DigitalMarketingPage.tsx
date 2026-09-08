import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';
import { Link } from '@tanstack/react-router';

const DigitalMarketingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2340&auto=format&fit=crop",
      subheading: "Digital Marketing",
      heading: "Digital Marketing for Business",
      title: "Build a Stronger Digital Presence",
      description: "Build a stronger digital presence with structured marketing strategies across search, content, social media, and paid channels. SamysAI helps businesses connect their digital marketing activities to measurable business goals."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2340&auto=format&fit=crop",
      subheading: "Multi-Channel Marketing",
      heading: "Reach Customers Across Digital Channels",
      title: "Connected Channels",
      description: "Coordinate content, search, social media, email, and paid marketing activities to create a more connected digital presence and consistent customer experience."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      subheading: "Performance & Optimization",
      heading: "Measure, Learn, and Improve",
      title: "Data-Driven Growth",
      description: "Use campaign and website performance data to understand what is working, identify opportunities, and continuously improve your digital marketing activities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      <ServiceParallaxContent items={parallaxItems} />

      {/* Educational SEO Content */}
      <div className="bg-black/50 py-24 text-gray-300">
        <div className="mx-auto max-w-5xl px-6">
          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">What Can Digital Marketing Help With?</h2>
            <p className="mb-6 text-lg leading-relaxed">
              A structured digital marketing program brings together the channels and activities that shape how customers find, evaluate, and choose your business online.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ul className="space-y-3 list-disc pl-5">
                <li>Search engine optimization</li>
                <li>Content marketing</li>
                <li>Social media marketing</li>
                <li>Email marketing</li>
                <li>Paid digital advertising</li>
              </ul>
              <ul className="space-y-3 list-disc pl-5">
                <li>Landing page optimization</li>
                <li>Audience research</li>
                <li>Campaign planning</li>
                <li>Marketing analytics</li>
                <li>Conversion optimization</li>
              </ul>
            </div>
            <p className="mt-6 text-lg leading-relaxed">
              Strong results often depend on the technical quality of your <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 transition-colors">website</Link> and the consistency of your <Link to="/services/content-creation" className="text-blue-400 hover:text-blue-300 transition-colors">content creation</Link> workflows.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Digital Marketing That Supports Your Business</h2>
            <p className="mb-6 text-lg leading-relaxed">
              Digital marketing is most effective when it is not treated as a set of disconnected activities. Your website, content, advertising, social media, analytics, CRM, and automation systems can be connected into a more structured marketing workflow where each part supports the others.
            </p>
            <p className="text-lg leading-relaxed">
              For example, outreach managed through <Link to="/services/cold-email-dashboard" className="text-blue-400 hover:text-blue-300 transition-colors">cold email dashboards</Link> can feed prospects into landing pages optimized for conversion, while <Link to="/services/ai-chatbots" className="text-blue-400 hover:text-blue-300 transition-colors">AI chatbots</Link> can engage visitors and qualify leads around the clock. Analytics across these channels reveal which efforts genuinely drive business outcomes.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Built Around Your Business Goals</h2>
            <p className="text-lg leading-relaxed">
              Effective marketing activities should be aligned with your company's audience, positioning, objectives, available resources, and measurable outcomes. Rather than chasing every channel, a focused strategy prioritizes the activities most likely to produce results for your specific business, and measures progress against goals that matter.
            </p>
          </section>

          <div className="mt-20 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Ready to Strengthen Your Digital Presence?</h2>
            <p className="mb-8 max-w-2xl text-lg">
              Learn how a structured digital marketing strategy can connect your channels and support measurable business growth.
            </p>
            <a
              href="https://calendly.com/samysai/clients"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-gray-200"
            >
              Book a Strategy Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
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
              "item": "https://samysai.com/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Digital Marketing",
              "item": "https://samysai.com/services/digital-marketing"
            }
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Marketing for Business",
          "description": "Digital marketing services for SEO, content, social media, email, paid campaigns, analytics, and business growth.",
          "provider": {
            "@type": "Organization",
            "name": "SamysAI",
            "url": "https://samysai.com"
          },
          "serviceType": "Digital Marketing",
          "areaServed": "Worldwide"
        })}
      </script>
    </div>
  );
};

export default DigitalMarketingPage;
