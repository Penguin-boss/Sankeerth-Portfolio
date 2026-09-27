"use client";

import { useRef, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import {
  applyAppearance,
  readAppearance,
  serverAppearance,
  subscribeAppearance,
  type Appearance,
} from "@/lib/appearance";

const OPTIONS: ReadonlyArray<{
  value: Appearance;
  label: string;
  Icon: typeof Sun;
}> = [
  { value: "auto", label: "Match system", Icon: Monitor },
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
];

/**
 * Auto / Light / Dark appearance picker, exposed as an ARIA radiogroup.
 *
 * A radiogroup rather than a single toggle button, because there are three
 * states and a two-state toggle cannot express "follow the system" — which is
 * the state most readers should be in, and the one they can otherwise never get
 * back to once they have tapped a toggle.
 *
 * Arrow keys move between options and only the checked option is in the tab
 * order, matching platform radio behaviour.
 */
export default function AppearanceToggle({ compact = false }: { compact?: boolean }) {
  // The choice lives in localStorage and on <html>, so it is read through a
  // store subscription. Hydration uses the "auto" server snapshot, then React
  // reconciles to the stored value — no flash, because the inline head script
  // has already applied the attribute before first paint.
  const appearance = useSyncExternalStore(
    subscribeAppearance,
    readAppearance,
    serverAppearance,
  );

  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const move = (index: number) => {
    const clamped = (index + OPTIONS.length) % OPTIONS.length;
    applyAppearance(OPTIONS[clamped].value);
    refs.current[clamped]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      move(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      move(index - 1);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Appearance"
      className="appearance-toggle"
      data-compact={compact ? "true" : undefined}
    >
      {OPTIONS.map((option, index) => {
        const checked = appearance === option.value;
        return (
          <button
            key={option.value}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={option.label}
            tabIndex={checked ? 0 : -1}
            onClick={() => applyAppearance(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className="appearance-toggle__option"
          >
            <option.Icon aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
