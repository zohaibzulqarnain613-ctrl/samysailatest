import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const ContentCreationPage = lazyRouteComponent(() => import("@/pages/ContentCreationPage"));

export const Route = createFileRoute("/services/content-creation")({
  head: () => ({
    meta: [
      { title: "AI Content Creation for Business | SamysAI" },
      { name: "description", content: "AI content creation for businesses, including blogs, social media, marketing content, and brand workflows designed for consistency and scale." },
      { property: "og:title", content: "AI Content Creation for Business | SamysAI" },
      { property: "og:description", content: "AI content creation for businesses, including blogs, social media, marketing content, and brand workflows designed for consistency and scale." },
      { property: "og:url", content: "https://samysai.com/services/content-creation" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SamysAI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Content Creation for Business | SamysAI" },
      { name: "twitter:description", content: "AI content creation for businesses, including blogs, social media, marketing content, and brand workflows designed for consistency and scale." },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/services/content-creation" }
    ]
  }),
  component: ContentCreationPage,
});
