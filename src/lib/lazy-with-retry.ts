import { lazy, type ComponentType } from 'react';

const RELOAD_FLAG = 'lovable:chunk-reloaded';

/**
 * After a new deploy, previously cached HTML can reference hashed chunks that no
 * longer exist, which makes React.lazy throw "Failed to fetch dynamically imported
 * module" and blanks the screen. Retry once, then hard-reload to pick up fresh HTML.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      sessionStorage.removeItem(RELOAD_FLAG);
      return mod;
    } catch (error) {
      // Second attempt: transient network failures usually clear here.
      try {
        return await factory();
      } catch {
        if (typeof window !== 'undefined' && !sessionStorage.getItem(RELOAD_FLAG)) {
          sessionStorage.setItem(RELOAD_FLAG, '1');
          window.location.reload();
          // Never resolves; the page is going away.
          return new Promise<{ default: T }>(() => {});
        }
        throw error;
      }
    }
  });
}
