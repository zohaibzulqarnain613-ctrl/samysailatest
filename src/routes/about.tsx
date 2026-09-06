import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const AboutUsPage = lazyRouteComponent(() => import("@/components/AboutUsPage"));

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | SamysAI" },
      { name: "description", content: "Meet the SamysAI team building AI automation that scales businesses." },
      { property: "og:title", content: "About Us | SamysAI" },
      { property: "og:description", content: "Meet the SamysAI team building AI automation that scales businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutUsPage,
});
