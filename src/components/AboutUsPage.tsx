import React, { useEffect, useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Component as HeroSection } from './ui/hero-section';
import TeamMessageModal from './TeamMessageModal';
import CardFlip from './ui/flip-card';
import { getOptimizedImageUrl } from '@/utils/image-optimization';

const AboutUsPage: React.FC = () => {
  const [teamVisible, setTeamVisible] = useState(false);
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Samy",
      role: "CEO",
      tagline: "Build the system the business actually needs.",
      description: "Leads company direction and works with clients to define the business problem before deciding what should be built.",
      message: "SamysAI exists to make advanced technology practical.\n\nWe build AI powered systems, digital products, and growth infrastructure for businesses that need their operations to run more reliably. That means AI phone callers and chatbots, web and app development, cold email dashboards and content systems, delivered as one connected stack rather than separate services.\n\nOur approach starts with the business problem. We look at how work happens today, where time is lost, and where a system can carry the repetitive load. Then we build something that fits how the team already works.\n\nIf that is the kind of technology partner you are looking for, we would be glad to talk.",
      color: "#3b82f6",
      expertise: ['Strategy', 'Business Systems', 'AI Solutions', 'Growth'],
      imageUrl: "/images/a485aafb-cc89-4b59-ae01-069e508b4907.JPG"
    },
    {
      name: "JZ",
      role: "Head of AI",
      tagline: "Automation should be useful before it is impressive.",
      description: "Leads AI and automation work, including AI phone callers and chatbots.",
      message: "My work at SamysAI focuses on AI and automation: the phone callers, chatbots, and workflows that handle conversations and repetitive tasks.\n\nThe goal with every one of these systems is the same. It should reduce manual work, handle its part of the process reliably, and hand off cleanly to a person when a person is needed.\n\nWe use AI where it genuinely helps. When a simpler approach solves the problem better, we build that instead.",
      color: "#8b5cf6",
      expertise: ['AI Systems', 'Automation', 'AI Callers', 'Chatbots'],
      imageUrl: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
    },
    {
      name: "Zaibi",
      role: "Head of Web Development",
      tagline: "Websites are operational tools, not just pages.",
      description: "Leads web development, from customer facing websites to internal dashboards.",
      message: "I lead web development at SamysAI.\n\nWe build websites and web applications that are fast, clear to use, and straightforward to maintain. In most projects the site is connected to something else we build, such as an automation, a dashboard, or a chatbot, so it needs to work as part of a larger system rather than on its own.\n\nWe care about performance, accessibility, and keeping the codebase in a state where the business can keep building on it.",
      color: "#06b6d4",
      expertise: ['Web Development', 'Dashboards', 'Performance', 'Full Stack'],
      imageUrl: "/images/IMG_2418_Original.jpg"
    },
    {
      name: "Abdullah J",
      role: "Head of Cold Email Outreach",
      tagline: "Effective outreach is about timing and relevance.",
      description: "Leads cold email outreach strategy and execution.",
      message: "I lead cold email outreach at SamysAI.\n\nWe build outreach systems that prioritize quality over quantity. A cold email should feel like a relevant business suggestion rather than an intrusion, and that requires clean data, proper infrastructure, and clear messaging.\n\nMy focus is on the technical and strategic layers that ensure emails reach the right inbox and start the right conversation.",
      color: "#f59e0b",
      expertise: ['Cold Email', 'Lead Gen', 'Email Infrastructure', 'Deliverability'],
      imageUrl: "/images/IMG_4750.png"
    },
    {
      name: "Sami S",
      role: "Head of App Development",
      tagline: "Ship something people can use every day.",
      description: "Leads mobile and cross platform app development.",
      message: "I lead app development at SamysAI.\n\nWe build mobile and cross platform applications, usually connected to the same systems and data the rest of the stack uses. That connection matters, because an app that sits apart from the business tends to be abandoned.\n\nFrom the first build to release, the priority is a product that is stable, usable, and possible to extend later.",
      color: "#10b981",
      expertise: ['App Development', 'Mobile Apps', 'Cross Platform', 'User Experience'],
      imageUrl: "/images/8f89c358-8a36-4e02-9c78-dd2c51d3aa42.JPG"
    },
    {
      name: "AZ",
      role: "Head of Content Creation",
      tagline: "Clear content does more work than clever content.",
      description: "Leads content creation and the messaging that supports outreach and growth work.",
      message: "I lead content creation at SamysAI.\n\nContent is part of the growth infrastructure we build. It supports outreach campaigns, product pages, and the systems that put a message in front of the right audience.\n\nMy focus is on writing that is specific and honest about what a business does, because that is what earns attention and holds it.",
      color: "#ec4899",
      expertise: ['Content Strategy', 'Brand Messaging', 'AI Content', 'Outreach'],
      imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
      name: "Ayesha S",
      role: "Head of Digital Marketing",
      tagline: "Marketing should be measurable, not mysterious.",
      description: "Leads digital marketing, SEO, and growth campaigns.",
      message: "I lead digital marketing at SamysAI.\n\nOur marketing work is built around clarity and results. We plan campaigns, content, and SEO around what the business actually needs to grow, and we measure what matters rather than chasing vanity metrics.\n\nFrom paid campaigns to organic content, the goal is the same: attract the right audience, earn their trust, and turn attention into action.",
      color: "#f43f5e",
      expertise: ['Digital Marketing', 'SEO', 'Growth Campaigns', 'Content Strategy'],
      imageUrl: "https://images.pexels.com/photos/8917456/pexels-photo-8917456.jpeg"
    }
  ];

  useEffect(() => {
    const teamObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTeamVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (teamRef.current) {
      teamObserver.observe(teamRef.current);
    }

    return () => {
      teamObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-sm font-mono text-blue-400 uppercase tracking-[0.3em]">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter leading-tight">
              One technology team across AI, software, and growth systems.
            </h3>
          </div>
          <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              SamysAI builds AI powered systems, digital products, and growth infrastructure for businesses. Our work spans three connected areas: AI and automation, including phone callers and chatbots; digital development, covering web and app builds; and growth and operations, including cold email dashboards and content systems.
            </p>
            <p>
              These are not separate service lines. A chatbot is more useful when it is wired into the product it supports. An outreach dashboard is more useful when the content feeding it is planned alongside it. We build the pieces so they work together.
            </p>
            <p>
              We start from the business problem rather than the technology. If automation is the right answer, we automate. If the answer is a better tool, a cleaner process, or a simpler build, we do that instead.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Distinct Layout */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-mono text-blue-400 uppercase tracking-[0.3em] mb-8">Our Mission</h2>
          <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter text-white">
            To take repetitive work off people's hands with systems that are genuinely <span className="text-blue-400">useful</span>, so teams can spend their time on the work that needs them.
          </p>
        </div>
      </section>

      {/* Vision & Values - Grid Layout */}
      <section className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We want to help build a business environment where intelligent systems work alongside people rather than around them, handling routine communication, carrying operational load, and giving teams better digital tools to work with.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We believe practical intelligent technology should be accessible to businesses of all sizes, not only companies with large internal engineering teams.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Innovation', body: 'We adopt new technology when it solves a real problem, not simply because it is new.' },
                { title: 'Integrity', body: 'We set realistic expectations and say clearly what a system can and cannot do.' },
                { title: 'Excellence', body: 'We judge our work by how well it holds up in daily use, not how it looks at launch.' },
                { title: 'Empowerment', body: 'We build tools that make people better at their work rather than replacing them.' },
              ].map((v) => (
                <div key={v.title} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <p className="text-sm font-semibold text-gray-200">{v.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SamysAI & Our Promise */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-sm font-mono text-blue-400 uppercase tracking-[0.3em]">Why SamysAI</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Built around the problem, not the tool</h3>
            <ul className="space-y-5 text-gray-400 text-base leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                <span>We define the business problem before choosing the technology.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                <span>We choose practical solutions based on what the business actually needs.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                <span>We design around how people will use the system in their daily work.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                <span>We build with future changes and growth in mind.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                <span>We connect technology where doing so creates genuine value.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-sm font-mono text-purple-400 uppercase tracking-[0.3em]">Our Promise</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight md:max-w-[20ch]">Clear communication and work you can rely on</h3>
            <ul className="space-y-5 text-gray-400 text-base leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
                <span>We explain what we are building, why, and what it will realistically do.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
                <span>We propose practical solutions and tell you when something is not worth building.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
                <span>We implement carefully and test before anything goes live.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
                <span>We deliver on what we agree, and raise it early when something changes.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
                <span>We build systems that can evolve with the business instead of needing a rebuild.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="relative py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Meet the Team
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto justify-items-center">
            {teamMembers.map((member, index) => (
              <CardFlip
                key={member.name}
                title={member.name}
                subtitle={member.role}
                description={member.description}
                features={member.expertise}
                color={member.color}
                imageUrl={getOptimizedImageUrl(member.imageUrl, 400)}
                onLearnMore={() => setActiveMember(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeMember !== null && (
        <TeamMessageModal
          isOpen={true}
          onClose={() => setActiveMember(null)}
          name={teamMembers[activeMember].name}
          role={teamMembers[activeMember].role}
          tagline={teamMembers[activeMember].tagline}
          message={teamMembers[activeMember].message}
          color={teamMembers[activeMember].color}
        />
      )}

      {/* Closing Section */}
      <section className="relative py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-4xl font-bold text-white mb-12 tracking-tighter leading-tight">
              Together, we build intelligent systems that solve real business problems.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => {
                    window.location.href = 'https://calendly.com/samysai/clients';
                  }}
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-white/5 border border-white/10 rounded-full shadow-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Book a Strategy Consultation</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/#contact';
                  }}
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-white/5 border border-white/10 rounded-full shadow-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Contact Our Team</span>
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(AboutUsPage);
