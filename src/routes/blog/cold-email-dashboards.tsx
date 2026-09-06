import { createFileRoute } from "@tanstack/react-router";
import ColdEmailDashboardsBlogPost from "@/pages/blog/ColdEmailDashboardsBlogPost";

export const Route = createFileRoute("/blog/cold-email-dashboards")({
  head: () => ({
    meta: [
      { title: "Cold Email Dashboards: Outreach Infrastructure & Deliverability" },
      { name: "description", content: "Learn how cold email dashboards manage outreach infrastructure and deliverability. Optimize your email automation systems for better business growth." },
      { property: "og:title", content: "Cold Email Dashboards: Outreach Infrastructure & Deliverability" },
      { property: "og:description", content: "Learn how cold email dashboards manage outreach infrastructure and deliverability. Optimize your email automation systems." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://samysai.com/blog/cold-email-dashboards" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/blog/cold-email-dashboards" }
    ],
  }),
  component: ColdEmailDashboardsBlogPost,
});
