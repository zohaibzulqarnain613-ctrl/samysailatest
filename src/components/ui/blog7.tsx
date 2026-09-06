import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts = [
    {
      id: "post-1",
      title: "Getting Started with shadcn/ui Components",
      summary:
        "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
  ],
}: Blog7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        {(tagline || heading || description) && (
          <div className="text-center">
            {tagline && (
              <Badge variant="secondary" className="mb-6 bg-white/10 text-blue-300 border-white/20">
                {tagline}
              </Badge>
            )}
            {heading && (
              <h2 className="mb-3 text-pretty text-3xl font-bold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl text-white tracking-tight drop-shadow-2xl">
                {heading}
              </h2>
            )}
            {description && (
              <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
                {description}
              </p>
            )}
            {(buttonText && buttonUrl) && (
              <Button variant="link" className="w-full sm:w-auto" asChild>
                <Link to={buttonUrl}>
                  {buttonText}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            )}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="aspect-[16/9] w-full">
                <Link
                  to={post.url}
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={`${post.title} - ${post.label} guide by SamysAI`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <Link to={post.url}>
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Link
                  to={post.url}
                  className="flex items-center text-foreground hover:underline"
                >
                  Read the full article
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
