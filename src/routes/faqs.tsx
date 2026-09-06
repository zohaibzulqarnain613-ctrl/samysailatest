import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const FAQsPage = lazyRouteComponent(() => import("@/pages/FAQsPage"));

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | SamysAI" },
      { name: "description", content: "Answers to common questions about SamysAI automation services." },
      { property: "og:title", content: "FAQs | SamysAI" },
      { property: "og:description", content: "Answers to common questions about SamysAI automation services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FAQsPage,
});
