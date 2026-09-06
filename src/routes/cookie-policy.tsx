import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const CookiePolicyPage = lazyRouteComponent(() => import("@/pages/CookiePolicyPage"));

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | SamysAI" },
      { name: "description", content: "How SamysAI uses cookies and similar technologies." },
      { property: "og:title", content: "Cookie Policy | SamysAI" },
      { property: "og:description", content: "How SamysAI uses cookies and similar technologies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CookiePolicyPage,
});
