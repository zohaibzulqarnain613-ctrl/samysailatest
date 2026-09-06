# Plan - Optimize GSAP Animation Performance for Kinetic Menu

Optimize the `SterlingGateKineticNavigation` component to ensure smooth 60fps animations on low-end devices and under slow network conditions.

## Proposed Changes

### 1. GSAP Performance Optimizations
- **Enable `force3D: true`**: Ensure all transforming elements (links, backdrop layers, shapes) are GPU-accelerated by default to avoid layout recalculations during animation.
- **Use `will-change` CSS property**: Hint the browser about upcoming transformations on menu links and background panels to prepare the GPU.
- **Debounce Hover Effects**: Add a small delay/throttle to the background shape hover triggers to prevent rapid-fire layout shifts on fast mouse movements.
- **Reduce Shape Complexity on Mobile**: Detect mobile viewports and simplify the "ambient background shapes" to reduce the number of DOM nodes being animated simultaneously.
- **Optimize Z-index and Stacking Contexts**: Explicitly manage stacking contexts for the menu to avoid unnecessary paint invalidations.

### 2. Implementation Strategy
- **File**: `src/components/ui/sterling-gate-kinetic-navigation.tsx`
    - Update `gsap.fromTo` and `gsap.to` calls to include `force3D: true`.
    - Apply `will-change: transform, opacity` to key animated classes in the `<style>` block.
    - Implement a `useMediaQuery` hook or simple `window.innerWidth` check to conditionally render or animate lighter versions of the background shapes.
    - Batch DOM reads in `useEffect` to avoid layout thrashing.

### 3. Verification
- Use `requestAnimationFrame` based FPS counter in the preview to verify 60fps target.
- Simulate 3x-6x CPU throttling in Chrome DevTools to ensure no visible stutter.

## Technical Details

- **GPU Acceleration**: Forcing 3D transforms ensures the browser promotes the element to its own compositor layer.
- **Layout Thrashing**: By using `gsap.set` for initial states and avoiding direct style manipulations in high-frequency events, we minimize reflows.
- **Stagger Optimization**: Reducing the number of staggered items or increasing stagger time on mobile to lower peak CPU usage.

## User Review Required

> [!IMPORTANT]
> These changes are strictly performance-oriented and will not change the visual design of the menu. The animations will simply feel "lighter" and more responsive on older hardware.