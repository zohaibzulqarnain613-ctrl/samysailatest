import { Blog7 } from "@/components/ui/blog7";
import Footer from "@/components/Footer";

const blogData = {
  tagline: "Insights & Innovation",
  heading: "AI Automation Insights",
  description:
    "Explore the latest strategies, success stories, and best practices in AI automation. Learn how businesses are scaling efficiently with intelligent automation solutions.",
  buttonText: "Explore all insights",
  buttonUrl: "/blog",
  posts: [
    {
      id: "post-1",
      title: "How AI Phone Callers Are Transforming Business Communication",
      summary:
        "Discover how AI-powered phone systems support customer outreach by handling high-volume calls, qualifying leads automatically, and booking appointments 24/7. Explore how these systems can support business communication while improving team efficiency through voice automation.",
      label: "AI Phone Callers",
      author: "SamysAI Team",
      published: "20 Oct 2024",
      url: "/blog/ai-phone-callers",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=450&fit=crop",
    },
    {
      id: "post-2",
      title: "AI Chatbots: The Future of Customer Engagement",
      summary:
        "Explore how AI chat solutions can support customer service, answer common questions, and handle conversations at scale by providing instant 24/7 support and personalized experiences.",
      label: "AI Chatbots",
      author: "SamysAI Team",
      published: "15 Oct 2024",
      url: "/blog/ai-chatbots",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=450&fit=crop",
    },
    {
      id: "post-3",
      title: "Modern Web Development: Building Scalable Digital Experiences",
      summary:
        "Learn how professional web development creates powerful digital foundations for business growth. From responsive design to seamless integrations, discover best practices for building websites that support stronger digital experiences and business operations.",
      label: "Web Development",
      author: "SamysAI Team",
      published: "10 Oct 2024",
      url: "/blog/web-development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop",
    },
    {
      id: "post-4",
      title: "Content Creation at Scale: AI-Powered Strategies That Work",
      summary:
        "Understand how AI-assisted content creation helps businesses produce high-quality, engaging content consistently. From blog posts to social media, learn proven strategies for maintaining brand voice while scaling your content production efficiently.",
      label: "Content Creation",
      author: "SamysAI Team",
      published: "5 Oct 2024",
      url: "/blog/content-creation",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
    },
    {
      id: "post-5",
      title: "Cold Email Dashboards: Data-Driven Outreach That Converts",
      summary:
        "Learn how advanced cold email dashboards provide real-time analytics, A/B testing, and automated follow-ups to help teams monitor outreach performance and make better-informed decisions. Discover how to track engagement metrics while maintaining deliverability and sender reputation.",
      label: "Cold Email Dashboards",
      author: "SamysAI Team",
      published: "1 Oct 2024",
      url: "/blog/cold-email-dashboards",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=450&fit=crop",
    },
    {
      id: "post-6",
      title: "App Development: Building Mobile Solutions That Scale",
      summary:
        "Discover how professional app development creates powerful mobile experiences that support user engagement and business growth. From native iOS and Android apps to cross-platform solutions, learn best practices for building apps that provide value to users and support business objectives.",
      label: "App Development",
      author: "SamysAI Team",
      published: "25 Sep 2024",
      url: "/blog/app-development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
    },
  ],
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <h1 className="sr-only">SamysAI Blog: Insights on AI Automation and Business Growth</h1>
        <Blog7 {...blogData} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
