import React, { useEffect } from 'react';
import { ServiceParallaxContent } from '../components/ui/text-parallax-content-scroll';
import { Link } from '@tanstack/react-router';

const ContentCreationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parallaxItems = [
    {
      imgUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2340&auto=format&fit=crop",
      subheading: "AI Content Creation",
      heading: "AI Content Creation for Business",
      title: "Create Content With AI",
      description: "AI-assisted content systems help businesses develop blog articles, website copy, social media content, email content, product descriptions, and other marketing materials. Effective AI content depends on proper instructions, source material, brand guidelines, human review, and editorial direction."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop",
      subheading: "Brand Consistency",
      heading: "Maintain a Consistent Brand Voice",
      title: "Voice & Tone Mastery",
      description: "AI content workflows use brand guidelines, examples, terminology, tone, audience information, and approved messaging to create more consistent content across different channels while adapting to platform-specific best practices."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2340&auto=format&fit=crop",
      subheading: "Content Performance",
      heading: "Build a More Structured Content Workflow",
      title: "Structured Strategy",
      description: "Modern content systems support planning, drafting, editing, optimization, repurposing, and publishing workflows. By integrating AI at the right stages, businesses can maintain a steady flow of high-quality material without overloading internal resources."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      <ServiceParallaxContent items={parallaxItems} />
      
      {/* Educational SEO Content */}
      <div className="bg-black/50 py-24 text-gray-300">
        <div className="mx-auto max-w-5xl px-6">
          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">What Is AI Content Creation?</h2>
            <p className="mb-6 text-lg leading-relaxed">
              AI content creation in practical business terms refers to the use of large language models and generative tools to assist in the production of written, visual, or audio assets. Rather than replacing human creativity, these systems act as powerful accelerators for marketing and communication teams.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ul className="space-y-3 list-disc pl-5">
                <li>Research and topic development</li>
                <li>Content outlines and structures</li>
                <li>First drafts for various formats</li>
                <li>Content expansion and depth improvement</li>
              </ul>
              <ul className="space-y-3 list-disc pl-5">
                <li>Editing, rewriting, and tone adjustment</li>
                <li>Social media adaptations and captions</li>
                <li>Email marketing sequences</li>
                <li>Website copy and product descriptions</li>
              </ul>
            </div>
            <p className="mt-6 text-lg leading-relaxed">
              By leveraging these capabilities, businesses can transform a single core idea into a comprehensive content ecosystem, ensuring that every touchpoint with their audience is supported by high-quality information.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">How Businesses Use AI Content Creation</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Blog and SEO Content</h3>
                <p className="text-lg leading-relaxed">
                  AI assists with research, outlines, and initial drafting, helping writers overcome the blank page. It excels at content organization and updating existing articles to keep information fresh. However, human expertise remains vital for ensuring accuracy, depth, and unique perspectives that search engines value.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Social Media Content</h3>
                <p className="text-lg leading-relaxed">
                  Efficiency in social media comes from repurposing. A single core piece of content, such as a whitepaper or blog post, can be adapted into platform-specific posts, threads, and captions, maintaining brand consistency while respecting the nuances of different social networks.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Website Content</h3>
                <p className="text-lg leading-relaxed">
                  From service pages and landing page copy to FAQs and internal knowledge bases, AI helps scale website content. This ensures that every part of a digital presence provides value to the user and supports the overall business objectives.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Email Marketing</h3>
                <p className="text-lg leading-relaxed">
                  AI supports the development of newsletters, educational sequences, and campaign variations. Businesses combining content automation with customer communication can also explore our <Link to="/services/ai-chatbots" className="text-blue-400 hover:text-blue-300 transition-colors">AI chatbot solutions</Link> for even deeper engagement.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">AI + Human Content Workflow</h2>
            <p className="mb-8 text-lg leading-relaxed">
              The strongest business content workflows combine AI assistance with human expertise. AI is a tool that enhances the capabilities of skilled professionals, not a replacement for them.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <ol className="space-y-4 list-decimal pl-5">
                  <li><strong>Strategy:</strong> Defining goals, audience, and key messaging.</li>
                  <li><strong>Research:</strong> Gathering data, source material, and insights.</li>
                  <li><strong>AI-assisted drafting:</strong> Using AI to generate initial outlines and drafts.</li>
                  <li><strong>Human review:</strong> Fact-checking, editing for brand voice, and adding unique value.</li>
                </ol>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <ol start={5} className="space-y-4 list-decimal pl-5">
                  <li><strong>SEO and quality optimization:</strong> Refining structure and internal linking.</li>
                  <li><strong>Publishing:</strong> Distributing content across the right channels.</li>
                  <li><strong>Performance analysis:</strong> Tracking engagement and business outcomes.</li>
                  <li><strong>Content updates:</strong> Keeping material relevant over time.</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">What Makes AI Content Useful for SEO?</h2>
            <p className="mb-6 text-lg leading-relaxed">
              It is important to understand that simply producing high volumes of AI content does not guarantee search rankings. Google and other search engines prioritize content that demonstrates experience, expertise, authoritativeness, and trustworthiness (E-E-A-T).
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 list-inside list-disc text-lg">
              <li>Meeting specific search intent</li>
              <li>Providing original and useful information</li>
              <li>Clear topical structure and hierarchy</li>
              <li>Relevant keywords used naturally</li>
              <li>Human editing and fact-checking</li>
              <li>Authoritative and accurate data</li>
              <li>Good user experience and page speed</li>
              <li>Strategic <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 transition-colors">web development</Link> foundations</li>
            </ul>
          </section>

          <div className="mt-20 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Ready to Scale Your Content?</h2>
            <p className="mb-8 max-w-2xl text-lg">
              Learn how to integrate intelligent content workflows into your business operations for better consistency and scale.
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
              "name": "Content Creation",
              "item": "https://samysai.com/services/content-creation"
            }
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Content Creation for Business",
          "description": "AI-assisted content creation workflows for blogs, social media, marketing content, and brand consistency.",
          "provider": {
            "@type": "Organization",
            "name": "SamysAI",
            "url": "https://samysai.com"
          },
          "serviceType": "Content Creation",
          "areaServed": "Worldwide"
        })}
      </script>
    </div>
  );
};

export default ContentCreationPage;