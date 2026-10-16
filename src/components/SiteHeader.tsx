import Link from "next/link";
import { identity, navItems } from "@/data/site";

/**
 * Header.
 *
 * Four links, no hamburger, no scroll spy, no theme switch — and therefore no
 * JavaScript at all. Section links point at "/#section": on the home page they
 * scroll smoothly (the browser's own scroll-behavior), and from a project page
 * they return home and land on the right section.
 *
 * The bar is opaque, not translucent: no blur, no frosted panel.
 */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-header__brand" href="/">
          {identity.name}
        </Link>

        <nav aria-label="Sections">
          <ul className="site-header__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={
                    item.secondary
                      ? "site-header__link site-header__link--optional"
                      : "site-header__link"
                  }
                  href={`/${item.href}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
