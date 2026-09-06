# Performance Optimization Plan (P0 & P1)

This plan implements high-priority performance optimizations (P0 and P1) to reduce page weight and main-thread blocking without changing the visual design.

## User Review Required

> [!IMPORTANT]
> **Image Optimization Approach**: We will optimize image delivery based on the actual image source. Unsplash images will use Unsplash's dynamic image parameters to request the appropriate resolution and format for each device. Pexels and local assets will be optimized using their respective responsive delivery methods. Images will maintain their existing appearance, aspect ratio, and visual quality. No design, layout, or visual elements will be changed.

## Proposed Changes

### P0: Responsive Image Optimization
Optimize approximately 12MB of high-resolution imagery by implementing `srcSet` and resolution capping.

- **Global Image Utility**: Create `src/utils/image-optimization.ts` to generate optimized URLs for Unsplash and Pexels with width, quality, and WebP parameters.
- **Hero Accordion**: Update `LandingAccordionItem` to use the new utility, providing 400px/800px/1200px variants based on screen size.
- **Team Section**: Update `CardFlip` in `AboutUsPage.tsx` to load portraits capped at 600px width (retina 2x).
- **Service Pages**: Update `ServiceParallaxContent` in `src/components/ui/text-parallax-content-scroll.tsx` to use responsive backgrounds.
- **LCP Preservation**: Ensure the first visible hero image is loaded with `fetchpriority="high"` and `loading="eager"`.

### P1: Spline Viewport-Based Loading
Optimize the 4MB Spline runtime by deferring initialization until the user is near the scene.

- **Intersection Trigger**: Replace the timer-based loading in `SplineScene.tsx` with a robust `IntersectionObserver`.
- **Pre-emptive Loading**: Use a `rootMargin` of `400px` to begin initialization before the user scrolls the scene into view.
- **Placeholder Sync**: Match the existing background blur/gradient during loading to eliminate Layout Shift (CLS).

## Technical Details

- **Target Resolutions**:
  - Mobile: 400px - 600px
  - Tablet: 768px - 900px
  - Desktop: 1200px - 1440px
- **Format**: Force `format=webp` for all external Unsplash/Pexels requests.
- **Safety**: Fallback to original URLs if optimization parameters are unsupported.

## Verification Plan

- **Network Audit**: Verify mobile device downloads do not exceed 800px width for standard assets.
- **Metric Tracking**: Run a production build and compare Total Transferred Bytes.
- **Visual Check**: Cross-browser verification (Chrome/Safari/Mobile) to ensure zero design regressions.
