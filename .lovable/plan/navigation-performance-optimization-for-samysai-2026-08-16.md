# Navigation Performance Optimization for SamysAI

Optimize the SamysAI website so navigation between pages feels significantly faster and more responsive, especially when users click links from the navbar and service dropdown.

The primary goal is to reduce the amount of JavaScript and heavy assets that must load before a new page becomes interactive.

IMPORTANT:

Do NOT redesign the website.

Do NOT change the existing visual design, animations, typography, spacing, colors, Spline scenes, parallax effects, navbar design, service cards, or page layouts.

This is a PERFORMANCE optimization task only.

Production domain:

[https://samysai.com](https://samysai.com)

## 1. Diagnose Before Changing

First inspect the current routing and bundle structure.

Identify:

- Which routes load large JavaScript bundles

- Which components are imported globally

- Which pages load heavy dependencies unnecessarily

- Whether Spline, chatbot, animation libraries, or other large dependencies are blocking route transitions

- Whether all pages are being bundled into the initial JavaScript payload

- Whether navigation links are already using TanStack Router preloading

- Whether route transitions are waiting for unnecessary data or components

Do not make assumptions. Optimize based on the actual implementation.

## 2. Route-Level Code Splitting

Implement proper route-level code splitting using the existing TanStack Router architecture.

Each major page should load its page-specific JavaScript only when that route is needed.

Prioritize splitting:

- About Us

- Blog

- Blog articles

- AI Phone Callers

- AI Chatbots

- Web Development

- App Development

- Cold Email Dashboards

- Content Creation

- Contact-related content

Keep shared components in the shared bundle only when they are genuinely used across multiple routes.

Do not duplicate large dependencies across chunks.

## 3. Make Navbar Navigation Feel Instant

Optimize the existing navbar and service dropdown navigation.

Use TanStack Router's supported route preloading behavior where appropriate.

For important navigation links, preload on user intent such as hover or pointer interaction.

Example:

<Link to="/about" preload="intent">

Apply this carefully to:

- Home

- About Us

- Blog

- AI Phone Callers

- AI Chatbots

- Web Development

- App Development

- Cold Email Dashboards

- Content Creation

The objective is:

User hovers → next route begins loading

User clicks → page can render immediately

Do not preload every route immediately on initial page load.

## 4. Optimize Heavy Global Components

Inspect all globally mounted components.

Particular attention should be given to:

- Chatbot

- Spline 3D scenes

- Particle/background effects

- Animation libraries

- Analytics

- Third-party scripts

- Large icon libraries

- Any globally imported service dependencies

If a component is not required for the initial page interaction, defer its initialization.

### Chatbot

The chatbot must NOT block:

- Initial page rendering

- Navbar interaction

- Route transitions

- Main content rendering

Load or initialize the chatbot after the primary page content becomes interactive.

Do not remove the chatbot.

Do not change its visual appearance or functionality.

### Spline

Spline scenes must remain visually identical.

Ensure Spline-related code and assets are not unnecessarily blocking navigation to pages that do not require the Spline scene.

If Spline is only required on specific pages, load it only on those pages.

Do not remove, replace, redesign, or simplify the existing Spline experience.

## 5. Images and Assets

Audit image loading across the website.

Use:

- lazy loading for below-the-fold images

- appropriate dimensions

- modern image formats where already supported

- proper responsive image sizing

- eager/high priority loading only for genuinely critical above-the-fold images

Do not lazy-load the main visual asset if doing so causes visible hero loading delays.

The goal is to reduce unnecessary network requests without creating visible flashes or layout shifts.

## 6. Avoid Unnecessary Loading Screens

Do NOT introduce large loading screens between routes.

The website should continue to feel like the existing premium experience.

If a loading state is technically necessary during the first visit to a route:

- Keep it minimal

- Preserve the existing page background and visual language

- Avoid a full-screen spinner

- Avoid noticeable layout shifts

- Do not make navigation feel slower than before

Where possible, preload the route on intent so the loading state is rarely visible.

## 7. Preserve Existing Design

This is extremely important.

Do not modify:

- Navbar appearance

- Navbar animation

- Dropdown behavior

- Typography

- Font treatment

- Colors

- Spacing

- Border styles

- Buttons

- Cards

- Parallax effects

- Spline scenes

- 3D elements

- Page transitions

- Existing animations

- Mobile navigation design

- Chatbot design

Only optimize how assets and code are loaded.

## 8. Mobile Navigation

Pay special attention to mobile.

The mobile navbar must remain fully functional and responsive.

Optimize route loading without:

- delaying the menu opening

- delaying dropdown interaction

- causing horizontal overflow

- changing the mobile navigation design

- creating visible layout shifts

## 9. Prevent Performance Regressions

Do not blindly lazy-load components.

A component should remain eagerly loaded when:

- it is required immediately on the current route

- lazy loading would create a noticeable delay

- it is small enough that splitting provides no meaningful benefit

The goal is not maximum code splitting.

The goal is the best real-world navigation experience.

## 10. Verify the Actual Result

After implementation, test navigation between:

Home → About Us

Home → Blog

Home → AI Phone Callers

Home → AI Chatbots

Home → Web Development

Home → App Development

Home → Cold Email Dashboards

Home → Content Creation

Also test:

Blog → individual article

Service → related blog

Service → another service

Test both:

- first visit to the route

- repeated navigation between routes

Test on:

- desktop

- mobile

- slower network conditions where possible

## 11. Performance Measurements

Before and after optimization, compare:

- Initial JavaScript bundle size

- Individual route chunk sizes

- Number of JavaScript requests

- Initial page load

- Time to Interactive

- Largest Contentful Paint

- Cumulative Layout Shift

- Interaction to Next Paint

- Route transition time

Do not claim a specific percentage improvement unless it is actually measured.

## 12. Final Acceptance Criteria

The implementation is successful only if:

1. Navbar clicks feel noticeably faster.

2. Important routes are code-split.

3. Route chunks are loaded only when necessary.

4. Navbar hover intent can preload important routes.

5. Chatbot does not block navigation.

6. Spline does not block unrelated routes.

7. Mobile navigation remains responsive.

8. No visual redesign occurs.

9. No existing animations or parallax effects are removed.

10. No broken routes or console errors are introduced.

11. Production build succeeds.

12. SEO implementation already completed on the site remains intact.

Before finishing, provide a concise performance report showing:

- What was changed

- Which routes were code-split

- Which global components were deferred

- Whether route preloading was implemented

- Before/after bundle information

- Any remaining performance bottlenecks

Do not modify anything outside the scope of navigation and loading performance.