# Plan: Fix Vercel images and contact success state

## Changes
- Replace Lovable-only image asset URLs used by the team and service cards with deployable local image files, preserving the current crops and sizing.
- Remove the contact form’s current database request so submission no longer fails when no backend is connected.
- Keep the existing form layout and show its current success confirmation immediately after valid submission.

## Verification
- Test the affected homepage service cards, About Us team images, and contact form in the browser.
- Confirm the project builds without errors and that no affected image request fails.

## Technical details
- Use static files under `public/images` for host-independent image delivery on Vercel.
- This change will not send or store inquiries; that can be connected later when the user adds their own backend.
