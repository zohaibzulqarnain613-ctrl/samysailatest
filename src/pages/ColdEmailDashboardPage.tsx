import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';
import { Link } from '@tanstack/react-router';

const ColdEmailDashboardPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Cold Email Dashboards",
        "provider": {
          "@type": "Organization",
          "name": "SamysAI",
          "url": "https://samysai.com"
        },
        "url": "https://samysai.com/services/cold-email-dashboard",
        "description": "Centralized outreach infrastructure for cold email campaign management, deliverability monitoring, and CRM integration."
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
            "item": "https://samysai.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cold Email Dashboards",
            "item": "https://samysai.com/services/cold-email-dashboard"
          }
        ]
      }
    ]
  };

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      subheading: "Outreach Infrastructure",
      heading: "Cold Email Dashboards for Outreach",
      title: "Centralized Campaign Management",
      description: "A cold email dashboard provides a centralized management layer for outbound campaigns. By bringing together sending accounts, prospect data, follow-up sequences, and deliverability monitoring into one system, teams gain operational visibility and workflow control. This infrastructure allows for organized sequence management and follow-up scheduling across multiple accounts without the fragmentation of individual sending interfaces."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      subheading: "Technical Health",
      heading: "Monitor Outreach and Deliverability",
      title: "Deliverability Monitoring",
      description: "Technical deliverability depends on a combination of factors including SPF, DKIM, and DMARC configuration, as well as sender reputation and domain health. Monitoring bounce rates and sending patterns helps maintain mailbox health and identifies potential issues before they impact outreach. Responsible management involves maintaining list quality and respecting mailbox provider limitations to preserve long-term sender reputation."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2340&auto=format&fit=crop",
      subheading: "Workflow Efficiency",
      heading: "Automate Follow-Up Sequences",
      title: "Intelligent Sequences",
      description: "Automated follow-up sequences ensure consistent communication while maintaining appropriate cadence. Modern systems detect replies and opt-outs, automatically stopping sequences to respect prospect preferences. By focusing on personalization and relevance rather than volume, these sequences can be tailored to business context, role, and industry, using A/B testing to refine messaging and timing based on activity data."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ServiceParallaxContent items={parallaxItems} />

      <section className="bg-black py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Personalization and Campaign Testing</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Modern outreach systems support relevant personalization by using business context such as role, company, and industry. Effective personalization improves relevance for the recipient rather than simply inserting variables into generic templates.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                A/B testing allows teams to review the performance of different subject lines, messaging approaches, and calls to action. This data-driven approach helps refine outreach strategy based on how prospects interact with different sequences.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Understand Outreach Performance</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                An outreach dashboard makes delivery activity, replies, and unsubscribe requests visible at both the account and campaign levels. This visibility helps teams understand which sequences are meeting their objectives.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed italic">
                Note: Email open tracking can be affected by privacy features and mailbox provider limitations, so it should be interpreted as one of several engagement signals rather than a perfect measure.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Connect Outreach With Your Sales Systems</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Cold email outreach is most effective when integrated with broader sales workflows. Connecting the dashboard to CRM systems, lead databases, and enrichment platforms helps move qualified conversations into the sales pipeline.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                For businesses requiring deeper integration, our <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 transition-colors">web development services</Link> can help build custom connectors between your outreach tools and internal data systems.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Data Quality and Prospect Management</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Data quality is fundamental to responsible outreach. Using verified email addresses and maintaining suppression lists helps reduce bounce rates and protects sender reputation. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Regularly auditing prospect data for duplicates or outdated information ensures that campaigns remain targeted and relevant. Poor quality data is a primary cause of deliverability issues that can affect an entire outreach infrastructure.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Compliance and Opt-Out Management</h2>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Responsible outreach systems must support appropriate compliance workflows, including accurate sender information and reliable unsubscribe handling. Maintaining global suppression lists ensures that opt-out requests are respected across all campaigns and sending accounts.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Businesses should configure outreach workflows according to the laws and regulations applicable to their audience and jurisdiction. SamysAI provides infrastructure management tools, but businesses remain responsible for their own regulatory compliance.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">How a Cold Email Dashboard Works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Infrastructure Setup", desc: "Configure sending domains, mailboxes, and authentication records (SPF, DKIM, DMARC)." },
                { step: "2", title: "Prospect Preparation", desc: "Import, segment, verify, and organize prospect data to ensure quality and relevance." },
                { step: "3", title: "Campaign Configuration", desc: "Create messaging, personalization fields, and automated follow-up sequences." },
                { step: "4", title: "Controlled Sending", desc: "Launch campaigns using appropriate sending patterns and cadence management." },
                { step: "5", title: "Monitoring", desc: "Monitor delivery activity, bounces, replies, unsubscribes, and sender health." },
                { step: "6", title: "Optimization", desc: "Review campaign data and refine messaging, targeting, and sequences." },
                { step: "7", title: "Sales Handoff", desc: "Route relevant conversations from the dashboard into your sales process." },
                { step: "8", title: "Maintenance", desc: "Ongoing health checks and domain monitoring to preserve infrastructure." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <span className="text-blue-500 font-bold text-lg mb-2 block">Step {item.step}</span>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-12">
            <h2 className="text-3xl font-bold text-white mb-6">How SamysAI Approaches Outreach Infrastructure</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              We approach cold email as a combination of technical infrastructure, deliverability, data quality, and sales workflow integration. The objective is to create a structured and maintainable system rather than simply increase email volume. Learn more in our <Link to="/blog/cold-email-dashboards" className="text-blue-400 hover:text-blue-300 transition-colors">cold email outreach dashboard guide</Link>.
            </p>
            
            <div className="space-y-6">
              <a 
                href="https://calendly.com/samysai/clients" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
              >
                Book a Strategy Consultation
              </a>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span>See also:</span>
                <Link to="/services/ai-phone-callers" className="hover:text-blue-400 transition-colors">AI phone callers</Link>
                <Link to="/services/ai-chatbots" className="hover:text-blue-400 transition-colors">AI chatbot solutions</Link>
                <Link to="/services/app-development" className="hover:text-blue-400 transition-colors">app development services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColdEmailDashboardPage;
