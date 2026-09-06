import React from "react";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

const CRMAutoSyncPage = lazyRouteComponent(() => import("@/pages/CRMAutoSyncPage"));

export const Route = createFileRoute("/services/crm-auto-sync")({
  head: () => ({
    meta: [
      { title: "CRM Auto Sync | SamysAI" },
      { name: "description", content: "Keep every lead and deal synced across your CRM automatically." },
      { property: "og:title", content: "CRM Auto Sync | SamysAI" },
      { property: "og:description", content: "Keep every lead and deal synced across your CRM automatically." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CRMAutoSyncPage,
});
