/**
 * Scrolls to a section reliably, even while the page is still growing
 * (lazy images, deferred sections). Re-corrects the position until the
 * target actually sits under the header.
 */
export function scrollToSection(targetId: string, offset = 80) {
  if (typeof window === "undefined") return;

  let attempts = 0;
  const maxAttempts = 30;

  const step = () => {
    const element = document.getElementById(targetId);
    if (!element) {
      if (attempts++ < maxAttempts) setTimeout(step, 100);
      return;
    }

    const delta = element.getBoundingClientRect().top - offset;

    if (Math.abs(delta) < 4 || attempts >= maxAttempts) return;

    window.scrollTo({
      top: window.scrollY + delta,
      behavior: attempts === 0 ? "smooth" : "auto",
    });

    attempts++;
    setTimeout(step, attempts === 1 ? 700 : 120);
  };

  requestAnimationFrame(step);
}
