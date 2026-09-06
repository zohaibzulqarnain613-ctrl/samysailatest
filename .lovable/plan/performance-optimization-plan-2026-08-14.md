# Performance Optimization Plan

Implement measurable performance improvements across the SamysAI website while maintaining existing design and functionality.

## Audit Findings
- **Images:** Service accordion and team members use high-res Unsplash/Pexels URLs without sizing or lazy-loading optimizations.
- **JavaScript:** `framer-motion`, `three.js`, and Spline are heavy and loaded upfront.
- **Components:** Several heavy sections (Testimonials with many images, FAQ, DottedSurface) render immediately.
- **Rendering:** `ResponsiveVaporizeText` and `TypewriterEffect` use frequent state updates and `useEffect`.
- **Head:** No resource preloading or optimization hints.

## Proposed Changes

### 1. Image Optimization & Lazy Loading
- Update `AccordionItem` and `CardFlip` to use `loading="lazy"` (except for first accordion item).
- Add `sizes` attributes to responsive images.
- Use `decoding="async"` for all non-critical images.
- Implement a `SafeImage` component or use `<img>` with better defaults.

### 2. Component Code Splitting
- Dynamically import heavy sections using `React.lazy` and `Suspense`:
    - `CaseStudiesSection`
    - `TestimonialsSection`
    - `FAQSection`
    - `ContactFooter` (below the fold)
- Wrap `DottedSurface` (Three.js) in `Suspense` and load only on mount.

### 3. Animation & State Optimization
- Optimize `TypewriterEffect` to reduce re-renders.
- Use `will-change: transform` on animated elements to trigger GPU acceleration.
- Throttling resize listeners in `ResponsiveVaporizeText`.

### 4. Critical Path Optimization
- Preload the Spline runtime (already lazy-loaded but critical for hero visual).
- Eager load the first service accordion image as LCP candidate.

### 5. Head Metadata & Resource Hints
- Add `preconnect` for Unsplash and Google Fonts (if used).
- Add `fetchpriority="high"` to the LCP image.

## Technical Details
- **Lazy Loading:** `const TestimonialsSection = lazy(() => import('./TestimonialsSection'))`
- **Image Performance:** Use `srcset` for different resolutions where possible.
- **GPU Acceleration:** Add CSS utility classes for `transform-gpu`.
- **Bundle Analysis:** Monitor `package.json` for unused deps (none found so far, but will double-check `date-fns` usage).
