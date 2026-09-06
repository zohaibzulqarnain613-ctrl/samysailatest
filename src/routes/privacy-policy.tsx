import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

const PrivacyPolicyPage = lazyRouteComponent(() => import("@/pages/PrivacyPolicyPage"));

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SamysAI" },
      { name: "description", content: "Read the SamysAI Privacy Policy to understand how we collect, use, protect, and manage information when you use our website and services." },
      { property: "og:title", content: "Privacy Policy | SamysAI" },
      { property: "og:description", content: "Read the SamysAI Privacy Policy to understand how we collect, use, protect, and manage information when you use our website and services." },
      { property: "og:url", content: "https://samysai.com/privacy-policy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/privacy-policy" }
    ]
  }),
  component: PrivacyPolicyPage,
});
