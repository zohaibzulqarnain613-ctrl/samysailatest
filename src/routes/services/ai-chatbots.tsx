import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const AIChatbotsPage = lazyRouteComponent(() => import("@/pages/AIChatbotsPage"));

export const Route = createFileRoute("/services/ai-chatbots")({
  head: () => ({
    meta: [
      { title: "AI Chatbots for Business | SamysAI" },
      { name: "description", content: "Explore AI chatbots for business customer support, automated conversations, lead qualification, and workflow automation. Scale your support operations effectively." },
      { property: "og:title", content: "AI Chatbots for Business | SamysAI" },
      { property: "og:description", content: "Explore AI chatbots for business customer support, automated conversations, lead qualification, and workflow automation. Scale your support operations effectively." },
      { property: "og:url", content: "https://samysai.com/services/ai-chatbots" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SamysAI" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2340&auto=format&fit=crop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Chatbots for Business | SamysAI" },
      { name: "twitter:description", content: "Explore AI chatbots for business customer support, automated conversations, lead qualification, and workflow automation. Scale your support operations effectively." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2340&auto=format&fit=crop" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/services/ai-chatbots" },
    ],
  }),
  component: AIChatbotsPage,
});
