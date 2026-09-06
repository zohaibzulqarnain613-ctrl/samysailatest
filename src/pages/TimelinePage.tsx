import React from "react"
import { Timeline, TimelineItem } from "@/components/ui/modern-timeline"
import { ArrowLeft } from "lucide-react"
import { Link } from '@tanstack/react-router'

const timelineItems: TimelineItem[] = [
  {
    title: "Company Founded",
    description: "Started our journey with a vision to revolutionize business automation through AI. Founded by experienced entrepreneurs who saw the potential of intelligent systems to transform how companies operate.",
    date: "January 2024",
    category: "Foundation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "First AI Automation Platform",
    description: "Successfully launched our first suite of AI automation tools, helping businesses streamline their operations. Onboarded initial clients and achieved outstanding results with automated outreach and lead generation.",
    date: "March 2024",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "Instagram DM Bot Release",
    description: "Launched our intelligent Instagram DM automation that personalizes outreach at scale. Helped businesses connect with thousands of potential customers while maintaining authentic conversations.",
    date: "May 2024",
    category: "Product",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "LinkedIn Outreach System",
    description: "Expanded our platform with LinkedIn automation capabilities. Integrated advanced AI to craft personalized messages and manage professional networking at scale, helping B2B companies accelerate their growth.",
    date: "July 2024",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    status: "completed"
  },
  {
    title: "CRM Integration Suite",
    description: "Currently rolling out seamless CRM integrations with major platforms. This enables automatic data synchronization, lead tracking, and workflow automation across all your business tools.",
    date: "October 2024",
    category: "Integration",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    status: "current"
  },
  {
    title: "Enterprise AI Platform",
    description: "Building our enterprise-grade solution with advanced security, custom workflows, and dedicated support. Designed for large organizations looking to transform their entire operation with AI automation.",
    date: "Q1 2025",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    status: "upcoming"
  },
  {
    title: "Global Expansion",
    description: "Planning to expand operations internationally with localized AI models, multi-language support, and regional partnerships to serve businesses worldwide.",
    date: "Q2 2025",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
    status: "upcoming"
  }
]

const TimelinePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Our Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a simple idea to a comprehensive AI automation platform serving businesses worldwide.
            Follow our story of innovation, growth, and transformation.
          </p>
        </header>

        <main>
          <Timeline items={timelineItems} />
        </main>

        <footer className="text-center mt-16 py-12 px-6 border-t border-gray-800">
          <p className="text-gray-400 text-lg">
            Ready to be part of our next chapter?
            <Link to="/" className="text-blue-400 font-medium hover:text-blue-300 ml-2 transition-colors">
              Get Started Today
            </Link>
          </p>
        </footer>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>
    </div>
  )
}

export default TimelinePage
