import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from "framer-motion";

const BlurredStagger = ({
  text = "built by SamysAI",
}: {
  text: string;
}) => {
  const headingText = text;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div className="w-full">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="text-base leading-relaxed break-words whitespace-normal text-gray-300"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

const FAQsPage: React.FC = () => {
  const categories = [
    { id: "phone-callers", name: "AI Phone Callers" },
    { id: "chatbots", name: "AI Chatbots" },
    { id: "web-dev", name: "Web Development" },
    { id: "content", name: "Content Creation" },
    { id: "email", name: "Cold Email Dashboards" },
    { id: "app-dev", name: "App Development" }
  ];

  const faqData = {
    "phone-callers": [
      {
        question: "How do AI Phone Callers work?",
        answer: "Our AI Phone Callers use advanced natural language processing to conduct human-like phone conversations. They can handle inbound customer inquiries, make outbound sales calls, qualify leads, schedule appointments, and follow up with prospects automatically."
      },
      {
        question: "Do they sound natural and human-like?",
        answer: "Yes, our AI callers use state-of-the-art voice technology that sounds remarkably human with natural intonation, pauses, and conversational flow. Most people can't tell they're speaking with AI."
      },
      {
        question: "Can I customize the voice and script?",
        answer: "Absolutely! You can choose from multiple voice options, customize the conversation script, train the AI on your products and services, and align it with your brand's tone and messaging."
      },
      {
        question: "How long does it take to set up?",
        answer: "Setup typically takes 3-5 days. We configure the system, train the AI on your business, integrate with your CRM if needed, and conduct thorough testing before launch."
      },
      {
        question: "What happens if the AI can't handle a call?",
        answer: "The AI is programmed to recognize when human intervention is needed. It will seamlessly transfer complex calls to your team and log all interactions for follow-up."
      }
    ],
    "chatbots": [
      {
        question: "What platforms can AI Chatbots be deployed on?",
        answer: "Our chatbots can be deployed on your website, Facebook Messenger, Instagram, WhatsApp, SMS, and custom applications. We build cross-platform solutions that work seamlessly across all channels."
      },
      {
        question: "How intelligent are your chatbots?",
        answer: "Our chatbots use advanced AI and natural language understanding to handle complex conversations, understand context, remember previous interactions, and provide accurate responses based on your business knowledge."
      },
      {
        question: "Can chatbots integrate with our existing systems?",
        answer: "Yes, we integrate chatbots with your CRM, booking systems, payment processors, databases, and other business tools to provide end-to-end automation of customer interactions."
      },
      {
        question: "How do you train the chatbot on our business?",
        answer: "We train the chatbot using your existing content, FAQs, product information, and past customer interactions. The AI continuously learns from new conversations to improve over time."
      },
      {
        question: "Can customers tell it's a bot?",
        answer: "Our chatbots provide natural, helpful conversations that feel human. While we recommend transparency about AI usage, the experience is smooth and customers appreciate the instant responses and 24/7 availability."
      }
    ],
    "email": [
      {
        question: "What makes your Cold Email Dashboard different?",
        answer: "Our dashboard combines advanced analytics, AI-powered A/B testing, automated follow-ups, and deliverability optimization in one place. You get real-time insights and can manage multiple campaigns without switching tools."
      },
      {
        question: "How do you ensure emails don't go to spam?",
        answer: "We implement email warming, domain authentication (SPF, DKIM, DMARC), smart sending schedules, and content optimization. We also monitor sender reputation and adjust strategies to maximize inbox placement."
      },
      {
        question: "Can I run A/B tests on my campaigns?",
        answer: "Yes, our system automatically runs multivariate tests on subject lines, message content, send times, and more. The AI learns from results and optimizes campaigns in real-time for better performance."
      },
      {
        question: "How are follow-ups automated?",
        answer: "You can create sequences with conditional logic based on recipient behavior (opened, clicked, replied). The system automatically sends follow-ups at optimal times while respecting response signals."
      },
      {
        question: "What analytics are included?",
        answer: "Track open rates, click rates, reply rates, bounce rates, unsubscribes, and conversions. Get detailed insights by campaign, segment, and time period with exportable reports and real-time dashboards."
      }
    ],
    "web-dev": [
      {
        question: "What types of websites do you build?",
        answer: "We build custom business websites, landing pages, e-commerce stores, SaaS platforms, and web applications. All our sites are modern, responsive, and optimized for conversion and performance."
      },
      {
        question: "How long does it take to build a website?",
        answer: "Most standard websites are completed within one week. This includes design, development, testing, and launch. More complex projects like e-commerce stores or custom web applications may take 2-4 weeks depending on requirements."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All our websites are built with a mobile-first approach and are fully responsive across all devices and screen sizes. We also optimize for speed and performance on mobile networks."
      },
      {
        question: "Do you provide hosting and maintenance?",
        answer: "Yes, we offer managed hosting solutions and ongoing maintenance packages that include security updates, performance monitoring, backups, and technical support."
      },
      {
        question: "Can you integrate automation tools into my website?",
        answer: "Yes! We specialize in integrating chatbots, lead capture forms, CRM connections, email automation, analytics, and other tools that automate your business processes and drive growth."
      }
    ],
    "content": [
      {
        question: "What content can your AI create?",
        answer: "Our AI generates blog posts, social media content, ad copy, email campaigns, product descriptions, and video scripts. All content is tailored to your brand voice and optimized for your target audience."
      },
      {
        question: "How do you ensure content quality?",
        answer: "We train our AI on your brand guidelines, review all content with our quality assurance process, fact-check information, and can include human editing before publication if desired."
      },
      {
        question: "Can you manage my social media posting?",
        answer: "Yes, we create content calendars, generate posts for multiple platforms, optimize posting times, and can fully automate your social media publishing with approval workflows if needed."
      },
      {
        question: "Is the content SEO-optimized?",
        answer: "Yes, all written content is optimized for relevant keywords, includes proper structure and metadata, and follows SEO best practices to improve your search engine rankings."
      },
      {
        question: "How many pieces of content do you produce?",
        answer: "Volume depends on your needs and plan. We can scale from a few pieces per week to dozens of posts daily across multiple platforms. We'll design a content strategy that fits your goals and budget."
      }
    ],
    "app-dev": [
      {
        question: "What types of apps do you develop?",
        answer: "We build native iOS and Android apps, cross-platform applications using React Native and Flutter, and progressive web apps. Our apps range from consumer-facing mobile applications to enterprise-grade business tools."
      },
      {
        question: "How long does app development take?",
        answer: "Timeline varies by complexity. Simple apps take 4-8 weeks, while complex apps with custom features, integrations, and advanced functionality may take 12-16 weeks. We provide detailed timelines during the discovery phase."
      },
      {
        question: "Do you handle app store submissions?",
        answer: "Yes, we manage the entire app store submission process for both Apple App Store and Google Play Store, including creating store listings, screenshots, descriptions, and handling the review process."
      },
      {
        question: "Can you integrate apps with existing systems?",
        answer: "Absolutely. We specialize in integrating mobile apps with your existing backend systems, APIs, databases, CRM platforms, payment gateways, and third-party services to create seamless experiences."
      },
      {
        question: "Do you provide ongoing app maintenance and updates?",
        answer: "Yes, we offer comprehensive maintenance packages that include bug fixes, OS compatibility updates, feature enhancements, performance monitoring, and technical support to keep your app running smoothly."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24 pb-16">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Everything you need to know about our AI automation services
            </p>
          </div>

          {categories.map((category) => (
            <div key={category.id} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                {category.name}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
              >
                {faqData[category.id as keyof typeof faqData].map((faq, index) => (
                  <AccordionItem
                    key={`${category.id}-${index}`}
                    value={`${category.id}-${index}`}
                    className="border-b border-gray-700 bg-white/5 backdrop-blur-sm rounded-lg px-6"
                  >
                    <AccordionTrigger className="cursor-pointer text-base md:text-lg font-medium hover:no-underline text-white py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <BlurredStagger text={faq.answer} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg mb-6">
              Can't find what you're looking for?
            </p>
            <button
              onClick={() => window.location.href = '/#contact'}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-500 ease-in-out overflow-hidden"
            >
              <span className="relative z-10">Contact Our Support Team</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
