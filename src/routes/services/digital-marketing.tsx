import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const DigitalMarketingPage = lazyRouteComponent(() => import("@/pages/DigitalMarketingPage"));

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing for Business | SamysAI" },
      { name: "description", content: "Explore digital marketing services for SEO, content, social media, email, paid campaigns, analytics, and business growth." },
      { property: "og:title", content: "Digital Marketing for Business | SamysAI" },
      { property: "og:description", content: "Explore digital marketing services for SEO, content, social media, email, paid campaigns, analytics, and business growth." },
      { property: "og:url", content: "https://samysai.com/services/digital-marketing" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SamysAI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Digital Marketing for Business | SamysAI" },
      { name: "twitter:description", content: "Explore digital marketing services for SEO, content, social media, email, paid campaigns, analytics, and business growth." },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/services/digital-marketing" }
    ]
  }),
  component: DigitalMarketingPage,
});
