import { createFileRoute } from "@tanstack/react-router";
import WebDevelopmentBlogPost from "@/pages/blog/WebDevelopmentBlogPost";

export const Route = createFileRoute("/blog/web-development")({
  head: () => ({
    meta: [
      { title: "Modern Web Development for Business: Scalable Digital Systems" },
      { name: "description", content: "Learn how professional web development builds scalable digital products and business systems. Focus on performance, technical SEO, and custom integrations." },
      { property: "og:title", content: "Modern Web Development for Business: Scalable Digital Systems" },
      { property: "og:description", content: "Learn how professional web development builds scalable digital products and business systems." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://samysai.com/blog/web-development" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/blog/web-development" }
    ],
  }),
  component: WebDevelopmentBlogPost,
});
