"use client";

import { useRef } from "react";

export type SegmentedOption<T extends string> = {
  readonly value: T;
  readonly label: string;
  readonly count?: number;
};

type SegmentedProps<T extends string> = {
  /** Accessible name for the whole control, e.g. "Credential type". */
  label: string;
  options: readonly SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** id prefix used to wire each tab to its panel. */
  idPrefix: string;
};

/**
 * Segmented control — the web equivalent of a UISegmentedControl, implemented
 * as an ARIA tablist.
 *
 * Two details matter for parity with the native control:
 *   - Arrow keys move between segments and Home/End jump to the ends, with only
 *     the selected segment in the tab order. A row of six buttons that each
 *     take a separate Tab stop is the usual web mistake.
 *   - The selected segment is distinguished by fill, elevation and font weight
 *     as well as colour, so the state survives greyscale and colour-blind
 *     viewing (HIG — Accessibility: don't rely on colour alone).
 */
export default function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
  idPrefix,
}: SegmentedProps<T>) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const move = (nextIndex: number) => {
    const clamped = (nextIndex + options.length) % options.length;
    onChange(options[clamped].value);
    refs.current[clamped]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        move(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        move(index - 1);
        break;
      case "Home":
        event.preventDefault();
        move(0);
        break;
      case "End":
        event.preventDefault();
        move(options.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div role="tablist" aria-label={label} className="segmented">
      {options.map((option, index) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${option.value}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel-${option.value}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className="segmented__item"
          >
            {option.label}
            {typeof option.count === "number" ? (
              <span className="segmented__count" aria-hidden="true">
                {option.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
