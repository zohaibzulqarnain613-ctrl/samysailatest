import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const HomePage = lazyRouteComponent(() => import("@/components/HomePage"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SamysAI | AI Automation That Scales Your Business" },
      {
        name: "description",
        content:
          "SamysAI builds AI phone callers, chatbots, outreach and web systems that automate growth for modern businesses.",
      },
      { property: "og:title", content: "SamysAI | AI Automation That Scales Your Business" },
      {
        property: "og:description",
        content:
          "AI phone callers, chatbots, cold email and custom builds that automate your growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://samysailatest.lovable.app/samysai-social-card.jpg" },
      { property: "og:image:alt", content: "SamysAI — AI Automation That Scales Your Business" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://samysailatest.lovable.app/samysai-social-card.jpg" },
      { name: "twitter:image:alt", content: "SamysAI — AI Automation That Scales Your Business" },
    ],
    links: [
      {
        rel: "preload",
        href: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
        as: "fetch",
        crossOrigin: "anonymous",
      },
    ],
  }),

  component: HomePage,
});
