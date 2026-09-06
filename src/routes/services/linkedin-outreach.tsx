import React from "react";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

const LinkedInOutreachPage = lazyRouteComponent(() => import("@/pages/LinkedInOutreachPage"));

export const Route = createFileRoute("/services/linkedin-outreach")({
  head: () => ({
    meta: [
      { title: "LinkedIn Outreach | SamysAI" },
      { name: "description", content: "Automated LinkedIn outreach that books qualified meetings." },
      { property: "og:title", content: "LinkedIn Outreach | SamysAI" },
      { property: "og:description", content: "Automated LinkedIn outreach that books qualified meetings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LinkedInOutreachPage,
});
