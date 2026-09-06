# Performance Optimization Plan - SamysAI

Establish a production-grade performance baseline and implement aggressive loading strategies, code architecture optimizations, and asset refinements to make the site feel "lightning fast" while preserving the premium 3D/animated design.

## User Review Required

> [!IMPORTANT]
> This optimization will be done in phases to ensure no visual regressions. I will start by measuring the current state, then implement the technical optimizations described below.

## Proposed Changes

### 1. Performance Baseline & Audit
- Create a Playwright-based measurement suite to capture FCP, LCP, CLS, TBT, and total payload size.
- Test across Desktop and Mobile (simulated) profiles.
- Generate a "Before" report to identify specific bottlenecks in Spline, Chatbot, and image loading.

### 2. JavaScript & Bundle Optimization
- Audit `package.json` for duplicate or heavy dependencies.
- Ensure route-based code splitting is strictly enforced (lazy loading all pages).
- Optimize icon imports to prevent pulling in entire libraries.
- Move non-critical side effects (analytics, chatbot initialization) to `requestIdleCallback`.

### 3. Critical Rendering Path
- Implement resource hints (`preconnect`, `dns-prefetch`, `preload`) in `src/routes/__root.tsx` for critical assets (Fonts, Hero images).
- Ensure LCP images are **not** lazy-loaded and have `fetchpriority="high"`.
- Defer heavy scripts (Spline runtime, Chatbot) until after the first paint and interaction.

### 4. 3D & Spline Optimization
- Implement a more aggressive `IntersectionObserver` strategy for Spline scenes.
- Use low-res placeholders or static covers during initial load to prevent LCP delays.
- Ensure Spline instances are properly cleaned up on route changes to prevent memory leaks.

### 5. Asset & Image Refinement
- Convert remaining large images to WebP/AVIF using `src/utils/image-optimization.ts`.
- Implement responsive `srcset` for all images to avoid over-serving resolution on mobile.
- Set explicit `width` and `height` attributes to prevent CLS.

### 6. Animation & Rendering
- Review Framer Motion usage; ensure `layout` props are used sparingly to avoid reflows.
- Use `will-change: transform, opacity` only on elements that actually need GPU acceleration.
- Ensure 60fps scrolling by debouncing expensive scroll-linked effects.

### 7. Verification & Final Report
- Re-run the measurement suite.
- Verify navigation transitions are flash-free and smooth.
- Document "After" metrics and identify any remaining design-mandated bottlenecks.

## Technical Details

- **Tools**: Playwright for auditing, TanStack Router for navigation control, Vite for bundling.
- **Metrics**: Lighthouse-equivalent metrics captured via Chrome DevTools Protocol in Playwright.
- **Constraints**: ZERO changes to the visual appearance, typography, or branding.
