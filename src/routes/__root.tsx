import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, type ReactNode, Suspense, lazy, useState } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Navbar from "@/components/Navbar";

const ChatBot = lazy(() => import("@/components/ChatBot"));

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SamysAI | AI Automation Agency — AI Phone Callers, Chatbots & Growth Systems" },
      {
        name: "description",
        content:
          "SamysAI builds AI phone callers, chatbots, outreach systems, CRM automations and custom web apps that scale business growth. Book a free strategy call.",
      },
      { name: "author", content: "SamysAI" },
      { name: "keywords", content: "AI automation agency, AI phone callers, AI chatbots, cold email automation, CRM auto sync, web development, app development, digital marketing, content creation, SamysAI" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#0b1020" },
      { property: "og:title", content: "SamysAI | AI Automation Agency" },
      {
        property: "og:description",
        content:
          "AI phone callers, chatbots, outreach automations and custom software that scale your business. See verified client experiences and case studies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/hanane_benalia_image_copy.jpeg" },
      { property: "og:image:alt", content: "SamysAI client experience — Hanane Benalia" },
      { property: "og:site_name", content: "SamysAI" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SamysAI | AI Automation Agency" },
      {
        name: "twitter:description",
        content:
          "AI phone callers, chatbots, outreach automations and custom software that scale your business.",
      },
      { name: "twitter:image", content: "/images/hanane_benalia_image_copy.jpeg" },
      { name: "twitter:image:alt", content: "SamysAI client experience — Hanane Benalia" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://prod.spline.design",
        crossOrigin: "anonymous",
      },
      {
        rel: "dns-prefetch",
        href: "https://prod.spline.design",
      },
      {
        rel: "preload",
        href: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
        as: "fetch",
        crossOrigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://images.unsplash.com",
      },
      {
        rel: "dns-prefetch",
        href: "https://images.unsplash.com",
      },
      {
        rel: "preconnect",
        href: "https://images.pexels.com",
      },
      {
        rel: "dns-prefetch",
        href: "https://images.pexels.com",
      },
      {
        rel: "preload",
        href: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&format=webp",
        as: "image",
        fetchpriority: "high" as any,
      },

      {
        rel: "preload",
        href: appCss,
        as: "style",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// ScrollToTop removed to allow TanStack Router's native scrollRestoration: true to manage position memory correctly.

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>

      <div className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-x-hidden">
        <Navbar />
        <main className="w-full">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Suspense fallback={<div className="min-h-screen w-full bg-gray-950" />}>
            <Outlet />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <DeferredChatBot />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

function DeferredChatBot() {
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setShouldRender(true));
      } else {
        setShouldRender(true);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;
  return <ChatBot />;
}

