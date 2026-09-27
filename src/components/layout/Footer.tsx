import { profile } from "@/data/portfolio";

const YEAR = 2026;

/**
 * Site footer.
 *
 * Every link is a 44px-tall target, external links are marked with both an icon
 * and a screen-reader-only "opens in a new tab" note, and the bottom padding
 * clears the home indicator on devices that have one.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__note">
          © {YEAR} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
