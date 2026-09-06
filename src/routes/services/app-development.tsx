import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const AppDevelopmentPage = lazyRouteComponent(() => import("@/pages/AppDevelopmentPage"));

export const Route = createFileRoute("/services/app-development")({
  head: () => ({
    meta: [
      { title: "App Development for Business | Scalable Mobile Apps | SamysAI" },
      { name: "description", content: "Build scalable mobile apps for iOS and Android with secure architecture, intuitive UX, business integrations, and maintainable technology." },
      { property: "og:title", content: "App Development for Business | Scalable Mobile Apps | SamysAI" },
      { property: "og:description", content: "Build scalable mobile apps for iOS and Android with secure architecture, intuitive UX, business integrations, and maintainable technology." },
      { property: "og:url", content: "https://samysai.com/services/app-development" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "App Development for Business | Scalable Mobile Apps | SamysAI" },
      { name: "twitter:description", content: "Build scalable mobile apps for iOS and Android with secure architecture, intuitive UX, business integrations, and maintainable technology." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/services/app-development" }
    ]
  }),
  component: AppDevelopmentPage,
});
