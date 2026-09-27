"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const liquidbuttonVariants = cva(
  "group relative inline-flex items-center justify-center cursor-pointer whitespace-nowrap font-medium transition-all duration-200 ease-out outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:ring-1 focus-visible:ring-white/30",
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:scale-105 duration-300 transition text-primary",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
        nav:
          "bg-transparent text-[var(--label-secondary)] hover:text-[var(--label)] active:scale-[0.98] transition-colors duration-200",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 rounded-md",
        sm: "h-8 text-xs gap-1.5 px-3.5 has-[>svg]:px-4 rounded-lg",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 px-8 has-[>svg]:px-6",
        xxl: "h-14 px-10 has-[>svg]:px-8",
        icon: "size-9",
        nav: "h-[38px] px-[18px] text-[13.5px] rounded-full tracking-normal font-medium shrink-0 w-fit inline-flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xxl",
    },
  }
);

export interface LiquidButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof liquidbuttonVariants> {
  asChild?: boolean;
  isActive?: boolean;
  type?: "button" | "submit" | "reset";
}

const LiquidButton = React.forwardRef<
  any,
  LiquidButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isActive = false,
      children,
      href,
      type,
      ...props
    },
    ref
  ) => {
    const isNav = size === "nav" || variant === "nav";

    const content = (
      <>
        {isNav ? (
          /* Navigation Liquid Glass Pill:
             - Default state: opacity-0 (completely transparent, clean unboxed text)
             - Hover state: opacity-100 (subtle liquid-glass surface appears behind text)
             - Active state: opacity-100 (refined green-tinted liquid glass pill)
          */
          <div
            className={cn(
              "absolute inset-0 pointer-events-none rounded-full overflow-hidden transition-all duration-200 ease-out",
              isActive
                ? "opacity-100 scale-100"
                : "opacity-0 group-hover:opacity-100 group-hover:scale-[1.02] group-active:scale-[0.98]"
            )}
            aria-hidden="true"
          >
            {/* Layer 1: Base backdrop blur */}
            <div className="absolute inset-0 -z-20 backdrop-blur-md rounded-[inherit]" />

            {/* Layer 2: Liquid refraction distortion via SVG filter */}
            <div
              className="absolute inset-0 -z-10 rounded-[inherit]"
              style={{
                backdropFilter: 'url("#container-glass")',
                WebkitBackdropFilter: 'url("#container-glass")',
              }}
            />

            {/* Layer 3: Physical glass surface with delicate highlights */}
            {isActive ? (
              <div
                className={cn(
                  "absolute inset-0 z-0 rounded-[inherit] transition-all duration-200",
                  "bg-[rgba(32,214,107,0.08)]",
                  "border border-[rgba(32,214,107,0.28)] border-t-[rgba(32,214,107,0.48)]",
                  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.20),inset_0_0_8px_rgba(32,214,107,0.12),0_0_12px_rgba(32,214,107,0.16)]"
                )}
              />
            ) : (
              <div
                className={cn(
                  "absolute inset-0 z-0 rounded-[inherit] transition-all duration-200",
                  "bg-[rgba(255,255,255,0.04)]",
                  "border border-[rgba(255,255,255,0.08)] border-t-[rgba(255,255,255,0.18)]",
                  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),inset_0_-1px_0_0_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]"
                )}
              />
            )}
          </div>
        ) : (
          /* Standard LiquidButton for non-nav uses */
          <>
            <div
              className="absolute top-0 left-0 z-0 h-full w-full rounded-full transition-all pointer-events-none
                shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
                dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
              aria-hidden="true"
            />
            <div
              className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md pointer-events-none"
              style={{ backdropFilter: 'url("#container-glass")' }}
              aria-hidden="true"
            />
          </>
        )}

        {/* Content Layer */}
        <span
          className={cn(
            "relative z-10 flex items-center justify-center transition-colors duration-200 pointer-events-none select-none text-center",
            isNav &&
              (isActive
                ? "text-[var(--label)] font-semibold"
                : "text-[var(--label-secondary)] group-hover:text-[var(--label)]")
          )}
        >
          {children}
        </span>
      </>
    );

    const buttonClass = cn(
      liquidbuttonVariants({ variant, size, className }),
      isActive && "is-active"
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        className?: string;
        children?: React.ReactNode;
        [key: string]: unknown;
      }>;
      return React.cloneElement(
        child,
        {
          ref,
          className: cn(buttonClass, child.props.className),
          "data-slot": "button",
          "aria-current": isActive ? "true" : child.props["aria-current"],
          ...props,
        },
        content
      );
    }

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          data-slot="button"
          className={buttonClass}
          aria-current={isActive ? "true" : undefined}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type || "button"}
        data-slot="button"
        className={buttonClass}
        aria-current={isActive ? "true" : undefined}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);
LiquidButton.displayName = "LiquidButton";

function GlassFilter() {
  return (
    <svg
      className="pointer-events-none absolute -left-[9999px] -top-[9999px] h-0 w-0 opacity-0"
      aria-hidden="true"
    >
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          {/* Generate turbulent noise for distortion */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />

          {/* Blur the turbulence pattern slightly */}
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />

          {/* Displace the source graphic with the noise */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />

          {/* Apply overall blur on the final result */}
          <feGaussianBlur in="displaced" stdDeviation="3" result="finalBlur" />

          {/* Output the result */}
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export { LiquidButton, liquidbuttonVariants, GlassFilter };
