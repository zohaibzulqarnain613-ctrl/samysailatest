# Performance Optimization Plan - SamysAI

Optimize the website's loading speed and runtime performance to achieve near-instantaneous feel while preserving all visual designs, 3D scenes, and animations.

## User Review Required

> [!IMPORTANT]
> The optimization involves aggressive resource prioritization. Heavy Spline 3D scenes and the AI chatbot will be loaded only when the main page content is interactive.

- **3D Asset Loading**: Spline scenes will show a high-quality placeholder until the main thread is idle.
- **Font Strategy**: Switching to system fonts for initial render to avoid layout shifts (CLS) while remote fonts load.
- **Chatbot**: Will be deferred until 2 seconds after page load or user interaction to prioritize LCP.

## Technical Details

### 1. Resource Prioritization & Critical Path
- **Preload Critical Assets**: Add `<link rel="preload">` for the LCP image in the hero accordion and primary fonts.
- **Resource Hints**: Implement `dns-prefetch` and `preconnect` for Unsplash and Pexels in `src/routes/__root.tsx`.
- **System Font Stack**: Update `src/styles.css` to use a system font fallback (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`) to prevent FOIT (Flash of Invisible Text).

### 2. Spline 3D & Heavy Asset Optimization
- **Dynamic Imports**: Ensure `@splinetool/react-spline` is only imported when `shouldLoad` is true in `SplineScene.tsx`.
- **RequestIdleCallback**: Refine the loading logic in `SplineScene.tsx` to use `requestIdleCallback` more aggressively.
- **Throttling**: Implement a scroll-based activation for Spline scenes that aren't in the initial viewport.

### 3. Image & Media Optimization
- **Next-Gen Formats**: Add `&format=webp` to all Unsplash/Pexels URLs to reduce payload size.
- **Priority Hints**: Add `fetchpriority="high"` to the hero image in `interactive-image-accordion.tsx`.
- **Blur-up Placeholders**: Implement CSS-based shimmer/gradient placeholders for all lazy-loaded images.

### 4. Code Splitting & Bundle Size
- **Vite Chunking Strategy**: Create a `vite.config.ts` modification to split large libraries (Framer Motion, Lucide) into separate chunks.
- **Component Lazy Loading**: Audit all routes to ensure heavy sections (Testimonials, FAQ) are correctly suspended.

### 5. Navigation & Runtime Performance
- **Preloading Intent**: Refine `Navbar.tsx` preloading to use `intent` only on hover to save bandwidth on mobile.
- **Animation Performance**: Convert remaining Framer Motion `layout` props to CSS transitions where possible to reduce JS main thread work.

## Implementation Steps

1. **Phase 1: Critical Path (LCP/FCP)**
   - Update `__root.tsx` with resource hints and preloads.
   - Standardize font fallback in `styles.css`.
   - Add `fetchpriority` to hero images.

2. **Phase 2: Heavy Assets (Spline/Chatbot)**
   - Refactor `SplineScene.tsx` for cleaner lazy loading.
   - Update `HomePage.tsx` to defer `ParticleBackground` further.
   - Defer `ChatBot` initialization in `__root.tsx`.

3. **Phase 3: Asset Optimization**
   - Bulk update image URLs with optimization parameters.
   - Implement Vite manual chunks in `vite.config.ts`.

4. **Phase 4: Verification**
   - Run Playwright performance suite to compare with `perf_before.json`.
   - Verify no visual regressions or "flashes".
