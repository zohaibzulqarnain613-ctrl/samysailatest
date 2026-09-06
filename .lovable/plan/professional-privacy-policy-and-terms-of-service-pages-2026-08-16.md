# Professional Privacy Policy and Terms of Service Pages

Create dedicated, SEO-optimized, and professionally drafted legal pages for SamysAI, and connect existing footer links to them.

## User Review Required

> [!IMPORTANT]
> The following sections in the legal documents require your review and specific details before final publication:
> - **Jurisdiction**: Currently set to "[INSERT GOVERNING LAW / JURISDICTION]" in the Terms of Service.
> - **Official Email**: Using `samy@samysai.info` (found in the footer) as the primary contact, but please confirm if a dedicated `legal@` or `privacy@` address is preferred.
> - **Third-Party Services**: The documents include general categories (hosting, CRM, etc.); if you use specific providers (e.g., AWS, HubSpot, Stripe) that must be named, please advise.

## Proposed Changes

### Routes and Navigation
- Create `/privacy-policy` route in `src/routes/privacy-policy.tsx`.
- Create `/terms-of-service` route in `src/routes/terms-of-service.tsx`.
- Update `src/components/ContactFooter.tsx` to link to these new routes instead of `#`.

### Content Implementation
- **Privacy Policy**: 12 comprehensive sections covering data collection, usage, cookies, security, and rights.
- **Terms of Service**: 17 sections covering service scope, AI-specific disclaimers, IP rights, and liability limits.
- **Date**: Set to August 16, 2026.

### Design and SEO
- Maintain the dark theme, glassmorphism, and typography of SamysAI.
- Add full JSON-LD schema and meta tags for SEO.
- Ensure high readability with clear hierarchy (one H1 per page).

## Technical Details
- **Architecture**: Using `@tanstack/react-router` with lazy loading via `lazyRouteComponent`.
- **Styling**: Tailwind CSS v4 with existing design tokens.
- **Performance**: Zero-flash transitions using the established `Suspense` and `defaultPreload: "intent"` pattern.
