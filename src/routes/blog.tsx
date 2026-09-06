import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | SamysAI" },
      { name: "description", content: "Insights on AI automation, outreach and growth from SamysAI." },
      { property: "og:title", content: "Blog | SamysAI" },
      { property: "og:description", content: "Insights on AI automation, outreach and growth from SamysAI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Outlet />,
});
