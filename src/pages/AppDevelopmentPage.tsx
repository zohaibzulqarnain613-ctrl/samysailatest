import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';
import { Link } from '@tanstack/react-router';

const AppDevelopmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Development",
    "provider": {
      "@type": "Organization",
      "name": "SamysAI",
      "url": "https://samysai.com"
    },
    "url": "https://samysai.com/services/app-development",
    "description": "Build scalable mobile apps for iOS and Android with secure architecture, intuitive UX, business integrations, and maintainable technology."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://samysai.com/"
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
        "name": "App Development",
        "item": "https://samysai.com/services/app-development"
      }
    ]
  };

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      subheading: "Native & Cross-Platform",
      heading: "App Development for Business",
      title: "Mobile Applications Built Around Business Needs",
      description: "Professional app development starts with the business problem rather than selecting a technology first. We build customer-facing mobile applications, internal business tools, and specialized service applications. Whether you need an e-commerce platform, a booking system, or a data reporting tool, our architecture is selected according to actual users, workflows, and long-term business requirements."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
      subheading: "Modern Tech Stack",
      heading: "Native and Cross-Platform Development",
      title: "Technology Selected for Results",
      description: "We evaluate native development for iOS and Android when platform-specific APIs or hardware capabilities are critical. For many business use cases, cross-platform frameworks like React Native or Flutter provide a shared codebase that speeds up development without sacrificing quality. Technology selection depends on your project requirements, performance needs, and development timeline."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
      subheading: "User Experience",
      heading: "User Experience and Mobile Performance",
      title: "Engagement Through Usability",
      description: "Every interaction is crafted for clarity and speed. We prioritize intuitive navigation, touch-friendly interfaces, and accessibility. Our technical approach includes image optimization, efficient data loading, and robust error handling to ensure your application remains responsive even in challenging network conditions. We build apps that work reliably for every user."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <ServiceParallaxContent items={parallaxItems} />

      {/* Educational Content Sections */}
      <div className="bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-24 space-y-24">
          
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Business App Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <p className="text-lg leading-relaxed">
                Modern business applications rarely exist in isolation. We ensure your mobile app communicates effectively with your existing infrastructure, including CRM systems, payment platforms, and custom databases. Through secure API communication, your app becomes a seamless extension of your business workflows.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you are looking to integrate AI services or automate internal processes, our team coordinates these connections early in the development cycle. This includes linking to your <Link to="/services/web-development" className="text-blue-400 hover:underline">web development services</Link> and <Link to="/services/ai-chatbots" className="text-blue-400 hover:underline">AI chatbot solutions</Link> for a unified digital ecosystem.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Security and Data Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Security is integrated into every layer of our development process. We implement industry-standard authentication and authorization protocols to protect user data and business assets.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure API communication and encrypted storage</li>
                  <li>Rigorous input validation and access control</li>
                  <li>Proactive dependency management and monitoring</li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed">
                We follow responsible mobile security practices to mitigate risks and ensure compliance with data protection requirements. By prioritizing secure architecture from the start, we help protect your brand and your users from common vulnerabilities.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Building Apps That Scale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <p className="text-lg leading-relaxed">
                Scalability is about more than just handling user traffic; it is about maintainable growth. Our modular architecture and reusable components allow you to introduce new features without rewriting your entire application. By using scalable APIs and clean cloud infrastructure, we ensure your app can evolve alongside your business.
              </p>
              <p className="text-lg leading-relaxed">
                We avoid unnecessary complexity by matching technical architecture to your actual requirements. This approach ensures your mobile application remains manageable and cost-effective as it grows, as detailed in our <Link to="/blog/app-development" className="text-blue-400 hover:underline">app development business guide</Link>.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our App Development Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1. Discovery", text: "Understand business objectives, users, workflows, and technical requirements." },
                { step: "2. Planning", text: "Define features, architecture, integrations, and project scope." },
                { step: "3. UX/UI Design", text: "Create user flows, wireframes, prototypes, and interface designs." },
                { step: "4. Development", text: "Build the mobile application and required backend services." },
                { step: "5. Integration", text: "Connect APIs, databases, authentication, payments, and analytics." },
                { step: "6. Testing", text: "Test functionality, usability, performance, and device compatibility." },
                { step: "7. Deployment", text: "Prepare and release the application to the appropriate stores." },
                { step: "8. Maintenance", text: "Monitor the application and introduce improvements as requirements evolve." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How SamysAI Approaches App Development</h2>
            <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                At SamysAI, we approach app development as a business engineering challenge. We start with the business problem and evaluate technical requirements before selecting the technology stack. This ensures we design around real users and plan critical integrations early in the process.
              </p>
              <p>
                Our philosophy prioritizes maintainability and security throughout the development lifecycle. By building architecture that can evolve, we provide your business with a digital asset that continues to deliver value long after the initial launch. We coordinate our mobile efforts with <Link to="/blog/web-development" className="text-blue-400 hover:underline">modern web development</Link> standards to ensure consistency across your digital presence.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="pt-12 text-center space-y-8">
            <div className="p-8 md:p-12 rounded-3xl bg-blue-600/10 border border-blue-500/20 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Application?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a strategy consultation to discuss your business requirements, technical goals, and how we can help you build a scalable mobile solution.
              </p>
              <a
                href="https://calendly.com/samysai/clients"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
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

export default AppDevelopmentPage;