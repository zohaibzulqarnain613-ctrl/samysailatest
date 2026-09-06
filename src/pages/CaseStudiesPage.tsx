import React from 'react';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare, Mail, Globe, CheckCircle, ArrowLeft } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const caseStudies = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI-Powered Customer Engagement",
      client: "Mid-Size Service Company",
      challenge: "Slow response times led to lost leads.",
      solution: "We built a custom AI chatbot + voice agent trained on real company data to handle 24/7 inquiries.",
      results: [
        "80% faster replies",
        "2x customer satisfaction",
        "30% increase in qualified leads"
      ],
      feedback: "SamysAI helped us turn conversations into conversions — effortlessly.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "AI-Driven Cold Outreach Automation",
      client: "B2B SaaS Startup",
      challenge: "Manual outreach was time-consuming and inconsistent.",
      solution: "We designed an intelligent cold email system with personalized messaging, automated follow-ups, and performance tracking.",
      results: [
        "5x more outreach volume",
        "45% open rate improvement",
        "3x increase in meeting bookings"
      ],
      feedback: "Our sales team now focuses on closing deals, not writing emails.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development & CRM Integration",
      client: "Growing E-Commerce Brand",
      challenge: "Disconnected systems caused data silos and workflow bottlenecks.",
      solution: "We built a modern web platform integrated with their CRM, enabling seamless customer data flow and automated order processing.",
      results: [
        "90% reduction in manual data entry",
        "Real-time customer insights",
        "40% faster order fulfillment"
      ],
      feedback: "SamysAI unified our tech stack and transformed how we operate.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const approachSteps = [
    {
      number: "1",
      title: "Understand",
      description: "We analyze your goals, workflows, and challenges."
    },
    {
      number: "2",
      title: "Design",
      description: "We build intelligent systems that fit seamlessly into your process."
    },
    {
      number: "3",
      title: "Deploy & Optimize",
      description: "We ensure continuous improvement with adaptive AI."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">

      {/* Back to Home Button */}
      <div className="relative z-50 max-w-7xl mx-auto px-6 pt-24 pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h1
            {...fadeIn}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
          >
            Real Results. Real Transformation. Powered by SamysAI.
          </motion.h1>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Discover how innovative teams are saving time, scaling faster, and transforming operations with AI-driven systems crafted by SamysAI.
          </motion.p>

          <motion.a
            {...fadeIn}
            transition={{ delay: 0.4, duration: 0.6 }}
            href="https://calendly.com/mianshamaz666/clients"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-500"
          >
            <span className="mr-2">📅</span>
            Book a Demo
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <motion.div
              {...fadeIn}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                At SamysAI, every solution begins with a mission — to make technology work <span className="text-blue-400 font-semibold italic">for</span> people.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We transform repetitive workflows into intelligent, automated systems that enhance communication, improve productivity, and unlock innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Each story below represents our commitment to seamless automation, human-centered design, and measurable business growth.
              </p>
            </motion.div>

            {/* Professional Image */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative h-80 lg:h-96 flex items-center justify-center group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl group-hover:border-white/30 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Business team collaboration and AI-powered success"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
                  <p className="text-white text-sm font-semibold">AI-Powered Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="border-t border-white/10"></div>
        </div>
      </section>

      {/* Case Study Cards Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.gradient} rounded-t-3xl`}></div>

                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-r ${study.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {study.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{study.title}</h3>

                  <div className="space-y-2">
                    <p className="text-sm text-blue-400 font-semibold">Client: {study.client}</p>

                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-1">Challenge:</p>
                      <p className="text-gray-400">{study.challenge}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-1">Solution:</p>
                      <p className="text-gray-400">{study.solution}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-2">Results:</p>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm font-semibold text-gray-300 mb-2">Client Feedback:</p>
                      <p className="text-gray-400 italic">"{study.feedback}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Our Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We don't just automate — we amplify human potential.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center group hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
              >
                {/* Number Circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            {...fadeIn}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to see what SamysAI can build for your business?
            </h2>

            <a
              href="https://calendly.com/mianshamaz666/clients"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-500 animate-pulse"
            >
              <span className="mr-2">📅</span>
              Book a Demo
              <ExternalLink className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer Tagline */}
      <section className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p
            {...fadeIn}
            className="text-lg text-gray-300 italic"
          >
            Empowering growth through intelligent automation — SamysAI
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
