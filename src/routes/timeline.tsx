import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const TimelinePage = lazyRouteComponent(() => import("@/pages/TimelinePage"));

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Our Timeline | SamysAI" },
      { name: "description", content: "The SamysAI journey: milestones in AI automation." },
      { property: "og:title", content: "Our Timeline | SamysAI" },
      { property: "og:description", content: "The SamysAI journey: milestones in AI automation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TimelinePage,
});
