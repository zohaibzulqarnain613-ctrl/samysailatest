import { createFileRoute } from "@tanstack/react-router";
import AIChatbotsBlogPost from "@/pages/blog/AIChatbotsBlogPost";

export const Route = createFileRoute("/blog/ai-chatbots")({
  head: () => ({
    meta: [
      { title: "AI Chatbots for Business: Implementation & Customer Support Guide" },
      { name: "description", content: "A practical guide to implementing AI chatbots for business. Learn about customer support automation, implementation strategies, and conversational AI systems." },
      { property: "og:title", content: "AI Chatbots for Business: Implementation & Customer Support Guide" },
      { property: "og:description", content: "A practical guide to implementing AI chatbots for business. Learn about customer support automation and implementation strategies." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://samysai.com/blog/ai-chatbots" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/blog/ai-chatbots" }
    ],
  }),
  component: AIChatbotsBlogPost,
});
