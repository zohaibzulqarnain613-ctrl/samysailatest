import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
const ColdEmailDashboardPage = lazyRouteComponent(() => import("@/pages/ColdEmailDashboardPage"));

export const Route = createFileRoute("/services/cold-email-dashboard")({
  head: () => ({
    meta: [
      { title: "Cold Email Dashboard for Outreach | Deliverability & Campaign Management | SamysAI" },
      { name: "description", content: "Manage cold email campaigns with centralized outreach infrastructure, deliverability monitoring, follow-up automation, analytics, and CRM integrations." },
      { property: "og:title", content: "Cold Email Dashboard for Outreach | Deliverability & Campaign Management | SamysAI" },
      { property: "og:description", content: "Manage cold email campaigns with centralized outreach infrastructure, deliverability monitoring, follow-up automation, analytics, and CRM integrations." },
      { property: "og:url", content: "https://samysai.com/services/cold-email-dashboard" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cold Email Dashboard for Outreach | Deliverability & Campaign Management | SamysAI" },
      { name: "twitter:description", content: "Manage cold email campaigns with centralized outreach infrastructure, deliverability monitoring, follow-up automation, analytics, and CRM integrations." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/services/cold-email-dashboard" },
    ],
  }),
  component: ColdEmailDashboardPage,
});
