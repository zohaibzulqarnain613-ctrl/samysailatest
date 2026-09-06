import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const BlogPage = lazyRouteComponent(() => import("@/pages/BlogPage"));

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
      { rel: "canonical", href: "https://samysai.com/blog" }
    ],
  }),
  component: BlogPage,
});
