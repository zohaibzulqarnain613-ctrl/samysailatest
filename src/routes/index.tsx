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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
