import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const AIPhoneCallersPage = lazyRouteComponent(() => import("@/pages/AIPhoneCallersPage"));

export const Route = createFileRoute("/services/ai-phone-callers")({
  head: () => ({
    meta: [
      { title: "AI Phone Callers for Business | SamysAI" },
      { name: "description", content: "Explore AI phone callers for business communication, lead qualification, appointment scheduling, routine calls, and voice automation." },
      { property: "og:title", content: "AI Phone Callers for Business | SamysAI" },
      { property: "og:description", content: "Explore AI phone callers for business communication, lead qualification, appointment scheduling, routine calls, and voice automation." },
      { property: "og:url", content: "https://samysai.com/services/ai-phone-callers" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SamysAI" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2340&auto=format&fit=crop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Phone Callers for Business | SamysAI" },
      { name: "twitter:description", content: "Explore AI phone callers for business communication, lead qualification, appointment scheduling, routine calls, and voice automation." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2340&auto=format&fit=crop" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/services/ai-phone-callers" },
    ],
  }),
  component: AIPhoneCallersPage,
});
