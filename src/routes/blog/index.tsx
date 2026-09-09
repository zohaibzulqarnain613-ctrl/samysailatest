import { createFileRoute } from "@tanstack/react-router";
import BlogPage from "@/pages/BlogPage";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "SamysAI Blog | Insights on AI Automation & Digital Systems" },
      { name: "description", content: "Explore expert insights on AI phone callers, chatbots, web development, and business automation systems. Learn how to scale your business with modern AI technology." },
      { property: "og:title", content: "SamysAI Blog | Insights on AI Automation & Digital Systems" },
      { property: "og:description", content: "Explore expert insights on AI phone callers, chatbots, web development, and business automation systems." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://samysai.com/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/blog" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://images.unsplash.com" },
      {
        rel: "preload",
        as: "image",
        href: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=640&h=360&fit=crop&auto=format&q=60",
        fetchpriority: "high",
      },
    ],
  }),
  component: BlogPage,
});
