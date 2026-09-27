"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  /** Visible dialog title. Also becomes the dialog's accessible name. */
  title: string;
  /** Optional small label shown above the title. */
  eyebrow?: string;
  /** Footer actions — links out, downloads, and so on. */
  footer?: React.ReactNode;
  wide?: boolean;
  children: React.ReactNode;
};

/**
 * Accessible modal dialog.
 *
 * Modality is used sparingly on this site — only for project and certificate
 * detail, where the reader is inspecting one item and expects to come straight
 * back. HIG (Modality) asks for an obvious way out, so there are three:
 * the close button, the Escape key, and clicking the dimmed background.
 *
 * It also does the four things a hand-rolled overlay almost always misses:
 *   1. Renders in a portal at the end of <body> so no ancestor's transform,
 *      overflow or z-index can clip it.
 *   2. Traps Tab within the dialog while it is open, and returns focus to the
 *      element that opened it on close.
 *   3. Locks background scrolling without the page jumping sideways.
 *   4. Marks itself role="dialog" aria-modal="true" with aria-labelledby, so
 *      screen readers announce it as a dialog with a name.
 */
export default function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  footer,
  wide = false,
  children,
}: DialogProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  const focusables = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return [] as HTMLElement[];
    return Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => el.offsetParent !== null || el === document.activeElement);
  }, []);

  // Remember the trigger, move focus into the dialog, restore it on close.
  useEffect(() => {
    if (!open) return;
    restoreFocusTo.current = document.activeElement as HTMLElement | null;

    const first = focusables()[0] ?? panelRef.current;
    first?.focus({ preventScroll: true });

    return () => {
      restoreFocusTo.current?.focus?.({ preventScroll: true });
    };
  }, [open, focusables]);

  // Escape to dismiss; Tab cycles inside the dialog only.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !panelRef.current?.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, focusables]);

  // Lock background scroll, compensating for the scrollbar so the page behind
  // does not shift horizontally as the dialog opens.
  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const gutter = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (gutter > 0) body.style.paddingRight = `${gutter}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="dialog-scrim"
      /* Dismiss on background click only — never on a click that started
         inside the panel and drifted out. */
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={wide ? "dialog dialog--wide" : "dialog"}
      >
        <header className="dialog__header">
          <div>
            {eyebrow ? <p className="meta dialog__eyebrow">{eyebrow}</p> : null}
            <h2 id={titleId} className="dialog__title">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="icon-btn icon-btn--bordered dialog__close"
            aria-label="Close dialog"
          >
            <X aria-hidden="true" />
          </button>
        </header>

        <div className="dialog__body">{children}</div>

        {footer ? <footer className="dialog__footer">{footer}</footer> : null}
      </div>
    </div>,
    document.body,
  );
}
