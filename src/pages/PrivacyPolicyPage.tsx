import React from 'react';
import { Shield, Mail, Lock, Eye, FileText, User, ArrowLeft, Cookie, Server, ExternalLink, RefreshCw } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "August 16, 2026";
  const contactEmail = "samy@samysai.info";

  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: "1. Introduction",
      content: "At SamysAI, we respect your privacy and are committed to handling your information responsibly. This Privacy Policy explains how we collect, use, protect, and manage your information when you visit our website (https://samysai.com) or interact with our AI-powered services."
    },
    {
      id: "collection",
      icon: FileText,
      title: "2. Information We Collect",
      content: "We collect information that helps us provide and improve our services:",
      list: [
        "Information you voluntarily provide: Name, contact details, business information, and messages submitted through our forms.",
        "Communication information: Details of your interactions with our team or automated systems.",
        "Website usage information: IP address, device type, browser information, and technical data about how you interact with our site.",
        "Cookies and similar technologies: Data collected through standard tracking technologies to enhance your experience."
      ]
    },
    {
      id: "usage",
      icon: Eye,
      title: "3. How We Use Information",
      content: "We use the collected information for purposes including:",
      list: [
        "Responding to your inquiries and providing requested services.",
        "Communicating updates, reports, and relevant business information.",
        "Improving website functionality and user experience.",
        "Analyzing usage patterns to optimize our AI solutions and systems.",
        "Maintaining security and preventing unauthorized access or fraud.",
        "Meeting applicable legal and regulatory obligations."
      ]
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "4. Cookies and Similar Technologies",
      content: "Our website uses cookies and similar technologies for essential functionality, analytics, and performance. These help us remember your preferences and understand how you use our site. You can manage your cookie preferences through your browser settings."
    },
    {
      id: "third-party",
      icon: Server,
      title: "5. Third-Party Services",
      content: "SamysAI may use third-party tools and service providers to operate parts of our website or services. These may include hosting, analytics, communication (such as Calendly for scheduling), CRM, and automation infrastructure providers. We only share information necessary for these providers to perform their functions."
    },
    {
      id: "security",
      icon: Lock,
      title: "6. Data Security",
      content: "We implement reasonable technical and organizational measures to protect your information from unauthorized access, loss, or alteration. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure."
    },
    {
      id: "retention",
      icon: RefreshCw,
      title: "7. Data Retention",
      content: "We retain your information for as long as reasonably necessary for business, operational, contractual, legal, security, or other legitimate purposes. When information is no longer required, we securely delete or anonymize it."
    },
    {
      id: "rights",
      icon: User,
      title: "8. Your Privacy Rights",
      content: "Depending on your location and applicable law, you may have rights relating to your personal data, including the right to access, correct, delete, or restrict its processing. You may also have the right to data portability or to object to certain uses of your information."
    },
    {
      id: "children",
      icon: Shield,
      title: "9. Children's Privacy",
      content: "Our website and business services are not intentionally directed toward children under the age of 18. We do not knowingly seek to collect personal information from children."
    },
    {
      id: "external",
      icon: ExternalLink,
      title: "10. External Links",
      content: "Our website may contain links to third-party websites. SamysAI is not responsible for the privacy practices or content of external websites. We encourage you to review the privacy policies of any site you visit."
    },
    {
      id: "changes",
      icon: RefreshCw,
      title: "11. Changes to This Privacy Policy",
      content: `We may update this policy periodically to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated "Last Updated" date.`
    },
    {
      id: "contact",
      icon: Mail,
      title: "12. Contact",
      content: "If you have questions about this Privacy Policy or our data practices, please contact us:",
      details: [
        "SamysAI",
        "Website: https://samysai.com",
        `Email: ${contactEmail}`
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Breadcrumb / Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-3 text-gray-400 border-b border-white/10 pb-8">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium uppercase tracking-widest">Last Updated: {lastUpdated}</span>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-16">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white tracking-tight">{section.title}</h2>
                </div>
                
                <div className="pl-12 space-y-4">
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {section.content}
                  </p>
                  
                  {section.list && (
                    <ul className="space-y-3 mt-4">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-400 leading-relaxed italic">
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.details && (
                    <div className="mt-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      {section.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 font-medium">{detail}</p>
                      ))}
                      <a 
                        href={`mailto:${contactEmail}`}
                        className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                      >
                        <Mail className="w-4 h-4" />
                        Send an Email
                      </a>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 SamysAI. All rights reserved. 
            <Link to="/terms-of-service" className="ml-4 text-gray-400 hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
