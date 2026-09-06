import { createFileRoute } from "@tanstack/react-router";
import AIPhoneCallersBlogPost from "@/pages/blog/AIPhoneCallersBlogPost";

export const Route = createFileRoute("/blog/ai-phone-callers")({
  head: () => ({
    meta: [
      { title: "AI Phone Callers for Business: A Practical Guide to Voice Automation" },
      { name: "description", content: "Learn how AI phone callers and voice agents work. Discover how business automation systems can handle high-volume calls and appointment scheduling efficiently." },
      { property: "og:title", content: "AI Phone Callers for Business: A Practical Guide to Voice Automation" },
      { property: "og:description", content: "Learn how AI phone callers and voice agents work. Discover how business automation systems can handle high-volume calls and appointment scheduling." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://samysai.com/blog/ai-phone-callers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samysai.com/blog/ai-phone-callers" }
    ],
  }),
  component: AIPhoneCallersBlogPost,
});
