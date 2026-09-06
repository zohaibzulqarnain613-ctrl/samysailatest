import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const CaseStudiesPage = lazyRouteComponent(() => import("@/pages/CaseStudiesPage"));

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | SamysAI" },
      { name: "description", content: "Real results from AI automation projects delivered by SamysAI." },
      { property: "og:title", content: "Case Studies | SamysAI" },
      { property: "og:description", content: "Real results from AI automation projects delivered by SamysAI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});
