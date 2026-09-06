import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

const TermsOfServicePage = lazyRouteComponent(() => import("@/pages/TermsOfServicePage"));

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | SamysAI" },
      { name: "description", content: "Review the SamysAI Terms of Service governing access to our website, digital services, AI solutions, development services, and business engagements." },
      { property: "og:title", content: "Terms of Service | SamysAI" },
      { property: "og:description", content: "Review the SamysAI Terms of Service governing access to our website, digital services, AI solutions, development services, and business engagements." },
      { property: "og:url", content: "https://samysai.com/terms-of-service" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/terms-of-service" }
    ]
  }),
  component: TermsOfServicePage,
});
