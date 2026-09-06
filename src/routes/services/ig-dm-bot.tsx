import React from "react";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

const IGDMBotPage = lazyRouteComponent(() => import("@/pages/IGDMBotPage"));

export const Route = createFileRoute("/services/ig-dm-bot")({
  head: () => ({
    meta: [
      { title: "Instagram DM Bot | SamysAI" },
      { name: "description", content: "Automate Instagram DMs to capture and nurture leads at scale." },
      { property: "og:title", content: "Instagram DM Bot | SamysAI" },
      { property: "og:description", content: "Automate Instagram DMs to capture and nurture leads at scale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IGDMBotPage,
});
