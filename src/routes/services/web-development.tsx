import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const WebDevelopmentPage = lazyRouteComponent(() => import("@/pages/WebDevelopmentPage"));

const TITLE = "Web Development Services for Business | SamysAI";
const DESCRIPTION =
  "Explore professional web development for fast, secure, scalable business websites, custom integrations, technical SEO, and digital experiences.";
const URL = "https://samysai.com/services/web-development";
const IMAGE =
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SamysAI" },
      { property: "og:image", content: IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: WebDevelopmentPage,
});
