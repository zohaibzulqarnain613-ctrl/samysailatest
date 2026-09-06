import { createFileRoute } from "@tanstack/react-router";
import AppDevelopmentBlogPost from "@/pages/blog/AppDevelopmentBlogPost";

export const Route = createFileRoute("/blog/app-development")({
  head: () => ({
    meta: [
      { title: "Custom App Development for Business: Scalable Mobile Solutions" },
      { name: "description", content: "Learn how to build scalable mobile applications and custom app solutions for business. A guide to digital products, architecture, and cross-platform development." },
      { property: "og:title", content: "Custom App Development for Business: Scalable Mobile Solutions" },
      { property: "og:description", content: "Learn how to build scalable mobile applications and custom app solutions for business. A guide to digital products and architecture." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://samysai.com/blog/app-development" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/blog/app-development" }
    ],
  }),
  component: AppDevelopmentBlogPost,
});
