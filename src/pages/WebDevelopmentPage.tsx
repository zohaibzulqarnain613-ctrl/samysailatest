import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';
import { Link } from '@tanstack/react-router';

const WebDevelopmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop",
      subheading: "Modern Design",
      heading: "Web Development Services for Business",
      title: "User-Centric Design",
      description: (
        <>
          We design clear, accessible interfaces that help visitors understand your offer and take the next step. Layouts, navigation, and content structure are planned around how people actually use your site, then implemented with responsive design across mobile, tablet, and desktop screens. Read our practical <Link to="/blog/web-development" className="text-blue-400 hover:underline">guide to modern web development for business</Link>.
        </>
      ) as any
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
      subheading: "Performance and Technical SEO",
      heading: "Fast and Search Friendly",
      title: "Speed and Technical SEO",
      description: (
        <>
          We optimize page delivery, assets, code, and infrastructure to support fast loading and responsive user experiences. Semantic HTML, clean URLs, structured data, and correct metadata help search engines crawl, understand, and evaluate the website, while Core Web Vitals are monitored as part of ongoing development work.
        </>
      ) as any
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop",
      subheading: "Scalable Architecture",
      heading: "Maintainable Engineering",
      title: "Built to Scale",
      description: (
        <>
          Modular, documented code makes it practical to extend a website as requirements change. We plan database structure, APIs, and integrations so the site can connect with your CRM, payment tools, analytics, and AI systems such as <Link to="/services/ai-chatbots" className="text-blue-400 hover:underline">AI chatbots</Link> without rebuilding the foundation.
        </>
      ) as any
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Professional web development for business websites and web applications, including frontend and backend development, integrations, technical SEO, performance optimization, and secure architecture.",
        "url": "https://samysai.com/services/web-development",
        "provider": {
          "@type": "Organization",
          "name": "SamysAI",
          "url": "https://samysai.com"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Website Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API and System Integrations" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Performance and Technical SEO" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://samysai.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://samysai.com/#services" },
          { "@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://samysai.com/services/web-development" }
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
          <section aria-labelledby="wd-includes">
            <h2 id="wd-includes" className="text-2xl md:text-3xl font-bold text-white mb-6">
              What Does Professional Web Development Include?
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Web development covers more than the pages a visitor sees. A complete project usually involves several layers of work that need to fit together.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Frontend development</li>
              <li>• Backend development</li>
              <li>• Database architecture</li>
              <li>• APIs and integrations</li>
              <li>• Responsive design</li>
              <li>• Authentication</li>
              <li>• Content management</li>
              <li>• Technical SEO</li>
              <li>• Performance optimization</li>
              <li>• Security</li>
              <li>• Analytics</li>
              <li>• Cloud infrastructure</li>
            </ul>
          </section>

          <section aria-labelledby="wd-goals">
            <h2 id="wd-goals" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Web Development Built Around Business Goals
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Not every business needs the same technology stack. The right choice depends on what the site has to do today and what it may need to do later.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Business requirements and commercial goals</li>
              <li>• Target users and how they browse</li>
              <li>• Required functionality</li>
              <li>• Integrations with existing systems</li>
              <li>• Expected traffic levels</li>
              <li>• Security requirements</li>
              <li>• Maintenance capacity</li>
              <li>• Future product requirements</li>
            </ul>
            <p className="mt-6 text-gray-400 text-sm italic">
              A simple brochure site and a customer facing web application call for very different decisions.
            </p>
          </section>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-20 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-16">
          <section aria-labelledby="wd-seo">
            <h2 id="wd-seo" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Performance and Technical SEO
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Development decisions influence how a website performs in organic search. Technical SEO does not guarantee rankings, but it helps search engines crawl, understand, and evaluate the website.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Semantic HTML and heading hierarchy</li>
              <li>• Crawlability and clean URL structures</li>
              <li>• Page speed and Core Web Vitals</li>
              <li>• Mobile usability</li>
              <li>• Structured data and metadata</li>
              <li>• Canonical URLs</li>
              <li>• Internal linking</li>
              <li>• Image optimization</li>
            </ul>
          </section>

          <section aria-labelledby="wd-integrations">
            <h2 id="wd-integrations" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Web Development and Business Integrations
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Most websites need to exchange data with the systems a business already uses. Integration work is often where the practical value of a project sits.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• CRM platforms and internal databases</li>
              <li>• Payment systems and checkout flows</li>
              <li>• Email platforms, including <Link to="/services/cold-email-dashboard" className="text-blue-400 hover:underline">cold email dashboards</Link></li>
              <li>• Analytics and reporting tools</li>
              <li>• Scheduling systems</li>
              <li>• Internal APIs and automation workflows</li>
              <li>• AI services such as <Link to="/services/ai-phone-callers" className="text-blue-400 hover:underline">AI phone callers</Link></li>
            </ul>
            <p className="mt-6 text-gray-300 text-lg">
              When a website is part of a wider product, it often works alongside <Link to="/services/app-development" className="text-blue-400 hover:underline">mobile app development</Link> and an ongoing <Link to="/services/content-creation" className="text-blue-400 hover:underline">content production workflow</Link>.
            </p>
          </section>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-20 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-16">
          <section aria-labelledby="wd-responsive">
            <h2 id="wd-responsive" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Responsive Web Development
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              A modern website has to work on smartphones, tablets, laptops, and large desktop screens. Responsive development means the layout, navigation, and content adapt to the space available rather than shrinking a desktop design.
            </p>
            <p className="text-gray-300 text-lg">
              In practice this covers fluid layouts, readable type sizes, touch friendly controls, forms that are easy to complete on a phone, and accessibility considerations such as keyboard navigation and sufficient contrast.
            </p>
          </section>

          <section aria-labelledby="wd-security">
            <h2 id="wd-security" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Secure and Maintainable Web Architecture
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Security is an ongoing practice rather than a one time task. Sensible defaults reduce risk and make a site easier to maintain over time.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• HTTPS across the whole site</li>
              <li>• Secure authentication and session handling</li>
              <li>• Input validation on client and server</li>
              <li>• Dependency management and updates</li>
              <li>• API security and access control</li>
              <li>• Backups and monitoring</li>
              <li>• Modular, maintainable code</li>
            </ul>
          </section>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-20 pt-20 border-t border-white/5">
          <section aria-labelledby="wd-custom">
            <h2 id="wd-custom" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Custom Development vs Existing Platforms
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Custom development is not automatically the right answer. The sensible option depends on budget, timeline, and how specific the requirements are.
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• <span className="text-white font-medium">Existing CMS platforms</span> suit content heavy sites where editors need to publish independently and the functionality is fairly standard.</li>
              <li>• <span className="text-white font-medium">Website builders</span> can be a reasonable starting point for small sites with limited technical requirements and short timelines.</li>
              <li>• <span className="text-white font-medium">Custom development</span> makes sense when the product logic, integrations, or user experience fall outside what off the shelf tools handle well.</li>
              <li>• <span className="text-white font-medium">Hybrid approaches</span> combine a managed CMS or commerce backend with a custom frontend, which often balances flexibility and maintenance effort.</li>
            </ul>
            <p className="mt-6 text-gray-300 text-lg">
              If conversational support is part of the plan, our guides on <Link to="/blog/ai-chatbots" className="text-blue-400 hover:underline">AI chatbots</Link> and <Link to="/blog/ai-phone-callers" className="text-blue-400 hover:underline">AI phone callers</Link> explain how those systems fit alongside a website.
            </p>
          </section>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-20 text-center">
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss your web development requirements and determine the right technical approach for your business.
          </p>
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

export default WebDevelopmentPage;
