/**
 * Appearance (light / dark) support.
 *
 * HIG — Dark Mode: "Support both light and dark appearances." The default here
 * is Auto, which follows the system setting; an explicit choice is remembered
 * and wins over the system. Auto is a real option rather than an implicit
 * default, so a reader who has overridden it can get back.
 *
 * The switch is done by setting `data-appearance` on <html>, which flips the
 * semantic token block in tokens.css. Nothing else in the app needs to know.
 */

export type Appearance = "auto" | "light" | "dark";

export const APPEARANCE_STORAGE_KEY = "appearance";

export const appearanceOptions: readonly Appearance[] = ["auto", "light", "dark"];

export function isAppearance(value: unknown): value is Appearance {
  return value === "auto" || value === "light" || value === "dark";
}

/**
 * Inline script injected before first paint.
 *
 * Without this, a reader who chose Light would see a dark flash on every
 * navigation while React hydrates. It is deliberately tiny, wrapped in
 * try/catch (localStorage throws in some privacy modes), and only ever sets or
 * removes one attribute.
 */
export const appearanceScript = `
(function () {
  try {
    var stored = localStorage.getItem("${APPEARANCE_STORAGE_KEY}");
    var root = document.documentElement;
    if (stored === "light" || stored === "dark") {
      root.setAttribute("data-appearance", stored);
    } else {
      root.removeAttribute("data-appearance");
    }
  } catch (e) {}
})();
`.trim();

/** Applies an appearance choice to the document and persists it. */
export function applyAppearance(next: Appearance) {
  const root = document.documentElement;

  if (next === "auto") {
    root.removeAttribute("data-appearance");
  } else {
    root.setAttribute("data-appearance", next);
  }

  try {
    localStorage.setItem(APPEARANCE_STORAGE_KEY, next);
  } catch {
    // Storage unavailable (private mode, blocked cookies). The choice still
    // applies for this page — it just will not be remembered.
  }

  emit();
}

/** Reads the stored choice, defaulting to Auto. */
export function readAppearance(): Appearance {
  try {
    const stored = localStorage.getItem(APPEARANCE_STORAGE_KEY);
    return isAppearance(stored) ? stored : "auto";
  } catch {
    return "auto";
  }
}

/**
 * The appearance choice is external state — it lives in localStorage and on the
 * <html> element, and it can change in another tab. That makes it a job for
 * useSyncExternalStore rather than useState plus an effect: the store is the
 * single source of truth, hydration uses the server snapshot ("auto") so the
 * markup matches, and cross-tab changes arrive through the same subscription.
 */
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

export function subscribeAppearance(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  // `storage` fires in *other* tabs; emit() covers this one.
  window.addEventListener("storage", onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

/** Server/hydration snapshot: Auto, matching what the markup renders. */
export function serverAppearance(): Appearance {
  return "auto";
}
