import React from 'react';
import { Scale, Mail, Shield, AlertCircle, FileText, ArrowLeft, Info, Cpu, Users, Globe, Lock, Gavel, Trash2, RefreshCw, HelpCircle } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = "August 16, 2026";
  const contactEmail = "samy@samysai.info";
  const jurisdiction = "[INSERT GOVERNING LAW / JURISDICTION]";

  const sections = [
    {
      id: "introduction",
      icon: Info,
      title: "1. Introduction",
      content: "These Terms of Service govern your access to and use of the SamysAI website (https://samysai.com) and our applicable digital services, AI solutions, and development engagements. By using our website or services, you agree to these Terms."
    },
    {
      id: "use-of-website",
      icon: Globe,
      title: "2. Use of the Website",
      content: "You agree to use the website lawfully and responsibly. You must not:",
      list: [
        "Violate any applicable local, state, national, or international laws.",
        "Attempt unauthorized access to our systems, servers, or data.",
        "Interfere with the proper operation of the website or introduce malicious code.",
        "Abuse website functionality or misrepresent your identity or authorization."
      ]
    },
    {
      id: "services",
      icon: Cpu,
      title: "3. SamysAI Services",
      content: "SamysAI provides technology and business services, including but not limited to:",
      list: [
        "AI & Automation: AI Phone Callers and AI Chatbots.",
        "Digital Development: Web and App Development.",
        "Growth & Operations: Cold Email Dashboards and Content Creation.",
        "Services may vary depending on the specific agreement with a client."
      ]
    },
    {
      id: "ai-systems",
      icon: Cpu,
      title: "4. AI-Generated and Automated Systems",
      content: "Our AI systems and automated technologies may produce outputs that require human review. SamysAI does not guarantee that AI-generated outputs are always accurate, complete, current, error-free, or suitable for every business purpose. Clients remain responsible for reviewing and validating outputs where appropriate."
    },
    {
      id: "client-responsibilities",
      icon: Users,
      title: "5. Client Responsibilities",
      content: "Clients are responsible for providing accurate information, required materials, approvals, and instructions necessary to perform agreed services. Clients are also responsible for ensuring that their use of SamysAI systems complies with applicable laws and regulations in their industry."
    },
    {
      id: "third-party",
      icon: Globe,
      title: "6. Third-Party Services and Integrations",
      content: "SamysAI solutions may integrate with third-party platforms, APIs, software, hosting providers, or CRM systems. We do not control these third-party services, and their availability or terms may change independently. Use of these services is subject to their respective terms."
    },
    {
      id: "intellectual-property",
      icon: Lock,
      title: "7. Intellectual Property",
      content: "We distinguish between three types of intellectual property:",
      list: [
        "SamysAI IP: Our pre-existing software, frameworks, methodologies, and designs remain our property.",
        "Client Materials: Materials provided by the client remain the property of the client.",
        "Deliverables: Ownership of specific deliverables created under an agreement is defined in the applicable project contract."
      ]
    },
    {
      id: "content-responsibility",
      icon: FileText,
      title: "8. User and Client Content",
      content: "Users and clients are responsible for the content, data, and instructions they provide. You must have the appropriate rights and permissions to provide such materials to us."
    },
    {
      id: "payments",
      icon: Scale,
      title: "9. Payments and Commercial Terms",
      content: "Specific commercial terms, pricing, payment schedules, and project deliverables are defined in separate proposals, orders, statements of work, or service agreements between SamysAI and the client."
    },
    {
      id: "availability",
      icon: RefreshCw,
      title: "10. Service Availability",
      content: "While we aim to maintain reliable services, SamysAI does not guarantee uninterrupted or error-free availability of our website or automated systems."
    },
    {
      id: "warranties",
      icon: HelpCircle,
      title: "11. Warranties and Disclaimers",
      content: "Services are provided 'as is'. SamysAI does not make absolute claims or guarantees regarding specific business results, revenue, rankings, lead volume, or operational savings resulting from the use of our services."
    },
    {
      id: "liability",
      icon: AlertCircle,
      title: "12. Limitation of Liability",
      content: "To the maximum extent permitted by law, SamysAI shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our website or services."
    },
    {
      id: "indemnification",
      icon: Gavel,
      title: "13. Indemnification",
      content: "You agree to indemnify SamysAI from claims arising from your misuse of the website, violation of these terms, or materials you provide, subject to applicable law."
    },
    {
      id: "termination",
      icon: Trash2,
      title: "14. Termination",
      content: "Access to the website or certain services may be suspended or terminated by SamysAI where appropriate, subject to applicable agreements and law."
    },
    {
      id: "changes",
      icon: RefreshCw,
      title: "15. Changes to These Terms",
      content: "We may update these Terms periodically. Continued use of the website or services after changes are published constitutes acceptance of the updated Terms."
    },
    {
      id: "governing-law",
      icon: Gavel,
      title: "16. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of ${jurisdiction}. (Information requiring confirmation before publication).`
    },
    {
      id: "contact",
      icon: Mail,
      title: "17. Contact",
      content: "For any questions regarding these Terms of Service, please contact us:",
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
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
            Terms of Service
          </h1>
          <div className="flex items-center gap-3 text-gray-400 border-b border-white/10 pb-8">
            <Scale className="w-5 h-5 text-blue-400" />
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
            <Link to="/privacy-policy" className="ml-4 text-gray-400 hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
