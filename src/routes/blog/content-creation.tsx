import { createFileRoute } from "@tanstack/react-router";
import ContentCreationBlogPost from "@/pages/blog/ContentCreationBlogPost";

export const Route = createFileRoute("/blog/content-creation")({
  head: () => ({
    meta: [
      { title: "AI Content Creation for Business: Systems & Workflows Guide" },
      { name: "description", content: "Build efficient AI content workflows for your business. Learn how AI-assisted content creation and strategy can scale your digital presence effectively." },
      { property: "og:title", content: "AI Content Creation for Business: Systems & Workflows Guide" },
      { property: "og:description", content: "Build efficient AI content workflows for your business. Learn how AI-assisted content creation and strategy can scale your digital presence." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://samysai.com/blog/content-creation" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/blog/content-creation" }
    ],
  }),
  component: ContentCreationBlogPost,
});
