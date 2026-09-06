# SEO Optimization Plan

Perform a complete technical and on-page SEO optimization for the SamysAI blog system to improve search visibility and crawlability.

## User Review Required

> [!IMPORTANT]
> I will use `https://samysai.com` as the production domain for canonical URLs and sitemaps. Please confirm if this is the correct production domain.

## Proposed Changes

### 1. Technical SEO Configuration
- Create `public/sitemap.xml` with all blog and service routes.
- Update `public/robots.txt` to include the sitemap URL.
- Implement a global `head` configuration strategy in `src/routes/__root.tsx`.

### 2. Blog Hub Optimization (`/blog`)
- Update `src/routes/blog/index.tsx` with unique SEO metadata.
- Refine `src/pages/BlogPage.tsx` and `src/components/ui/blog7.tsx` to ensure H1 presence and semantic structure.
- Improve article cards in `blog7.tsx` for accessibility and SEO (better alt text, internal links).

### 3. Article-Level Optimization
- **Metadata**: Add unique SEO titles, meta descriptions, and Open Graph tags to all blog routes.
- **Canonical Tags**: Add `<link rel="canonical" href="..." />` to every article, pointing to the production URL.
- **Structured Data**: Enhance existing JSON-LD in `src/pages/blog/*.tsx` with `BreadcrumbList` and updated `BlogPosting` details.
- **Internal Linking**: Add natural internal links between related articles and service pages (e.g., AI Phone Callers article linking to AI Phone Callers service).
- **Images**: Audit and update all blog images for descriptive alt text and lazy loading.

### 4. Search Intent Refinement
- Adjust copy in articles to naturally incorporate supporting topics (e.g., "AI voice agents" for AI Phone Callers) without keyword stuffing.
- Verify heading hierarchy (one H1, logical H2/H3) across all articles.

## Technical Details

- **Sitemap Generation**: Manual creation of `sitemap.xml` as a static asset.
- **TanStack Router `head`**: Utilizing the `head()` option in `createFileRoute` for precise metadata control.
- **Canonical Implementation**: Injecting `<link rel="canonical">` via the `head()` function in routes.
- **JSON-LD**: Keeping structured data inside components for maintainability, ensuring `datePublished` and `dateModified` are present.
